import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import electronicsBanner from '../../assets/images/departments/electronics/Electronics Banner.png';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  FaLaptopCode, FaBullseye, FaUserTie, FaAward, FaAngleRight, 
  FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone,
  FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram,
  FaCalendarAlt, FaDownload
} from 'react-icons/fa';

// Faculty Photos
import DN from '../../assets/images/departments/electronics/faculty/DN.jpg';
import KBK from '../../assets/images/departments/electronics/faculty/KBK.jpg';
import RSD from '../../assets/images/departments/electronics/faculty/RSD.jpg';
import MNT from '../../assets/images/departments/electronics/faculty/MNT.jpg';
import SBP from '../../assets/images/departments/electronics/faculty/SBP.jpg';
import VMU from '../../assets/images/departments/electronics/faculty/VMU.jpg';
import DLB from '../../assets/images/departments/electronics/faculty/DLB.jpg';
import BPH from '../../assets/images/departments/electronics/faculty/BPH.jpg';
import DPT from '../../assets/images/departments/electronics/faculty/DPT.jpg';
import AND from '../../assets/images/departments/electronics/faculty/AND.jpg';
import VKB from '../../assets/images/departments/electronics/faculty/VKB.jpg';
import KTK from '../../assets/images/departments/electronics/faculty/KTK.jpg';
import KSV from '../../assets/images/departments/electronics/faculty/KSV.jpg';
import SPB from '../../assets/images/departments/electronics/faculty/SPB.jpg';
import TPM from '../../assets/images/departments/electronics/faculty/TPM.jpg';
import SGN from '../../assets/images/departments/electronics/faculty/SGN.jpg';
import VSI from '../../assets/images/departments/electronics/faculty/VSI.jpg';
import AAD from '../../assets/images/departments/electronics/faculty/AAD.jpg';
import HBP from '../../assets/images/departments/electronics/faculty/HBP.jpeg';
import RSM from '../../assets/images/departments/electronics/faculty/RSM.jpeg';
import NSD from '../../assets/images/departments/electronics/faculty/NSD.jpeg';
import MBD from '../../assets/images/departments/electronics/faculty/MBD.jpeg';
import SPS from '../../assets/images/departments/electronics/faculty/SPS.jpeg';
import GK from '../../assets/images/departments/electronics/faculty/GK.jpeg';
import hodPhoto from '../../assets/images/departments/electronics/EXTC_HOD.jpg';

