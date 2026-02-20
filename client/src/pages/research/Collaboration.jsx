import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';
import { FaHandshake, FaExternalLinkAlt, FaChevronRight, FaSearch, FaBuilding, FaCalendarAlt } from 'react-icons/fa';

const departments = [
  {
    name: 'Computer Science and Engineering',
    shortName: 'CSE',
    route: '/departments/cse',
    accent: 'blue',
    mous: [
      { org: 'Bharat Software Solutions, Pune', date: '05 Apr 2025' },
      { org: 'TruScholar Asset Chain Technilligence Pvt. Ltd., Amravati', date: '05 Apr 2025' },
      { org: 'Pragmatyc Global Pvt. Ltd., Nagpur', date: '05 Apr 2025' },
      { org: 'Intel Unnati', date: '29 Mar 2025' },
      { org: 'J-Navodaya Unnat Bharat', date: '05 Mar 2025' },
      { org: 'Bharat Software Solutions, Pune', date: '21 Dec 2023' },
      { org: 'MITU Skillologies, Pune', date: '21 Dec 2023' },
      { org: 'TrueScholar — Asset Chain Technilligence Pvt. Ltd., Amravati', date: '01 Jun 2022' },
      { org: 'Opine Group, Pune', date: '13 Jul 2019' },
      { org: 'e-Zest Solutions Ltd., Pune', date: '06 Jan 2019' },
      { org: 'IBM India Pvt. Ltd., Pune', date: '19 Jan 2019' },
      { org: 'Pi R Square Digital Solutions Pvt. Ltd., Pune', date: '16 Jul 2018' },
    ],
  },
  {
    name: 'Electrical Engineering',
    shortName: 'EE',
    route: '/departments/electrical',
    accent: 'amber',
    mous: [
      { org: 'I Robots Innovative Solutions, Pune', date: '05 Apr 2025' },
      { org: 'TATA Power Skill Development Institute (TPSDI), Shahad, Mumbai', date: '21 Jun 2024' },
      { org: 'Adani Electricity Mumbai Limited, ADTPS, Dahanu', date: '01 Jun 2024' },
      { org: 'SCR Elektronics, Mumbai', date: '08 Feb 2023' },
      { org: 'Mew Technology, Bengaluru', date: '04 Mar 2024' },
      { org: 'Samarthan System Pvt. Ltd., Pune', date: '10 Jan 2024' },
      { org: 'Mitsubishi Electric India Pvt. Ltd.', date: '06 Jan 2023' },
      { org: 'Adani Electricity Mumbai Limited, ADTPS, Dahanu', date: '12 Feb 2022' },
      { org: 'ISIE India, Noida', date: '18 Jan 2022' },
      { org: 'VI Solutions, Bangalore', date: '28 Jan 2021' },
      { org: 'SCR Elektroniks, Mumbai', date: '08 Feb 2020' },
      { org: 'TPSDI, Shahad, Mumbai', date: '08 Sep 2018' },
    ],
  },
  {
    name: 'Electronics & Telecommunication Engineering',
    shortName: 'E&TC',
    route: '/departments/entc',
    accent: 'emerald',
    mous: [
      { org: 'Adolf Solutions (OPC) Pvt. Ltd.', date: '05 Apr 2025' },
      { org: 'DAccess IT Infra Pvt. Ltd., Pune', date: '05 Apr 2025' },
      { org: 'Iravan Technologies, Pune', date: '05 Apr 2025' },
      { org: 'SSG Embedded Solutions, Nagpur', date: '05 Apr 2025' },
      { org: 'Symbiosis Institute of Technology, Pune', date: '15 Sep 2023' },
      { org: 'SM Technologies Pvt. Ltd.', date: '16 Apr 2022' },
      { org: 'Tor Vergata University of Rome', date: '11 Feb 2020' },
      { org: 'ioCare, Pune', date: '07 Feb 2020' },
      { org: 'SSGM Electronic Solutions Pvt. Ltd., Akola', date: '16 Sep 2019' },
      { org: 'Green Field Control Systems, Gandhinagar, Gujarat', date: '16 Sep 2019' },
      { org: 'Integral Power Solutions Pvt. Ltd., Nashik', date: '02 Aug 2019' },
      { org: 'Scientech Tech Pvt. Ltd., Indore', date: 'Jan 2019' },
      { org: 'V-Chip Technology Pvt. Ltd., Pune', date: '10 Aug 2018' },
      { org: 'Dr. P.D.K.V., Akola', date: '25 Jul 2018' },
    ],
  },
  {
    name: 'Information Technology',
    shortName: 'IT',
    route: '/departments/it',
    accent: 'teal',
    mous: [
      { org: 'Prodevans Technologies Pvt. Ltd., Bengaluru', date: '05 Oct 2023' },
      { org: 'BridgeLabz Solutions Pvt. Ltd., Mumbai', date: '31 Jan 2023' },
      { org: 'Expert Global Solutions Pvt. Ltd., Sambhajinagar', date: '24 Nov 2022' },
      { org: 'Vnurt, Bangalore', date: '19 Jan 2019' },
      { org: 'Renuka Technology, Nagpur', date: '19 Jan 2019' },
      { org: 'Clubix Technology, Nagpur', date: '19 Jan 2019' },
      { org: 'Vidarbha Industry Defence Hub, Mihan, Nagpur', date: '19 Jan 2019' },
      { org: 'JDM Semiconductor, Nagpur', date: '19 Jan 2019' },
      { org: 'Red Hat Academy, Bangalore', date: '11 Jun 2018' },
    ],
  },
  {
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    route: '/departments/mechanical',
    accent: 'rose',
    mous: [
      { org: 'Joshi Jampala Engineering Pvt. Ltd., Satara', date: '05 Mar 2025' },
      { org: 'Endress Hauser, Chhatrapati Sambhajinagar', date: '05 Mar 2025' },
      { org: 'SW System, Pune', date: '05 Mar 2025' },
      { org: 'Tejas Polymer Engineers, Pune', date: '05 Mar 2025' },
      { org: 'Sharv Polyplast Pvt. Ltd., Pune', date: '05 Mar 2025' },
      { org: 'Krishna Vishwa Vidyapeeth (Deemed University), Karad', date: '16 Jan 2024' },
      { org: 'Endress Hauser, Sambhajinagar', date: '31 Mar 2022' },
      { org: 'Tool Tech Toolings Kirdak Auto Com Pvt. Ltd., Sambhajinagar', date: '27 Jul 2022' },
      { org: 'Vinodrai Engg Pvt. Ltd., MIDC, Jalna', date: '16 Mar 2019' },
      { org: 'Mechatol Engg Solutions Pvt. Ltd., Kothrud, Pune', date: '19 Jan 2019' },
      { org: 'Kala Group of Companies, MIDC Chakan, Pune', date: '19 Jan 2019' },
      { org: 'Wadhokar Group of Companies, MIDC Chakan, Pune', date: '19 Jan 2019' },
    ],
  },
  {
    name: 'Master of Business Administration',
    shortName: 'MBA',
    route: '/departments/mba',
    accent: 'violet',
    mous: [
      { org: 'Bajaj Finance Limited and Bajaj Finserv Limited', date: '16 Jun 2025' },
      { org: 'Kalash Seeds Pvt. Ltd., Jalna', date: '04 Jan 2025' },
      { org: 'Saturday Club Global Trust — Research & Education', date: '12 Jan 2024' },
      { org: 'Circular Angel Pvt. Ltd., Mumbai — Research, Education & Consultancy', date: '13 Jan 2024' },
      { org: 'Leben Life Sciences, Akola', date: '17 Feb 2023' },
      { org: 'Lyceum of the Philippines University — Laguna (MoA)', date: '14 Jul 2022' },
    ],
  },
];

