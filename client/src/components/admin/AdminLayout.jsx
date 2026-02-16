import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { useAuth } from "../../hooks/useAuth";
import {
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
  FaSearch,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import {
  ADMIN_GATE_PATH,
  clearAdminEntryVerified,
} from "../../config/adminAccess";

const AdminLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const { user, logout, isSuperAdmin, isCoordinator, userDepartment } = useAuth();

  // Build display name and role label from actual user data
  const displayName = user?.name || "Admin User";
  const roleLabel = isCoordinator
    ? `${userDepartment} Coordinator`
    : isSuperAdmin
    ? "Super Admin"
    : "Administrator";
  const initials = displayName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const notifications = [
    {
      id: 1,
      message: "New placement record added",
      time: "5 min ago",
      type: "success",
    },
    {
      id: 2,
      message: "Faculty profile updated",
      time: "1 hour ago",
      type: "info",
    },
    {
      id: 3,
      message: "Document approval pending",
      time: "2 hours ago",
      type: "warning",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-gray-200 shadow-sm z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search pages, content, or settings..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-gray-50"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 ml-6">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900"
                title="Toggle theme"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 hover:text-gray-900 relative"
                  title="Notifications"
                >
                  <FaBell />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                    <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                      <h3 className="font-semibold text-gray-800">
                        Notifications
                      </h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                                notif.type === "success"
                                  ? "bg-green-500"
                                  : notif.type === "warning"
                                    ? "bg-yellow-500"
                                    : "bg-blue-500"
                              }`}
                            ></div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-800">
                                {notif.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {notif.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200 bg-gray-50">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 pl-3 border-l border-gray-300">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800">
                    {displayName}
                  </p>
                  <p className="text-xs text-gray-500">{roleLabel}</p>
                </div>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold shadow-md ${
                  isCoordinator
                    ? "bg-gradient-to-br from-teal-500 to-teal-700"
                    : "bg-gradient-to-br from-blue-500 to-blue-700"
                }`}>
                  {initials}
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all font-medium text-sm"
                title="Logout"
              >
                <FaSignOutAlt />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-6">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 px-6 py-3">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <p>© 2026 SSGMCE. All rights reserved.</p>
            <p>Version 2.0.0</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
