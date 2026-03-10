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
const getChildrenText = (children) =>
  React.Children.toArray(children)
    .map((child) => {
      if (typeof child === "string" || typeof child === "number") {
        return String(child);
      }
      if (React.isValidElement(child)) {
        return getChildrenText(child.props?.children);
      }
      return "";
    })
    .join("")
    .trim();

const isLikelyImageUrl = (href = "") =>
  /(\.png|\.jpe?g|\.gif|\.webp|\.bmp|\.svg|\.avif)(\?.*)?$/i.test(href) ||
  /\/images\//i.test(href);

const findFirstAnchor = (node) => {
  if (!React.isValidElement(node)) return null;
  if (typeof node.props?.href === "string") return node;

  const children = React.Children.toArray(node.props?.children);
  for (const child of children) {
    const anchor = findFirstAnchor(child);
    if (anchor) return anchor;
  }
  return null;
};

const extractLinkFromListItem = (listItemNode) => {
  const anchor = findFirstAnchor(listItemNode);
  if (!anchor) return null;
  return {
    href: anchor.props.href,
    label: getChildrenText(anchor.props.children),
  };
};

const parseFacilityGridMarkdown = (markdownText = "") => {
  if (typeof markdownText !== "string" || !markdownText.trim()) return null;

  const hasFacilitySignals =
    /\[View Detailed Report\]\(([^)]+)\)/i.test(markdownText) &&
    /\[Reference Image\]\(([^)]+)\)/i.test(markdownText) &&
    /^\s*###\s+/m.test(markdownText);

  if (!hasFacilitySignals) return null;

  const firstHeadingMatch = markdownText.match(/^\s*###\s+/m);
  if (!firstHeadingMatch || firstHeadingMatch.index === undefined) return null;

  const intro = markdownText.slice(0, firstHeadingMatch.index).trim();
  const facilityPart = markdownText.slice(firstHeadingMatch.index);
  const facilityRegex = /###\s+([^\n]+)\n([\s\S]*?)(?=(?:\n###\s+)|$)/g;

  const facilities = [];
  let match;

  while ((match = facilityRegex.exec(facilityPart)) !== null) {
    const title = (match[1] || "").trim();
    const body = (match[2] || "").trim();
    const departmentMatch = body.match(/\*\*Department:\*\*\s*([^\n]+)/i);
    const reportMatch = body.match(/\[View Detailed Report\]\(([^)]+)\)/i);
    const imageMatch = body.match(/\[Reference Image\]\(([^)]+)\)/i);

    if (!title || !reportMatch || !imageMatch || !isLikelyImageUrl(imageMatch[1])) {
      continue;
    }

    const description = body
      .replace(/\*\*Department:\*\*\s*[^\n]+\n?/i, "")
      .replace(/-\s*\[View Detailed Report\]\([^)]+\)\s*\n?/i, "")
      .replace(/-\s*\[Reference Image\]\([^)]+\)\s*\n?/i, "")
      .trim();

    facilities.push({
      title,
      department: departmentMatch ? departmentMatch[1].trim() : "",
      description,
      reportUrl: reportMatch[1].trim(),
      imageUrl: imageMatch[1].trim(),
    });
  }

  if (facilities.length < 2) return null;
  return { intro, facilities };
};

const parseResearchScholarMarkdown = (markdownText = "") => {
  if (typeof markdownText !== "string" || !markdownText.trim()) return null;

  const itemRegex =
    /(?:^|\n)\s*(\d+)\.\s+\*\*([^\n*]+)\*\*\s*\n([\s\S]*?)(?=\n\s*\d+\.\s+\*\*|$)/g;

  const scholars = [];
  let match;

  while ((match = itemRegex.exec(markdownText)) !== null) {
    const serial = (match[1] || "").trim();
    const name = (match[2] || "").trim();
    const body = (match[3] || "").trim();

    if (!name || !body) continue;

    const fields = [];
    const fieldRegex = /^\s*-\s*([^:\n]+):\s*(.+)\s*$/gm;
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(body)) !== null) {
      fields.push({
        label: fieldMatch[1].trim(),
        value: fieldMatch[2].trim(),
      });
    }

    if (!fields.length) continue;

    const labels = fields.map((field) => field.label.toLowerCase());
    const isScholarPattern =
      labels.some((label) => label.includes("registration")) &&
      labels.some((label) => label.includes("research topic")) &&
      labels.some((label) => label.includes("status"));

    if (!isScholarPattern) continue;

    scholars.push({ serial, name, fields });
  }

  if (scholars.length < 1) return null;
  return scholars;
};

