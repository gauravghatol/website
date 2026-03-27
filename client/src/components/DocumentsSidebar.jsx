import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    path: "/documents/policies",
    label: "Policies and Procedure",
  },
  {
    path: "/documents/disclosure",
    label: "Mandatory Disclosure",
  },
  {
    path: "/documents/naac",
    label: "NAAC",
    subsections: [
      { id: "naac-status", title: "Accreditation Status" },
      { id: "naac-cycles", title: "Accreditation Cycles" },
    ],
  },
  {
    path: "/documents/nba",
    label: "NBA",
    subsections: [
      { id: "nba-status", title: "Accreditation Status" },
      { id: "nba-table", title: "Accreditation Details" },
    ],
  },
  { path: "/documents/iso", label: "ISO" },
  {
    path: "/documents/nirf",
    label: "NIRF",
    subsections: [
      { id: "nirf-about", title: "About NIRF" },
      { id: "nirf-rankings", title: "Rankings" },
    ],
  },
  {
    path: "/documents/audit",
    label: "Sustainable Audit",
    subsections: [
      { id: "audit-about", title: "About" },
      { id: "audit-energy", title: "Energy Audit" },
      { id: "audit-environmental", title: "Environmental Audit" },
      { id: "audit-green", title: "Green Audit" },
    ],
  },
  { path: "/documents/aicte", label: "AICTE Approval" },
  { path: "/documents/financial", label: "Financial Statements" },
  { path: "/documents/newsletter", label: "News Letters" },
  { path: "/documents/tattwadarshi", label: "e-Tattwadarshi" },
];

const DocumentsSidebar = () => {
  const location = useLocation();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <aside className="h-fit w-full lg:sticky lg:top-36 lg:self-start lg:w-72">
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <h3 className="mb-4 flex items-center border-b border-gray-100 pb-2 text-[clamp(1rem,2vw,1.1rem)] font-bold text-gray-800">
          <span className="w-1.5 h-6 bg-ssgmce-orange rounded-full mr-2"></span>
          Quick Links
        </h3>
        <ul className="space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block rounded-lg px-3.5 py-2.5 text-[clamp(0.8rem,1.4vw,0.9rem)] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-ssgmce-blue text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:text-ssgmce-blue"
                  }`}
                >
                  {link.label}
                </Link>

                {isActive && link.subsections && link.subsections.length > 0 && (
                  <ul className="mt-1 mb-2 ml-4 pl-3 border-l-2 border-blue-200 space-y-1">
                    {link.subsections.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={`#${sub.id}`}
                          onClick={(e) => handleScroll(e, sub.id)}
                          className="block rounded px-3 py-1.5 text-[0.75rem] text-gray-500 transition-colors hover:bg-blue-50 hover:text-ssgmce-blue"
                        >
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default DocumentsSidebar;
