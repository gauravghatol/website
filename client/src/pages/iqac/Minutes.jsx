import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import IQACSidebar from '../../components/IQACSidebar';

const BASE = 'https://www.ssgmce.ac.in/';

const meetingData = [
  {
    year: '2024-25',
    meetings: [
      { label: 'MOM-1', date: '29 Jun 2024', url: 'uploads/AQAR/29-06-2024.pdf' },
      { label: 'MOM-2', date: '19 Sep 2024', url: 'uploads/AQAR/19-09-2024.pdf' },
      { label: 'MOM-3', date: '23 Oct 2024', url: 'uploads/AQAR/23-10-2024.pdf' },
    ],
  },
  {
    year: '2023-24',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Minutes%20of%20Meeting%202023-2024(1).pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Minutes%20of%20Meeting%202023-2024(2).pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/Minutes%20of%20Meeting%202023-2024(3).pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/Minutes%20of%20Meeting%202023-2024(4).pdf' },
    ],
  },
  {
    year: '2022-23',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Minutes%20of%20Meeting%202022-2023(1).pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Minutes%20of%20Meeting%202022-2023%20(2).pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/Minutes%20of%20Meeting%202022-2023%20(3).pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/Minutes%20of%20Meeting%202022-2023%20(4).pdf' },
    ],
  },
  {
    year: '2021-22',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Minutes%20of%20Meeting%202021-2022%20(01).pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Minutes%20of%20Meeting%202021-2022%20(2).pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/Minutes%20of%20Meeting%202021-2022%20(3).pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/Minutes%20of%20Meeting%202021-2022%20(4).pdf' },
    ],
  },
  {
    year: '2020-21',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/MOM1_2020_21.pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/MOM2_2020_21.pdf' },
    ],
  },
  {
    year: '2019-20',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Meeting_1-2019-20.pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Meeting_2-2019-20.pdf' },
    ],
  },
  {
    year: '2018-19',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Meeting_1-2018-19.pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Meeting_2-2018-19.pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/Meeting_3-2018-19.pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/Meeting_4-2018-19.pdf' },
    ],
  },
  {
    year: '2017-18',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/Meeting-1-17-18.pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/Meeting-2-17-18.pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/Meeting-3-17-18.pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/Meeting-4-17-18.pdf' },
    ],
  },
  {
    year: '2016-17',
    meetings: [
      { label: 'MOM-1', url: 'uploads/AQAR/IQAC_meeting1_2016-17.pdf' },
      { label: 'MOM-2', url: 'uploads/AQAR/IQAC_meeting2_2016-17.pdf' },
      { label: 'MOM-3', url: 'uploads/AQAR/IQAC_meeting3_2016-17.pdf' },
      { label: 'MOM-4', url: 'uploads/AQAR/IQAC_meeting4_2016-17.pdf' },
    ],
  },
];

const Minutes = () => {
  const [expandedYear, setExpandedYear] = useState(meetingData[0].year);

  const totalMeetings = meetingData.reduce((sum, y) => sum + y.meetings.length, 0);

  return (
    <GenericPage title="IQAC – Minutes of Meeting" sidebar={<IQACSidebar />}>

      {/* ─── Summary ─── */}
      <div className="flex items-center gap-6 mb-8">
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-blue">{meetingData.length}</span>
          <span className="text-xs text-gray-400">Academic Years</span>
        </div>
        <div className="w-px h-8 bg-gray-200" />
        <div className="text-center">
          <span className="block text-2xl font-bold text-ssgmce-saffron">{totalMeetings}</span>
          <span className="text-xs text-gray-400">Meetings Documented</span>
        </div>
      </div>

      {/* ─── Year-wise Accordion ─── */}
      <section>
        <h3 className="text-base font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-ssgmce-blue rounded-full" />
          Meeting Records
        </h3>

        <div className="space-y-2">
          {meetingData.map((yearData) => {
            const isOpen = expandedYear === yearData.year;
            return (
              <div key={yearData.year} className="border border-gray-100 rounded-lg overflow-hidden">
                {/* Year header */}
                <button
                  onClick={() => setExpandedYear(isOpen ? null : yearData.year)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                    isOpen ? 'bg-ssgmce-blue/5' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-semibold ${isOpen ? 'text-ssgmce-blue' : 'text-gray-700'}`}>
                      {yearData.year}
                    </span>
                    <span className="text-xs text-gray-400">
                      {yearData.meetings.length} meeting{yearData.meetings.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Meeting links */}
                {isOpen && (
                  <div className="px-4 pb-3 pt-1">
                    <div className="grid sm:grid-cols-2 gap-2">
                      {yearData.meetings.map((m) => (
                        <a
                          key={m.label}
                          href={`${BASE}${m.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-2.5 rounded border border-gray-50 hover:border-ssgmce-saffron/40 hover:bg-ssgmce-saffron/5 transition-colors group"
                        >
                          <span className="text-xs font-semibold text-ssgmce-blue bg-ssgmce-blue/5 px-2 py-0.5 rounded">
                            {m.label}
                          </span>
                          {m.date && (
                            <span className="text-xs text-gray-400">{m.date}</span>
                          )}
                          <span className="ml-auto text-xs text-gray-400 group-hover:text-ssgmce-blue transition-colors">
                            PDF ↗
                          </span>
                        </a>
                      ))}
                    </div>
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

export default Minutes;
