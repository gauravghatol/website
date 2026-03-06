import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const HostelAdmissionForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Admission Form | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Admission Form"
        subtitle="Application for Hostel Accommodation"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Hostel Admission Process
              </h3>
              <p className="text-gray-700 mb-6">
                Download the hostel admission form, fill it completely, and
                submit along with required documents at the Hostel Office.
              </p>
              <div className="bg-blue-50 border-2 border-ssgmce-blue rounded-lg p-6">
                <h4 className="font-bold text-lg text-ssgmce-blue mb-4">
                  Required Documents:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    Filled hostel application form (downloaded from website)
                  </li>
                  <li>Copy of college admission letter / ID card</li>
                  <li>Copy of Aadhar card & PAN card</li>
                  <li>3 passport size photographs</li>
                  <li>Medical fitness certificate from registered doctor</li>
                  <li>Parental consent letter (for students below 18 years)</li>
                  <li>Anti-ragging affidavit (student & parent both)</li>
                  <li>Previous year marksheet (for existing students)</li>
                </ul>
                <button className="bg-ssgmce-orange text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
                  Download Admission Form (PDF)
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelAdmissionForm;
