import React, { useState } from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaFilePdf, FaCheckCircle, FaSpinner, FaPaperPlane } from 'react-icons/fa';

const enrollmentSummary = [
  { dept: 'Electrical Engineering (Electronics and Power)', seats: 20, registered: 11 },
  { dept: 'Electronics and Telecommunication Engineering', seats: 20, registered: 9 },
  { dept: 'Mechanical Engineering', seats: 20, registered: 8 },
  { dept: 'Computer Science and Engineering', seats: 5, registered: 5 },
  { dept: 'Master in Business Administration', seats: 4, registered: 3 },
];

const departments = [
  {
    name: 'Electrical Engineering',
    shortName: 'EE',
    color: 'bg-amber-50 border border-amber-200',
    scholars: [
      { sr: 1, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. P. R. Bharambe', regNo: 'SGBAU/Ph.D./Electrical Engg./91/2020', date: '01/09/2019', topic: 'Development of New Algorithm for Discrimination Between Inrush Current and Fault Current of the Transformer Using Soft Computing Techniques', status: 'Pursuing' },
      { sr: 2, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. G. N. Bonde', regNo: 'SGBAU/Ph.D./Electrical Engg./1193/2022', date: '01/09/2020', topic: 'Detection and Classification of Underlying Causes of Power Quality Disturbances Using Signal Processing and Soft Computing Technique', status: 'Pursuing' },
      { sr: 3, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. P. R. Dhabe', regNo: 'SGBAU/Ph.D./Electrical Engg./1196/2022', date: '01/09/2021', topic: 'Development of Improved Algorithm for Battery Management System of Electric Vehicle', status: 'Pursuing' },
      { sr: 4, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. T. M. Dhande', regNo: 'SGBAU/Ph.D./Electrical Engg./93/2020', date: '01/09/2019', topic: 'Optimal Placement of Battery Energy Storage System in Distribution Network for Improvement of Reliability and Power Quality', status: 'Pursuing' },
      { sr: 5, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. T. S. Pinjari', regNo: 'SGBAU/Ph.D./Electrical Engg./1194/2022', date: '01/09/2020', topic: 'Impact Assessment of Electric Vehicle Charging on Distribution Network', status: 'Pursuing' },
      { sr: 6, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. R. S. Kankale', regNo: 'SGBAU/Ph.D./Electrical Engg./94/2020', date: '01/09/2019', topic: 'Detection and Classification of Power Quality Disturbances in Emerging Power System with Distributed Generation', status: 'Completed' },
      { sr: 7, supervisor: 'Dr. S. R. Paraskar', scholar: 'Mr. K. N. Sawalakhe', regNo: 'SGBAU/Ph.D./Electrical Engg./1195/2022', date: '01/09/2021', topic: 'Design and Development of Improved Controller for CUK Converter', status: 'Pursuing' },
      { sr: 8, supervisor: 'Dr. A. U. Jawadekar', scholar: 'Mr. M. R. Chavan', regNo: 'SGBAU/Ph.D./Electrical Engg./92/2020', date: '01/09/2019', topic: 'Induction Motor Fault Diagnosis Using Signal Processing and Soft Computing Techniques', status: 'Pursuing' },
      { sr: 9, supervisor: 'Dr. A. U. Jawadekar', scholar: 'Mr. G. G. Akotkar', regNo: 'SGBAU/Ph.D./Electrical Engg./1420/2022', date: '01/09/2020', topic: 'Fault Diagnosis of Power Transformer Using Machine Learning Techniques', status: 'Pursuing' },
      { sr: 10, supervisor: 'Dr. A. U. Jawadekar', scholar: 'Mr. M. A. Bagde', regNo: 'SGBAU/Ph.D./Electrical Engg./1421/2022', date: '01/09/2021', topic: 'Development of Different Control Strategies for Hybrid Energy Storage Systems in Electric Vehicles', status: 'Pursuing' },
      { sr: 11, supervisor: 'Dr. A. U. Jawadekar', scholar: 'Ms. Samiksha Shahade', regNo: 'SGBAU/Ph.D./Elect Engg./2407/2023', date: '01/09/2022', topic: 'Machine Learning Based Islanding Detection for Distributed Generation Systems', status: 'Pursuing' },
    ],
  },
  {
    name: 'Electronics & Telecommunication Engineering',
    shortName: 'E&TC',
    color: 'bg-emerald-50 border border-emerald-200',
    scholars: [
      { sr: 1, supervisor: 'Dr. M. N. Tibdewal', scholar: 'Mr. N. B. Bhawarkar', regNo: 'SGBAU/Ph.D./Etc. Engg./960/2021', date: '01/09/2019', topic: 'Design and Development IoT Based Smart Farm – Data Collection Using WSN', status: 'Pursuing' },
      { sr: 2, supervisor: 'Dr. M. N. Tibdewal', scholar: 'Mr. C. K. Beral', regNo: 'SGBAU/Ph.D./Elec & Tele. Engg./3122/2023', date: '01/09/2022', topic: 'Priority Based Congestion Controlling Mechanism for Wireless Sensor Network to Healthcare System', status: 'Pursuing' },
      { sr: 3, supervisor: 'Dr. K. B. Khanchandani', scholar: 'Mr. V. P. Patil', regNo: 'SGBAU/Ph.D./Etc. Engg./957/2021', date: '01/09/2019', topic: 'Design Development and Performance Evaluation of Algorithms for Prediction and Diagnosis of Cardiovascular Diseases', status: 'Pursuing' },
      { sr: 4, supervisor: 'Dr. K. B. Khanchandani', scholar: 'Mr. Swapnil Badar', regNo: 'SGBAU/Ph.D./Etc. Engg./958/2021', date: '01/09/2019', topic: 'Design, Development and Performance Evaluation of Polar Code Decoder for Wireless Applications', status: 'Thesis Submitted' },
      { sr: 5, supervisor: 'Dr. R. S. Dhekekar', scholar: 'Mr. G. S. Khedkar', regNo: 'SGBAU/Ph.D./Electro. Engg./1945/2022', date: '01/09/2020', topic: 'Development and Analysis of AI Control Techniques for Power Converters', status: 'Pursuing' },
      { sr: 6, supervisor: 'Dr. R. S. Dhekekar', scholar: 'Mr. K. T. Kahar', regNo: 'SGBAU/Ph.D./Etc. Engg./959/2021', date: '01/09/2019', topic: 'Design Performance Optimization of Micro Electro Mechanical System (MEMS) Based Energy Scavenger for Low Power Applications', status: 'Completed' },
      { sr: 7, supervisor: 'Dr. S. B. Patil', scholar: 'Mr. P. D. Kale', regNo: 'SGBAU/Ph.D./Etc. Engg./961/2021', date: '01/09/2019', topic: 'Design, Development and Performance Analysis of Multiband Microstrip Planar Patch Antenna (MMPPA) for Various Wireless Applications', status: 'Pursuing' },
      { sr: 8, supervisor: 'Dr. D. D. Nawgaje', scholar: 'Mr. R. G. Mundada', regNo: 'SGBAU/Ph.D./Electro. Engg./1946/2022', date: '01/09/2020', topic: 'Diagnosis of Ocular Diseases by Using Deep Learning Algorithms', status: 'Thesis Submitted' },
      { sr: 9, supervisor: 'Dr. D. P. Tulaskar', scholar: 'Mr. Shashank P. Zade', regNo: 'SGBAU/Ph.D./Elect. & Tele Commu. Engg./3612/2024', date: '01/09/2023', topic: 'Design and Optimization of Low Noise Amplifier for Multistandard Receivers', status: 'Pursuing' },
    ],
  },
  {
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    color: 'bg-rose-50 border border-rose-200',
    scholars: [
      { sr: 1, supervisor: 'Dr. S. S. Deshmukh', scholar: 'Mr. Nitin B. Borkar', regNo: 'SGBAU/Ph.D./Mech. Engg./765/2022', date: '01/09/2022', topic: 'Qualitative Analysis and Optimization of Friction Stir Welding of Aluminium Alloys', status: 'Pursuing (Re-registration)' },
      { sr: 2, supervisor: 'Dr. S. P. Trikal', scholar: 'Mr. K. D. Gadgil', regNo: 'SGBAU/Ph.D./Mech. Engg./109/2020', date: '01/09/2019', topic: 'Experimentation and Simulation of Earthen Tubes for Heat Transfer Optimization Using Different Dimple Geometries', status: 'Pursuing' },
      { sr: 3, supervisor: 'Dr. S. P. Trikal', scholar: 'Mr. A. S. Bharule', regNo: 'SGBAU/Ph.D./Mech. Engg./1932/2022', date: '01/09/2020', topic: 'Implementation of Creative Problem-Solving Techniques to Overcome Complex Design Situations in Additive Manufacturing System', status: 'Pursuing' },
      { sr: 4, supervisor: 'Dr. S. P. Trikal', scholar: 'Mr. Nitin Metange', regNo: 'SGBAU/Ph.D./MECH/7337/2015', date: '15/01/2015', topic: 'Design and Development of Rack and Pinion Panatory Mechanism to Improve Motion Transfer Efficiency', status: 'Pursuing (Re-registration)' },
      { sr: 5, supervisor: 'Dr. S. P. Trikal', scholar: 'Mr. Y. J. Biyani', regNo: 'SGBAU/Ph.D./Mech. Engg./2122/2023', date: '01/09/2022', topic: 'Design and Development of Low-Cost Air Conditioning for Agro Based Industries', status: 'Pursuing' },
      { sr: 6, supervisor: 'Dr. S. P. Trikal', scholar: 'Mr. C. V. Patil', regNo: 'SGBAU/Ph.D./Mech. Engg./3251/2024', date: '01/09/2023', topic: 'Estimation of Optimum Machining Parameter Using Artificial Intelligence Algorithm', status: 'Pursuing' },
      { sr: 7, supervisor: 'Dr. A. M. Mahalle', scholar: 'Mr. A. M. Taley', regNo: '—', date: '—', topic: 'Augmentation of Performance of Solar Power Air Conditioning System Using Porous Type Solar Air Heater', status: 'Pursuing' },
      { sr: 8, supervisor: 'Dr. Vivek Sunnapwar', scholar: 'Mr. Santosh Wankhade', regNo: '—', date: '—', topic: 'A Study and Analysis of Thermal and Electrical Properties of Alumina: Investigation of Improvement in Functionality of Some Products by Using Nanoparticles', status: 'Pursuing' },
    ],
  },
  {
    name: 'Computer Science and Engineering',
    shortName: 'CSE',
    color: 'bg-sky-50 border border-sky-200',
    scholars: [
      { sr: 1, supervisor: 'Dr. N. M. Kandoi', scholar: 'Mr. A. G. Sharma', regNo: 'SGBAU/Ph.D./Comp Sci & Engg./2106/2022', date: '01/09/2021', topic: 'Design and Development of Lung Cancer Prediction Model Using Deep Learning', status: 'Pursuing' },
      { sr: 2, supervisor: 'Dr. N. M. Kandoi', scholar: 'Ms. P. V. Kale', regNo: 'SGBAU/Ph.D./Comp Sci & Engg./2105/2022', date: '01/09/2021', topic: 'Design and Development of Adaptive Liver Tumour Detection System Using Machine Learning', status: 'Pursuing' },
      { sr: 3, supervisor: 'Dr. N. M. Kandoi', scholar: 'Mr. V. S. Mahalle', regNo: 'SGBAU/Ph.D./Comp Sci & Engg./2107/2022', date: '01/09/2021', topic: 'Design and Development of Interactive Content Aware Image Retrieval System Based on Feature Extraction Using Machine Learning Approach', status: 'Pursuing' },
      { sr: 4, supervisor: 'Dr. N. M. Kandoi', scholar: 'Mr. F. I. Khandwani', regNo: 'SGBAU/Ph.D./Comp Sci & Engg./2892/2023', date: '01/09/2022', topic: 'Design and Implementation of a Food Recommendation System for Preschoolers Based on a Data Mining Approach', status: 'Pursuing' },
      { sr: 5, supervisor: 'Dr. N. M. Kandoi', scholar: 'Mr. S. S. Muddalkar', regNo: 'SGBAU/Ph.D./Computer Sci & Engg./2891/2023', date: '01/09/2022', topic: 'Design and Development of a Diet Planner to Improve Fertility Health Factors in Males Using Machine Learning', status: 'Pursuing' },
    ],
  },
  {
    name: 'Master in Business Administration',
    shortName: 'MBA',
    color: 'bg-violet-50 border border-violet-200',
    scholars: [
      { sr: 1, supervisor: 'Dr. L. B. Deshmukh', scholar: 'Mr. V. K. Sali', regNo: 'SGBAU/Ph.D./Busi. Mgt./3316/2024', date: '01/09/2023', topic: 'A Study of Effects of Leadership Style on Organizational Performance in Small Scale Industries of Vidarbha', status: 'Pursuing' },
      { sr: 2, supervisor: 'Dr. L. B. Deshmukh', scholar: 'Mr. V. J. Mihani', regNo: 'SGBAU/Ph.D./Busi. Mgt./3317/2024', date: '01/09/2023', topic: 'Empowering Rural Natives of India: A Comprehensive Study of Cattle Farming Entrepreneurship Module for Socio-Economic Development of Vidarbha Region', status: 'Pursuing' },
      { sr: 3, supervisor: 'Dr. L. B. Deshmukh', scholar: 'Ms. Anagha N. Tayade', regNo: 'SGBAU/Ph.D./Busi. Mgt./3315/2024', date: '01/09/2023', topic: 'Emotional Intelligence in Engineering and Commerce Students - "A Comparative Study of Khandesh Region"', status: 'Pursuing' },
    ],
  },
];

const totalScholars = enrollmentSummary.reduce((s, d) => s + d.registered, 0);
const totalSeats = enrollmentSummary.reduce((s, d) => s + d.seats, 0);

const statusBadge = (status) => {
  if (status === 'Completed') return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700"><FaCheckCircle /> Completed</span>;
  if (status === 'Thesis Submitted') return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700"><FaPaperPlane /> Thesis Submitted</span>;
  return <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700"><FaSpinner /> {status}</span>;
};

const PhdCentre = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeDept = departments[activeTab];

  return (
    <GenericPage title="Research Centre for Ph.D. Work" sidebar={<ResearchSidebar />}>
      {/* Intro */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Shri Sant Gajanan Maharaj College of Engineering, Shegaon is a recognized research centre affiliated with
        Sant Gadge Baba Amravati University (SGBAU). The institute facilitates Ph.D. programmes across multiple
        engineering and management disciplines, with experienced supervisors guiding scholars in cutting‑edge research areas.
      </p>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-xl p-5 text-center">
          <FaUniversity className="mx-auto text-2xl mb-2 text-ssgmce-blue" />
          <p className="text-3xl font-bold text-gray-800">{enrollmentSummary.length}</p>
          <p className="text-sm text-gray-500">Departments</p>
        </div>
        <div className="bg-ssgmce-saffron/5 border border-ssgmce-saffron/20 rounded-xl p-5 text-center">
          <FaUserGraduate className="mx-auto text-2xl mb-2 text-ssgmce-saffron" />
          <p className="text-3xl font-bold text-gray-800">{totalScholars}</p>
          <p className="text-sm text-gray-500">Registered Scholars</p>
        </div>
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-xl p-5 text-center">
          <FaChalkboardTeacher className="mx-auto text-2xl mb-2 text-ssgmce-blue" />
          <p className="text-3xl font-bold text-gray-800">{totalSeats}</p>
          <p className="text-sm text-gray-500">Total Seats</p>
        </div>
      </div>

      {/* Enrollment Summary Table */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <FaUniversity className="text-ssgmce-saffron" /> Ph.D. Enrollment Summary
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ssgmce-blue text-white">
                <th className="px-4 py-3 text-left font-semibold">Sr.</th>
                <th className="px-4 py-3 text-left font-semibold">Department</th>
                <th className="px-4 py-3 text-center font-semibold">Total Seats</th>
                <th className="px-4 py-3 text-center font-semibold">Registered Scholars</th>
                <th className="px-4 py-3 text-center font-semibold">Vacancy</th>
              </tr>
            </thead>
            <tbody>
              {enrollmentSummary.map((d, i) => (
                <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-gray-700">{d.dept}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{d.seats}</td>
                  <td className="px-4 py-3 text-center font-medium text-blue-600">{d.registered}</td>
                  <td className="px-4 py-3 text-center font-medium text-emerald-600">{d.seats - d.registered}</td>
                </tr>
              ))}
              <tr className="bg-ssgmce-blue/10 text-ssgmce-blue font-semibold border-t border-gray-200">
                <td className="px-4 py-3" colSpan={2}>Total</td>
                <td className="px-4 py-3 text-center">{totalSeats}</td>
                <td className="px-4 py-3 text-center text-blue-600">{totalScholars}</td>
                <td className="px-4 py-3 text-center text-emerald-600">{totalSeats - totalScholars}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PDF Download */}
      <div className="mb-10">
        <a
          href="https://www.ssgmce.ac.in/uploads/pdf/PhD%20Enrollment%20in%20Research%20Centres-Updated-Aug-24.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-ssgmce-saffron text-white hover:bg-ssgmce-saffron/90 rounded-lg transition font-medium"
        >
          <FaFilePdf className="text-lg" />
          Download Detailed PhD Enrollment PDF
        </a>
      </div>

      {/* Department‑wise Scholar Details */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
          <FaUserGraduate className="text-ssgmce-saffron" /> Department‑wise Research Scholars
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {departments.map((dept, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                activeTab === i
                  ? 'bg-ssgmce-blue text-white border-ssgmce-blue'
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {dept.shortName} ({dept.scholars.length})
            </button>
          ))}
        </div>

        {/* Active Department Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className={`${activeDept.color} px-5 py-3 font-semibold text-gray-700 text-lg`}>
            {activeDept.name}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-ssgmce-blue text-white border-b border-gray-200">
                  <th className="px-3 py-3 text-left w-10 font-semibold text-xs uppercase tracking-wide">Sr.</th>
                  <th className="px-3 py-3 text-left font-semibold text-xs uppercase tracking-wide">Supervisor</th>
                  <th className="px-3 py-3 text-left font-semibold text-xs uppercase tracking-wide">Research Scholar</th>
                  <th className="px-3 py-3 text-left font-semibold text-xs uppercase tracking-wide">Registration No.</th>
                  <th className="px-3 py-3 text-left min-w-[250px] font-semibold text-xs uppercase tracking-wide">Research Topic</th>
                  <th className="px-3 py-3 text-center font-semibold text-xs uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody>
                {activeDept.scholars.map((s, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'} hover:bg-blue-50/50 transition`}>
                    <td className="px-3 py-3 font-medium text-gray-500">{s.sr}</td>
                    <td className="px-3 py-3 font-medium text-gray-800 whitespace-nowrap">{s.supervisor}</td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">{s.scholar}</td>
                    <td className="px-3 py-3 text-gray-500 text-xs">{s.regNo}<br /><span className="text-gray-400">w.e.f. {s.date}</span></td>
                    <td className="px-3 py-3 text-gray-700 leading-snug">{s.topic}</td>
                    <td className="px-3 py-3 text-center">{statusBadge(s.status)}</td>
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

export default PhdCentre;
