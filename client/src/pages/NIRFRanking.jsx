import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FaFilePdf,
  FaDownload,
  FaCalendarAlt,
  FaUpload,
  FaCheck,
  FaSpinner,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PageHeader from "../components/PageHeader";
import { useEdit } from "../contexts/EditContext";
import EditableSection from "../components/admin/EditableSection";
import MarkdownEditor from "../components/admin/MarkdownEditor";

// Import all NIRF PDFs
import NIRF_2025_26_Overall from "../assets/images/NIRF/NIRF_2025-26_Overall.pdf";
import NIRF_2025_26_Management from "../assets/images/NIRF/NIRF_2025-26_Management.pdf";
import NIRF_2025_26_Engineering from "../assets/images/NIRF/NIRF_2025-26-ENGINEERING.pdf";
import NIRF_2025_26_Innovation from "../assets/images/NIRF/NIRF_2025-26-Innovation.pdf";

import NIRF_2024_25_Overall from "../assets/images/NIRF/NIRF_2024-25_Overall.pdf";
import NIRF_2024_25_Management from "../assets/images/NIRF/NIRF_2024-25_Management.pdf";
import NIRF_2024_25_Engineering from "../assets/images/NIRF/NIRF_2024-25-ENGINEERING.pdf";
import NIRF_2024_25_Innovation from "../assets/images/NIRF/NIRF_2024-25-Innovation.pdf";

import NIRF_2023_24_Overall from "../assets/images/NIRF/NIRF_2023-24_Overall.pdf";
import NIRF_2023_24_Management from "../assets/images/NIRF/NIRF_2023-24_Management.pdf";
import NIRF_2023_24_Engineering from "../assets/images/NIRF/NIRF_2023-24-ENGINEERING.pdf";
import NIRF_2023_24_Innovation from "../assets/images/NIRF/NIRF_2023-24-Innovation.pdf";

import NIRF_2022_23_Overall from "../assets/images/NIRF/NIRF_2022-23_Overall.pdf";
import NIRF_2022_23_Management from "../assets/images/NIRF/NIRF_2022-23_Management.pdf";
import NIRF_2022_23_Engineering from "../assets/images/NIRF/NIRF_2022-23_Engineering.pdf";

import NIRF_2021_Overall from "../assets/images/NIRF/NIRF 2021 SSGMCE.pdf";

// Static fallback PDFs (used when no API data exists for a year/category)
const STATIC_NIRF_DATA = {
  "2025-26": [
    { category: "Overall", pdfUrl: NIRF_2025_26_Overall },
    { category: "Management", pdfUrl: NIRF_2025_26_Management },
    { category: "Engineering", pdfUrl: NIRF_2025_26_Engineering },
    { category: "Innovation", pdfUrl: NIRF_2025_26_Innovation },
  ],
  "2024-25": [
    { category: "Overall", pdfUrl: NIRF_2024_25_Overall },
    { category: "Management", pdfUrl: NIRF_2024_25_Management },
    { category: "Engineering", pdfUrl: NIRF_2024_25_Engineering },
    { category: "Innovation", pdfUrl: NIRF_2024_25_Innovation },
  ],
  "2023-24": [
    { category: "Overall", pdfUrl: NIRF_2023_24_Overall },
    { category: "Management", pdfUrl: NIRF_2023_24_Management },
    { category: "Engineering", pdfUrl: NIRF_2023_24_Engineering },
    { category: "Innovation", pdfUrl: NIRF_2023_24_Innovation },
  ],
  "2022-23": [
    { category: "Overall", pdfUrl: NIRF_2022_23_Overall },
    { category: "Management", pdfUrl: NIRF_2022_23_Management },
    { category: "Engineering", pdfUrl: NIRF_2022_23_Engineering },
  ],
  "2021-22": [{ category: "Overall", pdfUrl: NIRF_2021_Overall }],
};

const CATEGORY_LABEL = {
  engineering: "Engineering",
  overall: "Overall",
  management: "Management",
  innovation: "Innovation",
};

