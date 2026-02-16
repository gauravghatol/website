import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const AntiRaggingReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Anti-Ragging Annual Reports | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Anti-Ragging Annual Reports"
        subtitle="Yearly Compliance Reports"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-4">
            {["2023-24", "2022-23", "2021-22", "2020-21", "2019-20"].map(
              (year) => (
                <div
                  key={year}
                  className="border-l-4 border-ssgmce-blue bg-white p-6 rounded-r-lg shadow-md"
                >
                  <h4 className="font-bold text-xl text-ssgmce-blue mb-2">
                    Academic Year {year}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Status:</strong> Zero ragging incidents reported
                  </p>
                  <p className="text-sm text-gray-600">
                    All awareness programs, orientations, and safety measures
                    successfully conducted as per UGC/AICTE guidelines.
                  </p>
                  <p className="text-sm text-ssgmce-orange mt-2 underline cursor-pointer">
                    Download Report: Annual_Anti_Ragging_Report_{year}.pdf
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRaggingReports;
