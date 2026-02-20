import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const PDF_URL =
  'https://www.ssgmce.ac.in/uploads/AQAR/Anuual%20Gender_plan.pdf';

const actionItems = [
  {
    title: 'Mentorship for Gender Inclusion',
    desc: 'Implement a mentorship program where faculty mentors guide students on gender inclusivity, ensuring equal opportunities for all genders in academic and extracurricular activities.',
    ownership: 'Mentors / HODs',
    timeFrame: 'Continuous',
  },
  {
    title: 'Anti-Ragging and Grievance Resolution Oversight',
    desc: 'Ensure effective functioning of the Anti-Ragging Committee, Internal Complaints Committee, and other grievance redressal mechanisms for swift resolution of gender-based complaints.',
    ownership: 'Coordinators',
    timeFrame: 'Per semester',
  },
  {
    title: 'Empowering Women Entrepreneurs',
    desc: 'Organize workshops, seminars, and mentorship programs focused on nurturing entrepreneurial skills among women students and faculty.',
    ownership: 'Research Coordinator',
    timeFrame: 'Every year',
  },
  {
    title: 'Gender Equality Training Program',
    desc: 'Conduct regular training sessions for students and staff on gender sensitization, unconscious bias, and creating an inclusive campus environment.',
    ownership: 'Women Development Cell',
    timeFrame: 'Per semester',
  },
  {
    title: "Celebrating Women's Achievements",
    desc: "Organize events on International Women's Day and other occasions to celebrate women's contributions in STEM and other fields.",
    ownership: 'Women Development Cell',
    timeFrame: 'Every year',
  },
  {
    title: 'Promoting Anti-Discrimination Awareness',
    desc: 'Raise awareness about anti-discrimination policies through campaigns, posters, and workshops to create a safe environment for all.',
    ownership: 'NSS',
    timeFrame: 'Every year',
  },
  {
    title: 'Faculty Awareness and Policy Implementation',
    desc: 'Brief all faculty members about gender-related policies, complaint mechanisms, and their role in fostering gender equity at the start of each academic year.',
    ownership: 'Principal',
    timeFrame: 'Beginning of Academic Year',
  },
  {
    title: 'Human Rights and Gender Equality Education',
    desc: 'Integrate human rights and gender equality concepts into co-curricular activities and awareness programs.',
    ownership: 'Women Development Cell',
    timeFrame: 'Every year',
  },
  {
    title: 'Cultural and Sports Inclusion',
    desc: 'Ensure equal participation and representation of all genders in cultural festivals, sports events, and institutional celebrations.',
    ownership: 'Cultural & Sports Coordinator',
    timeFrame: 'Every year',
  },
  {
    title: 'Empowering Through Scholarships',
    desc: 'Facilitate awareness and access to government and institutional scholarships aimed at supporting students from underrepresented genders.',
    ownership: 'Registrar',
    timeFrame: 'Every year',
  },
  {
    title: "Women's Health and Hygiene Promotion",
    desc: 'Organize health camps, hygiene awareness drives, and provide necessary facilities to promote the health and well-being of women on campus.',
    ownership: 'Women Development Cell',
    timeFrame: 'Continuous',
  },
  {
    title: 'Assessing Equity and Inclusion',
    desc: 'Conduct periodic audits and surveys to assess the effectiveness of gender equity initiatives and identify areas for improvement.',
    ownership: 'IQAC',
    timeFrame: 'Continuous',
  },
];

const GenderPlan = () => (
  <GenericPage
    title="Annual Gender Sensitization Action Plan"
    sidebar={<IQACSidebar />}
  >
    {/* ─── Overview ─── */}
    <section className="mb-8">
      <p className="text-sm text-gray-600 leading-relaxed">
        Shri Sant Gajanan Maharaj College of Engineering, Shegaon, is committed
        to fostering an inclusive and equitable campus environment that upholds
        the dignity of all individuals irrespective of gender. The institution
        has constituted a Women Development Cell, Prevention of Sexual
        Harassment Committee, and Anti-Ragging Committee to ensure a safe and
        supportive atmosphere.
      </p>
    </section>

    {/* ─── Action Plan Table ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
        Action Plan
      </h3>

      <div className="space-y-3">
        {actionItems.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-saffron/30 transition-colors"
          >
            {/* number badge */}
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-ssgmce-blue/5 text-ssgmce-blue text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <span className="text-[11px] text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-0.5 rounded font-medium">
                  {item.ownership}
                </span>
                <span className="text-[11px] text-ssgmce-saffron bg-ssgmce-saffron/5 px-2 py-0.5 rounded font-medium">
                  {item.timeFrame}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ─── Download ─── */}
    <section>
      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-ssgmce-blue hover:text-ssgmce-saffron font-medium transition-colors"
      >
        Download Full Action Plan (PDF) ↗
      </a>
    </section>
  </GenericPage>
);

export default GenderPlan;
