import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const topDocuments = [
  { label: 'Self-Study Report (SSR)', url: 'uploads/NAAC/SSR_after_DVV_final.pdf' },
  { label: 'Extended Profile', url: 'uploads/NAAC/extended%20profile.pdf' },
  { label: 'IIQA Report', url: 'uploads/NAAC/SSGMCE_IIQA_final.pdf' },
  { label: 'RTI', url: 'uploads/NAAC/RTI.pdf' },
  { label: 'Declaration of Compliance', url: 'uploads/NAAC/Statement%20compliance-Principal---final-doc.pdf' },
  { label: 'DVV Details', url: 'NAAC_DVV.php' },
];

const criteria = [
  {
    num: 1,
    title: 'Curricular Aspects',
    indicators: [
      { id: '1.1.1', type: 'QlM', desc: 'Effective curriculum planning, delivery and continuous internal assessment.' },
      { id: '1.2.1', type: 'QnM', desc: 'Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc.' },
      { id: '1.2.2', type: 'QnM', desc: 'Percentage of students enrolled in Certificate/Value added courses.' },
      { id: '1.3.1', type: 'QlM', desc: 'Integration of cross-cutting issues — Professional Ethics, Gender, Human Values, Environment and Sustainability.' },
      { id: '1.3.2', type: 'QnM', desc: 'Percentage of students undertaking project work/field work/internships.' },
      { id: '1.4.1', type: 'QnM', desc: 'Feedback on academic performance from various stakeholders with action taken report.' },
    ],
  },
  {
    num: 2,
    title: 'Teaching-Learning and Evaluation',
    indicators: [
      { id: '2.1.1', type: 'QnM', desc: 'Enrolment percentage.' },
      { id: '2.1.2', type: 'QnM', desc: 'Percentage of seats filled against reserved categories (SC, ST, OBC, Divyangjan).' },
      { id: '2.2.1', type: 'QnM', desc: 'Student – Full time Teacher Ratio.' },
      { id: '2.3.1', type: 'QlM', desc: 'Student-centric methods — experiential, participative learning and problem solving using ICT.' },
      { id: '2.4.1', type: 'QnM', desc: 'Percentage of full-time teachers against sanctioned posts.' },
      { id: '2.4.2', type: 'QnM', desc: 'Percentage of full-time teachers with NET/SET/Ph.D./D.M./M.Ch. etc.' },
      { id: '2.5.1', type: 'QlM', desc: 'Transparent internal/external assessment and grievance redressal system.' },
      { id: '2.6.1', type: 'QlM', desc: 'Programme Outcomes (POs) and Course Outcomes (COs) stated and displayed.' },
      { id: '2.6.2', type: 'QlM', desc: 'Attainment of POs and COs evaluated.' },
      { id: '2.6.3', type: 'QnM', desc: 'Pass percentage of students during last five years.' },
      { id: '2.7.1', type: 'QnM', desc: 'Online student satisfaction survey regarding teaching-learning process.' },
    ],
  },
  {
    num: 3,
    title: 'Research, Innovations and Extension',
    indicators: [
      { id: '3.1.1', type: 'QnM', desc: 'Grants received from Government and non-governmental agencies for research.' },
      { id: '3.2.1', type: 'QlM', desc: 'Ecosystem for innovations, IKS, IPR awareness, Incubation centre.' },
      { id: '3.2.2', type: 'QnM', desc: 'Number of workshops/seminars on Research Methodology, IPR and entrepreneurship.' },
      { id: '3.3.1', type: 'QnM', desc: 'Research papers published per teacher in UGC CARE list journals.' },
      { id: '3.3.2', type: 'QnM', desc: 'Books, chapters in edited volumes and conference proceedings per teacher.' },
      { id: '3.4.1', type: 'QlM', desc: 'Extension activities outcomes — community impact and student sensitization.' },
      { id: '3.4.2', type: 'QlM', desc: 'Awards and recognitions for extension activities.' },
      { id: '3.4.3', type: 'QnM', desc: 'Extension and outreach programs through NSS/NCC with community involvement.' },
      { id: '3.5.1', type: 'QnM', desc: 'MoUs, collaborations for Faculty/Student exchange, Internship, Research etc.' },
    ],
  },
  {
    num: 4,
    title: 'Infrastructure and Learning Resources',
    indicators: [
      { id: '4.1.1', type: 'QlM', desc: 'Adequate infrastructure — classrooms, labs, ICT, smart class, sports, auditorium.' },
      { id: '4.1.2', type: 'QnM', desc: 'Percentage of expenditure for infrastructure development (excl. salary).' },
      { id: '4.2.1', type: 'QlM', desc: 'Library automated using ILMS, e-resources subscription, book purchases.' },
      { id: '4.3.1', type: 'QlM', desc: 'IT facilities updated frequently with sufficient internet bandwidth.' },
      { id: '4.3.2', type: 'QnM', desc: 'Student – Computer ratio.' },
      { id: '4.4.1', type: 'QnM', desc: 'Percentage of expenditure on maintenance of infrastructure (excl. salary).' },
    ],
  },
  {
    num: 5,
    title: 'Student Support and Progression',
    indicators: [
      { id: '5.1.1', type: 'QnM', desc: 'Percentage of students benefited by scholarships and freeships.' },
      { id: '5.1.2', type: 'QnM', desc: 'Soft skills, communication, life skills, ICT/computing skills enhancement activities.' },
      { id: '5.1.3', type: 'QnM', desc: 'Guidance for competitive examinations and career counseling.' },
      { id: '5.1.4', type: 'QnM', desc: 'Redressal of student grievances including sexual harassment and ragging.' },
      { id: '5.2.1', type: 'QnM', desc: 'Placement of outgoing students and progression to higher education.' },
      { id: '5.2.2', type: 'QnM', desc: 'Students qualifying in state/national/international level examinations.' },
      { id: '5.3.1', type: 'QnM', desc: 'Awards/medals for outstanding performance in sports/cultural activities.' },
      { id: '5.3.2', type: 'QnM', desc: 'Sports and cultural programs with student participation.' },
      { id: '5.4.1', type: 'QlM', desc: 'Registered Alumni Association contributing to institutional development.' },
    ],
  },
  {
    num: 6,
    title: 'Governance, Leadership and Management',
    indicators: [
      { id: '6.1.1', type: 'QlM', desc: 'Governance aligned with vision and mission — NEP implementation, decentralization.' },
      { id: '6.2.1', type: 'QlM', desc: 'Institutional perspective plan deployment and effective functioning.' },
      { id: '6.2.2', type: 'QnM', desc: 'e-Governance in Administration, Finance, Student Admission, Examination.' },
      { id: '6.3.1', type: 'QlM', desc: 'Performance appraisal, welfare measures, career development for staff.' },
      { id: '6.3.2', type: 'QnM', desc: 'Teachers provided financial support for conferences/workshops/professional bodies.' },
      { id: '6.3.3', type: 'QnM', desc: 'Staff participating in FDP, professional development and admin training.' },
      { id: '6.4.1', type: 'QlM', desc: 'Resource mobilization, optimal utilization and regular financial audits.' },
      { id: '6.5.1', type: 'QlM', desc: 'IQAC contribution to institutionalizing quality assurance strategies.' },
      { id: '6.5.2', type: 'QnM', desc: 'Quality initiatives — IQAC meetings, NIRF participation, NBA/NAAC/ISO audits.' },
    ],
  },
  {
    num: 7,
    title: 'Institutional Values and Best Practices',
    indicators: [
      { id: '7.1.1', type: 'QlM', desc: 'Gender Audit and measures for promotion of gender equity.' },
      { id: '7.1.2', type: 'QnM', desc: 'Alternate energy, waste management, water conservation, green campus, barrier-free.' },
      { id: '7.1.3', type: 'QnM', desc: 'Quality audits on environment and energy — Green, Energy and Clean campus.' },
      { id: '7.1.4', type: 'QlM', desc: 'Inclusive environment — tolerance, harmony, constitutional values.' },
      { id: '7.2.1', type: 'QlM', desc: 'Two best practices as per NAAC format.' },
      { id: '7.3.1', type: 'QlM', desc: 'Institutional distinctiveness — priority and thrust area.' },
    ],
  },
];

