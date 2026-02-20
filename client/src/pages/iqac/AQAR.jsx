import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const criteriaLabels = [
  { num: 'I', title: 'Curricular Aspects' },
  { num: 'II', title: 'Teaching-Learning and Evaluation' },
  { num: 'III', title: 'Resource Mobilization for Research' },
  { num: 'IV', title: 'Infrastructure and Learning Resources' },
  { num: 'V', title: 'Student Support and Progression' },
  { num: 'VI', title: 'Governance, Leadership and Management' },
  { num: 'VII', title: 'Institutional Values and Best Practices' },
];

const aqarData = [
  {
    year: '2023-24',
    report: 'uploads/AQAR/AQAR_23_24.pdf',
    partA: null,
    criteria: [
      'Criterion-I_2024.php', 'Criterion-II_2024.php', 'Criterion-III_2024.php',
      'Criterion-IV_2024.php', 'Criterion-V_2024.php', 'Criterion-VI_2024.php',
      'Criterion-VII_2024.php',
    ],
  },
  {
    year: '2021-22',
    report: 'uploads/AQAR/AQAR__downlded_AAC_portal[540].pdf',
    partA: null,
    criteria: [
      'Criterion-I_2022.php', 'Criterion-II_2022.php', 'Criterion-III_2022.php',
      'Criterion-IV_2022.php', 'Criterion-V_2022.php', 'Criterion-VI_2022.php',
      'Criterion-VII_2022.php',
    ],
  },
  {
    year: '2020-21',
    report: 'uploads/AQAR/AQAR%202020-21%20uploaded.pdf',
    partA: 'IQAC_AQAR2021_Part_A.php',
    criteria: [
      'Criterion-I_2021.php', 'Criterion-II_2021.php', 'Criterion-III_2021.php',
      'Criterion-IV_2021.php', 'Criterion-V_2021.php', 'Criterion-VI_2021.php',
      'Criterion-VII_2021.php',
    ],
  },
  {
    year: '2019-20',
    report: 'uploads/AQAR/AQAR_2019-20-submitted-NAAC_portal-23sep2023.pdf',
    partA: null,
    criteria: null,
  },
  {
    year: '2018-19',
    report: 'uploads/AQAR/AQAR_2018-19-uploaded-13_sep2023[406]%20(1).pdf',
    partA: null,
    criteria: null,
  },
  {
    year: '2017-18',
    report: 'uploads/AQAR/AQAR_2017-18_submitted_17july23[204].pdf',
    partA: null,
    criteria: null,
  },
  {
    year: '2016-17',
    report: 'uploads/AQAR/AQAC_report-submitted_2016-17.pdf',
    partA: null,
    criteria: null,
  },
  {
    year: '2012-13',
    report: 'uploads/AQAR/ANNUAL_QUALITY_ASSURANCE_REPORT_2012-13.pdf',
    partA: null,
    criteria: null,
  },
];

const AQAR = () => {
  const [expandedYear, setExpandedYear] = useState(aqarData[0].year);

  return (
    <GenericPage title="IQAC – AQAR Reports" sidebar={<IQACSidebar />}>

      {/* ─── About ─── */}
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        The Annual Quality Assurance Report (AQAR) is submitted to NAAC every year as per
        their guidelines. It documents the institution's quality initiatives, criterion-wise achievements,
        and continuous improvement efforts across academic and administrative functions.
      </p>

      {/* ─── Summary ─── */}
      <div className="flex items-center gap-6 mb-8">
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-blue">{aqarData.length}</span>
          <span className="text-xs text-gray-400">Reports Published</span>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-saffron">7</span>
          <span className="text-xs text-gray-400">NAAC Criteria</span>
        </div>
      </div>

      {/* ─── Year-wise Accordion ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Year-wise Reports
        </h3>

        <div className="space-y-2">
          {aqarData.map((item) => {
            const isOpen = expandedYear === item.year;
            return (
              <div key={item.year} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedYear(isOpen ? null : item.year)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    isOpen ? 'bg-ssgmce-blue/5' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${isOpen ? 'text-ssgmce-blue' : 'text-gray-700'}`}>
                      {item.year}
                    </span>
                    {item.criteria && (
                      <span className="text-xs text-gray-400">
                        {item.criteria.length} criteria
                      </span>
                    )}
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-2 space-y-3">
                    {/* AQAR Report PDF */}
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`${BASE}${item.report}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-ssgmce-blue/20 text-xs font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
                      >
                        AQAR Report {item.year} ↗
                      </a>
                      {item.partA && (
                        <a
                          href={`${BASE}${item.partA}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-gray-200 text-xs font-medium text-gray-600 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors"
                        >
                          Extended Profile ↗
                        </a>
                      )}
                    </div>

                    {/* Criteria Links */}
                    {item.criteria && (
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Criterion-wise Details</p>
                        <div className="grid sm:grid-cols-2 gap-1.5">
                          {item.criteria.map((cUrl, idx) => (
                            <a
                              key={idx}
                              href={`${BASE}${cUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 p-2 rounded border border-gray-50 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors group text-xs"
                            >
                              <span className="font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-1.5 py-0.5 rounded">
                                {criteriaLabels[idx].num}
                              </span>
                              <span className="text-gray-600 group-hover:text-ssgmce-blue transition-colors">
                                {criteriaLabels[idx].title}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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

export default AQAR;
