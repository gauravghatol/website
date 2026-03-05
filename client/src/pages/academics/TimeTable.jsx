import React from 'react';
import GenericPage from '../../components/GenericPage';
import AcademicsSidebar from '../../components/AcademicsSidebar';
import { FaDownload, FaClock, FaCalendarDay, FaBuilding } from 'react-icons/fa';

const PDF_URL = 'https://www.ssgmce.ac.in/uploads/Central%20Time%20Table-Autumn-2025-26.pdf';

const timeSlots = {
  weekday: [
    { time: '11:00 – 12:00', type: 'Lecture' },
    { time: '12:00 – 1:00', type: 'Lecture' },
    { time: '1:00 – 1:15', type: 'Break' },
    { time: '1:15 – 2:15', type: 'Lecture' },
    { time: '2:15 – 3:15', type: 'Lecture' },
    { time: '3:15 – 3:45', type: 'Recess' },
    { time: '3:45 – 4:45', type: 'Lecture / Lab' },
    { time: '4:45 – 5:45', type: 'Lecture / Lab' },
  ],
  saturday: [
    { time: '8:30 – 9:30', type: 'Lecture / Lab' },
    { time: '9:30 – 10:30', type: 'Lecture / Lab' },
    { time: '10:30 – 10:45', type: 'Break' },
    { time: '10:45 – 11:45', type: 'Lecture / Lab' },
    { time: '11:45 – 12:45', type: 'Lecture / Lab' },
  ],
};

