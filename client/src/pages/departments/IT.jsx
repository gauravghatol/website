import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import {
  defaultFaculty as IT_DEFAULTS,
  defaultActivities,
  defaultPrideGate,
  defaultPrideToppersBE,
  defaultPrideAlumni,
  defaultNewsletters,
  defaultAchievements,
  defaultInnovativePractices,
  defaultItPatents,
  defaultItPublications,
  defaultItConferences,
  defaultItBooks,
  defaultItCopyrights,
  defaultItUgProjects,
} from "../../data/itDefaults";
import { defaultPlacements } from "../../data/itPlacements";
import { defaultItInternships } from "../../data/itInternships";
import itBanner from "../../assets/images/departments/it/IT banner.png";

// Industrial Visit Photos
import ivValueMomentum2025 from "../../assets/images/departments/it/industrial-visits/valuemomentum_pune_2025.png";
import ivHcltech2024 from "../../assets/images/departments/it/industrial-visits/hcltech_nagpur_2024.png";
import ivSaama2024 from "../../assets/images/departments/it/industrial-visits/saama_technologies_pune_2024.png";
import ivValueMomentum2024 from "../../assets/images/departments/it/industrial-visits/valuemomentum_pune_2024.png";
import ivMindscripts2020 from "../../assets/images/departments/it/industrial-visits/mindscripts_pune_2020.jpg";
import ivJadeGlobal2020 from "../../assets/images/departments/it/industrial-visits/jade_global_pune_2020.jpg";
import ivEzest2018 from "../../assets/images/departments/it/industrial-visits/ezest_pune_2018.jpg";
import ivRamakrishna2018 from "../../assets/images/departments/it/industrial-visits/ramakrishna_it_pune_2018.jpg";

// HOD Photo
import hodPhoto from "../../assets/images/departments/it/faculty/SDPadiya.jpg";

// Faculty Photos
import asmPhoto from "../../assets/images/departments/it/faculty/ASM.png";
import pvkPhoto from "../../assets/images/departments/it/faculty/PVK.jpg";
import agsPhoto from "../../assets/images/departments/it/faculty/AGS.jpg";
import fikPhoto from "../../assets/images/departments/it/faculty/FIK.jpg";
import ssmPhoto from "../../assets/images/departments/it/faculty/SSM.jpg";
import ppbPhoto from "../../assets/images/departments/it/faculty/PallaviBute.jpg";
import snkPhoto from "../../assets/images/departments/it/faculty/SNK.jpg";
import nngPhoto from "../../assets/images/departments/it/faculty/NNG.jpg";
import palPhoto from "../../assets/images/departments/it/faculty/PALod.jpeg";
import kpPhoto from "../../assets/images/departments/it/faculty/KP.jpeg";

// Photo map for resolving IT faculty photo string references
const itPhotoMap = {
  SDP: hodPhoto,
  ASM: asmPhoto,
  PVK: pvkPhoto,
  AGS: agsPhoto,
  FIK: fikPhoto,
  SSM: ssmPhoto,
  PPB: ppbPhoto,
  SNK: snkPhoto,
  NNG: nngPhoto,
  PAL: palPhoto,
  KP: kpPhoto,
};

// Resolve IT faculty photos from string references to actual imports
const IT_DEFAULT_FACULTY = IT_DEFAULTS.map((f) => ({
  ...f,
  photo: itPhotoMap[f.photo] || f.photo,
}));

import { AnimatePresence, motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBullseye,
  FaUserTie,
  FaAward,
  FaAngleRight,
  FaIndustry,
  FaUniversity,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
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
  FaFileAlt,
  FaImages,
  FaSearchPlus,
  FaMapMarkerAlt,
  FaBook,
} from "react-icons/fa";

// IT_DEFAULT_FACULTY is now imported and resolved above via itDefaults.js + itPhotoMap

