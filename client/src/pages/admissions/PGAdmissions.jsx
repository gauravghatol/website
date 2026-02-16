import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import SeatMatrix from "../../components/SeatMatrix";
import FeeTable from "../../components/FeeTable";
import AdmissionProcess from "../../components/AdmissionProcess";
import admissionsData from "../../data/admissionsData";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

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
            {/* Eligibility */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaInfoCircle className="text-ssgmce-orange" />
                Eligibility Criteria
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-blue">
                <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                  {admissionsData.eligibility.postgraduate.title}
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {admissionsData.eligibility.postgraduate.criteria.map(
                    (item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Seat Matrix */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Seat Matrix
              </h2>
              <SeatMatrix
                data={admissionsData.seatMatrix.postgraduate}
                title="M.E. Seat Distribution (Category-wise)"
              />
            </section>

            {/* Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.postgraduate}
                title="M.E. Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* Admission Process */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Admission Process
              </h2>
              <AdmissionProcess
                steps={admissionsData.admissionProcess.postgraduate.steps}
                title={admissionsData.admissionProcess.postgraduate.title}
              />
            </section>

            {/* Programs Offered */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                M.E. Programs Offered
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {admissionsData.seatMatrix.postgraduate.map((program, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-lg p-4 hover:border-ssgmce-orange transition-colors duration-300"
                  >
                    <h3 className="font-bold text-ssgmce-blue mb-2">
                      {program.branch}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Code:{" "}
                      <span className="font-semibold">{program.code}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Intake:{" "}
                      <span className="font-semibold text-ssgmce-orange">
                        {program.intake}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGAdmissions;