const NIRFRanking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const yearFromURL = searchParams.get("year");
  const [selectedYear, setSelectedYear] = useState(yearFromURL || "2025-26");
  const [apiDataMap, setApiDataMap] = useState({});
  const [cmsSections, setCmsSections] = useState([]);
  const [nirfEntryIds, setNirfEntryIds] = useState({});
  const [docUploadState, setDocUploadState] = useState({});
  const [previewOpen, setPreviewOpen] = useState({});
  const fileInputRefs = useRef({});

  // useEdit returns { isEditing: false, data: {} } when outside EditProvider
  const { isEditing, data } = useEdit();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NIRF Ranking | SSGMCE";
  }, []);

  // Fetch CMS sections from API (skip when inside visual editor — EditContext has them)
  useEffect(() => {
    if (isEditing) return;
    axios
      .get("/api/pages/nirf-ranking")
      .then((res) => {
        if (res.data.success) {
          const sections = (res.data.data.sections || []).filter(
            (s) =>
              s.isVisible !== false &&
              (s.type === "markdown" || s.type === "richtext") &&
              s.content?.text,
          );
          setCmsSections(sections);
        }
      })
      .catch(() => {});
  }, [isEditing]);

  // Fetch PDF overrides from NIRF API
  useEffect(() => {
    axios
      .get("/api/nirf")
      .then((res) => {
        if (res.data.success && res.data.data.length > 0) {
          const map = {};
          const idMap = {};
          for (const entry of res.data.data) {
            const key = `${entry.year}__${entry.category}`;
            if (entry.reportUrl) map[key] = entry.reportUrl;
            if (entry._id) idMap[key] = entry._id;
          }
          setApiDataMap(map);
          setNirfEntryIds(idMap);
        }
      })
      .catch(() => {});
  }, []);

  // Update selected year when URL parameter changes
  useEffect(() => {
    if (yearFromURL) setSelectedYear(yearFromURL);
  }, [yearFromURL]);

  const years = ["2025-26", "2024-25", "2023-24", "2022-23", "2021-22"];

  // Build current year docs: API overrides static where available
  const staticEntries = STATIC_NIRF_DATA[selectedYear] || [];
  const currentYearData = staticEntries.map((entry) => {
    const key = `${selectedYear}__${entry.category.toLowerCase()}`;
    return {
      category: entry.category,
      pdfUrl: apiDataMap[key] || entry.pdfUrl,
    };
  });
  // Add API-only entries not in static (new years/categories added via admin)
  const staticCats = new Set(
    staticEntries.map((e) => e.category.toLowerCase()),
  );
  for (const [key, url] of Object.entries(apiDataMap)) {
    const [yr, cat] = key.split("__");
    if (yr === selectedYear && !staticCats.has(cat)) {
      currentYearData.push({
        category: CATEGORY_LABEL[cat] || cat,
        pdfUrl: url,
      });
    }
  }

  // Sections to render (EditContext when editing, API fetch when public)
  const editContextSections =
    isEditing && data?.sections
      ? data.sections
          .filter((s) => s.isVisible !== false)
          .sort((a, b) => a.order - b.order)
      : null;
  const publicSections = cmsSections;

  const handleReplaceDocPdf = async (file, year, category) => {
    if (!file) return;
    const key = `${year}__${category.toLowerCase()}`;
    setDocUploadState((s) => ({
      ...s,
      [key]: { uploading: true, error: null },
    }));
    try {
      const fd = new FormData();
      fd.append("pdf", file);
      const token = localStorage.getItem("adminToken");
      const uploadRes = await axios.post("/api/upload/nirf-pdf", fd, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const fileUrl = uploadRes.data.fileUrl;
      const authHdr = { headers: { Authorization: `Bearer ${token}` } };
      const existingId = nirfEntryIds[key];
      if (existingId) {
        await axios.put(
          `/api/nirf/admin/${existingId}`,
          { reportUrl: fileUrl },
          authHdr,
        );
      } else {
        const createRes = await axios.post(
          "/api/nirf/admin/create",
          {
            year,
            category: category.toLowerCase(),
            reportUrl: fileUrl,
            isActive: true,
          },
          authHdr,
        );
        setNirfEntryIds((m) => ({ ...m, [key]: createRes.data.data._id }));
      }
      setApiDataMap((m) => ({ ...m, [key]: fileUrl }));
      setDocUploadState((s) => ({
        ...s,
        [key]: { uploading: false, success: true },
      }));
      setTimeout(() => setDocUploadState((s) => ({ ...s, [key]: {} })), 3000);
    } catch (err) {
      setDocUploadState((s) => ({
        ...s,
        [key]: {
          uploading: false,
          error: err.response?.data?.message || "Upload failed",
        },
      }));
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Overall: "from-purple-500 to-purple-600",
      Management: "from-blue-500 to-blue-600",
      Engineering: "from-green-500 to-green-600",
      Innovation: "from-orange-500 to-orange-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NIRF Ranking"
        subtitle="National Institutional Ranking Framework"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto max-w-[120rem] px-4 py-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
        {/* CMS Sections — editable in visual editor, fetched from API on public page */}
        {editContextSections ? (
          /* EDITING MODE: render sections from EditContext with inline edit controls */
          <div className="mb-8 space-y-5 sm:space-y-6">
            {editContextSections.map((section, index) => (
              <EditableSection
                key={section.sectionId || index}
                index={index}
                title={section.title || section.type}
                sectionContent={section.content}
                contentPath={`sections[${index}].content`}
              >
                <div>
                  {section.title && (
                    <h3 className="mb-2 text-base font-bold text-gray-800 sm:text-lg">
                      {section.title}
                    </h3>
                  )}
                  {section.type === "markdown" ? (
                    <MarkdownEditor path={`sections[${index}].content.text`} />
                  ) : (
                    <div
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: section.content?.text || "",
                      }}
                    />
                  )}
                </div>
              </EditableSection>
            ))}
          </div>
        ) : publicSections.length > 0 ? (
          /* PUBLIC MODE: render CMS sections from API */
          <div className="mb-8 space-y-5 sm:space-y-6">
            {publicSections.map((section, i) => (
              <div
                key={section.sectionId || i}
                className="text-gray-600 leading-relaxed"
              >
                {section.title && (
                  <h3 className="mb-2 text-base font-bold text-gray-800 sm:text-lg">
                    {section.title}
                  </h3>
                )}
                {section.type === "richtext" ? (
                  <div
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.content.text }}
                  />
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {section.content.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* FALLBACK: static text when DB has no sections */
          <div className="mb-8 text-gray-600 leading-relaxed">
            <p className="mb-4">
              The National Institutional Ranking Framework (NIRF) was approved
              by the MHRD and launched by the Honorable Minister of Human
              Resource Development on September 29, 2015. This framework
              outlines a methodology to rank institutions across the country.
            </p>
            <p>
              SSGMCE has been consistently participating in NIRF rankings across
              multiple categories including Engineering, Overall, Management,
              and Innovation, showcasing our commitment to quality education and
              institutional excellence.
            </p>
          </div>
        )}

        {/* Year Filter */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5 md:p-6">
          <label className="flex text-sm font-semibold text-gray-700 mb-3 items-center gap-2">
            <FaCalendarAlt className="text-ssgmce-blue" />
            Select Academic Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 focus:border-transparent focus:ring-2 focus:ring-ssgmce-blue sm:text-base md:w-64"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                NIRF {year}
              </option>
            ))}
          </select>
        </div>

        {/* Documents Grid */}
        <div>
          <h2 className="mb-5 flex items-center gap-2 text-[clamp(1.1rem,0.9rem+0.8vw,1.45rem)] font-bold text-gray-800 sm:mb-6">
            <span className="w-1 h-6 bg-ssgmce-blue rounded-full"></span>
            NIRF {selectedYear} Documents
          </h2>

          {currentYearData.length > 0 ? (
            <div className="space-y-4">
              {currentYearData.map((doc, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-sm border transition-all duration-200 overflow-hidden ${
                    isEditing
                      ? "border-amber-300"
                      : "border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col justify-between gap-4 p-4 sm:p-5 md:flex-row md:items-center md:p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getCategoryColor(doc.category)} flex items-center justify-center flex-shrink-0`}
                      >
                        <FaFilePdf className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-base font-bold text-gray-800 sm:text-lg">
                          {doc.category}
                        </h3>
                        <p className="text-xs text-gray-600 sm:text-sm">
                          Academic Year {selectedYear}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full flex-wrap items-center gap-2 sm:gap-3 md:w-auto md:justify-end">
                      {/* Preview toggle — always visible */}
                      {doc.pdfUrl && (
                        <button
                          onClick={() => {
                            const docKey = `${selectedYear}__${doc.category.toLowerCase()}`;
                            setPreviewOpen((p) => ({
                              ...p,
                              [docKey]: !p[docKey],
                            }));
                          }}
                          className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 transition-all hover:bg-gray-50 sm:px-4 sm:py-2.5 sm:text-sm"
                        >
                          {previewOpen[
                            `${selectedYear}__${doc.category.toLowerCase()}`
                          ] ? (
                            <>
                              <FaEyeSlash /> Hide Preview
                            </>
                          ) : (
                            <>
                              <FaEye /> Preview
                            </>
                          )}
                        </button>
                      )}
                      {isEditing ? (
                        (() => {
                          const docKey = `${selectedYear}__${doc.category.toLowerCase()}`;
                          const state = docUploadState[docKey] || {};
                          return (
                            <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:min-w-[160px] sm:items-end">
                              {state.uploading && (
                                <div className="flex items-center gap-2 text-blue-600 text-sm">
                                  <FaSpinner className="animate-spin" />{" "}
                                  Uploading…
                                </div>
                              )}
                              {state.success && (
                                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                                  <FaCheck /> PDF updated!
                                </div>
                              )}
                              {state.error && (
                                <div className="text-xs text-red-500 sm:text-right">
                                  {state.error}
                                </div>
                              )}
                              <input
                                type="file"
                                accept="application/pdf"
                                className="hidden"
                                ref={(el) => {
                                  fileInputRefs.current[docKey] = el;
                                }}
                                onChange={(e) =>
                                  handleReplaceDocPdf(
                                    e.target.files[0],
                                    selectedYear,
                                    doc.category,
                                  )
                                }
                              />
                              <button
                                onClick={() =>
                                  fileInputRefs.current[docKey]?.click()
                                }
                                disabled={state.uploading}
                                className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-600 disabled:opacity-60 sm:w-auto sm:px-5 sm:py-2.5"
                              >
                                <FaUpload className="text-sm" />
                                Replace PDF
                              </button>
                            </div>
                          );
                        })()
                      ) : (
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:from-blue-600 hover:to-blue-800 hover:shadow-md sm:w-auto sm:px-6 sm:py-3"
                        >
                          <FaDownload className="text-sm" />
                          Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                  {/* PDF Preview panel */}
                  {doc.pdfUrl &&
                    previewOpen[
                      `${selectedYear}__${doc.category.toLowerCase()}`
                    ] && (
                      <div className="border-t border-gray-200 bg-gray-50">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 bg-gray-100 p-3">
                          <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 sm:text-xs">
                            Preview — NIRF {selectedYear} {doc.category}
                          </span>
                          <a
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[11px] text-blue-600 hover:underline sm:text-xs"
                          >
                            <FaFilePdf /> Open in new tab
                          </a>
                        </div>
                        <iframe
                          src={`${doc.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                          title={`NIRF ${selectedYear} ${doc.category}`}
                          className="h-[65vh] min-h-[26rem] w-full md:h-[780px]"
                          style={{ border: "none" }}
                        />
                      </div>
                    )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10 md:p-12">
              <FaFilePdf className="text-5xl text-gray-300 mx-auto mb-4" />
              <p className="text-base text-gray-500 sm:text-lg">
                No NIRF documents available for {selectedYear}
              </p>
            </div>
          )}
        </div>

        {/* Summary Statistics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 md:gap-6">
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-6">
            <div className="mb-2 text-2xl font-bold text-ssgmce-blue sm:text-3xl">5</div>
            <div className="text-xs text-gray-600 sm:text-sm">Years of Data</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-6">
            <div className="mb-2 text-2xl font-bold text-ssgmce-orange sm:text-3xl">4</div>
            <div className="text-xs text-gray-600 sm:text-sm">Categories</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5 text-center shadow-sm sm:p-6">
            <div className="mb-2 text-2xl font-bold text-green-600 sm:text-3xl">
              {currentYearData.length}
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">Documents Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRFRanking;
