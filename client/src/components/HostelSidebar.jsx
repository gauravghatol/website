import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * HostelSidebar Component
 * Displays navigation menu for hostel-related pages
 */
const HostelSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Hostel Policy, Rule and Code of Conduct",
      path: "/facilities/hostel/policy",
    },
    { title: "Hostel Committee", path: "/facilities/hostel/committee" },
    { title: "Hostel Brochure", path: "/facilities/hostel/brochure" },
    {
      title: "Anti-Ragging Committee",
      path: "/facilities/hostel/anti-ragging",
    },
    {
      title: "Minutes of the Meeting",
      path: "/facilities/hostel/minutes",
    },
    {
      title: "Anti-Ragging Committee Annual Reports",
      path: "/facilities/hostel/reports",
    },
    {
      title: "Anti-Ragging Posters",
      path: "/facilities/hostel/posters",
    },
    { title: "AICTE Letters", path: "/facilities/hostel/aicte" },
    {
      title: "Anti-Ragging Notices",
      path: "/facilities/hostel/notices",
    },
    {
      title: "Hostel Fee Structure",
      path: "/facilities/hostel/fees",
    },
    {
      title: "Hostel Accommodation Provision",
      path: "/facilities/hostel/accommodation",
    },
    {
      title: "Hostel Admission form",
      path: "/facilities/hostel/admission",
    },
    {
      title: "Hostel Feedback form",
      path: "/facilities/hostel/feedback",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">Hostel</h2>
      </div>

      {/* Navigation Links */}
      <nav className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
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
          Hostel Office
        </p>
        <p className="text-xs text-ssgmce-blue">📧 hostel@ssgmce.ac.in</p>
        <p className="text-xs text-ssgmce-blue">📞 Hostel Warden</p>
      </div>
    </div>
  );
};

export default HostelSidebar;
