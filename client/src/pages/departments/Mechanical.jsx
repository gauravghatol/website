import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import {
  defaultFaculty as MECH_DEFAULTS,
  defaultPrideGate,
  defaultPrideToppersBE,
  defaultPrideAlumni,
  defaultActivities,
  defaultNewsletters,
  defaultAchievements,
  defaultInnovativePractices,
  defaultMechPatents,
  defaultMechPublications,
  defaultMechCopyrights,
  defaultMechInstitutePatents,
  defaultLearningResources,
  defaultNBAResources,
} from "../../data/mechanicalDefaults";
import { defaultPlacements } from "../../data/mechPlacements";
import { defaultMechInternships } from "../../data/mechInternships";
import mechanicalBanner from "../../assets/images/departments/mechanical/Mechnical banner.png";

// Industrial Visit Photos
import ivSanjeevVertex2024 from "../../assets/images/departments/mechanical/industrial-visits/sanjeev_vertex_sambhajinagar_2024.jpeg";
import ivTooltech2023 from "../../assets/images/departments/mechanical/industrial-visits/tooltech_sambhajinagar_2023.jpeg";
import ivParasThermal2022 from "../../assets/images/departments/mechanical/industrial-visits/paras_thermal_2022.jpg";
import ivHindustanHardy2020 from "../../assets/images/departments/mechanical/industrial-visits/hindustan_hardy_nashik_2020.jpg";
import ivBosch2020 from "../../assets/images/departments/mechanical/industrial-visits/bosch_nashik_2020.jpg";
import ivGreavesCotton2019 from "../../assets/images/departments/mechanical/industrial-visits/greaves_cotton_aurangabad_2019.jpg";
import ivAutoexpo2018 from "../../assets/images/departments/mechanical/industrial-visits/autoexpo_aurangabad_2018.jpeg";
import ivYantra2019 from "../../assets/images/departments/mechanical/industrial-visits/yantra_aurangabad_2019.jpg";
import ivVinodrai2018 from "../../assets/images/departments/mechanical/industrial-visits/vinodrai_aurangabad_2018.jpg";
import ivSiemens2018 from "../../assets/images/departments/mechanical/industrial-visits/siemens_aurangabad_2018.jpeg";
import ivFlowtech2018 from "../../assets/images/departments/mechanical/industrial-visits/flowtech_aurangabad_2018.jpeg";
import ivGreavesCotton2018 from "../../assets/images/departments/mechanical/industrial-visits/greaves_cotton_aurangabad_2018.jpeg";

