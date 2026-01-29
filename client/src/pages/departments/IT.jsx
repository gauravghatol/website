import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import itBanner from '../../assets/images/departments/it/IT banner.png';

// HOD Photo
import hodPhoto from '../../assets/images/departments/it/faculty/SDPadiya.jpg';

// Faculty Photos
import asmPhoto from '../../assets/images/departments/it/faculty/ASM.png';
import pvkPhoto from '../../assets/images/departments/it/faculty/PVK.jpg';
import agsPhoto from '../../assets/images/departments/it/faculty/AGS.jpg';
import fikPhoto from '../../assets/images/departments/it/faculty/FIK.jpg';
import ssmPhoto from '../../assets/images/departments/it/faculty/SSM.jpg';
import ppbPhoto from '../../assets/images/departments/it/faculty/PallaviBute.jpg';
import snkPhoto from '../../assets/images/departments/it/faculty/SNK.jpg';
import nngPhoto from '../../assets/images/departments/it/faculty/NNG.jpg';
import palPhoto from '../../assets/images/departments/it/faculty/PALod.jpeg';
import kpPhoto from '../../assets/images/departments/it/faculty/KP.jpeg';

import { AnimatePresence, motion } from 'framer-motion';
import { 
  FaLaptopCode, FaBullseye, FaUserTie, FaAward, FaAngleRight, 
  FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone,
  FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram,
  FaCalendarAlt, FaDownload
} from 'react-icons/fa';

