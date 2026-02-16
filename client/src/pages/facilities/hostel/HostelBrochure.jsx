import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";
import { FaCheckCircle } from "react-icons/fa";

const HostelBrochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Brochure | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Brochure"
        subtitle="Complete Hostel Facilities Overview"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Hostel Accommodation Details
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Feature
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Boys Hostel
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Girls Hostel
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "Total Capacity",
                        boys: "600 Students",
                        girls: "600 Students",
                      },
                      {
                        feature: "Room Types",
                        boys: "Triple sharing",
                        girls: "Triple sharing",
                      },
                      {
                        feature: "Buildings",
                        boys: "3 Blocks",
                        girls: "3 Blocks",
                      },
                      {
                        feature: "Common Rooms",
                        boys: "TV Room, Recreation Room",
                        girls: "TV Room, Recreation Room",
                      },
                      {
                        feature: "Security",
                        boys: "24/7 Security Guard",
                        girls: "24/7 Security Guard + CCTV",
                      },
                      {
                        feature: "Wi-Fi",
                        boys: "Available",
                        girls: "Available",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.feature}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.boys}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.girls}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Amenities Provided
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Bed with mattress",
                  "Study table & chair",
                  "Wardrobe",
                  "Fan & Lights",
                  "Attached bathroom",
                  "RO water cooler (each floor)",
                  "Common refrigerator",
                  "Laundry room",
                  "First-aid facility",
                  "Indoor games room",
                  "Gymnasium",
                  "Prayer room",
                ].map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{amenity}</span>
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

export default HostelBrochure;
