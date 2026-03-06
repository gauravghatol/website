import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBuilding, FaChevronRight } from "react-icons/fa";

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
    <div className="sticky top-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-4">
        <h3 className="flex items-center text-lg font-bold text-white">
          <FaBuilding className="mr-2" /> Facilities
        </h3>
      </div>

      <div className="p-3">
        <nav>
          <ul className="space-y-1.5">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                      isActive
                        ? "border-l-2 border-ssgmce-orange bg-orange-50 font-semibold text-ssgmce-blue"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="whitespace-normal">{item.title}</span>
                    <FaChevronRight className="shrink-0 text-[10px] text-gray-400" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
        <p className="mb-1 text-xs font-semibold text-gray-500">Need Help?</p>
        <p className="text-xs text-ssgmce-blue">📞 +91-7265-252274</p>
        <p className="text-xs text-ssgmce-blue">✉️ info@ssgmce.ac.in</p>
      </div>
    </div>
  );
};

export default FacilitiesSidebar;