const IT = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState('gate');
  const [researchTab, setResearchTab] = useState('projects');
  const [projectYear, setProjectYear] = useState('2024-25');
  const [researchYear, setResearchYear] = useState('2023-24');
  const [placementYear, setPlacementYear] = useState(null);

  const academicsLinks = [
    { id: 'overview', label: 'Department Overview' },
    { id: 'hod', label: 'Words from HOD' },
    { id: 'vision-mission', label: 'Vision, Mission, PEO & PSO' },
    { id: 'course-outcomes', label: 'Course Outcomes' },
    { id: 'curriculum', label: 'Scheme and Syllabus' },
    { id: 'laboratories', label: 'Infrastructure and Laboratories' },
    { id: 'best-projects', label: 'Students Best Projects' },
    { id: 'pride', label: 'Pride of the Department' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Curricular Activities' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'course-material', label: 'Course Material' },
    { id: 'projects', label: 'UG Projects' },
    { id: 'services', label: 'Services Offered' },
    { id: 'practices', label: 'Innovative Practice' },
    { id: 'faculty', label: 'Faculty Members' },
  ];

  const industryLinks = [
    { id: 'industrial-visits', label: 'Industrial Visits' },
    { id: 'mous', label: 'MoUs' },
    { id: 'patents', label: 'Publication' },
    { id: 'internships', label: 'Internship and Training' },
  ];

  const content = {
    'overview': (
      <div className="space-y-10">
        {/* Department Header with Video */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center border-b border-gray-100 pb-4">
                  <FaLaptopCode className="text-orange-500 mr-3 text-3xl" />
                  Department of Information Technology
              </h3>
              
              {/* Featured Video - Larger & Cinematic */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video group relative">
                  <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/u6vMoPzmlk8" 
                      title="Department of Information Technology SSGMCE"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>

              <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
                  <p>
                      Information Technology is one of the emerging computing disciplines. Nowadays computers became essential work tools at every level of most organizations, and networked computer systems became the information backbone of organizations.
                  </p>
                  <p>
                      IT is a new and rapidly growing field that started as a grassroots response to the practical, everyday needs of businesses and other organizations. Today, organizations of every kind are dependent on information technology. They need to have appropriate systems in place. These systems must work properly, be secure, and be upgraded, maintained, and replaced as appropriate. Employees throughout an organization require support from IT staff that understand computer systems and their software and are committed to solving whatever computer-related problems they might have. Graduates of information technology programs address these needs.
                  </p>
              </div>
            </div>

        {/* Courses Section - Minimalistic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    Courses @ Information Technology
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
                            ['Degree', 'Bachelor of Engineering (Information Technology)'],
                            ['Duration', '4 Year(8 Semesters) (Full time)'],
                            ['Intake', '60 Students per year'],
                            ['Establishment', 'Year: 2001'],
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
                <p className="text-ssgmce-blue font-medium">Dr. S. D. Padiya</p>
                <p className="text-sm text-gray-500">Head, Department of Information Technology</p>
             </div>
        </div>
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
                        alt="Dr. S. D. Padiya - HOD IT" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. S. D. Padiya</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Information Technology</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>sdpadiya@ssgmce.ac.in</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center">
                        <FaPhone className="mr-2 text-ssgmce-orange" />
                        <span>+91 7588501506</span>
                    </div>
                 </div>
                 
                 <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Associate Professor</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">BLE, WSN, IoT</span>
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
                        Information Technology is one of the emerging computing disciplines. Nowadays Computers became essential work tools at every level of most organizations, and networked computer systems became the information backbone of organizations.
                    </p>
                    <p>
                        Information technology refers to undergraduate degree programs that prepare students to meet the computer technology needs of business, government, healthcare, schools, and other kinds of organizations.
                    </p>
                    <p>
                        IT is a new and rapidly growing field that started as a grassroots response to the practical, everyday needs of business and other organizations. Today, organizations of every kind are dependent on information technology. They need to have appropriate systems in place. These systems must work properly, be secure, and upgraded, maintained, and replaced as appropriate. Employees throughout an organization require support from IT staff that understand computer systems and their software and are committed to solving whatever computer-related problems they might have. Graduates of information technology programs address these needs.
                    </p>
                    <p>
                        Degree programs in information technology arose because degree programs in the other computing disciplines were not producing an adequate supply of graduates capable of handling these very real needs. IT programs exist to produce graduates who possess the right combination of knowledge and practical, hands-on expertise to take care of both an organization's information technology infrastructure and the people who use it. IT specialists assume responsibility for selecting hardware and software products appropriate for an organization, integrating those products with organizational needs and infrastructure, and installing, customizing, and maintaining those applications for the organization's computer users.
                    </p>
                    <p>
                        Information technology professionals should be able to work effectively at planning, implementation, configuration, and maintenance of an organization's computing infrastructure.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. S. D. Padiya</p>
                        <p className="text-sm text-gray-500">Head, Department of Information Technology</p>
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

    'vision-mission': (
      <div className="space-y-8">
        {/* Top Section: Vision & Mission Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="flex border-b border-gray-200 bg-gray-50/50">
                 {[
                    { id: 'vision', label: 'Vision' },
                    { id: 'mission', label: 'Mission' }
                 ].map(tab => (
                     <button
                        key={tab.id}
                        onClick={() => setVmTab(tab.id)}
                        className={`flex-1 px-6 py-4 font-bold text-sm transition-all relative ${
                            vmTab === tab.id 
                            ? 'text-white bg-[#003366]'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     >
                        {tab.label}
                     </button>
                 ))}
             </div>
             
             <div className="p-8">
                 {vmTab === 'vision' && (
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="flex items-start gap-4"
                     >
                        <div className="text-ssgmce-orange text-xl mt-1">➤</div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To establish the department as a centre of academic excellence by integrating current IT trends and aligning with industry needs.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            "To develop essential technical and interpersonal skills in students for their personal and professional growth in the IT industry.",
                            "To enable students to apply their IT knowledge and skills to achieve organizational goals.",
                            "To cultivate leadership qualities and promote continuous learning in students to meet the evolving needs of society."
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
                    { id: 'po', label: 'Program Outcome' },
                    { id: 'pso', label: 'Program Specific Outcome' }
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
                        <p className="text-gray-600 text-sm mb-4 italic">Graduates, within five years after graduation, should demonstrate</p>
                        {[
                            "Technical competence: To develop proficiency in analyzing, designing, and implementing IT solutions using contemporary tools and technologies.",
                            "Professional skills: To demonstrate effective communication, teamwork, and leadership abilities in professional settings.",
                            "Continuous learning: To engage in lifelong learning and adapt to emerging technologies and industry trends.",
                            "Ethical responsibility: To practice professional ethics and contribute responsibly to society and the environment."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}

                 {poTab === 'pso' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                         {[
                            "Demonstrate proficiency in software development, database management, and web technologies to design and implement scalable IT solutions.",
                            "Apply knowledge of networking, cybersecurity, and cloud computing to develop secure and efficient information systems."
                         ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-blue-900 text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed">{item}</p>
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
                            className="inline-flex items-center text-ssgmce-orange font-bold hover:text-ssgmce-blue transition-colors mt-2"
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
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Course Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of B.E. Information Technology
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">Course Outcomes</h3>
          </div>

          <div className="p-6 space-y-2">
            {/* B.E. Semester I */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem1' ? null : 'be-sem1')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-I</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem1' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem1' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A1 ENGINEERING MATHEMATICS - I</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply concepts of differential calculus to solve engineering problems</li>
                          <li>Understand and apply partial differentiation and maxima-minima concepts</li>
                          <li>Solve differential equations using various methods</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A2 ENGINEERING PHYSICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply the principles of quantum mechanics and solid-state physics</li>
                          <li>Understand optical phenomena including interference, diffraction, and polarization</li>
                          <li>Apply concepts of fiber optics and laser technology in IT applications</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A3 ENGINEERING MECHANICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze force systems and determine resultants</li>
                          <li>Apply principles of friction and calculate moment of inertia</li>
                          <li>Solve problems involving kinematics and kinetics of particles</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A4 COMPUTER PROGRAMMING</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand fundamental concepts of programming and computer systems</li>
                          <li>Write, test, and debug programs using C programming language</li>
                          <li>Apply control structures, arrays, and functions to solve problems</li>
                          <li>Implement file handling and pointer operations in C</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester II */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem2' ? null : 'be-sem2')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-II</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem2' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem2' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B1 ENGINEERING MATHEMATICS - II</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Solve systems of linear equations using matrices</li>
                          <li>Apply Fourier series for periodic function analysis</li>
                          <li>Evaluate multiple integrals and their applications</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B2 DATA STRUCTURES</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Implement various data structures like arrays, linked lists, stacks, and queues</li>
                          <li>Apply tree and graph data structures to solve computational problems</li>
                          <li>Analyze time and space complexity of algorithms</li>
                          <li>Choose appropriate data structures for specific applications</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B3 DIGITAL ELECTRONICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Design and analyze combinational and sequential logic circuits</li>
                          <li>Implement Boolean algebra and logic gates in digital systems</li>
                          <li>Understand number systems and binary arithmetic</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B4 OBJECT-ORIENTED PROGRAMMING</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand and apply OOP concepts like encapsulation, inheritance, and polymorphism</li>
                          <li>Design and implement object-oriented solutions using C++ or Java</li>
                          <li>Use exception handling and file I/O operations</li>
                          <li>Develop programs using classes and objects</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Semesters - Placeholders */}
            {[
              { id: 'be-sem3', label: 'B.E. Semester-III' },
              { id: 'be-sem4', label: 'B.E. Semester-IV' },
              { id: 'be-sem5', label: 'B.E. Semester-V' },
              { id: 'be-sem6', label: 'B.E. Semester-VI' },
              { id: 'be-sem7', label: 'B.E. Semester-VII' },
              { id: 'be-sem8', label: 'B.E. Semester-VIII' }
            ].map(sem => (
              <div key={sem.id} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setExpandedSemester(expandedSemester === sem.id ? null : sem.id)}
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{sem.label}</span>
                  <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                    {expandedSemester === sem.id ? 'Hide' : 'View'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSemester === sem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50">
                        <p className="text-gray-600 text-sm italic">Course outcomes will be updated soon.</p>
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
                        B.E. (Information Technology)
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
                            { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" },
                            { label: "Computer Skill Lab Syllabus", link: "#" },
                            { label: "Revised Syllabus of IT 21 July 2023", link: "#" },
                            { label: "Revised Syllabus of CSE(5th Sem-7th Sem) Notification No. 187/2022", link: "#" }
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
              name: "Data Engineering Laboratory",
              area: "60 Sq.Mtrs",
              systems: "18 PC",
              resources: "COMPUTER SYSTEMS: 18 Nos. HP COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i5 PROCESSOR /8 GB RAM/500 GB SATA HDD/20 hp MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. NVIDIA TESLA GPU Cards, DICA Kits, XPO 8086 Microprocessor Kits with Study Cards LCD Projector SCANNER Cano Scan LiDE 300 (Canon) UPS: 5 KVA WITH BATTERIES (Two in number)"
            },
            {
              name: "Programming Laboratory",
              area: "75 Sq.Mtrs",
              systems: "19 PC (12 Lenovo + 7 HP)",
              resources: "COMPUTER SYSTEMS: 12 Nos. LENOVO COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i3 PROCESSOR/4 GB RAM/500 GB SATA HDD/19.5 LED LENOVO MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. COMPUTER SYSTEMS: 07 Nos. HP COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i5 PROCESSOR /8 GB RAM/500 GB SATA HDD/20 hp MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. Oasis Embedded System kits: 08 ARM7, ARM7 Board with Software: 07 LCD Projector UPS: 5 KVA WITH BATTERIES (Two in number)"
            },
            {
              name: "WEBTECH Laboratory",
              area: "65 Sq.Mtrs",
              systems: "17 PC",
              resources: "COMPUTER SYSTEMS: 17: HP-280G1 Business Desktop, Intel Core i3-4160, 3.6 GHz, 4 GB DDR3 RAM, 500 GB HDD, HP-Compaq 18\" Monitors with USB Keyboards and Mouse PRINTER: DOT MATRIX PRINTER LQ-1150 UPS: 10 KVA WITH BATTERIES (Two in number)"
            },
            {
              name: "AI Laboratory",
              area: "70 Sq.Mtrs",
              systems: "16 PC",
              resources: "COMPUTER SYSTEMS: 16 HP-280G1 Business Desktop, Intel Core i3-4160, 3.6 GHz, 4 GB DDR3 RAM, 500 GB HDD, HP-Compaq 18\" Monitors with USB Keyboards and Mouse PRINTER: DOT MATRIX PRINTER LQ-1150 UPS: 10 KVA WITH BATTERIES (Two in number)"
            },
            {
              name: "Operating System Laboratory",
              area: "68 Sq.Mtrs",
              systems: "15 PC",
              resources: "COMPUTER SYSTEMS: 15 Lenovo ThinkCentre model number M72 series, Intel Core i3 2120 processor (2nd Gen), Intel motherboard, USB Keyboard and Mouse, 2GB DDR 3 RAM, 500 GB HDD 7200 RPM, DVD RW, PCI/PCI-E, Tower 4*3, 18.5\" TFT Monitor UPS: 10 KVA WITH BATTERIES (One in number)"
            },
            {
              name: "Project Laboratory",
              area: "55 Sq.Mtrs",
              systems: "10 PC",
              resources: "COMPUTER SYSTEMS: 10 LENOVO COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i3 PROCESSOR/4 GB RAM/500 GB SATA HDD/19.5 LED LENOVO MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE UPS: 10 KVA WITH BATTERIES (One in number)"
            },
            {
              name: "Departmental Library",
              area: "50 Sq.Mtrs",
              systems: "Reading Area",
              resources: "Available for students & Staff. No. of Current Text And Reference Books: 369, Large No. of CBTs: 31, No. of Reference Manuals, Journals, etc: 35"
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
            {['2024-25', '2023-24', '2022-23', '2021-22', '2020-21', '2019-20', '2018-19', '2017-18'].map((year) => (
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
                  { no: 1, title: 'AI Powered Assistive Technology for Visually Impaired People By Using Smart Glasses', guide: 'Prof. A G Sharma', award: '1st Rank' },
                  { no: 2, title: 'Glamify: AI And ML-Based Personalized Fashion Recommendation System', guide: 'Prof. S S Muddalkar', award: '2nd Rank' }
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
                  { no: 1, title: 'Reviving History: Exploring forts and monuments through Augmented Reality', guide: 'Prof. P G Angaitkar', award: '1st Rank' },
                  { no: 2, title: 'Echoes to Image', guide: 'Prof. A G Sharma', award: '2nd Rank' }
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
                  { no: 1, title: 'Real-Time Crop Prediction and Fertilizer Recommendation System using Machine Learning and IoT', guide: 'Prof. S. D. Padiya', award: '1st Rank' },
                  { no: 2, title: 'Student Timeline for Student Information System', guide: 'Prof. Ms. P. P. Bute', award: '2nd Rank' }
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
                  { no: 1, title: 'A Social Media App with Text Summarizer and Voice Assistance', guide: 'Prof. Ms. P. V. Kale', award: '1st Rank' },
                  { no: 2, title: 'Machine Learning Based Motion Tracking for 3D Model Animation', guide: 'Prof. A. S. Manekar', award: '2nd Rank' }
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

                {projectYear === '2020-21' && [
                  { no: 1, title: 'Book your Book', guide: 'Prof. Ms. P. V. Kale', award: '1st Rank' },
                  { no: 2, title: 'ECG Classification using Deep Neural Networks', guide: 'Prof. A. G. Sharma', award: '2nd Rank' }
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

                {projectYear === '2019-20' && [
                  { no: 1, title: 'Splay- A light weighted Video Streaming App', guide: 'Prof. Ms. P. P. Bute', award: '1st Rank' },
                  { no: 2, title: 'AI Vision', guide: 'Prof. S. D. Padiya', award: '2nd Rank' }
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

                {projectYear === '2018-19' && [
                  { no: 1, title: 'Smart Mirror and Smart Security Camera', guide: 'Prof. Ms. P. V. Kale', award: '1st Rank' },
                  { no: 2, title: 'Real Time Opinion Mining on Sarcastic Stream Data', guide: 'Prof. A. K. Shahade', award: '2nd Rank' }
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

                {projectYear === '2017-18' && [
                  { no: 1, title: 'Real Time Twitter Analysis using Azure Stream Analysis', guide: 'Prof. A G Sharma', award: '1st Rank' },
                  { no: 2, title: 'SKOILE-Smart School Information System', guide: 'Prof. S S Muddalkar', award: '2nd Rank' }
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

    'pride': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Pride of the Department
        </h3>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {[
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

        {/* GATE Qualified */}
        {prideTab === 'gate' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">GATE Year</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Sr.No</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Name of student</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Class</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Valid Score</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { year: '2025', sr: '1', name: 'Shreyas Santosh Mundhe', class: '3N', score: '38.67', category: 'OBC' },
                    { year: '2025', sr: '2', name: 'Vaishnavi Yuvraj Kaware', class: '4N', score: '26.97', category: 'OBC' },
                    { year: '2025', sr: '3', name: 'Pranay Premsagar Rapartiwar', class: '3N', score: '26.51', category: 'OBC' },
                    { year: '2023', sr: '1', name: 'Rushikesh Raghunath Patil', class: '4N', score: '39.00', category: 'OBC' },
                    { year: '2023', sr: '2', name: 'Komal Subhash Kumbhare', class: '4N', score: '38.33', category: 'OBC' },
                    { year: '2023', sr: '3', name: 'Gaurav Santosh Bansod', class: '3N', score: '22.67', category: 'SC' },
                    { year: '2022', sr: '1', name: 'Gauri Sanjay Panpaliya', class: '4N', score: '35.33', category: 'OPEN' },
                    { year: '2022', sr: '2', name: 'Pratik Gajanan Bondre', class: '4N', score: '29.00', category: 'OBC' },
                    { year: '2022', sr: '3', name: 'Anand Eknath Wankhade', class: '4N', score: '28.00', category: 'OPEN' },
                    { year: '2022', sr: '4', name: 'Rushikesh Raghunath Patil', class: '4N', score: '25.67', category: 'OBC' },
                    { year: '2022', sr: '5', name: 'Tanmay Madhukar Band', class: '4N', score: '16.67', category: 'SC' },
                    { year: '2021', sr: '1', name: 'Swapnil Devidas Bhagat', class: '4N', score: '22.27', category: 'SC' },
                    { year: '2019', sr: '1', name: 'Sanket Rajendra Baheti', class: '4N', score: '47.00', category: 'OPEN' },
                    { year: '2019', sr: '2', name: 'Harvindersingh Gopalsinhg Chavan', class: '4N', score: '35.67', category: 'OPEN' },
                    { year: '2015', sr: '1', name: 'Jadhav Aditee Vasant', class: '4N', score: '25.69', category: 'OBC' },
                    { year: '2015', sr: '2', name: 'Vaibhav Sardar', class: '4N', score: '18.91', category: 'SC' },
                    { year: '2015', sr: '3', name: 'Lokhande Rahul Laxman', class: '4N', score: '18.67', category: 'SC' },
                    { year: '2014', sr: '1', name: 'Jadhav Aditee Vasant', class: '4N', score: '25.69', category: 'OBC' },
                    { year: '2014', sr: '2', name: 'Vaibhav Sardar', class: '4N', score: '18.91', category: 'SC' },
                    { year: '2014', sr: '3', name: 'Lokhande Rahul Lakshman', class: '4N', score: '18.67', category: 'SC' }
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">{student.year}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{student.sr}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{student.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{student.class}</td>
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
                              <th className="px-6 py-4 font-bold text-center">Academic Year</th>
                              <th className="px-6 py-4 font-bold text-center">No. of Students Placed</th>
                              <th className="px-6 py-4 font-bold text-center">Details Report</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                          {[
                              { year: '2024-25', count: '16', id: '2024-25' },
                              { year: '2023-24', count: '37', id: '2023-24' },
                              { year: '2022-23', count: '48', id: '2022-23' },
                              { year: '2021-22', count: '60', id: '2021-22' },
                              { year: '2020-21', count: '61', id: '2020-21' },
                              { year: '2019-20', count: '51', id: '2019-20' },
                              { year: '2018-19', count: '42', id: '2018-19' },
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

              {placementYear === '2024-25' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">SN</th>
                                <th className="px-6 py-4 font-bold">Student Details</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">Placement Package (LPA)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { sn: 1, name: "Aditya Chavan", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", package: "3.30 to 6" },
                                { sn: 2, name: "Rutuja Pawar", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", package: "3.30 to 6" },
                                { sn: 3, name: "Samruddhi Tambatkar", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", package: "3.30 to 6" },
                                { sn: 4, name: "Shreyash Dubey", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", package: "3.30 to 6" },
                                { sn: 5, name: "Aditya Chavan", company: "Bristlecone India Limited, Mumbai", package: "4.25" },
                                { sn: 6, name: "Samruddhi Tambatkar", company: "Bristlecone India Limited, Mumbai", package: "4.25" },
                                { sn: 7, name: "Sanket Vinchankar", company: "Micropro Software Solutions Ltd., Nagpur", package: "3" },
                                { sn: 8, name: "Prasad Khadse", company: "Eagle Byte Solutions Pvt. Ltd., Nashik", package: "3.2" },
                                { sn: 9, name: "Atharva Kathole", company: "Eagle Byte Solutions Pvt. Ltd., Nashik", package: "3.2" },
                                { sn: 10, name: "Tanvee Jawanjal", company: "Eagle Byte Solutions Pvt. Ltd., Nashik", package: "3.2" },
                                { sn: 11, name: "Amey Mandwale", company: "Connecticus Technologies, Pune", package: "6" },
                                { sn: 12, name: "Shreyash Dubey", company: "Connecticus Technologies, Pune", package: "6" },
                                { sn: 13, name: "Isha Wagh", company: "Krutanik Solution, Bengaluru", package: "6" },
                                { sn: 14, name: "Rutuja Pawar", company: "Krutanik Solution, Bengaluru", package: "6" },
                                { sn: 15, name: "Kartik Dhande", company: "TCS Limited, Pune", package: "3.36" },
                                { sn: 16, name: "Tejaswini Bhagat", company: "PHN Technology Pvt. Ltd., Pune", package: "5.6" }
                            ].map((record, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{record.sn}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{record.name}</td>
                                    <td className="px-6 py-4 text-gray-700">{record.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600">{record.package}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              )}

              {placementYear !== '2024-25' && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <FaLightbulb className="text-3xl text-yellow-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">Data Not Available</h3>
                  </div>
                  <p className="text-gray-600">Detailed placement records for {placementYear} will be updated soon.</p>
                </div>
              )}
           </motion.div>
        )}
        </AnimatePresence>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
            <p className="text-gray-500 mt-2">Department of Information Technology</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {[
                { name: "Dr. S. D. Padiya", role: "Associate Professor & Head", area: ["Bluetooth Low Energy", "Wireless Sensor Network", "Protocol Design", "IoT", "Embedded System Programming"], email: "sdpadiya@ssgmce.ac.in", phone: "+91 7588501506", photo: hodPhoto },
                { name: "Dr. A. S. Manekar", role: "Associate Professor (On Lien)", area: ["Data Mining", "Big Data Analytics", "Internet Security", "Cloud Computing"], email: "asmanekar@ssgmce.ac.in", phone: "+91 9028288008", photo: asmPhoto },
                { name: "Ms. P. V. Kale", role: "Assistant Professor", area: ["Machine Learning"], email: "pvkale@ssgmce.ac.in", phone: "+91 9975647169", photo: pvkPhoto },
                { name: "Mr. A. G. Sharma", role: "Assistant Professor", area: ["Data Science", "Machine Learning", "NLP"], email: "agsharma@ssgmce.ac.in", phone: "+91 9096454872", photo: agsPhoto },
                { name: "Mr. F. I. Khandwani", role: "Assistant Professor", area: ["Database Management System"], email: "mfkhandwani@ssgmce.ac.in", phone: "+91 9970936786", photo: fikPhoto },
                { name: "Mr. S. S. Muddalkar", role: "Assistant Professor", area: ["Discrete Structure", "Cloud Computing"], email: "ssmuddalkar@ssgmce.ac.in", phone: "+91 9655840821", photo: ssmPhoto },
                { name: "Ms. P. P. Bute", role: "Assistant Professor", area: ["Network Security", "Digital Image Processing"], email: "ppbute@ssgmce.ac.in", phone: "", photo: ppbPhoto },
                { name: "Mrs. S. N. Khandare", role: "Assistant Professor", area: ["Data Science", "Data Analytics", "Big Data Computing", "Applied AI"], email: "snkhandare@ssgmce.ac.in", phone: "", photo: snkPhoto },
                { name: "Ms. N. N. Ghuikar", role: "Assistant Professor", area: ["Programming and Software Testing"], email: "nnghuikar@ssgmce.ac.in", phone: "+91 7499340477", photo: nngPhoto },
                { name: "Mr. P. A. Lod", role: "Assistant Professor", area: ["Business Intelligence"], email: "palod@ssgmce.ac.in", phone: "+91 9775797555", photo: palPhoto },
                { name: "Mr. Ketan Pachpade", role: "Professor of Practice", area: ["Owner and Product Architect", "Gigasoft Technologies, Pune"], email: "", phone: "", photo: kpPhoto, isIndustry: true }
            ].map((fac, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
                >
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
    <GenericPage title="Information Technology" backgroundImage={itBanner}>
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

export default IT;


