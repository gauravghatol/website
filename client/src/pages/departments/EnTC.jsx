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
  defaultPrideToppers,
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
} from "../../data/entcDefaults";

const EnTC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("projects");
  const [projectYear, setProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2023-24");
  const [placementYear, setPlacementYear] = useState("2023-24");
  const [expandedSemester, setExpandedSemester] = useState(null);
  const [prideTab, setPrideTab] = useState("toppers");

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
      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-ssgmce-orange pl-4">
          <EditableText
            value={t("curriculumTitle", "Curriculum & Syllabus")}
            onSave={(val) => updateField("curriculumTitle", val)}
          />
        </h3>
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
        </div>
      </div>
    ),

    hod: (
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-ssgmce-orange pl-4">
          HOD's Message
        </h3>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 text-center">
              <div className="relative inline-block group">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-md mx-auto relative z-10">
                  {isEditing ? (
                    <EditableImage
                      src={t("hod.photo", hodPhoto)}
                      alt="HOD"
                      onSave={(val) => updateData("hod.photo", val)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={t("hod.photo", hodPhoto)}
                      alt="HOD"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                {/* Decorative Pattern */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-ssgmce-orange/20 to-transparent rounded-full blur-xl -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-900">
                  <EditableText
                    value={t("hod.name", defaultHodMessage.name)}
                    onSave={(val) => updateData("hod.name", val)}
                  />
                </h4>
                <p className="text-ssgmce-blue font-medium text-sm">
                  <EditableText
                    value={t("hod.role", defaultHodMessage.role)}
                    onSave={(val) => updateData("hod.role", val)}
                  />
                </p>
                <div className="mt-3 text-sm text-gray-500 space-y-1">
                  {t("hod.email", defaultHodMessage.email) && (
                    <p className="flex items-center justify-center gap-2">
                      <FaEnvelope className="text-ssgmce-orange" />
                      <EditableText
                        value={t("hod.email", defaultHodMessage.email)}
                        onSave={(val) => updateData("hod.email", val)}
                      />
                    </p>
                  )}
                  {t("hod.phone", defaultHodMessage.phone) && (
                    <p className="flex items-center justify-center gap-2">
                      <FaPhone className="text-ssgmce-orange" />
                      <EditableText
                        value={t("hod.phone", defaultHodMessage.phone)}
                        onSave={(val) => updateData("hod.phone", val)}
                      />
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="relative bg-gray-50/50 p-6 rounded-lg border-l-4 border-ssgmce-blue italic text-gray-700 leading-relaxed text-lg">
                <FaQuoteLeft className="text-4xl text-gray-200 absolute top-4 left-4 -z-10" />
                {t("hod.message", defaultHodMessage.message).map((msg, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    <EditableText
                      value={msg}
                      onSave={(val) =>
                        updateArrayString(
                          "hod.message",
                          defaultHodMessage.message,
                          i,
                          val,
                        )
                      }
                      multiline
                    />
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newMsg = t(
                            "hod.message",
                            defaultHodMessage.message,
                          ).filter((_, idx) => idx !== i);
                          updateData("hod.message", newMsg);
                        }}
                        className="text-red-500 text-xs mt-1 block"
                      >
                        Delete Paragraph
                      </button>
                    )}
                  </p>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const newMsg = [
                        ...t("hod.message", defaultHodMessage.message),
                        "New Paragraph",
                      ];
                      updateData("hod.message", newMsg);
                    }}
                    className="px-3 py-1 bg-green-500 text-white rounded text-sm mt-2"
                  >
                    Add Paragraph
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    laboratories: (
      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Laboratories
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {t("laboratories", defaultLabs).map((lab, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow overflow-hidden group relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaDesktop className="text-6xl text-ssgmce-blue" />
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 text-ssgmce-blue rounded-lg">
                  <FaDesktop className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-ssgmce-blue transition-colors">
                    <EditableText
                      value={lab.name}
                      onSave={(val) => {
                        const newLabs = [...t("laboratories", defaultLabs)];
                        newLabs[i] = { ...newLabs[i], name: val };
                        updateData("laboratories", newLabs);
                      }}
                    />
                  </h4>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Area:</span>{" "}
                    <EditableText
                      value={lab.area}
                      onSave={(val) => {
                        const newLabs = [...t("laboratories", defaultLabs)];
                        newLabs[i] = { ...newLabs[i], area: val };
                        updateData("laboratories", newLabs);
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Major Equipment
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3 group-hover:line-clamp-none transition-all">
                    <EditableText
                      value={lab.resources}
                      onSave={(val) => {
                        const newLabs = [...t("laboratories", defaultLabs)];
                        newLabs[i] = { ...newLabs[i], resources: val };
                        updateData("laboratories", newLabs);
                      }}
                      multiline
                    />
                  </p>
                </div>
                {lab.systems && (
                  <div className="flex items-center text-xs text-gray-500 bg-blue-50 px-3 py-1 rounded-full w-fit">
                    <FaLaptopCode className="mr-2 text-ssgmce-blue" />
                    <span>
                      Systems:{" "}
                      <EditableText
                        value={lab.systems}
                        onSave={(val) => {
                          const newLabs = [...t("laboratories", defaultLabs)];
                          newLabs[i] = { ...newLabs[i], systems: val };
                          updateData("laboratories", newLabs);
                        }}
                      />
                    </span>
                  </div>
                )}
              </div>
              {isEditing && (
                <button
                  onClick={() => {
                    const newLabs = t("laboratories", defaultLabs).filter(
                      (_, idx) => idx !== i,
                    );
                    updateData("laboratories", newLabs);
                  }}
                  className="mt-4 text-red-500 text-xs font-bold hover:underline"
                >
                  Delete Lab
                </button>
              )}
            </div>
          ))}
          {isEditing && (
            <div className="col-span-full flex justify-center mt-4">
              <button
                onClick={() => {
                  const newLab = {
                    name: "New Lab",
                    area: "100 sqm",
                    systems: "10 PC",
                    resources: "Equipment list",
                  };
                  const newLabs = [...t("laboratories", defaultLabs), newLab];
                  updateData("laboratories", newLabs);
                }}
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors"
              >
                Add Laboratory
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
          <p className="text-gray-600 mt-3">
            <EditableText
              value={t(
                "courseOutcomes.subtitle",
                "Detailed course outcomes for all semesters",
              )}
              onSave={(val) => updateField("courseOutcomes.subtitle", val)}
            />
          </p>
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
        <h3 className="text-3xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Pride of the Department
        </h3>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {[
            { id: "toppers", label: "University Toppers" },
            { id: "alumni", label: "Top Alumnis of Department" },
            { id: "gate", label: "GATE Qualified" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPrideTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                prideTab === tab.id
                  ? "bg-[#003366] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* University Toppers */}
        {prideTab === "toppers" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {[
                      "Year",
                      "Name of the Student",
                      "Univ. Topper Rank",
                      "Percentage/CGPA",
                    ].map((head, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-left text-sm font-bold text-gray-700"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("pride.toppers", defaultPrideToppers).map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700 w-24">
                        <EditableText
                          value={student.year}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.toppers", defaultPrideToppers),
                            ];
                            newArr[i] = { ...newArr[i], year: val };
                            updateData("pride.toppers", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={student.name}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.toppers", defaultPrideToppers),
                            ];
                            newArr[i] = { ...newArr[i], name: val };
                            updateData("pride.toppers", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                        <EditableText
                          value={student.rank}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.toppers", defaultPrideToppers),
                            ];
                            newArr[i] = { ...newArr[i], rank: val };
                            updateData("pride.toppers", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.cgpa}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.toppers", defaultPrideToppers),
                            ];
                            newArr[i] = { ...newArr[i], cgpa: val };
                            updateData("pride.toppers", newArr);
                          }}
                        />
                      </td>
                      {isEditing && (
                        <td
                          className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                          onClick={() => {
                            const newArr = t(
                              "pride.toppers",
                              defaultPrideToppers,
                            ).filter((_, idx) => idx !== i);
                            updateData("pride.toppers", newArr);
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
            {isEditing && (
              <button
                onClick={() => {
                  const newItem = {
                    year: "2024",
                    name: "New Student",
                    rank: "I",
                    cgpa: "9.5",
                  };
                  updateData("pride.toppers", [
                    ...t("pride.toppers", defaultPrideToppers),
                    newItem,
                  ]);
                }}
                className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Add Topper
              </button>
            )}
          </div>
        )}

        {/* Top Alumnis */}
        {prideTab === "alumni" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {[
                      "Names of Alumni",
                      "Position",
                      "Names of Organisation",
                    ].map((head, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-left text-sm font-bold text-gray-700"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("pride.alumni", defaultPrideAlumni).map((alumni, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={alumni.name}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.alumni", defaultPrideAlumni),
                            ];
                            newArr[i] = { ...newArr[i], name: val };
                            updateData("pride.alumni", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={alumni.position}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.alumni", defaultPrideAlumni),
                            ];
                            newArr[i] = { ...newArr[i], position: val };
                            updateData("pride.alumni", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={alumni.org}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.alumni", defaultPrideAlumni),
                            ];
                            newArr[i] = { ...newArr[i], org: val };
                            updateData("pride.alumni", newArr);
                          }}
                        />
                      </td>
                      {isEditing && (
                        <td
                          className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                          onClick={() => {
                            const newArr = t(
                              "pride.alumni",
                              defaultPrideAlumni,
                            ).filter((_, idx) => idx !== i);
                            updateData("pride.alumni", newArr);
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
            {isEditing && (
              <button
                onClick={() => {
                  const newItem = {
                    name: "New Alumni",
                    position: "Role",
                    org: "Company",
                  };
                  updateData("pride.alumni", [
                    ...t("pride.alumni", defaultPrideAlumni),
                    newItem,
                  ]);
                }}
                className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Add Alumni
              </button>
            )}
          </div>
        )}

        {/* GATE Qualified */}
        {prideTab === "gate" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {[
                      "Year",
                      "Sr.No",
                      "Name of student",
                      "Valid Score",
                      "Category",
                    ].map((head, i) => (
                      <th
                        key={i}
                        className="px-6 py-4 text-left text-sm font-bold text-gray-700"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("pride.gate", defaultPrideGate).map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700 w-24">
                        <EditableText
                          value={student.year}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.gate", defaultPrideGate),
                            ];
                            newArr[i] = { ...newArr[i], year: val };
                            updateData("pride.gate", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 w-16">
                        <EditableText
                          value={student.sr}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.gate", defaultPrideGate),
                            ];
                            newArr[i] = { ...newArr[i], sr: val };
                            updateData("pride.gate", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={student.name}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.gate", defaultPrideGate),
                            ];
                            newArr[i] = { ...newArr[i], name: val };
                            updateData("pride.gate", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                        <EditableText
                          value={student.score}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.gate", defaultPrideGate),
                            ];
                            newArr[i] = { ...newArr[i], score: val };
                            updateData("pride.gate", newArr);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 w-24">
                        <EditableText
                          value={student.category}
                          onSave={(val) => {
                            const newArr = [
                              ...t("pride.gate", defaultPrideGate),
                            ];
                            newArr[i] = { ...newArr[i], category: val };
                            updateData("pride.gate", newArr);
                          }}
                        />
                      </td>
                      {isEditing && (
                        <td
                          className="px-6 py-4 text-sm text-red-500 cursor-pointer"
                          onClick={() => {
                            const newArr = t(
                              "pride.gate",
                              defaultPrideGate,
                            ).filter((_, idx) => idx !== i);
                            updateData("pride.gate", newArr);
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
            {isEditing && (
              <button
                onClick={() => {
                  const newItem = {
                    year: "2024",
                    sr: "1",
                    name: "New Student",
                    score: "40.00",
                    category: "OPEN",
                  };
                  updateData("pride.gate", [
                    ...t("pride.gate", defaultPrideGate),
                    newItem,
                  ]);
                }}
                className="m-4 px-4 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                Add GATE Qualified
              </button>
            )}
          </div>
        )}
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
        <div className="flex justify-between items-center border-l-4 border-ssgmce-orange pl-4 mb-6">
          <h3 className="text-3xl font-bold text-gray-800">
            <EditableText
              value={t("activities.title", "Co-Curricular Activities")}
              onSave={(val) => updateField("activities.title", val)}
            />
          </h3>
          {isEditing && (
            <button
              onClick={() => {
                const newItem = {
                  title: "New Activity",
                  date: "Date",
                  department: "EXTC Department",
                };
                updateData("activities.list", [
                  newItem,
                  ...t("activities.list", defaultActivities || []),
                ]);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 font-bold text-sm"
            >
              + Add Activity
            </button>
          )}
        </div>

        <div className="space-y-6">
          {t("activities.list", defaultActivities || []).map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative"
            >
              {isEditing && (
                <button
                  onClick={() => {
                    const newActivities = t(
                      "activities.list",
                      defaultActivities,
                    ).filter((_, idx) => idx !== i);
                    updateData("activities.list", newActivities);
                  }}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors z-10"
                  title="Delete Activity"
                >
                  Delete
                </button>
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FaProjectDiagram className="text-ssgmce-blue text-xl" />
                </div>
                <div className="flex-1 pr-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    <EditableText
                      value={activity.title}
                      onSave={(val) => {
                        const newActivities = [
                          ...t("activities.list", defaultActivities),
                        ];
                        newActivities[i] = { ...newActivities[i], title: val };
                        updateData("activities.list", newActivities);
                      }}
                      multiline
                    />
                  </h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="font-semibold text-ssgmce-blue mr-2">
                        Date:
                      </span>
                      <EditableText
                        value={activity.date}
                        onSave={(val) => {
                          const newActivities = [
                            ...t("activities.list", defaultActivities),
                          ];
                          newActivities[i] = { ...newActivities[i], date: val };
                          updateData("activities.list", newActivities);
                        }}
                      />
                    </p>
                    {activity.participants && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">
                          Participants:
                        </span>
                        <EditableText
                          value={activity.participants}
                          onSave={(val) => {
                            const newActivities = [
                              ...t("activities.list", defaultActivities),
                            ];
                            newActivities[i] = {
                              ...newActivities[i],
                              participants: val,
                            };
                            updateData("activities.list", newActivities);
                          }}
                        />
                      </p>
                    )}
                    {activity.resource && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">
                          Resource Person:
                        </span>
                        <EditableText
                          value={activity.resource}
                          onSave={(val) => {
                            const newActivities = [
                              ...t("activities.list", defaultActivities),
                            ];
                            newActivities[i] = {
                              ...newActivities[i],
                              resource: val,
                            };
                            updateData("activities.list", newActivities);
                          }}
                        />
                      </p>
                    )}
                    {activity.coordinator && (
                      <p className="flex items-center">
                        <span className="font-semibold text-gray-700 mr-2">
                          Coordinator:
                        </span>
                        <EditableText
                          value={activity.coordinator}
                          onSave={(val) => {
                            const newActivities = [
                              ...t("activities.list", defaultActivities),
                            ];
                            newActivities[i] = {
                              ...newActivities[i],
                              coordinator: val,
                            };
                            updateData("activities.list", newActivities);
                          }}
                        />
                      </p>
                    )}
                    <p className="text-gray-500 italic mt-2">
                      <EditableText
                        value={activity.department}
                        onSave={(val) => {
                          const newActivities = [
                            ...t("activities.list", defaultActivities),
                          ];
                          newActivities[i] = {
                            ...newActivities[i],
                            department: val,
                          };
                          updateData("activities.list", newActivities);
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            <p className="text-gray-600">
              <EditableText
                value={t(
                  "achievements.departmentSubtitle",
                  "Excellence in Academics, Research, and Innovation",
                )}
                onSave={(val) =>
                  updateField("achievements.departmentSubtitle", val)
                }
              />
            </p>
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
                <p className="text-gray-600">
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
                </p>
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
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Placements
        </h3>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          {Object.entries(t("placements", defaultPlacements)).map(
            ([year, data], i) => (
              <div key={i} className="mb-8 last:mb-0">
                <h4 className="text-xl font-bold text-ssgmce-blue mb-4">
                  Batch {year}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      <EditableText
                        value={data.placed.toString()}
                        onSave={(val) =>
                          updateField(`placements.${year}.placed`, val)
                        }
                      />
                    </div>
                    <div className="text-sm text-gray-500">Placed</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      <EditableText
                        value={data.offers.toString()}
                        onSave={(val) =>
                          updateField(`placements.${year}.offers`, val)
                        }
                      />
                    </div>
                    <div className="text-sm text-gray-500">Offers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      <EditableText
                        value={data.highestPackage}
                        onSave={(val) =>
                          updateField(`placements.${year}.highestPackage`, val)
                        }
                      />
                    </div>
                    <div className="text-sm text-gray-500">Highest Pkg</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">
                      <EditableText
                        value={data.averagePackage}
                        onSave={(val) =>
                          updateField(`placements.${year}.averagePackage`, val)
                        }
                      />
                    </div>
                    <div className="text-sm text-gray-500">Avg Pkg</div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-gray-700 mb-2">
                    Top Recruiters:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {data.topRecruiters.map((rec, rIdx) => (
                      <span
                        key={rIdx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
                      >
                        <EditableText
                          value={rec}
                          onSave={(val) => {
                            const newRecs = [...data.topRecruiters];
                            newRecs[rIdx] = val;
                            updateData(
                              `placements.${year}.topRecruiters`,
                              newRecs,
                            );
                          }}
                        />
                        {isEditing && (
                          <button
                            onClick={() => {
                              const newRecs = data.topRecruiters.filter(
                                (_, idx) => idx !== rIdx,
                              );
                              updateData(
                                `placements.${year}.topRecruiters`,
                                newRecs,
                              );
                            }}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors ml-2"
                            title="Remove recruiter"
                          >
                            Remove
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <button
                        onClick={() => {
                          updateData(`placements.${year}.topRecruiters`, [
                            ...data.topRecruiters,
                            "New Recruiter",
                          ]);
                        }}
                        className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm hover:bg-gray-200"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    ),

    newsletter: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-ssgmce-orange pl-4">
          Newsletters
        </h3>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Latest Issue
            </h4>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h5 className="text-lg font-bold text-ssgmce-blue mb-2">
                <EditableText
                  value={t(
                    "newsletters.latest.vol",
                    defaultNewsletters.latest.vol,
                  )}
                  onSave={(val) => updateField("newsletters.latest.vol", val)}
                />
              </h5>
              <p className="text-gray-700 mb-4">
                <EditableText
                  value={t(
                    "newsletters.latest.highlights",
                    defaultNewsletters.latest.highlights,
                  )}
                  onSave={(val) =>
                    updateField("newsletters.latest.highlights", val)
                  }
                  multiline
                />
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors"
              >
                <FaDownload className="mr-2" /> Download PDF
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Archives</h4>
            <div className="space-y-3">
              {t("newsletters.archives", defaultNewsletters.archives).map(
                (arch, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors relative"
                  >
                    <div>
                      <div className="font-bold text-gray-800">
                        <EditableText
                          value={arch.vol}
                          onSave={(val) => {
                            const newArch = [
                              ...t(
                                "newsletters.archives",
                                defaultNewsletters.archives,
                              ),
                            ];
                            newArch[i] = { ...newArch[i], vol: val };
                            updateData("newsletters.archives", newArch);
                          }}
                        />
                      </div>
                      <div className="text-sm text-gray-500">
                        <EditableText
                          value={arch.date}
                          onSave={(val) => {
                            const newArch = [
                              ...t(
                                "newsletters.archives",
                                defaultNewsletters.archives,
                              ),
                            ];
                            newArch[i] = { ...newArch[i], date: val };
                            updateData("newsletters.archives", newArch);
                          }}
                        />
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-ssgmce-blue hover:text-ssgmce-dark-blue"
                    >
                      <FaDownload />
                    </a>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const newArch = t(
                            "newsletters.archives",
                            defaultNewsletters.archives,
                          ).filter((_, idx) => idx !== i);
                          updateData("newsletters.archives", newArch);
                        }}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md transition-colors"
                        title="Remove newsletter"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ),
              )}
              {isEditing && (
                <button
                  onClick={() => {
                    const newItem = {
                      vol: "Vol X",
                      term: "Term X",
                      date: "Date",
                    };
                    updateData("newsletters.archives", [
                      ...t("newsletters.archives", defaultNewsletters.archives),
                      newItem,
                    ]);
                  }}
                  className="w-full py-2 bg-gray-100 text-gray-500 rounded hover:bg-gray-200"
                >
                  + Archive
                </button>
              )}
            </div>
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
