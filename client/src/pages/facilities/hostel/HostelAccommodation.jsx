import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const HostelAccommodation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Accommodation Provision | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Accommodation Provision"
        subtitle="Room Allocation Process"
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
                Room Allocation Criteria
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Criteria
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Priority
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        cat: "First Year Students",
                        crit: "MHT-CET Percentile & Distance from home",
                        priority: "High",
                      },
                      {
                        cat: "Second/Third/Final Year",
                        crit: "Previous year CGPA & Conduct",
                        priority: "Medium",
                      },
                      {
                        cat: "Out-of-State Students",
                        crit: "Distance from college (>500 km)",
                        priority: "High",
                      },
                      {
                        cat: "Female Students",
                        crit: "Reserved seats, safety considerations",
                        priority: "High",
                      },
                      {
                        cat: "SC/ST/OBC Students",
                        crit: "As per government reservation policy",
                        priority: "High",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.cat}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          {row.crit}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              row.priority === "High"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {row.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Allocation Process
              </h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>
                  Submit hostel application form with all required documents
                </li>
                <li>Provisional allotment based on merit and availability</li>
                <li>Payment of hostel fees within stipulated time</li>
                <li>Document verification and final allotment</li>
                <li>Room key collection and joining formalities</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelAccommodation;
