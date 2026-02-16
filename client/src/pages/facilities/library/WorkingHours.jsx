import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import { FaClock } from "react-icons/fa";

const WorkingHours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Library Working Hours | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Library Working Hours"
        subtitle="Timings for Library Services"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Main Library Timings */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 flex items-center gap-3">
                <FaClock className="text-ssgmce-orange" />
                Reading Hall Timings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Day
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Boys Students
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Girls Students
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Monday - Saturday
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <div className="text-lg font-bold text-ssgmce-orange">
                          8:00 AM - 12:00 AM
                        </div>
                        <div className="text-xs text-gray-600">(16 hours)</div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <div className="text-lg font-bold text-ssgmce-orange">
                          8:00 AM - 8:00 PM
                        </div>
                        <div className="text-xs text-gray-600">(12 hours)</div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Regular working days
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Sunday & Holidays
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-4 text-center"
                        colSpan="2"
                      >
                        <div className="text-lg font-bold text-ssgmce-orange">
                          11:00 AM - 5:00 PM
                        </div>
                        <div className="text-xs text-gray-600">(6 hours)</div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Limited services available
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Examination Period
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-4 text-center"
                        colSpan="2"
                      >
                        <div className="text-lg font-bold text-green-600">
                          24 Hours
                        </div>
                        <div className="text-xs text-gray-600">
                          (Open all day)
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        During semester exams
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Circulation Desk Timings */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Circulation Desk (Issue/Return) Timings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-orange to-orange-600 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Day
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Morning Session
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Evening Session
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Lunch Break
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Monday - Friday
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-blue">
                        8:30 AM - 1:30 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-blue">
                        2:00 PM - 5:30 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        1:30 PM - 2:00 PM
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Saturday
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-blue">
                        8:30 AM - 1:30 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-500">
                        Closed
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        -
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Sunday & Holidays
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-4 text-center text-gray-500"
                        colspan="3"
                      >
                        Closed (Reading hall remains open)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Special Timings */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Special Timings & Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    Digital Services & OPAC
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Available:</strong> 24/7 Online Access
                  </p>
                  <p className="text-sm text-gray-600">
                    Search library catalog, renew books, and access digital
                    resources anytime through the online portal.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    Reference Section
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Monday - Saturday:</strong> 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-sm text-gray-600">
                    Get assistance from librarians for research, reference
                    queries, and database access.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    Computer Terminals
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Access Hours:</strong> Same as reading hall
                  </p>
                  <p className="text-sm text-gray-600">
                    21 computer terminals available for searching library
                    resources and online journals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    NPTEL Video Lectures
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Available:</strong> During library hours
                  </p>
                  <p className="text-sm text-gray-600">
                    Access NPTEL video lectures and course materials in the
                    digital learning section.
                  </p>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Important Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Library timings may vary during university examinations and
                    will be notified in advance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    On national holidays (Independence Day, Republic Day, Gandhi
                    Jayanti), the library remains closed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    During semester breaks, library operates on reduced hours
                    (9:00 AM - 4:00 PM).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    Entry to the reading hall requires a valid ID card at all
                    times.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    For any special requests or extended hours during research
                    work, contact the Chief Librarian.
                  </span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-orange p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-ssgmce-blue mb-3">
                Library Contact
              </h3>
              <p className="text-gray-700">
                <strong>Email:</strong> library@ssgmce.ac.in
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91-7265-252274 (Ext: 120)
              </p>
              <p className="text-gray-700">
                <strong>Chief Librarian:</strong> Available Mon-Fri, 9:00 AM -
                5:00 PM
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
