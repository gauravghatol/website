import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UC1YOGwS9KaWbXL-RWrNih1Q';
const FACILITY_VIDEO_ID = 'AgjcdmoXivU';

const facilityFeatures = [
  'Professional multimedia recording studio for e-content development.',
  'High-definition video capture equipment with multiple camera angles.',
  'Audio recording setup with noise-cancellation for clear narration.',
  'Screen recording and presentation capture tools.',
  'Post-production editing software for professional-quality output.',
  'Lightboard / digital whiteboard for interactive explanations.',
  'Dedicated space available for all faculty members across departments.',
  'Content published on the official SSGMCE YouTube channel for open access.',
];

const EContentFacility = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GenericPage title="IQAC – e-Content Recording Facility" sidebar={<IQACSidebar />}>

      {/* ─── About ─── */}
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        SSGMCE has established a dedicated e-Content Recording Facility (Multimedia Unit)
        to empower faculty members in developing high-quality digital learning resources.
        The facility is equipped with professional recording, editing, and publishing
        tools to produce e-content that enhances the teaching-learning experience.
      </p>

      {/* ─── Facility Video ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Facility Overview
        </h3>
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-100">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${FACILITY_VIDEO_ID}?autoplay=1`}
              title="SSGMCE Multimedia Unit & e-Content Facility"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer group"
            >
              <img
                src={`https://img.youtube.com/vi/${FACILITY_VIDEO_ID}/hqdefault.jpg`}
                alt="SSGMCE Multimedia Unit"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <svg className="w-6 h-6 text-ssgmce-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Multimedia Unit – e-Content Recording Facility @SSGMCE</p>
      </section>

      {/* ─── Facility Features ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-1 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-saffron rounded-full" />
          Facility Features
        </h3>
        <p className="text-xs text-gray-400 mb-4 pl-3">Infrastructure and capabilities of the multimedia unit:</p>
        <ol className="space-y-2 pl-3">
          {facilityFeatures.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {feat}
            </li>
          ))}
        </ol>
      </section>

      {/* ─── Channel Link ─── */}
      <div className="text-center">
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ssgmce-blue/20 text-sm font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
        >
          View All e-Content on YouTube ↗
        </a>
      </div>

    </GenericPage>
  );
};

export default EContentFacility;
