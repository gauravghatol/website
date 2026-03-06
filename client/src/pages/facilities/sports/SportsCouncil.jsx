import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const SportsCouncil = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sports Council | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sports Council"
        subtitle="Sports Governing Body"
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
                Sports Council Members (2024-25)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Name & Designation
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Role in Council
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Responsibilities
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Name)",
                        desig: "Director, Physical Education",
                        role: "Chairman",
                        resp: "Overall sports administration and policy decisions",
                      },
                      {
                        name: "Prof. (Name)",
                        desig: "Sports Coordinator",
                        role: "Member Secretary",
                        resp: "Event organization, tournament coordination",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Cricket Coach",
                        role: "Coach Representative",
                        resp: "Training programs, team selection for cricket",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Athletics Coach",
                        role: "Coach Representative",
                        resp: "Athletics training and competition preparation",
                      },
                      {
                        name: "Dr. (Name)",
                        desig: "Faculty Representative",
                        role: "Faculty Member",
                        resp: "Academic-sports integration",
                      },
                      {
                        name: "(Student Name)",
                        desig: "Sports Captain (Boys)",
                        role: "Student Representative",
                        resp: "Student grievances, team coordination",
                      },
                      {
                        name: "(Student Name)",
                        desig: "Sports Captain (Girls)",
                        role: "Student Representative",
                        resp: "Women sports promotion, team management",
                      },
                    ].map((member, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4">
                          <strong className="text-ssgmce-blue">
                            {member.name}
                          </strong>
                          <br />
                          <span className="text-sm text-gray-600">
                            {member.desig}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold">
                          {member.role}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {member.resp}
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

export default SportsCouncil;
