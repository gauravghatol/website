import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  FaHome,
  FaFileAlt,
  FaNewspaper,
  FaBullhorn,
  FaCalendarAlt,
  FaUserGraduate,
  FaBriefcase,
  FaUniversity,
  FaFileImage,
  FaChartLine,
  FaUsers,
  FaBookOpen,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaClipboardList,
  FaFlask,
  FaEye,
  FaBars,
  FaUserShield,
  FaHistory,
} from "react-icons/fa";

const DEPT_TO_PAGEID = {
  CSE: 'departments-cse',
  IT: 'departments-it',
  MECH: 'departments-mechanical',
  ELECTRICAL: 'departments-electrical',
  ENTC: 'departments-entc',
  MBA: 'departments-mba',
  ASH: 'departments-applied-sciences',
};

const AdminSidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const { isSuperAdmin, isCoordinator, userDepartment } = useAuth();

  // The visual-editor link for this coordinator's department page
  const coordDeptPagePath = isCoordinator
    ? `/admin/visual/${DEPT_TO_PAGEID[userDepartment] || ''}`
    : null;

  // Items that only SuperAdmin can see
  const superAdminOnly = (item) => ({ ...item, superAdminOnly: true });

  const allMenuItems = [
    {
      title: "Overview",
      items: [
        { name: "Dashboard", path: "/admin", icon: FaHome },
        superAdminOnly({ name: "Analytics", path: "/admin/analytics", icon: FaChartLine }),
      ],
    },
    {
      title: "Content Management",
      superAdminOnly: true,
      items: [
        { name: "Pages", path: "/admin/pages", icon: FaFileAlt },
        { name: "News & Updates", path: "/admin/news", icon: FaNewspaper },
        { name: "Notices", path: "/admin/notices", icon: FaBullhorn },
        { name: "Events", path: "/admin/events", icon: FaCalendarAlt },
        { name: "Popup Banner", path: "/admin/popup-banner", icon: FaEye },
        { name: "Menu Manager", path: "/admin/menu-manager", icon: FaBars },
      ],
    },
    {
      title: "Academic",
      items: [
        superAdminOnly({ name: "Departments", path: "/admin/departments", icon: FaUniversity }),
        ...(isCoordinator && coordDeptPagePath
          ? [{ name: "My Department", path: coordDeptPagePath, icon: FaUniversity }]
          : []),
        superAdminOnly({ name: "Faculty", path: "/admin/faculty", icon: FaUserGraduate }),
        superAdminOnly({ name: "Research", path: "/admin/research", icon: FaFlask }),
        superAdminOnly({ name: "IQAC", path: "/admin/iqac", icon: FaClipboardList }),
      ],
    },
    {
      title: "Student Data",
      superAdminOnly: true,
      items: [
        { name: "Placements", path: "/admin/placements", icon: FaBriefcase },
        { name: "Recruiters", path: "/admin/recruiters", icon: FaUsers },
      ],
    },
    {
      title: "Resources",
      superAdminOnly: true,
      items: [
        { name: "Documents", path: "/admin/documents", icon: FaFileImage },
        { name: "NIRF Data", path: "/admin/nirf", icon: FaGraduationCap },
      ],
    },
    {
      title: "System",
      items: [
        superAdminOnly({ name: "Coordinators", path: "/admin/coordinators", icon: FaUserShield }),
        superAdminOnly({ name: "Activity Log", path: "/admin/activity-log", icon: FaHistory }),
        { name: "Settings", path: "/admin/settings", icon: FaCog },
      ],
    },
  ];

  // Filter menu based on role
  const menuItems = allMenuItems
    .filter((section) => !section.superAdminOnly || isSuperAdmin)
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => !item.superAdminOnly || isSuperAdmin),
    }))
    .filter((section) => section.items.length > 0);

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-300 flex flex-col relative shadow-2xl border-r border-slate-700`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
                S
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">SSGMCE</h1>
                <p className="text-xs text-slate-400">Admin Panel</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`${
              collapsed ? "mx-auto" : ""
            } p-2 hover:bg-slate-700/50 rounded-lg transition-colors text-slate-400 hover:text-white`}
          >
            {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
        {menuItems.map((section, idx) => (
          <div key={idx} className="mb-6">
            {!collapsed && (
              <div className="px-4 mb-2">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {section.title}
                </h3>
              </div>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <li key={itemIdx}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group ${
                        active
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                      }`}
                      title={collapsed ? item.name : ""}
                    >
                      <Icon
                        className={`text-lg ${collapsed ? "mx-auto" : ""} ${active ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`}
                      />
                      {!collapsed && (
                        <span className="font-medium text-sm">{item.name}</span>
                      )}
                      {!collapsed && active && (
                        <div className="ml-auto w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50">
        {!collapsed ? (
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
            <p className="text-xs text-slate-400 mb-1">Quick Tip</p>
            <p className="text-xs text-slate-300">
              Use Ctrl+K to quickly search for content
            </p>
          </div>
        ) : (
          <div className="w-8 h-8 bg-slate-800 rounded-lg mx-auto flex items-center justify-center">
            <FaBookOpen className="text-slate-400 text-sm" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;
