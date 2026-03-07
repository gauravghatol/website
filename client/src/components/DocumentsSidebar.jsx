import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFolderOpen, FaChevronRight } from "react-icons/fa";

const DocumentsSidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/documents/policies", label: "Policies and Procedure" },
    { path: "/documents/disclosure", label: "Mandatory Disclosure" },
    { path: "/documents/naac", label: "NAAC" },
    { path: "/documents/nba", label: "NBA" },
    { path: "/documents/iso", label: "ISO" },
    { path: "/documents/nirf", label: "NIRF" },
    { path: "/documents/audit", label: "Sustainable Audit" },
    { path: "/documents/aicte", label: "AICTE Approval" },
    { path: "/documents/financial", label: "Financial Statements" },
    { path: "/documents/newsletter", label: "News Letters" },
    { path: "/documents/tattwadarshi", label: "e-Tattwadarshi" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-amber-700 to-amber-800 p-4">
        <h3 className="text-white font-bold text-lg flex items-center">
          <FaFolderOpen className="mr-2" />
          Documents
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
                      ? "bg-amber-100 text-amber-700 font-semibold"
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

export default DocumentsSidebar;
