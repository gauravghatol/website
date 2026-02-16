import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const AntiRaggingNotices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Anti-Ragging Notices | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Anti-Ragging Notices"
        subtitle="Important Announcements"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-4">
            {[
              {
                date: "1st July 2024",
                notice:
                  "Anti-Ragging Affidavit submission mandatory for all new students. Submit online before 15th July 2024.",
              },
              {
                date: "15th August 2024",
                notice:
                  "Anti-Ragging Awareness Week scheduled from 15th  to 22nd August 2024. All students must attend orientation.",
              },
              {
                date: "10th June 2024",
                notice:
                  "24/7 Anti-Ragging Helpline activated: 1800-180-5522. Students can report incidents anonymously.",
              },
              {
                date: "1st June 2024",
                notice:
                  "CCTV surveillance enhanced in all hostel corridors, entry points, and common areas.",
              },
              {
                date: "15th May 2024",
                notice:
                  "Anti-Ragging Squad formed with faculty and senior students to monitor hostels regularly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-4 border-ssgmce-orange bg-orange-50 p-6 rounded-r-lg shadow-md"
              >
                <p className="font-bold text-ssgmce-orange mb-2">{item.date}</p>
                <p className="text-gray-700">{item.notice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRaggingNotices;
