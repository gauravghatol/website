import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import mechanicalBanner from '../../assets/images/departments/mechanical/Mechnical banner.png';
import { FaLaptopCode, FaBullseye, FaUserTie, FaFlask, FaAward, FaAngleRight, FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone, FaIdCard, FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// HOD Photo
import hodPhoto from '../../assets/images/departments/mechanical/HOD_MECH.jpg';

// Faculty Photos
import SPT from '../../assets/images/departments/mechanical/faculty/SPT.jpg';
import VKThute from '../../assets/images/departments/mechanical/faculty/VKThute.jpg';
import JGKhan from '../../assets/images/departments/mechanical/faculty/Dr_JGKhan.jpg';
import MBB from '../../assets/images/departments/mechanical/faculty/MBB.jpg';
import CVPatil from '../../assets/images/departments/mechanical/faculty/CVPatil.jpg';
import ASB from '../../assets/images/departments/mechanical/faculty/ASB.jpg';
import NBBorkar from '../../assets/images/departments/mechanical/faculty/NBBorkar.jpg';
import NHK from '../../assets/images/departments/mechanical/faculty/NHK.jpeg';
import SQSyed from '../../assets/images/departments/mechanical/faculty/SQSyed.jpg';
import PTPatokar from '../../assets/images/departments/mechanical/faculty/PTPatokar.jpg';
import KVC from '../../assets/images/departments/mechanical/faculty/KVC.jpg';
import PiyushDalke from '../../assets/images/departments/mechanical/faculty/PiyushDalke.jpg';
import KRDudhe from '../../assets/images/departments/mechanical/faculty/KRDhudhe.jpg';
import SPJ from '../../assets/images/departments/mechanical/faculty/SPJ.jpg';
import GSWahile from '../../assets/images/departments/mechanical/faculty/ASB.jpg'; // Using placeholder
import VTMhaske from '../../assets/images/departments/mechanical/faculty/VTMhaske.jpg';
import ParagJadhav from '../../assets/images/departments/mechanical/faculty/Parag Jadhav.png';

// Staff Photos
import GRJodh from '../../assets/images/departments/mechanical/Staff/Gopal Jodh.jpg';
import SDDeshmukh from '../../assets/images/departments/mechanical/Staff/SDD.jpg';
import GAWayzode from '../../assets/images/departments/mechanical/Staff/GAW.jpg';
import ROBedre from '../../assets/images/departments/mechanical/Staff/ROB.jpg';
import PMDeshmukh from '../../assets/images/departments/mechanical/Staff/P M Deshmukh.jpeg';
import NDKamavisdar from '../../assets/images/departments/mechanical/Staff/NDK.jpg';
import GDIngle from '../../assets/images/departments/mechanical/Staff/GDI.jpg';
import VHAkhare from '../../assets/images/departments/mechanical/Staff/VHA.jpg';
import VSBharate from '../../assets/images/departments/mechanical/Staff/VSB.jpg';
import OSBhalerao from '../../assets/images/departments/mechanical/Staff/OSBhalerao.jpeg';
import DBWadode from '../../assets/images/departments/mechanical/Staff/DBW.jpg';
import PMDandwate from '../../assets/images/departments/mechanical/Staff/PMDandwate.jpg';
import MRDhoke from '../../assets/images/departments/mechanical/Staff/MRDhoke.jpg';
import VSBharsakale from '../../assets/images/departments/mechanical/Staff/VSBharsakale.jpg';
import MPRajurkar from '../../assets/images/departments/mechanical/Staff/MPRajurkar.jpg';
import VSDhage from '../../assets/images/departments/mechanical/Staff/VSDhage.jpg';
import RJOimbe from '../../assets/images/departments/mechanical/Staff/RJOimbe.jpg';
import VRRahate from '../../assets/images/departments/mechanical/Staff/VRRahate.jpg';
import BSSonone from '../../assets/images/departments/mechanical/Staff/BSSonone.jpg';
import GRPayghan from '../../assets/images/departments/mechanical/Staff/GRPayghan.jpg';
import AADhage from '../../assets/images/departments/mechanical/Staff/AADhage.jpg';
import RNPachade from '../../assets/images/departments/mechanical/Staff/RNPachade.jpg';

const Mechanical = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState('patents');
  const [projectYear, setProjectYear] = useState('2024-25');
  const [researchYear, setResearchYear] = useState('2024-25');
  const [placementYear, setPlacementYear] = useState(null);

  useEffect(() => {
    if (activeTab === 'student-projects') {
      window.scrollTo(0, 0);
      setProjectYear('2024-25');
    }
  }, [activeTab]);

  const academicsLinks = [
    { id: 'overview', label: 'Department Overview' },
    { id: 'hod', label: 'Words from HOD' },
    { id: 'vision-mission', label: 'Vision, Mission, PEO & PSO' },
    { id: 'course-outcomes', label: 'Course Outcomes' },
    { id: 'curriculum', label: 'Scheme and Syllabus' },
    { id: 'laboratories', label: 'Infrastructure and Laboratories' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Curricular Activities' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'learning-resources', label: 'Learning Resources' },
    { id: 'nba-resources', label: 'NBA Resource Material' },
    { id: 'staff', label: 'Staff @ Department' },
    { id: 'student-projects', label: 'UG Projects' },
    { id: 'practices', label: 'Innovative Practice' },
    { id: 'faculty', label: 'Faculty Members' },
  ];

  const industryLinks = [
    { id: 'visits', label: 'Industrial Visits' },
    { id: 'mous', label: 'MoUs' },
    { id: 'patents', label: 'Patent & Publication' },
    { id: 'internships', label: 'Internship and Training' },
  ];

  const content = {
    overview: (
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
                      src="https://www.youtube.com/embed/KZBAZmhnSFw" 
                      title="Department of Mechanical Engineering SSGMCE"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>

              <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
                  <p>
                      The Mechanical Engineering Department at SSGMCE, Shegaon is one of the most reputed departments in terms of facility, faculty, students, and activities. It continues to lead and expand its activities in various directions. The Department is known for the Expertise and State-of-the-art facilities especially in CAD-CAM, Computational Fluid Dynamics (CFD), Manufacturing and Production Technology, Energy Conversion, Composite Materials I. C. Engines, Mechatronics, Dr. Georg H Endress Lab and also in other core areas. Experimental and computational facilities are being continuously upgraded. Industry interaction has been increased with industrial visits and arranging expert lectures by industry personnel and carrying out the industry sponsored projects for students.
                  </p>
              </div>
            </div>
        </div>

        {/* Courses Section - Minimalistic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    Courses @ Mechanical Engineering
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
                        <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Bachelor of Engineering</td>
                        </tr>
                        {[ 
                            ['Degree', 'Bachelor of Engineering (Mechanical Engineering)'],
                            ['Duration', '4 Year(8 Semesters) (Full time)'],
                            ['Intake', '60 Students per year'],
                            ['Establishment', 'Year: 1993'],
                            ['NBA Status', 'Five Time Accredited & Valid upto 2025.'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4">Master of Engineering</td>
                        </tr>
                        {[ 
                            ['Specialization', 'M. E. Advanced Manufacturing & Mechanical Systems Design'],
                            ['Duration', '2 Year(4 Semesters) (Full time)'],
                            ['Intake', '24 Students per year'],
                            ['Establishment', 'Year: 2012'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Ph. D in Mechanical Engineering</td>
                        </tr>
                         {[ 
                            ['Duration', '3 Years'],
                            ['Intake', '05 Students'],
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
                <p className="text-ssgmce-blue font-medium">Dr. S. P. Trikal</p>
                <p className="text-sm text-gray-500">Head, Department of Mechanical Engineering</p>
             </div>
        </div>
      </div>
    ),
    'vision-mission': (
      <div className="space-y-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex border-b border-gray-200 bg-gray-50/50">
                 {['vision', 'mission'].map(tab => (
                     <button
                        key={tab}
                        onClick={() => setVmTab(tab)}
                        className={`px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all relative ${
                            vmTab === tab 
                            ? 'text-white bg-[#003366]' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }`}
                     >
                        {tab}
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
                            To develop quality mechanical engineers, researchers and entrepreneurs with commitment for excellence, learning enthusiasm, ethical behavior and serving the society.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            "To impart fundamental knowledge of Mechanical Engineering to the students through excellent/best Teaching learning experience and provide a platform for Higher Education.",
                            "To offer Industry Institute interface, interdisciplinary knowledge, and value-based education for the overall development of students.",
                            "To enhance research, next-gen skills, and entrepreneurship abilities of the students to solve social problems."
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
                            "Engage in creating, designing, manufacturing, analyzing, testing, and maintaining the systems of Mechanical Engineering and allied branches of engineering.",
                            "Solve the problems of societal importance by applying fundamentals of Mechanical engineering & pursue higher education, research in the domain of Mechanical.",
                            "Imbibe ethical values & skills for lifelong learning to work effectively as a part of a team member, leading a team in a multidisciplinary setup."
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
                            { title: "PSO1: Manufacturing Engineering", desc: "An ability to apply the principles of manufacturing engineering and technology to develop techno commercial skills." },
                            { title: "PSO2: Thermal Engineering", desc: "An ability to apply fundamentals to design and analyze the thermo-hydraulic systems." },
                            { title: "PSO3: Design Engineering", desc: "An ability to design and analyze mechanical components and processes to predict the behavior of engineering systems." }
                         ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                                    <div>
                                        <p className="font-bold text-gray-900">{item.title}</p>
                                        <p className="text-gray-700 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
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
                                ...(showAllPos ? [
                                    { t: "Modern tool usage", d: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
                                    { t: "The engineer and society", d: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
                                    { t: "Environment and sustainability", d: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
                                    { t: "Ethics", d: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
                                    { t: "Individual and team work", d: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
                                    { t: "Communication", d: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
                                    { t: "Project management and finance", d: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                                    { t: "Life-long learning", d: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
                                ] : [])
                            ].map((po, i) => (
                                <div key={i} className="text-gray-700 leading-relaxed text-sm">
                                    <strong className="text-gray-900 block mb-1 text-base">{po.t}:</strong>
                                    {po.d}
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => setShowAllPos(!showAllPos)}
                            className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mt-2"
                        >
                            {showAllPos ? 'Read Less' : 'Read More...'}
                        </button>
                     </motion.div>
                 )}
             </div>
        </div>
      </div>
    ),

    'course-outcomes': (
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Course Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of B.E. Mechanical Engineering and M.E. Advanced Manufacturing & Mechanical Systems Design
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">B.E. Course Outcomes</h3>
          </div>

          <div className="p-6 space-y-2">
            {/* Placeholder for B.E. Semesters */}
            {['Semester-I', 'Semester-II', 'Semester-III', 'Semester-IV', 'Semester-V', 'Semester-VI', 'Semester-VII', 'Semester-VIII'].map((sem, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setExpandedSemester(expandedSemester === `be-sem${idx+1}` ? null : `be-sem${idx+1}`)}
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">B.E. {sem}</span>
                  <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                    {expandedSemester === `be-sem${idx+1}` ? 'Hide' : 'View'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSemester === `be-sem${idx+1}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50">
                        <p className="text-gray-600 italic text-center">Course outcomes data will be added here</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* M.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">M.E. Advanced Manufacturing & Mechanical Systems Design - Course Outcomes</h3>
          </div>

          <div className="p-6 space-y-2">
            {/* Placeholder for M.E. Semesters */}
            {['Semester-I', 'Semester-II', 'Semester-III', 'Semester-IV'].map((sem, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setExpandedSemester(expandedSemester === `me-sem${idx+1}` ? null : `me-sem${idx+1}`)}
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">M.E. {sem}</span>
                  <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                    {expandedSemester === `me-sem${idx+1}` ? 'Hide' : 'View'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSemester === `me-sem${idx+1}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50">
                        <p className="text-gray-600 italic text-center">Course outcomes data will be added here</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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
                        B.E. (Mechanical Engineering)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                    <ul className="space-y-4">
                        {[
                            { label: "NEP Scheme", link: "#" },
                            { label: "Scheme", link: "#" },
                            { label: "Syllabus Second Year (3rd Sem)", link: "#" },
                            { label: "Syllabus Second Year (4th Sem)", link: "#" },
                            { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP", link: "#" },
                            { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
                            { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
                            { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" }
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
                        M.E. (Advanced Manufacturing & Mechanical Systems Design)
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

    'laboratories': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Infrastructure and Laboratories
        </h3>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Lab Entries */}
          {[
            {
              name: "CSR Funded Robotics and Automation Laboratory",
              resources: "Study of components of a real Robot & its DH Parameters, Demonstration of Robot with 2DOF, 3DOF, 4DOF, etc., Study of Positioning and orientation of Robot arm (Study of Robot Kinematics), To Study Robotic Control on Panasonic TM-1400GIII Industrial Robot Arm."
            },
            {
              name: "Internal Combustion Engine Lab",
              resources: "Performance Analysis & Heat Balance sheet of Single Cylinder Diesel Engine, Performance Analysis &Heat Balance sheet of Multi-Cylinder Petrol Engine, Computerized Performance test for Multi cylinder Petrol Engine, Exhaust Gas analysis and Ignition system demo model"
            },
            {
              name: "Dr. Georg H Endress Laboratory",
              resources: "Supported under CSR by Endress Hauser Automation (India) Instrumentation Pvt. Ltd. (A CII MZC representing organization) - Pressure Measurement, Temperature Measurement, Flow rate Measurement, Level Measurement."
            },
            {
              name: "Mechanics of Material Laboratory",
              resources: "Computerized Universal Testing Machine (Measuring range of 0-400kN, Least Count: 0.04KN, Piston Movement: 0.1mm), Vickers/Brinell Hardness Test Rig, Impact Testing Machine (30 Kg), Torsion Testing Machine (50 Kg)"
            },
            {
              name: "Fluid Power Laboratory",
              resources: "Pelton Turbine, Francis Turbine, Centrifugal Pump, Reciprocating Pump, Bernoulli's Apparatus"
            },
            {
              name: "Computational Fluid Dynamics Center",
              resources: "CFD Software- ANSYS-CFX 10.0, IBM Server - 01 No., IBM Client Systems - 04 Nos."
            },
            {
              name: "Energy Conversion Laboratory",
              resources: "Five Gas Analyzer AVL DIGAS 444: To Check the exhaust emissions like NOX, CO2, CO, O2, HC. Blower Test Rig, Single cylinder 4-stroke Diesel Engine with Brake Test Rig, Single cylinder 4-stroke Petrol Engine with Hydraulic Dynamometer Test Rig, Single Cylinder Petrol Engine with Alternator Test Rig"
            },
            {
              name: "Theory of Machine Laboratory",
              resources: "Gyroscope, Balancing Apparatus, Whirling Shaft Apparatus, Vibration Analysis set-up, Four channel FFT Analyzer"
            },
            {
              name: "Heat Transfer Laboratory",
              resources: "Heat Exchanger, Stephan Boltzmann apparatus, Critical Heat Flux apparatus, Thermal Conductivity of insulating Powder Apparatus"
            },
            {
              name: "Engineering Mechanics lab",
              resources: "Universal Force Table, Parallel force Apparatus, Jib Crane, Differential Axle & Wheel, Single Purchase Winch Crab, Double Purchase Winch Crab, Simple Screw Jack, Worm & Worm Wheel apparatus, Moment of Inertia of Flywheel"
            },
            {
              name: "Refrigeration & Air Conditioning Laboratory",
              resources: "Vapour Compression Test Rig, Counter Flow Heat Exchanger, Window Air Conditioning Test Rig, Refrigerant Leak Test Rig"
            },
            {
              name: "Drawing Hall",
              resources: "Drawing Table, Drawing Board, Software for Engineering Drawing Animated Solutions, Wooden Solid Models, Display Charts, Templates, etc."
            },
            {
              name: "CAD/CAM Center",
              resources: "Hardware: IBM Think Centre A5 Computer Systems - 21 Nos, UPS 7.5KVA with 12 V Batteries, Printer. Software: UG-NX 3, Solid Edge, Autodesk Inventor Series Pro7.0, CATIA V5 R10, ANSYS 8.1, FEMAP, MSC NASTRAN, Witness, GATE Series"
            },
            {
              name: "Production Technology Laboratory",
              resources: "Profile Projector, Universal Interferometer, Autocollimator, Vickers/Brinell Hardness Testing Machine"
            },
            {
              name: "Measurement System Laboratory",
              resources: "Pneumatic Comparator, Tool Maker's Microscope, Surface Roughness Tester, Flow measurement Using McLeod gauge"
            },
            {
              name: "Engineering Metallurgy Laboratory",
              resources: "Vickers/Brinell Hardness Test Rig, Furnace, Metallurgical Microscope with CCTV attachment"
            },
            {
              name: "Mechatronics Laboratory",
              resources: "Pneumatic Training Kit, X-Y Table, Conveyor with sensor, Pneumatic rotary indexing"
            },
            {
              name: "Seminar Hall",
              resources: "LCD Projector with Computer, SMART cordless electronic note PAD (giving display directly on LCD screen), 32'' Television Set with VCD/ DVD player, 5.1 Channel Surround Sound Home Theater System, Ergonomically designed cushioned deluxe chairs (60 Nos), Fully Air-conditioned"
            },
            {
              name: "Workshop (Mechanical Engineering)",
              resources: "Machine Shop, Advanced Welding Shop, Carpentry & Pattern Making Shop, Fitting & Sheet Metal Shop, Smithy & Foundry Shop"
            },
            {
              name: "Experimental Stress Analysis",
              resources: "DIFFUSED LIGHT RESEARCH POLARISCOPE, REFLECTION POLARISCOPE, STRESS FREEZING OVEN, STRAIN GAUGE ROSETTE APPARATUS"
            },
            {
              name: "Energy Park",
              resources: "Solar PV Pump, Solar Steam Project, Wind Mill, Aero Generator"
            },
            {
              name: "Research Lab / Internet Facility",
              resources: "High-speed internet connectivity, Research workstations, Latest software and tools for research"
            },
            {
              name: "Sant Gajanan Tool Room (SGTR)",
              resources: "Advanced manufacturing equipment, CNC machines, Tool design and fabrication facilities"
            }
          ].map((lab, index) => (
            <div key={index} className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0">
              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🔧</span>
                </div>
                <h4 className="font-bold text-gray-800 text-center mt-4">{lab.name}</h4>
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

    placements: (
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
                              <th className="px-6 py-4 font-bold text-center">Academic Year</th>
                              <th className="px-6 py-4 font-bold text-center">No. of Students Placed</th>
                              <th className="px-6 py-4 font-bold text-center">Details Report</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                          {[
                              { year: '2024-25', count: '39*', id: '2024-25' },
                              { year: '2023-24', count: '61', id: '2023-24' },
                              { year: '2022-23', count: '58', id: '2022-23' },
                              { year: '2021-22', count: '42', id: '2021-22' },
                              { year: '2020-21', count: '27', id: '2020-21' },
                              { year: '2019-20', count: '35', id: '2019-20' },
                              { year: '2018-19', count: '27', id: '2018-19' },
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
                    className="flex items-center text-gray-600 hover:text-ssgmce-blue font-medium transition-colors"
                  >
                      <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2 text-sm group-hover:bg-blue-100">
                        <FaAngleRight className="transform rotate-180" />
                      </span>
                      Back to Statistics
                  </button>
                  <div className="text-right">
                      <h3 className="text-xl font-bold text-gray-800">Placement Record</h3>
                      <p className="text-sm text-ssgmce-blue font-bold">Session: {placementYear}</p>
                  </div>
              </div>

              {placementYear === '2024-25' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Company</th>
                                <th className="px-6 py-4 font-bold">Name of Students</th>
                                <th className="px-6 py-4 font-bold text-right">Package Offered</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { company: "Schneider Electric India Pvt. Ltd., Mumbai", students: "Sakshi Soni", ctc: "5.5 LPA" },
                                { company: "BOSCH Limited, Nashik", students: "Manoj Chavhan", ctc: "4.5 LPA" },
                                { company: "Triputi Cryogenic Pvt. Ltd., Navi Mumbai", students: "Aniketsirh Rajput, Manoj Chavhan", ctc: "3.00 - 3.50 LPA" },
                                { company: "JNK India Ltd., Mumbai", students: "Akash Jadhao, Mihir Gaar", ctc: "5.13 LPA" },
                                { company: "ABB Limited, Nashik", students: "Siddheshwar Amle, Sakshi Soni, Shivratani Kothe", ctc: "8.5 LPA" },
                                { company: "Micromatic Machine Tools Private Limited Bangalore", students: "Nishant More, Roshan Mhasal", ctc: "4.5 LPA" },
                                { company: "Anant Defence Systems Pvt. Ltd., Satara-Pune", students: "Jitesh Nagarkar, Kunal Pawar, Nivrrutti Sambare, Om Deshmukh, Prasad Wankar", ctc: "3.29 LPA" },
                                { company: "Faurecia India Pvt. Ltd., Pune", students: "Sakshi Dalvi", ctc: "3.00 LPA" },
                                { company: "QH TALBROS Pvt.Ltd., Satara", students: "Ajay Kalpande, Akshay Jawale, Gaurav Wasu, Nikhil Mankar, Prasanna Merkar, Pratik Deotale, Shiivraj Vijekar, Shubham Pivallakar, Sujay Pakhare, Vaibhav Nagre", ctc: "2.16 LPA" },
                                { company: "Hyosung T&D India, Pune", students: "Chaitanya Parsulkar, Pratik Bombarkar, Karan Jadhav", ctc: "3.60 LPA" },
                                { company: "Daikin Airconditioning India Pvt. Ltd., Pune", students: "Om Helge, Rushikesh Amulkar, Yuvraj Rajput", ctc: "5 & 7 LPA" },
                                { company: "FORVIA Faurecia, Pune", students: "Gauri Raut", ctc: "5.50 LPA" },
                                { company: "Joshi Jampala, Satara", students: "Gaurav Vasu", ctc: "3 LPA" },
                                { company: "Mahindra & Mahindra Ltd., Nagpur", students: "Shivranjan Kolhe", ctc: "4.20 LPA" },
                                { company: "L&T Technology Services, Bengaluru", students: "Jayashri Shelke", ctc: "4.00 LPA" },
                                { company: "KT-Tech Pvt. Ltd., Hyderabad", students: "Vaibhav Nagre", ctc: "6.20 LPA" },
                                { company: "INNOVA Rubbers, Nashik", students: "Amol Kulat, Bhavana Sawale, Gaurav Wasu, Jayashri Shelke, Om Kokatre", ctc: "2.52 LPA" },
                                { company: "Senmmeter", students: "Punit Raut", ctc: "3.00 LPA" }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{row.company}</td>
                                    <td className="px-6 py-4 text-gray-600">{row.students}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{row.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                  <div className="p-4 text-xs text-gray-500 bg-gray-50 border-t border-gray-100">
                      <p className="font-semibold mb-2">Summary:</p>
                      <div className="grid grid-cols-2 gap-2">
                          <p>• Total Students Placed (Offers): <span className="font-bold text-gray-800">44</span></p>
                          <p>• Total Students Placed (Head Counts): <span className="font-bold text-gray-800">39</span></p>
                      </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-8 text-center">
                  <p className="text-gray-500 italic">Detailed placement data will be added soon for {placementYear}.</p>
                </div>
              )}
           </motion.div>
        )}
        </AnimatePresence>
      </div>
    ),

    hod: (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
         {/* Profile Section - Top Center */}
         <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
             <div className="flex flex-col items-center">
                 <div className="w-56 h-56 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
                    <img 
                        src={hodPhoto} 
                        alt="Dr. S. P. Trikal - HOD Mechanical" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. S. P. Trikal</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Mechanical Engineering</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>hod_mech@ssgmce.ac.in</span>
                    </div>
                 </div>
                 
                 <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Ph.D</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Manufacturing</span>
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
                        The Mechanical Engineering Department at SSGMCE Shegaon is one of the most reputed departments in terms of facility, faculty, students, and activities. It continues to lead and expand its activities in various directions. The Department is known for the Expertise and State-of-the-art facilities especially in CAD-CAM, Computational Fluid Dynamics (CFD), Manufacturing and Production Technology, Energy Conversion, Computerized I. C. Engines, Mechatronics, Dr. Georg H Endress Lab and also in other core areas. Experimental and computational facilities are being continuously upgraded. Industry interaction has been increased with industrial visits and arranging expert lectures by industry personnel and carrying out the industry sponsored projects for students.
                    </p>
                    <p>
                        The students actively involve in various reputed contests of national and international repute like ROBOCON, Tech Fest, and technical competitions in various colleges and also credited number of Winner titles to the department. We have various students chapters like SAE, IEEE, IEI Chapter and ISTE Students' chapters guided by faculty mentors for the overall development of the students.
                    </p>
                    <p>
                        The department does conduct guiding sessions and mock tests for students for exams like GATE, GRE etc. The department has been providing an excellent placement to students. The placement cell also facilitates the students for getting training in industries. Good number of Short Term training Programmes (STTP), Workshops and Seminars are also organized for teachers for sharing and updating the technical knowledge.
                    </p>
                    <p className="font-semibold text-gray-800 italic">
                        Wishing you all a successful and fulfilling academic journey ahead.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. S. P. Trikal</p>
                        <p className="text-sm text-gray-500">Head, Department of Mechanical Engineering</p>
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

    activities: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Curricular Activities</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Department regularly organizes various workshops, seminars, FDPs, and training programs for overall development
          </p>
        </div>

        <div className="space-y-6">
          {/* Placeholder for activities - data will be added */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-4">
                <FaCalendarAlt className="text-4xl text-ssgmce-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Activities & Events</h4>
              <p className="text-gray-600 mb-6">
                The department actively organizes various technical and non-technical events throughout the year
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                  <div className="text-ssgmce-blue text-2xl mb-3">📚</div>
                  <h5 className="font-bold text-gray-900 mb-2">Workshops & Training</h5>
                  <p className="text-sm text-gray-600">Regular technical workshops and hands-on training programs for students</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-100">
                  <div className="text-green-600 text-2xl mb-3">🎓</div>
                  <h5 className="font-bold text-gray-900 mb-2">FDP & STTP</h5>
                  <p className="text-sm text-gray-600">Faculty Development Programs and Short Term Training Programs</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border border-orange-100">
                  <div className="text-orange-600 text-2xl mb-3">🎤</div>
                  <h5 className="font-bold text-gray-900 mb-2">Seminars & Lectures</h5>
                  <p className="text-sm text-gray-600">Expert lectures and seminars by industry professionals</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-700 italic">
                  <strong>Note:</strong> Detailed activity data and event listings will be updated soon. Please check back for comprehensive information on workshops, seminars, and training programs organized by the department.
                </p>
              </div>
            </div>
          </div>

          {/* Student Chapters & Clubs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-[#003366] to-ssgmce-dark-blue px-6 py-4">
              <h4 className="text-xl font-bold text-white">Student Chapters & Technical Clubs</h4>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'SAE India', icon: '🏎️', desc: 'Society of Automotive Engineers' },
                  { name: 'ISTE Chapter', icon: '🔧', desc: 'Indian Society for Technical Education' },
                  { name: 'IEI Chapter', icon: '⚙️', desc: 'Institution of Engineers India' },
                  { name: 'IEEE Chapter', icon: '⚡', desc: 'Institute of Electrical and Electronics Engineers' }
                ].map((club, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200">
                    <div className="text-3xl mb-2">{club.icon}</div>
                    <h5 className="font-bold text-gray-900 text-sm mb-1">{club.name}</h5>
                    <p className="text-xs text-gray-600">{club.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Events Placeholder */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 className="text-lg font-bold text-gray-800">Recent Events & Activities</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { type: 'Workshop', title: 'Advanced CAD/CAM Techniques', status: 'Coming Soon' },
                  { type: 'Seminar', title: 'Industry 4.0 and Smart Manufacturing', status: 'Coming Soon' },
                  { type: 'FDP', title: 'Faculty Development Program on CFD', status: 'Coming Soon' },
                  { type: 'Guest Lecture', title: 'Innovations in Thermal Engineering', status: 'Coming Soon' }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-ssgmce-blue text-xs font-semibold rounded-full mb-2">
                        {event.type}
                      </span>
                      <p className="font-semibold text-gray-900">{event.title}</p>
                    </div>
                    <span className="text-sm text-orange-600 font-medium">{event.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    achievements: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Achievements & Recognition</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Department faculty and students have achieved remarkable success in various competitions, conferences, and research initiatives
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gradient-to-r from-[#003366] to-ssgmce-dark-blue text-white">
                <tr>
                  <th className="px-6 py-4 font-bold text-sm">Name of Event / Achievement</th>
                  <th className="px-6 py-4 font-bold text-sm">Participant / Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { event: "2nd Runner-Up", desc: "Team X-Treme – Dept. of Mechanical Engineering, SSGMCE secured remarkable success as 2nd Runner-Up among all participating teams across the nation, at the prestigious National Level Hindustan Formula Karting Championship (HFKC), held at IES University, Bhopal, from 01-04 October 2025" },
                  { event: "Best Innovation Ambassador Award", desc: "Dr. Piyush A. Dalke was awarded the Best Innovation Ambassador at the IIC Regional Meet 2025 on 28th November 2025 at Yashwantrao Chavan College of Engineering, Nagpur. The award was presented by the Innovation Cell, AICTE – Ministry of Education." },
                  { event: "Best Paper Award", desc: "Dr. V K Thute received second Best paper awards for paper, during 5th international conference on machine learning and big data analytics ICS Global, held at Kerala, India" },
                  { event: "Best Paper Award", desc: "Prof. M B Bhambere Received best paper award during international conference on AI driven Engineering & Technology AIDCon_2025, Dec 2025" },
                  { event: "AVISHKAR 2024 for Health Innovation", desc: "Dr. Piyush Dalke, and Mr. Vinit S. Atkare bagged 3rd place for Non-contact Glucose Detection Using Optical and Analytical Techniques." },
                  { event: "Bagged 3rd position in International Conference", desc: "Mr. Atharv Bochare, bagged 3rd position in International Conference on Emerging Trends in Physical Sciences held on 12th March 2025. Department of Physics at Shankarlal Khandelwal Arts, Science, and Commerce College, Akola" },
                  { event: "Collaboration Journey 2024 ABB Ltd. Nashik", desc: "Abhijeet Nanotkar and Team winning the consolation prize at ABB Limited Nashik's event Collaboration Journey 2024." },
                  { event: "Best Innovator Award", desc: "Prof. Piyush Dalke was awarded the Best Innovator Award by IIT Ropar & SPPU Research Park in the presence of Shri Amitabh Nag(CEO Bhashini MeiTY Govt. of India) Dr Parag Kalkar (Pro-Vice-Chancellor of Savitribai Phule Pune University, Pune)." },
                  { event: "Secures 3rd Prize", desc: "ELYSIUM 2K-23 Team for securing third prize in Auto-Mech event organised by VPKBIET, Baramati" },
                  { event: "Secures Second Winner", desc: "Secures second winner in Medical device hackathon held during 20-27 May 2023 at BETIC GHRCE Nagpur & IIT Bombay" },
                  { event: "YUKTI-NIR 2023", desc: "Prof. Piyush Dalke Appreciated at YUKTI-NIR, Ministry of Education, Innovation cell-AICTE. GOI. by Prof. Rajendra Kakade and Mr. Dipan Sahu" },
                  { event: "Int. Conference, HISTE 2024", desc: "Prof. Piyush Dalke and Student of Mechanical Dept. received first prize for poster presentation at KVVDM, Karad" },
                  { event: "DRONATHON GCOE, Jalgaon 2024", desc: "Mr. Deep Goje with Tejas Kale student of SSGMCE received Second prize in National Drone racing competition at Govt. college Jalgaon" },
                  { event: "INNOVA 2024", desc: "Mr. Amol Kulat & Gaurav Wasu won first prize for outstanding innovation national level Hackathon at SSGMCE" },
                  { event: "TechFest 2K24", desc: "Prof. Piyush Dalke with students won the first prize at Siddhivinak Tech Campus for project" },
                  { event: "IMPPACT CONCLAVE 3", desc: "Prof. Piyush Dalke with students won the second prize at IIT Ropar for Technical project" },
                  { event: "TechKriti 24", desc: "Deep Goje and student of SSGMCE bagged second prize at IIT Kanpur in drone competition" },
                  { event: "Received RGST grant for research projects", desc: "Dr. S P Trikal, Dr. N H Khandare and Prof. N B Borkar received RGST grant for the research projects" },
                  { event: "Received Second prize for the project", desc: "Prof. K D Gadgil and 4M Students receive Second prize for the project: Optimization of Heat transfer rate in Honeycomb heat exchanger" },
                  { event: "Honored with best start-up project", desc: "Prof. Piyush Dalke honored with best start-up project under SBGAU, Consolation industrial LOI" },
                  { event: "Received the accolades", desc: "Department and Faculties supported the ideas of students and received the accolades by delegates at IMPAC Conclave 2.0 at Pune University Campus Hosted and Conceptualized By Krishna Institute of Medical Science and Government Ecosystem of Maharashtra state innovation society on 07/10/2022" },
                  { event: "Received the Best Ergonomic Device Award", desc: "Prof. Piyush Dalke Dept of Mechanical Engg has received the Best Ergonomic Device for Xerostomia Estimator Device at MEDIC 2022 held by IIT Mumbai, on 01/10/2022" },
                  { event: "Received First prize for the project", desc: "Prof. N H Khandare and 4M student receives First prize for the project Prevention of acceleration hazards in EVs" },
                  { event: "Third prize for the project", desc: "Prof. N H Khandare and 4M student receives Third prize for the project: Design and Fabrication of vandal proof air valve" }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900 mb-1">{item.event}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <FaTrophy className="text-yellow-500 text-2xl mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    newsletter: (
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
                          Highlights: Faculty achievements, Student projects, Industry collaborations, and research publications.
                      </p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                          <a 
                             href="/documents/mech-newsletter-25-26-I.pdf" 
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

    faculty: (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
            <p className="text-gray-500 mt-2">Department of Mechanical Engineering</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {[
                { name: "Dr. S. P. Trikal", role: "Professor & Head", area: ["Manufacturing"], email: "hod_mech@ssgmce.ac.in", phone: "", photo: SPT },
                { name: "Dr. V.K. Thute", role: "Associate Professor", area: ["Mechanical System Design"], email: "vinaythute@ssgmce.ac.in", phone: "", photo: VKThute },
                { name: "Dr. J. G. Khan", role: "Associate Professor", area: ["Lean Manufacturing"], email: "javed.khan@ssgmce.ac.in", phone: "", photo: JGKhan },
                { name: "Mr. M. B. Bhambere", role: "Assistant Professor", area: ["Thermal Engineering", "Computational Fluid Dynamics (CFD)"], email: "mbbhambere@ssgmce.ac.in", phone: "", photo: MBB },
                { name: "Mr. C. V. Patil", role: "Assistant Professor", area: ["Computer Aided Design and Manufacturing"], email: "cvpatil@ssgmce.ac.in", phone: "", photo: CVPatil },
                { name: "Mr. A. S. Bharule", role: "Assistant Professor", area: ["Machine Design & Analysis"], email: "asbharule@ssgmce.ac.in", phone: "", photo: ASB },
                { name: "Mr. N. B. Borkar", role: "Assistant Professor", area: ["Production"], email: "nbborkar@ssgmce.ac.in", phone: "", photo: NBBorkar },
                { name: "Dr. N. H. Khandare", role: "Associate Professor", area: ["Lean and Agile Manufacturing", "Production & Manufacturing Engineering"], email: "nhkhandare@ssgmce.ac.in", phone: "", photo: NHK },
                { name: "Mr. S. Q. Syed", role: "Assistant Professor", area: ["Thermal"], email: "sqsyed@ssgmce.ac.in", phone: "", photo: SQSyed },
                { name: "Mr. P. T. Patokar", role: "Assistant Professor", area: ["Manufacturing Engineering"], email: "ptpatokar@ssgmce.ac.in", phone: "", photo: PTPatokar },
                { name: "Dr. K. V. Chandan", role: "Assistant Professor", area: ["Design and Development of Composite Materials"], email: "kvchandan@ssgmce.ac.in", phone: "", photo: KVC },
                { name: "Dr. Piyush Dalke", role: "Assistant Professor", area: ["Hybrid Nano-fluids", "Manufacturing Engineering"], email: "padalke@ssgmce.ac.in", phone: "", photo: PiyushDalke },
                { name: "Mr. K. R. Dudhe", role: "Assistant Professor", area: ["Thermal Engineering", "Pillow Plate Heat Exchanger"], email: "krdudhe@ssgmce.ac.in", phone: "", photo: KRDudhe },
                { name: "Dr. S. P. Joshi", role: "Assistant Professor", area: ["Thermal Engineering", "Energy Management", "Heat Transfer Augmentation"], email: "spjoshi@ssgmce.ac.in", phone: "", photo: SPJ },
                { name: "Mr. G. S. Wahile", role: "Assistant Professor", area: ["Thermal Engineering", "Mechatronics", "IoT", "Photovoltaic Panel"], email: "gswahile@ssgmce.ac.in", phone: "", photo: GSWahile },
                { name: "Mr. V. T. Mhaske", role: "Assistant Professor", area: ["Cryogenics Engineering", "Heat & Power"], email: "vtmhaske@ssgmce.ac.in", phone: "", photo: VTMhaske },
                { name: "Mr. Parag Jadhav", role: "Professor of Practice", area: ["Industry Expert"], email: "", phone: "", photo: ParagJadhav, isIndustry: true }
            ].map((fac, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
                >
                    <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative flex items-center justify-center border-r border-gray-100">
                         {fac.photo ? (
                            <img src={fac.photo} alt={fac.name} className="w-full h-full object-cover" />
                         ) : (
                            <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                         )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                            {fac.name}
                        </h4>
                        <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">{fac.role}</p>
                        
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

    staff: (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Staff @ Department</h3>
            <p className="text-gray-500 mt-2">Department of Mechanical Engineering</p>
         </div>

         {/* Department Staff */}
         <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-1 bg-gray-800 rounded-full mr-3"></span>
               Department Staff
            </h4>
            <div className="grid gap-6 lg:grid-cols-2">
               {[
                  { name: "Mr. G. R. Jodh", role: "Office Assistant", photo: GRJodh },
                  { name: "Mr. S. D. Deshmukh", role: "Lab Assistant", photo: SDDeshmukh },
                  { name: "Mr. G. A. Wayzode", role: "Lab Assistant", photo: GAWayzode },
                  { name: "Mr. R. O. Bedre", role: "Lab Assistant", photo: ROBedre },
                  { name: "Mr. P. M. Deshmukh", role: "Lab Assistant", photo: PMDeshmukh },
                  { name: "Mr. N. D. Kamavisdar", role: "Lab Assistant", photo: NDKamavisdar },
                  { name: "Mr. G. D. Ingle", role: "Lab Attendant", photo: GDIngle },
                  { name: "Mr. V. H. Akhare", role: "Lab Attendant", photo: VHAkhare },
                  { name: "Mr. V. S. Bharate", role: "Lab Attendant", photo: VSBharate },
                  { name: "Mr. O. S. Bhalerao", role: "Peon", photo: OSBhalerao },
                  { name: "Mr. D. B. Wadode", role: "Peon", photo: DBWadode },
               ].map((staff, i) => (
                  <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
                  >
                      <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative flex items-center justify-center border-r border-gray-100">
                         {staff.photo ? (
                            <img src={staff.photo} alt={staff.name} className="w-full h-full object-cover" />
                         ) : (
                            <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                         )}
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-center">
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                              {staff.name}
                          </h4>
                          <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">{staff.role}</p>
                      </div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Workshop Staff */}
         <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
               <span className="w-8 h-1 bg-gray-800 rounded-full mr-3"></span>
               Workshop Staff
            </h4>
            <div className="grid gap-6 lg:grid-cols-2">
               {[
                  { name: "Mr. Purushottam M. Dandwate", role: "Lab Assistant (SGTR)", photo: PMDandwate },
                  { name: "Mr. Mahesh R. Dhoke", role: "Attendant (Foundry & Smithy Shop)", photo: MRDhoke },
                  { name: "Mr. Vijaykumar S. Bharsakle", role: "Lab Assistant (Machine Shop SGTR)", photo: VSBharsakale },
                  { name: "Mr. Murlidhar P. Rajurkar", role: "Carpenter (Carpentry)", photo: MPRajurkar },
                  { name: "Mr. Vasudev S. Dhage", role: "Attendant (Carpentry)", photo: VSDhage },
                  { name: "Mr. Rajesh J. Oimbe", role: "Lab Assistant (Machine Shop)", photo: RJOimbe },
                  { name: "Mr. Vitthal R. Rahate", role: "Attendant (Welding Shop)", photo: VRRahate },
                  { name: "Mr. Balkrishna S. Sonone", role: "Attendant (Machine Shop)", photo: BSSonone },
                  { name: "Mr. Ganesh R. Payghan", role: "Lab Assistant (Fitting Shop)", photo: GRPayghan },
                  { name: "Mr. Amol A. Dhage", role: "Attendant (SGTR)", photo: AADhage },
                  { name: "Mr. Ramdas N. Pachade", role: "Attendant (SGTR)", photo: RNPachade },
               ].map((staff, i) => (
                  <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
                  >
                      <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative flex items-center justify-center border-r border-gray-100">
                         {staff.photo ? (
                            <img src={staff.photo} alt={staff.name} className="w-full h-full object-cover" />
                         ) : (
                            <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                         )}
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-center">
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                              {staff.name}
                          </h4>
                          <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">{staff.role}</p>
                      </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    ),

    'student-projects': (
      <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                    <FaProjectDiagram className="text-orange-500 mr-2" /> Student Projects (UG)
                </h3>
                    <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                        {['2024-25', '2023-24', '2022-23'].map((year) => (
                            <button
                                key={year}
                                onClick={() => setProjectYear(year)}
                                className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                                    projectYear === year
                                        ? 'bg-ssgmce-blue text-white shadow-md'
                                        : 'bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200'
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-black tracking-wider w-16 text-center">Group No.</th>
                                <th className="px-6 py-4 font-black tracking-wider">Project Title</th>
                                <th className="px-6 py-4 font-black tracking-wider text-right">Project Report</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {(projectYear === '2024-25' ? [
                                { id: 1, title: "Design and Development of Solar Powered Water Pumping System" },
                                { id: 2, title: "Automated Seed Sowing Machine with IoT Integration" },
                                { id: 3, title: "Design of Hybrid Electric Vehicle Charging Station" },
                                { id: 4, title: "Development of Low-Cost CNC Machine for Educational Purpose" },
                                { id: 5, title: "Smart Energy Meter Using IoT" },
                                { id: 6, title: "Design and Fabrication of Automatic Wall Painting Machine" },
                                { id: 7, title: "Development of Portable Water Purification System" },
                                { id: 8, title: "Design of Multi-Purpose Agricultural Equipment" },
                                { id: 9, title: "Automatic Gear Shifting System for Two-Wheeler" },
                                { id: 10, title: "Design and Development of Wind Turbine for Rural Areas" },
                                { id: 11, title: "Smart Waste Segregation System Using Machine Learning" },
                                { id: 12, title: "Design of Eco-Friendly Refrigeration System" },
                                { id: 13, title: "Development of Automatic Braking System for Heavy Vehicles" },
                                { id: 14, title: "Design and Fabrication of Hydraulic Jack" },
                                { id: 15, title: "Solar Powered Irrigation System with Moisture Sensor" }
                            ] : projectYear === '2023-24' ? [
                                { id: 1, title: "Design and Development of Automatic Floor Cleaning Robot" },
                                { id: 2, title: "Fabrication of Pedal Operated Washing Machine" },
                                { id: 3, title: "Design of Low-Cost Ventilator for Emergency Use" },
                                { id: 4, title: "Development of Automatic Coconut Dehusking Machine" },
                                { id: 5, title: "Design and Fabrication of Paper Recycling Machine" },
                                { id: 6, title: "Automatic Material Handling System Using PLC" },
                                { id: 7, title: "Design of Electric Bicycle with Pedal Assistance" },
                                { id: 8, title: "Development of Multi-Crop Harvester" },
                                { id: 9, title: "Design and Fabrication of Hydraulic Scissor Lift" },
                                { id: 10, title: "Smart Parking System Using IoT" },
                                { id: 11, title: "Design of Portable Concrete Mixer" },
                                { id: 12, title: "Development of Automatic Fire Detection and Extinguishing System" },
                                { id: 13, title: "Design and Fabrication of Air Conditioning System Using Exhaust Heat" },
                                { id: 14, title: "Automatic Irrigation System Based on Soil Moisture" },
                                { id: 15, title: "Design of Friction Stir Welding Setup" }
                            ] : [
                                { id: 1, title: "Design and Development of Pneumatic Sheet Metal Bending Machine" },
                                { id: 2, title: "Fabrication of Multipurpose Workshop Machine" },
                                { id: 3, title: "Design of Solar Water Heater with Phase Change Material" },
                                { id: 4, title: "Development of Automatic Glass Cutting Machine" },
                                { id: 5, title: "Design and Fabrication of Pneumatic Punching Machine" },
                                { id: 6, title: "Automatic Street Light Control System Using LDR" },
                                { id: 7, title: "Design of Portable Grass Cutting Machine" },
                                { id: 8, title: "Development of Hydraulic Pipe Bending Machine" },
                                { id: 9, title: "Design and Fabrication of Pedal Powered Flour Mill" },
                                { id: 10, title: "Smart Home Automation System" },
                                { id: 11, title: "Design of Low-Cost Lathe Machine" },
                                { id: 12, title: "Development of Automatic Bottle Filling Machine" },
                                { id: 13, title: "Design and Fabrication of Pneumatic Bumper Jack" },
                                { id: 14, title: "Automatic Railway Gate Control System" },
                                { id: 15, title: "Design of Vehicle Tracking System Using GPS" }
                            ]).map((project, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{project.id}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{project.title}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs font-bold bg-blue-50 text-ssgmce-blue px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors border border-gray-200">
                                        View report 
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-ssgmce-orange p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                    <span className="font-bold text-ssgmce-blue">Note:</span> Students are encouraged to undertake projects from the final year. 
                    This hands-on approach helps them apply theoretical concepts to real-world mechanical engineering problems, fostering innovation and practical skills.
                </p>
            </div>
      </div>
    ),

    mous: (
      <div className="space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <FaIndustry className="text-orange-500 mr-3" /> 
            Memorandum of Understanding (MoUs)
          </h3>
          <p className="text-gray-600 mt-2">
            Industry partnerships and academic collaborations for knowledge exchange and student development
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-[#003366] to-ssgmce-dark-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider w-16">SN</th>
                  <th className="px-6 py-4 text-left font-bold text-xs uppercase tracking-wider">Name of Company</th>
                  <th className="px-6 py-4 text-center font-bold text-xs uppercase tracking-wider w-32">MOU Signing Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { sn: 1, company: "Joshi Jampala Engineering Pvt. Ltd. Satara", date: "05/03/2025" },
                  { sn: 2, company: "Endress Hauser, Chat. Sambhajinagar", date: "05/03/2025" },
                  { sn: 3, company: "SW System, Pune", date: "05/03/2025" },
                  { sn: 4, company: "Tejas Polymer Engineers, Pune", date: "05/03/2025" },
                  { sn: 5, company: "Sharv Polyplast Pvt. Ltd.Pune", date: "05/03/2025" },
                  { sn: 6, company: "Krishan Vishwa Vidyapeeth \"Deemed to be University\", Karad, Maharashtra", date: "16.01.2024" },
                  { sn: 7, company: "Endress Hauser,Sambhaji Nagar (Aurangabad)", date: "31.03.2022" },
                  { sn: 8, company: "Tool Tech Toolings Kirdak Auto Com Pvt. Ltd. Sambhaji Nagar (Aurangabad)", date: "27.07.2022" },
                  { sn: 9, company: "Vinodral Engg Pvt Ltd.,MIDC, Jalana", date: "16.03.2019" },
                  { sn: 10, company: "Mechatol Engg Solutions Pvt ltd,Kothrud, Pune", date: "19.01.2019" },
                  { sn: 11, company: "Kala Group of Companies,MIDC Chakan, Pune", date: "19.01.2019" },
                  { sn: 12, company: "Wadhokar Group of Companies,MIDC Chakan, Pune", date: "19.01.2019" },
                ].map((mou, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-center font-mono text-gray-500 font-bold">{mou.sn}</td>
                    <td className="px-6 py-4 text-gray-800 font-medium">{mou.company}</td>
                    <td className="px-6 py-4 text-center text-gray-600 font-medium">{mou.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-ssgmce-orange p-4 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <span className="font-bold text-ssgmce-blue">Note:</span> These MoUs facilitate industry exposure, internships, 
            guest lectures, joint research projects, and placement opportunities for students.
          </p>
        </div>
      </div>
    ),
  };

  const renderContent = () => {
    const activeLabel = academicsLinks.find(l=>l.id===activeTab)?.label || industryLinks.find(l=>l.id===activeTab)?.label;
    
    return content[activeTab] || (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-24 h-24 bg-blue-50 text-ssgmce-orange rounded-full flex items-center justify-center mb-6 relative">
                 <FaLaptopCode className="text-4xl relative z-10" />
                 <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
            </div>
            
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Coming Soon
            </span>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {activeLabel}
            </h3>
            
            <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
                We are currently crafting this section to provide you with comprehensive insights. This content is in the pipeline and will be available shortly.
            </p>

            <button 
                onClick={() => setActiveTab('overview')}
                className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-lg shadow-gray-200"
            >
                Back to Overview
            </button>
        </div>
    );
  }

  const SidebarLink = ({ id, label }) => (
    <button
        onClick={() => setActiveTab(id)}
        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group
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
    <GenericPage title="Mechanical Engineering" backgroundImage={mechanicalBanner}>
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        
        <div className="lg:w-1/4 order-1 lg:order-1">
             <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
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

export default Mechanical;


