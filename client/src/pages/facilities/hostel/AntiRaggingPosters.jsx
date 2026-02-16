import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const AntiRaggingPosters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Anti-Ragging Posters | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Anti-Ragging Awareness Posters"
        subtitle="Educational Campaign Materials"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <p className="text-gray-700">
              Educational posters displayed across campus hostels, notice
              boards, and common areas to promote a ragging-free environment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Say NO to Ragging",
                "Ragging is a Crime - Punishable by Law",
                "Report Ragging - Save Lives",
                "Be a Friend, Not a Bully",
                "Helpline: 1800-180-5522",
                "Zero Tolerance Against Ragging",
              ].map((title, idx) => (
                <div
                  key={idx}
                  className="border-4 border-ssgmce-orange rounded-lg p-8 text-center bg-gradient-to-br from-blue-50 to-orange-50 min-h-[200px] flex items-center justify-center shadow-lg"
                >
                  <div>
                    <h4 className="font-bold text-2xl text-ssgmce-blue mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Awareness Poster #{idx + 1}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRaggingPosters;
