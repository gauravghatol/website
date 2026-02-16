import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

/**
 * AdmissionsSidebar Component
 * Displays navigation menu for admission-related pages
 */
const AdmissionsSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: "Institute Brochure", path: "/admissions/brochure" },
    { title: "Under-Graduate Program (UG)", path: "/admissions/ug" },
    { title: "Post-Graduate Program (PG)", path: "/admissions/pg" },
    { title: "Direct Second Year Engineering (DSE)", path: "/admissions/dse" },
    { title: "MBA", path: "/admissions/mba" },
    { title: "Fee Structure", path: "/admissions/fees" },
    { title: "Admission Process", path: "/admissions/process" },
    { title: "Seat Matrix", path: "/admissions/seat-matrix" },
    { title: "Documents Required", path: "/admissions/documents" },
    { title: "Scholarships", path: "/admissions/scholarships" },
    { title: "FAQs", path: "/admissions/faqs" },
    { title: "Contact Admission Office", path: "/admissions/contact" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4 border-b-4 border-ssgmce-orange">
        <h2 className="text-xl font-bold">Admission</h2>
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
        <p className="text-xs text-ssgmce-blue">✉️ admission@ssgmce.ac.in</p>
      </div>
    </div>
  );
};

export default AdmissionsSidebar;