const EnTC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState('projects');
  const [projectYear, setProjectYear] = useState('2024-25');
  const [researchYear, setResearchYear] = useState('2023-24');
  const [placementYear, setPlacementYear] = useState('2023-24');
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState('toppers');

  const academicsLinks = [
    { id: 'overview', label: 'Department Overview' },
    { id: 'hod', label: 'Words from HOD' },
    { id: 'vision-mission', label: 'Vision, Mission, PEO & PSO' },
    { id: 'course-outcomes', label: 'Course Outcomes' },
    { id: 'curriculum', label: 'Scheme and Syllabus' },
    { id: 'laboratories', label: 'Infrastructure and Laboratories' },
    { id: 'pride', label: 'Pride of the Department' },
    { id: 'best-projects', label: 'Student\'s Best Projects' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Co-Curricular Activities' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'committee', label: 'Departmental Committee' },
    { id: 'services', label: 'Services Extended' },
    { id: 'projects', label: 'UG Projects' },
    { id: 'staff', label: 'Staff @ Department' },
    { id: 'course-material', label: 'Course Material' },
    { id: 'magazines', label: 'Magzines' },
    { id: 'practices', label: 'Innovative Practice' },
    { id: 'faculty', label: 'Faculty Members' },
  ];

  const industryLinks = [
    { id: 'industrial-visits', label: 'Industrial Visits' },
    { id: 'mous', label: 'MoUs & Collaborations' },
    { id: 'patents', label: 'Patents & Publications' },
    { id: 'internships', label: 'Internship Programs' },
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
                      src="https://www.youtube.com/embed/UdeovCSHM1U" 
                      title="Department of Electronics and Telecommunication, SSGMCE, Shegaon"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>

              <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
                  <p>
                      The Department of Electronics and Telecommunication Engineering is one of the major department of SSGMCE, Shegaon established in 1983 offering programs: Under Graduate, Post Graduate and Ph.D. It is affiliated to Sant Gadge Baba Amravati University, Amravati, recognized by AICTE, New Delhi and approved by DTE, Maharashtra.
                  </p>
              </div>
            </div>
        </div>

        {/* Courses Section - Table Format like CSE */}
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
                        {/* BE */}
                        <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">UG: B.E. Electronics and Telecommunication Engineering</td>
                        </tr>
                        {[ 
                            ['Degree', 'B.E. (Electronics and Telecommunication Engineering)'],
                            ['Duration', '4 Year(8 Semesters) (Full time)'],
                            ['Intake', '120 Students per year'],
                            ['Establishment', 'Year: 1983'],
                            ['NBA Status', 'Accredited by NBA 6 Times (Currently Accredited for 01-07-2022 to 30-06-2025)'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                         {/* ME */}
                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4">PG: M.E. Digital Electronics</td>
                        </tr>
                        {[ 
                            ['Degree', 'M.E. (Digital Electronics)'],
                            ['Duration', '2 Year(4 Semesters) (Full time)'],
                            ['Intake', '18 Students per year'],
                            ['Establishment', 'Year: 2001'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                        {/* PhD */}
                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Ph. D Electronics and Telecommunication Engg.</td>
                        </tr>
                         {[ 
                            ['Duration', '3 Years'],
                            ['Intake', '20 Students'],
                            ['Establishment', 'Year: 2004'],
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
                <p className="text-ssgmce-blue font-medium">Dr. D. D. Nawgaje</p>
                <p className="text-sm text-gray-500">Associate Professor & Head, Dept. of Electronics and Telecommunication Engineering</p>
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
                            To impart quality education and excel in Electronics and Telecommunication Engineering research to serve the global society.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            'To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.',
                            'To produce competent, entrepreneurial and committed Electronics and Telecommunication Engineers.',
                            'To develop state-of-the -art infrastructure, centers of excellence and to pursue research of global and local relevance.',
                            'To inculcate ethical, spiritual and human values to serve the global society.'
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

        {/* Bottom Section: PEO, PO, PSO Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex flex-wrap border-b border-gray-200 bg-gray-50/50">
                 {[
                    { id: 'peo', label: 'Program Educational Objectives' },
                    { id: 'po', label: 'Program Outcomes' },
                    { id: 'pso', label: 'Program Specific Objectives' }
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
                            'To produce Electronics & Telecommunication engineers with a strong foundation of Mathematics, Science and Technology to fulfill needs of society.',
                            'To enable students to innovate design, simulate, develop, analyze and test hardware and software components for offering solutions to real life situations using state-of-the-art infrastructure and R&D facilities.',
                            'To nurture students with professional attitude, leadership, entrepreneurship, effective communication, teamwork & multi-disciplinary approach to serve in national and multinational organizations.',
                            'To inculcate ethical, moral and environment friendly values in students.'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}

                 {poTab === 'pso' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                         {[
                            'Students will be able to apply the fundamental and design knowledge in the areas of analog and digital circuits and systems for solving the real world engineering problems',
                            'Students will be able to apply the fundamental knowledge for the analysis and development of communication based circuits and systems'
                         ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                         ))}
                     </motion.div>
                 )}

                {poTab === 'po' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="space-y-4">
                            {[
                                { t: "Engineering knowledge", d: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
                                { t: "Problem analysis", d: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
                                { t: "Design/development of solutions", d: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
                                { t: "Conduct investigations of complex problems", d: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
                                { t: "Modern tool usage", d: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
                                { t: "The engineer and society", d: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
                                { t: "Environment and sustainability", d: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
                                { t: "Ethics", d: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
                                { t: "Individual and team work", d: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
                                { t: "Communication", d: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
                                { t: "Project management and finance", d: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                                { t: "Life-long learning", d: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
                            ].map((po, i) => (
                                <div key={i} className="text-gray-700 leading-relaxed text-sm">
                                    <strong className="text-gray-900 block mb-1 text-base">{po.t}:</strong>
                                    {po.d}
                                </div>
                            ))}
                        </div>
                     </motion.div>
                 )}
             </div>
        </div>
      </div>
    ),

    'curriculum': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            Scheme and Syllabus
        </h3>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             {/* B.E. Section */}
            <div className="grid md:grid-cols-12 border-b border-gray-200">
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                    <h4 className="font-bold text-lg text-gray-800">
                        B.E. (Electronics and Telecommunication Engineering)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                    <ul className="space-y-4">
                        {[
                            { label: "NEP Scheme", link: "#" },
                            { label: "Scheme", link: "#" },
                            { label: "Notification letter- Revised Scheme only for open Elective subject", link: "#" },
                            { label: "Syllabus Second Year (3rd Sem)", link: "#" },
                            { label: "Syllabus Second Year (4th Sem)", link: "#" },
                            { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP", link: "#" },
                            { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
                            { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
                            { label: "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)", link: "#" },
                            { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" },
                            { label: "Revised Syllabus for Open Elective Final Year (7th & 8th Sem)", link: "#" }
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

            {/* M.E. Section */}
            <div className="grid md:grid-cols-12 bg-gray-50/30">
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                     <h4 className="font-bold text-lg text-gray-800">
                        M.E.(Digital Electronics)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3 group">
                             <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                             <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <span className="text-gray-700 text-sm font-medium">Scheme and Syllabus M.E. (1st & 2nd Sem)</span>
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

    'hod': (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
         {/* Profile Section - Top Center */}
         <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
             <div className="flex flex-col items-center">
                 <div className="w-56 h-56 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
                    <img 
                        src={hodPhoto} 
                        alt="Dr. D. D. Nawgaje - HOD EnTC" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. D. D. Nawgaje</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Electronics & Telecommunication Engineering</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>hod_extc@ssgmce.ac.in</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center">
                        <FaPhone className="mr-2 text-ssgmce-orange" />
                        <span>+91 9422119515</span>
                    </div>
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
                    <p>
                        The Department of Electronics and Telecommunication Engineering is one of the major departments of SSGMCE, Shegaon established in <span className="font-semibold text-gray-900">1983</span> offering programs: Under Graduate, Post Graduate and Ph.D. It is affiliated to Sant Gadge Baba Amravati University, Amravati, recognized by AICTE, New Delhi and approved by DTE, Maharashtra. The Undergraduate program of the Department of Electronics and Telecommunication Engineering has the recognition of being accredited <span className="font-semibold text-gray-900">05 times by NBA, AICTE, New Delhi.</span> The post graduate program was also accredited once by NBA, AICTE, New Delhi.
                    </p>
                    <p>
                        All the laboratories in the department are well equipped to run the program specific curriculum prescribed by the University. All laboratories are recognized and approved as research laboratories for Ph.D. work by SGB Amravati University.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. D. D. Nawgaje</p>
                        <p className="text-sm text-gray-500">Head, Dept. of Electronics and Telecommunication Engineering</p>
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

    'laboratories': (
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Infrastructure and Laboratories</h3>
            <p className="text-gray-600">Our well-equipped laboratories feature high-end configurations to support advanced curriculum requirements and research initiatives.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {[
            {
              name: "Digital Signal Processing Laboratory",
              area: "65.45 Sq.Mtrs",
              systems: "22 PC",
              resources: "Universal trainer kit for CPLD/FPGA, TK based universal programmer, DM 642 EVM Based Board for DSP, IBM e-server 226, DSO 60 MHz, arbitrary waveform generator, TMS 320C6711, 320C6713 DSP kit and ADC THS 1206 EVM, TMS DSP processor kits, UPS 10 KVA, PMOD WiFi I/F Card, Nexys 3 Spartan Board, Cranes MSP Starter Kit, Virtex II xilinx Board with Xilinx & Sysgen Software, Fingerprint Daughter Card, Dskeye Module, PMOD DA2 I/F Card, PMOD A2D I/F Card, PMOD Stepper Motor I/F Card"
            },
            {
              name: "Microprocessor & Microcontroller Laboratory",
              area: "99.255 Sq.Mtrs",
              systems: "22 PC",
              resources: "Virtex II board with Xilinx and sysgen, SP3, SP6 software, ARM processor titan board, ARM processor metis board, ARM processor explorer board, ARM processor voyager board, atmega 16 board, 8085 and 8051 development boards"
            },
            {
              name: "Power Electronics Lab / Instrumentation Laboratory",
              area: "84.23 Sq.Mtrs",
              systems: "05 PC",
              resources: "AC and DC drives, inverters, converters, cyclo converter, chopper, drives, UPS, different power electronics kits, PC based instrumentation trainer, educational PLCs, DSP kit TMS320, CRO 60 MHz, PCB machine, MCK 28335 pro-SCIM, 3 phase converter (6 SCR), 3 phase induction motor control, 3 phase thyristor bridge and SCR firing unit, 8031 micro kit, AC Control Sm/6m, AC Drive, Analog technometer, Angular displacement capacitive, Battery charger, C.R.O. PM 3206 and 3230, DC series/shunt motor control, Device Characteristics Display, Digital Distormeter Factor Meter, Digital IC Tester Model Leapero, Digital Humidity/Temp Meter, Digital EMF Tester, Digital Storage Type CRO TDS 2012, I phase induction motor control, I phase PWM trainer, Integrated thyristor control"
            },
            {
              name: "Analog and Digital IC Laboratory",
              area: "90.168 Sq.Mtrs",
              systems: "05 PC",
              resources: "Digital CRO, function generator, IC tester, CD system, multimeter, Analog & Digital Ckt. Devp. Platform, Analog & Digital Trainer, CRO 30MHZ, LCRQ Meter, Digital Nanometer, Power Supply, IC Tester (Digital), Dimmerstat, power supply, UPS and computer"
            },
            {
              name: "Electronic Device and Circuit Laboratory",
              area: "60.48 Sq.Mtrs",
              systems: "05 PC",
              resources: "Digital CRO, function generator, multimeters, IC tester, CD system, Analog & Digital Ckt. Devp.Platform, Analog & Digital Trainer, CRO 30MHZ, Digital Nanometer, Power Supply, IC Tester (Digital), Dimmerstat, power supply (analog), UPS, computer, Digital Storage Oscilloscope 100 MHz, Printer Dot Matrix, LCR Meter, CD-System EDE-I, Pannel Meter (Digital), Phase Lock Loop Trainer Kit, Adv.Digital Trainer Kit, Curve Tracer Kit, Clap Oscillator Kit, Dual Timer Trainer Kit, Linear Op-Amp Trainer Kit, Transistor Ckt. Trainer Kit, Pulse Generator, Frequency Counter, Pannel Meter (Digital), Digital Multimeter Box Type"
            },
            {
              name: "Communication Engineering Laboratory",
              area: "90.168 Sq.Mtrs",
              systems: "12 PC",
              resources: "Spectrum analyzer, signal generator, synthesized function generator, fiber optic trainer, antenna trainer unit, GSM evaluation kit, satellite communication trainer, CDMA direct sequence spread spectrum, EPABX m/c with UPS, microstrip trainer, microwave training system, wave and Propagation Trainer, CA System, Microwave bench, Fiber Optic Connectorization Kit, CRO 100MHz and 60MHz, Vector Network Analyser"
            },
            {
              name: "Electronics Workshop Laboratory",
              area: "70.7 Sq.Mtrs",
              systems: "05 PC",
              resources: "LCD projector (NEC), Discrete component tester, system PCT-1, PCB prototype machine (EP-2002), Power Drill Machine with stand, Dual Power supply, LCR meter (Big), IC Tester (Linear), Digital IC Tester, Diode and Transister Tester, IBM thinkcenter PC, OHP portable, DVD Writer, Microphone wireless, Soldering & Desoldering Practice Trainer, Analog Multimeter-1 Demo, Digital Multimeter-1 Demo, Digital/Analog Ckt Trainer Lab Trainer, VCP Model no. VC-T-8, Air conditionar 1.5 TR Model-HC-181D, Air conditionar 2.0 TR Model-5241A, Oscilloscope 30MHz 2-channel"
            },
            {
              name: "Project Laboratory",
              area: "84.23 Sq.Mtrs",
              systems: "16 PC",
              resources: "Function generator, digital CRO, CD system, multimeters, lux meter, tachometers, thermometers, A.R.M. Processor Embedded Development system, C.R.O Make Scientech 20 MHz Model gT201, C.R.O. Tech Lab with Digital Voltmeter & Function Generator Model ST223DVM, Conductivity measurement trainer, CRO dual channel, D link switch, Digital Storage Type CRO Model TDg 2002, Educational PLC, Forced communication of 5cr 9m, Fuzzy logic kit, Frequency counter, Megnetic amplifier, Pulse generator, Printer Make Epson Model LQ1150, Signal phase dual converter, SP S F converter, Three phase squirrel cage"
            },
            {
              name: "VLSI & Embedded System Design Center",
              area: "Complete Cadence Suite with Synopsis Tools",
              systems: "20 PC with LED monitor 17\" and Intel i3 processor with 4GB RAM",
              resources: "Cadence IC 6.14, analog/RF/digital mixed signal EDA tools, virtuoso ADE verifier, virtuoso analog design environment, virtuoso space-based router"
            },
            {
              name: "PG Laboratory I",
              area: "65.45 Sq.Mtrs",
              systems: "14 PC",
              resources: "Universal trainer kit for CPLD/FPGA, TK based TMS 320C6713 DSP starter kit, cranes MSP-430 starter kit, Xilinx 13.4 and sysgen software"
            },
            {
              name: "YOGI-DIGI AIML Laboratory",
              area: "800 sq. ft.",
              systems: "35 PC",
              resources: "Server with 5th Generation Intel Xeon Scalable Processors, one compute node and one master node. Compute Node: Total Cores 32, Vertical Segment Server, Total Threads 64, Intel UPI Speed 20 GT/s, Processor Base Frequency 2.1 GHz. Master Node: Total Cores 12, Vertical Segment Server, Total Threads 24, Intel UPI Speed 16 GT/s, Processor Base Frequency 2.40 GHz. Smart Board, Jupyter Notebook Software"
            }
          ].map((lab, index) => (
            <div key={index} className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0">
              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🔬</span>
                </div>
                <h4 className="font-bold text-gray-800 text-center mt-4">{lab.name}</h4>
                <div className="mt-2 text-center space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Lab Area:</span> {lab.area}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Computer Systems:</span> {lab.systems}
                  </p>
                </div>
              </div>
              
              {/* Lab Details Column */}
              <div className="md:col-span-7 p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 text-sm mb-2">Lab Resources / Facilities:</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{lab.resources}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    'course-outcomes': (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Course Outcomes</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">Detailed course outcomes for all semesters</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* B.E. Course Outcomes Header */}
          <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-6">
            <h3 className="text-2xl font-bold text-white">B.E. (Electronics & Telecommunication Engineering)</h3>
            <p className="text-blue-100 mt-1">Click on semester to view detailed course outcomes</p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* B.E. Semester III */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem3' ? null : 'be-sem3')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-III</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem3' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem3' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester IV */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem4' ? null : 'be-sem4')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-IV</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem4' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem4' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester V */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem5' ? null : 'be-sem5')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-V</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem5' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem5' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester VI */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem6' ? null : 'be-sem6')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-VI</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem6' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem6' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester VII */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem7' ? null : 'be-sem7')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-VII</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem7' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem7' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester VIII */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem8' ? null : 'be-sem8')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-VIII</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem8' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem8' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* M.E. Course Outcomes Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6">
            <h3 className="text-2xl font-bold text-white">M.E. (Digital Electronics)</h3>
            <p className="text-orange-100 mt-1">Click on semester to view detailed course outcomes</p>
          </div>

          <div className="divide-y divide-gray-200">
            {/* M.E. Semester I */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'me-sem1' ? null : 'me-sem1')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">M.E. Semester-I</span>
                <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
                  {expandedSemester === 'me-sem1' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'me-sem1' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.E. Semester II */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'me-sem2' ? null : 'me-sem2')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">M.E. Semester-II</span>
                <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
                  {expandedSemester === 'me-sem2' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'me-sem2' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.E. Semester III */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'me-sem3' ? null : 'me-sem3')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">M.E. Semester-III</span>
                <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
                  {expandedSemester === 'me-sem3' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'me-sem3' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div className="text-center py-8">
                        <p className="text-gray-500 italic">Course outcomes data will be added soon</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    ),

    'pride': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Pride of the Department
        </h3>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {[
            { id: 'toppers', label: 'University Toppers' },
            { id: 'alumni', label: 'Top Alumnis of Department' },
            { id: 'gate', label: 'GATE Qualified' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPrideTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                prideTab === tab.id
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* University Toppers */}
        {prideTab === 'toppers' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Year</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Name of the Student</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Univ. Topper Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Percentage/CGPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { year: '2024', name: 'Rushikesh Ramesh Manekar', rank: 'I', cgpa: '9.73' },
                    { year: '2024', name: 'Aditya Raju Dahiwale', rank: 'II', cgpa: '9.67' },
                    { year: '2024', name: 'Suyog Subhash Paratwar', rank: 'III', cgpa: '9.49' },
                    { year: '2023', name: 'Dhanashri Ashokkumar Motghare', rank: 'I', cgpa: '9.46' },
                    { year: '2023', name: 'Snehal Keshaorao Malve', rank: 'III', cgpa: '9.32' },
                    { year: '2023', name: 'Diksha Chhagan Sontakke', rank: 'IV', cgpa: '9.30' },
                    { year: '2022', name: 'Sakshi Mohan Charolkar', rank: 'I', cgpa: '9.56' },
                    { year: '2022', name: 'Yash Suresh Deshmukh', rank: 'II', cgpa: '9.53' },
                    { year: '2022', name: 'Priyanka Vilas Dongre', rank: 'V', cgpa: '9.39' },
                    { year: '2021', name: 'Pooja Anil Belurkar', rank: 'II', cgpa: '9.44' },
                    { year: '2021', name: 'Sudarshan Anil Bodhankar', rank: 'III', cgpa: '9.42' },
                    { year: '2020', name: 'Rutuja Ramesh Bahekar', rank: 'I', cgpa: '9.39' },
                    { year: '2020', name: 'Shweta Vijay Umbarkar', rank: 'III', cgpa: '9.24' },
                    { year: '2019', name: 'Trupti Sunil Raut', rank: 'I', cgpa: '9.51' },
                    { year: '2019', name: 'Poorva Prakash Pagar', rank: 'II', cgpa: '9.41' }
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

        {/* Top Alumnis */}
        {prideTab === 'alumni' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Names of Alumni</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Position</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Names of Organisation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: 'Pravin Dongre', position: 'Additional Chief Engineer', org: 'MSEDCL, Mumbai' },
                    { name: 'Ranjeet Kumar', position: 'Assistant Commandant', org: 'CRPF, New Delhi' },
                    { name: 'Sandeep Deshmukh', position: 'Senior Manager', org: 'Tata Consultancy Services, Pune' },
                    { name: 'Pallavi Kale', position: 'Team Lead', org: 'Infosys Technologies, Bangalore' },
                    { name: 'Rahul Mehta', position: 'Senior Design Engineer', org: 'Qualcomm India, Hyderabad' },
                    { name: 'Sneha Patil', position: 'Principal Consultant', org: 'Accenture, Mumbai' },
                    { name: 'Amit Jadhav', position: 'Senior Software Engineer', org: 'Google India, Bangalore' },
                    { name: 'Priya Sharma', position: 'Product Manager', org: 'Amazon Development Center, Hyderabad' }
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

        {/* GATE Qualified */}
        {prideTab === 'gate' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Year</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Sr.No</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Name of student</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Valid Score</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { year: '2024', sr: '1', name: 'Aditya Dahiwale', score: '48.67', category: 'OPEN' },
                    { year: '2024', sr: '2', name: 'Rushikesh Manekar', score: '45.33', category: 'OPEN' },
                    { year: '2023', sr: '1', name: 'Dhanashri Motghare', score: '52.00', category: 'OPEN' },
                    { year: '2023', sr: '2', name: 'Snehal Malve', score: '38.67', category: 'OBC' },
                    { year: '2022', sr: '1', name: 'Yash Deshmukh', score: '55.67', category: 'OPEN' },
                    { year: '2022', sr: '2', name: 'Sakshi Charolkar', score: '44.33', category: 'OBC' },
                    { year: '2021', sr: '1', name: 'Sudarshan Bodhankar', score: '41.00', category: 'OPEN' },
                    { year: '2021', sr: '2', name: 'Pooja Belurkar', score: '36.33', category: 'OBC' },
                    { year: '2020', sr: '1', name: 'Rutuja Bahekar', score: '49.67', category: 'OPEN' },
                    { year: '2020', sr: '2', name: 'Shweta Umbarkar', score: '42.33', category: 'OBC' },
                    { year: '2019', sr: '1', name: 'Trupti Raut', score: '58.00', category: 'OPEN' },
                    { year: '2019', sr: '2', name: 'Poorva Pagar', score: '51.33', category: 'OPEN' },
                    { year: '2018', sr: '1', name: 'Ankit Shende', score: '39.67', category: 'OBC' },
                    { year: '2018', sr: '2', name: 'Manisha Wagh', score: '35.00', category: 'OBC' }
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">{student.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{student.sr}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{student.name}</td>
                      <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">{student.score}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{student.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    ),

    'best-projects': (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Student's Best Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">Award-Winning Projects by Our Students</p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm flex-wrap gap-1">
            {['2024-25', '2023-24', '2022-23', '2021-22'].map((year) => (
              <button
                key={year}
                onClick={() => setProjectYear(year)}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                  projectYear === year
                    ? 'bg-white text-ssgmce-blue shadow-md'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">Sr. No</th>
                  <th className="px-6 py-4 text-left font-bold">Title of Project</th>
                  <th className="px-6 py-4 text-left font-bold">Guided By</th>
                  <th className="px-4 py-4 text-center font-bold whitespace-nowrap">Award/Reward</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projectYear === '2024-25' && [
                  { no: 1, title: 'Child Vaccination and Reminder', guide: 'Mr. V. K. Bhangdiya', award: '1st Rank' },
                  { no: 2, title: 'Design & Analysis of Microstrip Patch Antenna for C-Band and X-Band', guide: 'Dr. D. P. Tulaskar', award: '1st Rank' },
                  { no: 3, title: 'Smart Neonatal Incubator for Temperature and Humidity Regulation', guide: 'Mr. V. M. Umale', award: '2nd Rank' },
                  { no: 4, title: 'Design of Electronic module for fitness, health and safety in smart shoes', guide: 'Dr. S B. Patil', award: '2nd Rank' }
                ].map((proj, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">{proj.no}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">{proj.title}</td>
                    <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        proj.award.includes('1st') ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {proj.award}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {projectYear === '2023-24' && [
                  { no: 1, title: 'Design and Implementation of smart Spectacle for blind People', guide: 'Dr. S.B. Patil', award: '1st Rank' },
                  { no: 2, title: 'Design and development of seed/granule spreader mechanism for unmanned aerial vehicle (UAV)', guide: 'Mr. V. S. Ingole', award: '1st Rank' },
                  { no: 3, title: 'E-notice board', guide: 'Dr. M. N. Tibdewal', award: '2nd Rank' },
                  { no: 4, title: 'Design And Implementation of An Integrated Automation System for Organic Fertilizer', guide: 'Mr. S. P. Badar', award: '2nd Rank' }
                ].map((proj, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">{proj.no}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">{proj.title}</td>
                    <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        proj.award.includes('1st') ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {proj.award}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {projectYear === '2022-23' && [
                  { no: 1, title: 'Smart safety Jacket', guide: 'Prof. A. N. Dolas', award: '1st Rank' },
                  { no: 2, title: 'Brain tumor detection using ML.', guide: 'Dr. P. R. Wankhede', award: '1st Rank' },
                  { no: 3, title: 'Design and development of water ionizer', guide: 'Prof. V. M. Umale', award: '2nd Rank' },
                  { no: 4, title: 'Design and analysis of multiband micro strip patch antenna', guide: 'Dr. S. B. Patil', award: '2nd Rank' }
                ].map((proj, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">{proj.no}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">{proj.title}</td>
                    <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        proj.award.includes('1st') ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {proj.award}
                      </span>
                    </td>
                  </tr>
                ))}
                
                {projectYear === '2021-22' && [
                  { no: 1, title: 'An automatic vacuum cleaning and swiping Robot', guide: 'Dr R.S. Dhekekar', award: '1st Rank' },
                  { no: 2, title: 'Pneumonia Detection Techniques Through X-ray Imaging', guide: 'Dr. M.N. Tibdewal', award: '1st Rank' },
                  { no: 3, title: 'The IOT Based Exercise Cycle', guide: 'Prof. K.T. Kahar', award: '2nd Rank' },
                  { no: 4, title: 'Robotic Vehicle Surveillance System', guide: 'Prof. V. S. Ingole', award: '2nd Rank' }
                ].map((proj, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">{proj.no}</td>
                    <td className="px-6 py-3 font-medium text-gray-800">{proj.title}</td>
                    <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                        proj.award.includes('1st') ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {proj.award}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    'activities': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Co-Curricular Activities
        </h3>

        <div className="space-y-6">
          {[
            {
              title: 'Workshop on Design-Fabricate-programming of Microcontroller Board',
              date: '22nd to 25th March 2025',
              coordinator: 'Prof. V.S. Ingole',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'JUNOON',
              date: '08/03/2025',
              resource: 'Bipin Mahore, Tanvi Kakad, Rajat Wankhede',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'ASYLUM',
              date: '07/03/2025',
              participants: '80 Students',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Alumni Faculty Student Interaction',
              date: '25/01/2025',
              resource: 'Alumni of SSGMCE EXTC branch',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Expert Talk on Carrier Guidance',
              date: '28/12/2024',
              resource: 'Milind Mohite',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Know your Department for 1st year students',
              date: '24/09/2024',
              resource: 'Dr. M. N. Tibdewal, Dr. K. T. Kahar, Mrs. K. S. Vyas',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Hands on Skill Development Program on Automation and Robotics (HMI, Drone Technologies, etc.)',
              date: '29th-30th Aug 2024, 26th-27th Sept. 2024',
              coordinator: 'Dr. R. S. Mahamune',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Workshop on Electronics Component Testing and Verification',
              date: '22nd Aug 2024',
              coordinator: 'Mr. H. B. Patil and Mr. S. P. Satal',
              department: 'EXTC Department & ISTE Student Chapter, SSGMCE',
              schedule: 'Every Weekend 4-5 Hours'
            },
            {
              title: 'Workshop on Placement Strategies and Career Opportunities',
              date: '3rd Aug 2024',
              participants: '46 Students',
              coordinator: 'Mrs. A. A. Deshmukh',
              department: 'ISTE Student Chapter, SSGMCE'
            },
            {
              title: 'Workshop on Canva',
              date: '3rd Aug 2024',
              participants: '26 Students',
              coordinator: 'Mr. V. K. Bhangdiya',
              department: 'IEEE Student Chapter, SSGMCE'
            },
            {
              title: 'Workshop on Design, Fabricate & Program an ESP 8266 Microcontroller board',
              date: '8th March to 11th March 2024',
              participants: '68 Students',
              coordinator: 'Prof. V. S. Ingole',
              department: 'FABLAB SSGMCE'
            },
            {
              title: 'Workshop on Arduino Mastery',
              date: '13-14/03/2024',
              participants: '18 students',
              department: 'ESSA Student Branch in association with IEEE Comsoc and IEEE WIE, SSGMCE'
            },
            {
              title: 'Workshop on ELECTROFIESTA',
              date: '15/03/2024',
              participants: '18 students',
              department: 'ESSA Student Branch in association with IEEE Comsoc and IEEE WIE, SSGMCE'
            },
            {
              title: 'Workshop on Secret of Canva 2.0',
              date: '08th October 2023',
              participants: '29 students',
              department: 'IEEE Student Branch, SSGMCE',
              organizer: 'ESSA Student Branch'
            },
            {
              title: 'Workshop on Robotics',
              date: '20-22nd October 2023',
              participants: '74 students',
              resource: 'Mr. Shrikant Shitre',
              department: 'IEEE Student Branch, SSGMCE'
            },
            {
              title: 'Workshop on LATEX Software',
              date: '16 & 17 September 2023',
              participants: '22 students',
              resource: 'Dr. N. S. Dharmale, Mr. R. S. Mahamune',
              coordinator: 'Ms. A. A. Deshmukh',
              department: 'ISTE Student chapter'
            },
            {
              title: "Engineer's Day Celebration",
              date: '15 Sept. 2023',
              participants: '53 students',
              department: 'ISTE Student chapter, Department Of Electronics And Telecommunication Engineering'
            },
            {
              title: 'Orientation Program 1st year electronics engineering students',
              date: '25 August 2023',
              participants: '80 students',
              department: 'ESSA Student Branch'
            },
            {
              title: 'Workshop on Microcontroller board Designing',
              date: '19st March to 22th March 2023',
              participants: '10 Team (3-4 members per Team)',
              coordinator: 'Prof. V. S. Ingole',
              department: 'FABLAB SSGMCE'
            },
            {
              title: 'Three Days Hands-on Workshop on Basics of CMOS Design using Cadence',
              date: '6th to 8th January 2023 / 24th to 26th March 2023',
              participants: '38 students',
              resource: 'Mr. S. P. Badar',
              department: 'Department of Electronics and Telecommunication Engineering, SSGMCE'
            },
            {
              title: 'Project Exhibition',
              date: '7th Jan 2023',
              participants: '45 student Groups',
              department: 'ISTE Student chapter'
            },
            {
              title: 'Two Days Hands-on Workshop on CMOS Digital Circuit Design',
              date: '3rd - 4th December 2022',
              participants: '32 students',
              resource: 'Mr. S. P. Badar',
              department: 'Department of Electronics and Telecommunication Engineering, SSGMCE'
            },
            {
              title: 'Three Days Hands-on Workshop on Verilog - Hardware Description Language',
              date: '4th to 6th March 2022',
              participants: '11 students',
              resource: 'Mr. S. P. Badar',
              department: 'Department of Electronics and Telecommunication Engineering, SSGMCE'
            },
            {
              title: 'Guest Lecture on Industrial Approach in Electronics & Arduino Programing',
              date: '14th Mar. 2022',
              participants: 'All EXTC students',
              resource: 'Mr. Sanjay A. Choudhary, Director Electronic Study Center, Nashik',
              coordinator: 'Prof. A.A. Deshmukh',
              department: 'Dept. of EXTC & ISTE Student chapter, SSGMCE'
            },
            {
              title: 'One Week online Workshop on CMOS Digital Circuit Design',
              date: '8th to 12th February 2021',
              participants: 'Faculty Members and Students from Outside SSGMCE',
              resource: 'Prof. S.P. Badar',
              coordinator: 'Dr. P. R. Wankhede',
              department: 'Dept. of EXTC and IEEE Students Branch SSGMCE'
            },
            {
              title: 'Two Week Online Hands-On Training Programme on RF Circuits and Antennas',
              date: '01-12 February, 2021',
              participants: 'Faculty Members and Students from Outside SSGMCE',
              coordinator: 'Dr. P. R. Wankhede and Prof. V. V. Ratnaparkhi',
              department: 'Dept. of EXTC, SSGMCE'
            },
            {
              title: 'Webinar on Role of Electronics Engineer in Industry',
              date: '27th Oct. 2020',
              participants: 'All EXTC students',
              resource: 'Mr. Sanjay A. Choudhary, Director Electronic Study Center, Nashik',
              coordinator: 'Dr. D. P. Tulaskar',
              department: 'Dept. of EXTC, SSGMCE'
            },
            {
              title: 'AICTE-ATAL sponsored Five days FDP on Internet of Things for Agriculture',
              date: '5th to 9th October 2020',
              participants: '200 students',
              resource: 'Dr. P.R. Wankhede',
              department: 'Dept. of EXTC, SSGMCE'
            },
            {
              title: 'International Webinar on Wireless Communication(6G) and IoT',
              date: '12 August 2020',
              participants: '1860 Students/Faculty All over the World',
              resource: 'Dr Anand Nayyar, Researcher and Scientist Duy Tan University, Da Nang, Vietnam',
              coordinator: 'Dr. D. P. Tulaskar and Prof. P. D. Kale',
              department: 'Dept. of EXTC, SSGMCE'
            },
            {
              title: 'One Week Online Hands-on Workshop on Wire Antennas: Design, Analysis and Optimization using 4nEC2X',
              date: '03-07 August 2020',
              participants: 'Faculty Members and Students from Outside SSGMCE',
              resource: 'Prof. V. V. Ratnaparkhi',
              coordinator: 'Dr. P.R. Wankhede',
              department: 'Department of EXTC, SSGMCE and SublunarCo, Pune'
            },
            {
              title: 'One Day Community Development program(CDP) on Electronic Engineering Equipments and Their Applications',
              date: '3rd January 2020',
              participants: '32 students of Shri Sant Gajanan Maharaj Jr. College Shegaon and Saraswati Jr. College Shegaon',
              coordinator: 'Prof V.N. Bhonge and Dr.D.P. Tulaskar',
              department: 'EXTC department, SSGMCE'
            },
            {
              title: 'Faculty Development Programme on Robotics and Artificial Intelligence',
              date: '24th June to 28th June 2019',
              participants: '24 faculty members across the country',
              coordinator: 'Prof. P. R. Wankhede',
              department: 'EXTC department, SSGMCE (Remote Center) and E & ICT Academy, IIITDM Jabalpur'
            },
            {
              title: 'Two Week Summer School on CMOS VLSI Circuit Design using Cadence',
              date: '17th June - 29th June 2019',
              participants: '17 students',
              coordinator: 'Dr. K. B. Khanchandani, Prof. S. P. Badar',
              department: 'Department of Electronics and Telecommunication, SSGMCE'
            },
            {
              title: 'Two Week Summer School on Smart Systems and Internet on Things',
              date: '17th June - 29th June 2019',
              participants: '15 students',
              coordinator: 'Dr. K. B. Khanchandani, Prof. P. R. Wankhede',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Two Days Workshop on Hands on VLSI Circuit Design using Cadence',
              date: '2nd - 3rd March 2019 and 16th - 17th March 2019',
              participants: '42 students',
              coordinator: 'Prof. S. P. Badar',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Faculty Development Programme on Computer Vision and Machine Learning',
              date: '03-07 Dec 2018',
              participants: '48 faculty members across the country',
              coordinator: 'Prof. Vikas. K. Bhangdiya',
              department: 'EXTC Department, SSGMCE'
            },
            {
              title: 'Three Days Workshop on Hands on Digital VLSI Design using Xilinx',
              date: '8th - 10th September 2018 and 21st-23rd September 2018',
              participants: '35 Students',
              coordinator: 'Prof. S. P. Badar',
              department: 'EXTC Department, SSGMCE'
            }
          ].map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaProjectDiagram className="text-ssgmce-blue text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="font-semibold text-ssgmce-blue mr-2">Date:</span>
                      {activity.date}
                    </p>
                    {activity.participants && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">Participants:</span>
                        {activity.participants}
                      </p>
                    )}
                    {activity.resource && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">Resource Person:</span>
                        {activity.resource}
                      </p>
                    )}
                    {activity.coordinator && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">Coordinator:</span>
                        {activity.coordinator}
                      </p>
                    )}
                    {activity.schedule && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">Schedule:</span>
                        {activity.schedule}
                      </p>
                    )}
                    <p className="text-gray-500 italic mt-2">{activity.department}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),

    'achievements': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Achievements
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Department Achievements & Recognition</h4>
            <p className="text-gray-600">Excellence in Academics, Research, and Innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBullseye className="text-3xl text-yellow-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">NBA Accreditation</h5>
                <p className="text-gray-600 text-sm">Accredited 5 times by NBA, AICTE, New Delhi</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserTie className="text-3xl text-ssgmce-blue" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">University Toppers</h5>
                <p className="text-gray-600 text-sm">15+ University rank holders in recent years</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaProjectDiagram className="text-3xl text-green-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">GATE Success</h5>
                <p className="text-gray-600 text-sm">14+ students qualified GATE in recent years</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaProjectDiagram className="text-3xl text-purple-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">Research Labs</h5>
                <p className="text-gray-600 text-sm">11 specialized laboratories for advanced research</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaProjectDiagram className="text-3xl text-red-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">Industry Connect</h5>
                <p className="text-gray-600 text-sm">Strong alumni network in top tech companies</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaProjectDiagram className="text-3xl text-indigo-600" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">Student Chapters</h5>
                <p className="text-gray-600 text-sm">Active IEEE, ISTE, and ESSA student chapters</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <FaProjectDiagram className="text-ssgmce-blue mr-3" />
            Recent Highlights
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-ssgmce-blue rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">International Webinar Success</p>
                <p className="text-sm text-gray-600">1860+ participants from around the world attended our webinar on Wireless Communication(6G) and IoT</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Award-Winning Projects</p>
                <p className="text-sm text-gray-600">16+ best projects recognized with 1st and 2nd ranks in university competitions over the last 4 years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Expert Faculty</p>
                <p className="text-sm text-gray-600">24 highly qualified faculty members including 7 PhDs conducting cutting-edge research</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-900">Continuous Learning</p>
                <p className="text-sm text-gray-600">40+ workshops, FDPs, and hands-on training programs conducted annually for skill development</p>
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
            <p className="text-gray-500 mt-2">Department of Electronics & Telecommunication Engineering</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {[
                { name: "Dr. D. D. Nawgaje", role: "Associate Professor & Head", area: ["Fuzzy Logic", "Neural Networks"], email: "hod_extc@ssgmce.ac.in", phone: "9422119515", photo: DN },
                { name: "Dr. K.B. Khanchandani", role: "Professor", area: ["Signal Processing", "Image Processing"], email: "kbkhanchandani@ssgmce.ac.in", phone: "9028751325", photo: KBK },
                { name: "Dr. R. S. Dhekekar", role: "Professor", area: ["Power Electronics", "FACTS"], email: "rsdhekekar@ssgmce.ac.in", phone: "9130678066", photo: RSD },
                { name: "Dr. M. N. Tibdewal", role: "Professor", area: ["Signal Processing", "Biomedical Instrumentation"], email: "mntibdewal@ssgmce.ac.in", phone: "+91 9423144228", photo: MNT },
                { name: "Dr. S. B. Patil", role: "Professor", area: ["VLSI-Analog/RF/Mixed Signal", "Embedded System"], email: "sbpatil@ssgmce.ac.in", phone: "+91 7020799970", photo: SBP },
                { name: "Mr. V. M. Umale", role: "Associate Professor & Dean Exam", area: ["Biomedical Instrumentation"], email: "vmumale@ssgmce.ac.in", phone: "9421394912", photo: VMU },
                { name: "Mr. D. L. Bhombe", role: "Associate Professor & Dean Academics", area: ["Fuzzy Logic", "Artificial Neural Networks"], email: "dlbhombe@ssgmce.ac.in", phone: "9422881796", photo: DLB },
                { name: "Dr. Ms. B. P. Harane", role: "Assistant Professor", area: ["Digital Signal Processing", "EEG Signal Processing"], email: "bpharne@ssgmce.ac.in", phone: "7030696867", photo: BPH },
                { name: "Dr. D. P. Tulaskar", role: "Associate Professor", area: ["VLSI Communication", "DSP"], email: "dhirajtulaskar@ssgmce.ac.in", phone: "9422182801", photo: DPT },
                { name: "Mr. A. N. Dolas", role: "Assistant Professor", area: ["Analog & Digital Electronics", "Robotics & Automation"], email: "amit.dolas@ssgmce.ac.in", phone: "9822271066", photo: AND },
                { name: "Mr. V. K. Bhangdiya", role: "Assistant Professor", area: ["Machine Learning", "Artificial Intelligence"], email: "vkbhangdiya@ssgmce.ac.in", phone: "98239368216", photo: VKB },
                { name: "Dr. K. T. Kahar", role: "Assistant Professor", area: ["MEMS", "Power Electronics", "Digital Communication"], email: "ktkahar@ssgmce.ac.in", phone: "8087103768", photo: KTK },
                { name: "Ms. K. S. Vyas", role: "Assistant Professor", area: ["Digital Image Processing", "Communication"], email: "komalthanvi@ssgmce.ac.in", phone: "9405456382", photo: KSV },
                { name: "Dr. S. P. Badar", role: "Assistant Professor", area: ["VLSI Design"], email: "spbadar@ssgmce.ac.in", phone: "9503733768", photo: SPB },
                { name: "Mr. T. P. Marode", role: "Assistant Professor", area: ["Parallel Computing", "Computer Networking"], email: "tpmarode@ssgmce.ac.in", phone: "8983286054", photo: TPM },
                { name: "Mr. S. G. Nemane", role: "Assistant Professor", area: ["Power Electronics", "Digital Communication"], email: "shonnemane@ssgmce.ac.in", phone: "9822924801", photo: SGN },
                { name: "Mr. V. S. Ingole", role: "Assistant Professor", area: ["Digital Electronics", "VLSI"], email: "vikramingole@ssgmce.ac.in", phone: "8380008509", photo: VSI },
                { name: "Mrs. A. A. Deshmukh", role: "Assistant Professor", area: ["Analog and Digital Communication"], email: "ashwini.deshmukh@ssgmce.ac.in", phone: "9764355531", photo: AAD },
                { name: "Mr. H. B. Patil", role: "Assistant Professor", area: ["Digital and Analog Electronics"], email: "hbpatil@ssgmce.ac.in", phone: "9763296843", photo: HBP },
                { name: "Dr. R. S. Mahamune", role: "Assistant Professor", area: ["Biomedical Signal Processing", "VLSI"], email: "rsmahamune@ssgmce.ac.in", phone: "7898046095", photo: RSM },
                { name: "Dr. N. S. Dharmale", role: "Assistant Professor", area: ["Material Science", "Device Simulation"], email: "nsdharmale@ssgmce.ac.in", phone: "7898046032", photo: NSD },
                { name: "Mr. M. B. Dhamande", role: "Assistant Professor", area: ["Analog & Digital Electronics", "Instrumentation"], email: "mbdhamande@gmail.com", phone: "9284799343", photo: MBD },
                { name: "Mr. S. P. Satal", role: "Assistant Professor", area: ["Power Electronics", "Instrumentation"], email: "sanjaysatal@gmail.com", phone: "9422182608", photo: SPS },
                { name: "Mr. Girish Kangane", role: "Professor of Practice", area: ["Industry Expert"], email: "", phone: "", photo: GK, isIndustry: true }
            ].map((fac, i) => (
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
                        <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">{fac.role}</p>
                        
                        {/* Compact Details */}
                        <div className="space-y-2 text-sm text-gray-600">
                             {fac.area && (
                                <p className="line-clamp-2 text-xs">
                                    <span className="font-bold text-gray-700">Area: </span>
                                    {fac.area.join(', ')}
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
                             
                             {!fac.isIndustry && (
                                <a href="#" className="inline-flex items-center text-[10px] font-bold text-ssgmce-blue mt-2 hover:underline uppercase tracking-wide">
                                    View Profile <FaAngleRight className="ml-1" />
                                </a>
                             )}
                        </div>
                    </div>
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
    <GenericPage title="Electronics & Telecommunication Engg." backgroundImage={electronicsBanner}>
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

export default EnTC;


