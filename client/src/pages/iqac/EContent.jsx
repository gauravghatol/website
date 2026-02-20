import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UC1YOGwS9KaWbXL-RWrNih1Q';

const videos = [
  { id: 'MJuHL1-PsjE', title: 'Teaching-Learning E-Content', category: 'Teaching-Learning' },
  { id: 'o9XkyIgQQEE', title: 'Teaching-Learning E-Content 1', category: 'Teaching-Learning' },
  { id: 'wrn_XAvZo1E', title: 'Teaching-Learning E-Content 3', category: 'Teaching-Learning' },
  { id: 'nWF1W9BbE9A', title: 'B.E. Admission Information – Criteria, Seat Matrix & Documents', category: 'Information' },
  { id: 'ktr3fH2Ltks', title: 'Introduction to OOPs – Importance of OOPs', category: 'Java / OOP' },
  { id: '_szLd2PwN5Q', title: 'Principles of OOP – Classes and Objects', category: 'Java / OOP' },
  { id: 'IWjUI0WSFQc', title: 'Encapsulation, Abstraction, Inheritance & Polymorphism', category: 'Java / OOP' },
  { id: '5MtPf4wlGOY', title: 'Introduction to Java 4', category: 'Java / OOP' },
  { id: '_5VgKa0zVtc', title: 'Java Programming Constructs 5', category: 'Java / OOP' },
  { id: 'FcjkRO0x9yQ', title: 'Java Programming Constructs 6', category: 'Java / OOP' },
];

const categories = [...new Set(videos.map((v) => v.category))];

const EContent = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingId, setPlayingId] = useState(null);

  const filtered = activeCategory === 'All' ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <GenericPage title="IQAC – e-Content (e-Resource Developed by Faculty)" sidebar={<IQACSidebar />}>

      {/* ─── About ─── */}
      <p className="text-gray-600 leading-relaxed text-sm mb-6">
        Faculty members at SSGMCE develop e-content resources to support teaching-learning
        processes. These video lectures cover various subjects and are hosted on the institute's
        official YouTube channel for open access.
      </p>

      {/* ─── Stats ─── */}
      <div className="flex items-center gap-6 mb-6">
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-blue">{videos.length}</span>
          <span className="text-xs text-gray-400">Videos</span>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-saffron">{categories.length}</span>
          <span className="text-xs text-gray-400">Categories</span>
        </div>
      </div>

      {/* ─── Category Filter ─── */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-ssgmce-blue text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ─── Video Grid ─── */}
      <section className="mb-8">
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          e-Content Videos
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((video) => (
            <div key={video.id} className="border border-gray-100 rounded-lg overflow-hidden group">
              {/* Thumbnail / Embed */}
              <div className="relative aspect-video bg-gray-100">
                {playingId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlayingId(video.id)}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-5 h-5 text-ssgmce-blue ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>
              {/* Info */}
              <div className="p-3">
                <span className="text-[10px] font-medium text-ssgmce-saffron bg-ssgmce-saffron/10 px-1.5 py-0.5 rounded">
                  {video.category}
                </span>
                <p className="text-sm text-gray-700 font-medium mt-1 leading-snug">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── More Link ─── */}
      <div className="text-center">
        <a
          href={YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-ssgmce-blue/20 text-sm font-medium text-ssgmce-blue hover:bg-ssgmce-blue/5 transition-colors"
        >
          View More e-Content on YouTube ↗
        </a>
      </div>

    </GenericPage>
  );
};

export default EContent;
