import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * SportsSidebar Component
 * Displays navigation menu for sports-related pages
 */
const SportsSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "About Sport Department", path: "/facilities/sports/about" },
    { title: "Sports Council", path: "/facilities/sports/council" },
    { title: "Indoor Sport Facility", path: "/facilities/sports/indoor" },
    { title: "Outdoor Sport Facility", path: "/facilities/sports/outdoor" },
    { title: "Sports Achievement", path: "/facilities/sports/achievements" },
    { title: "Sport Statistics", path: "/facilities/sports/statistics" },
    { title: "Sport Staff & Contact", path: "/facilities/sports/staff" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">About Sport Department</h2>
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
        <p className="text-xs text-gray-600 mb-2 font-semibold">
          Sports Office
        </p>
        <p className="text-xs text-ssgmce-blue">📧 sports@ssgmce.ac.in</p>
        <p className="text-xs text-ssgmce-blue">📞 Ext: 105</p>
      </div>
    </div>
  );
};

export default SportsSidebar;
