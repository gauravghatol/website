import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFlask, FaChevronRight } from "react-icons/fa";

const ResearchSidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/research/rdc", label: "RD Cell" },
    { path: "/research/policy", label: "Research Policy" },
    { path: "/research/coe", label: "Centre of Excellence" },
    { path: "/research/phd", label: "Ph.D. Centre" },
    { path: "/research/publications", label: "Publications" },
    { path: "/research/ipr", label: "IPR (Patents & Copyrights)" },
    { path: "/research/ug-projects", label: "UG Projects" },
    { path: "/research/collaboration", label: "Collaboration" },
    { path: "/research/iic", label: "IIC" },
    { path: "/research/nisp", label: "NISP" },
    { path: "/research/sabbatical", label: "Sabbatical Training" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-4">
        <h3 className="text-white font-bold text-lg flex items-center">
          <FaFlask className="mr-2" />
          Research & Innovation
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

export default ResearchSidebar;
