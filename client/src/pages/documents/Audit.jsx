import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const auditCategories = [
  {
    id: "audit-energy",
    title: "Energy Audit",
    reports: [
      { label: "Energy Audit 2023-24", url: "/uploads/documents/audit/Energy_Audit_2023-24.pdf" },
    ],
  },
  {
    id: "audit-environmental",
    title: "Environmental Audit",
    reports: [
      { label: "Environmental Audit 2023-24", url: "/uploads/documents/audit/Environmental_Audit_2023-24.pdf" },
    ],
  },
  {
    id: "audit-green",
    title: "Green Audit",
    reports: [
      { label: "Green Audit 2023-24", url: "/uploads/documents/audit/Green_Audit_2023-24.pdf" },
    ],
  },
];

const Audit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sustainable Audit | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sustainable Audit"
        subtitle="Energy, Environmental & Green Audit Reports"
        backgroundImage="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80"
      />

      <div className="mx-auto w-full max-w-[120rem] px-4 py-10 sm:px-5 sm:py-12 lg:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <DocumentsSidebar />
          </div>

          <div className="space-y-6 sm:space-y-8 lg:col-span-9">
            {/* About */}
            <div id="audit-about" className="rounded-xl bg-white p-5 shadow-md sm:p-6">
              <h2 className="mb-3 text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold text-gray-800">About Sustainable Audit</h2>
              <p className="text-gray-600 leading-relaxed">
                SSGMCE conducts regular sustainability audits covering energy consumption, environmental impact, and green campus initiatives.
                These audits assess the institute's commitment to sustainable development and provide actionable recommendations.
              </p>
            </div>

            {/* Audit Categories */}
            <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
              {auditCategories.map((category) => (
                <div key={category.title} id={category.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-4 text-white sm:px-5">
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>
                  <div className="p-5 space-y-3">
                    {category.reports.map((report) => (
                      <a
                        key={report.label}
                        href={report.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-ssgmce-blue hover:bg-blue-50 transition-all group"
                      >
                        <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                          <FaFilePdf className="text-red-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-ssgmce-blue transition-colors truncate">
                            {report.label}
                          </p>
                          <p className="text-xs text-gray-500">PDF Report</p>
                        </div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-ssgmce-blue text-xs flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
