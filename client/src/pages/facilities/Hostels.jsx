import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import HostelSidebar from "../../components/HostelSidebar";
import {
  FaWifi,
  FaBolt,
  FaTint,
  FaUtensils,
  FaDumbbell,
  FaFirstAid,
  FaShieldAlt,
  FaTv,
  FaBed,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Hostels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostels & Accommodation | SSGMCE";
  }, []);

  const amenities = [
    {
      icon: FaWifi,
      label: "High-speed Wi-Fi",
      desc: "24/7 connectivity",
      color: "blue",
    },
    {
      icon: FaBolt,
      label: "Power Backup",
      desc: "100% backup supply",
      color: "orange",
    },
    {
      icon: FaTint,
      label: "RO Water",
      desc: "Purified drinking water",
      color: "blue",
    },
    {
      icon: FaUtensils,
      label: "Hygienic Mess",
      desc: "Nutritious meals",
      color: "orange",
    },
    {
      icon: FaDumbbell,
      label: "Gymnasium",
      desc: "Modern fitness center",
      color: "blue",
    },
    {
      icon: FaFirstAid,
      label: "Medical Facility",
      desc: "24/7 dispensary",
      color: "orange",
    },
    {
      icon: FaShieldAlt,
      label: "CCTV Security",
      desc: "Round-the-clock monitoring",
      color: "blue",
    },
    {
      icon: FaTv,
      label: "Common Room",
      desc: "TV & indoor games",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostels & Accommodation"
        subtitle="A Home Away from Home - Experience Comfortable Campus Living"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
        breadcrumbs={[
          { label: "Facilities", link: "/facilities" },
          { label: "Hostels" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-10">
            {/* Introduction */}
            <section className="relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
              <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBed className="text-2xl text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                      Campus Living at SSGMCE
                    </h2>
                    <p className="text-gray-500">
                      Where comfort meets academic excellence
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  SSGMCE provides a{" "}
                  <strong className="text-blue-700">
                    "Home Away from Home"
                  </strong>{" "}
                  experience for students. Our hostels are designed to foster a
                  sense of community, discipline, and security, situated in a
                  lush green, pollution-free environment. With modern amenities
                  and round-the-clock supervision, we ensure students can focus
                  on their studies while enjoying comfortable accommodation.
                </p>
              </div>
            </section>

            {/* Hostel Cards */}
            <section className="grid md:grid-cols-2 gap-6">
              {/* Boys Hostel */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-ssgmce-dark-blue/90 to-ssgmce-blue/80 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                  alt="Boys Hostel"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-20 p-8 text-white min-h-[280px] flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <FaUsers /> Capacity: 600+ Students
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Boys Hostel</h3>
                  <p className="text-blue-100 mb-4">
                    Spacious rooms with modern amenities, common study areas,
                    and a well-maintained mess facility.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      Single/Double Rooms
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      24/7 Security
                    </span>
                  </div>
                </div>
              </div>

              {/* Girls Hostel */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-500/80 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
                  alt="Girls Hostel"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-20 p-8 text-white min-h-[280px] flex flex-col justify-end">
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      <FaUsers /> Capacity: 600+ Students
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Girls Hostel</h3>
                  <p className="text-orange-100 mb-4">
                    Safe and secure accommodation with dedicated warden, modern
                    facilities, and nurturing environment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      Women Staff
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
                      Enhanced Security
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Amenities Grid */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Hostel Amenities
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {amenities.map((amenity, idx) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          amenity.color === "blue"
                            ? "bg-blue-100 group-hover:bg-blue-600"
                            : "bg-orange-100 group-hover:bg-orange-500"
                        } transition-colors`}
                      >
                        <Icon
                          className={`text-xl ${
                            amenity.color === "blue"
                              ? "text-blue-600 group-hover:text-white"
                              : "text-orange-500 group-hover:text-white"
                          } transition-colors`}
                        />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        {amenity.label}
                      </h4>
                      <p className="text-sm text-gray-500">{amenity.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-ssgmce-dark-blue to-ssgmce-blue p-8 rounded-2xl text-white">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-orange-400">1200+</p>
                  <p className="text-blue-200 mt-1">Total Capacity</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400">2</p>
                  <p className="text-blue-200 mt-1">Hostel Blocks</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400">24/7</p>
                  <p className="text-blue-200 mt-1">Security & Support</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400">100%</p>
                  <p className="text-blue-200 mt-1">Wi-Fi Coverage</p>
                </div>
              </div>
            </section>

            {/* Rules Highlight */}
            <section className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-orange-700 mb-4">
                Hostel Guidelines
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Maintain discipline and follow hostel timings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Keep rooms and common areas clean
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Register guests at the reception
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Use electricity and water responsibly
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Report any issues to warden immediately
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Ragging is strictly prohibited
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact CTA */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    Need More Information?
                  </h3>
                  <p className="text-gray-500">
                    Contact our Hostel Administration Office
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+917265252289"
                    className="inline-flex items-center gap-2 bg-ssgmce-light-blue hover:bg-ssgmce-blue text-white px-5 py-3 rounded-xl font-medium transition-colors"
                  >
                    <FaPhoneAlt />
                    +91-7265-252289
                  </a>
                  <a
                    href="mailto:hostel@ssgmce.ac.in"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-medium transition-colors"
                  >
                    <FaEnvelope />
                    Email Hostel Office
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostels;