const NAACSSR = () => {
  const [expandedCriterion, setExpandedCriterion] = useState(1);

  const totalIndicators = criteria.reduce((sum, c) => sum + c.indicators.length, 0);

  return (
    <GenericPage title="NAAC-SSR 3rd Cycle" sidebar={<IQACSidebar />}>

      {/* ─── Summary Stats ─── */}
      <div className="flex items-center gap-6 mb-8">
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-blue">7</span>
          <span className="text-xs text-gray-400">Criteria</span>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-saffron">{totalIndicators}</span>
          <span className="text-xs text-gray-400">Key Indicators</span>
        </div>
      </div>

      {/* ─── Top Documents ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Core Documents
        </h3>
        <div className="grid sm:grid-cols-3 gap-2">
          {topDocuments.map((doc) => (
            <a
              key={doc.label}
              href={`${BASE}${doc.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors group text-sm"
            >
              <span className="text-gray-600 group-hover:text-ssgmce-blue transition-colors">{doc.label}</span>
              <span className="ml-auto text-xs text-gray-400 group-hover:text-ssgmce-blue">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* ─── Criterion-wise Accordion ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Criterion-wise Details
        </h3>

        <div className="space-y-2">
          {criteria.map((c) => {
            const isOpen = expandedCriterion === c.num;
            return (
              <div key={c.num} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedCriterion(isOpen ? null : c.num)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    isOpen ? 'bg-ssgmce-blue/5' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-white bg-ssgmce-blue w-6 h-6 rounded flex items-center justify-center flex-shrink-0">
                      {c.num}
                    </span>
                    <span className={`text-sm font-semibold ${isOpen ? 'text-ssgmce-blue' : 'text-gray-700'}`}>
                      {c.title}
                    </span>
                    <span className="text-xs text-gray-400">{c.indicators.length} indicators</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1">
                    <div className="space-y-1.5">
                      {c.indicators.map((ind) => (
                        <div
                          key={ind.id}
                          className="flex items-start gap-3 p-2.5 rounded border border-gray-50 text-xs"
                        >
                          <span className="font-mono font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-1.5 py-0.5 rounded whitespace-nowrap">
                            {ind.id}
                          </span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${
                            ind.type === 'QlM'
                              ? 'bg-ssgmce-saffron/10 text-ssgmce-saffron'
                              : 'bg-ssgmce-blue/10 text-ssgmce-blue'
                          }`}>
                            {ind.type}
                          </span>
                          <span className="text-gray-600 leading-relaxed">{ind.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </GenericPage>
  );
};

export default NAACSSR;
