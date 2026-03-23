import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import electricalBanner from "../../assets/images/departments/electrical/Electrical Banner.png";
import hodPhoto from "../../assets/images/departments/electrical/HOD_ELECTRICAL.jpg";

// Industrial Visit Photos
import ivAdaniDahanu2025 from "../../assets/images/departments/electrical/industrial-visits/adani_dahanu_2025.png";
import ivApatapaAkola2025 from "../../assets/images/departments/electrical/industrial-visits/apatapa_akola_2025.png";
import ivAvaadaSolar2025 from "../../assets/images/departments/electrical/industrial-visits/avaada_solar_2025.png";
import ivTataPowerShahad2024 from "../../assets/images/departments/electrical/industrial-visits/tata_power_shahad_2024.png";
import ivAdaniDahanu2024 from "../../assets/images/departments/electrical/industrial-visits/adani_dahanu_2024.png";
import ivTataPowerMumbai2023 from "../../assets/images/departments/electrical/industrial-visits/tata_power_mumbai_2023.png";
import ivThermalParas2023 from "../../assets/images/departments/electrical/industrial-visits/thermal_paras_2023.png";
import ivAdaniPowerMumbai from "../../assets/images/departments/electrical/industrial-visits/adani_power_mumbai.png";
import ivThermalParas2022 from "../../assets/images/departments/electrical/industrial-visits/thermal_paras_2022.png";
import ivAbbNashik2018 from "../../assets/images/departments/electrical/industrial-visits/abb_nashik_2018.jpg";
import ivPowerinstNashik2018 from "../../assets/images/departments/electrical/industrial-visits/powerinst_nashik_2018.jpg";
import ivLegrandNashik2018 from "../../assets/images/departments/electrical/industrial-visits/legrand_nashik_2018.jpg";
import ivParasThermal2018 from "../../assets/images/departments/electrical/industrial-visits/paras_thermal_2018.jpg";
import ivVishwajeetNashik from "../../assets/images/departments/electrical/industrial-visits/vishwajeet_nashik.jpg";
import ivAdaniMundra2016 from "../../assets/images/departments/electrical/industrial-visits/adani_mundra_2016.jpg";
import srpPhoto from "../../assets/images/departments/electrical/faculty/SRP.jpg";
import uajPhoto from "../../assets/images/departments/electrical/faculty/UAJ.jpg";
import aujPhoto from "../../assets/images/departments/electrical/faculty/AUJ.jpg";
import ssjPhoto from "../../assets/images/departments/electrical/faculty/SSJ.jpg";
import prbPhoto from "../../assets/images/departments/electrical/faculty/PRB.jpg";
import rskPhoto from "../../assets/images/departments/electrical/faculty/RSKankale.jpg";
import mrcPhoto from "../../assets/images/departments/electrical/faculty/MRC.jpg";
import rkmPhoto from "../../assets/images/departments/electrical/faculty/RKM.jpg";
import gnbPhoto from "../../assets/images/departments/electrical/faculty/GNBonde.jpg";
import vskPhoto from "../../assets/images/departments/electrical/faculty/VSKarale.jpg";
import bsrPhoto from "../../assets/images/departments/electrical/faculty/BSRakhonde.jpg";
import prdPhoto from "../../assets/images/departments/electrical/faculty/PratikDhabe.jpg";
import vanPhoto from "../../assets/images/departments/electrical/faculty/vanagpure.png";
import gdkPhoto from "../../assets/images/departments/electrical/faculty/GDKhadsane.jpg";
import {
  defaultFaculty as ELECTRICAL_DEFAULT_FACULTY,
  defaultActivities,
  defaultNewsletters,
  defaultAchievements,
  defaultElectricalPatents,
  defaultElectricalPublications,
  defaultElectricalCopyrights,
  defaultElectricalBooks,
} from "../../data/electricalDefaults";
import { defaultPlacements } from "../../data/electricalPlacements";
import { defaultElectricalInternships } from "../../data/electricalInternships";
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
  FaMapMarkerAlt,
  FaSearchPlus,
  FaImages,
  FaFileAlt,
} from "react-icons/fa";

