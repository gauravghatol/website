import React, { useState, useEffect } from 'react';
import GenericPage from '../../components/GenericPage';
import electricalBanner from '../../assets/images/departments/electrical/Electrical Banner.png';
import hodPhoto from '../../assets/images/departments/electrical/HOD_ELECTRICAL.jpg';
import srpPhoto from '../../assets/images/departments/electrical/faculty/SRP.jpg';
import uajPhoto from '../../assets/images/departments/electrical/faculty/UAJ.jpg';
import aujPhoto from '../../assets/images/departments/electrical/faculty/AUJ.jpg';
import ssjPhoto from '../../assets/images/departments/electrical/faculty/SSJ.jpg';
import prbPhoto from '../../assets/images/departments/electrical/faculty/PRB.jpg';
import rskPhoto from '../../assets/images/departments/electrical/faculty/RSKankale.jpg';
import mrcPhoto from '../../assets/images/departments/electrical/faculty/MRC.jpg';
import rkmPhoto from '../../assets/images/departments/electrical/faculty/RKM.jpg';
import gnbPhoto from '../../assets/images/departments/electrical/faculty/GNBonde.jpg';
import vskPhoto from '../../assets/images/departments/electrical/faculty/VSKarale.jpg';
import bsrPhoto from '../../assets/images/departments/electrical/faculty/BSRakhonde.jpg';
import prdPhoto from '../../assets/images/departments/electrical/faculty/PratikDhabe.jpg';
import vanPhoto from '../../assets/images/departments/electrical/faculty/vanagpure.png';
import gdkPhoto from '../../assets/images/departments/electrical/faculty/GDKhadsane.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  FaLaptopCode, FaBullseye, FaUserTie, FaAward, FaAngleRight, 
  FaIndustry, FaUniversity, FaQuoteLeft, FaEnvelope, FaPhone,
  FaTrophy, FaChartLine, FaLightbulb, FaProjectDiagram,
  FaCalendarAlt, FaDownload
} from 'react-icons/fa';

