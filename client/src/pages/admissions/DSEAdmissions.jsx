import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import AdmissionProcess from "../../components/AdmissionProcess";
import admissionsData from "../../data/admissionsData";
import { FaCheckCircle, FaInfoCircle, FaFileAlt } from "react-icons/fa";

const DSEAdmissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Direct Second Year Engineering (DSE) | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Direct Second Year Engineering (DSE)"
        subtitle="Lateral Entry for Diploma Holders & B.Sc. Graduates"
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
            {/* Introduction */}
            <section className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                What is Direct Second Year Engineering (DSE)?
              </h2>
              <p className="leading-relaxed">
                Direct Second Year Engineering (DSE), also known as Lateral
                Entry, allows diploma holders and B.Sc. graduates to join
                directly into the second year (Third Semester) of the B.E.
                program. This provides an excellent opportunity for students
                with technical diplomas to upgrade their qualifications to a
                degree level without repeating the first year of engineering.
              </p>
            </section>

            {/* Eligibility Criteria */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaInfoCircle className="text-ssgmce-orange" />
                Eligibility Criteria
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-orange">
                <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                  {admissionsData.eligibility.undergraduate.dseAdmission.title}
                </h3>
                <ul className="space-y-4">
                  {admissionsData.eligibility.undergraduate.dseAdmission.criteria.map(
                    (item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0 text-xl" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Branch-wise Eligibility */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Branch-wise Diploma Eligibility
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        B.E. Branch
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Eligible Diploma Branches
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Computer Science & Engineering
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Computer Engineering, Computer Technology, Information
                        Technology
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Information Technology
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Computer Engineering, Information Technology, Computer
                        Technology
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Mechanical Engineering, Production Engineering,
                        Automobile Engineering
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Electrical Engineering
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Electrical Engineering, Electrical Power System
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Electronics & Telecommunication
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Electronics & Telecommunication, Electronics
                        Engineering, Electronics & Communication
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-ssgmce-blue">
                        Civil Engineering
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Civil Engineering, Construction Technology
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Seat Availability */}
            <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-blue">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                DSE Seat Availability
              </h2>
              <div className="bg-blue-50 border-l-4 border-ssgmce-orange p-6 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong className="text-ssgmce-blue">Note:</strong> DSE seats
                  are typically 10% of the total sanctioned intake for each
                  branch, subject to availability and DTE Maharashtra norms. The
                  actual number of seats may vary each year.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { branch: "Computer Science & Engineering", seats: "12-15" },
                  { branch: "Information Technology", seats: "6-8" },
                  { branch: "Mechanical Engineering", seats: "12-15" },
                  { branch: "Electrical Engineering", seats: "6-8" },
                  { branch: "Electronics & Telecommunication", seats: "6-8" },
                  { branch: "Civil Engineering", seats: "6-8" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-ssgmce-orange transition-colors duration-300"
                  >
                    <h3 className="font-bold text-ssgmce-blue text-sm mb-2">
                      {item.branch}
                    </h3>
                    <p className="text-2xl font-bold text-ssgmce-orange">
                      {item.seats}
                    </p>
                    <p className="text-xs text-gray-600">Approx. Seats</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Process */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Admission Process
              </h2>
              <AdmissionProcess
                steps={admissionsData.admissionProcess.undergraduate.dseProcess}
                title="DSE / Lateral Entry Admission Process"
              />
            </section>

            {/* Documents Required */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaFileAlt className="text-ssgmce-orange" />
                Documents Required for DSE Admission
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {admissionsData.documentsRequired.dse.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <FaCheckCircle className="text-ssgmce-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
                {admissionsData.documentsRequired.common
                  .slice(0, 10)
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

            {/* Fee Structure Note */}
            <section className="bg-orange-50 border-l-4 border-ssgmce-orange p-6 rounded-lg">
              <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                Fee Structure
              </h3>
              <p className="text-gray-700">
                DSE students pay the same fee structure as regular B.E.
                students. Please refer to the
                <a
                  href="/admissions/fee-structure"
                  className="text-ssgmce-orange font-semibold hover:underline"
                >
                  {" "}
                  Fee Structure page{" "}
                </a>
                for detailed information about category-wise fees.
              </p>
            </section>

            {/* Important Notes */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Important Notes
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <p className="text-gray-700">
                    DSE students complete the remaining 3 years (6 semesters) of
                    the B.E. program
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <p className="text-gray-700">
                    All admissions are done through DTE Maharashtra CAP process
                    only
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <p className="text-gray-700">
                    Gap certificate is mandatory if there is a gap of more than
                    1 year after diploma
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <p className="text-gray-700">
                    B.Sc. graduates must have Mathematics as one of the subjects
                    in all three years
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <p className="text-gray-700">
                    Final year diploma students can apply provisionally
                    (admission subject to passing)
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSEAdmissions;
