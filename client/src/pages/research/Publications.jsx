import React, { useEffect, useState, useCallback } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaSearch,
  FaFilter,
  FaFileAlt,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaBook,
  FaUsers,
  FaCalendarAlt
} from 'react-icons/fa';
import axios from 'axios';

// Skeleton Loader
const PublicationSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-md animate-pulse">
    <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="flex gap-2 mb-3">
      <div className="h-6 bg-gray-200 rounded-full w-20"></div>
      <div className="h-6 bg-gray-200 rounded-full w-24"></div>
    </div>
    <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
  </div>
);

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    department: '',
    year: '',
    type: '',
    search: ''
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0
  });

  const departments = ['CSE', 'IT', 'ENTC', 'EE', 'ME', 'CE', 'MBA', 'Applied Sciences'];
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
  const types = [
    { value: 'journal', label: 'Journal Papers' },
    { value: 'conference', label: 'Conference Papers' },
    { value: 'book', label: 'Book Chapters' },
    { value: 'thesis', label: 'Thesis' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Publications | Research - SSGMCE';
  }, []);

  const fetchPublications = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.department) params.append('department', filters.department);
      if (filters.year) params.append('year', filters.year);
      if (filters.type) params.append('type', filters.type);
      if (filters.search) params.append('search', filters.search);
      params.append('page', pagination.page);
      params.append('limit', pagination.limit);

      const res = await axios.get(`/api/research/publications?${params}`);
      setPublications(res.data.publications);
      setPagination(prev => ({
        ...prev,
        total: res.data.pagination.total,
        pages: res.data.pagination.pages
      }));
    } catch (error) {
      console.error('Error fetching publications:', error);
    } finally {
      setLoading(false);
    }
  }, [filters, pagination.page, pagination.limit]);

  useEffect(() => {
    fetchPublications();
  }, [fetchPublications]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPublications();
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'journal': return 'bg-blue-100 text-blue-700';
      case 'conference': return 'bg-orange-100 text-orange-700';
      case 'book': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Research Publications"
        subtitle="Explore Our Academic Contributions to Knowledge"
        breadcrumbs={[
          { label: 'Research', link: '/research' },
          { label: 'Publications' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-6">
            {/* Search & Filters */}
            <section className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <form onSubmit={handleSearch} className="space-y-4">
                {/* Search Bar */}
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by title, author, or keywords..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Filter Row */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-gray-500">
                    <FaFilter />
                    <span className="text-sm font-medium">Filter:</span>
                  </div>

                  <select
                    value={filters.department}
                    onChange={(e) => handleFilterChange('department', e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>

                  <select
                    value={filters.year}
                    onChange={(e) => handleFilterChange('year', e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>

                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Types</option>
                    {types.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>

                  {(filters.department || filters.year || filters.type || filters.search) && (
                    <button
                      type="button"
                      onClick={() => setFilters({ department: '', year: '', type: '', search: '' })}
                      className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>
              </form>

              {/* Results Count */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-bold text-blue-600">{publications.length}</span> of{' '}
                  <span className="font-bold">{pagination.total}</span> publications
                </p>
              </div>
            </section>

            {/* Publications List */}
            <section className="space-y-4">
              {loading ? (
                Array(5).fill(0).map((_, i) => <PublicationSkeleton key={i} />)
              ) : publications.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl shadow-lg text-center">
                  <FaFileAlt className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No Publications Found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                publications.map((pub, idx) => (
                  <div
                    key={pub._id || idx}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <FaUsers className="text-blue-500" />
                      <p className="text-sm">{pub.authors?.join(', ')}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(pub.type)}`}>
                        {pub.type === 'journal' ? 'Journal' : pub.type === 'conference' ? 'Conference' : pub.type}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 flex items-center gap-1">
                        <FaCalendarAlt /> {pub.year}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {pub.department}
                      </span>
                    </div>

                    {/* Publisher/Journal */}
                    {(pub.journalName || pub.publisher) && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <FaBook className="text-orange-500" />
                        <p>
                          <span className="font-medium">{pub.journalName || pub.publisher}</span>
                          {pub.volume && <span>, Vol. {pub.volume}</span>}
                          {pub.issue && <span>({pub.issue})</span>}
                          {pub.pages && <span>, pp. {pub.pages}</span>}
                        </p>
                      </div>
                    )}

                    {/* Abstract */}
                    {pub.abstract && (
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">{pub.abstract}</p>
                    )}

                    {/* DOI Link */}
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <FaExternalLinkAlt /> DOI: {pub.doi}
                      </a>
                    )}
                  </div>
                ))
              )}
            </section>

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaChevronLeft />
                </button>

                {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                  let page;
                  if (pagination.pages <= 5) {
                    page = i + 1;
                  } else if (pagination.page <= 3) {
                    page = i + 1;
                  } else if (pagination.page >= pagination.pages - 2) {
                    page = pagination.pages - 4 + i;
                  } else {
                    page = pagination.page - 2 + i;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setPagination(prev => ({ ...prev, page }))}
                      className={`w-10 h-10 rounded-lg font-medium transition-colors ${pagination.page === page
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page === pagination.pages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
