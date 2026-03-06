import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const IndoorSportFacility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Indoor Sports Facilities | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Indoor Sports Facilities"
        subtitle="World-Class Indoor Sports Infrastructure"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SportsSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Indoor Sports Facilities
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Sport
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Courts/Tables
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Facilities
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Coach Available
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sport: "Badminton",
                        courts: "6 Courts",
                        facilities:
                          "Wooden flooring, air-cooled hall, professional lighting",
                        coach: "Yes",
                      },
                      {
                        sport: "Table Tennis",
                        courts: "8 Tables",
                        facilities:
                          "Professional tables, adequate spacing, lighting",
                        coach: "Yes",
                      },
                      {
                        sport: "Chess",
                        courts: "20 Boards",
                        facilities: "Dedicated chess room with digital clocks",
                        coach: "Part-time",
                      },
                      {
                        sport: "Carrom",
                        courts: "10 Boards",
                        facilities: "Standard tournament boards",
                        coach: "No",
                      },
                      {
                        sport: "Gymnasium",
                        courts: "1 Hall",
                        facilities:
                          "Multi-gym equipment, treadmills, weights, yoga mats",
                        coach: "Yes",
                      },
                      {
                        sport: "Indoor Cricket Practice",
                        courts: "2 Nets",
                        facilities: "Practice nets with bowling machines",
                        coach: "Yes",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.sport}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.courts}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.facilities}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              row.coach === "Yes"
                                ? "bg-green-100 text-green-700"
                                : row.coach === "Part-time"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {row.coach}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorSportFacility;
