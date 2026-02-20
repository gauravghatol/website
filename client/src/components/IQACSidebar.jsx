import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaClipboardList, FaChevronRight } from "react-icons/fa";

const IQACSidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/iqac/vision", label: "Vision & Mission" },
    { path: "/iqac/composition", label: "Composition & Function" },
    { path: "/iqac/minutes", label: "Minutes of Meeting" },
    { path: "/iqac/practices", label: "Best Practices" },
    { path: "/iqac/distinctiveness", label: "Institutional Distinctiveness" },
    { path: "/iqac/aqar", label: "AQAR Reports" },
    { path: "/iqac/naac", label: "NAAC-SSR 3rd Cycle" },
    { path: "/iqac/econtent", label: "e-Content" },
    { path: "/iqac/econtent-facility", label: "e-Content Facility" },
    { path: "/iqac/feedback", label: "Feedback Report" },
    { path: "/iqac/analysis", label: "Feedback Analysis" },
    { path: "/iqac/survey", label: "Student Survey Report" },
    { path: "/iqac/gender", label: "Gender Sensitization Plan" },
    { path: "/iqac/equity", label: "Gender Equity" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-4">
        <h3 className="text-white font-bold text-lg flex items-center">
          <FaClipboardList className="mr-2" />
          IQAC
        </h3>
      </div>
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "bg-ssgmce-saffron/10 text-ssgmce-blue font-semibold border-l-2 border-ssgmce-saffron"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{link.label}</span>
                  <FaChevronRight className="text-xs" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default IQACSidebar;
