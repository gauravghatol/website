import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import { FaBook, FaCheckCircle } from "react-icons/fa";

const AboutLibrary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Library | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="About Library"
        subtitle="Central Library - Knowledge Hub of SSGMCE"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Introduction */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Welcome to SSGMCE Central Library
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Central Library at Shri Sant Gajanan Maharaj College of
                Engineering, Shegaon, serves as the intellectual cornerstone of
                our institution. With an extensive collection of books,
                journals, and digital resources, we provide comprehensive
                support for academic excellence, research, and lifelong
                learning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our library is equipped with modern facilities including digital
                workstations, high-speed internet connectivity, and
                subscriptions to premier national and international databases.
                We continuously update our collection to meet the evolving needs
                of students, faculty, and researchers.
              </p>
            </section>

            {/* Collection Overview Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Library Collection Overview
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Resource Type
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
                        Total Books & Volumes
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        92,306+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Textbooks, reference books, and technical literature
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Unique Titles
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        30,128+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Distinct titles across all disciplines
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Online E-Journals
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        1,907
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        IEEE, Springer, Elsevier, and other publishers
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Print Journals
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        24
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Technical and scientific print editions
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        CD-ROMs & Digital Media
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        500+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Educational software, video lectures, reference
                        materials
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Research Papers & Theses
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        5,000+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Student projects, dissertations, research publications
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Infrastructure */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Library Infrastructure
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3 flex items-center gap-2">
                    <FaBook className="text-ssgmce-orange" />
                    Reading Spaces
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Periodical Section: 100 seating capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Reference Section: 200 seating capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Air-cooled, well-lit reading environment</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
                  <h4 className="font-bold text-lg text-ssgmce-blue mb-3">
                    Digital Infrastructure
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>21 Computer Terminals with Internet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Round-the-clock Wi-Fi connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>SLIM 27 Library Management Software</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide comprehensive information resources and services that
                support teaching, learning, and research activities at SSGMCE.
                We strive to create a conducive environment for knowledge
                acquisition and intellectual growth through continuous
                innovation in library services and resources.
              </p>

              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Key Objectives
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Build and maintain a comprehensive collection of quality resources",
                  "Provide efficient access to physical and digital information",
                  "Support research and innovation through specialized services",
                  "Promote information literacy and digital skills",
                  "Foster collaborative learning and knowledge sharing",
                  "Continuously upgrade infrastructure and technology",
                ].map((objective, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <FaCheckCircle className="text-ssgmce-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{objective}</span>
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

export default AboutLibrary;
