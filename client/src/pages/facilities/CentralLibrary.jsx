import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import LibrarySidebar from "../../components/LibrarySidebar";
import {
  FaBook,
  FaLaptop,
  FaNewspaper,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const CentralLibrary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Central Library | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Central Library"
        subtitle="Knowledge Hub of SSGMCE"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Central Library at SSGMCE is the intellectual hub of the
                campus, housing an extensive collection of books, journals, and
                digital resources. With state-of-the-art facilities and a
                dedicated team, we provide an ideal environment for academic
                excellence and research.
              </p>
            </section>

            {/* Statistics */}
            <section className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaBook className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">85,000+</div>
                <div className="text-sm opacity-90">Volumes of Books</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaNewspaper className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-90">Journals & Magazines</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaLaptop className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Digital Workstations</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaClock className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">18 Hours</div>
                <div className="text-sm opacity-90">Daily Access</div>
              </div>
            </section>

            {/* Collection Details Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Library Collection
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Count
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Text Books
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        50,000+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        All engineering disciplines & management
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Reference Books
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        15,000+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Encyclopedia, handbooks, dictionaries
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Technical Journals
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        100+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        IEEE, Springer, Elsevier, etc.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        E-Books
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        20,000+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Digital access via subscribed platforms
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Project Reports
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        5,000+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Student project archives
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Newspapers & Magazines
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        50+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Daily newspapers & monthly magazines
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Digital Resources */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Digital Library Resources
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "IEEE Xplore",
                    desc: "Access to 5+ million technical documents",
                  },
                  {
                    name: "ScienceDirect",
                    desc: "Elsevier's leading platform with 16M+ publications",
                  },
                  {
                    name: "Springer Link",
                    desc: "Scientific journals, books & reference works",
                  },
                  { name: "NPTEL", desc: "Video lectures & course materials" },
                  {
                    name: "DELNET",
                    desc: "Developing Library Network consortium",
                  },
                  {
                    name: "INFLIBNET",
                    desc: "Information & Library Network Centre",
                  },
                ].map((resource, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-ssgmce-blue">
                        {resource.name}
                      </h4>
                      <p className="text-sm text-gray-600">{resource.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Services & Facilities */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Services & Facilities
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border-l-4 border-ssgmce-orange bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    📚 Book Lending
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Students can borrow up to 3 books for 14 days</li>
                    <li>• Faculty can borrow up to 10 books for 30 days</li>
                    <li>• Easy renewal process available online</li>
                  </ul>
                </div>
                <div className="rounded-xl border-l-4 border-ssgmce-blue bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    💻 OPAC System
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Online Public Access Catalog</li>
                    <li>• Search books by title, author, or subject</li>
                    <li>• Check availability in real-time</li>
                  </ul>
                </div>
                <div className="rounded-xl border-l-4 border-ssgmce-orange bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    📖 Book Bank Scheme
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• For economically weaker students</li>
                    <li>• Complete semester book set provided</li>
                    <li>• Based on merit and need</li>
                  </ul>
                </div>
                <div className="rounded-xl border-l-4 border-ssgmce-blue bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    🏛️ Reading Hall
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Seating capacity: 400+ students</li>
                    <li>• Air-cooled environment</li>
                    <li>• Open 6 AM to 12 Midnight (18 hours)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Library Timings */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Library Timings
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Day
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Circulation Section
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Reading Hall
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Monday - Saturday
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-ssgmce-blue">
                        8:30 AM - 5:30 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-ssgmce-orange font-bold">
                        6:00 AM - 12:00 Midnight
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Sunday & Holidays
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-500">
                        Closed
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-ssgmce-orange font-bold">
                        6:00 AM - 12:00 Midnight
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        Exam Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-ssgmce-blue">
                        9:00 AM - 4:00 PM
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-ssgmce-orange font-bold">
                        24 Hours
                      </td>
                    </tr>
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

export default CentralLibrary;
