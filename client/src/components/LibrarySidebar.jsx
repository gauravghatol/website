import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * LibrarySidebar Component
 * Displays navigation menu for library-related pages
 */
const LibrarySidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "About Library", path: "/facilities/library/about" },
    { title: "Library Rules", path: "/facilities/library/rules" },
    { title: "Working Hours", path: "/facilities/library/hours" },
    { title: "Library Services", path: "/facilities/library/services" },
    { title: "Library Facilities", path: "/facilities/library/facilities" },
    { title: "NPTEL", path: "/facilities/library/nptel" },
    {
      title: "NPTEL- Faculty Achievers",
      path: "/facilities/library/nptel-faculty",
    },
    {
      title: "NPTEL- Student Achievers",
      path: "/facilities/library/nptel-students",
    },
    { title: "Coursera@SSGMCE", path: "/facilities/library/coursera" },
    { title: "Book Details", path: "/facilities/library/books" },
    { title: "Library Staff", path: "/facilities/library/staff" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">About Library</h2>
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
          Library Contact
        </p>
        <p className="text-xs text-ssgmce-blue">📧 library@ssgmce.ac.in</p>
        <p className="text-xs text-ssgmce-blue">⏰ 8:30 AM - 5:30 PM</p>
      </div>
    </div>
  );
};

export default LibrarySidebar;
