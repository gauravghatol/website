import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaShieldAlt, FaCertificate, FaFileAlt, FaSearch, FaExternalLinkAlt, FaFilePdf, FaUniversity, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';

/* ─── Institute-Level Patents (from patent.php) ─── */
const institutePatents = [
  { sr: 1, title: 'Endodontic file to avoid fracture in root canal therapy using machine learning', appNo: '20221003764', date: '23/01/2022', status: 'Published' },
  { sr: 2, title: 'A Solar Operable System for Cooking and Water Purification', appNo: '202021001375', date: '13/01/2020', status: 'Published' },
  { sr: 3, title: 'An Internet of Things (IoT) Autonomous Based Sewer Pipe Cleaning Robot', appNo: '201721026894', date: '28/07/2017', status: 'Awaiting Examination' },
  { sr: 4, title: 'Automated Vehicle Verification & Monitoring System', appNo: '201621041558', date: '05/12/2016', status: 'Under Examination' },
  { sr: 5, title: 'Hybrid Solar Energy Storage Device', appNo: '201621000237', date: '05/01/2016', status: 'Published' },
  { sr: 6, title: 'An optical feedback system for halbach array motor', appNo: '129/MUM/2015', date: '13/01/2015', status: 'Published' },
  { sr: 7, title: 'Composition for cataract and method of preparation', appNo: '2810/MUM/2010', date: '11/10/2010', status: 'Published' },
  { sr: 8, title: 'A Polyhouse', appNo: '1963/MUM/2010 (325321)', date: '09/07/2010', status: 'Granted' },
  { sr: 9, title: 'Phaco Tip for/and phaco emulsification technique', appNo: '1965/MUM/2010', date: '09/07/2010', status: 'Published' },
  { sr: 10, title: 'Multipurpose and Multifunctional Stool', appNo: '1964/MUM/2010', date: '09/07/2010', status: 'Published' },
  { sr: 11, title: 'Intelligent Electricity Metering System', appNo: '1966/MUM/2010', date: '09/07/2010', status: 'Under Examination' },
  { sr: 12, title: 'A Solar lantern with an improved power control circuit', appNo: '1270/MUM/2009', date: '20/05/2009', status: 'Refused' },
  { sr: 13, title: 'A cost-effective process for Bio-diesel extraction', appNo: '25/MUM/2009', date: '05/01/2009', status: 'Under Examination' },
  { sr: 14, title: 'An improved solar power street lighting system', appNo: '416/MUM/2008', date: '29/02/2008', status: 'Refused' },
  { sr: 15, title: 'All in one shaving tool', appNo: '415/MUM/2008 (261018)', date: '29/02/2008', status: 'Granted' },
  { sr: 16, title: 'An Improved Lead Acid battery for solar power system', appNo: '2275/MUM/2007 (259072)', date: '19/11/2007', status: 'Granted' },
  { sr: 17, title: 'A static cooling device for vehicle interior', appNo: '2274/MUM/2007', date: '19/11/2007', status: 'Under Examination' },
  { sr: 18, title: 'A solar based alternating current generator and booster', appNo: '2273/MUM/2007', date: '19/11/2007', status: 'Under Examination' },
  { sr: 19, title: 'Printed circuit board based single phase power transformer', appNo: '2272/MUM/2007', date: '19/11/2007', status: 'Under Examination' },
  { sr: 20, title: 'A Bio-gas generation system', appNo: '2271/MUM/2007', date: '19/11/2007', status: 'Under Examination' },
  { sr: 21, title: 'Stand alone on line production efficiency monitor using system on-chip with in-built serially arranged reconfiguration measurement device', appNo: '2270/MUM/2007', date: '19/11/2007', status: 'Under Examination' },
  { sr: 22, title: 'A Pneumatic Air Rotor Driven Water Pump', appNo: '2269/MUM/2007 (256824)', date: '19/11/2007', status: 'Granted' },
  { sr: 23, title: 'A Power system for current balancing under unbalanced conditions', appNo: '1927/MUM/2007', date: '28/09/2007', status: 'Under Examination' },
];

