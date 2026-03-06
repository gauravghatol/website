import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import {
  FaSearch,
  FaBookReader,
  FaQrcode,
  FaCheckCircle,
} from "react-icons/fa";

const LibraryServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Library Services | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Library Services"
        subtitle="Comprehensive Information Services"
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
                Library Services Overview
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Description
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Availability
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        service: "OPAC (Online Public Access Catalog)",
                        desc: "Web-based catalog for searching library resources",
                        avail: "24/7 Online",
                      },
                      {
                        service: "Barcode Technology",
                        desc: "Automated issue/return system using barcode scanning",
                        avail: "During desk hours",
                      },
                      {
                        service: "Book Bank Scheme",
                        desc: "Complete semester book sets for economically weaker students",
                        avail: "Start of semester",
                      },
                      {
                        service: "Reference Service",
                        desc: "Assistance with research queries and information needs",
                        avail: "Mon-Sat: 9AM-5PM",
                      },
                      {
                        service: "Current Awareness Service (CAS)",
                        desc: "Updates on new arrivals and latest publications",
                        avail: "Monthly",
                      },
                      {
                        service: "Selective Dissemination of Information (SDI)",
                        desc: "Personalized information alerts based on user interests",
                        avail: "On request",
                      },
                      {
                        service: "Digital Learning Materials",
                        desc: "Access to e-books, video lectures, and online courses",
                        avail: "24/7",
                      },
                      {
                        service: "Inter-Library Loan",
                        desc: "Borrowing books from other institutional libraries",
                        avail: "Within 7 days",
                      },
                      {
                        service: "Photocopy & Scan Service",
                        desc: "Document reproduction within copyright limits",
                        avail: "Library hours",
                      },
                      {
                        service: "Wi-Fi & Internet Access",
                        desc: "Round-the-clock internet connectivity",
                        avail: "24/7",
                      },
                    ].map((item, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {item.service}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          {item.desc}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {item.avail}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Featured Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3 flex items-center gap-2">
                    <FaSearch className="text-ssgmce-orange" />
                    OPAC System
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Search by title, author, subject, or ISBN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Check book availability in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>View your borrowing history & due dates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Renew books online before due date</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3 flex items-center gap-2">
                    <FaQrcode className="text-ssgmce-orange" />
                    Barcode System
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Quick issue and return transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Accurate tracking of library resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Automated overdue reminders via SMS/Email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reduced manual errors in transactions</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3 flex items-center gap-2">
                    <FaBookReader className="text-ssgmce-orange" />
                    Book Bank Scheme
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Complete textbook set for entire semester</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>For economically disadvantaged students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Based on merit and financial need</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Covers all core subjects of the curriculum</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    Reference Services
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Research guidance and support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Database search assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Information literacy training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Citation and referencing help</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryServices;
