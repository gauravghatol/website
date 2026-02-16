import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaFileAlt,
  FaGraduationCap,
  FaFlask,
} from "react-icons/fa";

const PhDAdmissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Ph.D. Admissions | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Ph.D. (Doctor of Philosophy)"
        subtitle="Research & Innovation at the Doctoral Level"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Introduction */}
            <section className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">About Ph.D. Program</h2>
              <p className="leading-relaxed mb-4">
                The Ph.D. (Doctor of Philosophy) program at SSGMCE nurtures
                research scholars to contribute original knowledge to their
                respective fields. The program emphasizes independent research,
                critical thinking, and scholarly excellence. Recognized by Sant
                Gadge Baba Amravati University (SGBAU), our Ph.D. program offers
                state-of-the-art research facilities and guidance from
                experienced faculty members.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    3-6 Years
                  </div>
                  <div className="text-sm opacity-90">
                    Duration (Full-Time & Part-Time)
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    Multiple
                  </div>
                  <div className="text-sm opacity-90">Research Areas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-ssgmce-orange">
                    SGBAU
                  </div>
                  <div className="text-sm opacity-90">Affiliated To</div>
                </div>
              </div>
            </section>

            {/* Research Areas */}
            <section className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-orange">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaFlask className="text-ssgmce-orange" />
                Ph.D. Research Areas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    dept: "Computer Science & Engineering",
                    areas: [
                      "Artificial Intelligence & Machine Learning",
                      "Data Science & Big Data",
                      "Cyber Security",
                      "Cloud Computing",
                      "IoT",
                    ],
                  },
                  {
                    dept: "Mechanical Engineering",
                    areas: [
                      "Thermal Engineering",
                      "Production & Manufacturing",
                      "CAD/CAM",
                      "Renewable Energy",
                      "Robotics",
                    ],
                  },
                  {
                    dept: "Civil Engineering",
                    areas: [
                      "Structural Engineering",
                      "Geotechnical Engineering",
                      "Environmental Engineering",
                      "Transportation",
                      "Water Resources",
                    ],
                  },
                  {
                    dept: "Electrical Engineering",
                    areas: [
                      "Power Systems",
                      "Power Electronics",
                      "Renewable Energy",
                      "Control Systems",
                      "Smart Grids",
                    ],
                  },
                  {
                    dept: "Electronics & Telecommunication",
                    areas: [
                      "VLSI Design",
                      "Signal Processing",
                      "Communication Systems",
                      "Embedded Systems",
                      "IoT",
                    ],
                  },
                  {
                    dept: "Information Technology",
                    areas: [
                      "Web Technologies",
                      "Mobile Computing",
                      "Network Security",
                      "Database Management",
                      "Software Engineering",
                    ],
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-gray-200 rounded-lg p-5 hover:border-ssgmce-orange hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                      {item.dept}
                    </h3>
                    <ul className="space-y-1">
                      {item.areas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-ssgmce-orange mt-1">▸</span>
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section>
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-8 flex items-center gap-3">
                <FaInfoCircle className="text-ssgmce-orange" />
                Eligibility Criteria
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-ssgmce-blue">
                <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                  Ph.D. Admission Requirements
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-ssgmce-orange mb-3">
                      Educational Qualification
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          Master's degree (M.E./M.Tech/M.Sc.) in relevant
                          discipline from a recognized university
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          Minimum 55% marks (50% for reserved categories) in
                          postgraduate degree
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          UGC NET/GATE/SLET qualified candidates preferred
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-ssgmce-blue">
                    <h4 className="font-bold text-ssgmce-blue mb-3">
                      Research Entrance Test (RET)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Candidates without NET/GATE/SLET must qualify the Research
                      Entrance Test (RET) conducted by Sant Gadge Baba Amravati
                      University. The test assesses research aptitude, subject
                      knowledge, and comprehension skills.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-ssgmce-orange mb-3">
                      Additional Requirements
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          Research proposal on the intended area of study
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          Interview with the research committee
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">
                          Approval from proposed research supervisor
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Full-Time vs Part-Time */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Ph.D. Program Types
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Criteria
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Full-Time Ph.D.
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Part-Time Ph.D.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Duration
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Minimum 3 years, Maximum 6 years
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Minimum 4 years, Maximum 6 years
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Eligibility
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Master's degree holders (fresh or working)
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Working professionals with relevant experience
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Course Work
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Mandatory in first semester
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Mandatory in first year
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Fellowship
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Eligible for UGC/CSIR fellowships
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Not eligible for fellowships
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Research Hours
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Full-time commitment required
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Flexible timing with regular meet-ups
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Admission Process */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-ssgmce-orange" />
                Ph.D. Admission Process
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Notification Release",
                    desc: "University releases Ph.D. admission notification with application dates and eligibility criteria",
                  },
                  {
                    step: 2,
                    title: "Online Application",
                    desc: "Apply online on SGBAU university website with all required details and documents",
                  },
                  {
                    step: 3,
                    title: "Research Proposal Submission",
                    desc: "Submit a detailed research proposal (2000-3000 words) in your area of interest",
                  },
                  {
                    step: 4,
                    title: "RET Examination (if required)",
                    desc: "Appear for Research Entrance Test if not exempted through NET/GATE/SLET",
                  },
                  {
                    step: 5,
                    title: "Interview",
                    desc: "Present your research proposal before the research committee and subject experts",
                  },
                  {
                    step: 6,
                    title: "Supervisor Allocation",
                    desc: "Based on interview performance and research area, a supervisor will be assigned",
                  },
                  {
                    step: 7,
                    title: "Registration",
                    desc: "Complete Ph.D. registration formalities at the university and pay registration fees",
                  },
                  {
                    step: 8,
                    title: "Course Work",
                    desc: "Complete mandatory course work (research methodology, subject-specific courses)",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 border-l-4 border-ssgmce-orange bg-gray-50 rounded-r-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ssgmce-blue to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-ssgmce-blue mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents Required */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 flex items-center gap-3">
                <FaFileAlt className="text-ssgmce-orange" />
                Documents Required for Ph.D. Admission
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Post-Graduate Degree Certificate",
                  "All Semester Marksheets (PG & UG)",
                  "Migration Certificate (if from another university)",
                  "NET/GATE/SLET Certificate (if applicable)",
                  "Research Proposal (typed, signed)",
                  "No Objection Certificate (for working professionals)",
                  "Experience Certificate (if applicable)",
                  "Caste Certificate (for reserved category)",
                  "Income Certificate (if applicable)",
                  "Passport Size Photographs (10 copies)",
                  "Aadhar Card",
                  "PAN Card",
                  "Nationality Certificate",
                  "Domicile Certificate",
                  "Gap Affidavit (if gap in education)",
                  "Anti-Ragging Undertaking",
                ].map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <FaCheckCircle className="text-ssgmce-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Fellowship & Financial Support */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-ssgmce-blue">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Fellowship & Financial Support
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-ssgmce-orange mb-2">
                    UGC/CSIR Fellowships
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Full-time Ph.D. scholars with NET/GATE qualifications are
                    eligible for UGC/CSIR fellowships (₹31,000/month +
                    ₹35,000/month after upgrade)
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-ssgmce-orange mb-2">
                    Institutional Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Access to research labs, library resources, conference
                    funding, and publication support
                  </p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-ssgmce-orange mb-2">
                    Research Grants
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Scholars can apply for external research grants from DST,
                    DRDO, AICTE, and other funding agencies
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg">
              <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                Ph.D. Coordinator
              </h3>
              <p className="text-gray-700 mb-3">
                For Ph.D. related queries, contact:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Email:</strong> phd@ssgmce.ac.in
                </p>
                <p>
                  <strong>Phone:</strong> +91-7265-252274
                </p>
                <p>
                  <strong>For University Queries:</strong> Visit SGBAU Research
                  Section website
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhDAdmissions;
