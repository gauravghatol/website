import React from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaUserTie, FaMapMarkerAlt, FaCalendarAlt, FaCogs, FaFilePdf, FaChevronRight } from 'react-icons/fa';

const trainingData = [
  { sr: 1, name: 'Dr. A. S. Tale', institution: 'Vigyan Ashram, Pabal, Pune', area: 'Diploma in Digital Fabrication', duration: '25 Jan 2021 – 24 Jun 2021' },
  { sr: 2, name: 'Dr. Pavan M. Kuchar', institution: 'Vigyan Ashram, Pabal, Pune', area: 'Diploma in Digital Fabrication', duration: '26 Jan 2021 – 28 Jul 2021' },
  { sr: 3, name: 'Mr. V. S. Karale', institution: 'Vigyan Ashram, Pabal, Pune', area: 'Diploma in Digital Fabrication', duration: '26 Jan 2021 – 30 Jun 2021' },
  { sr: 4, name: 'Mr. G. N. Bonde', institution: 'KPIT Technologies Ltd., Pune', area: 'Mathematical Modeling of Electrical and Mechanical System Using MATLAB Simulink', duration: '11 Jul 2022 – 10 Sep 2022' },
  { sr: 5, name: 'Mr. Nitin G. More', institution: 'Vigyan Ashram, Pabal, Pune', area: 'Diploma in Digital Fabrication', duration: '29 Jan 2020 – 01 Aug 2020' },
  { sr: 6, name: 'Mr. Rajesh V. Rajkolhe', institution: 'Universal Orbital Systems Pvt. Ltd., Narhe, Pune', area: 'Design and Manufacturing', duration: '12 Jun 2017 – 12 Aug 2017' },
  { sr: 7, name: 'Mr. Kunal R. Gandhare', institution: 'Bhogle Automotive, MIDC, Chh. Sambhajinagar', area: 'Product Design', duration: '12 Jun 2017 – 12 Aug 2017' },
  { sr: 8, name: 'Mr. V. S. Ingole', institution: 'Vigyan Ashram, Pabal, Pune', area: 'Embedded Systems', duration: '22 Jan 2020 – 17 Jul 2020' },
  { sr: 9, name: 'Mr. V. V. Ratnaparkhi', institution: 'Space Application Centre, ISRO, Ahmedabad', area: 'GaN Based Power Amplifier Design', duration: '15 May 2017 – 29 Oct 2017' },
  { sr: 10, name: 'Mr. Sumit S. Muddalkar', institution: 'MindScripts Technologies, Pune', area: 'Advanced Java', duration: 'May 2017 – Jun 2017' },
  { sr: 11, name: 'Mr. Pritam H. Gohatre', institution: 'MindScripts Technologies, Pune', area: 'Diploma in Software Testing', duration: '04 Jun 2018 – 28 Jul 2018' },
];

const Sabbatical = () => {
  return (
    <GenericPage title="Sabbatical Training" sidebar={<ResearchSidebar />}>
      {/* Intro */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        SSGMCE encourages faculty members to undertake sabbatical training at premier industries, research
        organizations, and academic institutions. This initiative enhances teaching quality and brings
        real-world expertise into the classroom.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-gray-800">{trainingData.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">Faculty Trained</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-gray-800">8</p>
          <p className="text-xs text-gray-500 mt-0.5">Partner Organizations</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-center col-span-2 sm:col-span-1">
          <p className="text-2xl font-bold text-gray-800">2017–22</p>
          <p className="text-xs text-gray-500 mt-0.5">Active Period</p>
        </div>
      </div>

      {/* Training Cards */}
      <h2 className="text-lg font-semibold text-ssgmce-blue mb-4">Training Details</h2>
      <div className="space-y-3 mb-8">
        {trainingData.map((t) => (
          <div
            key={t.sr}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-ssgmce-blue/10 border border-ssgmce-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FaUserTie className="text-sm text-ssgmce-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-800">{t.name}</h3>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="flex items-start gap-1.5">
                    <FaMapMarkerAlt className="text-xs text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500">{t.institution}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <FaCogs className="text-xs text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-600 font-medium">{t.area}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <FaCalendarAlt className="text-xs text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500">{t.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Link */}
      <a
        href="https://www.ssgmce.ac.in/uploads/pdf/Sabbatical-Training-Deatils_Signed.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-ssgmce-saffron text-white hover:bg-ssgmce-saffron/90 rounded-lg transition text-sm font-medium"
      >
        <FaFilePdf /> Download Signed Document <FaChevronRight className="text-xs" />
      </a>
    </GenericPage>
  );
};

export default Sabbatical;