const getScholarStatusClass = (statusValue = "") => {
  const status = statusValue.toLowerCase();
  if (status.includes("completed")) {
    return "bg-green-50 text-green-700 border-green-200";
  }
  if (status.includes("thesis submitted")) {
    return "bg-amber-50 text-amber-700 border-amber-200";
  }
  return "bg-blue-50 text-blue-700 border-blue-200";
};

const extractMarkdownLinks = (text = "") => {
  const links = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    links.push({
      label: (match[1] || "").trim(),
      href: (match[2] || "").trim(),
    });
  }

  return links;
};

const parseDepartmentPageLink = (markdownText = "") => {
  const pattern =
    /^\s*\*\*Department Page:\*\*\s*\[([^\]]+)\]\(([^)]+)\)\s*(?:\n|$)/i;
  const match = markdownText.match(pattern);

  if (!match) {
    return {
      departmentLink: null,
      content: markdownText,
    };
  }

  const content = markdownText.slice(match[0].length).replace(/^\s+/, "");
  return {
    departmentLink: {
      label: match[1].trim(),
      href: match[2].trim(),
    },
    content,
  };
};

const splitByH2Sections = (markdownText = "") => {
  const headingRegex = /^##\s+(.+)$/gm;
  const matches = Array.from(markdownText.matchAll(headingRegex));

  if (!matches.length) return null;

  const sections = [];
  for (let i = 0; i < matches.length; i += 1) {
    const current = matches[i];
    const start = current.index + current[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : markdownText.length;
    sections.push({
      title: (current[1] || "").trim(),
      content: markdownText.slice(start, end).trim(),
    });
  }

  return {
    intro: markdownText.slice(0, matches[0].index).trim(),
    sections,
  };
};

const parseNumberedEntries = (markdownText = "") => {
  const itemRegex = /(?:^|\n)\s*(\d+)\.\s+([^\n]+)\n?([\s\S]*?)(?=(?:\n\s*\d+\.\s+[^\n]+)|$)/g;
  const entries = [];
  let match;

  while ((match = itemRegex.exec(markdownText)) !== null) {
    const serial = (match[1] || "").trim();
    let title = (match[2] || "").trim();
    const body = (match[3] || "").trim();

    const boldTitle = title.match(/^\*\*(.+)\*\*$/);
    if (boldTitle) {
      title = boldTitle[1].trim();
    }

    const fields = [];
    const fieldRegex = /^\s*-\s*([^:\n]+):\s*(.+)\s*$/gm;
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(body)) !== null) {
      fields.push({
        label: fieldMatch[1].trim(),
        value: fieldMatch[2].trim(),
      });
    }

    const freeText = body
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !/^-+\s*[^:\n]+:\s*.+$/.test(line));

    entries.push({
      serial,
      title,
      fields,
      freeText,
    });
  }

  return entries.length ? entries : null;
};

const parseDocumentCardItems = (markdownText = "") => {
  const bulletLines = (markdownText.match(/^\s*-\s+.+$/gm) || []).map((line) =>
    line.trim(),
  );

  if (bulletLines.length < 2) return null;

  const items = [];
  for (const line of bulletLines) {
    const body = line.replace(/^\s*-\s+/, "").trim();
    const links = extractMarkdownLinks(body);
    if (!links.length) return null;

    const boldTitle = body.match(/\*\*([^*]+)\*\*/);
    const primaryLink = links[links.length - 1];
    const title = (boldTitle ? boldTitle[1] : primaryLink.label).trim();
    const description = body
      .replace(/\*\*[^*]+\*\*:?\s*/g, "")
      .replace(/\[[^\]]+\]\([^)]+\)/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/^[\s:-]+|[\s:-]+$/g, "")
      .trim();

    items.push({
      title,
      description,
      linkLabel: primaryLink.label || "View document",
      href: primaryLink.href,
    });
  }

  if (items.length !== bulletLines.length) return null;
  return items;
};

const getMetaChipClass = (label = "", value = "") => {
  const labelLower = label.toLowerCase();
  if (labelLower.includes("status")) {
    return getScholarStatusClass(value);
  }
  if (labelLower.includes("date") || labelLower.includes("w.e.f")) {
    return "bg-gray-50 text-gray-700 border-gray-200";
  }
  if (labelLower.includes("type")) {
    return "bg-blue-50 text-blue-700 border-blue-200";
  }
  if (labelLower.includes("indexing")) {
    return "bg-cyan-50 text-cyan-700 border-cyan-200";
  }
  return "bg-slate-50 text-slate-700 border-slate-200";
};