const accentMap = {
  blue: { light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  amber: { light: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  emerald: { light: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700' },
  teal: { light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', badge: 'bg-teal-100 text-teal-700' },
  rose: { light: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  violet: { light: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', badge: 'bg-violet-100 text-violet-700' },
};

const totalMoUs = departments.reduce((s, d) => s + d.mous.length, 0);

const Collaboration = () => {
  const [activeDept, setActiveDept] = useState(0);
  const [search, setSearch] = useState('');

  const dept = departments[activeDept];
  const colors = accentMap[dept.accent];

  const filtered = search.trim()
    ? dept.mous.filter(m => m.org.toLowerCase().includes(search.toLowerCase()))
    : dept.mous;

  return (
    <GenericPage title="Collaborations" sidebar={<ResearchSidebar />}>
      {/* Intro */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        SSGMCE has established Memoranda of Understanding (MoUs) with leading industries, universities, and research
        organizations to foster academic excellence, joint research, skill development, and student placements.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-blue">{departments.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">Departments</p>
        </div>
        <div className="bg-ssgmce-saffron/5 border border-ssgmce-saffron/20 rounded-lg px-4 py-3 text-center">
          <p className="text-2xl font-bold text-ssgmce-saffron">{totalMoUs}</p>
          <p className="text-xs text-gray-500 mt-0.5">Total MoUs</p>
        </div>
        <div className="bg-ssgmce-blue/5 border border-ssgmce-blue/20 rounded-lg px-4 py-3 text-center sm:col-span-1 col-span-2">
          <p className="text-2xl font-bold text-ssgmce-blue">{dept.mous.length}</p>
          <p className="text-xs text-gray-500 mt-0.5">{dept.shortName} MoUs</p>
        </div>
      </div>

      {/* Department Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {departments.map((d, i) => {
          const c = accentMap[d.accent];
          return (
            <button
              key={i}
              onClick={() => { setActiveDept(i); setSearch(''); }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
                activeDept === i
                  ? `${c.light} ${c.text} ${c.border}`
                  : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {d.shortName}
            </button>
          );
        })}
      </div>

      {/* Department Header */}
      <div className={`rounded-xl border ${colors.border} ${colors.light} p-4 mb-5 flex items-center justify-between flex-wrap gap-3`}>
        <div>
          <h2 className={`text-lg font-semibold ${colors.text}`}>{dept.name}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{dept.mous.length} active collaborations</p>
        </div>
        <Link
          to={dept.route}
          className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text} hover:underline`}
        >
          View Department <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-xs mb-5">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
        <input
          type="text"
          placeholder="Search organizations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-blue-300 bg-white"
        />
      </div>

      {/* MoU Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {filtered.length > 0 ? (
          filtered.map((mou, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition group"
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${colors.light} ${colors.border} border flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <FaBuilding className={`text-sm ${colors.text} opacity-70`} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 leading-snug">{mou.org}</p>
                  <p className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                    <FaCalendarAlt className="flex-shrink-0" /> {mou.date}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-8 text-gray-400 text-sm">No collaborations match your search.</div>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
        <span>{filtered.length} collaboration{filtered.length !== 1 ? 's' : ''} shown</span>
        <Link
          to={dept.route}
          className={`inline-flex items-center gap-1 ${colors.text} hover:underline font-medium`}
        >
          Go to {dept.shortName} Department <FaChevronRight className="text-xs" />
        </Link>
      </div>
    </GenericPage>
  );
};

export default Collaboration;
