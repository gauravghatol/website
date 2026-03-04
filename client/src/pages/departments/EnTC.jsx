import React, { useState, useEffect } from "react";
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
} from "../../data/entcDefaults";

const EnTC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("projects");
  const [projectYear, setProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2023-24");
  const [placementYear, setPlacementYear] = useState(null);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState("gate");
  const [ugProjectYear, setUgProjectYear] = useState("2024-25");

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
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("courseOutcomes.title", "Course Outcomes")}
              onSave={(val) => updateField("courseOutcomes.title", val)}
            />
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <div className="text-gray-600 mt-3">
            <EditableText
              value={t(
                "courseOutcomes.subtitle",
                "Detailed course outcomes for all semesters",
              )}
              onSave={(val) => updateField("courseOutcomes.subtitle", val)}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* B.E. Course Outcomes Header */}
          <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-6">
            <h3 className="text-2xl font-bold text-white">
              B.E. (Electronics & Telecommunication Engineering)
            </h3>
            <p className="text-blue-100 mt-1">
              Click on semester to view detailed course outcomes
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { id: "be-sem3", label: "B.E. Semester-III" },
              { id: "be-sem4", label: "B.E. Semester-IV" },
              { id: "be-sem5", label: "B.E. Semester-V" },
              { id: "be-sem6", label: "B.E. Semester-VI" },
              { id: "be-sem7", label: "B.E. Semester-VII" },
              { id: "be-sem8", label: "B.E. Semester-VIII" },
            ].map((sem) => (
              <div key={sem.id} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() =>
                    setExpandedSemester(
                      expandedSemester === sem.id ? null : sem.id,
                    )
                  }
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{sem.label}</span>
                  <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                    {expandedSemester === sem.id ? "Hide" : "View"}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSemester === sem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50 space-y-6">
                        <div className="text-center py-8">
                          <EditableText
                            value={t(
                              `courseOutcomes.${sem.id}`,
                              "Course outcomes data will be added soon",
                            )}
                            onSave={(val) =>
                              updateField(`courseOutcomes.${sem.id}`, val)
                            }
                            multiline
                            className="text-gray-500 italic w-full block"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* M.E. Course Outcomes Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 mt-0">
            <h3 className="text-2xl font-bold text-white">
              M.E. (Digital Electronics)
            </h3>
            <p className="text-orange-100 mt-1">
              Click on semester to view detailed course outcomes
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            {[
              { id: "me-sem1", label: "M.E. Semester-I" },
              { id: "me-sem2", label: "M.E. Semester-II" },
              { id: "me-sem3", label: "M.E. Semester-III" },
            ].map((sem) => (
              <div key={sem.id} className="border-b border-gray-200 pb-2">
                <button
                  onClick={() =>
                    setExpandedSemester(
                      expandedSemester === sem.id ? null : sem.id,
                    )
                  }
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700">{sem.label}</span>
                  <span className="px-4 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors">
                    {expandedSemester === sem.id ? "Hide" : "View"}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedSemester === sem.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50 space-y-6">
                        <div className="text-center py-8">
                          <EditableText
                            value={t(
                              `courseOutcomes.${sem.id}`,
                              "Course outcomes data will be added soon",
                            )}
                            onSave={(val) =>
                              updateField(`courseOutcomes.${sem.id}`, val)
                            }
                            multiline
                            className="text-gray-500 italic w-full block"
                          />
                        </div>
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
          <div className="text-gray-600 mt-3">
            <EditableText
              value={t(
                "projects.subtitle",
                "Award-Winning Projects by Our Students",
              )}
              onSave={(val) => updateField("projects.subtitle", val)}
            />
          </div>
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

    achievements: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("achievements.title", "Achievements")}
            onSave={(val) => updateField("achievements.title", val)}
          />
        </h3>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              <EditableText
                value={t(
                  "achievements.departmentTitle",
                  "Department Achievements & Recognition",
                )}
                onSave={(val) =>
                  updateField("achievements.departmentTitle", val)
                }
              />
            </h4>
            <div className="text-gray-600">
              <EditableText
                value={t(
                  "achievements.departmentSubtitle",
                  "Excellence in Academics, Research, and Innovation",
                )}
                onSave={(val) =>
                  updateField("achievements.departmentSubtitle", val)
                }
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t("achievements.cards", defaultAchievements.cards).map(
              (item, i) => {
                const icons = { FaBullseye, FaUserTie, FaProjectDiagram };
                const Icon = icons[item.icon] || FaProjectDiagram;
                const colors = {
                  yellow: "text-yellow-600 bg-yellow-100",
                  blue: "text-ssgmce-blue bg-blue-100",
                  green: "text-green-600 bg-green-100",
                  purple: "text-purple-600 bg-purple-100",
                  red: "text-red-600 bg-red-100",
                  indigo: "text-indigo-600 bg-indigo-100",
                };
                const colorClass = colors[item.color] || colors.blue;

                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newCards = t(
                            "achievements.cards",
                            defaultAchievements.cards,
                          ).filter((_, idx) => idx !== i);
                          updateData("achievements.cards", newCards);
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors"
                        title="Remove achievement"
                      >
                        Remove
                      </button>
                    )}
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClass.split(" ")[1]}`}
                      >
                        <Icon
                          className={`text-3xl ${colorClass.split(" ")[0]}`}
                        />
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">
                        <EditableText
                          value={item.title}
                          onSave={(val) => {
                            const newCards = [
                              ...t(
                                "achievements.cards",
                                defaultAchievements.cards,
                              ),
                            ];
                            newCards[i] = { ...newCards[i], title: val };
                            updateData("achievements.cards", newCards);
                          }}
                        />
                      </h5>
                      <p className="text-gray-600 text-sm">
                        <EditableText
                          value={item.desc}
                          onSave={(val) => {
                            const newCards = [
                              ...t(
                                "achievements.cards",
                                defaultAchievements.cards,
                              ),
                            ];
                            newCards[i] = { ...newCards[i], desc: val };
                            updateData("achievements.cards", newCards);
                          }}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                );
              },
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const newCard = {
                    title: "New Achievement",
                    desc: "Description",
                    icon: "FaProjectDiagram",
                    color: "blue",
                  };
                  updateData("achievements.cards", [
                    ...t("achievements.cards", defaultAchievements.cards),
                    newCard,
                  ]);
                }}
                className="flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer"
              >
                + Add Card
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <FaProjectDiagram className="text-ssgmce-blue mr-3" />
            <EditableText
              value={t("achievements.highlightsTitle", "Recent Highlights")}
              onSave={(val) => updateField("achievements.highlightsTitle", val)}
            />
          </h4>
          <div className="space-y-4">
            {t("achievements.highlights", defaultAchievements.highlights).map(
              (item, i) => {
                const colors = {
                  blue: "bg-ssgmce-blue bg-blue-50",
                  green: "bg-green-600 bg-green-50",
                  purple: "bg-purple-600 bg-purple-50",
                  orange: "bg-orange-600 bg-orange-50",
                };
                const colorClass = colors[item.color] || colors.blue;
                const dotColor = colorClass.split(" ")[0];
                const bgColor = colorClass.split(" ")[1];

                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-lg ${bgColor} relative`}
                  >
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newHighlights = t(
                            "achievements.highlights",
                            defaultAchievements.highlights,
                          ).filter((_, idx) => idx !== i);
                          updateData("achievements.highlights", newHighlights);
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors"
                        title="Remove highlight"
                      >
                        Remove
                      </button>
                    )}
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${dotColor}`}
                    ></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        <EditableText
                          value={item.title}
                          onSave={(val) => {
                            const newHighlights = [
                              ...t(
                                "achievements.highlights",
                                defaultAchievements.highlights,
                              ),
                            ];
                            newHighlights[i] = {
                              ...newHighlights[i],
                              title: val,
                            };
                            updateData(
                              "achievements.highlights",
                              newHighlights,
                            );
                          }}
                        />
                      </p>
                      <p className="text-sm text-gray-600">
                        <EditableText
                          value={item.desc}
                          onSave={(val) => {
                            const newHighlights = [
                              ...t(
                                "achievements.highlights",
                                defaultAchievements.highlights,
                              ),
                            ];
                            newHighlights[i] = {
                              ...newHighlights[i],
                              desc: val,
                            };
                            updateData(
                              "achievements.highlights",
                              newHighlights,
                            );
                          }}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                );
              },
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const newHighlight = {
                    title: "New Highlight",
                    desc: "Description",
                    color: "blue",
                  };
                  updateData("achievements.highlights", [
                    ...t(
                      "achievements.highlights",
                      defaultAchievements.highlights,
                    ),
                    newHighlight,
                  ]);
                }}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 cursor-pointer text-center"
              >
                + Add Highlight
              </button>
            )}
          </div>
        </div>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("templateData.faculty.title", "Our Faculty")}
              onSave={(val) => updateField("templateData.faculty.title", val)}
            />
          </h3>
          <div className="text-gray-500 mt-2">
            <EditableText
              value={t(
                "templateData.faculty.subtitle",
                "Department of Electronics & Telecommunication Engineering",
              )}
              onSave={(val) =>
                updateField("templateData.faculty.subtitle", val)
              }
            />
          </div>
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
                    <EditableText
                      value={fac.name}
                      onSave={(val) =>
                        updateFacultyList((list) => {
                          list[i] = { ...list[i], name: val };
                          return list;
                        })
                      }
                    />
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

    "course-material": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Course Material
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Link
                </th>
                {isEditing && <th className="px-6 py-3 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {t("courseMaterial", defaultCourseMaterials).map((item, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <EditableText
                      value={item.subject}
                      onSave={(val) => {
                        const newMat = [
                          ...t("courseMaterial", defaultCourseMaterials),
                        ];
                        newMat[i] = { ...newMat[i], subject: val };
                        updateData("courseMaterial", newMat);
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-600 hover:underline">
                    <EditableText
                      value={item.link}
                      onSave={(val) => {
                        const newMat = [
                          ...t("courseMaterial", defaultCourseMaterials),
                        ];
                        newMat[i] = { ...newMat[i], link: val };
                        updateData("courseMaterial", newMat);
                      }}
                    />
                  </td>
                  {isEditing && (
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => {
                          const newMat = t(
                            "courseMaterial",
                            defaultCourseMaterials,
                          ).filter((_, idx) => idx !== i);
                          updateData("courseMaterial", newMat);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {isEditing && (
            <button
              onClick={() => {
                const newItem = { subject: "New Subject", link: "#" };
                updateData("courseMaterial", [
                  ...t("courseMaterial", defaultCourseMaterials),
                  newItem,
                ]);
              }}
              className="w-full py-2 bg-green-500 text-white hover:bg-green-600"
            >
              + Add Material
            </button>
          )}
        </div>
      </div>
    ),

    "innovative-practices": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Innovative Practices
        </h3>
        <div className="grid gap-6">
          {t("innovativePractices", defaultInnovativePractices).map(
            (item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative"
              >
                {isEditing && (
                  <button
                    onClick={() => {
                      const newPrac = t(
                        "innovativePractices",
                        defaultInnovativePractices,
                      ).filter((_, idx) => idx !== i);
                      updateData("innovativePractices", newPrac);
                    }}
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors"
                    title="Remove practice"
                  >
                    Remove
                  </button>
                )}
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  <EditableText
                    value={item.title}
                    onSave={(val) => {
                      const newPrac = [
                        ...t("innovativePractices", defaultInnovativePractices),
                      ];
                      newPrac[i] = { ...newPrac[i], title: val };
                      updateData("innovativePractices", newPrac);
                    }}
                  />
                </h4>
                <div className="text-gray-600">
                  <EditableText
                    value={item.description}
                    onSave={(val) => {
                      const newPrac = [
                        ...t("innovativePractices", defaultInnovativePractices),
                      ];
                      newPrac[i] = { ...newPrac[i], description: val };
                      updateData("innovativePractices", newPrac);
                    }}
                    multiline
                  />
                </div>
              </div>
            ),
          )}
          {isEditing && (
            <button
              onClick={() => {
                const newItem = {
                  title: "New Practice",
                  description: "Description",
                };
                updateData("innovativePractices", [
                  ...t("innovativePractices", defaultInnovativePractices),
                  newItem,
                ]);
              }}
              className="w-full py-3 bg-gray-100 text-gray-500 border-2 border-dashed rounded-lg hover:border-ssgmce-blue hover:text-ssgmce-blue"
            >
              + Add Practice
            </button>
          )}
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
                  facility: "New Facility",
                  details: "Description of services",
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
