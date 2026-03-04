import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEdit } from "../../contexts/EditContext";
import { FaCheck, FaTimes, FaEye, FaEdit } from "react-icons/fa";

/** Tailwind-styled renderers for ReactMarkdown — no color overrides, clean & consistent */
const MD_COMPONENTS = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-6 first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-ssgmce-blue mb-3 mt-5 first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4 first:mt-0">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-gray-800 mb-2 mt-3 first:mt-0">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 mb-3 leading-relaxed last:mb-0">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-1 mb-3 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => <li className="text-gray-700 leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-600">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-ssgmce-orange pl-4 italic text-gray-600 my-4 bg-orange-50 py-2 pr-3 rounded-r">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-gray-200 my-6" />,
  code: ({ inline, children }) =>
    inline ? (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
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
      <table className="min-w-full border divide-y divide-gray-200 rounded overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-ssgmce-blue text-white">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
  ),
  tr: ({ children }) => <tr className="even:bg-gray-50">{children}</tr>,
};

/** Quick-insert toolbar items */
const TOOLBAR = [
  { label: "B",       title: "Bold",           wrap: ["**", "**"], def: "bold text"   },
  { label: "I",       title: "Italic",         wrap: ["_",  "_" ], def: "italic text" },
  { label: "H2",      title: "Heading 2",      prefix: "## ",      def: "Heading"     },
  { label: "H3",      title: "Heading 3",      prefix: "### ",     def: "Sub-heading" },
  { label: "• List",  title: "Bullet list",    insert: "\n- Item 1\n- Item 2\n- Item 3\n" },
  { label: "1. List", title: "Numbered list",  insert: "\n1. Item 1\n2. Item 2\n3. Item 3\n" },
  {
    label: "Table",
    title: "Insert table",
    insert: "\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n",
  },
  { label: "---",     title: "Horizontal rule", insert: "\n---\n" },
];

const MarkdownEditor = ({
  path,
  value,
  onSave,
  placeholder = "Click to edit content…",
  className = "",
}) => {
  const { data, updateData, isEditing } = useEdit();
  const textareaRef = useRef(null);

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
  const [localEditing, setLocalEditing]   = useState(false);
  const [preview, setPreview]             = useState(false);

  useEffect(() => {
    setCurrentValue(displayValue || "");
  }, [displayValue]);

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

  const handleToolbar = useCallback(
    (btn) => {
      const el = textareaRef.current;
      const start = el ? el.selectionStart : currentValue.length;
      const end   = el ? el.selectionEnd   : currentValue.length;
      const selected = currentValue.substring(start, end);

      let insert = "";
      if (btn.insert)       insert = btn.insert;
      else if (btn.wrap)    insert = btn.wrap[0] + (selected || btn.def) + btn.wrap[1];
      else if (btn.prefix)  insert = btn.prefix + (selected || btn.def);

      const next =
        currentValue.substring(0, start) + insert + currentValue.substring(end);
      setCurrentValue(next);
      setTimeout(() => {
        if (el) {
          el.focus();
          el.setSelectionRange(start + insert.length, start + insert.length);
        }
      }, 0);
    },
    [currentValue],
  );

  /* ── View Mode ──────────────────────────────────────────────── */
  if (!isEditing) {
    return (
      <div className={className}>
        {displayValue ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
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
        className={`cursor-pointer hover:bg-blue-50 transition-colors rounded p-2 border-2 border-transparent hover:border-blue-200 min-h-[48px] ${className}`}
        title="Click to edit (Markdown supported)"
      >
        {displayValue ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
            {displayValue}
          </ReactMarkdown>
        ) : (
          <span className="text-gray-400 italic text-sm">{placeholder}</span>
        )}
      </div>
    );
  }

  /* ── Active Edit Mode ───────────────────────────────────────── */
  return (
    <div className={`relative ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-t-lg flex-wrap">
        <div className="flex gap-1 flex-wrap">
          {TOOLBAR.map((btn) => (
            <button
              key={btn.label}
              type="button"
              title={btn.title}
              onMouseDown={(e) => {
                e.preventDefault();
                handleToolbar(btn);
              }}
              className="px-2 py-1 text-xs bg-white border border-gray-300 rounded hover:bg-gray-100 active:bg-gray-200 font-mono shadow-sm transition-colors"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Preview toggle */}
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            setPreview((p) => !p);
          }}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white border border-gray-300 rounded hover:bg-gray-100 shadow-sm transition-colors font-medium"
        >
          {preview ? (
            <><FaEdit size={10} /> Edit</>
          ) : (
            <><FaEye size={10} /> Preview</>
          )}
        </button>
      </div>

      {/* Editor / Preview pane */}
      {preview ? (
        <div className="border border-t-0 border-gray-200 rounded-b-lg p-5 min-h-[240px] bg-white overflow-auto">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={MD_COMPONENTS}>
            {currentValue || "*Nothing to preview yet…*"}
          </ReactMarkdown>
        </div>
      ) : (
        <textarea
          ref={textareaRef}
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          className="w-full border border-t-0 border-gray-200 rounded-b-lg p-4 min-h-[260px] font-mono text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-y bg-white leading-relaxed"
          placeholder={`${placeholder}\n\nMarkdown supported:\n**bold**   _italic_   ## Heading\n- bullet list\n1. numbered list\n\n| Col 1 | Col 2 |\n|-------|-------|\n| A     | B     |`}
          autoFocus
          spellCheck
        />
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-2">
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
          className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-semibold text-sm shadow-md transition-colors"
        >
          <FaTimes /> Cancel
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
