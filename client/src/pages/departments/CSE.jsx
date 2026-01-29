import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import cseBanner from '../../assets/images/departments/cse/Cse banner.png';
import { FaLaptopCode, FaBullseye, FaUserTie, FaFlask, FaAward, FaAngleRight, FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone, FaIdCard, FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Import HOD photo
import hodPhoto from '../../assets/images/departments/cse/HOD_CSE_JMP.jpg';

// Import Faculty Photos
import jmpPhoto from '../../assets/images/departments/cse/faculty/JMP.jpg';
import nmkPhoto from '../../assets/images/departments/cse/faculty/NMK.jpg';
import cmmPhoto from '../../assets/images/departments/cse/faculty/CMM.jpeg';
import vsmPhoto from '../../assets/images/departments/cse/faculty/VSM.jpg';
import pkbPhoto from '../../assets/images/departments/cse/faculty/PKB.jpg';
import kpsPhoto from '../../assets/images/departments/cse/faculty/KPS.jpg';
import sbpPhoto from '../../assets/images/departments/cse/faculty/SBPagrut.jpg';
import razPhoto from '../../assets/images/departments/cse/faculty/RAZamare.jpg';
import prpPhoto from '../../assets/images/departments/cse/faculty/PRPohare.jpeg';
import rvdPhoto from '../../assets/images/departments/cse/faculty/RVD.jpeg';
import smjPhoto from '../../assets/images/departments/cse/faculty/SMJawake.png';
import tapPhoto from '../../assets/images/departments/cse/faculty/TAP.jpeg';
import vskPhoto from '../../assets/images/departments/cse/faculty/VSK.jpeg';
import yogeshPhoto from '../../assets/images/departments/cse/faculty/YogeshMurumkar.jpeg';

const CSE = () => {
  // Department of Computer Science & Engineering Page
  const [activeTab, setActiveTab] = useState('overview');
  
  // State for Vision/Mission/PEO section tabs
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [researchTab, setResearchTab] = useState('patents');
  const [projectYear, setProjectYear] = useState('2024-25');
  const [researchYear, setResearchYear] = useState('2024-25');
  const [placementYear, setPlacementYear] = useState(null); // null shows summary, string shows specific year details
  const [internshipYear, setInternshipYear] = useState('2024-25');
  const [prideTab, setPrideTab] = useState('gate');

  // Reset project year when switching to student-projects tab
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
    { id: 'pride', label: 'Pride of the Department' },
    { id: 'student-projects', label: 'Students Best Projects' },
    { id: 'student-chapter', label: 'Student Chapter (CSESA)' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Curricular Activities' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'course-material', label: 'Course Material' },
    { id: 'ug-projects', label: 'UG Projects' },
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
                      src="https://www.youtube.com/embed/DHtbFvTG53k" 
                      title="Department of Computer Science & Engineering SSGMCE"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>

              <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
                  <p>
                      The Department of Computer Science & Engineering welcomes young aspirants to shape their career by developing strong technical, analytical, and communication skills. We are committed to preparing students not just for the software industry, but also for higher studies, research, and entrepreneurship.
                  </p>
                  <p>
                      We focus on holistic development through innovative teaching-learning processes, industrial training, ongoing projects, and regular interactions with industry experts.
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
                        {/* BE */}
                        <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Bachelor of Engineering</td>
                        </tr>
                        {[ 
                            ['Degree', 'Bachelor of Engineering (Computer Science & Engineering)'],
                            ['Duration', '4 Year(8 Semesters) (Full time)'],
                            ['Intake', '120 Students per year'],
                            ['Establishment', 'Year: 1985'],
                            ['NBA Status', 'Five Times Accredited by NBA'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                         {/* ME */}
                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4">Master of Engineering</td>
                        </tr>
                        {[ 
                            ['Specialization', 'M.E. (Computer Engineering)'],
                            ['Duration', '2 Year(4 Semesters) (Full time)'],
                            ['Intake', '18 Students per year'],
                            ['Establishment', 'Year: 2012'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                        {/* PhD */}
                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Ph. D in Computer Science and Engineering</td>
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
                <p className="text-ssgmce-blue font-medium">Dr. J. M. Patil</p>
                <p className="text-sm text-gray-500">Head, Department of Computer Science & Engineering</p>
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
                            To achieve global recognition in Computer Science and Engineering education to serve the growing needs of industry and society.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            "To imbibe programming skills in latest areas of computer science through project work",
                            "To prepare the Innovators, Entrepreneur, Researchers and Educationalist through quality education and Industry Institute Interaction.",
                            "To prepare good human beings who work with missionary zeal for upliftment of society."
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
                            "To excel in communication skill, teamwork, multidisciplinary approach and an ability to relate engineering issues to broader social context.",
                            "Graduate will demonstrate the skills of Innovation, Entrepreneurship and Research.",
                            "Graduate will be Computer professionals with latest skills and technologies to cater the needs of global IT industry and National Organizations."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                            </div>
                        ))}
                     </motion.div>
                 )}

                 {poTab === 'pso' && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                         {[
                            "Demonstrate knowledge of advanced programming techniques to solve contemporary issues.",
                            "Perform projects with novel ideas and implement them.",
                            "Understand and develop ethical work culture and attitude by participating in social service."
                         ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
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
                                // Show more only if toggled
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
    hod: (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
         {/* Profile Section - Top Center */}
         <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
             <div className="flex flex-col items-center">
                 <div className="w-56 h-56 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
                    <img 
                        src={hodPhoto} 
                        alt="Dr. J. M. Patil - HOD CSE" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. J. M. Patil</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Computer Science & Engineering</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>jmpatil@ssgmce.ac.in</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center">
                        <FaPhone className="mr-2 text-ssgmce-orange" />
                        <span>+91 9921860806</span>
                    </div>
                 </div>
                 
                 <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Ph.D (CSE)</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">M.Tech</span>
                 </div>
             </div>
         </div>
         
         {/* Message Section - Below Photo */}
         <div className="p-8 md:p-10 relative bg-white">
             <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-blue-50 -z-0" />
             
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Message from the HOD</h3>
                    <div className="h-1 w-20 bg-ssgmce-orange mt-2 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                    <p className="text-gray-800 font-semibold">
                        Dear Friends,
                    </p>
                    <p>
                        I am privileged to lead the Computer Science and Engineering department, and I am delighted to extend a heartfelt welcome to all of you. Education serves as the cornerstone for equipping students with the ability to assimilate novel concepts and cultivate critical thinking skills essential for navigating life's challenges. In today's era, the emergence of globalization and advancements in information and communication technologies (ICT) have heralded the dawn of a new socioeconomic paradigm known as the <span className="font-semibold text-gray-900">"Knowledge-Based Society."</span>
                    </p>
                    <p>
                        The Department of CSE is committed to fostering a vibrant learning environment that nurtures innovation, creativity, and academic excellence. Our faculty members are not only experts in their respective fields but also passionate educators dedicated to guiding and inspiring the next generation of computer scientists and engineers. Department cordially invites aspiring individuals from across the globe to embark on a journey of career development, fostering robust technical, analytical, and communication proficiencies. Our aim is to equip students not only for lucrative roles in the software industry but also to provide them with a solid technical groundwork for pursuing postgraduate studies in esteemed Indian and international universities, preparing them for diverse career paths in research, management, entrepreneurship, and beyond.
                    </p>
                    <p>
                        At SSGMCE, we are committed to realizing these objectives by nurturing holistic student development. Our approach emphasizes the comprehensive enhancement of students' skills and knowledge during their tenure with us. To this end, we prioritize the teaching-learning process and implement a range of innovative initiatives. These include industrial training, independent minor and major projects, industry visits, fostering a robust institute-industry interface, hosting lectures by esteemed guest speakers, and delivering expert insights through renowned faculty members. These endeavours are conducted regularly to ensure a well-rounded educational experience for our students.
                    </p>
                    <p>
                        Our department boasts a team of exceptional and experienced faculty members. We offer courses on Bachelor degree in Computer Science & Engineering and Master degree in Computer Engineering. These courses approved by AICTE and affiliated with Sant Gadge Baba Amravati University, Amravati. Our programs have an intake of 60 for B.E. and 18 for M.E. with world-class infrastructure, our computer labs are equipped with the latest software for an optimal learning experience. All Laboratories are recognized and approved as research laboratories for Ph. D work by Sant Gadge Baba Amravati University, Amravati.
                    </p>
                    <p className="font-semibold text-gray-800 italic">
                        Wishing you all a successful and fulfilling academic journey ahead.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. J. M. Patil</p>
                        <p className="text-sm text-gray-500">Head, Department of CSE</p>
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
    laboratories: (
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Infrastructure and Laboratories</h3>
            <p className="text-gray-600">Our well-equipped laboratories feature high-end configurations to support advanced curriculum requirements and research initiatives.</p>
        </div>
        
        <div className="space-y-8">
            {[ 
                { 
                    name: 'Object Oriented Programming Laboratory', 
                    photo: '??',
                    quantity: 18,
                    systems: [
                        { config: 'Lenovo i5 12th Generation Processor i24706', cores: '2.4 GHz/Model', specs: 'Lenovo Think Centre Neo 50S Gen 3/Intel Uhd Graphics 730/Intel B560 Chipset Mother Board/6GB Single Module DDR4 Ram /1 TB Sata 7200 Rpm HDD/512 GB M2 SSD/Lenovo Think vision E2050 19.5" Led Monitor/ USB Optical Scroll Mouse/USB Keyboard' }
                    ],
                    quantity2: 18,
                    otherResources: 'HP Scanner, DVD Writer, 16 PORT D-Link Switch',
                    ups: 'TRANSTECH 10 KVA With Batteries'
                },
                { 
                    name: 'System Software Laboratory', 
                    photo: '???',
                    quantity: 18,
                    systems: [
                        { config: 'Lenovo i5 12th Generation Processor i24706', cores: '2.4 GHz/Model', specs: 'Lenovo Think Centre Neo 50S Gen 3/Intel Uhd Graphics 730/Intel B560 Chipset Mother Board/6GB Single Module DDR4 Ram /1 TB Sata 7200 Rpm HDD/512 GB M2 SSD/Lenovo Think vision E2050 19.5" Led Monitor/ USB Optical Scroll Mouse/USB Keyboard' }
                    ],
                    quantity2: 18,
                    otherResources: 'HP LaserJet 1020 Plus Printer'
                },
                { 
                    name: 'DBMS Laboratory', 
                    photo: '???',
                    quantity: 20,
                    systems: [
                        { config: '20 : Lenovo Intel Core i3 Processor (5G) 3.3G GHz/Intel Mother Board/4GB RAM 3.29 GHz/500GB HDD 7200 Rpm/PCI Tower (4x3)', specs: '18.5" TFT Monitor, USB Keyboard/Optical Scroll Mouse' }
                    ],
                    otherResources: 'UPS 5KVA with Batteries, 240/16 SSD LCD Projector and Projector Screen'
                },
                { 
                    name: 'Project Laboratory', 
                    photo: '??',
                    quantity: 19,
                    systems: [
                        { config: 'Lenovo Intel Core i3 Processor (3G) 3.3G GHz/Intel Mother Board/4GB RAM 3.29 GHz/17 to 500GB HDD 7200 Rpm/PCI Tower (4x3)', specs: '18.5" TFT Monitor, USB Keyboard/Optical Scroll Mouse' }
                    ],
                    systemConfig2: '06 Lenovo Intel Core i3 Processor (5G) 3.3G GHz/Intel Mother Board/4gb RAM 3.29 GHz/17 to 7200 rpm/pci tower (4x3), 18.5" TFT Monitor, USB Keyboard /Optical scroll mouse',
                    otherResources: 'ONLINE JAVA UPS with battery backup'
                },
                { 
                    name: 'Beginners Laboratory', 
                    photo: '??',
                    quantity: 22,
                    systems: [
                        { config: '03 Lenovo Intel 48T Chip Set Mother Board, 4GB DDR3 RAM,500GB SATA HDD, USB Mouse, Keyboard, 18.5" LED Monitor' },
                        { config: '19 HP i5 12th GEN PRO With Intel 2HA34MT Processor 3.0G GHz, 13MB Cache, 8GB DDR5 RAM, 512 GB SSD, USB Mouse, Keyboard,19.5" TFT Monitor' }
                    ],
                    otherResources: 'ONLINE 5KVA UPS with 30 min battery backup'
                },
                { 
                    name: 'Data Science Laboratory', 
                    photo: '??',
                    quantity: 18,
                    systems: [
                        { config: '16 Lenovo Desktop PC i3 6th Generation Model 8510 Tower Desktop core i3 Processor, 4GB DDR4 RAM, 500 GB SATA HDD, USB Mouse, Keyboard,2GB DDR4 RAM, 19.5" LED Monitor' },
                        { config: '02 Lenovo Desktop PC i3 6th Generation Model 8510 Tower Desktop 02Lenovo core i3 7th Generation i3-7100 desktop PC i3 7th Generation 02LEN0V0 desktop PC i3 7th HDD/DDR4 Model 85106 desktop PC i3 7200RPM' }
                    ],
                    otherResources: 'ONLINE JAVA UPS with battery backup, ONLINE 240 GS SSD LCD Projector and Projector Screen'
                },
                { 
                    name: 'Machine Learning & IOT Laboratory', 
                    photo: '??',
                    quantity: 8,
                    systems: [
                        { config: '07 Lenovo Desktop PC i3(6th Generation Model 85106 Tower Desktop core i3 processor, 4GB DDR4 RAM, 500 GB SATA HDD,USB Mouse, Keyboard,19.5" TFT Monitor' },
                        { config: '01 Lenovo Think Pad P15 Intel core i3 processor, 8GB RAM, 1TB HDD, Intel 3,4GHz, USB Mouse, Keyboard,2GB DDR3 RAM, 50GB HDD,7200RPM' }
                    ],
                    otherResources: '04 Raspberry PI 3+ Complete Computer, Mini Wireless Keyboard + Touch Pad Mouse, 37 sensor Development Kit, ESP8266, KIT Raspberry P3 B4GB/Complete (Arduino KIT, P84GB8Complete, Arduino KIT, (Numeric Digital)',
                    kits: 'V2 Lua Based ESP8266 Development kit, 32- V2 Development Board Wifi + BLE 4.2 WROOM-32 Develo, ESP32-Development Board Wifi + BLE 4.2 WROOM-32, Arduino KIT'
                }
            ].map((lab, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
                >
                    <div className="grid md:grid-cols-[350px,1fr] gap-0">
                        {/* Laboratory Photo */}
                        <div className="bg-gray-100 flex items-center justify-center p-8 border-r border-gray-200">
                            <div className="text-center">
                                <div className="text-8xl mb-4">{lab.photo}</div>
                                <div className="text-sm font-semibold text-gray-600">Laboratory Photo</div>
                            </div>
                        </div>

                        {/* Laboratory Details */}
                        <div className="p-6 md:p-8">
                            <h4 className="text-xl font-bold text-red-600 mb-4">{lab.name}</h4>
                            
                            <div className="space-y-4">
                                {/* Computer Systems */}
                                <div>
                                    <p className="font-bold text-gray-900 mb-2">COMPUTER SYSTEMS: Quantity- {lab.quantity}</p>
                                    <div className="space-y-3">
                                        {lab.systems.map((sys, idx) => (
                                            <div key={idx} className="text-sm text-gray-700 leading-relaxed">
                                                <span className="font-semibold">System Configuration : </span>
                                                {sys.config && <span>{sys.config} </span>}
                                                {sys.cores && <span>{sys.cores} </span>}
                                                {sys.specs && <span>{sys.specs}</span>}
                                            </div>
                                        ))}
                                        {lab.systemConfig2 && (
                                            <div className="text-sm text-gray-700 leading-relaxed">
                                                <span className="font-semibold">System Configuration : </span>
                                                {lab.systemConfig2}
                                            </div>
                                        )}
                                        {lab.quantity2 && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold">Quantity:</span> {lab.quantity2}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Other Resources */}
                                <div>
                                    <p className="font-bold text-gray-900 mb-1">Other Resources:</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">{lab.otherResources}</p>
                                    {lab.kits && (
                                        <p className="text-sm text-gray-700 leading-relaxed mt-2">{lab.kits}</p>
                                    )}
                                </div>

                                {/* UPS */}
                                {lab.ups && (
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">UPS:</p>
                                        <p className="text-sm text-gray-700">{lab.ups}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    ),

    'pride': (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaTrophy className="text-4xl text-yellow-500" />
            <h3 className="text-3xl font-bold text-gray-800">
              Pride of the Department
            </h3>
          </div>

          {/* Tabs for different sections */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setPrideTab('gate')}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === 'gate'
                  ? 'border-b-4 border-ssgmce-orange text-ssgmce-blue'
                  : 'text-gray-600 hover:text-ssgmce-blue'
              }`}
            >
              GATE Qualified
            </button>
            <button
              onClick={() => setPrideTab('toppers')}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === 'toppers'
                  ? 'border-b-4 border-ssgmce-orange text-ssgmce-blue'
                  : 'text-gray-600 hover:text-ssgmce-blue'
              }`}
            >
              University Toppers
            </button>
            <button
              onClick={() => setPrideTab('alumni')}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === 'alumni'
                  ? 'border-b-4 border-ssgmce-orange text-ssgmce-blue'
                  : 'text-gray-600 hover:text-ssgmce-blue'
              }`}
            >
              Top Alumni
            </button>
          </div>

          {/* GATE Qualified Students */}
          {prideTab === 'gate' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* 2024 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2024</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Harish Barahate</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">35.00</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dnyaneshwari A. Chatarkar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">25.22</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Parth Sachin Kinkar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45.35</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">EWS</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Janhavi Mangesh Nakat</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">26.54</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2023 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2023</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lokesh Premkumar Chandak</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">53.67</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OPEN</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rudransh Santosh Nemade</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">33.0</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2022 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2022</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sudhanshu Ramesh Sathawane</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45.0</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sakshi Prashant Thakre</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">30.67</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2021 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2021</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kartik Satish Gawande</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">31.50</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">NT</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kasturi Vinayak Anjankar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28.14</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OPEN</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aakash Harish Gadekar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">25.57</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sudhanshu Sathawane</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">32.54</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rahul Samudrawad</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">21.01</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">SC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2020 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2020</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vaishnavi Vinayak Kale</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29.33</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2019 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">List of GATE Qualified Students 2019</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S. N.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Normalized Valid Score</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pavan Bhagwan Raut</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">27.33</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Paras Mehta</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28.33</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Rahul Rajabhoj</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">29.33</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">OBC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* University Toppers */}
          {prideTab === 'toppers' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* B.E. University Rank Holders */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">B.E. UNIVERSITY RANK HOLDERS</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of the Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University Rank</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA/Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku.Eisha Gopal Nikam</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.51 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="5">2024</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dnyaneshwari A.Chatarkar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2nd</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.67 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sneha Sunil Khatke</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.54 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Riya Govind Dangra</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.51 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Surabhi Ghanashyamji Lahoti</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.49 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mayur Rajesh Shastrakar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.49 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="3">2022</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Gargi Tela</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.71 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Aman Sahu</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.67 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Gauri Mahalle</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9th</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.60 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="3">2021</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Aryan Raj</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku.Mayuri Kishore Kharche</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku.Kasturi Vinayak Anjankar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="4">2020</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku.Neha Vishwanath Mahalle</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.34 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Aman Sanjay Gupta</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.32 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Samiksha Subash Lohe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.32 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku.Nikita Vinod Bhaisali</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.22 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="3">2019</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Aakash Pooniwala</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.02 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sumit Arora</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.02 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ekta Chugwani</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8.96 CGPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* M.E. University Rank Holders */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">M.E. UNIVERSITY RANK HOLDERS</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name of the Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University Rank</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CGPA/Percentage</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Vaishnavi Sunil Kanherkar</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8.68 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2023</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ajay J. Butwani</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">9.07 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2022</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku. Sakshi R. Deshmukh</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2021</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku. Shivani S. Karhale</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8.44 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2020</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ku. Priyanka S. Lahane</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8.34 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900" rowSpan="2">2019</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rahul M. Bhutada</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7.71 CGPA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rahul M. Bhutada</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1st</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7.71 CGPA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Top Alumni */}
          {prideTab === 'alumni' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-orange to-orange-700 text-white px-6 py-4">
                  <h4 className="text-xl font-bold">TOP ALUMNIS OF DEPARTMENT</h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names of Alumni</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names of Organisation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. NITIN WANKHEDE</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Vice President-Client Services</td>
                        <td className="px-6 py-4 text-sm text-gray-900">VALUE MOMENTUM Software Services Private Limited Hydrabad</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. ALOK TAYAL</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Founder & CEO</td>
                        <td className="px-6 py-4 text-sm text-gray-900">PRONOSIS PATNERS, NOIDA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. HEMANT KARALE</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Business Head</td>
                        <td className="px-6 py-4 text-sm text-gray-900">IRIS Business Services, Mumbai</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. MILAN PAREKH</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Program Manager, SAP Consultant</td>
                        <td className="px-6 py-4 text-sm text-gray-900"></td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. SUSHIL DESHMUKH</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Founder & CEO</td>
                        <td className="px-6 py-4 text-sm text-gray-900">FECUND SOFTWARE SERVICES, JACKSON VILLE, FL(US)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. RIZWAN AHMAD</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Vice President</td>
                        <td className="px-6 py-4 text-sm text-gray-900">QM Solution Pvt. Ltd Nagpur</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. JEETENDRA GAVANKAR</td>
                        <td className="px-6 py-4 text-sm text-gray-900">PILOT OFFICER</td>
                        <td className="px-6 py-4 text-sm text-gray-900">INDIAN AIR FORCE 40, AFC, OFFICERS MESS AFTC JALAHALLI(W), BANGLORE</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. MOHD. S.A.G. AKBANI</td>
                        <td className="px-6 py-4 text-sm text-gray-900">PILOT OFFICER</td>
                        <td className="px-6 py-4 text-sm text-gray-900">INDIAN AIR FORCE AIRFORCE STATION, SALUA, MIDNAPUR, WEST Bengal</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. ABHIJEET WAGH</td>
                        <td className="px-6 py-4 text-sm text-gray-900">MANAGER</td>
                        <td className="px-6 py-4 text-sm text-gray-900">GOODLOSS NEROLAC PAINTS LTD, 14, ELFINSTAN ROAD, PUNE</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. RAJESH CHINCHANIKAR</td>
                        <td className="px-6 py-4 text-sm text-gray-900">PROJECT MANAGER</td>
                        <td className="px-6 py-4 text-sm text-gray-900">BRITESH AIRWAYS STRATEGIC OUTSOURCING IBM INDIA, MIDAS SAHAR PLAZA COMPLEX, ANDHER(E), MUMBAI</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. SALIL MATHUR</td>
                        <td className="px-6 py-4 text-sm text-gray-900">SCIENTIST</td>
                        <td className="px-6 py-4 text-sm text-gray-900">NATURAL INFORMATION CENTER GOI PLANNING COMMISSION, SSO BLDG., JAIPUR</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">KU. SHYAMLA RAGHAVAN</td>
                        <td className="px-6 py-4 text-sm text-gray-900">PROJECT MANAGER</td>
                        <td className="px-6 py-4 text-sm text-gray-900">MICROSOFT, USA</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. DEEPAK GHAI</td>
                        <td className="px-6 py-4 text-sm text-gray-900">SENIOR MANAGER (E.D.P.)</td>
                        <td className="px-6 py-4 text-sm text-gray-900">COMMERCIAL AUTOMOBILES LTD. 124, NAPLER TOWN JABALPUR (M.P.)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. RANA ARORA</td>
                        <td className="px-6 py-4 text-sm text-gray-900">MANAGING DIRECTOR</td>
                        <td className="px-6 py-4 text-sm text-gray-900">CMC LTD. 52-A, RANI KA BAGH, AMRITSAR</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. GOPENDRA</td>
                        <td className="px-6 py-4 text-sm text-gray-900">CAPTAIN</td>
                        <td className="px-6 py-4 text-sm text-gray-900">4, CORPS OPTG SIGNALS REGT. C/O, 99 A.P.O. TEZPUR (ASSAM)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. ALOK GUPTA</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Managing Director</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Unistat Systems Pvt. Ltd. New Delhi</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. NITIN SHARMA</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Practice Director</td>
                        <td className="px-6 py-4 text-sm text-gray-900">MICROSOFT, Coperation Hydrabad India</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. ABHIJEET CHAUDHARY</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Vice President</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Location Guru Pvt. Ltd Nagpur</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Mr. AMIT MODI</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Vice President</td>
                        <td className="px-6 py-4 text-sm text-gray-900">JP MORGAN, Mumbai</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    ),

    'student-chapter': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Student Chapter (CSESA)
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              Computer Science and Engineering Students' Association
            </h4>
            
            <h5 className="text-lg font-semibold text-ssgmce-blue mb-3">
              Department of Computer Science and Engineering Students' Chapter :
            </h5>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              In order to provide a platform to our students to explore their hidden talent & to keep them abreast with the latest technology, The Computer Science and Engineering Student Association called as CSESA is formed to excel in communication skill, teamwork, multidisciplinary approach and an ability to relate engineering issues to broader social context.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h6 className="text-red-600 font-bold text-lg mb-4">Objectives :</h6>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">➤</span>
                  <span>To imbibe programming skills in latest areas of computer science through project work and hands-on training.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➤</span>
                  <span>To prepare the Innovators, Entrepreneurs, Researchers and Educationalists through quality education and Industry Institute Interaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➤</span>
                  <span>To develop intra-personal and inter-personal skills through expert lectures, workshops, and career guidance programs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➤</span>
                  <span>To develop a healthy competitive spirit by organizing technical competitions and hackathons with other departments and colleges.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➤</span>
                  <span>To prepare good human beings who work with missionary zeal for upliftment of society and demonstrate knowledge to solve contemporary issues.</span>
                </li>
              </ul>
            </div>

            <div className="text-center my-8">
              <p className="text-ssgmce-blue italic text-lg font-medium">
                CSESA helps the students to become a Perfect Technocrat with Good Human Values
              </p>
            </div>

            <div className="text-center">
              <a 
                href="https://ssgmce.ac.in/csesa/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-ssgmce-blue text-white font-semibold rounded-lg hover:bg-ssgmce-dark-blue transition-colors shadow-md hover:shadow-lg"
              >
                Visit CSESA Web Portal for more details
                <FaAngleRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),

    'activities': (
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <FaCalendarAlt className="text-4xl text-ssgmce-blue" />
            <h3 className="text-3xl font-bold text-gray-800">
              Curricular Activities
            </h3>
          </div>

          <div className="space-y-6">
            {/* Activity Cards */}
            {[
              {
                date: "03/10/2025 & 04/10/2025",
                title: "Vision to Venture Project Showcase on Innovation & Entrepreneurship",
                participants: "76 Students",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon"
              },
              {
                date: "22/09/2025",
                title: "Self Driven Activity titled Vision to Venture: Project Showcase on Innovation & Entrepreneurship",
                participants: "47 Students",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Hemant Nagalkar, Group CEO of Softbyte India"
              },
              {
                date: "22/08/2025",
                title: "Self-Driven Activity on Innovation",
                participants: "19 groups of students from CSE Final Year",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Faculty Member of CSE Dept."
              },
              {
                date: "15/08/2025",
                title: "Celebration Activity on Independence Day-Celebrating Aazadi ka Amritkal",
                participants: "77 Students & 151 Faculty",
                organizer: "Dr. J. M. Patil, HOD, CSE Department Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Dr. S. B. Somani (Principal, SSGMCE)"
              },
              {
                date: "11/05/2025",
                title: "National Technology Day",
                participants: "76 Students",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Hemant Nagalkar, Senior Product Manager, Infosys, Pune | Mr. Mohan Bangde, Sr. HR Manager, Harrier Information Systems Pvt. Ltd, Nagpur | Yogesh Murumkar, Bharat software solutions Pune"
              },
              {
                date: "02/04/2025",
                title: "Awareness Program on National Innovation and Startup Policy",
                participants: "76 Students and 2 Faculty",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Dr. Rupali A. Zamare, NISP Coordinator"
              },
              {
                date: "28/03/2025 & 29/03/2025",
                title: "IDEA: INNOVATION",
                participants: "76 Students",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Dr. Rupali A. Zamare, NISP Coordinator"
              },
              {
                date: "07/03/2025",
                title: "Nirmiti Elite: Crafting Creativity through Content",
                participants: "113 Students",
                organizer: "Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Sagar Lokhande"
              },
              {
                date: "01/February/2025",
                title: "Explore AI With Prompt Engineering",
                participants: "65 Students",
                organizer: "Prof. P. R. Pohare, CSE Dept SSGMCE, Shegaon",
                resource: "Mr.Akshay Agrawal, Alumini of SSGMCE"
              },
              {
                date: "17/1/2025 - 18/1/2025",
                title: "Outcome-Based Education (OBE) Approach for Quality Education",
                participants: "Faculty 80 and 7 supporting staff",
                organizer: "Dr. J. M. Patil, HOD, CSE Department, Dr. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Dr. A. R. Bhagat Patil Director (IQAC) & Dean (P&D), YCCE, MGI, Nagpur, Prof. Vilas D. Alagdeve Assistant Professor, Dept. of Electronics, YCCE, Nagpur"
              },
              {
                date: "18th Jan 2025",
                title: "Tech Evolution: The Convergence of Gen AI and Machine Learning",
                participants: "64 students",
                organizer: "Prof. Ms. Kalyani P. Sable, CSE Dept SSGMCE, Shegaon",
                resource: "Ms. Ekta Chugwani (Assistant Manager - Data Science, KPMG, Mumbai)"
              },
              {
                date: "16th Jan 2025",
                title: "National Startup Day",
                participants: "73 students",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Anikesh Gadekar, Piyush Agroya, Shruti Sonone (Co-Car Startup), Sakshi Nimbholkar (Technical App Developer)"
              },
              {
                date: "15th Jan 2025",
                title: "Achieving Problem-Solution Fit & Product-Market Fit",
                participants: "79 students",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Dr. Mayur Dande, Assistant Professor in the MBA Department"
              },
              {
                date: "11th Jan 2025",
                title: "One Day Skill Development Program",
                participants: "CSE All students",
                organizer: "Dr. P. K. Bharne, CSE Dept SSGMCE, Shegaon",
                resource: "Ms. Gargi Tela, Ph.D. Scholar, IIT, Jodhpur Under IDRP, Space Science & Technology"
              },
              {
                date: "11th Jan 2025",
                title: "IPR Session: Patent & Copyright Legalities, Documentation, and Filing",
                participants: "80 Faculty",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Dr. P. William, Dean, R&D, Sanjivani Group of Iinstitutes, Kopargaon"
              },
              {
                date: "28th Nov. 2024",
                title: "My Story: Motivational Session by successful innovators",
                participants: "Student 69",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Dr. Ajay Bhaurao Lad Director, Incubation Innovation & Linkages, SGB Amaravati University, Amaravti"
              },
              {
                date: "15th Aug 2024",
                title: "Intra Institutional Start-up Competition",
                participants: "Student 41 & faculty 9",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon"
              },
              {
                date: "15th Aug 2024",
                title: "Half Day Activity on Independence Day-Celebrating Azadi ka Amritkal",
                participants: "Student 76 & faculty 149",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Dr.S.B.Somani (Principal , SSGMCE)"
              },
              {
                date: "12th Jan 2024",
                title: "National Entrepreneurship Day",
                participants: "82 students",
                organizer: "Dr .R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Sushil Deshmukh, Founder & CEO, FECUND software Services"
              },
              {
                date: "3rd Nov 2023",
                title: "Motivational Session on Journey of Ideas",
                participants: "82 students",
                organizer: "Dr. R. A. Zamare , CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Abhijit Bhand, Founder & CEO, Canadlab, Korea"
              },
              {
                date: "02 Sept.2023",
                title: "One Day Skill Development Program",
                participants: "CSE All students",
                organizer: "Dr. P. K. Bharne, CSE Dept SSGMCE, Shegaon",
                resource: "Ms. Gargi Tela, Ph.D. Scholar, IIT, Jodhpur Under IDRP, Space Science & Technology"
              },
              {
                date: "18-24 March 2023",
                title: "Handson Training BLOCK CHAIN",
                participants: "CSE, IT All students",
                organizer: "Dr. N. M. Kandoi, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Saurav Suman, Block Chain Developer, Banglore"
              },
              {
                date: "27 March-01 April 2023",
                title: "Value Added Course on Full Stack Development",
                participants: "2nd, 3rd, 4th CSE & IT Students",
                organizer: "Prof. S. B. Pagrut & Prof. A. K. Shahade, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Ketan Pachpande, Founder, Gigasoft Technologies, Pune"
              },
              {
                date: "21-22-23 November 2022",
                title: "Handson Workshop on Machine Learning Application Development with Python",
                participants: "2nd, 3rd All Branches students",
                organizer: "Prof. C. M. Mankar, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Anup Kelkar, Founder & CEO, Python Academy, Spring Board, Nagpur"
              },
              {
                date: "09 April 2022",
                title: "Skill Development Program on Developing Scalable Software Solution",
                participants: "2nd, 3rd, 4th CSE & IT Students",
                organizer: "Dr. N. M. Kandoi, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Mitanshu, BP Bussiness solution pune"
              },
              {
                date: "12 March 2022",
                title: "Skill Development Program on Java Spring",
                participants: "2nd, 3rd, 4th CSE & IT Students",
                organizer: "Prof. Ms. P. V. Deshmukh, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Tejas Rathi, Sr. Software Engineer, Principal Financial group, Pune"
              },
              {
                date: "12 March 2022 to 07 June 2022",
                title: "Value Added Course on Blockchain Technology",
                participants: "3rd, 4th CSE & IT Students",
                organizer: "Prof. H. M. Deshmukh, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Yogesh Murumkar CEO, Bharat Soft Technologies, Pune"
              },
              {
                date: "07 March 2022 to 24 May 2022",
                title: "Value Added Course on Data Science and Machine Learning",
                participants: "2nd CSE & IT Students",
                organizer: "Dr. Ms. R. A. Zamare, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Tushar B. Kute, Data Scientist and Researcher at MITU Technologies, Pune"
              },
              {
                date: "26 Feb 2022",
                title: "Skill Development Program on Cloud Computing using AWS",
                participants: "2nd, 3rd, 4th CSE & IT Students",
                organizer: "Prof. J. M. Patil, CSE Dept SSGMCE, Shegaon",
                resource: "Mr.Sudhansu Sawaria Amazon"
              },
              {
                date: "12 Feb 2022",
                title: "Skill Development Program on Application Transformation & Moderation",
                participants: "2nd, 3rd, 4th CSE & IT Students",
                organizer: "Dr. P. K. Bhrne, CSE Dept SSGMCE, Shegaon",
                resource: "Mr.Gajanan More, G Health care"
              },
              {
                date: "05 Feb 2022",
                title: "Skill Development Program on Introduction to Data Engineering",
                participants: "2nd, 3rd, 4th CSE Students",
                organizer: "Prof. V. S. Mahalle, CSE Dept SSGMCE, Shegaon",
                resource: "Mr.SanketThodge, PiRSquare, Pune"
              },
              {
                date: "20th November 2021",
                title: "Webinar on Placement Fundamentals",
                participants: "2nd, 3rd CSE and IT students",
                organizer: "Prof. V. S. Mahalle, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Bharat Lohiya, Senior Consultant specialist, HSBC Software Development Limited, Pune."
              },
              {
                date: "13th November 2021",
                title: "Webinar on RoadMap to be follow to become Data Scientist",
                participants: "2nd, 3rd CSE and IT students",
                organizer: "Prof. J. M. Patil, CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Anurag A. Edlabadkar, Director, The DataLytics, Nagpur."
              },
              {
                date: "23rd October 2021",
                title: "Webinar on Data Science and AI Robotics",
                participants: "2nd, 3rd CSE and IT students",
                organizer: "Prof. Ms. K. P. Sable , CSE Dept SSGMCE, Shegaon",
                resource: "Ms. Ekta Chugwani, Data scientist, L & T, Pune"
              },
              {
                date: "16th October 2021",
                title: "Webinar on Open Source Virtualization in Linux",
                participants: "2nd, 3rd CSE Students",
                organizer: "Prof. C. M. Mankar , CSE Dept SSGMCE, Shegaon",
                resource: "Mr. Sharad Sarode, Host Matrix, Nagpur"
              }
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-ssgmce-orange"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 rounded-full p-3">
                      <FaCalendarAlt className="text-ssgmce-blue text-xl" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {activity.date}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {activity.title}
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold text-gray-700">Participants:</span> {activity.participants}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-700">Organized by:</span> {activity.organizer}
                      </p>
                      {activity.resource && (
                        <p>
                          <span className="font-semibold text-gray-700">Resource Person:</span> {activity.resource}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    ),

    'course-material': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Course Material
        </h3>
        <div className="bg-blue-50 border-l-4 border-ssgmce-orange p-6 rounded-lg">
          <p className="text-gray-600">Content will be updated soon.</p>
        </div>
      </div>
    ),

    'ug-projects': (
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
                                { id: 1, title: "GenAI-Powered Application Tracking System: Enhancing Recruitment with Skill Fitment Analysis." },
                                { id: 2, title: "Eloqify - Intelligent Interaction Companion." },
                                { id: 3, title: "WeCare: Blockchain-Based Solution for Modern Healthcare Challenges." },
                                { id: 4, title: "Job Nexus: An AI-Driven Career Placement Portal for Optimized Campus Recruitment." },
                                { id: 5, title: "Integrated Air Travel Management and Navigation System." },
                                { id: 6, title: "AI Driven Fitness Platform Using Deep CNN." },
                                { id: 7, title: "Automated guide for Accurate and Faster Packaging of E-Commerce Orders." },
                                { id: 8, title: "Brain Stroke Detection Using Machine Learning Approach." },
                                { id: 9, title: "SMART TIMETABLE GENERATOR FOR COLLEGE" },
                                { id: 10, title: "Automated Price Comparison and cheapest option finder for online grocery purchase." },
                                { id: 11, title: "ProjectPulse: College Project Showcase Platform." },
                                { id: 12, title: "Korgut: Connective Platform between Students, Recruiter, and College" },
                                { id: 13, title: "AI- Based Web-Application for Personalized Financial Management." },
                                { id: 14, title: "Integrated QR Code Based Medical Inventory and Healthcare Management." },
                                { id: 15, title: "Agroguide: Crop Recommendation system using Machine Learning." },
                                { id: 16, title: "Smart CCTV Surveillance System using Python." },
                                { id: 17, title: "Development of a NextGen Meeting Portal." },
                                { id: 18, title: "Song Recommendation System based on Emotion." },
                                { id: 19, title: "Machine Learning Approach For Dream 11 Cricket Team Selection." }
                            ] : projectYear === '2023-24' ? [
                                { id: 1, title: "To design effective mechanism for seed analysis and plantation." },
                                { id: 2, title: "Karna Rakshak: Hearing Analysis with Digital Audiometry." },
                                { id: 3, title: "Food link-Bridging NGOs and Hotels." },
                                { id: 4, title: "To design an analysis mechanism for quality of Soil and its impact on seed." },
                                { id: 5, title: "Digital Document Verification using Blockchain Technology." },
                                { id: 6, title: "Detection of Insects and Pests in Agriculture Field." },
                                { id: 7, title: "Smart TimeTable Generator for College." },
                                { id: 8, title: "TextInsightPro: Comprehensive Automated Text Analysis Platform." },
                                { id: 9, title: "Web App for Text Generation Summarization." },
                                { id: 10, title: "Face Recognition Attendance System." },
                                { id: 11, title: "To develop a System for Plant Disease Detection and Diagnosis." },
                                { id: 12, title: "Breast Cancer Detection using Image Processing." },
                                { id: 13, title: "Voice Analysis for Disease Screening." },
                                { id: 14, title: "Creating Crowdfunding marketplace using blockchain." },
                                { id: 15, title: "Plant Disease Detection using Mask RCNN." },
                                { id: 16, title: "Creating a Safe Environment for women: A Location-Based Review Platform." },
                                { id: 17, title: "Securing Parking Spaces: Safeguarding of Vehicles." },
                                { id: 18, title: "Advanced Plant Disease Detection Using VGG net with Convolutional Neural Network." },
                                { id: 19, title: "Design and Development of Seed Dryer Module of Seed Independence." },
                                { id: 20, title: "CLI (Command line interface) Command Generation using Generative AI." },
                                { id: 21, title: "Effective End-of-Life(EOL) Management of Devices in Organization." },
                                { id: 22, title: "Integration of ChatGPT to verify and update EOL of devices." }
                            ] : [
                                { id: 1, title: "Heart and Alzheimer Disease detection using Deep Learning" },
                                { id: 2, title: "Online Examination Proctoring System Using Artificial Intelligence" },
                                { id: 3, title: "Deploying ML model on cloud for Super Mart Sales data analytics and forecasting" },
                                { id: 4, title: "Advanced Forecasting of demandable products prices using machine learning algorithm." },
                                { id: 5, title: "Voting System using Blockchain-(dApp)" },
                                { id: 6, title: "Plant Leaf diseases detection with deep learning" },
                                { id: 7, title: "Image to Image search engine powered by elastic search and TensorFlow" },
                                { id: 8, title: "Carpooling's System (CapX)" },
                                { id: 9, title: "An Effective Brain Tumor Detection System using Deep Learning" },
                                { id: 10, title: "Diabetes Prediction Using Machine Learning" },
                                { id: 11, title: "Product Authentication System using Blockchain" },
                                { id: 12, title: "Help out-Mental Health Journaling and Supporting application based on AI" },
                                { id: 13, title: "Stock Price Prediction model using Technical Analysis" },
                                { id: 14, title: "Replication of Voice Using Deep Learning" },
                                { id: 15, title: "Hand Gesture Recognitions System Using CNN" },
                                { id: 16, title: "Smart toll System using Machine learning" },
                                { id: 17, title: "Currency Detector Android App for Visually Impaired" }
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
                    <span className="font-bold text-ssgmce-blue">Note:</span> Students are encouraged to undertake innovative projects from the final year. 
                    This hands-on approach helps them apply theoretical concepts to real-world computer science and engineering problems, fostering innovation and practical skills.
                </p>
            </div>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
            <p className="text-gray-500 mt-2">Department of Computer Science & Engineering</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {[
                { name: "Dr. J. M. Patil", role: "Associate Professor & Head", area: ["Machine Learning", "Ed. Data Mining", "Learning Analytics"], email: "jmpatil@ssgmce.ac.in", phone: "+91 9921860806", photo: jmpPhoto },
                { name: "Dr. N. M. Kandoi", role: "Professor", area: ["Web Technology", "Security"], email: "nmkandoi@ssgmce.ac.in", phone: "+91 9422559966", photo: nmkPhoto },
                { name: "Mr. C. M. Mankar", role: "Assistant Professor", area: ["Cloud & Cyber Security", "Computer Networks", "Data Science"], email: "cmmankar@ssgmce.ac.in", phone: "+91 9422883141", photo: cmmPhoto },
                { name: "Dr. V. S. Mahalle", role: "Assistant Professor", area: ["Machine Learning", "Computer Vision"], email: "vsmahalle@ssgmce.ac.in", phone: "+91 9421494320", photo: vsmPhoto },
                { name: "Dr. P. K. Bharne", role: "Assistant Professor", area: ["Data Science", "ERP Solutions", "HR Payroll"], email: "pkbharne@ssgmce.ac.in", phone: "+91 9923331966", photo: pkbPhoto },
                { name: "Ms. K. P. Sable", role: "Assistant Professor", area: ["Machine Learning"], email: "kpsable@ssgmce.ac.in", phone: "+91 7620474391", photo: kpsPhoto },
                { name: "Mr. S. B. Pagrut", role: "Assistant Professor", area: ["Mobile Computing", "Information Security"], email: "sbpagrut@ssgmce.ac.in", phone: "+91 9730107361", photo: sbpPhoto },
                { name: "Dr. Ms. R. A. Zamare", role: "Assistant Professor", area: ["AI", "Deep Learning", "Machine Learning"], email: "razamare@ssgmce.ac.in", phone: "+91 9604407625", photo: razPhoto },
                { name: "Ms. P. R. Pohare", role: "Assistant Professor", area: ["DBMS", "OOP"], email: "prpohare@ssgmce.ac.in", phone: "+91 9022399835", photo: prpPhoto },
                { name: "Mr. Ritesh V. Deshmukh", role: "Assistant Professor", area: ["Cloud Computing", "Machine Learning", "DBMS"], email: "rvdeshmukh@ssgmce.ac.in", photo: rvdPhoto },
                { name: "Mrs. S. M. Jawake", role: "Assistant Professor", area: ["OS", "DBMS", "Software Engineering"], email: "smjawake@ssgmce.ac.in", photo: smjPhoto },
                { name: "Mrs. Tejaswini A. Puranik", role: "Assistant Professor", area: ["ML", "AI", "Cyber Security"], email: "tapuranik@ssgmce.ac.in", phone: "+91 7768992288", photo: tapPhoto },
                { name: "Ms. V. S. Kanherkar", role: "Assistant Professor", area: ["Machine Learning"], email: "vskanherkar@ssgmce.ac.in", photo: vskPhoto },
                { name: "Mr. Yogesh P Murumkar", role: "Professor of Practice", area: ["CEO & Corporate Trainer"], email: "Bharat Software Solutions, Pune", isIndustry: true, photo: yogeshPhoto }
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

    'course-outcomes': (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Course Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of B.E. Computer Science & Engineering
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">B.E. Computer Science & Engineering - Course Outcomes</h3>
          </div>

          <div className="p-6 space-y-2">
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
                      {/* 3KS01 ENGINEERING MATHEMATICS - III */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS01 ENGINEERING MATHEMATICS  ?  III</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Solve the Linear Differential equations with constant coefficients by various methods.</li>
                          <li>Find Laplace Transform of various types of functions and apply this knowledge to find Laplace Transform of Periodic, Impulse & Unit step function.</li>
                          <li>Use Laplace Transform to solve Linear Differential equations with constant coefficients & Find Fourier Transform of various types of functions and apply this knowledge to find Fourier Transform of functions, in their core subjects.</li>
                          <li>Find the solution of partial differential equations of first order also learn statistical methods</li>
                          <li>Test the analyticity, find the harmonic conjugates and expand the function in Taylor's or Laurent's series, find conformal mapping.</li>
                          <li>Differentiate vector point functions, find gradient of scalar point function, and find divergence and curl of vector point function. Integrate vector point functions Evaluate line, surface and volume integrals.</li>
                        </ol>
                      </div>

                      {/* 3KS02 DISCRETE STRUCTURES AND GRAPH THEORY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS02 DISCRETE STRUCTURES AND GRAPH THEORY</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze and express logic sentence in terms of predicates, quantifiers, and logical connectives.</li>
                          <li>Derive the solution for a given problem using deductive logic and prove the solution based on logical inference.</li>
                          <li>Classify algebraic structure for a given mathematical problem.</li>
                          <li>Perform combinatorial analysis to solve counting problems.</li>
                          <li>Perform operation on trees data structures.</li>
                          <li>Develop the given problem as graph networks and solve with techniques of graph theory</li>
                        </ol>
                      </div>

                      {/* 3KS03 OBJECT ORIENTED PROGRAMMING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS03 OBJECT ORIENTED PROGRAMMING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply Object Oriented approach to design software.</li>
                          <li>Implement programs using classes and objects.</li>
                          <li>Specify the forms of inheritance and use them in programs.</li>
                          <li>Analyze polymorphic behaviour of objects.</li>
                          <li>Design and develop GUI programs.</li>
                          <li>Develop Applets for web applications</li>
                        </ol>
                      </div>

                      {/* 3KS04 DATA STRUCTURES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS04 DATA STRUCTURES</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply various linear and nonlinear data structures</li>
                          <li>Demonstrate operations like insertion, deletion, searching and traversing on various data structures.</li>
                          <li>Examine the usage of various structures in approaching the problem solution.</li>
                          <li>Choose appropriate data structure for specified problem domain</li>
                        </ol>
                      </div>

                      {/* 3KS05 ANALOG & DIGITAL ELECTRONICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS05 ANALOG & DIGITAL ELECTRONICS</h4>
                        <p className="text-sm text-gray-600 mb-2">At the end of course students will able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain basic concepts of semiconductor devices and its application.</li>
                          <li>Compare different Number System and basics of conversion of number systems.</li>
                          <li>Realize different minimization technique to obtain minimized expression.</li>
                          <li>Design Combinational Circuits.</li>
                          <li>Design and Develop Sequential Circuits.</li>
                        </ol>
                      </div>

                      {/* 3KS06 OBJECT ORIENTED PROGRAMMING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS06 OBJECT ORIENTED PROGRAMMING LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">Design, implement, test, and debug simple programs in an object-oriented programming language.</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To develop the knowledge of object-oriented paradigm in the Java programming language.</li>
                          <li>To evaluate classical problems using java programming.</li>
                          <li>To develop software development skills using java programming for real world applications.</li>
                        </ol>
                      </div>

                      {/* 3KS07 DATA STRUCTURE LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS07 DATA STRUCTURE LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply various linear and nonlinear data structure.</li>
                          <li>Demonstrate operations like insertion, deletion, searching and traversing on various data Structures.</li>
                          <li>Examine the usage of various structures in approaching the problem solution.</li>
                          <li>Choose appropriate data structure for specified problem domain</li>
                        </ol>
                      </div>

                      {/* 3KS08 ANALOG & DIGITAL ELECTRONICS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS08 ANALOG & DIGITAL ELECTRONICS LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">After successfully completing the lab, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply practically the concepts of analog and digital electronics.</li>
                          <li>Explain the operation and characteristics of semiconductor devices.</li>
                          <li>Illustrate the operation of various logic gates and their implementation using digital IC"s.</li>
                          <li>Design and implement various combinational logic circuits.</li>
                          <li>Design and implement various sequential logic circuits</li>
                        </ol>
                      </div>

                      {/* 3KS09 C-SKILL-LAB I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3KS09 C-SKILL-LAB I</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the Numbers, Math functions, Strings, List, Tuples and Dictionaries in Python</li>
                          <li>Interpret different Decision-Making statements, Functions, Object oriented programming in Python</li>
                          <li>Summarize different File handling operations</li>
                          <li>Explain how to design GUI Applications in Python and evaluate different database operations</li>
                          <li>Develop applications using Django framework or Flask</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester III (NEP) */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem3-nep' ? null : 'be-sem3-nep')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-III(NEP)</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem3-nep' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem3-nep' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 3CS203PC: Discrete Structure & Graph Theory */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS203PC: Discrete Structure & Graph Theory</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze and express logic sentence in terms of predicates, quantifiers, and logical connectives.</li>
                          <li>Derive the solution for a given problem using deductive logic and prove the solution based on logical inference.</li>
                          <li>Classify algebraic structure for a given mathematical problem.</li>
                          <li>Perform combinatorial analysis to solve counting problems.</li>
                          <li>Perform operation on trees data structures.</li>
                          <li>Develop the given problem as graph networks and solve with techniques of graph theory</li>
                        </ol>
                      </div>

                      {/* 3CS201PC: Object Oriented Programming */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS201PC: Object Oriented Programming</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply knowledge of Java constructs for developing programs/applications.</li>
                          <li>Conduct practical experiments for demonstrating features of Java.</li>
                          <li>Distinguish between java concepts for better applicability w.r.t requirement.</li>
                          <li>Evaluate the given Java program to identify bugs and to write correct code.</li>
                          <li>To conjecture a prototype to solve real life problems.</li>
                        </ol>
                      </div>

                      {/* 3CS202PC: Data Structure */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS202PC: Data Structure</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply various linear and nonlinear data structures</li>
                          <li>Demonstrate operations like insertion, deletion, searching and traversing on various data structures</li>
                          <li>Examine the usage of various structures in approaching the problem solution.</li>
                          <li>Choose appropriate data structure for specified problem domain</li>
                        </ol>
                      </div>

                      {/* 3CS400EL: Comm.Engng.Project/Field Project Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS400EL: Comm.Engng.Project/Field Project Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify and analyze real community problems in selected rural development domains.</li>
                          <li>Apply suitable digital and technological solutions to address community needs.</li>
                          <li>Evaluate and integrate innovative and cost effective technologies for rural improvement.</li>
                          <li>Engage with community stakeholders and interpret feedback for better outcomes.</li>
                          <li>Create and present a comprehensive project report with outcomes and future scope.</li>
                        </ol>
                      </div>

                      {/* 3CS203PC: Object Oriented Programming Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS203PC: Object Oriented Programming Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To develop the knowledge of object-oriented paradigm in the java programming language.</li>
                          <li>To evaluate classical problems using java programming.</li>
                          <li>To develop software development skills using java programming for real world applications.</li>
                        </ol>
                      </div>

                      {/* 3CS204PC: Data Structure Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS204PC: Data Structure Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply various linear and nonlinear data structure.</li>
                          <li>Demonstrate operations like insertion, deletion, searching and traversing on various data Structures.</li>
                          <li>Examine the usage of various structures in approaching the problem solution.</li>
                          <li>Choose appropriate data structure for specified problem domain</li>
                        </ol>
                      </div>

                      {/* 3CS205MD: Fundamental Computer Programming */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS205MD: Fundamental Computer Programming</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand computing systems and problem-solving logic.</li>
                          <li>Apply algorithmic thinking to solve simple problems.</li>
                          <li>Implement basic programs using control structures and I/O operations.</li>
                        </ol>
                      </div>

                      {/* 3CS206OE: E-Commerce */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS206OE: E-Commerce</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basic concepts of E-Commerce and its significance.</li>
                          <li>Identify different types of online business models and their applications.</li>
                          <li>Understand digital payment methods and their security aspects.</li>
                          <li>Analyze the impact of digital marketing and online customer engagement.</li>
                          <li>Recognize legal, ethical, and cybersecurity challenges in E-Commerce.</li>
                          <li>Explore career opportunities and emerging trends in E-Commerce.</li>
                        </ol>
                      </div>

                      {/* 3CS207EM: Entrepreneurship Development */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3CS207EM: Entrepreneurship Development</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand and explain key entrepreneurial concepts and the startup ecosystem.</li>
                          <li>Identify, assess and evaluate business opportunities using feasibility analysis.</li>
                          <li>Develop a basic business plan including financial, marketing and legal elements.</li>
                          <li>Recognize the importance of innovation, funding sources and IP rights in startup.</li>
                          <li>Apply entrepreneurial thinking to engineering problems and real world challenges.</li>
                        </ol>
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
                      {/* 4KS01 ARTIFICIAL INTELLIGENCE */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS01 ARTIFICIAL INTELLIGENCE</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain concepts of Artificial Intelligence and different types of intelligent agents and their architecture.</li>
                          <li>Formulate problems as state space search problem & efficiently solve them.</li>
                          <li>Summarize the various searching techniques, constraint satisfaction problem and example problems - game playing techniques.</li>
                          <li>Apply AI techniques in applications which involve perception, reasoning and learning.</li>
                          <li>Compare the importance of knowledge, types of knowledge, issues related to knowledge acquisition and representation.</li>
                        </ol>
                      </div>

                      {/* 4KS02 DATA COMMUNICATION AND NETWORKING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS02 DATA COMMUNICATION AND NETWORKING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe data communication Components, Networks, Protocols and various topology-based network architecture.</li>
                          <li>Design and Test different encoding and modulating techniques to change digital ?to? digital conversion, analog-to-digital conversion, digital to analog conversion, analog to analog conversion.</li>
                          <li>Explain the various multiplexing methods and evaluate the different error detection & correction techniques.</li>
                          <li>Illustrate and realize the data link control and data link protocols.</li>
                          <li>Describe and demonstrate the various Local area networks and the IEEE standards.</li>
                        </ol>
                      </div>

                      {/* 4KS03 OPERATING SYSTEM */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS03 OPERATING SYSTEM</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain memory management issues like external fragmentation, internal fragmentation.</li>
                          <li>Illustrate multithreading and its significance.</li>
                          <li>List various protection and security mechanisms of OS.</li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>Analyze the deadlock situation and resolve it.</li>
                          <li>Compare various types of operating systems.</li>
                        </ol>
                      </div>

                      {/* 4KS04 MICROPROCESSOR & ASSEMBLY LANGUAGE PROGRAMMING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS04 MICROPROCESSOR & ASSEMBLY LANGUAGE PROGRAMMING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe 8086 microprocessor and its architecture; also understand instruction processing during the fetch-decode-execute cycle.</li>
                          <li>Design and Test assembly language programs using 8086 microprocessor instruction set.</li>
                          <li>Demonstrate the implementation of standard programming constructs, including control structures and functions, in assembly language.</li>
                          <li>Illustrate and realize the Interfacing of memory & various I/O devices with 8086 microprocessors.</li>
                          <li>Explain the basic concepts of Internet of Things</li>
                        </ol>
                      </div>

                      {/* 4KS05 THEORY OF COMPUTATION */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS05 THEORY OF COMPUTATION</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To construct finite state machines to solve problems in computing.</li>
                          <li>To write regular expressions for the formal languages.</li>
                          <li>To construct and apply well defined rules for parsing techniques in compiler.</li>
                          <li>To construct and analyze Push Down Automata and Turing Machine and formal languages.</li>
                          <li>To express the understanding of the Chomsky Hierarchy.</li>
                          <li>To express the understanding of the decidability and un-decidability problems.</li>
                        </ol>
                      </div>

                      {/* 4KS06 DATA COMMUNICATION & NETWORKING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS06 DATA COMMUNICATION & NETWORKING LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze performance of various communication protocols.</li>
                          <li>Implement Configure various network protocols.</li>
                          <li>Compare IP Address classes of networks.</li>
                        </ol>
                      </div>

                      {/* 4KS07 OPERATING SYSTEM LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS07 OPERATING SYSTEM LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain memory management issues like external fragmentation, internal fragmentation.</li>
                          <li>Illustrate multithreading and its significance.</li>
                          <li>List various protection and security mechanisms of OS.</li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>Analyze the deadlock situation and resolve it.</li>
                          <li>Compare various types of operating systems.</li>
                        </ol>
                      </div>

                      {/* 4KS08 MICROPROCESSOR & ASSEMBLY LANG. PROG LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS08 MICROPROCESSOR & ASSEMBLY LANG. PROG LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the internal workings of the microprocessor.</li>
                          <li>Design and develop programs in Assembly Language Programming.</li>
                          <li>Describe 8086 microprocessor and its architecture; also understand instruction processing during the fetch-decode-execute cycle.</li>
                          <li>Design and Test assembly language programs using 8086 microprocessor instruction set.</li>
                          <li>Demonstrate the implementation of standard programming constructs, including control structures and functions, in assembly language.</li>
                          <li>Illustrate and realize the Interfacing of memory & various I/O devices with 8086 microprocessor.</li>
                        </ol>
                      </div>

                      {/* 4KS09 C-SKILL-LAB II */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4KS09 C-SKILL-LAB II</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, a student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Develop client server program and web applications.</li>
                          <li>Make use of project-based experience for web application development.</li>
                          <li>Create embedded systems using Raspberry Pi/Arduino.</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester IV (NEP) */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem4-nep' ? null : 'be-sem4-nep')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-IV(NEP)</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === 'be-sem4-nep' ? 'Hide' : 'View'}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === 'be-sem4-nep' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 4CS209PC: Data Communication and Networking */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS209PC: Data Communication and Networking</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the functions of each layer in the OSI and TCP/IP models to interpret network communication.</li>
                          <li>Evaluate different types of transmission media and justify their use in real-time applications.</li>
                          <li>Analyze application and presentation layer functions and protocols used in internet communication.</li>
                          <li>Apply transport layer concepts and services to ensure reliable data transmission.</li>
                          <li>Analyze routing protocol classifications and apply IP addressing schemes for a given network.</li>
                          <li>Analyze data link layer functions and protocols to achieve efficient and error-free communication.</li>
                        </ol>
                      </div>

                      {/* 4CS210PC: Operating System */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS210PC: Operating System</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain memory management issues like external fragmentation, internal Fragmentation.</li>
                          <li>Illustrate multithreading and its significance.</li>
                          <li>List various protection and security mechanisms of OS.</li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>Analyze the deadlock situation and resolve it.</li>
                          <li>Compare various types of operating systems</li>
                        </ol>
                      </div>

                      {/* 4CS211PC: Theory of Computation */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS211PC: Theory of Computation</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To construct finite state machines to solve problems in computing.</li>
                          <li>To write regular expressions for the formal languages.</li>
                          <li>To construct and apply well defined rules for parsing techniques in compiler.</li>
                          <li>To construct and analyze Push Down, Turing Machine for formal languages</li>
                          <li>To express the understanding of the Chomsky Hierarchy.</li>
                          <li>To express the understanding of the decidability and un-decidability problems.</li>
                        </ol>
                      </div>

                      {/* 4CS212PC: Data Communication and Networking Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS212PC: Data Communication and Networking Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze performance of various communication protocols</li>
                          <li>Implement Configure various network protocols.</li>
                          <li>Compare IP Address classes of networks</li>
                        </ol>
                      </div>

                      {/* 4CS213PC: Operating System Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS213PC: Operating System Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain memory management issues like external fragmentation, internal fragmentation.</li>
                          <li>Illustrate multithreading and its significance.</li>
                          <li>List various protection and security mechanisms of OS.</li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>Analyze the deadlock situation and resolve it.</li>
                          <li>Compare various types of operating systems</li>
                        </ol>
                      </div>

                      {/* 4CS214MD: Data Structures and Problem Solving */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS214MD: Data Structures and Problem Solving</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand and differentiate various data structures and their use cases.</li>
                          <li>Apply linear and non-linear data structures in solving engineering problems.</li>
                          <li>Analyze algorithm performance and implement solutions using appropriate structures</li>
                        </ol>
                      </div>

                      {/* 4CS215VS: C Skill #1 (VSEC III) */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS215VS: C Skill #1 (VSEC III)</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the Numbers, Math functions, Strings, List, Tuples and Dictionaries in Python</li>
                          <li>Interpret different Decision Making statements, Functions, Object oriented programming in Python</li>
                          <li>Summarize different File handling operations</li>
                          <li>Explain how to design GUI Applications in Python and evaluate different database operations</li>
                          <li>Develop applications using Django framework or Flask</li>
                        </ol>
                      </div>

                      {/* 4CS216OE: Information System for Engineers */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS216OE: Information System for Engineers</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the basic structure and components of Information Systems used in engineering.</li>
                          <li>Identify and evaluate applications of Information Systems across different engineering disciplines.</li>
                          <li>Demonstrate understanding of ERP, MIS, and database systems and their integration with engineering workflows.</li>
                        </ol>
                      </div>

                      {/* 4CS217EM: Social Science & Engineering Economics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4CS217EM: Social Science & Engineering Economics</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the significance of social sciences and economic principles in engineering.</li>
                          <li>Analyze the role of governance, laws, and policies in shaping society and business environments.</li>
                          <li>Apply economic and market principles to assess financial systems and business trends.</li>
                        </ol>
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
                      {/* 5KS01 DATABASE MANAGEMENT SYSTEMS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS01 DATABASE MANAGEMENT SYSTEMS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Model, design and normalize databases for real life applications.</li>
                          <li>Discuss data models, conceptualize and depict a database system using ER diagram.</li>
                          <li>Query Databases applications using Query Languages like SQL.</li>
                          <li>Design & develop transaction processing approach for relational databases.</li>
                          <li>Understand validation framework like integrity constraints, triggers and assertions.</li>
                        </ol>
                      </div>

                      {/* 5KS02 COMPILER DESIGN */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS02 COMPILER DESIGN</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the fundamentals of compiler and various phases of compilers.</li>
                          <li>Design and implement LL and LR parsers.</li>
                          <li>Solve the various parsing techniques like SLR, CLR, LALR.</li>
                          <li>Examine the concept of Syntax-Directed-Definition and translation.</li>
                          <li>Assess the concept of Intermediate-Code Generation and run-time environment.</li>
                          <li>Explain the concept code generation and code optimization</li>
                        </ol>
                      </div>

                      {/* 5KS03 COMPUTER ARCHITECTURE & ORGANIZATION */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS03 COMPUTER ARCHITECTURE & ORGANIZATION</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Discuss basic structure of computer.</li>
                          <li>Understand the basic operation of CPU.</li>
                          <li>Compare and select various Memory and I/O devices as per requirement.</li>
                          <li>Solve the concepts of number representation and their operation.</li>
                          <li>Explain the concept of parallel processing and pipelining.</li>
                        </ol>
                      </div>

                      {/* 5KS04 COGNITIVE TECHNOLOGIES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS04 COGNITIVE TECHNOLOGIES</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the Cognitive computing and principles of cognitive systems.</li>
                          <li>Identify role of Natural Language Processing in cognitive system.</li>
                          <li>Outline application of advanced analytics in cognitive computing.</li>
                          <li>Justify role of Cloud and Distributed Computing in Cognitive Computing.</li>
                          <li>Assess the process of building a Cognitive Application.</li>
                          <li>Identify the Emerging Areas and Future Applications of Cognitive Computing.</li>
                        </ol>
                      </div>

                      {/* 5KS04 DATA SCIENCE AND STATISTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS04 DATA SCIENCE AND STATISTICS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain basics and need of data science.</li>
                          <li>Demonstrate proficiency with statistical analysis of data.</li>
                          <li>Perform linear and multiple linear regression analysis.</li>
                          <li>Develop the ability to build and assess classification-based models.</li>
                          <li>Evaluate outcomes and make decisions based on data.</li>
                          <li>Compare machine learning techniques to solve data science business problems.</li>
                        </ol>
                      </div>

                      {/* 5KS04 INTERNET OF THINGS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS04 INTERNET OF THINGS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the basics of IoT and its applications.</li>
                          <li>Understand design methodology and platforms involved in IoT.</li>
                          <li>Apply the knowledge to interface various sensors with IoT development.</li>
                          <li>Design and Implement IoT devices for real world applications</li>
                        </ol>
                      </div>

                      {/* 5KS04 INTRODUCTION TO CYBER SECURITY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS04 INTRODUCTION TO CYBER SECURITY</h4>
                        <p className="text-sm text-gray-600 mb-2">After completion of this course, the students should be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Know fundamentals of Cybercrimes and Cyber offences.</li>
                          <li>Realize the Cyber threats, attacks and Vulnerabilities.</li>
                          <li>Explore the industry practices and tools.</li>
                          <li>Comprehend the Access Control and Authentication Process.</li>
                          <li>Implement Intrusion Detection and Prevention.</li>
                        </ol>
                      </div>

                      {/* 5KS05 PRINCIPLES OF MARKETING FOR ENGINEERING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS05 PRINCIPLES OF MARKETING FOR ENGINEERING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify the importance of the digital marketing for marketing success.</li>
                          <li>Manage customer relationships across all digital channels and build better customer relationships.</li>
                          <li>Create a digital marketing plan, starting from the SWOT analysis and defining a target group.</li>
                          <li>Identify digital channels, their advantages and limitations, to perceiving ways of their integration taking into consideration the available budget.</li>
                        </ol>
                      </div>

                      {/* 5KS05 Open Elect. I (i) FUNDAMENTALS OF FINANCE & ACCOUNTING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS05 Open Elect. I (i) FUNDAMENTALS OF FINANCE & ACCOUNTING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Define bookkeeping and accounting.</li>
                          <li>Explain the general purposes and functions of accounting.</li>
                          <li>Explain the differences between management and financial accounting.</li>
                          <li>Describe the main elements of financial accounting information ? assets, liabilities, revenue and expenses.</li>
                          <li>Identify the main financial statements and their purposes.</li>
                        </ol>
                      </div>

                      {/* 5KS05 ENTREPRENEURSHIP */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS05 ENTREPRENEURSHIP</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of this course, the students should be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the business environment in order to identify business opportunities.</li>
                          <li>Identify the elements of success of entrepreneurial ventures.</li>
                          <li>Evaluate the effectiveness of different entrepreneurial strategies.</li>
                          <li>Specify the basic performance indicators of entrepreneurial activity.</li>
                          <li>Explain the importance of marketing and management in small businesses venture.</li>
                          <li>Interpret their own business plan.</li>
                        </ol>
                      </div>

                      {/* 5KS06 DATABASE MANAGEMENT SYSTEMS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS06 DATABASE MANAGEMENT SYSTEMS LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Design ER model for any kind of application.</li>
                          <li>Design and develop database.</li>
                          <li>Apply normalization.</li>
                          <li>Query the database.</li>
                          <li>Apply various integrity constraints.</li>
                          <li>Build indices, views.</li>
                          <li>Implement triggers, assertions.</li>
                        </ol>
                      </div>

                      {/* 5KS07 COMPILER DESIGN - Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS07 COMPILER DESIGN ? Lab</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify the fundamentals of compiler and its phases.</li>
                          <li>Use the powerful compiler generation tools such as Lex and Yacc.</li>
                          <li>Write a lexical scanner, either from scratch or using Lex.</li>
                          <li>Develop program for solving parser problems.</li>
                          <li>Examine the various optimization techniques.</li>
                        </ol>
                      </div>

                      {/* 5KS08 EMERGING TECHNOLOGY LAB I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS08 EMERGING TECHNOLOGY LAB I</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate proficiency with statistical analysis of data.</li>
                          <li>Build skills in transformation and merging of data for use in analytic tools.</li>
                          <li>Perform linear and multiple linear regression analysis.</li>
                          <li>Develop the ability to build and assess data-based models.</li>
                          <li>Evaluate outcomes and make decisions based on data.</li>
                        </ol>
                      </div>

                      {/* 5KS08 DATA SCIENCE AND STATISTICS - LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS08 DATA SCIENCE AND STATISTICS ? LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate proficiency with statistical analysis of data.</li>
                          <li>Build skills in transformation and merging of data for use in analytic tools.</li>
                          <li>Perform linear and multiple linear regression analysis.</li>
                          <li>Develop the ability to build and assess data-based models.</li>
                          <li>Evaluate outcomes and make decisions based on data.</li>
                        </ol>
                      </div>

                      {/* 5KS09 C-Skill Lab - III */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5KS09 C-Skill Lab ? III</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the various tools, packages and modules required for Web Development.</li>
                          <li>Discuss the workings of web server, cookies, routes, etc.</li>
                          <li>Develop a mobile application using JS Framework.</li>
                          <li>Design GUI using JS framework and/or Libraries.</li>
                          <li>Create applications using Angular, React, Node and Express.</li>
                        </ol>
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
                      {/* 6KS01 SECURITY POLICY & GOVERNANCE */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS01 SECURITY POLICY & GOVERNANCE</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>List and discuss the key characteristics of Information Security, Leadership and Management</li>
                          <li>Differentiate between Law and Ethics.</li>
                          <li>Describe why ethical codes of conduct are important to Information Security.</li>
                          <li>Discuss the importance, benefits and desired outcomes of Information Security Governance</li>
                          <li>Discuss the process of developing, implementing and maintaining various types of Information Security Policies.</li>
                          <li>Define Risk Management and its role in the organization.</li>
                        </ol>
                      </div>

                      {/* 6KS02 DESIGN AND ANALYSIS OF ALGORITHMS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS02 DESIGN AND ANALYSIS OF ALGORITHMS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Carry out the analysis of various Algorithms for mainly Time complexity.</li>
                          <li>Apply design principles and concepts to algorithm design.</li>
                          <li>Understand different algorithmic design strategies.</li>
                          <li>Analyze the efficiency of algorithms using time complexity.</li>
                          <li>Apply the standard sorting algorithms.</li>
                        </ol>
                      </div>

                      {/* 6KS03 SOFTWARE ENGINEERING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS03 SOFTWARE ENGINEERING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Decide on a process model for a developing a software project.</li>
                          <li>Classify software applications and identify unique features of various domains.</li>
                          <li>Design test cases of a software system.</li>
                          <li>Understand basics of Project management.</li>
                          <li>Plan, schedule and execute a project considering the risk management.</li>
                          <li>Apply quality attributes in software development life cycle.</li>
                          <li>Understand quality control and to ensure good quality software.</li>
                        </ol>
                      </div>

                      {/* 6KS04 NATURAL LANGUAGE PROCESSING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS04 NATURAL LANGUAGE PROCESSING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand how to tag a given text with basic Language features.</li>
                          <li>Design an innovative application using NLP components.</li>
                          <li>Implement a rule-based system to tackle morphology/syntax of a language.</li>
                          <li>Design a tag set to be used for statistical processing for real-time applications.</li>
                          <li>Compare and contrast the use of different statistical approaches for different types of NLP applications.</li>
                        </ol>
                      </div>

                      {/* 6KS04 BIG DATA ANALYTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS04 BIG DATA ANALYTICS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain basics and need of data science.</li>
                          <li>Demonstrate proficiency with statistical analysis of data.</li>
                          <li>Perform linear and multiple linear regression analysis.</li>
                          <li>Develop the ability to build and assess classification-based models.</li>
                          <li>Evaluate outcomes and make decisions based on data.</li>
                          <li>Compare machine learning techniques to solve data science business problems.</li>
                        </ol>
                      </div>

                      {/* 6KS04 SENSORS AND ACTUATORS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS04 SENSORS AND ACTUATORS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Fabricate some of those sensors.</li>
                          <li>Simulate sensors and characterize before fabricating it.</li>
                          <li>Design application with sensors and actuators for real world.</li>
                        </ol>
                      </div>

                      {/* 6KS04 CRYPTOGRAPHY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS04 CRYPTOGRAPHY</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Classify the symmetric encryption techniques.</li>
                          <li>Illustrate various public key cryptographic techniques.</li>
                          <li>Evaluate the authentication and hash algorithms.</li>
                          <li>Discuss authentication applications.</li>
                          <li>Summarize the intrusion detection and its solutions to overcome the attacks.</li>
                          <li>Understand basic concepts of system level security.</li>
                        </ol>
                      </div>

                      {/* 6KS05 COMPUTATIONAL BIOLOGY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS05 COMPUTATIONAL BIOLOGY</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand what types of biological questions can be investigated using computers, and what limitations and assumptions go into the understanding of biology.</li>
                          <li>Describe the properties of DNA, RNA, and proteins, the relationships among these molecules.</li>
                          <li>Analyze how to convert a biological question into a computational problem that can be solved using computers.</li>
                          <li>Explain general approaches for solving computational problems, and will be able to apply these approaches to new problems you encounter.</li>
                          <li>Understand how implement the algorithms by writing computer programs.</li>
                        </ol>
                      </div>

                      {/* 6KS05 CYBER LAWS & ETHICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS05 CYBER LAWS & ETHICS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of this course, the students should be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand Cyber Space, Cyber Crime, Information Technology, Internet & Services.</li>
                          <li>List and discuss various forms of Cyber Crimes.</li>
                          <li>Explain Computer and Cyber Crimes.</li>
                          <li>Understand Cyber Crime at Global and Indian Perspective.</li>
                          <li>Describe the ways of precaution and prevention of Cyber Crime as well as Human Rights.</li>
                        </ol>
                      </div>

                      {/* 6KS05 INTELLECTUAL PROPERTY RIGHTS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS05 INTELLECTUAL PROPERTY RIGHTS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate a breadth of knowledge in Intellectual property.</li>
                          <li>Assess fundamental aspects of Intellectual Property Rights.</li>
                          <li>Discuss Patents, Searching, filling and drafting of Patents.</li>
                          <li>Discuss the basic principles of geographical indication, industrial designs, and copyright.</li>
                          <li>Explain of Trade Mark and Trade Secret.</li>
                          <li>Investigate current trends in IPR and Government initiatives in fostering IPR.</li>
                        </ol>
                      </div>

                      {/* 6KS06 DESIGN AND ANALYSIS OF ALGORITHMS - LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS06 DESIGN AND ANALYSIS OF ALGORITHMS ? LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Carry out the analysis of various Algorithms for mainly Time complexity.</li>
                          <li>Apply design principles and concepts to algorithm design.</li>
                          <li>Understand different algorithmic design strategies.</li>
                          <li>Analyze the efficiency of algorithms using time complexity.</li>
                          <li>Apply the standard sorting algorithms.</li>
                        </ol>
                      </div>

                      {/* 6KS07 SOFTWARE ENGINEERING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS07 SOFTWARE ENGINEERING LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand basic Software engineering methods and practices, and their appropriate application.</li>
                          <li>Describe the process models such as the waterfall and evolutionary models.</li>
                          <li>Discuss role of project management including planning, scheduling and, risk management.</li>
                          <li>Explain data models, object models, context models and behavioral models.</li>
                          <li>Understand of different software architectural styles and Process frame work.</li>
                        </ol>
                      </div>

                      {/* 6KS09 C SKILL LAB IV- LAB (DevOps) */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6KS09 C SKILL LAB IV? LAB (DevOps)</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Install and setup of Jenkins on your systems.</li>
                          <li>Create and run jobs in Jenkins.</li>
                          <li>Add and manage plugins. Use plugins in jobs.</li>
                          <li>Create and run pipelines in Jenkins.</li>
                          <li>Setup, configure, and deploy jobs.</li>
                        </ol>
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
                      {/* 7KS01 SOCIAL SCIENCE & ENGINEERING ECONOMICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS01 SOCIAL SCIENCE & ENGINEERING ECONOMICS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To identify the importance of fundamental rights as well as fundamental duties.</li>
                          <li>To study the composition and powers of the Indian Parliament.</li>
                          <li>To study the impact of science and technology on culture and civilization.</li>
                          <li>To identify the different market structures.</li>
                          <li>To study the decision-making process and the relationship between engineering and economics.</li>
                          <li>To identify the importance of Economic Development on the livelihood of the citizens.</li>
                        </ol>
                      </div>

                      {/* 7KS02 COMPUTER NETWORKS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS02 COMPUTER NETWORKS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the basic concepts of Computer Graphics.</li>
                          <li>Demonstrate various algorithms for basic graphics primitives.</li>
                          <li>Apply 2-D geometric transformations on graphical objects.</li>
                          <li>Use various Clipping algorithms on graphical objects.</li>
                          <li>Explore 3-D geometric transformations, curve representation techniques and projections methods</li>
                          <li>Explain visible surface detection techniques and Animation</li>
                        </ol>
                      </div>

                      {/* 7KS03 CLOUD COMPUTING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS03 CLOUD COMPUTING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the fundamental concept, architecture and applications of Cloud Computing.</li>
                          <li>Discuss the problems related to cloud deployment model.</li>
                          <li>Examine the concept of virtualization.</li>
                          <li>Identify the role of network connectivity in the cloud.</li>
                          <li>Assess different Cloud service providers.</li>
                          <li>Inspect the security issues in cloud service models.</li>
                        </ol>
                      </div>

                      {/* 7KS04 ROBOTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS04 ROBOTICS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe basic concept of robotics.</li>
                          <li>Explain Components of a Robot System & Mechanical Systems.</li>
                          <li>Illustrate Control of Actuators in Robotic Mechanisms.</li>
                          <li>Compare and contrast Robotic Sensory Devices.</li>
                          <li>Recommend Robotics Hardware & Software Considerations in Computer Vision</li>
                          <li>Design Robotic system by taking real time considerations.</li>
                        </ol>
                      </div>

                      {/* 7KS04 DATA WAREHOUSE AND MINING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS04 DATA WAREHOUSE AND MINING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basics of data mining techniques.</li>
                          <li>Identify the similarity and dissimilarity between the data sets.</li>
                          <li>Apply Data Preprocessing to the data.</li>
                          <li>Describe Data Warehouse fundamentals, Data Mining Principles.</li>
                          <li>Illustrate Multidimensional Data Analysis in Cube Space.</li>
                          <li>Assess Mining Frequent Patterns, Associations, and Correlations.</li>
                        </ol>
                      </div>

                      {/* 7KS04 EMBEDDED SYSTEM */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS04 EMBEDDED SYSTEM</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the basics of embedded systems such as core units as well as memory organization for embedded system.</li>
                          <li>Explain components of embedded system, characteristics and quality attributes of embedded systems.</li>
                          <li>Discuss role of 8051 microcontroller and its architecture in design of embedded systems.</li>
                          <li>Examine the different Addressing modes and Instruction Set of 8051 microcontrollers.</li>
                          <li>Use knowledge of C programming and embedded programming.</li>
                          <li>Assess the Real-Time Operating System concepts with VxWorks RTOS.</li>
                        </ol>
                      </div>

                      {/* 7KS04 Digital Forensics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS04 Digital Forensics</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe Digital Forensics and its related preparation</li>
                          <li>Outline Data Acquisition tools</li>
                          <li>Use knowledge to improve crime investigations.</li>
                          <li>Examine Digital Forensic and its validation</li>
                          <li>Assess role of email and social media in investigations</li>
                          <li>Discuss Cloud Forensics.</li>
                        </ol>
                      </div>

                      {/* 7KS05 BLOCK CHAIN FUNDAMENTALS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS05 BLOCK CHAIN FUNDAMENTALS</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the concept of decentralization of the block chain with different layers of blockchain</li>
                          <li>Apply basic cryptographic primitives with encryption standards.</li>
                          <li>Analyze & Design Consensus Algorithms.</li>
                          <li>Examine fundamentals of Bitcoin, how Bitcoin transactions are constructed and used with Bitcoin addresses, accounts, and mining.</li>
                          <li>Understand foundation, architecture, and use of the Ethereum blockchain.</li>
                          <li>Execute & build block chain application/ transaction.</li>
                        </ol>
                      </div>

                      {/* 7KS05 IMAGE PROCESSING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS05 IMAGE PROCESSING</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain fundamental steps in Image Processing.</li>
                          <li>Compare different methods for image transform with its properties.</li>
                          <li>Illustrate Image Enhancement in spatial domain.</li>
                          <li>Examine Image Enhancement in Frequency Domain.</li>
                          <li>Apply various methods for segmenting image and identifying image components.</li>
                        </ol>
                      </div>

                      {/* 7KS05 OPTIMIZATION TECHNIQUES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS05 OPTIMIZATION TECHNIQUES</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe statement of an optimization problem</li>
                          <li>Examine linear programming procedures to solve optimization problems.</li>
                          <li>Compare different nonlinear programming methods of optimization</li>
                          <li>Discuss Geometric Programming with different constraint</li>
                          <li>Identify the appropriate optimization technique for the given problem</li>
                          <li>Synthesize algorithms to solve real time optimization problems.</li>
                        </ol>
                      </div>

                      {/* 7KS06 COMPUTER GRAPHICS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7KS06 COMPUTER GRAPHICS LAB</h4>
                        <p className="text-sm text-gray-600 mb-2">On completion of the course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the basic concepts of Computer Graphics.</li>
                          <li>Demonstrate various algorithms for basic graphics primitives.</li>
                          <li>Apply 2-D geometric transformations on graphical objects.</li>
                          <li>Use various Clipping algorithms on graphical objects</li>
                          <li>Explore 3-D geometric transformations, curve representation techniques and projections methods</li>
                          <li>Explain visible surface detection techniques and Animation.</li>
                        </ol>
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
                      <p className="text-gray-600 italic">Course outcomes data will be updated soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* M.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">M.E. Course Outcomes</h3>
          </div>

          <div className="p-6 space-y-2">
            {/* M.E. Semester I */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'me-sem1' ? null : 'me-sem1')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">M.E. Semester-I</span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
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
                      <p className="text-gray-600 italic">Course outcomes data will be updated soon.</p>
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
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
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
                      <p className="text-gray-600 italic">Course outcomes data will be updated soon.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
             {/* B.E. Section */}
            <div className="grid md:grid-cols-12 border-b border-gray-200">
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                    <h4 className="font-bold text-lg text-gray-800">
                        B.E. (Computer Science and Engineering)
                    </h4>
                </div>
                <div className="md:col-span-8 p-6">
                    <ul className="space-y-4">
                        {[
                            { label: "NEP Scheme", link: "#" },
                            { label: "Scheme", link: "#" },
                            { label: "Revised Syllabus of CSE (1st Sem - 8th Sem) Notification No. 121/2023", link: "#" },
                            { label: "Syllabus Second Year (3rd & 4th Sem)", link: "#" },
                            { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches - Sem. IV (NEP)", link: "#" },
                            { label: "Syllabus - (Modern Indian Language) Common for all branches - Sem. IV (NEP)", link: "#" },
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
                        M.E. (Computer Engineering)
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
    'student-activities': (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">Student Activities & Chapters</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our department actively promotes student participation in various technical and professional chapters, fostering leadership, innovation, and collaborative learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CSESA */}
          <motion.a
            href="https://www.ssgmce.ac.in/csesa/index.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group cursor-pointer"
          >
            <div className="w-14 h-14 bg-blue-50 text-ssgmce-blue rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-ssgmce-blue group-hover:text-white transition-colors">
              <FaLaptopCode />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-ssgmce-blue transition-colors">
              CSESA
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Computer Science and Engineering Students Association - Fostering technical excellence and innovation among students.
            </p>
            <span className="inline-flex items-center text-xs font-bold text-ssgmce-blue group-hover:underline">
              Visit Website <FaAngleRight className="ml-1" />
            </span>
          </motion.a>

          {/* IEEE - Placeholder for future */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all group"
          >
            <div className="w-14 h-14 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center text-2xl mb-4">
              <FaAward />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">IEEE Student Chapter</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Institute of Electrical and Electronics Engineers student chapter activities.
            </p>
            <span className="inline-flex items-center text-xs font-medium text-gray-400">
              Coming Soon
            </span>
          </motion.div>

          {/* ACM - Placeholder for future */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all group"
          >
            <div className="w-14 h-14 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center text-2xl mb-4">
              <FaBullseye />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">ACM Student Chapter</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Association for Computing Machinery student chapter promoting computing education.
            </p>
            <span className="inline-flex items-center text-xs font-medium text-gray-400">
              Coming Soon
            </span>
          </motion.div>
        </div>
      </div>
    ),
    'student-projects': (
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
                  { no: 1, title: "GenAI-Powered Application Tracking System: Enhancing Recruitment with Skill Fitment Analysis.", guide: "Dr. J. M. Patil", award: "1st Rank" },
                  { no: 2, title: "Automated guide for Accurate and Faster Packaging of E-Commerce Orders.", guide: "Prof. C. M. Mankar", award: "2nd Rank" }
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
                  { no: 1, title: "Digital Document Verification using Blockchain Technology.", guide: "Dr. J. M. Patil", award: "1st Rank" },
                  { no: 2, title: "Voice Analysis for Disease Screening.", guide: "Prof. V. S. Mahalle", award: "2nd Rank" }
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
                  { no: 1, title: "Product Authentication System using Blockchain", guide: "Dr. N.M. Kandoi", award: "1st Rank" },
                  { no: 2, title: "Mental Health Therapy App", guide: "Dr. J.M.P Patil", award: "2nd Rank" }
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
                  { no: 1, title: "Autonomous Robotics using VSLAM Technology and Implementation using ARM architecture", guide: "Prof.VS Mahalle", award: "1st Rank" },
                  { no: 2, title: "Sentiment Analysis Of Marathi Language", guide: "Prof. KP Sable", award: "2nd Rank" }
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
    achievements: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Achievements & Recognition</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">Achievement Details 2024-25</p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-4">
          {[
            { name: "Dr. J. M. Patil", items: [
              "Appointed as Research Supervisor at the Mansarovar Global University, Sehore (M.P)",
              "Honored and bestow Global Achievement Award 2025 at Rifacimento International",
              "Recognized as PG Teacher in the Subject Computer Science & Engineering and Information Technology by SGBAU Amaravati",
              "Successfully Completed NBA Accreditation and Teaching and Learning in Engineering (NATE) with score of 69% in Elite Category (NPTEL Certification)",
              "Awarded as Best Paper in ICESM 2025 Conference, Nashik, Maharashtra",
              "Successfully completed his Ph.D. degree in Computer Science and Engineering from Sant Gadage baba Amravati University, Maharashtra, India",
              "Published patent on A METHODOLOGY FOR IMPLEMENTING ALGORITHMS OVER DATA FROM STUDENT PERFORMANCE EVALUATION USING MACHINE LEARNING ALGORITHMS"
            ]},
            { name: "Prof. K. P. Sable", items: [
              "Appreciation as SPOC of SSGMCE under the Swayam -NPTEL Local Chapter",
              "Awarded certificate as Wipro certified faculty"
            ]},
            { name: "Prof. S. B. Pagrut", items: [
              "Awarded the title of Wipro Certified Faculty in Database Solutions Expertise"
            ]},
            { name: "Prof. V. S. Mahalle", items: [
              "Honored with the Best Researcher Award at the International Conference on Data Analytics and Artificial Intelligence (ICDAAI 2024), held on August 30-31, 2024",
              "Invited as a Reviewer in 3rd International Conference on Data Science & Big Data Analytics (IDBA-ACMWIR 2023) held on 16th-17th June",
              "Awarded as Wipro certified faculty for Project base learning for JAVA full stack"
            ]},
            { name: "Dr. R. A. Zamare", items: [
              "Received the Best Paper Presentation Award at the 4th International Conference on ICT in Business, Industry, and Government (ICTBIG 2024), organized by Symbiosis University of Applied Sciences, Indore"
            ]},
            { name: "Dr. N. M. Kandoi", items: [
              "Nominated as a member of BoS (Information Technology) in SGBAU Amravati"
            ]},
            { name: "Prof. P. V. Deshmukh", items: [
              "Successfully completed his Ph.D. degree in Computer Science and Engineering from Sant Gadage baba Amravati University, Maharashtra, India",
              "Published paper titled on High-capacity reversible data hiding in encrypted images using multi-MSB data hiding mechanism with elliptic curve cryptography in Multimedia Tools and Applications",
              "Published patent on AN EFFECTIVE MECHANISM OF DATA HIDING FOR MAGNIFYING CAPACITY USING REVERSIBLE DATA HIDING"
            ]},
            { name: "Prof. C. M. Mankar", items: [
              "Published patent on MRI TUMOUR IMAGE CLASSIFICATION SYSTEM BASED ON IDENTIFICATION OF POTENTIAL FEATURES"
            ]},
            { name: "Prof. Pankaj Bharne", items: [
              "Successfully completed his Ph.D. degree in Computer Science and Engineering from Sant Gadagebaba Amravati University, Maharashtra, India"
            ]},
            { name: "Prof. Miss Rupali Zamre", items: [
              "Successfully completed his Ph.D. degree in Computer Science and Engineering from Shri Jagdishprasad Jhabarmal Tibrewala University, Jhunjhunu, India"
            ]},
            { name: "Student Achievements", items: [
              "Piyush Agroya (3R) and Anikesh Gadekar (4R) - Received the First Position for their Co-Carr Project at the district-level Avishkar Project Competition held on 25th OCT, 2024, at Rajarshi Shahu College of Pharmacy, Buldhana",
              "Sakshi Nimbolkar (3R) - Received First Prize for their project, CLEAN CONNECT at the district-level Avishkar Project Competition held on 25th OCT, 2024, at Rajarshi Shahu College of Pharmacy, Buldhana",
              "Kamlesh Kasambe, Bhuwanesh Kale, Janvi Nakat - Successfully completed a project during an internship at the Electric Loco Shed, Bhusaval",
              "Mukund Atram, Gaurav Chaudhari, Nishant Bayaskar, Subodh Munghate (Second-Year) - Third Winner HACKATHON Competition at InnoVo24, SSGMCE SHEGAON",
              "Ms. Sakshi Nimbolkar (Second-Year) - Runner-up in the IT Quiz Competition",
              "Om Kadu, Subodh Munghate, Anagha Badhe (Third-Year) - First Prize in Second year category Tech-Tesseract HACKATHON by Code Club & ACM-W CCEW",
              "Mr. Krishna Kolhekar (3rd Year CSE) - Own Cash Prize of 15,000 in Project Competition. Design and develop a software solution for the problem statement Competition given by IT company BhartSoft Solution Pune",
              "Kamlesh Kasambe (3rd Year) - Secured First Rank in KIMO Edge Competition and receive cash prize of 5000/- Rs",
              "Jay Joshi and Team (2nd Year) - Won First Prize in National Level Competition ENTHUSIA",
              "Aniket Gazalwar (3rd Year) - Selected as a University Color Holder in Table Tennis",
              "Chinmay Harne (3rd Year) - Selected as a University Color Holder in Chess"
            ]}
          ].map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Header with Name */}
              <div className="bg-[#003366] px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <FaTrophy className="mr-3 text-yellow-300" />
                  {person.name}
                </h3>
              </div>

              {/* Achievement Items */}
              <div className="p-6">
                <ul className="space-y-3">
                  {person.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start group">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2 mr-4 group-hover:bg-orange-600 transition-colors"></div>
                      <p className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
                              { year: '2024-25', count: '27*', id: '2024-25' },
                              { year: '2023-24', count: '57', id: '2023-24' },
                              { year: '2022-23', count: '55', id: '2022-23' },
                              { year: '2021-22', count: '62', id: '2021-22' },
                              { year: '2020-21', count: '47', id: '2020-21' },
                              { year: '2019-20', count: '59', id: '2019-20' },
                              { year: '2018-19', count: '55', id: '2018-19' },
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
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Apurva Patil", company: "Connecticus Technologies Pvt Ltd, Pune", ctc: "6 LPA" },
                                { name: "Chaitali Nakhate", company: "Bristlecone India Ltd., Pune", ctc: "4.25 LPA" },
                                { name: "Dnyaneshwari Mhaisne", company: "Manasvi Tech Solutions Pvt. Ltd., Nashik", ctc: "3.2 LPA" },
                                { name: "Eisha Nikam", company: "Bristlecone India Ltd., Pune", ctc: "4.25 LPA" },
                                { name: "Khushbu Chavhan", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", ctc: "4 LPA" },
                                { name: "Kunjan Katore", company: "RIA Advisory LLP, Pune", ctc: "6.5 LPA" },
                                { name: "Palak Jasani", company: "NCSI Technologies Pvt. Ltd., Pune", ctc: "5.62 LPA" },
                                { name: "Pranita Tondre", company: "Cognizant Technology Solutions India Pvt. Ltd., Pune", ctc: "4 LPA" },
                                { name: "Radhika Kapoor", company: "QuantumSoft Technologies Pvt. Ltd., Pune", ctc: "4.5 LPA" },
                                { name: "Samruddhi Katole", company: "Bizsense Solutions Pvt. Ltd., Nagpur", ctc: "5.5 LPA" },
                                { name: "Sanika Dose", company: "SwiftNLift Media and Tech LLP, Pune", ctc: "3.25 LPA" },
                                { name: "Shivani Digole", company: "Bristlecone India Ltd., Pune", ctc: "4.25 LPA" },
                                { name: "Shruti Sonone", company: "Lend a Hand India, Pune", ctc: "6 LPA" },
                                { name: "Abhishek Patil", company: "TCS, Pune", ctc: "7 LPA" },
                                { name: "Bhuvnesh Kale", company: "Bristlecone India Ltd., Pune", ctc: "4.25 LPA" },
                                { name: "Gaurav Dhale", company: "One Smarter Inc., Ohio USA", ctc: "3.6 LPA" },
                                { name: "Gaurav Kaple", company: "One Smarter Inc., Ohio USA", ctc: "3.6 LPA" },
                                { name: "Ishan Gawande", company: "Truscholar Tech., Amravati", ctc: "1.2 LPA" },
                                { name: "Krishna Kolekar", company: "SkaleIT Technologies LLP, Pune", ctc: "5 LPA" },
                                { name: "Nikhil Kulkarni", company: "Manasvi Tech Solutions Pvt. Ltd., Nashik", ctc: "3.2 LPA" },
                                { name: "Nitish Sonone", company: "ApexaiQ", ctc: "4.5 LPA" },
                                { name: "Prajwal Ghusalikar", company: "One Smarter Inc., Ohio USA", ctc: "4.8 LPA" },
                                { name: "Pratik Kuntawar", company: "Consultadd Services Pvt. Ltd., Pune", ctc: "12 LPA" },
                                { name: "Pratham Akkewar", company: "Arohi Software Solution Pvt. Ltd., Ahmednagar", ctc: "6 LPA" },
                                { name: "Rohit Tap", company: "Manasvi Tech Solutions Pvt. Ltd., Nashik", ctc: "3.2 LPA" },
                                { name: "Samarth Zamre", company: "Softbyte India Pvt. Ltd., Pune", ctc: "1.5 LPA" },
                                { name: "Anikesh Gadekar", company: "Ayekart Pvt. Ltd., Mumbai", ctc: "3.9 LPA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2023-24' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Abhijeet Eknath Tathod", company: "miniOrange Security Software Pvt. Ltd., Pune", ctc: "4.8 LPA" },
                                { name: "Kunal Atmaram Chandore", company: "ApexaiQ Technoogies Pvt. Ltd. USA", ctc: "4.8 LPA" },
                                { name: "Surabhi Ghanshyamji Lahoti", company: "ApexaiQ Technoogies Pvt. Ltd. USA", ctc: "5.5 LPA" },
                                { name: "Surbhi Sohanlal Goria", company: "ApexaiQ Technoogies Pvt. Ltd. USA", ctc: "5.5 LPA" },
                                { name: "Riya Govind Dangra", company: "ApexaiQ Technoogies Pvt. Ltd. USA", ctc: "5.5 LPA" },
                                { name: "Yash Kumar Sugandhi", company: "Bizsense Solutions Pvt. Ltd., Nagpur", ctc: "5.52 LPA" },
                                { name: "Abhishek Sanjay Gawali", company: "Bristlecone India Limited, Mumbai", ctc: "4.25 LPA" },
                                { name: "Gauri Vinod Zamare", company: "Bristlecone India Limited, Mumbai", ctc: "4.25 LPA" },
                                { name: "Gauri JaisingPatil", company: "Cencora Business Services (IT), Pune", ctc: "5.61 LPA" },
                                { name: "Pallavi Gajanan Awasare", company: "Cencora Business Services (IT), Pune", ctc: "5.61 LPA" },
                                { name: "Pravadnya Dnyaneshwar More", company: "Cencora Business Services (IT), Pune", ctc: "5.61 LPA" },
                                { name: "Sneha Sunil Khatke", company: "Cencora Business Services (IT), Pune", ctc: "5.61 LPA" },
                                { name: "Abhijeet Rambhau Gadlinge", company: "Circular Angle Pvt. Ltd., Thane", ctc: "4 LPA" },
                                { name: "Shreya Nitin Patil", company: "Circular Angle Pvt. Ltd., Thane", ctc: "4.00 LPA" },
                                { name: "Ashutosh Sanjay Gupta", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.5 LPA" },
                                { name: "Gajanan Mahadev Borade", company: "Institute of Plasma Research Bhat, Gandhinagar", ctc: "3.75 LPA" },
                                { name: "Prithvirajsingh Devendrasingh Thakur", company: "Genpact India Pvt. Ltd., Pune", ctc: "2.85 LPA" },
                                { name: "Sayli Gopal Agrawal", company: "Hexaware Technologies, Pune", ctc: "4 LPA" },
                                { name: "Vallabh Rupesh Ghongde", company: "Hexaware Technologies, Pune", ctc: "4 LPA" },
                                { name: "Laxmi Sunil Hargunani", company: "Capgemini Technology Services India Limited, Navi Mumbai", ctc: "4.5 LPA" },
                                { name: "Mitalee Ajay Uplenchwar", company: "IBM CIC, Bangalore", ctc: "4.5 LPA" },
                                { name: "Pratibha Nandlal Yadav", company: "IBM CIC, Bangalore", ctc: "4.5 LPA" },
                                { name: "Mayur Rajesh Shastrakar", company: "Inferwse, Pune", ctc: "4.12 LPA" },
                                { name: "Harshal Wadode", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Prajwal Sunil Chitode", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Pratik Ganesh Ekhande", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Rudransh Santosh Nemade", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Tanay Rajesh Hisariya", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Ubai Feroz Badri", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Vaishnavi Subhash Ghanokar", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Vedant Gajanan Chaudhari", company: "IRIS Business Services Ltd., Mumbai", ctc: "4.5 LPA" },
                                { name: "Arpita Anil Chimanpure", company: "Micropro Software Solutions Limited, Nagpur", ctc: "3 LPA" },
                                { name: "Revati Madhukar Khandare", company: "Micropro Software Solutions Limited, Nagpur", ctc: "3 LPA" },
                                { name: "Sakshi Punam Koche", company: "Micropro Software Solutions Limited, Nagpur", ctc: "3 LPA" },
                                { name: "Sanika Sudhir Sapkale", company: "Micropro Software Solutions Limited, Nagpur", ctc: "3 LPA" },
                                { name: "Shreya Umesh Ingale", company: "Micropro Software Solutions Limited, Nagpur", ctc: "3 LPA" },
                                { name: "Rushikesh Kailash Dhawane", company: "Mindzcloud Technology Pvt. Ltd, Nagpur", ctc: "6 LPA" },
                                { name: "Chanchal Bhaskar Junare", company: "Persistent Systems Limited, Nagpur", ctc: "5.01 LPA" },
                                { name: "Dnyaneshwari Chatarkar", company: "ncs Pvt. Ltd., Pune", ctc: "5.01 LPA" },
                                { name: "Atharva Tattu", company: "TCS Limited, Pune / Nagpur", ctc: "3.36 LPA" },
                                { name: "Atharv Santosh Tipkari", company: "TrueScholar, Amravati - Asset Chain Techlligence Private Limited", ctc: "4.2 LPA" },
                                { name: "Anjali Rajesh Garde", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Atray Rajesh Sawane", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Chitvan Ravindra Naik", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Mohammad Abuzar Mohammad Zakir Husain", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Nikhil Prakash Babhulkar", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Sakshi Nandu Bhombe", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Vaishnavi Ramkrushna Zadokar", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.00 LPA" },
                                { name: "Sanketika Mishra", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.5 LPA" },
                                { name: "Pallavi Sontakke", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.5 LPA" },
                                { name: "Vaishnavi Jaiswal", company: "Capgemini Technology Services India Limited, Navi Mumbai", ctc: "4.00 LPA" },
                                { name: "Chandrakant Gawali", company: "YRC Software India LLP, Pune", ctc: "3.00 LPA" },
                                { name: "Shubham Gorde", company: "Innodata India Pvt. Ltd., New Delhi", ctc: "4.00 LPA" },
                                { name: "Nikita Labde", company: "NCSI Technologies Pvt. Ltd., Pune", ctc: "5.6 LPA" },
                                { name: "Vaibhav Bavaskar", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "4.5 LPA" },
                                { name: "Harshal Kolhe", company: "63MOONS Technologies Ltd., Mumbai", ctc: "5.00 LPA" },
                                { name: "Kuldeep Lunge", company: "Elab Informatics Consulting Pvt. Ltd., Pune", ctc: "3.00 LPA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2022-23' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Mayuri Patil", company: "ApexiaQ Technologies Pvt. Ltd., Delhi", ctc: "3.60 LPA" },
                                { name: "Saurabh Kedar", company: "Bizsense Solution Pvt. Ltd., Nagpur", ctc: "6 LPA" },
                                { name: "ASHISH Mehare", company: "DigitalLeaf Solutions, Hyderabad", ctc: "7.8 LPA" },
                                { name: "Sanket Deshmukh", company: "DigitalLeaf Solutions, Hyderabad", ctc: "7.8 LPA" },
                                { name: "Adish Raipure", company: "Expleo Solution Pvt. Ltd., Pune", ctc: "5.00 LPA" },
                                { name: "Lokesh Chandak", company: "Expleo Solution Pvt. Ltd., Pune", ctc: "5.00 LPA" },
                                { name: "Mayuri Heda", company: "FECUND Software Services Pvt. Ltd., Pune", ctc: "3.5 LPA" },
                                { name: "Shankar Shinde", company: "HCL Tech, Noida", ctc: "6.00 LPA" },
                                { name: "Harshita Ughade", company: "Hexaware Technologies, Pune", ctc: "4.00 LPA" },
                                { name: "Tejaswini Rakhonde", company: "Hexaware Technologies, Pune", ctc: "4.00 LPA" },
                                { name: "Divya Agrawal", company: "IBM India Pvt. Ltd., Bangalore", ctc: "4.50 LPA" },
                                { name: "Hrishikesh Tholbare", company: "LotFair Solutions Private Limited, Lucknow", ctc: "2.75 LPA" },
                                { name: "Sudhanshu Deshmukh", company: "Mastek Enterprise Solutions Pvt. Ltd., Ahmedabad", ctc: "4.20 LPA" },
                                { name: "Anshul Ghumadwar", company: "Micropro Software Solutions Pvt. Ltd., Nagpur", ctc: "3.00 LPA" },
                                { name: "Himanshu Jamwal", company: "Micropro Software Solutions Pvt. Ltd., Nagpur", ctc: "3.00 LPA" },
                                { name: "Swati Khatri", company: "Micropro Software Solutions Pvt. Ltd., Nagpur", ctc: "3.00 LPA" },
                                { name: "Tanishq Nanda", company: "Optical Arc Pvt. Ltd., Pune", ctc: "3.00 LPA" },
                                { name: "Gaurav Pundkar", company: "Rialtes Technologies & Solutions LLP, Pune", ctc: "3.00 LPA" },
                                { name: "Kanchan Raut", company: "Rialtes Technologies & Solutions LLP, Pune", ctc: "3.00 LPA" },
                                { name: "Suryakant Ingle", company: "Rialtes Technologies & Solutions LLP, Pune", ctc: "3.00 LPA" },
                                { name: "Ajinkya Mahesh Pimple", company: "Salesforce, Hyderabad", ctc: "7.25 LPA" },
                                { name: "Palak Agrawal", company: "Sankey Solutions, Pune", ctc: "4.00 LPA" },
                                { name: "Yash Dalal", company: "Sankey Solutions, Pune", ctc: "4.00 LPA" },
                                { name: "Atharva Kolhe", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Bhavesh Mittal", company: "Tata Consultancy Services Ltd., Pune", ctc: "7.00 LPA" },
                                { name: "Gagan Wanjari", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Mohd Meeran Iqbal Mohd Zafar Iqbal", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Nikhil Jadhav", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Pramey Deshmukh", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Rutika Dharangaonkar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Sakshi Deshmukh", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Sarvesh Sonar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Schachi Chaware", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shubhangi Thoke", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Siddhi Taori", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Tanay Shah", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Tejas Masurkar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Thavar Setiya", company: "Tata Consultancy Services Ltd., Pune", ctc: "7 LPA" },
                                { name: "Trunay Wanjari", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Vinita Tiwari", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Apeksha Mundhada", company: "TATA Technology Ltd., Pune", ctc: "4.71 LPA" },
                                { name: "Ritesh Manusmare", company: "TATA Technology Ltd., Pune", ctc: "4.71 LPA" },
                                { name: "Shruti Lambe", company: "TATA Technology Ltd., Pune", ctc: "4.71 LPA" },
                                { name: "Radhika Maloo", company: "Tech Mahindra Limited, Hyderabad", ctc: "3.25 LPA" },
                                { name: "Sanjana Dhopte", company: "Tech Mahindra Limited, Hyderabad", ctc: "3.25 LPA" },
                                { name: "Smitesh Sonar", company: "Tech Mahindra Limited, Hyderabad", ctc: "3.25 LPA" },
                                { name: "Anand Agrawal", company: "TekLink International, Hyderabad", ctc: "6.00 LPA" },
                                { name: "Mohammed Areeb Ozair Feeroz Khan", company: "TekLink International, Hyderabad", ctc: "6.00 LPA" },
                                { name: "Vishal Rathod", company: "Advanced Business & Healthcare Solutions India Pvt. Ltd., Bangalore", ctc: "6.00 LPA" },
                                { name: "Siddhi Mehta", company: "HCL Tech, Noida", ctc: "4.25 LPA" },
                                { name: "Pakhi Mujmer", company: "MN World Enterprise Pvt Ltd", ctc: "3.14 LPA" },
                                { name: "Gopal Shelke", company: "Quantum Integrators Pvt. Ltd. Nagpur", ctc: "3 LPA" },
                                { name: "Saurav Wankhade", company: "Empyra Software Sol Pvt. Ltd Banglore", ctc: "3.5 LPA" },
                                { name: "Shreyash Chatarkar", company: "Decentralized Masters", ctc: "12 LPA" },
                                { name: "Suved Bhagwat", company: "Byju?s", ctc: "4.5 LPA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2021-22' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Shivani Joshi", company: "Atos|Syntel Pvt Ltd, Pune", ctc: "3.4 LPA" },
                                { name: "Mansi Paturkar", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Nisha Kakade", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Pooja Deshmukh", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Prajwal Gawal", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Sakshi Dhanuka", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Vijaya Narkhede", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Aditya Sambare", company: "Coditas Solutions LLP, Pune", ctc: "6 LPA" },
                                { name: "Sudhanshu Sathawane", company: "Global Logic India Pvt Ltd, Nagpur", ctc: "5.5 LPA" },
                                { name: "Abhishek Moharir", company: "Hexaware Technologies, Pune", ctc: "3.5 LPA" },
                                { name: "Aishwarya Bute", company: "Hexaware Technologies, Pune", ctc: "3.5 LPA" },
                                { name: "Sakshi Thombare", company: "Hexaware Technologies, Pune", ctc: "3.5 LPA" },
                                { name: "Rahul Samudrawad", company: "InfoCepts Technology, Nagpur", ctc: "3.62 LPA" },
                                { name: "Sahil Nagrale", company: "Infosys Ltd,Bangalore", ctc: "3.6 LPA" },
                                { name: "Radhika Deshmukh", company: "Jade global associated Pvt Ltd,Pune", ctc: "3.85 LPA" },
                                { name: "Mitesh Sakalkar", company: "Mindtree, Bangalore", ctc: "4 LPA" },
                                { name: "Tanmay Thag", company: "Mindtree, Bangalore", ctc: "4 LPA" },
                                { name: "Bharatkumar Kedia", company: "Northern Arc Capital Mumbai", ctc: "10 LPA" },
                                { name: "Shruti Dhave", company: "NTT Data Global Delivery Services Pvt Ltd, Bangalore", ctc: "5 LPA" },
                                { name: "Sonal Golhar", company: "OCS Group India Pvt Ltd Bangalore", ctc: "3 LPA" },
                                { name: "Hriday Raj", company: "Persistent SystemsPvt Ltd Nagpur", ctc: "4.71 LPA" },
                                { name: "Sakshi Hiwrale", company: "Persistent SystemsPvt Ltd Nagpur", ctc: "4.71 LPA" },
                                { name: "Viplav Khode", company: "Persistent SystemsPvt Ltd Nagpur", ctc: "4.71 LPA" },
                                { name: "Akshaykumar Bhople", company: "Tata Consultancy Services Limited, Pune", ctc: "7 LPA" },
                                { name: "Anurag Tiwari", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Chetakshi Hajare", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Deepali Masne", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Disha Gupta", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Gargi Tela", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Kiran Lande", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Prasad Jawadekar", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Pratiksha Dake", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Rasika Wadhonkar", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Sejal Hasani", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Shital Patil", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Shreyas Patil", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Tanuja Paraskar", company: "Tata Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Radha Kabra", company: "TekLink Software Pvt. Ltd., Hyderabad", ctc: "6 LPA" },
                                { name: "Aman Sahu", company: "TietoEVRY India, Pune", ctc: "4.5 LPA" },
                                { name: "Aniket Sangle", company: "Tristha Global Pvt. Ltd., Mumbai", ctc: "3.40 LPA" },
                                { name: "Gauri Mahalle", company: "Tudip Technologies Pvt. Ltd., Pune", ctc: "5 LPA" },
                                { name: "Sampada Vyas", company: "Tudip Technologies Pvt. Ltd., Pune", ctc: "5 LPA" },
                                { name: "Prasad Ugale", company: "Virtusa Consulting Services Pvt. Ltd., Pune", ctc: "6.50 LPA" },
                                { name: "Chetan Marode", company: "Wipro Limited, Pune", ctc: "3.50 LPA" },
                                { name: "Vishal Karhad", company: "Wipro Limited, Pune", ctc: "3.50 LPA" },
                                { name: "Chinmay Deshkar", company: "Zensar Technologies, Pune", ctc: "4 LPA" },
                                { name: "Gunjan Bhagat", company: "Zensar Technologies, Pune", ctc: "4 LPA" },
                                { name: "Kimaya Gabhane", company: "Zensar Technologies, Pune", ctc: "4 LPA" },
                                { name: "Homeshwari Jadhao", company: "Wipro Limited, Pune", ctc: "3.50 LPA" },
                                { name: "Khushbu Bhattad", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Sakshi Thakre", company: "Bitwise Sol. Pvt. Ltd. Pune", ctc: "2.4 LPA" },
                                { name: "Aashish Makwana", company: "Wipro Limited, Pune", ctc: "3.5 LPA" },
                                { name: "Anishraj Singh", company: "Shiv Kailas Construction, Ahmedbad", ctc: "4.17 LPA" },
                                { name: "Mujahidahmed Sayyed", company: "Coditas Solutions LLP, Pune", ctc: "9 LPA" },
                                { name: "Navaneet Awajare", company: "SMS India Pvt. Ltd. Gurugaon", ctc: "6.75 LPA" },
                                { name: "Sachin Singh", company: "Axis Bank Mumbai", ctc: "7.45 LPA" },
                                { name: "Sanskar Mudholkar", company: "Capgemini Technology Services India Ltd, Mumbai", ctc: "4 LPA" },
                                { name: "Shrikant Jugnake", company: "HCL Tech.", ctc: "4.25 LPA" },
                                { name: "Suyog Vyas", company: "Global Logic India Pvt Ltd, Nagpur", ctc: "5.54 LPA" },
                                { name: "Tejas Wagh", company: "Delloitte", ctc: "7.8 LPA" },
                                { name: "Vaibhav Choudhari", company: "Bitwise Sol. Pvt. Ltd. Pune", ctc: "4 LPA" },
                                { name: "Umang Mantri", company: "NMIMS Global Access Mumbai", ctc: "MBA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2020-21' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Aditi Mujmer", company: "Accenture Limited", ctc: "4.5 LPA" },
                                { name: "Kasturi Anjankar", company: "Accenture Limited", ctc: "4.5 LPA" },
                                { name: "Shantanu Kaluse", company: "Accenture Limited", ctc: "4.5 LPA" },
                                { name: "Gayatri Purohit", company: "Atos Syntel Pvt. Ltd., Pune", ctc: "3.40 LPA" },
                                { name: "Radhika Sharma", company: "Atos Syntel Pvt. Ltd., Pune", ctc: "3.40 LPA" },
                                { name: "Aryan Raj", company: "Bizsense Solutions Pvt Ltd., Nagpur", ctc: "4.57 LPA" },
                                { name: "Rohit Dhatrak", company: "BYJU's, Mumbai", ctc: "7 LPA" },
                                { name: "Manisha Hirdekar", company: "Capgemini Technology Services India Limited, Navi Mumbai", ctc: "3 LPA" },
                                { name: "Neha Dehankar", company: "Cognizant Technology Solutions India Private Limited, Chennai", ctc: "4.01 LPA" },
                                { name: "Neha Vyas", company: "Cognizant Technology Solutions India Private Limited, Chennai", ctc: "4.01 LPA" },
                                { name: "Shreyash Dawake", company: "Cognizant Technology Solutions India Private Limited, Chennai", ctc: "4.01 LPA" },
                                { name: "Komal Shukla", company: "Decos Software Development Pvt. Ltd., Pune", ctc: "3.70 LPA" },
                                { name: "Aniket Wankhade", company: "Infosys Limited, Bangalore", ctc: "3 LPA" },
                                { name: "Mrunal Dhabade", company: "Infosys Limited, Bangalore", ctc: "3 LPA" },
                                { name: "Rushikesh Patil", company: "Jade Global Software Pvt. Ltd., Pune", ctc: "3.72 LPA" },
                                { name: "Shashikant Borkar", company: "Jade Global Software Pvt. Ltd., Pune", ctc: "3.72 LPA" },
                                { name: "Namrata Sutane", company: "Jio Platforms Limited, Ahmedabad", ctc: "3.5 LPA" },
                                { name: "Parul Dongre", company: "Kratin SoftwareSolutions Pvt. Ltd., Pune", ctc: "5 LPA" },
                                { name: "Prasanna Rathi", company: "MindTree, Bangalore", ctc: "4 LPA" },
                                { name: "Rakshada Wankhade", company: "MindTree, Bangalore", ctc: "4 LPA" },
                                { name: "Janvi Sarode", company: "One Smarter Inc, USA", ctc: "3.6 LPA" },
                                { name: "Aditi Motekar", company: "Persistent Systems Limited, Pune", ctc: "4.51 LPA" },
                                { name: "Asra Gazi", company: "Persistent Systems Limited, Pune", ctc: "4.51 LPA" },
                                { name: "Kanishka Manakar", company: "Persistent Systems Limited, Pune", ctc: "4.51 LPA" },
                                { name: "Rachita Patey", company: "Persistent Systems Limited, Pune", ctc: "4.51 LPA" },
                                { name: "Saurav suman", company: "Persistent Systems Limited, Pune", ctc: "4.51 LPA" },
                                { name: "Krishna Salampuriya", company: "PubMatic India Pvt. Ltd., Pune", ctc: "5.4 LPA" },
                                { name: "Archana Mawale", company: "TATA Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Kaushiki Kothari", company: "TATA Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Mayur Gujar", company: "TATA Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Mayuri Kharche", company: "TATA Consultancy Services Limited, Pune", ctc: "3.36 LPA" },
                                { name: "Bhavana Agrawal", company: "TekLink International Inc., Hyderabad", ctc: "4.25 LPA" },
                                { name: "Shruti Wadhai", company: "TekLink International Inc., Hyderabad", ctc: "4.25 LPA" },
                                { name: "Payal Binnod", company: "Wipro Limited, Pune", ctc: "3.25 LPA" },
                                { name: "Poonam Shegokar", company: "Wipro Limited, Pune", ctc: "3.25 LPA" },
                                { name: "Sumol Agrawal", company: "Wipro Limited, Pune", ctc: "3.25 LPA" },
                                { name: "Anchal Dhok", company: "Lido Quality Tutorials Pvt Ltd", ctc: "4.00 LPA" },
                                { name: "Anushree Lajurkar", company: "Amdocs Devlopment Center India Llp.", ctc: "4 LPA" },
                                { name: "Sakshi Gade", company: "Tsystems", ctc: "4 LPA" },
                                { name: "Sonal Doiphode", company: "Infosys Limited, Bangalore", ctc: "3 LPA" },
                                { name: "Vaishnavi Turkhade", company: "Cognizant Technology Solutions India Private Limited, Chennai", ctc: "4 LPA" },
                                { name: "Aashwin Shegokar", company: "Accenture Limited", ctc: "3.3 LPA" },
                                { name: "Mayank Deshmukh", company: "Infosys Limited, Bangalore", ctc: "3 LPA" },
                                { name: "Pawan Lode", company: "Actyv.ai Digital Labs Pvt. Ltd. Banglore", ctc: "9 LPA" },
                                { name: "Shreyash Mahankar", company: "Cognizant Technology Solutions India Private Limited, Chennai", ctc: "4.01 LPA" },
                                { name: "Shubham Dange", company: "NEXG Healthcare Solutions Nagpur", ctc: "1.2 LPA" },
                                { name: "Saumya Agrawal", company: "Ophiura Software & Consultancy Services Hingoli", ctc: "Entrpreneur" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2019-20' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Bhushan Kadu", company: "Bizsense Solutions Pvt. Ltd., Nagpur", ctc: "4.30 LPA" },
                                { name: "Sahil Mune", company: "Bizsense Solutions Pvt. Ltd., Nagpur", ctc: "4.30 LPA" },
                                { name: "Vikram Mohite", company: "Capgemini Technology Services India Limited", ctc: "3.00 LPA" },
                                { name: "Priya Wankhade", company: "Capgemini Technology Services India Limited", ctc: "3.00 LPA" },
                                { name: "Akshay chandankhede", company: "Cognizant Technology Solutions India Pvt. Ltd.,Pune", ctc: "4.00 LPA" },
                                { name: "Balabhau Mali", company: "Cognizant Technology Solutions India Pvt. Ltd.,Pune", ctc: "4.00 LPA" },
                                { name: "Krishna Rathi", company: "Cognizant Technology Solutions India Pvt. Ltd.,Pune", ctc: "4.00 LPA" },
                                { name: "Priyanka Sontakke", company: "Cognizant Technology Solutions India Pvt. Ltd.,Pune", ctc: "4.00 LPA" },
                                { name: "Shubham Nimbalkar", company: "Cognizant Technology Solutions India Pvt. Ltd.,Pune", ctc: "4.00 LPA" },
                                { name: "Ajinkya Bawaskar", company: "Global Logic India Limited, Nagpur", ctc: "4.82 LPA" },
                                { name: "Rashmi Joshi", company: "Global Logic India Limited, Nagpur", ctc: "4.82 LPA" },
                                { name: "Bhavika Patil", company: "Infovision Lab, Pune", ctc: "4.00 LPA" },
                                { name: "Priyanka Mundhada", company: "Infovision Lab, Pune", ctc: "3.75 LPA" },
                                { name: "Rutuja Wasu", company: "Infovision Lab, Pune", ctc: "4.00 LPA" },
                                { name: "Shrutika Nakaskar", company: "Infovision Lab, Pune", ctc: "3.95 LPA" },
                                { name: "Shubham Ravekar", company: "Novatech Software Pvt.Ltd., Nagpur", ctc: "4.12 LPA" },
                                { name: "Yash Paliwal", company: "Novatech Software Pvt.Ltd., Nagpur", ctc: "4.12 LPA" },
                                { name: "Karan Bilakhiya", company: "Persistent Systems Limited, Nagpur", ctc: "4.10 LPA" },
                                { name: "Tejashree Kukade", company: "Persistent Systems Limited, Nagpur", ctc: "4.10 LPA" },
                                { name: "Pranati Dey", company: "SingularityAIX", ctc: "1.80 LPA" },
                                { name: "Devanshu Thakare", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Leena Patil", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Megha Shrawgi", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Nikita Bhansali", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Prashanthi Ghantasala", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Rajat Ninawe", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Tejal Nandapure", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Harshal Kadu", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shruti Wadaskar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Sachin Nair", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shruti Umbarkar", company: "Tek Link International Inc, Hyderabad", ctc: "3.75 LPA" },
                                { name: "Jay Chaware", company: "TTEC India Customer Solutions Pvt. Ltd.Ahmedabad", ctc: "2.80 LPA" },
                                { name: "Vaishnavi Kale", company: "Unisys India Pvt. Ltd., Bengalru", ctc: "4.29 LPA" },
                                { name: "Aboli Chintawar", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Dipali Kharat", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Madhu Mandhane", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Neha Mahalle", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Pranav Chaudhari", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Preety Panjwani", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Pritesh Dammani", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Raksha Gangan", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Sandeep Kumar", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Shraddha Karale", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Suyog Deshmukh", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Aman Gupta", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.60 LPA" },
                                { name: "Hitesh Vaidya", company: "Wipro Limited, Bangalore", ctc: "3.50 LPA" },
                                { name: "Pragati Gawande", company: "Wipro Limited, Bangalore", ctc: "3.50 LPA" },
                                { name: "Sanchit Datir", company: "Wipro Limited, Bangalore", ctc: "3.50 LPA" },
                                { name: "Shivam Sharma", company: "Wipro Limited, Bangalore", ctc: "3.50 LPA" },
                                { name: "Amey Band", company: "Zensar Technologies, Pune", ctc: "3.20 LPA" },
                                { name: "Anuradha Mahalle", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Anushree Gattani", company: "Happy Faces School Washim", ctc: "1.2 LPA" },
                                { name: "Manali Gujarathi", company: "Casepoint Pvt. Ltd Surat", ctc: "3.20 LPA" },
                                { name: "Mayur Rathod", company: "Yardi Software India Private Limited, Pune", ctc: "3.20 LPA" },
                                { name: "Shrikant Thakre", company: "IBM India Private Limited", ctc: "4.25 LPA" },
                                { name: "Sourabh Namdeo", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Sumit Asutkar", company: "ACCENTURE LTD", ctc: "4.5 LPA" },
                                { name: "Uzair Amin", company: "Infosys Limited Banglore", ctc: "5 LPA" },
                                { name: "Yogita Katare", company: "Tristha Global Pvt. Ltd. Mumbai", ctc: "3.4 LPA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === '2018-19' ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-bold text-center w-16">Sr. No.</th>
                                <th className="px-6 py-4 font-bold">Name of Student</th>
                                <th className="px-6 py-4 font-bold">Company Name</th>
                                <th className="px-6 py-4 font-bold text-right">CTC</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { name: "Pranil Chimurkar", company: "Accenture Limited, Bangalore", ctc: "7.26 LPA" },
                                { name: "Apurva Mujgewar", company: "Atos-Syntel Pvt. Ltd., Pune", ctc: "3.10 LPA" },
                                { name: "Shamali Kawitkar", company: "Atos-Syntel Pvt. Ltd., Pune", ctc: "3.10 LPA" },
                                { name: "Atul Jamode", company: "Cognizant Solutions India Limited, Pune", ctc: "3.83 LPA" },
                                { name: "Narendra Chandak", company: "Cognizant Solutions India Limited, Pune", ctc: "3.83 LPA" },
                                { name: "Abhishek Tripathi", company: "Doshaheen Solutions Pvt. Ltd.,Pune", ctc: "7.00 LPA" },
                                { name: "Kismat Shere", company: "HCL Technologies Limited, Noida", ctc: "4.17 LPA" },
                                { name: "Akshada Tiwari", company: "Infosys Limited, Bangalore", ctc: "3.65 LPA" },
                                { name: "Pavan Raut", company: "Jade Global Software Pvt. Ltd., Pune", ctc: "3.00 LPA" },
                                { name: "Shubham Wankhade", company: "Locationguru Pvt. Ltd., Nagpur", ctc: "2.8 LPA" },
                                { name: "Tushar Singewar", company: "Locationguru Pvt. Ltd., Nagpur", ctc: "2.8 LPA" },
                                { name: "Rahul Rajabhoj", company: "Microlise Telematics Pvt. Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Rajat Sadiwala", company: "Sthapatya Consultants (I) Pvt Ltd,Pune", ctc: "1.80 LPA" },
                                { name: "Sakshi Hajare", company: "Sthapatya Consultants (I) Pvt Ltd,Pune", ctc: "1.80 LPA" },
                                { name: "Abhiram Pande", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Aditi Panpalia", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Anushree Paralikar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Arpita Gonnade", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Aruna Sambare", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Brajesh Kumar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Chanchal Dhanuka", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Dipali Deshmane", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Hrutuja Mankar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Madhura Patwardhan", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Mahesh Rathi", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Mukta Tayade", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Rupali Mohurle", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shivani Deshmukh", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shrikala Sant", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Sneha Raut", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Supriya Satao", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Swapnil Murkute", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Veena Rathi", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Vishal Zade", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Abhijit Chaudhari", company: "Tudip Technologies Pvt. Ltd., Pune", ctc: "3.00 LPA" },
                                { name: "Mujeeb Khan", company: "Unifide Synergy Folks Pvt. Ltd., Chennai", ctc: "8.00 LPA" },
                                { name: "Paras Mehta", company: "Value Momentum Software Services Pvt. Ltd., Hyderabad", ctc: "3.30 LPA" },
                                { name: "Trupti Kotak", company: "Vodafone Idea Services Pvt. Ltd.,Pune", ctc: "4.25 LPA" },
                                { name: "Rucha Rathi", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Payal Kale", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Ankita Batle", company: "Karvy DigiKonnect Ltd., Hyderabad", ctc: "1.56 LPA" },
                                { name: "Bharati Jaware", company: "Accenture Limited", ctc: "3.75 LPA" },
                                { name: "Gayatree Sharma", company: "Atos-Syntel Pvt. Ltd., Pune", ctc: "3.1 LPA" },
                                { name: "Pragati Sambare", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.84 LPA" },
                                { name: "Prerana Talole", company: "Atos-Syntel Pvt. Ltd., Pune", ctc: "3.1 LPA" },
                                { name: "Priyanka Thakare", company: "Mindtree Ltd. Bangalore", ctc: "2.97 LPA" },
                                { name: "Rasika Virdande", company: "Cognizant Technology Solutions India Pvt. Ltd.", ctc: "3.38 LPA" },
                                { name: "Atharva Gharote", company: "Locationguru Pvt. Ltd., Nagpur", ctc: "2.8 LPA" },
                                { name: "Lakhan Bhaiya", company: "Ness Digital Engineering, Hyderabad", ctc: "5 LPA" },
                                { name: "Pranil Deshmukh", company: "DNEG India Media Services Limited, Mumbai", ctc: "2.52 LPA" },
                                { name: "Rohit Pardhi", company: "IBM India Pvt. Ltd Banglore", ctc: "3.6 LPA" },
                                { name: "Rohit Tidke", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" },
                                { name: "Shivam Shrivastav", company: "Edureka Brain4ceeducation Solutions Pvt Ltd Banglore", ctc: "4.48 LPA" },
                                { name: "Sumit Muskawar", company: "Tata Consultancy Services Ltd., Pune", ctc: "3.36 LPA" }
                            ].map((student, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">{i+1}</td>
                                    <td className="px-6 py-4 font-bold text-gray-800">{student.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{student.company}</td>
                                    <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">{student.ctc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <FaUniversity className="text-4xl text-gray-300 mb-4" />
                    <p className="text-gray-500 font-medium">Detailed report for {placementYear} will be uploaded soon.</p>
                    {['2021-22', '2018-19'].includes(placementYear) && (
                        <a 
                            href={`/documents/${placementYear}-Placements_CSE.pdf`} 
                            target="_blank"
                            className="mt-4 px-6 py-2 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition flex items-center shadow-lg shadow-blue-200"
                        >
                            <FaDownload className="mr-2" /> Download Full PDF
                        </a>
                    )}
                </div>
              )}
           </motion.div>
        )}
        </AnimatePresence>
      </div>
    ),
    practices: (
      <div className="space-y-8">
         <div className="max-w-3xl">
             <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">Innovative Practice</h3>
         </div>

         {/* Innovative Practice Table */}
         <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full">
                  <thead style={{ backgroundColor: '#003366' }} className="text-white">
                     <tr>
                        <th className="px-6 py-4 text-center font-semibold whitespace-nowrap text-sm">S.N.</th>
                        <th className="px-6 py-4 text-center font-semibold text-sm">Name of The Faculty</th>
                        <th className="px-6 py-4 text-center font-semibold text-sm">Subject</th>
                        <th className="px-6 py-4 text-center font-semibold text-sm">Innovative Practice</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     {[
                        { sn: '01', faculty: 'Dr. J. M. Patil', subject: 'Database Management Systems', practice: 'Power Point Presentation' },
                        { sn: '02', faculty: 'Dr. N. M. Kandoi', subject: 'Block Chain Fundamentals', practice: 'Mini/Term/Short Projects (Design/Fabrication/Simulation/Software/Hardware Development)' },
                        { sn: '03', faculty: 'C. M. Mankar', subject: 'Theory of Computation', practice: 'Power Point Presentation' },
                        { sn: '04', faculty: 'V. S. Mahalle', subject: 'Object Oriented Programming Approach with Real-life Example', practice: 'Google AI Studio, Movavi Video Editor' },
                        { sn: '05', faculty: 'Dr. P. K. Bharne', subject: 'Operating System', practice: 'Content based question making' },
                        { sn: '06', faculty: 'K. P. Sable', subject: 'Data Communication & Networking', practice: 'Learning through Survey/Case studies' },
                        { sn: '07', faculty: 'S. B. Pagrut', subject: 'Digital Forensics', practice: 'New Experiment development and testing' },
                        { sn: '08', faculty: 'Dr. R. A. Zamare', subject: 'Big Data Analytics', practice: 'Learning through Industrial visit/field work and report writing' },
                        { sn: '09', faculty: 'P. R. Pohare', subject: 'AI', practice: 'Designing Quizzes' }
                     ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                           <td className="px-6 py-4 text-center font-medium text-gray-900">{item.sn}</td>
                           <td className="px-6 py-4 text-center whitespace-nowrap" style={{ color: '#003366' }}>
                              <span className="font-medium">{item.faculty}</span>
                           </td>
                           <td className="px-6 py-4 text-gray-700">{item.subject}</td>
                           <td className="px-6 py-4 text-gray-700">{item.practice}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    ),
    visits: (
      <div className="space-y-8">
         <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Industrial Visits</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Hands-on exposure to industry practices, technologies, and work culture through structured visits to leading organizations.</p>
         </div>

         {/* Table */}
         <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead className="bg-ssgmce-blue text-white">
                     <tr>
                        <th className="px-6 py-4 text-left font-bold whitespace-nowrap">S.N.</th>
                        <th className="px-6 py-4 text-left font-bold">Name of Industry Visited</th>
                        <th className="px-6 py-4 text-left font-bold">Class</th>
                        <th className="px-6 py-4 text-left font-bold whitespace-nowrap">Date</th>
                        <th className="px-6 py-4 text-left font-bold whitespace-nowrap">No of Students</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     {[
                        { sn: '01', industries: ['Value Momentum, Pune', 'Details Report'], class: '3rd Year IT and CSE', date: '20/03/2025', students: '62' },
                        { sn: '01', industries: ['V. R. Jamdar Siemens Center of Excellence Nagpur', 'Details Report'], class: 'Third Year', date: '23/01/2024', students: '58' },
                        { sn: '02', industries: ['e-Zest , Pune', 'Ramakrishna IT Consultancy , Pune'], class: 'Third Year', date: '04/10/2018 to 05/10/2018', students: '50' },
                        { sn: '03', industries: ['PandayG.Com, Hyderabad', 'Value momentum, Hyderabad'], class: 'Third Year', date: '06/09/2017 to 07/09/2017', students: '37' },
                        { sn: '04', industries: ['Value momentum, Hyderabad', 'Microsoft Corporation , Hyderabad'], class: 'Third Year', date: '23/01/2017 to 24/01/2017', students: '53' },
                        { sn: '05', industries: ['Jain Irrigation System Ltd ,Jalgaon'], class: 'First Year', date: '06/10/2017', students: '55' },
                        { sn: '06', industries: ['Microsoft Corporation , Hyderabad', 'Infosys, Hyderabad', 'Value momentum, Hyderabad', 'Robert Bosch, Hyderabad'], class: 'Third Year', date: '07/03/2016 to 09/03/2016', students: '32' },
                        { sn: '07', industries: ['MRSAC, Nagpur', 'Axiom TechGuru, Nagpur'], class: 'Second Year', date: '31/08/2017', students: '62' },
                        { sn: '08', industries: ['ADCC Infocad, Nagpur', 'Click2Cloud ,Nagpur', 'Kratin Software Nagpur'], class: 'Second Year', date: '03/02/2016', students: '43' },
                        { sn: '09', industries: ['Thermal Power Station MSPGCL, Bhusawal'], class: 'First Year', date: '14/10/2016', students: '54' }
                     ].map((visit, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                           <td className="px-6 py-4 font-medium text-gray-900">{visit.sn}</td>
                           <td className="px-6 py-4">
                              <div className="space-y-1">
                                 {visit.industries.map((ind, i) => (
                                    <div key={i} className={ind === 'Details Report' ? 'text-ssgmce-blue hover:underline cursor-pointer' : 'text-gray-700'}>
                                       {ind}
                                    </div>
                                 ))}
                              </div>
                           </td>
                           <td className="px-6 py-4 text-gray-700">{visit.class}</td>
                           <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{visit.date}</td>
                           <td className="px-6 py-4 text-gray-700 text-center font-medium">{visit.students}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    ),
    mous: (
      <div className="space-y-8">
        <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">MoUs</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Strategic partnerships with industry leaders to enhance learning outcomes and provide students with real-world exposure.</p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-sm">
                 <thead className="bg-ssgmce-blue text-white">
                    <tr>
                       <th className="px-6 py-4 text-left font-bold whitespace-nowrap">Sr. No.</th>
                       <th className="px-6 py-4 text-left font-bold">Name of the Organization</th>
                       <th className="px-6 py-4 text-left font-bold whitespace-nowrap">MOU Signing Date</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200">
                    {[
                       { no: '1.', org: 'Bharat Software Solutions, Pune', date: '05-Apr-2025' },
                       { no: '2.', org: 'TRUSCHOLAR ASSET CHAIN TECHNIILLIGENCE PVT LTD, AMRAVATI', date: '05-APR-2025' },
                       { no: '3.', org: 'PRAGMATYC GLOBEL PVT LTD, NAGPUR', date: '05-APR-2025' },
                       { no: '4.', org: 'MoU With Intel Unnati', date: '29-MAR-2025' },
                       { no: '5.', org: 'MoU With J-Navodaya Unnat Bharat', date: '05-MAR-2025' },
                       { no: '6.', org: 'Bharat Software Solutions, Pune', date: '21-Dec-2023' },
                       { no: '7.', org: 'MITU Skillogogies, Pune', date: '21-Dec-2023' },
                       { no: '8.', org: 'TrueScholar- Asset Chain Techniligence Private Ltd., Amravati', date: '01-June-2022' },
                       { no: '9.', org: 'Opine Group, Pune', date: '13-July-2019' },
                       { no: '10.', org: 'e-Zest Solutions Ltd. Pune', date: '06-January-2019' },
                       { no: '11.', org: 'IBM India Pvt. Ltd., Pune', date: '19-January-2019' },
                       { no: '12.', org: 'Pi R Square Digital Solutions Pvt. Ltd., Pune', date: '16-July-2018' }
                    ].map((mou, idx) => (
                       <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{mou.no}</td>
                          <td className="px-6 py-4 text-gray-700">{mou.org}</td>
                          <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{mou.date}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    ),
    patents: (
      <div className="space-y-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
           <button 
             onClick={() => setResearchTab('patents')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${researchTab === 'patents' ? 'bg-white text-ssgmce-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
           >
             Patents
           </button>
           <button 
             onClick={() => setResearchTab('publications')}
             className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${researchTab === 'publications' ? 'bg-white text-ssgmce-blue shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
           >
             Publications
           </button>
        </div>

        <AnimatePresence mode="wait">
          {researchTab === 'patents' ? (
             <motion.div key="patents" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                        <FaLightbulb className="text-yellow-500 mr-2" /> Patents Granted & Published
                    </h3>
                    <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                          {['2024-25', '2023-24'].map((year) => (
                              <button
                                  key={year}
                                  onClick={() => setResearchYear(year)}
                                  className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                                      researchYear === year
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
                                   <th className="px-6 py-4 font-black tracking-wider w-12 text-center">#</th>
                                   <th className="px-6 py-4 font-black tracking-wider w-1/3">Title of Invention</th>
                                   <th className="px-6 py-4 font-black tracking-wider text-right">Application No.</th>
                                   <th className="px-6 py-4 font-black tracking-wider text-right">Inventors</th>
                               </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                    {/* REPLACE WITH DATA FROM PDF attachments */}
                    {(researchYear === '2024-25' ? [
                        { 
                            title: "An advanced vehicle safety system for driver authentication, alcohol detection, and centralised access control.", 
                            status: "Published", 
                            id: "202421090465A", 
                            inventors: "Dr. Jaikumar M. Patil", 
                            date: "2024" 
                        },
                        { 
                            title: "A Real Time Medical Inventory and Healthcare management System", 
                            status: "Published", 
                            id: "202421091222A", 
                            inventors: "Dr. Jaikumar M. Patil, Prof. Shrijeet Pagrut", 
                            date: "2024" 
                        },
                        { 
                            title: "System and Methods of Plant Disease Detection and Content Based Image Retrieval", 
                            status: "Published", 
                            id: "202421039794A", 
                            inventors: "Prof. Vishwanath. S. Mahalle", 
                            date: "2024" 
                        },
                        { 
                            title: "A DATA ANALYTICS CONFIGURATION FOR AN UNMANNED AERIAL VEHICLE", 
                            status: "Published", 
                            id: "202421043408A", 
                            inventors: "Prof. Shrijeet Pagrut", 
                            date: "2024" 
                        },
                        {
                            title: "DESIGN AND DEVELOPMENT OF WEB PORTAL OF DRONE CLUB, SHRI SANT GAJANAN MAHARAJ COLLEGE OF ENGINEERING, SHEGAON",
                            status: "Published",
                            id: "COPYRIGHT",
                            inventors: "Prof. Shrijeet Pagrut",
                            date: "2024"
                        }
                    ] : [
                        {
                            title: "INTELLIGENT TRAFFIC MANAGEMENT SYSTEM FOR SMART CITIESUSING IOT AND MACHINE LEARNING TECHNOLOGIES",
                            status: "Published",
                            id: "202321060974",
                            inventors: "Dr. Jaikumar M. Patil",
                            date: "2023"
                        },
                        {
                            title: "CYBER SECURITY BASED RISK ASSESSMENT AND MANAGEMENTSYSTEM USING ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING FOR ENTERPRISE NETWORKS",
                            status: "Published",
                            id: "202321062076",
                            inventors: "Dr. Jaikumar M. Patil",
                            date: "2023"
                        },
                        {
                            title: "A SECURITY PATROL ALL TERRAIN ROBOT",
                            status: "Published",
                            id: "202311069353",
                            inventors: "Dr. Jaikumar M. Patil",
                            date: "2023"
                        },
                        {
                            title: "MRI TUMOUR IMAGE CLASSIFICATION SYSTEM BASED ON IDENTIFICATION OF POTENTIAL FEATURE",
                            status: "Published",
                            id: "202321032278 A",
                            inventors: "Prof. C. M. Mankar",
                            date: "2023"
                        },
                        {
                            title: "AN IOT BASED BABY MONITORING SYSTEM FOR SMART CRADLES",
                            status: "Published",
                            id: "202321036087",
                            inventors: "Dr. P. K. Bharne",
                            date: "2023"
                        },
                        {
                            title: "EFFECTIVE APPROACH FOR GENUINENESS OF VIEWS USING SENTIMENT ANALYSIS",
                            status: "Published",
                            id: "202321055338 A",
                            inventors: "Dr. Ms. P. V. Deshmukh",
                            date: "2023"
                        },
                        {
                            title: "SENTIMENT ANALYSIS OF MARATHI-ENGLISH CODE-MIXED DATA",
                            status: "Published",
                            id: "202321048240 A",
                            inventors: "Dr. Ms. P. V. Deshmukh",
                            date: "2023"
                        },
                        {
                            title: "INTELLIGENT ISLANDING DETECTION SYSTEM FOR DISTRIBUTEDGENERATION USING MACHINE LEARNING",
                            status: "Published",
                            id: "202421005603 A",
                            inventors: "Dr. Ms. P. V. Deshmukh",
                            date: "2024"
                        }
                    ]).map((pat, i) => (
                        <tr key={i} className="hover:bg-green-50/30 transition-colors group">
                           <td className="px-6 py-4 text-center font-mono text-xs text-gray-400 group-hover:text-green-600">{i+1}</td>
                           <td className="px-6 py-4 font-medium text-gray-800">
                                {pat.title}
                                <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status === 'Given' || pat.status === 'Granted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                    {pat.status === 'Given' ? 'Granted' : pat.status}
                                </span>
                           </td>
                           <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap text-right">{pat.id}</td>
                           <td className="px-6 py-4 text-gray-500 italic text-right">{pat.inventors}</td>
                        </tr>
                    ))}
                           </tbody>
                        </table>
                    </div>
                 </div>
             </motion.div>
          ) : (
             <motion.div key="publications" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                        <FaChartLine className="text-ssgmce-orange mr-2" /> Research Publications
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar mr-4">
                              {['2024-25', '2023-24'].map((year) => (
                                  <button
                                      key={year}
                                      onClick={() => setResearchYear(year)}
                                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                                          researchYear === year
                                              ? 'bg-ssgmce-blue text-white shadow-md'
                                              : 'bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200'
                                      }`}
                                  >
                                      {year}
                                  </button>
                              ))}
                        </div>
                        <div className="text-xs font-bold bg-blue-50 text-ssgmce-blue px-3 py-1 rounded-md border border-blue-100">SCI: 50+</div>
                        <div className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md border border-indigo-100">Scopus: 100+</div>
                    </div>
                 </div>

                 <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-600">
                           <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                               <tr>
                                   <th className="px-6 py-4 font-black tracking-wider w-12 text-center">#</th>
                                   <th className="px-6 py-4 font-black tracking-wider">Title of Paper</th>
                                   <th className="px-6 py-4 font-black tracking-wider">Authors</th>
                                   <th className="px-6 py-4 font-black tracking-wider">Journal/Conference</th>
                                   <th className="px-6 py-4 font-black tracking-wider text-right">Link</th>
                               </tr>
                           </thead>
                           <tbody className="divide-y divide-gray-100">
                               {/* REPLACE WITH DATA FROM PDF attachments */}
                               {(researchYear === '2024-25' ? [
                                   { 
                                        title: "Wecare: Blockchain-Based Solution For Moder Healthcare Challenges", 
                                        authors: "Dr. Narendra M. Kandoi", 
                                        journal: "International Journal", 
                                        link: "https://www.irjmets.com/uploadedfiles/paper//issue_2_february_2025/68319/final/fin_irjmets1740765296.pdf" 
                                   },
                                   { 
                                        title: "JOBNEXUS: AN AI-DRIVEN CAREER PLACEMENT PORTAL FOR OPTIMIZED CAMPUS RECRUITMENT", 
                                        authors: "Dr. Narendra M. Kandoi", 
                                        journal: "International Journal", 
                                        link: "https://drive.google.com/file/d/1X-example-link" 
                                   },
                                   { 
                                        title: "Deep Learning-Based Muli-Class Stroke Detection Using CNN", 
                                        authors: "Prof. Vishwanath. S. Mahalle", 
                                        journal: "International Journal", 
                                        link: "https://www.ijsat.org/papers/2025/2/3801.pdf" 
                                   },
                                   { 
                                        title: "DYNAMIC TIMETABLE GENERATOR USING GENETIC ALGORITHM", 
                                        authors: "Dr. Pankaj K. Bharne", 
                                        journal: "International Journal", 
                                        link: "https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2025/68635/final/fin_irjmets1741508622.pdf" 
                                   },
                                   { 
                                        title: "Development of NextGen Meeting Portal", 
                                        authors: "Dr. Rupali A. Zamare", 
                                        journal: "International Journal", 
                                        link: "https://irjaeh.com/index.php/journal/article/view/617" 
                                   },
                                   { 
                                        title: "Smart Cctv Surveillance System Using Python", 
                                        authors: "Dr. Rupali A. Zamare", 
                                        journal: "International Journal", 
                                        link: "https://www.irjmets.com/uploadedfiles/paper//issue_3_march_2025/70721/final/fin_irjmets1743599267.pdf" 
                                   },
                                   { 
                                        title: "Performance Analysis and Optimization of Player Selection Using Machine Learning Algorithms", 
                                        authors: "Prof. Pooja R. Pohare", 
                                        journal: "International Journal", 
                                        link: "https://ijetms.in/Vol-9-issue-2/Vol-9-Issue-2-41.pdf" 
                                   },
                                   { 
                                        title: "Book: Pioneering Trends in Generative AI", 
                                        authors: "Dr. Jaikumar M. Patil, Dr. Prachet Bhuyan, Dr. Sathiyaraj Chinnasamy, Dr. Neha Bharani", 
                                        journal: "REST Publisher (Book)", 
                                        link: "#" 
                                   }
                               ] : [
                                   { 
                                        title: "An optimized framework for implementation of smart waste collection and management system in smart cities using IoT based deep learning approach", 
                                        authors: "Dr. Jaikumar M. Patil", 
                                        journal: "International Journal", 
                                        link: "https://link.springer.com/article/10.1007/s41870-024-02083-7"
                                   },
                                   { 
                                        title: "Intelligent Crop Management Optimization Using Machine Learning Algorithms: A Linear Analytical Approach", 
                                        authors: "Dr. Jaikumar M. Patil", 
                                        journal: "International Journal", 
                                        link: "https://internationalpubls.com/index.php/anvi/article/view/1367"
                                   },
                                   { 
                                        title: "Implementation of Transfer Learning using VGG19 CNN model for Content Based Image Retrieval", 
                                        authors: "Prof. Vishwanath. S. Mahalle", 
                                        journal: "International Journal", 
                                        link: "https://xidian.dx.cn.iasrj.com/Doi.10.37896jxu18.7010.pdf" 
                                   },
                                   { 
                                        title: "PLANT DISEASE DETECTION AND DIAGNOSIS USING PRETRAINED CNN MODEL", 
                                        authors: "Prof. Vishwanath. S. Mahalle", 
                                        journal: "International Journal", 
                                        link: "https://www.irjmets.com/uploadedfiles/paper//issue_5_may_2024/55377/final/fin_irjmets1715079531.pdf" 
                                   },
                                   { 
                                        title: "Efficient Content Based Image Retrieval System Based on Early and Late Fusion Technique", 
                                        authors: "Prof. Vishwanath. S. Mahalle, Pranav Lod, N. M. Kandoi and S. B. Patil", 
                                        journal: "International Journal", 
                                        link: "https://xadzkjdx.cn/index.php/volume-18-issue-5-may-24/" 
                                   },
                                   { 
                                        title: "SKYRA: Integrated Air Travel Management and Navigation System", 
                                        authors: "Prof. Chandrashekhar M. Mankar", 
                                        journal: "International Journal", 
                                        link: "https://drive.google.com/file/d/1Dl2L68Ua-QNkK465twVua3SClsM_olZ6/view" 
                                   },
                                   { 
                                        title: "Ai-Driven Fitness Platform using Deep Convolutional Neural Network", 
                                        authors: "Prof. Chandrashekhar M. Mankar", 
                                        journal: "International Journal", 
                                        link: "https://drive.google.com/file/d/1uPSVmQ80ufb08m2dZqdy0LIvHKdYyOW/view" 
                                   },
                                   { 
                                        title: "Intelligent Automation for E-Commerce Smarter Packaging and Management of Smart Warehouses", 
                                        authors: "Prof. Chandrashekhar M. Mankar", 
                                        journal: "International Journal", 
                                        link: "https://drive.google.com/file/d/1_b41SGQlTsmADv4xz3CI7337MA3zNM42/view" 
                                   },
                                   { 
                                        title: "Design of an Iterative Model Incorporating mBERT, CSLM, and ADAN for Multilingual and Code-Switched Sentiment Analysis", 
                                        authors: "Prof. Kalyani P. Sable", 
                                        journal: "International Conference", 
                                        link: "https://ieeexplore.ieee.org/document/10939421" 
                                   },
                                   { 
                                        title: "Project Pulse: Project Showcase Platform", 
                                        authors: "Prof. Kalyani P. Sable", 
                                        journal: "International Journal", 
                                        link: "https://drive.google.com/file/d/1kukiz9bu7ORpGmcuqY0q3A9MGAIFRqpg/view" 
                                   },
                                   { 
                                        title: "Unmanned Aerial Vehicles and Low-Flying Drones: A Review of Classification", 
                                        authors: "Prof. Shrijeet. B. Pagrut", 
                                        journal: "International Conference", 
                                        link: "https://ieeexplore.ieee.org/xpl/conhome/10842675/proceeding" 
                                   },
                                   { 
                                        title: "Elderly Healthcare IoT through Data Analytics and Artificial Intelligence", 
                                        authors: "Dr. Rupali A. Zamare", 
                                        journal: "International Conference", 
                                        link: "https://ieeexplore.ieee.org/document/10911206" 
                                   }
                               ]).map((pub, i) => (
                                   <tr key={i} className="hover:bg-blue-50/30 transition-colors group">
                                       <td className="px-6 py-4 text-center font-mono text-xs text-gray-400 group-hover:text-ssgmce-orange">{i+1}</td>
                                       <td className="px-6 py-4 font-medium text-gray-800">
                                            {pub.link !== "#" && !pub.link.match(/^\d+/) ? (
                                                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-ssgmce-blue hover:underline">
                                                    {pub.title}
                                                </a>
                                            ) : (
                                                pub.title
                                            )}
                                       </td>
                                       <td className="px-6 py-4 text-gray-500 italic">{pub.authors}</td>
                                       <td className="px-6 py-4 text-ssgmce-blue font-medium text-xs">{pub.journal}</td>
                                       <td className="px-6 py-4 text-right font-mono text-gray-500 text-xs">
                                          {pub.link.match(/^\d+/) ? pub.link : (
                                            <a href={pub.link} target="_blank" className="text-ssgmce-blue hover:text-ssgmce-orange">View</a>
                                          )}
                                       </td>
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
    internships: (
      <div className="space-y-8">
         <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Internship Record</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive internship training providing students with hands-on industry experience and professional development.</p>
         </div>

         {/* Year Filter */}
         <div className="flex justify-center mb-6">
            <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm">
               <button
                  onClick={() => setInternshipYear('2024-25')}
                  className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                     internshipYear === '2024-25'
                        ? 'bg-white text-ssgmce-blue shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
               >
                  Session: 2024-25
               </button>
               <button
                  onClick={() => setInternshipYear('2023-24')}
                  className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                     internshipYear === '2023-24'
                        ? 'bg-white text-ssgmce-blue shadow-md'
                        : 'text-gray-600 hover:text-gray-800'
                  }`}
               >
                  Session: 2023-24
               </button>
            </div>
         </div>

         {/* Internship Table */}
         <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead className="bg-ssgmce-blue text-white">
                     <tr>
                        <th className="px-4 py-4 text-left font-bold whitespace-nowrap">Sr. No.</th>
                        <th className="px-4 py-4 text-left font-bold whitespace-nowrap">SIS ID</th>
                        <th className="px-4 py-4 text-left font-bold">Name of Intern</th>
                        <th className="px-4 py-4 text-left font-bold">Name of Industry / Organization</th>
                        <th className="px-4 py-4 text-left font-bold">Class</th>
                        <th className="px-4 py-4 text-left font-bold">Duration</th>
                        <th className="px-4 py-4 text-left font-bold">Stipend</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     {internshipYear === '2024-25' ? (
                        [
                           { no: 1, sis: '307091', name: 'Apurva Patil', org: 'Connecticus Technologies Pvt. Ltd., Pune', class: '4R', duration: '5 Months', stipend: 'Rs.15000' },
                           { no: 2, sis: '307394', name: 'Bhumika Pimpakshende', org: 'TAP academy, Bangalore', class: '4R', duration: '6 Months', stipend: 'No' },
                           { no: 3, sis: '307392', name: 'Chaitali Nakhate', org: 'Hyster Yale Material Handling', class: '4R', duration: '12 Months', stipend: 'Rs.8000' },
                           { no: 4, sis: '307220', name: 'Eisha Nikam', org: 'CoreQual Labs, Pune', class: '4R', duration: '3 Months', stipend: 'Rs.12000' },
                           { no: 5, sis: '307220', name: 'Eisha Nikam', org: 'Zoho Business Services LLP', class: '4R', duration: '3 Months', stipend: 'Rs.15000' },
                           { no: 6, sis: '306943', name: 'Omkar Chavan', org: 'Sabudh Foundation', class: '4R', duration: '6 Months', stipend: 'No' },
                           { no: 7, sis: '307486', name: 'Praniti Tondre', org: 'Tap Academy, Banglore', class: '4R', duration: '6 Months', stipend: 'No' },
                           { no: 8, sis: '307175', name: 'Punam Solanke', org: 'Delline India Technology', class: '4R', duration: '3 Months', stipend: 'Rs.5000' },
                           { no: 9, sis: '306993', name: 'Radhika Shahu', org: 'Quantumsoft Technologies Private Limited', class: '4R', duration: '2 Months', stipend: 'Rs.5000' },
                           { no: 10, sis: '307224', name: 'Sansruddhi Katole', org: 'Electric Loco Shed, Bhusawal', class: '4R', duration: '3 Months', stipend: 'No' },
                           { no: 11, sis: '307224', name: 'Sansruddhi Katole', org: 'TruScholar', class: '4R', duration: '9 Months', stipend: 'Rs.5000' },
                           { no: 12, sis: '307870', name: 'Sanika Dose', org: 'Electric Loco Shed, Bhusawal', class: '4R', duration: '3 Months', stipend: 'No' },
                           { no: 13, sis: '307007', name: 'Sayujata Hadole', org: 'ApexaIq Pvt. Ltd , SSGMCE, Shegaon', class: '4R', duration: '1 month', stipend: 'No' },
                           { no: 14, sis: '306994', name: 'Sejal Anul Patil', org: 'EngiEdge Pune', class: '4R', duration: '6 Months', stipend: 'Rs.10000' },
                           { no: 15, sis: '307405', name: 'Shruti Sonone', org: 'TruScholar - Asset Chain Techniilligence Pvt Ltd Amravati', class: '4R', duration: '6 Months', stipend: 'Rs.5000' },
                           { no: 16, sis: '307227', name: 'Tejal Raut', org: 'Yki Foundation', class: '4R', duration: '2 Months', stipend: 'No' },
                           { no: 17, sis: '307873', name: 'Vaishnavi Avadhut', org: 'TruScholar - Asset Chain Techniilligence Pvt Ltd Amravati', class: '4R', duration: '6 Months', stipend: 'Rs.5000' },
                           { no: 18, sis: '307873', name: 'Vaishnavi Avadhut', org: 'Electric Loco Shed, Bhusawal', class: '4R', duration: '3 Months', stipend: 'No' },
                           { no: 19, sis: '307873', name: 'Vaishnavi Avadhut', org: 'ApexaIq Pvt. Ltd , SSGMCE, Shegaon', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 20, sis: '307424', name: 'Vaishnavi Walikar', org: 'Quantumsoft Technologies Private Limited', class: '4R', duration: '2 Months', stipend: 'Rs.5000' },
                           { no: 21, sis: '307851', name: 'Abhishek Patil', org: 'Secure Parking Solutions Pvt. Ltd, Mumbai', class: '4R', duration: '2 Months', stipend: 'No' },
                           { no: 22, sis: '307189', name: 'Anikesh Gadekar', org: 'MYTRA', class: '4R', duration: '6 Months', stipend: 'Rs.15000' },
                           { no: 23, sis: '307332', name: 'Aniket Rajguru', org: 'TAP academy, Bangalore', class: '4R', duration: '3 Months', stipend: 'No' },
                           { no: 24, sis: '307235', name: 'Gaurav Dhale', org: 'OneSmarter inc, USA', class: '4R', duration: '6 Months', stipend: 'Rs.7500' },
                           { no: 25, sis: '307335', name: 'Gaurav Kaple', org: 'One Smarter Inc., USA', class: '4R', duration: '3 Months', stipend: 'Rs.3000' },
                           { no: 26, sis: '307400', name: 'Ghosh Uttarwar', org: 'Single Door Technosolutions Kolkata', class: '4R', duration: '4 Months', stipend: 'Rs.1000' },
                           { no: 27, sis: '307315', name: 'Ishan Gawande', org: 'ApexaIQ Technologies Pvt. Ltd.', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 28, sis: '307423', name: 'Kamlesh Kasambe', org: 'AICTE (Edunet Foundation) , Bengaluru', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 29, sis: '307074', name: 'Krishna Kashikar', org: 'Onesmarter INC', class: '4R', duration: '3 Months', stipend: 'No' },
                           { no: 30, sis: '307344', name: 'Krishna Kolekar', org: 'SkaleIT Technologies LLP, Pune', class: '4R', duration: '7 Months', stipend: 'Rs.10000' },
                           { no: 31, sis: '307391', name: 'Kunal Bhende', org: 'Earnest Buisness Solution', class: '4R', duration: '4 Months', stipend: 'No' },
                           { no: 32, sis: '308037', name: 'Nitish Sonone', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 33, sis: '308037', name: 'Nitish Sonone', org: 'Single Door Technosolutions PVT. LTD, Kolkata', class: '4R', duration: '4 Months', stipend: 'Rs.1500' },
                           { no: 34, sis: '307164', name: 'Parth Kinkar', org: 'Single Door Technosolutions PVT. LTD, Kolkata', class: '4R', duration: '4 Months', stipend: 'Rs.1500' },
                           { no: 35, sis: '307474', name: 'Pavan Lakkas', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 36, sis: '307173', name: 'Prajwal Chusalikar', org: 'One Smarter Inc. (USA)', class: '4R', duration: '1 Year', stipend: 'Rs.12000' },
                           { no: 37, sis: '307406', name: 'Pratham Akkewar', org: 'Mentorness', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 38, sis: '307163', name: 'Rohit Tap', org: 'Single Door Technosolutions Pvt. Ltd, Kolkata', class: '4R', duration: '4 Months', stipend: 'Rs.1500' },
                           { no: 39, sis: '307072', name: 'Saad Khan', org: 'Cognifyz Technologies', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 40, sis: '307485', name: 'Sahil Tawari', org: 'ApexaIQ', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 41, sis: '307485', name: 'Sahil Tawari', org: 'Cognifyz Technologies', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 42, sis: '307181', name: 'Samarth Zamre', org: 'AICTE (Edunet Foundation) , Bengaluru', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 43, sis: '307999', name: 'Virendra Pawar', org: 'Innobyte Services, New Delhi', class: '4R', duration: '1 Month', stipend: 'No' },
                           { no: 44, sis: '307557', name: 'Anagha Badhe', org: 'Tata Communications Limited, Diglii, Pune', class: '4R', duration: '6 Months', stipend: 'No' },
                           { no: 45, sis: '308557', name: 'Bhumika Thakare', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 46, sis: '308574', name: 'Gauri Chiddarwar', org: 'Tal-eGlobe', class: '3R', duration: '2 Months', stipend: 'No' },
                           { no: 47, sis: '307797', name: 'Gauri Patil', org: 'Take It Ideas Innovative Solutions Pvt Ltd, Nagpur', class: '3R', duration: '3 Months', stipend: 'No' },
                           { no: 48, sis: '307697', name: 'Gayatri Arbat', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 49, sis: '307961', name: 'Nandini Jambhulkar', org: 'Avohl Softwares, Ahemdabad', class: '3R', duration: '3 Months', stipend: 'Rs. 4000' },
                           { no: 50, sis: '307699', name: 'Renuka Raut', org: 'Zidio Development Banglore', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 51, sis: '307893', name: 'Rujuta Deshmukh', org: 'Zidio Development Banglore', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 52, sis: '307893', name: 'Rujuta Deshmukh', org: 'Infosys Springboard , Online', class: '3R', duration: '3 months', stipend: 'No' },
                           { no: 53, sis: '307814', name: 'Shruti Kulpyakwar', org: 'CodSoft', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 54, sis: '307938', name: 'Tanvi Chaudhari', org: 'Avohl Software,Ahmednagar', class: '3R', duration: '3 Months', stipend: 'Rs.4000' },
                           { no: 55, sis: '307767', name: 'Tulsi Totala', org: 'Sahaeli Foundation,Punjab', class: '3R', duration: '3 Months', stipend: 'No' },
                           { no: 56, sis: '307553', name: 'Vaishnavi Lahyar', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 57, sis: '307610', name: 'Vaishnavi Lahole', org: 'Edunet Foundation, Banglore, Karnataka', class: '3R', duration: '2 Months', stipend: 'No' },
                           { no: 58, sis: '307890', name: 'Aditya Siras', org: 'ISRO, Hyderabad', class: '3R', duration: '2 Months', stipend: 'No' },
                           { no: 59, sis: '308553', name: 'Gauri Chaudhari', org: 'Plasmid Innovation Ltd - Bangalore', class: '3R', duration: '2 Months', stipend: 'No' },
                           { no: 60, sis: '308553', name: 'Gaurav Chaudhari', org: 'CAMPDL Nagpur', class: '3R', duration: '12 Months', stipend: 'Rs. 8000' },
                           { no: 61, sis: '307919', name: 'Jay Jayant Joshi', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 62, sis: '307715', name: 'Om Kadu', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 63, sis: '307931', name: 'Piyush Agroya', org: 'Dropwave Online Services LLP', class: '3R', duration: '1 Month', stipend: 'Rs. 15000' },
                           { no: 64, sis: '307759', name: 'Prajwal Kathole', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 65, sis: '307790', name: 'Sachin Nerkar', org: 'ApexaIQ Pvt. Ltd , SSGMCE, Shegaon', class: '3R', duration: '1 Month', stipend: 'No' },
                           { no: 66, sis: '307692', name: 'Shantanu Dongare', org: 'Pure Essence Technologies', class: '3R', duration: '3 Months', stipend: 'Rs.2000' }
                        ].map((intern, idx) => (
                           <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-medium text-gray-900">{intern.no}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.sis}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.name}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.org}</td>
                              <td className="px-4 py-3 text-gray-700 text-center">{intern.class}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.duration}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.stipend}</td>
                           </tr>
                        ))
                     ) : (
                        [
                           { no: 1, sis: '307286', name: 'Vaishnavi Ghanokar', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: 2, sis: '306712', name: 'Rudransh Nemade', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: '', sis: '', name: '', org: 'Apexalq Technologies Pvt. Ltd., Delhi', class: '4R', duration: '2 Months', stipend: 'Rs. 7000' },
                           { no: 3, sis: '306413', name: 'Tanay Hisariya', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: '', sis: '', name: '', org: 'TechnoSparsh Software Solutions Indore', class: '4R', duration: '3 Months', stipend: 'Rs. 3000' },
                           { no: 4, sis: '306441', name: 'Pratik Ekhande', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: '', sis: '', name: '', org: 'TechnoSparsh Software Solutions Indore', class: '4R', duration: '3 Months', stipend: 'Rs. 3000' },
                           { no: 5, sis: '306553', name: 'Harshal Wadode', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: 6, sis: '306642', name: 'Vedant Chaudhari', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: 7, sis: '306422', name: 'Ubai Badri', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: '', sis: '', name: '', org: 'Oyester Training', class: '4R', duration: '4 Months', stipend: 'Rs. 3500' },
                           { no: 8, sis: '307311', name: 'Prajwal Chilode', org: 'iRIS Business Services Pvt. Ltd., Mumbai', class: '4R', duration: '4 Months', stipend: 'Rs. 10000' },
                           { no: 9, sis: '306737', name: 'Surabhi Lahoti', org: 'Apexalq Technologies Pvt. Ltd., Delhi', class: '4R', duration: '3 Months', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '3 Months', stipend: 'Rs. 7000' },
                           { no: 10, sis: '306534', name: 'Riya Dangra', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '3 Months', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '3 Months', stipend: 'Rs. 7000' },
                           { no: 11, sis: '306821', name: 'Kunal Chandore', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '3 Months', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '3 Months', stipend: 'Rs. 7000' },
                           { no: 12, sis: '307873', name: 'Vaishnavi Avadhut', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 13, sis: '307007', name: 'Sayujata Hadole', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Microspectra Software Technologies Pvt. Ltd. Pune', class: '', duration: '4 Months', stipend: 'Nil' },
                           { no: 14, sis: '307071', name: 'Apeksha Mankhair', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 15, sis: '307071', name: 'Pratik Kuntawar', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 16, sis: '307091', name: 'Apurva Patil', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'IntervlE Traning Company Jaipur', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Pure Essence Technologies Khamgaon', class: '', duration: '6 Months', stipend: 'Rs. 10000' },
                           { no: 17, sis: '308037', name: 'Nitish Sonone', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 18, sis: '307332', name: 'Aniket Rajguru', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 19, sis: '307870', name: 'Sanika Dose', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Oasis Infobyte Delhi', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: 20, sis: '307224', name: 'Samsruddhi Katole', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Oasis Infobyte Delhi', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Anita Devi Memorial Rohtak', class: '', duration: '6 Months', stipend: 'Nil' },
                           { no: 21, sis: '307220', name: 'Eisha Nikam', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Oasis Infobyte Delhi', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: 22, sis: '306628', name: 'Sayli Agrawal', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '2 Months', stipend: 'Rs. 7000' },
                           { no: 23, sis: '306730', name: 'Abhishek Gawali', org: 'Apexalq Technologies Pvt. Ltd. Delhi', class: '4R', duration: '2 Months', stipend: 'Rs. 7000' },
                           { no: '', sis: '', name: '', org: 'AiSense LLP Shagaon', class: '', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: 24, sis: '307150', name: 'Mohz. Ahtazar Husain', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 25, sis: '308405', name: 'Chivan Naik', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: '', sis: '', name: '', org: 'Inferwise Automation Pune', class: '', duration: '4.5 Months', stipend: 'Rs. 5000' },
                           { no: 26, sis: '306744', name: 'Nikhil Babhulkar', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: '', sis: '', name: '', org: 'AiSense LLP Shagaon', class: '', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: '', sis: '', name: '', org: 'Numetry Technologies Pune', class: '', duration: '6 Months', stipend: 'Nil' },
                           { no: 27, sis: '306494', name: 'Atray Sawane', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 28, sis: '306542', name: 'Sakshi Bhombe', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 29, sis: '306838', name: 'Anjali Garde', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 30, sis: '306576', name: 'Vaishnavi Zadokar', org: 'ValueMomentum Software Services Pvt. Ltd. Hyderabad', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 31, sis: '306545', name: 'Abhijeet Tathod', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: 32, sis: '306460', name: 'Prajwal Ghatol', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 33, sis: '306540', name: 'Dnyanshwari Chatarkar', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 34, sis: '306532', name: 'Sneha Khatke', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 35, sis: '306726', name: 'Pallavi Sontakke', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 36, sis: '307254', name: 'Piyush Chavan', org: 'Persistent Systems Pvt. Ltd. Pune', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 37, sis: '306667', name: 'Abhijeet Gadlinge', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: '', sis: '', name: '', org: 'Circular Angle Pvt. Ltd. Mumbai', class: '', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 38, sis: '306782', name: 'Shubham Gorde', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: '', sis: '', name: '', org: 'Krurtin Si Designs Pvt. Ltd. Bangalore', class: '', duration: '3 Months', stipend: 'Rs. 17000' },
                           { no: '', sis: '', name: '', org: 'Ola Electric Bengaluru', class: '', duration: '3 Months', stipend: 'Rs. 15000' },
                           { no: 39, sis: '306689', name: 'Gauri Zamare', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: 40, sis: '306714', name: 'Mayur Shastrakar', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: '', sis: '', name: '', org: 'Inferwise Automation Pune', class: '', duration: '4 Months', stipend: 'Rs. 5000' },
                           { no: 41, sis: '306900', name: 'Chandrakant Cawali', org: 'AiSense LLP Shagaon', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: 42, sis: '307900', name: 'Sushant Pokmare', org: 'CodSoft', class: '2R', duration: '1 Month', stipend: 'Nil' },
                           { no: 43, sis: '307793', name: 'Krushna Kulthe', org: 'IntervPE Traning Company Jaipur', class: '2R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'CodSoft', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: 44, sis: '307072', name: 'Saad Khan', org: 'IntervPE Traning Company Jaipur', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 45, sis: '307485', name: 'Sahil Tiwari', org: 'IntervPE Traning Company Jaipur', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 46, sis: '307249', name: 'Sandeep Daberao', org: 'IntervPE Traning Company Jaipur', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 47, sis: '307999', name: 'Virendra Pawar', org: 'IntervPE Traning Company Jaipur', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 48, sis: '307260', name: 'Bhuvnesh Kale', org: 'IntervPE Traning Company Jaipur', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Ministry of Railways Govt. of India Bhusawal', class: '', duration: '4 Months', stipend: 'Nil' },
                           { no: 49, sis: '307699', name: 'Renuka Raut', org: 'Coding Samurai Lucknow', class: '2R', duration: '1 Month', stipend: 'Nil' },
                           { no: 50, sis: '307630', name: 'Shruti Chaudhari', org: 'Coding Samurai Lucknow', class: '2R', duration: '1 Month', stipend: 'Nil' },
                           { no: 51, sis: '307557', name: 'Anagha Badhe', org: 'Coding Samurai Lucknow', class: '2R', duration: '1 Month', stipend: 'Nil' },
                           { no: 52, sis: '307173', name: 'Prajwal Chusalikar', org: 'One Smarter Inc. USA', class: '3R', duration: '3 Months', stipend: 'Rs. 7500' },
                           { no: 53, sis: '307235', name: 'Gaurav Dhale', org: 'One Smarter Inc. USA', class: '3R', duration: '3 Months', stipend: 'Rs. 7500' },
                           { no: 54, sis: '306665', name: 'Shreya Patil', org: 'Circular Angle Pvt. Ltd. Mumbai', class: '4R', duration: '3 Months', stipend: 'Rs. 33333' },
                           { no: 55, sis: '307074', name: 'Krishna Kashikar', org: 'Ohioptech Mumbai', class: '3R', duration: '1 Month', stipend: 'Nil' },
                           { no: 56, sis: '307315', name: 'Ishan Gawande', org: 'Ministry of Railways Govt. of India Bhusawal', class: '3R', duration: '4 Months', stipend: 'Nil' },
                           { no: 57, sis: '307423', name: 'Kamlesh Kasambe', org: 'Ministry of Railways Govt. of India Bhusawal', class: '3R', duration: '4 Months', stipend: 'Nil' },
                           { no: 58, sis: '307081', name: 'Janavi Nakat', org: 'Ministry of Railways Govt. of India Bhusawal', class: '3R', duration: '4 Months', stipend: 'Nil' },
                           { no: 59, sis: '307692', name: 'Shantanu Dongare', org: 'Pure Essence Technologies Khamgaon', class: '2R', duration: '3 Months', stipend: 'Rs. 2000' },
                           { no: 60, sis: '307931', name: 'Piyush Agroya', org: 'Cdlne Innovations LLP Pune', class: '2R', duration: '6 Months', stipend: 'Nil' },
                           { no: 61, sis: '307189', name: 'Anikesh Gadekar', org: 'Artaak Pune', class: '3R', duration: '6 Months', stipend: 'Rs. 7500' },
                           { no: '', sis: '', name: '', org: 'Perfect Skills Pvt. Ltd. Hyderabad', class: '', duration: '2 Months', stipend: 'Rs. 20000' },
                           { no: 62, sis: '307406', name: 'Pratham Akkewar', org: 'Breathe India Advisors Pvt. Ltd. Haryana', class: '3R', duration: '2 Months', stipend: 'Nil' },
                           { no: 63, sis: '307285', name: 'Kuldeep Lunge', org: 'Ola Electric Bengaluru', class: '4R', duration: '3 Months', stipend: 'Rs. 15000' },
                           { no: 64, sis: '306408', name: 'Arpit Bharuka', org: 'Vrudhee Solutions Aurangabad', class: '4R', duration: '3 Months', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Uniconverge Technologies Pvt. Ltd. Nodia', class: '', duration: '1.5 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'Capabl', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: 65, sis: '306508', name: 'Yash Sugandhi', org: 'TechnoSparsh Software Solutions Indore', class: '4R', duration: '3 Months', stipend: 'Rs. 5000' },
                           { no: '', sis: '', name: '', org: 'TechnoSparsh Software Solutions Indore', class: '', duration: '3 Months', stipend: 'Rs. 3000' },
                           { no: 66, sis: '306787', name: 'Atharv Tipkari', org: 'TruScholar Asset Chain Techiniligence Pvt Ltd Amravati', class: '4R', duration: '6 Months', stipend: 'Rs. 5000' },
                           { no: 67, sis: '306563', name: 'Gauri Patil', org: 'A Sun Infotech Venture Nagpur', class: '4R', duration: '6 Months', stipend: 'Rs. 10000' },
                           { no: 68, sis: '306561', name: 'Nikita Labde', org: 'Vio Lernx Pvt. Ltd. Hanumanghar', class: '4R', duration: '2 Months', stipend: 'Nil' },
                           { no: 69, sis: '306681', name: 'Pravadnya More', org: 'Digikull Education Pvt. Ltd. Nodia', class: '4R', duration: '1 year', stipend: 'Rs. 27000' },
                           { no: 70, sis: '306822', name: 'Divya Metange', org: 'CodSoft', class: '4R', duration: '1 Month', stipend: 'Nil' },
                           { no: '', sis: '', name: '', org: 'TechnoHacks', class: '', duration: '1 Month', stipend: 'Nil' },
                           { no: 71, sis: '306465', name: 'Vallabh Ghongde', org: 'Capabl', class: '4R', duration: '1 Month', stipend: 'Nil' },
                           { no: 72, sis: '306274', name: 'Gajanan Borade', org: 'Computecture Solutions Ahmedabad', class: '4R', duration: '1 Month', stipend: 'Nil' },
                           { no: 73, sis: '306602', name: 'Sanika Sapkale', org: 'RRSL Govt. of India Ahmedabad', class: '4R', duration: '1 Months', stipend: 'Nil' }
                        ].map((intern, idx) => (
                           <tr key={idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 font-medium text-gray-900">{intern.no}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.sis}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.name}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.org}</td>
                              <td className="px-4 py-3 text-gray-700 text-center">{intern.class}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.duration}</td>
                              <td className="px-4 py-3 text-gray-700">{intern.stipend}</td>
                           </tr>
                        ))
                     )}
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
                          Highlights: New faculty inductions, Hackathon winners, Industry visits to TCS & ISRO, and research grants received.
                      </p>
                      
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                          <a 
                             href="/documents/news-letter-25-26-I.pdf" 
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

  const SidebarLink = ({ id, label, icon: Icon }) => (
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
    <GenericPage title="Computer Science and Engineering" backgroundImage={cseBanner}>
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

export default CSE;





