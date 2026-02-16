import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * ResearchSidebar Component
 * Displays navigation menu for research-related pages
 * Theme matches other sidebars (Admissions, Facilities, etc.)
 */
const ResearchSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Research Overview", path: "/research/overview" },
    { title: "Publications", path: "/research/publications" },
    { title: "Patents & IP", path: "/research/patents" },
    { title: "Funded Projects", path: "/research/projects" },
    { title: "Innovation Cell", path: "/research/innovation" },
    { title: "R&D Cell", path: "/research/rdc" },
    { title: "Centre of Excellence", path: "/research/coe" },
    { title: "Ph.D. Centre", path: "/research/phd" },
    { title: "Research Policy", path: "/research/policy" },
    { title: "Collaborations", path: "/research/collaboration" },
    { title: "IPR Cell", path: "/research/ipr" },
    { title: "NISP", path: "/research/nisp" },
    { title: "Sabbatical Training", path: "/research/sabbatical" },
    { title: "UG Projects", path: "/research/ug-projects" },
    { title: "IIC", path: "/research/iic" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">Research & Innovation</h2>
      </div>

      {/* Navigation Links */}
      <nav className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`block px-4 py-3 transition-all duration-200 group ${isActive
                ? "bg-ssgmce-orange text-white font-semibold"
                : "text-gray-700 hover:bg-blue-50 hover:text-ssgmce-blue hover:pl-6"
                }`}
            >
              <div className="flex items-center justify-between">
                <span className={`${isActive ? "font-semibold" : ""} text-sm`}>
                  {item.title}
                </span>
                {!isActive && (
                  <FaChevronRight className="text-gray-400 group-hover:text-ssgmce-orange opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Quick Contact */}
      <div className="bg-gray-50 p-4 border-t-2 border-gray-200">
        <p className="text-xs text-gray-600 mb-2 font-semibold">
          Research Cell
        </p>
        <p className="text-xs text-ssgmce-blue">📧 research@ssgmce.ac.in</p>
        <p className="text-xs text-ssgmce-blue">📞 R&D Coordinator</p>
      </div>
    </div>
  );
};

export default ResearchSidebar;