import {
  FaLaptopCode,
  FaBullseye,
  FaUserTie,
  FaFlask,
  FaAward,
  FaAngleRight,
  FaIndustry,
  FaUniversity,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaTrophy,
  FaChartLine,
  FaLightbulb,
  FaProjectDiagram,
  FaCalendarAlt,
  FaDownload,
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaImages,
  FaSearchPlus,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// HOD Photo
import hodPhoto from "../../assets/images/departments/mechanical/HOD_MECH.jpg";

// Faculty Photos
import SPT from "../../assets/images/departments/mechanical/faculty/SPT.jpg";
import VKThute from "../../assets/images/departments/mechanical/faculty/VKThute.jpg";
import JGKhan from "../../assets/images/departments/mechanical/faculty/Dr_JGKhan.jpg";
import MBB from "../../assets/images/departments/mechanical/faculty/MBB.jpg";
import CVPatil from "../../assets/images/departments/mechanical/faculty/CVPatil.jpg";
import ASB from "../../assets/images/departments/mechanical/faculty/ASB.jpg";
import NBBorkar from "../../assets/images/departments/mechanical/faculty/NBBorkar.jpg";
import NHK from "../../assets/images/departments/mechanical/faculty/NHK.jpeg";
import SQSyed from "../../assets/images/departments/mechanical/faculty/SQSyed.jpg";
import PTPatokar from "../../assets/images/departments/mechanical/faculty/PTPatokar.jpg";
import KVC from "../../assets/images/departments/mechanical/faculty/KVC.jpg";
import PiyushDalke from "../../assets/images/departments/mechanical/faculty/PiyushDalke.jpg";
import KRDudhe from "../../assets/images/departments/mechanical/faculty/KRDhudhe.jpg";
import SPJ from "../../assets/images/departments/mechanical/faculty/SPJ.jpg";
import GSWahile from "../../assets/images/departments/mechanical/faculty/ASB.jpg"; // Using placeholder
import VTMhaske from "../../assets/images/departments/mechanical/faculty/VTMhaske.jpg";
import ParagJadhav from "../../assets/images/departments/mechanical/faculty/Parag Jadhav.png";

// Photo map for resolving mechanical faculty photo string references
const mechPhotoMap = {
  SPT,
  VKT: VKThute,
  JGK: JGKhan,
  MBB,
  CVP: CVPatil,
  ASB,
  NBB: NBBorkar,
  NHK,
  SQS: SQSyed,
  PTP: PTPatokar,
  KVC,
  PD: PiyushDalke,
  KRD: KRDudhe,
  SPJ,
  GSW: GSWahile,
  VTM: VTMhaske,
  PJ: ParagJadhav,
};

// Resolve mechanical faculty photos from string references to actual imports
const resolvedMechFaculty = MECH_DEFAULTS.map((f) => ({
  ...f,
  photo: mechPhotoMap[f.photo] || f.photo,
}));

// Staff Photos
import GRJodh from "../../assets/images/departments/mechanical/Staff/Gopal Jodh.jpg";
import SDDeshmukh from "../../assets/images/departments/mechanical/Staff/SDD.jpg";
import GAWayzode from "../../assets/images/departments/mechanical/Staff/GAW.jpg";
import ROBedre from "../../assets/images/departments/mechanical/Staff/ROB.jpg";
import PMDeshmukh from "../../assets/images/departments/mechanical/Staff/P M Deshmukh.jpeg";
import NDKamavisdar from "../../assets/images/departments/mechanical/Staff/NDK.jpg";
import GDIngle from "../../assets/images/departments/mechanical/Staff/GDI.jpg";
import VHAkhare from "../../assets/images/departments/mechanical/Staff/VHA.jpg";
import VSBharate from "../../assets/images/departments/mechanical/Staff/VSB.jpg";
import OSBhalerao from "../../assets/images/departments/mechanical/Staff/OSBhalerao.jpeg";
import DBWadode from "../../assets/images/departments/mechanical/Staff/DBW.jpg";
import PMDandwate from "../../assets/images/departments/mechanical/Staff/PMDandwate.jpg";
import MRDhoke from "../../assets/images/departments/mechanical/Staff/MRDhoke.jpg";
import VSBharsakale from "../../assets/images/departments/mechanical/Staff/VSBharsakale.jpg";
import MPRajurkar from "../../assets/images/departments/mechanical/Staff/MPRajurkar.jpg";
import VSDhage from "../../assets/images/departments/mechanical/Staff/VSDhage.jpg";
import RJOimbe from "../../assets/images/departments/mechanical/Staff/RJOimbe.jpg";
import VRRahate from "../../assets/images/departments/mechanical/Staff/VRRahate.jpg";
import BSSonone from "../../assets/images/departments/mechanical/Staff/BSSonone.jpg";
import GRPayghan from "../../assets/images/departments/mechanical/Staff/GRPayghan.jpg";
import AADhage from "../../assets/images/departments/mechanical/Staff/AADhage.jpg";
import RNPachade from "../../assets/images/departments/mechanical/Staff/RNPachade.jpg";

const MECH_DEFAULT_FACULTY = resolvedMechFaculty;

const Mechanical = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("patents");
  const [projectYear, setProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2024-25");
  const researchYears = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
  ];
  const [placementYear, setPlacementYear] = useState(null);
  const [prideTab, setPrideTab] = useState("gate");
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);
  const [ivLightbox, setIvLightbox] = useState(null);
  const [internshipYear, setInternshipYear] = useState("2023-24");

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-mechanical");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
  };

  const updateFacultyMember = (index, field, value) => {
    const faculty = JSON.parse(
      JSON.stringify(t("templateData.faculty", MECH_DEFAULT_FACULTY)),
    );
    faculty[index] = { ...faculty[index], [field]: value };
    updateField("templateData.faculty", faculty);
  };

  // Activity helper
  const updateActivity = (idx, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("activities", defaultActivities)));
    arr[idx][field] = value;
    updateData("activities", arr);
  };

  // Newsletter helper
  const updateNewsletter = (type, index, field, value) => {
    if (type === "latest") {
      const latest = JSON.parse(
        JSON.stringify(t("newsletters_latest", defaultNewsletters.latest)),
      );
      latest[field] = value;
      updateData("newsletters_latest", latest);
    } else {
      const archives = JSON.parse(
        JSON.stringify(t("newsletters_archives", defaultNewsletters.archives)),
      );
      archives[index][field] = value;
      updateData("newsletters_archives", archives);
    }
  };

  // Pride section helper functions
  const updatePrideGate = (yearIdx, studentIdx, cellIdx, val) => {
    const newGate = JSON.parse(
      JSON.stringify(t("pride.gate", defaultPrideGate)),
    );
    newGate[yearIdx].students[studentIdx][cellIdx] = val;
    updateData("pride.gate", newGate);
  };

  const updatePrideToppers = (key, yearIdx, recordIdx, field, val) => {
    const newData = JSON.parse(
      JSON.stringify(t(`pride.toppers.${key}`, defaultPrideToppersBE)),
    );
    newData[yearIdx].records[recordIdx][field] = val;
    updateData(`pride.toppers.${key}`, newData);
  };

  const updateOverviewTable = (path, defaultArr, rowIdx, cellIdx, val) => {
    const newData = JSON.parse(JSON.stringify(t(path, defaultArr)));
    newData[rowIdx][cellIdx] = val;
    updateData(path, newData);
  };

  // Patents & Publications helper functions
  const updatePatent = (year, index, field, value) => {
    const patents = JSON.parse(
      JSON.stringify(
        t(`research.patents.${year}`, defaultMechPatents[year] || []),
      ),
    );
    patents[index] = { ...patents[index], [field]: value };
    updateData(`research.patents.${year}`, patents);
  };

  const updatePublication = (year, index, field, value) => {
    const publications = JSON.parse(
      JSON.stringify(
        t(`research.publications.${year}`, defaultMechPublications[year] || []),
      ),
    );
    publications[index] = { ...publications[index], [field]: value };
    updateData(`research.publications.${year}`, publications);
  };

  useEffect(() => {
    if (activeTab === "student-projects") {
      window.scrollTo(0, 0);
      setProjectYear("2024-25");
    }
  }, [activeTab]);

  const academicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "vision-mission", label: "Vision, Mission, PEO & PSO" },
    { id: "course-outcomes", label: "Course Outcomes" },
    { id: "curriculum", label: "Scheme and Syllabus" },
    { id: "laboratories", label: "Infrastructure and Laboratories" },
    { id: "pride", label: "Pride of the Department" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Curricular Activities" },
    { id: "newsletter", label: "Newsletter" },
    { id: "achievements", label: "Achievements" },
    { id: "learning-resources", label: "Learning Resources" },
    { id: "nba-resources", label: "NBA Resource Material" },
    { id: "staff", label: "Staff @ Department" },
    { id: "student-projects", label: "UG Projects" },
    { id: "practices", label: "Innovative Practice" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const industryLinks = [
    { id: "visits", label: "Industrial Visits" },
    { id: "mous", label: "MoUs" },
    { id: "patents", label: "Patent & Publication" },
    { id: "internships", label: "Internship and Training" },
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
              {isEditing && (
                <div className="absolute top-2 right-2 z-10 bg-white/90 p-2 rounded shadow-lg">
                  <span className="text-xs font-bold text-gray-600 block mb-1">
                    Video URL:
                  </span>
                  <EditableText
                    value={t(
                      "templateData.overview.videoUrl",
                      "https://www.youtube-nocookie.com/embed/A4--_2sDgaQ",
                    )}
                    onSave={(val) =>
                      updateField("templateData.overview.videoUrl", val)
                    }
                    className="text-sm w-64"
                  />
                </div>
              )}
              <iframe
                className="w-full h-full"
                src={t(
                  "templateData.overview.videoUrl",
                  "https://www.youtube-nocookie.com/embed/A4--_2sDgaQ",
                )}
                title="Department of Mechanical Engineering"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
              <div>
                <EditableText
                  value={t(
                    "templateData.overview.para1",
                    "The Department of Mechanical Engineering was established in year 1983. The department offers B.E. in Mechanical Engineering and M.E. in Advanced Manufacturing Systems. The department has approved research center for Ph.D.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para1", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>
              <div>
                <EditableText
                  value={t(
                    "templateData.overview.para2",
                    "The department has well qualified, experienced and dedicated faculty members. The department has well equipped laboratories with latest equipment and software. The department organizes various activities like expert lectures, workshops, industrial visits, etc. for holistic development of students.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para2", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>
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
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Course Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    Bachelor of Engineering
                  </td>
                </tr>
                {[
                  [
                    "Degree",
                    "Bachelor of Engineering (Mechanical Engineering)",
                  ],
                  ["Duration", "4 Year(8 Semesters) (Full time)"],
                  ["Intake", "60 Students per year"],
                  ["Establishment", "Year: 1993"],
                  ["NBA Status", "Five Time Accredited & Valid upto 2025."],
                ].map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      {label}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      {val}
                    </td>
                  </tr>
                ))}

                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4"
                  >
                    Master of Engineering
                  </td>
                </tr>
                {[
                  [
                    "Specialization",
                    "M. E. Advanced Manufacturing & Mechanical Systems Design",
                  ],
                  ["Duration", "2 Year(4 Semesters) (Full time)"],
                  ["Intake", "24 Students per year"],
                  ["Establishment", "Year: 2012"],
                ].map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      {label}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      {val}
                    </td>
                  </tr>
                ))}

                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    Ph. D in Mechanical Engineering
                  </td>
                </tr>
                {[
                  ["Duration", "3 Years"],
                  ["Intake", "05 Students"],
                ].map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      {label}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-ssgmce-blue font-medium">Dr. S. P. Trikal</p>
            <p className="text-sm text-gray-500">
              Head, Department of Mechanical Engineering
            </p>
          </div>
        </div>
      </div>
    ),
    "vision-mission": (
      <div className="space-y-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {["vision", "mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setVmTab(tab)}
                className={`px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all relative ${
                  vmTab === tab
                    ? "text-white bg-[#003366]"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-8 min-h-[160px] flex items-center w-full">
            {vmTab === "vision" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-4 w-full"
              >
                <div className="mt-1 text-ssgmce-orange text-2xl flex-shrink-0">
                  ➤
                </div>
                <div className="text-lg text-gray-700 leading-relaxed font-medium flex-1">
                  <EditableText
                    value={t(
                      "vision",
                      "To develop quality mechanical engineers, researchers and entrepreneurs with commitment for excellence, learning enthusiasm, ethical behavior and serving the society.",
                    )}
                    onSave={(val) => updateField("vision", val)}
                    multiline
                  />
                </div>
              </motion.div>
            )}
            {vmTab === "mission" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4 w-full"
              >
                {[
                  "To impart fundamental knowledge of Mechanical Engineering to the students through excellent/best Teaching learning experience and provide a platform for Higher Education.",
                  "To offer Industry Institute interface, interdisciplinary knowledge, and value-based education for the overall development of students.",
                  "To enhance research, next-gen skills, and entrepreneurship abilities of the students to solve social problems.",
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
              { id: "peo", label: "Program Educational Objectives" },
              { id: "po", label: "Program Outcomes" },
              { id: "pso", label: "Program Specific Objectives" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPoTab(tab.id)}
                className={`px-6 py-4 font-bold text-sm transition-all relative whitespace-nowrap ${
                  poTab === tab.id
                    ? "text-white bg-[#003366]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-8">
            {poTab === "peo" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {[
                  "Engage in creating, designing, manufacturing, analyzing, testing, and maintaining the systems of Mechanical Engineering and allied branches of engineering.",
                  "Solve the problems of societal importance by applying fundamentals of Mechanical engineering & pursue higher education, research in the domain of Mechanical.",
                  "Imbibe ethical values & skills for lifelong learning to work effectively as a part of a team member, leading a team in a multidisciplinary setup.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {poTab === "pso" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {[
                  {
                    title: "PSO1: Manufacturing Engineering",
                    desc: "An ability to apply the principles of manufacturing engineering and technology to develop techno commercial skills.",
                  },
                  {
                    title: "PSO2: Thermal Engineering",
                    desc: "An ability to apply fundamentals to design and analyze the thermo-hydraulic systems.",
                  },
                  {
                    title: "PSO3: Design Engineering",
                    desc: "An ability to design and analyze mechanical components and processes to predict the behavior of engineering systems.",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-blue-900 text-xl">➤</div>
                      <div>
                        <p className="font-bold text-gray-900">{item.title}</p>
                        <p className="text-gray-700 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {poTab === "po" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {[
                    {
                      t: "Engineering knowledge",
                      d: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
                    },
                    {
                      t: "Problem analysis",
                      d: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.",
                    },
                    {
                      t: "Design/development of solutions",
                      d: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
                    },
                    {
                      t: "Conduct investigations of complex problems",
                      d: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
                    },
                    ...(showAllPos
                      ? [
                          {
                            t: "Modern tool usage",
                            d: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.",
                          },
                          {
                            t: "The engineer and society",
                            d: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.",
                          },
                          {
                            t: "Environment and sustainability",
                            d: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
                          },
                          {
                            t: "Ethics",
                            d: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.",
                          },
                          {
                            t: "Individual and team work",
                            d: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.",
                          },
                          {
                            t: "Communication",
                            d: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
                          },
                          {
                            t: "Project management and finance",
                            d: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
                          },
                          {
                            t: "Life-long learning",
                            d: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
                          },
                        ]
                      : []),
                  ].map((po, i) => (
                    <div
                      key={i}
                      className="text-gray-700 leading-relaxed text-sm"
                    >
                      <strong className="text-gray-900 block mb-1 text-base">
                        {po.t}:
                      </strong>
                      {po.d}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowAllPos(!showAllPos)}
                  className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mt-2"
                >
                  {showAllPos ? "Read Less" : "Read More..."}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    ),

    "course-outcomes": (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Course Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of B.E. Mechanical
            Engineering and M.E. Advanced Manufacturing & Mechanical Systems
            Design
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              B.E. Mechanical Engineering - Course Outcomes
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {/* B.E. Semester-III */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem3" ? null : "be-sem3",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-III
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem3" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem3" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 3ME01 Engineering Mathematics - III */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME01 Engineering Mathematics - III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the knowledge linear differential equation to
                            solve problems.
                          </li>
                          <li>
                            Apply Laplace transform to solve differential
                            equation.
                          </li>
                          <li>
                            Apply the concept of Partial differential equation,
                            probability and statistics.
                          </li>
                          <li>Apply the knowledge of complex analysis.</li>
                          <li>Apply the knowledge of Numerical analysis.</li>
                          <li>
                            Apply the knowledge of vector calculus to solve
                            physical problems.
                          </li>
                        </ol>
                      </div>

                      {/* 3ME02 Manufacturing Processes */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME02 Manufacturing Processes
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the working principles of basic
                            manufacturing processes.
                          </li>
                          <li>
                            Apply the knowledge of casting processes for the
                            specified working conditions.
                          </li>
                          <li>
                            Analyze the various causes of casting defects to
                            provide remedial action.
                          </li>
                          <li>
                            Apply the knowledge of various forming processes for
                            the given operating conditions.
                          </li>
                          <li>
                            Apply the knowledge of basic and advance welding
                            processes for detection and prevention of welding
                            defects.
                          </li>
                        </ol>
                      </div>

                      {/* 3ME03 Mechanics of Materials */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME03 Mechanics of Materials
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Determine stresses in uniaxial tension and
                            compression conditions.
                          </li>
                          <li>
                            Draw SFD, BMD and calculate bending stresses in
                            beams.
                          </li>
                          <li>
                            Apply torsion theory to shafts and helical springs.
                          </li>
                          <li>
                            Determine stresses in thin, thick cylinders and thin
                            spherical shells.
                          </li>
                          <li>
                            Calculate strain energy and principal stresses given
                            loading conditions.
                          </li>
                          <li>
                            Determine deflection of beams under various loading
                            conditions.
                          </li>
                        </ol>
                      </div>

                      {/* 3ME04 Engineering Thermodynamics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME04 Engineering Thermodynamics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate the basic concept of thermodynamics,
                            thermodynamic systems, work and heat
                          </li>
                          <li>
                            Apply first law of thermodynamics to flow processes.
                          </li>
                          <li>
                            Apply first law of thermodynamics to Non-flow
                            processes.
                          </li>
                          <li>
                            Apply second law of thermodynamics and explain
                            concept of entropy.
                          </li>
                          <li>
                            Explain the properties of steam, work done and heat
                            transfer during various thermodynamic processes.
                          </li>
                          <li>
                            Analyze thermodynamic cycles of various thermal
                            systems.
                          </li>
                        </ol>
                      </div>

                      {/* 3ME05 Fluid Mechanics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME05 Fluid Mechanics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Determine the values of various fluid properties at
                            rest and in motion
                          </li>
                          <li>
                            Apply general governing equations for fluid flow
                            problems
                          </li>
                          <li>
                            Apply the concept of Boundary layer theory for
                            internal and external fluid flow
                          </li>
                          <li>
                            Solve numerical based on force exerted by jet on
                            plate by principle of impulse momentum
                          </li>
                        </ol>
                      </div>

                      {/* 3ME10 Machine Drawing */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME10 Machine Drawing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the techniques of sectioning and
                            visualizing the objects
                          </li>
                          <li>Understand and sketch the missing views</li>
                          <li>
                            Develop surfaces of objects and apply knowledge
                            during their fabrication
                          </li>
                          <li>
                            Understand the concept of intersection of solid
                            objects
                          </li>
                          <li>
                            Apply the conventions for materials and parts used
                            in industries
                          </li>
                          <li>
                            Prepare the assembly and detail drawings of simple
                            machine components
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-IV */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem4" ? null : "be-sem4",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-IV
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem4" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem4" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 4ME01 Material Science */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ME01 Material Science
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate the basic concepts of metallurgy and
                            materials classification in details.
                          </li>
                          <li>
                            Illustrate the Iron-Carbon Equilibrium Diagram of
                            metal materials and application of composites
                          </li>
                          <li>
                            Understand different alloying elements and their
                            effects on properties of steels and different types
                            of alloys and their application
                          </li>
                          <li>
                            Classify different types of cast iron, non-ferrous
                            metal and alloys and their use, properties and
                            applications
                          </li>
                          <li>
                            Explain various principles of heat treatment used in
                            metallurgy
                          </li>
                          <li>
                            Explain various heat treatment processes, powder
                            metallurgy and their industrial applications.
                          </li>
                        </ol>
                      </div>

                      {/* 4ME02 Energy Conversion - I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ME02 Energy Conversion - I
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the different types of boiler and its
                            mounting and accessories.
                          </li>
                          <li>
                            Analyze the performance of boiler and Chimney.
                          </li>
                          <li>Analyze the performance of condensers.</li>
                          <li>Analyze the performance of steam turbines.</li>
                          <li>
                            Classify different types of the nuclear reactor.
                          </li>
                          <li>
                            Illustrate various renewable energy sources for
                            power generations.
                          </li>
                        </ol>
                      </div>

                      {/* 4ME03 Manufacturing Technology */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ME03 Manufacturing Technology
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the concept of mechanics of metal cutting for
                            various machining processes.
                          </li>
                          <li>
                            Analyze the process parameters for given Lathe
                            operations.
                          </li>
                          <li>
                            Apply the knowledge of drilling, boring and
                            broaching process to solve the related problems.
                          </li>
                          <li>
                            Apply the knowledge of milling and gear
                            manufacturing process to solve the related problems.
                          </li>
                          <li>
                            Apply the concept of grinding process for finishing
                            operations.
                          </li>
                          <li>
                            Identify the various unconventional machining
                            processes.
                          </li>
                        </ol>
                      </div>

                      {/* 4ME04 Basic Electrical Drives and Control */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ME04 Basic Electrical Drives and Control
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain electric drives and power electronics,
                            including motor heating and cooling.
                          </li>
                          <li>
                            Analyze characteristics of DC and special motors
                            like servo, stepper, and brushless DC
                          </li>
                          <li>
                            Evaluate principles and types of AC motors including
                            single and three-phase induction motors.
                          </li>
                          <li>
                            Apply speed control techniques for AC and DC motors
                            using thyristorized methods.
                          </li>
                          <li>
                            Identify and describe sensors and transducers in
                            mechatronic systems.
                          </li>
                          <li>
                            Select suitable electric drives for various
                            industrial applications.
                          </li>
                        </ol>
                      </div>

                      {/* 4ME05 Hydraulic and Pneumatic Systems */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ME05 Hydraulic and Pneumatic Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze different turbines for engineering
                            applications
                          </li>
                          <li>
                            Compare the pumping systems and examine their
                            performance characteristics
                          </li>
                          <li>
                            Identify various principles of compressible fluid
                            flow.
                          </li>
                          <li>Classify different types of hydraulic systems</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-V */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem5" ? null : "be-sem5",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-V
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem5" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem5" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 5ME01 Heat Transfer */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ME01 Heat Transfer
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the thermal systems by applying the
                            fundamental concept of conduction, convection and
                            radiation.
                          </li>
                          <li>
                            Apply the laws of radiations to heat transfer
                            systems
                          </li>
                          <li>
                            Evaluate the heat transfer coefficients for forced
                            and free convection.
                          </li>
                          <li>Analyze the performance of heat exchangers</li>
                        </ol>
                      </div>

                      {/* 5ME02 Metrology and Quality Control */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ME02 Metrology and Quality Control
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the concept of inspection, quality
                            control and its importance to industry.
                          </li>
                          <li>
                            Demonstrate the skills of controlling various out of
                            control processes using statistical quality control
                            tools.
                          </li>
                          <li>
                            Understand the importance of improving production
                            and productivity using Various Non Destructive
                            Testing approach.
                          </li>
                          <li>
                            Apply the knowledge of various measurement standards
                            and techniques in the industry to measure various
                            parameters related to metrology.
                          </li>
                        </ol>
                      </div>

                      {/* 5ME03 Kinematics of Machines */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ME03 Kinematics of Machines
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the concept of link, kinematic mechanisms,
                            machines, inversions and their applications.
                          </li>
                          <li>
                            Analyze the mechanisms and machines on the basis of
                            velocity and acceleration.
                          </li>
                          <li>
                            Apply the graphical and analytical methods for
                            analysis and synthesis of mechanisms for the
                            input-output coordination.
                          </li>
                          <li>
                            Explain the working principle and applications of
                            different types of brakes, clutches, dynamometers
                            and gear trains.
                          </li>
                        </ol>
                      </div>

                      {/* 5ME04 Measurement Systems */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ME04 Measurement Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify types, functional elements of Measurement
                            system and types of input to the measurement system.
                          </li>
                          <li>
                            Use the concepts of general performance
                            characteristics for choosing measuring instrument.
                          </li>
                          <li>
                            Demonstrate process of calibration of instruments.
                          </li>
                          <li>
                            Select and use instrument for various physical
                            quantities.
                          </li>
                        </ol>
                      </div>

                      {/* 5ME05 Industrial Robotics and Applications */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ME05 Industrial Robotics and Applications
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate Robot's anatomy, joints types, wrist
                            construction, robot standard configurations and
                            their work space.
                          </li>
                          <li>
                            Explain the construction and working of different
                            types of End Effectors.
                          </li>
                          <li>
                            Explain various robot drives, robot motion control
                            and its levels.
                          </li>
                          <li>
                            Explain various methods of teaching and programming
                            the robots.
                          </li>
                          <li>
                            Explain principle of working and applications of
                            different types of robot sensors.
                          </li>
                          <li>
                            Identify a particular type of robot depending on the
                            its application in manufacturing.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-VI */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem6" ? null : "be-sem6",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-VI
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem6" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem6" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 6ME01 Design of Machine Elements */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME01 Design of Machine Elements
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply principles and design considerations used in
                            machine design
                          </li>
                          <li>
                            Design different temporary and permanents joints for
                            static loading
                          </li>
                          <li>
                            Design shafts and couplings for various applications
                            for static loading
                          </li>
                          <li>
                            Design bearings for various applications and IC
                            engine parts
                          </li>
                          <li>
                            Utilize design data books in designing various
                            machine elements
                          </li>
                          <li>
                            Generate geometric model/drawings using dimensions
                            of designed machine elements
                          </li>
                        </ol>
                      </div>

                      {/* 6ME02 Dynamics of Machines */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME02 Dynamics of Machines
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the concept of static force analysis to
                            kinematic mechanisms.
                          </li>
                          <li>
                            Apply the concept of the dynamic force analysis to
                            kinematic mechanisms.
                          </li>
                          <li>
                            Apply the concept of gyroscopic couple and forces on
                            a dynamic body.
                          </li>
                          <li>
                            Apply the basics of longitudinal vibrations and
                            determine the natural frequency of the vibrating
                            system.
                          </li>
                          <li>
                            Apply the basics of transverse vibrations and
                            calculate the natural frequency of the vibrating
                            system.
                          </li>
                          <li>
                            Evaluate the balancing masses and their orientation
                            for balancing of the rotating and reciprocating
                            masses.
                          </li>
                        </ol>
                      </div>

                      {/* 6ME03 Control System Engineering */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME03 Control System Engineering
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the fundamental concepts of automatic
                            Control, mathematical modeling &amp; determination
                            of the transfer function of control systems using
                            various methods
                          </li>
                          <li>
                            Analyze the time response of various systems &amp;
                            determine the Static error coefficients for
                            different input &amp; type of the systems
                          </li>
                          <li>
                            Evaluate the stability of linear systems using
                            various methods.
                          </li>
                          <li>
                            Design and selection of industrial controller and
                            Understanding of automatic speed controllers for
                            Machine tools, Prime Movers and Steam Generator.
                          </li>
                        </ol>
                      </div>

                      {/* 6ME04 Non-Conventional Energy Sources */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME04 Non-Conventional Energy Sources
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate basic concept of renewable and
                            non-renewable sources
                          </li>
                          <li>
                            Apply the basic concept of solar energy utilization
                            and storage.
                          </li>
                          <li>
                            Illustrate basics working of photovoltaic panel,
                            fuel cell and geothermal energy
                          </li>
                          <li>Apply the concept of energy from ocean</li>
                          <li>Apply the concept of energy from wind.</li>
                          <li>
                            Demonstrate understanding the concept of bio-mass
                            energy resources.
                          </li>
                        </ol>
                      </div>

                      {/* 6ME04 Lean Manufacturing */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME04 Lean Manufacturing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the concept and applications of lean
                            manufacturing
                          </li>
                          <li>
                            Interpret different element of lean manufacturing
                          </li>
                          <li>
                            Interpret different tools of lean manufacturing
                          </li>
                          <li>
                            Apply lean manufacturing in real life situation
                          </li>
                          <li>
                            Identify the barriers in implementation of Lean
                            Manufacturing.
                          </li>
                          <li>Explain the concept of Six Sigma</li>
                        </ol>
                      </div>

                      {/* 6ME08 Computer Aided Design and Simulation */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ME08 Computer Aided Design and Simulation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the concept of CAD.</li>
                          <li>
                            Apply knowledge using CAD modeling for component
                            design
                          </li>
                          <li>
                            Apply the knowledge of geometric transformation.
                          </li>
                          <li>
                            Construct the Mechanical &amp; Manufacturing
                            simulation systems
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-VII */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem7" ? null : "be-sem7",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-VII
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem7" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem7" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 7ME01 Mechatronics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME01 Mechatronics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the scope and application of mechatronics,
                            various electromechanical devices and components.
                          </li>
                          <li>
                            Explain the concepts of electronics signal data and
                            data conversion.
                          </li>
                          <li>
                            Explain the working and applications of various
                            electronic devices.
                          </li>
                          <li>
                            Illustrate the working of different control
                            components of Hydraulic and Pneumatic Systems.
                          </li>
                          <li>
                            Construct pneumatic circuits used in mechanical line
                            automation for industrial applications.
                          </li>
                          <li>
                            Construct pneumatic circuits used in mechanical line
                            automation for industrial applications.
                          </li>
                        </ol>
                      </div>

                      {/* 7ME02 Productivity Techniques */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME02 Productivity Techniques
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply project selection methods to evaluate the
                            feasibility of projects.
                          </li>
                          <li>
                            Use appropriate project management practices, tools
                            and methodologies.
                          </li>
                          <li>
                            Analyze and document project requirements,
                            assumptions and constraints.
                          </li>
                          <li>
                            Apply project time and cost estimates to define
                            project baseline, schedule and budget.
                          </li>
                          <li>
                            Organize and manage critical resources for effective
                            project implementation.
                          </li>
                          <li>Analyze risks in implementing project.</li>
                        </ol>
                      </div>

                      {/* 7ME03 Industrial Management & Costing */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME03 Industrial Management &amp; Costing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the concepts of Management and Finance for
                            industry.
                          </li>
                          <li>
                            Apply the process of Marketing , Promotions and
                            sales to serve the demands of society.
                          </li>
                          <li>
                            Analyze the concepts of estimation, costing and
                            balance sheet for the industry.
                          </li>
                          <li>
                            Plan for managerial and financial activities for the
                            industry.
                          </li>
                        </ol>
                      </div>

                      {/* 7ME04 Energy Conversion-II */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME04 Energy Conversion-II
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the performance of reciprocating compressor.
                          </li>
                          <li>Analyze the performance of rotary compressor.</li>
                          <li>
                            Solve the problems based on refrigeration cycles.
                          </li>
                          <li>
                            Explain different air conditioning system and
                            psychrometric process.
                          </li>
                          <li>Solve the problems based on gas turbines.</li>
                          <li>
                            Explain the working of electric and hybrid vehicles.
                          </li>
                        </ol>
                      </div>

                      {/* 7ME05 Automobile Engineering */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME05 Automobile Engineering
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Compare the different types of automobiles and their
                            working
                          </li>
                          <li>
                            Analyze the concepts of fuels supply system and
                            cooling system in automobile
                          </li>
                          <li>
                            Identify the need of different electrical systems in
                            conventional automobile and Electrical Vehicles(E.V)
                          </li>
                          <li>
                            Explain the functioning of Transmission, Suspension,
                            lubrication and control systems in Automobile.
                          </li>
                        </ol>
                      </div>

                      {/* 7ME05 Computational Fluid Dynamics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME05 Computational Fluid Dynamics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Solve the governing partial differential equations
                            of fluid flow and heat transfer problems
                          </li>
                          <li>
                            Construct and solve different mathematical models
                            and computational methods for fluid flows
                          </li>
                          <li>
                            Apply the discretization method to solve fluid flow
                            and heat transfer problems
                          </li>
                          <li>
                            Examine a CFD scheme for the respective fluid
                            flow/transport phenomenon problem
                          </li>
                          <li>
                            Apply verification and validation of numerical model
                          </li>
                          <li>
                            Demonstrate the ability to use modern CFD Software
                            tools
                          </li>
                        </ol>
                      </div>

                      {/* 7ME09 Seminar */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ME09 Seminar
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Organize seminar content logically to ensure clarity
                            in objectives and coherence in information flow
                          </li>
                          <li>
                            Demonstrate in-depth understanding of the seminar
                            topic by explaining key concepts with clarity and
                            elaboration.
                          </li>
                          <li>
                            Apply effective presentation and communication
                            techniques to engage the audience professionally.
                          </li>
                          <li>
                            Create clear, and visually appealing presentation
                            materials to enhance understanding
                          </li>
                          <li>
                            Analyse and respond to audience queries with logical
                            reasoning and critical thinking.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-VIII */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem8" ? null : "be-sem8",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-VIII
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem8" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem8" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 8ME01 Operation Research Techniques */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME01 Operation Research Techniques
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply graphical and simplex methods to solve Linear
                            Programming (LP) problems.
                          </li>
                          <li>
                            Apply Transportation Models and Assignment Models to
                            determine optimal solutions.
                          </li>
                          <li>
                            Analyze PERT and CPM Network Models to assess
                            project timelines and resource efficiency.
                          </li>
                          <li>
                            Solve waiting line and sequencing models to
                            determine optimal solution.
                          </li>
                          <li>
                            Solve Simulation and Dynamic Programming problems
                            for optimal strategies.
                          </li>
                          <li>
                            Apply replacement models for individual and group
                            policies.
                          </li>
                        </ol>
                      </div>

                      {/* 8ME02 I.C. Engines */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME02 I.C. Engines
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the various performance parameters of IC
                            engines by using principles of thermodynamics.
                          </li>
                          <li>Compare the major fuel groups for IC engines</li>
                          <li>
                            Explain the normal &amp; Abnormal combustion
                            processes in SI and CI engines
                          </li>
                          <li>
                            Identify relevance of environment and emissions from
                            IC engine
                          </li>
                        </ol>
                      </div>

                      {/* 8ME03 Production Planning & Control */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME03 Production Planning &amp; Control
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the importance of production planning and
                            control, its functions and advantages.
                          </li>
                          <li>
                            Apply the skills of calculating for sales forecasts
                            using various forecasting methods.
                          </li>
                          <li>
                            Formulate production order and Production Plan for
                            given batch size
                          </li>
                          <li>
                            Explain concept of machine capacity, loading of
                            machines man machine activity charts.
                          </li>
                          <li>
                            Explain concept of inventory control &amp; various
                            cases of inventory system
                          </li>
                          <li>
                            Apply the modern philosophies of management like
                            CIM, JIT, MRP-I and MRP-II.
                          </li>
                        </ol>
                      </div>

                      {/* 8ME03 Artificial Intelligence */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME03 Artificial Intelligence
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate the concept of knowledge and knowledge
                            base.
                          </li>
                          <li>
                            Explain the structure and working of an Expert
                            System.
                          </li>
                          <li>
                            Illustrate the methods of knowledge representation.
                          </li>
                          <li>
                            Explain the design pre-requisites and design
                            procedure of expert system
                          </li>
                          <li>
                            Explain the skills of development of expert system
                            for industrial problems.
                          </li>
                          <li>
                            Illustrate the concept of fuzzy logic and fuzzy
                            engineering.
                          </li>
                        </ol>
                      </div>

                      {/* 8ME04 Refrigeration & Air Conditioning */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME04 Refrigeration &amp; Air Conditioning
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the effect of different parameters on
                            performance of Vapour Compressor Refrigeration
                            System (VCR) with different types of refrigerant.
                          </li>
                          <li>
                            Analyze the elementary treatment of multistage
                            pressure system along with fundamental of cryogenics
                            engineering.
                          </li>
                          <li>
                            Explain various components of refrigeration system
                            and applications including leak detection.
                          </li>
                          <li>
                            Apply the use of psychometric chart in the design of
                            air-conditioning systems.
                          </li>
                          <li>
                            Illustrate the details Classification of air
                            conditioning systems &amp; its its applications.
                          </li>
                          <li>
                            Analyze cooling load for different Air Conditioning
                            System
                          </li>
                        </ol>
                      </div>

                      {/* 8ME04 Robotics & Industrial Applications */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME04 Robotics &amp; Industrial Applications
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the concept of robotics and its
                            applications.
                          </li>
                          <li>
                            Illustrate robot anatomy and various configurations
                            for different industrial applications.
                          </li>
                          <li>
                            Apply the concept of kinematic analysis of robots.
                          </li>
                          <li>
                            Apply the concept robot programming, its methods and
                            programming languages.
                          </li>
                        </ol>
                      </div>

                      {/* 8ME07 Project */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ME07 Project
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze relevant literature and define a research
                            problem with well-formulated objectives.
                          </li>
                          <li>
                            Plan and execute the project using appropriate
                            methodologies and systematic work distribution.
                          </li>
                          <li>
                            Demonstrate technical proficiency through structured
                            presentations, demonstrations, and effective
                            communication.
                          </li>
                          <li>
                            Interpret and analyze feedback, refine project
                            implementation, and present meaningful results and
                            conclusions.
                          </li>
                          <li>
                            Exhibit professional ethics, teamwork, and project
                            documentation skills through effective report
                            writing and participation in research dissemination
                            activities.
                          </li>
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
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              M.E. Advanced Manufacturing &amp; Mechanical Systems Design -
              Course Outcomes
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {/* M.E. Semester-I */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "me-sem1" ? null : "me-sem1",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.E. Semester-I
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "me-sem1" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "me-sem1" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 1MMD1 Advanced Manufacturing Processes */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1MMD1 Advanced Manufacturing Processes
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the mechanics of metal machining
                            processes.
                          </li>
                          <li>
                            Apply the concept of computer numerical control
                            technology.
                          </li>
                          <li>Understand various metal casting processes.</li>
                          <li>Distinguish the various welding processes.</li>
                          <li>Analyze various metal forming processes.</li>
                          <li>
                            Apply various unconventional machining processes.
                          </li>
                        </ol>
                      </div>

                      {/* 1MMD2 Advanced Machine Design */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1MMD2 Advanced Machine Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply failure theories to ductile and brittle
                            materials
                          </li>
                          <li>Apply Stress-Life approach</li>
                          <li>Apply Strain-Life approach</li>
                          <li>Apply LEFM approach</li>
                          <li>
                            Apply fatigue from variable amplitude loading and
                            statistical aspects
                          </li>
                          <li>
                            Apply surface failure approach in mechanical design
                          </li>
                        </ol>
                      </div>

                      {/* 1MMD3 Computer Aided Design and Engineering */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1MMD3 Computer Aided Design and Engineering
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Illustrate concept of CAD/ CAM and CIM.</li>
                          <li>
                            Apply knowledge using CAD modeling for component
                            design.
                          </li>
                          <li>
                            Illustrate the fundamentals of finite element
                            analysis
                          </li>
                          <li>
                            Apply FEA techniques to analyze problems in stress
                            on beams, three dimensional frames, heat transfer
                            and fluid flow.
                          </li>
                        </ol>
                      </div>

                      {/* 1MMD4 Design for Material Handling Equipments */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1MMD4 Design for Material Handling Equipments
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Selection of a proper material handling system
                          </li>
                          <li>
                            Awareness about the specifications of the elements
                            of a material handling system like ropes, chains,
                            pulleys, sheaves etc. for Hoist.
                          </li>
                          <li>
                            Forces involved with in material handling like load
                            lifting, buckets, belts etc.
                          </li>
                          <li>
                            Types of conveyors and the Safety associated with
                            it.
                          </li>
                          <li>
                            Selection of Drives and Grabbing and Arresting
                            Mechanism Attachments for materials handling
                          </li>
                        </ol>
                      </div>

                      {/* 1MMD5 Lean Manufacturing */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1MMD5 Lean Manufacturing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the concept, history and applications of
                            lean manufacturing
                          </li>
                          <li>
                            Interpret different elements of Toyota Production
                            System,
                          </li>
                          <li>
                            Interpret different tools of lean production
                            processes
                          </li>
                          <li>Apply cellular systems for production.</li>
                          <li>
                            Apply the concepts of TPM for quality improvement.
                          </li>
                          <li>
                            Apply the concepts of Lean Manufacturing for
                            sustaining improvements
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.E. Semester-II */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "me-sem2" ? null : "me-sem2",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.E. Semester-II
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "me-sem2" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "me-sem2" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 2MMD1 Advanced Material Technology */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2MMD1 Advanced Material Technology
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Comprehensive understanding of various advanced
                            materials.
                          </li>
                          <li>
                            Understanding the principles and concepts of
                            internal structure of materials.
                          </li>
                          <li>
                            Applying the knowledge of material properties for
                            various applications.
                          </li>
                          <li>
                            Exploring the advanced manufacturing techniques of
                            various metals and non metals.
                          </li>
                        </ol>
                      </div>

                      {/* 2MMD2 Rapid Prototyping & Tooling */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2MMD2 Rapid Prototyping &amp; Tooling
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Aware of role of rapid prototyping in product
                            development process
                          </li>
                          <li>
                            To identify various Rapid Prototyping Processes
                          </li>
                          <li>
                            Analyze the principles of Stereo lithography and
                            Laser sintering process
                          </li>
                          <li>
                            Understand various types of Pre-processing,
                            processing, post-processing errors in Rapid
                            prototyping.
                          </li>
                          <li>
                            To Identify the various types of data formats and
                            software's used in Rapid prototyping
                          </li>
                          <li>
                            To Understand the concept of Reverse engineering
                          </li>
                        </ol>
                      </div>

                      {/* 2MMD3 Mechatronics in System Design */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2MMD3 Mechatronics in System Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand scope and application of mechatronics
                            with various electromechanical devices and
                            components
                          </li>
                          <li>
                            Understand basics of electronic signals, working,
                            applications of electronic devices like
                            microcontroller, PLC etc.
                          </li>
                          <li>
                            Understand role, working of different control
                            components of hydraulic, pneumatic systems and their
                            Applications
                          </li>
                          <li>
                            Make pneumatic circuits commonly used in mechanical
                            line automation and their industrial applications.
                          </li>
                          <li>
                            Make hydraulic circuits commonly used in mechanical
                            line automation and their industrial applications.
                          </li>
                          <li>
                            Analyze and also make simple but complete
                            mechatronics systems.
                          </li>
                        </ol>
                      </div>

                      {/* 2MMD4 Experimental Stress Analysis */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2MMD4 Experimental Stress Analysis
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply stress optic law using photo elastic bench
                          </li>
                          <li>Use strain measurement methods</li>
                          <li>Use electrical resistance strain gauge</li>
                          <li>Apply Moire Methods</li>
                          <li>Apply brittle coating methods</li>
                        </ol>
                      </div>

                      {/* 2MMD5 Computer Assisted Production Management */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2MMD5 Computer Assisted Production Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the fundamental knowledge of Computer Aided
                            Process Planning
                          </li>
                          <li>Explain Computer Assisted Quality Control</li>
                          <li>Explain Capacity Planning</li>
                          <li>
                            Explain the Just in Time and Computer Aided
                            Inventory Control.
                          </li>
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
                  {
                    label:
                      "Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP",
                    link: "#",
                  },
                  {
                    label:
                      "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP",
                    link: "#",
                  },
                  { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
                  { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                      <span className="text-gray-700 text-sm font-medium">
                        {item.label}
                      </span>
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
                    <span className="text-gray-700 text-sm font-medium">
                      Scheme and Syllabus M.E. (1st & 2nd Sem)
                    </span>
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

    laboratories: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Infrastructure and Laboratories
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Lab Entries */}
          {[
            {
              name: "CSR Funded Robotics and Automation Laboratory",
              resources:
                "Study of components of a real Robot & its DH Parameters, Demonstration of Robot with 2DOF, 3DOF, 4DOF, etc., Study of Positioning and orientation of Robot arm (Study of Robot Kinematics), To Study Robotic Control on Panasonic TM-1400GIII Industrial Robot Arm.",
            },
            {
              name: "Internal Combustion Engine Lab",
              resources:
                "Performance Analysis & Heat Balance sheet of Single Cylinder Diesel Engine, Performance Analysis &Heat Balance sheet of Multi-Cylinder Petrol Engine, Computerized Performance test for Multi cylinder Petrol Engine, Exhaust Gas analysis and Ignition system demo model",
            },
            {
              name: "Dr. Georg H Endress Laboratory",
              resources:
                "Supported under CSR by Endress Hauser Automation (India) Instrumentation Pvt. Ltd. (A CII MZC representing organization) - Pressure Measurement, Temperature Measurement, Flow rate Measurement, Level Measurement.",
            },
            {
              name: "Mechanics of Material Laboratory",
              resources:
                "Computerized Universal Testing Machine (Measuring range of 0-400kN, Least Count: 0.04KN, Piston Movement: 0.1mm), Vickers/Brinell Hardness Test Rig, Impact Testing Machine (30 Kg), Torsion Testing Machine (50 Kg)",
            },
            {
              name: "Fluid Power Laboratory",
              resources:
                "Pelton Turbine, Francis Turbine, Centrifugal Pump, Reciprocating Pump, Bernoulli's Apparatus",
            },
            {
              name: "Computational Fluid Dynamics Center",
              resources:
                "CFD Software- ANSYS-CFX 10.0, IBM Server - 01 No., IBM Client Systems - 04 Nos.",
            },
            {
              name: "Energy Conversion Laboratory",
              resources:
                "Five Gas Analyzer AVL DIGAS 444: To Check the exhaust emissions like NOX, CO2, CO, O2, HC. Blower Test Rig, Single cylinder 4-stroke Diesel Engine with Brake Test Rig, Single cylinder 4-stroke Petrol Engine with Hydraulic Dynamometer Test Rig, Single Cylinder Petrol Engine with Alternator Test Rig",
            },
            {
              name: "Theory of Machine Laboratory",
              resources:
                "Gyroscope, Balancing Apparatus, Whirling Shaft Apparatus, Vibration Analysis set-up, Four channel FFT Analyzer",
            },
            {
              name: "Heat Transfer Laboratory",
              resources:
                "Heat Exchanger, Stephan Boltzmann apparatus, Critical Heat Flux apparatus, Thermal Conductivity of insulating Powder Apparatus",
            },
            {
              name: "Engineering Mechanics lab",
              resources:
                "Universal Force Table, Parallel force Apparatus, Jib Crane, Differential Axle & Wheel, Single Purchase Winch Crab, Double Purchase Winch Crab, Simple Screw Jack, Worm & Worm Wheel apparatus, Moment of Inertia of Flywheel",
            },
            {
              name: "Refrigeration & Air Conditioning Laboratory",
              resources:
                "Vapour Compression Test Rig, Counter Flow Heat Exchanger, Window Air Conditioning Test Rig, Refrigerant Leak Test Rig",
            },
            {
              name: "Drawing Hall",
              resources:
                "Drawing Table, Drawing Board, Software for Engineering Drawing Animated Solutions, Wooden Solid Models, Display Charts, Templates, etc.",
            },
            {
              name: "CAD/CAM Center",
              resources:
                "Hardware: IBM Think Centre A5 Computer Systems - 21 Nos, UPS 7.5KVA with 12 V Batteries, Printer. Software: UG-NX 3, Solid Edge, Autodesk Inventor Series Pro7.0, CATIA V5 R10, ANSYS 8.1, FEMAP, MSC NASTRAN, Witness, GATE Series",
            },
            {
              name: "Production Technology Laboratory",
              resources:
                "Profile Projector, Universal Interferometer, Autocollimator, Vickers/Brinell Hardness Testing Machine",
            },
            {
              name: "Measurement System Laboratory",
              resources:
                "Pneumatic Comparator, Tool Maker's Microscope, Surface Roughness Tester, Flow measurement Using McLeod gauge",
            },
            {
              name: "Engineering Metallurgy Laboratory",
              resources:
                "Vickers/Brinell Hardness Test Rig, Furnace, Metallurgical Microscope with CCTV attachment",
            },
            {
              name: "Mechatronics Laboratory",
              resources:
                "Pneumatic Training Kit, X-Y Table, Conveyor with sensor, Pneumatic rotary indexing",
            },
            {
              name: "Seminar Hall",
              resources:
                "LCD Projector with Computer, SMART cordless electronic note PAD (giving display directly on LCD screen), 32'' Television Set with VCD/ DVD player, 5.1 Channel Surround Sound Home Theater System, Ergonomically designed cushioned deluxe chairs (60 Nos), Fully Air-conditioned",
            },
            {
              name: "Workshop (Mechanical Engineering)",
              resources:
                "Machine Shop, Advanced Welding Shop, Carpentry & Pattern Making Shop, Fitting & Sheet Metal Shop, Smithy & Foundry Shop",
            },
            {
              name: "Experimental Stress Analysis",
              resources:
                "DIFFUSED LIGHT RESEARCH POLARISCOPE, REFLECTION POLARISCOPE, STRESS FREEZING OVEN, STRAIN GAUGE ROSETTE APPARATUS",
            },
            {
              name: "Energy Park",
              resources:
                "Solar PV Pump, Solar Steam Project, Wind Mill, Aero Generator",
            },
            {
              name: "Research Lab / Internet Facility",
              resources:
                "High-speed internet connectivity, Research workstations, Latest software and tools for research",
            },
            {
              name: "Sant Gajanan Tool Room (SGTR)",
              resources:
                "Advanced manufacturing equipment, CNC machines, Tool design and fabrication facilities",
            },
          ].map((lab, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0"
            >
              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🔧</span>
                </div>
                <h4 className="font-bold text-gray-800 text-center mt-4">
                  {lab.name}
                </h4>
              </div>

              {/* Lab Details Column */}
              <div className="md:col-span-7 p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 text-sm mb-2">
                      Lab Resources / Facilities:
                    </h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {lab.resources}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    pride: (
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
              onClick={() => setPrideTab("gate")}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === "gate"
                  ? "border-b-4 border-ssgmce-orange text-ssgmce-blue"
                  : "text-gray-600 hover:text-ssgmce-blue"
              }`}
            >
              GATE Qualified
            </button>
            <button
              onClick={() => setPrideTab("toppers")}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === "toppers"
                  ? "border-b-4 border-ssgmce-orange text-ssgmce-blue"
                  : "text-gray-600 hover:text-ssgmce-blue"
              }`}
            >
              University Toppers
            </button>
            <button
              onClick={() => setPrideTab("alumni")}
              className={`px-6 py-3 font-semibold transition-colors ${
                prideTab === "alumni"
                  ? "border-b-4 border-ssgmce-orange text-ssgmce-blue"
                  : "text-gray-600 hover:text-ssgmce-blue"
              }`}
            >
              Top Alumnis of Department
            </button>
          </div>

          {/* GATE Qualified Students */}
          {prideTab === "gate" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {t("pride.gate", defaultPrideGate).map((gateYear, yearIdx) => (
                <div
                  key={yearIdx}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                    <h4 className="text-xl font-bold">
                      <EditableText
                        value={
                          gateYear.title ||
                          `GATE Qualified Students ${gateYear.year}`
                        }
                        onSave={(val) => {
                          const newGate = JSON.parse(
                            JSON.stringify(t("pride.gate", defaultPrideGate)),
                          );
                          newGate[yearIdx].title = val;
                          updateData("pride.gate", newGate);
                        }}
                      />
                    </h4>
                  </div>
                  {gateYear.students.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            {[
                              "Sr. No.",
                              "Name of Student",
                              "Class",
                              "Valid Score",
                              "Category",
                            ].map((h, i) => (
                              <th
                                key={i}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {gateYear.students.map((student, studentIdx) => (
                            <tr key={studentIdx} className="hover:bg-gray-50">
                              {student.map((cell, cellIdx) => (
                                <td
                                  key={cellIdx}
                                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                >
                                  <EditableText
                                    value={cell}
                                    onSave={(val) =>
                                      updatePrideGate(
                                        yearIdx,
                                        studentIdx,
                                        cellIdx,
                                        val,
                                      )
                                    }
                                  />
                                </td>
                              ))}
                              {isEditing && (
                                <td
                                  className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                                  onClick={() => {
                                    const newGate = JSON.parse(
                                      JSON.stringify(
                                        t("pride.gate", defaultPrideGate),
                                      ),
                                    );
                                    newGate[yearIdx].students = newGate[
                                      yearIdx
                                    ].students.filter(
                                      (_, idx) => idx !== studentIdx,
                                    );
                                    updateData("pride.gate", newGate);
                                  }}
                                >
                                  Delete
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="px-6 py-8 text-center text-gray-400 italic">
                      No GATE qualified students for this year.
                    </div>
                  )}
                  {isEditing && (
                    <button
                      onClick={() => {
                        const newGate = JSON.parse(
                          JSON.stringify(t("pride.gate", defaultPrideGate)),
                        );
                        const nextSr = String(gateYear.students.length + 1);
                        newGate[yearIdx].students.push([
                          nextSr,
                          "New Student",
                          "4M",
                          "0",
                          "OPEN",
                        ]);
                        updateData("pride.gate", newGate);
                      }}
                      className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                    >
                      Add Student
                    </button>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() => {
                    const newGate = JSON.parse(
                      JSON.stringify(t("pride.gate", defaultPrideGate)),
                    );
                    newGate.push({
                      year: "2025",
                      title: "GATE Qualified Students 2025",
                      students: [],
                    });
                    updateData("pride.gate", newGate);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Add Year
                </button>
              )}
            </motion.div>
          )}

          {/* University Toppers */}
          {prideTab === "toppers" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {[
                {
                  label: "B.E. UNIVERSITY RANK HOLDERS",
                  key: "be",
                  default: defaultPrideToppersBE,
                },
              ].map((category) => (
                <div
                  key={category.key}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                    <h4 className="text-xl font-bold">{category.label}</h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {[
                            "Year",
                            "Name of the Student",
                            "University Rank",
                            "CGPA/Percentage",
                          ].map((h, i) => (
                            <th
                              key={i}
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {t(`pride.toppers.${category.key}`, category.default)
                          .length > 0 ? (
                          t(
                            `pride.toppers.${category.key}`,
                            category.default,
                          ).map((yearGroup, yearIdx) => (
                            <React.Fragment key={yearIdx}>
                              {yearGroup.records.map((record, recordIdx) => (
                                <tr
                                  key={recordIdx}
                                  className="hover:bg-gray-50"
                                >
                                  {recordIdx === 0 && (
                                    <td
                                      className="px-6 py-4 text-sm font-medium text-gray-900"
                                      rowSpan={yearGroup.records.length}
                                    >
                                      <EditableText
                                        value={yearGroup.year}
                                        onSave={(val) => {
                                          const newData = JSON.parse(
                                            JSON.stringify(
                                              t(
                                                `pride.toppers.${category.key}`,
                                                category.default,
                                              ),
                                            ),
                                          );
                                          newData[yearIdx].year = val;
                                          updateData(
                                            `pride.toppers.${category.key}`,
                                            newData,
                                          );
                                        }}
                                      />
                                    </td>
                                  )}
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditableText
                                      value={record.name}
                                      onSave={(val) =>
                                        updatePrideToppers(
                                          category.key,
                                          yearIdx,
                                          recordIdx,
                                          "name",
                                          val,
                                        )
                                      }
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditableText
                                      value={record.rank}
                                      onSave={(val) =>
                                        updatePrideToppers(
                                          category.key,
                                          yearIdx,
                                          recordIdx,
                                          "rank",
                                          val,
                                        )
                                      }
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditableText
                                      value={record.score}
                                      onSave={(val) =>
                                        updatePrideToppers(
                                          category.key,
                                          yearIdx,
                                          recordIdx,
                                          "score",
                                          val,
                                        )
                                      }
                                    />
                                  </td>
                                  {isEditing && (
                                    <td
                                      className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                                      onClick={() => {
                                        const newData = JSON.parse(
                                          JSON.stringify(
                                            t(
                                              `pride.toppers.${category.key}`,
                                              category.default,
                                            ),
                                          ),
                                        );
                                        newData[yearIdx].records = newData[
                                          yearIdx
                                        ].records.filter(
                                          (_, idx) => idx !== recordIdx,
                                        );
                                        if (
                                          newData[yearIdx].records.length === 0
                                        ) {
                                          newData.splice(yearIdx, 1);
                                        }
                                        updateData(
                                          `pride.toppers.${category.key}`,
                                          newData,
                                        );
                                      }}
                                    >
                                      Delete
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </React.Fragment>
                          ))
                        ) : (
                          <tr>
                            <td
                              colSpan={4}
                              className="px-6 py-8 text-center text-gray-400 italic"
                            >
                              No data available yet.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  {isEditing && (
                    <button
                      onClick={() => {
                        const newData = JSON.parse(
                          JSON.stringify(
                            t(
                              `pride.toppers.${category.key}`,
                              category.default,
                            ),
                          ),
                        );
                        newData.push({
                          year: "2024-25",
                          records: [
                            {
                              name: "New Student",
                              rank: "1st",
                              score: "9.5 CGPA",
                            },
                          ],
                        });
                        updateData(`pride.toppers.${category.key}`, newData);
                      }}
                      className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                    >
                      Add Year Group
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {/* Top Alumni */}
          {prideTab === "alumni" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                <h4 className="text-xl font-bold">
                  <EditableText
                    value={t("pride.alumniTitle", "Top Alumnis of Department")}
                    onSave={(val) => updateData("pride.alumniTitle", val)}
                  />
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "S. N.",
                        "Names of Alumni",
                        "Position",
                        "Names of Organisation",
                      ].map((h, i) => (
                        <th
                          key={i}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {t("pride.alumni", defaultPrideAlumni).length > 0 ? (
                      t("pride.alumni", defaultPrideAlumni).map(
                        (alumnus, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                              {idx + 1}.
                            </td>
                            {alumnus.map((cell, cellIdx) => (
                              <td
                                key={cellIdx}
                                className="px-6 py-4 text-sm text-gray-900"
                              >
                                <EditableText
                                  value={cell}
                                  onSave={(val) =>
                                    updateOverviewTable(
                                      "pride.alumni",
                                      defaultPrideAlumni,
                                      idx,
                                      cellIdx,
                                      val,
                                    )
                                  }
                                />
                              </td>
                            ))}
                            {isEditing && (
                              <td
                                className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                                onClick={() => {
                                  const newArr = t(
                                    "pride.alumni",
                                    defaultPrideAlumni,
                                  ).filter((_, i) => i !== idx);
                                  updateData("pride.alumni", newArr);
                                }}
                              >
                                Delete
                              </td>
                            )}
                          </tr>
                        ),
                      )
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-8 text-center text-gray-400 italic"
                        >
                          No alumni data available yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {isEditing && (
                <button
                  onClick={() => {
                    const newArr = [
                      ...t("pride.alumni", defaultPrideAlumni),
                      ["New Alumni", "Position", "Organisation"],
                    ];
                    updateData("pride.alumni", newArr);
                  }}
                  className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                >
                  Add Alumni
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
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
                  <h3 className="text-2xl font-bold text-gray-800">
                    Placement Statistics
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Year-wise breakdown of student placements
                  </p>
                </div>
                <FaChartLine className="text-4xl text-blue-100" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider border-b border-gray-200">
                      <th className="px-6 py-4 font-bold text-center w-20">
                        Sr. No.
                      </th>
                      <th className="px-6 py-4 font-bold text-center">
                        Academic Year
                      </th>
                      <th className="px-6 py-4 font-bold text-center">
                        No. of Students Placed
                      </th>
                      <th className="px-6 py-4 font-bold text-center">
                        Details Report
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {t("placements.summary", defaultPlacements.summary).map(
                      (row, index) => (
                        <tr
                          key={index}
                          className="hover:bg-blue-50/30 transition-colors"
                        >
                          <td className="px-6 py-4 text-center font-mono text-gray-400">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 text-center font-bold text-gray-700">
                            {row.year}
                          </td>
                          <td className="px-6 py-4 text-center font-bold text-ssgmce-blue text-lg">
                            {row.count}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => setPlacementYear(row.id)}
                              className="text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ),
                    )}
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
                  <h3 className="text-xl font-bold text-gray-800">
                    Placement Record
                  </h3>
                  <p className="text-sm text-ssgmce-blue font-bold">
                    Session: {placementYear}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                      <tr>
                        <th className="px-6 py-4 font-bold text-center w-16">
                          Sr. No.
                        </th>
                        <th className="px-6 py-4 font-bold">Name of Student</th>
                        <th className="px-6 py-4 font-bold">Company Name</th>
                        <th className="px-6 py-4 font-bold text-right">CTC</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {t(
                        `placements.details.${placementYear}`,
                        defaultPlacements.details[placementYear] || [],
                      ).map((student, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-center font-mono text-gray-400">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 font-medium text-gray-800">
                            {student.name}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {student.company}
                          </td>
                          <td className="px-6 py-4 text-right font-bold text-ssgmce-blue">
                            {student.ctc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {(!t(
                  `placements.details.${placementYear}`,
                  defaultPlacements.details[placementYear] || [],
                ).length ||
                  t(
                    `placements.details.${placementYear}`,
                    defaultPlacements.details[placementYear] || [],
                  ).length === 0) && (
                  <div className="p-8 text-center text-gray-400">
                    <p>Detailed placement data will be updated soon.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ),

    hod: (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Profile Section - Horizontal Layout */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-ssgmce-blue to-ssgmce-orange rounded-2xl blur opacity-25"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white group w-72 md:w-80 lg:w-96">
                  <img
                    src={hodPhoto}
                    alt="Dr. S. P. Trikal - HOD Mechanical"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Dr. S. P. Trikal
              </h3>
              <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                Head of Department
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Mechanical Engineering
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-ssgmce-orange" />
                  <span>hod_mech@ssgmce.ac.in</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  Ph.D
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  Manufacturing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Section - Below Photo */}
        <div className="p-8 md:p-10 relative bg-white">
          <FaQuoteLeft className="absolute top-8 right-8 text-6xl text-blue-50 -z-0" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                Message from the HOD
              </h3>
              <div className="h-1 w-20 bg-ssgmce-blue mt-2 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <p className="text-gray-800 font-semibold">Dear Friends,</p>
              <p>
                The Mechanical Engineering Department at SSGMCE Shegaon is one
                of the most reputed departments in terms of facility, faculty,
                students, and activities. It continues to lead and expand its
                activities in various directions. The Department is known for
                the Expertise and State-of-the-art facilities especially in
                CAD-CAM, Computational Fluid Dynamics (CFD), Manufacturing and
                Production Technology, Energy Conversion, Computerized I. C.
                Engines, Mechatronics, Dr. Georg H Endress Lab and also in other
                core areas. Experimental and computational facilities are being
                continuously upgraded. Industry interaction has been increased
                with industrial visits and arranging expert lectures by industry
                personnel and carrying out the industry sponsored projects for
                students.
              </p>
              <p>
                The students actively involve in various reputed contests of
                national and international repute like ROBOCON, Tech Fest, and
                technical competitions in various colleges and also credited
                number of Winner titles to the department. We have various
                students chapters like SAE, IEEE, IEI Chapter and ISTE Students'
                chapters guided by faculty mentors for the overall development
                of the students.
              </p>
              <p>
                The department does conduct guiding sessions and mock tests for
                students for exams like GATE, GRE etc. The department has been
                providing an excellent placement to students. The placement cell
                also facilitates the students for getting training in
                industries. Good number of Short Term training Programmes
                (STTP), Workshops and Seminars are also organized for teachers
                for sharing and updating the technical knowledge.
              </p>
              <p className="font-semibold text-gray-800 italic">
                Wishing you all a successful and fulfilling academic journey
                ahead.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-dancing text-2xl text-ssgmce-blue">
                  Dr. S. P. Trikal
                </p>
                <p className="text-sm text-gray-500">
                  Head, Department of Mechanical Engineering
                </p>
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
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            <EditableText
              value={t("activitiesTitle", "Curricular Activities")}
              onSave={(val) => updateData("activitiesTitle", val)}
            />
          </h3>
          <span className="hidden sm:inline-block text-sm text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            {t("activities", defaultActivities).length} Activities
          </span>
        </div>

        {/* Activity List */}
        <div className="space-y-5">
          {t("activities", defaultActivities)
            .slice(0, activitiesVisible)
            .map((activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.35 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div
                    className="sm:w-72 flex-shrink-0 cursor-pointer"
                    onClick={() => setLightboxActivity(idx)}
                  >
                    {activity.image ? (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-48 sm:h-full object-contain bg-gray-50"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 sm:h-full flex items-center justify-center bg-gray-50">
                        <FaCalendarAlt className="text-4xl text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 p-5 sm:p-6">
                    {/* Date */}
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      <EditableText
                        value={activity.date}
                        onSave={(val) => updateActivity(idx, "date", val)}
                      />
                    </span>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 mb-4 leading-snug">
                      <EditableText
                        value={activity.title}
                        onSave={(val) => updateActivity(idx, "title", val)}
                        multiline
                      />
                    </h4>

                    {/* Meta Info */}
                    <div className="space-y-2.5 text-sm text-gray-600">
                      <div className="flex items-start gap-2.5">
                        <FaUsers className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">
                            Participants:{" "}
                          </span>
                          <EditableText
                            value={activity.participants}
                            onSave={(val) =>
                              updateActivity(idx, "participants", val)
                            }
                          />
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <FaUserGraduate className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">
                            Organized by:{" "}
                          </span>
                          <EditableText
                            value={activity.organizer}
                            onSave={(val) =>
                              updateActivity(idx, "organizer", val)
                            }
                            multiline
                          />
                        </div>
                      </div>

                      {(activity.resource || isEditing) && (
                        <div className="flex items-start gap-2.5">
                          <FaChalkboardTeacher className="text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-700">
                              Resource Person:{" "}
                            </span>
                            <EditableText
                              value={
                                activity.resource ||
                                (isEditing ? "Add Resource Person" : "")
                              }
                              onSave={(val) =>
                                updateActivity(idx, "resource", val)
                              }
                              multiline
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Edit: image URL + delete */}
                    {isEditing && (
                      <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-gray-500">Image URL:</span>
                          <EditableText
                            value={activity.image || "Add image URL"}
                            onSave={(val) => updateActivity(idx, "image", val)}
                          />
                        </div>
                        <button
                          onClick={() => {
                            const arr = [...t("activities", defaultActivities)];
                            arr.splice(idx, 1);
                            updateData("activities", arr);
                          }}
                          className="text-xs text-red-500 hover:text-red-700"
                        >
                          Remove Activity
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Show More / Show Less */}
        {t("activities", defaultActivities).length > 6 && (
          <div className="text-center pt-2">
            <button
              onClick={() =>
                setActivitiesVisible((prev) =>
                  prev >= t("activities", defaultActivities).length
                    ? 6
                    : prev + 6,
                )
              }
              className="px-8 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
            >
              {activitiesVisible >= t("activities", defaultActivities).length
                ? "Show Less"
                : `Show More (${t("activities", defaultActivities).length - activitiesVisible} remaining)`}
            </button>
          </div>
        )}

        {/* Add Activity button (editing mode) */}
        {isEditing && (
          <div className="text-center">
            <button
              onClick={() => {
                const updated = [
                  ...t("activities", defaultActivities),
                  {
                    title: "New Activity",
                    date: "Date",
                    participants: "Participants",
                    organizer: "Organizer",
                    resource: "",
                    image: "",
                  },
                ];
                updateData("activities", updated);
              }}
              className="px-6 py-2.5 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors text-sm font-medium"
            >
              + Add Activity
            </button>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxActivity !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setLightboxActivity(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
                  onClick={() => setLightboxActivity(null)}
                >
                  <FaTimes />
                </button>

                <img
                  src={
                    t("activities", defaultActivities)[lightboxActivity]?.image
                  }
                  alt={
                    t("activities", defaultActivities)[lightboxActivity]?.title
                  }
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />

                <div className="text-white text-center mt-3 text-sm">
                  {t("activities", defaultActivities)[lightboxActivity]?.title}
                </div>

                {/* Nav arrows */}
                {lightboxActivity > 0 && (
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 rounded-full p-2 hover:bg-black/60"
                    onClick={() =>
                      setLightboxActivity((p) => Math.max(0, p - 1))
                    }
                  >
                    <FaChevronLeft />
                  </button>
                )}
                {lightboxActivity <
                  t("activities", defaultActivities).length - 1 && (
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 rounded-full p-2 hover:bg-black/60"
                    onClick={() =>
                      setLightboxActivity((p) =>
                        Math.min(
                          t("activities", defaultActivities).length - 1,
                          p + 1,
                        ),
                      )
                    }
                  >
                    <FaChevronRight />
                  </button>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Student Chapters & Clubs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-[#003366] to-ssgmce-dark-blue px-6 py-4">
            <h4 className="text-xl font-bold text-white">
              Student Chapters & Technical Clubs
            </h4>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "SAE India",
                  icon: "🏎️",
                  desc: "Society of Automotive Engineers",
                },
                {
                  name: "ISTE Chapter",
                  icon: "🔧",
                  desc: "Indian Society for Technical Education",
                },
                {
                  name: "IEI Chapter",
                  icon: "⚙️",
                  desc: "Institution of Engineers India",
                },
                {
                  name: "IEEE Chapter",
                  icon: "⚡",
                  desc: "Institute of Electrical and Electronics Engineers",
                },
              ].map((club, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="text-3xl mb-2">{club.icon}</div>
                  <h5 className="font-bold text-gray-900 text-sm mb-1">
                    {club.name}
                  </h5>
                  <p className="text-xs text-gray-600">{club.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),

    achievements: (() => {
      const facultyAchievements = t(
        "achievements.faculty",
        defaultAchievements.faculty || [],
      );
      const studentAchievements = t(
        "achievements.students",
        defaultAchievements.students || [],
      );

      const handleViewCertificate = (item) => {
        if (!item.image) return;
        const isPdf = item.image.toLowerCase().endsWith(".pdf");
        if (isPdf) {
          window.open(item.image, "_blank");
        } else {
          setCertificateLightbox(item);
        }
      };

      return (
        <div className="space-y-8">
          {/* Certificate Lightbox Modal */}
          <AnimatePresence>
            {certificateLightbox && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setCertificateLightbox(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-[#003366] px-6 py-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {certificateLightbox.name}
                      </h3>
                      <p className="text-blue-200 text-sm">
                        {certificateLightbox.achievement}
                      </p>
                    </div>
                    <button
                      onClick={() => setCertificateLightbox(null)}
                      className="text-white hover:text-orange-300 transition-colors"
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>
                  <div className="p-4 flex items-center justify-center bg-gray-50 max-h-[75vh] overflow-auto">
                    <img
                      src={certificateLightbox.image}
                      alt={certificateLightbox.achievement}
                      crossOrigin="anonymous"
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-3">
              Department of Mechanical Engineering
            </p>
          </div>

          {/* Tab Menu: Faculty | Student toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setAchievementTab("faculty")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  achievementTab === "faculty"
                    ? "bg-[#003366] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FaChalkboardTeacher className="text-lg" />
                Faculty Achievements
              </button>
              <button
                onClick={() => setAchievementTab("student")}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  achievementTab === "student"
                    ? "bg-[#003366] text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                <FaUserGraduate className="text-lg" />
                Student Achievements
              </button>
            </div>
          </div>

          {/* Faculty Achievements */}
          {achievementTab === "faculty" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {facultyAchievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-[#003366] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <FaTrophy className="mr-3 text-yellow-300" />
                      {item.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/15 text-blue-100 border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#003366] mb-2">
                          {item.achievement}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {item.image && (
                        <button
                          onClick={() => handleViewCertificate(item)}
                          className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003366] to-[#004d99] text-white text-xs font-semibold rounded-lg hover:from-[#004d99] hover:to-[#0066cc] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          <FaAward className="text-yellow-300" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {facultyAchievements.length === 0 && (
                <p className="text-center text-gray-400 py-8 text-sm">
                  No faculty achievements recorded yet.
                </p>
              )}
            </motion.div>
          )}

          {/* Student Achievements */}
          {achievementTab === "student" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {studentAchievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-[#003366] px-6 py-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <FaAward className="mr-3 text-yellow-300" />
                      {item.name}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/15 text-blue-100 border border-white/20">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#003366] mb-2">
                          {item.achievement}
                        </h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {item.image && (
                        <button
                          onClick={() => handleViewCertificate(item)}
                          className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003366] to-[#004d99] text-white text-xs font-semibold rounded-lg hover:from-[#004d99] hover:to-[#0066cc] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          <FaAward className="text-yellow-300" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {studentAchievements.length === 0 && (
                <p className="text-center text-gray-400 py-8 text-sm">
                  No student achievements recorded yet.
                </p>
              )}
            </motion.div>
          )}
        </div>
      );
    })(),

    newsletter: (
      <div className="space-y-8">
        {/* Newsletter Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 text-ssgmce-blue rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaBullseye />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("newsletterTitle", "Department Newsletters")}
              onSave={(val) => updateData("newsletterTitle", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "newsletterDescription",
                "Stay updated with the latest happenings, student achievements, faculty contributions, and department events through our periodic newsletters.",
              )}
              onSave={(val) => updateData("newsletterDescription", val)}
              multiline
            />
          </div>
        </div>

        {/* Newsletter Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-wide">Newsletter</h3>
              <p className="text-sm text-gray-300 mt-1">
                Department of Mechanical Engineering
              </p>
            </div>
            <FaDownload className="text-4xl text-blue-200 opacity-40" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider border-b border-gray-200">
                  <th className="px-6 py-4 font-bold text-center w-20">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 font-bold">Publishing Date</th>
                  <th className="px-6 py-4 font-bold text-center">
                    More Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {/* Latest Issue Row */}
                <tr className="hover:bg-blue-50/30 transition-colors bg-blue-50/10">
                  <td className="px-6 py-4 text-center font-mono text-gray-400">
                    1
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full">
                        Latest
                      </span>
                      <span className="font-bold text-gray-800">
                        <EditableText
                          value={
                            t("newsletters_latest", defaultNewsletters.latest)
                              .title || "Newsletter 2025-26 (Autumn)"
                          }
                          onSave={(val) =>
                            updateNewsletter("latest", 0, "title", val)
                          }
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={
                        t("newsletters_latest", defaultNewsletters.latest)
                          .link || "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                    >
                      <FaDownload className="text-xs" /> Click for Details
                    </a>
                  </td>
                </tr>

                {/* Archive Rows */}
                {(
                  t("newsletters_archives", defaultNewsletters.archives) || []
                ).map((issue, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4 text-center font-mono text-gray-400">
                      {i + 2}
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-gray-700">
                        <EditableText
                          value={issue.vol}
                          onSave={(val) =>
                            updateNewsletter("archives", i, "vol", val)
                          }
                        />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={issue.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                      >
                        <FaDownload className="text-xs" /> Click for Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Click for Details" to view/download the newsletter PDF.
          </div>
        </motion.div>
      </div>
    ),

    "learning-resources": (
      <div className="space-y-8">
        {/* Learning Resources Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-50 text-ssgmce-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("learningResources.title", "Learning Resources")}
              onSave={(val) => updateData("learningResources.title", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "learningResources.description",
                "Access comprehensive learning resources, lecture notes, assignments, and study materials for all semesters.",
              )}
              onSave={(val) => updateData("learningResources.description", val)}
              multiline
            />
          </div>
        </div>

        {/* Learning Resources Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                Learning Resources
              </h3>
              <p className="text-sm text-orange-100 mt-1">
                Department of Mechanical Engineering
              </p>
            </div>
            <FaChalkboardTeacher className="text-4xl text-orange-200 opacity-40" />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 text-sm uppercase tracking-wider border-b border-gray-200">
                  <th className="px-6 py-4 font-bold text-center w-20">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 font-bold">Year / Class</th>
                  <th className="px-6 py-4 font-bold text-center">Syllabus</th>
                  <th className="px-6 py-4 font-bold text-center">
                    Access Materials
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {(t("learningResources", defaultLearningResources) || []).map(
                  (material, i) => (
                    <tr
                      key={i}
                      className="hover:bg-orange-50/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-center font-mono text-gray-400">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-800">
                          <EditableText
                            value={material.title}
                            onSave={(val) =>
                              updateArrayString(
                                "learningResources",
                                defaultLearningResources,
                                i,
                                { ...material, title: val },
                              )
                            }
                          />
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={material.syllabusLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                        >
                          <FaDownload className="text-xs" /> Syllabus
                        </a>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={material.resourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-ssgmce-orange hover:text-orange-700 font-medium text-xs border border-gray-200 hover:border-orange-400 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-full transition-all"
                        >
                          <FaDownload className="text-xs" /> Access Resources
                        </a>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Access Resources" to view and download learning materials
            from the respective year's shared folder.
          </div>
        </motion.div>
      </div>
    ),

    "nba-resources": (
      <div className="space-y-8">
        {/* NBA Resource Material Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-50 text-ssgmce-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaAward />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("nbaResources.title", "NBA Resource Material")}
              onSave={(val) => updateData("nbaResources.title", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "nbaResources.description",
                "Access NBA accreditation resources, documentation, and informational videos for the Mechanical Engineering department.",
              )}
              onSave={(val) => updateData("nbaResources.description", val)}
              multiline
            />
          </div>
        </div>

        {/* Google Drive Link Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl shadow-md border border-orange-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-ssgmce-orange text-xl">
              <FaFileAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg">
                NBA Department Details
              </h4>
              <p className="text-sm text-gray-500 mt-0.5">
                Complete NBA accreditation documentation and resources
              </p>
            </div>
          </div>
          <a
            href={t("nbaResources.driveLink", defaultNBAResources.driveLink)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ssgmce-orange hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <FaExternalLinkAlt className="text-sm" />
            {t("nbaResources.driveLinkText", defaultNBAResources.driveLinkText)}
          </a>
        </motion.div>

        {/* NBA Videos Grid */}
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-ssgmce-orange rounded-full"></span>
            NBA Resource Videos
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t("nbaResources.videos", defaultNBAResources.videos) || []).map(
              (video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video">
                    <iframe
                      src={video.embedUrl}
                      title={video.title || `NBA Video ${i + 1}`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-600">
                      {video.title || `NBA Resource Video ${i + 1}`}
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
          <p className="text-gray-500 mt-2">
            Department of Mechanical Engineering
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("templateData.faculty", MECH_DEFAULT_FACULTY).map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
            >
              <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative flex items-center justify-center border-r border-gray-100">
                {fac.photo ? (
                  <EditableImage
                    src={fac.photo}
                    onSave={(val) => updateFacultyMember(i, "photo", val)}
                    alt={fac.name || "Faculty"}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                  <Link to={`/faculty/${fac.id}`} className="hover:underline">
                    <EditableText
                      value={fac.name}
                      onSave={(val) => updateFacultyMember(i, "name", val)}
                    />
                  </Link>
                </h4>
                <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                  <EditableText
                    value={fac.role}
                    onSave={(val) => updateFacultyMember(i, "role", val)}
                  />
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  {fac.area && (
                    <p className="line-clamp-2 text-xs">
                      <span className="font-bold text-gray-700">Area: </span>
                      <EditableText
                        value={
                          Array.isArray(fac.area)
                            ? fac.area.join(", ")
                            : fac.area
                        }
                        onSave={(val) =>
                          updateFacultyMember(
                            i,
                            "area",
                            val
                              .split(",")
                              .map((item) => item.trim())
                              .filter(Boolean),
                          )
                        }
                      />
                    </p>
                  )}

                  <div className="pt-2 flex flex-col gap-1">
                    {fac.email && (
                      <span className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                        <FaEnvelope className="mr-2 text-gray-400" />
                        <EditableText
                          value={fac.email}
                          onSave={(val) => updateFacultyMember(i, "email", val)}
                        />
                      </span>
                    )}
                    {fac.phone && (
                      <span className="flex items-center text-xs">
                        <FaPhone className="mr-2 text-gray-400" />
                        <EditableText
                          value={fac.phone}
                          onSave={(val) => updateFacultyMember(i, "phone", val)}
                        />
                      </span>
                    )}
                  </div>

                  {fac.vidwanId && (
                    <a
                      href={`https://vidwan.inflibnet.ac.in/profile/${fac.vidwanId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-bold text-emerald-600 mt-2 hover:underline uppercase tracking-wide"
                    >
                      Vidwan Profile <FaAngleRight className="ml-1" />
                    </a>
                  )}
                  <Link
                    to={`/faculty/${fac.id}`}
                    className="inline-flex items-center text-[10px] font-bold text-ssgmce-blue mt-1 hover:underline uppercase tracking-wide"
                  >
                    View Profile <FaAngleRight className="ml-1" />
                  </Link>
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
          <h3 className="text-3xl font-bold text-gray-900">
            Staff @ Department
          </h3>
          <p className="text-gray-500 mt-2">
            Department of Mechanical Engineering
          </p>
        </div>

        {/* Department Staff */}
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-1 bg-gray-800 rounded-full mr-3"></span>
            Department Staff
          </h4>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Mr. G. R. Jodh",
                role: "Office Assistant",
                photo: GRJodh,
              },
              {
                name: "Mr. S. D. Deshmukh",
                role: "Lab Assistant",
                photo: SDDeshmukh,
              },
              {
                name: "Mr. G. A. Wayzode",
                role: "Lab Assistant",
                photo: GAWayzode,
              },
              {
                name: "Mr. R. O. Bedre",
                role: "Lab Assistant",
                photo: ROBedre,
              },
              {
                name: "Mr. P. M. Deshmukh",
                role: "Lab Assistant",
                photo: PMDeshmukh,
              },
              {
                name: "Mr. N. D. Kamavisdar",
                role: "Lab Assistant",
                photo: NDKamavisdar,
              },
              {
                name: "Mr. G. D. Ingle",
                role: "Lab Attendant",
                photo: GDIngle,
              },
              {
                name: "Mr. V. H. Akhare",
                role: "Lab Attendant",
                photo: VHAkhare,
              },
              {
                name: "Mr. V. S. Bharate",
                role: "Lab Attendant",
                photo: VSBharate,
              },
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
                    <img
                      src={staff.photo}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                    {staff.name}
                  </h4>
                  <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                    {staff.role}
                  </p>
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
              {
                name: "Mr. Purushottam M. Dandwate",
                role: "Lab Assistant (SGTR)",
                photo: PMDandwate,
              },
              {
                name: "Mr. Mahesh R. Dhoke",
                role: "Attendant (Foundry & Smithy Shop)",
                photo: MRDhoke,
              },
              {
                name: "Mr. Vijaykumar S. Bharsakle",
                role: "Lab Assistant (Machine Shop SGTR)",
                photo: VSBharsakale,
              },
              {
                name: "Mr. Murlidhar P. Rajurkar",
                role: "Carpenter (Carpentry)",
                photo: MPRajurkar,
              },
              {
                name: "Mr. Vasudev S. Dhage",
                role: "Attendant (Carpentry)",
                photo: VSDhage,
              },
              {
                name: "Mr. Rajesh J. Oimbe",
                role: "Lab Assistant (Machine Shop)",
                photo: RJOimbe,
              },
              {
                name: "Mr. Vitthal R. Rahate",
                role: "Attendant (Welding Shop)",
                photo: VRRahate,
              },
              {
                name: "Mr. Balkrishna S. Sonone",
                role: "Attendant (Machine Shop)",
                photo: BSSonone,
              },
              {
                name: "Mr. Ganesh R. Payghan",
                role: "Lab Assistant (Fitting Shop)",
                photo: GRPayghan,
              },
              {
                name: "Mr. Amol A. Dhage",
                role: "Attendant (SGTR)",
                photo: AADhage,
              },
              {
                name: "Mr. Ramdas N. Pachade",
                role: "Attendant (SGTR)",
                photo: RNPachade,
              },
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
                    <img
                      src={staff.photo}
                      alt={staff.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaUserTie className="text-5xl text-gray-300 transition-transform group-hover:scale-110 duration-500" />
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                    {staff.name}
                  </h4>
                  <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                    {staff.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),

    "student-projects": (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
            <FaProjectDiagram className="text-orange-500 mr-2" /> Student
            Projects (UG)
          </h3>
          <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
            {["2024-25", "2023-24", "2022-23"].map((year) => (
              <button
                key={year}
                onClick={() => setProjectYear(year)}
                className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                  projectYear === year
                    ? "bg-ssgmce-blue text-white shadow-md"
                    : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
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
                  <th className="px-6 py-4 font-black tracking-wider w-16 text-center">
                    Group No.
                  </th>
                  <th className="px-6 py-4 font-black tracking-wider">
                    Project Title
                  </th>
                  <th className="px-6 py-4 font-black tracking-wider text-right">
                    Project Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(projectYear === "2024-25"
                  ? [
                      {
                        id: 1,
                        title:
                          "Design and Development of Solar Powered Water Pumping System",
                      },
                      {
                        id: 2,
                        title:
                          "Automated Seed Sowing Machine with IoT Integration",
                      },
                      {
                        id: 3,
                        title:
                          "Design of Hybrid Electric Vehicle Charging Station",
                      },
                      {
                        id: 4,
                        title:
                          "Development of Low-Cost CNC Machine for Educational Purpose",
                      },
                      { id: 5, title: "Smart Energy Meter Using IoT" },
                      {
                        id: 6,
                        title:
                          "Design and Fabrication of Automatic Wall Painting Machine",
                      },
                      {
                        id: 7,
                        title:
                          "Development of Portable Water Purification System",
                      },
                      {
                        id: 8,
                        title: "Design of Multi-Purpose Agricultural Equipment",
                      },
                      {
                        id: 9,
                        title: "Automatic Gear Shifting System for Two-Wheeler",
                      },
                      {
                        id: 10,
                        title:
                          "Design and Development of Wind Turbine for Rural Areas",
                      },
                      {
                        id: 11,
                        title:
                          "Smart Waste Segregation System Using Machine Learning",
                      },
                      {
                        id: 12,
                        title: "Design of Eco-Friendly Refrigeration System",
                      },
                      {
                        id: 13,
                        title:
                          "Development of Automatic Braking System for Heavy Vehicles",
                      },
                      {
                        id: 14,
                        title: "Design and Fabrication of Hydraulic Jack",
                      },
                      {
                        id: 15,
                        title:
                          "Solar Powered Irrigation System with Moisture Sensor",
                      },
                    ]
                  : projectYear === "2023-24"
                    ? [
                        {
                          id: 1,
                          title:
                            "Design and Development of Automatic Floor Cleaning Robot",
                        },
                        {
                          id: 2,
                          title:
                            "Fabrication of Pedal Operated Washing Machine",
                        },
                        {
                          id: 3,
                          title:
                            "Design of Low-Cost Ventilator for Emergency Use",
                        },
                        {
                          id: 4,
                          title:
                            "Development of Automatic Coconut Dehusking Machine",
                        },
                        {
                          id: 5,
                          title:
                            "Design and Fabrication of Paper Recycling Machine",
                        },
                        {
                          id: 6,
                          title: "Automatic Material Handling System Using PLC",
                        },
                        {
                          id: 7,
                          title:
                            "Design of Electric Bicycle with Pedal Assistance",
                        },
                        { id: 8, title: "Development of Multi-Crop Harvester" },
                        {
                          id: 9,
                          title:
                            "Design and Fabrication of Hydraulic Scissor Lift",
                        },
                        { id: 10, title: "Smart Parking System Using IoT" },
                        { id: 11, title: "Design of Portable Concrete Mixer" },
                        {
                          id: 12,
                          title:
                            "Development of Automatic Fire Detection and Extinguishing System",
                        },
                        {
                          id: 13,
                          title:
                            "Design and Fabrication of Air Conditioning System Using Exhaust Heat",
                        },
                        {
                          id: 14,
                          title:
                            "Automatic Irrigation System Based on Soil Moisture",
                        },
                        {
                          id: 15,
                          title: "Design of Friction Stir Welding Setup",
                        },
                      ]
                    : [
                        {
                          id: 1,
                          title:
                            "Design and Development of Pneumatic Sheet Metal Bending Machine",
                        },
                        {
                          id: 2,
                          title: "Fabrication of Multipurpose Workshop Machine",
                        },
                        {
                          id: 3,
                          title:
                            "Design of Solar Water Heater with Phase Change Material",
                        },
                        {
                          id: 4,
                          title:
                            "Development of Automatic Glass Cutting Machine",
                        },
                        {
                          id: 5,
                          title:
                            "Design and Fabrication of Pneumatic Punching Machine",
                        },
                        {
                          id: 6,
                          title:
                            "Automatic Street Light Control System Using LDR",
                        },
                        {
                          id: 7,
                          title: "Design of Portable Grass Cutting Machine",
                        },
                        {
                          id: 8,
                          title:
                            "Development of Hydraulic Pipe Bending Machine",
                        },
                        {
                          id: 9,
                          title:
                            "Design and Fabrication of Pedal Powered Flour Mill",
                        },
                        { id: 10, title: "Smart Home Automation System" },
                        { id: 11, title: "Design of Low-Cost Lathe Machine" },
                        {
                          id: 12,
                          title:
                            "Development of Automatic Bottle Filling Machine",
                        },
                        {
                          id: 13,
                          title:
                            "Design and Fabrication of Pneumatic Bumper Jack",
                        },
                        {
                          id: 14,
                          title: "Automatic Railway Gate Control System",
                        },
                        {
                          id: 15,
                          title: "Design of Vehicle Tracking System Using GPS",
                        },
                      ]
                ).map((project, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                      {project.id}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-800">
                      {project.title}
                    </td>
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
            <span className="font-bold text-ssgmce-blue">Note:</span> Students
            are encouraged to undertake projects from the final year. This
            hands-on approach helps them apply theoretical concepts to
            real-world mechanical engineering problems, fostering innovation and
            practical skills.
          </p>
        </div>
      </div>
    ),

    mous: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">MoUs</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships with industry leaders and academic
            institutions to enhance learning outcomes and provide students with
            real-world exposure.
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    Sr. No.
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    Name of the Organization
                  </th>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    MOU Signing Date
                  </th>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    MOU Copy / Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    no: "1.",
                    org: "Joshi Jampala Engineering Pvt. Ltd., Satara",
                    date: "05/03/2025",
                    report:
                      "/uploads/documents/mech_mous/MOU_Joshi_Jampala_2025.pdf",
                  },
                  {
                    no: "2.",
                    org: "Endress Hauser, Chat. Sambhajinagar",
                    date: "05/03/2025",
                    report:
                      "/uploads/documents/mech_mous/MOU_Endress_Hauser_2025.pdf",
                  },
                  {
                    no: "3.",
                    org: "SW System, Pune",
                    date: "05/03/2025",
                    report:
                      "/uploads/documents/mech_mous/MOU_SW_System_2025.pdf",
                  },
                  {
                    no: "4.",
                    org: "Tejas Polymer Engineers, Pune",
                    date: "05/03/2025",
                    report:
                      "/uploads/documents/mech_mous/MOU_Tejas_Polymer_2025.pdf",
                  },
                  {
                    no: "5.",
                    org: "Sharv Polyplast Pvt. Ltd., Pune",
                    date: "05/03/2025",
                    report:
                      "/uploads/documents/mech_mous/MOU_Sharv_Polyplast_2025.pdf",
                  },
                  {
                    no: "6.",
                    org: 'Krishna Vishwa Vidyapeeth "Deemed to be University", Karad, Maharashtra',
                    date: "16/01/2024",
                    report:
                      "/uploads/documents/mech_mous/MOU_KVV_Karad_2024.pdf",
                  },
                  {
                    no: "7.",
                    org: "Endress Hauser, Sambhaji Nagar (Aurangabad)",
                    date: "31/03/2022",
                    report:
                      "/uploads/documents/mech_mous/MOU_Endress_Hauser_2022.pdf",
                  },
                  {
                    no: "8.",
                    org: "Tool Tech Toolings Kirdak Auto Com Pvt. Ltd., Sambhaji Nagar (Aurangabad)",
                    date: "27/07/2022",
                    report:
                      "/uploads/documents/mech_mous/MOU_Tool_Tech_Toolings_2022.pdf",
                  },
                  {
                    no: "9.",
                    org: "Vinodrai Engg Pvt Ltd., MIDC, Jalna",
                    date: "16/03/2019",
                    report:
                      "/uploads/documents/mech_mous/MOU_Vinodrai_Engg_2019.pdf",
                  },
                  {
                    no: "10.",
                    org: "Mechatol Engg Solutions Pvt Ltd., Kothrud, Pune",
                    date: "19/01/2019",
                    report:
                      "/uploads/documents/mech_mous/MOU_Mechatol_Engg_2019.pdf",
                  },
                  {
                    no: "11.",
                    org: "Kala Group of Companies, MIDC Chakan, Pune",
                    date: "19/01/2019",
                    report:
                      "/uploads/documents/mech_mous/MOU_Kala_Group_2019.pdf",
                  },
                  {
                    no: "12.",
                    org: "Wadhokar Group of Companies, MIDC Chakan, Pune",
                    date: "19/01/2019",
                    report:
                      "/uploads/documents/mech_mous/MOU_Wadhokar_Group_2019.pdf",
                  },
                ].map((mou, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {mou.no}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{mou.org}</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      {mou.date}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={mou.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-ssgmce-blue hover:text-ssgmce-orange font-semibold text-sm transition-colors"
                      >
                        <FaFileAlt className="mr-1.5" />
                        View Document
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
    practices: (
      <div className="space-y-8">
        <div className="max-w-3xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">
            Innovative Practice
          </h3>
        </div>

        {/* Innovative Practice Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                style={{ backgroundColor: "#003366" }}
                className="text-white"
              >
                <tr>
                  <th className="px-6 py-4 text-center font-semibold whitespace-nowrap text-sm">
                    S.N.
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-sm">
                    Name of The Faculty
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-sm">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-sm">
                    Innovative Practice
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-sm">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t("innovativePractices", defaultInnovativePractices).map(
                  (item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-center font-medium text-gray-900">
                        {item.sn}
                      </td>
                      <td
                        className="px-6 py-4 text-center whitespace-nowrap"
                        style={{ color: "#003366" }}
                      >
                        <span className="font-medium">{item.faculty}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.subject}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {item.practice}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            Link
                          </a>
                        )}
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    visits: (() => {
      const industrialVisitPhotos = [
        {
          image: ivSanjeevVertex2024,
          caption:
            "Visit to Sanjeev Techno Product & Vertex Engineering, Sambhaji Nagar and Nashik on 28 March 2024",
          location: "Sambhaji Nagar & Nashik",
          date: "28 March 2024",
        },
        {
          image: ivTooltech2023,
          caption: "Visit to ToolTech, Sambhaji Nagar on 05 April 2023",
          location: "Sambhaji Nagar",
          date: "05 April 2023",
        },
        {
          image: ivParasThermal2022,
          caption: "Visit to Paras Thermal Power Plant on 07 April 2022",
          location: "Paras",
          date: "07 April 2022",
        },
        {
          image: ivHindustanHardy2020,
          caption: "Visit to Hindustan Hardy Ltd, Nashik on 20 January 2020",
          location: "Nashik",
          date: "20 January 2020",
        },
        {
          image: ivBosch2020,
          caption: "Visit to BOSCH, Nashik on 20 January 2020",
          location: "Nashik",
          date: "20 January 2020",
        },
        {
          image: ivGreavesCotton2019,
          caption: "Industry visit at Greaves Cotton, Aurangabad in 2018-19",
          location: "Aurangabad",
          date: "2018-19",
        },
        {
          image: ivAutoexpo2018,
          caption: "Visit to AutoExpo 2018, Aurangabad",
          location: "Aurangabad",
          date: "2018",
        },
        {
          image: ivYantra2019,
          caption:
            "Industry Visit at Yantra LLP Division, Aurangabad in 2018-19",
          location: "Aurangabad",
          date: "2018-19",
        },
        {
          image: ivVinodrai2018,
          caption:
            "Faculty Visit at Vinodrai Engineers Ltd, Aurangabad in 2017-18",
          location: "Aurangabad",
          date: "2017-18",
        },
        {
          image: ivSiemens2018,
          caption: "Industry visit at Siemens, Aurangabad in 2017-18",
          location: "Aurangabad",
          date: "2017-18",
        },
        {
          image: ivFlowtech2018,
          caption: "Visit to FlowTech, Aurangabad",
          location: "Aurangabad",
          date: "2017-18",
        },
        {
          image: ivGreavesCotton2018,
          caption: "Industry visit at Greaves Cotton, Aurangabad in 2017-18",
          location: "Aurangabad",
          date: "2017-18",
        },
      ];

      const industrialVisitTable = [
        {
          sn: 1,
          industry:
            "Sanjeev Techno Product & Vertex Engineering, Sambhaji Nagar and Nashik",
          class: "--",
          date: "28/03/2024",
          students: "--",
        },
        {
          sn: 2,
          industry: "ToolTech, Sambhaji Nagar",
          class: "--",
          date: "05/04/2023",
          students: "--",
        },
        {
          sn: 3,
          industry: "Paras Thermal Power Plant",
          class: "--",
          date: "07/04/2022",
          students: "--",
        },
        {
          sn: 4,
          industry: "Hindustan Hardy Ltd, Nashik",
          class: "--",
          date: "20/01/2020",
          students: "--",
        },
        {
          sn: 5,
          industry: "BOSCH, Nashik",
          class: "--",
          date: "20/01/2020",
          students: "--",
        },
        {
          sn: 6,
          industry: "Greaves Cotton, Aurangabad",
          class: "--",
          date: "2018-19",
          students: "--",
        },
        {
          sn: 7,
          industry: "AutoExpo 2018, Aurangabad",
          class: "--",
          date: "2018",
          students: "--",
        },
        {
          sn: 8,
          industry: "Yantra LLP Division, Aurangabad",
          class: "--",
          date: "2018-19",
          students: "--",
        },
        {
          sn: 9,
          industry: "Vinodrai Engineers Ltd, Aurangabad (Faculty Visit)",
          class: "--",
          date: "2017-18",
          students: "--",
        },
        {
          sn: 10,
          industry: "Siemens, Aurangabad",
          class: "--",
          date: "2017-18",
          students: "--",
        },
        {
          sn: 11,
          industry: "FlowTech, Aurangabad",
          class: "--",
          date: "2017-18",
          students: "--",
        },
        {
          sn: 12,
          industry: "Greaves Cotton, Aurangabad",
          class: "--",
          date: "2017-18",
          students: "--",
        },
      ];

      return (
        <div className="space-y-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              Industrial Visits
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hands-on exposure to industry practices, technologies, and work
              culture through structured visits to leading manufacturing and
              engineering organizations.
            </p>
          </div>

          {/* Photo Gallery Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <FaImages className="text-2xl text-ssgmce-blue" />
              <h4 className="text-xl font-bold text-gray-800">Visit Gallery</h4>
              <span className="text-sm font-medium text-ssgmce-blue bg-blue-50 px-3 py-1 rounded-full">
                {industrialVisitPhotos.length} Photos
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industrialVisitPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setIvLightbox(idx)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <FaSearchPlus className="absolute top-3 right-3 text-white text-lg drop-shadow" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                      {photo.caption}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-400" />
                        {photo.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-blue-400" />
                        {photo.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {ivLightbox !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
                onClick={() => setIvLightbox(null)}
              >
                <button
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl z-10"
                  onClick={() => setIvLightbox(null)}
                >
                  <FaTimes />
                </button>

                {/* Previous */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIvLightbox((prev) =>
                      prev === 0 ? industrialVisitPhotos.length - 1 : prev - 1,
                    );
                  }}
                >
                  <FaChevronLeft />
                </button>

                {/* Image */}
                <motion.div
                  key={ivLightbox}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="max-w-5xl max-h-[85vh] flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={industrialVisitPhotos[ivLightbox].image}
                    alt={industrialVisitPhotos[ivLightbox].caption}
                    className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
                  />
                  <div className="mt-4 text-center max-w-2xl">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {industrialVisitPhotos[ivLightbox].caption}
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-2 text-white/60 text-xs">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-400" />
                        {industrialVisitPhotos[ivLightbox].location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-blue-400" />
                        {industrialVisitPhotos[ivLightbox].date}
                      </span>
                      <span className="text-white/40">
                        {ivLightbox + 1} / {industrialVisitPhotos.length}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Next */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIvLightbox((prev) =>
                      prev === industrialVisitPhotos.length - 1 ? 0 : prev + 1,
                    );
                  }}
                >
                  <FaChevronRight />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Table Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <FaIndustry className="text-2xl text-ssgmce-blue" />
              <h4 className="text-xl font-bold text-gray-800">Visit Details</h4>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-ssgmce-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                        S.N.
                      </th>
                      <th className="px-6 py-4 text-left font-bold">
                        Name of Industry Visited
                      </th>
                      <th className="px-6 py-4 text-left font-bold">Class</th>
                      <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                        No of Students
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {industrialVisitTable.map((visit, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {String(visit.sn).padStart(2, "0")}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {visit.industry}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {visit.class}
                        </td>
                        <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                          {visit.date}
                        </td>
                        <td className="px-6 py-4 text-gray-700 text-center font-medium">
                          {visit.students}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    })(),
    patents: (
      <div className="space-y-8">
        <div className="flex flex-wrap space-x-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
          {["patents", "publications", "copyrights"].map((tab) => (
            <button
              key={tab}
              onClick={() => setResearchTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all capitalize ${researchTab === tab ? "bg-white text-ssgmce-blue shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab === "copyrights"
                ? "Copyrights"
                : tab === "patents"
                  ? "Patents"
                  : "Publications"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {researchTab === "patents" ? (
            <motion.div
              key="patents"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaLightbulb className="text-yellow-500 mr-2" />
                  <EditableText
                    value={t("patentsTitle", "Patents Granted & Published")}
                    onSave={(val) => updateData("patentsTitle", val)}
                  />
                </h3>
                <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                  {researchYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setResearchYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        researchYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(
                t(
                  `research.patents.${researchYear}`,
                  defaultMechPatents[researchYear],
                ) || []
              ).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No patents recorded for {researchYear}.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 font-black tracking-wider w-12 text-center">
                            #
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider w-1/3">
                            Title of Invention
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Application No.
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Inventors
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(
                          t(
                            `research.patents.${researchYear}`,
                            defaultMechPatents[researchYear],
                          ) || []
                        ).map((pat, i) => (
                          <tr
                            key={i}
                            className="hover:bg-green-50/30 transition-colors group"
                          >
                            <td className="px-6 py-4 text-center font-mono text-xs text-gray-400 group-hover:text-green-600">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-800">
                              <EditableText
                                value={pat.title}
                                onSave={(val) =>
                                  updatePatent(researchYear, i, "title", val)
                                }
                                multiline
                              />
                              <span
                                className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status === "Given" || pat.status === "Granted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
                              >
                                <EditableText
                                  value={
                                    pat.status === "Given"
                                      ? "Granted"
                                      : pat.status
                                  }
                                  onSave={(val) =>
                                    updatePatent(researchYear, i, "status", val)
                                  }
                                />
                              </span>
                            </td>
                            <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap text-right">
                              <EditableText
                                value={pat.id}
                                onSave={(val) =>
                                  updatePatent(researchYear, i, "id", val)
                                }
                              />
                            </td>
                            <td className="px-6 py-4 text-gray-500 italic text-right">
                              <EditableText
                                value={pat.inventors}
                                onSave={(val) =>
                                  updatePatent(
                                    researchYear,
                                    i,
                                    "inventors",
                                    val,
                                  )
                                }
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Institute-Level Patents */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <FaLightbulb className="text-orange-500 mr-2" />
                  Institute-Level Patent Applications
                </h4>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 font-black tracking-wider w-12 text-center">
                            #
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Title of Invention
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Application No. / Patent No.
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Date of Filing
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {defaultMechInstitutePatents.map((pat, i) => (
                          <tr
                            key={i}
                            className="hover:bg-green-50/30 transition-colors group"
                          >
                            <td className="px-6 py-4 text-center font-mono text-xs text-gray-400 group-hover:text-green-600">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-800">
                              {pat.title}
                            </td>
                            <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap text-right">
                              {pat.id}
                            </td>
                            <td className="px-6 py-4 text-xs text-gray-500 text-right">
                              {pat.filingDate}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status.toLowerCase().includes("granted") ? "bg-green-100 text-green-700" : pat.status.toLowerCase().includes("published") ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-600"}`}
                              >
                                {pat.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : researchTab === "publications" ? (
            <motion.div
              key="publications"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaChartLine className="text-ssgmce-orange mr-2" />
                  <EditableText
                    value={t("publicationsTitle", "Research Publications")}
                    onSave={(val) => updateData("publicationsTitle", val)}
                  />
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar mr-4">
                    {researchYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => setResearchYear(year)}
                        className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                          researchYear === year
                            ? "bg-ssgmce-blue text-white shadow-md"
                            : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detail Report PDF Link */}
              <div className="flex items-center gap-3 mb-2">
                <a
                  href={`/uploads/documents/mech_publications/MECH_publication_${researchYear}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-ssgmce-blue font-bold rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-sm"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  View Full Detail Report PDF ({researchYear})
                </a>
              </div>

              {(
                t(
                  `research.publications.${researchYear}`,
                  defaultMechPublications[researchYear],
                ) || []
              ).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No publications recorded for {researchYear}.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 font-black tracking-wider w-12 text-center">
                            #
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Title of Paper
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Authors
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Journal/Conference
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(
                          t(
                            `research.publications.${researchYear}`,
                            defaultMechPublications[researchYear],
                          ) || []
                        ).map((pub, i) => (
                          <tr
                            key={i}
                            className="hover:bg-indigo-50/30 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-xs text-gray-400">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-800">
                              <EditableText
                                value={pub.title}
                                onSave={(val) =>
                                  updatePublication(
                                    researchYear,
                                    i,
                                    "title",
                                    val,
                                  )
                                }
                                multiline
                              />
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              <EditableText
                                value={pub.authors}
                                onSave={(val) =>
                                  updatePublication(
                                    researchYear,
                                    i,
                                    "authors",
                                    val,
                                  )
                                }
                              />
                            </td>
                            <td className="px-6 py-4 text-gray-500 italic text-xs">
                              <EditableText
                                value={pub.journal}
                                onSave={(val) =>
                                  updatePublication(
                                    researchYear,
                                    i,
                                    "journal",
                                    val,
                                  )
                                }
                                multiline
                              />
                            </td>
                            <td className="px-6 py-4 text-right">
                              {pub.link ? (
                                <div className="flex flex-col items-end gap-1">
                                  <EditableText
                                    value={pub.link}
                                    onSave={(val) =>
                                      updatePublication(
                                        researchYear,
                                        i,
                                        "link",
                                        val,
                                      )
                                    }
                                    className="text-[10px] text-blue-500 underline truncate max-w-[100px]"
                                  />
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-ssgmce-blue hover:text-ssgmce-dark-blue font-bold px-3 py-1 bg-blue-50 rounded-lg transition-colors border border-blue-100"
                                  >
                                    View{" "}
                                    <FaExternalLinkAlt className="ml-2 text-[10px]" />
                                  </a>
                                </div>
                              ) : (
                                <span className="text-gray-400 text-xs">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          ) : researchTab === "copyrights" ? (
            <motion.div
              key="copyrights"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaAward className="text-purple-500 mr-2" />
                  Copyrights
                </h3>
                <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                  {researchYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setResearchYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        researchYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(defaultMechCopyrights[researchYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No copyrights recorded for {researchYear}.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-4 font-black tracking-wider w-12 text-center">
                            #
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Name of Faculty
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Title of Work
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(defaultMechCopyrights[researchYear] || []).map(
                          (cr, i) => (
                            <tr
                              key={i}
                              className="hover:bg-purple-50/30 transition-colors"
                            >
                              <td className="px-6 py-4 text-center font-mono text-xs text-gray-400">
                                {i + 1}
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-800">
                                {cr.name}
                              </td>
                              <td className="px-6 py-4 text-gray-700">
                                {cr.title}
                              </td>
                              <td className="px-6 py-4 text-right">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700">
                                  {cr.status}
                                </span>
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    ),

    internships: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            <EditableText
              value={t("internshipsTitle", "Internship and Training Record")}
              onSave={(val) => updateField("internshipsTitle", val)}
            />
          </h3>
          <div className="text-gray-600 max-w-2xl mx-auto">
            <EditableText
              value={t(
                "internshipsSubtitle",
                "Comprehensive internship and industrial training records providing students with hands-on industry experience and professional development.",
              )}
              onSave={(val) => updateField("internshipsSubtitle", val)}
              multiline
            />
          </div>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setInternshipYear("2023-24")}
              className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                internshipYear === "2023-24"
                  ? "bg-white text-ssgmce-blue shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Session: 2023-24
            </button>
            <button
              onClick={() => setInternshipYear("2022-23")}
              className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                internshipYear === "2022-23"
                  ? "bg-white text-ssgmce-blue shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Session: 2022-23
            </button>
          </div>
        </div>

        {/* Detail Report Download */}
        <div className="flex justify-center mb-4">
          <a
            href={
              internshipYear === "2023-24"
                ? "/uploads/documents/mech_internships/Mech_Internship_2023-24.pdf"
                : "/uploads/documents/mech_internships/Mech_Internship_2022-23.pdf"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium text-sm"
          >
            <FaDownload className="text-sm" />
            Download Detail Report ({internshipYear})
          </a>
        </div>

        {/* Internship Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    Sr. No.
                  </th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    SIS ID
                  </th>
                  <th className="px-3 py-4 text-left font-bold">
                    Name of Student
                  </th>
                  <th className="px-3 py-4 text-left font-bold">
                    Name of Company
                  </th>
                  <th className="px-3 py-4 text-left font-bold">Class</th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    Start Date
                  </th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    End Date
                  </th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    Paid (Y/N)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(
                  t(
                    `internships.${internshipYear}`,
                    defaultMechInternships[internshipYear],
                  ) || []
                ).map((intern, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      {intern.no}
                    </td>
                    <td className="px-3 py-3 text-gray-700">{intern.sis}</td>
                    <td className="px-3 py-3 text-gray-700">{intern.name}</td>
                    <td className="px-3 py-3 text-gray-700 text-xs">
                      {intern.org}
                    </td>
                    <td className="px-3 py-3 text-gray-700 text-center whitespace-nowrap">
                      {intern.class}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.startDate}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.endDate}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.paid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="text-center text-sm text-gray-500 mt-4">
          Total Records:{" "}
          {
            (
              t(
                `internships.${internshipYear}`,
                defaultMechInternships[internshipYear],
              ) || []
            ).length
          }{" "}
          students
        </div>
      </div>
    ),
  };

  const renderContent = () => {
    const activeLabel =
      academicsLinks.find((l) => l.id === activeTab)?.label ||
      industryLinks.find((l) => l.id === activeTab)?.label;

    return (
      content[activeTab] || (
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
            We are currently crafting this section to provide you with
            comprehensive insights. This content is in the pipeline and will be
            available shortly.
          </p>

          <button
            onClick={() => setActiveTab("overview")}
            className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm shadow-lg shadow-gray-200"
          >
            Back to Overview
          </button>
        </div>
      )
    );
  };

  const SidebarLink = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between group overflow-hidden
            ${
              activeTab === id
                ? "bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white shadow-lg border-l-4 border-ssgmce-orange"
                : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:text-ssgmce-blue hover:shadow-md hover:scale-[1.02]"
            }`}
    >
      <span className="flex items-center relative z-10">
        <span
          className={`w-2 h-2 rounded-full mr-3 transition- all duration-300 ${activeTab === id ? "bg-white shadow-md" : "bg-gray-400 group-hover:bg-ssgmce-orange group-hover:shadow-sm"}`}
        ></span>
        {label}
      </span>
      {activeTab === id && <FaAngleRight className="opacity-90 text-white" />}
    </button>
  );

  return (
    <GenericPage
      title="Mechanical Engineering"
      backgroundImage={mechanicalBanner}
    >
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        <div className="lg:w-1/4 order-1 lg:order-1">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 pb-4 scrollbar-thin scrollbar-thumb-ssgmce-blue scrollbar-track-gray-100">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <FaUniversity className="text-ssgmce-orange mr-2" /> Academics
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {academicsLinks.map((link) => (
                  <SidebarLink key={link.id} {...link} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-ssgmce-orange to-orange-600 p-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <FaIndustry className="text-white mr-2" /> Industry Relation
                </h3>
              </div>
              <div className="p-4 space-y-2">
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
