import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const AntiRaggingCommittee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Anti-Ragging Committee | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Anti-Ragging Committee"
        subtitle="Zero Tolerance Against Ragging"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                SSGMCE's Zero Tolerance Policy
              </h3>
              <p className="text-gray-700">
                Ragging is a serious offense that undermines student dignity and
                well-being. SSGMCE maintains absolute zero tolerance against
                ragging in any form, as per the Maharashtra Prohibition of
                Ragging Act, 1999 and UGC guidelines.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Anti-Ragging Committee Members (2024-25)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Name & Designation
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Role in Committee
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
                        contact: "principal@ssgmce.ac.in",
                      },
                      {
                        name: "Dr. (Name)",
                        desig: "Dean Student Welfare",
                        role: "Convener",
                        contact: "dsw@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Chief Warden",
                        role: "Member",
                        contact: "chiefwarden@ssgmce.ac.in",
                      },
                      {
                        name: "Dr. (Name)",
                        desig: "HOD CSE",
                        role: "Member",
                        contact: "hod.cse@ssgmce.ac.in",
                      },
                      {
                        name: "Dr. (Name)",
                        desig: "HOD Mechanical",
                        role: "Member",
                        contact: "hod.mech@ssgmce.ac.in",
                      },
                      {
                        name: "(Name)",
                        desig: "Local Police Inspector",
                        role: "External Member",
                        contact: "Police Station Shegaon",
                      },
                      {
                        name: "(Name)",
                        desig: "NGO Representative",
                        role: "External Member",
                        contact: "ngo@example.com",
                      },
                      {
                        name: "(Student Name)",
                        desig: "Student Representative",
                        role: "Student Member",
                        contact: "student@ssgmce.ac.in",
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
                          {member.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Reporting Ragging - Helpline & Contacts
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-600">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    24/7 Anti-Ragging Helpline
                  </h4>
                  <p className="text-3xl font-bold text-red-600 mb-2">
                    1800-180-5522
                  </p>
                  <p className="text-sm text-gray-600">
                    UGC Toll-Free Helpline
                  </p>
                </div>
                <div className="rounded-xl border-l-4 border-ssgmce-orange bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    SSGMCE Contacts
                  </h4>
                  <p className="text-gray-700">
                    <strong>Email:</strong> chiefwarden@ssgmce.ac.in
                  </p>
                  <p className="text-gray-700">
                    <strong>Alternate:</strong> principal@ssgmce.ac.in
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> +91-7265-252274
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Punishments for Ragging (As per Act)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Offense Severity
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Punishment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        severity: "Minor Ragging (teasing, verbal abuse)",
                        punishment:
                          "Suspension from classes, Cancellation of admission",
                      },
                      {
                        severity: "Moderate Ragging (harassment, bullying)",
                        punishment:
                          "Debarment from examinations, Withdrawal of scholarships, Expulsion for specific period",
                      },
                      {
                        severity:
                          "Severe Ragging (physical assault, mental torture)",
                        punishment:
                          "Rustication from institution, Imprisonment up to 2 years, Fine up to ₹10,000",
                      },
                      {
                        severity: "Criminal Ragging (causing grievous hurt)",
                        punishment:
                          "Imprisonment up to 7 years, FIR with police, Permanent expulsion",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-red-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-red-700">
                          {row.severity}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          {row.punishment}
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

export default AntiRaggingCommittee;