const DepartmentLinkCard = ({ link }) => {
  if (!link) return null;
  return (
    <div className="mb-4 rounded-lg border border-blue-100 bg-blue-50/50 px-3 py-2">
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-ssgmce-blue hover:text-blue-800 transition-colors"
      >
        {link.label}
      </a>
    </div>
  );
};

const DocumentCards = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {items.map((item, idx) => (
      <article
        key={`${item.title}-${idx}`}
        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        <h4 className="text-base font-semibold text-gray-900 leading-snug">
          {item.title}
        </h4>
        {item.description ? (
          <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.description}</p>
        ) : null}
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center rounded-md bg-ssgmce-blue px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition-colors"
        >
          {item.linkLabel}
        </a>
      </article>
    ))}
  </div>
);

const StructuredRecordCards = ({ entries }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
    {entries.map((entry, idx) => {
      const metaFields = entry.fields.filter((field) =>
        /status|date|w\.e\.f|type|indexing/i.test(field.label),
      );
      const detailFields = entry.fields.filter(
        (field) => !/status|date|w\.e\.f|type|indexing/i.test(field.label),
      );

      return (
        <article
          key={`${entry.serial}-${entry.title}-${idx}`}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <h4 className="text-base font-semibold text-gray-900 leading-snug">
            {entry.serial ? `${entry.serial}. ` : ""}
            {entry.title}
          </h4>

          {metaFields.length ? (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {metaFields.map((field, fieldIdx) => (
                <span
                  key={`${entry.title}-${field.label}-${fieldIdx}`}
                  className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium ${getMetaChipClass(field.label, field.value)}`}
                >
                  {field.value}
                </span>
              ))}
            </div>
          ) : null}

          {detailFields.length ? (
            <dl className="mt-3 space-y-2">
              {detailFields.map((field, fieldIdx) => (
                <div
                  key={`${entry.title}-${field.label}-${fieldIdx}-detail`}
                  className="border-t border-gray-100 pt-2 first:border-t-0 first:pt-0"
                >
                  <dt className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    {field.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-gray-700 leading-relaxed">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {entry.freeText.length ? (
            <ul className="mt-3 space-y-1">
              {entry.freeText.map((line, lineIdx) => (
                <li
                  key={`${entry.title}-line-${lineIdx}`}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      );
    })}
  </div>
);

const PlainNumberedGrid = ({ entries }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
      {entries.map((entry, idx) => (
        <div key={`${entry.serial}-${idx}`} className="flex items-start gap-2">
          <span className="min-w-[1.5rem] text-sm font-semibold text-gray-400">
            {entry.serial}.
          </span>
          <p className="text-sm text-gray-700 leading-relaxed">{entry.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const FacilityGridLayout = ({ markdownText }) => {
  const renderMarkdown = (content) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={MD_COMPONENTS}
    >
      {content}
    </ReactMarkdown>
  );

  const facilityParsed = parseFacilityGridMarkdown(markdownText);
  if (facilityParsed) {
    return (
      <div className="space-y-5">
        {facilityParsed.intro ? renderMarkdown(facilityParsed.intro) : null}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {facilityParsed.facilities.map((facility, idx) => (
            <article
              key={`${facility.title}-${idx}`}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {facility.title}
              </h3>

              {facility.department ? (
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Department:</span>{" "}
                  {facility.department}
                </p>
              ) : null}

              {facility.description ? renderMarkdown(facility.description) : null}

              <div className="mt-3 flex flex-col items-start gap-2.5">
                <a
                  href={facility.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-ssgmce-blue text-white font-medium hover:bg-blue-800 transition-colors w-fit"
                >
                  Download Detailed Report
                </a>

                <a
                  href={facility.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full max-w-[200px]"
                >
                  <img
                    src={facility.imageUrl}
                    alt={`${facility.title} reference`}
                    loading="lazy"
                    className="w-full h-28 object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  const scholarParsed = parseResearchScholarMarkdown(markdownText);
  if (scholarParsed) {
    const scholarEntries = scholarParsed.map((scholar) => ({
      serial: scholar.serial,
      title: scholar.name,
      fields: scholar.fields,
      freeText: [],
    }));

    return <StructuredRecordCards entries={scholarEntries} />;
  }

  const { departmentLink, content } = parseDepartmentPageLink(markdownText);
  const sectioned = splitByH2Sections(content);

  if (sectioned) {
    const classifiedSections = sectioned.sections.map((section) => {
      const docs = parseDocumentCardItems(section.content);
      if (docs) return { ...section, kind: "docs", docs };

      const entries = parseNumberedEntries(section.content);
      if (entries && entries.some((entry) => entry.fields.length > 0)) {
        return { ...section, kind: "structured", entries };
      }

      const isYearSection = /^\d{4}-\d{2}$/.test(section.title);
      if (
        entries &&
        isYearSection &&
        entries.every((entry) => entry.fields.length === 0 && !entry.freeText.length)
      ) {
        return { ...section, kind: "plain-numbered", entries };
      }

      return { ...section, kind: "markdown" };
    });

    const hasCustomSection = classifiedSections.some(
      (section) => section.kind !== "markdown",
    );

    if (hasCustomSection) {
      return (
        <div className="space-y-5">
          <DepartmentLinkCard link={departmentLink} />

          {sectioned.intro ? renderMarkdown(sectioned.intro) : null}

          {classifiedSections.map((section, idx) => (
            <section key={`${section.title}-${idx}`} className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-ssgmce-blue border-b border-gray-200 pb-1">
                  {section.title}
                </h3>
                {section.kind === "plain-numbered" ? (
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-full px-2.5 py-1">
                    {section.entries.length} items
                  </span>
                ) : null}
              </div>

              {section.kind === "docs" ? <DocumentCards items={section.docs} /> : null}
              {section.kind === "structured" ? (
                <StructuredRecordCards entries={section.entries} />
              ) : null}
              {section.kind === "plain-numbered" ? (
                <PlainNumberedGrid entries={section.entries} />
              ) : null}
              {section.kind === "markdown" ? renderMarkdown(section.content) : null}
            </section>
          ))}
        </div>
      );
    }
  }

  const docsOnly = parseDocumentCardItems(content);
  if (docsOnly) {
    return (
      <div className="space-y-4">
        <DepartmentLinkCard link={departmentLink} />
        <DocumentCards items={docsOnly} />
      </div>
    );
  }

  const entriesOnly = parseNumberedEntries(content);
  if (entriesOnly && entriesOnly.some((entry) => entry.fields.length > 0)) {
    return (
      <div className="space-y-4">
        <DepartmentLinkCard link={departmentLink} />
        <StructuredRecordCards entries={entriesOnly} />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <DepartmentLinkCard link={departmentLink} />
      {renderMarkdown(content)}
    </div>
  );
};

const MD_COMPONENTS = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-gray-900 mb-4 mt-6 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-ssgmce-blue mb-3 mt-5 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4 first:mt-0">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-gray-800 mb-2 mt-3 first:mt-0">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 mb-3 leading-relaxed last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => {
    const rawItems = React.Children.toArray(children).filter((child) =>
      React.isValidElement(child),
    );
    const links = rawItems.map(extractLinkFromListItem).filter(Boolean);
    const reportLink = links.find((item) =>
      /view detailed report|detailed report/i.test(item.label),
    );
    const imageLink = links.find(
      (item) =>
        /reference image/i.test(item.label) && isLikelyImageUrl(item.href),
    );

    if (rawItems.length === 2 && reportLink && imageLink) {
      return (
        <div className="my-3 flex flex-col items-start gap-2.5">
          <a
            href={reportLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-ssgmce-blue text-white font-medium hover:bg-blue-800 transition-colors w-fit"
          >
            Download Detailed Report
          </a>

          <a
            href={imageLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-[200px]"
          >
            <img
              src={imageLink.href}
              alt={imageLink.label || "Reference image"}
              loading="lazy"
              className="w-full h-28 object-cover rounded-lg border border-gray-200 shadow-sm"
            />
          </a>
        </div>
      );
    }

    return (
      <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700">
        {children}
      </ul>
    );
  },
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-1 mb-3 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-700 leading-relaxed">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">
      {children}
    </strong>
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
    <tbody className="divide-y divide-gray-200 bg-white">
      {children}
    </tbody>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-gray-700">
      {children}
    </td>
  ),
  tr: ({ children }) => <tr className="even:bg-gray-50">{children}</tr>,
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      className="max-w-full h-auto rounded-lg my-3 shadow-sm border border-gray-200 dark:border-gray-700"
      loading="lazy"
    />
  ),
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
          <FacilityGridLayout markdownText={displayValue} />
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
          <FacilityGridLayout markdownText={displayValue} />
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
          <FacilityGridLayout
            markdownText={currentValue || "*Nothing to preview yet…*"}
          />
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
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 font-semibold text-sm shadow-md transition-colors"
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