/* ─── Department-wise Patent & Copyright Data ─── */
const departmentData = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    short: 'CSE',
    accent: 'blue',
    route: '/departments/cse',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/cse_faculty/Patent-Publications-Format-For-Website_2018-19.pdf' },
    ],
    patents: [
      { year: '2024-25', inventor: 'Dr. Jaikumar M. Patil', appNo: '202421090465A', title: 'An advanced vehicle safety system for driver authentication, alcohol detection, and centralised access control', status: 'Published' },
      { year: '2024-25', inventor: 'Dr. Jaikumar M. Patil, Prof. Shrijeet Pagrut', appNo: '202421091222A', title: 'A Real Time Medical Inventory and Healthcare Management System', status: 'Published' },
      { year: '2024-25', inventor: 'Prof. Vishwanath S. Mahalle', appNo: '202421039794A', title: 'System and Methods of Plant Disease Detection and Content Based Image Retrieval', status: 'Published' },
      { year: '2024-25', inventor: 'Prof. Shrijeet Pagrut', appNo: '202421043408A', title: 'A Data Analytics Configuration for an Unmanned Aerial Vehicle', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. Jaikumar M. Patil', appNo: '202321060974', title: 'Intelligent Traffic Management System for Smart Cities Using IoT and Machine Learning Technologies', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. Jaikumar M. Patil', appNo: '202321062076', title: 'Cyber Security Based Risk Assessment and Management System Using AI and ML for Enterprise Networks', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. Jaikumar M. Patil', appNo: '202311069353', title: 'A Security Patrol All Terrain Robot', status: 'Published' },
      { year: '2023-24', inventor: 'Prof. C. M. Mankar', appNo: '202321032278', title: 'A MRI Tumour Image Classification System Based on Identification of Potential Feature', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. P. K. Bharne', appNo: '202321036087', title: 'An IoT Based Baby Monitoring System for Smart Cradles', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. P. V. Deshmukh', appNo: '202321055338', title: 'A Effective Approach for Genuineness of Views Using Sentiment Analysis', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. P. V. Deshmukh', appNo: '202321048240', title: 'A Sentiment Analysis of Marathi-English Code-Mixed Data', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. P. V. Deshmukh', appNo: '202421005603', title: 'Intelligent Islanding Detection System for Distributed Generation Using Machine Learning', status: 'Published' },
    ],
    copyrights: [
      { year: '2024-25', faculty: 'Prof. Shrijeet Pagrut', title: 'Design and Development of Web Portal of Drone Club, SSGMCE Shegaon', status: 'Published' },
      { year: '2023-24', faculty: 'Prof. Shrijeet B. Pagrut', title: 'Amazing Relation Between Human and Computer', status: 'Published' },
      { year: '2023-24', faculty: 'Dr. Priyanka V. Deshmukh', title: 'Machine Learning-Powered Islanding Detection for Enhanced Grid Resilience', status: 'Published' },
      { year: '2023-24', faculty: 'Dr. Priyanka V. Deshmukh', title: 'Sentiment Analysis of Marathi-English Code-Mixed Data', status: 'Published' },
    ],
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    short: 'EE',
    accent: 'amber',
    route: '/departments/electrical',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/ELECT_Publication_AY_2024_25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/ELECT_Publication%20detail_23-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/elect_faculty/Publication%20detail%202018-19.pdf' },
    ],
    patents: [
      { year: '2024-25', inventor: 'Dr. S.R. Paraskar, Dr. S.S. Jadhao, Dr. K.A. Dongare', appNo: '20252103032174A', title: 'A Fault Diagnosis System for Electric Vehicle Motors', status: 'Published' },
      { year: '2024-25', inventor: 'Dr. S.S. Jadhao, Dr. K.A. Dongare', appNo: 'Design No: 446407-001', title: 'AI-Based Device for Advanced Threat Protection and Cyber Security Monitoring', status: 'Published' },
      { year: '2023-24', inventor: 'S.K. Shahade, Dr. A.U. Jawadekar, Mr. U.A. Jawadekar, Dr. P.V. Deshmukh', appNo: '202421005603A', title: 'Intelligent Islanding Detection System for Distributed Generation Using Machine Learning', status: 'Published' },
    ],
    copyrights: [
      { year: '2023-24', faculty: 'S.K. Shahade, Dr. A.U. Jawadekar, Mr. U.A. Jawadekar, Dr. P.V. Deshmukh', title: 'Machine Learning-Powered Islanding Detection for Enhanced Grid Resilience', status: 'Published' },
      { year: '2023-24', faculty: 'Mr. V. S. Karale, Dr. S. R. Paraskar', title: 'Smart LPG Gas Stove', status: 'Submitted' },
    ],
  },
  {
    id: 'entc',
    name: 'Electronics & Telecommunication Engineering',
    short: 'E&TC',
    accent: 'emerald',
    route: '/departments/entc',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_Patent_publication%20data_24_25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2023-24%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2022-23%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2021-22%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2020-21%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2019-20%20Patent%20and%20Publication%20Data.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/extc_faculty/EXTC_2018-19%20Patent%20and%20Publication%20Data.pdf' },
    ],
    patents: [],
    copyrights: [],
  },
  {
    id: 'it',
    name: 'Information Technology',
    short: 'IT',
    accent: 'teal',
    route: '/departments/it',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/IT_24-25Publications.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/23-24-0-19-11_Patent-Publications-Format-For-Website.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/22-23-2-25-4_Patent-Publications-Format-For-Website.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/21-22-24-6_Patent-Publications-Format-For-Website.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/20-21-2-7-3_Patent-Publications-Format-For-Website.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/it_faculty/19-20-14-5_Patent-Publications-Format-For-Website.pdf' },
    ],
    patents: [
      { year: '2024-25', inventor: 'Dr. A.S. Manekar', appNo: '202541007684', title: 'Artificial Intelligence Based Smart System for Real Time Sleep Apnea Detection Using Wearable IoT Devices and Deep Learning Algorithm', status: 'Published' },
      { year: '2024-25', inventor: 'Prof. S.N. Khandare', appNo: '428459-001', title: 'Rechargeable Early Warning Natural Disaster Alarm Device', status: 'Published' },
    ],
    copyrights: [],
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    short: 'MECH',
    accent: 'rose',
    route: '/departments/mechanical',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202022-23.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_Publication%20detail_20-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202019-20.pdf' },
      { year: '2018-19', pdfUrl: 'https://www.ssgmce.ac.in/images/mech_faculty/MECH_publication%202018-19.pdf' },
    ],
    patents: [
      { year: '2023-24', inventor: 'Prof. P. A. Dalke', appNo: '20222100376', title: 'Endodontic File to Avoid Fracture in Root Canal during Root Canal Therapy Using Machine Learning', status: 'Published' },
      { year: '2023-24', inventor: 'Dr. V. K. Thute', appNo: 'TEMP/E-1/38041/2024-MUM', title: 'A Seeding Device for an Unmanned Arial Vehicle', status: 'Submitted' },
      { year: '2023-24', inventor: 'Dr. S. B. Somani', appNo: '-', title: 'Alkali Activated Soil Stabilization Composition', status: 'Submitted' },
    ],
    copyrights: [
      { year: '2023-24', faculty: 'Dr. S. P. Trikal', title: 'Tractor Based Battery Operated Cost Effective Spraying System', status: 'Awarded (L-141157/2024)' },
      { year: '2023-24', faculty: 'Prof. P. A. Dalke', title: 'NACA-0008 Airfoil: CFD Simulation with ANSYS Fluent', status: 'Awarded (11329/2024-CO/L)' },
    ],
  },
  {
    id: 'mba',
    name: 'MBA (Business Administration & Research)',
    short: 'MBA',
    accent: 'violet',
    route: '/departments/mba',
    years: [
      { year: '2024-25', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/Publication%20and%20patents%20data%2024-25.pdf' },
      { year: '2023-24', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/MBA_Publication%20and%20patents%20data%2023-24.pdf' },
      { year: '2022-23', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/Patent-Copyrights_MBA.pdf' },
      { year: '2021-22', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2021-22.pdf' },
      { year: '2020-21', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2020-21.pdf' },
      { year: '2019-20', pdfUrl: 'https://www.ssgmce.ac.in/images/mba_faculty/publication_2019-20.pdf' },
    ],
    patents: [],
    copyrights: [
      { year: '2023-24', faculty: 'Dr. Bilal T. Husain', title: 'Volume and Volatility Analysis for Reliance', status: 'Awarded (139597/2023)' },
    ],
  },
];

/* ─── Accent color maps ─── */
const accentMap = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    pill: 'bg-blue-100 text-blue-700',    badge: 'bg-blue-600' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   pill: 'bg-amber-100 text-amber-700',   badge: 'bg-amber-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-700', badge: 'bg-emerald-600' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    pill: 'bg-teal-100 text-teal-700',    badge: 'bg-teal-600' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    pill: 'bg-rose-100 text-rose-700',    badge: 'bg-rose-600' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  pill: 'bg-violet-100 text-violet-700',  badge: 'bg-violet-600' },
};

const statusIcon = (status) => {
  if (status === 'Granted' || status.startsWith('Awarded')) return <FaCheckCircle className="text-green-500 text-xs" />;
  if (status === 'Refused') return <FaTimesCircle className="text-red-400 text-xs" />;
  return <FaClock className="text-amber-500 text-xs" />;
};

const statusBadge = (status) => {
  let cls = 'bg-amber-50 text-amber-700 border-amber-200';
  if (status === 'Granted' || status.startsWith('Awarded')) cls = 'bg-green-50 text-green-700 border-green-200';
  else if (status === 'Refused') cls = 'bg-red-50 text-red-600 border-red-200';
  else if (status === 'Published') cls = 'bg-blue-50 text-blue-700 border-blue-200';
  else if (status === 'Submitted') cls = 'bg-slate-50 text-slate-600 border-slate-200';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>
      {statusIcon(status)} {status}
    </span>
  );
};

const totalPatents = departmentData.reduce((s, d) => s + d.patents.length, 0);
const totalCopyrights = departmentData.reduce((s, d) => s + d.copyrights.length, 0);
const grantedCount = institutePatents.filter(p => p.status === 'Granted').length;

const IPR = () => {
  const [activeTab, setActiveTab] = useState('institute');
  const [activeDept, setActiveDept] = useState('cse');
  const [searchTerm, setSearchTerm] = useState('');

  const dept = departmentData.find(d => d.id === activeDept);
  const colors = dept ? accentMap[dept.accent] : accentMap.blue;

  /* Filter institute patents */
  const filteredInstPatents = institutePatents.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.appNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* Filter dept patents */
  const filteredDeptPatents = dept ? dept.patents.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.inventor.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  const filteredDeptCopyrights = dept ? dept.copyrights.filter(c =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.faculty.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <GenericPage title="IPR (Patents + Copyrights)" sidebar={<ResearchSidebar />}>
      {/* ── Stats Row ─────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-xl p-4 text-center">
          <FaShieldAlt className="text-ssgmce-blue text-2xl mx-auto mb-1" />
          <div className="text-2xl font-bold text-ssgmce-blue">{institutePatents.length}</div>
          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Institute Patents</div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <FaCheckCircle className="text-green-600 text-2xl mx-auto mb-1" />
          <div className="text-2xl font-bold text-green-800">{grantedCount}</div>
          <div className="text-xs uppercase tracking-wide text-green-500 font-semibold">Patents Granted</div>
        </div>
        <div className="bg-ssgmce-saffron/5 border border-ssgmce-saffron/20 rounded-xl p-4 text-center">
          <FaCertificate className="text-ssgmce-saffron text-2xl mx-auto mb-1" />
          <div className="text-2xl font-bold text-ssgmce-saffron">{totalPatents + totalCopyrights}</div>
          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Dept. Patents & Copyrights</div>
        </div>
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-xl p-4 text-center">
          <FaUniversity className="text-ssgmce-blue text-2xl mx-auto mb-1" />
          <div className="text-2xl font-bold text-ssgmce-blue">{departmentData.length}</div>
          <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold">Departments</div>
        </div>
      </div>

      {/* ── Tab Switch ───── */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setActiveTab('institute'); setSearchTerm(''); }}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'institute'
              ? 'bg-ssgmce-blue text-white shadow'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FaShieldAlt className="inline mr-1.5 -mt-0.5" /> Institute Patents
        </button>
        <button
          onClick={() => { setActiveTab('department'); setSearchTerm(''); }}
          className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
            activeTab === 'department'
              ? 'bg-ssgmce-blue text-white shadow'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <FaCertificate className="inline mr-1.5 -mt-0.5" /> Department-wise IPR
        </button>
      </div>

      {/* ── Search Bar ───── */}
      <div className="relative mb-6">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder={activeTab === 'institute' ? 'Search patents by title, application no., or status...' : 'Search by title, inventor, or faculty...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-1 focus:ring-slate-300 outline-none text-sm bg-white"
        />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* ── INSTITUTE PATENTS TAB ──────────────── */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'institute' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <div className="bg-ssgmce-blue/5 px-5 py-3 border-b border-ssgmce-blue/20">
            <h3 className="text-sm font-bold text-ssgmce-blue uppercase tracking-wide">
              Institute Patent Portfolio — {filteredInstPatents.length} of {institutePatents.length} Patents
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ssgmce-blue text-white uppercase text-xs tracking-wider">
                  <th className="px-4 py-3 text-left font-semibold w-10">#</th>
                  <th className="px-4 py-3 text-left font-semibold">Title of Invention</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Application No.</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Filing Date</th>
                  <th className="px-4 py-3 text-center font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredInstPatents.map((p, i) => (
                  <tr key={p.sr} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}>
                    <td className="px-4 py-3 text-slate-400 font-medium">{p.sr}</td>
                    <td className="px-4 py-3 text-slate-800 font-medium leading-snug">{p.title}</td>
                    <td className="px-4 py-3 text-slate-500 font-mono text-xs whitespace-nowrap">{p.appNo}</td>
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{p.date}</td>
                    <td className="px-4 py-3 text-center">{statusBadge(p.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredInstPatents.length === 0 && (
            <div className="text-center py-8 text-slate-400">No patents match your search.</div>
          )}
        </div>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* ── DEPARTMENT IPR TAB ─────────────────── */}
      {/* ═══════════════════════════════════════════ */}
      {activeTab === 'department' && (
        <>
          {/* Department Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {departmentData.map((d) => {
              const c = accentMap[d.accent];
              const isActive = activeDept === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => { setActiveDept(d.id); setSearchTerm(''); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive ? `${c.badge} text-white shadow` : `${c.pill} hover:opacity-80`
                  }`}
                >
                  {d.short}
                </button>
              );
            })}
          </div>

          {dept && (
            <div className="space-y-6">
              {/* Department Header */}
              <div className={`${colors.bg} border ${colors.border} rounded-xl p-5`}>
                <h3 className={`text-lg font-bold ${colors.text}`}>{dept.name}</h3>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
                  <span><FaShieldAlt className="inline mr-1 text-slate-400" /> {dept.patents.length} Patents</span>
                  <span><FaCertificate className="inline mr-1 text-slate-400" /> {dept.copyrights.length} Copyrights</span>
                  <span><FaFilePdf className="inline mr-1 text-slate-400" /> {dept.years.length} Year Reports</span>
                </div>
              </div>

              {/* Patents Table */}
              {(filteredDeptPatents.length > 0 || (searchTerm === '' && dept.patents.length > 0)) && (
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-ssgmce-blue/5 px-5 py-3 border-b border-ssgmce-blue/20 flex items-center gap-2">
                    <FaShieldAlt className={`${colors.text}`} />
                    <h4 className="text-sm font-bold text-ssgmce-blue uppercase tracking-wide">Patent Data</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-ssgmce-blue text-white uppercase text-xs tracking-wider">
                          <th className="px-4 py-3 text-left font-semibold">Year</th>
                          <th className="px-4 py-3 text-left font-semibold">Inventor(s)</th>
                          <th className="px-4 py-3 text-left font-semibold">Title of Invention</th>
                          <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">Application No.</th>
                          <th className="px-4 py-3 text-center font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDeptPatents.map((p, i) => (
                          <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}>
                            <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{p.year}</td>
                            <td className="px-4 py-3 text-slate-700 font-medium">{p.inventor}</td>
                            <td className="px-4 py-3 text-slate-800 leading-snug">{p.title}</td>
                            <td className="px-4 py-3 text-slate-500 font-mono text-xs whitespace-nowrap">{p.appNo}</td>
                            <td className="px-4 py-3 text-center">{statusBadge(p.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {filteredDeptPatents.length === 0 && searchTerm && (
                    <div className="text-center py-6 text-slate-400 text-sm">No patents match your search.</div>
                  )}
                </div>
              )}

              {/* Copyrights Table */}
              {(filteredDeptCopyrights.length > 0 || (searchTerm === '' && dept.copyrights.length > 0)) && (
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-ssgmce-blue/5 px-5 py-3 border-b border-ssgmce-blue/20 flex items-center gap-2">
                    <FaCertificate className={`${colors.text}`} />
                    <h4 className="text-sm font-bold text-ssgmce-blue uppercase tracking-wide">Copyright Data</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-ssgmce-blue text-white uppercase text-xs tracking-wider">
                          <th className="px-4 py-3 text-left font-semibold">Year</th>
                          <th className="px-4 py-3 text-left font-semibold">Faculty</th>
                          <th className="px-4 py-3 text-left font-semibold">Title of Work</th>
                          <th className="px-4 py-3 text-center font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDeptCopyrights.map((c, i) => (
                          <tr key={i} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/30 transition-colors`}>
                            <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{c.year}</td>
                            <td className="px-4 py-3 text-slate-700 font-medium">{c.faculty}</td>
                            <td className="px-4 py-3 text-slate-800 leading-snug">{c.title}</td>
                            <td className="px-4 py-3 text-center">{statusBadge(c.status)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {filteredDeptCopyrights.length === 0 && searchTerm && (
                    <div className="text-center py-6 text-slate-400 text-sm">No copyrights match your search.</div>
                  )}
                </div>
              )}

              {/* No IPR message for E&TC */}
              {dept.patents.length === 0 && dept.copyrights.length === 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center text-slate-500 text-sm">
                  Patent & copyright details for this department are available in the yearly PDF reports below.
                </div>
              )}

              {/* Year-wise PDF Reports */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-ssgmce-blue/5 px-5 py-3 border-b border-ssgmce-blue/20 flex items-center gap-2">
                  <FaFilePdf className="text-red-500" />
                  <h4 className="text-sm font-bold text-ssgmce-blue uppercase tracking-wide">Yearly Detail Reports (PDF)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
                  {dept.years.map((y) => (
                    <a
                      key={y.year}
                      href={y.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} hover:shadow-md transition-all group`}
                    >
                      <FaFileAlt className={`${colors.text} text-lg flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm ${colors.text}`}>{y.year}</div>
                        <div className="text-xs text-slate-500">Patent & Publication Report</div>
                      </div>
                      <FaExternalLinkAlt className="text-slate-300 group-hover:text-slate-500 text-xs flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link to Department Page */}
              <div className="text-center">
                <a
                  href={dept.route}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg border ${colors.border} ${colors.text} hover:${colors.bg} text-sm font-medium transition-all`}
                >
                  View {dept.short} Department <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Footer link to patent.php ── */}
      <div className="mt-8 text-center">
        <a
          href="https://www.ssgmce.ac.in/patent.php"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <FaExternalLinkAlt className="text-xs" /> View on SSGMCE Website
        </a>
      </div>
    </GenericPage>
  );
};

export default IPR;
