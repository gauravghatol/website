import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import cseBanner from "../../assets/images/departments/cse/Cse banner.png";
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
  FaFileAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import {
  defaultLabs,
  defaultHodMessage,
  defaultVision,
  defaultMission,
  defaultPeo,
  defaultPso,
  defaultPo,
  defaultOverviewTableBE,
  defaultOverviewTableME,
  defaultOverviewTablePhD,
  defaultPrideGate,
  defaultPrideToppersBE,
  defaultPrideToppersME,
  defaultPrideAlumni,
  defaultCsesaObjectives,
  defaultActivities,
  defaultInternships,
  defaultResearch,
  defaultUgProjects,
  defaultFaculty,
  defaultPatents,
  defaultPublications,
  defaultCopyrights,
  defaultBooks,
  defaultNewsletters,
  defaultCourseMaterials,
  defaultInnovativePractices,
  defaultAchievements,
  defaultPlacements,
  defaultStudentProjects,
} from "../../data/cseDefaults";

// Import HOD photo
import hodPhoto from "../../assets/images/departments/cse/HOD_CSE_JMP.jpg";

// Import Faculty Photos
import jmpPhoto from "../../assets/images/departments/cse/faculty/JMP.jpg";
import nmkPhoto from "../../assets/images/departments/cse/faculty/NMK.jpg";
import cmmPhoto from "../../assets/images/departments/cse/faculty/CMM.jpeg";
import vsmPhoto from "../../assets/images/departments/cse/faculty/VSM.jpg";
import pkbPhoto from "../../assets/images/departments/cse/faculty/PKB.jpg";
import kpsPhoto from "../../assets/images/departments/cse/faculty/KPS.jpg";
import sbpPhoto from "../../assets/images/departments/cse/faculty/SBPagrut.jpg";
import razPhoto from "../../assets/images/departments/cse/faculty/RAZamare.jpg";
import prpPhoto from "../../assets/images/departments/cse/faculty/PRPohare.jpeg";
import rvdPhoto from "../../assets/images/departments/cse/faculty/RVD.jpeg";
import smjPhoto from "../../assets/images/departments/cse/faculty/SMJawake.png";
import tapPhoto from "../../assets/images/departments/cse/faculty/TAP.jpeg";
import vskPhoto from "../../assets/images/departments/cse/faculty/VSK.jpeg";
import yogeshPhoto from "../../assets/images/departments/cse/faculty/YogeshMurumkar.jpeg";

const photoMap = {
  jmpPhoto,
  nmkPhoto,
  cmmPhoto,
  vsmPhoto,
  pkbPhoto,
  kpsPhoto,
  sbpPhoto,
  razPhoto,
  prpPhoto,
  rvdPhoto,
  smjPhoto,
  tapPhoto,
  vskPhoto,
  yogeshPhoto,
  hodPhoto,
};

