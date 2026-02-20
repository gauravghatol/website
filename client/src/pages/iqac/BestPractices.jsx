import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

/* ─── Scholarship Data ─── */
const scholarshipData = [
  { year: '2016-17', beneficiaries: 391, amount: '12,25,970' },
  { year: '2017-18', beneficiaries: 387, amount: '13,20,404' },
  { year: '2018-19', beneficiaries: 372, amount: '14,85,350' },
  { year: '2019-20', beneficiaries: 319, amount: '12,49,331' },
  { year: '2020-21', beneficiaries: 266, amount: '5,81,573' },
  { year: '2021-22', beneficiaries: 367, amount: '17,29,214' },
  { year: '2022-23', beneficiaries: 361, amount: '14,69,737' },
];

/* ─── Practice I Data ─── */
const practice1 = {
  title: 'Financial Support to Students',
  objectives: [
    'Promoting Access to Education — offering financial aid to students facing economic hardships.',
    'Promoting Academic Excellence & Personal Growth — cultivating a culture of achievement and healthy competition.',
    'Recognizing Academic & Extracurricular Excellence — acknowledging students with remarkable accomplishments.',
    'Fostering Social Responsibility & Civic Engagement — nurturing a sense of contributing positively to society.',
  ],
  context:
    'Our institution is committed to creating an inclusive environment where every student can pursue their educational aspirations. Aligned with the motto "Sarve Bhavantu Sukhinah" (Let all be happy), the institute implements proactive measures through a dedicated financial aid committee with grants and need-based aid fueled by generous community contributions.',
  practice:
    'During the induction program students are briefed on the financial support team and its transparent procedures. Applications undergo thorough review with stringent verification of financial circumstances. Merit-based scholarships are available for students achieving over 65 % in university exams, funded by contributions from donors. GATE valid scores are rewarded, and industry-driven projects receive prizes. Hostel, mess, and canteen facilities are offered at highly affordable rates, with waivers granted on verification.',
  evidence: [
    'Enhanced Retention — higher student retention rates by alleviating financial constraints.',
    'Improved Competitiveness — empowered students to compete in technical and professional competitions.',
    'Increased Participation in Technical Competitions — greater exposure and growth in respective fields.',
    'Enhanced Performance in Cultural Contests — holistic development beyond academics.',
    'Enhanced Sports Performance — positive impact on overall well-being.',
  ],
  challenges: [
    'Financial Need Verification — ensuring thorough and equitable assessment of applicants.',
    'Continued Institutional Scholarship Support — sustaining effectiveness and continuity.',
    'Motivation of Financially Challenged Students — inspiring persistence in education.',
  ],
};

/* ─── Practice II Data ─── */
const practice2 = {
  title: 'Industry-Academia Synergy',
  objectives: [
    'Establishing State-of-the-Art Labs in collaboration with industry partners.',
    'Tailoring Curriculum to Industry Standards — integrating employable skills.',
    'Cultivating Entrepreneurial Spirit through mentorship and resources.',
    'Hosting Industry-Centric Events — seminars, workshops, and conferences.',
    'Boosting Employability through Hands-On Learning with cutting-edge equipment.',
    'Facilitating Collaborative Research — joint projects addressing societal needs.',
    'Promoting Specialized Skill Development for specific industry requirements.',
  ],
  context:
    'The initiative of Industry-Academia Connect plays a pivotal role in fostering robust connections between academic institutions and industries, bridging the gap between theoretical knowledge and practical application. Internships serve as a crucial avenue for students to gain vital skills and innovative problem-solving perspectives, often leading to subsequent employment.',
  practice:
    'The IQAC cell, comprising seasoned industry experts, guides curriculum development and emerging skill requirements. Industry stalwarts deliver guest lectures, conduct workshops, and participate in panel discussions. Structured internship programs offer firsthand professional experience. Alumni networks facilitate placements, mentorship, and industry connections. Faculty sabbatical training within industries keeps them abreast of evolving trends. Industry-Institute meets facilitate knowledge exchange and joint ventures.',
  evidence: [
    'Active Student Engagement — immersion in industry projects, hackathons, and competitions.',
    'Experiential Learning Benefits — enhanced teamwork, critical thinking, and problem-solving skills.',
    'Tangible Outcomes — publications in prestigious journals, placements in leading companies, and entrepreneurial ventures.',
    'Learner-Centric Approach — empowered students taking ownership of their educational journey.',
    'Overall Impact — well-rounded professionals equipped with technical acumen and adaptability.',
  ],
  challenges: [
    'Ensuring active industry engagement despite perceived risks or competing priorities.',
    'Student awareness and motivation regarding industry opportunities.',
    'Curriculum alignment — maintaining updated content with regular reviews.',
    'Limited funding for internships, research, or skill development.',
    'Maintaining long-term partnerships with sustained commitment and communication.',
  ],
};

