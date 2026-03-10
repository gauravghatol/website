const multer = require("multer");
const path = require("path");
const fs = require("fs");
const os = require("os");

// --- Multer: store temp file in OS temp dir, never keep it ---
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, os.tmpdir()),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(
      null,
      `doc-import-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`,
    );
  },
});

const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = new Set([".pdf", ".docx"]);

const fileFilter = (_req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ALLOWED_MIME.has(file.mimetype) && ALLOWED_EXT.has(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF and DOCX files are supported."), false);
  }
};

const docUpload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

// --- PDF text → Markdown heuristics ---
function pdfTextToMarkdown(rawText) {
  // Split on form-feeds (page breaks) and then on multiple blank lines
  const pages = rawText.split(/\f/);
  const lines = pages
    .join("\n\n---\n\n") // page separator
    .split("\n")
    .map((l) => l.trimEnd());

  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();

    // Blank line → paragraph separator
    if (!line) {
      if (out.length && out[out.length - 1] !== "") out.push("");
      i++;
      continue;
    }

    // ALL-CAPS short line → H2 heading
    if (
      line === line.toUpperCase() &&
      line.length >= 3 &&
      line.length <= 80 &&
      /[A-Z]/.test(line)
    ) {
      if (out.length && out[out.length - 1] !== "") out.push("");
      out.push(`## ${toTitleCase(line)}`);
      out.push("");
      i++;
      continue;
    }

    // Short title-case line (≤60 chars, ends with no period/comma) → H3 heading
    if (
      line.length <= 60 &&
      !/[.,;:?!]$/.test(line) &&
      /^[A-Z]/.test(line) &&
      !line.startsWith("-") &&
      !line.startsWith("•") &&
      !line.startsWith("*") &&
      !line.match(/^\d+\./)
    ) {
      // Only promote to heading if the next non-empty line is longer (it's a body paragraph)
      const next = lines.slice(i + 1).find((l) => l.trim());
      if (next && next.trim().length > line.length) {
        if (out.length && out[out.length - 1] !== "") out.push("");
        out.push(`### ${line}`);
        out.push("");
        i++;
        continue;
      }
    }

    // Bullet lines
    if (/^[•●■▪◦\-\*]\s/.test(line)) {
      out.push(`- ${line.replace(/^[•●■▪◦\-\*]\s+/, "")}`);
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+[\.\)]\s/.test(line)) {
      out.push(line.replace(/^(\d+)[\.\)]\s+/, "$1. "));
      i++;
      continue;
    }

    // Regular paragraph text
    out.push(line);
    i++;
  }

  // Collapse 3+ blank lines to exactly 2
  const collapsed = out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return collapsed;
}

function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

// --- Controller ---
const convertDocument = async (req, res) => {
  const tmpPath = req.file?.path;

  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded." });
    }

    const ext = path.extname(req.file.originalname).toLowerCase();
    let markdown = "";
    let method = "";

    if (ext === ".pdf") {
      const { PDFParse } = require("pdf-parse");
      const buffer = fs.readFileSync(tmpPath);
      const parser = new PDFParse({ data: buffer });
      const result = await parser.getText();
      markdown = pdfTextToMarkdown(result.text);
      method = "pdf-parse";
    } else if (ext === ".docx") {
      const mammoth = require("mammoth");
      const TurndownService = require("turndown");
      const { gfm } = require("turndown-plugin-gfm");
      const imagesDir = path.join(__dirname, "..", "uploads", "images");

      // Ensure the images directory exists
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
      }

      const extractedImageUrls = [];

      // Step 1: convert DOCX → HTML (mammoth handles tables and images properly in HTML mode)
      const htmlResult = await mammoth.convertToHtml(
        { path: tmpPath },
        {
          convertImage: mammoth.images.imgElement(async (image) => {
            const imgBuffer = await image.read();
            const imgExt = image.contentType
              ? "." + image.contentType.split("/")[1].replace("jpeg", "jpg")
              : ".png";
            // Sanitize extension to only known safe image types
            const safeExt = [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(
              imgExt,
            )
              ? imgExt
              : ".png";
            const filename = `docimg-${Date.now()}-${Math.round(Math.random() * 1e6)}${safeExt}`;
            const destPath = path.join(imagesDir, filename);
            fs.writeFileSync(destPath, imgBuffer);
            const url = `/uploads/images/${filename}`;
            extractedImageUrls.push(url);
            return { src: url };
          }),
        },
      );

      // Step 2: convert HTML → GFM markdown (preserves tables as | col | col | syntax)
      const td = new TurndownService({
        headingStyle: "atx",
        bulletListMarker: "-",
        codeBlockStyle: "fenced",
      });
      td.use(gfm); // enables GFM tables, strikethrough, task lists
      markdown = td.turndown(htmlResult.value || "").trim();
      method = "mammoth+turndown";

      if (extractedImageUrls.length > 0) {
        console.log(
          `[convertController] Extracted ${extractedImageUrls.length} image(s) from DOCX`,
        );
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Unsupported file type." });
    }

    // Count words in extracted text
    const wordCount = markdown.split(/\s+/).filter(Boolean).length;

    res.json({
      success: true,
      markdown,
      wordCount,
      filename: req.file.originalname,
      method,
    });
  } catch (err) {
    console.error("[convertController] Error:", err);
    res.status(500).json({
      success: false,
      message: "Document conversion failed: " + err.message,
    });
  } finally {
    // Always delete the temp file
    if (tmpPath) {
      try {
        fs.unlinkSync(tmpPath);
      } catch (_) {}
    }
  }
};

module.exports = { docUpload, convertDocument };
