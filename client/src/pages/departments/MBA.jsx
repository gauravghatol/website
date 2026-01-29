import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import mbaBanner from '../../assets/images/departments/mba/MBA banner.png';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  FaLaptopCode, FaBullseye, FaUserTie, FaAward, FaAngleRight, 
  FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone,
  FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram,
  FaCalendarAlt, FaDownload, FaIdCard
} from 'react-icons/fa';

// Import HOD photo
import hodPhoto from '../../assets/images/departments/mba/HOD_MBA.png';

// Import Faculty Photos
import pmkPhoto from '../../assets/images/departments/mba/faculty/PMK.jpg';
import lbdPhoto from '../../assets/images/departments/mba/faculty/LBDeshmukh.jpg';
import madPhoto from '../../assets/images/departments/mba/faculty/MADande.jpg';
import ssmPhoto from '../../assets/images/departments/mba/faculty/SSMishra.jpg';
import vvpPhoto from '../../assets/images/departments/mba/faculty/VVPatil.jpg';
import wzsPhoto from '../../assets/images/departments/mba/faculty/WZSuliya.jpg';
import bhPhoto from '../../assets/images/departments/mba/faculty/BilalHusain.jpg';
import absPhoto from '../../assets/images/departments/mba/faculty/AdeshSolanke.jpg';
import upPhoto from '../../assets/images/departments/mba/faculty/UdayPatil.jpg';
import mmPhoto from '../../assets/images/departments/mba/faculty/MohiniModak.jpg';

