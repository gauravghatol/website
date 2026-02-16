import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FaUniversity,
  FaExternalLinkAlt,
  FaYoutube,
  FaImage,
  FaClock,
  FaBold,
  FaItalic,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaFont,
  FaPalette,
} from "react-icons/fa";
import { ADMIN_ROUTE_PREFIX } from "../../config/adminAccess";

const AdminDepartments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get("/api/pages", {
          params: { category: "departments" },
        });
        if (res.data?.success) {
          setDepartments(res.data.data || []);
        }
      } catch (error) {
        console.error("Failed to load department pages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Departments Management
          </h1>
          <p className="text-gray-500 mt-2">
            Use the visual editor to update department content with full rich
            text formatting capabilities. Edit every word on department pages
            with professional formatting tools.
          </p>

          {/* Rich Text Features Section */}
          <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <FaPalette className="text-purple-600" />
              Rich Text Editing Features
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              All multiline text content automatically supports rich formatting:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Font Features */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <FaFont className="text-blue-600" />
                  <h3 className="font-bold text-sm text-gray-800">
                    Font Options
                  </h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 8 Font families</li>
                  <li>• 13 Font sizes (10px-72px)</li>
                  <li>• Text & background colors</li>
                </ul>
              </div>

              {/* Text Formatting */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <FaBold className="text-green-600" />
                  <h3 className="font-bold text-sm text-gray-800">
                    Text Formatting
                  </h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-1">
                    • <FaBold className="text-xs" /> Bold
                  </li>
                  <li className="flex items-center gap-1">
                    • <FaItalic className="text-xs" /> Italic
                  </li>
                  <li>• Underline & Strikethrough</li>
                </ul>
              </div>

              {/* Alignment */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <FaAlignCenter className="text-orange-600" />
                  <h3 className="font-bold text-sm text-gray-800">
                    Text Alignment
                  </h3>
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li className="flex items-center gap-1">
                    • <FaAlignLeft className="text-xs" /> Left
                  </li>
                  <li className="flex items-center gap-1">
                    • <FaAlignCenter className="text-xs" /> Center
                  </li>
                  <li className="flex items-center gap-1">
                    • <FaAlignRight className="text-xs" /> Right
                  </li>
                  <li className="flex items-center gap-1">
                    • <FaAlignJustify className="text-xs" /> Justify
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-lg">
              <p className="text-xs text-blue-900 font-medium">
                💡 <strong>Tip:</strong> Click on any paragraph text in the
                visual editor to access the full rich text toolbar. All your
                formatting will be saved when you click "Save All Changes".
              </p>
            </div>
          </div>

          {/* Original Features */}
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full border border-red-200">
              <FaYoutube /> Edit YouTube Links
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              <FaImage /> Upload Faculty Photos
            </span>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
            Loading department pages...
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((dept) => (
              <Link
                key={dept.pageId}
                to={`${ADMIN_ROUTE_PREFIX}/visual/${dept.pageId}`}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                      {dept.pageTitle}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                      {dept.route}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FaUniversity />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                  <span className="flex items-center gap-1">
                    <FaClock />
                    {formatDate(dept.updatedAt)}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 font-semibold">
                    Open Editor <FaExternalLinkAlt className="text-[10px]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDepartments;
