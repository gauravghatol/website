import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import GenericPage from "./GenericPage";
import PlacementSidebar from "./PlacementSidebar";
import IQACSidebar from "./IQACSidebar";
import AdmissionsSidebar from "./AdmissionsSidebar";
import FacilitiesSidebar from "./FacilitiesSidebar";
import ResearchSidebar from "./ResearchSidebar";
import LibrarySidebar from "./LibrarySidebar";
import HostelSidebar from "./HostelSidebar";
import SportsSidebar from "./SportsSidebar";
import DocumentsSidebar from "./DocumentsSidebar";
import AcademicsSidebar from "./AcademicsSidebar";
import EditableText from "./admin/EditableText";
import EditableImage from "./admin/EditableImage";
import EditableSection from "./admin/EditableSection";
import MarkdownEditor from "./admin/MarkdownEditor";
import { useEdit } from "../contexts/EditContext";

// Map pageId prefixes to their sidebar components
const SIDEBAR_MAP = {
  "academics-": AcademicsSidebar,
  "placements-": PlacementSidebar,
  "iqac-": IQACSidebar,
  "admissions-": AdmissionsSidebar,
  "facilities-library-": LibrarySidebar,
  "facilities-hostel-": HostelSidebar,
  "facilities-sports-": SportsSidebar,
  "facilities-": FacilitiesSidebar,
  "research-": ResearchSidebar,
  "documents-": DocumentsSidebar,
};

