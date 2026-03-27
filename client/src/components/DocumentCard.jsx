import { useState } from "react";
import { FaDownload, FaEye, FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileAlt, FaFileImage, FaFileArchive, FaTimes, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import axios from "axios";

/**
 * DocumentCard Component
 * Displays a single document with download/view options
 * For PDFs: shows summary modal with embedded viewer and download button
 */
const DocumentCard = ({ document }) => {
  const { _id, title, description, fileUrl, fileSize, fileType, year, uploadDate, subcategory } = document;
  const [showPDFModal, setShowPDFModal] = useState(false);

  const isPDF = fileType === 'pdf' || fileUrl?.toLowerCase().endsWith('.pdf');

  // Get file icon based on type
  const getFileIcon = () => {
    const iconClass = "text-3xl";
    switch (fileType) {
      case 'pdf':
        return <FaFilePdf className={`${iconClass} text-red-500`} />;
      case 'doc':
      case 'docx':
        return <FaFileWord className={`${iconClass} text-blue-600`} />;
      case 'xls':
      case 'xlsx':
        return <FaFileExcel className={`${iconClass} text-green-600`} />;
      case 'ppt':
      case 'pptx':
        return <FaFilePowerpoint className={`${iconClass} text-orange-500`} />;
      case 'jpg':
      case 'png':
        return <FaFileImage className={`${iconClass} text-purple-500`} />;
      case 'zip':
        return <FaFileArchive className={`${iconClass} text-yellow-600`} />;
      default:
        return <FaFileAlt className={`${iconClass} text-gray-500`} />;
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Handle download click
  const handleDownload = async () => {
    try {
      // Increment download count
      await axios.post(`/api/documents/${_id}/download`);
      // Open file
      window.open(fileUrl, '_blank');
    } catch (error) {
      console.error('Error tracking download:', error);
      // Still open file even if tracking fails
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:border-gray-200 hover:shadow-xl">
      {/* Card Header with Icon */}
      <div className="border-b border-gray-100 p-4 sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="rounded-lg bg-gray-50 p-2.5 transition-colors group-hover:bg-blue-50 sm:p-3">
            {getFileIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="line-clamp-2 text-[clamp(1rem,2.1vw,1.12rem)] font-semibold text-gray-800 transition-colors group-hover:text-ssgmce-blue">
              {title}
            </h3>
            {description && (
              <p className="mt-1 line-clamp-2 text-[clamp(0.78rem,1.35vw,0.88rem)] text-gray-500">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-2.5 bg-gray-50 px-4 py-3 text-[0.72rem] text-gray-500 sm:px-5 sm:text-xs">
        {year && (
          <span className="px-2 py-1 bg-ssgmce-blue/10 text-ssgmce-blue rounded-full font-medium">
            {year}
          </span>
        )}
        {subcategory && (
          <span className="px-2 py-1 bg-ssgmce-orange/10 text-ssgmce-orange rounded-full font-medium">
            {subcategory}
          </span>
        )}
        <span className="flex items-center gap-1">
          📄 {fileType?.toUpperCase() || 'PDF'}
        </span>
        <span className="flex items-center gap-1">
          💾 {fileSize || 'N/A'}
        </span>
        <span className="ml-auto flex items-center gap-1">
          📅 {formatDate(uploadDate)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 p-4 sm:flex-row sm:gap-3">
        {isPDF ? (
          <button
            onClick={() => setShowPDFModal(true)}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-[0.84rem] font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:text-sm"
          >
            <FaEye />
            View Summary
          </button>
        ) : (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-[0.84rem] font-medium text-gray-700 transition-colors hover:bg-gray-200 sm:text-sm"
          >
            <FaEye />
            View
          </a>
        )}
        <button
          onClick={handleDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2.5 text-[0.84rem] font-medium text-white transition-all hover:from-blue-700 hover:to-ssgmce-blue sm:text-sm"
        >
          <FaDownload />
          Download
        </button>
      </div>

      {/* PDF Summary Modal */}
      {showPDFModal && isPDF && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowPDFModal(false)}>
          <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50 p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <FaFilePdf className="text-2xl text-red-500" />
                <div className="min-w-0">
                  <h3 className="truncate text-[clamp(1rem,2vw,1.12rem)] font-bold text-gray-800">{title}</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-2 text-[0.78rem] text-gray-500 sm:text-sm">
                    {year && <span className="text-blue-600 font-medium">{year}</span>}
                    {fileSize && <span>• {fileSize}</span>}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowPDFModal(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <FaTimes className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {/* Summary */}
              {description && (
                <div className="border-b border-gray-100 p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <FaInfoCircle className="text-blue-600" />
                    <h4 className="text-[0.95rem] font-semibold text-gray-700">Document Summary</h4>
                  </div>
                  <p className="text-[0.84rem] leading-relaxed text-gray-600 sm:text-sm">{description}</p>
                </div>
              )}

              {/* PDF Viewer */}
              <div className="p-4 sm:p-5">
                <h4 className="mb-3 text-[0.95rem] font-semibold text-gray-700">Document Preview</h4>
                <div className="h-[58vh] min-h-[20rem] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 sm:h-[31.25rem]">
                  <iframe
                    src={`${fileUrl}#toolbar=1&navpanes=0`}
                    className="w-full h-full"
                    title={title}
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer - Download */}
            <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50 p-4 sm:flex-row sm:p-5">
              <button
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ssgmce-blue px-5 py-3 text-[0.9rem] font-medium text-white shadow-md transition-colors hover:bg-ssgmce-dark-blue"
              >
                <FaDownload />
                Download PDF
              </button>
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 text-[0.9rem] font-medium text-gray-700 transition-colors hover:bg-gray-100"
              >
                <FaExternalLinkAlt />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentCard;
