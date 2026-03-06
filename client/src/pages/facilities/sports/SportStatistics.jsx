import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const SportStatistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sport Statistics | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sport Statistics"
        subtitle="Participation & Performance Data"
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
                Sport-wise Participation (2023-24)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Sport
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Male Participants
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Female Participants
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Tournaments Participated
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sport: "Cricket",
                        male: 85,
                        female: 12,
                        tournaments: 8,
                      },
                      {
                        sport: "Football",
                        male: 68,
                        female: 15,
                        tournaments: 6,
                      },
                      {
                        sport: "Badminton",
                        male: 95,
                        female: 78,
                        tournaments: 12,
                      },
                      {
                        sport: "Volleyball",
                        male: 52,
                        female: 48,
                        tournaments: 7,
                      },
                      {
                        sport: "Basketball",
                        male: 45,
                        female: 32,
                        tournaments: 5,
                      },
                      {
                        sport: "Table Tennis",
                        male: 72,
                        female: 65,
                        tournaments: 10,
                      },
                      {
                        sport: "Athletics",
                        male: 58,
                        female: 42,
                        tournaments: 6,
                      },
                      { sport: "Chess", male: 38, female: 28, tournaments: 4 },
                      {
                        sport: "Kabaddi",
                        male: 42,
                        female: 18,
                        tournaments: 3,
                      },
                    ].map((row, idx) => {
                      const total = row.male + row.female;
                      return (
                        <tr
                          key={idx}
                          className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                        >
                          <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                            {row.sport}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                            {row.male}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                            {row.female}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-lg">
                            {total}
                          </td>
                          <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                            {row.tournaments}
                          </td>
                        </tr>
                      );
                    })}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        555
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        338
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl text-ssgmce-orange">
                        893
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        61
                      </td>
                    </tr>
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

export default SportStatistics;
