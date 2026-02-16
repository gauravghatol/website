import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const MinutesOfMeeting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Minutes of Meeting | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Minutes of Meeting - Anti-Ragging Committee"
        subtitle="Committee Meeting Records"
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
                Latest Committee Meeting
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong> 15th January 2024
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Venue:</strong> Committee Room, Admin Block
              </p>
              <h4 className="font-bold text-lg text-ssgmce-blue mb-2">
                Agenda & Decisions:
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>
                  Review of anti-ragging awareness campaigns conducted in
                  2023-24
                </li>
                <li>
                  Discussion on new CCTV installations in hostelcorridors and
                  common areas
                </li>
                <li>Analysis of student feedback forms and grievances</li>
                <li>
                  Approval of anti-ragging posters and banners for new academic
                  year
                </li>
                <li>
                  Coordination with local police for safety drills and emergency
                  response
                </li>
                <li>Planning orientation programs for incoming students</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinutesOfMeeting;
