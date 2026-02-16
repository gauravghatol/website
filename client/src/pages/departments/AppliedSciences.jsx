import React, { useState, useEffect } from "react";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import appliedSciencesBanner from "../../assets/images/departments/applied-sciences/banner.png";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
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
  FaBook,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaPlus,
  FaTrash,
  FaPalette,
  FaUpload,
} from "react-icons/fa";

// Import HOD Photo
import hodPhoto from "../../assets/images/departments/applied-sciences/ASH_HOD_AST.jpg";

// Import Faculty Photos
import astPhoto from "../../assets/images/departments/applied-sciences/faculty/AST.jpg";
import avpPhoto from "../../assets/images/departments/applied-sciences/faculty/AVP.jpeg";
import rmkPhoto from "../../assets/images/departments/applied-sciences/faculty/RMK.jpg";
import nstPhoto from "../../assets/images/departments/applied-sciences/faculty/NST.jpg";
import asaPhoto from "../../assets/images/departments/applied-sciences/faculty/ASA.jpeg";
import hspPhoto from "../../assets/images/departments/applied-sciences/faculty/HSP_new1.jpg";
import kpdPhoto from "../../assets/images/departments/applied-sciences/faculty/KPD.jpg";
import svbPhoto from "../../assets/images/departments/applied-sciences/faculty/SVB.jpg";
import rutikaPhoto from "../../assets/images/departments/applied-sciences/faculty/Rutika_Raut.jpg";
import mspandePhoto from "../../assets/images/departments/applied-sciences/faculty/MSpande.jpg";
import jsgPhoto from "../../assets/images/departments/applied-sciences/faculty/JSG.jpeg";
import glbPhoto from "../../assets/images/departments/applied-sciences/faculty/GLB.jpg";

const APPLIED_DEFAULT_FACULTY = [
  {
    name: "Dr. A. S. Tate",
    role: "HOD & Associate Professor",
    area: ["Solid State Physics"],
    email: "astale@ssgmce.ac.in",
    phone: "+91 9960593094",
    photo: astPhoto,
  },
  {
    name: "Mr. A. V. Patil",
    role: "Associate Professor and Registrar",
    area: ["Organic Chemistry", "Environmental Chemistry"],
    email: "avpatil@ssgmce.ac.in",
    phone: "+91 7020904900",
    photo: avpPhoto,
  },
  {
    name: "Dr. R. M. Kharate",
    role: "Associate Professor",
    area: ["Synthetic Organic Chemistry", "Environmental Chemistry"],
    email: "rmkharate@ssgmce.ac.in",
    phone: "+91 9194234822",
    photo: rmkPhoto,
  },
  {
    name: "Mr N. S. Thakare",
    role: "Asst. Professor",
    area: ["Integral Transform"],
    email: "nsthakare@ssgmce.ac.in",
    phone: "+91 9198815284",
    photo: nstPhoto,
  },
  {
    name: "Mr. A. S. Alane",
    role: "Asst. Professor",
    area: ["Chemistry"],
    email: "asalane@ssgmce.ac.in",
    phone: "+91 9195036309",
    photo: asaPhoto,
  },
  {
    name: "Mrs. H.S. Patil",
    role: "SGBAU Certified Soft Skills Trainer",
    area: [
      "Assistant Professor (Communication Skills)",
      "Anchoring Formal/Informal Event",
      "English Communication Skills, HR & Marketing, IMQC",
    ],
    email: "hspatil@ssgmce.ac.in",
    phone: "+91 7038027303",
    photo: hspPhoto,
  },
  {
    name: "Ms. K.P. Deshmukh",
    role: "Asst. Professor",
    area: ["Pure Mathematics"],
    email: "kpdeshmukh@ssgmce.ac.in",
    phone: "+91 9186050771",
    photo: kpdPhoto,
  },
  {
    name: "Mr. S. V. Bhagat",
    role: "Asst. Professor",
    area: [
      "English Language",
      "English Litereture",
      "Soft Skills",
      "Business Communication",
      "Communication Skills",
    ],
    email: "sachinvbhagat@ssgmce.ac.in",
    phone: "+91 9922127385",
    photo: svbPhoto,
  },
  {
    name: "Ms. Rutika Raut",
    role: "Asst. Professor",
    area: ["Material Science"],
    email: "rgraut@ssgmce.ac.in",
    phone: "+91 9407347770",
    photo: rutikaPhoto,
  },
  {
    name: "Dr. Mrs. M. S. Pande",
    role: "Asst. Professor",
    area: ["X-Rays", "Solid state Physics"],
    email: "mspande@ssgmce.ac.in",
    phone: "+91 9890850530",
    photo: mspandePhoto,
  },
  {
    name: "Dr. J. S. Gawande",
    role: "Asst. Professor",
    area: [
      "Differential Equations",
      "Numerical Methods",
      "Partial Differential Equations",
      "Integral Transforms",
    ],
    email: "jsgawande@ssgmce.ac.in",
    phone: "+91 7798378604",
    photo: jsgPhoto,
  },
];

