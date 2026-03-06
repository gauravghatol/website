import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";

const NPTELStudentAchievers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NPTEL Student Achievers | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NPTEL Student Achievers"
        subtitle="Student Excellence in Online Learning"
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
                Top Student Achievers (Jan-Apr 2024)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Student Name
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Year
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Branch
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Course Completed
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Score %
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Certificate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Rahul Sharma",
                        year: "III",
                        branch: "CSE",
                        course: "Python Programming - IIT Madras",
                        score: 96,
                        cert: "Elite + Gold",
                      },
                      {
                        name: "Priya Deshmukh",
                        year: "IV",
                        branch: "IT",
                        course: "Machine Learning - IIT Madras",
                        score: 93,
                        cert: "Elite + Gold",
                      },
                      {
                        name: "Amit Patel",
                        year: "III",
                        branch: "E&TC",
                        course: "Digital Signal Processing - IIT Bombay",
                        score: 91,
                        cert: "Elite + Gold",
                      },
                      {
                        name: "Sneha Kulkarni",
                        year: "II",
                        branch: "CSE",
                        course: "Data Structures - IIT Delhi",
                        score: 88,
                        cert: "Elite + Silver",
                      },
                      {
                        name: "Rohan Joshi",
                        year: "IV",
                        branch: "Mechanical",
                        course: "Thermodynamics  - IIT Kharagpur",
                        score: 86,
                        cert: "Elite + Silver",
                      },
                      {
                        name: "Anjali Rao",
                        year: "III",
                        branch: "IT",
                        course: "Database Systems - IIT Madras",
                        score: 84,
                        cert: "Elite + Silver",
                      },
                      {
                        name: "Vikram Singh",
                        year: "II",
                        branch: "Electrical",
                        course: "Circuit Theory - IIT Bombay",
                        score: 82,
                        cert: "Elite",
                      },
                      {
                        name: "Kavita Mehta",
                        year: "IV",
                        branch: "Civil",
                        course: "Structural Analysis - IIT Kanpur",
                        score: 79,
                        cert: "Elite",
                      },
                      {
                        name: "Siddharth Gupta",
                        year: "III",
                        branch: "CSE",
                        course: "Algorithms - IIT Delhi",
                        score: 95,
                        cert: "Elite + Gold",
                      },
                      {
                        name: "Neha Verma",
                        year: "II",
                        branch: "E&TC",
                        course: "Communication Systems - IIT Kharagpur",
                        score: 87,
                        cert: "Elite + Silver",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.name}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.year}
                        </td>
                        <td className="border border-gray-300 px-6 py-4">
                          {row.branch}
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
                              row.cert.includes("Gold")
                                ? "bg-yellow-100 text-yellow-700"
                                : row.cert.includes("Silver")
                                  ? "bg-gray-200 text-gray-700"
                                  : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {row.cert}
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

export default NPTELStudentAchievers;
