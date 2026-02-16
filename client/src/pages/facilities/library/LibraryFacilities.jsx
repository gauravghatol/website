import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import { FaCheckCircle } from "react-icons/fa";

const LibraryFacilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Library Facilities | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Library Facilities"
        subtitle="Infrastructure & Amenities"
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
                Library Infrastructure Facilities
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Facility
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Capacity/Quantity
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Features
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        facility: "Periodical Section",
                        capacity: "100 Seats",
                        features:
                          "Current newspapers, magazines, journals. Air-cooled environment with comfortable seating.",
                      },
                      {
                        facility: "Reference Section",
                        capacity: "200 Seats",
                        features:
                          "Encyclopedias, handbooks, dictionaries. Silent study area with individual reading tables.",
                      },
                      {
                        facility: "Computer Terminals",
                        capacity: "21 Systems",
                        features:
                          "High-speed internet, OPAC access, digital resources, printing facility.",
                      },
                      {
                        facility: "Digital Library",
                        capacity: "15 Workstations",
                        features:
                          "Access to e-books, e-journals, NPTEL videos, online databases.",
                      },
                      {
                        facility: "Stack Area",
                        capacity: "92,000+ Books",
                        features:
                          "Organized by Dewey Decimal Classification, barcode-enabled, RFID security.",
                      },
                      {
                        facility: "Reprography Services",
                        capacity: "2 Machines",
                        features:
                          "Photocopying, scanning, printing services (within copyright limits).",
                      },
                      {
                        facility: "Wi-Fi Access",
                        capacity: "Campus-wide",
                        features:
                          "Round-the-clock 1 Gbps connectivity, accessible with library credentials.",
                      },
                      {
                        facility: "Discussion Rooms",
                        capacity: "3 Rooms",
                        features:
                          "Group study rooms with whiteboards, projectors for collaborative learning.",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.facility}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.capacity}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.features}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Technology & Automation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "SLIM 27 Software",
                    items: [
                      "Integrated Library Management System",
                      "Cataloging & circulation automation",
                      "Web OPAC for online search",
                      "Inventory & stock management",
                    ],
                  },
                  {
                    title: "Barcode Technology",
                    items: [
                      "Quick issue & return",
                      "Automated transaction records",
                      "Theft detection system",
                      "Real-time availability updates",
                    ],
                  },
                  {
                    title: "Digital Resources",
                    items: [
                      "IEEE Xplore digital library",
                      "DELNET consortium membership",
                      "Remote access to subscribed journals",
                      "INFLIBNET e-resources",
                    ],
                  },
                  {
                    title: "Security Systems",
                    items: [
                      "CCTV surveillance",
                      "RFID book security gates",
                      "Biometric attendance",
                      "Fire detection & suppression",
                    ],
                  },
                ].map((section, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryFacilities;