/* ─── Section Component ─── */
const Section = ({ label, children }) => (
  <div className="mb-5">
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{label}</p>
    {children}
  </div>
);

/* ─── Component ─── */
const BestPractices = () => {
  const [active, setActive] = useState(0);
  const practices = [practice1, practice2];
  const p = practices[active];

  return (
    <GenericPage title="Best Practices" sidebar={<IQACSidebar />}>

      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        The Institute has a good number of unique and constructive practices including Institutional Scholarship Provision, Industry-Academia Connect, Solar Unit, Cleanliness &amp; Hygiene, Spiritual Touch, Incubation Centre, Electric Vehicles Unit, and Entrepreneurship Development Cell. The two best practices are highlighted below.
      </p>

      {/* ─── Tabs ─── */}
      <div className="flex gap-2 mb-6">
        {practices.map((pr, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              active === i
                ? 'bg-ssgmce-blue text-white shadow-sm'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {pr.title}
          </button>
        ))}
      </div>

      {/* ─── Active Practice ─── */}
      <div className="space-y-0">

        {/* Objectives */}
        <Section label="Objectives">
          <ul className="space-y-1.5 pl-3">
            {p.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-ssgmce-saffron mt-2 flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </Section>

        {/* Context */}
        <Section label="Context">
          <p className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-gray-100">{p.context}</p>
        </Section>

        {/* The Practice */}
        <Section label="The Practice">
          <p className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-gray-100">{p.practice}</p>
        </Section>

        {/* Evidence of Success */}
        <Section label="Evidence of Success">
          <ul className="space-y-1.5 pl-3">
            {p.evidence.map((e, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-ssgmce-blue mt-2 flex-shrink-0" />
                {e}
              </li>
            ))}
          </ul>
        </Section>

        {/* Challenges */}
        <Section label="Challenges">
          <ul className="space-y-1.5 pl-3">
            {p.challenges.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </Section>

        {/* Scholarship Table — only for Practice I */}
        {active === 0 && (
          <Section label="Scholarship Data (Last 7 Years)">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-400 uppercase">Year</th>
                    <th className="text-right py-2 px-3 text-xs font-semibold text-gray-400 uppercase">Beneficiaries</th>
                    <th className="text-right py-2 px-3 text-xs font-semibold text-gray-400 uppercase">Amount (Rs.)</th>
                  </tr>
                </thead>
                <tbody>
                  {scholarshipData.map((r, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="py-2 px-3 text-gray-700 font-medium">{r.year}</td>
                      <td className="py-2 px-3 text-right text-gray-600">{r.beneficiaries}</td>
                      <td className="py-2 px-3 text-right text-gray-600">{r.amount}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-200">
                    <td className="py-2 px-3 font-semibold text-ssgmce-blue">Total</td>
                    <td className="py-2 px-3 text-right font-semibold text-ssgmce-blue">
                      {scholarshipData.reduce((s, r) => s + r.beneficiaries, 0).toLocaleString()}
                    </td>
                    <td className="py-2 px-3 text-right font-semibold text-ssgmce-blue">90,61,579</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>
        )}
      </div>

      {/* ─── PDF Link ─── */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a
          href="https://www.ssgmce.ac.in/uploads/IQAC_BestPractices.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ssgmce-saffron hover:text-ssgmce-blue transition-colors font-medium"
        >
          View Full Document (PDF) &rarr;
        </a>
      </div>

    </GenericPage>
  );
};

export default BestPractices;
