import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import mbaBanner from "../../assets/images/departments/mba/MBA banner.png";
import {
  defaultFaculty as MBA_DEFAULT_FACULTY,
  defaultPrideToppers,
  defaultPrideAlumni,
  defaultActivities,
  defaultNewsletters,
  defaultAchievements,
  defaultMbaPatents,
  defaultMbaPublications,
  defaultMbaConferences,
  defaultMbaBooks,
  defaultMbaCopyrights,
} from "../../data/mbaDefaults";
import { defaultPlacements } from "../../data/mbaPlacements";
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
  FaIdCard,
  FaUsers,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaExternalLinkAlt,
  FaBook,
} from "react-icons/fa";

// Import HOD photo
import hodPhoto from "../../assets/images/departments/mba/HOD_MBA.png";

// Import Faculty Photos
import pmkPhoto from "../../assets/images/departments/mba/faculty/PMK.jpg";
import lbdPhoto from "../../assets/images/departments/mba/faculty/LBDeshmukh.jpg";
import madPhoto from "../../assets/images/departments/mba/faculty/MADande.jpg";
import ssmPhoto from "../../assets/images/departments/mba/faculty/SSMishra.jpg";
import vvpPhoto from "../../assets/images/departments/mba/faculty/VVPatil.jpg";
import wzsPhoto from "../../assets/images/departments/mba/faculty/WZSuliya.jpg";
import bhPhoto from "../../assets/images/departments/mba/faculty/BilalHusain.jpg";
import absPhoto from "../../assets/images/departments/mba/faculty/AdeshSolanke.jpg";
import upPhoto from "../../assets/images/departments/mba/faculty/UdayPatil.jpg";
import mmPhoto from "../../assets/images/departments/mba/faculty/MohiniModak.jpg";

// Photo map for resolving MBA faculty photo string references
const mbaPhotoMap = {
  PMK: pmkPhoto,
  LBD: lbdPhoto,
  MAD: madPhoto,
  SMM: ssmPhoto,
  VVP: vvpPhoto,
  WZS: wzsPhoto,
  BH: bhPhoto,
  ABS: absPhoto,
  UP: upPhoto,
  MMM: mmPhoto,
};

// Resolve MBA faculty photos from string references to actual imports
const resolvedMbaFaculty = MBA_DEFAULT_FACULTY.map((f) => ({
  ...f,
  photo: mbaPhotoMap[f.photo] || f.photo,
}));

