import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const surveyReports = [
  { year: '2023-24', url: 'uploads/AQAR/Student%20Satisfaction%20Survey-SURVEY-AY-2023-24_website.pdf' },
  { year: '2022-23', url: 'uploads/AQAR/Student%20Satisfaction%20Survey-SURVEY-AY-2022-23.pdf' },
  { year: '2021-22', url: 'uploads/AQAR/SSS-2021-22_report%20_final.pdf' },
  { year: '2020-21', url: 'uploads/AQAR/SSS-2020-2021_report_inst.pdf' },
  { year: '2019-20', url: 'uploads/AQAR/SSS-2019-20_report_institute.pdf' },
  { year: '2018-19', url: 'uploads/AQAR/SSS-2018-19_report_institute.pdf' },
  { year: '2017-18', url: 'uploads/AQAR/SSS-2017-18_report_inst.pdf' },
  { year: '2016-17', url: 'uploads/AQAR/SSS-2016-17_report.pdf' },
];

const surveyAreas = [
  { label: 'Teaching Quality', desc: 'Effectiveness of teaching methods, faculty preparedness, and classroom engagement' },
  { label: 'Curriculum Design', desc: 'Relevance of syllabus, industry alignment, and breadth of elective offerings' },
  { label: 'Infrastructure', desc: 'Quality of classrooms, laboratories, library, and computing facilities' },
  { label: 'Support Services', desc: 'Mentoring, counselling, career guidance, and administrative responsiveness' },
  { label: 'Learning Resources', desc: 'Availability of e-resources, digital tools, and supplementary study materials' },
  { label: 'Overall Satisfaction', desc: 'Holistic assessment of the academic experience and campus life' },
];

const highlights = [
  '8 consecutive years of student satisfaction surveys (2016-17 to 2023-24).',
  'Structured questionnaire aligned with NAAC Criterion 2.7.1 requirements.',
  'Responses collected from students across all departments and programmes.',
  'Analysis reports published transparently for institutional improvement.',
];

const StudentSurvey = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleReports = showAll ? surveyReports : surveyReports.slice(0, 4);

  return (
    <GenericPage
      title="Student Satisfaction Survey Report"
      sidebar={<IQACSidebar />}
    >
      {/* ─── Overview ─── */}
      <section className="mb-8">
        <p className="text-sm text-gray-600 leading-relaxed">
          As part of its commitment to quality assurance, SSGMCE conducts an
          annual Student Satisfaction Survey (SSS) to gauge students' perception
          of teaching–learning, infrastructure, support services, and overall
          institutional effectiveness. The survey follows NAAC guidelines and
          contributes to continuous improvement of academic processes.
        </p>
      </section>

      {/* ─── Summary Stats ─── */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 rounded-lg border border-gray-100 text-center">
            <p className="text-lg font-bold text-ssgmce-blue">{surveyReports.length}</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wide">Reports</p>
          </div>
          <div className="px-4 py-2 rounded-lg border border-gray-100 text-center">
            <p className="text-lg font-bold text-ssgmce-saffron">8</p>
            <p className="text-[11px] text-gray-500 uppercase tracking-wide">Years Covered</p>
          </div>
        </div>
      </section>

      {/* ─── Survey Reports ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Survey Reports
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {visibleReports.map((r) => (
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
                SSS Report ↗
              </span>
            </a>
          ))}
        </div>
        {surveyReports.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-xs text-ssgmce-blue hover:text-ssgmce-saffron transition-colors font-medium"
          >
            {showAll ? '← Show recent' : `View all ${surveyReports.length} reports →`}
          </button>
        )}
      </section>

      {/* ─── Survey Areas ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Key Survey Areas
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {surveyAreas.map((a) => (
            <div
              key={a.label}
              className="p-3 rounded-lg border border-gray-100"
            >
              <p className="text-sm font-semibold text-gray-800">{a.label}</p>
              <p className="text-xs text-gray-500 mt-1">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Highlights ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Highlights
        </h3>
        <div className="space-y-2">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-2 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ssgmce-saffron flex-shrink-0" />
              <p className="text-sm text-gray-600">{h}</p>
            </div>
          ))}
        </div>
      </section>
    </GenericPage>
  );
};

export default StudentSurvey;
