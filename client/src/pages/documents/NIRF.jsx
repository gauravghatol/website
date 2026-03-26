import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

// Static NIRF data - PDFs downloaded from https://www.ssgmce.ac.in/IQAC_NIRF.php
const nirfData = [
  {
    year: "2022-23",
    reports: [
      { category: "Overall Ranking", url: "/uploads/documents/nirf/NIRF_2022-23_Overall.pdf" },
      { category: "Engineering Ranking", url: "/uploads/documents/nirf/NIRF_2022-23_Engineering.pdf" },
      { category: "Management Ranking", url: "/uploads/documents/nirf/NIRF_2022-23_Management.pdf" },
    ],
  },
  {
    year: "2021-22",
    reports: [
      { category: "Overall Ranking", url: null },
      { category: "Engineering Ranking", url: "/uploads/documents/nirf/NIRF_2021-22_Engineering.pdf" },
      { category: "Management Ranking", url: null },
    ],
  },
  {
    year: "2020-21",
    reports: [
      { category: "Overall Ranking", url: null },
      { category: "Engineering Ranking", url: null },
      { category: "Management Ranking", url: null },
    ],
  },
];

const NIRF = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NIRF Rankings | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NIRF Rankings"
        subtitle="National Institutional Ranking Framework"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
      />

      <div className="mx-auto w-full max-w-[120rem] px-4 py-10 sm:px-5 sm:py-12 lg:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <DocumentsSidebar />
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-9">
            {/* About NIRF */}
            <div id="nirf-about" className="rounded-xl bg-white p-5 shadow-md sm:p-6">
              <h2 className="mb-3 text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold text-gray-800">About NIRF</h2>
              <p className="text-gray-600 leading-relaxed">
                The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched on 29th September 2015.
                This framework outlines a methodology to rank institutions across the country based on parameters such as
                Teaching, Learning & Resources, Research and Professional Practice, Graduation Outcomes, Outreach and Inclusivity,
                and Perception.
              </p>
            </div>

            {/* NIRF Report Heading */}
            <div id="nirf-rankings" className="flex items-center gap-3">
              <FaCalendarAlt className="text-xl text-ssgmce-orange sm:text-2xl" />
              <h2 className="text-[clamp(1.2rem,2.8vw,1.5rem)] font-bold text-gray-800">Data Submitted To NIRF</h2>
            </div>

            {/* Year-wise NIRF Reports - 3-column layout matching original site */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              {nirfData.map((yearData) => (
                <div key={yearData.year} className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">NIRF {yearData.year}</h3>
                  <div className="flex flex-col items-center gap-3">
                    {yearData.reports.map((report) =>
                      report.url ? (
                        <a
                          key={report.category}
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full max-w-[14rem] rounded bg-[#4a8db7] px-4 py-3 text-center text-sm font-medium text-white shadow transition-colors hover:bg-[#3a7da7]"
                        >
                          {report.category}
                        </a>
                      ) : (
                        <span
                          key={report.category}
                          className="w-full max-w-[14rem] cursor-not-allowed rounded bg-[#4a8db7] px-4 py-3 text-center text-sm font-medium text-white opacity-60 shadow"
                        >
                          {report.category}
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* External NIRF Link */}
            <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-5 sm:gap-4 sm:p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:h-12 sm:w-12">
                <FaExternalLinkAlt className="text-ssgmce-blue" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Visit the official NIRF portal for detailed rankings</p>
                <a
                  href="https://www.nirfindia.org/Home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ssgmce-blue font-semibold hover:underline"
                >
                  www.nirfindia.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRF;
