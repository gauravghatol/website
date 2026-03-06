import React from 'react';
import GenericPage from '../../components/GenericPage';
import AcademicsSidebar from '../../components/AcademicsSidebar';
import { FaCalendarAlt, FaDownload, FaFilePdf } from 'react-icons/fa';

const BASE_URL = 'https://www.ssgmce.ac.in/';

const encodeURL = (path) => BASE_URL + path.split('/').map(segment => encodeURIComponent(segment)).join('/');

const academicData = [
  {
    session: '2025-26',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/Academic Calendar (B.E.) 2025-26.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic Planner 2025-26.pdf' },
  },
  {
    session: '2024-25',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar_BE_2024-25_04-03-25.pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2024-25-Autumn (1).pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/FIN Academic_Planner_2024-2025-13-125.pdf' },
  },
  {
    session: '2023-24',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2023-24 (23-2-24) (2).pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2023-24_Autumn.pdf' },
      { label: 'Academic Calendar - M.B.A. (Spring Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2023-24_Spring.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Rev. Academic Planner 2023-24 Ap-24S.pdf' },
  },
  {
    session: '2022-23',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2022-23.pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2022-23_Autumn.pdf' },
      { label: 'Academic Calendar - M.B.A. (Spring Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2022-23_Spring.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/REVISED Academic_Planner_2022-2023 ---Mar23.pdf' },
  },
  {
    session: '2021-22',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar 2021-22.pdf' },
      { label: 'Academic Calendar - First Year (Autumn Semester)', url: 'uploads/pdf/Academic Calendar FYBE Autumn-2020-21[408].pdf' },
      { label: 'Academic Calendar - First Year (Spring Semester)', url: 'uploads/pdf/Academic Calendar FYBE Spring-2020-21[407].pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2021-22_Autumn.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2021-2022.pdf' },
  },
  {
    session: '2020-21',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2020-21 (1)[409].pdf' },
      { label: 'Academic Calendar - First Year (Autumn Semester)', url: 'uploads/pdf/Academic Calendar FYBE Autumn-2020-21.pdf' },
      { label: 'Academic Calendar - First Year (Spring Semester)', url: 'uploads/pdf/Academic Calendar FYBE Spring-2020-21.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2020-2021 AUG20 FIN JAN 2021-ok.pdf' },
  },
  {
    session: '2019-20',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2019-20[314].pdf' },
      { label: 'Academic Calendar - First Year (Autumn Semester)', url: 'uploads/pdf/Academic Calendar FYBE Autumn-2019-20[313].pdf' },
      { label: 'Academic Calendar - First Year (Spring Semester)', url: 'uploads/pdf/Academic Calendar FYBE Spring-2019-20[312].pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2019-20-Autumn.pdf' },
      { label: 'Academic Calendar - M.B.A. (Spring Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2019-20-Spring.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2019-2020[311].pdf' },
  },
  {
    session: '2018-19',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2018-19.pdf' },
      { label: 'Academic Calendar - First Year (Autumn Semester)', url: 'uploads/pdf/Academic Calendar FYBE Autumn-2018-19.pdf' },
      { label: 'Academic Calendar - First Year & M.E (Spring Semester)', url: 'uploads/pdf/Academic Calendar FYBE & ME Spring-2018-19.pdf' },
      { label: 'Academic Calendar - M.B.A. (Autumn Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2018-19_Autumn.pdf' },
      { label: 'Academic Calendar - M.B.A. (Spring Semester)', url: 'uploads/pdf/Academic Calendar (MBA) 2018-19_Spring.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2018-2019.pdf' },
  },
  {
    session: '2017-18',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2017-18 (1).pdf' },
      { label: 'Academic Calendar - First Year & M.E (Spring Semester)', url: 'uploads/pdf/Academic Calendar FYBE & ME 2017-18 Spring Sem.pdf' },
      { label: 'Academic Calendar - First Year & M.E (Autumn Semester)', url: 'uploads/pdf/Academic Calendar FYBE & ME 2017-18 Autumn.pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2017-18.pdf' },
  },
  {
    session: '2016-17',
    calendars: [
      { label: 'Academic Calendar (B.E.)', url: 'uploads/pdf/Academic Calendar (B.E.) 2016-17.pdf' },
      { label: 'Academic Calendar (MBA)', url: 'uploads/pdf/Academic_Calendar (MBA) 2016-17.pdf' },
      { label: 'Academic Calendar - First Year & M.E (Spring Semester)', url: 'uploads/pdf/Academic Calendar- First Year & M.E (Spring-16-17).pdf' },
      { label: 'Academic Calendar - First Year & M.E (Autumn Semester)', url: 'uploads/pdf/Academic Calendar- First Year & M.E (Autumn-16-17).pdf' },
    ],
    planner: { label: 'Academic Planner', url: 'uploads/pdf/Academic_Planner_2016-17.pdf' },
  },
];

const AcademicPlanner = () => {
  return (
    <GenericPage title="Academic Planner & Calendar" sidebar={<AcademicsSidebar />}>
      <div className="space-y-10">
        {/* Header Information */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-600" />
            Academic Planner and Calendar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The academic calendar is designed to ensure a balanced schedule for students and faculty. It includes dates for commencement of classes, internal assessments, university examinations, and holidays. Download the academic calendar and planner for each session below.
          </p>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Session-wise Academic Calendar & Planner
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 w-32 border border-gray-300">Academic Session</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Academic Calendar</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Academic Planner</th>
                </tr>
              </thead>
              <tbody>
                {academicData.map((item, index) => (
                  <tr key={item.session} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 align-top border border-gray-300">
                      {item.session}
                    </td>
                    <td className="px-6 py-4 align-top border border-gray-300">
                      <div className="space-y-2">
                        {item.calendars.map((cal, i) => (
                          <a
                            key={i}
                            href={encodeURL(cal.url)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                          >
                            <FaFilePdf className="text-red-500 flex-shrink-0" />
                            <span className="group-hover:underline">{cal.label}</span>
                          </a>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top border border-gray-300">
                      <button
                        onClick={() => {
                          const allUrls = [
                            ...item.calendars.map(cal => encodeURL(cal.url)),
                            encodeURL(item.planner.url),
                          ];
                          allUrls.forEach((url, i) => {
                            setTimeout(() => window.open(url, '_blank'), i * 300);
                          });
                        }}
                        className="inline-flex items-center gap-2 text-sm text-white bg-ssgmce-orange hover:bg-orange-600 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                      >
                        <FaDownload className="text-xs" />
                        <span>Download All</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default AcademicPlanner;
