import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FaChartLine,
  FaUsers,
  FaEye,
  FaMousePointer,
  FaClock,
  FaGlobe,
} from "react-icons/fa";

const AdminAnalytics = () => {
  const metrics = [
    {
      label: "Total Page Views",
      value: "45,234",
      change: "+12.5%",
      icon: FaEye,
      color: "blue",
    },
    {
      label: "Unique Visitors",
      value: "12,456",
      change: "+8.3%",
      icon: FaUsers,
      color: "green",
    },
    {
      label: "Avg. Session Duration",
      value: "3m 45s",
      change: "+5.2%",
      icon: FaClock,
      color: "purple",
    },
    {
      label: "Bounce Rate",
      value: "42.3%",
      change: "-3.1%",
      icon: FaMousePointer,
      color: "yellow",
    },
  ];

  const topPages = [
    { page: "Home", views: 8234, change: "+15%" },
    { page: "Admissions", views: 6521, change: "+22%" },
    { page: "Placements", views: 5432, change: "+18%" },
    { page: "Departments", views: 4321, change: "+9%" },
    { page: "Faculty", views: 3210, change: "+12%" },
  ];

  const colorVariants = {
    blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600" },
    green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600" },
    purple: {
      bg: "bg-purple-500",
      light: "bg-purple-50",
      text: "text-purple-600",
    },
    yellow: {
      bg: "bg-yellow-500",
      light: "bg-yellow-50",
      text: "text-yellow-600",
    },
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Analytics Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Website performance and visitor insights
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const colors = colorVariants[metric.color];
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${colors.light} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`text-xl ${colors.text}`} />
                  </div>
                  <span
                    className={`text-sm font-semibold ${metric.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                  >
                    {metric.change}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-800">
                  {metric.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <FaChartLine className="text-blue-600" />
                Top Pages
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topPages.map((page, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-800">
                          {page.page}
                        </p>
                        <span className="text-sm font-semibold text-green-600">
                          {page.change}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{
                            width: `${(page.views / topPages[0].views) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {page.views.toLocaleString()} views
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <FaGlobe className="text-green-600" />
                Traffic Sources
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { source: "Direct", percentage: 45, color: "blue" },
                  { source: "Search Engines", percentage: 30, color: "green" },
                  { source: "Social Media", percentage: 15, color: "purple" },
                  { source: "Referrals", percentage: 10, color: "yellow" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-800">
                        {item.source}
                      </p>
                      <span className="text-sm font-semibold text-gray-600">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${colorVariants[item.color].bg} h-2 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">
                Analytics Integration
              </h4>
              <p className="text-sm text-blue-800">
                Connect Google Analytics or other analytics services to get
                real-time data and insights. This page currently shows sample
                data for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;
