import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import FacilitiesSidebar from "../../components/FacilitiesSidebar";
import {
  FaBus,
  FaUtensils,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaWifi,
  FaCheckCircle,
} from "react-icons/fa";

const OtherFacilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Other Campus Facilities | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Other Campus Facilities"
        subtitle="Comprehensive Campus Amenities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <FacilitiesSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <section>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SSGMCE provides a wide range of facilities to ensure a
                comfortable and enriching campus experience. From transportation
                to dining, healthcare to banking, we have everything students
                need for a holistic college life.
              </p>
            </section>

            {/* Quick Stats */}
            <section className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaBus className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm opacity-90">Bus Routes</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaUtensils className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-90">Cafeterias</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaHospital className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Medical Facility</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaWifi className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Wi-Fi Coverage</div>
              </div>
            </section>

            {/* Facilities Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Campus Facilities Overview
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Facility
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Details
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Availability
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Timings
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaBus className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Transport
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        15+ bus routes covering Shegaon, Akola, Amravati,
                        Jalgaon, and nearby cities
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Available
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        As per schedule
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaUtensils className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Cafeteria
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        3 cafeterias with hygienic food, snacks, beverages.
                        Separate vegetarian & Jain options
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Available
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        8 AM - 8 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaHospital className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Medical Center
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        On-campus medical center with doctor, nurse, first-aid,
                        ambulance service
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          24/7
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        24 hours
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaShoppingCart className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Stationery
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        On-campus stationery shop for books, stationery,
                        engineering instruments
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Available
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        9 AM - 6 PM
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaUniversity className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Banking
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        ATM facility (SBI, Bank of Maharashtra), fee payment
                        counter
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Available
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        24/7 (ATM)
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <FaWifi className="text-ssgmce-orange text-2xl" />
                          <span className="font-semibold text-ssgmce-blue">
                            Wi-Fi
                          </span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        High-speed Wi-Fi across entire campus (1 Gbps bandwidth)
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          24/7
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        24 hours
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Medical Facilities */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Medical & Healthcare
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-ssgmce-blue mb-3">
                    On-Campus Medical Center
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Resident Medical Officer (MBBS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Trained nursing staff 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>First-aid and emergency treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Ambulance service available</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-ssgmce-blue mb-3">
                    Tie-ups with Hospitals
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>SSGM Rugnalaya (5 km from campus)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Government Hospital, Shegaon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Specialist doctors on call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Annual health check-up camps</span>
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

export default OtherFacilities;
