import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import electronicsBanner from "../../assets/images/departments/electronics/Electronics Banner.png";
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
  FaDesktop,
  FaFileAlt,
  FaExternalLinkAlt,
  FaTools,
  FaBook,
  FaStar,
  FaMedal,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaTimes,
} from "react-icons/fa";

// Faculty Photos
import DN from "../../assets/images/departments/electronics/faculty/DN.jpg";
import KBK from "../../assets/images/departments/electronics/faculty/KBK.jpg";
import RSD from "../../assets/images/departments/electronics/faculty/RSD.jpg";
import MNT from "../../assets/images/departments/electronics/faculty/MNT.jpg";
import SBP from "../../assets/images/departments/electronics/faculty/SBP.jpg";
import VMU from "../../assets/images/departments/electronics/faculty/VMU.jpg";
import DLB from "../../assets/images/departments/electronics/faculty/DLB.jpg";
import BPH from "../../assets/images/departments/electronics/faculty/BPH.jpg";
import DPT from "../../assets/images/departments/electronics/faculty/DPT.jpg";
import AND from "../../assets/images/departments/electronics/faculty/AND.jpg";
import VKB from "../../assets/images/departments/electronics/faculty/VKB.jpg";
import KTK from "../../assets/images/departments/electronics/faculty/KTK.jpg";
import KSV from "../../assets/images/departments/electronics/faculty/KSV.jpg";
import SPB from "../../assets/images/departments/electronics/faculty/SPB.jpg";
import TPM from "../../assets/images/departments/electronics/faculty/TPM.jpg";
import SGN from "../../assets/images/departments/electronics/faculty/SGN.jpg";
import VSI from "../../assets/images/departments/electronics/faculty/VSI.jpg";
import AAD from "../../assets/images/departments/electronics/faculty/AAD.jpg";
import HBP from "../../assets/images/departments/electronics/faculty/HBP.jpeg";
import RSM from "../../assets/images/departments/electronics/faculty/RSM.jpeg";
import NSD from "../../assets/images/departments/electronics/faculty/NSD.jpeg";
import MBD from "../../assets/images/departments/electronics/faculty/MBD.jpeg";
import SPS from "../../assets/images/departments/electronics/faculty/SPS.jpeg";
import GK from "../../assets/images/departments/electronics/faculty/GK.jpeg";

// Non-Teaching Staff Photos
import VGP from "../../assets/images/departments/electronics/faculty/V.G.Payghan.png";
import MYK from "../../assets/images/departments/electronics/faculty/M.Y. Kashikar.jpg";
import SAA from "../../assets/images/departments/electronics/faculty/S.A.Ahmad.jpg";
import ASA from "../../assets/images/departments/electronics/faculty/A.S.Akotkar.jpg";
import SBS from "../../assets/images/departments/electronics/faculty/S.B.Sonawane.jpg";
import JSK from "../../assets/images/departments/electronics/faculty/JSKolhe.jpg";
import KKT from "../../assets/images/departments/electronics/faculty/K.K.Thakur.jpg";
import GOT from "../../assets/images/departments/electronics/faculty/G.O.Tayade.jpg";
import ALN from "../../assets/images/departments/electronics/faculty/A.L.Nemade.jpg";
import SAR from "../../assets/images/departments/electronics/faculty/A.S. Raut.jpg";
import PBB from "../../assets/images/departments/electronics/faculty/P.B.Bule.jpg";
import KRK from "../../assets/images/departments/electronics/faculty/kr_khatri.jpg";
import DBB from "../../assets/images/departments/electronics/faculty/Suresh Barbdhe.jpeg";
import MUS from "../../assets/images/departments/electronics/faculty/Mohan Sable.png";

import hodPhoto from "../../assets/images/departments/electronics/EXTC_HOD.jpg";

import {
  defaultVision,
  defaultMission,
  defaultPeo,
  defaultPso,
  defaultPo,
  defaultHodMessage,
  defaultLabs,
  defaultPrideToppersBE,
  defaultPrideToppersME,
  defaultPrideAlumni,
  defaultPrideGate,
  defaultActivities,
  defaultStudentProjects,
  defaultFaculty,
  defaultStaff,
  defaultAchievements,
  defaultCourseMaterials,
  defaultInnovativePractices,
  defaultPlacements,
  defaultOverview,
  defaultNewsletters,
  defaultDepartmentalCommittee,
  defaultServicesExtended,
  defaultUgProjects,
  defaultSchemeAndSyllabus,
  defaultEntcPatents,
  defaultEntcPublications,
  defaultEntcConferences,
  defaultEntcBooks,
  defaultEntcCopyrights,
  defaultInternships,
  defaultMagazines,
} from "../../data/entcDefaults";