const IT = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState("gate");
  const [researchTab, setResearchTab] = useState("projects");
  const [projectYear, setProjectYear] = useState("2024-25");
  const [ugProjectYear, setUgProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2024-25");
  const [placementYear, setPlacementYear] = useState(null);
  const [patentSubTab, setPatentSubTab] = useState("patents");
  const [internshipYear, setInternshipYear] = useState("2024-25");
  const researchYears = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
  ];

  const updateInternship = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("internships", defaultItInternships)),
    );
    dataObj[year][index][field] = value;
    updateData("internships", dataObj);
  };

  // State for Industrial Visit lightbox
  const [ivLightbox, setIvLightbox] = useState(null);

  // State for Curricular Activities section
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-it");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
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

  const updateActivity = (idx, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("activities", defaultActivities)));
    arr[idx][field] = value;
    updateData("activities", arr);
  };

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

  const updateFacultyMember = (index, field, value) => {
    const faculty = JSON.parse(
      JSON.stringify(t("templateData.faculty", IT_DEFAULT_FACULTY)),
    );
    faculty[index] = { ...faculty[index], [field]: value };
    updateField("templateData.faculty", faculty);
  };

  const academicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "vision-mission", label: "Vision, Mission, PEO & PSO" },
    { id: "course-outcomes", label: "Course Outcomes" },
    { id: "curriculum", label: "Scheme and Syllabus" },
    { id: "laboratories", label: "Infrastructure and Laboratories" },
    { id: "best-projects", label: "Students Best Projects" },
    { id: "pride", label: "Pride of the Department" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Curricular Activities" },
    { id: "newsletter", label: "Newsletter" },
    { id: "achievements", label: "Achievements" },
    { id: "course-material", label: "Course Material" },
    { id: "projects", label: "UG Projects" },
    { id: "services", label: "Services Offered" },
    { id: "practices", label: "Innovative Practice" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const industryLinks = [
    { id: "industrial-visits", label: "Industrial Visits" },
    { id: "mous", label: "MoUs" },
    { id: "patents", label: "Publication" },
    { id: "internships", label: "Internship and Training" },
  ];

  const content = {
    overview: (
      <div className="space-y-10">
        {/* Department Header with Video */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center border-b border-gray-100 pb-4">
            <FaLaptopCode className="text-orange-500 mr-3 text-3xl" />
            Department of Information Technology
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
                    "https://www.youtube-nocookie.com/embed/u6vMoPzmlk8",
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
                "https://www.youtube-nocookie.com/embed/u6vMoPzmlk8",
              )}
              title="Department of Information Technology SSGMCE"
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
                  "The Department of Information Technology was established in the year 2001. The department offers B.E. in Information Technology with an intake of 60 students. The department has state-of-the-art computer laboratories with high-speed internet connectivity.",
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
                  "Our mission is to provide quality education in the field of Information Technology and to prepare students for the challenges of the IT industry. we emphasize practical learning, project development, and current technology trends.",
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
                    "Bachelor of Engineering (Information Technology)",
                  ],
                  ["Duration", "4 Year(8 Semesters) (Full time)"],
                  ["Intake", "60 Students per year"],
                  ["Establishment", "Year: 2001"],
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
            <p className="text-ssgmce-blue font-medium">Dr. S. D. Padiya</p>
            <p className="text-sm text-gray-500">
              Head, Department of Information Technology
            </p>
          </div>
        </div>
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
                  <EditableImage
                    src={t("hodPhoto", hodPhoto)}
                    onSave={(url) => updateField("hodPhoto", url)}
                    alt="Dr. S. D. Padiya - HOD IT"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                <EditableText
                  value={t("hodName", "Dr. S. D. Padiya")}
                  onSave={(val) => updateField("hodName", val)}
                />
              </h3>
              <div className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                <EditableText
                  value={t("hodDesignation", "Head of Department")}
                  onSave={(val) => updateField("hodDesignation", val)}
                />
              </div>
              <p className="text-gray-600 text-sm mt-1">
                <EditableText
                  value={t(
                    "hodDepartmentTitle",
                    "Department of Information Technology",
                  )}
                  onSave={(val) => updateField("hodDepartmentTitle", val)}
                />
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-ssgmce-orange" />
                  <span>
                    <EditableText
                      value={t("hodEmail1", "sdpadiya@ssgmce.ac.in")}
                      onSave={(val) => updateField("hodEmail1", val)}
                    />
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-ssgmce-orange" />
                  <span>
                    <EditableText
                      value={t("hodEmail2", "+91 7588501506")}
                      onSave={(val) => updateField("hodEmail2", val)}
                    />
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  <EditableText
                    value={t("hodBadge1", "Associate Professor")}
                    onSave={(val) => updateField("hodBadge1", val)}
                  />
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  <EditableText
                    value={t("hodBadge2", "BLE, WSN, IoT")}
                    onSave={(val) => updateField("hodBadge2", val)}
                  />
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
                <EditableText
                  value={t("hodMessageTitle", "Message from the HOD")}
                  onSave={(val) => updateField("hodMessageTitle", val)}
                />
              </h3>
              <div className="h-1 w-20 bg-ssgmce-orange mt-2 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <EditableText
                value={t(
                  "hodMessage",
                  "Dear Friends,\n\nInformation Technology is one of the emerging computing disciplines. Nowadays Computers became essential work tools at every level of most organizations, and networked computer systems became the information backbone of organizations.\n\nInformation technology refers to undergraduate degree programs that prepare students to meet the computer technology needs of business, government, healthcare, schools, and other kinds of organizations.\n\nIT is a new and rapidly growing field that started as a grassroots response to the practical, everyday needs of business and other organizations. Today, organizations of every kind are dependent on information technology. They need to have appropriate systems in place. These systems must work properly, be secure, and upgraded, maintained, and replaced as appropriate. Employees throughout an organization require support from IT staff that understand computer systems and their software and are committed to solving whatever computer-related problems they might have. Graduates of information technology programs address these needs.\n\nDegree programs in information technology arose because degree programs in the other computing disciplines were not producing an adequate supply of graduates capable of handling these very real needs. IT programs exist to produce graduates who possess the right combination of knowledge and practical, hands-on expertise to take care of both an organization's information technology infrastructure and the people who use it. IT specialists assume responsibility for selecting hardware and software products appropriate for an organization, integrating those products with organizational needs and infrastructure, and installing, customizing, and maintaining those applications for the organization's computer users.\n\nInformation technology professionals should be able to work effectively at planning, implementation, configuration, and maintenance of an organization's computing infrastructure.",
                )}
                onSave={(val) => updateField("hodMessage", val)}
                multiline
                className="whitespace-pre-wrap"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div>
                <div className="font-dancing text-2xl text-ssgmce-blue">
                  <EditableText
                    value={t("hodName", "Dr. S. D. Padiya")}
                    onSave={(val) => updateField("hodName", val)}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  <EditableText
                    value={t(
                      "hodDesignation",
                      "Head, Department of Information Technology",
                    )}
                    onSave={(val) => updateField("hodDesignation", val)}
                  />
                </div>
              </div>
              <div className="text-right text-sm text-gray-400">
                <p>
                  <EditableText
                    value={t(
                      "signatureCollegeName1",
                      "Shri Sant Gajanan Maharaj",
                    )}
                    onSave={(val) => updateField("signatureCollegeName1", val)}
                  />
                </p>
                <p>
                  <EditableText
                    value={t(
                      "signatureCollegeName2",
                      "College of Engineering, Shegaon",
                    )}
                    onSave={(val) => updateField("signatureCollegeName2", val)}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    "vision-mission": (
      <div className="space-y-8">
        {/* Top Section: Vision & Mission Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {[
              { id: "vision", label: "Vision" },
              { id: "mission", label: "Mission" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setVmTab(tab.id)}
                className={`flex-1 px-6 py-4 font-bold text-sm transition-all relative ${
                  vmTab === tab.id
                    ? "text-white bg-[#003366]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
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
                <div className="text-ssgmce-orange text-xl mt-1 flex-shrink-0">
                  ➤
                </div>
                <div className="text-gray-700 text-lg leading-relaxed flex-1">
                  <EditableText
                    value={t(
                      "vision",
                      "To establish the department as a centre of academic excellence by integrating current IT trends and aligning with industry needs.",
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
                  "To develop essential technical and interpersonal skills in students for their personal and professional growth in the IT industry.",
                  "To enable students to apply their IT knowledge and skills to achieve organizational goals.",
                  "To cultivate leadership qualities and promote continuous learning in students to meet the evolving needs of society.",
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
              { id: "peo", label: "Program Educational Objectives" },
              { id: "po", label: "Program Outcome" },
              { id: "pso", label: "Program Specific Outcome" },
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
                <p className="text-gray-600 text-sm mb-4 italic">
                  Graduates, within five years after graduation, should
                  demonstrate
                </p>
                {[
                  "Technical competence: To develop proficiency in analyzing, designing, and implementing IT solutions using contemporary tools and technologies.",
                  "Professional skills: To demonstrate effective communication, teamwork, and leadership abilities in professional settings.",
                  "Continuous learning: To engage in lifelong learning and adapt to emerging technologies and industry trends.",
                  "Ethical responsibility: To practice professional ethics and contribute responsibly to society and the environment.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
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
                  "Demonstrate proficiency in software development, database management, and web technologies to design and implement scalable IT solutions.",
                  "Apply knowledge of networking, cybersecurity, and cloud computing to develop secure and efficient information systems.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
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
                  className="inline-flex items-center text-ssgmce-orange font-bold hover:text-ssgmce-blue transition-colors mt-2"
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
            Comprehensive course outcomes for all semesters of B.E. Information
            Technology
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              B.E. Information Technology - Course Outcomes
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT200PC Discrete Structure and Graph Theory
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the basic terminologies of mathematical
                            logic, theory of inference and set theory
                          </li>
                          <li>
                            Apply mathematical logic, inference theory and set
                            theory, to solve engineering problems
                          </li>
                          <li>
                            Apply algebraic structures, grammar, polish
                            expressions and lattices to solve the mathematics
                            expressions
                          </li>
                          <li>
                            Apply the lattices for partially ordered relations
                            and Boolean algebraic simplification methods to
                            minimize the Boolean functions
                          </li>
                          <li>
                            Analyze graphs based on various parameters for graph
                            manipulation and storage representation
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT201PC Object Oriented Programming
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Java syntax and constructs to implement
                            functional programs
                          </li>
                          <li>
                            Apply the concepts of inheritance, aggregation,
                            method overriding, abstract classes, interfaces, and
                            packages to develop Java programs
                          </li>
                          <li>
                            Apply the concepts of exception handling and file
                            handling to develop robust Java programs
                          </li>
                          <li>
                            Apply the concepts of Java applets to develop
                            interactive graphical programs
                          </li>
                          <li>
                            Apply event-handling concepts to develop interactive
                            Java applications
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT202PC Analog and Digital Electronics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the basic concepts of analog electronics while
                            choosing a transistor as per application
                          </li>
                          <li>
                            Categorize different applications of the operational
                            amplifier
                          </li>
                          <li>
                            Discriminate the working of sinusoidal and
                            non-sinusoidal waveform generators
                          </li>
                          <li>
                            Apply the basic concepts of digital electronics and
                            K-map to simplify logic expressions
                          </li>
                          <li>
                            Analyze combinational and sequential circuits for
                            different applications
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT205MD Introduction to Data Structures
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply data structure concepts to analyze complexity
                            and perform operations like searching, sorting,
                            insertion, and deletion on linear arrays
                          </li>
                          <li>
                            Apply linked lists, stacks, and queues with basic
                            operations to solve computational problems
                          </li>
                          <li>
                            Implement and analyze tree and graph data structures
                            with traversal, searching, and path- finding
                            algorithms
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT206OE OE-1 Cyber Law
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply basic computer and internet concepts to
                            analyze their role in digital business and
                            governance
                          </li>
                          <li>
                            Apply knowledge of e-payment systems to select
                            suitable methods for secure online transactions
                          </li>
                          <li>
                            Identify types of cybercrimes and common techniques
                            used by cyber offenders
                          </li>
                          <li>
                            Categorize cybercrimes and relate them to relevant
                            legal provisions
                          </li>
                          <li>
                            Apply sections of the IT Act to given cyber law
                            scenarios
                          </li>
                          <li>
                            Describe ethical and security concerns associated
                            with the use of digital technologies
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT207EM Entrepreneurship Development
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the definitions and fundamental concepts
                            of entrepreneurship and start-ups
                          </li>
                          <li>
                            Understand the role of a business plan in guiding
                            the implementation of business ideas
                          </li>
                          <li>
                            Understand the company’s organization structure and
                            its role in effective management. Course Name:
                            Environmental Science Course Code: 3SH208VE
                          </li>
                          <li>
                            Understand the multidisciplinary nature of
                            environment and Renewable and non-renewable
                            resources
                          </li>
                          <li>
                            Understand natural environment and its relationship
                            with human activities
                          </li>
                          <li>
                            Understand the basic concepts and problems and
                            follow sustainable development practices
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT209PC Data Structures
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain fundamental concepts of data structures and
                            pattern matching algorithms
                          </li>
                          <li>
                            Use linear and multidimensional arrays for
                            problem-solving
                          </li>
                          <li>
                            Construct and manipulate various types of linked
                            lists
                          </li>
                          <li>
                            Apply stack and queue operations in practical
                            problems
                          </li>
                          <li>
                            Use binary trees, BSTs, and heaps to solve problems
                          </li>
                          <li>
                            Design and implement graph traversals and sorting
                            techniques
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT210PC Data Communication &amp; Networking
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the fundamental concepts of data
                            communication, including components, types of data
                            flow, and communication systems
                          </li>
                          <li>
                            Compare the OSI and TCP/IP models by analyzing the
                            functionalities and protocols at each layer
                          </li>
                          <li>
                            Apply knowledge of signal conversion methods and
                            apply error detection and correction techniques to
                            ensure reliable communication
                          </li>
                          <li>
                            Analyze IPv4/IPv6 protocols, and packet delivery
                            processes
                          </li>
                          <li>
                            Compare and contrast TCP and UDP features, use
                            cases, and transport layer mechanisms
                          </li>
                          <li>
                            Assess application layer services like DNS and HTTP
                            and troubleshoot networking issues using protocols
                            and addressing schemes
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT211PC Computer Organization &amp; Architecture
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the basic knowledge of computers to
                            demonstrate the working of the computer system
                          </li>
                          <li>
                            Analyze the execution of a complete instruction
                            within the processing unit
                          </li>
                          <li>
                            Discover the approaches computers follow to handle
                            input/output operations
                          </li>
                          <li>
                            Choose memory at each level in the computer based on
                            its functionalities
                          </li>
                          <li>
                            Interpret the arithmetic operations done by the
                            computer
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT214MD Introduction to Operating Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain and apply process scheduling algorithms
                          </li>
                          <li>
                            Apply synchronization and deadlock-related issues
                          </li>
                          <li>Investigate memory management techniques</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT215VS Computer Skills – I
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the knowledge of Internet, web protocols,
                            servers and web design principles to develop
                            effective websites
                          </li>
                          <li>
                            Apply the concepts and structure of HTML to create
                            basic web pages
                          </li>
                          <li>
                            Apply HTML elements knowledge to design web pages by
                            working with text, lists, tables, frames,
                            hyperlinks, images, multimedia etc
                          </li>
                          <li>
                            Analyze and implement CSS techniques to create
                            visually appealing and responsive web pages
                          </li>
                          <li>
                            Apply JavaScript concepts to develop interactive and
                            user-friendly web pages
                          </li>
                          <li>
                            Apply your knowledge to build dynamic web
                            applications using PHP by integrating PHP with HTML
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT216OE2 Artificial Intelligence
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the Artificial Intelligence concepts.
                            History, types, intelligent agents, and applications
                            of AI
                          </li>
                          <li>
                            Apply problem-solving techniques using uninformed
                            and informed search strategies to solve AI-related
                            problems
                          </li>
                          <li>
                            Analyze knowledge representation methods basic
                            machine learning approaches to design simple AI/ML
                            solutions
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4IT217EM IT Ethics and Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Engineering and professional ethics, morals,
                            and laws in day to day life
                          </li>
                          <li>
                            Analyze engineering ethical dilemmas using moral
                            reasoning and professional codes of ethics
                          </li>
                          <li>
                            Analyze computing ethics issues and apply IEEE Codes
                            to privacy, intellectual property, and cyber crimes
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4SH219VE Universal Human Values and Ethics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the concept of self, differentiate
                            physical and mental needs, and apply human values
                            for personal well-being and ethical awareness in
                            engineering
                          </li>
                          <li>
                            Understand and apply trust, empathy, conflict
                            resolution, and ethical principles in relationships,
                            family, and society
                          </li>
                          <li>
                            Apply professional ethics, promote sustainability in
                            engineering practices, and understand corporate and
                            global ethical responsibilities including CSR
                          </li>
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT01 Database Management Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Construct ER model with notations and constraints
                          </li>
                          <li>
                            Build relational algebra queries using basic,
                            additional and extended operations
                          </li>
                          <li>
                            Create SQL queries based on the relation schema and
                            tasks
                          </li>
                          <li>
                            Apply concurrency control protocols on schedules and
                            transactions
                          </li>
                          <li>
                            Create roles, grant and revoke the privileges for
                            providing database security
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT02 Theory of Computations
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze formal languages with help of fundamental
                            concepts and Finite Automata
                          </li>
                          <li>
                            Create regular expressions and grammars which can be
                            used to represent formal language in different forms
                          </li>
                          <li>
                            Analyze the formal languages, their powers using
                            different forms of grammars and classify them
                            according to Chomsky hierarchy
                          </li>
                          <li>
                            Design Push Down Automata for a Context Free
                            Language along with context sensitive languages
                          </li>
                          <li>
                            Design Turing machine for performing different types
                            for computations
                          </li>
                          <li>
                            Identify the decidability and un-decidability of
                            problems in case of formal languages
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT03 Software Engineering
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the Fundamental Concepts of software
                            engineering life cycle
                          </li>
                          <li>
                            Elaborate the software engineering requirements
                            specification and the SRS documents
                          </li>
                          <li>
                            Examine the software engineering layered technology
                            and process framework
                          </li>
                          <li>
                            Illustrate the Use Case diagram, DFD, Sequence
                            diagram, class diagram, Activity diagram and state
                            Transition diagram
                          </li>
                          <li>
                            Demonstrate the competence in communication
                            planning, analysis, design, construction, and
                            development of software as per requirement
                          </li>
                          <li>
                            Develop a basic report on software testing for
                            effectively test, debug, and validate software
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT04 Information Security Systems (PE-1(i))
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply fundamental information security concepts and
                            the security development life cycle to secure
                            information systems
                          </li>
                          <li>
                            Apply knowledge of threats, attacks, and
                            legal/ethical issues to determine organizational
                            security needs
                          </li>
                          <li>
                            Apply legal and ethical principles to support secure
                            and responsible information security practices
                          </li>
                          <li>
                            Analyze organizational risks using risk
                            identification, assessment, and risk control
                            strategies
                          </li>
                          <li>
                            Apply security planning methods, policies,
                            governance frameworks, and continuity strategies
                            within an organization
                          </li>
                          <li>
                            Analyze cryptographic techniques, algorithms, and
                            secure communication protocols to evaluate their
                            effectiveness
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT04 Data Science &amp; Statistics (PE-1(ii))
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Numpy and Pandas Library functions on datasets
                          </li>
                          <li>
                            Analyze data by performing EDA and data
                            visualization by using plots
                          </li>
                          <li>
                            Create hypothesis on data and perform hypothesis
                            testing required
                          </li>
                          <li>
                            Evaluate the Performance of Linear Regression model
                            on dataset
                          </li>
                          <li>
                            Evaluate the Performance of Logistic Regression
                            Measure Decision Tree Algorithm on datasets
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT05 Data Structures and Algorithms (Open Elective)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Summarize the fundamental concepts of Data
                            Structures and algorithms. CO2; Demonstrate the
                            implementation of arrays and linked lists in data
                            structures
                          </li>
                          <li>
                            Illustrate stack and queue operations with
                            real-world examples
                          </li>
                          <li>
                            Explain different binary tree traversal methods with
                            examples
                          </li>
                          <li>
                            Apply graph representation techniques and implement
                            the shortest path algorithm
                          </li>
                          <li>
                            Compare various sorting and searching techniques
                            based on their efficiency
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5IT09 Computer Skill Lab III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Install and configure Angular CLI to create and run
                            a basic Angular application
                          </li>
                          <li>
                            Design, create, and navigate Angular components and
                            analyze component lifecycle events
                          </li>
                          <li>
                            Implement variables and data binding techniques to
                            connect templates with component logic
                          </li>
                          <li>
                            Apply Angular Signals to manage reactive state and
                            improve application performance
                          </li>
                          <li>
                            Use Angular directives to manipulate DOM elements
                            dynamically
                          </li>
                          <li>
                            Implement control flow statements in Angular
                            templates for conditional rendering and iteration
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT01 Compiler Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the fundamentals of compilation for
                            designing lexical analyzers by utilizing regular
                            expressions, LEX, YACC, etc. for token specification
                            and recognition
                          </li>
                          <li>
                            Perform syntax analysis using top-down parsing
                            methods such as Back-Tracking, LL(k), etc. for error
                            detection and error recovery in predictive parsing
                          </li>
                          <li>
                            Perform syntax analysis using bottom-up parsing such
                            as Handle Pruning, Shift-Reduce, LR(k), etc. methods
                            for error detection and error recovery in predictive
                            parsing
                          </li>
                          <li>
                            Design and implement syntax-directed translations,
                            using synthesized and inherited attributes with
                            syntax trees, directed acyclic graphs, and evaluate
                            syntax-directed definitions using various methods
                          </li>
                          <li>
                            Demonstrate key concepts in runtime environments,
                            and intermediate code generation for various source
                            language constructs
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT02 Design Analysis &amp; Algorithm
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze worst-case running times of algorithms using
                            asymptotic analysis
                          </li>
                          <li>
                            Apply the divide-and-conquer paradigm and examine
                            when an algorithmic design situation calls for it
                          </li>
                          <li>
                            Differentiate the greedy-programming paradigm and
                            solve an algorithmic design situation calls for it
                          </li>
                          <li>
                            Examine the dynamic programming approach and explain
                            when an algorithmic design situation calls for it
                          </li>
                          <li>
                            Differentiate and apply the concept of Backtracking,
                            Polynomial Time &amp; Non Polynomial Time Algorithms
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT03 Artificial Intelligence
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain concepts of Artificial Intelligence and
                            different types of intelligent agents and their
                            architecture
                          </li>
                          <li>
                            Evaluate different uninformed search algorithms on
                            well formulate problems along with stating valid
                            conclusions that the evaluation supports
                          </li>
                          <li>
                            Design and analyze informed search algorithms on
                            well formulated problems
                          </li>
                          <li>
                            Formulate and solve given problem using
                            Propositional and First order logic
                          </li>
                          <li>Apply reasoning for non-monotonic AI problems</li>
                          <li>
                            Have a basic understanding of some of the more
                            advanced topics of AI such as learning,
                            Understanding, Natural Language Processing
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT04 Cryptography and Network Security (PE-1(i))
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply fundamental cartographic principles to secure
                            communication
                          </li>
                          <li>
                            Implement encryption and decryption techniques
                            ensuring confusion and diffusion
                          </li>
                          <li>
                            Compare and analyze symmetric and asymmetric
                            encryption method for data security
                          </li>
                          <li>
                            Evaluate the role of network security protocols in
                            securing data transmission
                          </li>
                          <li>
                            Identify network security threats and implement
                            countermeasures
                          </li>
                          <li>
                            Identify different Web and system security solutions
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT04 Big Data Analytics (PE-1(ii))
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Illustrate the concepts of big data</li>
                          <li>
                            Apply Hadoop goals and assumptions for choosing the
                            proper component of the Hadoop ecosystem
                          </li>
                          <li>
                            Apply the MapReduce operations based on the tasks
                          </li>
                          <li>
                            Apply stream processing algorithms to data,
                            considering issues in it
                          </li>
                          <li>
                            Identify the big data mining algorithm based on the
                            applications
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT05 Data Communication and Internet (Open Elective)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the fundamental concepts and principles of
                            computer networking
                          </li>
                          <li>
                            Describe the components of data communication
                            systems and the role of various networking protocols
                          </li>
                          <li>
                            Apply networking concepts to demonstrate information
                            sharing mechanisms in computer networks
                          </li>
                          <li>
                            Explain the flow of data, categories of networks,
                            and different network topologies
                          </li>
                          <li>
                            Apply knowledge of signals, transmission media, and
                            error detection and correction techniques in data
                            communication
                          </li>
                          <li>
                            Illustrate the building blocks and functioning of a
                            digital communication system
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6IT09 Computer Skill Lab – IV
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply basic Artificial Intelligence concepts and
                            intelligent agent models to identify problem types
                            and working environments
                          </li>
                          <li>
                            Implement and analyze AI problem-solving techniques
                            using uninformed and informed search strategies in
                            Python
                          </li>
                          <li>
                            Develop programs that demonstrate reasoning and
                            decision-making using knowledge representation,
                            game-playing, and uncertainty handling techniques
                          </li>
                          <li>
                            Apply natural language processing techniques to
                            build simple AI applications using appropriate
                            programming tools
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT01 Mobile Computing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Gain knowledge of basic concepts of Mobile Computing
                            and Principals of cellular communication
                          </li>
                          <li>
                            Understand different components, devices for mobile
                            computing and understand wireless application
                            protocol
                          </li>
                          <li>
                            Able to implement different concepts of mobile
                            computing fundamentals using wireless scripting
                            language
                          </li>
                          <li>
                            To develop ability for developing open platform
                            mobile development
                          </li>
                          <li>
                            Explore concepts of distributed mobile computing
                          </li>
                          <li>
                            Identify &amp; understand different security issues
                            in mobile computing
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT02 Embedded System
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the basic components (hardware,
                            application software and operating system) required
                            for the development of embedded applications
                          </li>
                          <li>
                            Identify the various components, computing models
                            and communication devices required for the
                            development of an embedded application
                          </li>
                          <li>
                            Apply the programming, data structures and modeling
                            processes for the implementation of network
                            protocols
                          </li>
                          <li>
                            Design the programming models for the analysis of
                            priority based multiprocessing real time embedded
                            systems
                          </li>
                          <li>
                            Analyzed the priority based inter-process
                            communication and synchronization issues and
                            relevant solutions to make embedded applications
                            real time
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT03 Cloud Computing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the fundamental concept, architecture and
                            applications of Cloud Computing
                          </li>
                          <li>
                            Discuss the problems related to cloud deployment
                            model
                          </li>
                          <li>Examine the concept of virtualization</li>
                          <li>
                            Identify the role of network connectivity in the
                            cloud
                          </li>
                          <li>Assess different Cloud service providers</li>
                          <li>
                            Inspect the security issues in cloud service models
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT04 Machine Learning (Prof. Elect.-III) (i)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Understand the concept of Machine Learning</li>
                          <li>
                            Understand how to evaluate models generated from
                            data
                          </li>
                          <li>
                            Implement a variety of algorithms for Supervised
                            Learning
                          </li>
                          <li>
                            Implement a variety of algorithms for Unsupervised
                            Learning
                          </li>
                          <li>
                            Implement a variety of algorithms for Reinforcement
                            Learning
                          </li>
                          <li>Understand the concept of Neural Networks</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT05 Blockchain Fundaments (Prof. Elect.-IV) (i)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Examine the concept of decentralization and its
                            importance in blockchain systems
                          </li>
                          <li>
                            Illustrate the process of Cryptocurrency
                            transactions &amp; role of miner in securing
                            Cryptocurrency networks
                          </li>
                          <li>
                            Evaluate the limitations of Bitcoin and propose
                            alternative solutions for specific use cases
                          </li>
                          <li>
                            Develop and deploy basic smart contracts using the
                            Solidity programming language
                          </li>
                          <li>
                            Utilize development frameworks streamline smart
                            contract deployment and DApp development
                          </li>
                          <li>
                            Evaluate the features and functionality of
                            alternative Blockchains
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7IT05 Business Intelligence (Prof. Elect.-IV) (ii)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply BI and analytics concepts to understand
                            business changes and new technologies
                          </li>
                          <li>
                            Apply data cleaning, modeling, and visualization
                            methods to create clear business reports and
                            dashboards
                          </li>
                          <li>
                            Analyze business data using clustering, regression,
                            time-series, and data mining techniques
                          </li>
                          <li>
                            Analyze data warehouse designs, including schemas,
                            facts, dimensions, and hierarchies
                          </li>
                          <li>
                            Apply ETL processes such as extraction,
                            transformation, loading, and staging for effective
                            data integration
                          </li>
                          <li>
                            Analyze new trends like IoT, cloud analytics, and
                            privacy rules to understand their legal, ethical,
                            and organizational impact
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8IT01 Object Oriented Analysis &amp; Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the concepts of Object-Oriented Modeling in
                            modern software development.
                          </li>
                          <li>
                            Analyze the concepts of Unified Modeling Language
                            (UML) to represent an object-oriented system using
                            class diagrams
                          </li>
                          <li>
                            Develop use case and activity diagrams for different
                            requirement-based system scenarios
                          </li>
                          <li>
                            Analyze the problem domain to identify class models,
                            state models, and interaction models of a system
                          </li>
                          <li>
                            Evaluate and decompose a system into subsystems
                            based on system information and requirements
                          </li>
                          <li>
                            Create and organize a class design using
                            object-oriented principles
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8IT02 Professional Ethics &amp; Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Engineering and professional ethics, morals,
                            and laws in day to day life
                          </li>
                          <li>
                            Analyze engineering ethical dilemmas using moral
                            reasoning and professional codes of ethics
                          </li>
                          <li>
                            Analyze computing ethics issues and apply IEEE Codes
                            to privacy, intellectual property, and cyber crimes
                          </li>
                          <li>
                            Analyze intellectual property laws and ethical
                            issues related to patents, trademarks, and
                            copyrights
                          </li>
                          <li>
                            Analyze ethical issues in computers, software, and
                            digital information using professional codes of
                            conduct
                          </li>
                          <li>
                            Apply ethical responsibility in managing safety,
                            risk, and professional relationships in IT practice
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8IT03 Entrepreneurship &amp; Project Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the knowledge of entrepreneurship, need,
                            scope, competencies and its types
                          </li>
                          <li>
                            Interpret knowledge on opportunities / ideas
                            screening for entrepreneurship
                          </li>
                          <li>
                            Apply knowledge on basic process of project
                            management to solve real life problem
                          </li>
                          <li>
                            Explain the details of project financing criteria
                          </li>
                          <li>
                            Develop critical thinking skills to solve real life
                            Entrepreneurship and SME problems
                          </li>
                          <li>
                            Develop critical thinking skills on developing a
                            career as entrepreneurs
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8IT04 Virtual &amp; Augmented Reality (Prof.Elect.-V)
                          (ii)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successful completion of the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Interpret the basic concept of VR &amp; AR</li>
                          <li>Identify the Input/output devices for VR</li>
                          <li>
                            Applying the knowledge of rendering pipeline and
                            graphics rendering pipeline in creating VR
                            experience
                          </li>
                          <li>
                            Analyze the hardware &amp; software needed for AR
                          </li>
                          <li>
                            Examine the use of Augmented Reality (AR)
                            applications to identify their benefits,
                            limitations, and emerging trends
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
                  { label: "Computer Skill Lab Syllabus", link: "#" },
                  { label: "Revised Syllabus of IT 21 July 2023", link: "#" },
                  {
                    label:
                      "Revised Syllabus of CSE(5th Sem-7th Sem) Notification No. 187/2022",
                    link: "#",
                  },
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
        </div>
      </div>
    ),

    laboratories: (
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Infrastructure and Laboratories
          </h3>
          <p className="text-gray-600">
            Our well-equipped laboratories feature high-end configurations to
            support advanced curriculum requirements and research initiatives.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {[
            {
              name: "Data Engineering Laboratory",
              area: "60 Sq.Mtrs",
              systems: "18 PC",
              resources:
                "COMPUTER SYSTEMS: 18 Nos. HP COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i5 PROCESSOR /8 GB RAM/500 GB SATA HDD/20 hp MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. NVIDIA TESLA GPU Cards, DICA Kits, XPO 8086 Microprocessor Kits with Study Cards LCD Projector SCANNER Cano Scan LiDE 300 (Canon) UPS: 5 KVA WITH BATTERIES (Two in number)",
            },
            {
              name: "Programming Laboratory",
              area: "75 Sq.Mtrs",
              systems: "19 PC (12 Lenovo + 7 HP)",
              resources:
                "COMPUTER SYSTEMS: 12 Nos. LENOVO COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i3 PROCESSOR/4 GB RAM/500 GB SATA HDD/19.5 LED LENOVO MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. COMPUTER SYSTEMS: 07 Nos. HP COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i5 PROCESSOR /8 GB RAM/500 GB SATA HDD/20 hp MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE. Oasis Embedded System kits: 08 ARM7, ARM7 Board with Software: 07 LCD Projector UPS: 5 KVA WITH BATTERIES (Two in number)",
            },
            {
              name: "WEBTECH Laboratory",
              area: "65 Sq.Mtrs",
              systems: "17 PC",
              resources:
                'COMPUTER SYSTEMS: 17: HP-280G1 Business Desktop, Intel Core i3-4160, 3.6 GHz, 4 GB DDR3 RAM, 500 GB HDD, HP-Compaq 18" Monitors with USB Keyboards and Mouse PRINTER: DOT MATRIX PRINTER LQ-1150 UPS: 10 KVA WITH BATTERIES (Two in number)',
            },
            {
              name: "AI Laboratory",
              area: "70 Sq.Mtrs",
              systems: "16 PC",
              resources:
                'COMPUTER SYSTEMS: 16 HP-280G1 Business Desktop, Intel Core i3-4160, 3.6 GHz, 4 GB DDR3 RAM, 500 GB HDD, HP-Compaq 18" Monitors with USB Keyboards and Mouse PRINTER: DOT MATRIX PRINTER LQ-1150 UPS: 10 KVA WITH BATTERIES (Two in number)',
            },
            {
              name: "Operating System Laboratory",
              area: "68 Sq.Mtrs",
              systems: "15 PC",
              resources:
                'COMPUTER SYSTEMS: 15 Lenovo ThinkCentre model number M72 series, Intel Core i3 2120 processor (2nd Gen), Intel motherboard, USB Keyboard and Mouse, 2GB DDR 3 RAM, 500 GB HDD 7200 RPM, DVD RW, PCI/PCI-E, Tower 4*3, 18.5" TFT Monitor UPS: 10 KVA WITH BATTERIES (One in number)',
            },
            {
              name: "Project Laboratory",
              area: "55 Sq.Mtrs",
              systems: "10 PC",
              resources:
                "COMPUTER SYSTEMS: 10 LENOVO COMPUTER SYSTEM PCS510 TOWER MODEL GEN6 H110 INTEL i3 PROCESSOR/4 GB RAM/500 GB SATA HDD/19.5 LED LENOVO MONITOR/USB WIRED KEYBOARD & OPTICAL MOUSE UPS: 10 KVA WITH BATTERIES (One in number)",
            },
            {
              name: "Departmental Library",
              area: "50 Sq.Mtrs",
              systems: "Reading Area",
              resources:
                "Available for students & Staff. No. of Current Text And Reference Books: 369, Large No. of CBTs: 31, No. of Reference Manuals, Journals, etc: 35",
            },
          ].map((lab, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0"
            >
              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🔬</span>
                </div>
                <h4 className="font-bold text-gray-800 text-center mt-4">
                  {lab.name}
                </h4>
                <div className="mt-2 text-center space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Lab Area:</span> {lab.area}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Computer Systems:</span>{" "}
                    {lab.systems}
                  </p>
                </div>
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

    "best-projects": (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Student's Best Projects
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">
            Award-Winning Projects by Our Students
          </p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm flex-wrap gap-1">
            {[
              "2024-25",
              "2023-24",
              "2022-23",
              "2021-22",
              "2020-21",
              "2019-20",
              "2018-19",
              "2017-18",
            ].map((year) => (
              <button
                key={year}
                onClick={() => setProjectYear(year)}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                  projectYear === year
                    ? "bg-white text-ssgmce-blue shadow-md"
                    : "text-gray-600 hover:text-gray-800"
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
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">
                    Sr. No
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    Title of Project
                  </th>
                  <th className="px-6 py-4 text-left font-bold">Guided By</th>
                  <th className="px-4 py-4 text-center font-bold whitespace-nowrap">
                    Award/Reward
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projectYear === "2024-25" &&
                  [
                    {
                      no: 1,
                      title:
                        "AI Powered Assistive Technology for Visually Impaired People By Using Smart Glasses",
                      guide: "Prof. A G Sharma",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title:
                        "Glamify: AI And ML-Based Personalized Fashion Recommendation System",
                      guide: "Prof. S S Muddalkar",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2023-24" &&
                  [
                    {
                      no: 1,
                      title:
                        "Reviving History: Exploring forts and monuments through Augmented Reality",
                      guide: "Prof. P G Angaitkar",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "Echoes to Image",
                      guide: "Prof. A G Sharma",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2022-23" &&
                  [
                    {
                      no: 1,
                      title:
                        "Real-Time Crop Prediction and Fertilizer Recommendation System using Machine Learning and IoT",
                      guide: "Prof. S. D. Padiya",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "Student Timeline for Student Information System",
                      guide: "Prof. Ms. P. P. Bute",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2021-22" &&
                  [
                    {
                      no: 1,
                      title:
                        "A Social Media App with Text Summarizer and Voice Assistance",
                      guide: "Prof. Ms. P. V. Kale",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title:
                        "Machine Learning Based Motion Tracking for 3D Model Animation",
                      guide: "Prof. A. S. Manekar",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2020-21" &&
                  [
                    {
                      no: 1,
                      title: "Book your Book",
                      guide: "Prof. Ms. P. V. Kale",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "ECG Classification using Deep Neural Networks",
                      guide: "Prof. A. G. Sharma",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2019-20" &&
                  [
                    {
                      no: 1,
                      title: "Splay- A light weighted Video Streaming App",
                      guide: "Prof. Ms. P. P. Bute",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "AI Vision",
                      guide: "Prof. S. D. Padiya",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2018-19" &&
                  [
                    {
                      no: 1,
                      title: "Smart Mirror and Smart Security Camera",
                      guide: "Prof. Ms. P. V. Kale",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title:
                        "Real Time Opinion Mining on Sarcastic Stream Data",
                      guide: "Prof. A. K. Shahade",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {proj.award}
                        </span>
                      </td>
                    </tr>
                  ))}

                {projectYear === "2017-18" &&
                  [
                    {
                      no: 1,
                      title:
                        "Real Time Twitter Analysis using Azure Stream Analysis",
                      guide: "Prof. A G Sharma",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "SKOILE-Smart School Information System",
                      guide: "Prof. S S Muddalkar",
                      award: "2nd Rank",
                    },
                  ].map((proj, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs">
                        {proj.no}
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-800">
                        {proj.title}
                      </td>
                      <td className="px-6 py-3 text-gray-600">{proj.guide}</td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${
                            proj.award.includes("1st")
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
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
                          "4N",
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
                      year: "2026",
                      title: "GATE Qualified Students 2026",
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
                              {yearGroup.records.length > 0 ? (
                                yearGroup.records.map((record, recordIdx) => (
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
                                            newData[yearIdx].records.length ===
                                            0
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
                                ))
                              ) : (
                                <tr>
                                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
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
                                  <td
                                    colSpan={3}
                                    className="px-6 py-4 text-center text-gray-400 italic text-sm"
                                  >
                                    No records yet.
                                  </td>
                                </tr>
                              )}
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
      </div>
    ),

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
          <p className="text-gray-500 mt-2">
            Department of Information Technology
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("templateData.faculty", IT_DEFAULT_FACULTY).map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex"
            >
              <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative overflow-hidden border-r border-gray-100">
                {fac.photo ? (
                  <EditableImage
                    src={fac.photo}
                    onSave={(val) => updateFacultyMember(i, "photo", val)}
                    alt={fac.name || "Faculty"}
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
                  {fac.id && !fac.isIndustry ? (
                    <Link to={`/faculty/${fac.id}`} className="hover:underline">
                      <EditableText
                        value={fac.name}
                        onSave={(val) => updateFacultyMember(i, "name", val)}
                      />
                    </Link>
                  ) : (
                    <EditableText
                      value={fac.name}
                      onSave={(val) => updateFacultyMember(i, "name", val)}
                    />
                  )}
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
                  {fac.id && !fac.isIndustry && (
                    <Link
                      to={`/faculty/${fac.id}`}
                      className="inline-flex items-center text-[10px] font-bold text-ssgmce-blue mt-1 hover:underline uppercase tracking-wide"
                    >
                      View Profile <FaAngleRight className="ml-1" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),

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
                Department of Information Technology
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
                              .title || "Newsletter 2024-25"
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

    achievements: (() => {
      const facultyAchievements = t(
        "achievements.faculty",
        defaultAchievements.faculty,
      );
      const studentAchievements = t(
        "achievements.students",
        defaultAchievements.students,
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
              Department of Information Technology
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

    "course-material": (
      <div className="space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-50 text-ssgmce-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("courseMaterial.title", "Course Material")}
              onSave={(val) => updateData("courseMaterial.title", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "courseMaterial.description",
                "Access comprehensive course materials, lecture notes, assignments, and study resources for all semesters.",
              )}
              onSave={(val) => updateData("courseMaterial.description", val)}
              multiline
            />
          </div>
        </div>

        {/* Course Material Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-wide">
                Course Material
              </h3>
              <p className="text-sm text-orange-100 mt-1">
                Department of Information Technology
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
                  <th className="px-6 py-4 font-bold text-center">
                    Access Materials
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {(
                  t("courseMaterials", [
                    {
                      year: "Second Year",
                      title: "Second Year IT (2N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EsMfkpy9SuNMltN9KWdtcX8BkW-mKmRdA-uTh-eFMOFpzA",
                    },
                    {
                      year: "Third Year",
                      title: "Third Year IT (3N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EmEb5ijdZBdGvqT12xXRL_0BChr4yYIEdVyx1JfOPwP5MA",
                    },
                    {
                      year: "Final Year",
                      title: "Final Year IT (4N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Eqo9010PXeVGlakouWUW2n8BAyzRvV0h8AuSVQdTA-9lvw",
                    },
                  ]) || []
                ).map((material, i) => (
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
                          onSave={(val) => {
                            const defaults = [
                              {
                                year: "Second Year",
                                title: "Second Year IT (2N)",
                                link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EsMfkpy9SuNMltN9KWdtcX8BkW-mKmRdA-uTh-eFMOFpzA",
                              },
                              {
                                year: "Third Year",
                                title: "Third Year IT (3N)",
                                link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EmEb5ijdZBdGvqT12xXRL_0BChr4yYIEdVyx1JfOPwP5MA",
                              },
                              {
                                year: "Final Year",
                                title: "Final Year IT (4N)",
                                link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Eqo9010PXeVGlakouWUW2n8BAyzRvV0h8AuSVQdTA-9lvw",
                              },
                            ];
                            const updated = [...t("courseMaterials", defaults)];
                            updated[i] = { ...updated[i], title: val };
                            updateData("courseMaterials", updated);
                          }}
                        />
                      </span>
                      {isEditing && (
                        <div className="text-xs text-blue-500 mt-1">
                          Link:{" "}
                          <EditableText
                            value={material.link}
                            onSave={(val) => {
                              const defaults = [
                                {
                                  year: "Second Year",
                                  title: "Second Year IT (2N)",
                                  link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EsMfkpy9SuNMltN9KWdtcX8BkW-mKmRdA-uTh-eFMOFpzA",
                                },
                                {
                                  year: "Third Year",
                                  title: "Third Year IT (3N)",
                                  link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EmEb5ijdZBdGvqT12xXRL_0BChr4yYIEdVyx1JfOPwP5MA",
                                },
                                {
                                  year: "Final Year",
                                  title: "Final Year IT (4N)",
                                  link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Eqo9010PXeVGlakouWUW2n8BAyzRvV0h8AuSVQdTA-9lvw",
                                },
                              ];
                              const updated = [
                                ...t("courseMaterials", defaults),
                              ];
                              updated[i] = { ...updated[i], link: val };
                              updateData("courseMaterials", updated);
                            }}
                          />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <a
                        href={material.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ssgmce-orange hover:text-orange-700 font-medium text-xs border border-gray-200 hover:border-orange-400 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-full transition-all"
                      >
                        <FaDownload className="text-xs" /> Access OneDrive
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Access OneDrive" to view and download course materials
            from the respective year's shared folder.
          </div>
          {isEditing && (
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const defaults = [
                    {
                      year: "Second Year",
                      title: "Second Year IT (2N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EsMfkpy9SuNMltN9KWdtcX8BkW-mKmRdA-uTh-eFMOFpzA",
                    },
                    {
                      year: "Third Year",
                      title: "Third Year IT (3N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/EmEb5ijdZBdGvqT12xXRL_0BChr4yYIEdVyx1JfOPwP5MA",
                    },
                    {
                      year: "Final Year",
                      title: "Final Year IT (4N)",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Eqo9010PXeVGlakouWUW2n8BAyzRvV0h8AuSVQdTA-9lvw",
                    },
                  ];
                  const updated = [
                    ...t("courseMaterials", defaults),
                    { year: "New Year", title: "New Semester", link: "#" },
                  ];
                  updateData("courseMaterials", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Material
              </button>
            </div>
          )}
        </motion.div>
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

    "industrial-visits": (() => {
      const industrialVisitPhotos = [
        {
          image: ivValueMomentum2025,
          caption:
            "Industry Visit to ValueMomentum, Pune for B.E. 3rd Year IT and CSE Students on 20 March 2025",
          location: "Pune",
          date: "20 March 2025",
        },
        {
          image: ivHcltech2024,
          caption:
            "Industry Visit to HCL Technologies, Nagpur for B.E. 2nd Year Information Technology Students on 10th April 2024",
          location: "Nagpur",
          date: "10 April 2024",
        },
        {
          image: ivSaama2024,
          caption:
            "Industry Visit to Saama Technologies, Hinjewadi Phase-I, Pune for B.E. 3rd Year Information Technology Students on 06th March 2024",
          location: "Pune",
          date: "06 March 2024",
        },
        {
          image: ivValueMomentum2024,
          caption:
            "Industry Visit to ValueMomentum, Hinjewadi Phase-II, Pune for B.E. 3rd Year Information Technology Students on 07th March 2024",
          location: "Pune",
          date: "07 March 2024",
        },
        {
          image: ivMindscripts2020,
          caption:
            "Industrial Visit at Mindscripts, Pune by Prof A G Sharma and Prof. F I Khandwani. Participants: Third Year IT Students",
          location: "Pune",
          date: "25 February 2020",
        },
        {
          image: ivJadeGlobal2020,
          caption:
            "Industrial Visit at Jade Global, Pune by Prof A G Sharma and Prof. F I Khandwani. Participants: Third Year IT Students",
          location: "Pune",
          date: "26 February 2020",
        },
        {
          image: ivEzest2018,
          caption:
            "Industrial Visit at e-Zest Solutions Ltd, Hinjewadi, Pune for B.E. 3rd Year Information Technology Students",
          location: "Pune",
          date: "2018-19",
        },
        {
          image: ivRamakrishna2018,
          caption:
            "Industrial Visit at Ramakrishna IT Services Pvt. Ltd, Pune for B.E. 3rd Year Information Technology Students",
          location: "Pune",
          date: "2018-19",
        },
      ];

      const industrialVisitTable = [
        {
          sn: 1,
          industries: ["ValueMomentum, Pune"],
          report: "/uploads/documents/it/industrial-visits/it_iv_2024_25.pdf",
          class: "3rd Year IT & CSE",
          date: "19/03/2025 to 22/03/2025",
          students: "62",
        },
        {
          sn: 2,
          industries: ["HCL Technologies Ltd, Nagpur"],
          report:
            "/uploads/documents/it/industrial-visits/it_iv_hcltech_nagpur.pdf",
          class: "2nd Year IT",
          date: "10/04/2024",
          students: "54",
        },
        {
          sn: 3,
          industries: [
            "Saama Technologies, Hinjewadi, Pune",
            "ValueMomentum, Hinjewadi, Pune",
          ],
          report: "/uploads/documents/it/industrial-visits/it_iv_2023_24.pdf",
          class: "3rd Year IT",
          date: "05/03/2024 to 09/03/2024",
          students: "45",
        },
        {
          sn: 4,
          industries: ["Mindscripts, Pune", "Jade Global, Pune"],
          class: "3rd Year IT",
          date: "25/02/2020 to 26/02/2020",
          students: "--",
        },
        {
          sn: 5,
          industries: [
            "e-Zest Solutions Ltd, Hinjewadi, Pune",
            "Ramakrishna IT Consultancy, Pune",
          ],
          report: "/uploads/documents/it/industrial-visits/it_iv_2018_19.pdf",
          class: "3rd Year IT",
          date: "02/10/2018 to 06/10/2018",
          students: "46",
        },
        {
          sn: 6,
          industries: ["pandayG.com, Hyderabad"],
          report: "/uploads/documents/it/industrial-visits/it_iv_2017_18.pdf",
          class: "3rd Year CSE & IT",
          date: "06/09/2017",
          students: "--",
        },
        {
          sn: 7,
          industries: ["Value Momentum, Hyderabad"],
          report:
            "/uploads/documents/it/industrial-visits/it_iv_2017_18_vm.pdf",
          class: "3rd Year CSE & IT",
          date: "04/09/2017",
          students: "--",
        },
        {
          sn: 8,
          industries: [
            "I-Medita (Cisco Networking Labs), Pune",
            "Mindscripts, Pune",
          ],
          report: "/uploads/documents/it/industrial-visits/it_iv_2016_17.pdf",
          class: "3rd Year IT",
          date: "15/03/2017 to 18/03/2017",
          students: "33",
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
              The department regularly organizes industrial visits to provide
              students with hands-on exposure to industry practices, emerging
              technologies, and professional work culture.
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
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {visit.industries.map((ind, i) => (
                              <div key={i} className="text-gray-700">
                                {ind}
                              </div>
                            ))}
                            {visit.report && (
                              <a
                                href={visit.report}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-ssgmce-blue hover:underline text-xs mt-1"
                              >
                                <FaFileAlt className="text-xs" />
                                Details Report
                              </a>
                            )}
                          </div>
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

    mous: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">MoUs</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategic partnerships with industry leaders to enhance learning
            outcomes and provide students with real-world exposure.
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
                    org: "Prodevans Technologies Pvt. Ltd., Bengaluru",
                    date: "05-10-2023",
                    report:
                      "/uploads/documents/it_mous/MOU_Prodevans_Technologies_2023.pdf",
                  },
                  {
                    no: "2.",
                    org: "BridgeLabz Solutions Pvt. Ltd., Mumbai",
                    date: "31-01-2023",
                    report:
                      "/uploads/documents/it_mous/MOU_BridgeLabz_2023.pdf",
                  },
                  {
                    no: "3.",
                    org: "Expert Global Solutions Pvt. Ltd., Sambhajinagar (Aurangabad)",
                    date: "24-11-2022",
                    report:
                      "/uploads/documents/it_mous/MOU_Expert_Global_Solutions_2022.pdf",
                  },
                  {
                    no: "4.",
                    org: "Vnurt, Bengaluru",
                    date: "19-01-2019",
                    report: "/uploads/documents/it_mous/MOU_Vnurt_2019.pdf",
                  },
                  {
                    no: "5.",
                    org: "Renuka Technology, Nagpur",
                    date: "19-01-2019",
                    report:
                      "/uploads/documents/it_mous/MOU_Renuka_Technology_2019.pdf",
                  },
                  {
                    no: "6.",
                    org: "Clubix Technology, Nagpur",
                    date: "19-01-2019",
                    report:
                      "/uploads/documents/it_mous/MOU_Clubix_Technology_2019.pdf",
                  },
                  {
                    no: "7.",
                    org: "Vidharbha Industry Defence Hub, Mihan, Nagpur",
                    date: "19-01-2019",
                    report:
                      "/uploads/documents/it_mous/MOU_Vidarbha_Defence_Hub_2019.pdf",
                  },
                  {
                    no: "8.",
                    org: "JDM Semiconductor, Nagpur",
                    date: "19-01-2019",
                    report:
                      "/uploads/documents/it_mous/MOU_JDM_Semiconductor_2019.pdf",
                  },
                  {
                    no: "9.",
                    org: "Red Hat Academy, Bengaluru",
                    date: "11-06-2018",
                    report:
                      "/uploads/documents/it_mous/MOU_Red_Hat_Academy_2018.pdf",
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
    patents: (
      <div className="space-y-8">
        <div className="flex flex-wrap space-x-1 bg-gray-100 p-1 rounded-lg w-fit mb-6">
          {[
            "patents",
            "publications",
            "conferences",
            "books",
            "copyrights",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setPatentSubTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all capitalize ${patentSubTab === tab ? "bg-white text-ssgmce-blue shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab === "patents"
                ? "Patents"
                : tab === "publications"
                  ? "Publications"
                  : tab === "conferences"
                    ? "Conferences"
                    : tab === "books"
                      ? "Books"
                      : "Copyrights"}
            </button>
          ))}
        </div>

        {/* Report PDFs Download Links */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <h4 className="text-sm font-bold text-ssgmce-blue mb-2 flex items-center">
            <FaDownload className="mr-2" /> Year-wise Detailed Reports (PDF)
          </h4>
          <div className="flex flex-wrap gap-2">
            {researchYears.map((year) => (
              <a
                key={year}
                href={`/uploads/documents/it_publications/IT_${year}_Patent_Publication_Data.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-xs font-bold bg-white text-ssgmce-blue rounded-lg border border-blue-200 hover:bg-ssgmce-blue hover:text-white transition-all"
              >
                <FaFileAlt className="mr-1.5" /> {year}
              </a>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {patentSubTab === "patents" ? (
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
                  Patents Granted & Published
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
              {(defaultItPatents[researchYear] || []).length === 0 ? (
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
                        {(defaultItPatents[researchYear] || []).map(
                          (pat, i) => (
                            <tr
                              key={i}
                              className="hover:bg-green-50/30 transition-colors group"
                            >
                              <td className="px-6 py-4 text-center font-mono text-xs text-gray-400 group-hover:text-green-600">
                                {i + 1}
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-800">
                                {pat.title}
                                <span
                                  className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status === "Granted" ? "bg-green-100 text-green-700" : pat.status === "Registered" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
                                >
                                  {pat.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 font-mono text-xs text-gray-500 whitespace-nowrap text-right">
                                {pat.id}
                              </td>
                              <td className="px-6 py-4 text-gray-500 italic text-right">
                                {pat.inventors}
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
          ) : patentSubTab === "publications" ? (
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
                  Research Publications (Journals)
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
              {(defaultItPublications[researchYear] || []).length === 0 ? (
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
                            Journal Details
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(defaultItPublications[researchYear] || []).map(
                          (pub, i) => (
                            <tr
                              key={i}
                              className="hover:bg-indigo-50/30 transition-colors"
                            >
                              <td className="px-6 py-4 text-center font-mono text-xs text-gray-400">
                                {i + 1}
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-800">
                                {pub.title}
                              </td>
                              <td className="px-6 py-4 text-gray-600">
                                {pub.authors}
                              </td>
                              <td className="px-6 py-4 text-gray-500 italic text-xs">
                                {pub.journal}
                              </td>
                              <td className="px-6 py-4 text-right">
                                {pub.link ? (
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-ssgmce-blue hover:text-ssgmce-dark-blue font-bold px-3 py-1 bg-blue-50 rounded-lg transition-colors border border-blue-100"
                                  >
                                    View{" "}
                                    <FaExternalLinkAlt className="ml-2 text-[10px]" />
                                  </a>
                                ) : (
                                  <span className="text-gray-400 text-xs">
                                    -
                                  </span>
                                )}
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
          ) : patentSubTab === "conferences" ? (
            <motion.div
              key="conferences"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaChalkboardTeacher className="text-indigo-500 mr-2" />
                  Conference Publications
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
              {(defaultItConferences[researchYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No conference publications recorded for {researchYear}.
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
                            Conference Details
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            Link
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(defaultItConferences[researchYear] || []).map(
                          (conf, i) => (
                            <tr
                              key={i}
                              className="hover:bg-indigo-50/30 transition-colors"
                            >
                              <td className="px-6 py-4 text-center font-mono text-xs text-gray-400">
                                {i + 1}
                              </td>
                              <td className="px-6 py-4 font-medium text-gray-800">
                                {conf.title}
                              </td>
                              <td className="px-6 py-4 text-gray-600">
                                {conf.authors}
                              </td>
                              <td className="px-6 py-4 text-gray-500 italic text-xs">
                                {conf.journal}
                              </td>
                              <td className="px-6 py-4 text-right">
                                {conf.link ? (
                                  <a
                                    href={conf.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-ssgmce-blue hover:text-ssgmce-dark-blue font-bold px-3 py-1 bg-blue-50 rounded-lg transition-colors border border-blue-100"
                                  >
                                    View{" "}
                                    <FaExternalLinkAlt className="ml-2 text-[10px]" />
                                  </a>
                                ) : (
                                  <span className="text-gray-400 text-xs">
                                    -
                                  </span>
                                )}
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
          ) : patentSubTab === "copyrights" ? (
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
              {(defaultItCopyrights[researchYear] || []).length === 0 ? (
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
                        {(defaultItCopyrights[researchYear] || []).map(
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
          ) : patentSubTab === "books" ? (
            <motion.div
              key="books"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaBook className="text-teal-500 mr-2" />
                  Books / Book Chapters Published
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
              {(defaultItBooks[researchYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No books published for {researchYear}.
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
                            Author(s)
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider">
                            Publisher
                          </th>
                          <th className="px-6 py-4 font-black tracking-wider text-right">
                            ISBN
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {(defaultItBooks[researchYear] || []).map((book, i) => (
                          <tr
                            key={i}
                            className="hover:bg-teal-50/30 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-xs text-gray-400">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-800">
                              {book.name}
                              {book.coAuthors ? `, ${book.coAuthors}` : ""}
                            </td>
                            <td className="px-6 py-4 text-gray-700">
                              {book.title}
                            </td>
                            <td className="px-6 py-4 text-gray-500 italic text-xs">
                              {book.details}
                            </td>
                            <td className="px-6 py-4 font-mono text-xs text-gray-500 text-right">
                              {book.isbn}
                            </td>
                          </tr>
                        ))}
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
              onClick={() => setInternshipYear("2024-25")}
              className={`px-6 py-2 text-sm font-bold rounded-md transition-all ${
                internshipYear === "2024-25"
                  ? "bg-white text-ssgmce-blue shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Session: 2024-25
            </button>
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
          </div>
        </div>

        {/* Detail Report Download */}
        <div className="flex justify-center mb-4">
          <a
            href={
              internshipYear === "2024-25"
                ? "/uploads/documents/it_internships/IT_Internship_2024-25.pdf"
                : "/uploads/documents/it_internships/IT_Internship_2023-24.pdf"
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
                    Name of Intern
                  </th>
                  <th className="px-3 py-4 text-left font-bold">
                    Name of Industry / Organization
                  </th>
                  <th className="px-3 py-4 text-left font-bold">Class</th>
                  <th className="px-3 py-4 text-left font-bold">Duration</th>
                  <th className="px-3 py-4 text-left font-bold">Stipend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(
                  t(
                    `internships.${internshipYear}`,
                    defaultItInternships[internshipYear],
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
                      {intern.duration}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.stipend}
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
                defaultItInternships[internshipYear],
              ) || []
            ).length
          }{" "}
          students
        </div>
      </div>
    ),

    projects: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("ugProjectsTitle", "UG Projects")}
            onSave={(val) => updateField("ugProjectsTitle", val)}
          />
        </h3>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(t("ugProjects", defaultItUgProjects)).map((year) => (
            <button
              key={year}
              onClick={() => setUgProjectYear(year)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                ugProjectYear === year
                  ? "bg-ssgmce-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Project Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-4">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <FaBook className="text-ssgmce-orange" />
              UG Projects – {ugProjectYear}
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border border-gray-200 w-16">
                    Sr. No.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border border-gray-200">
                    Project Title
                  </th>
                  {(
                    t("ugProjects", defaultItUgProjects)[ugProjectYear] || []
                  ).some((p) => p.report) && (
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border border-gray-200 w-32">
                      Project Report
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(
                  t("ugProjects", defaultItUgProjects)[ugProjectYear] || []
                ).map((project, i) => (
                  <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-500 font-medium border border-gray-200 text-center">
                      {project.id || i + 1}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                      <EditableText
                        value={project.title}
                        onSave={(val) => {
                          const updated = {
                            ...t("ugProjects", defaultItUgProjects),
                          };
                          const yearProjects = [...updated[ugProjectYear]];
                          yearProjects[i] = {
                            ...yearProjects[i],
                            title: val,
                          };
                          updated[ugProjectYear] = yearProjects;
                          updateData("ugProjects", updated);
                        }}
                      />
                    </td>
                    {(
                      t("ugProjects", defaultItUgProjects)[ugProjectYear] || []
                    ).some((p) => p.report) && (
                      <td className="px-4 py-3 text-sm border border-gray-200 text-center">
                        {project.report ? (
                          <a
                            href={project.report}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs"
                          >
                            <FaExternalLinkAlt className="text-xs" /> View
                          </a>
                        ) : (
                          <span className="text-gray-400 text-xs">—</span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3">
            <button
              onClick={() => {
                const updated = { ...t("ugProjects", defaultItUgProjects) };
                const yearProjects = updated[ugProjectYear] || [];
                updated[ugProjectYear] = [
                  ...yearProjects,
                  {
                    id: String(yearProjects.length + 1),
                    title: "New Project Title",
                  },
                ];
                updateData("ugProjects", updated);
              }}
              className="flex-1 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-center"
            >
              + Add Project to {ugProjectYear}
            </button>
          </div>
        )}
      </div>
    ),

    services: (
      <div className="space-y-8">
        {/* Header */}
        <div className="max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">
            Services Offered
          </h3>
          <p className="text-gray-600 leading-relaxed">
            The Department of Information Technology, SSGMCE, Shegaon is
            offering the following services to government organizations,
            research organizations, industries, and society, etc. under Research
            &amp; Development Policy, Industry-Interaction Policy, Consultancy
            Policy, Sponsored Project Policy, Community Development &amp;
            Extension Services, etc.
          </p>
        </div>

        {/* Services Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div
            className="px-6 py-4 text-white flex items-center gap-3"
            style={{ backgroundColor: "#003366" }}
          >
            <FaLaptopCode className="text-2xl text-orange-400" />
            <h4 className="text-xl font-bold">
              Services Offered by the Department
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-center text-sm font-bold text-gray-600 border border-gray-200 w-20">
                    Sr. No.
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Service
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  "Basic Website Development (Static and Dynamic) using HTML",
                  "Advanced Website Development using PHP, JS, Python, etc.",
                  "Advanced Website Development with Features using ML, AI, DS, etc.",
                  "Software Development (ERP)",
                  "Customized Software Development",
                  "Android Application Development",
                  "E-Commerce Platform Development",
                  "Customized IoT Development",
                  "Workshops on Recent Technologies",
                  "Training Related to Accreditation (NAAC, NBA, ISO, etc.)",
                  "Mentor or Auditor for Accreditation (NAAC, NBA, ISO, etc.)",
                  "Training on IPR, Article Writing, etc.",
                  "Consultancy Services for IPR, Book Writing, etc.",
                  "Software / Hardware Testing Training and Consultancy Services",
                  "Cloud / Hosting Related Services",
                  "Academic Services (Paper Setting, External Examiner, etc.)",
                  "Computer Networking Related Services",
                ].map((service, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-center font-semibold text-gray-700 border border-gray-200">
                      {idx + 1}
                    </td>
                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                      {service}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PDF Download Link */}
        <div className="flex items-center gap-4">
          <a
            href="/uploads/documents/it_services/IT_Services_Offered.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-sm"
          >
            <FaFileAlt />
            View Original Document
          </a>
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
        <p className="text-gray-600">
          This section is under development and will be updated soon with
          comprehensive information.
        </p>
      </div>
    );
  };

  const SidebarLink = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`relative w-full text-left px-4 py-2.5 rounded-lg text-[13px] transition-all duration-300 flex items-center justify-between group overflow-hidden
        ${
          activeTab === id
            ? "bg-[#003366] text-white shadow-md font-semibold"
            : "text-gray-500 font-medium hover:bg-gray-50 hover:text-gray-700"
        }`}
    >
      <span className="flex items-center relative z-10">
        <span
          className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${activeTab === id ? "bg-white" : "bg-gray-300 group-hover:bg-[#FF6B00]"}`}
        ></span>
        {label}
      </span>
      {activeTab === id && <FaAngleRight className="text-white text-sm" />}
    </button>
  );

  return (
    <GenericPage title="Information Technology" backgroundImage={itBanner}>
      <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
        {/* Sidebar Navigation (Left Side) */}
        <div className="lg:w-1/4 order-1 lg:order-1">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 space-y-6 pb-4 scrollbar-thin scrollbar-thumb-ssgmce-blue scrollbar-track-gray-100">
            {/* Academics Section */}
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

            {/* Industry Interaction Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-[#FF6B00] p-4">
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
