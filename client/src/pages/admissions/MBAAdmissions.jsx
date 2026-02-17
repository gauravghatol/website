import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import {
  FaCheckCircle,
  FaFilePdf,
  FaMoneyBillWave,
  FaIdCard,
  FaClipboardList,
  FaExclamationTriangle,
  FaUniversity,
  FaShieldAlt,
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
            {/* Page Header Notice */}
            <section className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <FaUniversity className="text-3xl" />
                IMPORTANT INSTRUCTIONS FOR THE STUDENTS THOSE WHO WANT TO SEEK
                ADMISSION FOR INSTITUTE LEVEL SEATS & CAP VACANCY FOR THE
                SESSION 2025-26
              </h2>
            </section>

            {/* Important Admission Documents */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaClipboardList className="text-ssgmce-orange" />
                Important Admission Documents & Information
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <FaMoneyBillWave />,
                    title: "Process for Online Fees to SSGMCE, Shegaon",
                    link: "/documents/mba-online-fees-process.pdf",
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
                    link: "/documents/mba-required-documents.pdf",
                    color: "blue",
                  },
                  {
                    icon: <FaFilePdf />,
                    title: "M.B.A. 1st Year Application Form (AGAINST CAP)",
                    link: "/documents/mba-application-form-cap.pdf",
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

            {/* CAP Round Seat Matrix */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                CAP Round 2025-26: Seat Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        SN
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Course Name
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Total Intake
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Seats Available for CAP
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-center">
                        Choice Code
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700">
                        1
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">
                        Master of Business Administration
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-ssgmce-blue text-xl">
                        60
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-green-600 text-xl">
                        60
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-mono font-bold text-ssgmce-orange text-lg">
                        110110110
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Admission Instructions */}
            <section className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-ssgmce-blue">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaUniversity className="text-ssgmce-orange" />
                Important Instructions for Admission
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
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

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      Registration by candidate for CAP{" "}
                      <a
                        href="http://cetcell.mahacet.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ssgmce-blue hover:underline font-semibold"
                      >
                        (http://cetcell.mahacet.org/)
                      </a>{" "}
                      is <strong className="text-red-600">Mandatory</strong> for
                      admission against CAP Vacancy. The students should attach
                      photocopy of <strong>Acknowledgment Receipt</strong>{" "}
                      obtain from Facilitation Center along with the prescribed
                      Application Form which is available on Institute
                      website/in office.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      Fees to be paid at the time of Admission for CAP Vacancy
                      is of <strong>Open Category</strong> (
                      <strong className="text-green-600">
                        SC Category is Exempted
                      </strong>
                      ).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-ssgmce-blue text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      For more details for admissions,{" "}
                      <strong>visit college website on regular interval</strong>
                      . Documents to be keep ready: Following Original Documents
                      along with <strong>soft copy</strong> and{" "}
                      <strong>
                        two sets of photocopies & five Photographs
                      </strong>{" "}
                      at the time of reporting for admission to the institute.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Original Documents */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaClipboardList className="text-ssgmce-orange" />
                Required Original Documents for Admission
              </h2>
              <p className="text-gray-700 mb-6 font-semibold">
                Documents to be produced at the time of Admission:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Receipt-cum-Acknowledgement by Facilitation Center (FC)/Scrutiny Center",
                  "MHT-CET-2025 / Any Entrance Exam Approved by State CET Cell",
                  "S.S.C. Mark sheet",
                  "H.S.C. Mark sheet",
                  "Graduation Mark sheet",
                  "Transfer/Leaving Certificate",
                  "Indian Nationality Certificate",
                  "Aadhar Card and Domicile Certificate/ Birth Certificate",
                  "Migration Certificate (Students who have passed Degree Exam other than SGBAU)",
                  "For Category Students: Caste, Caste Validity, Non-creamy Layer (Valid up to 31st March 2026)",
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
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                <p className="text-gray-800 text-sm">
                  <strong className="text-yellow-700">
                    @ Immigration (Migration) Fees:
                  </strong>{" "}
                  Rs. 125/- will be charged extra for the students passed Degree
                  exam other than SGBAU, Amravati
                </p>
              </div>
            </section>

            {/* Important Notes - Anti Capitation */}
            <section className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-red-600">
              <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <FaExclamationTriangle className="text-red-600" />
                Important Notice
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ssgmce-blue">
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

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
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

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
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

                <div className="bg-ssgmce-blue text-white p-6 rounded-lg shadow-md text-center">
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

export default MBAAdmissions;
