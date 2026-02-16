import React, { useState, useEffect } from "react";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import electricalBanner from "../../assets/images/departments/electrical/Electrical Banner.png";
import hodPhoto from "../../assets/images/departments/electrical/HOD_ELECTRICAL.jpg";
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

  const defaultFacultyData = [
    {
      name: "Dr. S. R. Paraskar",
      role: "Professor & Head Electrical Engineering",
      area: [
        "Digital Protection of Transformer",
        "Facts & Power Quality",
        "Digital Signal Processing",
      ],
      email: "hod_elpo@ssgmce.ac.in",
      email2: "srparaskar@ssgmce.ac.in",
      photo: srpPhoto,
    },
    {
      name: "Mr. U. A. Jawadekar",
      role: "Associate Professor",
      area: ["Electrical Power System"],
      email: "uajawadekar@ssgmce.ac.in",
      phone: "+917020681041",
      photo: uajPhoto,
    },
    {
      name: "Dr. Mrs. A.U. Jawadekar",
      role: "Associate Professor",
      area: ["Electrical Engineering", "Control System"],
      email: "aujawadekar@ssgmce.ac.in",
      phone: "+919766824978",
      photo: aujPhoto,
    },
    {
      name: "Dr. S. S. Jadhao",
      role: "Associate Professor",
      area: [
        "Power Quality and Custom Power Devices",
        "AI Applications in Power System",
      ],
      email: "ssjadhao@ssgmce.ac.in",
      phone: "+919423056082",
      photo: ssjPhoto,
    },
    {
      name: "Mr. P. R. Bharambe",
      role: "Assistant Professor",
      area: ["Electrical Machines", "Power System Protection"],
      email: "prbharambe@ssgmce.ac.in",
      phone: "+917020852595",
      photo: prbPhoto,
    },
    {
      name: "Dr. R. S. Kankale",
      role: "Assistant Professor",
      area: [
        "Power Quality",
        "Distributed Generation",
        "Power System Protection & High Voltage Engineering",
      ],
      email: "rskankale@ssgmce.ac.in",
      phone: "+918275589413",
      photo: rskPhoto,
    },
    {
      name: "Mr. M. R. Chavan",
      role: "Assistant Professor",
      area: ["Electrical Power System", "Renewable Energy", "Energy Auditing"],
      email: "mrchavan@ssgmce.ac.in",
      phone: "+918983442243",
      photo: mrcPhoto,
    },
    {
      name: "Mr. R. K. Mankar",
      role: "Assistant Professor",
      area: ["Electrical Power System"],
      email: "rkmankar@ssgmce.ac.in",
      phone: "+917385718749",
      photo: rkmPhoto,
    },
    {
      name: "Dr. G. N. Bonde",
      role: "Assistant Professor",
      area: ["Electrical Power System", "Power Quality"],
      email: "gnbonde@ssgmce.ac.in",
      phone: "+918021218447",
      photo: gnbPhoto,
    },
    {
      name: "Mr. V. S. Karale",
      role: "Assistant Professor",
      area: ["Electrical Power System"],
      email: "vskarale@ssgmce.ac.in",
      phone: "+919028324050",
      photo: vskPhoto,
    },
    {
      name: "Mr. B. S. Rakhonde",
      role: "Assistant Professor",
      area: ["Electrical Machines", "Electric Vehicle"],
      email: "bsrakhonde@ssgmce.ac.in",
      phone: "+918956730992",
      photo: bsrPhoto,
    },
    {
      name: "Mr. Pratik Dhabe",
      role: "Assistant Professor",
      area: ["Electrical Power System"],
      email: "pratikdhabe@ssgmce.ac.in",
      phone: "+918956527788",
      photo: prdPhoto,
    },
    {
      name: "Mr. S. M. Vanagpure",
      role: "Assistant Professor",
      area: ["Electrical Power System"],
      email: "smvanagpure@ssgmce.ac.in",
      phone: "+919423797074",
      photo: vanPhoto,
    },
    {
      name: "Mr. G. D. Khadsane",
      role: "Assistant Professor",
      area: ["Electrical Power System"],
      email: "gdkhadsane@ssgmce.ac.in",
      phone: "+919370346868",
      photo: gdkPhoto,
    },
  ];

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

  const defaultPlacementStats = [
    {
      year: "2023-24",
      placed: "120+",
      highest: "12 LPA",
      average: "4.5 LPA",
      recruiters: "TCS, Infosys, Adani",
    },
    {
      year: "2022-23",
      placed: "115",
      highest: "10 LPA",
      average: "4.2 LPA",
      recruiters: "TCS, Capgemini, Wipro",
    },
    {
      year: "2021-22",
      placed: "100",
      highest: "9 LPA",
      average: "4.0 LPA",
      recruiters: "TCS, Cognizant",
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

  const defaultActivities = [
    {
      title: "Guest Lecture on Power Systems",
      date: "2024-02-15",
      description: "Expert lecture delivered by Dr. XYZ from IIT Bombay.",
    },
    {
      title: "Industrial Visit to Thermal Power Plant",
      date: "2023-11-20",
      description:
        "Third year students visited the Paras Thermal Power Station.",
    },
  ];

  const defaultNewsletters = [
    {
      title: "Electrical Department Newsletter - Vol 1",
      date: "June 2024",
      link: "#",
    },
    {
      title: "Electrical Department Newsletter - Vol 2",
      date: "Jan 2024",
      link: "#",
    },
  ];

  const defaultAchievements = [
    {
      title: "Best Student Chapter Award",
      description:
        "IEI Student Chapter received the best chapter award in the region.",
    },
    {
      title: "Research Grant",
      description:
        "Department received a research grant of 5 Lakhs for renewable energy project.",
    },
  ];

  const defaultCourseMaterials = [
    { subject: "Electrical Machines - I", link: "#" },
    { subject: "Power Systems - I", link: "#" },
  ];

  const defaultInnovativePractices = [
    {
      title: "Project Based Learning",
      description:
        "Students are encouraged to take up mini-projects in each semester to apply theoretical knowledge.",
    },
    {
      title: "Flip Classroom",
      description:
        "Video lectures are shared before class, and class time is used for discussions and problem solving.",
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
    { id: "internships", label: "Internship Programs" },
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
                  "The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience.\n\nThe department admits students for 4 years B.E. Electrical (Electronics & Power) Programme and 2 years M.E. (Electrical Power System) programme. The academic activities are supported by eight well equipped laboratories. All Laboratories are recognized for research work by Sant Gadge Baba Amravati University, Amravati.\n\nThe department has strong industry interaction and has been involved in development of State of art products for Industry and consultancy projects.",
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

                  <a
                    href="#"
                    className="inline-flex items-center text-[10px] font-bold text-ssgmce-blue mt-2 hover:underline uppercase tracking-wide"
                  >
                    View Profile <FaAngleRight className="ml-1" />
                  </a>
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
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("placementTitle", "Placement Statistics")}
            onSave={(val) => updateField("placementTitle", val)}
          />
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="mb-4 text-gray-700">
              <EditableText
                value={t(
                  "placementDesc",
                  "Our students are placed in reputed companies with good packages. The Training and Placement Cell works dedicatedly to provide opportunities to students.",
                )}
                onSave={(val) => updateField("placementDesc", val)}
                multiline
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                    Year
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                    Total Placed
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                    Highest Package
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                    Average Package
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-ssgmce-blue">
                    Key Recruiters
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {t("placementStats", defaultPlacementStats).map((stat, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                      <EditableText
                        value={stat.year}
                        onSave={(val) => {
                          const updated = [
                            ...t("placementStats", defaultPlacementStats),
                          ];
                          updated[i].year = val;
                          updateField("placementStats", updated);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <EditableText
                        value={stat.placed}
                        onSave={(val) => {
                          const updated = [
                            ...t("placementStats", defaultPlacementStats),
                          ];
                          updated[i].placed = val;
                          updateField("placementStats", updated);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <EditableText
                        value={stat.highest}
                        onSave={(val) => {
                          const updated = [
                            ...t("placementStats", defaultPlacementStats),
                          ];
                          updated[i].highest = val;
                          updateField("placementStats", updated);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <EditableText
                        value={stat.average}
                        onSave={(val) => {
                          const updated = [
                            ...t("placementStats", defaultPlacementStats),
                          ];
                          updated[i].average = val;
                          updateField("placementStats", updated);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <EditableText
                        value={stat.recruiters}
                        onSave={(val) => {
                          const updated = [
                            ...t("placementStats", defaultPlacementStats),
                          ];
                          updated[i].recruiters = val;
                          updateField("placementStats", updated);
                        }}
                        multiline
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
                      ...t("placementStats", defaultPlacementStats),
                      {
                        year: "2020-21",
                        placed: "0",
                        highest: "0 LPA",
                        average: "0 LPA",
                        recruiters: "Recruiters",
                      },
                    ];
                    updateField("placementStats", updated);
                  }}
                  className="w-full py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
                >
                  + Add New Statistic
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    activities: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("activitiesTitle", "Curricular Activities")}
            onSave={(val) => updateField("activitiesTitle", val)}
          />
        </h3>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="space-y-6">
            {t("activities", defaultActivities).map((activity, i) => (
              <div
                key={i}
                className="border-b border-gray-100 last:border-0 pb-6 last:pb-0 group relative pr-8"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4">
                    <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                      <EditableText
                        value={activity.date}
                        onSave={(val) => {
                          const updated = [
                            ...t("activities", defaultActivities),
                          ];
                          updated[i].date = val;
                          updateField("activities", updated);
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-2">
                    <h4 className="text-lg font-bold text-gray-800">
                      <EditableText
                        value={activity.title}
                        onSave={(val) => {
                          const updated = [
                            ...t("activities", defaultActivities),
                          ];
                          updated[i].title = val;
                          updateField("activities", updated);
                        }}
                      />
                    </h4>
                    <div className="text-gray-600 leading-relaxed">
                      <EditableText
                        value={activity.description}
                        onSave={(val) => {
                          const updated = [
                            ...t("activities", defaultActivities),
                          ];
                          updated[i].description = val;
                          updateField("activities", updated);
                        }}
                        multiline
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("activities", defaultActivities),
                    {
                      title: "New Activity",
                      date: "YYYY-MM-DD",
                      description: "Activity Description",
                    },
                  ];
                  updateField("activities", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Activity
              </button>
            </div>
          )}
        </div>
      </div>
    ),
    newsletter: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("newsletterTitle", "Department Newsletter")}
            onSave={(val) => updateField("newsletterTitle", val)}
          />
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="space-y-4">
            {t("newsletters", defaultNewsletters).map((newsletter, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group relative"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800">
                    <EditableText
                      value={newsletter.title}
                      onSave={(val) => {
                        const updated = [
                          ...t("newsletters", defaultNewsletters),
                        ];
                        updated[i].title = val;
                        updateField("newsletters", updated);
                      }}
                    />
                  </h4>
                  <div className="text-sm text-gray-600">
                    <EditableText
                      value={newsletter.date}
                      onSave={(val) => {
                        const updated = [
                          ...t("newsletters", defaultNewsletters),
                        ];
                        updated[i].date = val;
                        updateField("newsletters", updated);
                      }}
                    />
                  </div>
                  {isEditing && (
                    <div className="text-xs text-blue-500 mt-1">
                      Link:{" "}
                      <EditableText
                        value={newsletter.link}
                        onSave={(val) => {
                          const updated = [
                            ...t("newsletters", defaultNewsletters),
                          ];
                          updated[i].link = val;
                          updateField("newsletters", updated);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={newsletter.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ssgmce-blue hover:text-ssgmce-orange text-2xl"
                    title="Download/View"
                  >
                    <FaDownload />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("newsletters", defaultNewsletters),
                    { title: "New Newsletter", date: "Date", link: "#" },
                  ];
                  updateField("newsletters", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Newsletter
              </button>
            </div>
          )}
        </div>
      </div>
    ),
    achievements: (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("achievementsTitle", "Achievements")}
            onSave={(val) => updateField("achievementsTitle", val)}
          />
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="space-y-6">
            {t("achievements", defaultAchievements).map((achievement, i) => (
              <div
                key={i}
                className="border-l-4 border-ssgmce-blue pl-4 py-2 group relative"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-1">
                  <EditableText
                    value={achievement.title}
                    onSave={(val) => {
                      const updated = [
                        ...t("achievements", defaultAchievements),
                      ];
                      updated[i].title = val;
                      updateField("achievements", updated);
                    }}
                  />
                </h4>
                <div className="text-gray-600 leading-relaxed">
                  <EditableText
                    value={achievement.description}
                    onSave={(val) => {
                      const updated = [
                        ...t("achievements", defaultAchievements),
                      ];
                      updated[i].description = val;
                      updateField("achievements", updated);
                    }}
                    multiline
                  />
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("achievements", defaultAchievements),
                    { title: "New Achievement", description: "Description" },
                  ];
                  updateField("achievements", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Achievement
              </button>
            </div>
          )}
        </div>
      </div>
    ),
    "course-material": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t("courseMaterialTitle", "Course Material")}
            onSave={(val) => updateField("courseMaterialTitle", val)}
          />
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="space-y-4">
            {t("courseMaterials", defaultCourseMaterials).map((material, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group relative"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800">
                    <EditableText
                      value={material.subject}
                      onSave={(val) => {
                        const updated = [
                          ...t("courseMaterials", defaultCourseMaterials),
                        ];
                        updated[i].subject = val;
                        updateField("courseMaterials", updated);
                      }}
                    />
                  </h4>
                  {isEditing && (
                    <div className="text-xs text-blue-500 mt-1">
                      Link:{" "}
                      <EditableText
                        value={material.link}
                        onSave={(val) => {
                          const updated = [
                            ...t("courseMaterials", defaultCourseMaterials),
                          ];
                          updated[i].link = val;
                          updateField("courseMaterials", updated);
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={material.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ssgmce-blue hover:text-ssgmce-orange text-2xl"
                    title="Download Material"
                  >
                    <FaDownload />
                  </a>
                </div>
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("courseMaterials", defaultCourseMaterials),
                    { subject: "New Subject", link: "#" },
                  ];
                  updateField("courseMaterials", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Material
              </button>
            </div>
          )}
        </div>
      </div>
    ),
    "innovative-practice": (
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
          <EditableText
            value={t(
              "innovativePracticeTitle",
              "Innovative Teaching & Learning Practice",
            )}
            onSave={(val) => updateField("innovativePracticeTitle", val)}
          />
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden p-6">
          <div className="space-y-6">
            {t("innovativePractices", defaultInnovativePractices).map(
              (practice, i) => (
                <div
                  key={i}
                  className="border-l-4 border-ssgmce-blue pl-4 py-2 group relative"
                >
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    <EditableText
                      value={practice.title}
                      onSave={(val) => {
                        const updated = [
                          ...t(
                            "innovativePractices",
                            defaultInnovativePractices,
                          ),
                        ];
                        updated[i].title = val;
                        updateField("innovativePractices", updated);
                      }}
                    />
                  </h4>
                  <div className="text-gray-600 leading-relaxed">
                    <EditableText
                      value={practice.description}
                      onSave={(val) => {
                        const updated = [
                          ...t(
                            "innovativePractices",
                            defaultInnovativePractices,
                          ),
                        ];
                        updated[i].description = val;
                        updateField("innovativePractices", updated);
                      }}
                      multiline
                    />
                  </div>
                </div>
              ),
            )}
          </div>
          {isEditing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  const updated = [
                    ...t("innovativePractices", defaultInnovativePractices),
                    { title: "New Practice", description: "Description" },
                  ];
                  updateField("innovativePractices", updated);
                }}
                className="px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-ssgmce-dark-blue transition-colors text-sm"
              >
                + Add Practice
              </button>
            </div>
          )}
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