const Electrical = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [vmTab, setVmTab] = useState('vision');
  const [poTab, setPoTab] = useState('peo');
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState('projects');
  const [projectYear, setProjectYear] = useState('2023-24');
  const [researchYear, setResearchYear] = useState('2023-24');
  const [placementYear, setPlacementYear] = useState('2023-24');
  const [expandedSemester, setExpandedSemester] = useState(null);

  const academicsLinks = [
    { id: 'overview', label: 'Department Overview' },
    { id: 'hod', label: 'Words from HOD' },
    { id: 'vision-mission', label: 'Vision, Mission, PEO & PSO' },
    { id: 'course-outcomes', label: 'Course Outcomes' },
    { id: 'curriculum', label: 'Schemes and Syllabus' },
    { id: 'laboratories', label: 'Infrastructure and Laboratories' },
    { id: 'pride', label: 'Pride of the Department' },
    { id: 'placements', label: 'Placement Statistics' },
    { id: 'activities', label: 'Curricular Activities' },
    { id: 'student-chapter', label: 'Student Chapter (IEI)' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'course-material', label: 'Course Material' },
    { id: 'projects', label: 'UG Projects' },
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
                      src="https://www.youtube.com/embed/1uezKM1fWOU" 
                      title="Department of Electrical Engineering, SSGMCE, Shegaon"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                  ></iframe>
              </div>

              <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
                  <p>
                      The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience.
                  </p>
                  <p>
                      We focus on holistic development through innovative teaching-learning processes, industrial training, ongoing projects, and regular interactions with industry experts in the field of power systems, control systems, renewable energy, and smart grid technologies.
                  </p>
              </div>
            </div>
        </div>

        {/* Courses Section - Minimalistic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    Courses @ Electrical Engineering
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
                            ['Degree', 'Bachelor of Engineering in Electrical (Electronics & Power)'],
                            ['Duration', '4 Year(8 Semesters) (Full time)'],
                            ['Intake', '60 Students per year'],
                            ['Establishment', 'Year: 1983'],
                            ['NBA Status', 'Accredited by National Board of Accreditation for 03 years'],
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
                            ['Degree', 'M.E. (Electrical Power System)'],
                            ['Duration', '2 Year(4 Semesters) (Full time)'],
                            ['Intake', '18 Students per year'],
                            ['Establishment', 'Year: 1996'],
                        ].map(([label, val], i) => (
                            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">{label}</td>
                                <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">{val}</td>
                            </tr>
                        ))}

                        {/* PhD */}
                         <tr className="bg-white">
                            <td colSpan="2" className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200">Ph.D in Electrical Engineering</td>
                        </tr>
                         {[ 
                            ['Degree', 'Ph. D in Electrical Engineering'],
                            ['Duration', '3 Years'],
                            ['Intake', '20 Students'],
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
                <p className="text-ssgmce-blue font-medium">Dr. S. R. Paraskar</p>
                <p className="text-sm text-gray-500">Head, Dept. of Electrical Engineering (Electronics & Power)</p>
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
                            To impart high quality education and excel in research in Electrical Engineering to serve the global society.
                        </p>
                     </motion.div>
                 )}
                 {vmTab === 'mission' && (
                     <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="space-y-4 w-full"
                     >
                        {[
                            "To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.",
                            "To promote excellence in teaching and research.",
                            "To produce competent, entrepreneurial and committed Electrical Engineers with high human values for professional career and higher studies."
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
                            "Expertise and use it for problem solving in analysis & design of electrical system.",
                            "Commitment in the engineering profession or other professional careers with high human values.",
                            "Lifelong learning and adapting to a constantly changing field through graduate work, professional experience and self-study.",
                            "Leadership and initiative to ethically advance professional and organizational goals and facilitate the achievements of others.",
                            "Teamwork commitment for working with others of diverse cultural and interdisciplinary backgrounds."
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
                            "Demonstrate proficiency in the design, analysis, and optimization of Electrical Power Systems, addressing complex engineering challenges and system parameters.",
                            "Apply advanced engineering principles, technical knowledge, problem-solving strategies along with modern tools in the development and control of Electrical Machines and systems."
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

    'hod': (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
         {/* Profile Section - Top Center */}
         <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
             <div className="flex flex-col items-center">
                 <div className="w-56 h-56 bg-white rounded-full mb-4 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
                    <img 
                        src={hodPhoto} 
                        alt="Dr. S. R. Paraskar - HOD Electrical" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 text-center">Dr. S. R. Paraskar</h3>
                 <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">Head of Department</p>
                 <p className="text-gray-600 text-sm mt-1">Department of Electrical Engineering (Electronics & Power)</p>
                 
                 <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-ssgmce-orange" />
                        <span>hod_elpo@ssgmce.ac.in</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center">
                        <span>srparaskar@ssgmce.ac.in</span>
                    </div>
                 </div>
                 
                 <div className="mt-3 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Professor & Head</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">Electrical Engineering</span>
                 </div>
             </div>
         </div>
         
         {/* Message Section - Below Photo */}
         <div className="p-8 md:p-10 relative bg-white">
             <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-blue-50 -z-0" />
             
             <div className="relative z-10 max-w-5xl mx-auto">
                <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">Words from HOD</h3>
                    <div className="h-1 w-20 bg-ssgmce-blue mt-2 rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
                    <p>
                        The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience.
                    </p>
                    <p>
                        The department admits students for 4 years B.E. Electrical (Electronics & Power) Programme and 2 years M.E. (Electrical Power System) programme. The academic activities are supported by eight well equipped laboratories. All Laboratories are recognized for research work by Sant Gadge Baba Amravati University, Amravati.
                    </p>
                    <p>
                        The department admits students for 4 years B.E. Electrical (Electronics & Power) Programme and 2 years M.E. (Electrical Power System) programme. The academic activities are supported by eight well equipped laboratories. All Laboratories are recognized for research work by Sant Gadge Baba Amravati University, Amravati.
                    </p>
                    <p>
                        The department has strong industry interaction and has been involved in development of State of art products for Industry and consultancy projects.
                    </p>
                    <p>
                        The department is strong with young faculty members and experts in various fields of electrical engineering. The broad area of expertise includes Power System restructuring & reforms, Digital Signal Processing, Application of Artificial Intelligence in Electrical Engineering, Power System Deregulation, Power System Transients, Distribution Automation, High Voltage Engineering,Power Quality and FACTS devices, condition monitoring of electrical equipment.
                    </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                    <div>
                        <p className="font-dancing text-2xl text-ssgmce-blue">Dr. S. R. Paraskar</p>
                        <p className="text-sm text-gray-500">Head, Dept. of Electrical Engineering (Electronics & Power)</p>
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

    'course-outcomes': (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Course Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of B.E. Electrical (Electronics & Power) and M.E. (Electrical Power System)
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
                      {/* Engineering Mathematics - I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A1 ENGINEERING MATHEMATICS - I</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Find nth order derivative of functions and product of functions and expand the function in a power series and evaluation of limits of indeterminate forms.</li>
                          <li>Find the partial derivatives and Jacobian of explicit and implicit functions</li>
                          <li>Obtain maxima and minima of a function with constraints by using Lagrange's method of undetermined multipliers.</li>
                          <li>Find the powers and roots of complex numbers, separate the complex quantity in real & imaginary parts, and find the logarithms of complex numbers.</li>
                          <li>Able to solve ordinary differential equations of first order and first degree by various methods and apply these to solve problems in engineering fields.</li>
                          <li>Able to solve ordinary differential equations of first order and higher degree by various methods</li>
                        </ol>
                      </div>

                      {/* Engineering Physics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A2 ENGINEERING PHYSICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To apply the knowledge of solid-state devices such as semiconductor diode, Zener diode & LED in various Electronics applications.</li>
                          <li>To apply the knowledge of Quantum Mechanics in engineering fields</li>
                          <li>To apply the principles of electron ballistics to demonstrate the functioning of CRO & mass spectrograph.</li>
                          <li>To apply the principles of geometrical optics such as interference & diffraction in various engineering fields</li>
                          <li>To apply the principles of fiber optics, LASER & fundamentals of acoustics, ultrasonics & fluid dynamics in various engineering domains</li>
                        </ol>
                      </div>

                      {/* Engineering Mechanics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A3 ENGINEERING MECHANICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Compose and resolve the forces along with its effect.</li>
                          <li>Apply principles of statics to the system of rigid bodies and analyse simple structures.</li>
                          <li>Calculate frictional forces for simple contact, wedges and belt friction.</li>
                          <li>Locate centroid and calculate moment of inertia.</li>
                          <li>Calculate various kinematic quantities.</li>
                          <li>Solve the problems using different kinetic equations related to direct and interconnected particles.</li>
                          <li>Apply principle of conservation of momentum and laws of impact.</li>
                        </ol>
                      </div>

                      {/* Computer Programming */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A4 COMPUTER PROGRAMMING</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To explain fundamental concepts of computer and computing.</li>
                          <li>To test and execute the programs and correct syntax and logical errors.</li>
                          <li>To demonstrate various operators and expressions to solve real life problems.</li>
                          <li>To demonstrate various concepts of control structure to solve complex problems</li>
                          <li>To use arrays, strings and standard algorithms and programs.</li>
                          <li>To demonstrate various concepts of functions, pointers and file handling mechanism.</li>
                        </ol>
                      </div>

                      {/* Workshop Practice */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1A5 WORKSHOP PRACTICE</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Upon completion of this course, the students will gain knowledge of different manufacturing processes which are commonly employed in industry.</li>
                          <li>Upon completion of this course, the students will be able to fabricate the components using various manufacturing techniques.</li>
                          <li>The students will be conversant with the concept of dimensional accuracy and tolerances.</li>
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
                      {/* Engineering Mathematics - II */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B1 ENGINEERING MATHEMATICS - II</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Use matrices for solving system of simultaneous linear equations. Find Eigen values and Eigen vectors of the matrix. Find inverse of matrix by various methods</li>
                          <li>Find the Fourier expansion of periodic and non-periodic functions</li>
                          <li>Explain curve tracing with justification which are useful in applications of integration. Use technique of Differentiation under integral sign to evaluate integrals. Find Product of Vectors</li>
                          <li>Acquire knowledge about Gamma & Beta function, Reduction Formulae and rectification</li>
                          <li>Evaluate double integral and its application to find area</li>
                          <li>Evaluation and application of triple integrals in Engineering problems</li>
                        </ol>
                      </div>

                      {/* Engineering Chemistry */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B2 ENGINEERING CHEMISTRY</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify the various methods of water softening along with application of water and its quality parameters for the use of water in industry</li>
                          <li>Explain the various types of corrosion, its control methods and battery technology</li>
                          <li>Identify the various materials such as Cement, lubricant, Ceramics, Refractory, Nonmaterial</li>
                          <li>used for future technology with their application in day-to-day life</li>
                          <li>Identify the fuel for IC engines and their characteristics with respect to its working</li>
                          <li>To utilize the knowledge about polymer and engineering materials towards different applications</li>
                          <li>To provide the knowledge about Metallurgy and analytical techniques</li>
                        </ol>
                      </div>

                      {/* Basic Electrical Engineering */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B3 BASIC ELECTRICAL ENGINEERING</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Solve numerical on basic electric and magnetic circuits.</li>
                          <li>Apply AC fundamentals to analyse single phase & three phase circuits.</li>
                          <li>Explain the operating principles of various electrical machines</li>
                          <li>Explain the working of various measuring instruments and Importance of earthing.</li>
                        </ol>
                      </div>

                      {/* Engineering Graphics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B4 ENGINEERING GRAPHICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>read prepare/understand the engineering drawings</li>
                          <li>create the projections and sectional views of 3D objects</li>
                          <li>draw the orthographic and isometric views of 3D objects</li>
                          <li>use graphics software to create Engineering drawings and represent engineering systems</li>
                        </ol>
                      </div>

                      {/* English Communication Skills Laboratory */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1B5 ENGLISH COMMUNICATION SKILLS LABORATORY</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>The learning outcome of students will be assessed through assignments, tests and final exams and most importantly through practical performance.</li>
                          <li>Through these tests, it would be revealed that students are able to reproduce their understanding of concepts/principles of communication in English language.</li>
                          <li>Students can present themselves well in front of large audience on a variety of topics. Moreover, they get the knack for structured conversation to make their point of views clear to the listeners.</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Semesters with data */}
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP01 ENGINEERING MATHEMATICS - III</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>solve the Linear Differential equations with constant coefficients and apply this knowledge to Electrical circuits</li>
                          <li>analyse Laplace Transform of various types of functions and able to find Laplace Transform of Periodic, Impulse & Unit step function. Use LT to solve LDE</li>
                          <li>apply the knowledge of Laplace Transform to find solution of Linear Differential equations with constant coefficients.</li>
                          <li>find Fourier Transform of various types of functions and apply this knowledge to find Fourier Transform of functions, in their core subjects</li>
                          <li>find Z Transform of various types of functions and apply this knowledge to problems in Electrical Engineering.</li>
                          <li>Differentiate and integrate the vector point functions and apply this knowledge to problems in Electrical and Magnetic fields</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP02 ELECTRICAL CIRCUIT ANALYSIS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze electric and magnetic circuits using basic circuital laws</li>
                          <li>Analyze the circuit using Network simplification theorems</li>
                          <li>Solve circuit problems using concepts of electric network topology</li>
                          <li>Evaluate transient response of different circuits using Laplace transform</li>
                          <li>Evaluate two-port network parameters and network functions</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP03 ELECTRICAL MACHINE - I</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the Construction, working, operation of DC Machines.</li>
                          <li>Determine Performance Parameter of DC machine by conducting various tests on DC Machine</li>
                          <li>Illustrate characteristics, starting, braking of DC Motors</li>
                          <li>Demonstrate the construction, working, types of connection and Application of Transformers.</li>
                          <li>Determine Performance Parameter of Transformer by conducting various tests on Transformers</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP04 ENERGY RESOURCES AND GENERATION</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the operation of Thermal, Hydro, Nuclear and Diesel power plants</li>
                          <li>Summarize solar energy conversion, solar radiation measuring instruments, wind energy conversion and their applications.</li>
                          <li>Outline the principle and operation of fuel cells, ocean & tidal energy conversion, and other nonconventional energy resources.</li>
                          <li>Determine the various factors and curves related to electrical load & generating plant.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP05 ELECTRONIC DEVICES & CIRCUITS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the knowledge of semiconductor physics and PN Junction Diode</li>
                          <li>Analyze the rectifier and regulator circuits.</li>
                          <li>Analyze the operational parameters of BJT</li>
                          <li>Analyze various multistage amplifier circuits</li>
                          <li>Demonstrate the knowledge of JFET, MOSFET, UJT and their operational parameters</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester III NEP */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem3-nep' ? null : 'be-sem3-nep')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-III (NEP)</span>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EP200PC - Numerical Methods and Optimization Techniques</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Solve linear and Simultaneous Equations with the help of Numerical Methods.</li>
                          <li>Apply various Numerical methods to fit the curve.</li>
                          <li>Solve Numerical differentiation, integration, and Differential Equations.</li>
                          <li>Solve linear, non-linear and problem by various methods.</li>
                          <li>Determine the optimum scheduling by using CPM and PERT.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE201PC/3EP201PC - Electrical Circuit Analysis</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze electric circuit using basic circuital laws</li>
                          <li>Analyze the circuit using Network simplification theorems.</li>
                          <li>Solve circuit problems using concepts of electric network topology.</li>
                          <li>Evaluate transient response of different circuits using Laplace transform</li>
                          <li>Evaluate two-port network parameters and network functions.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE202PC/3EP202PC - Electrical Measurements & Instrumentation</h4>
                        <p className="text-sm text-gray-600 mb-2">A student completing this course will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the various measuring instruments like PMMC, MI, Electrodynamometer, and Induction type instruments.</li>
                          <li>Demonstrate the construction & working of Instrument Transformers and special purpose meters.</li>
                          <li>Analyze various methods for measurement of resistance, inductance, and capacitance using AC/DC bridges.</li>
                          <li>Explain the working of various Digital measuring instruments.</li>
                          <li>Explain the generalized Instrumentation system & working of different transducers.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE206M/3EP206M - Electrical Energy Generation</h4>
                        <p className="text-sm text-gray-600 mb-2">After successful completion of this course, a student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the current energy scenario in India and the various load- Generation factors.</li>
                          <li>Illustrate the working of Thermal, Hydro & Nuclear power plants.</li>
                          <li>Explain the working of solar & Wind energy conversion systems.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE207OE/3EP207OE - Power Supply System</h4>
                        <p className="text-sm text-gray-600 mb-2">After successful completion of this course, a student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the working of thermal & Hydro-electric power plants.</li>
                          <li>Understand the basics of solar and wind energy and their conversion.</li>
                          <li>Demonstrate the knowledge of various types of substations and distribution systems</li>
                          <li>Demonstrate the knowledge of electrical wiring installation and earthing system.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE208EM/3EP208EM - Entrepreneurship Development</h4>
                        <p className="text-sm text-gray-600 mb-2">On successful completion of this course, the students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the fundamentals of entrepreneurship and its role in economic development.</li>
                          <li>Apply innovation and design thinking to develop business ideas.</li>
                          <li>Prepare a feasibility study and basic business plan for entrepreneurial ventures.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EE209VE/3EP209VE - Environmental Science</h4>
                        <p className="text-sm text-gray-600 mb-2">Upon successful completion of the course the students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the multidisciplinary nature of environment and Renewable and non-renewable resources</li>
                          <li>Understand natural environment and its relationship with human activities.</li>
                          <li>Understand the basic concepts and problems and follow sustainable development practices.</li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EP01 ELECTROMAGNETIC FIELD</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the understanding of basic mathematical concepts related to electromagnetic vector fields</li>
                          <li>Apply the principles of electrostatics to the solutions of problems relating to electric field</li>
                          <li>Apply the principles of magneto statics to the solutions of problems relating to magnetic field</li>
                          <li>Apply Maxwell's equation in different forms (differential and integral) to diverse engineering problems.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EP02 ELECTRICAL MEASUREMENT & INSTRUMENTATION</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Classify the various measuring instruments like PMMC, MI, Electrodynamometer, and Induction type instruments for measurement of current, voltage, power, and energy.</li>
                          <li>Demonstrate the construction & working of Instrument Transformers and special purpose meters.</li>
                          <li>Analyze various methods for measurement of resistance, inductance, and capacitance using AC/DC bridges.</li>
                          <li>Explain the working of various Digital measuring instruments.</li>
                          <li>Explain the generalized Instrumentation system & working of different transducers.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EP03 CONTROL SYSTEM</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the fundamental concepts of automatic Control and mathematical modelling of the System</li>
                          <li>Determine the transfer function of control system components</li>
                          <li>Analyze the time response of various systems and performance of controllers</li>
                          <li>Evaluate the stability of linear systems using various methods</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EP04 NUMERICAL METHODS & OPTIMIZATION TECHNIQUES</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Determine solutions for linear and simultaneous equations using numerical methods.</li>
                          <li>Apply various curve fitting techniques.</li>
                          <li>Make use of various numerical methods for solving Numerical differentiation, integration, and Differential Equations.</li>
                          <li>Determine the optimum scheduling by using CPM and PERT.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EP05 ANALOG & DIGITAL CIRCUITS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the principles of operational amplifiers, parameters of op-amp</li>
                          <li>Illustrate the linear and nonlinear applications of op-amp</li>
                          <li>Demonstrate the knowledge of Voltage regulator and Timer ICs</li>
                          <li>Describe the working of Logic families and their applications.</li>
                          <li>Demonstrate the knowledge of combinational and sequential circuits and its application</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester IV NEP */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() => setExpandedSemester(expandedSemester === 'be-sem4-nep' ? null : 'be-sem4-nep')}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">B.E. Semester-IV (NEP)</span>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE210PC/4EP210PC - Electrical Machine - I</h4>
                        <p className="text-sm text-gray-600 mb-2">After Completion of this course, students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the Construction, working operation, of DC Machines.</li>
                          <li>Illustrate the different Characteristics, types, their Application and Parallel Operation of DC Generator</li>
                          <li>Demonstrate the various types of DC motor, characteristics, starting method, testing methods, speed control & Braking operation on DC motors.</li>
                          <li>Explain the Construction, working, types of Single-Phase Transformer and testing of Single-phase transformer.</li>
                          <li>Explain the Construction, working, different connections, applications and testing of three phase transformers.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE211PC/4EP211PC - Control System</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the fundamental concepts of automatic Control and mathematical modeling of the Systems.</li>
                          <li>Analyze the transfer functions, Signal flow graphs and feedback system for stability and noise reduction.</li>
                          <li>Examine the functionality and applications of various control system components like motors and encoders.</li>
                          <li>Analyze time response characteristics of first and second order system with error analysis.</li>
                          <li>Apply stability criteria using Routh-Hurwitz and frequency response methods.</li>
                          <li>Assess system stability through Bode plots, Nyquist plots and gain/phase margin analysis.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE212PC/4EP212PC - Electromagnetic Fields</h4>
                        <p className="text-sm text-gray-600 mb-2">At the end of the course the student will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the basic mathematical concepts related to electromagnetic vector fields.</li>
                          <li>Apply the principles of electrostatics to the solutions of problems relating to electric field a</li>
                          <li>Apply the principles of magneto statics to the solutions of problems relating to magnetic field.</li>
                          <li>Apply Maxwell's equation in different forms (differential and integral) to diverse engineering problems.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE215M/4EP215M - Electrical Measurements</h4>
                        <p className="text-sm text-gray-600 mb-2">A student completing this course, should be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Classify the various measuring instruments like PMMC, MI, Electrodynamic type.</li>
                          <li>Explain the measurement of power and energy by wattmeter and energy meter.</li>
                          <li>Analyze various methods for measurement of resistance, inductance, and capacitance using AC/DC bridges.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE217OE/4EP217OE: Electrical Drives</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, Students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basic of electrical drives and Power Electronics devices</li>
                          <li>Demonstrate various modern speed control techniques of DC drives</li>
                          <li>Demonstrate various modern speed control techniques of AC drives</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">4EE218EM/4EP218EM - Engineering Economics</h4>
                        <p className="text-sm text-gray-600 mb-2">After successful completion of the course, students will be able to -</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply the concepts economics to assess demand and, including elasticity and laws of returns.</li>
                          <li>Demonstrate the understanding of cost and revenue structures, market types and inflationary trends, and banking principles.</li>
                          <li>Make use of the principles of time value of money, economic equivalence, and depreciation to evaluate engineering projects through various methods.</li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP01 POWER SYSTEM - I</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the transmission system with respect to various electrical parameters</li>
                          <li>Examine the performance of transmission line</li>
                          <li>Describe transmission lines' voltage control and power factor improvement methods</li>
                          <li>Model power system using single line, impedance and reactance diagrams.</li>
                          <li>Illustrate Corona phenomenon, Ferranti effect, various Insulators, its string efficiency and underground cables</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP02 MICROPROCESSOR & MICROCONTROLLER</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify the architectural and operational difference between microprocessor 8085,8086 and microcontroller 8051</li>
                          <li>Make use of Assembly Language Programming of Microprocessor 8085</li>
                          <li>Select a peripheral to be interface with microprocessor for control and measurement application</li>
                          <li>Experiment with microprocessor 8085 and peripherals for control and measurement of electrical quantities</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP03 ELECTRICAL MACHINE - II</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe the construction, working operation & performance characteristics of three phase Induction Motor</li>
                          <li>Analyze the starting, braking and speed control of three phase Induction motors by various methods</li>
                          <li>Describe the construction, working operation & performance characteristics of single-phase Induction Motor</li>
                          <li>Demonstrate the construction, working operation & performance characteristics of synchronous machine</li>
                          <li>Explain the construction & working of special motors like Universal, Reluctance, PMSM & BLDC Motor</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP04 SIGNAL & SYSTEM (Professional Elective - I)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the understanding of continuous-time and discrete-time signals and systems</li>
                          <li>Analyze the continuous-time and Discrete time systems using Fourier transform</li>
                          <li>Apply sampling theorem for different applications</li>
                          <li>Analyze DT systems using Z-transforms</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP04 NETWORK ANALYSIS AND SYNTHESIS (Professional Elective - I)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the transient response of series RLC and parallel A.C. circuits</li>
                          <li>Demonstrate the properties of network functions.</li>
                          <li>Demonstrate the properties of positive Real Functions</li>
                          <li>Synthesize driving point functions of RL, RC and RLC</li>
                          <li>Synthesize two port network functions</li>
                          <li>Design passive filters to meet desired specifications</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP05 POWER SUPPLY SYSTEM (Open Elective - I)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Distinguish between construction and working of various power generation plants</li>
                          <li>Describe layout and working of Substations</li>
                          <li>Compare various power distribution systems</li>
                          <li>Explain types of wiring, necessity of earthing and safety precautions.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">5EP05 ELECTRICAL DRIVES (Open Elective - I)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basic Concept of electrical drives</li>
                          <li>Describe Power Electronics devices & their applications</li>
                          <li>Demonstrate various starting, braking and speed control methods of D.C. Motors</li>
                          <li>Demonstrate various starting, braking and speed control methods of three phase Induction Motor.</li>
                          <li>Describe the construction, working principle and applications of single-phase Induction Motor special motors.</li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP01 POWER ELECTRONICS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the knowledge about fundamental concepts and techniques used in power electronics</li>
                          <li>Analyze various single phase and three phase power converter and Inverter circuits</li>
                          <li>Analyze the operation of DC/DC and AC/AC converter circuits</li>
                          <li>Implement industrial applications of power electronic circuits.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP02 ELECTRICAL ENERGY DISTRIBUTION & UTILIZATION</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Demonstrate the knowledge of distribution substation</li>
                          <li>Compare different power distribution systems</li>
                          <li>Describe elements of distribution Automation system</li>
                          <li>Select proper electrical drive for industrial applications</li>
                          <li>Explain the working of electric traction system</li>
                          <li>Design an illumination system for various locations</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP03 COMPUTER AIDED ELECTRICAL MACHINE DESIGN</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply the suitable method for Computer aided machine design & select the proper material .</li>
                          <li>Design the single phase & three phase transformer.</li>
                          <li>Evaluate the performance of the transformer from its design data</li>
                          <li>Design the three phase Induction motor</li>
                          <li>Develop the computer program for design of transformer and three phase IM</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP04 ADVANCE CONTROL SYSTEM (Professional Elective - II)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Design compensator using time and frequency domain specifications</li>
                          <li>Analyze the system using state space Model</li>
                          <li>Apply Z Transform to analyse Digital systems</li>
                          <li>Analyze the Nonlinear systems</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP04 PROCESS CONTROL SYSTEMS (Professional Elective - II)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the various Electronic Instruments for measurement of electrical parameters.</li>
                          <li>Analyse the different signals</li>
                          <li>Demonstrate the signal counting, recording and working of digital readout devices.</li>
                          <li>Demonstrate the Various types of A/D and D/A converters.</li>
                          <li>Apply various signal processing tools as per requirement</li>
                          <li>Develop ladder diagrams &programmes for PLC</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP05 ENERGY AUDIT & MANAGEMENT (Open Elective - II)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Discuss energy scenario and it's management.</li>
                          <li>Conduct the energy audit of different systems.</li>
                          <li>Determine the economics of energy conservation</li>
                          <li>Discuss various energy Conservation methods & their case studies</li>
                          <li>Explain fundamentals of Harmonics.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">6EP05 ELECTRICAL ESTIMATING & COSTING (Open Elective - II)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand methods of installation and estimation of service connection</li>
                          <li>Decide type of wiring, its estimation and costing for residential building</li>
                          <li>Carry out electrification of commercial complex, factory unit installations</li>
                          <li>Design & estimate for feeders & distributors</li>
                          <li>Understand contract, tendering and work execution process</li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP01 POWER SYSTEM - II</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basic Concept of Fault Analysis in Electrical systems.</li>
                          <li>Analyze the different types of symmetrical and Unsymmetrical Fault in Electric Power System</li>
                          <li>Explain the concept of Power System Stability and synchronous machine parameter determination.</li>
                          <li>Analyze the steady state stability of system.</li>
                          <li>Assess transient state stability of two-machine system</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP02 DIGITAL SIGNAL PROCESSING</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze the discrete time signals in time domain</li>
                          <li>Analyze the discrete time systems using DTFT and DFT</li>
                          <li>Explain the concept of Bandpass sampling</li>
                          <li>Design the structures of different types of digital filters</li>
                          <li>Analyze the frequency response of various digital filters</li>
                          <li>Apply the knowledge of multi-rate signal processing</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP03 ENTREPRENEURSHIP AND PROJECT MANAGEMENT</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the concept of entrepreneurship and its role in economic development.</li>
                          <li>Compare the various business model and select the most suitable.</li>
                          <li>Identify & formulate the project report and Source of finance for a project.</li>
                          <li>Estimate the cost, time & resources for the project work.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP04 POWER SYSTEM OPERATION & CONTROL (Professional Elective-III)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Apply the knowledge of preliminaries on power system operation and control.</li>
                          <li>Determine the optimal scheduling of generation for a two-plant system with and without losses for the economic operation of the power system.</li>
                          <li>Develop the mathematical model of the Automatic Voltage Regulator (AVR) loop and the Automatic Load-Frequency Control (ALFC) loop.</li>
                          <li>Build the block diagram of two area system.</li>
                          <li>Explain the role of the power system stabilizer in damping the steady-state oscillations set up in the power system</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP04 WIND AND SOLAR SYSTEMS (Professional Elective-III)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the energy scenario and the consequent growth of the power generation from renewable energy sources.</li>
                          <li>Understand the basic physics of wind and solar power generation.</li>
                          <li>Understand the power electronic interfaces for wind and solar generation.</li>
                          <li>Understand the issues related to the grid-integration of solar and wind energy systems.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP05 ARTIFICIAL INTELLIGENCE (Professional Elective-IV)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Build Artificial model of neuron and architectures of neural network</li>
                          <li>Make use of supervised /unsupervised learning methods for training of ANN</li>
                          <li>Apply fuzzy logic for solving engineering problems</li>
                          <li>Utilize genetic algorithm for optimization of engineering problem</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">7EP05 ELECTRICAL DRIVES & CONTROL (Professional Elective-IV)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Elaborate the Concept of electrical drives.</li>
                          <li>Demonstrate the knowledge of modern speed and torque control techniques of electrical drives.</li>
                          <li>Elaborate the scalar control strategies of AC drives.</li>
                          <li>Discuss the vector controlled strategies for AC motor drives</li>
                          <li>Explain direct torque & flux control techniques of Electrical drives.</li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP01 POWER SYSTEM PROTECTION</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the construction, working and characteristics of different types of protective relays.</li>
                          <li>Develop the protection systems for Distribution and transmission line.</li>
                          <li>Develop the protection systems for various elements of a power system like Alternators, Transformers, Motors & Busbar.</li>
                          <li>Explain the construction, working & characteristics of different types of circuit breakers, MCB, ELCB, RCCB & fuses.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP02 COMPUTER METHODS IN POWER SYSTEM ANALYSIS</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Develop mathematical model to represent the power system components</li>
                          <li>Demonstrate the topology of electrical power system.</li>
                          <li>Formulate Bus Impedance & admittance matrices for Power System Network</li>
                          <li>Conduct short circuit studies of electrical power system.</li>
                          <li>Carry out the load flow Analysis of electrical power system.</li>
                          <li>Perform stability study of electrical power system</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP03 HIGH VOLTAGE ENGINEERING (Professional Elective-V)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the breakdown mechanism in solid, liquid, and gaseous dielectrics.</li>
                          <li>Select an appropriate protective device to protect the power system against overvoltage's caused by internal and external causes.</li>
                          <li>Utilize different circuits for the generation of high AC, DC, and impulse voltages.</li>
                          <li>Measure high AC, DC, and impulse voltages.</li>
                          <li>Test the insulation of various high voltage apparatus used in the power system.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP03 HVDC and FACTS (Professional Elective-V)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Discuss different components of HVDC transmission system.</li>
                          <li>Explain the operation and control of HVDC converters.</li>
                          <li>Identify the suitable reactive power compensation technique and filter for HVDC system.</li>
                          <li>Choose proper FACTS controller for specific application including power system requirements.</li>
                          <li>Analyze the circuits of static shunt and static series compensators used for the prevention of voltage instability and improvement of transient stability and power damping oscillations.</li>
                          <li>Demonstrate the knowledge of Unified power flow controller (UPFC).</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP04 POWER QUALITY (Professional Elective-VI)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Illustrate the concept, need, and standards of Power Quality</li>
                          <li>Classify Power quality characteristics</li>
                          <li>Select power conditioning device for mitigation of power quality problem</li>
                          <li>Make use of measurement tools for power quality survey</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">8EP04 ELECTRICAL ENERGY CONSERVATION AND AUDITING (Professional Elective-VI)</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Summarize Indian and global energy scenario.</li>
                          <li>Explain types of energy audit and its Procedure.</li>
                          <li>Discuss economics of energy conservation</li>
                          <li>Elaborate the concepts of energy conservation and management.</li>
                          <li>Choose Appropriate energy efficient techniques for energy conservation</li>
                          <li>Apply the understanding of energy conservation and management for industrial applications.</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* M.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-8">
          <div className="bg-ssgmce-blue px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">M. E. Electrical Power System - Course Outcomes</h3>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1EPS01 Generation Scheduling & Load Dispatch</h4>
                        <p className="text-sm text-gray-600 mb-2">By the end of this course, students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the fundamentals of various power generation systems and the concepts of energy management and conservation.</li>
                          <li>Develop skills for coordinating and optimizing the operation of different types of power stations.</li>
                          <li>Analyze and apply load forecasting methodologies for effective energy management.</li>
                          <li>Evaluate generation system costs and conduct production analysis for different power generation units.</li>
                          <li>Conduct reliability analysis for generation systems, including isolated and interconnected systems.</li>
                          <li>Understand and apply principles of load dispatch and system communication for centralized control of power systems.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1EPS02 Power System Modeling and Control</h4>
                        <p className="text-sm text-gray-600 mb-2">By the end of this course, students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the concept of Stability and modelling of Power Systems.</li>
                          <li>Understand Mathematical Models of speed Governing Systems, Steady state and Transient State response of interconnected power systems.</li>
                          <li>Analyze the effect of power System Stabilizers, excitation control and turbine dynamics, multi machine system with constant impedance loads.</li>
                          <li>Develop skills in converting machine coordinates to a system reference frame to simplify the analysis of multi-machine interactions.</li>
                          <li>Understand tie-line bias control in interconnected power systems, practical aspects of implementing AGC.</li>
                          <li>Explain SCADA and Self-excited electro-mechanical oscillations in power system.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1EPS03 Digital Signal Processing & Applications</h4>
                        <p className="text-sm text-gray-600 mb-2">After successful completion of this course the students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze and design discrete time signal using frequency domain analysis, linearity, convolution, time invariance, stability criteria, and solutions to linear difference equations to address practical DSP problems</li>
                          <li>Utilize the FT, DFT, and FFT, along with their properties, to analyze and process discrete-time signals using techniques like circular and linear convolution from DFT.</li>
                          <li>Understand and apply sampling principles, including the sampling theorem, frequency spectrum, aliasing effects, anti-aliasing filters, low-pass filter reconstruction, quantization, and encoding techniques, to effectively sample and reconstruct discrete-time signals.</li>
                          <li>Design and implement various FIR and IIR filters using structures and methods like Direct Forms I and II, Cascade, Parallel, Frequency Sampling, and windowing techniques such as Rectangular, Triangular, and Blackman windows.</li>
                          <li>Design and analyze analog filters, convert them into IIR digital filters using various transformation methods, and determine filter order based on specified criteria.</li>
                          <li>Perform multi-rate digital signal processing, apply discrete wavelet and Stockwell transforms, and understand DSP applications in power systems using the TMS320 family of processors.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1EPS04 High Voltage Transmission System</h4>
                        <p className="text-sm text-gray-600 mb-2">By the end of this course, students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Compare HVDC and HVAC transmission systems.</li>
                          <li>Evaluate various converter configurations and their characteristics.</li>
                          <li>Design EHV AC transmission lines considering standard voltages, thermal ratings, and insulator configurations.</li>
                          <li>Explain the corona phenomenon and strategies to reduce it.</li>
                          <li>Explain the lightning mechanism, its effects and protection strategies.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">1EPS05 Research Methodology and IPR</h4>
                        <p className="text-sm text-gray-600 mb-2">After successfully completing the course, students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Identify research problems and formulate research objectives.</li>
                          <li>Conduct literature reviews and ensure research ethics.</li>
                          <li>Develop technical reports and research proposals.</li>
                          <li>Understand intellectual property rights and patenting processes.</li>
                        </ol>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">2EPS01 Advanced Protection of Power System</h4>
                        <p className="text-sm text-gray-600 mb-2">After completing this course, student will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand and apply the fundamental principles of power system protection.</li>
                          <li>Analyze and evaluate static and numerical relay systems for power system protection.</li>
                          <li>Develop skills to set and coordinate relays for efficient power system protection.</li>
                          <li>Design and implement protection schemes for transmission lines.</li>
                          <li>Assess and apply protection schemes for synchronous generators.</li>
                          <li>Examine and Implement protection schemes for power transformers.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">2EPS02 Power System Dynamics</h4>
                        <p className="text-sm text-gray-600 mb-2">By the end of this course, students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Develop mathematical models of synchronous machines using both a-b-c coordinates and Park's transformation.</li>
                          <li>Develop and analyze appropriate state variables for low and high-order state models, response of a SMIB system to large disturbances, mechanical and electrical torques.</li>
                          <li>Interpret and Apply the Clarke diagram for two-machine systems with lossy and lossless system to assess stability under different system conditions.</li>
                          <li>Understand and Examine the effect of inertia, governor action, saliency, saturation, and SCR on system stability.</li>
                          <li>Analyze and Examine the effect of Modes of Oscillations in Unregulated Multi-Machine Systems, excitation on generator power limits, transients, and dynamic stability.</li>
                          <li>Analyze and Examine dynamic stability using Routh's Criterion, supplementary stabilizing signals, linear analysis of a stabilized generator.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">2EPS03 Computer Aided Power System Analysis</h4>
                        <p className="text-sm text-gray-600 mb-2">Upon successful completion of this course, students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Model Power System Components and will demonstrate proficiency in modeling single-phase and three-phase power systems, employing matrix representation techniques for various admittance and impedance matrix.</li>
                          <li>Conduct Load Flow and Short Circuit Analysis to formulate and solve load flow problems using various techniques.</li>
                          <li>Analyze Faults and Sequence Networks to identify and categorize different types of faults, apply symmetrical components and sequence networks for balanced and unbalanced fault analysis, and Implement computer programming approaches for large system analysis, including sparse matrix techniques and optimal node ordering.</li>
                          <li>Perform State Estimation and Network Observability for applying state estimation techniques using maximum likelihood concepts and weighted least-squares methods to detect and identify bad measurements.</li>
                          <li>Allocate and Schedule Reactive Power to understand and apply concepts related to reactive power sources and capability curves</li>
                          <li>Apply Advanced Control and Scheduling Techniques by utilizing concepts of load frequency control and optimal hydrothermal scheduling to manage power systems effectively.</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">2EPS04 Artificial Neural Network</h4>
                        <p className="text-sm text-gray-600 mb-2">By the end of this course, students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the basic structure and function of biological neurons, various types of learning paradigms and learning mechanisms in artificial neural networks.</li>
                          <li>Describe Architecture of a Single-Layer, Multilayer Feed Forward Neural Network, Perceptron Training Algorithm, Backpropagation Algorithm, Learning Rate and Momentum Coefficient.</li>
                          <li>Understand the Basics of Unsupervised Learning : Counter propagation networks, Hopfield's networks</li>
                          <li>Understand the Basics of Associative Memory Network, Architecture, Hebb's Rule and Delta Rule for Pattern Association.</li>
                          <li>Understand Probabilistic Neural Networks, Boltzmann Machine, Support Vector Machine</li>
                          <li>Understanding of various applications of ANN in power system areas such as forecasting, classification, planning, operation, control and protection.</li>
                        </ol>
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
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EPS01 Renewable Energy Systems</h4>
                        <p className="text-sm text-gray-600 mb-2">After successful completion of this course the students will be able to</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the Wind and Solar energy conversion</li>
                          <li>Explain the energy through biomass and biogas</li>
                          <li>Illustrate the geothermal energy and its applications</li>
                          <li>Summarize the application of fuel cell and tidal power</li>
                          <li>Explain the distributed generation and microgrid</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">3EPS02 Waste to Energy</h4>
                        <p className="text-sm text-gray-600 mb-2">Upon successful completion of this course, students will be able to:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li><strong>Classify and Utilize Waste as Fuel:</strong> Identify and categorize various types of waste, including agro-biomass, forest residues, industrial waste, and municipal solid waste (MSW), and understand their application in conversion devices such as incinerators, gasifiers, and digesters.</li>
                          <li><strong>Analyze Biomass Pyrolysis Processes:</strong> Describe and compare different types of pyrolysis (slow and fast), and evaluate methods for the manufacture of charcoal, pyrolytic oils, and gases, including their yields and applications.</li>
                          <li><strong>Design and Operate Biomass Gasification Systems:</strong> Explain the principles and design of various gasifiers (fixed bed, downdraft, updraft, and fluidized bed), and apply knowledge of gasifier operation, including burner arrangements for thermal heating and engine arrangements for power generation, considering equilibrium and kinetics.</li>
                          <li><strong>Evaluate Biomass Combustion Technologies:</strong> Analyze and differentiate between various biomass combustion systems, including improved chullahs, fixed bed combustors, inclined grate combustors, and fluidized bed combustors, focusing on their design, construction, and operational principles.</li>
                          <li><strong>Assess Biogas Production and Utilization:</strong> Understand the properties and composition of biogas, and describe the technology and design features of biogas plants. Examine various biomass conversion processes including anaerobic digestion, and explore applications such as alcohol production, biodiesel production, and urban waste-to-energy conversion.</li>
                        </ol>
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
                        B.E. (Electrical Engineering)
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
                        M.E. (Electrical Power System)
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
              name: "Electrical Machines Laboratory",
              image: "lab1.jpg",
              resources: "DC Motors & Generators, Induction motors, Synchronous motor, Alternators, Transformers, Special machines, MG Sets",
              facilities: "DSO, Rectifier, Resistive/ Inductive Loads, computer system, Measuring Instruments"
            },
            {
              name: "Switchgear and Protection Laboratory",
              image: "lab2.jpg",
              resources: "Protection setup based on Over Current Relay, Earth fault Relay, Differential relay, Static Relay, Demonstration panel, MCB & RCCB Testing set, Microprocessor based Relay for induction motor Protection",
              facilities: "Relay Testing kit"
            },
            {
              name: "High Voltage Laboratory",
              image: "lab3.jpg",
              resources: "100 kV AC Testing set, 100 kV DC Testing set,60 kV Automatic oil Testing Kit, vertical-horizontal sphere Gap, Insulator Testing Set",
              facilities: "Impulse Tester"
            },
            {
              name: "Control System Laboratory",
              image: "lab4.jpg",
              resources: "D.C.M-G set, Synchro-Transmitter & Receiver, Single Phase transformer for scott connection, DSO",
              facilities: "Stepper Motor, Regulated D.C. Power Supply"
            },
            {
              name: "Electrical Measurement Laboratory",
              image: "lab5.jpg",
              resources: "Three Phase Induction motor, Regulated D.C. Power Supply",
              facilities: "Various types of bridge for measurement of inductance & capacitance"
            },
            {
              name: "Basic Electrical Engineering Laboratory",
              image: "lab6.jpg",
              resources: "Single Phase transformer, Three Phase Auto Transformer, Regulated D.C. Power Supply",
              facilities: "R-L-C kit, Resistive Load Bank"
            },
            {
              name: "Computer Laboratory",
              image: "lab7.jpg",
              resources: "20 Desktop Computers, MATLAB, PSCAD, ETAP software's, d-SPACE Hardware kit",
              facilities: ""
            },
            {
              name: "Microprocessor and Microcontroller Laboratory",
              image: "lab8.jpg",
              resources: "Microprocessor & Microcontroller Kit with power supply",
              facilities: ""
            },
            {
              name: "PLC & Factory Automation Laboratory",
              image: "lab9.jpg",
              resources: "Basic Fabrication Facility, Desktop Computers",
              facilities: "MATLAB, PSCAD, ETAP software, Transformer with various toppings, Induction Motor"
            },
            {
              name: "Power Quality Laboratory",
              image: "lab10.jpg",
              resources: "Power Quality Analyzer, Data Acquisition System, DSO, etc.",
              facilities: "MATLAB, PSCAD, Transformer with various toppings, Induction Motor"
            },
            {
              name: "Electrical Power Research Lab",
              image: "lab11.jpg",
              resources: "Lab VIEW, Data Acquisition system (NI & AD Link), CT/PT's., Compact-Rio, PCB Design facilities, Desktop Computers",
              facilities: ""
            },
            {
              name: "Centre of Excellence in Electric Vehicle",
              image: "lab12.jpg",
              resources: "Trainer Kits for BLDC Drive, Simulators, Battery Management Systems, Solar based Charging Station, Conference room, WiFi connectivity",
              facilities: ""
            },
            {
              name: "Center of Excellence in Renewable Energy",
              image: "lab13.jpg",
              resources: "Solar Research Lab, Sun Simulators, Battery Assembly setup, Solar panel Production facility, Solar Product Display gallery, Solar Radiation measurement facility, etc.",
              facilities: ""
            }
          ].map((lab, index) => (
            <div key={index} className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0">
              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🔬</span>
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
                  {lab.facilities && (
                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed">{lab.facilities}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    'faculty': (
      <div className="space-y-10">
         <div className="text-center border-b border-gray-200 pb-6 mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
            <p className="text-gray-500 mt-2">Department of Electrical Engineering (Electronics & Power)</p>
         </div>

         <div className="grid gap-6 lg:grid-cols-2">
            {[
                { name: "Dr. S. R. Paraskar", role: "Professor & Head Electrical Engineering", area: ["Digital Protection of Transformer", "Facts & Power Quality", "Digital Signal Processing"], email: "hod_elpo@ssgmce.ac.in", email2: "srparaskar@ssgmce.ac.in", photo: srpPhoto },
                { name: "Mr. U. A. Jawadekar", role: "Associate Professor", area: ["Electrical Power System"], email: "uajawadekar@ssgmce.ac.in", phone: "+917020681041", photo: uajPhoto },
                { name: "Dr. Mrs. A.U. Jawadekar", role: "Associate Professor", area: ["Electrical Engineering", "Control System"], email: "aujawadekar@ssgmce.ac.in", phone: "+919766824978", photo: aujPhoto },
                { name: "Dr. S. S. Jadhao", role: "Associate Professor", area: ["Power Quality and Custom Power Devices", "AI Applications in Power System"], email: "ssjadhao@ssgmce.ac.in", phone: "+919423056082", photo: ssjPhoto },
                { name: "Mr. P. R. Bharambe", role: "Assistant Professor", area: ["Electrical Machines", "Power System Protection"], email: "prbharambe@ssgmce.ac.in", phone: "+917020852595", photo: prbPhoto },
                { name: "Dr. R. S. Kankale", role: "Assistant Professor", area: ["Power Quality", "Distributed Generation", "Power System Protection & High Voltage Engineering"], email: "rskankale@ssgmce.ac.in", phone: "+918275589413", photo: rskPhoto },
                { name: "Mr. M. R. Chavan", role: "Assistant Professor", area: ["Electrical Power System", "Renewable Energy", "Energy Auditing"], email: "mrchavan@ssgmce.ac.in", phone: "+918983442243", photo: mrcPhoto },
                { name: "Mr. R. K. Mankar", role: "Assistant Professor", area: ["Electrical Power System"], email: "rkmankar@ssgmce.ac.in", phone: "+917385718749", photo: rkmPhoto },
                { name: "Dr. G. N. Bonde", role: "Assistant Professor", area: ["Electrical Power System", "Power Quality"], email: "gnbonde@ssgmce.ac.in", phone: "+918021218447", photo: gnbPhoto },
                { name: "Mr. V. S. Karale", role: "Assistant Professor", area: ["Electrical Power System", "Power Quality"], email: "vskarale@ssgmce.ac.in", phone: "+918983160119", photo: vskPhoto },
                { name: "Mr. B. S. Rakhonde", role: "Assistant Professor", area: ["Electrical Power System", "Power Quality"], email: "bsrakhonde@ssgmce.ac.in", phone: "+919545956114", photo: bsrPhoto },
                { name: "Mr. P. R. Dhabe", role: "Assistant Professor", area: ["Electrical Power System", "Battery Management System", "Electrical Energy Storage Devices"], email: "prdhabe@ssgmce.ac.in", phone: "+919822190165", photo: prdPhoto },
                { name: "Mr. V. A. Nagpure", role: "Assistant Professor", area: ["Electrical Power System"], email: "vanagpure@ssgmce.ac.in", phone: "+917350832344", photo: vanPhoto },
                { name: "Mr. G. D. Khadsane", role: "Assistant Professor", area: ["Electrical Machine", "Power Quality", "Distributed Generation", "Power System Protection", "Power Electronics"], email: "gdkhadsane@ssgmce.ac.in", phone: "+919356913154", photo: gdkPhoto }
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
                                {fac.email2 && (
                                    <a href={`mailto:${fac.email2}`} className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                                        <FaEnvelope className="mr-2 text-gray-400" /> {fac.email2}
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

    'pride': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
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

        {/* University Toppers */}
        {researchTab === 'toppers' && (
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
                    { year: '2025', name: 'Vaishnavi Keshav Pesode', rank: 'II', cgpa: '9.28' },
                    { year: '2024', name: 'Sakshi Raju Sondkar', rank: 'I', cgpa: '8.98' },
                    { year: '2024', name: 'Chetan Ashokrao Ambalkar', rank: 'II', cgpa: '8.93' },
                    { year: '2024', name: 'Kalyani Dilip Raut', rank: 'III', cgpa: '8.90' },
                    { year: '2024', name: 'Gauri Santosh Murkar', rank: 'IV', cgpa: '8.88' },
                    { year: '2023', name: 'Harsha Dyaneshwar Lande', rank: 'III', cgpa: '8.97' },
                    { year: '2023', name: 'Pranali Vijay Kharate', rank: 'V', cgpa: '8.91' },
                    { year: '2023', name: 'Tejaswini Sanjay Masane', rank: 'VI', cgpa: '8.88' },
                    { year: '2023', name: 'Harshal Chakradhar Shegokar', rank: 'VI', cgpa: '8.88' },
                    { year: '2023', name: 'Prajwal Devndra Thakare', rank: 'VII', cgpa: '8.84' },
                    { year: '2023', name: 'Abhishek Vinode Bathe', rank: 'VIII', cgpa: '8.71' },
                    { year: '2022', name: 'Ms. Pallavi Dayaram Arbat', rank: 'I', cgpa: '9.79' },
                    { year: '2022', name: 'Mr. Divyanshu Raj', rank: 'II', cgpa: '9.64' },
                    { year: '2022', name: 'Ms. Manasi Udaysingh Rajput', rank: 'III', cgpa: '9.53' },
                    { year: '2022', name: 'Ms. Krutika Ganesh Akhare', rank: 'VI', cgpa: '9.38' },
                    { year: '2022', name: 'Mr. Krunal Ajay Rokade', rank: 'VII', cgpa: '9.36' },
                    { year: '2022', name: 'Ms. Ashwini Prakash Wagh', rank: 'VIII', cgpa: '9.34' },
                    { year: '2022', name: 'Ms. Shivani Shridhar Manatkar', rank: 'IX', cgpa: '9.30' },
                    { year: '2022', name: 'Ms. Ashwini Mahadev Rajagur', rank: 'IX', cgpa: '9.30' },
                    { year: '2022', name: 'Mr. Pradip Samdhan Tayde', rank: 'IX', cgpa: '9.30' },
                    { year: '2022', name: 'Ms. Neha Rajendra Deshmukh', rank: 'X', cgpa: '9.28' },
                    { year: '2022', name: 'Mr. Rushikesh Dinesh Bodade', rank: 'X', cgpa: '9.28' }
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
        {researchTab === 'alumni' && (
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
                    { name: 'Uday Sampat', position: 'Vice President', org: 'ABB India Ltd., Nashik' },
                    { name: 'Sandeep Narale', position: 'Vice President', org: 'Adani Electricity, Mumbai' },
                    { name: 'Gajanan Kale', position: 'Chief Executive Officer', org: 'Tata Power Western Odisha Distribution Limited, Sambalpur' },
                    { name: 'Dhananjay Sambare', position: 'Director - Commerial', org: 'DSM Energy, Melbourne, Victoria, Australia' },
                    { name: 'Shreerang Deshmukh', position: 'Electrical Manager', org: 'Megaplast India Pvt. Ltd., Daman' },
                    { name: 'Nitinkumar Gaikwad', position: 'Business Relationship Manager', org: 'TCS Ltd, Frankfurt, Hesse, Germany.' },
                    { name: 'Pushpen Chandra', position: 'Mejor', org: 'Indian Army, Ranchi' },
                    { name: 'Kinnari Mehta', position: 'Marketing Manager', org: 'w. r. grace & Conn, Columbia, USA' },
                    { name: 'Shivdeep Lande', position: 'IPS', org: 'DIG - Kosi Division Bihar' }
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
        {researchTab === 'gate' && (
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
                    { year: '2022', sr: '1', name: 'Priyatosh Chatterjee', score: '32.00', category: 'OPEN' },
                    { year: '2021', sr: '1', name: 'Mithilesh Sharad Joshi', score: '53.33', category: 'OPEN' },
                    { year: '2021', sr: '2', name: 'Prajwal Balu Range', score: '29.00', category: 'OBC' },
                    { year: '2021', sr: '3', name: 'Dhiraj Mukundrao Gaygol', score: '67.00', category: 'OBC' },
                    { year: '2021', sr: '4', name: 'Akshay Chandrakant Borle', score: '37.67', category: 'OBC' },
                    { year: '2020', sr: '1', name: 'Mr. Ankush Bhople', score: '33.67', category: 'OBC' },
                    { year: '2020', sr: '2', name: 'Mr. Prajwal Sontakke', score: '32.00', category: 'OBC' },
                    { year: '2020', sr: '3', name: 'Mr. Rupesh Bali', score: '22.67', category: 'SC/ST' },
                    { year: '2020', sr: '4', name: 'Jayshree Suresh Mali', score: '46.67', category: 'OBC' },
                    { year: '2020', sr: '5', name: 'Akanksha Vishwadeep Waghmare', score: '26.33', category: 'SC/ST' },
                    { year: '2020', sr: '6', name: 'Neha Pralhad Wawge', score: '31.67', category: 'OBC' },
                    { year: '2020', sr: '7', name: 'Bhumika Arvind Akade', score: '32.67', category: 'OBC' },
                    { year: '2020', sr: '8', name: 'Vaibhav Purushottam Bhutada', score: '43.33', category: 'OPEN' },
                    { year: '2019', sr: '1', name: 'Jayshree Suresh Mali', score: '43.67', category: 'OBC' },
                    { year: '2019', sr: '2', name: 'Kaustubh Suresh Badhe', score: '39.33', category: 'OBC' },
                    { year: '2019', sr: '3', name: 'Krushna Sudhakarrao Kokate', score: '35.67', category: 'OBC' },
                    { year: '2017', sr: '1', name: 'Harshal P. Muley', score: '41.59', category: 'OBC' },
                    { year: '2017', sr: '2', name: 'Sanket D. Ajmire', score: '27.11', category: 'OBC' },
                    { year: '2017', sr: '3', name: 'Nageshwar A. Chaudekar', score: '25.38', category: 'OBC' }
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

    'student-chapter': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Student Chapter (IEI)
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">The Institution of Engineers (India)</h4>
              <h5 className="text-lg font-semibold text-ssgmce-blue mb-4">Department of Electrical Engineering Students' Chapter :</h5>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                In order to provide a platform to our students to explore their hidden talent & to keep them abreast with the latest 
                technology, The Institution of Engineers (India) - Department of Electrical Engineering Students' Chapter called as IEI - 
                Electrical is formed.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h5 className="text-red-600 font-bold text-lg mb-3">Objectives :</h5>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>To Encourage the students to develop their intra-personal & inter-personal skills.</li>
                  <li>To Develop a healthy competitive spirit by competing with students of other departments & colleges</li>
                  <li>To arrange the expert lectures, workshops, Hands on training competitions and carrier guidance programs for the students.</li>
                  <li>To provide a platform to interact with the eminent personalities from industries and organizations, students from other reputed Engineering Institutes or colleges .</li>
                  <li>To carry out feedback analysis after execution of the program which helps to improve the execution of further programs.</li>
                </ul>
              </div>

              <p className="text-center text-lg font-semibold text-ssgmce-blue italic">
                IEI - Electrical helps the students to become a Perfect Technocrat with Good Human Values
              </p>

              <div className="mt-6 text-center">
                <a 
                  href="https://www.ssgmce.ac.in/IEI_ELPO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-ssgmce-blue text-white font-semibold rounded-lg hover:bg-ssgmce-dark-blue transition-colors shadow-md hover:shadow-lg"
                >
                  Visit IEI Web Portal for more details
                  <FaAngleRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    'projects': (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          UG Projects
        </h3>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {['2024-25', '2023-24'].map((year) => (
            <button
              key={year}
              onClick={() => setProjectYear(year)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                projectYear === year
                  ? 'bg-[#003366] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              UG Project {year}
            </button>
          ))}
        </div>

        {/* Projects for 2024-25 */}
        {projectYear === '2024-25' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">Group No.</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">Project Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { no: '1.', title: 'Simulation Evaluation of lightning and non-lightning faults identification of transmission line' },
                    { no: '2.', title: 'Solar Sea water Desalination Machine with RO UV Purifier' },
                    { no: '3.', title: 'Design and Fabrication of control Panel for multi stack parking system' },
                    { no: '4.', title: 'Design of Bi-directional DC-DC driver for electric vehicle' },
                    { no: '5.', title: 'Modeling and fabrication of solar powered smart Air Cooler' },
                    { no: '6.', title: 'The future of Agriculture: Innovation in Agriculture Technology' },
                    { no: '7.', title: 'Smart Helmet for Visually impaired people Using Arduino' },
                    { no: '8.', title: 'Automatic Power Factor Correction with all measurements over LORA wireless Communication' },
                    { no: '9.', title: 'IOT based smart Saline Bottle Monitoring System' },
                    { no: '10.', title: 'Wire-Less Charger for light electric Vehicle' },
                    { no: '11.', title: 'Smart Solar panel Monitoring using IOT based and Wireless Data Transmission' },
                    { no: '12.', title: 'Indoor navigation system for visually Impaired' },
                    { no: '13.', title: 'Transmission line faults event reorganization by using optimal machine learning approach' }
                  ].map((project, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">{project.no}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{project.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Projects for 2023-24 */}
        {projectYear === '2023-24' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">Group No.</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">Project Title</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { no: '1.', title: 'Energy Audit case study of tobacco factory collaboration with FASTTRACK PACKERS PVT. LTD.' },
                    { no: '2.', title: 'The Green breathfor survival of mankind in 21st century using sustainable air purifier' },
                    { no: '3.', title: 'Development of Smart Home Automation System.' },
                    { no: '4.', title: 'Fruit Plucking Arm' },
                    { no: '5.', title: 'Electrical Heavy Vehicle Transportation Highway (By Catenary System)' },
                    { no: '6.', title: 'Discrimination of magnetizing inrush current and internal fault in Transformer.' },
                    { no: '7.', title: 'Development of IOT Based Smart Energy Meter.' },
                    { no: '8.', title: 'Detection and Classification of Underlying Reasons of Power Quality Disturbance Using Signal Processing and Soft Computing Techniques' },
                    { no: '9.', title: 'Automatic Weighing and Packaging Machine' },
                    { no: '10.', title: 'An Implementation of Renewable Energy Based Modeling and Control of Three Phase Hybrid ⚡ Microgrid System' },
                    { no: '11.', title: 'Design of Arduino based Seed Dryer System using Solar Energy.' },
                    { no: '12.', title: 'Development of algorithm for Crop monitoring robot' },
                    { no: '13.', title: 'IOT Based Seed Dryer' }
                  ].map((project, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">{project.no}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{project.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
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
    <GenericPage title="Electrical Engineering (Electronics & Power)" backgroundImage={electricalBanner}>
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

export default Electrical;