const departments = [
  { code: 'S', name: 'Electrical Engineering', classes: ['2S', '3S', '4S'] },
  { code: 'R', name: 'Computer Science & Engineering', classes: ['2R', '3R', '4R'] },
  { code: 'N', name: 'Information Technology / CSE (AI&ML)', classes: ['2N', '3N', '4N'] },
  { code: 'U1', name: 'Electronics & Telecommunication (Div 1)', classes: ['2U1', '3U1', '4U1'] },
  { code: 'U2', name: 'Electronics & Telecommunication (Div 2)', classes: ['2U2', '3U2', '4U2'] },
  { code: 'M', name: 'Mechanical Engineering', classes: ['2M', '3M', '4M'] },
  { code: '1st Year', name: 'First Year (All Branches)', classes: ['1R1', '1R2', '1N', '1S', '1U1', '1U2', '1M'] },
  { code: 'PG', name: 'M.E. & MBA Programs', classes: ['M.E.(EPS)', 'M.E.(DE)', 'M.E.(CE)', 'M.E.(AMMSD)', 'MBA I', 'MBA II'] },
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimeTable = () => {
  return (
    <GenericPage title="Central Time Table" sidebar={<AcademicsSidebar />}>
      <div className="space-y-10">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <FaClock className="text-blue-600" />
            Central Time Table — Spring Semester 2025-26
          </h2>
          <p className="text-gray-700 leading-relaxed mb-1">
            Shri Sant Gajanan Maharaj College of Engineering, Shegaon
          </p>
          <p className="text-sm text-gray-500">
            Approved by Dean (Academics) Dr. A. U. Jawadekar &amp; Principal Dr. S. B. Somani
          </p>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-center">
            <FaCalendarDay className="text-3xl text-blue-500 mx-auto mb-2" />
            <h4 className="font-bold text-gray-800 text-lg">6 Days</h4>
            <p className="text-sm text-gray-500">Monday – Saturday</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-center">
            <FaClock className="text-3xl text-orange-500 mx-auto mb-2" />
            <h4 className="font-bold text-gray-800 text-lg">8 Time Slots</h4>
            <p className="text-sm text-gray-500">11:00 AM – 5:45 PM (Weekdays)</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 text-center">
            <FaBuilding className="text-3xl text-green-500 mx-auto mb-2" />
            <h4 className="font-bold text-gray-800 text-lg">30+ Classes</h4>
            <p className="text-sm text-gray-500">UG, PG & MBA Programs</p>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6 flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              View Time Table
            </h3>
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-ssgmce-orange hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              <FaDownload />
              Download PDF
            </a>
          </div>
          <div className="w-full" style={{ height: '80vh' }}>
            <iframe
              src={`${PDF_URL}#toolbar=1&navpanes=0`}
              title="Central Time Table - Spring Semester 2025-26"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Time Slots */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Time Slot Structure
            </h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weekday */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Monday – Friday</h4>
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold text-gray-700 border border-gray-300">Time</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-700 border border-gray-300">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.weekday.map((slot, i) => (
                    <tr key={i} className={`${slot.type === 'Break' || slot.type === 'Recess' ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-3 py-2 border border-gray-300 font-medium">{slot.time}</td>
                      <td className={`px-3 py-2 border border-gray-300 ${slot.type === 'Break' || slot.type === 'Recess' ? 'text-orange-600 font-medium' : ''}`}>{slot.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Saturday */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Saturday</h4>
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-bold text-gray-700 border border-gray-300">Time</th>
                    <th className="px-3 py-2 text-left font-bold text-gray-700 border border-gray-300">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {timeSlots.saturday.map((slot, i) => (
                    <tr key={i} className={`${slot.type === 'Break' ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-3 py-2 border border-gray-300 font-medium">{slot.time}</td>
                      <td className={`px-3 py-2 border border-gray-300 ${slot.type === 'Break' ? 'text-orange-600 font-medium' : ''}`}>{slot.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Departments & Classes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Departments & Classes Covered
            </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((dept, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">{dept.code}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{dept.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{dept.classes.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Day Schedule Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Day-Wise Schedule Overview
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 border border-gray-300">Day</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 border border-gray-300">Pages in PDF</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700 border border-gray-300">Contents</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: 'Monday', pages: 'Page 1 & 7', contents: 'UG classes (2nd–4th Year, 1st Year) + PG & MBA' },
                  { day: 'Tuesday', pages: 'Page 2 & 7', contents: 'UG classes (2nd–4th Year, 1st Year) + PG & MBA' },
                  { day: 'Wednesday', pages: 'Page 3 & 7', contents: 'UG classes (2nd–4th Year, 1st Year) + PG & MBA' },
                  { day: 'Thursday', pages: 'Page 4 & 8', contents: 'UG classes (2nd–4th Year, 1st Year) + PG & MBA' },
                  { day: 'Friday', pages: 'Page 5 & 8', contents: 'UG classes (2nd–4th Year, 1st Year) + PG & MBA' },
                  { day: 'Saturday', pages: 'Page 6 & 8', contents: 'Mentor-Mentee, Skills, Labs, POP, BARSA Activities' },
                ].map((row, i) => (
                  <tr key={row.day} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-3 font-semibold text-blue-600 border border-gray-300">{row.day}</td>
                    <td className="px-4 py-3 border border-gray-300">{row.pages}</td>
                    <td className="px-4 py-3 text-gray-600 border border-gray-300">{row.contents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Abbreviations & Notes
            </h3>
          </div>
          <div className="p-6">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>(T)*</strong> — Tutorial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>**</strong> — Additional lecture</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>SDP</strong> — Skill Development Program</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>POP</strong> — Professor of Practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>OE</strong> — Open Elective, <strong>PE</strong> — Professional Elective</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>MIL</strong> — Modern Indian Language, <strong>UHV</strong> — Universal Human Values</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Letters in parentheses (e.g., A, B, C, D) indicate batch divisions for practicals and labs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Room numbers: A-block (A1–A4), B-block (B007, B108, B206, B2, B4, B6), C-block (C1–C4), D-block (D1–D5), E-block (E1–E4).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-ssgmce-blue to-blue-800 rounded-xl p-6 text-center text-white">
          <h3 className="text-lg font-bold mb-2">Download Central Time Table</h3>
          <p className="text-blue-100 mb-4 text-sm">
            Spring Semester 2025-26 — Day-wise schedule for all UG, PG and MBA programs (8 Pages)
          </p>
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ssgmce-blue hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors font-semibold shadow-md"
          >
            <FaDownload />
            Download Full PDF
          </a>
        </div>
      </div>
    </GenericPage>
  );
};

export default TimeTable;
