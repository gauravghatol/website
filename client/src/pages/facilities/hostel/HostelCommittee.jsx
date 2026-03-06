import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const HostelCommittee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Committee | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Committee"
        subtitle="Hostel Management Committee Members"
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
                Hostel Management Committee (2024-25)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Name & Designation
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Responsibilities
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Principal Name)",
                        desig: "Principal",
                        role: "Chairman",
                        resp: "Overall hostel administration oversight",
                        contact: "principal@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Chief Warden",
                        role: "Member Secretary",
                        resp: "Day-to-day hostel operations, disciplinary matters",
                        contact: "chiefwarden@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Boys Hostel Warden",
                        role: "Warden",
                        resp: "Boys hostel management, attendance, grievances",
                        contact: "boyswardenss@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Girls Hostel Warden",
                        role: "Warden",
                        resp: "Girls hostel management, security, welfare",
                        contact: "girlswarden@ssgmce.ac.in",
                      },
                      {
                        name: "Dr. (Name)",
                        desig: "HOD CSE",
                        role: "Faculty Member",
                        resp: "Student welfare, academic integration",
                        contact: "hod.cse@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Mess Manager",
                        role: "Non-Teaching Member",
                        resp: "Mess operations, food quality control",
                        contact: "mess@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Maintenance Supervisor",
                        role: "Non-Teaching Member",
                        resp: "Infrastructure maintenance, cleanliness",
                        contact: "maintenance@ssgmce.ac.in",
                      },
                      {
                        name: "(Student Name)",
                        desig: "Student Representative (Boys)",
                        role: "Student Member",
                        resp: "Student grievances, suggestions",
                        contact: "boysrep@ssgmce.ac.in",
                      },
                      {
                        name: "(Student Name)",
                        desig: "Student Representative (Girls)",
                        role: "Student Member",
                        resp: "Student grievances, suggestions",
                        contact: "girlsrep@ssgmce.ac.in",
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
                        <td className="border border-gray-300 px-6 py-4 text-xs text-gray-700">
                          {member.contact}
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

export default HostelCommittee;
