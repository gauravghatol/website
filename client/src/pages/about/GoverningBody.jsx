import PageHeader from "/src/components/PageHeader";
import { FaUserTie, FaCrown, FaBalanceScale } from "react-icons/fa";

const GoverningBody = () => {
  const governingBodyMembers = [
    {
      name: "Shri. Shivshankar S. Patil",
      designation: "Chairman",
      icon: FaCrown,
    },
    { name: "Shri. Shrikant S. Patil", designation: "Member", icon: FaUserTie },
    {
      name: "Regional Officer, AICTE, Mumbai",
      designation: "Ex-Officio Member",
      icon: FaBalanceScale,
    },
    {
      name: "Director, DTE, Mumbai",
      designation: "Ex-Officio Member",
      icon: FaBalanceScale,
    },
    {
      name: "Dr. S. B. Somani (Principal)",
      designation: "Member Secretary",
      icon: FaUserTie,
    },
  ];

  const boardOfDirectors = [
    { name: "Shri. Shivshankar S. Patil", role: "President" },
    { name: "Shri. N. S. Patil", role: "Vice-President" },
    { name: "Shri. N. R. Patil", role: "Secretary" },
    { name: "Shri. R. K. Patil", role: "Treasurer" },
    { name: "Smt. Vaishali S. Patil", role: "Executive Member" },
    { name: "Shri. Anil S. Patil", role: "Executive Member" },
  ];

  return (
    <div>
      <PageHeader
        title="Governing Body & Directors"
        subtitle="Our Leadership Team"
      />

      {/* Introduction */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Governing Body and Board of Directors of{" "}
              <strong>Shri Gajanan Shikshan Sanstha</strong> provide strategic
              direction, policy framework, and governance to ensure the
              institution's commitment to excellence in education and holistic
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Body & Directors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Governing Body */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ssgmce-blue mb-3">
                  Governing Body
                </h2>
                <div className="w-20 h-1 bg-ssgmce-orange rounded-full"></div>
                <p className="text-gray-600 mt-4 text-sm">
                  The Governing Body oversees the overall functioning and policy
                  decisions of the college as per AICTE and university norms.
                </p>
              </div>

              {/* Modern Card Layout for Governing Body */}
              <div className="space-y-4">
                {governingBodyMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-ssgmce-blue flex items-center gap-4"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${idx === 0 ? "bg-gradient-to-br from-ssgmce-blue to-blue-700" : "bg-gradient-to-br from-gray-600 to-gray-800"} text-white flex-shrink-0`}
                    >
                      <member.icon className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Board of Directors */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ssgmce-blue mb-3">
                  Board of Directors
                </h2>
                <div className="w-20 h-1 bg-ssgmce-orange rounded-full"></div>
                <p className="text-gray-600 mt-4 text-sm">
                  The Board of Directors of Shri Gajanan Shikshan Sanstha plays
                  a pivotal role in policy making and strategic planning for all
                  educational institutions under the Sansthan.
                </p>
              </div>

              {/* Modern Card Layout for Board */}
              <div className="space-y-4">
                {boardOfDirectors.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-orange-50 to-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-ssgmce-orange flex items-center gap-4"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${idx === 0 ? "bg-gradient-to-br from-ssgmce-orange to-orange-700" : "bg-gradient-to-br from-orange-400 to-orange-600"} text-white flex-shrink-0`}
                    >
                      <FaUserTie className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Responsibilities */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Key <span className="text-ssgmce-blue">Responsibilities</span>
              </h2>
              <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Policy Formulation",
                  desc: "Framing policies for academic excellence, infrastructure development, and student welfare.",
                },
                {
                  title: "Financial Oversight",
                  desc: "Approving budgets, monitoring expenditures, and ensuring financial sustainability.",
                },
                {
                  title: "Quality Assurance",
                  desc: "Ensuring compliance with AICTE, NAAC, NBA, and university regulations.",
                },
                {
                  title: "Strategic Planning",
                  desc: "Setting long-term goals, expansion plans, and development initiatives.",
                },
                {
                  title: "Faculty & Staff Welfare",
                  desc: "Approval of appointments, promotions, and welfare measures for employees.",
                },
                {
                  title: "Student Development",
                  desc: "Ensuring holistic development through academics, sports, and cultural activities.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-ssgmce-blue"
                >
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-ssgmce-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ssgmce-blue mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoverningBody;