const AppliedSciences = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("projects");
  const [projectYear, setProjectYear] = useState("2023-24");

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    t,
  } = useDepartmentData("departments-applied-sciences");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
  };

  const updateFacultyMember = (index, field, value) => {
    const faculty = JSON.parse(
      JSON.stringify(t("templateData.faculty", APPLIED_DEFAULT_FACULTY)),
    );
    faculty[index] = { ...faculty[index], [field]: value };
    updateField("templateData.faculty", faculty);
  };

  // Default subject categories
  const DEFAULT_SUBJECT_CATEGORIES = [
    {
      title: "Mathematics",
      borderColor: "#FF6B35",
      titleColor: "#004E89",
      bulletColor: "#FF6B35",
      subjects: [
        "Engineering Mathematics I-IV",
        "Numerical Methods",
        "Statistical Methods",
        "Operation Research",
      ],
    },
    {
      title: "Physics",
      borderColor: "#22C55E",
      titleColor: "#15803D",
      bulletColor: "#22C55E",
      subjects: ["Engineering Physics (Theory)", "Applied Physics Practical"],
    },
    {
      title: "Chemistry",
      borderColor: "#A855F7",
      titleColor: "#7E22CE",
      bulletColor: "#A855F7",
      subjects: [
        "Engineering Chemistry (Theory)",
        "Applied Chemistry Practical",
      ],
    },
    {
      title: "Humanities",
      borderColor: "#F97316",
      titleColor: "#C2410C",
      bulletColor: "#F97316",
      subjects: [
        "Communication Skill",
        "Principles of Management",
        "Social Science and Economics",
      ],
    },
  ];

  // Subject category management functions
  const updateSubjectCategory = (index, field, value) => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories[index] = { ...categories[index], [field]: value };
    updateField("templateData.subjects.categories", categories);
  };

  const updateSubjectInCategory = (categoryIndex, subjectIndex, value) => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories[categoryIndex].subjects[subjectIndex] = value;
    updateField("templateData.subjects.categories", categories);
  };

  const addSubjectCategory = () => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories.push({
      title: "New Subject Category",
      borderColor: "#3B82F6",
      titleColor: "#1E40AF",
      bulletColor: "#3B82F6",
      subjects: ["New Subject"],
    });
    updateField("templateData.subjects.categories", categories);
  };

  const removeSubjectCategory = (index) => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories.splice(index, 1);
    updateField("templateData.subjects.categories", categories);
  };

  const addSubjectToCategory = (categoryIndex) => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories[categoryIndex].subjects.push("New Subject");
    updateField("templateData.subjects.categories", categories);
  };

  const removeSubjectFromCategory = (categoryIndex, subjectIndex) => {
    const categories = JSON.parse(
      JSON.stringify(
        t("templateData.subjects.categories", DEFAULT_SUBJECT_CATEGORIES),
      ),
    );
    categories[categoryIndex].subjects.splice(subjectIndex, 1);
    updateField("templateData.subjects.categories", categories);
  };

  // Default curriculum items
  const DEFAULT_CURRICULUM_ITEMS = [
    { label: "NEP Scheme", link: "#", fileName: null, fileUrl: null },
    {
      label: "Syllabus of ASH (1st Sem - 2nd Sem)",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label:
        "Syllabus of ASH (1st Sem - 2nd Sem) Notification No. 148 of 2024 (Extra Ordinary)",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Engineering Mathematics - I Syllabus",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Engineering Mathematics - II Syllabus",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Engineering Physics Syllabus",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Engineering Chemistry Syllabus",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Communication Skills Syllabus",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
  ];

  // Curriculum management state and functions
  const [selectedCurriculumItems, setSelectedCurriculumItems] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState({});

  const updateCurriculumItem = (index, field, value) => {
    const items = JSON.parse(
      JSON.stringify(
        t("templateData.curriculum.items", DEFAULT_CURRICULUM_ITEMS),
      ),
    );
    items[index] = { ...items[index], [field]: value };
    updateField("templateData.curriculum.items", items);
  };

  const addCurriculumItem = () => {
    const items = JSON.parse(
      JSON.stringify(
        t("templateData.curriculum.items", DEFAULT_CURRICULUM_ITEMS),
      ),
    );
    items.push({
      label: "New Syllabus Item",
      link: "#",
      fileName: null,
      fileUrl: null,
    });
    updateField("templateData.curriculum.items", items);
  };

  const uploadCurriculumFile = async (index, file) => {
    if (!file) return;

    setUploadingFiles((prev) => ({ ...prev, [index]: true }));

    try {
      const formData = new FormData();
      formData.append("image", file);

      const token = localStorage.getItem("adminToken");
      const response = await axios.post("/api/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        updateCurriculumItem(index, "fileUrl", response.data.data.url);
        updateCurriculumItem(
          index,
          "fileName",
          response.data.data.originalName,
        );
        updateCurriculumItem(index, "link", response.data.data.url);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setUploadingFiles((prev) => ({ ...prev, [index]: false }));
    }
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      uploadCurriculumFile(index, file);
    } else {
      alert("Please select a PDF file.");
    }
  };

  const removeCurriculumItem = (index) => {
    const items = JSON.parse(
      JSON.stringify(
        t("templateData.curriculum.items", DEFAULT_CURRICULUM_ITEMS),
      ),
    );
    items.splice(index, 1);
    updateField("templateData.curriculum.items", items);
    setSelectedCurriculumItems(
      selectedCurriculumItems.filter((i) => i !== index),
    );
  };

  const toggleCurriculumSelection = (index) => {
    if (selectedCurriculumItems.includes(index)) {
      setSelectedCurriculumItems(
        selectedCurriculumItems.filter((i) => i !== index),
      );
    } else {
      setSelectedCurriculumItems([...selectedCurriculumItems, index]);
    }
  };

  const toggleAllCurriculumItems = () => {
    const items = t("templateData.curriculum.items", DEFAULT_CURRICULUM_ITEMS);
    if (selectedCurriculumItems.length === items.length) {
      setSelectedCurriculumItems([]);
    } else {
      setSelectedCurriculumItems(items.map((_, i) => i));
    }
  };

  const deleteSelectedCurriculumItems = () => {
    const items = JSON.parse(
      JSON.stringify(
        t("templateData.curriculum.items", DEFAULT_CURRICULUM_ITEMS),
      ),
    );
    const newItems = items.filter(
      (_, i) => !selectedCurriculumItems.includes(i),
    );
    updateField("templateData.curriculum.items", newItems);
    setSelectedCurriculumItems([]);
  };

  const [researchYear, setResearchYear] = useState("2023-24");
  const [placementYear, setPlacementYear] = useState("2023-24");
  const [visibleCourseSem, setVisibleCourseSem] = useState(null);

  const academicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "subjects", label: "Subject Taught @ Department" },
    { id: "curriculum", label: "Scheme and Syllabus" },
    { id: "laboratories", label: "Infrastructure and Labs" },
    { id: "activities", label: "Activities @ Department" },
    { id: "achievements", label: "Achievements" },
    { id: "pride", label: "Pride of the Department" },
    { id: "orientation", label: "Student Orientation and Induction Program" },
    { id: "course-material", label: "Course Material" },
    { id: "course-outcome", label: "Course Outcome" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const industryLinks = [
    { id: "workshops", label: "Workshops & Seminars" },
    { id: "collaborations", label: "Research Collaborations" },
    { id: "publications", label: "Publications" },
    { id: "outreach", label: "Community Outreach" },
  ];

  const content = {
    overview: (
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2 w-fit">
              Department Overview
            </h3>

            {/* Department Image - Placeholder */}
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
                title="Department of Applied Sciences and Humanities"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-5">
              <div>
                <EditableText
                  value={t(
                    "templateData.overview.para1",
                    "Applied Science is a bridge that connects Pure Sciences with the engineering world. The mission of the department is to generate human resource of excellent quality, with high professional competency in interdisciplinary research encompassing mathematics, chemistry, and physics for the national needs.",
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
                    "Department of Applied Science consists of Engineering Mathematics, Engineering Physics, Engineering Chemistry, and Humanities & Communication Skills, which are part of post-graduate/under-graduate and started functioning since academic year 1983-84.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para2", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>

              <div className="text-base">
                <EditableText
                  value={t(
                    "templateData.overview.para3",
                    "Department of Applied Science consists of <strong>Engineering Mathematics</strong>, <strong>Engineering Physics</strong>, <strong>Engineering Chemistry</strong>, and <strong>Humanities & Communication Skills</strong>, which are part of post-graduate/under-graduate and started functioning since academic year <strong>1983-84</strong>. All the above subjects are compulsory. Mathematics is the backbone of all Engineering Sciences. Hence a lot of attention is given on Mathematics in engineering education. Engineering Mathematics is for first, second, third year and master of engineering curriculum whereas Engineering Physics and Engineering Chemistry are only for first year engineering and Humanities & Communication skills are for third year engineering. The department has three well equipped laboratories namely <strong>Physics</strong>, <strong>Chemistry</strong> and <strong>Communication Skill</strong>. The department is having <strong>Four Ph.D.</strong>, <strong>Six M. Phil.</strong> and Three faculties are pursuing their Ph.D., while one of the faculty has submitted Ph.D. Thesis. The departments having <strong>two Professors</strong>, <strong>three Associate Professors</strong> and <strong>seven Assistant Professors</strong>.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para3", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>

              <div className="text-base">
                <EditableText
                  value={t(
                    "templateData.overview.para4",
                    "The department has its own monitoring system namely <strong>Counselors Teacher Scheme</strong> which looks after the attendance, academic performance and other extracurricular activities of students are monitored regularly and the reports are sent to the parents from time to time. In addition to university final examinations, unit tests, Teacher Evaluation components are conducted. Different types of competitions, guest lectures, sports and cultural programs are organized. Experienced and qualified faculties take a lot of efforts relentlessly which gives excellent results. The result of the students has gained first positions in the university.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para4", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>

              <div className="text-base">
                <EditableText
                  value={t(
                    "templateData.overview.para5",
                    "Keeping in view the recent developments in Science and the present needs in Industries, the curriculum of Engineering Chemistry, Physics has been revised so that the Engineers/ Technicians may have a better knowledge of basis Sciences, especially regarding the application of the subject in various fields of Industries. An emphasis, in this direction, has been made in the curriculum, a good knowledge of Engineering Chemistry and Engineering Physics is therefore a necessity for the success of engineers majoring in various disciplines. These sciences foster technology, which is why all technical educational institutions have chemistry in all their courses. These subjects are taught in the First Year of Engineering to all the branches.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para5", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>

              <div className="text-base">
                <EditableText
                  value={t(
                    "templateData.overview.para6",
                    "The phenomenal progress of technology in the twentieth century has brought dramatically changes in human lifestyles especially with reference to housing, personal comforts, transportation and health care. The technology, which has thus enhanced the quality of human life, is based on scientific research, primarily in chemistry. The need for sustainable development is a key to the future of mankind. Continuing the problems of pollution, loss of forest, solid waste disposal, degradation of environment, issues of economic productivity and national security, and warning about global warming, the depletion of ozone layer and loss of biodiversity have made everyone aware of environmental issues. Recognizing the significance of the Environmental Studies, this subject has introduced at the Second Year Degree Courses in all the faculties. Genuine endeavor is required to minimize the gaps by intellectual and material inputs. The success of this course will depend on the initiative and drive of the teachers and the receptive students.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.overview.para6", val)
                  }
                  multiline={true}
                  className="w-full"
                />
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-end">
                <div>
                  <p className="font-semibold text-gray-800">
                    <EditableText
                      value={t(
                        "templateData.overview.hodSignature",
                        "Dr. A. S. Tate,",
                      )}
                      onSave={(val) =>
                        updateField("templateData.overview.hodSignature", val)
                      }
                      className="inline"
                    />
                  </p>
                  <p className="text-gray-600 text-sm">
                    <EditableText
                      value={t(
                        "templateData.overview.hodTitle",
                        "Head, Dept. of Applied Sciences and Humanities",
                      )}
                      onSave={(val) =>
                        updateField("templateData.overview.hodTitle", val)
                      }
                    />
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "templateData.overview.collegeName1",
                        "Shri Sant Gajanan Maharaj",
                      )}
                      onSave={(val) =>
                        updateField("templateData.overview.collegeName1", val)
                      }
                    />
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "templateData.overview.collegeName2",
                        "College of Engineering, Shegaon",
                      )}
                      onSave={(val) =>
                        updateField("templateData.overview.collegeName2", val)
                      }
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    "vision-mission": (
      <div className="space-y-6">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setVmTab("vision")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              vmTab === "vision"
                ? "bg-ssgmce-blue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Vision
          </button>
          <button
            onClick={() => setVmTab("mission")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              vmTab === "mission"
                ? "bg-ssgmce-blue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setVmTab("peo-po")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              vmTab === "peo-po"
                ? "bg-ssgmce-blue text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            PEO & PO
          </button>
        </div>

        <AnimatePresence mode="wait">
          {vmTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-l-4 border-ssgmce-orange"
            >
              <div className="flex items-start w-full">
                <FaBullseye className="text-4xl text-ssgmce-orange mr-4 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    <EditableText
                      value={t("visionTitle", "Our Vision")}
                      onSave={(val) => updateField("visionTitle", val)}
                    />
                  </h3>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    <EditableText
                      value={t(
                        "vision",
                        "To provide a strong foundation in basic sciences and humanities, nurturing well-rounded engineering professionals with scientific temper and ethical values.",
                      )}
                      onSave={(val) => updateField("vision", val)}
                      multiline
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {vmTab === "mission" && (
            <motion.div
              key="mission"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg border-l-4 border-orange-600"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h3>
              <ul className="space-y-3">
                {[
                  "Impart quality education in basic sciences, mathematics, and humanities",
                  "Develop scientific thinking and analytical skills in students",
                  "Foster effective communication and soft skills for professional growth",
                  "Promote ethical values and social responsibility",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaAngleRight className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {vmTab === "peo-po" && (
            <motion.div
              key="peo-po"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setPoTab("peo")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    poTab === "peo"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Program Educational Objectives (PEO)
                </button>
                <button
                  onClick={() => setPoTab("po")}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    poTab === "po"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Program Outcomes (PO)
                </button>
              </div>

              {poTab === "peo" && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Program Educational Objectives
                  </h4>
                  <p className="text-gray-600 mb-4 italic">
                    Content will be updated soon.
                  </p>
                </div>
              )}

              {poTab === "po" && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Program Outcomes
                  </h4>
                  <p className="text-gray-600 mb-4 italic">
                    Content will be updated soon.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
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
                      src={t("templateData.hod.photo", hodPhoto)}
                      onSave={(url) =>
                        updateField("templateData.hod.photo", url)
                      }
                      alt="HOD Applied Sciences"
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  <EditableText
                    value={t("templateData.hod.name", "Dr. A. S. Tate")}
                    onSave={(val) => updateField("templateData.hod.name", val)}
                  />
                </h3>
                <p className="text-ssgmce-blue font-bold text-sm mt-1 uppercase tracking-wide">
                  <EditableText
                    value={t(
                      "templateData.hod.designation",
                      "Head of Department",
                    )}
                    onSave={(val) =>
                      updateField("templateData.hod.designation", val)
                    }
                  />
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  <EditableText
                    value={t(
                      "templateData.hod.department",
                      "Applied Sciences and Humanities",
                    )}
                    onSave={(val) =>
                      updateField("templateData.hod.department", val)
                    }
                  />
                </p>

                <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-ssgmce-orange" />
                    <EditableText
                      value={t("templateData.hod.email", "astale@ssgmce.ac.in")}
                      onSave={(val) =>
                        updateField("templateData.hod.email", val)
                      }
                    />
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-ssgmce-orange" />
                    <EditableText
                      value={t("templateData.hod.phone", "+91 9960593094")}
                      onSave={(val) =>
                        updateField("templateData.hod.phone", val)
                      }
                    />
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-ssgmce-blue rounded-full text-xs font-bold">
                    <EditableText
                      value={t(
                        "templateData.hod.specialization",
                        "Solid State Physics",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.specialization", val)
                      }
                    />
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-ssgmce-blue rounded-full text-xs font-bold">
                    <EditableText
                      value={t(
                        "templateData.hod.qualification",
                        "Associate Professor",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.qualification", val)
                      }
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
                    value={t(
                      "templateData.hod.message1",
                      "Department of Applied Science consists of <strong>Engineering Mathematics, Engineering Physics, Engineering Chemistry, and Humanities & Communication Skills</strong>, which are part of engineering undergraduate courses and started functioning since academic year 1983-84. All the above subjects are compulsory. Mathematics is the backbone of all Engineering Sciences.",
                    )}
                    onSave={(val) =>
                      updateField("templateData.hod.message1", val)
                    }
                    multiline={true}
                    className="w-full"
                  />
                </div>

                <div className="text-base">
                  <EditableText
                    value={t(
                      "templateData.hod.message2",
                      "Hence a lot of attention is given on Mathematics in engineering education. <strong>Engineering Mathematics</strong> is for first, second, third year and master of engineering curriculum whereas <strong>Engineering Physics</strong> and <strong>Engineering Chemistry</strong> are only for first year engineering and <strong>Humanities & Communication skills</strong> are for third year engineering.",
                    )}
                    onSave={(val) =>
                      updateField("templateData.hod.message2", val)
                    }
                    multiline={true}
                    className="w-full"
                  />
                </div>

                <div className="text-base">
                  <EditableText
                    value={t(
                      "templateData.hod.message3",
                      "The department has three well equipped laboratories namely <strong>Physics, Chemistry and Communication Skill</strong>. The department is having <strong>Four Ph.D., Six M. Phil.</strong> and <strong>Three faculties are pursuing their Ph.D.</strong>, while one of the faculty has submitted Ph.D. Thesis. The departments have <strong>two Professors, three Associate Professors and seven Assistant Professors</strong>.",
                    )}
                    onSave={(val) =>
                      updateField("templateData.hod.message3", val)
                    }
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
                        "templateData.hod.signatureName",
                        "Dr. A. S. Tate",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.signatureName", val)
                      }
                    />
                  </p>
                  <p className="text-sm text-gray-600">
                    <EditableText
                      value={t(
                        "templateData.hod.signatureTitle",
                        "Head, Dept. of Applied Sciences and Engineering",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.signatureTitle", val)
                      }
                    />
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "templateData.hod.collegeNameLine1",
                        "Shri Sant Gajanan Maharaj",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.collegeNameLine1", val)
                      }
                    />
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    <EditableText
                      value={t(
                        "templateData.hod.collegeNameLine2",
                        "College of Engineering, Shegaon",
                      )}
                      onSave={(val) =>
                        updateField("templateData.hod.collegeNameLine2", val)
                      }
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
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Infrastructure and Labs
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* Labs Grid */}
        <div className="space-y-8">
          {[
            {
              name: "Engineering Physics Lab",
              color: "blue",
              photo: "Physics Lab Photo",
              resources:
                "Cathode Ray Oscilloscope, Function Generator, Hall effect setup, Newton's Ring apparatus, Laser",
            },
            {
              name: "Engineering Chemistry Lab",
              color: "green",
              photo: "Chemistry Lab Photo",
              resources:
                "Digital Oven, Furnace, Redwood Viscometer, Pensky's Martin Flash point apparatus, Freeze, Microwave Oven",
            },
            {
              name: "Language Lab",
              color: "purple",
              photo: "Language Lab Photo",
              resources:
                "Equipped with :International Lingua-phone Kit, ETNL Software, Lenovo Think Centre Desktop Computer System, Headphone with mike, DVD Writer, Cable Switch J.E. 0064, CISCO LINK Sport Switch, UPS: 5 KVA WITH BATTERIES (Two in number)",
            },
          ].map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-6">
                {/* Photo Section */}
                <div className="md:col-span-2 bg-gradient-to-br from-gray-100 to-gray-50 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`w-32 h-32 mx-auto bg-${lab.color}-100 rounded-full flex items-center justify-center mb-4`}
                    >
                      <FaLaptopCode
                        className={`text-6xl text-${lab.color}-600`}
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">
                      Laboratory Photo
                    </p>
                  </div>
                </div>

                {/* Details Section */}
                <div className="md:col-span-3 p-6">
                  <h3
                    className={`text-2xl font-bold text-${lab.color}-700 mb-4 pb-2 border-b-2 border-${lab.color}-200`}
                  >
                    {lab.name}
                  </h3>
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      {lab.resources}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">Our Faculty</h3>
          <p className="text-gray-500 mt-2">
            Department of Applied Sciences and Humanities
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("templateData.faculty", APPLIED_DEFAULT_FACULTY).map((fac, i) => (
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
                  <EditableText
                    value={fac.name}
                    onSave={(val) => updateFacultyMember(i, "name", val)}
                  />
                </h4>
                <p className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                  <EditableText
                    value={fac.role}
                    onSave={(val) => updateFacultyMember(i, "role", val)}
                  />
                </p>

                {/* Compact Details */}
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
                      <span className="flex items-center hover:text-ssgmce-blue transition-colors text-xs">
                        <FaPhone className="mr-2 text-gray-400" />
                        <EditableText
                          value={fac.phone}
                          onSave={(val) => updateFacultyMember(i, "phone", val)}
                        />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),

    subjects: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Subject Taught @ Department
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-8 md:p-10">
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg text-justify">
                <EditableText
                  value={t(
                    "templateData.subjects.intro1",
                    "The department is involved in teaching subjects of <strong>Applied Sciences</strong> and <strong>Humanities</strong> to under graduate level. It has started in <strong>1983</strong>. In this department applied physics and applied chemistry practical are conducted to make students more perfect in basic sciences, which helps them in further studies.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.subjects.intro1", val)
                  }
                  multiline={true}
                />
              </p>

              <p className="text-lg text-justify">
                <EditableText
                  value={t(
                    "templateData.subjects.intro2",
                    "Besides teaching the subject likes <strong>Engineering Physics</strong> <strong>Engineering Chemistry</strong> <strong>Engineering Mathematics-I</strong> <strong>Engineering Mathematics-II</strong> <strong>Engineering Mathematics-III</strong> <strong>Engineering Mathematics-IV</strong> <strong>Numerical Methods</strong> <strong>Statistical Methods</strong> <strong>Operation Research</strong> <strong>Communication Skill</strong> <strong>Principles of Management</strong> <strong>Social Science and Economics</strong> The department is concerned with the overall development of the newly admitted students in BE first year.",
                  )}
                  onSave={(val) =>
                    updateField("templateData.subjects.intro2", val)
                  }
                  multiline={true}
                />
              </p>
            </div>
          </div>

          {/* Subject Categories */}
          <div className="p-8 md:p-10 bg-gray-50 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              {t(
                "templateData.subjects.categories",
                DEFAULT_SUBJECT_CATEGORIES,
              ).map((category, catIndex) => (
                <div key={catIndex} className="space-y-6">
                  <div
                    className="bg-white p-6 rounded-lg shadow-sm border-l-4 relative"
                    style={{ borderLeftColor: category.borderColor }}
                  >
                    {isEditing && (
                      <div className="absolute top-2 right-2 flex gap-2">
                        <div className="relative group/colors">
                          <button
                            className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-50 transition-colors"
                            title="Change Colors"
                          >
                            <FaPalette className="text-sm" />
                          </button>
                          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10 opacity-0 invisible group-hover/colors:opacity-100 group-hover/colors:visible transition-all min-w-[200px]">
                            <div className="space-y-3">
                              <div>
                                <label className="text-xs font-semibold text-gray-600 block mb-1">
                                  Border Color
                                </label>
                                <input
                                  type="color"
                                  value={category.borderColor}
                                  onChange={(e) =>
                                    updateSubjectCategory(
                                      catIndex,
                                      "borderColor",
                                      e.target.value,
                                    )
                                  }
                                  className="w-full h-8 rounded cursor-pointer"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-semibold text-gray-600 block mb-1">
                                  Title Color
                                </label>
                                <input
                                  type="color"
                                  value={category.titleColor}
                                  onChange={(e) =>
                                    updateSubjectCategory(
                                      catIndex,
                                      "titleColor",
                                      e.target.value,
                                    )
                                  }
                                  className="w-full h-8 rounded cursor-pointer"
                                />
                              </div>
                              <div>
                                <label className="text-xs font-semibold text-gray-600 block mb-1">
                                  Bullet Color
                                </label>
                                <input
                                  type="color"
                                  value={category.bulletColor}
                                  onChange={(e) =>
                                    updateSubjectCategory(
                                      catIndex,
                                      "bulletColor",
                                      e.target.value,
                                    )
                                  }
                                  className="w-full h-8 rounded cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeSubjectCategory(catIndex)}
                          className="text-red-500 hover:text-red-700 p-2 rounded hover:bg-red-50 transition-colors"
                          title="Remove Category"
                        >
                          <FaTrash className="text-sm" />
                        </button>
                      </div>
                    )}
                    <h3
                      className="text-xl font-bold mb-4 flex items-center"
                      style={{ color: category.titleColor }}
                    >
                      <FaLightbulb className="mr-3" />
                      <EditableText
                        value={category.title}
                        onSave={(val) =>
                          updateSubjectCategory(catIndex, "title", val)
                        }
                      />
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {category.subjects.map((subject, subIndex) => (
                        <li key={subIndex} className="flex items-start group">
                          <span
                            className="mr-2 mt-1"
                            style={{ color: category.bulletColor }}
                          >
                            •
                          </span>
                          <span className="flex-1">
                            <EditableText
                              value={subject}
                              onSave={(val) =>
                                updateSubjectInCategory(catIndex, subIndex, val)
                              }
                            />
                          </span>
                          {isEditing && (
                            <button
                              onClick={() =>
                                removeSubjectFromCategory(catIndex, subIndex)
                              }
                              className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Remove Subject"
                            >
                              <FaTrash className="text-xs" />
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                    {isEditing && (
                      <button
                        onClick={() => addSubjectToCategory(catIndex)}
                        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold"
                      >
                        <FaPlus /> Add Subject
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isEditing && (
              <div className="mt-8 text-center">
                <button
                  onClick={addSubjectCategory}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md"
                >
                  <FaPlus /> Add Subject Category
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ),

    curriculum: (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            Scheme and Syllabus
          </h3>
          {isEditing && (
            <div className="flex gap-2">
              {selectedCurriculumItems.length > 0 && (
                <button
                  onClick={deleteSelectedCurriculumItems}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
                >
                  <FaTrash /> Delete Selected ({selectedCurriculumItems.length})
                </button>
              )}
              <button
                onClick={addCurriculumItem}
                className="flex items-center gap-2 px-4 py-2 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
              >
                <FaPlus /> Add Item
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Applied Sciences Section */}
          <div className="grid md:grid-cols-12 border-b border-gray-200">
            <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
              <div className="flex items-center gap-3 w-full">
                {isEditing && (
                  <input
                    type="checkbox"
                    checked={
                      selectedCurriculumItems.length ===
                      t(
                        "templateData.curriculum.items",
                        DEFAULT_CURRICULUM_ITEMS,
                      ).length
                    }
                    onChange={toggleAllCurriculumItems}
                    className="w-4 h-4 rounded border-gray-300"
                    title="Select All"
                  />
                )}
                <h4 className="font-bold text-lg text-gray-800">
                  Applied Sciences and Humanities
                </h4>
              </div>
            </div>
            <div className="md:col-span-8 p-6">
              <ul className="space-y-4">
                {t(
                  "templateData.curriculum.items",
                  DEFAULT_CURRICULUM_ITEMS,
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    {isEditing && (
                      <input
                        type="checkbox"
                        checked={selectedCurriculumItems.includes(i)}
                        onChange={() => toggleCurriculumSelection(i)}
                        className="mt-2 w-4 h-4 rounded border-gray-300"
                      />
                    )}
                    <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                      <span className="text-gray-700 text-sm font-medium flex-1">
                        <EditableText
                          value={item.label}
                          onSave={(val) =>
                            updateCurriculumItem(i, "label", val)
                          }
                        />
                      </span>
                      <div className="flex items-center gap-2">
                        {isEditing && (
                          <>
                            <div className="flex flex-col gap-1">
                              <input
                                type="text"
                                value={item.link || ""}
                                onChange={(e) =>
                                  updateCurriculumItem(
                                    i,
                                    "link",
                                    e.target.value,
                                  )
                                }
                                placeholder="Link URL or use upload"
                                className="text-xs px-2 py-1 border border-gray-300 rounded w-40"
                              />
                              {item.fileName && (
                                <span className="text-xs text-green-600">
                                  📎 {item.fileName}
                                </span>
                              )}
                            </div>
                            <div className="relative">
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => handleFileChange(i, e)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                id={`file-upload-${i}`}
                              />
                              <label
                                htmlFor={`file-upload-${i}`}
                                className={`flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                                  uploadingFiles[i]
                                    ? "bg-gray-300 text-gray-500"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                                title="Upload PDF"
                              >
                                {uploadingFiles[i] ? (
                                  "Uploading..."
                                ) : (
                                  <>
                                    <FaUpload /> PDF
                                  </>
                                )}
                              </label>
                            </div>
                            <button
                              onClick={() => removeCurriculumItem(i)}
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Delete Item"
                            >
                              <FaTrash className="text-xs" />
                            </button>
                          </>
                        )}
                        {!isEditing && (
                          <a
                            href={item.fileUrl || item.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold text-ssgmce-blue hover:text-ssgmce-orange hover:underline uppercase tracking-wide shrink-0"
                            onClick={(e) => {
                              if (
                                !item.fileUrl &&
                                (!item.link || item.link === "#")
                              ) {
                                e.preventDefault();
                                alert("No file available for download.");
                              }
                            }}
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    pride: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Pride of the Department
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-4">B.E. First Year College Toppers</p>
        </div>

        {/* Toppers Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-[#003366]">
                  <th className="px-6 py-4 text-left text-sm font-bold text-white border border-[#003366]">
                    SN
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white border border-[#003366]">
                    NAME OF STUDENTS
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white border border-[#003366]">
                    BRANCH
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white border border-[#003366]">
                    ACADEMIC YEAR
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white border border-[#003366]">
                    PERCENTAGE
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    sn: "01",
                    name: "ARYAN S. RAJ",
                    branch: "CSE",
                    year: "2017-18",
                    percentage: "85.67",
                  },
                  {
                    sn: "02",
                    name: "KU. TANUJA GIRIDHAR PARASKAR",
                    branch: "CSE",
                    year: "2018-19",
                    percentage: "83.91",
                  },
                  {
                    sn: "03",
                    name: "KU. GAURI NARENDRA SAWARKAR",
                    branch: "IT",
                    year: "2019-20",
                    percentage: "83.08",
                  },
                  {
                    sn: "04",
                    name: "RAGHAVENDRA RAJENDRA LOKARE",
                    branch: "MECH",
                    year: "2020-21",
                    percentage: "95.75",
                  },
                  {
                    sn: "05",
                    name: "KU SHAMLI SHARAD TITIRMARE",
                    branch: "MECH",
                    year: "2021-22",
                    percentage: "90.41",
                  },
                  {
                    sn: "06",
                    name: "KU. NEHA PRAKASH JOSHI",
                    branch: "EXTC",
                    year: "2022-23",
                    percentage: "83. 66",
                  },
                ].map((topper, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                      {topper.sn}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium border border-gray-200">
                      {topper.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                      {topper.branch}
                    </td>
                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                      {topper.year}
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-semibold border border-gray-200">
                      {topper.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trophy Icon */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-full">
            <FaTrophy className="text-6xl text-yellow-500" />
          </div>
        </div>
      </div>
    ),

    orientation: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Student Orientation and Induction Program
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* Program Years List */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {[
              {
                year: "2025-26",
                label: "Student Orientation and Induction program 2025-26",
                isNew: true,
              },
              {
                year: "2024-25",
                label: "Student Orientation and Induction program 2024-25",
                isNew: false,
              },
              {
                year: "2023-24",
                label: "Student Orientation and Induction program 2023-24",
                isNew: false,
              },
              {
                year: "2022-23",
                label: "Student Orientation and Induction program 2022-23",
                isNew: false,
              },
            ].map((program, index) => (
              <div
                key={index}
                className="p-5 hover:bg-blue-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {program.isNew && (
                      <span className="bg-ssgmce-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        New
                      </span>
                    )}
                    <span className="text-gray-700 font-medium group-hover:text-ssgmce-blue transition-colors">
                      {program.label}
                    </span>
                  </div>
                  <button className="text-ssgmce-blue hover:text-ssgmce-orange font-semibold text-sm hover:underline transition-colors">
                    Detail Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Program Highlights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Inauguration Ceremony",
                desc: "Traditional lamp lighting ceremony",
              },
              {
                title: "Welcome Address",
                desc: "Faculty and administration welcoming students",
              },
              {
                title: "Student Assembly",
                desc: "First-year students attending orientation",
              },
              {
                title: "Interactive Session",
                desc: "Students engaging in group activities",
              },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-ssgmce-blue opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <div className="text-center z-10">
                    <FaUniversity className="text-6xl text-blue-300 mx-auto mb-3 group-hover:text-blue-400 transition-colors" />
                    <p className="text-sm text-gray-500 font-semibold px-4">
                      {photo.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 bg-gray-50">
                  <p className="text-sm text-gray-600 text-center">
                    {photo.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Program Details Info Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-gray-200">
          <div className="flex items-start">
            <FaLightbulb className="text-4xl text-ssgmce-blue mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                About the Program
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Student Orientation and Induction Program is designed to
                help first-year students transition smoothly into their
                engineering education journey. The program familiarizes students
                with the academic environment, facilities, and resources
                available at SSGMCE.
              </p>
              <ul className="space-y-2">
                {[
                  "Introduction to college infrastructure and facilities",
                  "Academic curriculum and examination pattern",
                  "Student support services and mentorship",
                  "Extra-curricular activities and student chapters",
                  "Career guidance and placement opportunities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaAngleRight className="text-ssgmce-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),

    "course-material": (
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Course Material
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access comprehensive study materials, lecture notes, and reference
            resources for all courses
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="bg-[#003366] px-6 py-4">
            <div className="flex items-center justify-center">
              <FaBook className="text-2xl text-white mr-3" />
              <h3 className="text-xl font-bold text-white">
                Academic Resources
              </h3>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col items-center space-y-6">
              {/* Icon and Description */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full">
                  <FaDownload className="text-4xl text-[#003366]" />
                </div>
                <p className="text-gray-600 text-lg max-w-xl">
                  All course materials including lecture notes, assignments,
                  previous year papers, and reference materials are available in
                  our Google Drive repository.
                </p>
              </div>

              {/* Drive Link Button */}
              <a
                href="https://drive.google.com/drive/folders/1az9OFTOJ_Z1eKyPPo-a_s_Wd0N53_lZa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FaDownload className="mr-3 text-xl" />
                Access Course Material
                <FaExternalLinkAlt className="ml-3 text-sm" />
              </a>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 w-full max-w-2xl">
                <div className="flex items-start space-x-3">
                  <FaInfoCircle className="text-ssgmce-blue text-xl mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>
                      Materials are regularly updated. Please check back
                      frequently for new content and announcements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    "course-outcome": (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Course Outcome</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* B.E. Course Outcomes Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-blue-900 text-center">
              B. E. Course Outcomes
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-6 py-4 text-center text-base font-bold text-ssgmce-blue border-r border-gray-300">
                    Semester
                  </th>
                  <th className="px-6 py-4 text-center text-base font-bold text-ssgmce-blue">
                    View Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { semester: "B.E. Semester-I", id: "sem1" },
                  { semester: "B.E. Semester-II", id: "sem2" },
                ].map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-blue-50/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-center text-gray-700 font-medium border-r border-gray-200">
                      {row.semester}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => {
                          setVisibleCourseSem(row.id);
                          setTimeout(() => {
                            const element = document.getElementById(
                              `course-${row.id}`,
                            );
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                            }
                          }, 100);
                        }}
                        className="text-ssgmce-blue hover:text-ssgmce-orange font-medium hover:underline transition-colors"
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Semester I Detailed Course Outcomes */}
        {visibleCourseSem === "sem1" && (
          <motion.div
            id="course-sem1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 scroll-mt-24"
          >
            <div className="bg-[#003366] p-4">
              <h3 className="text-xl font-bold text-white text-center">
                COURSE OUTCOMES OF ALL COURSES OF THE FIRST SEMESTER B.E.
              </h3>
              <p className="text-gray-200 text-center text-sm mt-1">
                (APPLIED SCIENCES AND HUMANITIES)
              </p>
              <p className="text-white text-center text-sm mt-2 font-semibold">
                CSE, IT, ELPO
              </p>
            </div>

            <div className="p-6 space-y-8">
              {/* Engineering Mathematics-I */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A1 - Engineering Mathematics-I
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Understand to find n th order derivative of functions, Roll's Theorem, expand the function in a power series and evaluate indeterminate forms.",
                        },
                        {
                          code: "CO2",
                          desc: "Find partial derivatives and Obtain maxima and minima of a function under constraint by Lagrange's method",
                        },
                        {
                          code: "CO3",
                          desc: "Find powers and roots of complex numbers using De Moivre's Theorem, separate the complex quantity in real & imaginary parts, and find logarithms of complex numbers",
                        },
                        {
                          code: "CO4",
                          desc: "Solve ordinary differential equations of first order and first degree by various methods and application of these methods to solve real life fields.",
                        },
                        {
                          code: "CO5",
                          desc: "Solve ordinary differential equations of first order and higher degree by various methods and applications of Electrical circuits and orthogonal Trajectory.",
                        },
                        {
                          code: "CO6",
                          desc: "Understand the concept of Convergence of Sequence and series.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Physics */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A2 - Engineering Physics
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "To apply the knowledge of solid state devices such as semiconductor diode, Zener diode & LED in various electronic applications.",
                        },
                        {
                          code: "CO2",
                          desc: "To apply the knowledge of Quantum Mechanics in Engineering fields.",
                        },
                        {
                          code: "CO3",
                          desc: "To apply the principles of electron Ballistics to demonstrate the functioning of CRO & Mass Spectrograph.",
                        },
                        {
                          code: "CO4",
                          desc: "To apply the principles of geometrical optics such as interference & diffraction in various Engineering fields.",
                        },
                        {
                          code: "CO5",
                          desc: "To apply the principles of fiber optics & LASER & fundamentals of acoustics, ultrasonics, & fluid dynamics in various domains of Engineering.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Mechanics */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A3 - Engineering Mechanics
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Apply composition and resolution of forces and principles of statics to analyze system of rigid bodies and simple structures.",
                        },
                        {
                          code: "CO2",
                          desc: "Calculate frictional forces for simple contact, wedges and belt friction.",
                        },
                        {
                          code: "CO3",
                          desc: "Locate centroid and calculate moment of inertia.",
                        },
                        {
                          code: "CO4",
                          desc: "Calculate various kinematic quantities.",
                        },
                        {
                          code: "CO5",
                          desc: "Solve the problems using different kinetic equations related to direct and interconnected particles.",
                        },
                        {
                          code: "CO6",
                          desc: "Apply principle of conservation of momentum and laws of impact.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Computer Programming */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A4 - Computer Programming
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Explain fundamental concepts of computer and computing.",
                        },
                        {
                          code: "CO2",
                          desc: "Test and execute the programs and correct syntax and logical errors.",
                        },
                        {
                          code: "CO3",
                          desc: "Demonstrate various concepts of operators, expressions to solve real life problems.",
                        },
                        {
                          code: "CO4",
                          desc: "Demonstrate various concepts of control structure to solve complex problems",
                        },
                        {
                          code: "CO5",
                          desc: "Use arrays, strings and structures to formulate algorithms and programs.",
                        },
                        {
                          code: "CO6",
                          desc: "Demonstrate various concepts of functions, pointers and file handling mechanism.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Communication Skills */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A5 - Communication Skills
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Understand the importance of communication at the workplace and use grammatically correct sentences in oral and written communication.",
                        },
                        {
                          code: "CO2",
                          desc: "Enhance vocabulary and learn the basics of business correspondence to effectively write letters, proposals, reports and newsletters",
                        },
                        {
                          code: "CO3",
                          desc: "Learn the right kind of pronunciation with proper stress, intonation and pauses during the conversation.",
                        },
                        {
                          code: "CO4",
                          desc: "Learn the basics of public speaking, group discussions, presentations and interviews to showcase the better performance in personal and professional life.",
                        },
                        {
                          code: "CO5",
                          desc: "Learn the planning, management and execution of seminars, conferences and group activities and hone the leadership, managerial skills and team spirit.",
                        },
                        {
                          code: "CO6",
                          desc: "Communicate effectively and ethically in multi-cultural environment and adapt to the changes time to time.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Semester II Detailed Course Outcomes */}
        {visibleCourseSem === "sem2" && (
          <motion.div
            id="course-sem2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 scroll-mt-24"
          >
            <div className="bg-[#003366] p-4">
              <h3 className="text-xl font-bold text-white text-center">
                COURSE OUTCOMES OF ALL COURSES OF THE SECOND SEMESTER B.E.
              </h3>
              <p className="text-gray-200 text-center text-sm mt-1">
                (APPLIED SCIENCES AND HUMANITIES)
              </p>
              <p className="text-white text-center text-sm mt-2 font-semibold">
                EXTC/MECH
              </p>
            </div>

            <div className="p-6 space-y-8">
              {/* Engineering Mathematics-I */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A1 - Engineering Mathematics-I
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Understand to find n th order derivative of functions, Roll's Theorem, expand the function in a power series and evaluate indeterminate forms.",
                        },
                        {
                          code: "CO2",
                          desc: "Find partial derivatives and Obtain maxima and minima of a function under constraint by using Lagrange's method",
                        },
                        {
                          code: "CO3",
                          desc: "Find powers and roots of complex numbers using De Moivre's Theorem, separate the complex quantity in real & imaginary parts, and find logarithms of complex numbers",
                        },
                        {
                          code: "CO4",
                          desc: "Solve ordinary differential equations of first order and first degree by various methods and apply these methods to solve problems in engineering fields.",
                        },
                        {
                          code: "CO5",
                          desc: "Solve ordinary differential equations of first order and higher degree by various methods and applications of Electrical circuits and orthogonal Trajectory.",
                        },
                        {
                          code: "CO6",
                          desc: "Understand the concept of Convergence of Sequence and series.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Physics */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A2 - Engineering Physics
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "To apply the knowledge of solid state devices such as semiconductor diode, Zener diode & LED in various electronic applications.",
                        },
                        {
                          code: "CO2",
                          desc: "To apply the knowledge of Quantum Mechanics in Engineering fields.",
                        },
                        {
                          code: "CO3",
                          desc: "To apply the principles of electron Ballistics to demonstrate the functioning of CRO & Mass Spectrograph.",
                        },
                        {
                          code: "CO4",
                          desc: "To apply the principles of geometrical optics such as interference & diffraction in various Engineering fields.",
                        },
                        {
                          code: "CO5",
                          desc: "To apply the principles of fiber optics & LASER & fundamentals of acoustics, ultrasonics, & fluid dynamics in various domains of Engineering.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Mechanics */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A3 - Engineering Mechanics
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Apply composition and resolution of forces and principles of statics to analyze system of rigid bodies and simple structures.",
                        },
                        {
                          code: "CO2",
                          desc: "Calculate frictional forces for simple contact, wedges and belt friction.",
                        },
                        {
                          code: "CO3",
                          desc: "Locate centroid and calculate moment of inertia.",
                        },
                        {
                          code: "CO4",
                          desc: "Calculate various kinematic quantities.",
                        },
                        {
                          code: "CO5",
                          desc: "Solve the problems using different kinetic equations related to direct and interconnected particles.",
                        },
                        {
                          code: "CO6",
                          desc: "Apply principle of conservation of momentum and laws of impact.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Computer Programming */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A4 - Computer Programming
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Explain fundamental concepts of computer and computing.",
                        },
                        {
                          code: "CO2",
                          desc: "Test and execute the programs and correct syntax and logical errors.",
                        },
                        {
                          code: "CO3",
                          desc: "Demonstrate various concepts of operators, expressions to solve real life problems.",
                        },
                        {
                          code: "CO4",
                          desc: "Demonstrate various concepts of control structure to solve complex problems",
                        },
                        {
                          code: "CO5",
                          desc: "Use arrays, strings and structures to formulate algorithms and programs.",
                        },
                        {
                          code: "CO6",
                          desc: "Demonstrate various concepts of functions, pointers and file handling mechanism.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Workshop */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1A5 - Workshop
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Apply various forging operations for the completion of given component",
                        },
                        {
                          code: "CO2",
                          desc: "Apply various fitting operations for the completion of given component",
                        },
                        {
                          code: "CO3",
                          desc: "Apply various thread manufacturing processes operations for the completion of given component",
                        },
                        {
                          code: "CO4",
                          desc: "Apply various sheet metal processes operations for the completion of given component",
                        },
                        {
                          code: "CO5",
                          desc: "Apply various welding techniques to fabricate the parts",
                        },
                        {
                          code: "CO6",
                          desc: "Apply various carpentry operations for the completion of given component",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Divider for CSE,IT,ELPO section */}
              <div className="border-t-4 border-gray-200 pt-6">
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-center text-lg font-bold text-blue-900">
                    CSE, IT, ELPO
                  </p>
                </div>
              </div>

              {/* Engineering Mathematics-II */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1B1 - Engineering Mathematics-II
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Solve the inverse of matrix by various methods, solutions of simultaneous equation, and Eigen values & Eigen vectors of a matrix",
                        },
                        {
                          code: "CO2",
                          desc: "Use the tool of Fourier expansion for learning advance engineering Mathematics",
                        },
                        {
                          code: "CO3",
                          desc: "Solve integrals by Gamma & Beta function, Reduction Formulae",
                        },
                        {
                          code: "CO4",
                          desc: "Use new techniques of DUIS to evaluate integrals",
                        },
                        {
                          code: "CO5",
                          desc: "Solve the numerical on double integrals",
                        },
                        {
                          code: "CO6",
                          desc: "Solve Triple integrals and their uses to find the volume of Triple integrals, mean value and RMS values",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Chemistry */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1B2 - Engineering Chemistry
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Apply the knowledge of chemistry in softening processes, its quality parameters for the use of water in industry.",
                        },
                        {
                          code: "CO2",
                          desc: "Identify various types of corrosion and methods to protect the metallic structure from corrosive environment and understanding of the energy storage system (battery)",
                        },
                        {
                          code: "CO3",
                          desc: "Apply the knowledge of useful engineering materials such as cement and lubricant based on their properties.",
                        },
                        {
                          code: "CO4",
                          desc: "Apply the knowledge about the properties of chemical fuels for the generation of power",
                        },
                        {
                          code: "CO5",
                          desc: "Apply the knowledge of various polymeric material w.r.t synthesis, properties and applications",
                        },
                        {
                          code: "CO6",
                          desc: "Identify various phases of material at different thermodynamic variables and analysis of materials by using advance analytical techniques.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Electrical Engineering */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1B3 - Electrical Engineering
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Analyze the electric and magnetic circuits.",
                        },
                        {
                          code: "CO2",
                          desc: "Analyze single phase & three phase AC circuits.",
                        },
                        {
                          code: "CO3",
                          desc: "Understand the operating principles & Characteristics of electrical machines.",
                        },
                        {
                          code: "CO4",
                          desc: "Elaborate the construction and working of various measuring instruments and earthing.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Graphics */}
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1B4 - Engineering Graphics
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Prepare the engineering drawings.",
                        },
                        {
                          code: "CO2",
                          desc: "Apply the concepts of the projections and sectional views of three Dimensional objects.",
                        },
                        {
                          code: "CO3",
                          desc: "Analyse the orthographic and isometric views of three dimensional objects.",
                        },
                        {
                          code: "CO4",
                          desc: "Explain the engineering drawings and represent engineering systems.",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Communication Skills */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 bg-gray-50 p-3 rounded">
                  1B5 - Communication Skills
                </h4>
                <p className="text-sm text-gray-700 mb-3 font-semibold">
                  After successfully completing the course, the students will be
                  able to:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      {[
                        {
                          code: "CO1",
                          desc: "Understand the importance of communication at the workplace and use grammatically correct sentences in oral and written communication.",
                        },
                        {
                          code: "CO2",
                          desc: "Enhance vocabulary and learn the basics of business correspondence to effectively write letters, proposals, reports and newsletters",
                        },
                        {
                          code: "CO3",
                          desc: "Learn the right kind of pronunciation with proper stress, intonation and pauses during the conversation.",
                        },
                        {
                          code: "CO4",
                          desc: "Learn the basics of public speaking, group discussions, presentations and interviews",
                        },
                      ].map((outcome, i) => (
                        <tr key={i} className="border-b border-gray-300">
                          <td className="border-r border-gray-300 px-4 py-3 font-bold text-gray-800 w-20 text-center bg-gray-50">
                            {outcome.code}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-sm">
                            {outcome.desc}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    ),

    achievements: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Achievements</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-3">2021-22 To 2025-26</p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-4">
          {[
            {
              name: "Dr. A. S. Tale",
              items: [
                "Became Fab Graduate (Diploma Hands on Digital Fabrication) 2021 MIT BOSTON (VIGYAN ASHRAM)",
                "Awarded with Doctor of Philosophy (Ph.D) Notification No.56/2021",
                "Completed Refresher course National Education Policy and its Implementation held during 12th Feb to 24th Feb 2024 and obtain grade A+",
                "Published Patent on Exploring Superconducting Devices for Efficient Quantum Information Processing and Storage (Application No.202341069399 A, Publication Date: 24/11/2023)",
                "Published A text book of Nano science & Technology (ISBN 978-81-971218-5-2)",
                "Published a paper in Journal of Electrical Systems (Q4) journal. (J. Electrical Systems 20-11s (2024): 3658-3666)",
                "Published a Copy right for SMART AZOLA MULTIPLIER SYSTEM on 30/12/2025 (LD-28448/2025-CO)",
              ],
            },
            {
              name: "Dr. Rajesh M Kharate",
              items: [
                "Associate Professor recognized as SUPERVISOR FOR Ph.D. Thursday, the 28th September, 2023, No. 153 / 2023",
                "Invited as Resource Person-CAREER COUNSELLNG organized by Dastur Ratanji, Khamgaon, What after 10th, 12th and Graduation on 22.07.2023 at Tilak Smarak Mahila Mandal Sabhagruha, Khamgaon",
                "CAREER COUNSELLNG organised by Dastur Ratanji Library in association with Tilak Smarak Mahila Mandal, Khamgaon on 30.06.2024 at Tilak Smarak Mahila Mandal Sabhagruha, Khamgaon",
              ],
            },
            {
              name: "Prof. N. S. Thakare",
              items: [
                "Recognized as Best P.O.- NSS, SGBAU, Amravati, M.S., India",
              ],
            },
            {
              name: "Prof. A. S. Alane",
              items: [
                "Registered for Ph.D. (Registration at SGBAU Amravati no.3172/2024)",
              ],
            },
            {
              name: "Dr. M. S. Pande",
              items: [
                "Published A text book of Research Innovative Basket (National Education Policy 2020, ISBN:978-81-970810-4-0)",
                "Recognized as Reviewer for publication in Journal of Condensed Matter",
              ],
            },
            {
              name: "Dr. Manisha Sandeep Pande",
              items: [
                "Completed the NEP 2020 Orientation & Sensitization Programme under the Malaviya Mission Teacher Training Programme (MM-TTP) of the University Grants Commission (UGC) jointly Organized by UGC-Malaviya Mission Teacher Training Centre, Sant Gadge Baba Amravati University, Amravati, and SSGMCE, Shegaon (Maharashtra) from 24th February, 2025 to 05th March, 2025 and obtained grade A+",
                "Book Chapter: Study of magnesium doped zinc cobaltite thick film for resistive type H2S gas detection. RESEARCH INNOVATIVE BASKET (Volume 2) ISBN:978-81-970810-4-0",
              ],
            },
            {
              name: "Prof. H. S. Patil",
              items: [
                "Published a book-LITERATURE MEETS LIBRARIES",
                "Published a book chapter on title Enhancing Communicative Competence through English Language Laboratories: A Study of Undergraduate Learners in Amravati",
                "Completed PGCTE from EFLU, Hyderabad in Aug.2025",
                "Delivered Guest Lectures on Soft Skills for FINAL year Students at various institutions: Shripad Krushna Kolhatkar College (Jalgaon Jamod), Shivaji College, Rajshri Shahu College of Pharmacy (Buldhana), Dr.R.N.Lahoti College of Pharmacy (Sultanpur), Sanmati Engineering College (Washim), P.Laddad (Buldhana)",
              ],
            },
            {
              name: "Prof. K. P. Deshmukh",
              items: ["Registered for Ph.D"],
            },
            {
              name: "Prof. S. V. Bhagat",
              items: [
                "Completed Refresher course National Education Policy and its Implementation held during 12th Feb to 24th Feb 2024 and obtain grade A+",
                "Submitted Ph.D thesis in December 2025",
              ],
            },
            {
              name: "Student Achievements",
              items: [
                "Mr. Vinit S. Atkare (First Year Mechanical Engineering) won third place at AVISHKAR 2024 for his project on Non-contact Glucose Detection Using Optical and Analytical Techniques",
                "Miss. Sakshi Rajankar, Miss. Tanushri Kharche, Miss. Vaishnavi Tale (First Year) won first rank in Cyber Security Bootcamp organized by ACM, SSGMCE, Shegaon",
                "Rajveer Singh (First Year) emerged winner in RumbleReel organized by Institute of Technology, Management and Research, Nashik",
                "Rajveer Singh (First Year) emerged winner in Project Xpo 2K25 organised by V. B. Kolte College of Engineering, Malkapur",
                "Rajveer Singh and team (First Year) secured first position in hackathon 5.0 (Online) organized by Amity University Online",
              ],
            },
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

    activities: (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Activities @ Department
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
        </div>

        {/* Activities Grid */}
        <div className="space-y-6">
          {[
            {
              title: "Expressive Fusion (TED Talk & Story Telling)",
              date: "22nd March 2024",
              beneficiary: "B.E. All Branches Students",
              image: "activity-photo-placeholder",
              imageAlt: "TED Talk event",
            },
            {
              title: "Industrial Visit",
              subtitle: "Vinodrai Engineers, Jalna",
              date: "12-14 March 2024",
              beneficiary: "B.E. First Year Students",
              image: "industrial-visit-placeholder",
              imageAlt: "Industrial Visit",
            },
            {
              title: "Science Day Celebration",
              date: "28th February 2024",
              beneficiary: "B.E. First Year Students",
              image: "science-day-placeholder",
              imageAlt: "Science Day Celebration",
            },
            {
              title: "Workshop on Design Thinking and Innovation Design",
              date: "24 February 2024",
              beneficiary: "B.E. First Year Students",
              image: "design-thinking-placeholder",
              imageAlt: "Design Thinking Workshop",
            },
            {
              title:
                "Online (Zoom) Meeting on Problem Solving and Ideation Workshop",
              date: "Saturday, 28 October 2023",
              beneficiary: "B.E. First Year Students",
              image: "online-workshop-placeholder",
              imageAlt: "Problem Solving Workshop",
            },
            {
              title: "Workshop on ROBOTICS",
              date: "16th September-17th September 2023",
              beneficiary: "B.E. First Year Students",
              organizer: "ASH Dept., SSGMCE, Shegaon",
              image: "robotics-placeholder",
              imageAlt: "Robotics Workshop",
            },
            {
              title: "Elocution Competition One Nation, One Election",
              date: "Saturday, 9th September 2023",
              beneficiary: "B.E. First Year Students",
              organizer: "ASH Dept., SSGMCE, Shegaon",
              image: "elocution-placeholder",
              imageAlt: "Elocution Competition",
            },
            {
              title: "Student Induction & Orientation Program",
              date: "7th August-25th August 2023",
              beneficiary: "B.E. First Year Students",
              venue: "New Auditorium",
              organizer: "ASH Dept., SSGMCE, Shegaon",
              image: "orientation-placeholder",
              imageAlt: "Student Orientation Program",
            },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-12">
                {/* Activity Photo Section */}
                <div className="md:col-span-5 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center border-r border-gray-200">
                  <div className="text-center w-full">
                    <div className="bg-white rounded-lg shadow-inner p-8 aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <FaCalendarAlt className="text-6xl text-blue-400 mx-auto mb-3" />
                        <p className="text-sm text-gray-500 font-semibold">
                          Activity Photo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Details Section */}
                <div className="md:col-span-7 p-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {activity.title}
                    </h3>

                    {activity.subtitle && (
                      <p className="text-ssgmce-blue font-semibold">
                        {activity.subtitle}
                      </p>
                    )}

                    <div className="space-y-2 pt-2">
                      <div className="flex items-start">
                        <span className="font-bold text-gray-700 min-w-[140px]">
                          Date:
                        </span>
                        <span className="text-gray-600">{activity.date}</span>
                      </div>

                      <div className="flex items-start">
                        <span className="font-bold text-gray-700 min-w-[140px]">
                          Beneficiary/Participant:
                        </span>
                        <span className="text-gray-600">
                          {activity.beneficiary}
                        </span>
                      </div>

                      {activity.venue && (
                        <div className="flex items-start">
                          <span className="font-bold text-gray-700 min-w-[140px]">
                            Venue:
                          </span>
                          <span className="text-gray-600">
                            {activity.venue}
                          </span>
                        </div>
                      )}

                      {activity.organizer && (
                        <div className="flex items-start">
                          <span className="font-bold text-gray-700 min-w-[140px]">
                            Organized by:
                          </span>
                          <span className="text-gray-600">
                            {activity.organizer}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
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
      title="Applied Sciences and Humanities"
      backgroundImage={appliedSciencesBanner}
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

            {/* Academic Activities Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-ssgmce-orange to-orange-600 p-4">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <FaIndustry className="text-white mr-2" /> Academic Activities
                </h3>
              </div>
              <div className="p-4 space- y-2">
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

export default AppliedSciences;
