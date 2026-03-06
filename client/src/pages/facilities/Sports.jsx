import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import SportsSidebar from "../../components/SportsSidebar";
import {
  FaFutbol,
  FaTrophy,
  FaMedal,
  FaRunning,
  FaDumbbell,
  FaCheckCircle,
} from "react-icons/fa";

const Sports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sports & Physical Education | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sports & Physical Education"
        subtitle="Fostering Excellence in Sports and Fitness"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <SportsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At SSGMCE, we believe in holistic development through sports and
                physical activities. Our comprehensive sports facilities and
                trained coaches help students excel in various indoor and
                outdoor games, fostering teamwork, discipline, and a healthy
                lifestyle.
              </p>
            </section>

            {/* Statistics */}
            <section className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaTrophy className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Sports Activities</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaMedal className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Inter-College Medals</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaDumbbell className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">1500+</div>
                <div className="text-sm opacity-90">Active Participants</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaRunning className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">5</div>
                <div className="text-sm opacity-90">Professional Coaches</div>
              </div>
            </section>

            {/* Sports Facilities Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Sports Facilities Available
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Sport/Activity
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Facilities
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Coach Available
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Cricket
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Outdoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Full-size turf pitch, practice nets, floodlights
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Football
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Outdoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Grass football ground, goalposts, changing rooms
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Volleyball
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Outdoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        2 courts with synthetic surface
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Basketball
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Outdoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        2 courts with concrete flooring
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Badminton
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Indoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        6 courts in air-cooled hall with wooden flooring
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Table Tennis
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Indoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        8 professional tables with adequate lighting
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Gymnasium
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          Indoor
                        </span>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Multi-gym equipment, treadmills, weights, yoga mats
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        <FaCheckCircle className="text-green-500 mx-auto text-xl" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Achievements */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 flex items-center gap-3">
                <FaTrophy className="text-ssgmce-orange" />
                Recent Achievements (2023-24)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    event: "SGBAU Inter-College Cricket Tournament",
                    achievement: "Champions 🏆",
                  },
                  {
                    event: "State-Level Badminton Championship",
                    achievement: "Runner-up 🥈",
                  },
                  {
                    event: "Zonal Football Competition",
                    achievement: "Semi-Finalists",
                  },
                  {
                    event: "National Table Tennis Tournament",
                    achievement: "3rd Place 🥉",
                  },
                  {
                    event: "University Athletics Meet",
                    achievement: "Gold in 100m & 200m",
                  },
                  {
                    event: "Inter-College Volleyball League",
                    achievement: "Champions 🏆",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <FaMedal className="text-ssgmce-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-ssgmce-blue text-sm">
                        {item.event}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {item.achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg">
              <h3 className="text-xl font-bold text-ssgmce-blue mb-3">
                Sports Department Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-700">
                    <strong>Physical Education Director:</strong>
                  </p>
                  <p className="text-gray-600">Prof. (Name)</p>
                  <p className="text-gray-600">Email: sports@ssgmce.ac.in</p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Office Timings:</strong>
                  </p>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">
                    Phone: +91-7265-252274 (Ext: 105)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