const CSE = () => {
  // Department of Computer Science & Engineering Page
  const [activeTab, setActiveTab] = useState("overview");

  // State for Vision/Mission/PEO section tabs
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [researchTab, setResearchTab] = useState("patents");
  const researchYears = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
  ];
  const [projectYear, setProjectYear] = useState("2024-25");
  const [studentProjectYear, setStudentProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2024-25");
  const [placementYear, setPlacementYear] = useState(null);
  const [internshipYear, setInternshipYear] = useState("2024-25");
  const [prideTab, setPrideTab] = useState("gate");
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);

  // State for Curricular Activities section
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-cse");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
  };

  const updateArrayString = (key, defaultArr, index, value) => {
    const arr = [...t(key, defaultArr)];
    arr[index] = value;
    updateData(key, arr);
  };

  const updateOverviewTable = (key, defaultArr, index, colIndex, value) => {
    const arr = JSON.parse(JSON.stringify(t(key, defaultArr)));
    arr[index][colIndex] = value;
    updateData(key, arr);
  };

  const updatePo = (index, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("po", defaultPo)));
    arr[index][field] = value;
    updateData("po", arr);
  };

  const updatePrideGate = (yearIndex, studentIndex, colIndex, value) => {
    const dataArr = JSON.parse(
      JSON.stringify(t("pride.gate", defaultPrideGate)),
    );
    dataArr[yearIndex].students[studentIndex][colIndex] = value;
    updateData("pride.gate", dataArr);
  };

  const updatePrideToppers = (tabKey, yearIndex, recordIndex, field, value) => {
    const key = `pride.toppers.${tabKey}`;
    const defaultArr =
      tabKey === "be" ? defaultPrideToppersBE : defaultPrideToppersME;
    const dataArr = JSON.parse(JSON.stringify(t(key, defaultArr)));
    dataArr[yearIndex].records[recordIndex][field] = value;
    updateData(key, dataArr);
  };

  const updateActivity = (index, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("activities", defaultActivities)));
    arr[index][field] = value;
    updateData("activities", arr);
  };

  const updateInternship = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("internships", defaultInternships)),
    );
    dataObj[year][index][field] = value;
    updateData("internships", dataObj);
  };

  const updateResearch = (year, index, field, value) => {
    const dataObj = JSON.parse(JSON.stringify(t("research", defaultResearch)));
    dataObj[year][index][field] = value;
    updateData("research", dataObj);
  };

  const updateUgProject = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("ugProjects.records", defaultUgProjects)),
    );
    dataObj[year][index][field] = value;
    updateData("ugProjects.records", dataObj);
  };

  const updateFaculty = (index, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("faculty", defaultFaculty)));
    arr[index][field] = value;
    updateData("faculty", arr);
  };

  const updatePatent = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("research.patents", defaultPatents)),
    );
    dataObj[year][index][field] = value;
    updateData("research.patents", dataObj);
  };

  const updatePublication = (year, index, field, value) => {
    const dataObj = JSON.parse(
      JSON.stringify(t("research.publications", defaultPublications)),
    );
    dataObj[year][index][field] = value;
    updateData("research.publications", dataObj);
  };

  const updateNewsletter = (type, index, field, value) => {
    if (type === "latest") {
      const latest = JSON.parse(
        JSON.stringify(t("newsletters.latest", defaultNewsletters.latest)),
      );
      latest[field] = value;
      updateData("newsletters.latest", latest);
    } else {
      const archives = JSON.parse(
        JSON.stringify(t("newsletters.archives", defaultNewsletters.archives)),
      );
      archives[index][field] = value;
      updateData("newsletters.archives", archives);
    }
  };

  // Reset Student's Best Projects year when switching to that tab
  useEffect(() => {
    if (activeTab === "student-projects") {
      window.scrollTo(0, 0);
      setStudentProjectYear("2024-25");
    }
    if (activeTab === "activities") {
      setActivitiesVisible(6);
      setLightboxActivity(null);
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
    { id: "student-projects", label: "Students Best Projects" },
    { id: "student-chapter", label: "Student Chapter (CSESA)" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Curricular Activities" },
    { id: "newsletter", label: "Newsletter" },
    { id: "achievements", label: "Achievements" },
    { id: "course-material", label: "Course Material" },
    { id: "ug-projects", label: "UG Projects" },
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
                      "https://www.youtube-nocookie.com/embed/DHtbFvTG53k",
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
                  "https://www.youtube-nocookie.com/embed/DHtbFvTG53k",
                )}
                title="Department of Computer Science & Engineering SSGMCE"
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
                    "The Department of Computer Science & Engineering offers a vibrant environment for undergraduate education and research in Computer Science. The Department is committed to the advancement of the frontiers of knowledge in computer science and to provide the students with a stimulating and rewarding learning experience.",
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
                    "We focus on holistic development through innovative teaching-learning processes, industrial training, ongoing projects, and regular interactions with industry.",
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
                  {isEditing && (
                    <th className="px-6 py-3 text-center text-sm font-bold text-gray-600 border border-gray-200 w-32">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* BE */}
                <tr className="bg-white">
                  <td
                    colSpan={isEditing ? 3 : 2}
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <EditableText
                        value={t(
                          "templateData.overview.headerBE",
                          "Bachelor of Engineering",
                        )}
                        onSave={(v) =>
                          updateField("templateData.overview.headerBE", v)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t(
                              "overview.tableBE",
                              defaultOverviewTableBE,
                            );
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateData("overview.tableBE", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview.tableBE", defaultOverviewTableBE).map(
                  ([label, val], i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                        <EditableText
                          value={label}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tableBE",
                              defaultOverviewTableBE,
                              i,
                              0,
                              v,
                            )
                          }
                        />
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                        <EditableText
                          value={val}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tableBE",
                              defaultOverviewTableBE,
                              i,
                              1,
                              v,
                            )
                          }
                          multiline
                        />
                      </td>
                      {isEditing && (
                        <td className="px-6 py-3 text-center border border-gray-200">
                          <button
                            onClick={() => {
                              const updated = t(
                                "overview.tableBE",
                                defaultOverviewTableBE,
                              ).filter((_, idx) => idx !== i);
                              updateData("overview.tableBE", updated);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                            title="Delete row"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ),
                )}

                {/* ME */}
                <tr className="bg-white">
                  <td
                    colSpan={isEditing ? 3 : 2}
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4"
                  >
                    <div className="flex justify-between items-center">
                      <EditableText
                        value={t(
                          "templateData.overview.headerME",
                          "Master of Engineering",
                        )}
                        onSave={(v) =>
                          updateField("templateData.overview.headerME", v)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t(
                              "overview.tableME",
                              defaultOverviewTableME,
                            );
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateData("overview.tableME", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview.tableME", defaultOverviewTableME).map(
                  ([label, val], i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                        <EditableText
                          value={label}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tableME",
                              defaultOverviewTableME,
                              i,
                              0,
                              v,
                            )
                          }
                        />
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                        <EditableText
                          value={val}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tableME",
                              defaultOverviewTableME,
                              i,
                              1,
                              v,
                            )
                          }
                          multiline
                        />
                      </td>
                      {isEditing && (
                        <td className="px-6 py-3 text-center border border-gray-200">
                          <button
                            onClick={() => {
                              const updated = t(
                                "overview.tableME",
                                defaultOverviewTableME,
                              ).filter((_, idx) => idx !== i);
                              updateData("overview.tableME", updated);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                            title="Delete row"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ),
                )}

                {/* PhD */}
                <tr className="bg-white">
                  <td
                    colSpan={isEditing ? 3 : 2}
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <EditableText
                        value={t(
                          "templateData.overview.headerPhD",
                          "Ph. D in Computer Science and Engineering",
                        )}
                        onSave={(v) =>
                          updateField("templateData.overview.headerPhD", v)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t(
                              "overview.tablePhD",
                              defaultOverviewTablePhD,
                            );
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateData("overview.tablePhD", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview.tablePhD", defaultOverviewTablePhD).map(
                  ([label, val], i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                        <EditableText
                          value={label}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tablePhD",
                              defaultOverviewTablePhD,
                              i,
                              0,
                              v,
                            )
                          }
                        />
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                        <EditableText
                          value={val}
                          onSave={(v) =>
                            updateOverviewTable(
                              "overview.tablePhD",
                              defaultOverviewTablePhD,
                              i,
                              1,
                              v,
                            )
                          }
                          multiline
                        />
                      </td>
                      {isEditing && (
                        <td className="px-6 py-3 text-center border border-gray-200">
                          <button
                            onClick={() => {
                              const updated = t(
                                "overview.tablePhD",
                                defaultOverviewTablePhD,
                              ).filter((_, idx) => idx !== i);
                              updateData("overview.tablePhD", updated);
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                            title="Delete row"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-ssgmce-blue font-medium">Dr. J. M. Patil</p>
            <p className="text-sm text-gray-500">
              Head, Department of Computer Science & Engineering
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
                    onSave={(v) => updateField("vision", v)}
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
                    <div className="text-gray-700 w-full">
                      <EditableText
                        value={item}
                        onSave={(v) =>
                          updateArrayString("mission", defaultMission, i, v)
                        }
                        multiline
                      />
                    </div>
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
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="text-gray-700 leading-relaxed font-medium w-full">
                      <EditableText
                        value={item}
                        onSave={(v) =>
                          updateArrayString("peo", defaultPeo, i, v)
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
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="text-gray-700 leading-relaxed font-medium w-full">
                      <EditableText
                        value={item}
                        onSave={(v) =>
                          updateArrayString("pso", defaultPso, i, v)
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
                  {t("po", defaultPo)
                    .slice(0, showAllPos ? undefined : 4)
                    .map((po, i) => (
                      <div
                        key={i}
                        className="text-gray-700 leading-relaxed text-sm"
                      >
                        <strong className="text-gray-900 block mb-1 text-base">
                          <EditableText
                            value={po.t}
                            onSave={(v) => updatePo(i, "t", v)}
                          />
                        </strong>
                        <EditableText
                          value={po.d}
                          onSave={(v) => updatePo(i, "d", v)}
                          multiline
                        />
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
                    src={t("hod.photo", hodPhoto)}
                    onSave={(url) => updateField("hod.photo", url)}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                <EditableText
                  value={t("hod.name", "Dr. J. M. Patil")}
                  onSave={(v) => updateField("hod.name", v)}
                />
              </h3>
              <div className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                <EditableText
                  value={t("hod.role", "Head of Department")}
                  onSave={(v) => updateField("hod.role", v)}
                />
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Computer Science & Engineering
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
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

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  Ph.D (CSE)
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  M.Tech
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
              <div className="h-1 w-20 bg-ssgmce-orange mt-2 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <EditableText
                value={t("hod.message", defaultHodMessage)}
                onSave={(v) => updateField("hod.message", v)}
                multiline
                className="whitespace-pre-wrap"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div>
                <div className="font-dancing text-2xl text-ssgmce-blue">
                  {t("hod.name", "Dr. J. M. Patil")}
                </div>
                <div className="text-sm text-gray-500">
                  {t("hod.role", "Head, Department of CSE")}
                </div>
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
                    updateField("laboratories", updated);
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
                      updateField("laboratories", updated);
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
                          updateField("laboratories", updated);
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
                      updateField("laboratories", updated);
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
                          updateField("laboratories", updated);
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
                            updateField("laboratories", updated);
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
                  updateField("laboratories", updated);
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
              Top Alumni
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
                          `List of GATE Qualified Students ${gateYear.year}`
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
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          {[
                            "S. N.",
                            "Student Name",
                            "Normalized Valid Score",
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
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
                        {t(
                          `pride.toppers.${category.key}`,
                          category.default,
                        ).map((yearGroup, yearIdx) => (
                          <React.Fragment key={yearIdx}>
                            {yearGroup.records.map((record, recordIdx) => (
                              <tr key={recordIdx} className="hover:bg-gray-50">
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
                              </tr>
                            ))}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
                    value={t("pride.alumniTitle", "Top Alumni of Department")}
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
                    {t("pride.alumni", defaultPrideAlumni).map(
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
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    ),

    "student-chapter": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("csesa.title", "Student Chapter (CSESA)")}
            onSave={(val) => updateData("csesa.title", val)}
          />
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              <EditableText
                value={t(
                  "csesa.subTitle",
                  "Computer Science and Engineering Students' Association",
                )}
                onSave={(val) => updateData("csesa.subTitle", val)}
              />
            </h4>

            <h5 className="text-lg font-semibold text-ssgmce-blue mb-3">
              <EditableText
                value={t(
                  "csesa.deptTitle",
                  "Department of Computer Science and Engineering Students' Chapter :",
                )}
                onSave={(val) => updateData("csesa.deptTitle", val)}
              />
            </h5>

            <div className="text-gray-600 mb-6 leading-relaxed">
              <EditableText
                value={t(
                  "csesa.description",
                  "In order to provide a platform to our students to explore their hidden talent & to keep them abreast with the latest technology, The Computer Science and Engineering Student Association called as CSESA is formed to excel in communication skill, teamwork, multidisciplinary approach and an ability to relate engineering issues to broader social context.",
                )}
                onSave={(val) => updateData("csesa.description", val)}
                multiline
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h6 className="text-red-600 font-bold text-lg mb-4">
                <EditableText
                  value={t("csesa.objectivesTitle", "Objectives :")}
                  onSave={(val) => updateData("csesa.objectivesTitle", val)}
                />
              </h6>
              <ul className="space-y-2 text-gray-700">
                {t("csesa.objectives", defaultCsesaObjectives).map(
                  (obj, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">➤</span>
                      <span>
                        <EditableText
                          value={obj}
                          onSave={(val) =>
                            updateArrayString(
                              "csesa.objectives",
                              defaultCsesaObjectives,
                              idx,
                              val,
                            )
                          }
                          multiline
                        />
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="text-center my-8">
              <div className="text-ssgmce-blue italic text-lg font-medium">
                <EditableText
                  value={t(
                    "csesa.footerText",
                    "CSESA helps the students to become a Perfect Technocrat with Good Human Values",
                  )}
                  onSave={(val) => updateData("csesa.footerText", val)}
                />
              </div>
            </div>

            <div className="text-center">
              {isEditing && (
                <div className="mb-2">
                  <span className="text-xs font-bold text-gray-500">
                    CSESA Portal URL:
                  </span>
                  <EditableText
                    value={t(
                      "csesa.portalUrl",
                      "https://ssgmce.ac.in/csesa/index.html",
                    )}
                    onSave={(val) => updateData("csesa.portalUrl", val)}
                    className="ml-2"
                  />
                </div>
              )}
              <a
                href={t(
                  "csesa.portalUrl",
                  "https://ssgmce.ac.in/csesa/index.html",
                )}
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
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Load More / Show Less */}
        {t("activities", defaultActivities).length > 6 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() =>
                setActivitiesVisible((prev) =>
                  prev >= t("activities", defaultActivities).length
                    ? 6
                    : Math.min(
                        prev + 6,
                        t("activities", defaultActivities).length,
                      ),
                )
              }
              className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
            >
              {activitiesVisible >= t("activities", defaultActivities).length
                ? "Show Less"
                : `Load More (${t("activities", defaultActivities).length - activitiesVisible} more)`}
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxActivity !== null &&
            (() => {
              const activity = t("activities", defaultActivities)[
                lightboxActivity
              ];
              if (!activity) return null;
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                  onClick={() => setLightboxActivity(null)}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Modal Top Bar */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                      <span className="text-sm text-gray-500">
                        {lightboxActivity + 1} /{" "}
                        {t("activities", defaultActivities).length}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            setLightboxActivity((prev) =>
                              prev > 0
                                ? prev - 1
                                : t("activities", defaultActivities).length - 1,
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <FaChevronLeft className="text-gray-500 text-sm" />
                        </button>
                        <button
                          onClick={() =>
                            setLightboxActivity((prev) =>
                              prev <
                              t("activities", defaultActivities).length - 1
                                ? prev + 1
                                : 0,
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <FaChevronRight className="text-gray-500 text-sm" />
                        </button>
                        <button
                          onClick={() => setLightboxActivity(null)}
                          className="p-2 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors ml-1"
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>

                    {/* Modal Image */}
                    {activity.image ? (
                      <div className="bg-gray-100">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full max-h-[50vh] object-contain mx-auto"
                        />
                      </div>
                    ) : (
                      <div className="h-48 bg-gray-50 flex items-center justify-center">
                        <FaCalendarAlt className="text-5xl text-gray-300" />
                      </div>
                    )}

                    {/* Modal Details */}
                    <div className="p-6 space-y-4 overflow-y-auto max-h-[35vh]">
                      <div>
                        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-2">
                          {activity.date}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 leading-snug">
                          {activity.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2.5 p-3 bg-blue-50 rounded-lg">
                          <FaUsers className="text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-blue-600 uppercase">
                              Participants
                            </p>
                            <p className="text-gray-700 mt-0.5">
                              {activity.participants}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 p-3 bg-orange-50 rounded-lg">
                          <FaUserGraduate className="text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-orange-600 uppercase">
                              Organized by
                            </p>
                            <p className="text-gray-700 mt-0.5">
                              {activity.organizer}
                            </p>
                          </div>
                        </div>
                        {activity.resource && (
                          <div className="flex items-start gap-2.5 p-3 bg-green-50 rounded-lg sm:col-span-2">
                            <FaChalkboardTeacher className="text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-green-600 uppercase">
                                Resource Person
                              </p>
                              <p className="text-gray-700 mt-0.5">
                                {activity.resource}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })()}
        </AnimatePresence>
      </div>
    ),

    "course-material": (
      <div className="space-y-8">
        {/* Course Material Header */}
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
                Department of Computer Science & Engineering
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
                {(t("courseMaterials", defaultCourseMaterials) || []).map(
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
                                "courseMaterials",
                                defaultCourseMaterials,
                                i,
                                { ...material, title: val },
                              )
                            }
                          />
                        </span>
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
                  ),
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Access OneDrive" to view and download course materials
            from the respective year's shared folder.
          </div>
        </motion.div>
      </div>
    ),

    "ug-projects": (
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
            <FaProjectDiagram className="text-orange-500 mr-2" />
            <EditableText
              value={t("ugProjects.title", "Student Projects (UG)")}
              onSave={(val) => updateData("ugProjects.title", val)}
            />
          </h3>
          <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
            {t("ugProjects.years", ["2024-25", "2023-24", "2022-23"]).map(
              (year, idx) => (
                <button
                  key={year}
                  onClick={() => setProjectYear(year)}
                  className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                    projectYear === year
                      ? "bg-ssgmce-blue text-white shadow-md"
                      : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                  }`}
                >
                  <EditableText
                    value={year}
                    onSave={(val) =>
                      updateArrayString(
                        "ugProjects.years",
                        ["2024-25", "2023-24", "2022-23"],
                        idx,
                        val,
                      )
                    }
                  />
                </button>
              ),
            )}
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
                {(
                  t(
                    `ugProjects.records.${projectYear}`,
                    defaultUgProjects[projectYear],
                  ) || []
                ).map((project, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                      <EditableText
                        value={project.id}
                        onSave={(val) =>
                          updateUgProject(projectYear, i, "id", val)
                        }
                      />
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-800">
                      <EditableText
                        value={project.title}
                        onSave={(val) =>
                          updateUgProject(projectYear, i, "title", val)
                        }
                        multiline
                      />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <EditableText
                          value={project.link || "#"}
                          onSave={(val) =>
                            updateUgProject(projectYear, i, "link", val)
                          }
                          className="text-[10px] text-blue-500 underline truncate max-w-[100px]"
                        />
                        <a
                          href={project.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold bg-blue-50 text-ssgmce-blue px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors border border-gray-200 inline-block"
                        >
                          View report
                        </a>
                      </div>
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
            are encouraged to undertake innovative projects from the final year.
            This hands-on approach helps them apply theoretical concepts to
            real-world computer science and engineering problems, fostering
            innovation and practical skills.
          </p>
        </div>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("facultyTitle", "Our Faculty")}
              onSave={(val) => updateData("facultyTitle", val)}
            />
          </h3>
          <div className="text-gray-500 mt-2">
            <EditableText
              value={t(
                "facultySubtitle",
                "Department of Computer Science & Engineering",
              )}
              onSave={(val) => updateData("facultySubtitle", val)}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("faculty", defaultFaculty).map((fac, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300  flex relative"
            >
              {/* Delete Button */}
              {isEditing && (
                <button
                  onClick={() => {
                    const updated = t("faculty", defaultFaculty).filter(
                      (_, idx) => idx !== i,
                    );
                    updateData("faculty", updated);
                  }}
                  className="absolute top-2 right-2 z-10 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md hover:bg-red-600 transition-colors"
                  title="Remove faculty member"
                >
                  Remove
                </button>
              )}

              {/* Image Area - Fixed Width */}
              <div className="w-32 sm:w-40 bg-gray-50 flex-shrink-0 relative overflow-hidden border-r border-gray-100">
                {fac.photo ? (
                  <EditableImage
                    src={photoMap[fac.photo] || fac.photo}
                    onSave={(url) => {
                      const updated = [...t("faculty", defaultFaculty)];
                      updated[i].photo = url;
                      updateData("faculty", updated);
                    }}
                    alt={fac.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      if (isEditing) {
                        const url = prompt("Enter faculty photo URL:");
                        if (url) {
                          const updated = [...t("faculty", defaultFaculty)];
                          updated[i].photo = url;
                          updateData("faculty", updated);
                        }
                      }
                    }}
                  >
                    <FaUserTie className="text-5xl text-gray-300" />
                    {isEditing && (
                      <span className="absolute bottom-2 text-xs text-gray-500">
                        Click to add
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                  <EditableText
                    value={fac.name}
                    onSave={(val) => {
                      const updated = [...t("faculty", defaultFaculty)];
                      updated[i].name = val;
                      updateData("faculty", updated);
                    }}
                  />
                </h4>
                <div className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                  <EditableText
                    value={fac.role}
                    onSave={(val) => {
                      const updated = [...t("faculty", defaultFaculty)];
                      updated[i].role = val;
                      updateData("faculty", updated);
                    }}
                  />
                </div>

                {/* Compact Details */}
                <div className="space-y-2 text-sm text-gray-600">
                  {(fac.area || isEditing) && (
                    <div className="line-clamp-2 text-xs">
                      <span className="font-bold text-gray-700">
                        <EditableText
                          value={t("facultyAreaLabel", "Area: ")}
                          onSave={(val) => updateData("facultyAreaLabel", val)}
                        />
                      </span>
                      <EditableText
                        value={
                          Array.isArray(fac.area)
                            ? fac.area.join(", ")
                            : fac.area || "Research areas..."
                        }
                        onSave={(val) => {
                          const updated = [...t("faculty", defaultFaculty)];
                          updated[i].area = val.split(",").map((s) => s.trim());
                          updateData("faculty", updated);
                        }}
                      />
                    </div>
                  )}

                  <div className="pt-2 flex flex-col gap-1">
                    {(fac.email || isEditing) && (
                      <div className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                        <FaEnvelope className="mr-2 text-gray-400 flex-shrink-0" />{" "}
                        <EditableText
                          value={fac.email || "email@ssgmce.ac.in"}
                          onSave={(val) => {
                            const updated = [...t("faculty", defaultFaculty)];
                            updated[i].email = val;
                            updateData("faculty", updated);
                          }}
                        />
                      </div>
                    )}
                    {(fac.email2 || isEditing) && (
                      <div className="flex items-center hover:text-ssgmce-blue transition-colors truncate text-xs">
                        <FaEnvelope className="mr-2 text-gray-400 flex-shrink-0" />{" "}
                        <EditableText
                          value={fac.email2 || "secondary@ssgmce.ac.in"}
                          onSave={(val) => {
                            const updated = [...t("faculty", defaultFaculty)];
                            updated[i].email2 = val;
                            updateData("faculty", updated);
                          }}
                        />
                      </div>
                    )}
                    {(fac.phone || isEditing) && (
                      <span className="flex items-center text-xs">
                        <FaPhone className="mr-2 text-gray-400 flex-shrink-0" />{" "}
                        <EditableText
                          value={fac.phone || "+91XXXXXXXXXX"}
                          onSave={(val) => {
                            const updated = [...t("faculty", defaultFaculty)];
                            updated[i].phone = val;
                            updateData("faculty", updated);
                          }}
                        />
                      </span>
                    )}
                  </div>

                  {fac.vidwanId && (
                    <a
                      href={`https://vidwan.inflibnet.ac.in/profile/${fac.vidwanId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-bold text-emerald-600 mt-1 hover:underline uppercase tracking-wide"
                    >
                      Vidwan Profile <FaAngleRight className="ml-1" />
                    </a>
                  )}
                  {!fac.isIndustry && (
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

        {/* Add New Faculty Button */}
        {isEditing && (
          <div className="mt-6">
            <button
              onClick={() => {
                const updated = [
                  ...t("faculty", defaultFaculty),
                  {
                    name: "New Faculty Member",
                    role: "Assistant Professor",
                    area: ["Research Area"],
                    email: "newfaculty@ssgmce.ac.in",
                    phone: "+91XXXXXXXXXX",
                    photo: "",
                  },
                ];
                updateData("faculty", updated);
              }}
              className="w-full py-3 px-4 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors font-medium"
            >
              + Add New Faculty Member
            </button>
          </div>
        )}
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
            Comprehensive course outcomes for all semesters of B.E. Computer
            Science & Engineering
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              B.E. Computer Science & Engineering - Course Outcomes
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {/* B.E. Semester III */}
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
                      {/* 3KS01 ENGINEERING MATHEMATICS - III */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS01 ENGINEERING MATHEMATICS ? III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Solve the Linear Differential equations with
                            constant coefficients by various methods.
                          </li>
                          <li>
                            Find Laplace Transform of various types of functions
                            and apply this knowledge to find Laplace Transform
                            of Periodic, Impulse & Unit step function.
                          </li>
                          <li>
                            Use Laplace Transform to solve Linear Differential
                            equations with constant coefficients & Find Fourier
                            Transform of various types of functions and apply
                            this knowledge to find Fourier Transform of
                            functions, in their core subjects.
                          </li>
                          <li>
                            Find the solution of partial differential equations
                            of first order also learn statistical methods
                          </li>
                          <li>
                            Test the analyticity, find the harmonic conjugates
                            and expand the function in Taylor's or Laurent's
                            series, find conformal mapping.
                          </li>
                          <li>
                            Differentiate vector point functions, find gradient
                            of scalar point function, and find divergence and
                            curl of vector point function. Integrate vector
                            point functions Evaluate line, surface and volume
                            integrals.
                          </li>
                        </ol>
                      </div>

                      {/* 3KS02 DISCRETE STRUCTURES AND GRAPH THEORY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS02 DISCRETE STRUCTURES AND GRAPH THEORY
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze and express logic sentence in terms of
                            predicates, quantifiers, and logical connectives.
                          </li>
                          <li>
                            Derive the solution for a given problem using
                            deductive logic and prove the solution based on
                            logical inference.
                          </li>
                          <li>
                            Classify algebraic structure for a given
                            mathematical problem.
                          </li>
                          <li>
                            Perform combinatorial analysis to solve counting
                            problems.
                          </li>
                          <li>Perform operation on trees data structures.</li>
                          <li>
                            Develop the given problem as graph networks and
                            solve with techniques of graph theory
                          </li>
                        </ol>
                      </div>

                      {/* 3KS03 OBJECT ORIENTED PROGRAMMING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS03 OBJECT ORIENTED PROGRAMMING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply Object Oriented approach to design software.
                          </li>
                          <li>Implement programs using classes and objects.</li>
                          <li>
                            Specify the forms of inheritance and use them in
                            programs.
                          </li>
                          <li>Analyze polymorphic behaviour of objects.</li>
                          <li>Design and develop GUI programs.</li>
                          <li>Develop Applets for web applications</li>
                        </ol>
                      </div>

                      {/* 3KS04 DATA STRUCTURES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS04 DATA STRUCTURES
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply various linear and nonlinear data structures
                          </li>
                          <li>
                            Demonstrate operations like insertion, deletion,
                            searching and traversing on various data structures.
                          </li>
                          <li>
                            Examine the usage of various structures in
                            approaching the problem solution.
                          </li>
                          <li>
                            Choose appropriate data structure for specified
                            problem domain
                          </li>
                        </ol>
                      </div>

                      {/* 3KS05 ANALOG & DIGITAL ELECTRONICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS05 ANALOG & DIGITAL ELECTRONICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          At the end of course students will able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain basic concepts of semiconductor devices and
                            its application.
                          </li>
                          <li>
                            Compare different Number System and basics of
                            conversion of number systems.
                          </li>
                          <li>
                            Realize different minimization technique to obtain
                            minimized expression.
                          </li>
                          <li>Design Combinational Circuits.</li>
                          <li>Design and Develop Sequential Circuits.</li>
                        </ol>
                      </div>

                      {/* 3KS06 OBJECT ORIENTED PROGRAMMING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS06 OBJECT ORIENTED PROGRAMMING LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Design, implement, test, and debug simple programs in
                          an object-oriented programming language.
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To develop the knowledge of object-oriented paradigm
                            in the Java programming language.
                          </li>
                          <li>
                            To evaluate classical problems using java
                            programming.
                          </li>
                          <li>
                            To develop software development skills using java
                            programming for real world applications.
                          </li>
                        </ol>
                      </div>

                      {/* 3KS07 DATA STRUCTURE LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS07 DATA STRUCTURE LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply various linear and nonlinear data structure.
                          </li>
                          <li>
                            Demonstrate operations like insertion, deletion,
                            searching and traversing on various data Structures.
                          </li>
                          <li>
                            Examine the usage of various structures in
                            approaching the problem solution.
                          </li>
                          <li>
                            Choose appropriate data structure for specified
                            problem domain
                          </li>
                        </ol>
                      </div>

                      {/* 3KS08 ANALOG & DIGITAL ELECTRONICS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS08 ANALOG & DIGITAL ELECTRONICS LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After successfully completing the lab, the students
                          will be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply practically the concepts of analog and digital
                            electronics.
                          </li>
                          <li>
                            Explain the operation and characteristics of
                            semiconductor devices.
                          </li>
                          <li>
                            Illustrate the operation of various logic gates and
                            their implementation using digital IC"s.
                          </li>
                          <li>
                            Design and implement various combinational logic
                            circuits.
                          </li>
                          <li>
                            Design and implement various sequential logic
                            circuits
                          </li>
                        </ol>
                      </div>

                      {/* 3KS09 C-SKILL-LAB I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3KS09 C-SKILL-LAB I
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the Numbers, Math functions, Strings, List,
                            Tuples and Dictionaries in Python
                          </li>
                          <li>
                            Interpret different Decision-Making statements,
                            Functions, Object oriented programming in Python
                          </li>
                          <li>Summarize different File handling operations</li>
                          <li>
                            Explain how to design GUI Applications in Python and
                            evaluate different database operations
                          </li>
                          <li>
                            Develop applications using Django framework or Flask
                          </li>
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
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem3-nep" ? null : "be-sem3-nep",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-III(NEP)
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
                      {/* 3CS203PC: Discrete Structure & Graph Theory */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS203PC: Discrete Structure & Graph Theory
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze and express logic sentence in terms of
                            predicates, quantifiers, and logical connectives.
                          </li>
                          <li>
                            Derive the solution for a given problem using
                            deductive logic and prove the solution based on
                            logical inference.
                          </li>
                          <li>
                            Classify algebraic structure for a given
                            mathematical problem.
                          </li>
                          <li>
                            Perform combinatorial analysis to solve counting
                            problems.
                          </li>
                          <li>Perform operation on trees data structures.</li>
                          <li>
                            Develop the given problem as graph networks and
                            solve with techniques of graph theory
                          </li>
                        </ol>
                      </div>

                      {/* 3CS201PC: Object Oriented Programming */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS201PC: Object Oriented Programming
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply knowledge of Java constructs for developing
                            programs/applications.
                          </li>
                          <li>
                            Conduct practical experiments for demonstrating
                            features of Java.
                          </li>
                          <li>
                            Distinguish between java concepts for better
                            applicability w.r.t requirement.
                          </li>
                          <li>
                            Evaluate the given Java program to identify bugs and
                            to write correct code.
                          </li>
                          <li>
                            To conjecture a prototype to solve real life
                            problems.
                          </li>
                        </ol>
                      </div>

                      {/* 3CS202PC: Data Structure */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS202PC: Data Structure
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply various linear and nonlinear data structures
                          </li>
                          <li>
                            Demonstrate operations like insertion, deletion,
                            searching and traversing on various data structures
                          </li>
                          <li>
                            Examine the usage of various structures in
                            approaching the problem solution.
                          </li>
                          <li>
                            Choose appropriate data structure for specified
                            problem domain
                          </li>
                        </ol>
                      </div>

                      {/* 3CS400EL: Comm.Engng.Project/Field Project Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS400EL: Comm.Engng.Project/Field Project Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify and analyze real community problems in
                            selected rural development domains.
                          </li>
                          <li>
                            Apply suitable digital and technological solutions
                            to address community needs.
                          </li>
                          <li>
                            Evaluate and integrate innovative and cost effective
                            technologies for rural improvement.
                          </li>
                          <li>
                            Engage with community stakeholders and interpret
                            feedback for better outcomes.
                          </li>
                          <li>
                            Create and present a comprehensive project report
                            with outcomes and future scope.
                          </li>
                        </ol>
                      </div>

                      {/* 3CS203PC: Object Oriented Programming Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS203PC: Object Oriented Programming Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To develop the knowledge of object-oriented paradigm
                            in the java programming language.
                          </li>
                          <li>
                            To evaluate classical problems using java
                            programming.
                          </li>
                          <li>
                            To develop software development skills using java
                            programming for real world applications.
                          </li>
                        </ol>
                      </div>

                      {/* 3CS204PC: Data Structure Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS204PC: Data Structure Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Apply various linear and nonlinear data structure.
                          </li>
                          <li>
                            Demonstrate operations like insertion, deletion,
                            searching and traversing on various data Structures.
                          </li>
                          <li>
                            Examine the usage of various structures in
                            approaching the problem solution.
                          </li>
                          <li>
                            Choose appropriate data structure for specified
                            problem domain
                          </li>
                        </ol>
                      </div>

                      {/* 3CS205MD: Fundamental Computer Programming */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS205MD: Fundamental Computer Programming
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand computing systems and problem-solving
                            logic.
                          </li>
                          <li>
                            Apply algorithmic thinking to solve simple problems.
                          </li>
                          <li>
                            Implement basic programs using control structures
                            and I/O operations.
                          </li>
                        </ol>
                      </div>

                      {/* 3CS206OE: E-Commerce */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS206OE: E-Commerce
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the basic concepts of E-Commerce and its
                            significance.
                          </li>
                          <li>
                            Identify different types of online business models
                            and their applications.
                          </li>
                          <li>
                            Understand digital payment methods and their
                            security aspects.
                          </li>
                          <li>
                            Analyze the impact of digital marketing and online
                            customer engagement.
                          </li>
                          <li>
                            Recognize legal, ethical, and cybersecurity
                            challenges in E-Commerce.
                          </li>
                          <li>
                            Explore career opportunities and emerging trends in
                            E-Commerce.
                          </li>
                        </ol>
                      </div>

                      {/* 3CS207EM: Entrepreneurship Development */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          3CS207EM: Entrepreneurship Development
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand and explain key entrepreneurial concepts
                            and the startup ecosystem.
                          </li>
                          <li>
                            Identify, assess and evaluate business opportunities
                            using feasibility analysis.
                          </li>
                          <li>
                            Develop a basic business plan including financial,
                            marketing and legal elements.
                          </li>
                          <li>
                            Recognize the importance of innovation, funding
                            sources and IP rights in startup.
                          </li>
                          <li>
                            Apply entrepreneurial thinking to engineering
                            problems and real world challenges.
                          </li>
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
                      {/* 4KS01 ARTIFICIAL INTELLIGENCE */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS01 ARTIFICIAL INTELLIGENCE
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain concepts of Artificial Intelligence and
                            different types of intelligent agents and their
                            architecture.
                          </li>
                          <li>
                            Formulate problems as state space search problem &
                            efficiently solve them.
                          </li>
                          <li>
                            Summarize the various searching techniques,
                            constraint satisfaction problem and example problems
                            - game playing techniques.
                          </li>
                          <li>
                            Apply AI techniques in applications which involve
                            perception, reasoning and learning.
                          </li>
                          <li>
                            Compare the importance of knowledge, types of
                            knowledge, issues related to knowledge acquisition
                            and representation.
                          </li>
                        </ol>
                      </div>

                      {/* 4KS02 DATA COMMUNICATION AND NETWORKING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS02 DATA COMMUNICATION AND NETWORKING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe data communication Components, Networks,
                            Protocols and various topology-based network
                            architecture.
                          </li>
                          <li>
                            Design and Test different encoding and modulating
                            techniques to change digital ?to? digital
                            conversion, analog-to-digital conversion, digital to
                            analog conversion, analog to analog conversion.
                          </li>
                          <li>
                            Explain the various multiplexing methods and
                            evaluate the different error detection & correction
                            techniques.
                          </li>
                          <li>
                            Illustrate and realize the data link control and
                            data link protocols.
                          </li>
                          <li>
                            Describe and demonstrate the various Local area
                            networks and the IEEE standards.
                          </li>
                        </ol>
                      </div>

                      {/* 4KS03 OPERATING SYSTEM */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS03 OPERATING SYSTEM
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain memory management issues like external
                            fragmentation, internal fragmentation.
                          </li>
                          <li>
                            Illustrate multithreading and its significance.
                          </li>
                          <li>
                            List various protection and security mechanisms of
                            OS.
                          </li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>
                            Analyze the deadlock situation and resolve it.
                          </li>
                          <li>Compare various types of operating systems.</li>
                        </ol>
                      </div>

                      {/* 4KS04 MICROPROCESSOR & ASSEMBLY LANGUAGE PROGRAMMING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS04 MICROPROCESSOR & ASSEMBLY LANGUAGE PROGRAMMING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe 8086 microprocessor and its architecture;
                            also understand instruction processing during the
                            fetch-decode-execute cycle.
                          </li>
                          <li>
                            Design and Test assembly language programs using
                            8086 microprocessor instruction set.
                          </li>
                          <li>
                            Demonstrate the implementation of standard
                            programming constructs, including control structures
                            and functions, in assembly language.
                          </li>
                          <li>
                            Illustrate and realize the Interfacing of memory &
                            various I/O devices with 8086 microprocessors.
                          </li>
                          <li>
                            Explain the basic concepts of Internet of Things
                          </li>
                        </ol>
                      </div>

                      {/* 4KS05 THEORY OF COMPUTATION */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS05 THEORY OF COMPUTATION
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To construct finite state machines to solve problems
                            in computing.
                          </li>
                          <li>
                            To write regular expressions for the formal
                            languages.
                          </li>
                          <li>
                            To construct and apply well defined rules for
                            parsing techniques in compiler.
                          </li>
                          <li>
                            To construct and analyze Push Down Automata and
                            Turing Machine and formal languages.
                          </li>
                          <li>
                            To express the understanding of the Chomsky
                            Hierarchy.
                          </li>
                          <li>
                            To express the understanding of the decidability and
                            un-decidability problems.
                          </li>
                        </ol>
                      </div>

                      {/* 4KS06 DATA COMMUNICATION & NETWORKING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS06 DATA COMMUNICATION & NETWORKING LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze performance of various communication
                            protocols.
                          </li>
                          <li>
                            Implement Configure various network protocols.
                          </li>
                          <li>Compare IP Address classes of networks.</li>
                        </ol>
                      </div>

                      {/* 4KS07 OPERATING SYSTEM LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS07 OPERATING SYSTEM LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain memory management issues like external
                            fragmentation, internal fragmentation.
                          </li>
                          <li>
                            Illustrate multithreading and its significance.
                          </li>
                          <li>
                            List various protection and security mechanisms of
                            OS.
                          </li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>
                            Analyze the deadlock situation and resolve it.
                          </li>
                          <li>Compare various types of operating systems.</li>
                        </ol>
                      </div>

                      {/* 4KS08 MICROPROCESSOR & ASSEMBLY LANG. PROG LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS08 MICROPROCESSOR & ASSEMBLY LANG. PROG LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the internal workings of the microprocessor.
                          </li>
                          <li>
                            Design and develop programs in Assembly Language
                            Programming.
                          </li>
                          <li>
                            Describe 8086 microprocessor and its architecture;
                            also understand instruction processing during the
                            fetch-decode-execute cycle.
                          </li>
                          <li>
                            Design and Test assembly language programs using
                            8086 microprocessor instruction set.
                          </li>
                          <li>
                            Demonstrate the implementation of standard
                            programming constructs, including control structures
                            and functions, in assembly language.
                          </li>
                          <li>
                            Illustrate and realize the Interfacing of memory &
                            various I/O devices with 8086 microprocessor.
                          </li>
                        </ol>
                      </div>

                      {/* 4KS09 C-SKILL-LAB II */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4KS09 C-SKILL-LAB II
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, a student will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Develop client server program and web applications.
                          </li>
                          <li>
                            Make use of project-based experience for web
                            application development.
                          </li>
                          <li>
                            Create embedded systems using Raspberry Pi/Arduino.
                          </li>
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
                onClick={() =>
                  setExpandedSemester(
                    expandedSemester === "be-sem4-nep" ? null : "be-sem4-nep",
                  )
                }
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-700">
                  B.E. Semester-IV(NEP)
                </span>
                <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                  {expandedSemester === "be-sem4-nep" ? "Hide" : "View"}
                </span>
              </button>
              <AnimatePresence>
                {expandedSemester === "be-sem4-nep" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 bg-gray-50 space-y-6">
                      {/* 4CS209PC: Data Communication and Networking */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS209PC: Data Communication and Networking
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the functions of each layer in the OSI and
                            TCP/IP models to interpret network communication.
                          </li>
                          <li>
                            Evaluate different types of transmission media and
                            justify their use in real-time applications.
                          </li>
                          <li>
                            Analyze application and presentation layer functions
                            and protocols used in internet communication.
                          </li>
                          <li>
                            Apply transport layer concepts and services to
                            ensure reliable data transmission.
                          </li>
                          <li>
                            Analyze routing protocol classifications and apply
                            IP addressing schemes for a given network.
                          </li>
                          <li>
                            Analyze data link layer functions and protocols to
                            achieve efficient and error-free communication.
                          </li>
                        </ol>
                      </div>

                      {/* 4CS210PC: Operating System */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS210PC: Operating System
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain memory management issues like external
                            fragmentation, internal Fragmentation.
                          </li>
                          <li>
                            Illustrate multithreading and its significance.
                          </li>
                          <li>
                            List various protection and security mechanisms of
                            OS.
                          </li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>
                            Analyze the deadlock situation and resolve it.
                          </li>
                          <li>Compare various types of operating systems</li>
                        </ol>
                      </div>

                      {/* 4CS211PC: Theory of Computation */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS211PC: Theory of Computation
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To construct finite state machines to solve problems
                            in computing.
                          </li>
                          <li>
                            To write regular expressions for the formal
                            languages.
                          </li>
                          <li>
                            To construct and apply well defined rules for
                            parsing techniques in compiler.
                          </li>
                          <li>
                            To construct and analyze Push Down, Turing Machine
                            for formal languages
                          </li>
                          <li>
                            To express the understanding of the Chomsky
                            Hierarchy.
                          </li>
                          <li>
                            To express the understanding of the decidability and
                            un-decidability problems.
                          </li>
                        </ol>
                      </div>

                      {/* 4CS212PC: Data Communication and Networking Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS212PC: Data Communication and Networking Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze performance of various communication
                            protocols
                          </li>
                          <li>
                            Implement Configure various network protocols.
                          </li>
                          <li>Compare IP Address classes of networks</li>
                        </ol>
                      </div>

                      {/* 4CS213PC: Operating System Lab */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS213PC: Operating System Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain memory management issues like external
                            fragmentation, internal fragmentation.
                          </li>
                          <li>
                            Illustrate multithreading and its significance.
                          </li>
                          <li>
                            List various protection and security mechanisms of
                            OS.
                          </li>
                          <li>Analyze and solve the scheduling algorithms.</li>
                          <li>
                            Analyze the deadlock situation and resolve it.
                          </li>
                          <li>Compare various types of operating systems</li>
                        </ol>
                      </div>

                      {/* 4CS214MD: Data Structures and Problem Solving */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS214MD: Data Structures and Problem Solving
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand and differentiate various data structures
                            and their use cases.
                          </li>
                          <li>
                            Apply linear and non-linear data structures in
                            solving engineering problems.
                          </li>
                          <li>
                            Analyze algorithm performance and implement
                            solutions using appropriate structures
                          </li>
                        </ol>
                      </div>

                      {/* 4CS215VS: C Skill #1 (VSEC III) */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS215VS: C Skill #1 (VSEC III)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the Numbers, Math functions, Strings, List,
                            Tuples and Dictionaries in Python
                          </li>
                          <li>
                            Interpret different Decision Making statements,
                            Functions, Object oriented programming in Python
                          </li>
                          <li>Summarize different File handling operations</li>
                          <li>
                            Explain how to design GUI Applications in Python and
                            evaluate different database operations
                          </li>
                          <li>
                            Develop applications using Django framework or Flask
                          </li>
                        </ol>
                      </div>

                      {/* 4CS216OE: Information System for Engineers */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS216OE: Information System for Engineers
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the basic structure and components of
                            Information Systems used in engineering.
                          </li>
                          <li>
                            Identify and evaluate applications of Information
                            Systems across different engineering disciplines.
                          </li>
                          <li>
                            Demonstrate understanding of ERP, MIS, and database
                            systems and their integration with engineering
                            workflows.
                          </li>
                        </ol>
                      </div>

                      {/* 4CS217EM: Social Science & Engineering Economics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          4CS217EM: Social Science & Engineering Economics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the significance of social sciences and
                            economic principles in engineering.
                          </li>
                          <li>
                            Analyze the role of governance, laws, and policies
                            in shaping society and business environments.
                          </li>
                          <li>
                            Apply economic and market principles to assess
                            financial systems and business trends.
                          </li>
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
                      {/* 5KS01 DATABASE MANAGEMENT SYSTEMS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS01 DATABASE MANAGEMENT SYSTEMS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Model, design and normalize databases for real life
                            applications.
                          </li>
                          <li>
                            Discuss data models, conceptualize and depict a
                            database system using ER diagram.
                          </li>
                          <li>
                            Query Databases applications using Query Languages
                            like SQL.
                          </li>
                          <li>
                            Design & develop transaction processing approach for
                            relational databases.
                          </li>
                          <li>
                            Understand validation framework like integrity
                            constraints, triggers and assertions.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS02 COMPILER DESIGN */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS02 COMPILER DESIGN
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the fundamentals of compiler and various
                            phases of compilers.
                          </li>
                          <li>Design and implement LL and LR parsers.</li>
                          <li>
                            Solve the various parsing techniques like SLR, CLR,
                            LALR.
                          </li>
                          <li>
                            Examine the concept of Syntax-Directed-Definition
                            and translation.
                          </li>
                          <li>
                            Assess the concept of Intermediate-Code Generation
                            and run-time environment.
                          </li>
                          <li>
                            Explain the concept code generation and code
                            optimization
                          </li>
                        </ol>
                      </div>

                      {/* 5KS03 COMPUTER ARCHITECTURE & ORGANIZATION */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS03 COMPUTER ARCHITECTURE & ORGANIZATION
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Discuss basic structure of computer.</li>
                          <li>Understand the basic operation of CPU.</li>
                          <li>
                            Compare and select various Memory and I/O devices as
                            per requirement.
                          </li>
                          <li>
                            Solve the concepts of number representation and
                            their operation.
                          </li>
                          <li>
                            Explain the concept of parallel processing and
                            pipelining.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS04 COGNITIVE TECHNOLOGIES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS04 COGNITIVE TECHNOLOGIES
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the Cognitive computing and principles of
                            cognitive systems.
                          </li>
                          <li>
                            Identify role of Natural Language Processing in
                            cognitive system.
                          </li>
                          <li>
                            Outline application of advanced analytics in
                            cognitive computing.
                          </li>
                          <li>
                            Justify role of Cloud and Distributed Computing in
                            Cognitive Computing.
                          </li>
                          <li>
                            Assess the process of building a Cognitive
                            Application.
                          </li>
                          <li>
                            Identify the Emerging Areas and Future Applications
                            of Cognitive Computing.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS04 DATA SCIENCE AND STATISTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS04 DATA SCIENCE AND STATISTICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain basics and need of data science.</li>
                          <li>
                            Demonstrate proficiency with statistical analysis of
                            data.
                          </li>
                          <li>
                            Perform linear and multiple linear regression
                            analysis.
                          </li>
                          <li>
                            Develop the ability to build and assess
                            classification-based models.
                          </li>
                          <li>
                            Evaluate outcomes and make decisions based on data.
                          </li>
                          <li>
                            Compare machine learning techniques to solve data
                            science business problems.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS04 INTERNET OF THINGS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS04 INTERNET OF THINGS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the basics of IoT and its applications.
                          </li>
                          <li>
                            Understand design methodology and platforms involved
                            in IoT.
                          </li>
                          <li>
                            Apply the knowledge to interface various sensors
                            with IoT development.
                          </li>
                          <li>
                            Design and Implement IoT devices for real world
                            applications
                          </li>
                        </ol>
                      </div>

                      {/* 5KS04 INTRODUCTION TO CYBER SECURITY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS04 INTRODUCTION TO CYBER SECURITY
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          After completion of this course, the students should
                          be able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Know fundamentals of Cybercrimes and Cyber offences.
                          </li>
                          <li>
                            Realize the Cyber threats, attacks and
                            Vulnerabilities.
                          </li>
                          <li>Explore the industry practices and tools.</li>
                          <li>
                            Comprehend the Access Control and Authentication
                            Process.
                          </li>
                          <li>Implement Intrusion Detection and Prevention.</li>
                        </ol>
                      </div>

                      {/* 5KS05 PRINCIPLES OF MARKETING FOR ENGINEERING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS05 PRINCIPLES OF MARKETING FOR ENGINEERING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify the importance of the digital marketing for
                            marketing success.
                          </li>
                          <li>
                            Manage customer relationships across all digital
                            channels and build better customer relationships.
                          </li>
                          <li>
                            Create a digital marketing plan, starting from the
                            SWOT analysis and defining a target group.
                          </li>
                          <li>
                            Identify digital channels, their advantages and
                            limitations, to perceiving ways of their integration
                            taking into consideration the available budget.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS05 Open Elect. I (i) FUNDAMENTALS OF FINANCE & ACCOUNTING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS05 Open Elect. I (i) FUNDAMENTALS OF FINANCE &
                          ACCOUNTING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Define bookkeeping and accounting.</li>
                          <li>
                            Explain the general purposes and functions of
                            accounting.
                          </li>
                          <li>
                            Explain the differences between management and
                            financial accounting.
                          </li>
                          <li>
                            Describe the main elements of financial accounting
                            information ? assets, liabilities, revenue and
                            expenses.
                          </li>
                          <li>
                            Identify the main financial statements and their
                            purposes.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS05 ENTREPRENEURSHIP */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS05 ENTREPRENEURSHIP
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of this course, the students should be
                          able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Analyze the business environment in order to
                            identify business opportunities.
                          </li>
                          <li>
                            Identify the elements of success of entrepreneurial
                            ventures.
                          </li>
                          <li>
                            Evaluate the effectiveness of different
                            entrepreneurial strategies.
                          </li>
                          <li>
                            Specify the basic performance indicators of
                            entrepreneurial activity.
                          </li>
                          <li>
                            Explain the importance of marketing and management
                            in small businesses venture.
                          </li>
                          <li>Interpret their own business plan.</li>
                        </ol>
                      </div>

                      {/* 5KS06 DATABASE MANAGEMENT SYSTEMS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS06 DATABASE MANAGEMENT SYSTEMS LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
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
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS07 COMPILER DESIGN ? Lab
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Identify the fundamentals of compiler and its
                            phases.
                          </li>
                          <li>
                            Use the powerful compiler generation tools such as
                            Lex and Yacc.
                          </li>
                          <li>
                            Write a lexical scanner, either from scratch or
                            using Lex.
                          </li>
                          <li>Develop program for solving parser problems.</li>
                          <li>Examine the various optimization techniques.</li>
                        </ol>
                      </div>

                      {/* 5KS08 EMERGING TECHNOLOGY LAB I */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS08 EMERGING TECHNOLOGY LAB I
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate proficiency with statistical analysis of
                            data.
                          </li>
                          <li>
                            Build skills in transformation and merging of data
                            for use in analytic tools.
                          </li>
                          <li>
                            Perform linear and multiple linear regression
                            analysis.
                          </li>
                          <li>
                            Develop the ability to build and assess data-based
                            models.
                          </li>
                          <li>
                            Evaluate outcomes and make decisions based on data.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS08 DATA SCIENCE AND STATISTICS - LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS08 DATA SCIENCE AND STATISTICS ? LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate proficiency with statistical analysis of
                            data.
                          </li>
                          <li>
                            Build skills in transformation and merging of data
                            for use in analytic tools.
                          </li>
                          <li>
                            Perform linear and multiple linear regression
                            analysis.
                          </li>
                          <li>
                            Develop the ability to build and assess data-based
                            models.
                          </li>
                          <li>
                            Evaluate outcomes and make decisions based on data.
                          </li>
                        </ol>
                      </div>

                      {/* 5KS09 C-Skill Lab - III */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          5KS09 C-Skill Lab ? III
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain the various tools, packages and modules
                            required for Web Development.
                          </li>
                          <li>
                            Discuss the workings of web server, cookies, routes,
                            etc.
                          </li>
                          <li>
                            Develop a mobile application using JS Framework.
                          </li>
                          <li>
                            Design GUI using JS framework and/or Libraries.
                          </li>
                          <li>
                            Create applications using Angular, React, Node and
                            Express.
                          </li>
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
                      {/* 6KS01 SECURITY POLICY & GOVERNANCE */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS01 SECURITY POLICY & GOVERNANCE
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            List and discuss the key characteristics of
                            Information Security, Leadership and Management
                          </li>
                          <li>Differentiate between Law and Ethics.</li>
                          <li>
                            Describe why ethical codes of conduct are important
                            to Information Security.
                          </li>
                          <li>
                            Discuss the importance, benefits and desired
                            outcomes of Information Security Governance
                          </li>
                          <li>
                            Discuss the process of developing, implementing and
                            maintaining various types of Information Security
                            Policies.
                          </li>
                          <li>
                            Define Risk Management and its role in the
                            organization.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS02 DESIGN AND ANALYSIS OF ALGORITHMS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS02 DESIGN AND ANALYSIS OF ALGORITHMS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Carry out the analysis of various Algorithms for
                            mainly Time complexity.
                          </li>
                          <li>
                            Apply design principles and concepts to algorithm
                            design.
                          </li>
                          <li>
                            Understand different algorithmic design strategies.
                          </li>
                          <li>
                            Analyze the efficiency of algorithms using time
                            complexity.
                          </li>
                          <li>Apply the standard sorting algorithms.</li>
                        </ol>
                      </div>

                      {/* 6KS03 SOFTWARE ENGINEERING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS03 SOFTWARE ENGINEERING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Decide on a process model for a developing a
                            software project.
                          </li>
                          <li>
                            Classify software applications and identify unique
                            features of various domains.
                          </li>
                          <li>Design test cases of a software system.</li>
                          <li>Understand basics of Project management.</li>
                          <li>
                            Plan, schedule and execute a project considering the
                            risk management.
                          </li>
                          <li>
                            Apply quality attributes in software development
                            life cycle.
                          </li>
                          <li>
                            Understand quality control and to ensure good
                            quality software.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS04 NATURAL LANGUAGE PROCESSING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS04 NATURAL LANGUAGE PROCESSING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand how to tag a given text with basic
                            Language features.
                          </li>
                          <li>
                            Design an innovative application using NLP
                            components.
                          </li>
                          <li>
                            Implement a rule-based system to tackle
                            morphology/syntax of a language.
                          </li>
                          <li>
                            Design a tag set to be used for statistical
                            processing for real-time applications.
                          </li>
                          <li>
                            Compare and contrast the use of different
                            statistical approaches for different types of NLP
                            applications.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS04 BIG DATA ANALYTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS04 BIG DATA ANALYTICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain basics and need of data science.</li>
                          <li>
                            Demonstrate proficiency with statistical analysis of
                            data.
                          </li>
                          <li>
                            Perform linear and multiple linear regression
                            analysis.
                          </li>
                          <li>
                            Develop the ability to build and assess
                            classification-based models.
                          </li>
                          <li>
                            Evaluate outcomes and make decisions based on data.
                          </li>
                          <li>
                            Compare machine learning techniques to solve data
                            science business problems.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS04 SENSORS AND ACTUATORS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS04 SENSORS AND ACTUATORS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Fabricate some of those sensors.</li>
                          <li>
                            Simulate sensors and characterize before fabricating
                            it.
                          </li>
                          <li>
                            Design application with sensors and actuators for
                            real world.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS04 CRYPTOGRAPHY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS04 CRYPTOGRAPHY
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Classify the symmetric encryption techniques.</li>
                          <li>
                            Illustrate various public key cryptographic
                            techniques.
                          </li>
                          <li>
                            Evaluate the authentication and hash algorithms.
                          </li>
                          <li>Discuss authentication applications.</li>
                          <li>
                            Summarize the intrusion detection and its solutions
                            to overcome the attacks.
                          </li>
                          <li>
                            Understand basic concepts of system level security.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS05 COMPUTATIONAL BIOLOGY */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS05 COMPUTATIONAL BIOLOGY
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand what types of biological questions can be
                            investigated using computers, and what limitations
                            and assumptions go into the understanding of
                            biology.
                          </li>
                          <li>
                            Describe the properties of DNA, RNA, and proteins,
                            the relationships among these molecules.
                          </li>
                          <li>
                            Analyze how to convert a biological question into a
                            computational problem that can be solved using
                            computers.
                          </li>
                          <li>
                            Explain general approaches for solving computational
                            problems, and will be able to apply these approaches
                            to new problems you encounter.
                          </li>
                          <li>
                            Understand how implement the algorithms by writing
                            computer programs.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS05 CYBER LAWS & ETHICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS05 CYBER LAWS & ETHICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of this course, the students should be
                          able to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand Cyber Space, Cyber Crime, Information
                            Technology, Internet & Services.
                          </li>
                          <li>
                            List and discuss various forms of Cyber Crimes.
                          </li>
                          <li>Explain Computer and Cyber Crimes.</li>
                          <li>
                            Understand Cyber Crime at Global and Indian
                            Perspective.
                          </li>
                          <li>
                            Describe the ways of precaution and prevention of
                            Cyber Crime as well as Human Rights.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS05 INTELLECTUAL PROPERTY RIGHTS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS05 INTELLECTUAL PROPERTY RIGHTS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Demonstrate a breadth of knowledge in Intellectual
                            property.
                          </li>
                          <li>
                            Assess fundamental aspects of Intellectual Property
                            Rights.
                          </li>
                          <li>
                            Discuss Patents, Searching, filling and drafting of
                            Patents.
                          </li>
                          <li>
                            Discuss the basic principles of geographical
                            indication, industrial designs, and copyright.
                          </li>
                          <li>Explain of Trade Mark and Trade Secret.</li>
                          <li>
                            Investigate current trends in IPR and Government
                            initiatives in fostering IPR.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS06 DESIGN AND ANALYSIS OF ALGORITHMS - LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS06 DESIGN AND ANALYSIS OF ALGORITHMS ? LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Carry out the analysis of various Algorithms for
                            mainly Time complexity.
                          </li>
                          <li>
                            Apply design principles and concepts to algorithm
                            design.
                          </li>
                          <li>
                            Understand different algorithmic design strategies.
                          </li>
                          <li>
                            Analyze the efficiency of algorithms using time
                            complexity.
                          </li>
                          <li>Apply the standard sorting algorithms.</li>
                        </ol>
                      </div>

                      {/* 6KS07 SOFTWARE ENGINEERING LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS07 SOFTWARE ENGINEERING LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand basic Software engineering methods and
                            practices, and their appropriate application.
                          </li>
                          <li>
                            Describe the process models such as the waterfall
                            and evolutionary models.
                          </li>
                          <li>
                            Discuss role of project management including
                            planning, scheduling and, risk management.
                          </li>
                          <li>
                            Explain data models, object models, context models
                            and behavioral models.
                          </li>
                          <li>
                            Understand of different software architectural
                            styles and Process frame work.
                          </li>
                        </ol>
                      </div>

                      {/* 6KS09 C SKILL LAB IV- LAB (DevOps) */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          6KS09 C SKILL LAB IV? LAB (DevOps)
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
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
                      {/* 7KS01 SOCIAL SCIENCE & ENGINEERING ECONOMICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS01 SOCIAL SCIENCE & ENGINEERING ECONOMICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            To identify the importance of fundamental rights as
                            well as fundamental duties.
                          </li>
                          <li>
                            To study the composition and powers of the Indian
                            Parliament.
                          </li>
                          <li>
                            To study the impact of science and technology on
                            culture and civilization.
                          </li>
                          <li>To identify the different market structures.</li>
                          <li>
                            To study the decision-making process and the
                            relationship between engineering and economics.
                          </li>
                          <li>
                            To identify the importance of Economic Development
                            on the livelihood of the citizens.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS02 COMPUTER NETWORKS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS02 COMPUTER NETWORKS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the basic concepts of Computer Graphics.
                          </li>
                          <li>
                            Demonstrate various algorithms for basic graphics
                            primitives.
                          </li>
                          <li>
                            Apply 2-D geometric transformations on graphical
                            objects.
                          </li>
                          <li>
                            Use various Clipping algorithms on graphical
                            objects.
                          </li>
                          <li>
                            Explore 3-D geometric transformations, curve
                            representation techniques and projections methods
                          </li>
                          <li>
                            Explain visible surface detection techniques and
                            Animation
                          </li>
                        </ol>
                      </div>

                      {/* 7KS03 CLOUD COMPUTING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS03 CLOUD COMPUTING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the fundamental concept, architecture and
                            applications of Cloud Computing.
                          </li>
                          <li>
                            Discuss the problems related to cloud deployment
                            model.
                          </li>
                          <li>Examine the concept of virtualization.</li>
                          <li>
                            Identify the role of network connectivity in the
                            cloud.
                          </li>
                          <li>Assess different Cloud service providers.</li>
                          <li>
                            Inspect the security issues in cloud service models.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS04 ROBOTICS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS04 ROBOTICS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe basic concept of robotics.</li>
                          <li>
                            Explain Components of a Robot System & Mechanical
                            Systems.
                          </li>
                          <li>
                            Illustrate Control of Actuators in Robotic
                            Mechanisms.
                          </li>
                          <li>Compare and contrast Robotic Sensory Devices.</li>
                          <li>
                            Recommend Robotics Hardware & Software
                            Considerations in Computer Vision
                          </li>
                          <li>
                            Design Robotic system by taking real time
                            considerations.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS04 DATA WAREHOUSE AND MINING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS04 DATA WAREHOUSE AND MINING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Explain the basics of data mining techniques.</li>
                          <li>
                            Identify the similarity and dissimilarity between
                            the data sets.
                          </li>
                          <li>Apply Data Preprocessing to the data.</li>
                          <li>
                            Describe Data Warehouse fundamentals, Data Mining
                            Principles.
                          </li>
                          <li>
                            Illustrate Multidimensional Data Analysis in Cube
                            Space.
                          </li>
                          <li>
                            Assess Mining Frequent Patterns, Associations, and
                            Correlations.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS04 EMBEDDED SYSTEM */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS04 EMBEDDED SYSTEM
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the basics of embedded systems such as core
                            units as well as memory organization for embedded
                            system.
                          </li>
                          <li>
                            Explain components of embedded system,
                            characteristics and quality attributes of embedded
                            systems.
                          </li>
                          <li>
                            Discuss role of 8051 microcontroller and its
                            architecture in design of embedded systems.
                          </li>
                          <li>
                            Examine the different Addressing modes and
                            Instruction Set of 8051 microcontrollers.
                          </li>
                          <li>
                            Use knowledge of C programming and embedded
                            programming.
                          </li>
                          <li>
                            Assess the Real-Time Operating System concepts with
                            VxWorks RTOS.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS04 Digital Forensics */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS04 Digital Forensics
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe Digital Forensics and its related
                            preparation
                          </li>
                          <li>Outline Data Acquisition tools</li>
                          <li>
                            Use knowledge to improve crime investigations.
                          </li>
                          <li>Examine Digital Forensic and its validation</li>
                          <li>
                            Assess role of email and social media in
                            investigations
                          </li>
                          <li>Discuss Cloud Forensics.</li>
                        </ol>
                      </div>

                      {/* 7KS05 BLOCK CHAIN FUNDAMENTALS */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS05 BLOCK CHAIN FUNDAMENTALS
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Understand the concept of decentralization of the
                            block chain with different layers of blockchain
                          </li>
                          <li>
                            Apply basic cryptographic primitives with encryption
                            standards.
                          </li>
                          <li>Analyze & Design Consensus Algorithms.</li>
                          <li>
                            Examine fundamentals of Bitcoin, how Bitcoin
                            transactions are constructed and used with Bitcoin
                            addresses, accounts, and mining.
                          </li>
                          <li>
                            Understand foundation, architecture, and use of the
                            Ethereum blockchain.
                          </li>
                          <li>
                            Execute & build block chain application/
                            transaction.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS05 IMAGE PROCESSING */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS05 IMAGE PROCESSING
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Explain fundamental steps in Image Processing.
                          </li>
                          <li>
                            Compare different methods for image transform with
                            its properties.
                          </li>
                          <li>
                            Illustrate Image Enhancement in spatial domain.
                          </li>
                          <li>
                            Examine Image Enhancement in Frequency Domain.
                          </li>
                          <li>
                            Apply various methods for segmenting image and
                            identifying image components.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS05 OPTIMIZATION TECHNIQUES */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS05 OPTIMIZATION TECHNIQUES
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>Describe statement of an optimization problem</li>
                          <li>
                            Examine linear programming procedures to solve
                            optimization problems.
                          </li>
                          <li>
                            Compare different nonlinear programming methods of
                            optimization
                          </li>
                          <li>
                            Discuss Geometric Programming with different
                            constraint
                          </li>
                          <li>
                            Identify the appropriate optimization technique for
                            the given problem
                          </li>
                          <li>
                            Synthesize algorithms to solve real time
                            optimization problems.
                          </li>
                        </ol>
                      </div>

                      {/* 7KS06 COMPUTER GRAPHICS LAB */}
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">
                          7KS06 COMPUTER GRAPHICS LAB
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          On completion of the course, the students will be able
                          to:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          <li>
                            Describe the basic concepts of Computer Graphics.
                          </li>
                          <li>
                            Demonstrate various algorithms for basic graphics
                            primitives.
                          </li>
                          <li>
                            Apply 2-D geometric transformations on graphical
                            objects.
                          </li>
                          <li>
                            Use various Clipping algorithms on graphical objects
                          </li>
                          <li>
                            Explore 3-D geometric transformations, curve
                            representation techniques and projections methods
                          </li>
                          <li>
                            Explain visible surface detection techniques and
                            Animation.
                          </li>
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
                      <p className="text-gray-600 italic">
                        Course outcomes data will be updated soon.
                      </p>
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
              M.E. Course Outcomes
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {/* M.E. Semester I */}
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
                      <p className="text-gray-600 italic">
                        Course outcomes data will be updated soon.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* M.E. Semester II */}
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
                      <p className="text-gray-600 italic">
                        Course outcomes data will be updated soon.
                      </p>
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
                  {
                    label:
                      "Revised Syllabus of CSE (1st Sem - 8th Sem) Notification No. 121/2023",
                    link: "#",
                  },
                  { label: "Syllabus Second Year (3rd & 4th Sem)", link: "#" },
                  {
                    label:
                      "Syllabus - (Universal Human Values and Ethics) Common for all branches - Sem. IV (NEP)",
                    link: "#",
                  },
                  {
                    label:
                      "Syllabus - (Modern Indian Language) Common for all branches - Sem. IV (NEP)",
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
                M.E. (Computer Engineering)
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
    "student-activities": (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Student Activities & Chapters
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our department actively promotes student participation in various
            technical and professional chapters, fostering leadership,
            innovation, and collaborative learning.
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
              Computer Science and Engineering Students Association - Fostering
              technical excellence and innovation among students.
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
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              IEEE Student Chapter
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Institute of Electrical and Electronics Engineers student chapter
              activities.
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
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              ACM Student Chapter
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Association for Computing Machinery student chapter promoting
              computing education.
            </p>
            <span className="inline-flex items-center text-xs font-medium text-gray-400">
              Coming Soon
            </span>
          </motion.div>
        </div>
      </div>
    ),
    "student-projects": (
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
            {["2024-25", "2023-24", "2022-23", "2021-22"].map((year) => (
              <button
                key={year}
                onClick={() => setStudentProjectYear(year)}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                  studentProjectYear === year
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
                {studentProjectYear === "2024-25" &&
                  [
                    {
                      no: 1,
                      title:
                        "GenAI-Powered Application Tracking System: Enhancing Recruitment with Skill Fitment Analysis.",
                      guide: "Dr. J. M. Patil",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title:
                        "Automated guide for Accurate and Faster Packaging of E-Commerce Orders.",
                      guide: "Prof. C. M. Mankar",
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

                {studentProjectYear === "2023-24" &&
                  [
                    {
                      no: 1,
                      title:
                        "Digital Document Verification using Blockchain Technology.",
                      guide: "Dr. J. M. Patil",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "Voice Analysis for Disease Screening.",
                      guide: "Prof. V. S. Mahalle",
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

                {studentProjectYear === "2022-23" &&
                  [
                    {
                      no: 1,
                      title: "Product Authentication System using Blockchain",
                      guide: "Dr. N.M. Kandoi",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "Mental Health Therapy App",
                      guide: "Dr. J.M.P Patil",
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

                {studentProjectYear === "2021-22" &&
                  [
                    {
                      no: 1,
                      title: "Autonomous Robotics Using VSLAM Technology and Implementation Using ARM Architecture.",
                      guide: "Prof. V. S. Mahalle",
                      award: "1st Rank",
                    },
                    {
                      no: 2,
                      title: "Sentiment Analysis of Marathi Language.",
                      guide: "Prof. KP Sable",
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
                    {[
                      { year: "2024-25", count: "27*", id: "2024-25" },
                      { year: "2023-24", count: "57", id: "2023-24" },
                      { year: "2022-23", count: "55", id: "2022-23" },
                      { year: "2021-22", count: "62", id: "2021-22" },
                      { year: "2020-21", count: "47", id: "2020-21" },
                      { year: "2019-20", count: "59", id: "2019-20" },
                      { year: "2018-19", count: "55", id: "2018-19" },
                    ].map((row, index) => (
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
                  <h3 className="text-xl font-bold text-gray-800">
                    Placement Record
                  </h3>
                  <p className="text-sm text-ssgmce-blue font-bold">
                    Session: {placementYear}
                  </p>
                </div>
              </div>

              {placementYear === "2024-25" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Apurva Patil",
                            company: "Connecticus Technologies Pvt Ltd, Pune",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Chaitali Nakhate",
                            company: "Bristlecone India Ltd., Pune",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Dnyaneshwari Mhaisne",
                            company: "Manasvi Tech Solutions Pvt. Ltd., Nashik",
                            ctc: "3.2 LPA",
                          },
                          {
                            name: "Eisha Nikam",
                            company: "Bristlecone India Ltd., Pune",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Khushbu Chavhan",
                            company:
                              "Arohi Software Solution Pvt. Ltd., Ahmednagar",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Kunjan Katore",
                            company: "RIA Advisory LLP, Pune",
                            ctc: "6.5 LPA",
                          },
                          {
                            name: "Palak Jasani",
                            company: "NCSI Technologies Pvt. Ltd., Pune",
                            ctc: "5.62 LPA",
                          },
                          {
                            name: "Pranita Tondre",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd., Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Radhika Kapoor",
                            company: "QuantumSoft Technologies Pvt. Ltd., Pune",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Samruddhi Katole",
                            company: "Bizsense Solutions Pvt. Ltd., Nagpur",
                            ctc: "5.5 LPA",
                          },
                          {
                            name: "Sanika Dose",
                            company: "SwiftNLift Media and Tech LLP, Pune",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Shivani Digole",
                            company: "Bristlecone India Ltd., Pune",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Shruti Sonone",
                            company: "Lend a Hand India, Pune",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Abhishek Patil",
                            company: "TCS, Pune",
                            ctc: "7 LPA",
                          },
                          {
                            name: "Bhuvnesh Kale",
                            company: "Bristlecone India Ltd., Pune",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Gaurav Dhale",
                            company: "One Smarter Inc., Ohio USA",
                            ctc: "3.6 LPA",
                          },
                          {
                            name: "Gaurav Kaple",
                            company: "One Smarter Inc., Ohio USA",
                            ctc: "3.6 LPA",
                          },
                          {
                            name: "Ishan Gawande",
                            company: "Truscholar Tech., Amravati",
                            ctc: "1.2 LPA",
                          },
                          {
                            name: "Krishna Kolekar",
                            company: "SkaleIT Technologies LLP, Pune",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Nikhil Kulkarni",
                            company: "Manasvi Tech Solutions Pvt. Ltd., Nashik",
                            ctc: "3.2 LPA",
                          },
                          {
                            name: "Nitish Sonone",
                            company: "ApexaiQ",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Prajwal Ghusalikar",
                            company: "One Smarter Inc., Ohio USA",
                            ctc: "4.8 LPA",
                          },
                          {
                            name: "Pratik Kuntawar",
                            company: "Consultadd Services Pvt. Ltd., Pune",
                            ctc: "12 LPA",
                          },
                          {
                            name: "Pratham Akkewar",
                            company:
                              "Arohi Software Solution Pvt. Ltd., Ahmednagar",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Rohit Tap",
                            company: "Manasvi Tech Solutions Pvt. Ltd., Nashik",
                            ctc: "3.2 LPA",
                          },
                          {
                            name: "Samarth Zamre",
                            company: "Softbyte India Pvt. Ltd., Pune",
                            ctc: "1.5 LPA",
                          },
                          {
                            name: "Anikesh Gadekar",
                            company: "Ayekart Pvt. Ltd., Mumbai",
                            ctc: "3.9 LPA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2023-24" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Abhijeet Eknath Tathod",
                            company:
                              "miniOrange Security Software Pvt. Ltd., Pune",
                            ctc: "4.8 LPA",
                          },
                          {
                            name: "Kunal Atmaram Chandore",
                            company: "ApexaiQ Technoogies Pvt. Ltd. USA",
                            ctc: "4.8 LPA",
                          },
                          {
                            name: "Surabhi Ghanshyamji Lahoti",
                            company: "ApexaiQ Technoogies Pvt. Ltd. USA",
                            ctc: "5.5 LPA",
                          },
                          {
                            name: "Surbhi Sohanlal Goria",
                            company: "ApexaiQ Technoogies Pvt. Ltd. USA",
                            ctc: "5.5 LPA",
                          },
                          {
                            name: "Riya Govind Dangra",
                            company: "ApexaiQ Technoogies Pvt. Ltd. USA",
                            ctc: "5.5 LPA",
                          },
                          {
                            name: "Yash Kumar Sugandhi",
                            company: "Bizsense Solutions Pvt. Ltd., Nagpur",
                            ctc: "5.52 LPA",
                          },
                          {
                            name: "Abhishek Sanjay Gawali",
                            company: "Bristlecone India Limited, Mumbai",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Gauri Vinod Zamare",
                            company: "Bristlecone India Limited, Mumbai",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Gauri JaisingPatil",
                            company: "Cencora Business Services (IT), Pune",
                            ctc: "5.61 LPA",
                          },
                          {
                            name: "Pallavi Gajanan Awasare",
                            company: "Cencora Business Services (IT), Pune",
                            ctc: "5.61 LPA",
                          },
                          {
                            name: "Pravadnya Dnyaneshwar More",
                            company: "Cencora Business Services (IT), Pune",
                            ctc: "5.61 LPA",
                          },
                          {
                            name: "Sneha Sunil Khatke",
                            company: "Cencora Business Services (IT), Pune",
                            ctc: "5.61 LPA",
                          },
                          {
                            name: "Abhijeet Rambhau Gadlinge",
                            company: "Circular Angle Pvt. Ltd., Thane",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Shreya Nitin Patil",
                            company: "Circular Angle Pvt. Ltd., Thane",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Ashutosh Sanjay Gupta",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Gajanan Mahadev Borade",
                            company:
                              "Institute of Plasma Research Bhat, Gandhinagar",
                            ctc: "3.75 LPA",
                          },
                          {
                            name: "Prithvirajsingh Devendrasingh Thakur",
                            company: "Genpact India Pvt. Ltd., Pune",
                            ctc: "2.85 LPA",
                          },
                          {
                            name: "Sayli Gopal Agrawal",
                            company: "Hexaware Technologies, Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Vallabh Rupesh Ghongde",
                            company: "Hexaware Technologies, Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Laxmi Sunil Hargunani",
                            company:
                              "Capgemini Technology Services India Limited, Navi Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Mitalee Ajay Uplenchwar",
                            company: "IBM CIC, Bangalore",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Pratibha Nandlal Yadav",
                            company: "IBM CIC, Bangalore",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Mayur Rajesh Shastrakar",
                            company: "Inferwse, Pune",
                            ctc: "4.12 LPA",
                          },
                          {
                            name: "Harshal Wadode",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Prajwal Sunil Chitode",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Pratik Ganesh Ekhande",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Rudransh Santosh Nemade",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Tanay Rajesh Hisariya",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Ubai Feroz Badri",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Vaishnavi Subhash Ghanokar",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Vedant Gajanan Chaudhari",
                            company: "IRIS Business Services Ltd., Mumbai",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Arpita Anil Chimanpure",
                            company:
                              "Micropro Software Solutions Limited, Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Revati Madhukar Khandare",
                            company:
                              "Micropro Software Solutions Limited, Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Sakshi Punam Koche",
                            company:
                              "Micropro Software Solutions Limited, Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Sanika Sudhir Sapkale",
                            company:
                              "Micropro Software Solutions Limited, Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Shreya Umesh Ingale",
                            company:
                              "Micropro Software Solutions Limited, Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Rushikesh Kailash Dhawane",
                            company: "Mindzcloud Technology Pvt. Ltd, Nagpur",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Chanchal Bhaskar Junare",
                            company: "Persistent Systems Limited, Nagpur",
                            ctc: "5.01 LPA",
                          },
                          {
                            name: "Dnyaneshwari Chatarkar",
                            company: "ncs Pvt. Ltd., Pune",
                            ctc: "5.01 LPA",
                          },
                          {
                            name: "Atharva Tattu",
                            company: "TCS Limited, Pune / Nagpur",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Atharv Santosh Tipkari",
                            company:
                              "TrueScholar, Amravati - Asset Chain Techlligence Private Limited",
                            ctc: "4.2 LPA",
                          },
                          {
                            name: "Anjali Rajesh Garde",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Atray Rajesh Sawane",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Chitvan Ravindra Naik",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Mohammad Abuzar Mohammad Zakir Husain",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Nikhil Prakash Babhulkar",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Sakshi Nandu Bhombe",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Vaishnavi Ramkrushna Zadokar",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Sanketika Mishra",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Pallavi Sontakke",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Vaishnavi Jaiswal",
                            company:
                              "Capgemini Technology Services India Limited, Navi Mumbai",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Chandrakant Gawali",
                            company: "YRC Software India LLP, Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Shubham Gorde",
                            company: "Innodata India Pvt. Ltd., New Delhi",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Nikita Labde",
                            company: "NCSI Technologies Pvt. Ltd., Pune",
                            ctc: "5.6 LPA",
                          },
                          {
                            name: "Vaibhav Bavaskar",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Harshal Kolhe",
                            company: "63MOONS Technologies Ltd., Mumbai",
                            ctc: "5.00 LPA",
                          },
                          {
                            name: "Kuldeep Lunge",
                            company:
                              "Elab Informatics Consulting Pvt. Ltd., Pune",
                            ctc: "3.00 LPA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2022-23" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Mayuri Patil",
                            company: "ApexiaQ Technologies Pvt. Ltd., Delhi",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Saurabh Kedar",
                            company: "Bizsense Solution Pvt. Ltd., Nagpur",
                            ctc: "6 LPA",
                          },
                          {
                            name: "ASHISH Mehare",
                            company: "DigitalLeaf Solutions, Hyderabad",
                            ctc: "7.8 LPA",
                          },
                          {
                            name: "Sanket Deshmukh",
                            company: "DigitalLeaf Solutions, Hyderabad",
                            ctc: "7.8 LPA",
                          },
                          {
                            name: "Adish Raipure",
                            company: "Expleo Solution Pvt. Ltd., Pune",
                            ctc: "5.00 LPA",
                          },
                          {
                            name: "Lokesh Chandak",
                            company: "Expleo Solution Pvt. Ltd., Pune",
                            ctc: "5.00 LPA",
                          },
                          {
                            name: "Mayuri Heda",
                            company: "FECUND Software Services Pvt. Ltd., Pune",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Shankar Shinde",
                            company: "HCL Tech, Noida",
                            ctc: "6.00 LPA",
                          },
                          {
                            name: "Harshita Ughade",
                            company: "Hexaware Technologies, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Tejaswini Rakhonde",
                            company: "Hexaware Technologies, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Divya Agrawal",
                            company: "IBM India Pvt. Ltd., Bangalore",
                            ctc: "4.50 LPA",
                          },
                          {
                            name: "Hrishikesh Tholbare",
                            company:
                              "LotFair Solutions Private Limited, Lucknow",
                            ctc: "2.75 LPA",
                          },
                          {
                            name: "Sudhanshu Deshmukh",
                            company:
                              "Mastek Enterprise Solutions Pvt. Ltd., Ahmedabad",
                            ctc: "4.20 LPA",
                          },
                          {
                            name: "Anshul Ghumadwar",
                            company:
                              "Micropro Software Solutions Pvt. Ltd., Nagpur",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Himanshu Jamwal",
                            company:
                              "Micropro Software Solutions Pvt. Ltd., Nagpur",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Swati Khatri",
                            company:
                              "Micropro Software Solutions Pvt. Ltd., Nagpur",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Tanishq Nanda",
                            company: "Optical Arc Pvt. Ltd., Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Gaurav Pundkar",
                            company:
                              "Rialtes Technologies & Solutions LLP, Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Kanchan Raut",
                            company:
                              "Rialtes Technologies & Solutions LLP, Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Suryakant Ingle",
                            company:
                              "Rialtes Technologies & Solutions LLP, Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Ajinkya Mahesh Pimple",
                            company: "Salesforce, Hyderabad",
                            ctc: "7.25 LPA",
                          },
                          {
                            name: "Palak Agrawal",
                            company: "Sankey Solutions, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Yash Dalal",
                            company: "Sankey Solutions, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Atharva Kolhe",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Bhavesh Mittal",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "7.00 LPA",
                          },
                          {
                            name: "Gagan Wanjari",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Mohd Meeran Iqbal Mohd Zafar Iqbal",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Nikhil Jadhav",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Pramey Deshmukh",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Rutika Dharangaonkar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sakshi Deshmukh",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sarvesh Sonar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Schachi Chaware",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shubhangi Thoke",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Siddhi Taori",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Tanay Shah",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Tejas Masurkar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Thavar Setiya",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "7 LPA",
                          },
                          {
                            name: "Trunay Wanjari",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Vinita Tiwari",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Apeksha Mundhada",
                            company: "TATA Technology Ltd., Pune",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Ritesh Manusmare",
                            company: "TATA Technology Ltd., Pune",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Shruti Lambe",
                            company: "TATA Technology Ltd., Pune",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Radhika Maloo",
                            company: "Tech Mahindra Limited, Hyderabad",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Sanjana Dhopte",
                            company: "Tech Mahindra Limited, Hyderabad",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Smitesh Sonar",
                            company: "Tech Mahindra Limited, Hyderabad",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Anand Agrawal",
                            company: "TekLink International, Hyderabad",
                            ctc: "6.00 LPA",
                          },
                          {
                            name: "Mohammed Areeb Ozair Feeroz Khan",
                            company: "TekLink International, Hyderabad",
                            ctc: "6.00 LPA",
                          },
                          {
                            name: "Vishal Rathod",
                            company:
                              "Advanced Business & Healthcare Solutions India Pvt. Ltd., Bangalore",
                            ctc: "6.00 LPA",
                          },
                          {
                            name: "Siddhi Mehta",
                            company: "HCL Tech, Noida",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Pakhi Mujmer",
                            company: "MN World Enterprise Pvt Ltd",
                            ctc: "3.14 LPA",
                          },
                          {
                            name: "Gopal Shelke",
                            company: "Quantum Integrators Pvt. Ltd. Nagpur",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Saurav Wankhade",
                            company: "Empyra Software Sol Pvt. Ltd Banglore",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Shreyash Chatarkar",
                            company: "Decentralized Masters",
                            ctc: "12 LPA",
                          },
                          {
                            name: "Suved Bhagwat",
                            company: "Byju?s",
                            ctc: "4.5 LPA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2021-22" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Shivani Joshi",
                            company: "Atos|Syntel Pvt Ltd, Pune",
                            ctc: "3.4 LPA",
                          },
                          {
                            name: "Mansi Paturkar",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Nisha Kakade",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Pooja Deshmukh",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Prajwal Gawal",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Sakshi Dhanuka",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Vijaya Narkhede",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Aditya Sambare",
                            company: "Coditas Solutions LLP, Pune",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Sudhanshu Sathawane",
                            company: "Global Logic India Pvt Ltd, Nagpur",
                            ctc: "5.5 LPA",
                          },
                          {
                            name: "Abhishek Moharir",
                            company: "Hexaware Technologies, Pune",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Aishwarya Bute",
                            company: "Hexaware Technologies, Pune",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Sakshi Thombare",
                            company: "Hexaware Technologies, Pune",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Rahul Samudrawad",
                            company: "InfoCepts Technology, Nagpur",
                            ctc: "3.62 LPA",
                          },
                          {
                            name: "Sahil Nagrale",
                            company: "Infosys Ltd,Bangalore",
                            ctc: "3.6 LPA",
                          },
                          {
                            name: "Radhika Deshmukh",
                            company: "Jade global associated Pvt Ltd,Pune",
                            ctc: "3.85 LPA",
                          },
                          {
                            name: "Mitesh Sakalkar",
                            company: "Mindtree, Bangalore",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Tanmay Thag",
                            company: "Mindtree, Bangalore",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Bharatkumar Kedia",
                            company: "Northern Arc Capital Mumbai",
                            ctc: "10 LPA",
                          },
                          {
                            name: "Shruti Dhave",
                            company:
                              "NTT Data Global Delivery Services Pvt Ltd, Bangalore",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Sonal Golhar",
                            company: "OCS Group India Pvt Ltd Bangalore",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Hriday Raj",
                            company: "Persistent SystemsPvt Ltd Nagpur",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Sakshi Hiwrale",
                            company: "Persistent SystemsPvt Ltd Nagpur",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Viplav Khode",
                            company: "Persistent SystemsPvt Ltd Nagpur",
                            ctc: "4.71 LPA",
                          },
                          {
                            name: "Akshaykumar Bhople",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "7 LPA",
                          },
                          {
                            name: "Anurag Tiwari",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Chetakshi Hajare",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Deepali Masne",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Disha Gupta",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Gargi Tela",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Kiran Lande",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Prasad Jawadekar",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Pratiksha Dake",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Rasika Wadhonkar",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sejal Hasani",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shital Patil",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shreyas Patil",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Tanuja Paraskar",
                            company: "Tata Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Radha Kabra",
                            company: "TekLink Software Pvt. Ltd., Hyderabad",
                            ctc: "6 LPA",
                          },
                          {
                            name: "Aman Sahu",
                            company: "TietoEVRY India, Pune",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Aniket Sangle",
                            company: "Tristha Global Pvt. Ltd., Mumbai",
                            ctc: "3.40 LPA",
                          },
                          {
                            name: "Gauri Mahalle",
                            company: "Tudip Technologies Pvt. Ltd., Pune",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Sampada Vyas",
                            company: "Tudip Technologies Pvt. Ltd., Pune",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Prasad Ugale",
                            company:
                              "Virtusa Consulting Services Pvt. Ltd., Pune",
                            ctc: "6.50 LPA",
                          },
                          {
                            name: "Chetan Marode",
                            company: "Wipro Limited, Pune",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Vishal Karhad",
                            company: "Wipro Limited, Pune",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Chinmay Deshkar",
                            company: "Zensar Technologies, Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Gunjan Bhagat",
                            company: "Zensar Technologies, Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Kimaya Gabhane",
                            company: "Zensar Technologies, Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Homeshwari Jadhao",
                            company: "Wipro Limited, Pune",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Khushbu Bhattad",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Sakshi Thakre",
                            company: "Bitwise Sol. Pvt. Ltd. Pune",
                            ctc: "2.4 LPA",
                          },
                          {
                            name: "Aashish Makwana",
                            company: "Wipro Limited, Pune",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Anishraj Singh",
                            company: "Shiv Kailas Construction, Ahmedbad",
                            ctc: "4.17 LPA",
                          },
                          {
                            name: "Mujahidahmed Sayyed",
                            company: "Coditas Solutions LLP, Pune",
                            ctc: "9 LPA",
                          },
                          {
                            name: "Navaneet Awajare",
                            company: "SMS India Pvt. Ltd. Gurugaon",
                            ctc: "6.75 LPA",
                          },
                          {
                            name: "Sachin Singh",
                            company: "Axis Bank Mumbai",
                            ctc: "7.45 LPA",
                          },
                          {
                            name: "Sanskar Mudholkar",
                            company:
                              "Capgemini Technology Services India Ltd, Mumbai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Shrikant Jugnake",
                            company: "HCL Tech.",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Suyog Vyas",
                            company: "Global Logic India Pvt Ltd, Nagpur",
                            ctc: "5.54 LPA",
                          },
                          {
                            name: "Tejas Wagh",
                            company: "Delloitte",
                            ctc: "7.8 LPA",
                          },
                          {
                            name: "Vaibhav Choudhari",
                            company: "Bitwise Sol. Pvt. Ltd. Pune",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Umang Mantri",
                            company: "NMIMS Global Access Mumbai",
                            ctc: "MBA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2020-21" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Aditi Mujmer",
                            company: "Accenture Limited",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Kasturi Anjankar",
                            company: "Accenture Limited",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Shantanu Kaluse",
                            company: "Accenture Limited",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Gayatri Purohit",
                            company: "Atos Syntel Pvt. Ltd., Pune",
                            ctc: "3.40 LPA",
                          },
                          {
                            name: "Radhika Sharma",
                            company: "Atos Syntel Pvt. Ltd., Pune",
                            ctc: "3.40 LPA",
                          },
                          {
                            name: "Aryan Raj",
                            company: "Bizsense Solutions Pvt Ltd., Nagpur",
                            ctc: "4.57 LPA",
                          },
                          {
                            name: "Rohit Dhatrak",
                            company: "BYJU's, Mumbai",
                            ctc: "7 LPA",
                          },
                          {
                            name: "Manisha Hirdekar",
                            company:
                              "Capgemini Technology Services India Limited, Navi Mumbai",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Neha Dehankar",
                            company:
                              "Cognizant Technology Solutions India Private Limited, Chennai",
                            ctc: "4.01 LPA",
                          },
                          {
                            name: "Neha Vyas",
                            company:
                              "Cognizant Technology Solutions India Private Limited, Chennai",
                            ctc: "4.01 LPA",
                          },
                          {
                            name: "Shreyash Dawake",
                            company:
                              "Cognizant Technology Solutions India Private Limited, Chennai",
                            ctc: "4.01 LPA",
                          },
                          {
                            name: "Komal Shukla",
                            company:
                              "Decos Software Development Pvt. Ltd., Pune",
                            ctc: "3.70 LPA",
                          },
                          {
                            name: "Aniket Wankhade",
                            company: "Infosys Limited, Bangalore",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Mrunal Dhabade",
                            company: "Infosys Limited, Bangalore",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Rushikesh Patil",
                            company: "Jade Global Software Pvt. Ltd., Pune",
                            ctc: "3.72 LPA",
                          },
                          {
                            name: "Shashikant Borkar",
                            company: "Jade Global Software Pvt. Ltd., Pune",
                            ctc: "3.72 LPA",
                          },
                          {
                            name: "Namrata Sutane",
                            company: "Jio Platforms Limited, Ahmedabad",
                            ctc: "3.5 LPA",
                          },
                          {
                            name: "Parul Dongre",
                            company: "Kratin SoftwareSolutions Pvt. Ltd., Pune",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Prasanna Rathi",
                            company: "MindTree, Bangalore",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Rakshada Wankhade",
                            company: "MindTree, Bangalore",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Janvi Sarode",
                            company: "One Smarter Inc, USA",
                            ctc: "3.6 LPA",
                          },
                          {
                            name: "Aditi Motekar",
                            company: "Persistent Systems Limited, Pune",
                            ctc: "4.51 LPA",
                          },
                          {
                            name: "Asra Gazi",
                            company: "Persistent Systems Limited, Pune",
                            ctc: "4.51 LPA",
                          },
                          {
                            name: "Kanishka Manakar",
                            company: "Persistent Systems Limited, Pune",
                            ctc: "4.51 LPA",
                          },
                          {
                            name: "Rachita Patey",
                            company: "Persistent Systems Limited, Pune",
                            ctc: "4.51 LPA",
                          },
                          {
                            name: "Saurav suman",
                            company: "Persistent Systems Limited, Pune",
                            ctc: "4.51 LPA",
                          },
                          {
                            name: "Krishna Salampuriya",
                            company: "PubMatic India Pvt. Ltd., Pune",
                            ctc: "5.4 LPA",
                          },
                          {
                            name: "Archana Mawale",
                            company: "TATA Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Kaushiki Kothari",
                            company: "TATA Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Mayur Gujar",
                            company: "TATA Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Mayuri Kharche",
                            company: "TATA Consultancy Services Limited, Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Bhavana Agrawal",
                            company: "TekLink International Inc., Hyderabad",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Shruti Wadhai",
                            company: "TekLink International Inc., Hyderabad",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Payal Binnod",
                            company: "Wipro Limited, Pune",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Poonam Shegokar",
                            company: "Wipro Limited, Pune",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Sumol Agrawal",
                            company: "Wipro Limited, Pune",
                            ctc: "3.25 LPA",
                          },
                          {
                            name: "Anchal Dhok",
                            company: "Lido Quality Tutorials Pvt Ltd",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Anushree Lajurkar",
                            company: "Amdocs Devlopment Center India Llp.",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Sakshi Gade",
                            company: "Tsystems",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Sonal Doiphode",
                            company: "Infosys Limited, Bangalore",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Vaishnavi Turkhade",
                            company:
                              "Cognizant Technology Solutions India Private Limited, Chennai",
                            ctc: "4 LPA",
                          },
                          {
                            name: "Aashwin Shegokar",
                            company: "Accenture Limited",
                            ctc: "3.3 LPA",
                          },
                          {
                            name: "Mayank Deshmukh",
                            company: "Infosys Limited, Bangalore",
                            ctc: "3 LPA",
                          },
                          {
                            name: "Pawan Lode",
                            company: "Actyv.ai Digital Labs Pvt. Ltd. Banglore",
                            ctc: "9 LPA",
                          },
                          {
                            name: "Shreyash Mahankar",
                            company:
                              "Cognizant Technology Solutions India Private Limited, Chennai",
                            ctc: "4.01 LPA",
                          },
                          {
                            name: "Shubham Dange",
                            company: "NEXG Healthcare Solutions Nagpur",
                            ctc: "1.2 LPA",
                          },
                          {
                            name: "Saumya Agrawal",
                            company:
                              "Ophiura Software & Consultancy Services Hingoli",
                            ctc: "Entrpreneur",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2019-20" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Bhushan Kadu",
                            company: "Bizsense Solutions Pvt. Ltd., Nagpur",
                            ctc: "4.30 LPA",
                          },
                          {
                            name: "Sahil Mune",
                            company: "Bizsense Solutions Pvt. Ltd., Nagpur",
                            ctc: "4.30 LPA",
                          },
                          {
                            name: "Vikram Mohite",
                            company:
                              "Capgemini Technology Services India Limited",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Priya Wankhade",
                            company:
                              "Capgemini Technology Services India Limited",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Akshay chandankhede",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.,Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Balabhau Mali",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.,Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Krishna Rathi",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.,Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Priyanka Sontakke",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.,Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Shubham Nimbalkar",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.,Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Ajinkya Bawaskar",
                            company: "Global Logic India Limited, Nagpur",
                            ctc: "4.82 LPA",
                          },
                          {
                            name: "Rashmi Joshi",
                            company: "Global Logic India Limited, Nagpur",
                            ctc: "4.82 LPA",
                          },
                          {
                            name: "Bhavika Patil",
                            company: "Infovision Lab, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Priyanka Mundhada",
                            company: "Infovision Lab, Pune",
                            ctc: "3.75 LPA",
                          },
                          {
                            name: "Rutuja Wasu",
                            company: "Infovision Lab, Pune",
                            ctc: "4.00 LPA",
                          },
                          {
                            name: "Shrutika Nakaskar",
                            company: "Infovision Lab, Pune",
                            ctc: "3.95 LPA",
                          },
                          {
                            name: "Shubham Ravekar",
                            company: "Novatech Software Pvt.Ltd., Nagpur",
                            ctc: "4.12 LPA",
                          },
                          {
                            name: "Yash Paliwal",
                            company: "Novatech Software Pvt.Ltd., Nagpur",
                            ctc: "4.12 LPA",
                          },
                          {
                            name: "Karan Bilakhiya",
                            company: "Persistent Systems Limited, Nagpur",
                            ctc: "4.10 LPA",
                          },
                          {
                            name: "Tejashree Kukade",
                            company: "Persistent Systems Limited, Nagpur",
                            ctc: "4.10 LPA",
                          },
                          {
                            name: "Pranati Dey",
                            company: "SingularityAIX",
                            ctc: "1.80 LPA",
                          },
                          {
                            name: "Devanshu Thakare",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Leena Patil",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Megha Shrawgi",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Nikita Bhansali",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Prashanthi Ghantasala",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Rajat Ninawe",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Tejal Nandapure",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Harshal Kadu",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shruti Wadaskar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sachin Nair",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shruti Umbarkar",
                            company: "Tek Link International Inc, Hyderabad",
                            ctc: "3.75 LPA",
                          },
                          {
                            name: "Jay Chaware",
                            company:
                              "TTEC India Customer Solutions Pvt. Ltd.Ahmedabad",
                            ctc: "2.80 LPA",
                          },
                          {
                            name: "Vaishnavi Kale",
                            company: "Unisys India Pvt. Ltd., Bengalru",
                            ctc: "4.29 LPA",
                          },
                          {
                            name: "Aboli Chintawar",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Dipali Kharat",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Madhu Mandhane",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Neha Mahalle",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Pranav Chaudhari",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Preety Panjwani",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Pritesh Dammani",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Raksha Gangan",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Sandeep Kumar",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Shraddha Karale",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Suyog Deshmukh",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Aman Gupta",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.60 LPA",
                          },
                          {
                            name: "Hitesh Vaidya",
                            company: "Wipro Limited, Bangalore",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Pragati Gawande",
                            company: "Wipro Limited, Bangalore",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Sanchit Datir",
                            company: "Wipro Limited, Bangalore",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Shivam Sharma",
                            company: "Wipro Limited, Bangalore",
                            ctc: "3.50 LPA",
                          },
                          {
                            name: "Amey Band",
                            company: "Zensar Technologies, Pune",
                            ctc: "3.20 LPA",
                          },
                          {
                            name: "Anuradha Mahalle",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Anushree Gattani",
                            company: "Happy Faces School Washim",
                            ctc: "1.2 LPA",
                          },
                          {
                            name: "Manali Gujarathi",
                            company: "Casepoint Pvt. Ltd Surat",
                            ctc: "3.20 LPA",
                          },
                          {
                            name: "Mayur Rathod",
                            company:
                              "Yardi Software India Private Limited, Pune",
                            ctc: "3.20 LPA",
                          },
                          {
                            name: "Shrikant Thakre",
                            company: "IBM India Private Limited",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Sourabh Namdeo",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sumit Asutkar",
                            company: "ACCENTURE LTD",
                            ctc: "4.5 LPA",
                          },
                          {
                            name: "Uzair Amin",
                            company: "Infosys Limited Banglore",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Yogita Katare",
                            company: "Tristha Global Pvt. Ltd. Mumbai",
                            ctc: "3.4 LPA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : placementYear === "2018-19" ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-800 text-white uppercase text-xs tracking-wider">
                        <tr>
                          <th className="px-6 py-4 font-bold text-center w-16">
                            Sr. No.
                          </th>
                          <th className="px-6 py-4 font-bold">
                            Name of Student
                          </th>
                          <th className="px-6 py-4 font-bold">Company Name</th>
                          <th className="px-6 py-4 font-bold text-right">
                            CTC
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Pranil Chimurkar",
                            company: "Accenture Limited, Bangalore",
                            ctc: "7.26 LPA",
                          },
                          {
                            name: "Apurva Mujgewar",
                            company: "Atos-Syntel Pvt. Ltd., Pune",
                            ctc: "3.10 LPA",
                          },
                          {
                            name: "Shamali Kawitkar",
                            company: "Atos-Syntel Pvt. Ltd., Pune",
                            ctc: "3.10 LPA",
                          },
                          {
                            name: "Atul Jamode",
                            company: "Cognizant Solutions India Limited, Pune",
                            ctc: "3.83 LPA",
                          },
                          {
                            name: "Narendra Chandak",
                            company: "Cognizant Solutions India Limited, Pune",
                            ctc: "3.83 LPA",
                          },
                          {
                            name: "Abhishek Tripathi",
                            company: "Doshaheen Solutions Pvt. Ltd.,Pune",
                            ctc: "7.00 LPA",
                          },
                          {
                            name: "Kismat Shere",
                            company: "HCL Technologies Limited, Noida",
                            ctc: "4.17 LPA",
                          },
                          {
                            name: "Akshada Tiwari",
                            company: "Infosys Limited, Bangalore",
                            ctc: "3.65 LPA",
                          },
                          {
                            name: "Pavan Raut",
                            company: "Jade Global Software Pvt. Ltd., Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Shubham Wankhade",
                            company: "Locationguru Pvt. Ltd., Nagpur",
                            ctc: "2.8 LPA",
                          },
                          {
                            name: "Tushar Singewar",
                            company: "Locationguru Pvt. Ltd., Nagpur",
                            ctc: "2.8 LPA",
                          },
                          {
                            name: "Rahul Rajabhoj",
                            company: "Microlise Telematics Pvt. Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Rajat Sadiwala",
                            company: "Sthapatya Consultants (I) Pvt Ltd,Pune",
                            ctc: "1.80 LPA",
                          },
                          {
                            name: "Sakshi Hajare",
                            company: "Sthapatya Consultants (I) Pvt Ltd,Pune",
                            ctc: "1.80 LPA",
                          },
                          {
                            name: "Abhiram Pande",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Aditi Panpalia",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Anushree Paralikar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Arpita Gonnade",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Aruna Sambare",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Brajesh Kumar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Chanchal Dhanuka",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Dipali Deshmane",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Hrutuja Mankar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Madhura Patwardhan",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Mahesh Rathi",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Mukta Tayade",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Rupali Mohurle",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shivani Deshmukh",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shrikala Sant",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Sneha Raut",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Supriya Satao",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Swapnil Murkute",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Veena Rathi",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Vishal Zade",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Abhijit Chaudhari",
                            company: "Tudip Technologies Pvt. Ltd., Pune",
                            ctc: "3.00 LPA",
                          },
                          {
                            name: "Mujeeb Khan",
                            company: "Unifide Synergy Folks Pvt. Ltd., Chennai",
                            ctc: "8.00 LPA",
                          },
                          {
                            name: "Paras Mehta",
                            company:
                              "Value Momentum Software Services Pvt. Ltd., Hyderabad",
                            ctc: "3.30 LPA",
                          },
                          {
                            name: "Trupti Kotak",
                            company: "Vodafone Idea Services Pvt. Ltd.,Pune",
                            ctc: "4.25 LPA",
                          },
                          {
                            name: "Rucha Rathi",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Payal Kale",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Ankita Batle",
                            company: "Karvy DigiKonnect Ltd., Hyderabad",
                            ctc: "1.56 LPA",
                          },
                          {
                            name: "Bharati Jaware",
                            company: "Accenture Limited",
                            ctc: "3.75 LPA",
                          },
                          {
                            name: "Gayatree Sharma",
                            company: "Atos-Syntel Pvt. Ltd., Pune",
                            ctc: "3.1 LPA",
                          },
                          {
                            name: "Pragati Sambare",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.84 LPA",
                          },
                          {
                            name: "Prerana Talole",
                            company: "Atos-Syntel Pvt. Ltd., Pune",
                            ctc: "3.1 LPA",
                          },
                          {
                            name: "Priyanka Thakare",
                            company: "Mindtree Ltd. Bangalore",
                            ctc: "2.97 LPA",
                          },
                          {
                            name: "Rasika Virdande",
                            company:
                              "Cognizant Technology Solutions India Pvt. Ltd.",
                            ctc: "3.38 LPA",
                          },
                          {
                            name: "Atharva Gharote",
                            company: "Locationguru Pvt. Ltd., Nagpur",
                            ctc: "2.8 LPA",
                          },
                          {
                            name: "Lakhan Bhaiya",
                            company: "Ness Digital Engineering, Hyderabad",
                            ctc: "5 LPA",
                          },
                          {
                            name: "Pranil Deshmukh",
                            company:
                              "DNEG India Media Services Limited, Mumbai",
                            ctc: "2.52 LPA",
                          },
                          {
                            name: "Rohit Pardhi",
                            company: "IBM India Pvt. Ltd Banglore",
                            ctc: "3.6 LPA",
                          },
                          {
                            name: "Rohit Tidke",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                          {
                            name: "Shivam Shrivastav",
                            company:
                              "Edureka Brain4ceeducation Solutions Pvt Ltd Banglore",
                            ctc: "4.48 LPA",
                          },
                          {
                            name: "Sumit Muskawar",
                            company: "Tata Consultancy Services Ltd., Pune",
                            ctc: "3.36 LPA",
                          },
                        ].map((student, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 text-center font-mono text-gray-400 text-xs">
                              {i + 1}
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-800">
                              {student.name}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {student.company}
                            </td>
                            <td className="px-6 py-4 text-right font-bold text-green-600 bg-green-50/50">
                              {student.ctc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                  <FaUniversity className="text-4xl text-gray-300 mb-4" />
                  <p className="text-gray-500 font-medium">
                    Detailed report for {placementYear} will be uploaded soon.
                  </p>
                  {["2021-22", "2018-19"].includes(placementYear) && (
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
    visits: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            Industrial Visits
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hands-on exposure to industry practices, technologies, and work
            culture through structured visits to leading organizations.
          </p>
        </div>

        {/* Table */}
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
                {[
                  {
                    sn: "01",
                    industries: ["Value Momentum, Pune", "Details Report"],
                    class: "3rd Year IT and CSE",
                    date: "20/03/2025",
                    students: "62",
                  },
                  {
                    sn: "01",
                    industries: [
                      "V. R. Jamdar Siemens Center of Excellence Nagpur",
                      "Details Report",
                    ],
                    class: "Third Year",
                    date: "23/01/2024",
                    students: "58",
                  },
                  {
                    sn: "02",
                    industries: [
                      "e-Zest , Pune",
                      "Ramakrishna IT Consultancy , Pune",
                    ],
                    class: "Third Year",
                    date: "04/10/2018 to 05/10/2018",
                    students: "50",
                  },
                  {
                    sn: "03",
                    industries: [
                      "PandayG.Com, Hyderabad",
                      "Value momentum, Hyderabad",
                    ],
                    class: "Third Year",
                    date: "06/09/2017 to 07/09/2017",
                    students: "37",
                  },
                  {
                    sn: "04",
                    industries: [
                      "Value momentum, Hyderabad",
                      "Microsoft Corporation , Hyderabad",
                    ],
                    class: "Third Year",
                    date: "23/01/2017 to 24/01/2017",
                    students: "53",
                  },
                  {
                    sn: "05",
                    industries: ["Jain Irrigation System Ltd ,Jalgaon"],
                    class: "First Year",
                    date: "06/10/2017",
                    students: "55",
                  },
                  {
                    sn: "06",
                    industries: [
                      "Microsoft Corporation , Hyderabad",
                      "Infosys, Hyderabad",
                      "Value momentum, Hyderabad",
                      "Robert Bosch, Hyderabad",
                    ],
                    class: "Third Year",
                    date: "07/03/2016 to 09/03/2016",
                    students: "32",
                  },
                  {
                    sn: "07",
                    industries: ["MRSAC, Nagpur", "Axiom TechGuru, Nagpur"],
                    class: "Second Year",
                    date: "31/08/2017",
                    students: "62",
                  },
                  {
                    sn: "08",
                    industries: [
                      "ADCC Infocad, Nagpur",
                      "Click2Cloud ,Nagpur",
                      "Kratin Software Nagpur",
                    ],
                    class: "Second Year",
                    date: "03/02/2016",
                    students: "43",
                  },
                  {
                    sn: "09",
                    industries: ["Thermal Power Station MSPGCL, Bhusawal"],
                    class: "First Year",
                    date: "14/10/2016",
                    students: "54",
                  },
                ].map((visit, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {visit.sn}
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        {visit.industries.map((ind, i) => (
                          <div
                            key={i}
                            className={
                              ind === "Details Report"
                                ? "text-ssgmce-blue hover:underline cursor-pointer"
                                : "text-gray-700"
                            }
                          >
                            {ind}
                          </div>
                        ))}
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
                    org: "Bharat Software Solutions, Pune",
                    date: "05-Apr-2025",
                    report:
                      "/uploads/documents/cse_mous/MOU_Bharat_Software_2025.pdf",
                  },
                  {
                    no: "2.",
                    org: "TRUSCHOLAR ASSET CHAIN TECHNILLIGENCE PVT LTD, AMRAVATI",
                    date: "05-APR-2025",
                    report:
                      "/uploads/documents/cse_mous/MOU_Truscholar_2025.pdf",
                  },
                  {
                    no: "3.",
                    org: "PRAGMATYC GLOBEL PVT LTD, NAGPUR",
                    date: "05-APR-2025",
                    report:
                      "/uploads/documents/cse_mous/MOU_Pragmatyc_2025.pdf",
                  },
                  {
                    no: "4.",
                    org: "MoU With Intel Unnati",
                    date: "29-MAR-2025",
                    report:
                      "/uploads/documents/cse_mous/MOU_Intel_Unnati_2025.pdf",
                  },
                  {
                    no: "5.",
                    org: "MoU With J-Navodaya Unnat Bharat",
                    date: "05-MAR-2025",
                    report:
                      "/uploads/documents/cse_mous/MOU_J_Navodaya_Unnat_Bharat_2025.pdf",
                  },
                  {
                    no: "6.",
                    org: "Bharat Software Solutions, Pune",
                    date: "21-Dec-2023",
                    report:
                      "/uploads/documents/cse_mous/MOU_Bharat_Software_2023.pdf",
                  },
                  {
                    no: "7.",
                    org: "MITU Skillogogies, Pune",
                    date: "21-Dec-2023",
                    report:
                      "/uploads/documents/cse_mous/MOU_MITU_Skillologies_2023.pdf",
                  },
                  {
                    no: "8.",
                    org: "TrueScholar- Asset Chain Techniligence Private Ltd., Amravati",
                    date: "01-June-2022",
                    report:
                      "/uploads/documents/cse_mous/MOU_TrueScholar_2022.pdf",
                  },
                  {
                    no: "9.",
                    org: "Opine Group, Pune",
                    date: "13-July-2019",
                    report:
                      "/uploads/documents/cse_mous/MOU_Opine_Group_2019.pdf",
                  },
                  {
                    no: "10.",
                    org: "e-Zest Solutions Ltd. Pune",
                    date: "06-January-2019",
                    report: "/uploads/documents/cse_mous/MOU_eZest_2019.pdf",
                  },
                  {
                    no: "11.",
                    org: "IBM India Pvt. Ltd., Pune",
                    date: "19-January-2019",
                    report: "/uploads/documents/cse_mous/MOU_IBM_2019.pdf",
                  },
                  {
                    no: "12.",
                    org: "Pi R Square Digital Solutions Pvt. Ltd., Pune",
                    date: "16-July-2018",
                    report:
                      "/uploads/documents/cse_mous/MOU_PiRSquare_2018.pdf",
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
          {["patents", "publications", "copyrights", "books"].map((tab) => (
            <button
              key={tab}
              onClick={() => setResearchTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all capitalize ${researchTab === tab ? "bg-white text-ssgmce-blue shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab === "copyrights"
                ? "Copyrights"
                : tab === "books"
                  ? "Books"
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
                  defaultPatents[researchYear],
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
                            defaultPatents[researchYear],
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
                  <div className="text-xs font-bold bg-blue-50 text-ssgmce-blue px-3 py-1 rounded-md border border-blue-100">
                    SCI:
                    <EditableText
                      value={t("publicationsSciCount", "50+")}
                      onSave={(val) => updateData("publicationsSciCount", val)}
                    />
                  </div>
                  <div className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md border border-indigo-100">
                    Scopus:
                    <EditableText
                      value={t("publicationsScopusCount", "100+")}
                      onSave={(val) =>
                        updateData("publicationsScopusCount", val)
                      }
                    />
                  </div>
                </div>
              </div>

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
                          defaultPublications[researchYear],
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
                                updatePublication(researchYear, i, "title", val)
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
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
              {(defaultCopyrights[researchYear] || []).length === 0 ? (
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
                        {(defaultCopyrights[researchYear] || []).map(
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
          ) : researchTab === "books" ? (
            <motion.div
              key="books"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center mb-2 md:mb-0">
                  <FaProjectDiagram className="text-teal-500 mr-2" />
                  Books Published
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
              {(defaultBooks[researchYear] || []).length === 0 ? (
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
                        {(defaultBooks[researchYear] || []).map((book, i) => (
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
                  <th className="px-4 py-4 text-left font-bold whitespace-nowrap">
                    SIS ID
                  </th>
                  <th className="px-4 py-4 text-left font-bold">
                    Name of Intern
                  </th>
                  <th className="px-4 py-4 text-left font-bold">
                    Name of Industry / Organization
                  </th>
                  <th className="px-4 py-4 text-left font-bold">Class</th>
                  <th className="px-4 py-4 text-left font-bold">Duration</th>
                  <th className="px-4 py-4 text-left font-bold">Stipend</th>
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
                        value={intern.sis}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "sis", val)
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
                    <td className="px-4 py-3 text-gray-700">
                      <EditableText
                        value={intern.org}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "org", val)
                        }
                        multiline
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
                        value={intern.duration}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "duration", val)
                        }
                      />
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      <EditableText
                        value={intern.stipend}
                        onSave={(val) =>
                          updateInternship(internshipYear, idx, "stipend", val)
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
                Department of Computer Science & Engineering
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
                              "News Letter 2025-26 (Volume I)",
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
              Department of Computer Science and Engineering
            </p>
          </div>

          {/* Tab Menu */}
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

          {/* Faculty Achievements Tab Content */}
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

          {/* Student Achievements Tab Content */}
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

  const SidebarLink = ({ id, label, icon: Icon }) => (
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
      title="Computer Science and Engineering"
      backgroundImage={cseBanner}
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

export default CSE;
