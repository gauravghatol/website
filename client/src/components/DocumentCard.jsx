import { FaDownload, FaEye, FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint, FaFileAlt, FaFileImage, FaFileArchive } from "react-icons/fa";
import axios from "axios";

/**
 * DocumentCard Component
 * Displays a single document with download/view options
 */
const DocumentCard = ({ document }) => {
  const { _id, title, description, fileUrl, fileSize, fileType, year, uploadDate, subcategory } = document;

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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      {/* Card Header with Icon */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
            {getFileIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-ssgmce-blue transition-colors line-clamp-2">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Meta Information */}
      <div className="px-5 py-3 bg-gray-50 flex flex-wrap items-center gap-3 text-xs text-gray-500">
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
        <span className="flex items-center gap-1 ml-auto">
          📅 {formatDate(uploadDate)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex gap-3">
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg transition-colors font-medium text-sm"
        >
          <FaEye />
          View
        </a>
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-ssgmce-blue to-blue-700 hover:from-blue-700 hover:to-ssgmce-blue text-white py-2.5 px-4 rounded-lg transition-all font-medium text-sm"
        >
          <FaDownload />
          Download
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
