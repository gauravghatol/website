import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const compositionPDFs = [
  { year: '2024-25', url: 'uploads/AQAR/Compositon%202024-2025%20revised.pdf' },
  { year: '2023-24', url: 'uploads/AQAR/IQAC%20Composition%202023-2024.pdf' },
  { year: '2022-23', url: 'uploads/AQAR/IQAC%20Composition%202022-2023.pdf' },
  { year: '2021-22', url: 'uploads/AQAR/IQAC%20Composition%202021-2022.pdf' },
  { year: '2020-21', url: 'uploads/AQAR/IQAC%20Composition2020-21[410].pdf' },
  { year: '2019-20', url: 'uploads/AQAR/Composition%20-2019-2020.pdf' },
];

const functions = [
  'Development and application of quality benchmarks / parameters for various academic and administrative activities of the institution.',
  'Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.',
  'Collection and analysis of feedback from all stakeholders on quality-related institutional processes.',
  'Dissemination of information on various quality parameters to all stakeholders.',
  'Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.',
  'Documentation of the various programmes / activities leading to quality improvement.',
  'Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.',
  'Development and maintenance of institutional database through MIS for the purpose of maintaining / enhancing the institutional quality.',
  'Periodical conduct of Academic and Administrative Audit and its follow-up.',
  'Preparation and submission of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC.',
];

const benefits = [
  'Ensure clarity and focus in institutional functioning towards quality enhancement.',
  'Ensure internalization of the quality culture.',
  'Ensure enhancement and coordination among various activities of the institution and institutionalize all good practices.',
  'Provide a sound basis for decision-making to improve institutional functioning.',
  'Act as a dynamic system for quality changes in HEIs.',
  'Build an organized methodology of documentation and internal communication.',
];

const Composition = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePDFs = showAll ? compositionPDFs : compositionPDFs.slice(0, 3);

  return (
    <GenericPage title="IQAC – Composition & Functions" sidebar={<IQACSidebar />}>

      {/* ─── Composition PDFs ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          IQAC Composition
        </h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {visiblePDFs.map((pdf) => (
            <a
              key={pdf.year}
              href={`${BASE}${pdf.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors group"
            >
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-1 rounded">
                {pdf.year}
              </span>
              <span className="text-sm text-gray-600 group-hover:text-ssgmce-blue transition-colors">
                View PDF ↗
              </span>
            </a>
          ))}
        </div>
        {compositionPDFs.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-xs text-ssgmce-blue hover:text-ssgmce-saffron transition-colors font-medium"
          >
            {showAll ? '← Show less' : `View all ${compositionPDFs.length} years →`}
          </button>
        )}
      </section>

      {/* ─── Functions ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Functions of IQAC
        </h3>
        <p className="text-xs text-gray-400 mb-4 pl-3">Some of the functions expected of the IQAC are:</p>
        <ol className="space-y-2 pl-3">
          {functions.map((fn, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {fn}
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Benefits ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Benefits
        </h3>
        <p className="text-xs text-gray-400 mb-4 pl-3">IQAC will facilitate / contribute to:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg border border-gray-100 text-sm text-gray-600 leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-ssgmce-saffron mt-2 flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </section>

    </GenericPage>
  );
};

export default Composition;
