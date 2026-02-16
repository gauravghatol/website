import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const HostelFeedback = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Feedback | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Feedback Form"
        subtitle="Share Your Suggestions & Concerns"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                We Value Your Feedback
              </h3>
              <p className="text-gray-700 mb-6">
                Your feedback helps us improve hostel facilities, services, and
                overall student experience. Please share your thoughts,
                suggestions, and concerns.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-ssgmce-blue rounded-lg p-6">
                <h4 className="font-bold text-lg text-ssgmce-blue mb-4">
                  Feedback Categories:
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Room cleanliness & maintenance",
                    "Mess food quality & hygiene",
                    "Wi-Fi connectivity & speed",
                    "Electricity & water supply",
                    "Security & safety measures",
                    "Warden responsiveness",
                    "Recreation facilities",
                    "General suggestions",
                  ].map((cat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white p-3 rounded-lg"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <label className="text-sm text-gray-700">{cat}</label>
                    </div>
                  ))}
                </div>
                <button className="bg-ssgmce-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                  Submit Feedback Online
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelFeedback;
