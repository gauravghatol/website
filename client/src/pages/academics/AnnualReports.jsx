import React from 'react';
import { FaFilePdf, FaDownload, FaCalendarAlt, FaFileAlt } from 'react-icons/fa';
import GenericPage from '../../components/GenericPage';
import AcademicsSidebar from '../../components/AcademicsSidebar';

const BASE_URL = 'https://www.ssgmce.ac.in/';

const reports = [
  {
    year: '2023-24',
    path: 'uploads/pdf/annual-report-23-24.pdf_final-30_july_website.pdf',
    size: '5.2 MB',
    latest: true,
  },
  {
    year: '2022-23',
    path: 'uploads/pdf/final--anuual-report-22-23.pdf',
    size: '47.7 MB',
  },
  {
    year: '2021-22',
    path: 'uploads/pdf/final--anuual-report-21-22.pdf',
    size: '1.7 MB',
  },
  {
    year: '2020-21',
    path: 'uploads/pdf/annual-report-20-21-Final.pdf',
    size: '1.7 MB',
  },
  {
    year: '2019-20',
    path: 'uploads/pdf/annual_report-2019-20--final.pdf',
    size: '1.7 MB',
  },
  {
    year: '2018-19',
    path: 'uploads/pdf/final_annual_report-2018-19.pdf',
    size: '2.0 MB',
  },
];

const AnnualReports = () => {
  return (
    <GenericPage title="Annual Reports" sidebar={<AcademicsSidebar />}>
      <div className="space-y-8">
        {/* Intro */}
        <div className="bg-gradient-to-r from-ssgmce-blue/5 to-ssgmce-orange/5 rounded-xl p-6 border border-ssgmce-blue/10">
          <p className="text-gray-700 leading-relaxed">
            The Annual Reports of <strong>Shri Sant Gajanan Maharaj College of Engineering, Shegaon</strong> provide a comprehensive overview of the institute's academic, administrative, research, and extracurricular achievements for each session. These reports reflect the institute's commitment to transparency, continuous improvement, and excellence in technical education.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
            <FaFileAlt className="text-ssgmce-blue text-2xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">{reports.length}</p>
            <p className="text-sm text-gray-500">Reports Available</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
            <FaCalendarAlt className="text-ssgmce-orange text-2xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">2018–2024</p>
            <p className="text-sm text-gray-500">Sessions Covered</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5 text-center">
            <FaFilePdf className="text-red-500 text-2xl mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">PDF</p>
            <p className="text-sm text-gray-500">Download Format</p>
          </div>
        </div>

        {/* Reports List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3">
            <span className="w-2 h-8 bg-ssgmce-orange rounded-full"></span>
            Download Annual Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report) => (
              <a
                key={report.year}
                href={BASE_URL + report.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 p-5 rounded-xl border transition-all hover:shadow-md ${
                  report.latest
                    ? 'bg-gradient-to-r from-ssgmce-blue/5 to-ssgmce-orange/5 border-ssgmce-orange/30 hover:border-ssgmce-orange'
                    : 'bg-white border-gray-200 hover:border-ssgmce-blue'
                }`}
              >
                <div className={`p-3 rounded-lg shrink-0 ${report.latest ? 'bg-ssgmce-orange/10' : 'bg-red-50'}`}>
                  <FaFilePdf className={`text-2xl ${report.latest ? 'text-ssgmce-orange' : 'text-red-500'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 text-lg">Session {report.year}</h3>
                    {report.latest && (
                      <span className="text-xs bg-ssgmce-orange text-white px-2 py-0.5 rounded-full font-semibold">Latest</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">Annual Report • {report.size}</p>
                </div>
                <FaDownload className="text-gray-400 group-hover:text-ssgmce-blue transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>Note:</strong> Some reports may be large in size. Please ensure a stable internet connection before downloading.
        </div>
      </div>
    </GenericPage>
  );
};

export default AnnualReports;
