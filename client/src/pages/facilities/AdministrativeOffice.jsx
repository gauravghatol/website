import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import FacilitiesSidebar from "../../components/FacilitiesSidebar";
import {
  FaUserTie,
  FaFileAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const AdministrativeOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Administrative Office | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Administrative Office"
        subtitle="Supporting Academic Excellence through Efficient Administration"
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <FacilitiesSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <section>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Administrative Office at SSGMCE serves as the backbone of
                all academic and non-academic operations. Our dedicated team
                ensures smooth functioning of admissions, examinations,
                accounts, student services, and general administration.
              </p>
            </section>

            {/* Administrative Departments Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Administrative Departments & Services
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Services Provided
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Office Hours
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaUserTie className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Principal's Office
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Overall administration, policy decisions, grievance
                        redressal
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-sm">
                        Mon-Sat
                        <br />
                        10 AM - 5 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-xs text-gray-700">
                        Ext: 101
                        <br />
                        principal@ssgmce.ac.in
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaGraduationCap className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Admission Cell
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Student admissions, document verification, counseling
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-sm">
                        Mon-Sat
                        <br />9 AM - 6 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-xs text-gray-700">
                        Ext: 102
                        <br />
                        admission@ssgmce.ac.in
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaFileAlt className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Examination Cell
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Exam schedules, hall tickets, result processing,
                        revaluation
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-sm">
                        Mon-Sat
                        <br />9 AM - 5 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-xs text-gray-700">
                        Ext: 103
                        <br />
                        exam@ssgmce.ac.in
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaMoneyBillWave className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Accounts Section
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Fee payment, receipts, refunds, scholarship processing
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-sm">
                        Mon-Sat
                        <br />
                        10 AM - 4 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-xs text-gray-700">
                        Ext: 104
                        <br />
                        accounts@ssgmce.ac.in
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Services for Students */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Key Services for Students
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Certificate Issuance",
                    services: [
                      "Bonafide Certificate",
                      "Character Certificate",
                      "Transfer Certificate (TC)",
                      "Migration Certificate",
                      "Marksheet Duplicates",
                    ],
                  },
                  {
                    title: "Fee & Financial Services",
                    services: [
                      "Online Fee Payment",
                      "Fee Receipts",
                      "No Dues Certificate",
                      "Refund Processing",
                      "Scholarship Application",
                    ],
                  },
                  {
                    title: "Examination Services",
                    services: [
                      "Hall Ticket Download",
                      "Exam Form Submission",
                      "Revaluation Applications",
                      "Transcript Issuance",
                      "Grade Cards",
                    ],
                  },
                  {
                    title: "General Administration",
                    services: [
                      "ID Card Issuance",
                      "Library Card",
                      "Bus Pass",
                      "Hostel Allotment",
                      "Grievance Redressal",
                    ],
                  },
                ].map((category, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border-l-4 border-ssgmce-orange bg-white shadow-sm p-6"
                  >
                    <h4 className="font-bold text-lg text-ssgmce-blue mb-4">
                      {category.title}
                    </h4>
                    <ul className="space-y-2">
                      {category.services.map((service, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Contact Administrative Office
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
                    <FaPhone className="text-ssgmce-orange" />
                    Phone Directory
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>Main Reception:</strong> +91-7265-252274
                    </p>
                    <p>
                      <strong>Principal's Office:</strong> +91-7265-252279
                    </p>
                    <p>
                      <strong>Admission Cell:</strong> +91-7265-252274 (Ext:
                      102)
                    </p>
                    <p>
                      <strong>Accounts:</strong> +91-7265-252274 (Ext: 104)
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
                    <FaEnvelope className="text-ssgmce-orange" />
                    Email Directory
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>
                      <strong>General Queries:</strong> info@ssgmce.ac.in
                    </p>
                    <p>
                      <strong>Admissions:</strong> admission@ssgmce.ac.in
                    </p>
                    <p>
                      <strong>Examinations:</strong> exam@ssgmce.ac.in
                    </p>
                    <p>
                      <strong>Accounts:</strong> accounts@ssgmce.ac.in
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdministrativeOffice;