const EnTC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("projects");
  const [patentSubTab, setPatentSubTab] = useState("patents");
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
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState("gate");
  const [ugProjectYear, setUgProjectYear] = useState("2024-25");
  const [internshipYear, setInternshipYear] = useState("2024-25");

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-entc");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
  };

  const updateArrayString = (path, defaultArray, index, newValue) => {
    const currentArray = t(path, defaultArray);
    const newArray = [...currentArray];
    newArray[index] = newValue;
    updateData(path, newArray);
  };

  const updateUgProject = (year, index, field, value) => {
    const currentProjects = t(
      `studentProjects.${year}`,
      defaultStudentProjects[year],
    );
    const newProjects = [...currentProjects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    updateData(`studentProjects.${year}`, newProjects);
  };

  const updateInternship = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("internships", defaultInternships)),
    );
    dataObj[year][index][field] = value;
    updateData("internships", dataObj);
  };

  const updateNewsletter = (section, index, field, value) => {
    if (section === "latest") {
      updateData(`newsletters.latest.${field}`, value);
    } else {
      const currentArchives = t(
        "newsletters.archives",
        defaultNewsletters.archives,
      );
      const newArchives = [...currentArchives];
      newArchives[index] = { ...newArchives[index], [field]: value };
      updateData("newsletters.archives", newArchives);
    }
  };

  const resolveMagazineHref = (issue) => {
    if (!issue || typeof issue !== "object") return "#";

    const sourceUrl =
      typeof issue.sourceUrl === "string" ? issue.sourceUrl.trim() : "";
    const link = typeof issue.link === "string" ? issue.link.trim() : "";

    // Prefer canonical source URL for magazine PDFs when available.
    if (sourceUrl) return encodeURI(sourceUrl);
    if (link && link !== "#") return link;
    return "#";
  };

  const getFacultyList = () => t("templateData.faculty.list", defaultFaculty);

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
      JSON.stringify(
        t(
          `pride.toppers.${key}`,
          key === "be" ? defaultPrideToppersBE : defaultPrideToppersME,
        ),
      ),
    );
    newData[yearIdx].records[recordIdx][field] = val;
    updateData(`pride.toppers.${key}`, newData);
  };

  const updateOverviewTable = (path, defaultArr, rowIdx, cellIdx, val) => {
    const newData = JSON.parse(JSON.stringify(t(path, defaultArr)));
    newData[rowIdx][cellIdx] = val;
    updateData(path, newData);
  };
  const updateFacultyList = (updater) => {
    const current = JSON.parse(JSON.stringify(getFacultyList()));
    const updated = typeof updater === "function" ? updater(current) : updater;
    updateData("templateData.faculty.list", updated);
  };

  const academicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "vision-mission", label: "Vision, Mission, PEO & PSO" },
    { id: "course-outcomes", label: "Course Outcomes" },
    { id: "curriculum", label: "Scheme and Syllabus" },
    { id: "laboratories", label: "Infrastructure and Laboratories" },
    { id: "pride", label: "Pride of the Department" },
    { id: "best-projects", label: "Student's Best Projects" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Co-Curricular Activities" },
    { id: "newsletter", label: "Newsletter" },
    { id: "achievements", label: "Achievements" },
    { id: "committee", label: "Departmental Committee" },
    { id: "services", label: "Services Extended" },
    { id: "projects", label: "UG Projects" },
    { id: "staff", label: "Staff @ Department" },
    { id: "course-material", label: "Course Material" },
    { id: "magazines", label: "Magzines" },
    { id: "practices", label: "Innovative Practice" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const industryLinks = [
    { id: "industrial-visits", label: "Industrial Visits" },
    { id: "mous", label: "MoUs & Collaborations" },
    { id: "patents", label: "Patents & Publications" },
    { id: "internships", label: "Internship Programs" },
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
                title="Department of Electronics & Telecommunication"
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
                    "The Department of Electronics & Telecommunication Engineering was established in 1983. It offers B.E. in Electronics & Telecommunication Engineering and M.E. in Digital Electronics. The department is recognized as a research center for Ph.D. by Sant Gadge Baba Amravati University.",
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
                    "The department aims to produce competent engineers with high ethical values. We focus on academic excellence, technical skills, and overall personality development of students through various curricular and co-curricular activities.",
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
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Course
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-bold text-gray-600 border border-gray-200">
                    Course Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* BE */}
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    <EditableText
                      value={t(
                        "overview.degrees.be.title",
                        "UG: B.E. Electronics and Telecommunication Engineering",
                      )}
                      onSave={(val) =>
                        updateData("overview.degrees.be.title", val)
                      }
                    />
                  </td>
                </tr>
                {["degree", "duration", "intake", "establishment", "nba"].map(
                  (key, i) =>
                    t(
                      `overview.degrees.be.${key}`,
                      defaultOverview.degrees.be[key],
                    ) && (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30 capitalize">
                          {key}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                          <EditableText
                            value={t(
                              `overview.degrees.be.${key}`,
                              defaultOverview.degrees.be[key],
                            )}
                            onSave={(val) =>
                              updateData(`overview.degrees.be.${key}`, val)
                            }
                          />
                        </td>
                      </tr>
                    ),
                )}

                {/* ME */}
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4"
                  >
                    <EditableText
                      value={t(
                        "overview.degrees.me.title",
                        "PG: M.E. Digital Electronics",
                      )}
                      onSave={(val) =>
                        updateData("overview.degrees.me.title", val)
                      }
                    />
                  </td>
                </tr>
                {["degree", "duration", "intake", "establishment"].map(
                  (key, i) =>
                    t(
                      `overview.degrees.me.${key}`,
                      defaultOverview.degrees.me[key],
                    ) && (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30 capitalize">
                          {key}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                          <EditableText
                            value={t(
                              `overview.degrees.me.${key}`,
                              defaultOverview.degrees.me[key],
                            )}
                            onSave={(val) =>
                              updateData(`overview.degrees.me.${key}`, val)
                            }
                          />
                        </td>
                      </tr>
                    ),
                )}

                {/* PhD */}
                <tr className="bg-white">
                  <td
                    colSpan="2"
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    <EditableText
                      value={t(
                        "overview.degrees.phd.title",
                        "Ph. D Electronics and Telecommunication Engg.",
                      )}
                      onSave={(val) =>
                        updateData("overview.degrees.phd.title", val)
                      }
                    />
                  </td>
                </tr>
                {["duration", "intake", "establishment"].map(
                  (key, i) =>
                    t(
                      `overview.degrees.phd.${key}`,
                      defaultOverview.degrees.phd[key],
                    ) && (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30 capitalize">
                          {key}
                        </td>
                        <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                          <EditableText
                            value={t(
                              `overview.degrees.phd.${key}`,
                              defaultOverview.degrees.phd[key],
                            )}
                            onSave={(val) =>
                              updateData(`overview.degrees.phd.${key}`, val)
                            }
                          />
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-ssgmce-blue font-medium">Dr. D. D. Nawgaje</p>
            <p className="text-sm text-gray-500">
              Associate Professor & Head, Dept. of Electronics and
              Telecommunication Engineering
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
                  ➤
                </div>
                <div className="text-lg text-gray-700 leading-relaxed font-medium flex-1">
                  <EditableText
                    value={t("vision", defaultVision)}
                    onSave={(val) => updateData("vision", val)}
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
                {t("mission", defaultMission).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="flex-1">
                      <EditableText
                        value={item}
                        onSave={(val) =>
                          updateArrayString("mission", defaultMission, i, val)
                        }
                        multiline
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newMission = t(
                            "mission",
                            defaultMission,
                          ).filter((_, idx) => idx !== i);
                          updateData("mission", newMission);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const newMission = [
                        ...t("mission", defaultMission),
                        "New Mission Statement",
                      ];
                      updateData("mission", newMission);
                    }}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Add Mission Statement
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Section: PEO, PO, PSO Tabs */}
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
                {t("peo", defaultPeo).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <div className="flex-1">
                      <EditableText
                        value={item}
                        onSave={(val) =>
                          updateArrayString("peo", defaultPeo, i, val)
                        }
                        multiline
                      />
                    </div>
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
                {t("pso", defaultPso).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <div className="flex-1">
                      <EditableText
                        value={item}
                        onSave={(val) =>
                          updateArrayString("pso", defaultPso, i, val)
                        }
                        multiline
                      />
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
                  {t("po", defaultPo).map((po, i) => (
                    <div
                      key={i}
                      className="text-gray-700 leading-relaxed text-sm group"
                    >
                      <strong className="text-gray-900 block mb-1 text-base">
                        <EditableText
                          value={po.t}
                          onSave={(val) => {
                            const newPo = [...t("po", defaultPo)];
                            newPo[i] = { ...newPo[i], t: val };
                            updateData("po", newPo);
                          }}
                        />
                        :
                      </strong>
                      <EditableText
                        value={po.d}
                        onSave={(val) => {
                          const newPo = [...t("po", defaultPo)];
                          newPo[i] = { ...newPo[i], d: val };
                          updateData("po", newPo);
                        }}
                        multiline
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    ),

    curriculum: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("curriculumTitle", "Scheme and Syllabus")}
            onSave={(val) => updateField("curriculumTitle", val)}
          />
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {t("schemeAndSyllabus", defaultSchemeAndSyllabus).map(
            (section, si) => (
              <div
                key={si}
                className={`grid md:grid-cols-12 ${si > 0 ? "border-t border-gray-200 bg-gray-50/30" : ""}`}
              >
                <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
                  <h4 className="font-bold text-lg text-gray-800">
                    <EditableText
                      value={section.course}
                      onSave={(val) => {
                        const updated = [
                          ...t("schemeAndSyllabus", defaultSchemeAndSyllabus),
                        ];
                        updated[si] = { ...updated[si], course: val };
                        updateData("schemeAndSyllabus", updated);
                      }}
                    />
                  </h4>
                </div>
                <div className="md:col-span-8 p-6">
                  <ul className="space-y-4">
                    {section.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="flex items-start gap-3 group relative"
                      >
                        <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                          <span className="text-gray-700 text-sm font-medium">
                            <EditableText
                              value={item.label}
                              onSave={(val) => {
                                const updated = [
                                  ...t(
                                    "schemeAndSyllabus",
                                    defaultSchemeAndSyllabus,
                                  ),
                                ];
                                const newItems = [...updated[si].items];
                                newItems[ii] = { ...newItems[ii], label: val };
                                updated[si] = {
                                  ...updated[si],
                                  items: newItems,
                                };
                                updateData("schemeAndSyllabus", updated);
                              }}
                            />
                          </span>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-bold text-ssgmce-blue hover:text-ssgmce-orange hover:underline uppercase tracking-wide shrink-0"
                            >
                              Download
                            </a>
                          )}
                          {!item.link && (
                            <button className="text-xs font-bold text-ssgmce-blue hover:text-ssgmce-orange hover:underline uppercase tracking-wide shrink-0">
                              Download
                            </button>
                          )}
                        </div>
                        {isEditing && (
                          <button
                            onClick={() => {
                              const updated = [
                                ...t(
                                  "schemeAndSyllabus",
                                  defaultSchemeAndSyllabus,
                                ),
                              ];
                              const newItems = updated[si].items.filter(
                                (_, idx) => idx !== ii,
                              );
                              updated[si] = { ...updated[si], items: newItems };
                              updateData("schemeAndSyllabus", updated);
                            }}
                            className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                            title="Remove item"
                          >
                            ✕
                          </button>
                        )}
                      </li>
                    ))}
                    {isEditing && (
                      <button
                        onClick={() => {
                          const updated = [
                            ...t("schemeAndSyllabus", defaultSchemeAndSyllabus),
                          ];
                          const newItems = [
                            ...updated[si].items,
                            { label: "New Item", link: "" },
                          ];
                          updated[si] = { ...updated[si], items: newItems };
                          updateData("schemeAndSyllabus", updated);
                        }}
                        className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-center text-sm"
                      >
                        + Add Item
                      </button>
                    )}
                  </ul>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    ),

    hod: (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Words from HOD
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-5xl mx-auto">
          {/* Profile Section - Horizontal Layout */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-ssgmce-blue to-ssgmce-orange rounded-2xl blur opacity-25"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white group w-72 md:w-80 lg:w-96">
                    <EditableImage
                      src={t("hod.photo", hodPhoto)}
                      onSave={(url) => updateData("hod.photo", url)}
                      alt="HOD EnTC"
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  <EditableText
                    value={t("hod.name", defaultHodMessage.name)}
                    onSave={(val) => updateData("hod.name", val)}
                  />
                </h3>
                <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                  <EditableText
                    value={t("hod.designation", defaultHodMessage.designation)}
                    onSave={(val) => updateData("hod.designation", val)}
                  />
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  <EditableText
                    value={t("hod.department", defaultHodMessage.department)}
                    onSave={(val) => updateData("hod.department", val)}
                  />
                </p>

                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-ssgmce-orange" />
                    <EditableText
                      value={t("hod.email", defaultHodMessage.email)}
                      onSave={(val) => updateData("hod.email", val)}
                    />
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-ssgmce-orange" />
                    <EditableText
                      value={t("hod.phone", defaultHodMessage.phone)}
                      onSave={(val) => updateData("hod.phone", val)}
                    />
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-ssgmce-blue rounded-full text-xs font-bold">
                    <EditableText
                      value={t(
                        "hod.specialization",
                        defaultHodMessage.specialization,
                      )}
                      onSave={(val) => updateData("hod.specialization", val)}
                    />
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ssgmce-blue rounded-full text-xs font-bold">
                    <EditableText
                      value={t(
                        "hod.qualification",
                        defaultHodMessage.qualification,
                      )}
                      onSave={(val) => updateData("hod.qualification", val)}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="p-8 md:p-10">
            <div className="relative">
              <FaQuoteLeft className="absolute -top-2 right-0 text-4xl text-blue-100" />

              <div className="space-y-4 text-gray-700 leading-relaxed max-w-5xl mx-auto">
                <div className="text-base">
                  <EditableText
                    value={t("hod.message1", defaultHodMessage.message1)}
                    onSave={(val) => updateData("hod.message1", val)}
                    multiline={true}
                    className="w-full"
                  />
                </div>

                <div className="text-base">
                  <EditableText
                    value={t("hod.message2", defaultHodMessage.message2)}
                    onSave={(val) => updateData("hod.message2", val)}
                    multiline={true}
                    className="w-full"
                  />
                </div>

                <div className="text-base">
                  <EditableText
                    value={t("hod.message3", defaultHodMessage.message3)}
                    onSave={(val) => updateData("hod.message3", val)}
                    multiline={true}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    <EditableText
                      value={t(
                        "hod.signatureName",
                        defaultHodMessage.signatureName,
                      )}
                      onSave={(val) => updateData("hod.signatureName", val)}
                    />
                  </p>
                  <p className="text-sm text-gray-600">
                    <EditableText
                      value={t(
                        "hod.signatureTitle",
                        defaultHodMessage.signatureTitle,
                      )}
                      onSave={(val) => updateData("hod.signatureTitle", val)}
                    />
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "hod.collegeNameLine1",
                        defaultHodMessage.collegeNameLine1,
                      )}
                      onSave={(val) => updateData("hod.collegeNameLine1", val)}
                    />
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "hod.collegeNameLine2",
                        defaultHodMessage.collegeNameLine2,
                      )}
                      onSave={(val) => updateData("hod.collegeNameLine2", val)}
                    />
                  </p>
                </div>
              </div>
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
          {t("laboratories", defaultLabs).map((lab, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0 relative"
            >
              {/* Delete Button */}
              {isEditing && (
                <button
                  onClick={() => {
                    const updated = t("laboratories", defaultLabs).filter(
                      (_, i) => i !== index,
                    );
                    updateData("laboratories", updated);
                  }}
                  className="absolute top-2 right-2 z-10 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md hover:bg-red-600 transition-colors"
                  title="Delete laboratory"
                >
                  Delete Lab
                </button>
              )}

              {/* Lab Photo Column */}
              <div className="md:col-span-5 bg-gray-50 p-6 border-r border-gray-100">
                {lab.image ? (
                  <EditableImage
                    src={lab.image}
                    onSave={(url) => {
                      const updated = [...t("laboratories", defaultLabs)];
                      updated[index].image = url;
                      updateData("laboratories", updated);
                    }}
                    className="aspect-video w-full object-cover rounded-lg"
                  />
                ) : (
                  <div
                    className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:from-gray-300 hover:to-gray-400 transition-colors"
                    onClick={() => {
                      if (isEditing) {
                        const url = prompt("Enter image URL:");
                        if (url) {
                          const updated = [...t("laboratories", defaultLabs)];
                          updated[index].image = url;
                          updateData("laboratories", updated);
                        }
                      }
                    }}
                  >
                    <span className="text-6xl">🖥️</span>
                    {isEditing && (
                      <span className="absolute text-xs text-gray-600 mt-20">
                        Click to add image
                      </span>
                    )}
                  </div>
                )}
                <h4 className="font-bold text-gray-800 text-center mt-4">
                  <EditableText
                    value={lab.name}
                    onSave={(val) => {
                      const updated = [...t("laboratories", defaultLabs)];
                      updated[index].name = val;
                      updateData("laboratories", updated);
                    }}
                  />
                </h4>
              </div>

              {/* Lab Details Column */}
              <div className="md:col-span-7 p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-600 text-sm mb-2">
                      Computer Systems / Configuration:
                    </h5>
                    <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                      <EditableText
                        value={lab.resources}
                        onSave={(val) => {
                          const updated = [...t("laboratories", defaultLabs)];
                          updated[index].resources = val;
                          updateData("laboratories", updated);
                        }}
                        multiline
                      />
                    </div>
                  </div>
                  {(lab.facilities || isEditing) && (
                    <div>
                      <h5 className="font-semibold text-red-600 text-sm mb-2">
                        Other Resources / UPS:
                      </h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <EditableText
                          value={lab.facilities || "Additional facilities..."}
                          onSave={(val) => {
                            const updated = [...t("laboratories", defaultLabs)];
                            updated[index].facilities = val;
                            updateData("laboratories", updated);
                          }}
                          multiline
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Add New Lab Button */}
          {isEditing && (
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={() => {
                  const updated = [
                    ...t("laboratories", defaultLabs),
                    {
                      name: "New Laboratory",
                      image: "",
                      resources:
                        "Computer systems and configuration details...",
                      facilities: "Other resources and UPS details...",
                    },
                  ];
                  updateData("laboratories", updated);
                }}
                className="w-full py-3 px-4 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors font-medium"
              >
                + Add New Laboratory
              </button>
            </div>
          )}
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
            Comprehensive course outcomes for all semesters of B.E. Electronics
            &amp; Telecommunication Engineering
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              B.E. Electronics &amp; Telecommunication Engineering - Course
              Outcomes
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
                          3ECT01 Engineering Mathematics III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Laplace transform to solve differential
                            equation.
                          </li>
                          <li>
                            Apply the knowledge of vector calculus to solve
                            physical problems.
                          </li>
                          <li>Apply the knowledge of complex analysis.</li>
                          <li>Apply the knowledge of Numerical analysis.</li>
                          <li>
                            Apply the concepts of Difference Equations and
                            Partial Differential Equations.
                          </li>
                          <li>
                            Apply the concepts of Difference Equations and
                            Partial Differential Equations.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC02 Electronic Devices and Circuits
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the principles of PN Junction diode and
                            filters (C, L, LC) to design rectifiers, voltage
                            regulators and wave-shaping circuits.
                          </li>
                          <li>
                            Examine the response of wave shaping circuits,
                            including RC filters, Clipping and Clamping circuits
                            for step, pulse, square and sinusoidal
                          </li>
                          <li>
                            Utilise the Characteristics and parameters of BJT,
                            JFET, MOSFET and UJT for switching and amplification
                            applications. 3ETC02.4 Assess the roll of feedback
                            in amplifiers in oscillator circuits using BJT and
                            its impact on the frequency stability and analyze
                            the performance of single stage and multi stage
                            amplifier circuits using BJT for signal.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC03 Digital System Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Boolean algebra to simplify logic functions,
                            minimize expressions, perform number system
                            conversions, and execute arithmetic operations.
                          </li>
                          <li>
                            Design combinational and sequential circuits using
                            logic gates, MSI chips, and programmable logic
                            devices
                          </li>
                          <li>
                            Analyze digital logic families based on
                            characteristics such as noise margin, propagation
                            delay, and power dissipation.
                          </li>
                          <li>
                            Implement semiconductor memory architectures and
                            programmable logic devices in digital system design.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC04 Electromagnetic Waves
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the coordinate systems and vector
                            integrals.
                          </li>
                          <li>
                            Derive all four Maxwell's equations for steady and
                            time varying fields and apply them to find boundary
                            conditions.
                          </li>
                          <li>
                            Apply the Maxwell&apos;s equations to find the
                            characteristics of Uniform Plane Waves.
                          </li>
                          <li>
                            Apply the Maxwell&apos;s equations to derive
                            radiation resistance of Hertzian Dipole, Quarter
                            wave Monopole and Half-wave Dipole antennas.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC05 Object Oriented Programming
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the basics of object-oriented programming
                            concepts such as data types, functions, classes,
                            objects, constructors, inheritance, overloading etc.
                          </li>
                          <li>
                            Design, implement, test, and debug simple programs
                            in C++.
                          </li>
                          <li>
                            Demonstrate how the class mechanism supports
                            encapsulation and information hiding.
                          </li>
                          <li>
                            Discuss the implementation of Java programming
                            concepts
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC06 Electronic Devices and Circuits Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the basics of diode and Zener diode to obtain
                            the characteristics and its use as rectifier and
                            voltage regulator
                          </li>
                          <li>
                            Verify and analyze clipper circuit as wave shaping
                            circuits and their responses to various signals.
                          </li>
                          <li>
                            Realise effect of positive and negative feedback
                            theory for circuit as an oscillator and amplifier.
                          </li>
                          <li>Analyze characteristics of JFET and UJT</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC07 Digital System Design Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply practically the concepts of digital
                            electronics.
                          </li>
                          <li>
                            Apply the operation of various logic gates and their
                            implementation on combinational design using digital
                            IC's.
                          </li>
                          <li>
                            Design and implement various combinational logic
                            circuits.
                          </li>
                          <li>
                            Design and implement various sequential logic
                            circuits.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC08 Object Oriented Programming Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Justify the basics of object-oriented design and the
                            concepts of encapsulation, abstraction, inheritance,
                            and polymorphism
                          </li>
                          <li>
                            Design, implement, test, and debug simple programs
                            in an object-oriented programming language.
                          </li>
                          <li>
                            Describe how the class mechanism supports
                            encapsulation and information hiding
                          </li>
                          <li>
                            Design and test the implementation of C++ and java
                            programming concepts
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ETC09 Electronic Workshop Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand measuring devices, types of cables and
                            connectors, diodes, and sensors
                          </li>
                          <li>
                            Apply knowledge of measuring devices to RLC
                            circuits, diodes, transistors, switches, and cables
                          </li>
                          <li>Analyze circuits using simulation software</li>
                          <li>
                            Apply basic knowledge of component to design and
                            hardware implementation Evaluate
                          </li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* B.E. Semester-III (NEP) */}
            <div className="border-b border-gray-200 pb-2">
              <button
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem3-nep" ? null : "be-sem3-nep",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-III (NEP)
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem3-nep" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem3-nep" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ET200PC Electronic Devices and Circuits
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the construction, working principles,
                            Characteristics of semiconductor diodes and
                            transistors including PN junction, Zener, LED, Photo
                            diode, BJT, JFET, MOSFET, and UJT.
                          </li>
                          <li>
                            Apply semiconductor devices in circuits such as
                            rectifiers, voltage regulators, clippers, clampers,
                            amplifiers, and oscillators for electronic circuit
                            design.
                          </li>
                          <li>
                            Analyze the performance of various BJT
                            configurations and MOSFET/JFET devices using
                            characteristic curves and small signal parameters.
                          </li>
                          <li>
                            Evaluate the impact of feedback in amplifier design
                            and determine the suitability of different
                            oscillator circuits for given applications based on
                            frequency and stability requirements.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ET201PC Electromagnetic Waves
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To understand the coordinate systems and vector
                            integrals.
                          </li>
                          <li>
                            To derive all four Maxwell's equations for steady
                            and time varying fields and apply them to find
                            boundary conditions.
                          </li>
                          <li>
                            To apply the Maxwell&apos;s equations to find the
                            characteristics of Uniform Plane Waves
                          </li>
                          <li>
                            To apply the Maxwell&apos;s equations to derive
                            radiation resistance of Hertzian Dipole, Quarter
                            wave Monopole and Half-wave Dipole antennas.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ET202PC Signals and Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the continues time signals and systems
                            mathematically and their classification along with
                            the mathematical operations performed on them.
                          </li>
                          <li>
                            Analyze signals and systems in the frequency domain
                            using Fourier series and Fourier transform
                            techniques.
                          </li>
                          <li>
                            Use Laplace transform to analyze continuous-time and
                            discrete-time systems, including system response and
                            stability.
                          </li>
                          <li>
                            Evaluate the spectral characteristics of
                            discrete-time signals and systems using DTFT and its
                            properties.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ET206OE Analog Communication
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the Fundamentals of Analog Communication.
                          </li>
                          <li>
                            Illustrate the working of AM Generation and
                            Demodulation.
                          </li>
                          <li>Explain the FM Generation and Demodulation.</li>
                          <li>
                            Explain the concept noise in Analog Communication.
                          </li>
                          <li>Illustrate the working of Radio Receivers.</li>
                          <li>Explain the Fundamental concepts of Antenna.</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ET207EM Entrepreneurship Development
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the fundamentals of entrepreneurship and its
                            role in economic development.
                          </li>
                          <li>
                            Apply innovation and design thinking to develop
                            business ideas.
                          </li>
                          <li>
                            Prepare a feasibility study and basic business plan
                            for entrepreneurial ventures. Creating L6 3ME205M
                            3ME205M.1 Understand the properties, testing and
                            inspection of engineering materials. Understanding
                            L2 Basics of Mechanical Engineering
                          </li>
                          <li>
                            Summarize fundamental techniques and process used in
                            energy conversion systems.
                          </li>
                          <li>
                            Understand various casting techniques and the
                            importance of various metal forming processes.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3ME206OE Engineering Materials
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To illustrate the basic concepts of metallurgy and
                            classification of materials and their applications.
                          </li>
                          <li>
                            To study the various mechanical properties and
                            applications of engineering materials.
                          </li>
                          <li>
                            To explain application and properties of advanced
                            materials like smarts materials, piezoelectric
                            materials, superconducting materials etc.
                          </li>
                          <li>
                            To illustrate the properties and application of
                            various types of steels.
                          </li>
                          <li>
                            To explain features, classification, application of
                            newer class materials like biomaterials, composite
                            materials etc.
                          </li>
                          <li>
                            To illustrate the concept of powder metallurgy and
                            its industrial applications.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS205MD Foundations of Computing &amp; Programming–
                          III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand computing systems and problem-solving
                            logic
                          </li>
                          <li>
                            Apply algorithmic thinking to solve simple problems.
                          </li>
                          <li>
                            Implement basic programs using control structures
                            and I/O operations. Applying L3 3EP206OE-I Power
                            Supply System
                          </li>
                          <li>
                            Explain the working of thermal &amp; Hydro-electric
                            power plants.
                          </li>
                          <li>
                            Understand the basics of solar and wind energy and
                            their conversion.
                          </li>
                          <li>
                            Demonstrate the knowledge of various types of
                            substations and distribution systems.
                          </li>
                          <li>
                            Demonstrate the knowledge of electrical wiring
                            installation and earthing system.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3IT302OE Cyber Law
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply basic computer and internet concepts to
                            analyze their role in digital business and
                            governance.
                          </li>
                          <li>
                            Apply knowledge of e-payment systems to select
                            suitable methods for secure online transactions.
                          </li>
                          <li>
                            Identify types of cybercrimes and common techniques
                            used by cyber offenders.
                          </li>
                          <li>
                            Categorize cybercrimes and relate them to relevant
                            legal provisions.
                          </li>
                          <li>
                            Apply sections of the IT Act to given cyber law
                            scenarios.
                          </li>
                          <li>
                            Describe ethical and security concerns associated
                            with the use of digital technologies.
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
                          4ETC01 Analog and Digital Communication
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze AM (DSB-FC, DSB-SC, SSB-SC) and
                            superheterodyne receivers for power efficiency,
                            bandwidth, and fidelity in analog communication.
                          </li>
                          <li>
                            Apply the concepts of FM generation, demodulation,
                            and comparison of FM and AM system performance.
                          </li>
                          <li>
                            Apply random process statistics and noise analysis
                            to assess noise impact on communication, including
                            FM threshold effects.
                          </li>
                          <li>
                            Utilize pulse modulation (PAM, PWM, PPM) and PCM to
                            digitize analog signals while addressing issues like
                            aliasing, quantization noise, and companding
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC02 Analog Circuits
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To understand the basic concepts and parameters of
                            Op-Amp-741, Voltage regulator IC723, timer IC555 and
                            PLL565.
                          </li>
                          <li>
                            To make use of Op-Amp for implementation of linear
                            and non-linear applications.
                          </li>
                          <li>
                            To Analyze various analog circuits using IC741,
                            IC723, IC555 and IC565.
                          </li>
                          <li>
                            To Design of various analog circuits using IC741,
                            IC723, IC555 and IC565.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC03 Network Theory
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Mesh and Node analysis techniques to formulate
                            and solve electrical circuit equations involving
                            resistive, inductive, and capacitive components
                          </li>
                          <li>
                            Utilize appropriate Network Theorems to simplify and
                            analyze electrical circuits for determining voltage,
                            current, and power relationships
                          </li>
                          <li>
                            Construct and analyze oriented graphs of electrical
                            networks using incidence, tie- set, and cut-set
                            matrices to determine network currents and voltages
                            systematically
                          </li>
                          <li>
                            Implement Laplace Transform techniques to solve
                            electrical circuit problems involving initial
                            conditions, transient responses, and steady-state
                            behavior 4ETC03.5 Examine the characteristics of
                            Two-Port networks by determining impedance,
                            admittance, transmission, and hybrid parameters for
                            analyzing interconnected circuits
                          </li>
                          <li>
                            Interpret network functions by evaluating poles and
                            zeros, driving point functions, and transfer
                            functions to predict circuit behavior in time and
                            frequency domains
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC04 Signals and Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstarte the continuous-time signals and systems
                            mathematically and illustrate their classification
                            with the mathematical operations performed on them.
                            4ETC04.2 Analyze the spectral characteristics of
                            continuous-time periodic signals and systems using
                            Fourier series. Apply the spectral characteristics
                            of continuous-time aperiodic signals and systems
                            using Fourier Transform. 4ETC04.3 Apply the Laplace
                            transform for analysis of continuous-time systems.
                            Evaluate the classical Solution of Linear Difference
                            Equations. Apply the discrete-time signals and
                            systems mathematically and analyze their
                            classifications.
                          </li>
                          <li>
                            Evaluate the spectral characteristics of Discrete
                            Time signals and systems using DTFT and its
                            properties Evaluate
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC05 Values and Ethics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand Possibilities of better Life through
                            Value education
                          </li>
                          <li>
                            Demostrate the concept of coexitance in life
                            sitution
                          </li>
                          <li>
                            Develop harmony in nature through emphesis on
                            dimensitions of human endeavor
                          </li>
                          <li>Apply the concept of ethical human conduct</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC06 Analog and Digital Communication Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate modulation and demodulation in
                            communication system.
                          </li>
                          <li>
                            Analyze performance characteristics of AM/FM
                            receiver.
                          </li>
                          <li>
                            Analyze the performance of digital communication
                            system.
                          </li>
                          <li>
                            Model communication concepts using simulation
                            software.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC07 Analog Circuits Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate linear and nonlinear applications of
                            Op-Amp
                          </li>
                          <li>
                            Design voltage regulators using IC723 and IC317
                          </li>
                          <li>
                            Analyze and design applicationn of timer IC555
                          </li>
                          <li>Study characteristic of PLL using IC565</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC08 Network Theory Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply knowledge of Mesh and Node analysis for a
                            given network
                          </li>
                          <li>
                            Apply various network theorems to solve networks
                          </li>
                          <li>
                            Apply knowledge of Two Port network to analyze given
                            network.
                          </li>
                          <li>
                            Apply knowledge of Network Functions to analyze
                            given network.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4ETC09 Signal and Systems Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Familiarize with the signal processing functions and
                            verify each function.
                          </li>
                          <li>
                            Generate different types of signals and explore
                            results to draw valid conclusions in Signal
                            Processing.
                          </li>
                          <li>
                            Enable on how to evaluate the signal processing and
                            system design using simulation tools.
                          </li>
                          <li>
                            Analyze signals using different transform methods.
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
                          5ETC01 Microcontroller
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the architecture of 8085/8051 and
                            advanced RISC processors
                          </li>
                          <li>
                            Analyze the assembly language programming algorithm
                            using Instructions set and addressing modes
                          </li>
                          <li>
                            Develop a skill to write application-oriented
                            algorithms
                          </li>
                          <li>
                            Apply the concepts of microcontroller for
                            interfacing of peripheral devices
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC02 Control System
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop mathematical models of electrical,
                            mechanical and electromechanical systems.
                          </li>
                          <li>
                            Build transfer functions using block diagrams
                            reduction and signal flow graph.
                          </li>
                          <li>
                            Analyze stability of the LTI system using different
                            techniques.
                          </li>
                          <li>
                            Solve state space models and its response using
                            state variable method
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC03 Digital Signal Processing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the fundamental concepts of discrete-time
                            signals and systems to perform signal operations and
                            convolution
                          </li>
                          <li>
                            Analyze Z-transform properties and utilize them for
                            system characterization and signal processing
                            applications.
                          </li>
                          <li>
                            Implement DFT and FFT techniques for spectral
                            analysis and circular convolution in digital signal
                            processing.
                          </li>
                          <li>
                            Design FIR and IIR digital filters and examine the
                            fundamentals of multirate digital signal processing.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC04 Power Electronics (PE-I)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demostrate the characteristics of SCR and working of
                            firing circuits.
                          </li>
                          <li>
                            Summarised Triac /Diac Power devices like
                            Transistor, MOSFET and IGBT and force commutation
                            techniques
                          </li>
                          <li>
                            Identify the AC to DC Phase control rectifiers and
                            dual converters.
                          </li>
                          <li>Identify DC to AC and DC to DC converters.</li>
                          <li>
                            Examine the principle of Cyclo-converter and
                            DC/universal motor Control
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC05 Fiber Optics Communication (PE-II)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Illustrate the principles fiber-optic communication,
                            the components and Losses and dispersion in fiber.
                            Undersatnding
                          </li>
                          <li>
                            Explain the transmission characteristics of optical
                            fiber Undersatnding
                          </li>
                          <li>
                            Express the properties of the optical components in
                            sources.
                          </li>
                          <li>
                            Explain operation of lasers, LEDs, and detectors in
                            fiber Undersatnding
                          </li>
                          <li>
                            Describe the aspects of optical fiber coupler and
                            switches Undersatnding
                          </li>
                          <li>Elaborate WDM and DWDM systems.</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC06 Microcontroller Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Desrcibe the internal organization of Microprocessor
                            and Microcontroller
                          </li>
                          <li>
                            Develop programing skill for applications of
                            Microprocessor and Microcontroller
                          </li>
                          <li>
                            Experiment with interfacing of IO devices with
                            Microcontroller
                          </li>
                          <li>
                            Apply the concepts of microcontroller for
                            interfacing of peripheral devices
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC07 Digital Signal Processing Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the basic concepts of signal and its sampling
                            for digital signal processing Applying (L3),
                          </li>
                          <li>
                            Apply DFT and IDFT for the analysis of digital
                            signals and systems. Applying (L3),
                          </li>
                          <li>
                            Design FIR, IIR filters for digital signal
                            processing.
                          </li>
                          <li>
                            Understand the basics of Multirate Digital Signal
                            Processing.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC08 Power Electronics Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the various power electronics devices and
                            their characteristics.
                          </li>
                          <li>Analyse the Triggering of SCR techniques.</li>
                          <li>
                            Illlustrate commutation and DC to AC inverter
                            techniques.
                          </li>
                          <li>
                            Understand the operation of AC to DC converters.
                          </li>
                          <li>
                            Know operation of various DC and AC motors and their
                            applications.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5ETC09 Electronic Lab based on Instrumentation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Select temperature transducers for different ranges
                            of temperature measurement
                          </li>
                          <li>
                            Utilize displacement transducers in various
                            applications
                          </li>
                          <li>
                            Utilize piezoelectric transducers for pressure
                            measurement
                          </li>
                          <li>Utilize strain guage for strain measurement</li>
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
                          6ETC01 Communication Network
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Classify types of network devices, OSI and TCP/IP
                            model.layes and their functions.
                          </li>
                          <li>
                            Illustrate basic functions of data link control and
                            media access control protocol.
                          </li>
                          <li>
                            Analyze routing strategies for an IP based network.
                          </li>
                          <li>
                            Compair the concepts of reliable and unreliable
                            transfer protocols in TCP and UDP and Demonstrate
                            application layer Protocols.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC02 Computer Architecture
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the working and the performance parameters
                            of the computers
                          </li>
                          <li>
                            Design efficient ALU operations using processor
                            organization, number formats, and IEEE 754
                            standards.
                          </li>
                          <li>
                            Analyze micro-operation control unit, hardwired vs.
                            micro-program control unit, and microinstruction
                            execution
                          </li>
                          <li>
                            Apply memory management concepts in system design.
                          </li>
                          <li>
                            Describe I/O organization and parallel processing
                            concepts in system design
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC03 Satellite Communication
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply satellite communication principles to solve
                            engineering problems
                          </li>
                          <li>
                            Utilize fundamental theories of orbital mechanics
                            and link budget analysis
                          </li>
                          <li>
                            Analyze satellite subsystems, propagation effects,
                            and system performance
                          </li>
                          <li>
                            Explain satellite-based communication VSAT and GPS
                            systems Undersatnding
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC03 CMOS Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply CMOS circuit concepts to analyze transistor
                            operation, inverter behavior, and switching
                            characteristics
                          </li>
                          <li>
                            Construct CMOS layouts and stick diagrams using
                            lambda-based design rules.
                          </li>
                          <li>
                            Analyze CMOS circuit performance parameters,
                            including delay models, power consumption, and
                            interconnect effects.
                          </li>
                          <li>
                            Implement combinational circuit designs using CMOS
                            logic families, transmissions gates, and pass
                            transistor logic.
                          </li>
                          <li>
                            Design sequential circuits such as latches,
                            flip-flops, and memory elements using CMOS
                            technology.
                          </li>
                          <li>
                            Utilize Domino and NORA dynamic logic methods for
                            CMOS circuit implementation.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC05 Engineering Economics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the application of production theories,
                            cost analysis, and price determination to solve
                            real-world engineering and industrial problems.
                          </li>
                          <li>
                            Analyze depreciation methods, break-even analysis,
                            and banking functions to determine their impact on
                            financial sustainability and engineering projects.
                            6ETC05.4 Evaluate time value of money concepts, cash
                            flow techniques, and project evaluation methods to
                            analyze financial alternatives and make informed
                            investment decisions.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6FEEP06 Energy Audit and Management
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Discuss energy scenario and it's management.</li>
                          <li>
                            Conduct the energy audit of different systems.
                          </li>
                          <li>
                            Determine the economics of energy conservation
                          </li>
                          <li>
                            Discuss various energy Conservation methods &amp;
                            their case studies
                          </li>
                          <li>Explain fundamentals of Harmonics.</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC06 Communication Network Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Categorize different networking devices and
                            topologies
                          </li>
                          <li>
                            Configure computer networks using different devices
                            and topologiesTo construct and configure a network.
                          </li>
                          <li>
                            Implement computer network for sharing various
                            resources
                          </li>
                          <li>Configure Wireless network</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC07 Electronics Circuit Design Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Design and verify CMOS layouts for logic gates and
                            sequential circuits using ASIC tools.
                          </li>
                          <li>
                            Analyze timing and performance of CMOS circuits
                            through simulations.
                          </li>
                          <li>
                            Write and simulate Verilog code for combinational
                            circuits like decoders and multiplexers.
                          </li>
                          <li>
                            Write and simulate Verilog code for sequential
                            circuits like flip-flops, counters, and sequence
                            detectors.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC08 Python Programming Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Implement fundamental Python programming concepts to
                            solve problems
                          </li>
                          <li>
                            Apply file handling and string operations to solve
                            real-world problems.
                          </li>
                          <li>
                            Demonstrate proficiency in data manipulation using
                            Python collections
                          </li>
                          <li>Analyze data using Python</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6ETC09 Mini Project
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify problems based on societal /research needs
                          </li>
                          <li>
                            Apply Knowledge and skill to solve societal problems
                            in a group
                          </li>
                          <li>
                            Develop interpersonal skills to work as member of a
                            group or leader
                          </li>
                          <li>
                            Analyze the impact of solutions in societal and
                            environmental context for sustainable development
                          </li>
                          <li>
                            Conclude project presetnation with results and
                            management principles
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
                          7ETC01 Cryptography and Network Security
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Analyze concepts of security and ciphers</li>
                          <li>
                            Interprete the working of encryption and decryption
                            algorithms
                          </li>
                          <li>
                            Apply authentication functions and hash algorithms
                          </li>
                          <li>
                            Understand the concepts of email and transport
                            security
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC02 Digital Image &amp; Video Processing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze and implement digital image processing
                            algorithms. Develop spatial filtering and other
                            filtering techniques for preprocessing of images.
                            7ETC02.3 Implement the intensity transformations and
                            various image transforms, Fourier transform for
                            image processing in frequency domain and filtering
                            techniques in Fourier Domain.
                          </li>
                          <li>
                            Evaluate the methodologies for image segmentation,
                            Compression and restoration etc. Also design Image
                            processing techniques with practical approach.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC03 Project Management and Entrepreneurship
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand basic concept of Project management.
                          </li>
                          <li>
                            Attain the knowledge of cost estimation &amp;
                            working capital.
                          </li>
                          <li>
                            Prepare Cost Sheets, balance sheets and Cash Flow
                            statements.
                          </li>
                          <li>
                            Understand the Entrepreneurial competencies &amp;
                            traits.
                          </li>
                          <li>
                            Discuss the Management skills for Entrepreneurs.
                          </li>
                          <li>Understand Social Entrepreneurship.</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC04 Mobile Communication and Networks
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain basic concept of Cellular systems and
                            standards
                          </li>
                          <li>
                            Apply knowledge of signal propagation models to
                            predict wireless communication performance in
                            different environments.
                          </li>
                          <li>
                            Implement multiple access techniques in mobile
                            communication and demonstrate advanced knowledge of
                            MIMO through practical applications
                          </li>
                          <li>
                            Describe the concept of rake receiver and Know
                            various Mobile Communication Systems and standards
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC05 Introduction to MEMS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the concepts of MEMS for project, research and
                            academic work.
                          </li>
                          <li>
                            Analyze the miniaturization issues and MEMS
                            Materials
                          </li>
                          <li>
                            Evaluate the principles of solid mechanics in
                            MEMS/NEMS, sensors and actuators
                          </li>
                          <li>
                            Elaborate fabrication modules of MEMS for
                            Electronics, automotive and medical application
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC06 Cryptography and Network Security LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>To evaluate working of ciphers</li>
                          <li>
                            To analyze encryption and decryption algorithms
                          </li>
                          <li>
                            To experiment with authentication and hash functions
                          </li>
                          <li>To Apply the consepts of nework security</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC07 Digital Image &amp; Video Processing Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstarte the image formation and apply the basic
                            operations and histogram equalization on an image.
                          </li>
                          <li>
                            Apply the gray scale image in spatial domain and
                            apply arithmetic and logical operations on gray
                            scale image. 7ETC07.3 Implement the thresholding
                            techniques and frequency domain filtering on the
                            gray scale image. Implement the morphological
                            opearations and edge detection operations on an
                            image.
                          </li>
                          <li>
                            Create a Video from images frames and implement and
                            Video object detection and tracking for an
                            application.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC08 Project Management and Entrepreneurship LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To analyze technical feasibility, Environmental and
                            market feasibility.
                          </li>
                          <li>
                            To interprete quickly about a new industry,
                            technology, market.
                          </li>
                          <li>
                            To apply academic knowledge to the problems faced by
                            entrepreneurial firms in a context of uncertainty,
                            costing and financial statement.
                          </li>
                          <li>
                            To interpret different theories and models of
                            entrepreneurship.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7ETC09 Seminar
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Deliver seminar content logically to ensure clarity
                            in objectives and coherence in information flow.
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
                            Create clear and visually appealing presentation
                            materials to enhance understanding.
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC01 Embedded Systems
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply the concepts and quality attributes of
                            Embedded Systems
                          </li>
                          <li>
                            Apply the architecture and inbuilt peripherals of
                            AVR Microcontroller to design the application
                          </li>
                          <li>
                            Analyze the programming of AVR Microcontroller in C
                            for various applicattion
                          </li>
                          <li>
                            Apply the concepts of RTOs and debugging in embedded
                            systems application
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC02 Microwave Theory &amp; Techniques
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Applying the Operations of Microwave Active,
                            Passive, and Semiconductor Microwave Devices in
                            practical applications.
                          </li>
                          <li>
                            Analyze the Characteristics of Microwave Propagation
                            in Waveguides and Parallel Microstrip Lines
                          </li>
                          <li>
                            Apply the Operations of Microwave Resonators in
                            Practical Applications.
                          </li>
                          <li>
                            Analyze the use of S-parameters for the
                            characterization of microwave devices and evaluate
                            various parameters of a microwave system through
                            measurement.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC03 Wireless Sensor Network
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate the basics of Ad-hoc networks and
                            Wireless sensor networks
                          </li>
                          <li>
                            Explain the architecture and placement strategies of
                            Sensors
                          </li>
                          <li>
                            Analyze topology and MAC layer protocols used in
                            wireless sensor network
                          </li>
                          <li>
                            Apply the knowledge for suitable routing protocols
                            based on network and user requirement.
                          </li>
                          <li>
                            Analyze Protocols for congestion and flow control in
                            sensor networks
                          </li>
                          <li>
                            Develop solutions to real world problems using
                            Wireless sensor devices
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC04 5G-6G Mobile Communication
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Construct a comparative analysis of LTE and 5G by
                            identifying key technological advancements and
                            designing potential use case applications.
                          </li>
                          <li>
                            Analyze RF front-end technologies, including
                            millimeter wave communication, massive MIMO, and
                            beamforming techniques.
                          </li>
                          <li>
                            Implement different 5G radio access technologies,
                            waveforms, and wireless propagation channel models
                            for various applications. 8ETC04.4 Develop a
                            comparative framework for 5G and 6G architectures by
                            analyzing their key building blocks and designing
                            potential applications for future communication
                            systems.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC05 Embedded Systems Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Design and implement embedded systems using
                            microcontrollers and other embedded components,
                            including hardware and software design.
                          </li>
                          <li>
                            Develope efficient and optimized C++ code for
                            microcontrollers, utilizing peripherals such as
                            GPIO, timers, interrupts
                          </li>
                          <li>
                            Analyze the performance of an embedded system in
                            terms of memory usage, and execution time
                          </li>
                          <li>
                            Design a system with interfacing various sensors,
                            actuators, and communication modules with a
                            microcontroller to build functional embedded systems
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC06 Microwave Theory &amp; Techniques Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the characteristics of microwave
                            transmission lines and components, including
                            microstrip lines, attenuators, power dividers.
                          </li>
                          <li>
                            Evaluate the working principles of advanced
                            microwave network components, such as E-plane,
                            H-plane, Magic Tee, directional couplers, and
                            circulators. Evaluate 8ETC06.4 Apply measurement
                            techniques for microwave parameters, including
                            frequency measurement using slotted lines,
                            power-frequency relationships, and attenuation, to
                            assess system performance.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          8ETC07 Project
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
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
                            Demonstrate technical profiency through structured
                            presentations, demonstrations, and effective
                            communication.
                          </li>
                          <li>
                            Interpret and analyze feedback, refine project
                            implementation and present meaningful results and
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
              M.E. (Digital Electronics) - Course Outcomes
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
                <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1UMEF-1/2UMEP-1- Digital Instrumentation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Design and implement the various digital measurement
                            techniques, display and recording systems..
                          </li>
                          <li>
                            Comprehend the knowledge of the concept of digital
                            signal analysis &amp; analyzers.
                          </li>
                          <li>
                            Comprehend the knowledge of smart sensors/digital
                            sensors and smart or automatic test equipment's and
                            reliability.
                          </li>
                          <li>
                            Design and implementation of digital controllers,
                            Programmable Logic controller and its functions.
                          </li>
                          <li>
                            Design of various biomedical instrumentation
                            systems.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1UMEF2-Advanced Digital Signal Processing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the various analysis techniques of
                            discrete time signals..
                          </li>
                          <li>
                            Analyse the finite impulse and infinite impulse
                            response filters
                          </li>
                          <li>
                            Understand the implementation of sampling rate
                            converters.
                          </li>
                          <li>
                            Develop the various adaptive filtering and two
                            dimension transformation algorithms
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1UMEF3- Modern Electronic Design Techniques
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand isolation and Design techniques for
                            amplifiers.
                          </li>
                          <li>
                            Design buck, boost, buck-boost their control
                            techniques
                          </li>
                          <li>
                            Understand Communication and Control System Design
                          </li>
                          <li>
                            Understand design of Portable Electronic System
                          </li>
                          <li>
                            Understand design of Electronic System for
                            Production
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1UMEF4- Digital Communication Technique
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the fundamental and advanced concepts of
                            digital communication systems including the digital
                            transmission over fading channels.
                          </li>
                          <li>
                            Solve the problems associated with various
                            impairments in digital communication systems.
                          </li>
                          <li>
                            Study and analyse the effects of channel bandwidth
                            and channel noise on transmitted waveform.
                          </li>
                          <li>
                            Design optimum receivers for a given signal-space
                            structure for additive Gaussian channels and assess
                            performance of digital communication receivers for
                            additive Gaussian channels.
                          </li>
                          <li>
                            Analyse the effect of ISI and Equalization in
                            digital communication.
                          </li>
                          <li>
                            Apply the knowledge to analyse the digital
                            communication system with spread spectrum modulation
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          1UMEF5- Embedded System Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain architecture of Microcontroller</li>
                          <li>
                            Distinguish real-time embedded systems from other
                            systems.
                          </li>
                          <li>
                            Evaluate the need for real-time operating system
                          </li>
                          <li>
                            Interpret real-time algorithm for task scheduling.
                          </li>
                          <li>
                            Summarize technique used for product enclosure
                            design and development
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
                <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
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
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2UMEF1- Digital Image Processing
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand and analyze basic terminology of digital
                            image processing, elements of visual perception,
                            image quantization, image types. Zoom operation,
                            Basic gray level Transformations, Histogram
                            Processing, etc
                          </li>
                          <li>
                            Examine and analyze various types of images,
                            intensity transformations, and various spatial
                            domain image transforms. Analyze Arithmetic and
                            logic operations, spatial domain filtering,
                            bit-plane slicing, median filter, color image
                            processing, fundaments, and color image models.
                          </li>
                          <li>
                            Examine and analyze the 2D Fourier transform and
                            other frequency domain transformation and
                            enhancement techniques. Examine and analyze the
                            Image Restoration and Denoising models for image
                            enhancement.
                          </li>
                          <li>
                            Evaluate and apply the methodologies for image
                            segmentation, image Compression, and restoration
                            etc. Analyze the image morphological techniques.
                            Create a term/mini- project for practical
                            applications to image processing.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2UMEF2- CMOS VLSI Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Build upon the theoretical, mathematical and
                            physical analysis of digital VLSI circuits, for
                            proper understanding of concept, working and
                            analysis
                          </li>
                          <li>
                            Analyze the various analog integrated circuits
                          </li>
                          <li>Analyse the various RF integrated circuits</li>
                          <li>
                            Understand the various partitioning ,floor planning
                            and placement algorithms in ASIC. 4UMEP1 / 2UMEF3-
                            Parallel Computing
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2UMEF4- Artificial Intelligent System
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop algorithms for supervised and unsupervised
                            ANN
                          </li>
                          <li>
                            Implement the ANN concepts to solve real life
                            problems
                          </li>
                          <li>Analyze the ANN network.</li>
                          <li>
                            Develop algorithms in fuzzy logic for applications
                            such as pattern recognition
                          </li>
                          <li>
                            Implement the fuzzy logic concepts to solve real
                            life problems.
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          2UMEF5- High Speed Digital System Design
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand fundamentals of transmission line , cross
                            talk estimation and minimization.
                          </li>
                          <li>
                            Aware about non ideal interconnect issues and
                            transmission line losses
                          </li>
                          <li>
                            Understand non ideal return paths , switching losses
                            and different design methodology.
                          </li>
                          <li>
                            Know about the buffer modelling , timing analysis
                            and high speed measurements techniques .
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
                          "4U",
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
                {
                  label: "M.E. UNIVERSITY RANK HOLDERS",
                  key: "me",
                  default: defaultPrideToppersME,
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

    "best-projects": (
      <div className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("projects.title", "Student's Best Projects")}
              onSave={(val) => updateField("projects.title", val)}
            />
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">
            <EditableText
              value={t(
                "projects.subtitle",
                "Award-Winning Projects by Our Students",
              )}
              onSave={(val) => updateField("projects.subtitle", val)}
            />
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm flex-wrap gap-1">
            {Object.keys(t("studentProjects", defaultStudentProjects))
              .sort()
              .reverse()
              .map((year) => (
                <button
                  key={year}
                  onClick={() => setProjectYear(year)}
                  className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${projectYear === year ? "bg-white text-ssgmce-blue shadow-md" : "text-gray-600 hover:text-gray-800"}`}
                >
                  {year}
                </button>
              ))}
            {isEditing && (
              <button
                onClick={() => {
                  const newYear = prompt(
                    "Enter new academic year (e.g., 2025-26):",
                  );
                  if (
                    newYear &&
                    !t("studentProjects", defaultStudentProjects)[newYear]
                  ) {
                    const newProjects = {
                      ...t("studentProjects", defaultStudentProjects),
                      [newYear]: [],
                    };
                    updateData("studentProjects", newProjects);
                    setProjectYear(newYear);
                  }
                }}
                className="px-4 py-2 text-xs font-bold rounded-md bg-green-100 text-green-700 hover:bg-green-200"
              >
                + Year
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  {[
                    "Sr. No",
                    "Title of Project",
                    "Guided By",
                    "Award/Reward",
                  ].map((head, i) => (
                    <th
                      key={i}
                      className="px-6 py-4 text-left font-bold whitespace-nowrap"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {t(
                  `studentProjects.${projectYear}`,
                  defaultStudentProjects[projectYear] || [],
                ).map((proj, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-center font-mono text-gray-400 text-xs w-16">
                      {proj.no}
                    </td>
                    <td className="px-6 py-3 font-medium text-gray-800">
                      <EditableText
                        value={proj.title}
                        onSave={(val) =>
                          updateUgProject(projectYear, i, "title", val)
                        }
                      />
                    </td>
                    <td className="px-6 py-3 text-gray-600">
                      <EditableText
                        value={proj.guide}
                        onSave={(val) =>
                          updateUgProject(projectYear, i, "guide", val)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-bold rounded-full ${proj.award.includes("1st") ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}
                      >
                        <EditableText
                          value={proj.award}
                          onSave={(val) =>
                            updateUgProject(projectYear, i, "award", val)
                          }
                        />
                      </span>
                    </td>
                    {isEditing && (
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => {
                            const currentProjects = t(
                              `studentProjects.${projectYear}`,
                              defaultStudentProjects[projectYear],
                            );
                            const newProjects = currentProjects.filter(
                              (_, idx) => idx !== i,
                            );
                            updateData(
                              `studentProjects.${projectYear}`,
                              newProjects,
                            );
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                          title="Delete project"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isEditing && (
            <button
              onClick={() => {
                const current = t(`studentProjects.${projectYear}`, []) || [];
                const newItem = {
                  no: current.length + 1,
                  title: "New Project",
                  guide: "Guide Name",
                  award: "Participation",
                };
                updateData(`studentProjects.${projectYear}`, [
                  ...current,
                  newItem,
                ]);
              }}
              className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
            >
              Add Project
            </button>
          )}
        </div>
      </div>
    ),

    activities: (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            <EditableText
              value={t("activities.title", "Co-Curricular Activities")}
              onSave={(val) => updateField("activities.title", val)}
            />
          </h3>
          <span className="hidden sm:inline-block text-sm text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full">
            {t("activities.list", defaultActivities).length} Activities
          </span>
        </div>

        {/* Activity List */}
        <div className="space-y-5">
          {t("activities.list", defaultActivities || []).map(
            (activity, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.35 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-72 flex-shrink-0 flex items-center justify-center bg-gray-50 border-r border-gray-100">
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
                        onSave={(val) => {
                          const newActivities = [
                            ...t("activities.list", defaultActivities),
                          ];
                          newActivities[idx] = {
                            ...newActivities[idx],
                            date: val,
                          };
                          updateData("activities.list", newActivities);
                        }}
                      />
                    </span>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 mb-4 leading-snug">
                      <EditableText
                        value={activity.title}
                        onSave={(val) => {
                          const newActivities = [
                            ...t("activities.list", defaultActivities),
                          ];
                          newActivities[idx] = {
                            ...newActivities[idx],
                            title: val,
                          };
                          updateData("activities.list", newActivities);
                        }}
                        multiline
                      />
                    </h4>

                    {/* Meta Info */}
                    <div className="space-y-2.5 text-sm text-gray-600">
                      {(activity.participants || isEditing) && (
                        <div className="flex items-start gap-2.5">
                          <FaUserTie className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-700">
                              Participants:{" "}
                            </span>
                            <EditableText
                              value={
                                activity.participants ||
                                (isEditing ? "Add Participants" : "")
                              }
                              onSave={(val) => {
                                const newActivities = [
                                  ...t("activities.list", defaultActivities),
                                ];
                                newActivities[idx] = {
                                  ...newActivities[idx],
                                  participants: val,
                                };
                                updateData("activities.list", newActivities);
                              }}
                            />
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-2.5">
                        <FaIndustry className="text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">
                            Organized by:{" "}
                          </span>
                          <EditableText
                            value={activity.organizer}
                            onSave={(val) => {
                              const newActivities = [
                                ...t("activities.list", defaultActivities),
                              ];
                              newActivities[idx] = {
                                ...newActivities[idx],
                                organizer: val,
                              };
                              updateData("activities.list", newActivities);
                            }}
                            multiline
                          />
                        </div>
                      </div>

                      {(activity.resource || isEditing) && (
                        <div className="flex items-start gap-2.5">
                          <FaUserTie className="text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-700">
                              Resource Person:{" "}
                            </span>
                            <EditableText
                              value={
                                activity.resource ||
                                (isEditing ? "Add Resource Person" : "")
                              }
                              onSave={(val) => {
                                const newActivities = [
                                  ...t("activities.list", defaultActivities),
                                ];
                                newActivities[idx] = {
                                  ...newActivities[idx],
                                  resource: val,
                                };
                                updateData("activities.list", newActivities);
                              }}
                              multiline
                            />
                          </div>
                        </div>
                      )}

                      {isEditing && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <label className="text-xs text-gray-500 font-medium">
                            Image URL:
                          </label>
                          <EditableText
                            value={activity.image || ""}
                            onSave={(val) => {
                              const newActivities = [
                                ...t("activities.list", defaultActivities),
                              ];
                              newActivities[idx] = {
                                ...newActivities[idx],
                                image: val,
                              };
                              updateData("activities.list", newActivities);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Delete button for editing mode */}
                {isEditing && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <button
                      onClick={() => {
                        const newActivities = t(
                          "activities.list",
                          defaultActivities,
                        ).filter((_, i) => i !== idx);
                        updateData("activities.list", newActivities);
                      }}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Delete Activity
                    </button>
                  </div>
                )}
              </motion.div>
            ),
          )}
        </div>

        {/* Add Activity Button */}
        {isEditing && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                const newActivity = {
                  title: "New Activity",
                  date: "Date",
                  participants: "",
                  organizer: "EXTC Department, SSGMCE",
                  resource: "",
                  image: "",
                };
                updateData("activities.list", [
                  newActivity,
                  ...t("activities.list", defaultActivities || []),
                ]);
              }}
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <FaCalendarAlt className="mr-2" />
              Add New Activity
            </button>
          </div>
        )}
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
              Department of Electronics &amp; Telecommunication Engineering
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

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("templateData.faculty.title", "Our Faculty")}
              onSave={(val) => updateField("templateData.faculty.title", val)}
            />
          </h3>
          <p className="text-gray-500 mt-2">
            <EditableText
              value={t(
                "templateData.faculty.subtitle",
                "Department of Electronics & Telecommunication Engineering",
              )}
              onSave={(val) =>
                updateField("templateData.faculty.subtitle", val)
              }
            />
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {getFacultyList().map((fac, i) => {
            const facultyImages = {
              DN,
              KBK,
              RSD,
              MNT,
              SBP,
              VMU,
              DLB,
              BPH,
              DPT,
              AND,
              VKB,
              KTK,
              KSV,
              SPB,
              TPM,
              SGN,
              VSI,
              AAD,
              HBP,
              RSM,
              NSD,
              MBD,
              SPS,
              GK,
            };
            const resolvedPhoto = facultyImages[fac.photo] || fac.photo;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex relative"
              >
                {isEditing && (
                  <button
                    onClick={() => {
                      updateFacultyList((list) =>
                        list.filter((_, idx) => idx !== i),
                      );
                    }}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors z-10"
                    title="Remove faculty member"
                  >
                    Remove
                  </button>
                )}
                {/* Image Area - Fixed Width */}
                <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative overflow-hidden border-r border-gray-100">
                  {resolvedPhoto ? (
                    <EditableImage
                      src={resolvedPhoto}
                      onSave={(val) =>
                        updateFacultyList((list) => {
                          list[i] = { ...list[i], photo: val };
                          return list;
                        })
                      }
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
                    {fac.id && !fac.isIndustry ? (
                      <Link
                        to={`/faculty/${fac.id}`}
                        className="hover:underline"
                      >
                        <EditableText
                          value={fac.name}
                          onSave={(val) =>
                            updateFacultyList((list) => {
                              list[i] = { ...list[i], name: val };
                              return list;
                            })
                          }
                        />
                      </Link>
                    ) : (
                      <EditableText
                        value={fac.name}
                        onSave={(val) =>
                          updateFacultyList((list) => {
                            list[i] = { ...list[i], name: val };
                            return list;
                          })
                        }
                      />
                    )}
                  </h4>
                  <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                    <EditableText
                      value={fac.role}
                      onSave={(val) =>
                        updateFacultyList((list) => {
                          list[i] = { ...list[i], role: val };
                          return list;
                        })
                      }
                    />
                  </p>

                  {/* Compact Details */}
                  <div className="space-y-2 text-sm text-gray-600">
                    {fac.area && (
                      <p className="line-clamp-2 text-xs">
                        <span className="font-bold text-gray-700">Area: </span>
                        <EditableText
                          value={fac.area.join(", ")}
                          onSave={(val) =>
                            updateFacultyList((list) => {
                              list[i] = {
                                ...list[i],
                                area: val
                                  .split(",")
                                  .map((item) => item.trim())
                                  .filter(Boolean),
                              };
                              return list;
                            })
                          }
                        />
                      </p>
                    )}

                    <div className="pt-2 flex flex-col gap-1">
                      {fac.email && (
                        <div className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                          <FaEnvelope className="mr-2 text-gray-400" />
                          <EditableText
                            value={fac.email}
                            onSave={(val) =>
                              updateFacultyList((list) => {
                                list[i] = { ...list[i], email: val };
                                return list;
                              })
                            }
                          />
                        </div>
                      )}
                      {fac.phone && (
                        <span className="flex items-center text-xs">
                          <FaPhone className="mr-2 text-gray-400" />
                          <EditableText
                            value={fac.phone}
                            onSave={(val) =>
                              updateFacultyList((list) => {
                                list[i] = { ...list[i], phone: val };
                                return list;
                              })
                            }
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
            );
          })}
          {isEditing && (
            <button
              onClick={() => {
                const newMember = {
                  name: "Name",
                  role: "Role",
                  email: "email",
                  phone: "phone",
                  photo: "default",
                };
                updateFacultyList((list) => [...list, newMember]);
              }}
              className="flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer"
            >
              + Add Faculty
            </button>
          )}
        </div>
      </div>
    ),

    staff: (() => {
      const staffData = defaultStaff || [];
      const staffImages = {
        VGP,
        MYK,
        SAA,
        ASA,
        SBS,
        JSK,
        KKT,
        GOT,
        ALN,
        SAR,
        PBB,
        KRK,
        DBB,
        MUS,
      };

      return (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
              Staff @ Department
            </h3>
            <p className="text-gray-500 text-sm mt-2 pl-5">
              Non-teaching staff members of the Electronics & Telecommunication
              Engineering Department.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {staffData.map((staff, i) => {
              const resolvedPhoto = staffImages[staff.photo] || staff.photo;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex relative"
                >
                  {/* Image Area */}
                  <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative overflow-hidden border-r border-gray-100">
                    {resolvedPhoto ? (
                      <img
                        src={resolvedPhoto}
                        alt={staff.name}
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
                      {staff.name}
                    </h4>
                    <p className="text-ssgmce-blue font-medium text-sm uppercase tracking-wide text-[11px] mt-1">
                      {staff.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
                Department of Electronics & Telecommunication Engineering
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
                {(t("courseMaterial", defaultCourseMaterials) || []).map(
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
                            onSave={(val) => {
                              const updated = [
                                ...t("courseMaterial", defaultCourseMaterials),
                              ];
                              updated[i] = { ...updated[i], title: val };
                              updateData("courseMaterial", updated);
                            }}
                          />
                        </span>
                        {isEditing && (
                          <div className="text-xs text-blue-500 mt-1">
                            Link:{" "}
                            <EditableText
                              value={material.link}
                              onSave={(val) => {
                                const updated = [
                                  ...t(
                                    "courseMaterial",
                                    defaultCourseMaterials,
                                  ),
                                ];
                                updated[i] = { ...updated[i], link: val };
                                updateData("courseMaterial", updated);
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
                          <FaDownload className="text-xs" /> Access Drive
                        </a>
                      </td>
                    </tr>
                  ),
                )}
                {(t("courseMaterial", defaultCourseMaterials) || []).length ===
                  0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-12 text-center text-gray-400"
                    >
                      No course materials available yet. Use the admin editor to
                      add materials.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Access Drive" to view and download course materials from
            the respective year's shared folder.
          </div>
          {isEditing && (
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  updateData("courseMaterial", [
                    ...t("courseMaterial", defaultCourseMaterials),
                    { title: "New Semester", link: "#" },
                  ]);
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

    magazines: (
      <div className="space-y-8">
        {/* Magazines Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-50 text-ssgmce-orange rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaBook />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("magazines.title", "Department Magazines")}
              onSave={(val) => updateData("magazines.title", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "magazines.description",
                "Srujjan - the department magazine featuring student creativity, technical articles, achievements, and department highlights.",
              )}
              onSave={(val) => updateData("magazines.description", val)}
              multiline
            />
          </div>
        </div>

        {/* Magazine Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-wide">Magzines</h3>
              <p className="text-sm text-gray-300 mt-1">
                Department of Electronics & Telecommunication Engineering
              </p>
            </div>
            <FaDownload className="text-4xl text-orange-200 opacity-40" />
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
                <tr className="hover:bg-orange-50/30 transition-colors bg-orange-50/10">
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
                          value={t(
                            "magazines.latest.title",
                            defaultMagazines.latest.title ||
                              "Srujjan Magazine 2024-25",
                          )}
                          onSave={(val) =>
                            updateData("magazines.latest.title", val)
                          }
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={resolveMagazineHref(
                        t("magazines.latest", defaultMagazines.latest),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-orange-400 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-full transition-all"
                    >
                      <FaDownload className="text-xs" /> Click for Details
                    </a>
                  </td>
                </tr>

                {/* Archive Rows */}
                {(t("magazines.archives", defaultMagazines.archives) || []).map(
                  (issue, i) => (
                    <tr
                      key={i}
                      className="hover:bg-orange-50/30 transition-colors"
                    >
                      <td className="px-6 py-4 text-center font-mono text-gray-400">
                        {i + 2}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-700">
                          <EditableText
                            value={issue.title}
                            onSave={(val) => {
                              const archives = [
                                ...t(
                                  "magazines.archives",
                                  defaultMagazines.archives,
                                ),
                              ];
                              archives[i] = { ...archives[i], title: val };
                              updateData("magazines.archives", archives);
                            }}
                          />
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a
                          href={resolveMagazineHref(issue)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-orange-400 bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-full transition-all"
                        >
                          <FaDownload className="text-xs" /> Click for Details
                        </a>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Click for Details" to view/download the magazine PDF.
          </div>
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
                      {item.rowSpanParent !== false && (
                        <td
                          className="px-6 py-4 text-center font-medium text-gray-900"
                          rowSpan={(() => {
                            if (!item.sn) return undefined;
                            const practices = t(
                              "innovativePractices",
                              defaultInnovativePractices,
                            );
                            let span = 1;
                            for (let j = idx + 1; j < practices.length; j++) {
                              if (practices[j].rowSpanParent === false) span++;
                              else break;
                            }
                            return span > 1 ? span : undefined;
                          })()}
                        >
                          {item.sn}
                        </td>
                      )}
                      {item.rowSpanParent !== false && (
                        <td
                          className="px-6 py-4 text-center whitespace-nowrap"
                          style={{ color: "#003366" }}
                          rowSpan={(() => {
                            if (!item.faculty) return undefined;
                            const practices = t(
                              "innovativePractices",
                              defaultInnovativePractices,
                            );
                            let span = 1;
                            for (let j = idx + 1; j < practices.length; j++) {
                              if (practices[j].rowSpanParent === false) span++;
                              else break;
                            }
                            return span > 1 ? span : undefined;
                          })()}
                        >
                          <span className="font-medium">{item.faculty}</span>
                        </td>
                      )}
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

    newsletter: (
      <div className="space-y-8">
        {/* Newsletter Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 text-ssgmce-blue rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-sm">
            <FaBullseye />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            <EditableText
              value={t("newsletters.title", "Department Newsletters")}
              onSave={(val) => updateData("newsletters.title", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "newsletters.description",
                "Stay updated with the latest happenings, student achievements, faculty contributions, and department events through our periodic newsletters.",
              )}
              onSave={(val) => updateData("newsletters.description", val)}
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
                Department of Electronics & Telecommunication Engineering
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
                          value={t(
                            "newsletters.latest.title",
                            defaultNewsletters.latest.title ||
                              "News Letter 2024-25 (Volume II)",
                          )}
                          onSave={(val) =>
                            updateNewsletter("latest", 0, "title", val)
                          }
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={t(
                        "newsletters.latest.link",
                        defaultNewsletters.latest.link || "#",
                      )}
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
                  t("newsletters.archives", defaultNewsletters.archives) || []
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
                        href={issue.link || "#"}
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

    committee: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("committeeTitle", "Departmental Committee")}
            onSave={(val) => updateField("committeeTitle", val)}
          />
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t("departmentalCommittee", defaultDepartmentalCommittee).map(
            (item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6 relative"
              >
                {isEditing && (
                  <button
                    onClick={() => {
                      const updated = t(
                        "departmentalCommittee",
                        defaultDepartmentalCommittee,
                      ).filter((_, idx) => idx !== i);
                      updateData("departmentalCommittee", updated);
                    }}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                    title="Remove"
                  >
                    ✕
                  </button>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaFileAlt className="text-xl text-ssgmce-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    <EditableText
                      value={item.name}
                      onSave={(val) => {
                        const updated = [
                          ...t(
                            "departmentalCommittee",
                            defaultDepartmentalCommittee,
                          ),
                        ];
                        updated[i] = { ...updated[i], name: val };
                        updateData("departmentalCommittee", updated);
                      }}
                    />
                  </h4>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ssgmce-blue hover:text-ssgmce-orange transition-colors"
                  >
                    <FaDownload className="text-xs" />
                    Download PDF
                  </a>
                )}
              </div>
            ),
          )}
        </div>

        {isEditing && (
          <button
            onClick={() => {
              const updated = [
                ...t("departmentalCommittee", defaultDepartmentalCommittee),
                { name: "New Committee", link: "" },
              ];
              updateData("departmentalCommittee", updated);
            }}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-center"
          >
            + Add Committee
          </button>
        )}
      </div>
    ),

    services: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t(
              "servicesTitle",
              "Services Extended to Society / Community",
            )}
            onSave={(val) => updateField("servicesTitle", val)}
          />
        </h3>

        <div className="space-y-6">
          {t("servicesExtended", defaultServicesExtended).map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden relative"
            >
              {isEditing && (
                <button
                  onClick={() => {
                    const updated = t(
                      "servicesExtended",
                      defaultServicesExtended,
                    ).filter((_, idx) => idx !== i);
                    updateData("servicesExtended", updated);
                  }}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs z-10"
                  title="Remove"
                >
                  ✕
                </button>
              )}
              <div className="flex items-stretch">
                <div className="w-2 bg-ssgmce-blue shrink-0"></div>
                <div className="p-6 flex-1">
                  {/* Lab Name */}
                  {(item.lab || isEditing) && (
                    <p className="text-xs font-semibold text-ssgmce-blue uppercase tracking-wider mb-1">
                      <EditableText
                        value={item.lab || "Lab Name"}
                        onSave={(val) => {
                          const updated = [
                            ...t("servicesExtended", defaultServicesExtended),
                          ];
                          updated[i] = { ...updated[i], lab: val };
                          updateData("servicesExtended", updated);
                        }}
                      />
                    </p>
                  )}
                  {/* Facility Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <FaTools className="text-xl text-ssgmce-orange" />
                    <h4 className="text-lg font-bold text-gray-900">
                      <EditableText
                        value={item.facility}
                        onSave={(val) => {
                          const updated = [
                            ...t("servicesExtended", defaultServicesExtended),
                          ];
                          updated[i] = { ...updated[i], facility: val };
                          updateData("servicesExtended", updated);
                        }}
                      />
                    </h4>
                  </div>
                  {/* Details */}
                  <p className="text-gray-600 leading-relaxed">
                    <EditableText
                      value={item.details}
                      onSave={(val) => {
                        const updated = [
                          ...t("servicesExtended", defaultServicesExtended),
                        ];
                        updated[i] = { ...updated[i], details: val };
                        updateData("servicesExtended", updated);
                      }}
                      multiline
                    />
                  </p>
                </div>
                {/* Image Area */}
                {(item.image || isEditing) && (
                  <div className="w-40 sm:w-48 flex-shrink-0 bg-gray-50 border-l border-gray-100 flex items-center justify-center">
                    {item.image ? (
                      <EditableImage
                        src={item.image}
                        onSave={(url) => {
                          const updated = [
                            ...t("servicesExtended", defaultServicesExtended),
                          ];
                          updated[i] = { ...updated[i], image: url };
                          updateData("servicesExtended", updated);
                        }}
                        alt={item.facility}
                        className="w-full h-full object-cover"
                      />
                    ) : isEditing ? (
                      <div
                        className="flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-100 transition-colors w-full h-full"
                        onClick={() => {
                          const url = prompt(
                            "Enter image URL for this service:",
                          );
                          if (url) {
                            const updated = [
                              ...t("servicesExtended", defaultServicesExtended),
                            ];
                            updated[i] = { ...updated[i], image: url };
                            updateData("servicesExtended", updated);
                          }
                        }}
                      >
                        <FaTools className="text-3xl text-gray-300 mb-2" />
                        <span className="text-xs text-gray-400">
                          Click to add image
                        </span>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {isEditing && (
          <button
            onClick={() => {
              const updated = [
                ...t("servicesExtended", defaultServicesExtended),
                {
                  lab: "Lab Name",
                  facility: "New Facility",
                  details: "Description of services",
                  image: "",
                },
              ];
              updateData("servicesExtended", updated);
            }}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-center"
          >
            + Add Service
          </button>
        )}
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
          {Object.keys(t("ugProjects", defaultUgProjects)).map((year) => (
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
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(t("ugProjects", defaultUgProjects)[ugProjectYear] || []).map(
                  (project, i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-50/30 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-gray-500 font-medium border border-gray-200 text-center">
                        {project.id || i + 1}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border border-gray-200">
                        <EditableText
                          value={project.title}
                          onSave={(val) => {
                            const updated = {
                              ...t("ugProjects", defaultUgProjects),
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
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        </div>

        {isEditing && (
          <div className="flex gap-3">
            <button
              onClick={() => {
                const updated = { ...t("ugProjects", defaultUgProjects) };
                const yearProjects = updated[ugProjectYear] || [];
                updated[ugProjectYear] = [
                  ...yearProjects,
                  { id: yearProjects.length + 1, title: "New Project Title" },
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

    "industrial-visits": (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            <FaIndustry className="inline-block mr-2 text-ssgmce-blue" />
            Industrial Visits
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The department regularly organizes industrial visits and training
            programs to provide students hands-on exposure to industry
            practices, cutting-edge technologies, and professional work culture.
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
                    Name of Industry / Organization Visited
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
                {[
                  {
                    sn: "01",
                    industries: [
                      "NSTI Ramanthapur, Hyderabad",
                      "ISRO NRSC Outreach Facility, Hyderabad",
                      "Wonderla Solar & Water Purification Plant, Hyderabad",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2025_26_nsti_hyderabad.pdf",
                    class: "3U1 & 3U2 (Third Year)",
                    date: "18/01/2026 to 26/01/2026",
                    students: "91",
                  },
                  {
                    sn: "02",
                    industries: [
                      "GMRT, Khodad, Pune",
                      "Wireless Police Training Centre, Pashan, Pune",
                      "BSNL ZTTC (RTTC), Chinchwad, Pune",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2024_25_pune.pdf",
                    class: "4U1 & 4U2 (Final Year)",
                    date: "28/02/2025 to 04/03/2025",
                    students: "72",
                  },
                  {
                    sn: "03",
                    industries: [
                      "NSTI Ramanthapur, Hyderabad",
                      "ISRO NRSC Outreach Facility, Hyderabad",
                      "Wonderla Solar & Water Purification Plant, Hyderabad",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2024_25_isro.pdf",
                    class: "3U1 & 3U2 (Third Year)",
                    date: "27/02/2025 to 04/03/2025",
                    students: "90",
                  },
                  {
                    sn: "04",
                    industries: [
                      "NSTI Ramanthapur, Hyderabad",
                      "ISRO NRSC Outreach Facility, Hyderabad",
                      "Wonderla Solar & Water Purification Plant, Hyderabad",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2023_24_hyderabad.pdf",
                    class: "3U1 & 3U2 (Third Year)",
                    date: "25/02/2024 to 04/03/2024",
                    students: "108",
                  },
                  {
                    sn: "05",
                    industries: [
                      "S A Electronics, Pune",
                      "Vigyan Ashram, Pabal, Pune",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2019_20.pdf",
                    class: "4U1 & 4U2 (Final Year)",
                    date: "02/03/2020 to 06/03/2020",
                    students: "49",
                  },
                  {
                    sn: "06",
                    industries: [
                      "Police Wireless Training Center, Pashan, Pune",
                      "Renu Electronics, Baner Road, Pune",
                    ],
                    report:
                      "/uploads/documents/entc/industrial-visits/entc_iv_2017_18.pdf",
                    class: "4U1 & 4U2 (Final Year)",
                    date: "15/01/2018 to 18/01/2018",
                    students: "114",
                  },
                ].map((visit, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {visit.sn}
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
                    <td className="px-6 py-4 text-gray-700">{visit.class}</td>
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
                    org: "ADOLF SOLUTIONS (OPC) PVT. LTD",
                    date: "05-April-2025",
                    report:
                      "/uploads/documents/entc_mous/MOU_Adolf_Solutions_2025.pdf",
                  },
                  {
                    no: "2.",
                    org: "DAccess IT Infra Pvt. Ltd., Pune",
                    date: "05-April-2025",
                    report:
                      "/uploads/documents/entc_mous/MOU_DAccess_IT_Infra_2025.pdf",
                  },
                  {
                    no: "3.",
                    org: "Iravan Technologies., Pune",
                    date: "05-April-2025",
                    report:
                      "/uploads/documents/entc_mous/MOU_Iravan_Technologies_2025.pdf",
                  },
                  {
                    no: "4.",
                    org: "SSG Embedded Solutions, Nagpur",
                    date: "05-April-2025",
                    report:
                      "/uploads/documents/entc_mous/MOU_SSG_Embedded_Solutions_2025.pdf",
                  },
                  {
                    no: "5.",
                    org: "Symbiosis Institute of Technology, Pune",
                    date: "15-Sept-2023",
                    report:
                      "/uploads/documents/entc_mous/MOU_Symbiosis_2023.pdf",
                  },
                  {
                    no: "6.",
                    org: "S M Technologies Pvt Ltd",
                    date: "16-Apr-2022",
                    report:
                      "/uploads/documents/entc_mous/MOU_SM_Technologies_2022.pdf",
                  },
                  {
                    no: "7.",
                    org: "TOR VERGATA University of ROME",
                    date: "11-Feb-2020",
                    report:
                      "/uploads/documents/entc_mous/MOU_Tor_Vergata_Rome_2020.pdf",
                  },
                  {
                    no: "8.",
                    org: "ioCare, Pune",
                    date: "07-Feb-2020",
                    report: "/uploads/documents/entc_mous/MOU_ioCare_2020.pdf",
                  },
                  {
                    no: "9.",
                    org: "SSGM Electronic Solutions Pvt. Ltd., Akola",
                    date: "16-Sept-2019",
                    report:
                      "/uploads/documents/entc_mous/MOU_SSGM_Electronic_Solutions_2019.pdf",
                  },
                  {
                    no: "10.",
                    org: "Green Field Control Systems, Gandhinagar, Gujarat",
                    date: "16-Sept-2019",
                    report:
                      "/uploads/documents/entc_mous/MOU_Green_Field_Control_2019.pdf",
                  },
                  {
                    no: "11.",
                    org: "Integral Power Solutions Pvt. Ltd., Nashik",
                    date: "02-Aug-2019",
                    report:
                      "/uploads/documents/entc_mous/MOU_Integral_Power_Solutions_2019.pdf",
                  },
                  {
                    no: "12.",
                    org: "Scientech Tech Pvt. Ltd., Indore",
                    date: "Jan-2019",
                    report:
                      "/uploads/documents/entc_mous/MOU_Scientech_2019.pdf",
                  },
                  {
                    no: "13.",
                    org: "V-Chip Technology Pvt. Ltd., Pune",
                    date: "10-Aug-2018",
                    report:
                      "/uploads/documents/entc_mous/MOU_VChip_Technology_2018.pdf",
                  },
                  {
                    no: "14.",
                    org: "Dr. P.D.K.V., Akola",
                    date: "25-Jul-2018",
                    report:
                      "/uploads/documents/entc_mous/MOU_PDKV_Akola_2018.pdf",
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
                href={`/uploads/documents/entc_publications/ENTC_${year}_Patent_Publication_Data.pdf`}
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
              {(defaultEntcPatents[researchYear] || []).length === 0 ? (
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
                        {(defaultEntcPatents[researchYear] || []).map(
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
                                  className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${pat.status === "Granted" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
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
              {(defaultEntcPublications[researchYear] || []).length === 0 ? (
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
                        {(defaultEntcPublications[researchYear] || []).map(
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
              {(defaultEntcConferences[researchYear] || []).length === 0 ? (
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
                        {(defaultEntcConferences[researchYear] || []).map(
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
              {(defaultEntcCopyrights[researchYear] || []).length === 0 ? (
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
                        {(defaultEntcCopyrights[researchYear] || []).map(
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
              {(defaultEntcBooks[researchYear] || []).length === 0 ? (
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
                        {(defaultEntcBooks[researchYear] || []).map(
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
    internships: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            <EditableText
              value={t("internshipsTitle", "Internship Record")}
              onSave={(val) => updateData("internshipsTitle", val)}
            />
          </h3>
          <div className="text-gray-600 max-w-2xl mx-auto">
            <EditableText
              value={t(
                "internshipsSubtitle",
                "Comprehensive internship training providing students with hands-on industry experience and professional development.",
              )}
              onSave={(val) => updateData("internshipsSubtitle", val)}
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

        {/* Internship Table */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-ssgmce-blue text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">
                    Sr. No.
                  </th>
                  <th className="px-4 py-4 text-left font-bold">
                    Name of Student
                  </th>
                  <th className="px-4 py-4 text-left font-bold">Class</th>
                  <th className="px-4 py-4 text-left font-bold">
                    Name of Company
                  </th>
                  {internshipYear === "2024-25" && (
                    <th className="px-4 py-4 text-left font-bold">Duration</th>
                  )}
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">
                    Start Date
                  </th>
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(
                  t(
                    `internships.${internshipYear}`,
                    defaultInternships[internshipYear],
                  ) || []
                ).map((intern, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">
                      <EditableText
                        value={intern.no}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "no", val)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <EditableText
                        value={intern.name}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "name", val)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-center">
                      <EditableText
                        value={intern.class}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "class", val)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <EditableText
                        value={intern.company}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "company", val)
                        }
                        multiline
                      />
                    </td>
                    {internshipYear === "2024-25" && (
                      <td className="px-4 py-3 text-gray-700">
                        <EditableText
                          value={intern.duration}
                          onSave={(val) =>
                            updateInternship(
                              internshipYear,
                              idx,
                              "duration",
                              val,
                            )
                          }
                        />
                      </td>
                    )}
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                      <EditableText
                        value={intern.startDate}
                        onSave={(val) =>
                          updateInternship(
                            internshipYear,
                            idx,
                            "startDate",
                            val,
                          )
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-700 whitespace-nowrap">
                      <EditableText
                        value={intern.endDate}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "endDate", val)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      title="Electronics & Telecommunication Engg."
      backgroundImage={electronicsBanner}
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

export default EnTC;
