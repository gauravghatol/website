import PageHeader from "../../components/PageHeader";
import {
  FaUniversity,
  FaUserTie,
  FaUsers,
  FaChalkboardTeacher,
  FaFileAlt,
} from "react-icons/fa";

import { useEffect } from 'react';
const Organization = () => {
  useEffect(() => {
    document.title = 'Organization | SSGMCE';
  }, []);
  return (
    <div>
      <PageHeader
        title="Organizational Structure"
        subtitle="Our Hierarchy & Administration"
      />

      {/* Organizational Structure */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-16">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Organizational <span className="text-ssgmce-blue">Hierarchy</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our institution follows a well-defined hierarchical structure to
              ensure efficient governance and academic excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Governing Body */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-ssgmce-blue text-ssgmce-blue p-4 rounded-2xl shadow-md mb-3 text-center transform hover:scale-105 transition-transform">
              <FaUniversity className="text-4xl mx-auto mb-2" />
              <h3 className="text-lg font-bold">Governing Body</h3>
              <p className="text-xs text-ssgmce-blue/70 mt-1">
                Policy Making & Strategic Direction
              </p>
            </div>

            {/* Connector */}
            <div className="h-6 w-1 bg-gradient-to-b from-ssgmce-blue to-ssgmce-orange mx-auto"></div>

            {/* CDC / LMC */}
            <div className="bg-white border-4 border-ssgmce-blue p-5 rounded-2xl shadow-lg mb-3 text-center transform hover:scale-105 transition-transform">
                <FaUsers className="text-4xl text-ssgmce-blue mx-auto mb-2" />
              <h3 className="text-lg font-bold text-ssgmce-blue">
                College Development Committee (CDC)
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Local Managing Committee
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Academic Planning & Development
              </p>
            </div>

            {/* Connector */}
            <div className="h-6 w-1 bg-gradient-to-b from-ssgmce-blue to-ssgmce-orange mx-auto"></div>

            {/* Principal */}
            <div className="bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-ssgmce-orange text-ssgmce-blue p-6 rounded-2xl shadow-md mb-3 text-center transform hover:scale-105 transition-transform">
              <FaUserTie className="text-5xl mx-auto mb-2 text-ssgmce-orange" />
              <h3 className="text-2xl font-bold text-ssgmce-orange">Principal</h3>
              <p className="text-xs text-ssgmce-orange/70 mt-1">
                Chief Executive & Academic Head
              </p>
              <p className="font-semibold mt-2 text-ssgmce-blue text-sm">Dr. S. B. Somani</p>
            </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  title: "Dean (Academics)",
                  icon: FaChalkboardTeacher,
                  color: "ssgmce-blue",
                  bg: "blue-50"
                },
                { title: "Dean (R&D)", icon: FaFileAlt, color: "ssgmce-orange", bg: "orange-50" },
                {
                  title: "Dean (Student Affairs)",
                  icon: FaUsers,
                  color: "ssgmce-blue",
                  bg: "blue-50"
                },
                { title: "Registrar", icon: FaFileAlt, color: "ssgmce-orange", bg: "orange-50" },
              ].map((role, idx) => (
                <div
                  key={idx}
                  className={`bg-${role.bg} p-5 rounded-xl shadow-md border-2 border-${role.color} text-center hover:shadow-lg transition-shadow`}
                >
                  <role.icon
                    className={`text-4xl text-${role.color} mx-auto mb-3`}
                  />
                  <h4 className={`font-bold text-${role.color} text-sm`}>
                    {role.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Departments */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue text-center mb-6">
                Academic Departments
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Computer Science & Engineering",
                  "Information Technology",
                  "Electronics & Telecommunication",
                  "Electrical Engineering",
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Applied Sciences & Humanities",
                  "MBA Department",
                ].map((dept, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-ssgmce-blue transition-colors"
                  >
                    <div className="w-2 h-2 bg-ssgmce-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {dept}
                      </p>
                      <p className="text-xs text-gray-500">Headed by HOD</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Offices */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-16">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Administrative <span className="text-ssgmce-blue">Offices</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Training & Placement Office",
                desc: "Career guidance and placement activities",
              },
              {
                title: "Examination Office",
                desc: "Conduct of examinations and result processing",
              },
              {
                title: "Accounts Office",
                desc: "Financial management and fee collection",
              },
              {
                title: "Library Office",
                desc: "Book issue, digital resources management",
              },
              {
                title: "IQAC Office",
                desc: "Quality assurance and accreditation",
              },
              {
                title: "Administrative Office",
                desc: "General administration and coordination",
              },
            ].map((office, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-ssgmce-blue"
              >
                <h4 className="font-bold text-lg text-ssgmce-blue mb-2">
                  {office.title}
                </h4>
                <p className="text-sm text-gray-600">{office.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;
