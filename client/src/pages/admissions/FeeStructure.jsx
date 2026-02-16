import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import FeeTable from "../../components/FeeTable";
import admissionsData from "../../data/admissionsData";
import { FaDownload } from "react-icons/fa";

const FeeStructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fee Structure | SSGMCE Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Fee Structure"
        subtitle={`Academic Year ${admissionsData.academicYear}`}
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Download Section */}
            <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Complete Fee Structure Document
                  </h3>
                  <p className="text-sm opacity-90">
                    Download the official fee structure PDF for all programs
                  </p>
                </div>
                <button
                  onClick={() =>
                    window.open(admissionsData.downloads.feeStructure, "_blank")
                  }
                  className="flex items-center gap-2 bg-ssgmce-orange hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <FaDownload /> Download PDF
                </button>
              </div>
            </div>

            {/* UG Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Under-Graduate (B.E.) Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.undergraduate}
                title="B.E. Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* PG Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                Post-Graduate (M.E.) Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.postgraduate}
                title="M.E. Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* MBA Fee Structure */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8">
                MBA Fee Structure
              </h2>
              <FeeTable
                feeData={admissionsData.feeStructure.mba}
                title="MBA Annual Fee Structure"
                downloadLink={admissionsData.downloads.feeStructure}
              />
            </section>

            {/* Additional Information */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Important Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Payment Mode:</strong> Fees can be paid online
                    through the college portal or via Demand Draft in favor of
                    "Shri Sant Gajanan Maharaj College of Engineering"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Refund Policy:</strong> Fees once paid are generally
                    non-refundable. However, refunds may be considered in
                    special circumstances as per college and DTE norms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Hostel Fees:</strong> Hostel and mess charges are
                    separate and vary based on the type of accommodation.
                    Contact the hostel office for detailed information.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Scholarship:</strong> Eligible students can apply
                    for various government and institutional scholarships which
                    may cover partial or full tuition fees.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Fee Revision:</strong> The fee structure is subject
                    to revision as per university and government directives.
                    Students will be notified in advance of any changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg">
              <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                Have Questions About Fees?
              </h3>
              <p className="text-gray-700 mb-3">
                Contact our accounts department for fee-related queries:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Phone:</strong>{" "}
                  {admissionsData.contactInfo.admissionOffice.phone}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {admissionsData.contactInfo.admissionOffice.email}
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

export default FeeStructure;
