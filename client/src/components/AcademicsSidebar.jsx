import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGraduationCap, FaChevronRight } from "react-icons/fa";

const AcademicsSidebar = () => {
  const location = useLocation();

  const links = [
    { path: "/academics/planner", label: "Academic Planner & Calendar" },
    { path: "/academics/teaching", label: "Teaching Learning Process" },
    { path: "/academics/timetable", label: "Central Time Table" },
    { path: "/academics/rules", label: "Rules & Regulations" },
    { path: "/academics/syllabus", label: "Schemes & Syllabus" },
    { path: "/academics/incentive", label: "Incentive Marks Scheme" },
    { path: "/academics/marks", label: "Sessional Marks Evaluation" },
    { path: "/academics/rubrics", label: "Rubrics" },
    { path: "/academics/innovative", label: "Innovative Practices" },
    { path: "/academics/notices", label: "Notice for Students" },
    { path: "/academics/reports", label: "Annual Reports" },
  ];

  return (
    <div className="sticky top-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-4">
        <h3 className="flex items-center text-lg font-bold text-white">
          <FaGraduationCap className="mr-2" />
          Academics
        </h3>
      </div>
      <div className="p-3">
        <nav>
          <ul className="space-y-1.5">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm leading-snug transition-colors ${
                    location.pathname === link.path
                      ? "border-l-2 border-ssgmce-saffron bg-ssgmce-saffron/10 font-semibold text-ssgmce-blue"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="whitespace-normal">{link.label}</span>
                  <FaChevronRight className="shrink-0 text-[10px]" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AcademicsSidebar;
