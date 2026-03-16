import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import { FaSearch, FaChevronRight, FaChevronDown } from "react-icons/fa";
import {
  ACADEMICS_PAGE_LABEL_BY_ROUTE,
  ACADEMICS_PAGE_ORDER_BY_ROUTE,
  isAcademicsWebsiteRoute,
} from "../../constants/academicsPages";

const CATEGORY_ORDER = [
  "about",
  "nirf",
  "academics",
  "admissions",
  "research",
  "facilities",
  "placements",
  "iqac",
  "documents",
  "activities",
  "departments",
];

const CATEGORY_COLORS = {
  about: "#3b82f6",
  nirf: "#e11d48",
  academics: "#06b6d4",
  admissions: "#a855f7",
  research: "#ec4899",
  facilities: "#10b981",
  placements: "#f97316",
  iqac: "#6366f1",
  documents: "#64748b",
  activities: "#8b5cf6",
  departments: "#f59e0b",
};

// Valid top-level department pageIds — orphan sub-pages should be excluded
const VALID_DEPT_PAGEIDS = new Set([
  "departments-cse",
  "departments-it",
  "departments-entc",
  "departments-electrical",
  "departments-mechanical",
  "departments-mba",
  "departments-applied-sciences",
]);

const isLegacyAcademicsPage = (page) =>
  (page.category || "").toLowerCase() === "academics" &&
  !isAcademicsWebsiteRoute(page.route);

const isVisiblePage = (page) => {
  if (isLegacyAcademicsPage(page)) return false;

  // Exclude orphan department sub-pages (only show the 7 main departments)
  if (
    page.category === "departments" &&
    !VALID_DEPT_PAGEIDS.has(page.pageId)
  ) {
    return false;
  }

  return true;
};

const AdminPages = () => {
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || "all",
  );
  const [collapsed, setCollapsed] = useState({});

  const toggleCategory = (cat) =>
    setCollapsed((prev) => ({ ...prev, [cat]: !prev[cat] }));

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

  const visiblePages = pages.filter(isVisiblePage);

  const categories = [
    "all",
    ...new Set(visiblePages.map((p) => p.category || "Uncategorized")),
  ];

  const filteredPages = visiblePages.filter((page) => {

    const normalizedCategory = (page.category || "").toLowerCase();
    const effectiveTitle =
      normalizedCategory === "academics"
        ? ACADEMICS_PAGE_LABEL_BY_ROUTE[page.route] || page.pageTitle
        : page.pageTitle;

    const matchesSearch =
      (effectiveTitle || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      normalizedCategory.includes(searchTerm.toLowerCase());

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
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-gray-400 dark:text-gray-500 animate-pulse">
            Loading pages...
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-3">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              Pages
            </h1>
            <p className="text-base text-gray-400 dark:text-gray-500 mt-0.5">
              {filteredPages.length} of {visiblePages.length} pages
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-600 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-2 text-base rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 w-52 focus:w-64 transition-all focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="text-base rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none appearance-none pr-7"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all"
                    ? "All"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-[#1a1a2e] rounded-xl border border-gray-200/80 dark:border-gray-800 overflow-hidden">
          {Object.entries(groupedPages)
            .sort(([a], [b]) => {
              const ai = CATEGORY_ORDER.indexOf(a.toLowerCase());
              const bi = CATEGORY_ORDER.indexOf(b.toLowerCase());
              return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
            })
            .map(([category, categoryPages], idx) => {
              const color =
                CATEGORY_COLORS[category.toLowerCase()] || "#6b7280";
              const isCollapsed = collapsed[category];
              const orderedCategoryPages =
                category.toLowerCase() === "academics"
                  ? [...categoryPages].sort(
                      (a, b) =>
                        (ACADEMICS_PAGE_ORDER_BY_ROUTE[a.route] ?? Number.MAX_SAFE_INTEGER) -
                        (ACADEMICS_PAGE_ORDER_BY_ROUTE[b.route] ?? Number.MAX_SAFE_INTEGER),
                    )
                  : categoryPages;

              return (
                <div key={category}>
                  {/* Category Row */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors ${idx > 0 ? "border-t border-gray-100 dark:border-gray-800" : ""}`}
                  >
                    {isCollapsed ? (
                      <FaChevronRight className="text-xs text-gray-400 dark:text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-xs text-gray-400 dark:text-gray-500" />
                    )}
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-base font-semibold text-gray-600 dark:text-gray-300 capitalize tracking-wide">
                      {category}
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 ml-1">
                      {categoryPages.length}
                    </span>
                  </button>

                  {/* Pages */}
                  {!isCollapsed && (
                    <div className="grid grid-cols-2 gap-x-0 border-t border-gray-100 dark:border-gray-800/60">
                      {orderedCategoryPages.map((page) => {
                        const displayTitle =
                          category.toLowerCase() === "academics"
                            ? ACADEMICS_PAGE_LABEL_BY_ROUTE[page.route] || page.pageTitle
                            : page.pageTitle;

                        return (
                          <Link
                            key={page.pageId}
                            to={`/admin/visual/${page.pageId}`}
                            className="flex items-center px-4 py-2 pl-11 border-b border-gray-50 dark:border-gray-800/40 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group"
                          >
                            <span className="flex-1 text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                              {displayTitle}
                            </span>
                            <FaChevronRight className="text-[10px] text-gray-200 dark:text-gray-700 group-hover:text-blue-400 ml-2 flex-shrink-0 transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

          {Object.keys(groupedPages).length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                No pages match your search
              </p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPages;
