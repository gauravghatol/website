import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { useEdit } from "../../contexts/EditContext";
import {
  FaCheck,
  FaTimes,
  FaEye,
  FaEdit,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaHeading,
  FaListUl,
  FaListOl,
  FaCheckSquare,
  FaTable,
  FaColumns,
  FaMinus,
  FaLink,
  FaImage,
  FaFileUpload,
  FaQuoteRight,
  FaCode,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

/** Tailwind-styled renderers for ReactMarkdown — no color overrides, clean & consistent */
const MD_COMPONENTS = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-ssgmce-blue mb-3 mt-5 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 mt-4 first:mt-0">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 mt-3 first:mt-0">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700 dark:text-gray-300">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-1 mb-3 text-gray-700 dark:text-gray-300">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-600 dark:text-gray-400">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-ssgmce-orange pl-4 italic text-gray-600 dark:text-gray-400 my-4 bg-orange-50 dark:bg-orange-900/30 py-2 pr-3 rounded-r">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-gray-200 dark:border-gray-700 my-6" />,
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
        {children}
      </code>
    ) : (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-3 text-sm font-mono">
        <code>{children}</code>
      </pre>
    ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-ssgmce-blue underline hover:text-ssgmce-orange transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full border divide-y divide-gray-200 dark:divide-gray-700 rounded overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-ssgmce-blue text-white">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-[#1a1a2e]">
      {children}
    </tbody>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
      {children}
    </td>
  ),
  tr: ({ children }) => <tr className="even:bg-gray-50">{children}</tr>,
  // Support raw HTML for column layouts
  div: ({ className, children, ...props }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
};

/* ── Toolbar group separator ──────────────────────────────────── */
const Sep = () => <div className="w-px h-5 bg-gray-300 mx-0.5" />;

/* ── Single toolbar button ────────────────────────────────────── */
const TBtn = ({
  icon: Icon,
  label,
  title,
  onClick,
  accent,
  disabled,
  uploading,
}) => (
  <button
    type="button"
    title={title}
    disabled={disabled}
    onMouseDown={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`
      inline-flex items-center gap-1 px-2 py-1.5 text-xs rounded transition-colors shadow-sm
      ${disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 cursor-pointer"}
      ${accent ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-100" : "bg-white dark:bg-[#1a1a2e] border border-gray-300 dark:border-gray-600"}
    `}
  >
    {uploading ? (
      <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    ) : Icon ? (
      <Icon size={11} />
    ) : null}
    {label && <span className="font-medium">{label}</span>}
  </button>
);

