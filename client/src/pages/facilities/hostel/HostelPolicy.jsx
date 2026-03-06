import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const HostelPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Policy & Rules | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Policy, Rules & Code of Conduct"
        subtitle="Guidelines for Hostel Residents"
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
                Hostel Timings & Entry Rules
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Entry Time
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Rules
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Girls Hostel
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        Before 7:00 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Late entry requires Chief Warden's written permission.
                        Attendance at 9:30 PM daily.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Boys Hostel
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        Before 10:00 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Late entry may require explanation to Warden. Multiple
                        violations lead to disciplinary action.
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Class Timings Restriction
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        11:00 AM - 5:45 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Hostellers not allowed in hostel during class hours.
                        Must attend lectures.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                General Rules & Code of Conduct
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    type: "allowed",
                    text: "Use of laptops/PCs after registration with Warden",
                  },
                  {
                    type: "allowed",
                    text: "Visitors allowed only in designated visitor areas",
                  },
                  {
                    type: "allowed",
                    text: "Proper attire must be worn in hostel and college premises",
                  },
                  {
                    type: "allowed",
                    text: "Report to hostel at specified times for attendance",
                  },
                  {
                    type: "prohibited",
                    text: "Smoking, alcohol, tobacco products strictly prohibited",
                  },
                  {
                    type: "prohibited",
                    text: "Cooking or preparing food in hostel rooms",
                  },
                  {
                    type: "prohibited",
                    text: "Weapons (sticks, rods, chains, knives) - leads to rustication",
                  },
                  {
                    type: "prohibited",
                    text: "Hanging posters on walls, doors, or windows",
                  },
                  {
                    type: "prohibited",
                    text: "Playing loud music or creating disturbance after 10 PM",
                  },
                  {
                    type: "prohibited",
                    text: "Ragging in any form - strict action as per law",
                  },
                ].map((rule, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${
                      rule.type === "allowed"
                        ? "bg-green-50 border-green-500"
                        : "bg-red-50 border-red-500"
                    }`}
                  >
                    {rule.type === "allowed" ? (
                      <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />
                    ) : (
                      <FaTimesCircle className="text-red-600 mt-1 text-xl flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${rule.type === "allowed" ? "text-green-800" : "text-red-800"}`}
                    >
                      {rule.text}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Property & Room Allocation Rules
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Room and room partners once allotted will NOT be changed
                    except in exceptional circumstances.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Damage to college or hostel property will be recovered from
                    the concerned students.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Students must maintain cleanliness and hygiene in their
                    rooms and common areas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Electricity and water must be used judiciously. Wastage will
                    attract penalties.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Room inspection may be conducted by Warden at any time
                    without prior notice.
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelPolicy;
