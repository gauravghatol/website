import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const actionReports = [
  { year: '2023-24', url: 'uploads/NAAC/1.4.1_3_23_24_website_signed.pdf' },
  { year: '2022-23', url: 'uploads/NAAC/1.4.1_3_22_23_website_signed.pdf' },
  { year: '2021-22', url: 'uploads/NAAC/1.4.1_3_21_22_website_signed.pdf' },
  { year: '2020-21', url: 'uploads/NAAC/1.4.1_3_20_21_website_signed.pdf' },
  { year: '2019-20', url: 'uploads/NAAC/1.4.1_3_19_20_website_signed.pdf' },
  { year: '2018-19', url: 'uploads/NAAC/1.4.1_3_18_19_website_signed.pdf' },
];

const stakeholders = [
  { label: 'Students', desc: 'Feedback on curriculum, teaching quality, and campus facilities' },
  { label: 'Parents', desc: 'Inputs on academic progress, safety, and institutional support' },
  { label: 'Employers', desc: 'Industry perspective on graduate readiness and skill alignment' },
  { label: 'Alumni', desc: 'Insights on career relevance and institutional improvements' },
  { label: 'Faculty', desc: 'Feedback on academic resources, infrastructure, and policies' },
];

const processSteps = [
  'Design and distribute structured feedback forms to all stakeholder groups.',
  'Collect responses through online and offline channels at defined intervals.',
  'Compile and categorize feedback data for quantitative and qualitative analysis.',
  'Identify key themes, strengths, and areas requiring improvement.',
  'Present findings to IQAC, department heads, and institutional leadership.',
  'Formulate action plans addressing identified gaps and suggestions.',
  'Implement approved actions across relevant departments and units.',
  'Monitor progress and document outcomes of corrective measures.',
  'Publish consolidated Feedback Analysis & Action Taken Reports.',
];

const FeedbackAnalysis = () => (
  <GenericPage
    title="Stakeholders Feedback Analysis & Action Taken Report"
    sidebar={<IQACSidebar />}
  >
    {/* ─── Overview ─── */}
    <section className="mb-8">
      <p className="text-sm text-gray-600 leading-relaxed">
        SSGMCE follows a systematic mechanism for collecting, analysing, and
        acting upon feedback from all stakeholders as mandated by NAAC Criterion
        1.4.1. The institution gathers structured feedback on curriculum design,
        teaching–learning processes, infrastructure, and overall institutional
        functioning, and translates insights into concrete action plans.
      </p>
    </section>

    {/* ─── Action Taken Reports ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
        Action Taken Reports
      </h3>
      <div className="grid sm:grid-cols-3 gap-3">
        {actionReports.map((r) => (
          <a
            key={r.year}
            href={`${BASE}${r.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors group"
          >
            <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-1 rounded">
              {r.year}
            </span>
            <span className="text-sm text-gray-600 group-hover:text-ssgmce-blue transition-colors">
              View PDF ↗
            </span>
          </a>
        ))}
      </div>
    </section>

    {/* ─── Stakeholder Categories ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
        Stakeholder Categories
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {stakeholders.map((s) => (
          <div
            key={s.label}
            className="p-3 rounded-lg border border-gray-100"
          >
            <p className="text-sm font-semibold text-gray-800">{s.label}</p>
            <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ─── Process ─── */}
    <section className="mb-8">
      <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
        <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
        Feedback Analysis Process
      </h3>
      <div className="space-y-2">
        {processSteps.map((step, i) => (
          <div key={i} className="flex gap-3 items-start">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ssgmce-blue/5 text-ssgmce-blue text-[11px] font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </section>
  </GenericPage>
);

export default FeedbackAnalysis;
