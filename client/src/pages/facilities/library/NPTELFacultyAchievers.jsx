import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";

const NPTELFacultyAchievers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NPTEL Faculty Achievers | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NPTEL Faculty Achievers"
        subtitle="Faculty Excellence in Online Learning"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Faculty Members - NPTEL Certified (2023-24)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Faculty Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Course Completed
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Score %
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Certificate Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Name 1)",
                        dept: "CSE",
                        course: "Deep Learning - IIT Madras",
                        score: 89,
                        type: "Elite + Silver",
                      },
                      {
                        name: "Dr. (Name 2)",
                        dept: "IT",
                        course: "Python for Data Science - IIT Madras",
                        score: 92,
                        type: "Elite + Gold",
                      },
                      {
                        name: "Prof. (Name 3)",
                        dept: "Mechanical",
                        course: "Manufacturing Process Technology - IIT Bombay",
                        score: 78,
                        type: "Elite",
                      },
                      {
                        name: "Dr. (Name 4)",
                        dept: "E&TC",
                        course: "Digital Communication  - IIT Kharagpur",
                        score: 85,
                        type: "Elite + Silver",
                      },
                      {
                        name: "Dr. (Name 5)",
                        dept: "Electrical",
                        course: "Power Systems - IIT Delhi",
                        score: 81,
                        type: "Elite",
                      },
                      {
                        name: "Prof. (Name 6)",
                        dept: "Civil",
                        course: "Structural Analysis - IIT Kanpur",
                        score: 76,
                        type: "Elite",
                      },
                      {
                        name: "Dr. (Name 7)",
                        dept: "CSE",
                        course:
                          "Introduction to Machine Learning - IIT Kharagpur",
                        score: 94,
                        type: "Elite + Gold",
                      },
                      {
                        name: "Prof. (Name 8)",
                        dept: "Mechanical",
                        course: "Engineering Thermodynamics - IIT Bombay",
                        score: 72,
                        type: "Successfully Completed",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.name}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {row.dept}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.course}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-lg">
                          {row.score}%
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              row.type.includes("Gold")
                                ? "bg-yellow-100 text-yellow-700"
                                : row.type.includes("Silver")
                                  ? "bg-gray-200 text-gray-700"
                                  : row.type.includes("Elite")
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-green-100 text-green-700"
                            }`}
                          >
                            {row.type}
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

export default NPTELFacultyAchievers;