const Electrical = () => {
  // Load department data (works in both edit and public view modes)
  const {
    data: contextData,
    loading: dataLoading,
    isEditing,
    updateData,
    t: tBase,
  } = useDepartmentData("departments-electrical");
  const [activeTab, setActiveTab] = useState("overview");
  const [achievementTab, setAchievementTab] = useState("faculty");
  const [certificateLightbox, setCertificateLightbox] = useState(null);

  // State for Curricular Activities section
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);

  // State for Industrial Visit photo lightbox
  const [ivLightbox, setIvLightbox] = useState(null);

  // Helper to access data safely
  const t = (key, defaultVal) => {
    return (
      contextData?.templateData?.[key] ||
      tBase(`templateData.${key}`, defaultVal) ||
      defaultVal
    );
  };

  // Helper to update data
  const updateField = (key, value) => {
    updateData(`templateData.${key}`, value);
  };

  const updateTable = (key, rowIndex, colIndex, val, defaultData) => {
    const current = t(key, defaultData);
    const newData = JSON.parse(JSON.stringify(current));
    newData[rowIndex][colIndex] = val;
    updateField(key, newData);
  };

  const updateActivity = (idx, field, value) => {
    const arr = JSON.parse(JSON.stringify(t("activities", defaultActivities)));
    arr[idx][field] = value;
    updateField("activities", arr);
  };

  const updateNewsletter = (type, index, field, value) => {
    if (type === "latest") {
      const latest = JSON.parse(
        JSON.stringify(t("newsletters_latest", defaultNewsletters.latest)),
      );
      latest[field] = value;
      updateField("newsletters_latest", latest);
    } else {
      const archives = JSON.parse(
        JSON.stringify(t("newsletters_archives", defaultNewsletters.archives)),
      );
      archives[index][field] = value;
      updateField("newsletters_archives", archives);
    }
  };

  const defaultBeDetails = [
    ["Degree", "Bachelor of Engineering in Electrical (Electronics & Power)"],
    ["Duration", "4 Year(8 Semesters) (Full time)"],
    ["Intake", "60 Students per year"],
    ["Establishment", "Year: 1983"],
    [
      "NBA Status",
      "Accredited by National Board of Accreditation for 03 years",
    ],
  ];

  const defaultMeDetails = [
    ["Degree", "M.E. (Electrical Power System)"],
    ["Duration", "2 Year(4 Semesters) (Full time)"],
    ["Intake", "18 Students per year"],
    ["Establishment", "Year: 1996"],
  ];

  const defaultPhdDetails = [
    ["Degree", "Ph. D in Electrical Engineering"],
    ["Duration", "3 Years"],
    ["Intake", "20 Students"],
  ];

  const defaultLaboratories = [
    {
      name: "Electrical Machines Laboratory",
      image: "",
      resources:
        "DC Motors & Generators, Induction motors, Synchronous motor, Alternators, Transformers, Special machines, MG Sets",
      facilities:
        "DSO, Rectifier, Resistive/ Inductive Loads, computer system, Measuring Instruments",
    },
    {
      name: "Switchgear and Protection Laboratory",
      image: "",
      resources:
        "Protection setup based on Over Current Relay, Earth fault Relay, Differential relay, Static Relay, Demonstration panel, MCB & RCCB Testing set, Microprocessor based Relay for induction motor Protection",
      facilities: "Relay Testing kit",
    },
    {
      name: "High Voltage Laboratory",
      image: "",
      resources:
        "100 kV AC Testing set, 100 kV DC Testing set,60 kV Automatic oil Testing Kit, vertical-horizontal sphere Gap, Insulator Testing Set",
      facilities: "Impulse Tester",
    },
    {
      name: "Control System Laboratory",
      image: "",
      resources:
        "D.C.M-G set, Synchro-Transmitter & Receiver, Single Phase transformer for scott connection, DSO",
      facilities: "Stepper Motor, Regulated D.C. Power Supply",
    },
    {
      name: "Electrical Measurement Laboratory",
      image: "",
      resources: "Three Phase Induction motor, Regulated D.C. Power Supply",
      facilities:
        "Various types of bridge for measurement of inductance & capacitance",
    },
    {
      name: "Basic Electrical Engineering Laboratory",
      image: "",
      resources:
        "Single Phase transformer, Three Phase Auto Transformer, Regulated D.C. Power Supply",
      facilities: "R-L-C kit, Resistive Load Bank",
    },
    {
      name: "Computer Laboratory",
      image: "",
      resources:
        "20 Desktop Computers, MATLAB, PSCAD, ETAP software's, d-SPACE Hardware kit",
      facilities: "",
    },
    {
      name: "Microprocessor and Microcontroller Laboratory",
      image: "",
      resources: "Microprocessor & Microcontroller Kit with power supply",
      facilities: "",
    },
    {
      name: "PLC & Factory Automation Laboratory",
      image: "",
      resources: "Basic Fabrication Facility, Desktop Computers",
      facilities:
        "MATLAB, PSCAD, ETAP software, Transformer with various toppings, Induction Motor",
    },
    {
      name: "Power Quality Laboratory",
      image: "",
      resources: "Power Quality Analyzer, Data Acquisition System, DSO, etc.",
      facilities:
        "MATLAB, PSCAD, Transformer with various toppings, Induction Motor",
    },
    {
      name: "Electrical Power Research Lab",
      image: "",
      resources:
        "Lab VIEW, Data Acquisition system (NI & AD Link), CT/PT's., Compact-Rio, PCB Design facilities, Desktop Computers",
      facilities: "",
    },
    {
      name: "Centre of Excellence in Electric Vehicle",
      image: "",
      resources:
        "Trainer Kits for BLDC Drive, Simulators, Battery Management Systems, Solar based Charging Station, Conference room, WiFi connectivity",
      facilities: "",
    },
    {
      name: "Center of Excellence in Renewable Energy",
      image: "",
      resources:
        "Solar Research Lab, Sun Simulators, Battery Assembly setup, Solar panel Production facility, Solar Product Display gallery, Solar Radiation measurement facility, etc.",
      facilities: "",
    },
  ];

  // Photo map to resolve string keys from electricalDefaults to actual imports
  const electricalPhotoMap = {
    SRP: srpPhoto,
    UAJ: uajPhoto,
    AUJ: aujPhoto,
    SSJ: ssjPhoto,
    PRB: prbPhoto,
    RSK: rskPhoto,
    MRC: mrcPhoto,
    RKM: rkmPhoto,
    GNB: gnbPhoto,
    VSK: vskPhoto,
    BSR: bsrPhoto,
    PRD: prdPhoto,
    VAN: vanPhoto,
    GDK: gdkPhoto,
  };

  // Resolve photos and build the faculty data from defaults
  const defaultFacultyData = ELECTRICAL_DEFAULT_FACULTY.map((fac) => ({
    ...fac,
    photo: electricalPhotoMap[fac.photo] || fac.photo,
  }));

  const defaultPrideToppers = [
    { year: "2025", name: "Vaishnavi Keshav Pesode", rank: "II", cgpa: "9.28" },
    { year: "2024", name: "Sakshi Raju Sondkar", rank: "I", cgpa: "8.98" },
    {
      year: "2024",
      name: "Chetan Ashokrao Ambalkar",
      rank: "II",
      cgpa: "8.93",
    },
    { year: "2024", name: "Kalyani Dilip Raut", rank: "III", cgpa: "8.90" },
    { year: "2024", name: "Gauri Santosh Murkar", rank: "IV", cgpa: "8.88" },
    {
      year: "2023",
      name: "Harsha Dyaneshwar Lande",
      rank: "III",
      cgpa: "8.97",
    },
    { year: "2023", name: "Pranali Vijay Kharate", rank: "V", cgpa: "8.91" },
    { year: "2023", name: "Tejaswini Sanjay Masane", rank: "VI", cgpa: "8.88" },
    {
      year: "2023",
      name: "Harshal Chakradhar Shegokar",
      rank: "VI",
      cgpa: "8.88",
    },
    {
      year: "2023",
      name: "Prajwal Devndra Thakare",
      rank: "VII",
      cgpa: "8.84",
    },
    { year: "2023", name: "Abhishek Vinode Bathe", rank: "VIII", cgpa: "8.71" },
    {
      year: "2022",
      name: "Ms. Pallavi Dayaram Arbat",
      rank: "I",
      cgpa: "9.79",
    },
    { year: "2022", name: "Mr. Divyanshu Raj", rank: "II", cgpa: "9.64" },
    {
      year: "2022",
      name: "Ms. Manasi Udaysingh Rajput",
      rank: "III",
      cgpa: "9.53",
    },
    {
      year: "2022",
      name: "Ms. Krutika Ganesh Akhare",
      rank: "VI",
      cgpa: "9.38",
    },
    { year: "2022", name: "Mr. Krunal Ajay Rokade", rank: "VII", cgpa: "9.36" },
    {
      year: "2022",
      name: "Ms. Ashwini Prakash Wagh",
      rank: "VIII",
      cgpa: "9.34",
    },
    {
      year: "2022",
      name: "Ms. Shivani Shridhar Manatkar",
      rank: "IX",
      cgpa: "9.30",
    },
    {
      year: "2022",
      name: "Ms. Ashwini Mahadev Rajagur",
      rank: "IX",
      cgpa: "9.30",
    },
    {
      year: "2022",
      name: "Mr. Pradip Samdhan Tayde",
      rank: "IX",
      cgpa: "9.30",
    },
    {
      year: "2022",
      name: "Ms. Neha Rajendra Deshmukh",
      rank: "X",
      cgpa: "9.28",
    },
    {
      year: "2022",
      name: "Mr. Rushikesh Dinesh Bodade",
      rank: "X",
      cgpa: "9.28",
    },
  ];

  const defaultPrideAlumni = [
    {
      name: "Uday Sampat",
      position: "Vice President",
      org: "ABB India Ltd., Nashik",
    },
    {
      name: "Sandeep Narale",
      position: "Vice President",
      org: "Adani Electricity, Mumbai",
    },
    {
      name: "Gajanan Kale",
      position: "Chief Executive Officer",
      org: "Tata Power Western Odisha Distribution Limited, Sambalpur",
    },
    {
      name: "Dhananjay Sambare",
      position: "Director - Commerial",
      org: "DSM Energy, Melbourne, Victoria, Australia",
    },
    {
      name: "Shreerang Deshmukh",
      position: "Electrical Manager",
      org: "Megaplast India Pvt. Ltd., Daman",
    },
    {
      name: "Nitinkumar Gaikwad",
      position: "Business Relationship Manager",
      org: "TCS Ltd, Frankfurt, Hesse, Germany.",
    },
    { name: "Pushpen Chandra", position: "Mejor", org: "Indian Army, Ranchi" },
    {
      name: "Kinnari Mehta",
      position: "Marketing Manager",
      org: "w. r. grace & Conn, Columbia, USA",
    },
    {
      name: "Shivdeep Lande",
      position: "IPS",
      org: "DIG - Kosi Division Bihar",
    },
  ];

  const defaultPrideGate = [
    {
      year: "2022",
      sr: "1",
      name: "Priyatosh Chatterjee",
      score: "32.00",
      category: "OPEN",
    },
    {
      year: "2021",
      sr: "1",
      name: "Mithilesh Sharad Joshi",
      score: "53.33",
      category: "OPEN",
    },
    {
      year: "2021",
      sr: "2",
      name: "Prajwal Balu Range",
      score: "29.00",
      category: "OBC",
    },
    {
      year: "2021",
      sr: "3",
      name: "Dhiraj Mukundrao Gaygol",
      score: "67.00",
      category: "OBC",
    },
    {
      year: "2021",
      sr: "4",
      name: "Akshay Chandrakant Borle",
      score: "37.67",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "1",
      name: "Mr. Ankush Bhople",
      score: "33.67",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "2",
      name: "Mr. Prajwal Sontakke",
      score: "32.00",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "3",
      name: "Mr. Rupesh Bali",
      score: "22.67",
      category: "SC/ST",
    },
    {
      year: "2020",
      sr: "4",
      name: "Jayshree Suresh Mali",
      score: "46.67",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "5",
      name: "Akanksha Vishwadeep Waghmare",
      score: "26.33",
      category: "SC/ST",
    },
    {
      year: "2020",
      sr: "6",
      name: "Neha Pralhad Wawge",
      score: "31.67",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "7",
      name: "Bhumika Arvind Akade",
      score: "32.67",
      category: "OBC",
    },
    {
      year: "2020",
      sr: "8",
      name: "Vaibhav Purushottam Bhutada",
      score: "43.33",
      category: "OPEN",
    },
    {
      year: "2019",
      sr: "1",
      name: "Jayshree Suresh Mali",
      score: "43.67",
      category: "OBC",
    },
    {
      year: "2019",
      sr: "2",
      name: "Kaustubh Suresh Badhe",
      score: "39.33",
      category: "OBC",
    },
    {
      year: "2019",
      sr: "3",
      name: "Krushna Sudhakarrao Kokate",
      score: "35.67",
      category: "OBC",
    },
    {
      year: "2017",
      sr: "1",
      name: "Harshal P. Muley",
      score: "-",
      category: "-",
    },
    {
      year: "2017",
      sr: "2",
      name: "Rohit R. Kulkarni",
      score: "-",
      category: "-",
    },
  ];

  const defaultStudentChapterObjectives = [
    "To Encourage the students to develop their intra-personal & inter-personal skills.",
    "To Develop a healthy competitive spirit by competing with students of other departments & colleges.",
    "To arrange the expert lectures, workshops, Hands on training competitions and carrier guidance programs for the students.",
    "To provide a platform to interact with the eminent personalities from industries and organizations, students from other reputed Engineering Institutes or colleges.",
    "To carry out feedback analysis after execution of the program which helps to improve the execution of further programs.",
  ];

  const defaultUgProjects2425 = [
    {
      no: "1.",
      title:
        "Simulation Evaluation of lightning and non-lightning faults identification of transmission line",
    },
    {
      no: "2.",
      title: "Solar Sea water Desalination Machine with RO UV Purifier",
    },
    {
      no: "3.",
      title:
        "Design and Fabrication of control Panel for multi stack parking system",
    },
    {
      no: "4.",
      title: "Design of Bi-directional DC-DC driver for electric vehicle",
    },
    {
      no: "5.",
      title: "Modeling and fabrication of solar powered smart Air Cooler",
    },
    {
      no: "6.",
      title: "The future of Agriculture: Innovation in Agriculture Technology",
    },
    {
      no: "7.",
      title: "Smart Helmet for Visually impaired people Using Arduino",
    },
    {
      no: "8.",
      title:
        "Automatic Power Factor Correction with all measurements over LORA wireless Communication",
    },
    { no: "9.", title: "IOT based smart Saline Bottle Monitoring System" },
    { no: "10.", title: "Wire-Less Charger for light electric Vehicle" },
    {
      no: "11.",
      title:
        "Smart Solar panel Monitoring using IOT based and Wireless Data Transmission",
    },
    { no: "12.", title: "Indoor navigation system for visually Impaired" },
    {
      no: "13.",
      title:
        "Transmission line faults event reorganization by using optimal machine learning approach",
    },
  ];

  const defaultUgProjects2324 = [
    {
      no: "1.",
      title:
        "Energy Audit case study of tobacco factory collaboration with FASTTRACK PACKERS PVT. LTD.",
    },
    {
      no: "2.",
      title:
        "The Green breathfor survival of mankind in 21st century using sustainable air purifier",
    },
    { no: "3.", title: "Development of Smart Home Automation System." },
    { no: "4.", title: "Fruit Plucking Arm" },
    {
      no: "5.",
      title:
        "Electrical Heavy Vehicle Transportation Highway (By Catenary System)",
    },
    {
      no: "6.",
      title:
        "Discrimination of magnetizing inrush current and internal fault in Transformer.",
    },
    { no: "7.", title: "Development of IOT Based Smart Energy Meter." },
    {
      no: "8.",
      title:
        "Detection and Classification of Underlying Reasons of Power Quality Disturbance Using Signal Processing and Soft Computing Techniques",
    },
  ];

  const defaultPeos = [
    "Expertise and use it for problem solving in analysis & design of electrical system.",
    "Commitment in the engineering profession or other professional careers with high human values.",
    "Lifelong learning and adapting to a constantly changing field through graduate work, professional experience and self-study.",
    "Leadership and initiative to ethically advance professional and organizational goals and facilitate the achievements of others.",
    "Teamwork commitment for working with others of diverse cultural and interdisciplinary backgrounds.",
  ];

  const defaultPsos = [
    "Demonstrate proficiency in the design, analysis, and optimization of Electrical Power Systems, addressing complex engineering challenges and system parameters.",
    "Apply advanced engineering principles, technical knowledge, problem-solving strategies along with modern tools in the development and control of Electrical Machines and systems.",
  ];

  const defaultPos = [
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
  ];

  // defaultNewsletters is now imported from electricalDefaults.js

  // defaultAchievements is now imported from electricalDefaults.js

  const defaultCourseMaterials = [
    {
      year: "First Year",
      title: "BE First Year",
      link: "https://drive.google.com/drive/folders/13DXjK9HfR3NiKSrnqADVzx4uhPBIcS_5",
    },
    {
      year: "Second Year",
      title: "Third Semester",
      link: "https://drive.google.com/drive/folders/1KzKYf4waSbd062bLD8I2Xo8-mtoK87Dn",
    },
    {
      year: "Second Year",
      title: "Fourth Semester",
      link: "https://drive.google.com/drive/folders/1zCpp_E_N3lODX7aUGIQKmgzkZaSGSIqh",
    },
    {
      year: "Third Year",
      title: "Fifth Semester",
      link: "https://drive.google.com/drive/folders/1cOhiB-ghs-XL4qsCO4yIhDzAczg2oHSl",
    },
    {
      year: "Third Year",
      title: "Sixth Semester",
      link: "https://drive.google.com/drive/folders/11-t6MRGXfGu11Ty6AFi-rgtlDO_hEwmP",
    },
    {
      year: "Final Year",
      title: "Seventh Semester",
      link: "https://drive.google.com/drive/folders/1SR-mGfxTKHc2oZnCs26mt9bboLGL6eA8",
    },
    {
      year: "Final Year",
      title: "Eighth Semester",
      link: "https://drive.google.com/drive/folders/1OR5lp0rL3J6FVbULbcvjn-AB2XD_Iwwf",
    },
  ];

  const defaultInnovativePractices = [
    {
      sn: "01",
      faculty: "Dr. S. R. Paraskar",
      subject: "Power System II",
      practice: "Simulation-Based Learning (Matlab)",
      link: "/uploads/documents/electrical_innovative/SRP_PowerSystemII_Simulation.pdf",
    },
    {
      sn: "02",
      faculty: "Dr. A. U. Jawadekar",
      subject: "Signals & Systems",
      practice: "Mindmap",
      link: "/uploads/documents/electrical_innovative/AUJ_Signals_Systems_Mindmap.pdf",
    },
    {
      sn: "",
      faculty: "",
      subject: "Advanced Control System",
      practice: "MATLAB Simulation",
      link: "/uploads/documents/electrical_innovative/AUJ_Advanced_Control_System_Matlab.pdf",
      rowSpanParent: false,
    },
    {
      sn: "",
      faculty: "",
      subject: "Electromagnetic Field",
      practice: "Think Pair and Share",
      link: "/uploads/documents/electrical_innovative/AUJ_Electromagnetic_Field_ThinkPairShare.pdf",
      rowSpanParent: false,
    },
    {
      sn: "04",
      faculty: "Prof. P. R. Bharambe",
      subject: "Power System Protection",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/PRB_PowerSystemProtection_YouTube.pdf",
    },
    {
      sn: "",
      faculty: "",
      subject: "Computer Aided Machine Design",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/PRB_ComputerAidedMachineDesign_YouTube.pdf",
      rowSpanParent: false,
    },
    {
      sn: "05",
      faculty: "Dr. R. S. Kankale",
      subject: "High Voltages- Part-1",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/RSK_HighVoltages_YouTube.pdf",
    },
    {
      sn: "06",
      faculty: "Prof. M.R.Chavan",
      subject: "Energy Resources and Generation",
      practice: "Industrial Visits/Field Work",
      link: "/uploads/documents/electrical_innovative/MRC_EnergyResources_IndustrialVisit.pdf",
    },
    {
      sn: "07",
      faculty: "Prof. R. K. Mankar",
      subject: "Computer Methods in Power System Analysis",
      practice: "Simulation-Based Learning",
      link: "/uploads/documents/electrical_innovative/RKM_ComputerMethods_Simulation.pdf",
    },
    {
      sn: "08",
      faculty: "Prof. G. N. Bonde",
      subject: "Control System",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/GNB_ControlSystem_YouTube.pdf",
    },
    {
      sn: "",
      faculty: "",
      subject: "Electronic Devices & Circuit",
      practice: "Virtual Lab",
      link: "/uploads/documents/electrical_innovative/GNB_ElectronicDevices_VirtualLab.pdf",
      rowSpanParent: false,
    },
    {
      sn: "09",
      faculty: "Prof. B. S. Rakhonde",
      subject: "Electrical Machine-I",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/BSR_ElectricalMachineI_YouTube.pdf",
    },
    {
      sn: "10",
      faculty: "Prof. V.S.Karale",
      subject: "Electric Circuit Analysis",
      practice: "Virtual Lab",
      link: "/uploads/documents/electrical_innovative/VSK_ElectricCircuitAnalysis_VirtualLab.pdf",
    },
    {
      sn: "",
      faculty: "",
      subject: "Power Electronics",
      practice: "Simulation-Based Learning (Matlab)",
      link: "/uploads/documents/electrical_innovative/VSK_PowerElectronics_Simulation.pdf",
      rowSpanParent: false,
    },
    {
      sn: "11",
      faculty: "Prof. P. R. Dhabe",
      subject: "Digital Signal Processing",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/PRD_DigitalSignalProcessing_YouTube.pdf",
    },
    {
      sn: "",
      faculty: "",
      subject: "Power System",
      practice: "You Tube Videos",
      link: "/uploads/documents/electrical_innovative/PRD_PowerSystem_YouTube.pdf",
      rowSpanParent: false,
    },
  ];

  const defaultCourseOutcomes = [
    {
      id: "be-sem1",
      label: "B.E. Semester-I",
      courses: [
        {
          code: "1A1",
          title: "ENGINEERING MATHEMATICS - I",
          description: "After completing this course, student will be able to",
          outcomes: [
            "Find nth order derivative of functions and product of functions and expand the function in a power series and evaluation of limits of indeterminate forms.",
            "Find the partial derivatives and Jacobian of explicit and implicit functions",
            "Obtain maxima and minima of a function with constraints by using Lagrange's method of undetermined multipliers.",
            "Find the powers and roots of complex numbers, separate the complex quantity in real & imaginary parts, and find the logarithms of complex numbers.",
            "Able to solve ordinary differential equations of first order and first degree by various methods and apply these to solve problems in engineering fields.",
            "Able to solve ordinary differential equations of first order and higher degree by various methods",
          ],
        },
        {
          code: "1A2",
          title: "ENGINEERING PHYSICS",
          description: "After completing this course, student will be able to",
          outcomes: [
            "To apply the knowledge of solid-state devices such as semiconductor diode, Zener diode & LED in various Electronics applications.",
            "To apply the knowledge of Quantum Mechanics in engineering fields",
            "To apply the principles of electron ballistics to demonstrate the functioning of CRO & mass spectrograph.",
            "To apply the principles of geometrical optics such as interference & diffraction in various engineering fields",
            "To apply the principles of fiber optics, LASER & fundamentals of acoustics, ultrasonics & fluid dynamics in various engineering domains",
          ],
        },
        {
          code: "1A3",
          title: "ENGINEERING MECHANICS",
          description: "After completing this course, student will be able to",
          outcomes: [
            "Compose and resolve the forces along with its effect.",
            "Apply principles of statics to the system of rigid bodies and analyse simple structures.",
            "Calculate frictional forces for simple contact, wedges and belt friction.",
            "Locate centroid and calculate moment of inertia.",
            "Calculate various kinematic quantities.",
            "Solve the problems using different kinetic equations related to direct and interconnected particles.",
            "Apply principle of conservation of momentum and laws of impact.",
          ],
        },
      ],
    },
    {
      id: "be-sem2",
      label: "B.E. Semester-II",
      courses: [
        {
          code: "1B1",
          title: "ENGINEERING MATHEMATICS - II",
          description: "After completing this course, student will be able to",
          outcomes: [
            "Use matrices for solving system of simultaneous linear equations. Find Eigen values and Eigen vectors of the matrix. Find inverse of matrix by various methods",
            "Find the Fourier expansion of periodic and non-periodic functions",
            "Explain curve tracing with justification which are useful in applications of integration. Use technique of Differentiation under integral sign to evaluate integrals. Find Product of Vectors",
            "Acquire knowledge about Gamma & Beta function, Reduction Formulae and rectification",
            "Evaluate double integral and its application to find area",
            "Evaluation and application of triple integrals in Engineering problems",
          ],
        },
        {
          code: "1B2",
          title: "ENGINEERING CHEMISTRY",
          description: "After completing this course, student will be able to",
          outcomes: [
            "Identify the various methods of water softening along with application of water and its quality parameters for the use of water in industry",
            "Explain the various types of corrosion, its control methods and battery technology",
            "Identify the various materials such as Cement, lubricant, Ceramics, Refractory, Nonmaterial",
          ],
        },
      ],
    },
  ];

  const defaultSyllabusDocuments = {
    be: [
      { label: "NEP Scheme", link: "" },
      { label: "Scheme", link: "" },
      { label: "Syllabus Second Year (3rd Sem)", link: "" },
      { label: "Syllabus Second Year (4th Sem)", link: "" },
      {
        label:
          "Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP",
        link: "",
      },
      {
        label:
          "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP",
        link: "",
      },
      { label: "Syllabus Third Year (5th & 6th Sem)", link: "" },
      { label: "Syllabus Final Year (7th & 8th Sem)", link: "" },
    ],
    me: [
      {
        label: "Scheme and Syllabus M.E. (1st & 2nd Sem)",
        link: "",
      },
    ],
  };

  const [vmTab, setVmTab] = useState("vision");
  const [poTab, setPoTab] = useState("peo");
  const [showAllPos, setShowAllPos] = useState(false);
  const [researchTab, setResearchTab] = useState("toppers");
  const [projectYear, setProjectYear] = useState("2024-25");
  const [researchYear, setResearchYear] = useState("2024-25");
  const [patentsTab, setPatentsTab] = useState("patents");
  const [patentsYear, setPatentsYear] = useState("2024-25");
  const patentsYears = [
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
  const [internshipYear, setInternshipYear] = useState("2024-25");

  const defaultAcademicsLinks = [
    { id: "overview", label: "Department Overview" },
    { id: "hod", label: "Words from HOD" },
    { id: "vision-mission", label: "Vision, Mission, PEO & PSO" },
    { id: "course-outcomes", label: "Course Outcomes" },
    { id: "curriculum", label: "Schemes and Syllabus" },
    { id: "laboratories", label: "Infrastructure and Laboratories" },
    { id: "pride", label: "Pride of the Department" },
    { id: "placements", label: "Placement Statistics" },
    { id: "activities", label: "Curricular Activities" },
    { id: "student-chapter", label: "Student Chapter (IEI)" },
    { id: "newsletter", label: "Newsletter" },
    { id: "achievements", label: "Achievements" },
    { id: "course-material", label: "Course Material" },
    { id: "projects", label: "UG Projects" },
    { id: "practices", label: "Innovative Practice" },
    { id: "faculty", label: "Faculty Members" },
  ];

  const academicsLinks = t("academicsLinks", defaultAcademicsLinks);

  const defaultIndustryLinks = [
    { id: "industrial-visits", label: "Industrial Visits" },
    { id: "mous", label: "MoUs & Collaborations" },
    { id: "patents", label: "Patents & Publications" },
    { id: "internships", label: "Internship and Training" },
  ];

  const industryLinks = t("industryLinks", defaultIndustryLinks);

  const content = {
    overview: (
      <div className="space-y-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-gray-800 border-b-2 border-orange-500 inline-block pb-2 w-fit">
              <EditableText
                value={t("heroTitle", "Department Overview")}
                onSave={(val) => updateField("heroTitle", val)}
              />
            </h3>

            {/* Featured Video - Larger & Cinematic */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-black aspect-video group relative">
              {isEditing && (
                <div className="absolute top-2 right-2 z-10 bg-white/90 p-2 rounded shadow-lg">
                  <span className="text-xs font-bold text-gray-600 block mb-1">
                    Video URL (Embed Link):
                  </span>
                  <EditableText
                    value={t(
                      "heroVideo",
                      "https://www.youtube-nocookie.com/embed/1uezKM1fWOU",
                    )}
                    onSave={(val) => updateField("heroVideo", val)}
                    className="text-sm w-64"
                  />
                </div>
              )}
              <iframe
                className="w-full h-full"
                src={t(
                  "heroVideo",
                  "https://www.youtube-nocookie.com/embed/1uezKM1fWOU",
                )}
                title="Department of Electrical Engineering, SSGMCE, Shegaon"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="prose max-w-none text-gray-600 leading-relaxed text-justify text-lg space-y-4">
              <EditableText
                value={t(
                  "overview",
                  "The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience.\n\nWe focus on holistic development through innovative teaching-learning processes, industrial training, ongoing projects, and regular interactions with industry experts in the field of power systems, control systems, renewable energy, and smart grid technologies.",
                )}
                onSave={(val) => updateField("overview", val)}
                multiline
                className="whitespace-pre-wrap"
              />
            </div>
          </div>
        </div>

        {/* Courses Section - Minimalistic */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <EditableText
                value={t(
                  "coursesHeaderTitle",
                  "Courses @ Electrical Engineering",
                )}
                onSave={(val) => updateField("coursesHeaderTitle", val)}
              />
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
                          "bachelorEngineeringHeader",
                          "Bachelor of Engineering",
                        )}
                        onSave={(val) =>
                          updateField("bachelorEngineeringHeader", val)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t("overview_be", defaultBeDetails);
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateField("overview_be", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview_be", defaultBeDetails).map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      <EditableText
                        value={label}
                        onSave={(v) =>
                          updateTable("overview_be", i, 0, v, defaultBeDetails)
                        }
                      />
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      <EditableText
                        value={val}
                        onSave={(v) =>
                          updateTable("overview_be", i, 1, v, defaultBeDetails)
                        }
                      />
                    </td>
                    {isEditing && (
                      <td className="px-6 py-3 text-center border border-gray-200">
                        <button
                          onClick={() => {
                            const updated = t(
                              "overview_be",
                              defaultBeDetails,
                            ).filter((_, idx) => idx !== i);
                            updateField("overview_be", updated);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                          title="Delete row"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}

                {/* ME */}
                <tr className="bg-white">
                  <td
                    colSpan={isEditing ? 3 : 2}
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200 mt-4"
                  >
                    <div className="flex justify-between items-center">
                      <EditableText
                        value={t(
                          "masterEngineeringHeader",
                          "Master of Engineering",
                        )}
                        onSave={(val) =>
                          updateField("masterEngineeringHeader", val)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t("overview_me", defaultMeDetails);
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateField("overview_me", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview_me", defaultMeDetails).map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      <EditableText
                        value={label}
                        onSave={(v) =>
                          updateTable("overview_me", i, 0, v, defaultMeDetails)
                        }
                      />
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      <EditableText
                        value={val}
                        onSave={(v) =>
                          updateTable("overview_me", i, 1, v, defaultMeDetails)
                        }
                      />
                    </td>
                    {isEditing && (
                      <td className="px-6 py-3 text-center border border-gray-200">
                        <button
                          onClick={() => {
                            const updated = t(
                              "overview_me",
                              defaultMeDetails,
                            ).filter((_, idx) => idx !== i);
                            updateField("overview_me", updated);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                          title="Delete row"
                        >
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}

                {/* PhD */}
                <tr className="bg-white">
                  <td
                    colSpan={isEditing ? 3 : 2}
                    className="px-6 py-3 font-bold text-ssgmce-blue text-base border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <EditableText
                        value={t(
                          "phdEngineeringHeader",
                          "Ph.D in Electrical Engineering",
                        )}
                        onSave={(val) =>
                          updateField("phdEngineeringHeader", val)
                        }
                      />
                      {isEditing && (
                        <button
                          onClick={() => {
                            const current = t(
                              "overview_phd",
                              defaultPhdDetails,
                            );
                            const newData = [
                              ...current,
                              ["New Field", "New Value"],
                            ];
                            updateField("overview_phd", newData);
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs ml-2"
                        >
                          + Add Row
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
                {t("overview_phd", defaultPhdDetails).map(([label, val], i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-3 text-sm font-bold text-gray-500 w-1/3 border border-gray-200 bg-gray-50/30">
                      <EditableText
                        value={label}
                        onSave={(v) =>
                          updateTable(
                            "overview_phd",
                            i,
                            0,
                            v,
                            defaultPhdDetails,
                          )
                        }
                      />
                    </td>
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium border border-gray-200">
                      <EditableText
                        value={val}
                        onSave={(v) =>
                          updateTable(
                            "overview_phd",
                            i,
                            1,
                            v,
                            defaultPhdDetails,
                          )
                        }
                      />
                    </td>
                    {isEditing && (
                      <td className="px-6 py-3 text-center border border-gray-200">
                        <button
                          onClick={() => {
                            const updated = t(
                              "overview_phd",
                              defaultPhdDetails,
                            ).filter((_, idx) => idx !== i);
                            updateField("overview_phd", updated);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-colors"
                          title="Delete row"
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

          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-ssgmce-blue font-medium">
              <EditableText
                value={t("coursesSignatureHodName", "Dr. S. R. Paraskar")}
                onSave={(val) => updateField("coursesSignatureHodName", val)}
              />
            </p>
            <p className="text-sm text-gray-500">
              <EditableText
                value={t(
                  "coursesSignatureHodTitle",
                  "Head, Dept. of Electrical Engineering (Electronics & Power)",
                )}
                onSave={(val) => updateField("coursesSignatureHodTitle", val)}
              />
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
                    value={t(
                      "vision",
                      "To impart high quality education and excel in research in Electrical Engineering to serve the global society.",
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
                {(
                  t("mission") || [
                    "To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.",
                    "To promote excellence in teaching and research.",
                    "To produce competent, entrepreneurial and committed Electrical Engineers with high human values for professional career and higher studies.",
                  ]
                ).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group relative pr-8"
                  >
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="flex-1">
                      <EditableText
                        value={item}
                        onSave={(val) => {
                          const defaultMission = [
                            "To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.",
                            "To promote excellence in teaching and research.",
                            "To produce competent, entrepreneurial and committed Electrical Engineers with high human values for professional career and higher studies.",
                          ];
                          const currentMission = t("mission")
                            ? [...t("mission")]
                            : defaultMission;
                          currentMission[i] = val;
                          updateField("mission", currentMission);
                        }}
                        multiline
                      />
                    </div>
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const defaultMission = [
                        "To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.",
                        "To promote excellence in teaching and research.",
                        "To produce competent, entrepreneurial and committed Electrical Engineers with high human values for professional career and higher studies.",
                      ];
                      const currentMission = t("mission") || defaultMission;
                      updateField("mission", [
                        ...currentMission,
                        "New Mission Statement",
                      ]);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add Mission
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
                  <EditableText
                    value={t(
                      "peosDescription",
                      "Graduates, within five years after graduation, should demonstrate",
                    )}
                    onSave={(val) => updateField("peosDescription", val)}
                  />
                </p>
                {t("peos", defaultPeos).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group relative pr-8"
                  >
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <div className="flex-1 text-gray-700 leading-relaxed">
                      <EditableText
                        value={item}
                        onSave={(val) => {
                          const updated = [...t("peos", defaultPeos)];
                          updated[i] = val;
                          updateField("peos", updated);
                        }}
                        multiline
                      />
                    </div>
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("peos", defaultPeos),
                        "New Program Educational Objective",
                      ];
                      updateField("peos", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add PEO
                  </button>
                )}
              </motion.div>
            )}

            {poTab === "pso" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {t("psos", defaultPsos).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group relative pr-8"
                  >
                    <div className="mt-1 text-blue-900 text-xl">➤</div>
                    <div className="flex-1 text-gray-700 leading-relaxed">
                      <EditableText
                        value={item}
                        onSave={(val) => {
                          const updated = [...t("psos", defaultPsos)];
                          updated[i] = val;
                          updateField("psos", updated);
                        }}
                        multiline
                      />
                    </div>
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("psos", defaultPsos),
                        "New Program Specific Outcome",
                      ];
                      updateField("psos", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add PSO
                  </button>
                )}
              </motion.div>
            )}

            {poTab === "po" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {t("pos", defaultPos).map((po, i) => {
                    if (!isEditing && !showAllPos && i >= 4) return null;
                    return (
                      <div
                        key={i}
                        className="text-gray-700 leading-relaxed text-sm group relative pr-8"
                      >
                        <strong className="text-gray-900 block mb-1 text-base">
                          <EditableText
                            value={po.t}
                            onSave={(val) => {
                              const updated = [...t("pos", defaultPos)];
                              updated[i].t = val;
                              updateField("pos", updated);
                            }}
                          />
                          :
                        </strong>
                        <div className="flex-1">
                          <EditableText
                            value={po.d}
                            onSave={(val) => {
                              const updated = [...t("pos", defaultPos)];
                              updated[i].d = val;
                              updateField("pos", updated);
                            }}
                            multiline
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {isEditing && (
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("pos", defaultPos),
                        { t: "New PO Title", d: "Description" },
                      ];
                      updateField("pos", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add PO
                  </button>
                )}

                {!isEditing && (
                  <button
                    onClick={() => setShowAllPos(!showAllPos)}
                    className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors mt-2"
                  >
                    {showAllPos ? "Read Less" : "Read More..."}
                  </button>
                )}
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
                    src={t("hodPhoto", hodPhoto)}
                    onSave={(url) => updateField("hodPhoto", url)}
                    alt="Dr. S. R. Paraskar - HOD Electrical"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900">
                <EditableText
                  value={t("hodName", "Dr. S. R. Paraskar")}
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
                    "Department of Electrical Engineering (Electronics & Power)",
                  )}
                  onSave={(val) => updateField("hodDepartmentTitle", val)}
                />
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-ssgmce-orange" />
                  <span>
                    <EditableText
                      value={t("hodEmail1", "hod_elpo@ssgmce.ac.in")}
                      onSave={(val) => updateField("hodEmail1", val)}
                    />
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center">
                  <span>
                    <EditableText
                      value={t("hodEmail2", "srparaskar@ssgmce.ac.in")}
                      onSave={(val) => updateField("hodEmail2", val)}
                    />
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  <EditableText
                    value={t("hodBadge1", "Professor & Head")}
                    onSave={(val) => updateField("hodBadge1", val)}
                  />
                </span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-ssgmce-blue">
                  <EditableText
                    value={t("hodBadge2", "Electrical Engineering")}
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
                  value={t("hodMessageTitle", "Words from HOD")}
                  onSave={(val) => updateField("hodMessageTitle", val)}
                />
              </h3>
              <div className="h-1 w-20 bg-ssgmce-blue mt-2 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify">
              <EditableText
                value={t(
                  "hodMessage",
                  "The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience.\n\nThe department admits students for 4 years B.E. Electrical (Electronics & Power) Programme and 2 years M.E. (Electrical Power System) programme. The academic activities are supported by eight well equipped laboratories. All Laboratories are recognized for research work by Sant Gadge Baba Amravati University, Amravati.\n\nThe department admits students for 4 years B.E. Electrical (Electronics & Power) Programme and 2 years M.E. (Electrical Power System) programme. The academic activities are supported by eight well equipped laboratories. All Laboratories are recognized for research work by Sant Gadge Baba Amravati University, Amravati.\n\nThe department has strong industry interaction and has been involved in development of State of art products for Industry, and consultancy projects.\n\nThe department is strong with senior faculty members and experts in various fields of electrical engineering. The broad area of expertise includes Power system restructuring & reforms, Digital Signal Processing, Application of Artificial Intelligence in Electrical Engineering, Power System Deregulation, Power System Transients, Distribution Automation, High Voltage Engineering Power Quality and FACTS devices, condition monitoring of electrical equipment.",
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
                    value={t("hodName", "Dr. S. R. Paraskar")}
                    onSave={(val) => updateField("hodName", val)}
                  />
                </div>
                <div className="text-sm text-gray-500">
                  <EditableText
                    value={t(
                      "hodDesignation",
                      "Head, Dept. of Electrical Engineering",
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

    "course-outcomes": (
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            <EditableText
              value={t("courseOutcomesTitle", "Course Outcomes")}
              onSave={(val) => updateField("courseOutcomesTitle", val)}
            />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <EditableText
              value={t(
                "courseOutcomesDescription",
                "Comprehensive course outcomes for all semesters of B.E. Electrical (Electronics & Power) and M.E. (Electrical Power System)",
              )}
              onSave={(val) => updateField("courseOutcomesDescription", val)}
              multiline
            />
          </p>
        </div>

        {/* B.E. Course Outcomes */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#003366] px-6 py-4 text-center">
            <h3 className="text-xl font-bold text-white">
              <EditableText
                value={t("beCourseOutcomesHeader", "Course Outcomes")}
                onSave={(val) => updateField("beCourseOutcomesHeader", val)}
              />
            </h3>
          </div>

          <div className="p-6 space-y-2">
            {t("courseOutcomes", defaultCourseOutcomes).map(
              (semester, semIdx) => (
                <div
                  key={semester.id}
                  className="border-b border-gray-200 pb-2"
                >
                  <button
                    onClick={() =>
                      setExpandedSemester(
                        expandedSemester === semester.id ? null : semester.id,
                      )
                    }
                    className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-700">
                      {isEditing ? (
                        <EditableText
                          value={semester.label}
                          onSave={(val) => {
                            const updated = [
                              ...t("courseOutcomes", defaultCourseOutcomes),
                            ];
                            updated[semIdx].label = val;
                            updateField("courseOutcomes", updated);
                          }}
                        />
                      ) : (
                        semester.label
                      )}
                    </span>
                    <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                      {expandedSemester === semester.id ? "Hide" : "View"}
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedSemester === semester.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 py-4 bg-gray-50 space-y-6">
                          {semester.courses.map((course, courseIdx) => (
                            <div key={courseIdx} className="relative group">
                              <h4 className="font-bold text-gray-800 mb-2">
                                <EditableText
                                  value={`${course.code} ${course.title}`}
                                  onSave={(val) => {
                                    const updated = [
                                      ...t(
                                        "courseOutcomes",
                                        defaultCourseOutcomes,
                                      ),
                                    ];
                                    const parts = val.split(" ");
                                    updated[semIdx].courses[courseIdx].code =
                                      parts[0] || course.code;
                                    updated[semIdx].courses[courseIdx].title =
                                      parts.slice(1).join(" ") || course.title;
                                    updateField("courseOutcomes", updated);
                                  }}
                                />
                                {isEditing && (
                                  <button
                                    onClick={() => {
                                      const updated = [
                                        ...t(
                                          "courseOutcomes",
                                          defaultCourseOutcomes,
                                        ),
                                      ];
                                      updated[semIdx].courses.splice(
                                        courseIdx,
                                        1,
                                      );
                                      updateField("courseOutcomes", updated);
                                    }}
                                    className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                                  >
                                    Delete Course
                                  </button>
                                )}
                              </h4>
                              <p className="text-sm text-gray-600 mb-2">
                                <EditableText
                                  value={course.description}
                                  onSave={(val) => {
                                    const updated = [
                                      ...t(
                                        "courseOutcomes",
                                        defaultCourseOutcomes,
                                      ),
                                    ];
                                    updated[semIdx].courses[
                                      courseIdx
                                    ].description = val;
                                    updateField("courseOutcomes", updated);
                                  }}
                                />
                              </p>
                              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                {course.outcomes.map((outcome, outcomeIdx) => (
                                  <li
                                    key={outcomeIdx}
                                    className="relative group"
                                  >
                                    <EditableText
                                      value={outcome}
                                      onSave={(val) => {
                                        const updated = [
                                          ...t(
                                            "courseOutcomes",
                                            defaultCourseOutcomes,
                                          ),
                                        ];
                                        updated[semIdx].courses[
                                          courseIdx
                                        ].outcomes[outcomeIdx] = val;
                                        updateField("courseOutcomes", updated);
                                      }}
                                      multiline
                                    />
                                    {isEditing && (
                                      <button
                                        onClick={() => {
                                          const updated = [
                                            ...t(
                                              "courseOutcomes",
                                              defaultCourseOutcomes,
                                            ),
                                          ];
                                          updated[semIdx].courses[
                                            courseIdx
                                          ].outcomes.splice(outcomeIdx, 1);
                                          updateField(
                                            "courseOutcomes",
                                            updated,
                                          );
                                        }}
                                        className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                                      >
                                        Delete
                                      </button>
                                    )}
                                  </li>
                                ))}
                              </ol>
                              {isEditing && (
                                <button
                                  onClick={() => {
                                    const updated = [
                                      ...t(
                                        "courseOutcomes",
                                        defaultCourseOutcomes,
                                      ),
                                    ];
                                    updated[semIdx].courses[
                                      courseIdx
                                    ].outcomes.push("New outcome");
                                    updateField("courseOutcomes", updated);
                                  }}
                                  className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                                >
                                  + Add Outcome
                                </button>
                              )}
                            </div>
                          ))}
                          {isEditing && (
                            <button
                              onClick={() => {
                                const updated = [
                                  ...t("courseOutcomes", defaultCourseOutcomes),
                                ];
                                updated[semIdx].courses.push({
                                  code: "NEW",
                                  title: "New Course",
                                  description:
                                    "After completing this course, student will be able to",
                                  outcomes: ["New outcome 1", "New outcome 2"],
                                });
                                updateField("courseOutcomes", updated);
                              }}
                              className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                              + Add Course
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ),
            )}
            {isEditing && (
              <button
                onClick={() => {
                  const updated = [
                    ...t("courseOutcomes", defaultCourseOutcomes),
                  ];
                  updated.push({
                    id: `be-sem${updated.length + 1}`,
                    label: `B.E. Semester-${updated.length + 1}`,
                    courses: [
                      {
                        code: "NEW",
                        title: "New Course",
                        description:
                          "After completing this course, student will be able to",
                        outcomes: ["New outcome 1"],
                      },
                    ],
                  });
                  updateField("courseOutcomes", updated);
                }}
                className="w-full mt-4 px-6 py-3 bg-ssgmce-orange text-white rounded-lg font-bold hover:bg-orange-600"
              >
                + Add Semester
              </button>
            )}
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
                B.E. (Electrical Engineering)
              </h4>
            </div>
            <div className="md:col-span-8 p-6">
              <ul className="space-y-4">
                {t("syllabusDocuments.be", defaultSyllabusDocuments.be).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                        {isEditing ? (
                          <div className="flex-1 space-y-2">
                            <EditableText
                              value={item.label}
                              onSave={(val) => {
                                const current = t(
                                  "syllabusDocuments",
                                  defaultSyllabusDocuments,
                                );
                                const updated = { ...current };
                                updated.be[i].label = val;
                                updateField("syllabusDocuments", updated);
                              }}
                              placeholder="Document name"
                            />
                            <EditableText
                              value={item.link}
                              onSave={(val) => {
                                const current = t(
                                  "syllabusDocuments",
                                  defaultSyllabusDocuments,
                                );
                                const updated = { ...current };
                                updated.be[i].link = val;
                                updateField("syllabusDocuments", updated);
                              }}
                              placeholder="Enter document URL (http://... or /uploads/documents/...)"
                              className="text-xs text-gray-500 italic"
                            />
                          </div>
                        ) : (
                          <span className="text-gray-700 text-sm font-medium">
                            {item.label}
                          </span>
                        )}
                        {isEditing ? (
                          <button
                            onClick={() => {
                              const current = t(
                                "syllabusDocuments",
                                defaultSyllabusDocuments,
                              );
                              const updated = { ...current };
                              updated.be.splice(i, 1);
                              updateField("syllabusDocuments", updated);
                            }}
                            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        ) : (
                          <a
                            href={item.link || "#"}
                            target={item.link ? "_blank" : undefined}
                            rel={item.link ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                              if (!item.link) {
                                e.preventDefault();
                                alert(
                                  "No document link available. Please contact the administrator.",
                                );
                              }
                            }}
                            className={`text-xs font-bold uppercase tracking-wide shrink-0 ${
                              item.link
                                ? "text-ssgmce-blue hover:text-ssgmce-orange hover:underline cursor-pointer"
                                : "text-gray-400 cursor-not-allowed"
                            }`}
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </li>
                  ),
                )}
                {isEditing && (
                  <button
                    onClick={() => {
                      const current = t(
                        "syllabusDocuments",
                        defaultSyllabusDocuments,
                      );
                      const updated = { ...current };
                      updated.be.push({ label: "New Document", link: "" });
                      updateField("syllabusDocuments", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add Document
                  </button>
                )}
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
                {t("syllabusDocuments.me", defaultSyllabusDocuments.me).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        {isEditing ? (
                          <div className="flex-1 space-y-2">
                            <EditableText
                              value={item.label}
                              onSave={(val) => {
                                const current = t(
                                  "syllabusDocuments",
                                  defaultSyllabusDocuments,
                                );
                                const updated = { ...current };
                                updated.me[i].label = val;
                                updateField("syllabusDocuments", updated);
                              }}
                              placeholder="Document name"
                            />
                            <EditableText
                              value={item.link}
                              onSave={(val) => {
                                const current = t(
                                  "syllabusDocuments",
                                  defaultSyllabusDocuments,
                                );
                                const updated = { ...current };
                                updated.me[i].link = val;
                                updateField("syllabusDocuments", updated);
                              }}
                              placeholder="Enter document URL (http://... or /uploads/documents/...)"
                              className="text-xs text-gray-500 italic"
                            />
                          </div>
                        ) : (
                          <span className="text-gray-700 text-sm font-medium">
                            {item.label}
                          </span>
                        )}
                        {isEditing ? (
                          <button
                            onClick={() => {
                              const current = t(
                                "syllabusDocuments",
                                defaultSyllabusDocuments,
                              );
                              const updated = { ...current };
                              updated.me.splice(i, 1);
                              updateField("syllabusDocuments", updated);
                            }}
                            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        ) : (
                          <a
                            href={item.link || "#"}
                            target={item.link ? "_blank" : undefined}
                            rel={item.link ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                              if (!item.link) {
                                e.preventDefault();
                                alert(
                                  "No document link available. Please contact the administrator.",
                                );
                              }
                            }}
                            className={`text-xs font-bold uppercase tracking-wide shrink-0 ${
                              item.link
                                ? "text-ssgmce-blue hover:text-ssgmce-orange hover:underline cursor-pointer"
                                : "text-gray-400 cursor-not-allowed"
                            }`}
                          >
                            Download
                          </a>
                        )}
                      </div>
                    </li>
                  ),
                )}
                {isEditing && (
                  <button
                    onClick={() => {
                      const current = t(
                        "syllabusDocuments",
                        defaultSyllabusDocuments,
                      );
                      const updated = { ...current };
                      updated.me.push({ label: "New Document", link: "" });
                      updateField("syllabusDocuments", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add Document
                  </button>
                )}
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
          {t("laboratories", defaultLaboratories).map((lab, index) => (
            <div
              key={index}
              className="grid md:grid-cols-12 border-b border-gray-200 last:border-b-0 relative"
            >
              {/* Delete Button */}
              {isEditing && (
                <button
                  onClick={() => {
                    const updated = t(
                      "laboratories",
                      defaultLaboratories,
                    ).filter((_, i) => i !== index);
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
                      const updated = [
                        ...t("laboratories", defaultLaboratories),
                      ];
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
                          const updated = [
                            ...t("laboratories", defaultLaboratories),
                          ];
                          updated[index].image = url;
                          updateField("laboratories", updated);
                        }
                      }
                    }}
                  >
                    <span className="text-6xl">🔬</span>
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
                      const updated = [
                        ...t("laboratories", defaultLaboratories),
                      ];
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
                      <EditableText
                        value={t(
                          "labResourcesLabel",
                          "Lab Resources / Facilities:",
                        )}
                        onSave={(val) => updateField("labResourcesLabel", val)}
                      />
                    </h5>
                    <div className="text-gray-700 text-sm leading-relaxed">
                      <EditableText
                        value={lab.resources}
                        onSave={(val) => {
                          const updated = [
                            ...t("laboratories", defaultLaboratories),
                          ];
                          updated[index].resources = val;
                          updateField("laboratories", updated);
                        }}
                      />
                    </div>
                  </div>
                  {(lab.facilities || isEditing) && (
                    <div>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <EditableText
                          value={lab.facilities || "Additional facilities..."}
                          onSave={(val) => {
                            const updated = [
                              ...t("laboratories", defaultLaboratories),
                            ];
                            updated[index].facilities = val;
                            updateField("laboratories", updated);
                          }}
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
                    ...t("laboratories", defaultLaboratories),
                    {
                      name: "New Laboratory",
                      image: "",
                      resources: "Lab resources and equipment...",
                      facilities: "Additional facilities...",
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

    faculty: (
      <div className="space-y-10">
        <div className="text-center border-b border-gray-200 pb-6 mb-8">
          <h3 className="text-3xl font-bold text-gray-900">
            <EditableText
              value={t("facultyTitle", "Our Faculty")}
              onSave={(val) => updateField("facultyTitle", val)}
            />
          </h3>
          <div className="text-gray-500 mt-2">
            <EditableText
              value={t(
                "facultySubtitle",
                "Department of Electrical Engineering (Electronics & Power)",
              )}
              onSave={(val) => updateField("facultySubtitle", val)}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {t("facultyData", defaultFacultyData).map((fac, i) => (
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
                    const updated = t("facultyData", defaultFacultyData).filter(
                      (_, idx) => idx !== i,
                    );
                    updateField("facultyData", updated);
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
                    src={fac.photo}
                    onSave={(url) => {
                      const updated = [...t("facultyData", defaultFacultyData)];
                      updated[i].photo = url;
                      updateField("facultyData", updated);
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
                          const updated = [
                            ...t("facultyData", defaultFacultyData),
                          ];
                          updated[i].photo = url;
                          updateField("facultyData", updated);
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
                      const updated = [...t("facultyData", defaultFacultyData)];
                      updated[i].name = val;
                      updateField("facultyData", updated);
                    }}
                  />
                </h4>
                <div className="text-ssgmce-blue font-medium text-sm mb-3 uppercase tracking-wide text-[11px]">
                  <EditableText
                    value={fac.role}
                    onSave={(val) => {
                      const updated = [...t("facultyData", defaultFacultyData)];
                      updated[i].role = val;
                      updateField("facultyData", updated);
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
                          onSave={(val) => updateField("facultyAreaLabel", val)}
                        />
                      </span>
                      <EditableText
                        value={
                          Array.isArray(fac.area)
                            ? fac.area.join(", ")
                            : fac.area || "Research areas..."
                        }
                        onSave={(val) => {
                          const updated = [
                            ...t("facultyData", defaultFacultyData),
                          ];
                          // Convert comma-separated string back to array
                          updated[i].area = val.split(",").map((s) => s.trim());
                          updateField("facultyData", updated);
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
                            const updated = [
                              ...t("facultyData", defaultFacultyData),
                            ];
                            updated[i].email = val;
                            updateField("facultyData", updated);
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
                            const updated = [
                              ...t("facultyData", defaultFacultyData),
                            ];
                            updated[i].email2 = val;
                            updateField("facultyData", updated);
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
                            const updated = [
                              ...t("facultyData", defaultFacultyData),
                            ];
                            updated[i].phone = val;
                            updateField("facultyData", updated);
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

        {/* Add New Faculty Button */}
        {isEditing && (
          <div className="mt-6">
            <button
              onClick={() => {
                const updated = [
                  ...t("facultyData", defaultFacultyData),
                  {
                    name: "New Faculty Member",
                    role: "Assistant Professor",
                    area: ["Research Area"],
                    email: "newfaculty@ssgmce.ac.in",
                    phone: "+91XXXXXXXXXX",
                    photo: "",
                  },
                ];
                updateField("facultyData", updated);
              }}
              className="w-full py-3 px-4 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors font-medium"
            >
              + Add New Faculty Member
            </button>
          </div>
        )}
      </div>
    ),

    pride: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
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
              onClick={() => setResearchTab(tab.id)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                researchTab === tab.id
                  ? "bg-[#003366] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* University Toppers */}
        {researchTab === "toppers" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Year
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Name of the Student
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Univ. Topper Rank
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      Percentage/CGPA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("prideToppers", defaultPrideToppers).map((student, i) => (
                    <tr
                      key={i}
                      className="hover:bg-gray-50 transition-colors relative group"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.year}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideToppers", defaultPrideToppers),
                            ];
                            updated[i].year = val;
                            updateField("prideToppers", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={student.name}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideToppers", defaultPrideToppers),
                            ];
                            updated[i].name = val;
                            updateField("prideToppers", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-ssgmce-blue font-semibold">
                        <EditableText
                          value={student.rank}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideToppers", defaultPrideToppers),
                            ];
                            updated[i].rank = val;
                            updateField("prideToppers", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.cgpa}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideToppers", defaultPrideToppers),
                            ];
                            updated[i].cgpa = val;
                            updateField("prideToppers", updated);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isEditing && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("prideToppers", defaultPrideToppers),
                        {
                          year: "2025",
                          name: "New Student",
                          rank: "I",
                          cgpa: "9.00",
                        },
                      ];
                      updateField("prideToppers", updated);
                    }}
                    className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                  >
                    + Add New Student
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Top Alumnis */}
        {researchTab === "alumni" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideAlumniNameHeader", "Names of Alumni")}
                        onSave={(val) =>
                          updateField("prideAlumniNameHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideAlumniPositionHeader", "Position")}
                        onSave={(val) =>
                          updateField("prideAlumniPositionHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t(
                          "prideAlumniOrgHeader",
                          "Names of Organisation",
                        )}
                        onSave={(val) =>
                          updateField("prideAlumniOrgHeader", val)
                        }
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("prideAlumni", defaultPrideAlumni).map((alumni, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={alumni.name}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideAlumni", defaultPrideAlumni),
                            ];
                            updated[i].name = val;
                            updateField("prideAlumni", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={alumni.position}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideAlumni", defaultPrideAlumni),
                            ];
                            updated[i].position = val;
                            updateField("prideAlumni", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={alumni.org}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideAlumni", defaultPrideAlumni),
                            ];
                            updated[i].org = val;
                            updateField("prideAlumni", updated);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isEditing && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("prideAlumni", defaultPrideAlumni),
                        {
                          name: "New Alumni",
                          position: "Position",
                          org: "Organization",
                        },
                      ];
                      updateField("prideAlumni", updated);
                    }}
                    className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                  >
                    + Add New Alumni
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* GATE Qualified */}
        {researchTab === "gate" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideGateYearHeader", "Year")}
                        onSave={(val) =>
                          updateField("prideGateYearHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideGateSrNoHeader", "Sr.No")}
                        onSave={(val) =>
                          updateField("prideGateSrNoHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideGateNameHeader", "Name of student")}
                        onSave={(val) =>
                          updateField("prideGateNameHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideGateScoreHeader", "Valid Score")}
                        onSave={(val) =>
                          updateField("prideGateScoreHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                      <EditableText
                        value={t("prideGateCategoryHeader", "Category")}
                        onSave={(val) =>
                          updateField("prideGateCategoryHeader", val)
                        }
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("prideGate", defaultPrideGate).map((student, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.year}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideGate", defaultPrideGate),
                            ];
                            updated[i].year = val;
                            updateField("prideGate", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.sr}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideGate", defaultPrideGate),
                            ];
                            updated[i].sr = val;
                            updateField("prideGate", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <EditableText
                          value={student.name}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideGate", defaultPrideGate),
                            ];
                            updated[i].name = val;
                            updateField("prideGate", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.score}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideGate", defaultPrideGate),
                            ];
                            updated[i].score = val;
                            updateField("prideGate", updated);
                          }}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <EditableText
                          value={student.category}
                          onSave={(val) => {
                            const updated = [
                              ...t("prideGate", defaultPrideGate),
                            ];
                            updated[i].category = val;
                            updateField("prideGate", updated);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isEditing && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("prideGate", defaultPrideGate),
                        {
                          year: "2022",
                          sr: "1",
                          name: "New Student",
                          score: "0.00",
                          category: "OPEN",
                        },
                      ];
                      updateField("prideGate", updated);
                    }}
                    className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                  >
                    + Add New Student
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    ),

    "student-chapter": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("studentChapterTitle", "Student Chapter (IEI)")}
            onSave={(val) => updateField("studentChapterTitle", val)}
          />
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                <EditableText
                  value={t(
                    "studentChapterOrgName",
                    "The Institution of Engineers (India)",
                  )}
                  onSave={(val) => updateField("studentChapterOrgName", val)}
                />
              </h4>
              <h5 className="text-lg font-semibold text-ssgmce-blue mb-4">
                <EditableText
                  value={t(
                    "studentChapterSubTitle",
                    "Department of Electrical Engineering Students' Chapter :",
                  )}
                  onSave={(val) => updateField("studentChapterSubTitle", val)}
                />
              </h5>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <div className="mb-4">
                <EditableText
                  value={t(
                    "studentChapterDesc",
                    "In order to provide a platform to our students to explore their hidden talent & to keep them abreast with the latest technology, The Institution of Engineers (India) - Department of Electrical Engineering Students' Chapter called as IEI - Electrical is formed.",
                  )}
                  onSave={(val) => updateField("studentChapterDesc", val)}
                  multiline
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h5 className="text-red-600 font-bold text-lg mb-3">
                  Objectives :
                </h5>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  {t(
                    "studentChapterObjectives",
                    defaultStudentChapterObjectives,
                  ).map((objective, i) => (
                    <li key={i} className="group relative pr-8">
                      <EditableText
                        value={objective}
                        onSave={(val) => {
                          const updated = [
                            ...t(
                              "studentChapterObjectives",
                              defaultStudentChapterObjectives,
                            ),
                          ];
                          updated[i] = val;
                          updateField("studentChapterObjectives", updated);
                        }}
                      />
                    </li>
                  ))}
                </ul>
                {isEditing && (
                  <button
                    onClick={() => {
                      const updated = [
                        ...t(
                          "studentChapterObjectives",
                          defaultStudentChapterObjectives,
                        ),
                        "New Objective",
                      ];
                      updateField("studentChapterObjectives", updated);
                    }}
                    className="mt-4 px-4 py-2 bg-white text-ssgmce-blue border border-ssgmce-blue rounded hover:bg-ssgmce-blue hover:text-white transition-colors text-sm"
                  >
                    + Add Objective
                  </button>
                )}
              </div>

              <div className="text-center text-lg font-semibold text-ssgmce-blue italic">
                <EditableText
                  value={t(
                    "studentChapterQuote",
                    "IEI - Electrical helps the students to become a Perfect Technocrat with Good Human Values",
                  )}
                  onSave={(val) => updateField("studentChapterQuote", val)}
                  multiline
                />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex flex-col items-center">
                  <a
                    href={t(
                      "studentChapterLink",
                      "https://www.ssgmce.ac.in/IEI_ELPO/",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-ssgmce-blue text-white font-semibold rounded-lg hover:bg-ssgmce-dark-blue transition-colors shadow-md hover:shadow-lg mb-2"
                  >
                    <EditableText
                      value={t(
                        "studentChapterLinkText",
                        "Visit IEI Web Portal for more details",
                      )}
                      onSave={(val) =>
                        updateField("studentChapterLinkText", val)
                      }
                    />
                    <FaAngleRight className="ml-2" />
                  </a>
                  {isEditing && (
                    <div className="bg-gray-100 p-2 rounded text-xs text-gray-600">
                      Link URL:
                      <EditableText
                        value={t(
                          "studentChapterLink",
                          "https://www.ssgmce.ac.in/IEI_ELPO/",
                        )}
                        onSave={(val) => updateField("studentChapterLink", val)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    projects: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          UG Projects
        </h3>

        {/* Year Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
          {["2024-25", "2023-24"].map((year) => (
            <button
              key={year}
              onClick={() => setProjectYear(year)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all text-sm ${
                projectYear === year
                  ? "bg-[#003366] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              UG Project {year}
            </button>
          ))}
        </div>

        {/* Projects for 2024-25 */}
        {projectYear === "2024-25" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                      <EditableText
                        value={t("projectGroupNoHeader", "Group No.")}
                        onSave={(val) =>
                          updateField("projectGroupNoHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                      <EditableText
                        value={t("projectTitleHeader", "Project Title")}
                        onSave={(val) => updateField("projectTitleHeader", val)}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("ugProjects2425", defaultUgProjects2425).map(
                    (project, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                          <EditableText
                            value={project.no}
                            onSave={(val) => {
                              const updated = [
                                ...t("ugProjects2425", defaultUgProjects2425),
                              ];
                              updated[i].no = val;
                              updateField("ugProjects2425", updated);
                            }}
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <EditableText
                            value={project.title}
                            onSave={(val) => {
                              const updated = [
                                ...t("ugProjects2425", defaultUgProjects2425),
                              ];
                              updated[i].title = val;
                              updateField("ugProjects2425", updated);
                            }}
                            multiline
                          />
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
              {isEditing && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("ugProjects2425", defaultUgProjects2425),
                        {
                          no: `${t("ugProjects2425", defaultUgProjects2425).length + 1}.`,
                          title: "New Project Title",
                        },
                      ];
                      updateField("ugProjects2425", updated);
                    }}
                    className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                  >
                    + Add New Project
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects for 2023-24 */}
        {projectYear === "2023-24" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                      <EditableText
                        value={t("projectGroupNoHeader", "Group No.")}
                        onSave={(val) =>
                          updateField("projectGroupNoHeader", val)
                        }
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                      <EditableText
                        value={t("projectTitleHeader", "Project Title")}
                        onSave={(val) => updateField("projectTitleHeader", val)}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {t("ugProjects2324", defaultUgProjects2324).map(
                    (project, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                          <EditableText
                            value={project.no}
                            onSave={(val) => {
                              const updated = [
                                ...t("ugProjects2324", defaultUgProjects2324),
                              ];
                              updated[i].no = val;
                              updateField("ugProjects2324", updated);
                            }}
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <EditableText
                            value={project.title}
                            onSave={(val) => {
                              const updated = [
                                ...t("ugProjects2324", defaultUgProjects2324),
                              ];
                              updated[i].title = val;
                              updateField("ugProjects2324", updated);
                            }}
                            multiline
                          />
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
              {isEditing && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <button
                    onClick={() => {
                      const updated = [
                        ...t("ugProjects2324", defaultUgProjects2324),
                        {
                          no: `${t("ugProjects2324", defaultUgProjects2324).length + 1}.`,
                          title: "New Project Title",
                        },
                      ];
                      updateField("ugProjects2324", updated);
                    }}
                    className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                  >
                    + Add New Project
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
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
              onSave={(val) => updateField("activitiesTitle", val)}
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
                            updateField("activities", arr);
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
                updateField("activities", updated);
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
              onSave={(val) => updateField("newsletterTitle", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "newsletterDescription",
                "Stay updated with the latest happenings, student achievements, faculty contributions, and department events through our periodic newsletters.",
              )}
              onSave={(val) => updateField("newsletterDescription", val)}
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
                Department of Electrical Engineering (Electronics &amp; Power)
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
                              .title || "News Letter 2024-25 (Spring Semester)"
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
              Department of Electrical Engineering
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
              value={t("courseMaterialTitle", "Course Material")}
              onSave={(val) => updateField("courseMaterialTitle", val)}
            />
          </h3>
          <div className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            <EditableText
              value={t(
                "courseMaterialDescription",
                "Access comprehensive course materials, lecture notes, assignments, and study resources for all semesters.",
              )}
              onSave={(val) => updateField("courseMaterialDescription", val)}
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
                Department of Electrical Engineering
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
                  <th className="px-6 py-4 font-bold">Year / Semester</th>
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
                            onSave={(val) => {
                              const updated = [
                                ...t("courseMaterials", defaultCourseMaterials),
                              ];
                              updated[i] = { ...updated[i], title: val };
                              updateField("courseMaterials", updated);
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
                                    "courseMaterials",
                                    defaultCourseMaterials,
                                  ),
                                ];
                                updated[i] = { ...updated[i], link: val };
                                updateField("courseMaterials", updated);
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
              </tbody>
            </table>
          </div>
          <div className="p-4 text-xs text-gray-400 text-center bg-gray-50 border-t border-gray-100">
            Click on "Access Drive" to view and download course materials from
            the respective semester's shared folder.
          </div>
          {isEditing && (
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("courseMaterials", defaultCourseMaterials),
                    { year: "New Year", title: "New Semester", link: "#" },
                  ];
                  updateField("courseMaterials", updated);
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
                      {item.rowSpanParent !== false && (
                        <td
                          className="px-6 py-4 text-center font-medium text-gray-900"
                          rowSpan={
                            // Calculate rowspan: count consecutive items after this one with rowSpanParent === false
                            (() => {
                              if (!item.sn) return undefined;
                              const practices = t(
                                "innovativePractices",
                                defaultInnovativePractices,
                              );
                              let span = 1;
                              for (let j = idx + 1; j < practices.length; j++) {
                                if (practices[j].rowSpanParent === false)
                                  span++;
                                else break;
                              }
                              return span > 1 ? span : undefined;
                            })()
                          }
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
    "industrial-visits": (() => {
      const industrialVisitPhotos = [
        {
          image: ivAdaniDahanu2025,
          caption:
            "Third year BE Electrical Engineering students along with faculty members visited Adani Dahanu Thermal Power Station, Mumbai on 26 June 2025",
          location: "Mumbai",
          date: "26 June 2025",
        },
        {
          image: ivApatapaAkola2025,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited 400 KV Transmission Station at APATAPA Akola on 27 March 2025",
          location: "Akola",
          date: "27 March 2025",
        },
        {
          image: ivAvaadaSolar2025,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited Avaada Energy 100 MW Solar Power Plant Near Balapur on 27 March 2025",
          location: "Balapur",
          date: "27 March 2025",
        },
        {
          image: ivTataPowerShahad2024,
          caption:
            "Second Year BE Electrical Engineering students along with faculty members visited TATA Power Shahad, Mumbai on 27 November 2024",
          location: "Mumbai",
          date: "27 November 2024",
        },
        {
          image: ivAdaniDahanu2024,
          caption:
            "Third year BE Electrical Engineering students along with faculty members visited Adani Dahanu Thermal Power Station, Mumbai on 8 June 2024",
          location: "Mumbai",
          date: "8 June 2024",
        },
        {
          image: ivTataPowerMumbai2023,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited TATA Power, Mumbai on 11 December 2023",
          location: "Mumbai",
          date: "11 December 2023",
        },
        {
          image: ivThermalParas2023,
          caption:
            "Second Year BE Electrical Engineering students along with faculty members visited Thermal Power Station, Paras on 26th October 2023",
          location: "Paras",
          date: "26 October 2023",
        },
        {
          image: ivAdaniPowerMumbai,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited Adani Power Station, Mumbai",
          location: "Mumbai",
          date: "2022-23",
        },
        {
          image: ivThermalParas2022,
          caption:
            "Second Year BE Electrical Engineering students along with faculty members visited Thermal Power Station, Paras on 28th November 2022",
          location: "Paras",
          date: "28 November 2022",
        },
        {
          image: ivAbbNashik2018,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited M/s. ABB Ltd. Nashik on 27th August 2018",
          location: "Nashik",
          date: "27 August 2018",
        },
        {
          image: ivPowerinstNashik2018,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited M/s. Powerinst Pvt. Ltd. Nashik on 27th August 2018",
          location: "Nashik",
          date: "27 August 2018",
        },
        {
          image: ivLegrandNashik2018,
          caption:
            "Third Year BE Electrical Engineering students along with faculty members visited M/s Legrand (India) Pvt. Ltd. Nashik on 28th August 2018",
          location: "Nashik",
          date: "28 August 2018",
        },
        {
          image: ivParasThermal2018,
          caption:
            "Second Year BE Electrical Engineering students visited Thermal Power Station Paras on 12th September 2018",
          location: "Paras",
          date: "12 September 2018",
        },
        {
          image: ivVishwajeetNashik,
          caption:
            "Discussion with Expert from Industries during visit at Vishwajeet Capacitors Pvt Ltd. Nashik",
          location: "Nashik",
          date: "2017-18",
        },
        {
          image: ivAdaniMundra2016,
          caption:
            "Industrial visit at Adani Power Plant, Mundra Gujarat on 4-6 March 2016",
          location: "Mundra, Gujarat",
          date: "4-6 March 2016",
        },
      ];

      const industrialVisitTable = [
        {
          sn: 1,
          industry: "Adani Dahanu Thermal Power Station, Mumbai",
          class: "Third Year",
          date: "26/06/2025",
          students: "-",
        },
        {
          sn: 2,
          industry: "400 KV Transmission Station, APATAPA Akola",
          class: "Third Year",
          date: "27/03/2025",
          students: "-",
        },
        {
          sn: 3,
          industry: "Avaada Energy 100 MW Solar Power Plant, Balapur",
          class: "Third Year",
          date: "27/03/2025",
          students: "-",
        },
        {
          sn: 4,
          industry: "TATA Power Shahad, Mumbai",
          class: "Second Year",
          date: "27/11/2024",
          students: "-",
        },
        {
          sn: 5,
          industry: "Adani Dahanu Thermal Power Station, Mumbai",
          class: "Third Year",
          date: "08/06/2024",
          students: "-",
        },
        {
          sn: 6,
          industry: "TATA Power, Mumbai",
          class: "Third Year",
          date: "11/12/2023",
          students: "-",
        },
        {
          sn: 7,
          industry: "Thermal Power Station, Paras",
          class: "Second Year",
          date: "26/10/2023",
          students: "-",
        },
        {
          sn: 8,
          industry: "Adani Power Station, Mumbai",
          class: "Third Year",
          date: "2022-23",
          students: "-",
        },
        {
          sn: 9,
          industry: "Thermal Power Station, Paras",
          class: "Second Year",
          date: "28/11/2022",
          students: "-",
        },
        {
          sn: 10,
          industry: "M/s. ABB Ltd., Nashik",
          class: "Third Year",
          date: "27/08/2018",
          students: "-",
        },
        {
          sn: 11,
          industry: "M/s. Powerinst Pvt. Ltd., Nashik",
          class: "Third Year",
          date: "27/08/2018",
          students: "-",
        },
        {
          sn: 12,
          industry: "M/s Legrand (India) Pvt. Ltd., Nashik",
          class: "Third Year",
          date: "28/08/2018",
          students: "-",
        },
        {
          sn: 13,
          industry: "Thermal Power Station, Paras",
          class: "Second Year",
          date: "12/09/2018",
          students: "-",
        },
        {
          sn: 14,
          industry: "Vishwajeet Capacitors Pvt Ltd., Nashik",
          class: "Third Year",
          date: "2017-18",
          students: "-",
        },
        {
          sn: 15,
          industry: "Adani Power Plant, Mundra, Gujarat",
          class: "Third Year",
          date: "04-06/03/2016",
          students: "-",
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
              culture through structured visits to leading power sector
              organizations and industries.
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
                    org: "I Robots Innovative Solutions, Pune",
                    date: "05-Apr-2025",
                    report:
                      "/uploads/documents/electrical_mous/MOU_IRobots_Innovative_2025.pdf",
                  },
                  {
                    no: "2.",
                    org: "TATA Power Skill Development Institute (TPSDI), Shahad Mumbai",
                    date: "21-Jun-2024",
                    report:
                      "/uploads/documents/electrical_mous/MOU_TPSDI_Mumbai_2024.pdf",
                  },
                  {
                    no: "3.",
                    org: "Adani Electricity Mumbai Limited, ADTPS, Dahanu",
                    date: "01-Jun-2024",
                    report:
                      "/uploads/documents/electrical_mous/MOU_Adani_ADTPS_Dahanu_2024.pdf",
                  },
                  {
                    no: "4.",
                    org: "Mew Technology, Bengaluru",
                    date: "04-Mar-2024",
                    report:
                      "/uploads/documents/electrical_mous/MOU_Mew_Technology_Bengaluru_2024.pdf",
                  },
                  {
                    no: "5.",
                    org: "Samarthan System Private Limited, Pune",
                    date: "10-Jan-2024",
                    report:
                      "/uploads/documents/electrical_mous/MOU_Samarthan_System_Pune_2024.pdf",
                  },
                  {
                    no: "6.",
                    org: "SCR Elektronics, Mumbai",
                    date: "08-Feb-2023",
                    report:
                      "/uploads/documents/electrical_mous/MOU_SCR_Elektronics_Mumbai_2023.pdf",
                  },
                  {
                    no: "7.",
                    org: "Mitsubishi Electric India Private Limited",
                    date: "06-Jan-2023",
                    report:
                      "/uploads/documents/electrical_mous/MOU_Mitsubishi_Electric_2023.pdf",
                  },
                  {
                    no: "8.",
                    org: "Adani Electricity Mumbai Limited, ADTPS, Dahanu",
                    date: "12-Feb-2022",
                    report:
                      "/uploads/documents/electrical_mous/MOU_Adani_ADTPS_Dahanu_2022.pdf",
                  },
                  {
                    no: "9.",
                    org: "ISIE INDIA, Noida",
                    date: "18-Jan-2022",
                    report:
                      "/uploads/documents/electrical_mous/MOU_ISIE_India_Noida_2022.pdf",
                  },
                  {
                    no: "10.",
                    org: "VI Solutions, Bangalore",
                    date: "28-Jan-2021",
                    report:
                      "/uploads/documents/electrical_mous/MOU_VI_Solutions_Bangalore_2021.pdf",
                  },
                  {
                    no: "11.",
                    org: "SCR Elektronics, Mumbai",
                    date: "08-Feb-2020",
                    report:
                      "/uploads/documents/electrical_mous/MOU_SCR_Elektronics_Mumbai_2020.pdf",
                  },
                  {
                    no: "12.",
                    org: "TPSDI, Shahad Mumbai",
                    date: "08-Sep-2018",
                    report:
                      "/uploads/documents/electrical_mous/MOU_TPSDI_Mumbai_2018.pdf",
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
              onClick={() => setPatentsTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all capitalize ${patentsTab === tab ? "bg-white text-ssgmce-blue shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
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
          {patentsTab === "patents" ? (
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
                  Patents Granted &amp; Published
                </h3>
                <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                  {patentsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setPatentsYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        patentsYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(defaultElectricalPatents[patentsYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No patents recorded for {patentsYear}.
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
                        {(defaultElectricalPatents[patentsYear] || []).map(
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
          ) : patentsTab === "publications" ? (
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
                  Research Publications
                </h3>
                <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                  {patentsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setPatentsYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        patentsYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(defaultElectricalPublications[patentsYear] || []).length ===
              0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No publications recorded for {patentsYear}.
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
                        {(defaultElectricalPublications[patentsYear] || []).map(
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
                                    —
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
          ) : patentsTab === "copyrights" ? (
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
                  {patentsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setPatentsYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        patentsYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(defaultElectricalCopyrights[patentsYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No copyrights recorded for {patentsYear}.
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
                        {(defaultElectricalCopyrights[patentsYear] || []).map(
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
          ) : patentsTab === "books" ? (
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
                  Books &amp; Book Chapters Published
                </h3>
                <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
                  {patentsYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => setPatentsYear(year)}
                      className={`px-3 py-1 text-xs font-bold whitespace-nowrap rounded-full transition-all ${
                        patentsYear === year
                          ? "bg-ssgmce-blue text-white shadow-md"
                          : "bg-white text-gray-500 hover:text-ssgmce-blue border border-gray-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              {(defaultElectricalBooks[patentsYear] || []).length === 0 ? (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">
                    No books published for {patentsYear}.
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
                        {(defaultElectricalBooks[patentsYear] || []).map(
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
                                {book.isbn || "—"}
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
                ? "/uploads/documents/electrical_internships/Electrical_Internship_2024-25.pdf"
                : "/uploads/documents/electrical_internships/Electrical_Internship_2023-24.pdf"
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
                  <th className="px-3 py-4 text-left font-bold">Class</th>
                  <th className="px-3 py-4 text-left font-bold">
                    Training / Internship
                  </th>
                  <th className="px-3 py-4 text-left font-bold">
                    Name of Company
                  </th>
                  <th className="px-3 py-4 text-left font-bold">Duration</th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    Start Date
                  </th>
                  <th className="px-3 py-4 text-left font-bold whitespace-nowrap">
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(
                  t(
                    `internships.${internshipYear}`,
                    defaultElectricalInternships[internshipYear],
                  ) || []
                ).map((intern, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-3 py-3 font-medium text-gray-900">
                      {intern.no}
                    </td>
                    <td className="px-3 py-3 text-gray-700">{intern.sis}</td>
                    <td className="px-3 py-3 text-gray-700">{intern.name}</td>
                    <td className="px-3 py-3 text-gray-700 text-center whitespace-nowrap">
                      {intern.class}
                    </td>
                    <td className="px-3 py-3 text-gray-700 text-xs">
                      {intern.training}
                    </td>
                    <td className="px-3 py-3 text-gray-700 text-xs">
                      {intern.org}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.duration}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.startDate}
                    </td>
                    <td className="px-3 py-3 text-gray-700 whitespace-nowrap">
                      {intern.endDate}
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
                defaultElectricalInternships[internshipYear],
              ) || []
            ).length
          }{" "}
          students
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

  const SidebarLink = ({ id, label, index, collectionName }) => (
    <div
      className={`relative w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-between group overflow-hidden cursor-pointer
        ${
          activeTab === id
            ? "bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white shadow-lg border-l-4 border-ssgmce-orange"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-blue-50 hover:text-ssgmce-blue hover:shadow-md hover:scale-[1.02]"
        }`}
      onClick={() => setActiveTab(id)}
    >
      <span className="flex items-center relative z-10 w-full">
        <span
          className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${activeTab === id ? "bg-white shadow-md" : "bg-gray-400 group-hover:bg-ssgmce-orange group-hover:shadow-sm"}`}
        ></span>
        <div
          className="flex-1"
          onClick={(e) => {
            if (isEditing) {
              e.stopPropagation();
            }
          }}
        >
          {isEditing ? (
            <EditableText
              value={label}
              onSave={(val) => {
                const defaultLinks =
                  collectionName === "academicsLinks"
                    ? defaultAcademicsLinks
                    : defaultIndustryLinks;
                const links = t(collectionName) || defaultLinks;
                const newLinks = [...links];
                newLinks[index] = { ...newLinks[index], label: val };
                updateField(collectionName, newLinks);
              }}
            />
          ) : (
            label
          )}
        </div>
      </span>
      {activeTab === id && <FaAngleRight className="opacity-90 text-white" />}
    </div>
  );

  return (
    <GenericPage
      title="Electrical Engineering (Electronics & Power)"
      backgroundImage={electricalBanner}
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
                {academicsLinks.map((link, index) => (
                  <SidebarLink
                    key={link.id}
                    {...link}
                    index={index}
                    collectionName="academicsLinks"
                  />
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
                {industryLinks.map((link, index) => (
                  <SidebarLink
                    key={link.id}
                    {...link}
                    index={index}
                    collectionName="industryLinks"
                  />
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
