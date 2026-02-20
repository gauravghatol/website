import React from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaFilePdf, FaLightbulb, FaRocket, FaUsers, FaClipboardList, FaBullseye, FaChevronRight } from 'react-icons/fa';

const policyDocs = [
  {
    title: 'NISP Policy and Procedures',
    subtitle: 'SGIARC-TBI — Institute-level innovation & startup policy framework',
    url: 'https://www.ssgmce.ac.in/uploads/pdf/SGIARC-TBI-NISP.pdf',
    icon: FaClipboardList,
    accent: 'blue',
  },
  {
    title: 'MHRD NISP Policy',
    subtitle: 'Ministry of Education — National Innovation and Startup Policy document',
    url: 'https://www.ssgmce.ac.in/uploads/pdf/MHRD_NISP_policy.pdf',
    icon: FaBullseye,
    accent: 'indigo',
  },
  {
    title: 'NISP Expert Committee',
    subtitle: 'Composition and details of the NISP Expert Committee',
    url: 'https://www.ssgmce.ac.in/uploads/pdf/NISP%20_Expert%20Committee.pdf',
    icon: FaUsers,
    accent: 'teal',
  },
];

const meetings = [
  {
    title: '1st NISP Meeting',
    url: 'https://www.ssgmce.ac.in/uploads/pdf/NISP%201st%20meeting%20Policy.pdf',
  },
  {
    title: '2nd NISP Meeting',
    url: 'https://www.ssgmce.ac.in/uploads/pdf/NISP%202nd%20meeting%20policy.pdf',
  },
];

const accentMap = {
  blue: { light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', icon: 'text-blue-500' },
  indigo: { light: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', icon: 'text-indigo-500' },
  teal: { light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', icon: 'text-teal-500' },
};

const objectives = [
  { icon: FaLightbulb, text: 'Foster a culture of innovation and entrepreneurship among students and faculty' },
  { icon: FaRocket, text: 'Facilitate startups through incubation, mentorship, and funding support' },
  { icon: FaUsers, text: 'Build an ecosystem connecting academia, industry, and government' },
  { icon: FaBullseye, text: 'Align institutional practices with the National Innovation and Startup Policy of MHRD' },
];

const NISP = () => {
  return (
    <GenericPage title="National Innovation and Startup Policy (NISP)" sidebar={<ResearchSidebar />}>
      {/* Intro */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        In alignment with the Ministry of Education's National Innovation and Startup Policy, SSGMCE has established
        a comprehensive framework to nurture creativity, innovation, and entrepreneurship. The policy is implemented
        through <span className="font-medium text-gray-700">SGIARC-TBI</span> (Technology Business Incubator) to
        support student and faculty-led startups and research ventures.
      </p>

      {/* Objectives */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-ssgmce-blue mb-4">Key Objectives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3.5">
              <obj.icon className="text-ssgmce-blue mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700 leading-snug">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Documents */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-ssgmce-blue mb-4">Policy Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {policyDocs.map((doc, i) => {
            const c = accentMap[doc.accent];
            return (
              <a
                key={i}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block bg-white border border-gray-200 rounded-xl p-4 hover:${c.border} transition`}
              >
                <div className={`w-9 h-9 rounded-lg ${c.light} ${c.border} border flex items-center justify-center mb-3`}>
                  <doc.icon className={`text-sm ${c.icon}`} />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1 group-hover:text-ssgmce-saffron transition">{doc.title}</h3>
                <p className="text-xs text-gray-500 leading-snug mb-3">{doc.subtitle}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-medium ${c.text}`}>
                  <FaFilePdf /> View PDF <FaChevronRight className="text-[10px]" />
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Meeting Minutes */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-ssgmce-blue mb-4">NISP Meeting Minutes</h2>
        <div className="flex flex-wrap gap-3">
          {meetings.map((m, i) => (
            <a
              key={i}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700"
            >
              <FaFilePdf className="text-red-400" />
              {m.title}
              <FaChevronRight className="text-xs text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </GenericPage>
  );
};

export default NISP;
