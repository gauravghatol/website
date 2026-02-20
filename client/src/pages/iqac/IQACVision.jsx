import React from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const IQACVision = () => {
  const strategies = [
    'Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks.',
    'Relevant and quality academic / research programmes.',
    'Equitable access to and affordability of academic programmes for various sections of society.',
    'Optimization and integration of modern methods of teaching and learning.',
    'The credibility of assessment and evaluation process.',
    'Ensuring the adequacy, maintenance and proper allocation of support structure and services.',
    'Sharing of research findings and networking with other institutions in India and abroad.',
  ];

  const functions = [
    'Setting quality benchmarks and parameters for academic and administrative activities.',
    'Facilitating internal and external academic audits for continuous improvement.',
    'Collection, analysis and action on feedback from students, parents, employers and alumni.',
    'Documentation and dissemination of best practices across departments.',
    'Promoting participation in FDPs, workshops, seminars and conferences.',
    'Preparation and support for NAAC, NBA and other accreditation processes.',
  ];

  return (
    <GenericPage title="IQAC – Vision, Mission & Quality Policies" sidebar={<IQACSidebar />}>

      {/* ─── About ─── */}
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        In pursuance of its Action Plan for performance evaluation, assessment, accreditation and quality up-gradation
        of institutions of higher education, the Internal Quality Assurance Cell (IQAC) was established in{' '}
        <strong className="text-gray-800">2010</strong> at Shri Sant Gajanan Maharaj College of Engineering, Shegaon
        (SSGMCE), as per the recommendations of NAAC, Bangalore. The prime task of the IQAC is to develop a system
        for conscious, consistent, and catalytic improvement in the overall performance of the institution.
      </p>

      {/* ─── Vision ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Vision
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed pl-3 border-l-2 border-gray-100">
          To ensure quality culture as the prime concern for the Higher Education Institutions through
          institutionalizing and internalizing all the initiatives taken with internal and external support.
        </p>
      </section>

      {/* ─── Objectives ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Objectives
        </h3>
        <ul className="space-y-2 pl-3">
          <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-ssgmce-saffron mt-2 flex-shrink-0" />
            To develop a system for conscious, consistent, and catalytic action to improve the academic and
            administrative performance of the institution.
          </li>
          <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-ssgmce-saffron mt-2 flex-shrink-0" />
            To promote measures for institutional functioning towards quality enhancement through internalization
            of quality culture and institutionalization of best practices.
          </li>
        </ul>
      </section>

      {/* ─── Strategies & Quality Policies ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Strategies &amp; Quality Policies
        </h3>
        <p className="text-xs text-gray-400 mb-4 pl-3">IQAC shall evolve mechanisms and procedures for:</p>
        <ol className="space-y-2 pl-3">
          {strategies.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Key Functions ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Key Functions
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {functions.map((fn, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border border-gray-100 text-sm text-gray-600 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-ssgmce-blue mt-2 flex-shrink-0" />
              {fn}
            </div>
          ))}
        </div>
      </section>

    </GenericPage>
  );
};

export default IQACVision;