/* ─── IQAC Accordion helper ─── */
const IQACAccordion = ({
  items,
  defaultOpen,
  renderHeader,
  renderContent,
  getKey,
}) => {
  const [expanded, setExpanded] = useState(defaultOpen);
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const key = getKey(item);
        const isOpen = expanded === key;
        return (
          <div
            key={key}
            className="border border-gray-100 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setExpanded(isOpen ? null : key)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${isOpen ? "bg-ssgmce-blue/5" : "hover:bg-gray-50"}`}
            >
              {renderHeader(item, isOpen)}
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-3 pt-1">{renderContent(item)}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

/* ─── Video Gallery helper ─── */
const VideoGallery = ({ videos, channelUrl }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState(null);
  const categories = [...new Set(videos.map((v) => v.category))];
  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-ssgmce-blue text-white"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Video Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((video) => (
          <div
            key={video.youtubeId}
            className="border border-gray-100 rounded-lg overflow-hidden group"
          >
            <div className="relative aspect-video bg-gray-100">
              {playingId === video.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlayingId(video.youtubeId)}
                  className="absolute inset-0 w-full h-full cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-ssgmce-blue ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
            <div className="p-3">
              <span className="text-[10px] font-medium text-ssgmce-orange bg-ssgmce-orange/10 px-1.5 py-0.5 rounded">
                {video.category}
              </span>
              <p className="text-sm text-gray-700 font-medium mt-1 leading-snug">
                {video.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Channel Link */}
      {channelUrl && (
        <div className="text-center mt-6">
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ssgmce-blue/20 text-sm font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
          >
            View More on YouTube ↗
          </a>
        </div>
      )}
    </div>
  );
};

const GenericContentPage = ({ pageId }) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isEditing, data } = useEdit(); // Use data from context if editing

  // Use live data from context if available/editing, otherwise fetched page
  const displayPage = isEditing && data && data.sections ? data : page;
  const sections = Array.isArray(displayPage?.sections)
    ? displayPage.sections
    : [];
  const admissionsThemePages = useMemo(
    () =>
      new Set([
        "admissions-brochure",
        "admissions-ug",
        "admissions-pg",
        "admissions-dse",
        "admissions-mba",
        "admissions-phd",
        "admissions-fees",
      ]),
    [],
  );
  const isAdmissionsThemePage = admissionsThemePages.has(pageId);

  useEffect(() => {
    // When rendered inside VisualPageEditor the data is already loaded into
    // EditContext — skip the redundant network request to avoid a double
    // fetch (and a double error in the console if the server is momentarily
    // unavailable).
    if (isEditing && data && data.sections) {
      setLoading(false);
      return;
    }

    const fetchPageData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/pages/${pageId}`);

        if (res.data.success) {
          setPage(res.data.data);
          setError(null);
        } else {
          setError(res.data.message || "Page not found");
        }
      } catch (err) {
        console.error("[GenericContentPage] Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      fetchPageData();
    }
  }, [pageId, isEditing, data]);

  // Auto-select sidebar based on pageId prefix (longer prefixes checked first)
  const sidebar = useMemo(() => {
    if (!pageId) return null;
    const sortedPrefixes = Object.keys(SIDEBAR_MAP).sort(
      (a, b) => b.length - a.length,
    );
    for (const prefix of sortedPrefixes) {
      if (pageId.startsWith(prefix)) {
        const SidebarComponent = SIDEBAR_MAP[prefix];
        // Pass sections to sidebar to allow for in-page navigation (sub-menus)
        return <SidebarComponent sections={displayPage?.sections} />;
      }
    }
    return null;
  }, [pageId, displayPage]);

  if (loading && !displayPage) {
    return (
      <GenericPage title="Loading..." sidebar={sidebar}>
        <div className="flex justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ssgmce-orange"></div>
        </div>
      </GenericPage>
    );
  }

  if (error || !displayPage) {
    return (
      <GenericPage title="Page Not Found" sidebar={sidebar}>
        <div className="text-center text-red-500 p-8">
          {error || "Content not available."}
        </div>
      </GenericPage>
    );
  }

  return (
    <GenericPage title={displayPage.pageTitle}>
      <div
        className={`flex flex-col lg:flex-row gap-8 ${sidebar ? "" : "justify-center"}`}
      >
        {/* Sidebar */}
        {sidebar && (
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">{sidebar}</div>
          </div>
        )}

        {/* Main Content */}
        <div className={sidebar ? "lg:w-3/4" : "w-full"}>
          {/* Page Title - Editable */}
          {isEditing ? (
            <div className="mb-4">
              <label className="text-xs text-gray-400">Page Title</label>
              <EditableText
                path="pageTitle"
                element="h1"
                className="text-3xl font-bold text-gray-900 border-b pb-2 mb-4"
              />
            </div>
          ) : null}

          <div className={isAdmissionsThemePage ? "space-y-6" : "space-y-8"}>
            {sections
              .sort((a, b) => a.order - b.order)
              .map((section, index) => (
                <EditableSection
                  key={section.sectionId}
                  index={index}
                  title={section.type}
                  sectionContent={section.content}
                  contentPath={`sections[${index}].content`}
                >
                  <div
                    className={`page-section ${
                      isAdmissionsThemePage
                        ? "rounded-xl border border-gray-200 bg-white/95 p-5 shadow-sm"
                        : ""
                    }`}
                    id={section.sectionId}
                  >
                    {/* Section Title */}
                    {section.title &&
                      section.title !== "Intro" &&
                      section.title !== displayPage.pageTitle && (
                        <EditableText
                          value={section.title}
                          path={`sections[${index}].title`}
                          element="h3"
                          className={
                            isAdmissionsThemePage
                              ? "text-xl md:text-2xl font-semibold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200"
                              : "text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200"
                          }
                        />
                      )}

                    {/* Text Section */}
                    {section.type === "text" && (
                      <div
                        className={`prose max-w-none text-gray-700 whitespace-pre-wrap ${
                          isAdmissionsThemePage ? "leading-7" : ""
                        }`}
                      >
                        <EditableText
                          value={section.content.text}
                          path={`sections[${index}].content.text`}
                          multiline={true}
                        />
                      </div>
                    )}

                    {/* RichText Section - uses inline WYSIWYG editor in edit mode */}
                    {section.type === "richtext" && (
                      <div
                        className={`prose max-w-none text-gray-700 ${
                          isAdmissionsThemePage ? "leading-7" : ""
                        }`}
                      >
                        <EditableText
                          value={section.content.text}
                          path={`sections[${index}].content.text`}
                          richText={true}
                          multiline={true}
                        />
                      </div>
                    )}

                    {/* Markdown Section - clean textarea editor with preview */}
                    {section.type === "markdown" && (
                      <MarkdownEditor
                        value={section.content.text}
                        path={`sections[${index}].content.text`}
                        className={isAdmissionsThemePage ? "leading-7" : ""}
                      />
                    )}

                    {/* Stats Section */}
                    {section.type === "stats" && section.content.stats && (
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {section.content.stats.map((stat, idx) => (
                          <div
                            key={idx}
                            className={`rounded-lg p-4 text-center ${
                              isAdmissionsThemePage
                                ? "bg-gray-50 border border-gray-200 shadow-sm"
                                : `bg-white shadow border-t-4 ${stat.color === "orange" ? "border-ssgmce-orange" : "border-ssgmce-blue"}`
                            }`}
                          >
                            <div
                              className={`text-2xl font-bold ${stat.color === "orange" ? "text-ssgmce-orange" : "text-ssgmce-blue"}`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Timeline Section */}
                    {section.type === "timeline" && section.content.events && (
                      <div
                        className={`relative ${
                          isAdmissionsThemePage
                            ? "border-l border-gray-300 ml-3 space-y-4"
                            : "border-l-2 border-ssgmce-blue ml-4 space-y-6"
                        }`}
                      >
                        {section.content.events.map((event, idx) => (
                          <div
                            key={idx}
                            className={`relative ${
                              isAdmissionsThemePage ? "pl-6" : "pl-8"
                            }`}
                          >
                            <div
                              className={`absolute rounded-full top-2 ${
                                isAdmissionsThemePage
                                  ? "-left-[6px] h-2.5 w-2.5 bg-ssgmce-blue border border-white"
                                  : "-left-[9px] w-4 h-4 bg-ssgmce-orange border-2 border-white shadow"
                              }`}
                            ></div>
                            <div
                              className={
                                isAdmissionsThemePage
                                  ? "rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                                  : "bg-gray-50 rounded-lg p-4 shadow-sm"
                              }
                            >
                              <span
                                className={`text-sm font-semibold ${
                                  isAdmissionsThemePage
                                    ? "text-gray-500 uppercase tracking-wide"
                                    : "text-ssgmce-blue"
                                }`}
                              >
                                {event.year}
                              </span>
                              <h4
                                className={`text-gray-900 ${
                                  isAdmissionsThemePage
                                    ? "font-semibold mt-1"
                                    : "font-semibold"
                                }`}
                              >
                                {event.title}
                              </h4>
                              {event.description && (
                                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cards Section */}
                    {section.type === "cards" && section.content.cards && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section.content.cards.map((card, idx) => (
                          <div
                            key={idx}
                            className={`rounded-lg p-5 ${
                              isAdmissionsThemePage
                                ? "bg-white border border-gray-200 shadow-sm"
                                : `bg-white rounded-lg shadow p-5 border-l-4 ${card.color === "orange" ? "border-ssgmce-orange" : "border-ssgmce-blue"}`
                            }`}
                          >
                            <h4 className="font-bold text-gray-900 mb-1">
                              {card.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {card.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Table Section (structured - admissions, research etc. that aren't yet in markdown) */}
                    {section.type === "table" &&
                      section.content.headers &&
                      section.content.rows && (
                        <div className="overflow-x-auto rounded-xl border border-gray-200">
                          <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead
                              className={
                                isAdmissionsThemePage
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-ssgmce-blue text-white"
                              }
                            >
                              <tr>
                                {section.content.headers.map((h, hIdx) => (
                                  <th
                                    key={hIdx}
                                    className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {section.content.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className={
                                    rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                  }
                                >
                                  {row.map((cell, cIdx) => (
                                    <td
                                      key={cIdx}
                                      className="px-4 py-3 text-sm text-gray-700 align-top"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          {isEditing && (
                            <p className="mt-2 text-xs text-gray-400 italic">
                              To edit this table, convert the section to
                              Markdown type in the database.
                            </p>
                          )}
                        </div>
                      )}

                    {/* Accordion Section */}
                    {section.type === "accordion" && section.content.items && (
                      <div className="space-y-2">
                        {section.content.items.map((item, idx) => (
                          <details
                            key={idx}
                            className={`border rounded-lg group ${
                              isAdmissionsThemePage
                                ? "bg-white border-gray-200 shadow-sm"
                                : "bg-white border rounded-lg shadow-sm"
                            }`}
                          >
                            <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 list-none flex justify-between items-center">
                              {item.title}
                              <span className="text-gray-400 group-open:rotate-180 transition-transform">
                                v
                              </span>
                            </summary>
                            <div className="px-4 py-3 text-gray-700 border-t text-sm">
                              {item.html ? (
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.html,
                                  }}
                                />
                              ) : (
                                item.content
                              )}
                            </div>
                          </details>
                        ))}
                      </div>
                    )}

                    {/* PDF Section */}
                    {section.type === "pdf" && section.content.url && (
                      <div className="my-4">
                        <a
                          href={section.content.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-md bg-ssgmce-blue text-white font-medium hover:bg-blue-800 transition"
                        >
                          {section.content.label || "View PDF Document"}
                        </a>
                      </div>
                    )}

                    {/* List Section */}
                    {section.type === "list" && (
                      <ul
                        className={
                          isAdmissionsThemePage
                            ? "space-y-2"
                            : "list-disc pl-6 space-y-2 text-gray-700"
                        }
                      >
                        {section.content.items?.map((item, idx) => (
                          <li
                            key={idx}
                            className={
                              isAdmissionsThemePage
                                ? "flex items-start gap-2 text-gray-700 leading-relaxed"
                                : ""
                            }
                          >
                            {isAdmissionsThemePage ? (
                              <span className="mt-2 inline-block h-2 w-2 rounded-full bg-ssgmce-blue flex-shrink-0"></span>
                            ) : null}
                            <EditableText
                              value={item}
                              path={`sections[${index}].content.items[${idx}]`}
                              element="span"
                            />
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Image Section */}
                    {section.type === "image" && (
                      <figure className="my-6">
                        <EditableImage
                          value={section.content.url}
                          path={`sections[${index}].content.url`}
                          className="rounded-lg max-w-full h-auto shadow-md mx-auto"
                          alt={section.content.alt || section.title}
                        />
                        {section.content.caption && (
                          <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
                            <EditableText
                              value={section.content.caption}
                              path={`sections[${index}].content.caption`}
                              element="span"
                            />
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {/* Link Section */}
                    {section.type === "link" && (
                      <div className="my-4">
                        <EditableText
                          value={section.content.url}
                          path={`sections[${index}].content.url`}
                          className={
                            isAdmissionsThemePage
                              ? "inline-flex items-center rounded-md bg-blue-50 text-ssgmce-blue px-3 py-2 hover:bg-blue-100 font-medium transition"
                              : "text-blue-600 hover:text-blue-800 underline font-medium block"
                          }
                        />
                      </div>
                    )}

                    {/* IQAC Compact Stats */}
                    {section.type === "iqac-stats" && section.content.stats && (
                      <div className="flex items-center gap-6 mb-2">
                        {section.content.stats.map((stat, idx) => (
                          <React.Fragment key={idx}>
                            {idx > 0 && (
                              <div className="w-px h-8 bg-gray-200" />
                            )}
                            <div className="text-center">
                              <span
                                className={`block text-2xl font-bold ${idx % 2 === 0 ? "text-ssgmce-blue" : "text-ssgmce-orange"}`}
                              >
                                {stat.value}
                              </span>
                              <span className="text-xs text-gray-400">
                                {stat.label}
                              </span>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {/* Meeting Records Accordion */}
                    {section.type === "meeting-records" &&
                      section.content.records && (
                        <IQACAccordion
                          items={section.content.records}
                          defaultOpen={section.content.records[0]?.year}
                          renderHeader={(item, isOpen) => (
                            <div className="flex items-center gap-3">
                              <span
                                className={`text-sm font-semibold ${isOpen ? "text-ssgmce-blue" : "text-gray-700"}`}
                              >
                                {item.year}
                              </span>
                              <span className="text-xs text-gray-400">
                                {item.meetings.length} meeting
                                {item.meetings.length !== 1 ? "s" : ""}
                              </span>
                            </div>
                          )}
                          renderContent={(item) => (
                            <div className="grid sm:grid-cols-2 gap-2">
                              {item.meetings.map((m) => (
                                <a
                                  key={m.label}
                                  href={m.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 p-2.5 rounded border border-gray-50 hover:border-ssgmce-orange/40 hover:bg-ssgmce-orange/5 transition-colors group"
                                >
                                  <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-0.5 rounded">
                                    {m.label}
                                  </span>
                                  {m.date && (
                                    <span className="text-xs text-gray-400">
                                      {m.date}
                                    </span>
                                  )}
                                  <span className="ml-auto text-xs text-gray-400 group-hover:text-ssgmce-blue transition-colors">
                                    PDF ↗
                                  </span>
                                </a>
                              ))}
                            </div>
                          )}
                          getKey={(item) => item.year}
                        />
                      )}

                    {/* Year Reports Accordion (AQAR) */}
                    {section.type === "year-reports" &&
                      section.content.reports && (
                        <IQACAccordion
                          items={section.content.reports}
                          defaultOpen={section.content.reports[0]?.year}
                          renderHeader={(item, isOpen) => (
                            <div className="flex items-center gap-3">
                              <span
                                className={`text-sm font-semibold ${isOpen ? "text-ssgmce-blue" : "text-gray-700"}`}
                              >
                                {item.year}
                              </span>
                              {item.subtitle && (
                                <span className="text-xs text-gray-400">
                                  {item.subtitle}
                                </span>
                              )}
                            </div>
                          )}
                          renderContent={(item) => (
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-2">
                                {item.links?.map((link, i) => (
                                  <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-ssgmce-blue/20 text-xs font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
                                  >
                                    {link.label} ↗
                                  </a>
                                ))}
                              </div>
                              {item.criteria && (
                                <div>
                                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                                    Criterion-wise Details
                                  </p>
                                  <div className="grid sm:grid-cols-2 gap-1.5">
                                    {item.criteria.map((c, i) => (
                                      <a
                                        key={i}
                                        href={c.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 p-2 rounded border border-gray-50 hover:border-ssgmce-orange/40 hover:bg-ssgmce-orange/5 transition-colors group text-xs"
                                      >
                                        <span className="font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-1.5 py-0.5 rounded">
                                          {c.num}
                                        </span>
                                        <span className="text-gray-600 group-hover:text-ssgmce-blue transition-colors">
                                          {c.title}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          getKey={(item) => item.year}
                        />
                      )}

                    {/* NAAC Criteria Accordion */}
                    {section.type === "naac-criteria" &&
                      section.content.criteria && (
                        <IQACAccordion
                          items={section.content.criteria}
                          defaultOpen={section.content.criteria[0]?.num}
                          renderHeader={(item, isOpen) => (
                            <div className="flex items-center gap-3">
                              <span className="text-xs font-bold text-white bg-ssgmce-blue w-6 h-6 rounded flex items-center justify-center flex-shrink-0">
                                {item.num}
                              </span>
                              <span
                                className={`text-sm font-semibold ${isOpen ? "text-ssgmce-blue" : "text-gray-700"}`}
                              >
                                {item.title}
                              </span>
                              <span className="text-xs text-gray-400">
                                {item.indicators.length} indicators
                              </span>
                            </div>
                          )}
                          renderContent={(item) => (
                            <div className="space-y-1.5">
                              {item.indicators.map((ind) => (
                                <div
                                  key={ind.id}
                                  className="flex items-start gap-3 p-2.5 rounded border border-gray-50 text-xs"
                                >
                                  <span className="font-mono font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-1.5 py-0.5 rounded whitespace-nowrap">
                                    {ind.id}
                                  </span>
                                  <span
                                    className={`px-1.5 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${ind.type === "QlM" ? "bg-ssgmce-orange/10 text-ssgmce-orange" : "bg-ssgmce-blue/10 text-ssgmce-blue"}`}
                                  >
                                    {ind.type}
                                  </span>
                                  <span className="text-gray-600 leading-relaxed">
                                    {ind.desc}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                          getKey={(item) => item.num}
                        />
                      )}

                    {/* Video Gallery */}
                    {section.type === "video-gallery" &&
                      section.content.videos && (
                        <VideoGallery
                          videos={section.content.videos}
                          channelUrl={section.content.channelUrl}
                        />
                      )}

                    {/* Document Grid */}
                    {section.type === "document-grid" &&
                      section.content.documents && (
                        <div
                          className={`grid ${section.content.columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"} gap-2`}
                        >
                          {section.content.documents.map((doc, idx) => (
                            <a
                              key={idx}
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-orange/40 hover:bg-ssgmce-orange/5 transition-colors group text-sm"
                            >
                              {doc.year && (
                                <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-1 rounded">
                                  {doc.year}
                                </span>
                              )}
                              <span className="text-gray-600 group-hover:text-ssgmce-blue transition-colors">
                                {doc.label || "View PDF ↗"}
                              </span>
                              {!doc.label && (
                                <span className="ml-auto text-xs text-gray-400 group-hover:text-ssgmce-blue">
                                  ↗
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      )}

                    {/* Process Steps */}
                    {section.type === "process-steps" &&
                      section.content.steps && (
                        <div className="space-y-2">
                          {section.content.steps.map((step, i) => (
                            <div key={i} className="flex gap-3 items-start">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ssgmce-blue/5 text-ssgmce-blue text-[11px] font-bold flex items-center justify-center mt-0.5">
                                {i + 1}
                              </span>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                    {/* Info Cards (title + description) */}
                    {section.type === "info-cards" && section.content.items && (
                      <div
                        className={`grid ${section.content.columns === 1 ? "grid-cols-1" : "sm:grid-cols-2"} gap-3`}
                      >
                        {section.content.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg border border-gray-100"
                          >
                            <p className="text-sm font-semibold text-gray-800">
                              {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </p>
                            {item.ownership && (
                              <p className="text-[10px] text-ssgmce-blue mt-2 font-medium">
                                {item.ownership} · {item.timeFrame}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </EditableSection>
              ))}

            {!sections.length && (
              <p className="text-gray-500 italic text-center py-8">
                {isEditing
                  ? "No content. Add sections via dashboard."
                  : "No content details available."}
              </p>
            )}
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default GenericContentPage;
