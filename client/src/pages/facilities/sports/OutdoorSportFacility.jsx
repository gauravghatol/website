import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const OutdoorSportFacility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Outdoor Sports Facilities | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Outdoor Sports Facilities"
        subtitle="Extensive Outdoor Sports Infrastructure"
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
                Outdoor Sports Facilities
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Sport
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Grounds/Courts
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Facilities & Features
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Coach Available
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sport: "Cricket",
                        grounds: "1 Full Ground",
                        facilities:
                          "Turf pitch, practice nets, pavilion, floodlights",
                        coach: "Yes",
                      },
                      {
                        sport: "Football",
                        grounds: "1 Full Ground",
                        facilities: "Grass field, goalposts, changing rooms",
                        coach: "Yes",
                      },
                      {
                        sport: "Volleyball",
                        grounds: "2 Courts",
                        facilities: "Synthetic surface, standard nets",
                        coach: "Yes",
                      },
                      {
                        sport: "Basketball",
                        grounds: "2 Courts",
                        facilities: "Concrete flooring, standard hoops",
                        coach: "Yes",
                      },
                      {
                        sport: "Kabaddi",
                        grounds: "1 Court",
                        facilities: "Standard kabaddi mat, markings",
                        coach: "Part-time",
                      },
                      {
                        sport: "Kho-Kho",
                        grounds: "1 Court",
                        facilities: "Standard ground with markings",
                        coach: "Part-time",
                      },
                      {
                        sport: "Athletics Track",
                        grounds: "400m Track",
                        facilities:
                          "8-lane synthetic track, long jump & high jump pits",
                        coach: "Yes",
                      },
                      {
                        sport: "Tennis",
                        grounds: "2 Courts",
                        facilities: "Hard court surface, nets",
                        coach: "Part-time",
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
                          {row.grounds}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.facilities}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              row.coach === "Yes"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
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

export default OutdoorSportFacility;
