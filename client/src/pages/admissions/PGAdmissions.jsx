import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import {
  FaCheckCircle,
  FaFilePdf,
  FaFileAlt,
  FaMoneyBillWave,
  FaIdCard,
  FaClipboardList,
  FaExclamationTriangle,
  FaUniversity,
  FaShieldAlt,
} from "react-icons/fa";

const PGAdmissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Post-Graduate Programs | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Post-Graduate Program (M.E.)"
        subtitle="Master of Engineering - Excellence in Specialization"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Page Header Notice */}
            <section className="rounded-xl bg-gradient-to-r from-ssgmce-blue to-blue-800 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <FaUniversity className="text-3xl" />
                IMPORTANT INSTRUCTIONS FOR THE STUDENTS THOSE WHO ARE REPORTING
                FOR ADMISSION THROUGH CAP-2025-26
              </h2>
            </section>

            {/* Important Admission Documents */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaClipboardList className="text-ssgmce-orange" />
                Important Admission Documents & Information
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FaMoneyBillWave />,
                    title: "Process of Online Payment of Fees",
                    link: "/documents/pg-online-payment-process.pdf",
                    color: "blue",
                  },
                  {
                    icon: <FaIdCard />,
                    title: "Process for creating ABC ID",
                    link: "/documents/abc-id-creation-process.pdf",
                    color: "orange",
                  },
                  {
                    icon: <FaClipboardList />,
                    title: "Documents required for Admission",
                    link: "/documents/pg-required-documents.pdf",
                    color: "blue",
                  },
                  {
                    icon: <FaFileAlt />,
                    title: "ADVERTISEMENT AGAINST CAP VACANCY ROUND",
                    link: "/documents/pg-cap-vacancy-round.pdf",
                    color: "orange",
                  },
                ].map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-lg border-2 ${
                      doc.color === "blue"
                        ? "border-ssgmce-blue bg-blue-50 hover:bg-blue-100"
                        : "border-ssgmce-orange bg-orange-50 hover:bg-orange-100"
                    } hover:shadow-xl transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className={`text-4xl ${
                          doc.color === "blue"
                            ? "text-ssgmce-blue"
                            : "text-ssgmce-orange"
                        } group-hover:scale-110 transition-transform duration-300`}
                      >
                        {doc.icon}
                      </div>
                      <h3
                        className={`text-base font-semibold ${
                          doc.color === "blue"
                            ? "text-ssgmce-blue"
                            : "text-ssgmce-orange"
                        } group-hover:underline min-h-[3rem] flex items-center`}
                      >
                        {doc.title}
                      </h3>
                      <span
                        className={`text-xs font-medium ${
                          doc.color === "blue"
                            ? "text-blue-700"
                            : "text-orange-700"
                        }`}
                      >
                        Click to view PDF
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* CAP Admission Instructions */}
            <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaUniversity className="text-ssgmce-orange" />
                Important Instructions for CAP Admission 2025-26
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-blue-500 bg-white shadow-sm p-6">
                  <p className="text-gray-800 leading-relaxed">
                    <span className="font-bold text-ssgmce-blue">
                      Read the following instructions carefully and accordingly
                      report the institute as per the Schedule declared by State
                      CET Cell for CAP Admission:
                    </span>
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      All the admissions will be carried out as per the
                      guidelines of{" "}
                      <strong>
                        Admission Regulatory Authority, Govt. of Maharashtra,
                        State Common Entrance Test Cell, DTE, M.S., Mumbai
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      It is <strong className="text-red-600">mandatory</strong>{" "}
                      to pay Seat acceptance Fees on{" "}
                      <a
                        href="http://cetcell.mahacet.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ssgmce-blue hover:underline font-semibold"
                      >
                        http://cetcell.mahacet.org
                      </a>{" "}
                      and bring <strong>Seat acceptance Letter</strong> along
                      with <strong>Acknowledgment Receipt</strong> obtain from
                      Scrutiny Center along with all the Originals and attested
                      Copies of the documents signed and stamped by SC Center.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      College Fees is to be paid through{" "}
                      <strong>online mode</strong> as per the fee structure
                      available on college website or on notice board.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Original Documents */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaClipboardList className="text-ssgmce-orange" />
                Required Original Documents for Admission
              </h2>
              <p className="text-gray-700 mb-6 font-semibold">
                Following Original Documents to be produced at the time of
                Admission:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Seat Acceptance Form after payment of Rs. 1000/- to CET Cell",
                  "Receipt-cum-Acknowledgement by Scrutiny Center/Facilitation Center",
                  "GATE Score Card-2025 (Positive Score)",
                  "For Sponsorship Candidate - Proforma-P and Proforma-Q",
                  "S.S.C. Mark sheet",
                  "H.S.C. Mark sheet",
                  "Final Semester Mark sheet",
                  "Transfer/Leaving Certificate",
                  "Indian Nationality Certificate",
                  "Domicile Certificate/ Birth Certificate",
                  "For OBC/SBC/NT/VJ/SEBC-Category Students: Caste, Caste Validity and Non-creamy Layer (Valid up to 31st March 2026) and Photocopy of Income Certificate valid up to 31st March 2026",
                  "For EWS - EWS Certificate (As per Proforma-V given in the Information Brochure)",
                  "For EWS/EBC - Photocopy of Income Certificate valid up to 31st March 2026 (below Rs. 8.00 Lakhs)",
                  "For SC/ST - Caste Certificate, Caste Validity Certificate and Photocopy of Income Certificate valid up to 31st March 2026",
                  "Photocopy of Aadhar Card and Five Passport Size Photographs",
                  "Migration Certificate (Students passed HSC Exam other than Maharashtra State)",
                  "One Set of Photocopies Signed and Stamped by Scrutiny Center",
                  "One Set of Photocopies of all above Documents (For Student)",
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* CAP Round Seat Matrix */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                CAP Round 2025-26: Course-wise Seat Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        SN
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Course Name
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Year
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total Intake
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Seats Available for CAP
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Choice Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sn: 1,
                        course: "M.E. Electrical Power System",
                        year: 1996,
                        intake: 18,
                        seats: 18,
                        code: "110129210",
                      },
                      {
                        sn: 2,
                        course: "M.E. Digital Electronics",
                        year: 2000,
                        intake: 18,
                        seats: 18,
                        code: "110134310",
                      },
                      {
                        sn: 3,
                        course: "M.E. Computer Engineering",
                        year: 2012,
                        intake: 18,
                        seats: 18,
                        code: "110124510",
                      },
                      {
                        sn: 4,
                        course:
                          "M.E. Advanced Manufacturing & Mechanical Systems Design",
                        year: 2012,
                        intake: 18,
                        seats: 18,
                        code: "110190710",
                      },
                      {
                        sn: 5,
                        course: "Master of Business Administration",
                        year: 1994,
                        intake: 60,
                        seats: 60,
                        code: "110110110",
                      },
                    ].map((course, idx) => (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } hover:bg-blue-50 transition-colors`}
                      >
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">
                          {course.sn}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">
                          {course.course}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center text-gray-600">
                          {course.year}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-ssgmce-blue">
                          {course.intake}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-600">
                          {course.seats}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center font-mono font-bold text-ssgmce-orange">
                          {course.code}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right text-sm text-gray-600 font-semibold">
                <p>Two Year (Full Time) M.E./M.B.A Courses</p>
              </div>
            </section>

            {/* Important Notes - Anti Capitation */}
            <section className="rounded-xl border border-red-100 bg-red-50 p-8">
              <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <FaExclamationTriangle className="text-red-600" />
                Important Notice
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-ssgmce-blue bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <FaShieldAlt className="text-ssgmce-blue text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-ssgmce-blue text-lg mb-2">
                        Merit-Based Transparent Admission
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        All the admissions at{" "}
                        <strong>
                          Shri Sant Gajanan Maharaj College of Engineering,
                          Shegaon
                        </strong>{" "}
                        are done strictly on the basis of{" "}
                        <strong className="text-green-600">Merit</strong> and in
                        a{" "}
                        <strong className="text-green-600">
                          Transparent Manner
                        </strong>{" "}
                        by way of counseling.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-red-600 bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <FaExclamationTriangle className="text-red-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-red-700 text-lg mb-2">
                        Beware of Fraudulent Agents
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Institute has{" "}
                        <strong className="text-red-600">
                          NOT authorized any agency or agent
                        </strong>{" "}
                        for admitting students. In this regard, Parents and
                        Candidates are sincerely advised{" "}
                        <strong>
                          not to fall prey to unscrupulous agents or agencies
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-green-600 bg-white shadow-sm p-6">
                  <div className="flex items-start gap-4">
                    <FaShieldAlt className="text-green-600 text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-green-700 text-lg mb-2">
                        No Capitation Fees
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-green-600">
                          No Capitation fees
                        </strong>{" "}
                        are collected by the institute by adhering to the{" "}
                        <strong>Anti Capitation Act</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-ssgmce-blue text-white p-6 text-center">
                  <p className="font-bold text-xl">Dr. S. B. Somani</p>
                  <p className="text-lg">Principal</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGAdmissions;
