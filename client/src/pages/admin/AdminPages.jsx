import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FaEdit,
  FaLayerGroup,
  FaSearch,
  FaExternalLinkAlt,
  FaClock,
  FaFilter,
} from "react-icons/fa";

const AdminPages = () => {
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || "all"
  );

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const res = await axios.get("/api/pages");
      if (res.data.success) {
        setPages(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories
  const categories = [
    "all",
    ...new Set(pages.map((p) => p.category || "Uncategorized")),
  ];

  // Filter and Group pages
  const filteredPages = pages.filter((page) => {
    const matchesSearch =
      page.pageTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || page.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const groupedPages = filteredPages.reduce((acc, page) => {
    const cat = page.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(page);
    return acc;
  }, {});

  const formatDate = (dateString) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-gray-500 animate-pulse text-lg">
            Loading pages...
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Pages Management</h1>
          <p className="text-gray-500 mt-1">
            Manage all website pages and content
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search pages by title or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:w-64">
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-800">
              {filteredPages.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-800">{pages.length}</span>{" "}
            pages
          </div>
        </div>

        {/* Pages Grid */}
        <div className="space-y-8">
          {Object.entries(groupedPages).map(([category, categoryPages]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg border border-gray-200 text-blue-600 shadow-sm">
                  <FaLayerGroup />
                </div>
                <h3 className="font-bold text-gray-800 capitalize text-lg tracking-tight">
                  {category}
                </h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full ml-auto">
                  {categoryPages.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                {categoryPages.map((page) => (
                  <Link
                    key={page.pageId}
                    to={`/admin/visual/${page.pageId}`}
                    className="block bg-gray-50 p-5 hover:shadow-lg transition-all border border-gray-200 hover:border-blue-300 rounded-xl group relative hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors text-base mb-2 truncate">
                          {page.pageTitle}
                        </h4>
                        <p className="text-xs text-gray-500 font-mono bg-white px-2 py-1 rounded border border-gray-200 w-fit truncate max-w-full">
                          {page.route}
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0">
                        <FaEdit />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-1.5">
                        <FaClock />
                        <span>{formatDate(page.updatedAt)}</span>
                      </div>
                      <span className="text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Edit <FaExternalLinkAlt className="text-[10px]" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {Object.keys(groupedPages).length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 text-3xl">
                <FaSearch />
              </div>
              <h3 className="text-gray-800 font-bold text-xl">
                No pages found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPages;
