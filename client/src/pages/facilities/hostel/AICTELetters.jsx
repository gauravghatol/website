import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const AICTELetters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "AICTE Letters | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="AICTE Compliance Letters"
        subtitle="Official Approval Documents"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-6">
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg shadow-md">
              <p className="font-bold text-xl text-green-800 mb-2">
                AICTE Approval Letter 2024-25
              </p>
              <p className="text-gray-700">
                All anti-ragging measures approved and compliant with AICTE
                Regulations 2024.
              </p>
              <p className="text-sm text-green-700 mt-2 underline cursor-pointer">
                Download: AICTE_Approval_2024-25.pdf
              </p>
            </div>
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg shadow-md">
              <p className="font-bold text-xl text-green-800 mb-2">
                UGC Compliance Certificate 2023-24
              </p>
              <p className="text-gray-700">
                Certified ragging-free institution as per UGC regulations and
                guidelines.
              </p>
              <p className="text-sm text-green-700 mt-2 underline cursor-pointer">
                Download: UGC_Certificate_2023-24.pdf
              </p>
            </div>
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg shadow-md">
              <p className="font-bold text-xl text-green-800 mb-2">
                Maharashtra Government NOC
              </p>
              <p className="text-gray-700">
                No Objection Certificate for hostel operations with anti-ragging
                compliance.
              </p>
              <p className="text-sm text-green-700 mt-2 underline cursor-pointer">
                Download: Govt_NOC_Hostel.pdf
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICTELetters;