const MBA = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [researchTab, setResearchTab] = useState("toppers");
  const [projectYear, setProjectYear] = useState("2023-24");
  const [researchYear, setResearchYear] = useState("2023-24");
  const [placementYear, setPlacementYear] = useState(null);
  const [prideTab, setPrideTab] = useState("toppers");
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);
  const [patentSubTab, setPatentSubTab] = useState("patents");
  const researchYears = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
  ];

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-mba");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
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
  const updatePrideToppers = (yearIdx, recordIdx, field, val) => {
    const newData = JSON.parse(
      JSON.stringify(t("pride.toppers", defaultPrideToppers)),
    );
    newData[yearIdx].records[recordIdx][field] = val;
    updateData("pride.toppers", newData);
  };

  const updateOverviewTable = (path, defaultArr, rowIdx, cellIdx, val) => {
    const newData = JSON.parse(JSON.stringify(t(path, defaultArr)));
    newData[rowIdx][cellIdx] = val;
    updateData(path, newData);
  };

  const academicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "vision-mission", label: "Vision, Mission, PEO & PO" },
    { id: "course-outcomes", label: "Course Outcomes" },
    { id: "curriculum", label: "Scheme and Syllabus" },
    { id: "ranking", label: "Business School Ranking" },
    { id: "pride", label: "Pride of the Department" },
    { id: "achievements", label: "Achievements and Awards" },
    { id: "newsletter", label: "Newsletter" },
    { id: "accreditations", label: "Recognitions and Accreditations" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Curricular Activities" },
    { id: "projects", label: "UG/PG Projects (Dissertation)" },
    { id: "course-material", label: "Course Material" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const industryLinks = [
    { id: "mous", label: "MoUs" },
    { id: "industrial-visits", label: "Industry Interaction and Tours" },
    { id: "guest-lectures", label: "Corporate Leader Speak's" },
    { id: "workshops", label: "MDP's, FDP's and Workshop" },
    { id: "consultancy", label: "Consultancy" },
    { id: "patents", label: "Patent & Publication" },
  ];

  // Faculty data - use resolved defaults with photos
  const facultyData = resolvedMbaFaculty.map((f) => ({
    ...f,
    designation: f.role,
    specialization: f.area ? f.area.join(", ") : "",
  }));

  const updateFacultyMember = (index, field, value) => {
    const faculty = JSON.parse(
      JSON.stringify(t("templateData.faculty", facultyData)),
    );
    faculty[index] = { ...faculty[index], [field]: value };
    updateField("templateData.faculty", faculty);
  };

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
                      "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
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
                  "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
                )}
                title="Department of Business Administration SSGMCE"
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
                    "The Department of Business Administration and Research was established as the first Post-Graduate Department of Shri Sant Gajanan Maharaj College of Engineering in the year 1994 to impart two year full time Post-Graduate Degree Course of Master of Business Administration (M.B.A.) with prior approval from All India Council for Technical Education, New Delhi and affiliation to Sant Gadge Baba Amravati University, Amravati, Maharashtra to meet the need for management education in rural India.",
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
                    "The Department has made its dent in the management education of the region causing shift of the traditionally run annual pattern MBA to semester pattern. The qualitative attitude and students' centric approach coupled with industrial collaboration paid dividends to the department and its stakeholders.",
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
              Courses @ Department
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
                {/* MBA */}
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    Master of Business Administration
                  </td>
                </tr>
                {[
                  ["Degree", "M.B.A. (Choice based - Dual specialization)"],
                  ["Duration", "2 Year (4 Semesters) (Full time)"],
                  ["Intake", "60 Students per year"],
                  ["Establishment", "Year: 1994"],
                  ["NBA Status", "Three Times Accredited by NBA"],
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

                {/* PhD */}
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    Ph. D in Business Management and Research
                  </td>
                </tr>
                {[
                  ["Duration", "3 Years"],
                  ["Intake", "04 Students"],
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
            <p className="text-ssgmce-blue font-medium">Dr. P. M. Kuchar</p>
            <p className="text-sm text-gray-500">
              Head, Department of Business Administration and Research (MBA)
            </p>
          </div>
        </div>
      </div>
    ),

    "vision-mission": (
      <div className="space-y-10">
        {/* Top Section: Vision & Mission Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex border-b border-gray-200 bg-gray-50/50">
            {["vision", "mission"].map((tab) => (
              <button
                key={tab}
                onClick={() => setVmTab(tab)}
                className={`px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all relative ${
                  vmTab === tab
                    ? "text-ssgmce-blue bg-white"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
                {vmTab === tab && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-ssgmce-blue"></div>
                )}
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
                  âž¤
                </div>
                <div className="text-lg text-gray-700 leading-relaxed font-medium flex-1">
                  <EditableText
                    value={t(
                      "vision",
                      "To be a learning centre for developing competent managerial manpower with spiritual blend to serve industry and humanity.",
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
                  "To develop competent and entrepreneurial manpower through research, innovation and quality education.",
                  "To develop human resources with spiritual values to serve global society.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-ssgmce-orange text-xl">âž¤</div>
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
              { id: "peo", label: "Program Educational Objectives" },
              { id: "po", label: "Program Outcomes" },
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
                  "Students would accomplish distinguished positions in the corporate world and act as change agents in the society.",
                  "Students would demonstrate and apply analytical thinking, creativity & innovation and adaptability in problem solving.",
                  "Students would be perennially reinventing themselves in management thoughts, philosophy, action, tools and techniques.",
                  "Students would be high on ethical, moral and spiritual values to strive for sustainable growth and inclusive management (Sarve Bhavantu Sukhinah).",
                  "Students would develop multidisciplinary and professional approach coupled with communication skills and teamwork skills to excel in the global environment.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">âž¤</div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {poTab === "po" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {[
                  "Apply knowledge and management theories and practices to solve business problems.",
                  "Foster analytical and critical thinking abilities for data-based decision making.",
                  "Ability to develop value-based leadership quality.",
                  "Ability to understand analyze and communicate global, economic, legal and ethical aspect of Business.",
                  "Ability to lead themselves and others in the achievement of organization goals, contributing effectively to a team environment.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">âž¤</div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
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
                  <img
                    src={hodPhoto}
                    alt="Dr. P. M. Kuchar - HOD MBA"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                Dr. P. M. Kuchar
              </h3>
              <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                Head of Department
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Business Administration and Research (MBA)
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-ssgmce-orange" />
                  <span>pmkuchar@ssgmce.ac.in</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  Ph.D
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  MBA
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
                The Department of Business Administration and Research was
                established as the{" "}
                <span className="font-semibold text-gray-900">
                  first Post-Graduate Department
                </span>{" "}
                of Shri Sant Gajanan Maharaj College of Engineering in the year{" "}
                <span className="font-semibold text-gray-900">1994</span> to
                impart two year full time Post-Graduate Degree Course of Master
                of Business Administration (
                <span className="font-semibold text-gray-900">M.B.A.</span>)
                with prior approval from{" "}
                <span className="font-semibold text-gray-900">
                  All India Council for Technical Education, New Delhi
                </span>{" "}
                and affiliation to{" "}
                <span className="font-semibold text-gray-900">
                  Sant Gadge Baba Amravati University, Amravati, Maharashtra
                </span>{" "}
                to meet the need for management education in rural India.
              </p>
              <p>
                The Department made its dent in the management education of the
                region causing{" "}
                <span className="font-semibold text-gray-900">shift</span> of
                the traditionally run{" "}
                <span className="font-semibold text-gray-900">
                  annual pattern MBA
                </span>{" "}
                of the affiliating university to{" "}
                <span className="font-semibold text-gray-900">
                  semester pattern
                </span>{" "}
                and then went on to its individual run for quality management
                education with distinction for others in the region to imbibe.
                The qualitative attitude and students' centric approach coupled
                with industrial collaboration paid dividends to the department
                and its stakeholders which came in form of{" "}
                <span className="font-semibold text-gray-900">
                  NBA Accreditations
                </span>{" "}
                (first in 2002, second in 2007 and third time accreditation in
                2013),{" "}
                <span className="font-semibold text-gray-900">
                  NAAC Accreditations
                </span>{" "}
                (first in 2002 and second in 2010),{" "}
                <span className="font-semibold text-gray-900">
                  ISO Certification
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">
                  Business India Best B-Schools Ranking
                </span>{" "}
                (continuously since 2010), ranking amongst{" "}
                <span className="font-semibold text-gray-900">
                  India's top 100 B-Schools
                </span>{" "}
                by{" "}
                <span className="font-semibold text-gray-900">
                  Career Outlook Survey
                </span>{" "}
                continuously since 2015.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Management College of the Year Award
                </span>{" "}
                by{" "}
                <span className="font-semibold text-gray-900">
                  Higher Education Review Magazine
                </span>{" "}
                continuously for two years in 2016 and 2017,{" "}
                <span className="font-semibold text-gray-900">
                  Dewang Mehta Education Leadership Award 2015 and 2016
                </span>
                , ranking under{" "}
                <span className="font-semibold text-gray-900">
                  Excellent Placement Category
                </span>{" "}
                by{" "}
                <span className="font-semibold text-gray-900">
                  Go-Education Survey
                </span>{" "}
                and rankings by similar other national surveys including one by{" "}
                <span className="font-semibold text-gray-900">
                  Business Today
                </span>{" "}
                etc.{" "}
                <span className="font-semibold text-gray-900">
                  Gold Medal awards
                </span>{" "}
                to its students for their consistent performance in university
                examinations, their satisfactory placements in India and abroad
                and above all some of the outstanding entrepreneurial ventures
                established by our alumni.
              </p>
              <p>
                The march is on which has begun in small way through
                international exposures to our students from CEOs (like Dr.
                Vikram Pandit of{" "}
                <span className="font-semibold text-gray-900">
                  Citibank, USA
                </span>{" "}
                and Mr. Pradeep Andhare of{" "}
                <span className="font-semibold text-gray-900">
                  FOTONS Ltd., China
                </span>
                ) and academicians (like Prof. Rajiv Lall of{" "}
                <span className="font-semibold text-gray-900">
                  Harvard Business School, USA
                </span>
                ) and internalization of academic excellence parameters like
                research and publications, academic visits abroad, MoUs, intense
                industry-interaction, host of co-curricular activities and so on
                and so forth.
              </p>
              <p className="font-semibold text-gray-800 italic">
                Wishing you all a successful and fulfilling academic journey
                ahead.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-dancing text-2xl text-ssgmce-blue">
                  Dr. P. M. Kuchar
                </p>
                <p className="text-sm text-gray-500">
                  Head, Department of Business Administration and Research (MBA)
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

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
          <p className="text-gray-500 mt-2">
            Department of Business Administration and Research (MBA)
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("templateData.faculty", facultyData).map((fac, i) => (
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

              {/* Content Area */}
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
                    value={fac.designation}
                    onSave={(val) => updateFacultyMember(i, "designation", val)}
                  />
                </p>

                {/* Compact Details */}
                <div className="space-y-2 text-sm text-gray-600">
                  {fac.specialization && (
                    <p className="line-clamp-2 text-xs">
                      <span className="font-bold text-gray-700">Area: </span>
                      <EditableText
                        value={fac.specialization}
                        onSave={(val) =>
                          updateFacultyMember(i, "specialization", val)
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

    "course-outcomes": (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Course Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive course outcomes for all semesters of M.B.A. (Business
            Administration and Research)
          </p>
        </div>

        {/* M.B.A. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              M.B.A. (Business Administration and Research) - Course Outcomes
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {/* M.B.A. Semester-I */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "mba-sem1" ? null : "mba-sem1",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.B.A. Semester-I
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "mba-sem1" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "mba-sem1" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 101 Managerial Economics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          101 Managerial Economics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop a fundamental understanding of supply,
                            demand, buyer surplus, seller's surplus, and
                            elasticities.
                          </li>
                          <li>
                            Understand competitive markets and economic
                            efficiency.
                          </li>
                          <li>
                            Use firm and industry cost analysis for production
                            and strategic decisions.
                          </li>
                          <li>
                            Distinguish between different market structures and
                            different business strategies.
                          </li>
                        </ol>
                      </div>

                      {/* 102 Legal and Business Environment */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          102 Legal and Business Environment
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify and evaluate the complexities of business
                            environment and their impact on the business.
                          </li>
                          <li>
                            Analyze the relationships between Government and
                            business and understand the political, economic,
                            legal and social policies of the country.
                          </li>
                          <li>
                            Analyze current economic conditions in developing
                            emerging markets, and evaluate present and future
                            opportunities.
                          </li>
                          <li>
                            Understand the Industrial functioning and strategies
                            to overcome challenges in competitive markets.
                          </li>
                        </ol>
                      </div>

                      {/* 103 Financial Reporting, Statement and Analysis */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          103 Financial Reporting, Statement and Analysis
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the basic concepts of accounting and also
                            able to know the difference between accounting,
                            financial accounting, management accounting and Cost
                            accounting.
                          </li>
                          <li>
                            Prepare financial statements and also able to make
                            decisions with the help of various financial
                            analysis tools.
                          </li>
                          <li>
                            Acquainting the knowledge regarding various cost
                            accounting concepts with analytical skills for its
                            application in managerial decision making.
                          </li>
                          <li>
                            Able to present the financial results and position
                            of a company relative to its industry by developing
                            skills for interpretation to adopt for financial
                            reporting purposes.
                          </li>
                        </ol>
                      </div>

                      {/* 104 Indian Ethos and Business Ethics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          104 Indian Ethos and Business Ethics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Students will be acquainted with the fundamentals of
                            Indian ethos and its relevance in the practical
                            aspects.
                          </li>
                          <li>
                            Students will comprehend the allied root reasons and
                            nature of ethical issues.
                          </li>
                          <li>
                            Aspirants will endeavor to find remedies for ethical
                            issues being faced by organizations, employees,
                            managers and policy makers.
                          </li>
                          <li>
                            Students will reflect a personality well equipped by
                            values and spread the same at workplaces in future.
                          </li>
                        </ol>
                      </div>

                      {/* 105 Organizational Behaviour */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          105 Organizational Behaviour
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Aware the students regarding human interaction in an
                            organization.
                          </li>
                          <li>
                            Finding what forces enhancing it for setting better
                            results in attending the business goals.
                          </li>
                          <li>
                            Formulate approaches to reorient individual, team,
                            managerial and leadership behavior in order to
                            achieve organizational goals.
                          </li>
                          <li>
                            Able to analyze the behavior of individuals and
                            groups in organizations in terms of the key factors
                            that influence organizational behavior and
                            demonstrate skills required for working in groups.
                          </li>
                        </ol>
                      </div>

                      {/* 106 Computer Application for Business */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          106 Computer Application for Business
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Students will possess a comprehensive understanding
                            of Management Information Systems, encompassing
                            information concepts, subsystems, and the
                            development phases of MIS.
                          </li>
                          <li>
                            Develop the basic understanding and describe various
                            aspects of IT, including telecommunication and
                            networks, data management systems, and IT-enabled
                            services.
                          </li>
                          <li>
                            Students will be able to explain the decision-making
                            process and the role of Information Systems in
                            supporting decision-making phases, including the
                            construction of Decision Support Systems.
                          </li>
                          <li>
                            Students will be able to understand the management
                            issues associated with MIS, including information
                            security and control, quality assurance, ethical and
                            social dimensions, intellectual property rights, and
                            the challenges of managing global information
                            systems.
                          </li>
                        </ol>
                      </div>

                      {/* 107 Business Statistics and Analytics for Decision Making */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          107 Business Statistics and Analytics for Decision
                          Making
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop an understanding of Business Statistics and
                            Analytics and its managerial applications in the
                            real business world.
                          </li>
                          <li>
                            Make the student familiar with statistical
                            techniques in Business Decision Making.
                          </li>
                          <li>
                            Expand the knowledge of inferential statistics for
                            developing criteria for decision making.
                          </li>
                          <li>
                            Understanding of basic and advance quantitative
                            models in management decision making.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.B.A. Semester-II */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "mba-sem2" ? null : "mba-sem2",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.B.A. Semester-II
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "mba-sem2" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "mba-sem2" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 201 Business Communication */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          201 Business Communication
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate students to verbal and non-verbal
                            communication ability to solve workplace
                            communication issues.
                          </li>
                          <li>
                            Create and deliver effective business presentations,
                            using appropriate tools.
                          </li>
                          <li>
                            Draft effective business correspondence with brevity
                            and clarity.
                          </li>
                          <li>Develop the students for job market.</li>
                        </ol>
                      </div>

                      {/* 202 Marketing Management */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          202 Marketing Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop an understanding of the underlying concept,
                            theories and strategies involved in the marketing of
                            product and services.
                          </li>
                          <li>
                            Capable to apply the three steps of target
                            marketing: market segmentation, target marketing,
                            and market positioning.
                          </li>
                          <li>
                            Able to evaluate different distribution channel
                            options and their suitability for the company's
                            product.
                          </li>
                          <li>
                            Develop a suitable promotion mix (advertising, sales
                            promotion, public relations, personal selling, and
                            direct marketing etc.) for the product.
                          </li>
                        </ol>
                      </div>

                      {/* 203 Corporate Finance */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          203 Corporate Finance
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Aware of the basic concepts related to financial
                            management, various techniques and tools to manage
                            finance function.
                          </li>
                          <li>
                            Gaining the knowledge of principles and concepts
                            used in financial decision making and familiarizing
                            the students with the valuation of firm.
                          </li>
                          <li>
                            Able to find out the best course of action among
                            several financial options with the technique of
                            capital budgeting and restructuring.
                          </li>
                          <li>
                            Assessing the impact of corporate investment
                            decisions in financing of working capital needs and
                            the long term capital needs of the business
                            organization.
                          </li>
                        </ol>
                      </div>

                      {/* 204 Research Methodology */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          204 Research Methodology
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the basics of marketing research,
                            literature review and research design.
                          </li>
                          <li>
                            Understand the different tools and techniques of
                            measurement, scaling and data collection.
                          </li>
                          <li>
                            Understand sampling, sample design and descriptive
                            statistics.
                          </li>
                          <li>
                            Acquire an ability to conduct hypothesis testing.
                          </li>
                        </ol>
                      </div>

                      {/* 205 Production and Operation Management */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          205 Production and Operation Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Equip students with process of planning, organizing
                            and controlling activities of production.
                          </li>
                          <li>
                            Educate them on resources system used for
                            transforming raw materials into value added
                            products.
                          </li>
                          <li>
                            Explain the students various dimensions of
                            production planning and control and their
                            inter-linkages with forecasting.
                          </li>
                          <li>
                            Students can measure performance related to
                            productivity and will be able to conduct basic
                            industrial engineering study on men and machines.
                          </li>
                        </ol>
                      </div>

                      {/* 206 Human Resource Management */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          206 Human Resource Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Judge Human Resource Management scenario and
                            practices for acquisition of manpower in India.
                          </li>
                          <li>
                            Implement Human Resource Development practices for
                            development of human resources.
                          </li>
                          <li>
                            Judge their role according to problems and
                            situations in human resource department.
                          </li>
                          <li>
                            Implement training methods and practices on employee
                            development.
                          </li>
                          <li>
                            Project human resource management policies for any
                            organization.
                          </li>
                        </ol>
                      </div>

                      {/* 207 Entrepreneurship Development */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          207 Entrepreneurship Development
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the course, students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explore entrepreneurial path and acquaint them with
                            the essential knowledge of starting new ventures.
                          </li>
                          <li>
                            Students will learn tools and techniques for
                            generating, testing and developing innovative
                            startup ideas into successful enterprise.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.B.A. Semester-III */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "mba-sem3" ? null : "mba-sem3",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.B.A. Semester-III
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "mba-sem3" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "mba-sem3" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* Common Subjects */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Common Subjects
                        </h4>
                        <div className="space-y-6">
                          {/* 301 International Business Environment */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              301 International Business Environment
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Get acquainted with the fundamentals of
                                International trade and business.
                              </li>
                              <li>
                                Analyse and evaluate International marketing
                                environment and the export procedures.
                              </li>
                              <li>
                                Analyse and evaluate Global logistics and Supply
                                chain environment.
                              </li>
                              <li>
                                Analyse and evaluate International financial
                                environments and working of institutions.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Finance Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Finance Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 3101 Investment Analysis and Portfolio Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3101 Investment Analysis and Portfolio Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand and get insights into investment
                                analysis for investment decision making.
                              </li>
                              <li>
                                Acquire knowledge and skills on Technical and
                                Fundamental analysis.
                              </li>
                              <li>Understand concept of Equity valuation.</li>
                              <li>
                                Learn the concept of Portfolio management along
                                with different theories.
                              </li>
                            </ol>
                          </div>

                          {/* 3102 Indian Financial System and Financial Markets */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3102 Indian Financial System and Financial Markets
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand the role, function, components and
                                regulation of the financial system in reference
                                to the macro economy.
                              </li>
                              <li>
                                Identify the existence of regulatory authority
                                and development of Banking and non-banking
                                financial institutions.
                              </li>
                              <li>
                                Know the instruments, participants, structure
                                and operation of various financial market
                                working in India.
                              </li>
                              <li>
                                Assess the important role of development banks
                                in the Indian financial system and create
                                strategies to promote financial inclusion.
                              </li>
                            </ol>
                          </div>

                          {/* 3103 Financial Derivatives and Risk Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3103 Financial Derivatives and Risk Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Describe and explain the fundamental features of
                                a range of key financial derivatives
                                instruments.
                              </li>
                              <li>
                                Solve problems requiring pricing derivative
                                instruments and hedge market risk based on
                                numerical data and current market trends.
                              </li>
                              <li>
                                Acquire ability to selection of various options
                                strategies and able to determine option prices
                                with Binomial and Black Scholes models.
                              </li>
                              <li>
                                Estimate the value of interest rate and foreign
                                exchange swaps; Be able to understand the
                                structure of commodity market.
                              </li>
                            </ol>
                          </div>

                          {/* 3104 Behavioral Finance */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3104 Behavioral Finance
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Explain and demonstrate using empirical data the
                                challenges to the efficient market hypothesis.
                              </li>
                              <li>
                                Explain the nature and forecast the consequences
                                of key behavioural biases of investors.
                              </li>
                              <li>
                                Demonstrate the effect of Emotional Factors and
                                Social Forces on investment.
                              </li>
                              <li>
                                Explain the psychological factors influencing
                                decision-making.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Marketing Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Marketing Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 3201 Retail Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3201 Retail Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Acquaintance budding managers with knowledge of
                                planning, designing, implementation and
                                assessment of retail strategies based on
                                consumer needs and prevailing trends.
                              </li>
                              <li>
                                Understands evolution of retail industry,
                                strategies and apply in retail sector.
                              </li>
                              <li>
                                Understand characteristics of retail trading
                                area, factors of site locations, information
                                system requirements and techniques of customer
                                retention.
                              </li>
                              <li>
                                Understand the role of ICT in retail management
                                in today's market scenario.
                              </li>
                            </ol>
                          </div>

                          {/* 3202 Consumer Behavior */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3202 Consumer Behavior
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand consumer behavior in totality and its
                                application in marketing.
                              </li>
                              <li>
                                Understand marketing decisions and its interlink
                                with consumer behavior.
                              </li>
                              <li>
                                Recognize social, technological, implications of
                                marketing actions on consumer behavior.
                              </li>
                              <li>
                                Design Models and analyse latest trends which
                                influence consumer behavior.
                              </li>
                            </ol>
                          </div>

                          {/* 3203 Brand Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3203 Brand Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Train students to manage product, and building
                                brand equity in the market of an organization.
                              </li>
                              <li>
                                Give students an insight of managing brand over
                                multiple categories, over time and across
                                multiple market segments.
                              </li>
                              <li>
                                Gain knowledge and skills in brand architecture
                                and brand engagement.
                              </li>
                              <li>
                                Build strategies for launching product across
                                markets.
                              </li>
                            </ol>
                          </div>

                          {/* 3204 Sales and Distribution Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3204 Sales and Distribution Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Learner understand importance of SDM in
                                marketing functional and its interlinks with
                                other functional areas.
                              </li>
                              <li>
                                Had knowledge and understand the diverse
                                variables affecting sales and distribution
                                functions and various plans of distribution.
                              </li>
                              <li>
                                Develop expertise in designing and effectively
                                managing company's sales and distributions
                                operations.
                              </li>
                              <li>
                                Understand fundamentals of distribution
                                channels, logistics and supply chain management.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Human Resource Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Human Resource Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 3301 Talent Acquisition and Development */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3301 Talent Acquisition and Development
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Students will be able to understand and explain
                                talent acquisition process and retain talent.
                              </li>
                              <li>
                                Students will be able to understand the
                                interplay between various aspects of talent
                                acquisition retention and development of talent.
                              </li>
                              <li>
                                Students will be able to analyse the need
                                assessment of training and its methods.
                              </li>
                              <li>
                                Student will be able to learn to design training
                                programme and also can explore issues and
                                possible solutions for evaluating training.
                              </li>
                            </ol>
                          </div>

                          {/* 3302 Employee Relations */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3302 Employee Relations
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>Elaborate the IR perspective in detail.</li>
                              <li>
                                Illustrate the role of trade union in the
                                industrial setup.
                              </li>
                              <li>
                                Comprehend the causes and impact of industrial
                                disputes.
                              </li>
                              <li>
                                Understand importance and process of developing
                                and maintaining harmonious relationships between
                                the management and all level of employees.
                              </li>
                            </ol>
                          </div>

                          {/* 3303 Performance Management System */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3303 Performance Management System
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Explain the concept of performance management,
                                challenges of performance management and
                                different advantages of implementing
                                well-designed performance management systems.
                              </li>
                              <li>
                                Understand that performance management is an
                                on-going process composed of several
                                sub-processes, such as performance planning,
                                execution, assessment, and review.
                              </li>
                              <li>
                                Analyze different methods and approaches to
                                performance measurement and also can identify
                                some of the common challenges, problems with the
                                performance appraisal process.
                              </li>
                              <li>
                                Design a performance management system and also
                                can develop key skills involved in effective
                                performance management and employee development.
                              </li>
                            </ol>
                          </div>

                          {/* 3304 Compensation and Benefit Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              3304 Compensation and Benefit Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Students will be able to design rational and
                                contemporary compensation systems in modern
                                organization and analyse different types of
                                rewarding procedures of employees on the basis
                                of performance.
                              </li>
                              <li>
                                Students will be able to analyse, integrate, and
                                apply the knowledge to solve compensation and
                                reward related problems in organization.
                                Students will be able to justify the existing
                                pay structure to employees.
                              </li>
                              <li>
                                Students can hold the knowledge of the different
                                softwares used for compensation management in
                                this technological era.
                              </li>
                              <li>
                                Students will be able to summarize the important
                                provisions of social security legislation in
                                reference to Employee State Insurance Act 1948,
                                Payment of Gratuity Act 1982, and Employee's
                                Provident Fund Act 1952.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.B.A. Semester-IV */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "mba-sem4" ? null : "mba-sem4",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  M.B.A. Semester-IV
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "mba-sem4" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "mba-sem4" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* Common Subjects */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Common Subjects
                        </h4>
                        <div className="space-y-6">
                          {/* 401 Strategic Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              401 Strategic Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand the fundamental aspects of strategy,
                                strategic management process and its intents.
                              </li>
                              <li>
                                Analyse the importance of environmental and
                                competitive analysis for formulating Corporate
                                strategy.
                              </li>
                              <li>
                                Categorize different level of Corporate
                                strategies and its alternatives in strategy
                                formulation.
                              </li>
                              <li>
                                Apply the strategic alternative and implement
                                &amp; control in corporate setting.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Finance Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Finance Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 4101 Managing Banks and Financial Institutions */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4101 Managing Banks and Financial Institutions
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand functioning of banking industry and
                                able to know about the various financial
                                services provided by banks.
                              </li>
                              <li>
                                Aware about significance of modern banking
                                products and schemes.
                              </li>
                              <li>
                                Learn about the important concepts like
                                investment banking and wealth management along
                                with practical approach.
                              </li>
                              <li>
                                Understand the technology driven banking system
                                like e-banking, electronic fund transfer and
                                electronic payment system.
                              </li>
                            </ol>
                          </div>

                          {/* 4102 Financial Markets and Financial Services */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4102 Financial Markets and Financial Services
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Identify the functions of financial markets and
                                institutions and examine their impact on
                                financial system of a country.
                              </li>
                              <li>
                                Describe the framework of Forex markets and
                                mechanism of exchange rate determination.
                              </li>
                              <li>
                                Analyse the salient features of various
                                financial products, services and instruments.
                              </li>
                              <li>
                                Acquire knowledge of modern financial services
                                and familiarize with Fintech and Digital
                                currency.
                              </li>
                            </ol>
                          </div>

                          {/* 4103 Project Appraisal and Finance */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4103 Project Appraisal and Finance
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Acquire the knowledge of Project Management and
                                able to prepare Detail project report.
                              </li>
                              <li>
                                Gain the knowledge about different sources of
                                financing and financial appraisal technique.
                              </li>
                              <li>
                                Understanding the concept of Corporate
                                restructuring, Mergers and Acquisitions.
                              </li>
                              <li>
                                Analyse various types of Project risk and
                                preparation of project report.
                              </li>
                            </ol>
                          </div>

                          {/* 4104 Working Capital Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4104 Working Capital Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Evaluate Working Capital effectiveness of a
                                company based on its operating and cash
                                conversion cycles, and compare the company's
                                effectiveness with that of peer companies.
                              </li>
                              <li>
                                Identify and evaluate the necessary tools to use
                                in managing a company's net daily cash position.
                              </li>
                              <li>
                                Estimate a company's management of accounts
                                receivable policy, inventory, and accounts
                                payable over time and compared to peer
                                companies.
                              </li>
                              <li>
                                Evaluate the choices of short-term funding
                                available to a company and recommend a financing
                                method.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Marketing Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Marketing Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 4201 Digital Marketing */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4201 Digital Marketing
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                To familiarize aspirants with fundamental of
                                digital Marketing.
                              </li>
                              <li>
                                Implement a process of planning of social media
                                or digital marketing activities.
                              </li>
                              <li>
                                Use tools and techniques to manage digital and
                                social media marketing programs.
                              </li>
                              <li>
                                Design social media programs that directly
                                support business and marketing goals.
                              </li>
                            </ol>
                          </div>

                          {/* 4202 Integrated Marketing Communication */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4202 Integrated Marketing Communication
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                To recognise the significance of IC in the
                                contemporary times and understand fundamentals
                                thereof.
                              </li>
                              <li>
                                To comprehend the advertising media related
                                attributes thoroughly and modern media
                                platforms.
                              </li>
                              <li>
                                To enable aspirants to design the advertising
                                body copy and campaign.
                              </li>
                              <li>
                                To contribute to advertising arena with a due
                                consideration for ethical and social aspects.
                              </li>
                            </ol>
                          </div>

                          {/* 4203 Sales Promotion Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4203 Sales Promotion Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Learn sales promotion techniques for consumer,
                                trade, company and sales force.
                              </li>
                              <li>
                                Develop sales promotion campaign, establishing
                                its objectives, tools and program.
                              </li>
                              <li>
                                Understand its roles and purpose to serve in
                                overall marketing communication, assessing
                                effectiveness of tools used in promotion, know
                                modern day tools of promotion.
                              </li>
                            </ol>
                          </div>

                          {/* 4204 Service Marketing */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4204 Service Marketing
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Have a greater understanding of services
                                marketing, specialties of how it dominates the
                                business landscape.
                              </li>
                              <li>
                                Acquaintance with major elements needed to
                                improve marketing of services and adding value
                                to the customers perception.
                              </li>
                              <li>
                                Appraise the nature and development of
                                strategies of marketing of services.
                              </li>
                              <li>
                                Handling customers complaints and insight to
                                service recovery management.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Human Resource Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Human Resource Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 4301 Legal Framework Governing Human Relations */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4301 Legal Framework Governing Human Relations
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Students will gain a basic understanding of
                                objectives and importance of laws relating to
                                industrial disputes and management of trade
                                union and the role of trade unions in changing
                                environment.
                              </li>
                              <li>
                                Understanding of various factors responsible for
                                growth and development of labour laws.
                              </li>
                              <li>
                                Student will be able to summarize the important
                                provisions of Wage Legislations, in reference to
                                Payment of Wages Act 1936, Minimum Wages Act
                                1948 &amp; Payment of Bonus Act 1965.
                              </li>
                              <li>
                                Students will be able to understand the laws
                                related to working conditions in factories.
                              </li>
                            </ol>
                          </div>

                          {/* 4302 Organizational Change and Intervention Strategies */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4302 Organizational Change and Intervention
                              Strategies
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Students will be able to understand theories and
                                models that form the foundation of disciplines
                                as well as the OD diagnostic process.
                              </li>
                              <li>
                                Students will be able to understand the ethics
                                of OD professional and also can recognise
                                ethical principles in organisational
                                development.
                              </li>
                              <li>
                                Students will comprehend the main approaches of
                                change and will be equipped with knowledge and
                                skills required for effective change and
                                organisational development.
                              </li>
                              <li>
                                Students will be able to apply various OD
                                interventions and can develop a working
                                knowledge of all aspects of OD intervention
                                process.
                              </li>
                            </ol>
                          </div>

                          {/* 4303 Team Dynamics at Work */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4303 Team Dynamics at Work
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Students will be able to justify formation and
                                development of teams and can explain the
                                dynamics of Team &amp; Team Building and
                                different learning methodologies in team
                                decision-making.
                              </li>
                              <li>
                                Student will be able to justify the
                                applicability of various theories of Motivation,
                                T-group sensitivity training and Johari Window
                                and also able to justify the Conflict resolution
                                strategy.
                              </li>
                              <li>
                                Student will be able to understand the
                                development of team and can discover orientation
                                through FIRO-B.
                              </li>
                              <li>
                                Students will be able to determine the
                                importance of Interpersonal Communication and
                                can increase their self-awareness and strengthen
                                ability to better understand others.
                              </li>
                            </ol>
                          </div>

                          {/* 4304 International Human Resource Management */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4304 International Human Resource Management
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Recognize, outline, and illustrate the enduring
                                global contexts of International HRM
                                understanding and key skills required by HR
                                professionals working in an international
                                context with multinational organizations.
                              </li>
                              <li>
                                Demonstrate, appraise the implications of IHRM
                                in the Host Country Context and managing
                                alliances and joint venture.
                              </li>
                              <li>
                                Differentiate the Context of Cross-border
                                Alliances, prepare staffing international
                                operations for sustained global growth,
                                recruiting and selecting staff for international
                                assignments, interpret and analyze the
                                International Industrial Relation issues and
                                performance management.
                              </li>
                              <li>
                                Evaluate, interpret issues of international
                                training, development and also can able to
                                comprehend HRM practices in different countries.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Business Analytics Specialization */}
                      <div className="mb-4">
                        <h4 className="font-bold text-blue-800 mb-4 text-base border-b border-blue-200 pb-2">
                          Business Analytics Specialization
                        </h4>
                        <div className="space-y-6">
                          {/* 4401 Data Analytics with R */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4401 Data Analytics with R
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>Demonstrate skill in data management.</li>
                              <li>
                                Understand the basic concept of R programming.
                              </li>
                              <li>Demonstrate skills in data visualization.</li>
                              <li>
                                Describe their proficiency in business
                                statistical analysis of data.
                              </li>
                            </ol>
                          </div>

                          {/* 4402 Data Mining for Business Decisions */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4402 Data Mining for Business Decisions
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Realize Data Mining (DM) principles and
                                techniques.
                              </li>
                              <li>
                                Analyse large sets of data to gain useful
                                business understanding.
                              </li>
                              <li>
                                Interpret business applications of data mining.
                              </li>
                              <li>
                                Demonstrate skills in new trends of Data Mining
                                in relevant business fields.
                              </li>
                            </ol>
                          </div>

                          {/* 4403 Marketing Analytics */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4403 Marketing Analytics
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>Develop the skill in marketing analytics.</li>
                              <li>
                                Predict the market scenario for effective
                                marketing decision.
                              </li>
                              <li>
                                Analyze the customer behavior for strategy
                                formation.
                              </li>
                              <li>
                                Assess the advertising effect to form adequate
                                retailing policies.
                              </li>
                            </ol>
                          </div>

                          {/* 4404 Financial Credit Risk Analytics */}
                          <div>
                            <h4 className="font-bold text-gray-800 mb-2">
                              4404 Financial Credit Risk Analytics
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              After successfully completing the course, students
                              will be able to:
                            </p>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                              <li>
                                Understand about various types of financial
                                credit.
                              </li>
                              <li>Interpret the credit risk and its rating.</li>
                              <li>
                                Inspect the risk to frame effective management
                                and governance policies.
                              </li>
                              <li>Demonstrate skill of credit analysis.</li>
                            </ol>
                          </div>
                        </div>
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

    ranking: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2">
          Business School Ranking
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <h4 className="text-base font-semibold text-gray-700 text-center">
              Ranking by different independent national level best B-Schools
              Surveys
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Year
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Name of Survey
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Link
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Ranking / Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    year: "2025",
                    survey:
                      "Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2025",
                    link: "more details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/IIRF_Best_B-School_Ranking_2025.pdf",
                    ranking:
                      "Ranked 47th in the State, 111th Rank among all Private B-schools in India",
                  },
                  {
                    year: "2024",
                    survey:
                      "Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2024",
                    link: "more details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/IIRF_Best_B-School_Ranking_2024.pdf",
                    ranking:
                      "Ranked 35th in the State, 108th Rank among all Private B-schools in India",
                  },
                  {
                    year: "2023",
                    survey:
                      "Indian Institutional Ranking Framework (IIRF) Top MBA Colleges in India 2023 - Survey conducted during September-October 2022",
                    link: "more details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/IIRF_Best_B-School_Ranking_2023.pdf",
                    ranking:
                      "Ranked 30th in the West Zone, 108th Rank among all Private B-schools in India",
                  },
                  {
                    year: "2022",
                    survey:
                      "Fortune India Best B-School Ranking, August-September 2022",
                    link: "more details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/Fortune_India_Best_B-School_Ranking_2022.pdf",
                    ranking:
                      "Only institute from Vidarbha, Maharashtra appearing in the Fortune India Best B-School Ranking 2022",
                  },
                  {
                    year: "2022",
                    survey:
                      "Business School Rankings by Business today published as on 29th Oct 2022",
                    link: "more details",
                    linkUrl: "https://www.businesstoday.in/bt-schools",
                    external: true,
                    ranking:
                      "Ranked among Top 100 B-school in India in Living as well as ROI",
                  },
                  {
                    year: "2021",
                    survey:
                      "SSGMCE ranking in DATA QUEST T- School Employability Ranking 2021",
                    link: "more details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/DataQuest_T-School_Ranking_2021.pdf",
                    ranking:
                      "Rank-73 : Private Sector\nRank - 81 : Government and private institutes",
                  },
                  {
                    year: "2018",
                    survey:
                      "Outlook-Drshti Survey 2018 ranks DBA&R at 86th amongst Indias Top 100 Management Schools",
                    link: "Click here for Details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/Outlook_Drshti_Survey_2018.pdf",
                    ranking: "Ranked 86th",
                  },
                  {
                    year: "2018",
                    survey:
                      "Business Today ranks Shegaon MBA amongst top 100 B-Schools in India",
                    link: "Click here for Details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/Business_Today_Ranking_2018.pdf",
                    ranking: "Ranked 80th",
                  },
                  {
                    year: "2017",
                    survey:
                      "HONOURED AS MANAGEMENT COLLEGE OF THE YEAR 2017 -Program Efficacy by Higher Education Review Magazine, Nov. 2017",
                    link: "Click here for Details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/Higher_Education_Review_2017.pdf",
                    ranking: "",
                  },
                  {
                    year: "2017",
                    survey:
                      "Business Today-MDRA ranks DBA&R, SSGMCE, Shegaon amongst Best B-Schools of India",
                    link: "Click here for Details",
                    linkUrl:
                      "/uploads/documents/mba_ranking/BT_MDRA_Ranking_2017.pdf",
                    ranking: "Ranked at 146th position",
                  },
                  {
                    year: "2017",
                    survey:
                      "DBA&R, Shegaon amongst India's Top 100 B-Schools for fourth consecutive year - Outlook-Drshti Survey 2017",
                    link: "Click here for Details",
                    linkUrl: "#",
                    ranking:
                      "Ranked at 92nd place amongst all the top business schools of our country.",
                  },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium">
                      {item.year}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.survey}
                    </td>
                    <td className="px-6 py-3 text-sm border border-gray-200">
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ssgmce-blue hover:text-ssgmce-orange hover:underline font-medium"
                      >
                        {item.link}
                      </a>
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 whitespace-pre-line">
                      {item.ranking}
                    </td>
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
                  { label: "Syllabus Second Year (4th Sem)", link: "#" },
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
                    <span className="text-gray-700 text-sm font-medium">
                      Scheme and Syllabus Ph.D.
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

          {/* University Toppers */}
          {prideTab === "toppers" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
                  <h4 className="text-xl font-bold">UNIVERSITY RANK HOLDERS</h4>
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
                      {t("pride.toppers", defaultPrideToppers).length > 0 ? (
                        t("pride.toppers", defaultPrideToppers).map(
                          (yearGroup, yearIdx) => (
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
                                                "pride.toppers",
                                                defaultPrideToppers,
                                              ),
                                            ),
                                          );
                                          newData[yearIdx].year = val;
                                          updateData("pride.toppers", newData);
                                        }}
                                      />
                                    </td>
                                  )}
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditableText
                                      value={record.name}
                                      onSave={(val) =>
                                        updatePrideToppers(
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
                                              "pride.toppers",
                                              defaultPrideToppers,
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
                                        updateData("pride.toppers", newData);
                                      }}
                                    >
                                      Delete
                                    </td>
                                  )}
                                </tr>
                              ))}
                            </React.Fragment>
                          ),
                        )
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
                        JSON.stringify(t("pride.toppers", defaultPrideToppers)),
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
                      updateData("pride.toppers", newData);
                    }}
                    className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                  >
                    Add Year Group
                  </button>
                )}
              </div>
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
            <h2 className="text-3xl font-bold text-gray-900">
              Achievements & Awards
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-3">
              Master of Business Administration (MBA)
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

    accreditations: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          Recognitions and Accreditations
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Recognition
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Effective Period
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Score / Grade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2022
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Program Accreditation by NBA, New Delhi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Sept. 2013 for three years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    771 out of 1000
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2013
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Program Accreditation by NBA, New Delhi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Sept. 2013 for three years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    771 out of 1000
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2010
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Institutional Accreditation by NAAC, Bengaluru
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Oct. 2010 for five years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">B+ Grade</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2007
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Program Accreditation by NBA, New Delhi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    May 2007 for three years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    748 out of 1000 (B Grade)
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2003
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Institutional Accreditation by NAAC, Bengaluru
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Nov. 2003 for five years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">B+ Grade</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2002
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Selected as Network Institution under TEQIP, MHRD, Govt. of
                    India
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    March 2002 to Feb. 2007
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    First Phase of TEQIP
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2002
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Program Accreditation by NBA, New Delhi
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    May 2002 for three years
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">-</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2002
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    ISO 9001:2000 Certified
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    March 2002 to Feb. 2005
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">JAS-ANZ</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    2000
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    UGC Recognition under Section 12B
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Nov. 2000</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    College Recognition
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    1994
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    Affiliation to Sant Gadge Baba Amravati University
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    August 1994
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Permanent Affiliation
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    1994
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    AICTE, New Delhi Approval
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    w.e.f. 31.3.1994
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    First Approval
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                    1989
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                    UGC Recognition Section 2f
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Feb. 1989</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    College Recognition
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                        Placement Record for Session
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
                Department of Master of Business Administration (MBA)
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
                              .title ||
                            "Newsletter Spring Semester July - December 2025"
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

    projects: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          UG/PG Projects (Dissertation)
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 w-24">
                    Group No.
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                    Project Title
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  {
                    no: 1,
                    title:
                      "A study on work life balance among working women of Maharashtra Police in Buldhana District",
                  },
                  {
                    no: 2,
                    title:
                      "A study of impact of social media in knowledge development of farmers",
                  },
                  {
                    no: 3,
                    title:
                      "A Study of Socio Economic Impact of Road Traffic Congestion in Nandura",
                  },
                  {
                    no: 4,
                    title:
                      "A Study Of Employee Motivation In Select Banks in Sangrampur region",
                  },
                  {
                    no: 5,
                    title:
                      "A study of Recruitment and Selection process in HDFC Bank Shegaon",
                  },
                  {
                    no: 6,
                    title:
                      "A Study on effective role of Human Resource Management in Vikamshi Fabrics Pvt. Ltd.",
                  },
                  {
                    no: 7,
                    title:
                      "A Study of Implications on Employees Performance and Organizational Productivity wrt Work",
                  },
                  {
                    no: 8,
                    title:
                      "A study of customer satisfaction in banking industry with special reference to private sector banks in Buldhana district",
                  },
                  {
                    no: 9,
                    title: "DIMENSIONS OF WORK FROM HOME CULTURE - A STUDY",
                  },
                  {
                    no: 10,
                    title:
                      "A study on motivational strategies and their effectiveness on employees productivity in private financial institutions in Akola region.",
                  },
                  {
                    no: 11,
                    title:
                      "Impact of Social Media on Youth's Social Life and Buying Behaviour - A Study of Khamgaon Region",
                  },
                  {
                    no: 12,
                    title:
                      "Systematic Study on Attrition of workers of Unorganized Sector in Khamgaon Region",
                  },
                  {
                    no: 13,
                    title:
                      "A comparative study on job satisfaction of teachers between Government and Private sector in Akola region",
                  },
                  {
                    no: 14,
                    title:
                      "A study on changing pattern of demand for E-Banking services in Shegaon",
                  },
                  {
                    no: 15,
                    title:
                      "A STUDY ON STRESS MANAGEMENT TECHNIQUES FOR LABOURS WITH REFERENCE TO PARAS THERMAL POWER STATION",
                  },
                  {
                    no: 16,
                    title:
                      "Comparative analysis of key players in dairy industry - A study of Khamgaon region",
                  },
                  {
                    no: 17,
                    title:
                      "A Study of Customer Satisfaction towards Fastrack Watches in Akola Region",
                  },
                  {
                    no: 18,
                    title:
                      "A study of potential of housewives to establish small scale businesses",
                  },
                  {
                    no: 19,
                    title:
                      "Prospect of financial inclusion of rural customers - A study of Lanjud village",
                  },
                  {
                    no: 20,
                    title:
                      "A Study of Self-Help Groups & Women's Empowerment in Rural Area - A Case of Akola",
                  },
                  {
                    no: 21,
                    title:
                      "A study on effectiveness of competency mapping process on employee's development at Jadhao Gear Amravati",
                  },
                  {
                    no: 22,
                    title:
                      "A STUDY ON FACTORS INFLUENCING THE INVESTMENT BEHAVIOR OF STUDENTS PURSUING HIGHER EDUCATION IN AMRAVATI.",
                  },
                  {
                    no: 23,
                    title:
                      "A Study and design of training programs for employees in SBI, Akot",
                  },
                  {
                    no: 24,
                    title:
                      "AN ANALYSIS OF BUYING DECISION FOR ELECTRIC TWO WHEELER - A STUDY OF SHEGAON-KHAMGAON REGION",
                  },
                  {
                    no: 25,
                    title:
                      "A Comparative Study of Customer Perception Regarding Housing Loan Schemes of Public and Private Sector Banks",
                  },
                  {
                    no: 26,
                    title:
                      "A study of grievance management system with special reference to SBI customers in Shegaon",
                  },
                  {
                    no: 27,
                    title:
                      "IMPACT OF STRESS ON EMPLOYEES BEHAVIOR IN ORGANIZATION - A STUDY OF KHAMGAON REGION",
                  },
                  {
                    no: 28,
                    title:
                      "A study and design of Employee Engagement In HUL Company Khamgaon",
                  },
                  {
                    no: 29,
                    title:
                      "Perception About Mobile Banking- A Study of Buldhana Region",
                  },
                  {
                    no: 30,
                    title:
                      "A STUDY ON INVESTMENT PATTERN OF INVESTORS IN GOLD WITH SPECIAL REFERENCE TO MIDDLE CLASS PEOPLE IN BULDHANA REGION",
                  },
                  {
                    no: 31,
                    title:
                      "STUDY ON GST AND ITS IMPACT ON MNC MANUFACTURING INDUSTRY",
                  },
                  {
                    no: 32,
                    title:
                      "INDIA POST PAYMENT BANK PROBLEM AND PROSPECT IN AKOLA REGION",
                  },
                  {
                    no: 33,
                    title:
                      "A Study On The Consumer Behaviour Towards Domestic Water Purifiers In Akola Region",
                  },
                  {
                    no: 34,
                    title:
                      "A study of Training & development Policies in Indorama synthetics Pvt. Ltd. Buttibori, Nagpur",
                  },
                  {
                    no: 35,
                    title:
                      "A COMPARATIVE STUDY OF SELECT INSURANCE COMPANIES & THEIR PRODUCTS IN BULDHANA REGION.",
                  },
                  {
                    no: 36,
                    title:
                      "COMPARATIVE ANALYSIS OF FINANCIAL PERFORMANCE OF SELECT PUBLIC SECTOR AND PRIVATE SECTOR BANKS FROM 2017-2022",
                  },
                  {
                    no: 37,
                    title:
                      "A STUDY ON UNDERSTANDING CUSTOMER SATISFACTION LEVEL REGARDING E-MONEY IN KARANJA REGION",
                  },
                  {
                    no: 38,
                    title:
                      "Customer Preference towards Ice Creams - A study in Malkapur region with respect to Havmor and Top-n-Town",
                  },
                  {
                    no: 39,
                    title:
                      "Exploring the factors influencing career choice and motivation of student in the transition phase of education",
                  },
                  {
                    no: 40,
                    title:
                      "A STUDY ON UNDERSTANDING CUSTOMER SATISFACTION LEVEL REGARDING E-MONEY IN KARANJA REGION",
                  },
                  {
                    no: 41,
                    title:
                      "A Study of Insurance as a vehicle of saving in Buldhana District",
                  },
                  {
                    no: 42,
                    title:
                      "SERVQUAL: An Analytical Study of Public and Private Hospitals in Buldhana District",
                  },
                  {
                    no: 43,
                    title:
                      "A study of financial analysis with reference to Visaka Industries Ltd. Mauda, Nagpur for a period of 2019 to 2022.",
                  },
                  {
                    no: 44,
                    title:
                      "A STUDY OF MARKETING STRATEGY OF MAHARAJA MASALA UDOYG IN BULDHANA DISTRICT",
                  },
                  {
                    no: 45,
                    title:
                      "A STUDY OF DEALERS AND DISTRIBUTION OF AGRO- BUSINESS MARKETING IN MALKAPUR REGION",
                  },
                  {
                    no: 46,
                    title:
                      "A STUDY INCLINATION OF STAKEHOLDERS TOWARDS EQUITY BASED MUTUAL FUND IN AKOLA REGION",
                  },
                  {
                    no: 47,
                    title:
                      "A study on demand of Paver Blocks in Shegaon region",
                  },
                  {
                    no: 48,
                    title:
                      "A Study on the Customer Perception towards Electric Bike In Buldhana District",
                  },
                  {
                    no: 49,
                    title:
                      "A STUDY OF VARIOUS BANK APPS AND ALLIED CUSTOMER SATISFACTION",
                  },
                  {
                    no: 50,
                    title: "A STUDY OF BRAND SWITCHING IN CASE OF SMARTPHONE",
                  },
                  {
                    no: 51,
                    title:
                      "COMPETITIVE ANALYSIS OF ORGANAIZATION INVOLVED IN NETWORKING SERVICES",
                  },
                  {
                    no: 52,
                    title:
                      "A comparative study of satisfaction on Asian and Indigo paint in Shegaon region",
                  },
                  {
                    no: 53,
                    title:
                      "Adoptability of Digital Marketing by the Retailers in Shegaon Region - A Study",
                  },
                  {
                    no: 54,
                    title:
                      "A STUDY ON THE FACTORS INFLUENCING DECISIONS OF THE INVESTORS TO INVEST IN SIP IN BULDHANA REGION",
                  },
                ].map((project, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold text-center">
                      {project.no}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {project.title}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

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
                Department of Business Administration and Research (MBA)
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
                      year: "First Year",
                      title: "MBA First Year",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Ep9IXN-R6NhNpjFEeX2eXN4BB3ef78z5_OY0agqd7p2r1w?e=FcxQeI",
                    },
                    {
                      year: "Final Year",
                      title: "MBA Final Year",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Epr9v88heupFrY6lkHFvq0UB6kC3oakk1ow7ukD3rfBEZQ?e=KIOGXZ",
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
                                year: "First Year",
                                title: "MBA First Year",
                                link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Ep9IXN-R6NhNpjFEeX2eXN4BB3ef78z5_OY0agqd7p2r1w?e=FcxQeI",
                              },
                              {
                                year: "Final Year",
                                title: "MBA Final Year",
                                link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Epr9v88heupFrY6lkHFvq0UB6kC3oakk1ow7ukD3rfBEZQ?e=KIOGXZ",
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
                                  year: "First Year",
                                  title: "MBA First Year",
                                  link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Ep9IXN-R6NhNpjFEeX2eXN4BB3ef78z5_OY0agqd7p2r1w?e=FcxQeI",
                                },
                                {
                                  year: "Final Year",
                                  title: "MBA Final Year",
                                  link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Epr9v88heupFrY6lkHFvq0UB6kC3oakk1ow7ukD3rfBEZQ?e=KIOGXZ",
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
                      year: "First Year",
                      title: "MBA First Year",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Ep9IXN-R6NhNpjFEeX2eXN4BB3ef78z5_OY0agqd7p2r1w?e=FcxQeI",
                    },
                    {
                      year: "Final Year",
                      title: "MBA Final Year",
                      link: "https://ssgmceacin-my.sharepoint.com/:f:/g/personal/cse_cm_ssgmce_ac_in/Epr9v88heupFrY6lkHFvq0UB6kC3oakk1ow7ukD3rfBEZQ?e=KIOGXZ",
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

    specializations: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg border-l-4 border-ssgmce-orange">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Specializations Offered
          </h2>
          <p className="text-gray-600">Choose your area of expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Financial Management",
              icon: "ðŸ’°",
              desc: "Focus on financial analysis, investment management, and corporate finance",
            },
            {
              name: "Marketing Management",
              icon: "ðŸ“Š",
              desc: "Learn brand management, digital marketing, and consumer behavior",
            },
            {
              name: "Human Resource Management",
              icon: "ðŸ‘¥",
              desc: "Specialize in talent management, organizational behavior, and HR analytics",
            },
            {
              name: "Business Analytics",
              icon: "ðŸ“ˆ",
              desc: "Master data analytics, business intelligence, and decision science",
            },
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

    "industrial-visits": (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            <FaIndustry className="inline-block mr-2 text-ssgmce-blue" />
            Industry Interaction and Tours
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industrial tours organized by the department for students of MBA
            first and final years along with faculty members to provide
            practical exposure to business operations and management practices.
          </p>
        </div>

        {/* Industrial Visits Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    S.N.
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    Visit / Tour Details
                  </th>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left font-bold whitespace-nowrap">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  {
                    sn: "01",
                    title: "Industrial Tour to KALASH SEEDS, Jalna",
                    date: "January 2025",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_kalash_seeds_jan2025.pdf",
                  },
                  {
                    sn: "02",
                    title:
                      "Experiential Study Visit to Reliance Trends, Shegaon",
                    date: "January 2025",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_reliance_trends_jan2025.pdf",
                  },
                  {
                    sn: "03",
                    title: "Experiential Study Visit to Peter England, Shegaon",
                    date: "January 2025",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_peter_england_jan2025.pdf",
                  },
                  {
                    sn: "04",
                    title:
                      "Visit to AAVISHKAR Social, Cultural and Specially Abled Organization, Shegaon",
                    date: "December 2024",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_aavishkar_dec2024.pdf",
                  },
                  {
                    sn: "05",
                    title: "Visit to Brahmakumari, Shegaon",
                    date: "November 2024",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_brahmakumari_nov2024.pdf",
                  },
                  {
                    sn: "06",
                    title:
                      "Industrial Tour to Mahatma Gandhi Institute for Rural Industrialization (MGIRI), Wardha",
                    date: "--",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_mgiri_wardha.pdf",
                  },
                  {
                    sn: "07",
                    title:
                      "Industrial Tour to Super Thermal Power, Chandrapur and Anandwan, Warora",
                    date: "04/02/2019 to 05/02/2019",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_chandrapur_warora_feb2019.pdf",
                  },
                  {
                    sn: "08",
                    title:
                      "Industrial Visit to Jain Irrigation and Gandhi Research Foundation, Jalgaon",
                    date: "22/10/2018",
                    report:
                      "/uploads/documents/mba/industrial-visits/mba_iv_jain_irrigation_jalgaon_2018.pdf",
                  },
                  {
                    sn: "09",
                    title:
                      "Industrial Tour to Adani Port Special Economic Zone, Mundra, Kutch, Gujarat",
                    date: "15/03/2017 to 18/03/2017",
                    report: null,
                  },
                ].map((visit, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {visit.sn}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{visit.title}</td>
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      {visit.date}
                    </td>
                    <td className="px-6 py-4">
                      {visit.report ? (
                        <a
                          href={visit.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-ssgmce-blue hover:underline text-xs"
                        >
                          <FaFileAlt className="text-xs" />
                          View Report
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs">--</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    "guest-lectures": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2">
          Corporate Leader Speak's
        </h3>

        {[
          {
            session: "Session 2024-25",
            entries: [
              {
                speaker: "Mrs. Sudha Murthy Ji",
                topic: "A Philanthropist Speaks on Lessons from Life",
                report:
                  "/uploads/documents/mba_corporate_leader_speaks/Session_2024-25_Mrs._Sudha_Murthy_Ji.pdf",
              },
              {
                speaker:
                  "Mr. Chirag Lasod, Jain Exports, Neemuch, M.P.; Mr. Rajesh Jadhav, Founder, Surya Consumer Products, MIDC, Buldana; Mr. Soham Belokar, District Officer, PMSA Udyog, Buldana",
                topic: "Guest Talk",
                report:
                  "/uploads/documents/mba_corporate_leader_speaks/Session_2024-25_Mr._Chirag_Lasod,_Jain_Exports,_Neemuch,_M._P._Mr._Rajesh_Jadhav,_founder,_Surya_Consumer_Products,_MIDC.pdf",
              },
            ],
          },
          {
            session: "Session 2020-22",
            entries: [
              {
                speaker:
                  "Mr. Shrikant P. Naphade, Head, Procurement and Contract Management, Tata Power",
                topic: "Work life - An enquiry",
              },
              {
                speaker:
                  "Mr. Gaurav Date, Training Manager, Maharashtra EBSCO India",
                topic: "Expanding Horizons with true knowledge",
              },
              {
                speaker:
                  "Mr. Amol Sawant, Founder - Nisarg Katta, Member, Tiger Cell, Joint Secretary, Satpuda Foundation",
                topic: "The Nature and Us",
              },
              {
                speaker: "Mrs. Mohini Modak, Founder - Webmasterkey, Akola",
                topic: "Digital Marketing",
              },
              {
                speaker:
                  "Mr. K. K. Dave, Dean Academics, Pacific University, Rajasthan",
                topic: "Leadership",
              },
              {
                speaker:
                  "Dr. Devesh Kumar Sharma, Senior Vice President, Credit Suisse, Geneva, Switzerland",
                topic: "COVID 19 - India and future",
              },
              {
                speaker:
                  "D. Chandramohan Swamy, National Head - Operations, WardWiz India Solutions Pvt. Ltd., Pune",
                topic: "Winning skills to succeed in corporate world",
              },
              {
                speaker:
                  "Dr. Ajay Trivedi, Principal and Dean, Dept of Commerce, Parul University, Vadodara, Gujarat",
                topic: "New Perspectives of Management",
              },
            ],
          },
          {
            session: "Session 2018-2020",
            entries: [
              {
                speaker:
                  "Mr. Subhash Gore, Secretary, Saturday Club Global Trust, Akola Chapter",
                topic: "Opportunities in the digital world",
              },
              {
                speaker:
                  "Dr. Ajay Trivedi, Professor and Dean, Faculty of Commerce, Parul University, Baroda, Gujarat",
                topic: 'Webinar on "New Perspectives of Management"',
              },
              {
                speaker:
                  "Mr. Prasanna Dharmadhikari, Chembond Chemicals Ltd., Mumbai",
                topic:
                  "Opportunities in HR, Skills required for HR personnel and the advanced HR software",
              },
              {
                speaker: "Mr. Prasanna Dharmadhikari, ChemBond, Mumbai",
                topic: "Career Avenues and Emerging trends in HR",
              },
              {
                speaker:
                  "Mr. Vaibhav Nichit, Talent Acquisition Partner, HDFC, Nagpur",
                topic: "Pre-requisite for a good job",
              },
              {
                speaker: "Mr. Hemand Sharma, VNURT, Bengaluru",
                topic:
                  "VNURT Role for project and platform to MBA (Motivation for job)",
              },
              {
                speaker: "Mr. Swapnil Meshram, Capgemini, Pune",
                topic: "Latest Trends / Additional Important",
              },
              {
                speaker: "Mr. Prasad Khanzode, Professor, LTM, Wani",
                topic: "Motivation within you",
              },
              {
                speaker: "Mr. Kurien Daniel, Regional Vice President, ISTD",
                topic: "Pre-requisites at workplace in current Era",
              },
              {
                speaker:
                  "Mr. Vinod Dubey, Branch Head, SBI Life Insurance, Khamgaon",
                topic: "Career Opportunities - Seminar with SBI Life Insurance",
              },
              {
                speaker: "Mr. Rajiv Jawale, HR Manager, Kalash Seeds, Jalna",
                topic: "Perception about ways of a successful career",
              },
              {
                speaker:
                  "Mr. Subhash Gore, Saturday Club Global Trust, Akola Chapter",
                topic: "Entrepreneurship - Prerequisite",
              },
              {
                speaker: "Mr. Shekhar Rajguru, JPM - Jio Reliance, Shegaon",
                topic: "Marketing and Distribution",
              },
              {
                speaker:
                  "Miss Sweta Sharma, Radio Jockey, Radio Orange, Nagpur",
                topic:
                  "Distinguished career opportunities for management aspirant",
              },
              {
                speaker:
                  "Mr. Swapnil Meshram, Capgemini Technology Services, Pune",
                topic: "Fresher's enquiry - A thorough enquiry",
              },
              {
                speaker: "Mrs. Sudha Murthy, Chairperson, Infosys Foundation",
                topic: '"A Philanthropist Speaks - Lessons from Life"',
              },
              {
                speaker:
                  "Mr. Shekhar Rajguru, General Manager, Reliance Jio Centre, Shegaon",
                topic: "General Management",
              },
              {
                speaker: "Mr. Mayur Kalore, Cybernetix, Jaipur, Rajasthan",
                topic: "Pre-requisites for entering corporate world",
              },
              {
                speaker: "Mr. Rajiv Pande, GSM, Reliance Jio Centre Khamgaon",
                topic: "Career growth and Motivation",
              },
            ],
          },
          {
            session: "Session 2016-17",
            entries: [
              {
                speaker:
                  "Mr. Shekhar Rajguru, General Manager, Reliance Jio Centre, Shegaon",
                topic: "Expectations of Corporate from fresher",
              },
              {
                speaker:
                  "Mr. Porasnath Singh, Project Manager, Reliance Jio Centre, Shegaon",
                topic: "Opportunities in Telecom industry for MBA students",
              },
              {
                speaker:
                  "Mr. Piyush Nagda, CEO & Cofounder, Talking Asset Eduventure Pvt. Ltd., Thane",
                topic:
                  "Emerging trends in capital market & career opportunities; Sales as a career choice; Investor awareness programme",
              },
              {
                speaker: "Mr. Nikhil Nair, NSE, Mumbai",
                topic: "Career opportunities in Finance",
              },
              {
                speaker:
                  "Mr. Subhash Gore, G.K. Intelligent Systems Pvt. Ltd., Saturday Club Global Trust, Akola",
                topic: "Digital Marketing - I",
              },
              {
                speaker:
                  "Ms. Mohini Modak, Training Division, Webmaster Key, Akola",
                topic: "Digital Marketing - II",
              },
              {
                speaker:
                  "Swami Tanmayanandji, Secretary, Vivekanand Sewashram, Ambikapur, Chhattisgarh",
                topic: "Bhagwad Gita for the Youth; Karmayoga",
              },
              {
                speaker:
                  "Swami Tanmayanandji, Secretary, Vivekanand Sewashram, Ambikapur, Chhattisgarh",
                topic: 'Ancient Indian Education System; "Bhaj Govindam" & Q/A',
              },
              {
                speaker:
                  "Mr. Uday Patil, Business Head, Bajaj Finserve Ltd., Pune",
                topic: "General Management & Motivation - I",
              },
              {
                speaker:
                  "Mr. Pankaj Yadav, HR Manager, Bajaj Finserve Ltd., Pune",
                topic: "General Management & Motivation - II",
              },
              {
                speaker:
                  "Mr. Nitin Wankhade, V.P. - Client Services, Value Momentum Pvt. Ltd., Hyderabad",
                topic:
                  "Opportunities for MBA in IT & building broad skills for professional development",
              },
              {
                speaker: "Mr. Uday Sampat, Marketing & Sales Manager, Nashik",
                topic: "Leaders & Managers",
              },
              {
                speaker:
                  "Mr. Mayur Kalore, Assist. Sales Manager, Cybernetix, Gujarat",
                topic: "Motivation and expectation of corporate world",
              },
              {
                speaker:
                  "Mr. Vivek Dahake, Head Process Development, Essel Propack Ltd., Thane",
                topic: "Project management and Strategic management",
              },
              {
                speaker: "Ms. Dipika Kolhe",
                topic: "How to face Interview?",
              },
              {
                speaker:
                  "Mr. Ravindra Adhau, Sr. Credit Analyst, John Deere Finance, Pune",
                topic: "Inside you!",
              },
              {
                speaker: "Mr. Rajiv Jawale, Proprietor, BeBraaand, Jalna",
                topic:
                  "Branding Concepts; Need of single roof of branding (Umbrella)",
              },
              {
                speaker:
                  "Mr. Samadhan Damdhar, Marketing Manager, BeBraaand, Jalna",
                topic: "Promotional means and their uses",
              },
            ],
          },
        ].map((sessionGroup, sIdx) => (
          <div
            key={sIdx}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
              <h4 className="text-white font-bold text-lg">
                {sessionGroup.session}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200 w-12">
                      Sr.
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                      Name of Speaker
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                      Topic
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200 w-28">
                      Report
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sessionGroup.entries.map((entry, eIdx) => (
                    <tr
                      key={eIdx}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium text-center">
                        {eIdx + 1}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                        {entry.speaker}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                        {entry.topic}
                      </td>
                      <td className="px-6 py-3 text-sm border border-gray-200 text-center">
                        {entry.report ? (
                          <a
                            href={entry.report}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-ssgmce-blue hover:text-ssgmce-orange hover:underline font-medium text-xs"
                          >
                            <FaFileAlt className="text-xs" />
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400 text-xs">--</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
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
                    org: "Bajaj Finance Limited and Bajaj Finserv Limited",
                    date: "16-June-2025",
                    report:
                      "/uploads/documents/mba_mous/MOU_Bajaj_Finance_2025.pdf",
                  },
                  {
                    no: "2.",
                    org: "Kalash Seeds Pvt. Ltd., Mantha Road, Jalna, M.S.",
                    date: "04-Jan-2025",
                    report:
                      "/uploads/documents/mba_mous/MOU_Kalash_Seeds_2025.pdf",
                  },
                  {
                    no: "3.",
                    org: "Saturday Club Global Trust — Co-operation in Research and Education",
                    date: "12-Jan-2024",
                    report:
                      "/uploads/documents/mba_mous/MOU_Saturday_Club_Global_Trust_2024.pdf",
                  },
                  {
                    no: "4.",
                    org: "Circular Angel Pvt Ltd., Mumbai — Research, Education and Real-time Consultancy",
                    date: "13-Jan-2024",
                    report:
                      "/uploads/documents/mba_mous/MOU_Circular_Angel_2024.pdf",
                  },
                  {
                    no: "5.",
                    org: "Leben Life Sciences, Akola",
                    date: "17-Feb-2023",
                    report:
                      "/uploads/documents/mba_mous/MOU_Leben_Life_Sciences_2023.pdf",
                  },
                  {
                    no: "6.",
                    org: "Lyceum of the Philippines University — Laguna",
                    date: "14-July-2022",
                    report:
                      "/uploads/documents/mba_mous/MOU_LPU_Laguna_Philippines_2022.pdf",
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

    workshops: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2">
          MDP's, FDP's and Workshop
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          SEBI sponsored Financial Education Workshops conducted by Dr. H. M.
          Jha "Bidyarthi", a SEBI (Securities Exchange Board of India)
          empanelled Resource Person during current year
        </p>

        {/* MDP's, CEP's and FDP's */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
            <h4 className="text-white font-bold text-lg">
              MDP's, CEP's and FDP's
            </h4>
            <p className="text-orange-100 text-xs mt-1">
              Programs conducted under the auspices of MSME DI Nagpur
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Title of the Program
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Faculty Coordinator
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    No. of Beneficiaries
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    title:
                      "Management Development Program on Financial Management",
                    coordinator: "Prof. S. M. Mishra",
                    participants: "20",
                  },
                  {
                    title: "Business Skill Development Program",
                    coordinator: "Prof. P. M. Kuchar",
                    participants: "25",
                  },
                  {
                    title: "Entrepreneurship Development Program",
                    coordinator: "Prof. L.B. Deshmukh",
                    participants: "25",
                  },
                  {
                    title: "Industrial Motivation Campaign",
                    coordinator: "Prof. M. L. Herode",
                    participants: "120",
                  },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.title}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.coordinator}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 text-center">
                      {item.participants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FDP */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3">
            <h4 className="text-white font-bold text-lg">
              Faculty Development Program (FDP)
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Title of the Program
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Faculty Coordinator
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    No. of Participants
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    title:
                      "Case Development and Analysis in Management Education",
                    coordinator: "Prof. M. L. Herode",
                    participants: "26",
                  },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.title}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.coordinator}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 text-center">
                      {item.participants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Workshops */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-3">
            <h4 className="text-white font-bold text-lg">Workshops</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200 w-12">
                    Sr.
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Title of the Workshop
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Faculty Coordinator
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    No. of Participants
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200 w-28">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    title: "Workshop on Microsoft Excel",
                    coordinator: "Dr. Bilal T. Husain",
                    participants: "17 students cleared",
                    report:
                      "/uploads/documents/mba_workshops/workshops_Workshop_on_Microsoft_Excel.pdf",
                  },
                  {
                    title:
                      "Accelerated Training and Development Program (ALDP)",
                    coordinator: "Prof. Wechansing Suliya",
                    participants: "36 students participated",
                    report:
                      "/uploads/documents/mba_workshops/workshops_Accelerated_training_and_development_program(ALDP).pdf",
                  },
                  {
                    title:
                      "International Workshop on Business Analytics by DBAR, SSGMCE-Shegaon and Lyceum of the Philippines University - Laguna",
                    coordinator: "Dr. Bilal T. Husain",
                    participants: "54 students participated",
                    report:
                      "/uploads/documents/mba_workshops/workshops_International_Workshop_on_Business_Analytics_by_DBAR,_SSGMCE-Shegaon_and_Lyceum_of_the_Philippines_University-_Laguna.pdf",
                  },
                  {
                    title: "Workshop on Holistic Management",
                    coordinator: "Dr. Mayur A. Dande",
                    participants: "58 students participated",
                    report:
                      "/uploads/documents/mba_workshops/workshops_Workshop_on_Holistic_Management.pdf",
                  },
                  {
                    title: "A Session on Digital Marketing",
                    coordinator:
                      "Mr. Subhash Gore, Secretary, Saturday Club Global Trust, Akola Chapter",
                    participants: "MBA Department students participated",
                    report:
                      "/uploads/documents/mba_workshops/workshops_A_SESSION_ON_DIGITAL_MARKETING.pdf",
                  },
                  {
                    title:
                      "A Session on Website Creation and Creative Social Media Use",
                    coordinator:
                      "Mr. Subhash Gore, Saturday Club Global Trust, Akola Chapter; Mrs. Mohini Modak, Founder, Webmasterkey, Akola",
                    participants: "MBA Department students participated",
                    report:
                      "/uploads/documents/mba_workshops/workshops_A_SESSION_ON_WEBSITE_CREATION_AND_CREATIVE_SOCIAL_MEDIA_USE.pdf",
                  },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium text-center">
                      {i + 1}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.title}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.coordinator}
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                      {item.participants}
                    </td>
                    <td className="px-6 py-3 text-sm border border-gray-200 text-center">
                      {item.report ? (
                        <a
                          href={item.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-ssgmce-blue hover:text-ssgmce-orange hover:underline font-medium text-xs"
                        >
                          <FaFileAlt className="text-xs" />
                          View
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs">--</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    consultancy: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2">
          Consultancy
        </h3>

        {[
          {
            year: "2018 - 2019",
            entries: [
              {
                org: "Securities Exchange Board Of India, Mumbai",
                faculty: 'Dr. H. M. Jha "Bidyarthi"',
                remarks: "Financial Awareness Workshop",
              },
              {
                org: "Kalash Seeds, Jalna",
                faculty: "Prof. M.A. Dande",
                remarks: "Assistance in Sales Promotion",
              },
              {
                org: "Yadav Academy",
                faculty: "Prof. M.A. Dande",
                remarks: "Career Counselling",
              },
              {
                org: "Saraswati College, Shegaon",
                faculty:
                  "Dr. P.V. Bokad, Dr. L.B. Deshmukh, Prof. S.M. Mishra, Prof. V.V. Patil, Prof. W.Z. Suliya",
                remarks: "Regular Classes Of BBA",
              },
              {
                org: "Nutan Udyog, Shegaon",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. V.V. Patil',
                remarks: "Marketing Assistance",
              },
              {
                org: "Rathi Cycles, Khamgaon",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Kunal Electronics, Khamgaon",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Gurudev Motor Driving School, Shegaon",
                faculty:
                  "Prof. S.M. Mishra, Prof. M.A. Dande, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Reliance Jio, Shegaon",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
            ],
          },
          {
            year: "2017 - 2018",
            entries: [
              {
                org: "Securities Exchange Board Of India, Mumbai",
                faculty: 'Dr. H. M. Jha "Bidyarthi"',
                remarks: "Financial Awareness Workshop",
              },
              {
                org: "Kalash Seeds, Jalna",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. S.M. Mishra, Prof. P.M. Kuchar',
                remarks: "Assistance in Sales Promotion",
              },
              {
                org: "Yadav Academy",
                faculty: "Prof. M.A. Dande",
                remarks: "Career Counselling",
              },
              {
                org: "Saraswati College, Shegaon",
                faculty:
                  "Dr. P.V. Bokad, Dr. L.B. Deshmukh, Prof. S.M. Mishra, Prof. V.V. Patil, Prof. W.Z. Suliya",
                remarks: "Regular Classes Of BBA",
              },
              {
                org: "Nutan Udyog, Shegaon",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. V.V. Patil',
                remarks: "Marketing Assistance",
              },
              {
                org: "Mandar Sports, Shegaon",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Sarda's Career Point",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Maggi Corner, Shegaon",
                faculty:
                  "Prof. S.M. Mishra, Prof. M.A. Dande, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Hot Chips, Shegaon",
                faculty: "Prof. V.V. Patil, Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
              {
                org: "Kanchan Electronics, Akola",
                faculty: "Prof. V.V. Patil, Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
              {
                org: "Singar Sadan, Khamgaon",
                faculty: "Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
              {
                org: "Bappa Dabeli, Akola",
                faculty:
                  "Prof. V.V. Patil, Prof. W.Z. Suliya, Prof. M.A. Dande",
                remarks: "Marketing Assistance",
              },
              {
                org: "Indira Co. Op. Society, Shegaon",
                faculty:
                  "Prof. S.M. Mishra, Prof. M.A. Dande, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Hend Suzuki",
                faculty:
                  "Prof. S.M. Mishra, Prof. M.A. Dande, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "IPL Auction",
                faculty:
                  "Prof. S.M. Mishra, Prof. M.A. Dande, Prof. P.M. Kuchar",
                remarks: "Event Management",
              },
            ],
          },
          {
            year: "2016 - 2017",
            entries: [
              {
                org: "Securities Exchange Board of India, Mumbai",
                faculty: 'Dr. H. M. Jha "Bidyarthi"',
                remarks: "Post TDS, 15 FE Workshops conducted",
              },
              {
                org: "Consumer Guidance Society of India, Mumbai",
                faculty: 'Dr. H. M. Jha "Bidyarthi", Prof. S. M. Mishra',
                remarks: "Consumer Awareness Workshop conducted",
              },
              {
                org: "SNG Packaging Pvt. Ltd., Khamgaon",
                faculty: "Dr. P. V. Bokad and Prof. W. Z. Suliya",
                remarks: "HR Consultancy",
              },
              {
                org: "M. M. Industries, Akola",
                faculty:
                  "Prof. M. A. Dande, Prof. P. M. Kuchar and Prof. S. M. Mishra",
                remarks: "HR Consultancy",
              },
              {
                org: "Web Master Key, Akola (Subhash Gore)",
                faculty: "Prof. M. A. Dande",
                remarks: "Summer Internship by students (03)",
              },
              {
                org: "Saraswati College, Shegaon",
                faculty:
                  "Prof. L. B. Deshmukh, Prof. S. M. Mishra and Prof. V. V. Patil",
                remarks: "Regular classes of BBA",
              },
              {
                org: "Saraswati College, Shegaon",
                faculty:
                  "Prof. M. A. Dande, Prof. P. M. Kuchar and Prof. S. M. Mishra",
                remarks: "MBA Coaching classes",
              },
              {
                org: "Reliance Jio, Shegaon",
                faculty: "Prof. S. M. Mishra",
                remarks: "Summer Internship by students (03)",
              },
              {
                org: "TNS India (Mrs. Usha Ingole)",
                faculty: "Prof. M. A. Dande",
                remarks: "Logo and Product launch consultancy",
              },
              {
                org: "Internshala",
                faculty: "Prof. M. A. Dande",
                remarks:
                  "Content writing, Career counseling talk, Nursery consultancy",
              },
            ],
          },
          {
            year: "2015 - 2016",
            entries: [
              {
                org: "Securities Exchange Board Of India, Mumbai",
                faculty: 'Dr. H. M. Jha "Bidyarthi"',
                remarks: "Financial Awareness Workshop",
              },
              {
                org: "Kalash Seeds, Jalna",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Dr. P.V. Bokad, Prof. V.V. Patil',
                remarks: "Assistance in Sales Promotion",
              },
              {
                org: "Bajaj Finserv",
                faculty: "Prof. S.M. Mishra",
                remarks: "Summer Internship Projects",
              },
              {
                org: "Reliance Jio",
                faculty: "Prof. S.M. Mishra",
                remarks: "Summer Internship Projects",
              },
              {
                org: "Havells - Jagadamba Services And Care",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. V.V. Patil',
                remarks: "Marketing Assistance",
              },
              {
                org: "Buldana Urban Co Op Cr So, Shegaon",
                faculty: "Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "KFC",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. P.M. Kuchar',
                remarks: "Marketing Assistance",
              },
              {
                org: "Hend Suzuki",
                faculty:
                  'Dr. H. M. Jha "Bidyarthi", Prof. M.A. Dande, Prof. P.M. Kuchar',
                remarks: "Marketing Assistance",
              },
              {
                org: "KTM Bikes, Akola",
                faculty: "Prof. S.M. Mishra, Prof. P.M. Kuchar",
                remarks: "Marketing Assistance",
              },
              {
                org: "Sakshi Constructions, Shegaon",
                faculty: "Dr. L.B. Deshmukh, Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
              {
                org: "Nutan Udyog, Shegaon",
                faculty: "Dr. L.B. Deshmukh, Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
              {
                org: "ACC Cement",
                faculty: "Prof. V. V. Patil, Prof. W.Z. Suliya",
                remarks: "Marketing Assistance",
              },
            ],
          },
        ].map((yearGroup, yIdx) => (
          <div
            key={yIdx}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3">
              <h4 className="text-white font-bold text-lg">
                Consultancy {yearGroup.year}
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200 w-12">
                      Sr.
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                      Consulting Organization
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                      Consultant Faculty
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {yearGroup.entries.map((entry, eIdx) => (
                    <tr
                      key={eIdx}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium text-center">
                        {eIdx + 1}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200 font-medium">
                        {entry.org}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                        {entry.faculty}
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 border border-gray-200">
                        {entry.remarks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
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
                href={`/uploads/documents/mba_publications/MBA_publication_${year}.pdf`}
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
              {(defaultMbaPatents[researchYear] || []).length === 0 ? (
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
                        {(defaultMbaPatents[researchYear] || []).map(
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
                                  className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status === "Granted" || pat.status === "Copyright Awarded" ? "bg-green-100 text-green-700" : pat.status === "Registered" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
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
              {(defaultMbaPublications[researchYear] || []).length === 0 ? (
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
                        {(defaultMbaPublications[researchYear] || []).map(
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
              {(defaultMbaConferences[researchYear] || []).length === 0 ? (
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
                        {(defaultMbaConferences[researchYear] || []).map(
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
              {(defaultMbaCopyrights[researchYear] || []).length === 0 ? (
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
                        {(defaultMbaCopyrights[researchYear] || []).map(
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
              {(defaultMbaBooks[researchYear] || []).length === 0 ? (
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
                        {(defaultMbaBooks[researchYear] || []).map(
                          (book, i) => (
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
      className={`relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between group overflow-hidden
        ${
          activeTab === id
            ? "bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white shadow-lg border-l-4 border-ssgmce-orange"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:text-ssgmce-blue hover:shadow-md hover:scale-[1.02]"
        }`}
    >
      <span className="flex items-center relative z-10">
        <span
          className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${activeTab === id ? "bg-white shadow-md" : "bg-gray-400 group-hover:bg-ssgmce-orange group-hover:shadow-sm"}`}
        ></span>
        {label}
      </span>
      {activeTab === id && <FaAngleRight className="opacity-90 text-white" />}
    </button>
  );

  return (
    <GenericPage
      title="Master of Business Administration (MBA)"
      backgroundImage={mbaBanner}
    >
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
