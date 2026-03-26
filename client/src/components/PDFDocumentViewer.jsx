import { useState } from "react";
import { FaDownload, FaFilePdf, FaExternalLinkAlt, FaInfoCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

/**
 * PDFDocumentViewer Component
 * Displays a PDF with summary, embedded viewer, and download button
 */
const PDFDocumentViewer = ({ title, summary, pdfUrl, fileSize, year }) => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const isExternalUrl = pdfUrl && (pdfUrl.startsWith("http://") || pdfUrl.startsWith("https://"));
  const isLocalPath = pdfUrl && pdfUrl.startsWith("/uploads/");

  const handleViewOnline = () => {
    window.open(pdfUrl, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = title ? `${title}.pdf` : "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Truncate summary for preview
  const summaryPreview = summary && summary.length > 300
    ? summary.slice(0, 300) + "..."
    : summary;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
      {/* PDF Header */}
      <div className="border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-white p-2.5 shadow-sm sm:p-3">
            <FaFilePdf className="text-[1.8rem] text-red-500" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-[clamp(1rem,2.1vw,1.2rem)] font-bold text-gray-800">{title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-2.5 text-[0.82rem] text-gray-500 sm:text-sm">
              {year && (
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {year}
                </span>
              )}
              <span className="flex items-center gap-1">
                📄 PDF
              </span>
              {fileSize && (
                <span className="flex items-center gap-1">
                  💾 {fileSize}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="border-b border-gray-100 p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <FaInfoCircle className="text-ssgmce-blue" />
            <h4 className="font-semibold text-[clamp(0.95rem,1.8vw,1rem)] text-gray-700">Document Summary</h4>
          </div>
          <div className="text-[clamp(0.82rem,1.4vw,0.92rem)] leading-relaxed text-gray-600">
            <p>{showFullSummary ? summary : summaryPreview}</p>
            {summary.length > 300 && (
              <button
                onClick={() => setShowFullSummary(!showFullSummary)}
                className="mt-2 flex items-center gap-1 text-[0.84rem] font-medium text-ssgmce-blue hover:text-ssgmce-dark-blue"
              >
                {showFullSummary ? (
                  <>Show Less <FaChevronUp className="text-xs" /></>
                ) : (
                  <>Read More <FaChevronDown className="text-xs" /></>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Download Section */}
      <div className="flex flex-col gap-3 bg-gray-50 p-4 sm:flex-row sm:p-6">
        <button
          onClick={handleViewOnline}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ssgmce-blue px-5 py-3 text-[0.9rem] font-medium text-white shadow-md transition-colors hover:bg-ssgmce-dark-blue hover:shadow-lg"
        >
          <FaExternalLinkAlt />
          View PDF Online
        </button>
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-[0.9rem] font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          <FaDownload />
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PDFDocumentViewer;