const MarkdownEditor = ({
  path,
  value,
  onSave,
  placeholder = "Click to edit content…",
  className = "",
}) => {
  const { data, updateData, isEditing } = useEdit();
  const textareaRef = useRef(null);
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const getValueFromPath = (obj, p) => {
    if (!p || !obj) return undefined;
    return p
      .replace(/\[(\d+)\]/g, ".$1")
      .split(".")
      .reduce((acc, part) => acc && acc[part], obj);
  };

  const displayValue =
    value !== undefined ? value : path ? getValueFromPath(data, path) : "";

  const [currentValue, setCurrentValue] = useState(displayValue || "");
  const [localEditing, setLocalEditing] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setCurrentValue(displayValue || "");
  }, [displayValue]);

  /** Push current value to undo stack before a change */
  const pushUndo = useCallback(() => {
    setUndoStack((prev) => [...prev.slice(-30), currentValue]);
    setRedoStack([]);
  }, [currentValue]);

  const handleUndo = useCallback(() => {
    if (undoStack.length === 0) return;
    const prev = undoStack[undoStack.length - 1];
    setRedoStack((r) => [...r, currentValue]);
    setUndoStack((u) => u.slice(0, -1));
    setCurrentValue(prev);
  }, [undoStack, currentValue]);

  const handleRedo = useCallback(() => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((u) => [...u, currentValue]);
    setRedoStack((r) => r.slice(0, -1));
    setCurrentValue(next);
  }, [redoStack, currentValue]);

  const handleSave = () => {
    if (onSave) onSave(currentValue);
    else if (path) updateData(path, currentValue);
    setLocalEditing(false);
    setPreview(false);
  };

  const handleCancel = () => {
    setCurrentValue(displayValue || "");
    setLocalEditing(false);
    setPreview(false);
  };

  /** Insert text at cursor, replacing any selection */
  const insertAtCursor = useCallback(
    (text) => {
      pushUndo();
      const el = textareaRef.current;
      const start = el ? el.selectionStart : currentValue.length;
      const end = el ? el.selectionEnd : currentValue.length;
      const next =
        currentValue.substring(0, start) + text + currentValue.substring(end);
      setCurrentValue(next);
      setTimeout(() => {
        if (el) {
          el.focus();
          const pos = start + text.length;
          el.setSelectionRange(pos, pos);
        }
      }, 0);
    },
    [currentValue, pushUndo],
  );

  /** Wrap selection (or default text) with prefix/suffix */
  const wrapSelection = useCallback(
    (before, after, defaultText = "") => {
      pushUndo();
      const el = textareaRef.current;
      const start = el ? el.selectionStart : currentValue.length;
      const end = el ? el.selectionEnd : currentValue.length;
      const selected = currentValue.substring(start, end) || defaultText;
      const replacement = before + selected + after;
      const next =
        currentValue.substring(0, start) +
        replacement +
        currentValue.substring(end);
      setCurrentValue(next);
      setTimeout(() => {
        if (el) {
          el.focus();
          // Select the text inside the wrapping
          el.setSelectionRange(
            start + before.length,
            start + before.length + selected.length,
          );
        }
      }, 0);
    },
    [currentValue, pushUndo],
  );

  /** Prefix each line of selection */
  const prefixLines = useCallback(
    (prefix, defaultText = "") => {
      pushUndo();
      const el = textareaRef.current;
      const start = el ? el.selectionStart : currentValue.length;
      const end = el ? el.selectionEnd : currentValue.length;
      const selected = currentValue.substring(start, end) || defaultText;
      const prefixed = selected
        .split("\n")
        .map((line) => prefix + line)
        .join("\n");
      const next =
        currentValue.substring(0, start) +
        prefixed +
        currentValue.substring(end);
      setCurrentValue(next);
      setTimeout(() => {
        if (el) {
          el.focus();
          el.setSelectionRange(start, start + prefixed.length);
        }
      }, 0);
    },
    [currentValue, pushUndo],
  );

  /* ── Upload handlers ────────────────────────────────────────── */
  const handleImageUpload = async (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      const token = localStorage.getItem("adminToken");
      const res = await axios.post("/api/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const url = res.data.fileUrl || res.data.url;
      if (url) insertAtCursor(`\n![${file.name}](${url})\n`);
    } catch (err) {
      console.error("Image upload failed:", err);
      alert(
        "Image upload failed: " + (err.response?.data?.message || err.message),
      );
    } finally {
      setUploadingImage(false);
    }
  };

  const handleFileUpload = async (file) => {
    if (!file) return;
    setUploadingFile(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const token = localStorage.getItem("adminToken");
      const res = await axios.post("/api/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      const url = res.data.fileUrl || res.data.url;
      const name = res.data.originalName || file.name;
      if (url) insertAtCursor(`\n[📄 ${name}](${url})\n`);
    } catch (err) {
      console.error("File upload failed:", err);
      alert(
        "File upload failed: " + (err.response?.data?.message || err.message),
      );
    } finally {
      setUploadingFile(false);
    }
  };

  /* ── Keyboard shortcuts ─────────────────────────────────────── */
  const handleKeyDown = useCallback(
    (e) => {
      const mod = e.ctrlKey || e.metaKey;
      if (mod && e.key === "b") {
        e.preventDefault();
        wrapSelection("**", "**", "bold text");
      } else if (mod && e.key === "i") {
        e.preventDefault();
        wrapSelection("_", "_", "italic");
      } else if (mod && e.key === "k") {
        e.preventDefault();
        wrapSelection("[", "](url)", "link text");
      } else if (mod && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (mod && (e.key === "y" || (e.key === "z" && e.shiftKey))) {
        e.preventDefault();
        handleRedo();
      }
    },
    [wrapSelection, handleUndo, handleRedo],
  );

  /* ── View Mode ──────────────────────────────────────────────── */
  if (!isEditing) {
    return (
      <div className={className}>
        {displayValue ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={MD_COMPONENTS}
          >
            {displayValue}
          </ReactMarkdown>
        ) : null}
      </div>
    );
  }

  /* ── Edit Trigger Mode (not actively editing) ───────────────── */
  if (!localEditing) {
    return (
      <div
        onClick={() => setLocalEditing(true)}
        className={`cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors rounded p-2 border-2 border-transparent hover:border-blue-200 min-h-[48px] ${className}`}
        title="Click to edit (Markdown supported)"
      >
        {displayValue ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={MD_COMPONENTS}
          >
            {displayValue}
          </ReactMarkdown>
        ) : (
          <span className="text-gray-400 dark:text-gray-500 italic text-sm">
            {placeholder}
          </span>
        )}
      </div>
    );
  }

  /* ── Active Edit Mode ───────────────────────────────────────── */
  return (
    <div className={`relative ${className}`}>
      {/* Hidden file inputs */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) handleImageUpload(e.target.files[0]);
          e.target.value = "";
        }}
      />
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.csv,.txt"
        className="hidden"
        onChange={(e) => {
          if (e.target.files[0]) handleFileUpload(e.target.files[0]);
          e.target.value = "";
        }}
      />

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-t-lg flex-wrap">
        {/* ── Text formatting ── */}
        <TBtn
          icon={FaBold}
          title="Bold (Ctrl+B)"
          onClick={() => wrapSelection("**", "**", "bold text")}
        />
        <TBtn
          icon={FaItalic}
          title="Italic (Ctrl+I)"
          onClick={() => wrapSelection("_", "_", "italic")}
        />
        <TBtn
          icon={FaStrikethrough}
          title="Strikethrough"
          onClick={() => wrapSelection("~~", "~~", "strikethrough")}
        />
        <TBtn
          icon={FaCode}
          title="Inline code"
          onClick={() => wrapSelection("`", "`", "code")}
        />

        <Sep />

        {/* ── Headings ── */}
        <TBtn
          icon={FaHeading}
          label="2"
          title="Heading 2"
          onClick={() => insertAtCursor("\n## Heading\n")}
        />
        <TBtn
          icon={FaHeading}
          label="3"
          title="Heading 3"
          onClick={() => insertAtCursor("\n### Sub-heading\n")}
        />

        <Sep />

        {/* ── Lists ── */}
        <TBtn
          icon={FaListUl}
          title="Bullet list"
          onClick={() => insertAtCursor("\n- Item 1\n- Item 2\n- Item 3\n")}
        />
        <TBtn
          icon={FaListOl}
          title="Numbered list"
          onClick={() => insertAtCursor("\n1. Item 1\n2. Item 2\n3. Item 3\n")}
        />
        <TBtn
          icon={FaCheckSquare}
          title="Checklist / task list"
          onClick={() =>
            insertAtCursor(
              "\n- [ ] Task 1\n- [ ] Task 2\n- [x] Completed task\n",
            )
          }
        />

        <Sep />

        {/* ── Structure ── */}
        <TBtn
          icon={FaTable}
          title="Insert table"
          onClick={() =>
            insertAtCursor(
              "\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n",
            )
          }
        />
        <TBtn
          icon={FaColumns}
          title="2-column layout"
          onClick={() =>
            insertAtCursor(
              '\n<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">\n<div>\n\n**Left Column**\n\nContent here...\n\n</div>\n<div>\n\n**Right Column**\n\nContent here...\n\n</div>\n</div>\n',
            )
          }
        />
        <TBtn
          icon={FaQuoteRight}
          title="Blockquote"
          onClick={() => prefixLines("> ", "Quote text")}
        />
        <TBtn
          icon={FaMinus}
          title="Horizontal rule"
          onClick={() => insertAtCursor("\n---\n")}
        />

        <Sep />

        {/* ── Media & Links ── */}
        <TBtn
          icon={FaLink}
          title="Insert link (Ctrl+K)"
          onClick={() => wrapSelection("[", "](https://)", "link text")}
        />
        <TBtn
          icon={FaImage}
          title="Upload image"
          uploading={uploadingImage}
          disabled={uploadingImage}
          onClick={() => imageInputRef.current?.click()}
        />
        <TBtn
          icon={FaFileUpload}
          title="Upload file (PDF, Word, etc.)"
          uploading={uploadingFile}
          disabled={uploadingFile}
          onClick={() => fileInputRef.current?.click()}
        />

        <Sep />

        {/* ── Undo / Redo ── */}
        <TBtn
          icon={FaUndo}
          title="Undo (Ctrl+Z)"
          disabled={undoStack.length === 0}
          onClick={handleUndo}
        />
        <TBtn
          icon={FaRedo}
          title="Redo (Ctrl+Y)"
          disabled={redoStack.length === 0}
          onClick={handleRedo}
        />

        {/* ── Preview toggle (push right) ── */}
        <div className="flex-1" />
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            setPreview((p) => !p);
          }}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 border rounded shadow-sm transition-colors font-medium ${
            preview
              ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
              : "bg-white dark:bg-[#1a1a2e] border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          {preview ? (
            <>
              <FaEdit size={10} /> Edit
            </>
          ) : (
            <>
              <FaEye size={10} /> Preview
            </>
          )}
        </button>
      </div>

      {/* Editor / Preview pane */}
      {preview ? (
        <div className="border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg p-5 min-h-[240px] bg-white dark:bg-[#1a1a2e] overflow-auto">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={MD_COMPONENTS}
          >
            {currentValue || "*Nothing to preview yet…*"}
          </ReactMarkdown>
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-lg p-4 min-h-[260px] font-mono text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-y bg-white dark:bg-[#1a1a2e] leading-relaxed"
          placeholder={`${placeholder}\n\nMarkdown supported:\n**bold**   _italic_   ## Heading\n- bullet list\n1. numbered list\n\n| Col 1 | Col 2 |\n|-------|-------|\n| A     | B     |`}
          autoFocus
          spellCheck
        />
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 mt-2">
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-sm shadow-md transition-colors"
        >
          <FaCheck /> Save
        </button>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            handleCancel();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800/500 text-white rounded-lg hover:bg-gray-600 font-semibold text-sm shadow-md transition-colors"
        >
          <FaTimes /> Cancel
        </button>
        {(uploadingImage || uploadingFile) && (
          <span className="text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1.5 ml-2">
            <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            Uploading…
          </span>
        )}
      </div>
    </div>
  );
};

export default MarkdownEditor;
