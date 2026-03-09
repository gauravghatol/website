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
import EditableText from "./admin/EditableText";
import EditableImage from "./admin/EditableImage";
import EditableSection from "./admin/EditableSection";
import MarkdownEditor from "./admin/MarkdownEditor";
import { useEdit } from "../contexts/EditContext";

// Map pageId prefixes to their sidebar components
const SIDEBAR_MAP = {
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
  }, [pageId]);

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

