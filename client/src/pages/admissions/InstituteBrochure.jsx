import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import {
  FaDownload,
  FaUniversity,
  FaAward,
  FaGraduationCap,
  FaFlask,
  FaUsers,
  FaBook,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const InstituteBrochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Institute Brochure | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Institute Brochure"
        subtitle="Shri Sant Gajanan Maharaj College of Engineering, Shegaon"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Download Brochure Section */}
            <section className="rounded-xl bg-gradient-to-r from-ssgmce-blue to-blue-800 text-white p-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3">
                    Download Institute Brochure
                  </h2>
                  <p className="text-lg opacity-90 mb-4">
                    Get complete information about SSGMCE programs, facilities,
                    placements, and campus life
                  </p>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center gap-2">
                      <FaCheckCircle /> All programs and specializations
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle /> Admission process and eligibility
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle /> Infrastructure and facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <FaCheckCircle /> Placement statistics and recruiters
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <button className="bg-ssgmce-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                    <FaDownload className="text-2xl" />
                    <div className="text-left">
                      <div>Download Brochure</div>
                      <div className="text-xs opacity-90">PDF - 5.2 MB</div>
                    </div>
                  </button>
                  <p className="text-xs mt-3 opacity-75">
                    Academic Year 2024-25
                  </p>
                </div>
              </div>
            </section>

            {/* About SSGMCE */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaUniversity className="text-ssgmce-orange" />
                About SSGMCE
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong className="text-ssgmce-blue">
                    Shri Sant Gajanan Maharaj College of Engineering (SSGMCE)
                  </strong>
                  , Shegaon is a premier engineering institution established in
                  1983 by the Shri Sant Gajanan Maharaj Shikshan Prasarak Mandal
                  (SSGMSPM). Located in Shegaon, Maharashtra, the college is
                  affiliated to Sant Gadge Baba Amravati University (SGBAU) and
                  approved by All India Council for Technical Education (AICTE).
                </p>
                <p>
                  The institute has been consistently providing quality
                  technical education for over four decades, producing skilled
                  engineers who have made significant contributions in various
                  fields globally. With state-of-the-art infrastructure,
                  experienced faculty, and industry-oriented curriculum, SSGMCE
                  prepares students to meet the challenges of the modern
                  technological world.
                </p>
                <p>
                  The college is known for its discipline, academic excellence,
                  research initiatives, and strong industry connections. Our
                  students regularly participate in national-level competitions,
                  hackathons, and technical symposiums, bringing laurels to the
                  institution.
                </p>
              </div>
            </section>

            {/* Key Highlights */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Key Highlights
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FaGraduationCap />,
                    value: "40+",
                    label: "Years of Excellence",
                    color: "blue",
                  },
                  {
                    icon: <FaUsers />,
                    value: "2500+",
                    label: "Students",
                    color: "orange",
                  },
                  {
                    icon: <FaBook />,
                    value: "90+",
                    label: "Faculty Members",
                    color: "blue",
                  },
                  {
                    icon: <FaFlask />,
                    value: "30+",
                    label: "Research Labs",
                    color: "orange",
                  },
                  {
                    icon: <FaBuilding />,
                    value: "50+",
                    label: "Top Recruiters",
                    color: "blue",
                  },
                  {
                    icon: <FaChartLine />,
                    value: "85%+",
                    label: "Placement Rate",
                    color: "orange",
                  },
                  {
                    icon: <FaAward />,
                    value: "NAAC A+",
                    label: "Accredited",
                    color: "blue",
                  },
                  {
                    icon: <FaUniversity />,
                    value: "AICTE",
                    label: "Approved",
                    color: "orange",
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`text-center p-6 rounded-lg border-2 ${
                      stat.color === "blue"
                        ? "border-ssgmce-blue bg-blue-50"
                        : "border-ssgmce-orange bg-orange-50"
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`text-4xl mb-3 ${
                        stat.color === "blue"
                          ? "text-ssgmce-blue"
                          : "text-ssgmce-orange"
                      }`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold ${
                        stat.color === "blue"
                          ? "text-ssgmce-blue"
                          : "text-ssgmce-orange"
                      } mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Programs Offered */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Programs Offered
              </h2>

              {/* Undergraduate Programs Table */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4 border-b-2 border-ssgmce-orange pb-2">
                  Undergraduate Programs (B.E.)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                          Branch
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                          Intake
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                          Accreditation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          branch: "Computer Science & Engineering",
                          duration: "4 Years",
                          intake: 120,
                          accreditation: "NBA Accredited",
                        },
                        {
                          branch: "Information Technology",
                          duration: "4 Years",
                          intake: 60,
                          accreditation: "NBA Accredited",
                        },
                        {
                          branch: "Mechanical Engineering",
                          duration: "4 Years",
                          intake: 120,
                          accreditation: "NBA Accredited",
                        },
                        {
                          branch: "Electrical Engineering (E&P)",
                          duration: "4 Years",
                          intake: 60,
                          accreditation: "AICTE Approved",
                        },
                        {
                          branch: "Electronics & Telecommunication",
                          duration: "4 Years",
                          intake: 60,
                          accreditation: "NBA Accredited",
                        },
                        {
                          branch: "Civil Engineering",
                          duration: "4 Years",
                          intake: 60,
                          accreditation: "AICTE Approved",
                        },
                      ].map((program, idx) => (
                        <tr
                          key={idx}
                          className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                        >
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                            {program.branch}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                            {program.duration}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <span className="font-bold text-ssgmce-orange">
                              {program.intake}
                            </span>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {program.accreditation}
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                        <td className="border border-gray-300 px-4 py-3">
                          Total UG Intake
                        </td>
                        <td
                          className="border border-gray-300 px-4 py-3 text-center"
                          colSpan="2"
                        >
                          <span className="text-2xl text-ssgmce-orange">
                            480 Students
                          </span>
                        </td>
                        <td className="border border-gray-300 px-4 py-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Postgraduate Programs Table */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4 border-b-2 border-ssgmce-orange pb-2">
                  Postgraduate Programs (M.E.)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                          Specialization
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                          Duration
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                          Intake
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "M.E. Computer Science & Engineering",
                          duration: "2 Years",
                          intake: 18,
                        },
                        {
                          name: "M.E. Heat Power Engineering",
                          duration: "2 Years",
                          intake: 18,
                        },
                        {
                          name: "M.E. Structural Engineering",
                          duration: "2 Years",
                          intake: 18,
                        },
                      ].map((program, idx) => (
                        <tr
                          key={idx}
                          className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-orange-50`}
                        >
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                            {program.name}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                            {program.duration}
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <span className="font-bold text-ssgmce-orange">
                              {program.intake}
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                        <td className="border border-gray-300 px-4 py-3">
                          Total PG Intake
                        </td>
                        <td
                          className="border border-gray-300 px-4 py-3 text-center"
                          colSpan="2"
                        >
                          <span className="text-2xl">54 Students</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MBA Program */}
              <div>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4 border-b-2 border-ssgmce-orange pb-2">
                  Management Program
                </h3>
                <div className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h4 className="text-xl font-bold text-ssgmce-blue mb-2">
                        MBA (Master of Business Administration)
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Specializations: Marketing, Finance, HR, Operations
                      </p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <strong>Duration:</strong> 2 Years
                        </div>
                        <div>
                          <strong>Intake:</strong>{" "}
                          <span className="text-ssgmce-orange font-bold">
                            60 Students
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm px-6 py-4 text-center">
                      <div className="text-4xl font-bold text-ssgmce-orange">
                        60
                      </div>
                      <div className="text-sm text-gray-600">Total Seats</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Infrastructure & Facilities */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Infrastructure & Facilities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "State-of-the-Art Laboratories",
                    items: [
                      "30+ well-equipped labs",
                      "Latest software & hardware",
                      "Industrial-grade equipment",
                      "IoT & AI/ML labs",
                    ],
                  },
                  {
                    title: "Central Library",
                    items: [
                      "50,000+ books collection",
                      "E-library with digital resources",
                      "National & international journals",
                      "Reading halls and study spaces",
                    ],
                  },
                  {
                    title: "Hostel Facilities",
                    items: [
                      "Separate boys & girls hostels",
                      "Wi-Fi enabled rooms",
                      "Mess with quality food",
                      "24/7 security",
                    ],
                  },
                  {
                    title: "Sports & Recreation",
                    items: [
                      "Indoor & outdoor sports",
                      "Gymnasium",
                      "Cultural activities",
                      "Student clubs & societies",
                    ],
                  },
                  {
                    title: "Campus Amenities",
                    items: [
                      "Spacious classrooms with AV aids",
                      "Auditorium (500+ capacity)",
                      "Medical facilities",
                      "Bank & ATM",
                    ],
                  },
                  {
                    title: "Research & Innovation",
                    items: [
                      "Research centers",
                      "Innovation & incubation cell",
                      "Project labs",
                      "Industry collaborations",
                    ],
                  },
                ].map((facility, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 hover:border-ssgmce-orange hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
                      <span className="text-ssgmce-orange">▸</span>
                      {facility.title}
                    </h3>
                    <ul className="space-y-2">
                      {facility.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Accreditations & Approvals */}
            <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Accreditations & Approvals
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    AICTE Approved
                  </h3>
                  <p className="text-sm text-gray-600">
                    All India Council for Technical Education
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    SGBAU Affiliated
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sant Gadge Baba Amravati University
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    NAAC A+ Accredited
                  </h3>
                  <p className="text-sm text-gray-600">
                    National Assessment & Accreditation Council
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    NBA Accredited
                  </h3>
                  <p className="text-sm text-gray-600">4 UG Programs</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">📜</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    DTE Recognized
                  </h3>
                  <p className="text-sm text-gray-600">
                    Directorate of Technical Education, Maharashtra
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center">
                  <div className="text-5xl mb-4">🔬</div>
                  <h3 className="font-bold text-lg text-ssgmce-blue mb-2">
                    Research Center
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ph.D. programs in multiple disciplines
                  </p>
                </div>
              </div>
            </section>

            {/* Placements 2023-24 */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Placement Highlights 2023-24
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-ssgmce-blue">
                  <FaChartLine className="text-6xl text-ssgmce-blue mx-auto mb-4" />
                  <div className="text-5xl font-bold text-ssgmce-blue mb-2">
                    85%+
                  </div>
                  <div className="text-gray-600">Overall Placement Rate</div>
                </div>

                <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-ssgmce-orange">
                  <FaAward className="text-6xl text-ssgmce-orange mx-auto mb-4" />
                  <div className="text-5xl font-bold text-ssgmce-orange mb-2">
                    12 LPA
                  </div>
                  <div className="text-gray-600">Highest Package</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4">
                  Top Recruiters
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "TCS",
                    "Infosys",
                    "Wipro",
                    "Tech Mahindra",
                    "L&T",
                    "Cognizant",
                    "Capgemini",
                    "Persistent",
                    "Accenture",
                    "HCL",
                    "IBM",
                    "Amazon",
                    "Reliance",
                    "KPIT",
                    "Zensar",
                    "LTIMindtree",
                  ].map((company, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:border-ssgmce-orange transition-all duration-300"
                    >
                      <p className="font-semibold text-sm text-gray-800">
                        {company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="rounded-xl bg-gradient-to-r from-ssgmce-blue to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-ssgmce-orange mb-3">Address</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Shri Sant Gajanan Maharaj College of Engineering
                    <br />
                    Shegaon - 444203
                    <br />
                    Dist. Buldhana, Maharashtra, India
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-ssgmce-orange mb-3">
                    Contact Details
                  </h3>
                  <p className="text-sm opacity-90">
                    <strong>Phone:</strong> +91-7265-252274, +91-7265-252279
                    <br />
                    <strong>Email:</strong> principal@ssgmce.ac.in
                    <br />
                    <strong>Website:</strong> www.ssgmce.ac.in
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteBrochure;
