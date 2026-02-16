import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * FacilitiesSidebar Component
 * Displays navigation menu for facilities pages
 */
const FacilitiesSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Central Library", path: "/facilities/library" },
    { title: "Hostel", path: "/facilities/hostels" },
    { title: "Sports", path: "/facilities/sports" },
    { title: "Other Facilities", path: "/facilities/other" },
    { title: "Central Computing Facility", path: "/facilities/computing" },
    {
      title: "Administrative Office",
      path: "/facilities/administrative-office",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">Facilities</h2>
      </div>

      {/* Navigation Links */}
      <nav className="divide-y divide-gray-200">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={index}
              to={item.path}
              className={`block px-4 py-3 transition-all duration-200 group ${
                isActive
                  ? "bg-ssgmce-orange text-white font-semibold"
                  : "text-gray-700 hover:bg-blue-50 hover:text-ssgmce-blue hover:pl-6"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`${isActive ? "font-semibold" : ""}`}>
                  {item.title}
                </span>
                {!isActive && (
                  <FaChevronRight className="text-gray-400 group-hover:text-ssgmce-orange opacity-0 group-hover:opacity-100 transition-all duration-200" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Quick Contact */}
      <div className="bg-gray-50 p-4 border-t-2 border-gray-200">
        <p className="text-xs text-gray-600 mb-2 font-semibold">Need Help?</p>
        <p className="text-xs text-ssgmce-blue">📞 +91-7265-252274</p>
        <p className="text-xs text-ssgmce-blue">✉️ info@ssgmce.ac.in</p>
      </div>
    </div>
  );
};

export default FacilitiesSidebar;
