import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaDownload, FaBuilding, FaGlobe, FaExternalLinkAlt } from "react-icons/fa";
import recruitersPDF from "../../assets/images/placements/OUR RECRUITERS.pdf";

const CATEGORY_COLORS = {
  MNC: "bg-blue-100 text-blue-700 border-blue-200",
  "Product Based": "bg-purple-100 text-purple-700 border-purple-200",
  "Service Based": "bg-cyan-100 text-cyan-700 border-cyan-200",
  Core: "bg-orange-100 text-orange-700 border-orange-200",
  "Start-up": "bg-green-100 text-green-700 border-green-200",
  Other: "bg-gray-100 text-gray-700 border-gray-200",
};

const CATEGORY_ORDER = ["MNC", "Product Based", "Service Based", "Core", "Start-up", "Other"];

const Recruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Major Recruiters | SSGMCE";
    axios
      .get("/api/placements/recruiters")
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : res.data.data || [];
        setRecruiters(data.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name)));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // Group recruiters by category
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = recruiters.filter((r) => r.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});
  const otherItems = recruiters.filter((r) => !CATEGORY_ORDER.includes(r.category));
  if (otherItems.length > 0) grouped["Other"] = [...(grouped["Other"] || []), ...otherItems];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Major Recruiters" subtitle="Our Esteemed Industry Partners" />

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
                <p className="text-gray-500">Loading recruiters…</p>
              </div>
            ) : error || recruiters.length === 0 ? (
              /* Fallback: show PDF + category overview */
              <>
                <section>
                  <h2 className="mb-5 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-orange sm:mb-6">
                    Our Recruiting Partners
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:mb-8 sm:text-base">
                    SSGMCE has established strong partnerships with leading companies across various sectors. Our Training &amp; Placement Cell consistently brings top-tier organizations to campus, offering excellent career opportunities to our students.
                  </p>
                  <div className="mb-8 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 md:grid-cols-4">
                    {[
                      { label: "IT & Software", desc: "Leading tech companies and startups", color: "from-blue-500 to-blue-700" },
                      { label: "Core Engineering", desc: "Manufacturing & infrastructure", color: "from-orange-500 to-orange-700" },
                      { label: "MNCs", desc: "Global multinational corporations", color: "from-green-500 to-green-700" },
                      { label: "Emerging Tech", desc: "AI, IoT, Cloud & Analytics", color: "from-purple-500 to-purple-700" },
                    ].map((c) => (
                      <div key={c.label} className={`bg-gradient-to-br ${c.color} rounded-lg p-4 text-center text-white sm:p-5`}>
                        <FaBuilding className="mx-auto mb-2 text-2xl opacity-80 sm:text-3xl" />
                        <h3 className="mb-1 text-sm font-semibold">{c.label}</h3>
                        <p className="text-[11px] opacity-85 sm:text-xs">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg border-l-4 border-ssgmce-blue bg-white p-5 shadow-md sm:p-6 md:p-8">
                    <h3 className="mb-3 text-lg font-bold text-gray-900 sm:text-xl">Complete Recruiters List</h3>
                    <p className="mb-6 text-sm text-gray-700 sm:text-base">Download the comprehensive list of our recruiting partners.</p>
                    <a href={recruitersPDF} download="SSGMCE_Our_Recruiters.pdf" className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-orange to-orange-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:w-auto sm:gap-3 sm:px-8 sm:py-4">
                      <FaDownload className="text-base sm:text-xl" /> Download Recruiters List (PDF)
                    </a>
                  </div>
                </section>
              </>
            ) : (
              /* Live data from DB */
              <>
                <section>
                  <h2 className="mb-4 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-orange">
                    Our Recruiting Partners
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:mb-8 sm:text-base">
                    SSGMCE has established strong partnerships with leading companies across various sectors. Our Training &amp; Placement Cell consistently brings top-tier organizations to campus, offering excellent career opportunities to our students.
                  </p>

                  {Object.entries(grouped).map(([category, items]) => (
                    <div key={category} className="mb-8 sm:mb-10">
                      <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5 sm:gap-3">
                        <span className={`rounded-full border px-3 py-1 text-xs font-semibold sm:text-sm ${CATEGORY_COLORS[category] || "bg-gray-100 text-gray-700 border-gray-200"}`}>
                          {category}
                        </span>
                        <span className="text-xs text-gray-400 sm:text-sm">{items.length} company{items.length !== 1 ? "ies" : "y"}</span>
                        <div className="flex-1 border-t border-gray-200" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                        {items.map((r) => (
                          <div
                            key={r._id}
                            className="group flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-4"
                          >
                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 sm:h-14 sm:w-14">
                              {r.logoUrl ? (
                                <img src={r.logoUrl} alt={r.name} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = "none"; e.target.nextSibling?.classList.remove("hidden"); }} />
                              ) : null}
                              <FaBuilding className={`text-xl text-gray-300 ${r.logoUrl ? "hidden" : ""}`} />
                            </div>
                            <p className="text-center text-[11px] font-semibold leading-tight text-gray-700 sm:text-xs">{r.name}</p>
                            {r.website && (
                              <a href={r.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-ssgmce-blue opacity-0 transition-opacity hover:underline group-hover:opacity-100 sm:text-xs">
                                <FaExternalLinkAlt className="text-xs" /> Visit
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* PDF Download supplement */}
                  <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border-l-4 border-ssgmce-blue bg-blue-50 p-4 sm:flex-row sm:items-center sm:p-5">
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Download Recruiters PDF</p>
                      <p className="text-xs text-gray-600 sm:text-sm">Full list with logos and company details.</p>
                    </div>
                    <a href={recruitersPDF} download="SSGMCE_Our_Recruiters.pdf" className="flex min-h-[42px] w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-ssgmce-orange px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-700 sm:w-auto sm:px-5 sm:py-2.5">
                      <FaDownload /> Download PDF
                    </a>
                  </div>
                </section>
              </>
            )}

            {/* Why Choose Section */}
            <section>
              <h2 className="mb-5 border-b border-gray-200 pb-2 text-[clamp(1.2rem,0.95rem+1vw,1.6rem)] font-bold text-ssgmce-blue sm:mb-6">
                Why Companies Choose SSGMCE Students
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {[
                  { title: "Strong Technical Foundation", body: "Our students are well-versed in core engineering concepts and latest technologies, making them job-ready from day one.", accent: "border-ssgmce-orange" },
                  { title: "Industry-Ready Skills", body: "Comprehensive training programs ensure students possess both technical expertise and soft skills required in the industry.", accent: "border-ssgmce-blue" },
                  { title: "Practical Exposure", body: "Internships, industrial visits, and project work provide hands-on experience with real-world applications.", accent: "border-ssgmce-blue" },
                  { title: "Professional Attitude", body: "Ethics, discipline, and professional work culture are integral parts of our education system.", accent: "border-ssgmce-orange" },
                ].map((c) => (
                  <div key={c.title} className={`rounded-lg border-l-4 bg-white p-5 shadow-md sm:p-6 ${c.accent}`}>
                    <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-lg">{c.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Info */}
            <section className="rounded-lg border-l-4 border-ssgmce-blue bg-blue-50 p-4 sm:p-6">
              <h3 className="mb-2 flex items-center gap-2 text-base font-bold text-gray-900 sm:text-lg">
                <FaGlobe className="text-ssgmce-blue" /> For Recruiters
              </h3>
              <p className="mb-3 text-xs text-gray-700 sm:text-sm">
                We welcome companies interested in recruiting our talented students. For campus recruitment, placement brochure, or any queries:
              </p>
              <div className="space-y-1 text-xs text-gray-700 sm:text-sm">
                <p><strong>Email:</strong> <a href="mailto:placements@ssgmce.ac.in" className="text-ssgmce-blue hover:underline">placements@ssgmce.ac.in</a></p>
                <p><strong>Phone:</strong> <a href="tel:9422926420" className="text-ssgmce-blue hover:underline">+91 9422926420</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
