import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaChartLine, FaUsers, FaBuilding, FaTrophy, FaDownload } from "react-icons/fa";
import placementStatsPDF from "../../assets/images/placements/3 years Placement Stats.pdf";

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className={`${color} flex flex-col gap-1.5 rounded-lg p-4 text-white shadow-lg sm:gap-2 sm:p-5`}>
    <Icon className="text-2xl opacity-80 sm:text-3xl" />
    <div className="text-xl font-bold sm:text-2xl">{value}</div>
    <div className="text-xs opacity-90 sm:text-sm">{label}</div>
  </div>
);

const PlacementStats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Placement Statistics | SSGMCE";
    axios
      .get("/api/placements/stats")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.data || [];
        setStats(data.slice().sort((a, b) => b.academicYear.localeCompare(a.academicYear)));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const latest = stats[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Placement Statistics" subtitle="Our Placement Track Record" />

      <div className="container mx-auto max-w-[120rem] px-4 py-6 sm:px-5 sm:py-8 md:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <PlacementSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:w-3/4 lg:space-y-10">
            {loading ? (
              <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10 md:p-12">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-ssgmce-orange mx-auto mb-4" />
                <p className="text-gray-500">Loading statistics…</p>
              </div>
            ) : error || stats.length === 0 ? (
              /* Fallback: no live data yet — show PDF download */
              <section>
                <h2 className="mb-5 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-orange sm:mb-6">
                  Placement Performance
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                  SSGMCE has consistently maintained an excellent placement record. Our Training &amp; Placement Cell works tirelessly to bring top-tier companies to campus and prepare students for successful careers.
                </p>
                <div className="rounded-lg border-l-4 border-ssgmce-blue bg-white p-5 shadow-md sm:p-6 md:p-8">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">Download Detailed Statistics</h3>
                  <p className="mb-6 text-sm text-gray-700 sm:text-base">Get comprehensive placement data for the last three academic years including department-wise statistics, salary packages, and more.</p>
                  <a
                    href={placementStatsPDF}
                    download="SSGMCE_3_Years_Placement_Statistics.pdf"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:gap-3 sm:px-8 sm:py-4"
                  >
                    <FaDownload className="text-base sm:text-xl" />
                    Download 3 Years Placement Statistics (PDF)
                  </a>
                </div>
              </section>
            ) : (
              <>
                {/* Latest Year Highlights */}
                {latest && (
                  <section>
                    <h2 className="mb-2 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-orange">
                      Placement Performance — {latest.academicYear}
                    </h2>
                    <p className="mb-5 text-xs text-gray-600 sm:mb-6 sm:text-sm">
                      Highlights from our most recent placement season.
                    </p>
                    <div className="mb-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
                      <StatCard icon={FaChartLine} value={`${latest.placementPercentage}%`} label="Placement Rate" color="bg-gradient-to-br from-blue-500 to-blue-700" />
                      <StatCard icon={FaTrophy} value={`${latest.highestPackage} LPA`} label="Highest Package" color="bg-gradient-to-br from-green-500 to-green-700" />
                      <StatCard icon={FaUsers} value={latest.totalOffers} label="Total Offers" color="bg-gradient-to-br from-orange-500 to-orange-700" />
                      <StatCard icon={FaBuilding} value={latest.companiesVisited} label="Companies" color="bg-gradient-to-br from-purple-500 to-purple-700" />
                    </div>
                    {latest.averagePackage > 0 && (
                      <p className="text-xs text-gray-500 sm:text-sm">
                        Average Package: <span className="font-semibold text-gray-700">{latest.averagePackage} LPA</span>
                      </p>
                    )}
                  </section>
                )}

                {/* Year-wise Table */}
                <section>
                  <h2 className="mb-5 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-blue sm:mb-6">
                    Year-wise Statistics
                  </h2>
                  <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200 bg-white">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white">
                        <tr>
                          {["Academic Year", "Placement %", "Students Placed", "Highest (LPA)", "Average (LPA)", "Companies"].map((h) => (
                            <th key={h} className="px-5 py-4 text-left font-semibold whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {stats.map((s, i) => (
                          <tr key={s._id} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}>
                            <td className="px-5 py-4 font-bold text-ssgmce-blue">{s.academicYear}</td>
                            <td className="px-5 py-4 font-semibold text-green-600">{s.placementPercentage}%</td>
                            <td className="px-5 py-4">{s.totalOffers}</td>
                            <td className="px-5 py-4 font-semibold">{s.highestPackage} LPA</td>
                            <td className="px-5 py-4">{s.averagePackage} LPA</td>
                            <td className="px-5 py-4">{s.companiesVisited}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Department-wise breakdown for latest year */}
                {latest?.departmentWise?.length > 0 && (
                  <section>
                    <h2 className="mb-5 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-blue sm:mb-6">
                      Department-wise Placed ({latest.academicYear})
                    </h2>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
                      {latest.departmentWise.map((dw) => (
                        <div key={dw.department} className="rounded-lg border border-gray-200 bg-white p-3 text-center shadow-sm sm:p-4">
                          <div className="text-xl font-bold text-ssgmce-orange sm:text-2xl">{dw.placedCount}</div>
                          <div className="mt-1 text-xs text-gray-600 sm:text-sm">{dw.department}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* PDF Download supplement */}
                <section className="flex flex-col items-start justify-between gap-4 rounded-lg border-l-4 border-ssgmce-blue bg-blue-50 p-4 sm:flex-row sm:items-center sm:p-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Detailed Statistics PDF</h3>
                    <p className="text-xs text-gray-600 sm:text-sm">Download the full report with department-wise and company-wise data.</p>
                  </div>
                  <a
                    href={placementStatsPDF}
                    download="SSGMCE_3_Years_Placement_Statistics.pdf"
                    className="flex min-h-[42px] w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-ssgmce-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ssgmce-dark-blue sm:w-auto sm:px-5 sm:py-2.5"
                  >
                    <FaDownload /> Download PDF
                  </a>
                </section>
              </>
            )}

            <section className="rounded-lg border-l-4 border-ssgmce-blue bg-blue-50 p-4 text-xs text-gray-700 sm:p-5 sm:text-sm">
              <p className="font-semibold text-gray-800 mb-1">Note</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Statistics are updated annually after the placement season closes.</li>
                <li>Data includes both on-campus and off-campus placements coordinated by T&amp;P Cell.</li>
                <li>For queries, contact <a href="mailto:placements@ssgmce.ac.in" className="text-ssgmce-blue hover:underline">placements@ssgmce.ac.in</a>.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
