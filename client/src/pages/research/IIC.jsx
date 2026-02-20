import React, { useState } from 'react';
import { FaEye, FaBullseye, FaRocket, FaUsers, FaIndustry, FaProjectDiagram, FaBuilding, FaEnvelope, FaPhone, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';

const tabs = ["About IIC", "IIC Team", "IIC Activities", "Contact Us"];

const iicTeam = [
  { srNo: 1, name: "Dr. A. S. Manekar", type: "Teaching", role: "President" },
  { srNo: 2, name: "Prof. P. G. Angaitkar", type: "Teaching", role: "Convener" },
  { srNo: 3, name: "Prof. A. B. Solanke", type: "Teaching", role: "Internship Activity Coordinator" },
  { srNo: 4, name: "Dr. P. M. Kuchar", type: "Teaching", role: "Startup Coordinator" },
  { srNo: 5, name: "Prof. D. L. Bhombe", type: "Teaching", role: "ARIIA Coordinator" },
  { srNo: 6, name: "Dr. S. S. Jadhao", type: "Teaching", role: "NIRF Coordinator" },
  { srNo: 7, name: "Dr. S. B. Patil", type: "Teaching", role: "IPR Activity Coordinator" },
  { srNo: 8, name: "Prof. N. B. Borkar", type: "Teaching", role: "Innovation Activity Coordinator / YUKTI Coordinator" },
  { srNo: 9, name: "Prof. S. V. Bhagat", type: "Teaching", role: "Social Media" },
  { srNo: 10, name: "Dr. R. M. Kharate", type: "Teaching", role: "Member" },
  { srNo: 11, name: "Dr. R. A. Zamre", type: "Teaching", role: "NISP Coordinator" },
  { srNo: 12, name: "Dr. V. K. Thute", type: "Teaching", role: "Member" },
  { srNo: 13, name: "Prof. P. P. Bute", type: "Teaching", role: "Member" },
  { srNo: 14, name: "Prof. R. S. Kankale", type: "Teaching", role: "Member" },
  { srNo: 15, name: "Prof. V. K. Bhangdiya", type: "Teaching", role: "Member" },
  { srNo: 16, name: "Prof. W. Z. Suliya", type: "Teaching", role: "Member" },
];

const iicActivities = [
  { srNo: 1, year: "2025-26", url: "https://www.ssgmce.ac.in/uploads/pdf/IIC_Activities_Report_2025-26.pdf" },
  { srNo: 2, year: "2024-25", url: "https://www.ssgmce.ac.in/uploads/pdf/IIC_Activities_Report_2024-25.pdf" },
  { srNo: 3, year: "2023-24", url: "https://www.ssgmce.ac.in/uploads/pdf/IIC_Activities_Report_2023-24.pdf" },
  { srNo: 4, year: "2022-23", url: "https://www.ssgmce.ac.in/uploads/pdf/IIC_Activities_Report_2022-23.pdf" },
];

const contactDetails = [
  { name: "Dr. S. B. Somani", role: "Principal, SSGMCE, Shegaon", email: "principal@ssgmce.ac.in", phone: "8669638081 / 8669638082" },
  { name: "Dr. A. S. Manekar", role: "President, IIC, SSGMCE, Shegaon", email: "asmanekar@ssgmce.ac.in", phone: "9028288008" },
  { name: "Mr. P. G. Angaitkar", role: "Convenor, IIC, SSGMCE, Shegaon", email: "pgangaitkar@ssgmce.ac.in", phone: "9766881088" },
];

const howIICWorks = [
  {
    icon: FaIndustry,
    title: "Industry Collaboration",
    points: [
      "Involve industry experts, professionals, and leaders as mentors, advisors, or members of the IIC's governing board.",
      "Establish partnerships with local businesses and corporations to provide real-world insights and industry-specific guidance.",
      "Organize regular industry interaction sessions, workshops, and networking events to bridge the gap between academia and industry.",
    ],
  },
  {
    icon: FaProjectDiagram,
    title: "Interdisciplinary Collaboration",
    points: [
      "Encourage participation from various academic departments and units within the institute.",
      "Collaboration between students and faculty from different fields.",
      "Create interdisciplinary project teams that tackle complex challenges from multiple angles.",
    ],
  },
  {
    icon: FaBuilding,
    title: "Departments and Units",
    points: [
      "Collaborate closely with individual departments and units within the institute to identify and support innovative projects and research.",
      "Provide a platform for departments to showcase their cutting-edge work and connect with potential partners or investors.",
      "Establish clear communication channels to ensure that the IIC's resources and opportunities are accessible to all departments and units.",
    ],
  },
];

const AboutTab = () => (
  <div className="space-y-6">
    {/* About */}
    <div>
      <h3 className="text-xl font-semibold text-ssgmce-blue mb-3">About IIC</h3>
      <p className="text-gray-700 leading-relaxed">
        Ministry of Education, Govt. of India has established an 'Innovation Cell' with the purpose of systematically fostering the culture of Innovation in all Higher Education Institutions (HEIs) across the country. MIC will focus on creating a complete ecosystem which will foster a culture of Innovation across all educational institutions, from ideas generation to pre-incubation, incubation and graduating from the incubator as a successful start-up. MIC will also work on designing a ranking system to identify institutions at the forefront of innovation.
      </p>
      <p className="text-gray-700 leading-relaxed mt-3">
        Ministry of Education has established 'MoE's Innovation Cell' with the mandate to work closely with our Higher Education Institutions (HEIs) to encourage the creative energy of our student population to work on new ideas and innovation and promote them to create start-ups and entrepreneurial ventures.
      </p>
    </div>

    {/* Vision & Mission */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 border-l-4 border-ssgmce-blue p-5 rounded-r-lg">
        <div className="flex items-center gap-2 mb-2">
          <FaEye className="text-ssgmce-blue" />
          <h4 className="font-semibold text-ssgmce-blue">Vision</h4>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          To provide the needs of students as well as faculty entrepreneurs with innovative ideas of social relevance, thereby disseminating culture of entrepreneurship in college which will boost our education system as well as growing the national economic and social development.
        </p>
      </div>
      <div className="bg-orange-50 border-l-4 border-ssgmce-saffron p-5 rounded-r-lg">
        <div className="flex items-center gap-2 mb-2">
          <FaRocket className="text-ssgmce-saffron" />
          <h4 className="font-semibold text-ssgmce-saffron">Mission</h4>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">
          To build up a system with required infrastructure that can enable students and faculty to innovate as well as prototype their ideas with industrial standards with support from Government, Industry as well as reputed academic institutions around the world and help them to realize their potentials.
        </p>
      </div>
    </div>

    {/* Objectives */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <FaBullseye className="text-ssgmce-blue" />
        <h4 className="text-lg font-semibold text-ssgmce-blue">Objectives</h4>
      </div>
      <ul className="space-y-2 text-gray-700 text-sm">
        {[
          "Students/Faculty associated with IICs will have exclusive opportunity to participate in various Innovation related initiatives and competitions organized from institute level to international level.",
          "Win exciting prizes/certifications every year.",
          "Meet/interact with renowned Business Leaders and top-notch academicians.",
          "Mentoring by industry professionals.",
          "Visit new places and experience new cultures.",
        ].map((obj, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-ssgmce-saffron font-bold mt-0.5">•</span>
            <span>{obj}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* How IIC Works */}
    <div>
      <h4 className="text-lg font-semibold text-ssgmce-blue mb-4">How IIC Works in SSGMCE</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {howIICWorks.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="text-ssgmce-blue text-lg" />
                <h5 className="font-semibold text-ssgmce-blue text-sm">{item.title}</h5>
              </div>
              <ul className="space-y-2">
                {item.points.map((pt, i) => (
                  <li key={i} className="text-xs text-gray-600 leading-relaxed flex items-start gap-1.5">
                    <span className="text-ssgmce-saffron font-bold mt-0.5">›</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const TeamTab = () => (
  <div>
    <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">IIC Team</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-ssgmce-blue text-white">
            <th className="border border-gray-300 px-4 py-3 text-left w-16">S.No.</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Name of Member</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Member Type</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Key Role / Position</th>
          </tr>
        </thead>
        <tbody>
          {iicTeam.map((member, idx) => (
            <tr key={member.srNo} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 px-4 py-3 text-center font-medium">{member.srNo}</td>
              <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
              <td className="border border-gray-300 px-4 py-3">{member.type}</td>
              <td className="border border-gray-300 px-4 py-3">
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                  member.role === "President" ? "bg-blue-100 text-blue-800" :
                  member.role === "Convener" ? "bg-green-100 text-green-800" :
                  member.role === "Member" ? "bg-gray-100 text-gray-700" :
                  "bg-orange-100 text-orange-800"
                }`}>
                  {member.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ActivitiesTab = () => (
  <div>
    <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">IIC Activities</h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm max-w-lg">
        <thead>
          <tr className="bg-ssgmce-blue text-white">
            <th className="border border-gray-300 px-4 py-3 text-left w-16">S.No.</th>
            <th className="border border-gray-300 px-4 py-3 text-left">Academic Year</th>
            <th className="border border-gray-300 px-4 py-3 text-center">Activities Report</th>
          </tr>
        </thead>
        <tbody>
          {iicActivities.map((activity, idx) => (
            <tr key={activity.srNo} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 px-4 py-3 text-center font-medium">{activity.srNo}</td>
              <td className="border border-gray-300 px-4 py-3 font-medium">{activity.year}</td>
              <td className="border border-gray-300 px-4 py-3 text-center">
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ssgmce-saffron hover:text-ssgmce-blue font-medium transition-colors"
                >
                  <FaFilePdf />
                  View
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ContactTab = () => (
  <div>
    <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">Contact Us</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {contactDetails.map((contact, idx) => (
        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-ssgmce-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
              {contact.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div>
              <h4 className="font-semibold text-ssgmce-blue">{contact.name}</h4>
              <p className="text-xs text-gray-500">{contact.role}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-ssgmce-saffron transition-colors">
              <FaEnvelope className="text-ssgmce-saffron text-xs" />
              {contact.email}
            </a>
            <div className="flex items-center gap-2 text-gray-600">
              <FaPhone className="text-ssgmce-blue text-xs" />
              {contact.phone}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const tabComponents = [AboutTab, TeamTab, ActivitiesTab, ContactTab];

const IIC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveComponent = tabComponents[activeTab];

  return (
    <GenericPage title="Institution's Innovation Council (IIC)" sidebar={<ResearchSidebar />}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === idx
                ? "border-ssgmce-saffron text-ssgmce-blue"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <ActiveComponent />
    </GenericPage>
  );
};

export default IIC;