const MBA = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [researchTab, setResearchTab] = useState('toppers');
  const [projectYear, setProjectYear] = useState('2023-24');
  const [researchYear, setResearchYear] = useState('2023-24');
  const [placementYear, setPlacementYear] = useState('2023-24');

  const academicsLinks = [
    { id: 'overview', label: 'Department Overview' },
    { id: 'hod', label: 'Words from HOD' },
    { id: 'vision-mission', label: 'Vision, Mission, PEO & PO' },
    { id: 'course-outcomes', label: 'Course Outcomes' },
    { id: 'curriculum', label: 'Scheme and Syllabus' },
    { id: 'ranking', label: 'Business School Ranking' },
    { id: 'pride', label: 'Pride of the Department' },
    { id: 'achievements', label: 'Achievements and Awards' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'accreditations', label: 'Recognitions and Accreditations' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Curricular Activities' },
    { id: 'projects', label: 'UG/PG Projects (Dissertation)' },
    { id: 'course-material', label: 'Course Material' },
    { id: 'faculty', label: 'Faculty Members' },
  ];

  const industryLinks = [
    { id: 'mous', label: 'MoUs' },
    { id: 'industrial-visits', label: 'Industry Interaction and Tours' },
    { id: 'guest-lectures', label: "Corporate Leader Speak's" },
    { id: 'workshops', label: "MDP's, FDP's and Workshop" },
    { id: 'consultancy', label: 'Consultancy' },
    { id: 'patents', label: 'Patent & Publication' },
  ];

  // Faculty data
  const facultyData = [
    {
      name: 'Dr. Pawan M. Kuchar',
      photo: pmkPhoto,
      designation: 'Asst. Professor and Head of Department',
      specialization: 'Marketing, HR Management',
      email: 'pmkuchar@ssgmce.ac.in',
    },
    {
      name: 'Dr. Laxmikant B. Deshmukh',
      photo: lbdPhoto,
      designation: 'Associate Professor',
      specialization: 'Marketing & Sales, Production & Oper., Quant. Methods & Stats, SCM & Logistics',
      email: 'lbdeshmukh@ssgmce.ac.in',
      phone: '+91 7875104343',
    },
    {
      name: 'Dr. Mayur A. Dande',
      photo: madPhoto,
      designation: 'Asst. Professor',
      specialization: 'Marketing, Finance',
      email: 'madande@ssgmce.ac.in',
      phone: '9423619555',
    },
    {
      name: 'Dr. Satya Mohan Mishra',
      photo: ssmPhoto,
      designation: 'Asst. Professor',
      specialization: 'Finance, Marketing, Business Economics',
      email: 'smmishra@ssgmce.ac.in',
      phone: '9405105291 / 9960687972',
    },
    {
      name: 'Vishal V. Patil',
      photo: vvpPhoto,
      designation: 'Asst. Professor',
      specialization: 'Law, Finance and Human Resource Management',
      email: 'vvpatil@ssgmce.ac.in',
      phone: '+91 9422864248',
    },
    {
      name: 'Dr. Wechansing Suliya',
      photo: wzsPhoto,
      designation: 'Asst. Professor',
      specialization: 'Human Resource Management and Production Management',
      email: 'wzsuliya@ssgmce.ac.in',
    },
    {
      name: 'Dr. Bilal Husain',
      photo: bhPhoto,
      designation: 'Assistant Professor',
      specialization: 'Finance',
      email: 'bilalhusain@ssgmce.ac.in',
      phone: '+91 7774816702',
    },
    {
      name: 'Adesh B. Solanke',
      photo: absPhoto,
      designation: 'Asst. Professor and Training & Placement Officer',
      specialization: 'Human Resource of Development and Management (HRDM)',
      email: 'absolanke@ssgmce.ac.in',
      phone: '+91-8390407947',
    },
    {
      name: 'Mr. Uday Patil',
      photo: upPhoto,
      designation: 'Professor of Practice',
      specialization: 'Executive Vice President - Urban B2CPL-Prime, Bajaj Finserv Ltd.',
      email: '',
    },
    {
      name: 'Mohini Mahesh Modak',
      photo: mmPhoto,
      designation: 'Professor of Practice',
      specialization: 'Director Horizon Web Technologies',
      email: '',
    },
  ];

  const content = {
    'overview': (
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2 w-fit">
              Department Overview
            </h3>
            
            {/* Featured Video - Larger & Cinematic */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video group relative">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/Es5ZXPXMn8Q" 
                title="Department of Business Administration and Research (MBA) SSGMCE"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
              <p>
                The Department of Business Administration and Research was established as the <strong>first Post-Graduate Department</strong> of Shri Sant Gajanan Maharaj College of Engineering in the year <strong>1994</strong> to impart two year full time Post-Graduate Degree Course of Master of Business Administration (<strong>M.B.A.</strong>) with prior approval from <strong>All India Council for Technical Education, New Delhi</strong> and affiliation to <strong>Sant Gadge Baba Amravati University, Amravati, Maharashtra</strong> to meet the need for management education in rural India.
              </p>
              <p>
                The Department made its dent in the management education of the region causing <strong>shift</strong> of the traditionally run <strong>annual pattern MBA</strong> of the affiliating university to <strong>semester pattern</strong> and then went on to its individual run for quality management education with distinction for others in the region to imbibe. The qualitative attitude and students' centric approach coupled with industrial collaboration paid dividends to the department and its stakeholders which came in form of <strong>NBA Accreditations</strong> (first in 2002, second in 2007 and third time accreditation in 2013), <strong>NAAC Accreditations</strong> (first in 2002 and second in 2010), <strong>ISO Certification</strong>, <strong>Business India Best B-Schools Ranking</strong> (continuously since 2010), ranking amongst <strong>India's top 100 B-Schools</strong> by <strong>Career Outlook Survey</strong> continuously since 2015, <strong>Management College of the Year Award</strong> by <strong>Higher Education Review Magazine</strong> continuously for two years in 2016 and 2017, <strong>Dewang Mehta Education Leadership Award 2015 and 2016</strong>, ranking under <strong>Excellent Placement Category</strong> by <strong>Go-Education Survey</strong> and rankings by similar other national surveys including one by <strong>Business Today</strong> etc. <strong>Gold Medal awards</strong> to its students for their consistent performance in university examinations, their satisfactory placements in India and abroad and above all some of the outstanding entrepreneurial ventures established by our alumni.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section - Minimalistic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              Courses @ Department
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Course</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Course Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* MBA */}
                <tr className="bg-white">
                  <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Master of Business Administration</td>
                </tr>
                {[ 
                  ['Degree', 'M.B.A. (Choice based - Dual specialization)'],
                  ['Duration', '2 Year (4 Semesters) (Full time)'],
                  ['Intake', '60 Students per year'],
                  ['Establishment', 'Year: 1994'],
                  ['NBA Status', 'Three Times Accredited by NBA'],
                ].map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                  </tr>
                ))}

                {/* PhD */}
                <tr className="bg-white">
                  <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Ph. D in Business Management and Research</td>
                </tr>
                {[ 
                  ['Duration', '3 Years'],
                  ['Intake', '04 Students'],
                ].map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-ssgmce-blue font-medium">Dr. P. M. Kuchar</p>
            <p className="text-sm text-gray-500">Head, Department of Business Administration and Research (MBA)</p>
          </div>
        </div>
      </div>
    ),

    'vision-mission': (
      <div className="space-y-10">
        
        {/* Top Section: Vision & Mission Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex border-b border-gray-200 bg-gray-50/50">
                 {['vision', 'mission'].map(tab => (
                     <button
                        key={tab}
                        onClick={() => setVmTab(tab)}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all relative ${
                            vmTab === tab 
                            ? 'text-ssgmce-blue bg-white' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }`}
                     >
                        {tab}
                        {vmTab === tab && <div className="absolute top-0 left-0 w-full h-1 bg-ssgmce-blue"></div>}
                     </button>
                 ))}
             </div>
             <div className="p-8 min-h-[160px] flex items-center">
                 {vmTab === 'vision' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex items-start gap-4"
                     >
                        <div className="mt-1 text-ssgmce-orange text-2xl">➤</div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                            To be a learning centre for developing competent managerial manpower with spiritual blend to serve industry and humanity.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            "To develop competent and entrepreneurial manpower through research, innovation and quality education.",
                            "To develop human resources with spiritual values to serve global society."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                                <p className="text-gray-700">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}
             </div>
        </div>

        {/* Bottom Section: PEO, PO Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex flex-wrap border-b border-gray-200 bg-gray-50/50">
                 {[
                    { id: 'peo', label: 'Program Educational Objectives' },
                    { id: 'po', label: 'Program Outcomes' }
                 ].map(tab => (
                     <button
                        key={tab.id}
                        onClick={() => setPoTab(tab.id)}
                        className={`px-6 py-4 font-bold text-sm transition-all relative whitespace-nowrap ${
                            poTab === tab.id 
                            ? 'text-white bg-[#003366]'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     >
                        {tab.label}
                     </button>
                 ))}
             </div>
             
             <div className="p-8">
                 {poTab === 'peo' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        {[
                            "Students would accomplish distinguished positions in the corporate world and act as change agents in the society.",
                            "Students would demonstrate and apply analytical thinking, creativity & innovation and adaptability in problem solving.",
                            "Students would be perennially reinventing themselves in management thoughts, philosophy, action, tools and techniques.",
                            "Students would be high on ethical, moral and spiritual values to strive for sustainable growth and inclusive management (Sarve Bhavantu Sukhinah).",
                            "Students would develop multidisciplinary and professional approach coupled with communication skills and teamwork skills to excel in the global environment."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}

                 {poTab === 'po' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                        {[
                            "Apply knowledge and management theories and practices to solve business problems.",
                            "Foster analytical and critical thinking abilities for data-based decision making.",
                            "Ability to develop value-based leadership quality.",
                            "Ability to understand analyze and communicate global, economic, legal and ethical aspect of Business.",
                            "Ability to lead themselves and others in the achievement of organization goals, contributing effectively to a team environment."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}
             </div>
        </div>
      </div>
    ),

    'hod': (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
         {/* Profile Section - Top Center */}
         <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
             <div className="flex flex-col items-center">
                 <div className="w-56 h-56 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
                    <img 
                        src={hodPhoto} 
                        alt="Dr. P. M. Kuchar - HOD MBA" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. P. M. Kuchar</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Business Administration and Research (MBA)</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>pmkuchar@ssgmce.ac.in</span>
                    </div>
                 </div>
                 
                 <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Ph.D</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">MBA</span>
                 </div>
             </div>
         </div>
         
         {/* Message Section - Below Photo */}
         <div className="p-8 md:p-10 relative bg-white">
             <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-blue-50 -z-0" />
             
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Message from the HOD</h3>
                    <div className="h-1 w-20 bg-ssgmce-blue mt-2 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                    <p className="text-gray-800 font-semibold">
                        Dear Friends,
                    </p>
                    <p>
                        The Department of Business Administration and Research was established as the <span className="font-semibold text-gray-900">first Post-Graduate Department</span> of Shri Sant Gajanan Maharaj College of Engineering in the year <span className="font-semibold text-gray-900">1994</span> to impart two year full time Post-Graduate Degree Course of Master of Business Administration (<span className="font-semibold text-gray-900">M.B.A.</span>) with prior approval from <span className="font-semibold text-gray-900">All India Council for Technical Education, New Delhi</span> and affiliation to <span className="font-semibold text-gray-900">Sant Gadge Baba Amravati University, Amravati, Maharashtra</span> to meet the need for management education in rural India.
                    </p>
                    <p>
                        The Department made its dent in the management education of the region causing <span className="font-semibold text-gray-900">shift</span> of the traditionally run <span className="font-semibold text-gray-900">annual pattern MBA</span> of the affiliating university to <span className="font-semibold text-gray-900">semester pattern</span> and then went on to its individual run for quality management education with distinction for others in the region to imbibe. The qualitative attitude and students' centric approach coupled with industrial collaboration paid dividends to the department and its stakeholders which came in form of <span className="font-semibold text-gray-900">NBA Accreditations</span> (first in 2002, second in 2007 and third time accreditation in 2013), <span className="font-semibold text-gray-900">NAAC Accreditations</span> (first in 2002 and second in 2010), <span className="font-semibold text-gray-900">ISO Certification</span>, <span className="font-semibold text-gray-900">Business India Best B-Schools Ranking</span> (continuously since 2010), ranking amongst <span className="font-semibold text-gray-900">India's top 100 B-Schools</span> by <span className="font-semibold text-gray-900">Career Outlook Survey</span> continuously since 2015.
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900">Management College of the Year Award</span> by <span className="font-semibold text-gray-900">Higher Education Review Magazine</span> continuously for two years in 2016 and 2017, <span className="font-semibold text-gray-900">Dewang Mehta Education Leadership Award 2015 and 2016</span>, ranking under <span className="font-semibold text-gray-900">Excellent Placement Category</span> by <span className="font-semibold text-gray-900">Go-Education Survey</span> and rankings by similar other national surveys including one by <span className="font-semibold text-gray-900">Business Today</span> etc. <span className="font-semibold text-gray-900">Gold Medal awards</span> to its students for their consistent performance in university examinations, their satisfactory placements in India and abroad and above all some of the outstanding entrepreneurial ventures established by our alumni.
                    </p>
                    <p>
                        The march is on which has begun in small way through international exposures to our students from CEOs (like Dr. Vikram Pandit of <span className="font-semibold text-gray-900">Citibank, USA</span> and Mr. Pradeep Andhare of <span className="font-semibold text-gray-900">FOTONS Ltd., China</span>) and academicians (like Prof. Rajiv Lall of <span className="font-semibold text-gray-900">Harvard Business School, USA</span>) and internalization of academic excellence parameters like research and publications, academic visits abroad, MoUs, intense industry-interaction, host of co-curricular activities and so on and so forth.
                    </p>
                    <p className="font-semibold text-gray-800 italic">
                        Wishing you all a successful and fulfilling academic journey ahead.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. P. M. Kuchar</p>
                        <p className="text-sm text-gray-500">Head, Department of Business Administration and Research (MBA)</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                        <p>Shri Sant Gajanan Maharaj</p>
                        <p>College of Engineering, Shegaon</p>
                    </div>
                </div>
             </div>
         </div>
      </div>
    ),

    'faculty': (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
            <p className="text-gray-500 mt-2">Department of Business Administration and Research (MBA)</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {facultyData.map((fac, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
                >
                    {/* Image Area - Fixed Width */}
                    <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative overflow-hidden border-r border-gray-100">
                         {fac.photo ? (
                             <img 
                                 src={fac.photo} 
                                 alt={fac.name} 
                                 className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                             />
                         ) : (
                             <div className="w-full h-full flex items-center justify-center">
                                 <FaUserTie className="text-5xl text-gray-300" />
                             </div>
                         )}
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex-1 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                            {fac.name}
                        </h4>
                        <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">{fac.designation}</p>
                        
                        {/* Compact Details */}
                        <div className="space-y-2 text-sm text-gray-600">
                             {fac.specialization && (
                                <p className="line-clamp-2 text-xs">
                                    <span className="font-bold text-gray-700">Area: </span>
                                    {fac.specialization}
                                </p>
                             )}
                             
                             <div className="pt-2 flex flex-col gap-1">
                                {fac.email && (
                                    <a href={`mailto:${fac.email}`} className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                                        <FaEnvelope className="mr-2 text-gray-400" /> {fac.email}
                                    </a>
                                )}
                                {fac.phone && (
                                    <span className="flex items-center text-xs">
                                        <FaPhone className="mr-2 text-gray-400" /> {fac.phone}
                                    </span>
                                )}
                             </div>
                             
                             <a href="#" className="inline-flex items-center text-[10px] font-bold text-ssgmce-blue mt-2 hover:underline uppercase tracking-wide">
                                View Profile <FaAngleRight className="ml-1" />
                             </a>
                        </div>
                    </div>
                </motion.div>
            ))}
         </div>
      </div>
    ),

    'course-outcomes': (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Course Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of M.B.A
          </p>
        </div>

        {/* M.B.A Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">M.B.A Course Outcomes</h3>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Semester</th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">PDF Link</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { semester: 'M. B. A. Semester-I', link: '#' },
                    { semester: 'M. B. A. Semester-II', link: '#' },
                    { semester: 'M. B. A. Semester-III', link: '#' },
                    { semester: 'M. B. A. Semester-IV', link: '#' }
                  ].map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">{item.semester}</td>
                      <td className="px-6 py-3 text-sm border border-gray-200">
                        <a href={item.link} className="text-ssgmce-blue hover:text-ssgmce-orange hover:underline font-medium">
                          view PDF
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ),

    ranking: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2">
            Business School Ranking
        </h3>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <h4 className="text-base font-semibold text-gray-700 text-center">Ranking by different independent national level best B-Schools Surveys</h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Year</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Name of Survey</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Link</th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">Ranking / Grade</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    year: '2025',
                    survey: 'Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2025',
                    link: 'more details',
                    ranking: 'Ranked 47th in the State, 111th Rank among all Private B-schools in India'
                  },
                  {
                    year: '2024',
                    survey: 'Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2024',
                    link: 'more details',
                    ranking: 'Ranked 35th in the State, 108th Rank among all Private B-schools in India'
                  },
                  {
                    year: '2023',
                    survey: 'Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2023 - Survey conducted during September-October 2022',
                    link: 'more details',
                    ranking: 'Ranked 30th in the West Zone, 108th Rank among all Private B-schools in India'
                  },
                  {
                    year: '2022',
                    survey: 'Fortune India Best B-School Ranking, August-September 2022',
                    link: 'more details',
                    ranking: 'Only institute from Vidarbha, Maharashtra appearing in the Fortune India Best B-School Ranking 2022'
                  },
                  {
                    year: '2022',
                    survey: 'Business School Rankings by Business today published as on 29th Oct 2022',
                    link: 'more details',
                    ranking: 'Ranked among Top 100 B-school in India in Living as well as ROI'
                  },
                  {
                    year: '2021',
                    survey: 'SSGMCE ranking in DATA QUEST T- School Employability Ranking 2021',
                    link: 'more details',
                    ranking: 'Rank-73 : Private Sector\nRank - 81 : Government and private institutes'
                  },
                  {
                    year: '2018',
                    survey: 'Outlook-Drshti Survey 2018 ranks DBA&R at 86th amongst Indias Top 100 Management Schools',
                    link: 'Click here for Details',
                    ranking: 'Ranked 86th'
                  },
                  {
                    year: '2018',
                    survey: 'Business Today ranks Shegaon MBA amongst top 100 B-Schools in India',
                    link: 'Click here for Details',
                    ranking: 'Ranked 80th'
                  },
                  {
                    year: '2017',
                    survey: 'HONOURED AS MANAGEMENT COLLEGE OF THE YEAR 2017 -Program Efficacy by Higher Education Review Magazine, Nov. 2017',
                    link: 'Click here for Details',
                    ranking: ''
                  },
                  {
                    year: '2017',
                    survey: 'Business Today-MDRA ranks DBA&R, SSGMCE, Shegaon amongst Best B-Schools of India',
                    link: 'Click here for Details',
                    ranking: 'Ranked at 146th position'
                  },
                  {
                    year: '2017',
                    survey: 'DBA&R, Shegaon amongst India\'s Top 100 B-Schools for fourth consecutive year - Outlook-Drshti Survey 2017',
                    link: 'Click here for Details',
                    ranking: 'Ranked at 92nd place amongst all the top business schools of our country.'
                  }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium">{item.year}</td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">{item.survey}</td>
                    <td className="px-6 py-3 text-sm border border-gray-200">
                      <a href="#" className="text-ssgmce-blue hover:text-ssgmce-orange hover:underline font-medium">
                        {item.link}
                      </a>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 whitespace-pre-line">{item.ranking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    curriculum: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            Scheme and Syllabus
        </h3>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             {/* MBA Section */}
            <div className="grid md:grid-cols-12 border-b border-gray-200">
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                    <h4 className="font-bold text-lg text-gray-800">
                        M.B.A. (Master of Business Administration)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                    <ul className="space-y-4">
                        {[
                            { label: "Scheme", link: "#" },
                            { label: "Syllabus First Year (1st & 2nd Sem)", link: "#" },
                            { label: "Syllabus Second Year (3rd Sem)", link: "#" },
                            { label: "Syllabus Second Year (4th Sem)", link: "#" }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                                <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                                    <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                                    <button className="text-xs font-bold text-ssgmce-blue hover:text-ssgmce-orange hover:underline uppercase tracking-wide shrink-0">
                                        Download
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* PhD Section */}
            <div className="grid md:grid-cols-12 bg-gray-50/30">
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                     <h4 className="font-bold text-lg text-gray-800">
                        Ph.D. (Business Management and Research)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3 group">
                             <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                             <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <span className="text-gray-700 text-sm font-medium">Scheme and Syllabus Ph.D.</span>
                                <button className="text-xs font-bold text-ssgmce-blue hover:text-ssgmce-orange hover:underline uppercase tracking-wide shrink-0">
                                    Download
                                </button>
                             </div>
                        </li>
                     </ul>
                </div>
            </div>
        </div>
      </div>
    ),

    'pride': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Pride of the Department
        </h3>

        {/* Tab Switcher */}
        <div className="flex gap-3">
          {[
            { id: 'toppers', label: 'University Rank Holders' },
            { id: 'alumni', label: 'Top Alumni' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setResearchTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                researchTab === tab.id
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* University Rank Holders */}
        {researchTab === 'toppers' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Year</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Name of the Student</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Univ. Topper Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { year: '2022-23', name: 'Vaishnavi Khandare', rank: 'II', cgpa: '8.97' },
                    { year: '2022-23', name: 'Prerana Chandwani', rank: 'IX', cgpa: '-' },
                    { year: '2022-23', name: 'Madhuri Chandwani', rank: 'IX', cgpa: '-' },
                    { year: '2021-22', name: 'Damini Zambad', rank: '-', cgpa: '-' },
                    { year: '2020-21', name: 'Divya Ramchandani', rank: 'IV', cgpa: '-' },
                    { year: '2019-20', name: 'Namrata Patil', rank: 'VII', cgpa: '-' },
                    { year: '2017-18', name: 'Divya Mohta', rank: '-', cgpa: '-' }
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">{student.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{student.name}</td>
                      <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">{student.rank}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{student.cgpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Top Alumni */}
        {researchTab === 'alumni' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Names of Alumni</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Organization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Dr. Devesh Sharma', position: 'Executive Vice President', org: 'Credit Suisse, Singapore' },
                    { name: 'Uday Patil', position: 'Executive Vice President', org: 'Bajaj Finserv Ltd.' },
                    { name: 'Dr. Ashutosh Singh', position: 'Founder and Professor of Practice', org: 'Director, Medhaura and Professor of Practice, SSGMCE' },
                    { name: 'Dr. Krishnakant Dawe', position: 'Vice Chancellor', org: 'SKN Agriculture University' },
                    { name: 'Dr. Dinesh Puranik', position: 'Vice President', org: 'Accenture Pvt. Ltd., Bangalore' },
                    { name: 'Swapnil Raut', position: 'Director', org: 'PwC, Singapore' },
                    { name: 'Shriram Dhabe', position: 'Vice President', org: 'Kotak Mahindra Asset Management Company Ltd., Mumbai' },
                    { name: 'Vijay Talekar', position: 'Head of Sales', org: 'Chubb Insurance, Singapore' },
                    { name: 'Amol Sirsikar', position: 'Vice President Marketing', org: 'Kotak Mahindra Bank Ltd., Mumbai' },
                    { name: 'Vikas Lande', position: 'Vice President', org: 'ICICI, Mumbai' },
                    { name: 'Roshan Navandar', position: 'Managing Director', org: 'EQ Techno Consulting Pvt. Ltd., Nagpur' },
                    { name: 'Suhas Bhand', position: 'Vice President', org: 'Landmark Group, Dubai, UAE' },
                    { name: 'Kirti Sabale', position: 'Senior Manager', org: 'Amazon, USA' },
                    { name: 'Vinit Ranavare', position: 'General Manager', org: 'L&T, Mumbai' }
                  ].map((alumni, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{alumni.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{alumni.position}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{alumni.org}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    ),

    'achievements': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Achievements and Awards
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Faculty/Student</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Achievement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* 2025 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2025</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Husain B.</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Best Paper Award at International Conference</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2025</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Pawan Kuchar</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Selected as Member, Board of Studies in Management, SGBAU</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2025</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Satya Mohan Mishra</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Editorial Board Member, Journal of Advanced Research in Business and Management Studies</td>
                </tr>
                
                {/* 2024 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Satya Mohan Mishra</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Research Proposal Funded - "Efficiency of NBFCs in Eastern and Southern India"</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Pawan Kuchar</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Research Proposal Funded - Marketing and Consumer Behavior Study</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Mayur Dande</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Research Proposal Funded - Digital Marketing Trends in Rural India</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Husain B.</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Keynote Speaker at National Conference on Finance and Banking</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2024</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Laxmikant Deshmukh</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Empaneled as Resource Person by SEBI for Investor Awareness Programs</td>
                </tr>
                
                {/* 2023 */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2023</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Department</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Ranked among Top 100 B-Schools in India by Career Outlook Survey</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2023</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Dr. Wechansing Suliya</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Best Faculty Award by Maharashtra State Innovation Society</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2023</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Students</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Winners - National Business Plan Competition, IIM Indore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    'accreditations': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Recognitions and Accreditations
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Recognition</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Effective Period</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Score / Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2022</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Program Accreditation by NBA, New Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Sept. 2013 for three years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">771 out of 1000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2013</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Program Accreditation by NBA, New Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Sept. 2013 for three years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">771 out of 1000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2010</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Institutional Accreditation by NAAC, Bengaluru</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Oct. 2010 for five years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">B+ Grade</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2007</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Program Accreditation by NBA, New Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">May 2007 for three years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">748 out of 1000 (B Grade)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2003</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Institutional Accreditation by NAAC, Bengaluru</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Nov. 2003 for five years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">B+ Grade</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2002</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Selected as Network Institution under TEQIP, MHRD, Govt. of India</td>
                  <td className="px-6 py-4 text-sm text-gray-700">March 2002 to Feb. 2007</td>
                  <td className="px-6 py-4 text-sm text-gray-700">First Phase of TEQIP</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2002</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Program Accreditation by NBA, New Delhi</td>
                  <td className="px-6 py-4 text-sm text-gray-700">May 2002 for three years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">-</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2002</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">ISO 9001:2000 Certified</td>
                  <td className="px-6 py-4 text-sm text-gray-700">March 2002 to Feb. 2005</td>
                  <td className="px-6 py-4 text-sm text-gray-700">JAS-ANZ</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">2000</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">UGC Recognition under Section 12B</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Nov. 2000</td>
                  <td className="px-6 py-4 text-sm text-gray-700">College Recognition</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">1994</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Affiliation to Sant Gadge Baba Amravati University</td>
                  <td className="px-6 py-4 text-sm text-gray-700">August 1994</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Permanent Affiliation</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">1994</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">AICTE, New Delhi Approval</td>
                  <td className="px-6 py-4 text-sm text-gray-700">w.e.f. 31.3.1994</td>
                  <td className="px-6 py-4 text-sm text-gray-700">First Approval</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">1989</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">UGC Recognition Section 2f</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Feb. 1989</td>
                  <td className="px-6 py-4 text-sm text-gray-700">College Recognition</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    'placements': (
      <div className="space-y-8">
        <AnimatePresence mode="wait">
        {!placementYear ? (
           <motion.div 
             key="summary"
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 20 }}
             className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
           >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Placement Statistics</h3>
                    <p className="text-sm text-gray-500 mt-1">Year-wise breakdown of student placements</p>
                  </div>
                  <FaChartLine className="text-4xl text-blue-100" />
              </div>
              
              <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                      <thead>
                          <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider border-b border-gray-200">
                              <th className="px-6 py-4 font-bold text-center w-20">Sr. No.</th>
                              <th className="px-6 py-4 font-bold text-center">Placement Record for Session</th>
                              <th className="px-6 py-4 font-bold text-center">No. of Students Placed</th>
                              <th className="px-6 py-4 font-bold text-center">Details Report</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                          {[
                              { year: '2024-25', count: '39*', id: '2024-25' },
                              { year: '2023-24', count: '44', id: '2023-24' },
                              { year: '2022-23', count: '49*', id: '2022-23' },
                              { year: '2021-22', count: '35', id: '2021-22' },
                              { year: '2020-21', count: '43', id: '2020-21' },
                              { year: '2019-20', count: '35', id: '2019-20' },
                              { year: '2018-19', count: '30', id: '2018-19' },
                          ].map((row, index) => (
                              <tr key={index} className="hover:bg-blue-50/30 transition-colors">
                                  <td className="px-6 py-4 text-center font-mono text-gray-400">{index + 1}</td>
                                  <td className="px-6 py-4 text-center font-bold text-gray-700">{row.year}</td>
                                  <td className="px-6 py-4 text-center font-bold text-ssgmce-blue text-lg">{row.count}</td>
                                  <td className="px-6 py-4 text-center">
                                      <button 
                                        onClick={() => setPlacementYear(row.id)}
                                        className="text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                                      >
                                          View Details
                                      </button>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
                  * Placements still in progress for the current academic year.
              </div>
           </motion.div>
        ) : (
           <motion.div 
             key="detail"
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -20 }}
           >
              <div className="flex justify-between items-center mb-6">
                  <button 
                    onClick={() => setPlacementYear(null)} 
                    className="flex items-center text-ssgmce-blue hover:text-ssgmce-orange font-medium"
                  >
                      <FaAngleRight className="rotate-180 mr-2" /> Back to Summary
                  </button>
                  <h3 className="text-xl font-bold text-gray-800">Placement Data - AY {placementYear}</h3>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                          <thead className="bg-gray-50 border-b border-gray-200">
                              <tr className="text-sm">
                                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Sr.No.</th>
                                  <th className="px-4 py-3 font-bold text-gray-700">Student Name</th>
                                  <th className="px-4 py-3 font-bold text-gray-700">Company Name</th>
                                  <th className="px-4 py-3 font-bold text-gray-700 text-center">CTC Offered</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-sm">
                              {placementYear === '2024-25' && [
                                  { sr: 1, name: 'Adinath Sanjay Sangle', company: 'Avenue Super Mart Limited (Dmart), Nagpur', ctc: 'Rs.3.5 LPA' },
                                  { sr: 2, name: 'Aditya Keshavrao Unhale', company: 'IndiaMart, Mumbai', ctc: 'Rs.3.9 LPA' },
                                  { sr: 3, name: 'Aditya Keshavrao Unhale', company: 'Avenue Super Mart Limited (Dmart), Nagpur', ctc: 'Rs. 3.5 LPA' },
                                  { sr: 4, name: 'AMIT SUNIL NIKOLE', company: 'DCB Bank, Akola', ctc: 'Rs.3.5 LPA' },
                                  { sr: 5, name: 'ANIKET WASUDEO BONDRE', company: 'Avenue Super Mart Limited (Dmart), Nagpur', ctc: 'Rs.3.5 LPA' },
                                  { sr: 6, name: 'Ashutosh Vinay Kathole', company: 'ESAF', ctc: 'Rs.4.25 LPA' },
                                  { sr: 7, name: 'Gayatri Vitthalrao Deshmukh', company: 'ESAF', ctc: 'Rs.4.25 LPA' },
                                  { sr: 8, name: 'Gunjan Sunil Ingle', company: 'Kalash Seeds Pvt. Ltd., Jalna', ctc: 'Rs.2.76 LPA' },
                                  { sr: 9, name: 'Kartik Pawar', company: 'DCB Bank, Akola', ctc: 'Rs.3.5 LPA' },
                                  { sr: 10, name: 'NISHANT PRADIP DIDOLKAR', company: 'Kidara Tech, Thane / Daikin Airconditioning Industries Ltd., Pune', ctc: 'Rs.6 LPA' },
                                  { sr: 11, name: 'Pragati Devidas Rekhate', company: 'Daikin Airconditioning Industries Ltd., Pune', ctc: 'Rs. 4.5 LPA' },
                                  { sr: 12, name: 'Ravi Arvind Ingle', company: 'Motilal Oswal, Mumbai', ctc: 'Rs.3.5 LPA' },
                                  { sr: 13, name: 'Rushikesh Sangitrao Mankar', company: 'IndiaMart, Mumbai', ctc: 'Rs.3.9 LPA' },
                                  { sr: 14, name: 'Rushikesh Sangitrao Mankar', company: 'ESAF', ctc: 'Rs. 4.25 LPA' },
                                  { sr: 15, name: 'Shantanu Paramanand Sawat', company: 'Home First Finance Co. India Limited, Mumbai', ctc: 'Rs.6 LPA' },
                                  { sr: 16, name: 'Shubhangi Nikhade', company: 'Indian Forest Services, Pune', ctc: 'Rs.3.5 LPA' },
                                  { sr: 17, name: 'Sudarshan Dnyaneshwar Mehetre', company: 'Avenue Super Mart Limited (Dmart), Nagpur', ctc: 'Rs.3.5 LPA' },
                                  { sr: 18, name: 'Utkarsha Harish Patil', company: 'Kalash Seeds Pvt. Ltd., Jalna', ctc: 'Rs.3 LPA' },
                                  { sr: 19, name: 'Yash Dipak Adhe', company: 'Krutanic Solutions, Bengaluru', ctc: 'Rs.6.00 LPA' },
                                  { sr: 20, name: 'Yash Dipak Adhe', company: 'Daikin Airconditioning India Pvt. Ltd., Pune', ctc: 'Rs. 7 LPA' },
                                  { sr: 21, name: 'Yashvant Janardhan Pawar', company: 'IndiaMart, Mumbai', ctc: 'Rs.3.9 LPA' },
                                  { sr: 22, name: 'Yashvant Janardhan Pawar', company: 'KI Tech Vista Pvt. Ltd., Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 23, name: 'Yogesh sanjay Wakudkar', company: 'Avenue Super Mart Limited (Dmart), Nagpur', ctc: 'Rs.3.5 LPA' },
                                  { sr: 24, name: 'Yogesh sanjay Wakudkar', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 25, name: 'Apeksha Anil Kawale', company: 'TCS Limited,', ctc: 'Rs.5.8 LPA' },
                                  { sr: 26, name: 'Dipak Pramodrao Patil khond', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 27, name: 'Dnyaneshwari Vijay wakudkar', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 28, name: 'Arbat MAHIMA ANIL CHOUDHARY', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 29, name: 'MAHIMA ANIL CHOUDHARY', company: 'TCS Limited,', ctc: 'Rs.5.8 LPA' },
                                  { sr: 30, name: 'Pallavi Ravindra Ghiye', company: 'Delst Technologies India Pvt Ltd, Faridabad', ctc: 'Rs.3.5 LPA' },
                                  { sr: 31, name: 'Sakshi Haridasji Dhole', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 32, name: 'Yashwantrao Santosh Gawande', company: 'KI Tech Vista Pvt Ltd, Hyderabad', ctc: 'Rs.7.20 LPA' },
                                  { sr: 33, name: 'Akanksha Dnyaneshwar Bagwe', company: 'Krutanic Solutions, Bengaluru', ctc: 'Rs.6.00 LPA' },
                                  { sr: 34, name: 'Abhishek Vijay Bhattadak', company: 'NJ Group, Akola', ctc: '-' },
                                  { sr: 35, name: 'Aviral Gajanan Kaware', company: 'Infosys Ltd., Pune', ctc: 'Rs.2.4 LPA' },
                                  { sr: 36, name: 'Hrutuja Arun Takwale', company: 'Infinity Solution, Akola', ctc: 'Rs.2.4 LPA' },
                                  { sr: 37, name: 'Shraddha Bhagwan Pimpalkar', company: 'HDFC Bank, Pune', ctc: 'Rs.3.6 LPA' },
                                  { sr: 38, name: 'Vaishnavi Sanjay Sonone', company: 'Kidara Tech, Pune', ctc: 'Rs.6 LPA' },
                                  { sr: 39, name: 'Vaishnavi Sanjay Sonone', company: 'HDFC Bank, Pune', ctc: 'Rs.3.6 LPA' }
                              ].map((student, i) => (
                                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                                      <td className="px-4 py-3 text-center text-gray-500">{student.sr}</td>
                                      <td className="px-4 py-3 text-gray-900 font-medium">{student.name}</td>
                                      <td className="px-4 py-3 text-gray-700">{student.company}</td>
                                      <td className="px-4 py-3 text-center text-ssgmce-blue font-semibold">{student.ctc}</td>
                                  </tr>
                              ))}
                              {placementYear === '2023-24' && [
                                  { sr: 1, name: 'Hemant Gajanan Raut', company: 'ESAF Small Finance Bank', ctc: 'Rs.4.25LPA' },
                                  { sr: 2, name: 'Hemant Gajanan Raut', company: 'HDFC Bank', ctc: 'Rs.3.5LPA' },
                                  { sr: 3, name: 'Akshada Narendra Parchu re', company: 'Rinex Technologies Pvt.Ltd., Bangalore', ctc: 'Rs.5.20LPA' },
                                  { sr: 4, name: 'Dhanshree Sujay Deshmu kh', company: 'Academor Edutech, Bangalore', ctc: 'Rs.6.8LPA' },
                                  { sr: 5, name: 'Krushna Jitendrasingh Th akur', company: 'ESAF Small Finance Bank', ctc: 'Rs.4.25LPA' },
                                  { sr: 6, name: 'Krushna Jitendrasingh Th akur', company: 'SPCL Infotech Services Pvt Ltd, Pune', ctc: 'Rs.1.8LPA' },
                                  { sr: 7, name: 'Pratiksha Santosh Gawand e', company: 'Corizo Edtech, Bengaluru', ctc: 'Rs. 6.5LPA' },
                                  { sr: 8, name: 'Shruti Prakash Auti', company: 'HDFC Bank', ctc: 'Rs.3.5 LPA' },
                                  { sr: 9, name: 'Vaishnavi Anil Hage', company: 'Academor Edutech, Bangalore', ctc: 'Rs.6.8LPA' },
                                  { sr: 10, name: 'Vaishnavi Anil Hage', company: 'Stellar Hunt, Pune', ctc: '' },
                                  { sr: 11, name: 'Vashishtha Diwansing Th akur', company: 'Stellar Hunt, Pune', ctc: '' },
                                  { sr: 12, name: 'Nagesh Dinkar Banait', company: 'Academor Edutech, Bangalore', ctc: 'Rs.6.8LPA' },
                                  { sr: 13, name: 'Nagesh Dinkar Banait', company: 'Stellar Hunt, Pune', ctc: '' },
                                  { sr: 14, name: 'Nagesh Dinkar Banait', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.6LPA' },
                                  { sr: 15, name: 'Pratik Pramod Dhage', company: 'ESAF Small Finance Bank', ctc: 'Rs.4.25LPA' },
                                  { sr: 16, name: 'Pravin Shrikrushna Kale', company: 'Indiamart Interm MESH Ltd., Noida', ctc: 'Rs.3.96LPA' },
                                  { sr: 17, name: 'Swapnil Gajanan Ikhare', company: 'Academor Edutech, Bangalore', ctc: 'Rs.6.8LPA' },
                                  { sr: 18, name: 'Vaibhav Tejrao Dali', company: 'HDFC Bank (No Offer Letter)', ctc: 'Rs. 2.08LPA' },
                                  { sr: 19, name: 'Akshay Arun Jadhao', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.6LPA' },
                                  { sr: 20, name: 'Gaurav Ajay Varma', company: 'HDFC Bank', ctc: 'Rs. 3.25LPA' },
                                  { sr: 21, name: 'Harshal Kamlakar Gawai', company: 'SmartED Bangalore', ctc: 'Rs. 3-6LPA' },
                                  { sr: 22, name: 'Mansi Vilas Bharane', company: 'SmartED Bangalore', ctc: 'Rs. 3-6LPA' },
                                  { sr: 23, name: 'Mansi Vilas Bharane', company: 'Academor', ctc: 'Rs. 3-6LPA' },
                                  { sr: 24, name: 'Monika Kishor Ghawat', company: 'HDFC Bank', ctc: 'Rs.3.5 LPA' },
                                  { sr: 25, name: 'Revati Sharadrao Mahalle', company: 'SPCL Infotech Services Pvt Ltd, Pune', ctc: 'Rs.1.8LPA' },
                                  { sr: 26, name: 'Shraddha Rameshwar Gon dchwar', company: 'SmartED Bangalore', ctc: '3-6LPA' },
                                  { sr: 27, name: 'Shrusti Suryakant Purwal', company: 'SmartED Bangalore', ctc: '3-6LPA' },
                                  { sr: 28, name: 'Sneha Bhagwan Gaikwad', company: 'SmartED Bangalore', ctc: '3-6LPA' },
                                  { sr: 29, name: 'Tanaya Ajay Mate', company: 'SmartED Bangalore', ctc: '3-6LPA' },
                                  { sr: 30, name: 'Vishakha Vijay Tantak', company: 'SmartED Bangalore', ctc: '3-6LPA' },
                                  { sr: 31, name: 'Kunal Sanjy Bhise', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.6LPA' },
                                  { sr: 32, name: 'Kunal Sanjy Bhise', company: 'HDFC', ctc: 'Rs.3.5 LPA' },
                                  { sr: 33, name: 'Lucky Radheshyam Rathi', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.6LPA' },
                                  { sr: 34, name: 'Shubham Damodar Ratho d', company: 'SmartED Bangalore', ctc: 'Rs. 3-6LPA' },
                                  { sr: 35, name: 'Vaibhav Jayendra Ahir', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.6LPA' },
                                  { sr: 36, name: 'Anmol Ramesh Solanke', company: 'Parijat Industries Pvt. Ltd., Jalgaon', ctc: '' },
                                  { sr: 37, name: 'Ishan Pavan Shah', company: 'Home First Finance Company India Limited, Amravati', ctc: 'Rs.3.2LPA' },
                                  { sr: 38, name: 'Sneha Sunil Wankhede', company: 'Obits Learning, Bangalore', ctc: 'Rs. 3.00 LPA' },
                                  { sr: 39, name: 'Utkarsha Dhanraj Nitnawa re', company: 'SmartED Bangalore', ctc: 'Rs. 3-6LPA' },
                                  { sr: 40, name: 'Vaishnavi Manish Hiwral', company: 'Obits Learning, Bangalore', ctc: 'Rs. 3.00 LPA' },
                                  { sr: 41, name: 'Mahesh Ratanlal Girhe', company: 'HDFC', ctc: 'Rs. 3.12 LPA' },
                                  { sr: 42, name: 'Sumersing Babusing Barw al', company: 'Bush Electromech & Engineering Pvt. Ltd., Aurangabad', ctc: 'Rs. 2.4 LPA' },
                                  { sr: 43, name: 'Vitthal Dnyaneshwar Ram ekar', company: 'Obits Learning, Bangalore', ctc: 'Rs. 3.00 LPA' },
                                  { sr: 44, name: 'Aishwarya Vinayak Tayade', company: 'Right Move Staffing Solutions Pvt.Ltd., Pune', ctc: '' }
                              ].map((student, i) => (
                                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                                      <td className="px-4 py-3 text-center text-gray-500">{student.sr}</td>
                                      <td className="px-4 py-3 text-gray-900 font-medium">{student.name}</td>
                                      <td className="px-4 py-3 text-gray-700">{student.company}</td>
                                      <td className="px-4 py-3 text-center text-ssgmce-blue font-semibold">{student.ctc}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
           </motion.div>
        )}
        </AnimatePresence>
      </div>
    ),

    'newsletter': (
      <div className="space-y-12">
          {/* Newsletter Header */}
          <div className="text-center">
             <div className="w-16 h-16 bg-blue-50 text-ssgmce-blue rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
                <FaBullseye />
             </div>
             <h3 className="text-3xl font-bold text-gray-800 mb-4">Department Newsletters</h3>
             <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Stay updated with the latest happenings, student achievements, faculty contributions, and department events through our periodic newsletters.
             </p>
          </div>

          {/* Current Issue - Featured */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Thumbnail Placeholder */}
                  <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-100 rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300 group-hover:border-orange-300 transition-colors">
                      <FaAward className="text-5xl text-gray-300 mb-4 group-hover:text-orange-400 transition-colors" />
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cover Page</span>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-ssgmce-blue font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                          Latest Release
                      </span>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">
                          Volume I: 2025-26 (Term I)
                      </h4>
                      <p className="text-gray-500 mb-6">
                          Highlights: Top placement records, Industry collaborations with leading corporates, Student achievements, and Faculty research milestones.
                      </p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                          <a 
                             href="/documents/news-letter-mba-25-26-I.pdf" 
                             className="flex items-center px-6 py-3 bg-ssgmce-blue text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-ssgmce-dark-blue hover:shadow-xl transition-all"
                             target="_blank"
                             rel="noopener noreferrer"
                          >
                              <FaDownload className="mr-2" /> Download Newsletter
                          </a>
                          <button className="flex items-center px-6 py-3 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                              Read Online
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          {/* Archives */}
          <div>
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-gray-800 rounded-full mr-3"></span>
                  Archives
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                 {[
                     { vol: "Vol II: 2024-25", term: "Term II", date: "May 2025" },
                     { vol: "Vol I: 2024-25", term: "Term I", date: "Dec 2024" },
                     { vol: "Vol II: 2023-24", term: "Term II", date: "May 2024" }
                 ].map((issue, i) => (
                     <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-200 hover:shadow-md transition-all group">
                         <div className="flex justify-between items-start mb-4">
                             <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-ssgmce-orange transition-colors">
                                 <FaAngleRight />
                             </div>
                             <span className="text-xs font-mono text-gray-400">{issue.date}</span>
                         </div>
                         <h5 className="font-bold text-gray-800 mb-1">{issue.vol}</h5>
                         <p className="text-sm text-gray-500 mb-4">{issue.term}</p>
                         <button className="text-sm font-bold text-ssgmce-blue hover:underline flex items-center">
                             Download <FaDownload className="ml-2 text-xs" />
                         </button>
                     </div>
                 ))}
              </div>
          </div>
      </div>
    ),

    'projects': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          UG/PG Projects (Dissertation)
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 w-24">Group No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Project Title</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { no: 1, title: 'A study on work life balance among working women of Maharashtra Police in Buldhana District' },
                  { no: 2, title: 'A study of impact of social media in knowledge development of farmers' },
                  { no: 3, title: 'A Study of Socio Economic Impact of Road Traffic Congestion in Nandura' },
                  { no: 4, title: 'A Study Of Employee Motivation In Select Banks in Sangrampur region' },
                  { no: 5, title: 'A study of Recruitment and Selection process in HDFC Bank Shegaon' },
                  { no: 6, title: 'A Study on effective role of Human Resource Management in Vikamshi Fabrics Pvt. Ltd.' },
                  { no: 7, title: 'A Study of Implications on Employees Performance and Organizational Productivity wrt Work' },
                  { no: 8, title: 'A study of customer satisfaction in banking industry with special reference to private sector banks in Buldhana district' },
                  { no: 9, title: 'DIMENSIONS OF WORK FROM HOME CULTURE - A STUDY' },
                  { no: 10, title: 'A study on motivational strategies and their effectiveness on employees productivity in private financial institutions in Akola region.' },
                  { no: 11, title: 'Impact of Social Media on Youth\'s Social Life and Buying Behaviour - A Study of Khamgaon Region' },
                  { no: 12, title: 'Systematic Study on Attrition of workers of Unorganized Sector in Khamgaon Region' },
                  { no: 13, title: 'A comparative study on job satisfaction of teachers between Government and Private sector in Akola region' },
                  { no: 14, title: 'A study on changing pattern of demand for E-Banking services in Shegaon' },
                  { no: 15, title: 'A STUDY ON STRESS MANAGEMENT TECHNIQUES FOR LABOURS WITH REFERENCE TO PARAS THERMAL POWER STATION' },
                  { no: 16, title: 'Comparative analysis of key players in dairy industry - A study of Khamgaon region' },
                  { no: 17, title: 'A Study of Customer Satisfaction towards Fastrack Watches in Akola Region' },
                  { no: 18, title: 'A study of potential of housewives to establish small scale businesses' },
                  { no: 19, title: 'Prospect of financial inclusion of rural customers - A study of Lanjud village' },
                  { no: 20, title: 'A Study of Self-Help Groups & Women\'s Empowerment in Rural Area - A Case of Akola' },
                  { no: 21, title: 'A study on effectiveness of competency mapping process on employee\'s development at Jadhao Gear Amravati' },
                  { no: 22, title: 'A STUDY ON FACTORS INFLUENCING THE INVESTMENT BEHAVIOR OF STUDENTS PURSUING HIGHER EDUCATION IN AMRAVATI.' },
                  { no: 23, title: 'A Study and design of training programs for employees in SBI, Akot' },
                  { no: 24, title: 'AN ANALYSIS OF BUYING DECISION FOR ELECTRIC TWO WHEELER - A STUDY OF SHEGAON-KHAMGAON REGION' },
                  { no: 25, title: 'A Comparative Study of Customer Perception Regarding Housing Loan Schemes of Public and Private Sector Banks' },
                  { no: 26, title: 'A study of grievance management system with special reference to SBI customers in Shegaon' },
                  { no: 27, title: 'IMPACT OF STRESS ON EMPLOYEES BEHAVIOR IN ORGANIZATION - A STUDY OF KHAMGAON REGION' },
                  { no: 28, title: 'A study and design of Employee Engagement In HUL Company Khamgaon' },
                  { no: 29, title: 'Perception About Mobile Banking- A Study of Buldhana Region' },
                  { no: 30, title: 'A STUDY ON INVESTMENT PATTERN OF INVESTORS IN GOLD WITH SPECIAL REFERENCE TO MIDDLE CLASS PEOPLE IN BULDHANA REGION' },
                  { no: 31, title: 'STUDY ON GST AND ITS IMPACT ON MNC MANUFACTURING INDUSTRY' },
                  { no: 32, title: 'INDIA POST PAYMENT BANK PROBLEM AND PROSPECT IN AKOLA REGION' },
                  { no: 33, title: 'A Study On The Consumer Behaviour Towards Domestic Water Purifiers In Akola Region' },
                  { no: 34, title: 'A study of Training & development Policies in Indorama synthetics Pvt. Ltd. Buttibori, Nagpur' },
                  { no: 35, title: 'A COMPARATIVE STUDY OF SELECT INSURANCE COMPANIES & THEIR PRODUCTS IN BULDHANA REGION.' },
                  { no: 36, title: 'COMPARATIVE ANALYSIS OF FINANCIAL PERFORMANCE OF SELECT PUBLIC SECTOR AND PRIVATE SECTOR BANKS FROM 2017-2022' },
                  { no: 37, title: 'A STUDY ON UNDERSTANDING CUSTOMER SATISFACTION LEVEL REGARDING E-MONEY IN KARANJA REGION' },
                  { no: 38, title: 'Customer Preference towards Ice Creams - A study in Malkapur region with respect to Havmor and Top-n-Town' },
                  { no: 39, title: 'Exploring the factors influencing career choice and motivation of student in the transition phase of education' },
                  { no: 40, title: 'A STUDY ON UNDERSTANDING CUSTOMER SATISFACTION LEVEL REGARDING E-MONEY IN KARANJA REGION' },
                  { no: 41, title: 'A Study of Insurance as a vehicle of saving in Buldhana District' },
                  { no: 42, title: 'SERVQUAL: An Analytical Study of Public and Private Hospitals in Buldhana District' },
                  { no: 43, title: 'A study of financial analysis with reference to Visaka Industries Ltd. Mauda, Nagpur for a period of 2019 to 2022.' },
                  { no: 44, title: 'A STUDY OF MARKETING STRATEGY OF MAHARAJA MASALA UDOYG IN BULDHANA DISTRICT' },
                  { no: 45, title: 'A STUDY OF DEALERS AND DISTRIBUTION OF AGRO- BUSINESS MARKETING IN MALKAPUR REGION' },
                  { no: 46, title: 'A STUDY INCLINATION OF STAKEHOLDERS TOWARDS EQUITY BASED MUTUAL FUND IN AKOLA REGION' },
                  { no: 47, title: 'A study on demand of Paver Blocks in Shegaon region' },
                  { no: 48, title: 'A Study on the Customer Perception towards Electric Bike In Buldhana District' },
                  { no: 49, title: 'A STUDY OF VARIOUS BANK APPS AND ALLIED CUSTOMER SATISFACTION' },
                  { no: 50, title: 'A STUDY OF BRAND SWITCHING IN CASE OF SMARTPHONE' },
                  { no: 51, title: 'COMPETITIVE ANALYSIS OF ORGANAIZATION INVOLVED IN NETWORKING SERVICES' },
                  { no: 52, title: 'A comparative study of satisfaction on Asian and Indigo paint in Shegaon region' },
                  { no: 53, title: 'Adoptability of Digital Marketing by the Retailers in Shegaon Region - A Study' },
                  { no: 54, title: 'A STUDY ON THE FACTORS INFLUENCING DECISIONS OF THE INVESTORS TO INVEST IN SIP IN BULDHANA REGION' }
                ].map((project, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold text-center">{project.no}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{project.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    'specializations': (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-ssgmce-orange">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Specializations Offered</h2>
          <p className="text-gray-600">Choose your area of expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: 'Financial Management', icon: '💰', desc: 'Focus on financial analysis, investment management, and corporate finance' },
            { name: 'Marketing Management', icon: '📊', desc: 'Learn brand management, digital marketing, and consumer behavior' },
            { name: 'Human Resource Management', icon: '👥', desc: 'Specialize in talent management, organizational behavior, and HR analytics' },
            { name: 'Business Analytics', icon: '📈', desc: 'Master data analytics, business intelligence, and decision science' }
          ].map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-ssgmce-orange"
            >
              <div className="flex items-center mb-3">
                <span className="text-4xl mr-4">{spec.icon}</span>
                <h3 className="text-xl font-bold text-gray-800">{spec.name}</h3>
              </div>
              <p className="text-gray-600">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  };

  const renderContent = () => {
    if (content[activeTab]) {
      return content[activeTab];
    }
    return (
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
        <div className="flex items-center mb-3">
          <FaLightbulb className="text-3xl text-yellow-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-800">Coming Soon</h3>
        </div>
        <p className="text-gray-600">This section is under development and will be updated soon with comprehensive information.</p>
      </div>
    );
  };

  const SidebarLink = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full text-left px-4 py-3 rounded-lg transition-all group flex items-center justify-between font-medium text-sm
        ${activeTab === id 
            ? 'bg-ssgmce-blue text-white shadow-md transform translate-x-1' 
            : 'text-gray-600 hover:bg-blue-50 hover:text-ssgmce-blue'}`}
    >
        <span className="flex items-center">
            <span className={`w-1.5 h-1.5 rounded-full mr-3 ${activeTab === id ? 'bg-white' : 'bg-gray-300 group-hover:bg-ssgmce-orange'}`}></span>
            {label}
        </span>
        {activeTab === id && <FaAngleRight className="opacity-80" />}
    </button>
  );

  return (
    <GenericPage title="Master of Business Administration (MBA)" backgroundImage={mbaBanner}>
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Sidebar Navigation (Left Side) */}
        <div className="lg:w-1/4 order-1 lg:order-1">
             <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                 {/* Academics Section */}
                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
                        <FaUniversity className="text-ssgmce-blue mr-2" /> Academics
                    </h3>
                    <div className="space-y-1">
                        {academicsLinks.map((link) => (
                            <SidebarLink key={link.id} {...link} />
                        ))}
                    </div>
                 </div>

                 {/* Industry Interaction Section */}
                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b border-gray-100 pb-3">
                        <FaIndustry className="text-orange-500 mr-2" /> Industry Relation
                    </h3>
                    <div className="space-y-1">
                        {industryLinks.map((link) => (
                            <SidebarLink key={link.id} {...link} />
                        ))}
                    </div>
                 </div>
             </div>
        </div>

        {/* Main Content Area (Right Side) */}
        <div className="lg:w-3/4 order-2 lg:order-2 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </GenericPage>
  );
};

export default MBA;


