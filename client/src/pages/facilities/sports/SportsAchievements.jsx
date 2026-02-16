import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";
import { FaTrophy } from "react-icons/fa";

const SportsAchievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sports Achievements | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sports Achievements"
        subtitle="Celebrating Excellence in Sports"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SportsSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 flex items-center gap-3">
                <FaTrophy className="text-ssgmce-orange" />
                Achievements 2023-24
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Event/Tournament
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Sport
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Level
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Achievement
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Student Name(s)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        event: "SGBAU Inter-College Cricket Tournament",
                        sport: "Cricket",
                        level: "University",
                        achievement: "🏆 Champions",
                        students: "Team of 15 players",
                      },
                      {
                        event: "Maharashtra State Badminton Championship",
                        sport: "Badminton",
                        level: "State",
                        achievement: "🥈 Runner-up",
                        students: "Rahul Sharma, Priya Deshmukh",
                      },
                      {
                        event: "Zonal Football Competition",
                        sport: "Football",
                        level: "Zonal",
                        achievement: "Semi-Finalists",
                        students: "Team of 11 players",
                      },
                      {
                        event: "National Table Tennis Tournament",
                        sport: "Table Tennis",
                        level: "National",
                        achievement: "🥉 3rd Place",
                        students: "Amit Patel",
                      },
                      {
                        event: "University Athletics Meet",
                        sport: "Athletics",
                        level: "University",
                        achievement: "🥇 Gold (100m,200m)",
                        students: "Neha Kulkarni",
                      },
                      {
                        event: "Inter-College Volleyball League",
                        sport: "Volleyball",
                        level: "University",
                        achievement: "🏆 Champions",
                        students: "Team of 12 players",
                      },
                      {
                        event: "District Chess Championship",
                        sport: "Chess",
                        level: "District",
                        achievement: "🥇 Gold",
                        students: "Siddharth Joshi",
                      },
                      {
                        event: "Maharashtra Kabaddi Championship",
                        sport: "Kabaddi",
                        level: "State",
                        achievement: "Participated",
                        students: "Team of 10 players",
                      },
                    ].map((ach, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {ach.event}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {ach.sport}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              ach.level === "National"
                                ? "bg-purple-100 text-purple-700"
                                : ach.level === "State"
                                  ? "bg-blue-100 text-blue-700"
                                  : ach.level === "University"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {ach.level}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {ach.achievement}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {ach.students}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Year-wise Medals Tally
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-orange to-orange-600 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Academic Year
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        🥇 Gold
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        🥈 Silver
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        🥉 Bronze
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        year: "2023-24",
                        gold: 12,
                        silver: 8,
                        bronze: 15,
                        total: 35,
                      },
                      {
                        year: "2022-23",
                        gold: 10,
                        silver: 12,
                        bronze: 10,
                        total: 32,
                      },
                      {
                        year: "2021-22",
                        gold: 8,
                        silver: 6,
                        bronze: 12,
                        total: 26,
                      },
                      {
                        year: "2020-21",
                        gold: 5,
                        silver: 4,
                        bronze: 8,
                        total: 17,
                      },
                      {
                        year: "2019-20",
                        gold: 9,
                        silver: 11,
                        bronze: 14,
                        total: 34,
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-orange-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.year}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-yellow-600 text-xl">
                          {row.gold}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-gray-500 text-xl">
                          {row.silver}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-orange-600 text-xl">
                          {row.bronze}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-xl">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-ssgmce-blue text-white font-bold">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL (5 Years)
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        44
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        41
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        59
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl text-ssgmce-orange">
                        144
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

export default SportsAchievements;
