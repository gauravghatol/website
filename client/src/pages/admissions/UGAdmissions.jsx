import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import SeatMatrix from "../../components/SeatMatrix";
import FeeTable from "../../components/FeeTable";
import AdmissionProcess from "../../components/AdmissionProcess";
import admissionsData from "../../data/admissionsData";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const UGAdmissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Under-Graduate Programs | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Under-Graduate Program (B.E.)"
        subtitle="First Year (FE) & Direct Second Year (DSE) Admissions"
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
            {/* Eligibility Criteria */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaInfoCircle className="text-ssgmce-orange" />
                Eligibility Criteria
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* FE Admission */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-blue">
                  <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                    {admissionsData.eligibility.undergraduate.feAdmission.title}
                  </h3>
                  <ul className="space-y-3">
                    {admissionsData.eligibility.undergraduate.feAdmission.criteria.map(
                      (item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* DSE Admission */}
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-orange">
                  <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                    {
                      admissionsData.eligibility.undergraduate.dseAdmission
                        .title
                    }
                  </h3>
                  <ul className="space-y-3">
                    {admissionsData.eligibility.undergraduate.dseAdmission.criteria.map(
                      (item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Seat Matrix */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Seat Matrix
              </h2>
              <SeatMatrix
                data={admissionsData.seatMatrix.undergraduate}
                title="B.E. Seat Distribution (Category-wise)"
              />
            </section>

            {/* Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.undergraduate}
                title="B.E. Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* Admission Process - FE */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Admission Process - First Year (FE)
              </h2>
              <AdmissionProcess
                steps={admissionsData.admissionProcess.undergraduate.feProcess}
                title="Step-by-Step Admission Process for First Year Engineering"
              />
            </section>

            {/* Admission Process - DSE */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Admission Process - Direct Second Year (DSE)
              </h2>
              <AdmissionProcess
                steps={admissionsData.admissionProcess.undergraduate.dseProcess}
                title="Lateral Entry / Direct Second Year Admission Process"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGAdmissions;
