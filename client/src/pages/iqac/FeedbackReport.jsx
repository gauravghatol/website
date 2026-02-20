import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const PDF_URL = 'https://www.ssgmce.ac.in/uploads/AQAR/Fb_report-final_website_20-9-23-1.4.1.pdf';

const stakeholders = [
  { label: 'Students', desc: 'Feedback on teaching-learning process and facilities collected every semester.' },
  { label: 'Alumni', desc: 'Insights on Vision, Mission and Program Educational Objectives (PEOs).' },
  { label: 'Employers', desc: 'Highlight curriculum gaps and skills sought by industry for recruitment.' },
  { label: 'Parents', desc: 'Perceptions on institutional quality, infrastructure and student welfare.' },
  { label: 'Faculty', desc: 'Curriculum suggestions, academic programme quality and institutional processes.' },
];

const feedbackProcess = [
  'Feedback is collected from employers, alumni, parents, students and faculty on curriculum, Vision & Mission, and PEOs.',
  'Employer feedback highlights where curriculum may be lacking or outdated — invaluable for curriculum revision.',
  'Curriculum-related suggestions are communicated to the Board of Studies (BoS) of Sant Gadge Baba Amravati University.',
  'Vision, Mission and PEOs are reframed based on stakeholder suggestions.',
  'Student feedback on teaching-learning is collected each semester; HoDs take corrective measures.',
  'HoDs prepare action taken reports based on feedback discussions and suggestions.',
  'Comprehensive analysis of stakeholder feedback is presented during IQAC meetings.',
  'Annual Student Satisfaction Survey is conducted; corrective actions are proposed by IQAC.',
  'Regular programme evaluations — curriculum assessments and learning outcomes analysis — ensure alignment with objectives.',
];

const FeedbackReport = () => {
  return (
    <GenericPage title="Stakeholders Feedback Report" sidebar={<IQACSidebar />}>

      {/* ─── Overview ─── */}
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        The institution places a strong emphasis on recognizing and addressing shortcomings as
        essential for improvement. The primary objective of the feedback process is to establish a
        framework for gathering, summarizing, and documenting stakeholder perceptions regarding the
        quality and effectiveness of the institute's curriculum. This valuable feedback is subsequently
        used for programme evaluation.
      </p>

      {/* ─── Download ─── */}
      <div className="mb-8">
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-ssgmce-blue/20 text-sm font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Full Report (PDF) ↗
        </a>
      </div>

      {/* ─── Stakeholders ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Feedback Stakeholders
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {stakeholders.map((s) => (
            <div key={s.label} className="p-3 rounded-lg border border-gray-100">
              <span className="text-sm font-semibold text-ssgmce-blue">{s.label}</span>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Process ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Feedback Process &amp; Action
        </h3>
        <p className="text-xs text-gray-400 mb-4 pl-3">How stakeholder feedback is collected, analysed and acted upon:</p>
        <ol className="space-y-2 pl-3">
          {feedbackProcess.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

    </GenericPage>
  );
};

export default FeedbackReport;
