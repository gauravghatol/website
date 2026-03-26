import { useState, useEffect } from "react";
import axios from "axios";
import DocumentCard from "./DocumentCard";
import { FaSearch, FaFilter, FaFileAlt } from "react-icons/fa";

/**
 * DocumentGrid Component
 * Grid layout with search, filter, skeleton loading, and empty states
 */
const DocumentGrid = ({ category, title, description }) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [availableYears, setAvailableYears] = useState([]);

  // Fetch documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/documents/category/${category}`);
        if (res.data.success) {
          setDocuments(res.data.data);
          setAvailableYears(res.data.years || []);
        } else {
          setError(res.data.message);
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
        setError("Failed to load documents");
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchDocuments();
    }
  }, [category]);

  // Filter documents based on search and year
  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      !searchTerm ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = !selectedYear || doc.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  // Skeleton Loading Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden animate-pulse">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 bg-gray-50 flex gap-3">
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
      </div>
      <div className="p-4 flex gap-3">
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
        <div className="flex-1 h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );

  // Empty State Component
  const EmptyState = () => (
    <div className="col-span-full flex flex-col items-center justify-center py-16 px-4">
      <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FaFileAlt className="text-5xl text-gray-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No Documents Found
      </h3>
      <p className="text-gray-500 text-center max-w-md">
        {searchTerm || selectedYear
          ? "No documents match your search criteria. Try adjusting your filters."
          : "There are no documents in this category yet. Check back later!"}
      </p>
      {(searchTerm || selectedYear) && (
        <button
          onClick={() => {
            setSearchTerm("");
            setSelectedYear("");
          }}
          className="mt-4 px-6 py-2 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Header */}
      {(title || description) && (
        <div className="mb-4 sm:mb-6">
          {title && (
            <h2 className="flex items-center gap-3 text-[clamp(1.2rem,2.6vw,1.7rem)] font-bold text-ssgmce-blue">
              <FaFileAlt className="text-ssgmce-orange" />
              {title}
            </h2>
          )}
          {description && <p className="mt-2 text-[clamp(0.88rem,1.5vw,0.98rem)] text-gray-600">{description}</p>}
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-md sm:gap-4 sm:p-5 md:flex-row md:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-200 py-3 pl-12 pr-4 text-[0.9rem] transition-all focus:border-transparent focus:ring-2 focus:ring-ssgmce-blue"
          />
        </div>

        {/* Year Filter */}
        {availableYears.length > 0 && (
          <div className="relative w-full md:w-auto">
            <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="min-w-[10rem] w-full cursor-pointer appearance-none rounded-lg border border-gray-200 bg-white py-3 pl-12 pr-8 text-[0.9rem] focus:border-transparent focus:ring-2 focus:ring-ssgmce-blue md:w-auto"
            >
              <option value="">All Years</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-[0.82rem] text-gray-600 md:self-stretch">
          <span className="font-medium text-ssgmce-blue">
            {filteredDocuments.length}
          </span>
          <span className="ml-1">
            document{filteredDocuments.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Document Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          // Skeleton Loading
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : filteredDocuments.length === 0 ? (
          // Empty State
          <EmptyState />
        ) : (
          // Documents
          filteredDocuments.map((doc) => (
            <DocumentCard key={doc._id} document={doc} />
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentGrid;
