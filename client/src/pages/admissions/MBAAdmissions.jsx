import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import FeeTable from "../../components/FeeTable";
import admissionsData from "../../data/admissionsData";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaFileAlt,
  FaChartLine,
} from "react-icons/fa";

const MBAAdmissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "MBA Admissions | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="MBA (Master of Business Administration)"
        subtitle="Shaping Future Business Leaders"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Introduction */}
            <section className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">About MBA Program</h2>
              <p className="leading-relaxed mb-4">
                The MBA program at SSGMCE provides comprehensive management
                education covering all aspects of business administration. We
                focus on developing leadership, analytical, and entrepreneurial
                skills essential for corporate and startup environments. The
                program is designed to transform graduates into competent
                managers capable of handling complex business challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    2 Years
                  </div>
                  <div className="text-sm opacity-90">Program Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    60
                  </div>
                  <div className="text-sm opacity-90">Total Intake</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    SGBAU
                  </div>
                  <div className="text-sm opacity-90">Affiliated To</div>
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaInfoCircle className="text-ssgmce-orange" />
                Eligibility Criteria
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-orange">
                <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                  {admissionsData.eligibility.mba.title}
                </h3>
                <ul className="space-y-4">
                  {admissionsData.eligibility.mba.criteria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0 text-xl" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Specializations */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                MBA Specializations Offered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Marketing Management",
                    desc: "Brand management, digital marketing, consumer behavior, advertising & sales",
                    icon: "📊",
                  },
                  {
                    title: "Financial Management",
                    desc: "Corporate finance, investment analysis, financial markets, risk management",
                    icon: "💰",
                  },
                  {
                    title: "Human Resource Management",
                    desc: "Talent acquisition, organizational behavior, performance management, labor laws",
                    icon: "👥",
                  },
                  {
                    title: "Operations Management",
                    desc: "Supply chain, production planning, quality management, project management",
                    icon: "⚙️",
                  },
                ].map((spec, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-lg p-6 hover:border-ssgmce-orange hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{spec.icon}</div>
                    <h3 className="text-xl font-bold text-ssgmce-blue mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-sm text-gray-600">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Seat Matrix */}
            <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-blue">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                MBA Seat Distribution
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Category
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Number of Seats
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Open Category
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.openCategory}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        60%
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        EWS (Economically Weaker Section)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.ews}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        10%
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        OBC (Other Backward Class)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.obc}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        27%
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        SC (Scheduled Caste)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.sc}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        15%
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        ST (Scheduled Tribe)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.st}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        8%
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        VJNT (Vimukta Jati & Nomadic Tribes)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-ssgmce-orange font-bold text-xl">
                        {admissionsData.seatMatrix.mba.vjnt}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center text-gray-700">
                        5%
                      </td>
                    </tr>
                    <tr className="bg-ssgmce-blue text-white hover:bg-blue-800">
                      <td className="border border-gray-300 px-4 py-3 font-bold text-lg">
                        Total Intake
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold text-2xl text-ssgmce-orange">
                        {admissionsData.seatMatrix.mba.intake}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-bold">
                        100%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.mba}
                title="MBA Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* Admission Process */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                MBA Admission Process
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Appear for Entrance Exam",
                    desc: "Take MAH-CET (DTE Maharashtra) or other accepted exams like CAT, MAT, CMAT, XAT, ATMA",
                  },
                  {
                    step: 2,
                    title: "Register on DTE Portal",
                    desc: "Register for MBA admissions on DTE Maharashtra website after exam results",
                  },
                  {
                    step: 3,
                    title: "Fill Application Form",
                    desc: "Complete the online application with personal, academic, and exam details",
                  },
                  {
                    step: 4,
                    title: "Document Upload",
                    desc: "Upload scanned copies of degree, marksheets, entrance scorecard, and certificates",
                  },
                  {
                    step: 5,
                    title: "CAP Rounds",
                    desc: "Participate in Centralized Admission Process rounds and fill college preferences",
                  },
                  {
                    step: 6,
                    title: "Seat Allotment",
                    desc: "Check seat allotment results on DTE portal after each CAP round",
                  },
                  {
                    step: 7,
                    title: "Reporting to College",
                    desc: "Visit SSGMCE with original documents for verification within 3 days",
                  },
                  {
                    step: 8,
                    title: "Fee Payment & Confirmation",
                    desc: "Pay admission fees and complete joining formalities to secure your seat",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 border-l-4 border-ssgmce-orange bg-gray-50 rounded-r-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ssgmce-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-ssgmce-blue mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaChartLine className="text-ssgmce-orange" />
                Career Opportunities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Corporate Sector",
                    roles:
                      "Management Trainee, Business Analyst, Marketing Manager, HR Manager",
                  },
                  {
                    title: "Banking & Finance",
                    roles:
                      "Financial Analyst, Investment Banker, Relationship Manager, Credit Manager",
                  },
                  {
                    title: "Consulting",
                    roles:
                      "Business Consultant, Strategy Analyst, Operations Consultant",
                  },
                  {
                    title: "Entrepreneurship",
                    roles:
                      "Startup Founder, Business Owner, Freelance Consultant",
                  },
                  {
                    title: "E-Commerce",
                    roles:
                      "Product Manager, Digital Marketing Manager, Operations Head",
                  },
                  {
                    title: "Government Jobs",
                    roles:
                      "Bank PO, Management Cadre, Public Sector Undertakings",
                  },
                ].map((career, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-bold text-ssgmce-blue mb-2">
                      {career.title}
                    </h3>
                    <p className="text-sm text-gray-600">{career.roles}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents Required */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaFileAlt className="text-ssgmce-orange" />
                Documents Required
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {admissionsData.documentsRequired.mba.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <FaCheckCircle className="text-ssgmce-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
                {admissionsData.documentsRequired.common
                  .slice(0, 8)
                  .map((doc, idx) => (
                    <div
                      key={`common-${idx}`}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <FaCheckCircle className="text-ssgmce-orange mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg">
              <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                MBA Program Coordinator
              </h3>
              <p className="text-gray-700 mb-3">
                For MBA-specific queries, contact:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Phone:</strong>{" "}
                  {admissionsData.contactInfo.admissionOffice.phone}
                </p>
                <p>
                  <strong>Email:</strong> mba@ssgmce.ac.in
                </p>
                <p>
                  <strong>Timings:</strong>{" "}
                  {admissionsData.contactInfo.admissionOffice.timings}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBAAdmissions;
