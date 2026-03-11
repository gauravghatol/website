const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads/images";
    // Ensure directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  // Accept images only
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Multer upload instance (images)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// --- Document / file upload ---
const documentStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads/documents";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const documentFilter = (req, file, cb) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "text/plain",
    "text/csv",
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed. Supported: PDF, Word, Excel, PowerPoint, TXT, CSV."), false);
  }
};

const documentUpload = multer({
  storage: documentStorage,
  fileFilter: documentFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB limit
  },
});

// Upload single image handler
const uploadSingleImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `/uploads/images/${req.file.filename}`;
    res.status(200).json({
      message: "File uploaded successfully",
      fileUrl: fileUrl,
      filename: req.file.filename,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "File upload failed", error: error.message });
  }
};

// Get uploaded files
const getUploadedFiles = async (req, res) => {
  try {
    const uploadDir = "./uploads/images";
    
    if (!fs.existsSync(uploadDir)) {
      return res.json({ files: [] });
    }

    const files = fs.readdirSync(uploadDir).map((file) => ({
      filename: file,
      url: `/uploads/images/${file}`,
      uploadedAt: fs.statSync(path.join(uploadDir, file)).mtime,
    }));

    res.json({ files });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ message: "Failed to fetch files", error: error.message });
  }
};

// Upload single document handler
const uploadSingleDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `/uploads/documents/${req.file.filename}`;
    res.status(200).json({
      message: "File uploaded successfully",
      fileUrl: fileUrl,
      filename: req.file.filename,
      originalName: req.file.originalname,
    });
  } catch (error) {
    console.error("Document upload error:", error);
    res.status(500).json({ message: "File upload failed", error: error.message });
  }
};

// Delete file
const deleteFile = async (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join("./uploads/images", filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    fs.unlinkSync(filePath);
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ message: "Failed to delete file", error: error.message });
  }
};

module.exports = {
  upload,
  uploadSingleImage,
  documentUpload,
  uploadSingleDocument,
  getUploadedFiles,
  deleteFile,
};
