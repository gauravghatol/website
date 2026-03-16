import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GenericPage from "../../components/GenericPage";
import { useDepartmentData } from "../../hooks/useDepartmentData";
import EditableText from "../../components/admin/EditableText";
import EditableImage from "../../components/admin/EditableImage";
import MarkdownEditor from "../../components/admin/MarkdownEditor";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  FaPlus,
  FaTrash,
  FaUpload,
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
  prideGateToMarkdown,
  prideToppersToMarkdown,
  prideAlumniToMarkdown,
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
  cseStudentProjectsToMarkdown,
  cseUgProjectsToMarkdown,
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

// ─── Pride section: markdown view helpers ───────────────────────────────────
const parsePrideSections = (md = "") => {
  const sections = [];
  const lines = md.split("\n");
  let current = null;
  for (const line of lines) {
    if (line.startsWith("## ")) {
      if (current) sections.push(current);
      current = { heading: line.slice(3).trim(), body: [] };
    } else if (current) {
      current.body.push(line);
    }
  }
  if (current && current.body.length > 0) sections.push(current);
  return sections.map((s) => ({
    heading: s.heading,
    body: s.body.join("\n").trim(),
  }));
};

const extractMarkdownLinkHref = (value = "") => {
  const markdownLinkMatch = String(value || "").match(/\[[^\]]+\]\(([^)]+)\)/);
  if (markdownLinkMatch?.[1]) return markdownLinkMatch[1].trim();
  const trimmed = String(value || "").trim();
  return /^https?:\/\//i.test(trimmed) || trimmed.startsWith("/uploads/")
    ? trimmed
    : "";
};

const parseMarkdownTableRow = (line = "") =>
  String(line || "")
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());

const getFileNameFromUrl = (value = "") => {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";

  return trimmed.split("/").pop()?.split("?")[0] || "";
};

const parseUgProjectsMarkdown = (markdown = "", fallbackYear = "2024-25") => {
  const text = String(markdown || "").trim();
  if (!text) {
    return { years: [fallbackYear], records: { [fallbackYear]: [] } };
  }

  const headingMatches = [...text.matchAll(/^##\s+(.+)$/gm)];
  const sections =
    headingMatches.length > 0
      ? headingMatches.map((match, index) => {
          const start = match.index ?? 0;
          const end =
            index + 1 < headingMatches.length
              ? headingMatches[index + 1].index
              : text.length;
          return {
            year: match[1].trim(),
            body: text.slice(start, end),
          };
        })
      : [{ year: fallbackYear, body: text }];

  const years = [];
  const records = {};

  sections.forEach(({ year, body }) => {
    const normalizedYear = year || fallbackYear;
    const lines = String(body || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const tableLines = lines.filter((line) => line.startsWith("|"));
    const dataLines = tableLines.filter(
      (line, index) =>
        index > 1 &&
        !/^\|\s*[-: ]+\|\s*[-: ]+\|\s*[-: ]+\|?\s*$/.test(line),
    );

    records[normalizedYear] = dataLines
      .map((line) => parseMarkdownTableRow(line))
      .filter((cells) => cells.length >= 3)
      .map((cells) => ({
        id: cells[0] || "",
        title: cells[1] || "",
        link: extractMarkdownLinkHref(cells.slice(2).join(" | ")),
      }))
      .filter(
        (project) =>
          project.id || project.title || project.link,
      );

    if (!years.includes(normalizedYear)) {
      years.push(normalizedYear);
    }
  });

  return { years, records };
};

const prideTableComponents = {
  table: ({ node, ...props }) => (
    <table className="min-w-full divide-y divide-gray-200" {...props} />
  ),
  thead: ({ node, ...props }) => <thead className="bg-gray-50" {...props} />,
  tbody: ({ node, ...props }) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  tr: ({ node, ...props }) => <tr className="hover:bg-gray-50" {...props} />,
  th: ({ node, ...props }) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: ({ node, ...props }) => (
    <td className="px-6 py-4 text-sm text-gray-900" {...props} />
  ),
};

const PrideMdView = ({ markdown }) => {
  const sections = parsePrideSections(markdown);
  if (!sections.length) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto p-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={prideTableComponents}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-8">
      {sections.map((section, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white px-6 py-4">
            <h4 className="text-xl font-bold">{section.heading}</h4>
          </div>
          <div className="overflow-x-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={prideTableComponents}
            >
              {section.body}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

const CSE_ACTIVITY_REMOTE_IMAGE_PREFIX =
  "https://www.ssgmce.ac.in/images/cse_faculty/";

const getLocalCseActivityImageUrl = (imageUrl = "") => {
  const normalizedUrl = String(imageUrl || "").trim();
  if (!normalizedUrl) return "";

  if (
    normalizedUrl
      .toLowerCase()
      .startsWith(CSE_ACTIVITY_REMOTE_IMAGE_PREFIX.toLowerCase())
  ) {
    const fileName = normalizedUrl.split("/").pop()?.split("?")[0] || "";
    return fileName ? `/uploads/images/cse/activities/${fileName}` : normalizedUrl;
  }

  return normalizedUrl;
};

const normalizeCseActivity = (activity = {}) => ({
  title: String(activity.title || "").trim(),
  date: String(activity.date || "").trim(),
  participants: String(activity.participants || "").trim(),
  organizer: String(activity.organizer || "").trim(),
  resource: String(activity.resource || "").trim(),
  image: getLocalCseActivityImageUrl(activity.image),
});

const defaultActivityCards = defaultActivities.map(normalizeCseActivity);

const formatActivityMarkdownField = (label, value, includeEmpty = false) => {
  const lines = String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length && !includeEmpty) return "";

  return [
    `- ${label}: ${lines[0] || ""}`,
    ...lines.slice(1).map((line) => `  ${line}`),
  ].join("\n");
};

const cseActivitiesToMarkdown = (activities = []) =>
  activities
    .map((activity) => normalizeCseActivity(activity))
    .filter((activity) => activity.title)
    .map((activity) =>
      [
        `## ${activity.title}`,
        formatActivityMarkdownField("Date", activity.date, true),
        formatActivityMarkdownField("Participants", activity.participants, true),
        formatActivityMarkdownField("Organized by", activity.organizer, true),
        formatActivityMarkdownField("Resource Person", activity.resource, true),
        formatActivityMarkdownField("Image", activity.image, true),
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n\n");

const parseCseActivitiesMarkdown = (markdown = "") => {
  if (typeof markdown !== "string" || !markdown.trim()) return [];

  return markdown
    .split(/^(?=## )/m)
    .map((section) => section.trim())
    .filter(Boolean)
    .map((section) => {
      const lines = section.split("\n");
      const titleLine = lines.shift() || "";
      const title = titleLine.replace(/^##\s+/, "").trim();

      const fieldMap = {
        date: [],
        participants: [],
        organizer: [],
        resource: [],
        image: [],
      };

      let activeField = null;

      lines.forEach((line) => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;

        const fieldMatch = trimmedLine.match(
          /^-\s*(Date|Participants|Organized by|Resource Person|Image)\s*:\s*(.*)$/i,
        );

        if (fieldMatch) {
          const [, rawLabel, rawValue] = fieldMatch;
          const labelKey = {
            date: "date",
            participants: "participants",
            "organized by": "organizer",
            "resource person": "resource",
            image: "image",
          }[rawLabel.toLowerCase()];

          activeField = labelKey || null;
          if (activeField) {
            fieldMap[activeField].push(rawValue.trim());
          }
          return;
        }

        if (activeField) {
          fieldMap[activeField].push(trimmedLine);
        }
      });

      return normalizeCseActivity({
        title,
        date: fieldMap.date.join("\n").trim(),
        participants: fieldMap.participants.join("\n").trim(),
        organizer: fieldMap.organizer.join("\n").trim(),
        resource: fieldMap.resource.join("\n").trim(),
        image: fieldMap.image.join("\n").trim(),
      });
    })
    .filter((activity) => activity.title);
};

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
  const [showAddPlacementYear, setShowAddPlacementYear] = useState(false);
  const [newPlacementYear, setNewPlacementYear] = useState("");
  const [placementYearError, setPlacementYearError] = useState("");

  // Placement data (default) — used for summary + markdown generation
  const defaultPlacementYearOrder = [
    "2024-25",
    "2023-24",
    "2022-23",
    "2021-22",
    "2020-21",
    "2019-20",
    "2018-19",
  ];

  const placementRecordsByYear = {
    "2024-25": [
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
        company: "Arohi Software Solution Pvt. Ltd., Ahmednagar",
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
        company: "Cognizant Technology Solutions India Pvt. Ltd., Pune",
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
      { name: "Abhishek Patil", company: "TCS, Pune", ctc: "7 LPA" },
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
      { name: "Nitish Sonone", company: "ApexaiQ", ctc: "4.5 LPA" },
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
        company: "Arohi Software Solution Pvt. Ltd., Ahmednagar",
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
    ],
    "2023-24": [
      {
        name: "Abhijeet Eknath Tathod",
        company: "miniOrange Security Software Pvt. Ltd., Pune",
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
        company: "Value Momentum Software Services Pvt. Ltd., Hyderabad",
        ctc: "4.5 LPA",
      },
      {
        name: "Gajanan Mahadev Borade",
        company: "Institute of Plasma Research Bhat, Gandhinagar",
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
        company: "Capgemini Technology Services India Limited, Navi Mumbai",
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
      { name: "Uzair Amin", company: "Infosys Limited Banglore", ctc: "5 LPA" },
      {
        name: "Yogita Katare",
        company: "Tristha Global Pvt. Ltd. Mumbai",
        ctc: "3.4 LPA",
      },
    ],
    "2022-23": [
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
      { name: "Shankar Shinde", company: "HCL Tech, Noida", ctc: "6.00 LPA" },
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
        company: "LotFair Solutions Private Limited, Lucknow",
        ctc: "2.75 LPA",
      },
      {
        name: "Sudhanshu Deshmukh",
        company: "Mastek Enterprise Solutions Pvt. Ltd., Ahmedabad",
        ctc: "4.20 LPA",
      },
      {
        name: "Anshul Ghumadwar",
        company: "Micropro Software Solutions Pvt. Ltd., Nagpur",
        ctc: "3.00 LPA",
      },
      {
        name: "Himanshu Jamwal",
        company: "Micropro Software Solutions Pvt. Ltd., Nagpur",
        ctc: "3.00 LPA",
      },
      {
        name: "Swati Khatri",
        company: "Micropro Software Solutions Pvt. Ltd., Nagpur",
        ctc: "3.00 LPA",
      },
      {
        name: "Tanishq Nanda",
        company: "Optical Arc Pvt. Ltd., Pune",
        ctc: "3.00 LPA",
      },
      {
        name: "Gaurav Pundkar",
        company: "Rialtes Technologies & Solutions LLP, Pune",
        ctc: "3.00 LPA",
      },
      {
        name: "Kanchan Raut",
        company: "Rialtes Technologies & Solutions LLP, Pune",
        ctc: "3.00 LPA",
      },
      {
        name: "Suryakant Ingle",
        company: "Rialtes Technologies & Solutions LLP, Pune",
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
      { name: "Siddhi Mehta", company: "HCL Tech, Noida", ctc: "4.25 LPA" },
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
      { name: "Suved Bhagwat", company: "Byju?s", ctc: "4.5 LPA" },
    ],
    "2021-22": [
      {
        name: "Shivani Joshi",
        company: "Atos|Syntel Pvt Ltd, Pune",
        ctc: "3.4 LPA",
      },
      {
        name: "Mansi Paturkar",
        company: "Capgemini Technology Services India Ltd, Mumbai",
        ctc: "4 LPA",
      },
      {
        name: "Nisha Kakade",
        company: "Capgemini Technology Services India Ltd, Mumbai",
        ctc: "4 LPA",
      },
      {
        name: "Pooja Deshmukh",
        company: "Capgemini Technology Services India Ltd, Mumbai",
        ctc: "4 LPA",
      },
      {
        name: "Prajwal Gawal",
        company: "Capgemini Technology Services India Ltd, Mumbai",
        ctc: "4 LPA",
      },
      {
        name: "Sakshi Dhanuka",
        company: "Capgemini Technology Services India Ltd, Mumbai",
        ctc: "4 LPA",
      },
      {
        name: "Vijaya Narkhede",
        company: "Capgemini Technology Services India Ltd, Mumbai",
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
      { name: "Arpita Agrawal", company: "LTI Mindtree, Pune", ctc: "4 LPA" },
      {
        name: "Aritra Shinde",
        company: "NSEC Technologies Pvt. Ltd., Pune",
        ctc: "3.0 LPA",
      },
      { name: "Ayush Jain", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      { name: "Chinmay More", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      {
        name: "Ganeshji Dongre",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Gayatri Sharma",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Kaustubh Patil",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      { name: "Kunal Dumbre", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      { name: "Pratik Kadu", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      { name: "Pravin Patel", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      { name: "Rohit Patil", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      {
        name: "Shubham Borade",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Shubham Patil",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      { name: "Shweta Dole", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      {
        name: "Siddharth Solanki",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      { name: "Sonal Raut", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      {
        name: "Sujay Choudhary",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Swapnil Shelke",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Vaibhav Patil",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      { name: "Yash Chandak", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      { name: "Yogesh Patil", company: "Sankey Solutions, Pune", ctc: "4 LPA" },
      {
        name: "Yogeshrao Ghorpade",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
      {
        name: "Yuvraj Bhagat",
        company: "Sankey Solutions, Pune",
        ctc: "4 LPA",
      },
    ],
    "2020-21": [],
    "2019-20": [],
    "2018-19": [],
  };

  // State for Curriculum (Scheme & Syllabus) management
  const [selectedCurriculumItems, setSelectedCurriculumItems] = useState([]);
  const [uploadingFiles, setUploadingFiles] = useState({});
  const [newsletterUploading, setNewsletterUploading] = useState({});
  const [newsletterUploadErrors, setNewsletterUploadErrors] = useState({});
  const [achievementUploading, setAchievementUploading] = useState({});
  const [achievementUploadErrors, setAchievementUploadErrors] = useState({});
  const [achievementUploadSuccess, setAchievementUploadSuccess] = useState({});
  const [ugProjectUploading, setUgProjectUploading] = useState({});
  const [ugProjectUploadErrors, setUgProjectUploadErrors] = useState({});
  const [ugProjectUploadSuccess, setUgProjectUploadSuccess] = useState({});
  const [showAddUgProjectYear, setShowAddUgProjectYear] = useState(false);
  const [newUgProjectYear, setNewUgProjectYear] = useState("");
  const [ugProjectYearError, setUgProjectYearError] = useState("");
  const [shouldScrollToNewCourseMaterial, setShouldScrollToNewCourseMaterial] =
    useState(false);
  const latestCourseMaterialRef = useRef(null);

  // State for Curricular Activities section
  const [activitiesVisible, setActivitiesVisible] = useState(6);
  const [lightboxActivity, setLightboxActivity] = useState(null);

  // Load department data (works in both edit and public view modes)
  const {
    data: activeData,
    loading: dataLoading,
    isEditing,
    updateData,
    removeData,
    t,
  } = useDepartmentData("departments-cse");

  // Helper for array updates
  const updateField = (path, value) => {
    updateData(path, value);
  };

  const academicYearPattern = /^\d{4}-\d{2}$/;

  const isAcademicYearKey = (value) =>
    typeof value === "string" && academicYearPattern.test(value.trim());

  const compareAcademicYearsDesc = (a, b) => {
    const aStart = Number(String(a).slice(0, 4));
    const bStart = Number(String(b).slice(0, 4));
    return bStart - aStart;
  };

  const normalizePlacementYears = (years) => {
    const uniqueYears = [];

    years.forEach((year) => {
      const normalizedYear = String(year || "").trim();
      if (!isAcademicYearKey(normalizedYear)) return;
      if (!uniqueYears.includes(normalizedYear)) {
        uniqueYears.push(normalizedYear);
      }
    });

    return uniqueYears;
  };

  const isValidAcademicYear = (value) => {
    const normalizedYear = String(value || "").trim();
    if (!isAcademicYearKey(normalizedYear)) return false;

    const [startYear, endSuffix] = normalizedYear.split("-");
    return String(Number(startYear) + 1).slice(-2) === endSuffix;
  };

  const storedPlacementYears = Array.isArray(t("templateData.placements.years", null))
    ? t("templateData.placements.years", [])
    : [];
  const storedPlacementDetails = t("templateData.placements.details", {});
  const storedPlacementMarkdown = t("templateData.placements.markdown", {});
  const storedPlacementObject = t("templateData.placements", {});

  const discoveredPlacementYears = normalizePlacementYears([
    ...Object.keys(
      storedPlacementDetails && typeof storedPlacementDetails === "object"
        ? storedPlacementDetails
        : {},
    ),
    ...Object.keys(
      storedPlacementMarkdown && typeof storedPlacementMarkdown === "object"
        ? storedPlacementMarkdown
        : {},
    ),
    ...Object.keys(
      storedPlacementObject && typeof storedPlacementObject === "object"
        ? Object.fromEntries(
            Object.entries(storedPlacementObject).filter(
              ([key]) => !["years", "details", "markdown"].includes(key),
            ),
          )
        : {},
    ),
  ]).sort(compareAcademicYearsDesc);

  const placementYearOrder = (() => {
    const baseYears =
      storedPlacementYears.length > 0
        ? normalizePlacementYears(storedPlacementYears)
        : [...defaultPlacementYearOrder];
    const extraYears = discoveredPlacementYears.filter(
      (year) => !baseYears.includes(year),
    );

    return normalizePlacementYears([...baseYears, ...extraYears]).sort(
      compareAcademicYearsDesc,
    );
  })();

  const currentPlacementYear = placementYearOrder[0] || null;

  const handleAddPlacementYear = () => {
    const normalizedYear = newPlacementYear.trim();

    if (!isValidAcademicYear(normalizedYear)) {
      setPlacementYearError("Enter a valid academic year like 2025-26.");
      return;
    }

    if (placementYearOrder.includes(normalizedYear)) {
      setPlacementYearError("That academic year already exists.");
      return;
    }

    const nextYears = normalizePlacementYears([
      normalizedYear,
      ...placementYearOrder,
    ]).sort(compareAcademicYearsDesc);

    updateData("templateData.placements.years", nextYears);
    updateData(`templateData.placements.details.${normalizedYear}`, "");
    setNewPlacementYear("");
    setPlacementYearError("");
    setShowAddPlacementYear(false);
  };

  const handleDeletePlacementYear = (year) => {
    if (!window.confirm(`Delete placement statistics for ${year}?`)) {
      return;
    }

    const remainingYears = placementYearOrder.filter(
      (placementEntryYear) => placementEntryYear !== year,
    );

    updateData("templateData.placements.years", remainingYears);
    removeData(`templateData.placements.details.${year}`);
    removeData(`templateData.placements.markdown.${year}`);
    removeData(`templateData.placements.${year}`);

    if (placementYear === year) {
      setPlacementYear(null);
    }
  };

  // Placement markdown helpers (moved below useDepartmentData to avoid TDZ errors)
  const getPlacementMarkdown = (year) => {
    const records = placementRecordsByYear[year] || [];
    const header = `## Placement Record — ${year}`;
    const intro =
      year === currentPlacementYear
        ? "*Placements still in progress for the current academic year.*\n\n"
        : "";
    const rows = records.map(
      (s, i) => `| ${i + 1} | ${s.name} | ${s.company} | ${s.ctc} |`,
    );

    const table = [
      "| Sr. No. | Name of Student | Company Name | CTC |",
      "|--------|----------------|--------------|-----|",
      ...rows,
    ].join("\n");

    return [header, "", intro, table].join("\n");
  };

  const getStoredPlacementValue = (year) => {
    const candidates = [
      `templateData.placements.details.${year}`,
      `templateData.placements.${year}`,
      `templateData.placements.markdown.${year}`,
    ];

    for (const path of candidates) {
      const value = t(path, null);
      if (value !== null && value !== undefined) {
        if (typeof value === "string" && value.trim() === "") continue;
        return value;
      }
    }

    // Sometimes placements are stored as an object keyed by year
    const placements = t("templateData.placements", null);
    if (placements && typeof placements === "object") {
      if (placements[year]) return placements[year];
    }

    return null;
  };

  const placementRecordsToMarkdown = (year, records) => {
    const header = `## Placement Record — ${year}`;
    const intro =
      year === currentPlacementYear
        ? "*Placements still in progress for the current academic year.*\n\n"
        : "";

    const rows = records.map(
      (s, i) => `| ${i + 1} | ${s.name} | ${s.company} | ${s.ctc} |`,
    );

    const table = [
      "| Sr. No. | Name of Student | Company Name | CTC |",
      "|--------|----------------|--------------|-----|",
      ...rows,
    ].join("\n");

    return [header, "", intro, table].join("\n");
  };

  const getCurrentPlacementMarkdown = () => {
    if (!placementYear) return "";

    const stored = getStoredPlacementValue(placementYear);

    if (typeof stored === "string" && stored.trim()) return stored;

    if (Array.isArray(stored) && stored.length > 0) {
      return placementRecordsToMarkdown(placementYear, stored);
    }

    // Fallback to default hardcoded records
    return getPlacementMarkdown(placementYear);
  };

  const getPlacementCount = (year) => {
    const stored = getStoredPlacementValue(year);

    if (Array.isArray(stored)) return stored.length;

    if (typeof stored === "string" && stored.trim()) {
      const lines = stored.split("\n").map((l) => l.trim());
      const tableStart = lines.findIndex((l) => l.startsWith("| Sr. No."));
      if (tableStart !== -1) {
        const rows = lines
          .slice(tableStart + 2)
          .filter((l) => l.startsWith("|"));
        return rows.length;
      }
    }

    return placementRecordsByYear[year]?.length || 0;
  };

  const placementSummary = placementYearOrder.map((year) => ({
    year,
    count: `${getPlacementCount(year)}${year === currentPlacementYear ? "*" : ""}`,
    id: year,
  }));

  const renderPlacementDetails = () => {
    const markdown = getCurrentPlacementMarkdown();

    return (
      <div>
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

        {isEditing ? (
          <MarkdownEditor
            value={markdown}
            onSave={(v) =>
              updateData(`templateData.placements.details.${placementYear}`, v)
            }
            showDocImport
            docTemplateUrl="/uploads/documents/pride_templates/cse_placement_details_template.docx"
            docTemplateLabel="Download Placement Template"
            placeholder="Paste or import placement data (Markdown) here..."
          />
        ) : (
          <PrideMdView markdown={markdown} />
        )}
      </div>
    );
  };

  // Default curriculum items for Scheme & Syllabus
  const DEFAULT_CURRICULUM_BE = [
    {
      label: "NEP Scheme",
      link: "#",
      fileName: "NEP_Scheme.pdf",
      fileUrl: "/uploads/documents/cse-syllabus/NEP_Scheme.pdf",
    },
    {
      label: "Scheme",
      link: "#",
      fileName: "Scheme_CSE.pdf",
      fileUrl: "/uploads/documents/cse-syllabus/Scheme_CSE.pdf",
    },
    {
      label:
        "Revised Syllabus of CSE (1st Sem - 8th Sem) Notification No. 121/2023",
      link: "#",
      fileName: "Revised_Syllabus_CSE_1st-8th_Sem_Notification_121_2023.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Revised_Syllabus_CSE_1st-8th_Sem_Notification_121_2023.pdf",
    },
    {
      label: "Syllabus Second Year (3rd & 4th Sem)",
      link: "#",
      fileName: "Syllabus_Second_Year_3rd_4th_Sem.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Syllabus_Second_Year_3rd_4th_Sem.pdf",
    },
    {
      label:
        "Syllabus - (Universal Human Values and Ethics) Common for all branches - Sem. IV (NEP)",
      link: "#",
      fileName: "Syllabus_UHV_Ethics_Sem_IV_NEP.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Syllabus_UHV_Ethics_Sem_IV_NEP.pdf",
    },
    {
      label:
        "Syllabus - (Modern Indian Language) Common for all branches - Sem. IV (NEP)",
      link: "#",
      fileName: null,
      fileUrl: null,
    },
    {
      label: "Syllabus Third Year (5th & 6th Sem)",
      link: "#",
      fileName: "Syllabus_Third_Year_5th_6th_Sem.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Syllabus_Third_Year_5th_6th_Sem.pdf",
    },
    {
      label: "Syllabus Final Year (7th & 8th Sem)",
      link: "#",
      fileName: "Syllabus_Final_Year_7th_8th_Sem.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Syllabus_Final_Year_7th_8th_Sem.pdf",
    },
  ];

  const DEFAULT_CURRICULUM_ME = [
    {
      label: "Scheme and Syllabus M.E. (1st & 2nd Sem)",
      link: "#",
      fileName: "Scheme_Syllabus_ME_1st_2nd_Sem.pdf",
      fileUrl:
        "/uploads/documents/cse-syllabus/Scheme_Syllabus_ME_1st_2nd_Sem.pdf",
    },
  ];

  // Curriculum management functions
  const updateCurriculumItem = (section, index, field, value) => {
    const key = `templateData.curriculum.${section}`;
    const defaults =
      section === "be" ? DEFAULT_CURRICULUM_BE : DEFAULT_CURRICULUM_ME;
    const items = JSON.parse(JSON.stringify(t(key, defaults)));
    items[index] = { ...items[index], [field]: value };
    updateField(key, items);
  };

  const addCurriculumItem = (section) => {
    const key = `templateData.curriculum.${section}`;
    const defaults =
      section === "be" ? DEFAULT_CURRICULUM_BE : DEFAULT_CURRICULUM_ME;
    const items = JSON.parse(JSON.stringify(t(key, defaults)));
    items.push({
      label: "New Syllabus Item",
      link: "#",
      fileName: null,
      fileUrl: null,
    });
    updateField(key, items);
  };

  const uploadCurriculumFile = async (section, index, file) => {
    if (!file) return;
    const uploadKey = `${section}-${index}`;
    setUploadingFiles((prev) => ({ ...prev, [uploadKey]: true }));
    try {
      const formData = new FormData();
      formData.append("file", file);
      const token = localStorage.getItem("adminToken");
      const response = await axios.post("/api/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.fileUrl) {
        // Batch all three fields in a single update to avoid stale state race condition
        const key = `templateData.curriculum.${section}`;
        const defaults =
          section === "be" ? DEFAULT_CURRICULUM_BE : DEFAULT_CURRICULUM_ME;
        const items = JSON.parse(JSON.stringify(t(key, defaults)));
        items[index] = {
          ...items[index],
          fileUrl: response.data.fileUrl,
          fileName: response.data.originalName,
          link: response.data.fileUrl,
        };
        updateField(key, items);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload file. Please try again.");
    } finally {
      setUploadingFiles((prev) => ({ ...prev, [uploadKey]: false }));
    }
  };

  const handleCurriculumFileChange = (section, index, event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      uploadCurriculumFile(section, index, file);
    } else {
      alert("Please select a PDF file.");
    }
  };

  const removeCurriculumItem = (section, index) => {
    const key = `templateData.curriculum.${section}`;
    const defaults =
      section === "be" ? DEFAULT_CURRICULUM_BE : DEFAULT_CURRICULUM_ME;
    const items = JSON.parse(JSON.stringify(t(key, defaults)));
    items.splice(index, 1);
    updateField(key, items);
    setSelectedCurriculumItems(
      selectedCurriculumItems.filter((i) => i !== `${section}-${index}`),
    );
  };

  const toggleCurriculumSelection = (section, index) => {
    const key = `${section}-${index}`;
    if (selectedCurriculumItems.includes(key)) {
      setSelectedCurriculumItems(
        selectedCurriculumItems.filter((i) => i !== key),
      );
    } else {
      setSelectedCurriculumItems([...selectedCurriculumItems, key]);
    }
  };

  const deleteSelectedCurriculumItems = (section) => {
    const key = `templateData.curriculum.${section}`;
    const defaults =
      section === "be" ? DEFAULT_CURRICULUM_BE : DEFAULT_CURRICULUM_ME;
    const items = JSON.parse(JSON.stringify(t(key, defaults)));
    const sectionSelected = selectedCurriculumItems
      .filter((k) => k.startsWith(`${section}-`))
      .map((k) => parseInt(k.split("-")[1]));
    const newItems = items.filter((_, i) => !sectionSelected.includes(i));
    updateField(key, newItems);
    setSelectedCurriculumItems(
      selectedCurriculumItems.filter((k) => !k.startsWith(`${section}-`)),
    );
  };

  const updateArrayString = (key, defaultArr, index, value) => {
    const arr = [...t(key, defaultArr)];
    arr[index] = value;
    updateData(key, arr);
  };

  const getCourseMaterials = () =>
    JSON.parse(JSON.stringify(t("courseMaterials", defaultCourseMaterials)));

  const updateCourseMaterial = (index, field, value) => {
    const items = getCourseMaterials();
    if (!items[index]) return;
    items[index] = { ...items[index], [field]: value };
    updateData("courseMaterials", items);
  };

  const addCourseMaterial = () => {
    const items = getCourseMaterials();
    updateData("courseMaterials", [
      ...items,
      {
        year: "New Year / Class",
        title: "New Course Material",
        link: "#",
      },
    ]);
    setShouldScrollToNewCourseMaterial(true);
  };

  const deleteCourseMaterial = (index) => {
    const items = getCourseMaterials();
    updateData(
      "courseMaterials",
      items.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const courseMaterialItems = t("courseMaterials", defaultCourseMaterials) || [];

  useEffect(() => {
    if (
      !shouldScrollToNewCourseMaterial ||
      !isEditing ||
      activeTab !== "course-material"
    ) {
      return;
    }

    if (latestCourseMaterialRef.current) {
      latestCourseMaterialRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setShouldScrollToNewCourseMaterial(false);
    }
  }, [
    activeTab,
    courseMaterialItems.length,
    isEditing,
    shouldScrollToNewCourseMaterial,
  ]);

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
    const storedActivitiesMarkdown = t("activitiesMarkdown", "");
    const parsedActivities = parseCseActivitiesMarkdown(storedActivitiesMarkdown);
    const sourceActivities = (
      parsedActivities.length
        ? parsedActivities
        : t("activities", defaultActivityCards)
    ).map(normalizeCseActivity);

    if (!sourceActivities[index]) return;

    const nextActivities = sourceActivities.map((activity, activityIndex) =>
      activityIndex === index
        ? normalizeCseActivity({
            ...activity,
            [field]: value,
          })
        : activity,
    );

    updateData("activities", nextActivities);
    updateData("activitiesMarkdown", cseActivitiesToMarkdown(nextActivities));
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

  const getUgProjectYears = () => {
    const storedYears = Array.isArray(t("ugProjects.years", null))
      ? t("ugProjects.years", [])
      : [];
    const recordYears = Object.keys(
      t("ugProjects.records", defaultUgProjects) || defaultUgProjects,
    );

    return [...new Set([...storedYears, ...recordYears])]
      .filter(Boolean)
      .sort(compareAcademicYearsDesc);
  };

  const getUgProjectRecords = () =>
    JSON.parse(JSON.stringify(t("ugProjects.records", defaultUgProjects)));

  const persistUgProjects = (records, years = getUgProjectYears()) => {
    const orderedYears = [...new Set([...years, ...Object.keys(records || {})])]
      .filter(Boolean)
      .sort(compareAcademicYearsDesc);

    const normalizedRecords = orderedYears.reduce((acc, year) => {
      acc[year] = Array.isArray(records?.[year])
        ? records[year].map((project) => ({
            id: String(project?.id || "").trim(),
            title: String(project?.title || "").trim(),
            link: String(project?.link || "").trim(),
            fileName: String(project?.fileName || "").trim(),
          }))
        : [];
      return acc;
    }, {});

    updateData("ugProjects.years", orderedYears);
    updateData("ugProjects.records", normalizedRecords);
    updateData(
      "ugProjects.markdown",
      cseUgProjectsToMarkdown(normalizedRecords, orderedYears),
    );
  };

  const updateUgProject = (year, index, field, value) => {
    const dataObj = getUgProjectRecords();
    if (!dataObj?.[year]?.[index]) return;
    dataObj[year][index] = { ...dataObj[year][index], [field]: value };
    persistUgProjects(dataObj);
  };

  const addUgProject = (year) => {
    const dataObj = getUgProjectRecords();
    dataObj[year] = [
      ...(dataObj[year] || []),
      {
        id: String((dataObj[year] || []).length + 1),
        title: "New Project Title",
        link: "",
        fileName: "",
      },
    ];
    persistUgProjects(dataObj);
  };

  const deleteUgProject = (year, index) => {
    const dataObj = getUgProjectRecords();
    const projectToDelete = dataObj?.[year]?.[index];
    if (!projectToDelete) return;
    dataObj[year] = (dataObj[year] || []).filter(
      (_, projectIndex) => projectIndex !== index,
    );
    persistUgProjects(dataObj);
    deleteNewsletterFileIfNeeded(projectToDelete?.link);
  };

  const handleUgProjectMarkdownSave = (markdown) => {
    updateData("ugProjects.markdown", markdown);
    const parsed = parseUgProjectsMarkdown(markdown, projectYear);
    if (!parsed.years.length) return;

    const hasExplicitYearSections = /^\s*##\s+/m.test(String(markdown || ""));

    if (hasExplicitYearSections) {
      persistUgProjects(parsed.records, parsed.years);
      if (!parsed.years.includes(projectYear)) {
        setProjectYear(parsed.years[0]);
      }
      return;
    }

    const mergedRecords = {
      ...getUgProjectRecords(),
      [projectYear]: parsed.records[projectYear] || [],
    };
    persistUgProjects(mergedRecords, ugProjectYears);
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

  const getStoredDepartmentValue = (path) => {
    const normalizedPath = String(path || "").replace(/\[(\d+)\]/g, ".$1");
    return normalizedPath.split(".").reduce((current, part) => {
      if (current === undefined || current === null) return undefined;
      return current[part];
    }, activeData);
  };

  const latestNewsletterData =
    getStoredDepartmentValue("newsletters.latest") || defaultNewsletters.latest;
  const newsletterArchivesData =
    getStoredDepartmentValue("newsletters.archives") ||
    defaultNewsletters.archives ||
    [];

  const createEmptyLatestNewsletter = () => ({
    title: "New Newsletter",
    description: "",
    link: "",
    fileName: "",
    date: "",
    term: "",
  });

  const createArchiveFromLatest = (latest) => ({
    date: latest?.date || "",
    vol: latest?.title || "New Newsletter",
    term: latest?.term || "",
    link: latest?.link || "",
    fileName: latest?.fileName || "",
  });

  const createLatestFromArchive = (archive) => ({
    title: archive?.vol || "New Newsletter",
    description: "",
    link: archive?.link || "",
    fileName: archive?.fileName || "",
    date: archive?.date || "",
    term: archive?.term || "",
  });

  const getNewsletterFileName = (link, fileName) => {
    if (fileName) return fileName;
    if (!link) return "No file uploaded";

    const lastSegment = String(link).split("/").pop() || "";
    return decodeURIComponent(lastSegment);
  };

  const getDeletableUploadPath = (link) => {
    if (typeof link !== "string" || !link.startsWith("/uploads/")) return null;
    if (link.includes("..")) return null;
    if (!link.startsWith("/uploads/documents/")) {
      return null;
    }
    return link;
  };

  const deleteNewsletterFileIfNeeded = async (link) => {
    const deletablePath = getDeletableUploadPath(link);
    if (!deletablePath) return;

    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      await axios.delete("/api/upload/file", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          path: deletablePath,
        },
      });
    } catch (error) {
      console.error("Newsletter file delete skipped:", error);
    }
  };

  const addNewsletter = () => {
    const currentLatest = JSON.parse(
      JSON.stringify(t("newsletters.latest", defaultNewsletters.latest)),
    );
    const currentArchives = JSON.parse(
      JSON.stringify(t("newsletters.archives", defaultNewsletters.archives)),
    );

    const nextArchives = currentLatest?.title
      ? [createArchiveFromLatest(currentLatest), ...currentArchives]
      : currentArchives;

    updateData("newsletters.latest", createEmptyLatestNewsletter());
    updateData("newsletters.archives", nextArchives);
  };

  const deleteNewsletter = async (type, index) => {
    if (type === "latest") {
      const currentLatest = JSON.parse(
        JSON.stringify(t("newsletters.latest", defaultNewsletters.latest)),
      );
      const currentArchives = JSON.parse(
        JSON.stringify(t("newsletters.archives", defaultNewsletters.archives)),
      );

      await deleteNewsletterFileIfNeeded(currentLatest?.link);

      if (currentArchives.length > 0) {
        const [nextLatest, ...remainingArchives] = currentArchives;
        updateData("newsletters.latest", createLatestFromArchive(nextLatest));
        updateData("newsletters.archives", remainingArchives);
      } else {
        updateData("newsletters.latest", createEmptyLatestNewsletter());
        updateData("newsletters.archives", []);
      }
      return;
    }

    const currentArchives = JSON.parse(
      JSON.stringify(t("newsletters.archives", defaultNewsletters.archives)),
    );
    const archiveToDelete = currentArchives[index];

    await deleteNewsletterFileIfNeeded(archiveToDelete?.link);

    updateData(
      "newsletters.archives",
      currentArchives.filter((_, archiveIndex) => archiveIndex !== index),
    );
  };

  const uploadNewsletterFile = async (type, index, file) => {
    if (!file) return;

    const uploadKey = `${type}-${index}`;
    setNewsletterUploading((prev) => ({ ...prev, [uploadKey]: true }));
    setNewsletterUploadErrors((prev) => ({ ...prev, [uploadKey]: "" }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const token = localStorage.getItem("adminToken");
      const response = await axios.post("/api/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.fileUrl) {
        throw new Error("Upload did not return a file URL.");
      }

      if (type === "latest") {
        const latest = JSON.parse(
          JSON.stringify(t("newsletters.latest", defaultNewsletters.latest)),
        );
        updateData("newsletters.latest", {
          ...latest,
          link: response.data.fileUrl,
          fileName: response.data.originalName || file.name,
        });
      } else {
        const archives = JSON.parse(
          JSON.stringify(t("newsletters.archives", defaultNewsletters.archives)),
        );
        archives[index] = {
          ...archives[index],
          link: response.data.fileUrl,
          fileName: response.data.originalName || file.name,
        };
        updateData("newsletters.archives", archives);
      }
    } catch (error) {
      console.error("Newsletter upload failed:", error);
      setNewsletterUploadErrors((prev) => ({
        ...prev,
        [uploadKey]:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Upload failed",
      }));
    } finally {
      setNewsletterUploading((prev) => ({ ...prev, [uploadKey]: false }));
    }
  };

  const handleNewsletterFileChange = (type, index, event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;
    if (file.type !== "application/pdf") {
      alert("Please select a PDF file for the newsletter.");
      return;
    }

    uploadNewsletterFile(type, index, file);
  };

  const ugProjectYears = getUgProjectYears();
  const ugProjectRecords = t("ugProjects.records", defaultUgProjects);
  const currentUgProjects = Array.isArray(ugProjectRecords?.[projectYear])
    ? ugProjectRecords[projectYear]
    : [];
  const orderedUgProjectYears = [
    projectYear,
    ...ugProjectYears.filter((year) => year !== projectYear),
  ];
  const selectedUgProjectsMarkdown = cseUgProjectsToMarkdown(
    ugProjectRecords,
    orderedUgProjectYears,
  );

  useEffect(() => {
    if (!ugProjectYears.length) return;
    if (!ugProjectYears.includes(projectYear)) {
      setProjectYear(ugProjectYears[0]);
    }
  }, [projectYear, ugProjectYears]);

  const handleAddUgProjectYear = () => {
    const normalizedYear = newUgProjectYear.trim();

    if (!isValidAcademicYear(normalizedYear)) {
      setUgProjectYearError("Enter a valid academic year like 2025-26.");
      return;
    }

    if (ugProjectYears.includes(normalizedYear)) {
      setUgProjectYearError("That academic year already exists.");
      return;
    }

    const dataObj = getUgProjectRecords();
    dataObj[normalizedYear] = [];
    persistUgProjects(dataObj, [normalizedYear, ...ugProjectYears]);
    setProjectYear(normalizedYear);
    setNewUgProjectYear("");
    setUgProjectYearError("");
    setShowAddUgProjectYear(false);
  };

  const uploadUgProjectReport = async (year, index, file) => {
    if (!file) return;

    const uploadKey = `${year}-${index}`;
    setUgProjectUploading((prev) => ({ ...prev, [uploadKey]: true }));
    setUgProjectUploadErrors((prev) => ({ ...prev, [uploadKey]: "" }));
    setUgProjectUploadSuccess((prev) => ({ ...prev, [uploadKey]: "" }));

    try {
      const formData = new FormData();
      formData.append("file", file);

      const token = localStorage.getItem("adminToken");
      const response = await axios.post("/api/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data.fileUrl) {
        throw new Error("Upload did not return a file URL.");
      }

      updateUgProject(year, index, "link", response.data.fileUrl);
      updateUgProject(
        year,
        index,
        "fileName",
        response.data.originalName || file.name,
      );
      setUgProjectUploadSuccess((prev) => ({
        ...prev,
        [uploadKey]: "Uploaded successfully",
      }));
    } catch (error) {
      console.error("UG project upload failed:", error);
      setUgProjectUploadErrors((prev) => ({
        ...prev,
        [uploadKey]:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Upload failed",
      }));
      setUgProjectUploadSuccess((prev) => ({ ...prev, [uploadKey]: "" }));
    } finally {
      setUgProjectUploading((prev) => ({ ...prev, [uploadKey]: false }));
    }
  };

  const handleUgProjectFileChange = (year, index, event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    uploadUgProjectReport(year, index, file);
  };

  const getAchievementItems = (section) =>
    JSON.parse(
      JSON.stringify(
        t(`achievements.${section}`, defaultAchievements[section] || []),
      ),
    );

  const achievementsToMarkdown = (section, items = []) =>
    items
      .map((item) =>
        [
          `## ${item.name || (section === "faculty" ? "Faculty Name" : "Student Name")}`,
          `- Achievement: ${item.achievement || ""}`,
          `- Category: ${item.category || ""}`,
          `- Certificate: ${item.image || ""}`,
          "",
          String(item.description || "").trim(),
        ]
          .filter((line, index, arr) => !(index === arr.length - 1 && !line))
          .join("\n"),
      )
      .join("\n\n");

  const persistAchievementItems = (section, items) => {
    updateData(`achievements.${section}`, items);
    updateData(
      `achievementsMarkdown.${section}`,
      achievementsToMarkdown(section, items),
    );
  };

  const updateAchievementItem = (section, index, field, value) => {
    const items = getAchievementItems(section);
    items[index] = {
      ...items[index],
      [field]: value,
    };
    persistAchievementItems(section, items);
  };

  const addAchievement = (section) => {
    const items = getAchievementItems(section);
    items.unshift({
      name: section === "faculty" ? "Faculty Name" : "Student Name",
      achievement: "New Achievement",
      description: "Add achievement description.",
      category: section === "faculty" ? "Recognition" : "Competition",
      image: "",
    });
    persistAchievementItems(section, items);
  };

  const getAchievementDeletableUploadPath = (link) => {
    if (typeof link !== "string" || !link.startsWith("/uploads/images/")) {
      return null;
    }
    if (link.includes("..")) return null;
    if (!link.startsWith("/uploads/images/image-")) return null;
    return link;
  };

  const deleteAchievementFileIfNeeded = async (link) => {
    const deletablePath = getAchievementDeletableUploadPath(link);
    if (!deletablePath) return;

    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      await axios.delete("/api/upload/file", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          path: deletablePath,
        },
      });
    } catch (error) {
      console.error("Achievement file delete skipped:", error);
    }
  };

  const deleteAchievement = async (section, index) => {
    const items = getAchievementItems(section);
    await deleteAchievementFileIfNeeded(items[index]?.image);
    persistAchievementItems(
      section,
      items.filter((_, itemIndex) => itemIndex !== index),
    );
  };

  const getAchievementFileName = (link) => {
    if (!link) return "No certificate uploaded";
    const lastSegment = String(link).split("/").pop() || "";
    return decodeURIComponent(lastSegment);
  };

  const uploadAchievementFile = async (section, index, file) => {
    if (!file) return;

    const uploadKey = `${section}-${index}`;
    setAchievementUploading((prev) => ({ ...prev, [uploadKey]: true }));
    setAchievementUploadErrors((prev) => ({ ...prev, [uploadKey]: "" }));
    setAchievementUploadSuccess((prev) => ({ ...prev, [uploadKey]: "" }));

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

      if (!response.data.fileUrl) {
        throw new Error("Upload did not return a file URL.");
      }

      updateAchievementItem(section, index, "image", response.data.fileUrl);
      setAchievementUploadSuccess((prev) => ({
        ...prev,
        [uploadKey]: "Uploaded successfully",
      }));
    } catch (error) {
      console.error("Achievement upload failed:", error);
      setAchievementUploadErrors((prev) => ({
        ...prev,
        [uploadKey]:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Upload failed",
      }));
      setAchievementUploadSuccess((prev) => ({ ...prev, [uploadKey]: "" }));
    } finally {
      setAchievementUploading((prev) => ({ ...prev, [uploadKey]: false }));
    }
  };

  const handleAchievementFileChange = (section, index, event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;
    const isAllowed =
      file.type === "application/pdf" || file.type.startsWith("image/");
    if (!isAllowed) {
      alert("Please select an image or PDF file for the certificate.");
      return;
    }

    uploadAchievementFile(section, index, file);
  };

  const legacyActivities = (
    t("activities", defaultActivityCards) || defaultActivityCards
  ).map(normalizeCseActivity);
  const storedActivitiesMarkdown = t("activitiesMarkdown", "");
  const parsedActivities = parseCseActivitiesMarkdown(storedActivitiesMarkdown);
  const activitiesData = parsedActivities.length
    ? parsedActivities
    : legacyActivities;

  const updateActivityList = (updater) => {
    const nextActivities = updater(
      activitiesData.map((activity) => normalizeCseActivity(activity)),
    );
    updateData("activities", nextActivities);
    updateData("activitiesMarkdown", cseActivitiesToMarkdown(nextActivities));
  };

  const addActivityCard = () => {
    updateActivityList((items) => [
      {
        title: "New Curricular Activity",
        date: "Add activity date",
        participants: "Add participant details",
        organizer: "Add organizer details",
        resource: "",
        image: "",
      },
      ...items,
    ]);
  };

  const deleteActivityCard = (index) => {
    updateActivityList((items) => items.filter((_, itemIndex) => itemIndex !== index));
  };

  const activityMarkdownComponents = {
    p: ({ node, ...props }) => (
      <p className="text-gray-700 leading-relaxed" {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul className="list-disc pl-5 space-y-1 text-gray-700" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal pl-5 space-y-1 text-gray-700" {...props} />
    ),
    li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
    strong: ({ node, ...props }) => (
      <strong className="font-semibold text-gray-800" {...props} />
    ),
    a: ({ node, ...props }) => (
      <a
        className="text-ssgmce-blue hover:text-ssgmce-orange underline underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  };

  const renderActivityMarkdown = (value, emptyText = "Not specified") => {
    const trimmedValue = String(value || "").trim();
    if (!trimmedValue) {
      return <p className="text-gray-400 italic leading-relaxed">{emptyText}</p>;
    }

    return (
      <div className="prose prose-sm max-w-none prose-p:my-0 prose-ul:my-0 prose-ol:my-0">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={activityMarkdownComponents}
        >
          {trimmedValue}
        </ReactMarkdown>
      </div>
    );
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
            <p className="text-ssgmce-blue font-medium">
              <EditableText
                value={t("hod.name", "Dr. J. M. Patil")}
                onSave={(v) => updateField("hod.name", v)}
                placeholder="Click to edit HOD name..."
              />
            </p>
            <p className="text-sm text-gray-500">
              <EditableText
                value={t(
                  "hod.designation",
                  "Head, Department of Computer Science & Engineering",
                )}
                onSave={(v) => updateField("hod.designation", v)}
                placeholder="Click to edit designation..."
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
                className="space-y-4 w-full"
              >
                {t("vision", defaultVision).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-ssgmce-orange text-2xl flex-shrink-0">
                      ➤
                    </div>
                    <div className="text-lg text-gray-700 leading-relaxed font-medium flex-1">
                      <MarkdownEditor
                        value={item}
                        onSave={(v) =>
                          updateArrayString("vision", defaultVision, i, v)
                        }
                        placeholder="Click to edit vision item..."
                        className="w-full"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const arr = t("vision", defaultVision).filter(
                            (_, idx) => idx !== i,
                          );
                          updateData("vision", arr);
                        }}
                        className="flex-shrink-0 mt-1 text-red-400 hover:text-red-600 text-sm font-bold px-2"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const arr = [
                        ...t("vision", defaultVision),
                        "New vision statement.",
                      ];
                      updateData("vision", arr);
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    + Add Vision Item
                  </button>
                )}
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
                      <MarkdownEditor
                        value={item}
                        onSave={(v) =>
                          updateArrayString("mission", defaultMission, i, v)
                        }
                        placeholder="Click to edit mission item..."
                        className="w-full"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const arr = t("mission", defaultMission).filter(
                            (_, idx) => idx !== i,
                          );
                          updateData("mission", arr);
                        }}
                        className="flex-shrink-0 mt-1 text-red-400 hover:text-red-600 text-sm font-bold px-2"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const arr = [
                        ...t("mission", defaultMission),
                        "New mission statement.",
                      ];
                      updateData("mission", arr);
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    + Add Mission Item
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
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="text-gray-700 leading-relaxed font-medium w-full">
                      <MarkdownEditor
                        value={item}
                        onSave={(v) =>
                          updateArrayString("peo", defaultPeo, i, v)
                        }
                        placeholder="Click to edit PEO item..."
                        className="w-full"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const arr = t("peo", defaultPeo).filter(
                            (_, idx) => idx !== i,
                          );
                          updateData("peo", arr);
                        }}
                        className="flex-shrink-0 mt-1 text-red-400 hover:text-red-600 text-sm font-bold px-2"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const arr = [
                        ...t("peo", defaultPeo),
                        "New program educational objective.",
                      ];
                      updateData("peo", arr);
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    + Add PEO Item
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
                {t("pso", defaultPso).map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-ssgmce-orange text-xl">➤</div>
                    <div className="text-gray-700 leading-relaxed font-medium w-full">
                      <MarkdownEditor
                        value={item}
                        onSave={(v) =>
                          updateArrayString("pso", defaultPso, i, v)
                        }
                        placeholder="Click to edit PSO item..."
                        className="w-full"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => {
                          const arr = t("pso", defaultPso).filter(
                            (_, idx) => idx !== i,
                          );
                          updateData("pso", arr);
                        }}
                        className="flex-shrink-0 mt-1 text-red-400 hover:text-red-600 text-sm font-bold px-2"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button
                    onClick={() => {
                      const arr = [
                        ...t("pso", defaultPso),
                        "New program specific objective.",
                      ];
                      updateData("pso", arr);
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    + Add PSO Item
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
                  {t("po", defaultPo)
                    .slice(0, showAllPos ? undefined : 4)
                    .map((po, i) => (
                      <div
                        key={i}
                        className="text-gray-700 leading-relaxed text-sm"
                      >
                        <div className="flex items-start gap-2">
                          <div className="flex-1">
                            <strong className="text-gray-900 block mb-1 text-base">
                              <EditableText
                                value={po.t}
                                onSave={(v) => updatePo(i, "t", v)}
                              />
                            </strong>
                            <MarkdownEditor
                              value={po.d}
                              onSave={(v) => updatePo(i, "d", v)}
                              placeholder="Click to edit PO description..."
                              className="w-full"
                            />
                          </div>
                          {isEditing && (
                            <button
                              onClick={() => {
                                const arr = t("po", defaultPo).filter(
                                  (_, idx) => idx !== i,
                                );
                                updateData("po", arr);
                              }}
                              className="flex-shrink-0 mt-1 text-red-400 hover:text-red-600 text-sm font-bold px-2"
                              title="Remove item"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
                {isEditing && (
                  <button
                    onClick={() => {
                      const arr = [
                        ...t("po", defaultPo),
                        {
                          t: "New Outcome",
                          d: "Description of the new program outcome.",
                        },
                      ];
                      updateData("po", arr);
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium"
                  >
                    + Add PO Item
                  </button>
                )}

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
              <MarkdownEditor
                value={t("hod.message", defaultHodMessage)}
                onSave={(v) => updateField("hod.message", v)}
                placeholder="Click to edit HOD message (Markdown supported)..."
                className="w-full"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
              <div>
                <div className="font-dancing text-2xl text-ssgmce-blue">
                  <EditableText
                    value={t("hod.name", "Dr. J. M. Patil")}
                    onSave={(v) => updateField("hod.name", v)}
                    placeholder="Click to edit HOD name..."
                  />
                </div>
                <div className="text-sm text-gray-500">
                  <EditableText
                    value={t("hod.role", "Head, Department of CSE")}
                    onSave={(v) => updateField("hod.role", v)}
                    placeholder="Click to edit designation..."
                  />
                </div>
              </div>
              <div className="text-right text-sm text-gray-400">
                <EditableText
                  value={t(
                    "hod.collegeName",
                    "Shri Sant Gajanan Maharaj\nCollege of Engineering, Shegaon",
                  )}
                  onSave={(v) => updateField("hod.collegeName", v)}
                  placeholder="Click to edit college name..."
                  multiline
                  richText={false}
                />
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
                <EditableImage
                  src={lab.image || ""}
                  onSave={(url) => {
                    const updated = [...t("laboratories", defaultLabs)];
                    updated[index].image = url;
                    updateField("laboratories", updated);
                  }}
                  className="aspect-video w-full object-cover rounded-lg"
                  placeholder="Click to add image"
                />
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
                    {isEditing ? (
                      <MarkdownEditor
                        value={lab.resources}
                        onSave={(val) => {
                          const updated = [...t("laboratories", defaultLabs)];
                          updated[index].resources = val;
                          updateField("laboratories", updated);
                        }}
                      />
                    ) : (
                      <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {lab.resources}
                      </div>
                    )}
                  </div>
                  {(lab.facilities || isEditing) && (
                    <div>
                      <h5 className="font-semibold text-red-600 text-sm mb-2">
                        Other Resources / UPS:
                      </h5>
                      {isEditing ? (
                        <MarkdownEditor
                          value={lab.facilities || ""}
                          onSave={(val) => {
                            const updated = [...t("laboratories", defaultLabs)];
                            updated[index].facilities = val;
                            updateField("laboratories", updated);
                          }}
                        />
                      ) : (
                        <div className="text-gray-700 text-sm leading-relaxed">
                          {lab.facilities}
                        </div>
                      )}
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
          {prideTab === "gate" &&
            (() => {
              const md = t(
                "pride.gateMarkdown",
                prideGateToMarkdown(t("pride.gate", defaultPrideGate)),
              );
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEditing ? (
                    <MarkdownEditor
                      value={md}
                      onSave={(v) => updateData("pride.gateMarkdown", v)}
                      showDocImport
                      docTemplateUrl="/uploads/documents/pride_templates/cse_gate_template.docx"
                      docTemplateLabel="Download GATE Template"
                      placeholder="GATE qualified students tables (GFM Markdown)..."
                    />
                  ) : (
                    <PrideMdView markdown={md} />
                  )}
                </motion.div>
              );
            })()}

          {/* University Toppers */}
          {prideTab === "toppers" &&
            (() => {
              const md = t(
                "pride.toppersMarkdown",
                prideToppersToMarkdown({
                  be: t("pride.toppers.be", defaultPrideToppersBE),
                  me: t("pride.toppers.me", defaultPrideToppersME),
                }),
              );
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {isEditing ? (
                    <MarkdownEditor
                      value={md}
                      onSave={(v) => updateData("pride.toppersMarkdown", v)}
                      showDocImport
                      docTemplateUrl="/uploads/documents/pride_templates/cse_toppers_template.docx"
                      docTemplateLabel="Download Toppers Template"
                      placeholder="University toppers tables (GFM Markdown)..."
                    />
                  ) : (
                    <PrideMdView markdown={md} />
                  )}
                </motion.div>
              );
            })()}

          {/* Top Alumni */}
          {prideTab === "alumni" &&
            (() => {
              const md = t(
                "pride.alumniMarkdown",
                prideAlumniToMarkdown(
                  t("pride.alumni", defaultPrideAlumni),
                  t("pride.alumniTitle", "Top Alumni of Department"),
                ),
              );
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isEditing ? (
                    <MarkdownEditor
                      value={md}
                      onSave={(v) => updateData("pride.alumniMarkdown", v)}
                      showDocImport
                      docTemplateUrl="/uploads/documents/pride_templates/cse_alumni_template.docx"
                      docTemplateLabel="Download Alumni Template"
                      placeholder="Top alumni table (GFM Markdown)..."
                    />
                  ) : (
                    <PrideMdView markdown={md} />
                  )}
                </motion.div>
              );
            })()}
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
            {activitiesData.length} Activities
          </span>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={addActivityCard}
              className="px-5 py-2.5 bg-ssgmce-blue text-white rounded-lg hover:bg-ssgmce-dark-blue transition-colors font-medium shadow-sm"
            >
              + Add New Activity
            </button>
          </div>
        )}

        {/* Activity List */}
        <div className="space-y-5">
          {activitiesData.slice(0, activitiesVisible).map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.35 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
            >
              {isEditing && (
                <button
                  onClick={() => deleteActivityCard(idx)}
                  className="absolute top-3 right-3 z-10 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-md hover:bg-red-600 transition-colors"
                  title="Delete activity"
                >
                  Delete Activity
                </button>
              )}

              <div className="flex flex-col sm:flex-row">
                <div
                  className={`sm:w-72 flex-shrink-0 ${isEditing ? "" : "cursor-pointer"}`}
                  onClick={() => {
                    if (!isEditing) {
                      setLightboxActivity(idx);
                    }
                  }}
                >
                  {isEditing ? (
                    <EditableImage
                      src={activity.image}
                      onSave={(url) => updateActivity(idx, "image", url)}
                      alt={activity.title}
                      className="w-full h-48 sm:h-full object-contain bg-gray-50"
                      placeholder="Click to add activity poster"
                    />
                  ) : activity.image ? (
                    <img
                      src={getLocalCseActivityImageUrl(activity.image)}
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

                <div className="flex-1 p-5 sm:p-6">
                  <div className="mb-4">
                    <span className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                      {isEditing ? (
                        <EditableText
                          value={activity.date}
                          onSave={(val) => updateActivity(idx, "date", val)}
                        />
                      ) : (
                        activity.date || "Date to be updated"
                      )}
                    </span>

                    <div className="text-lg sm:text-xl font-bold text-gray-800 leading-snug tracking-tight">
                      {isEditing ? (
                        <EditableText
                          value={activity.title}
                          onSave={(val) => updateActivity(idx, "title", val)}
                          multiline
                          className="w-full"
                        />
                      ) : (
                        activity.title
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-start gap-2.5">
                      <FaUsers className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 w-full">
                        <p className="font-semibold text-gray-800 mb-2">
                          Participants
                        </p>
                        {isEditing ? (
                          <MarkdownEditor
                            value={activity.participants}
                            onSave={(val) => updateActivity(idx, "participants", val)}
                            placeholder="Add participant details..."
                          />
                        ) : (
                          renderActivityMarkdown(activity.participants)
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <FaUserGraduate className="text-orange-500 mt-0.5 flex-shrink-0" />
                      <div className="min-w-0 w-full">
                        <p className="font-semibold text-gray-800 mb-2">
                          Organized by
                        </p>
                        {isEditing ? (
                          <MarkdownEditor
                            value={activity.organizer}
                            onSave={(val) => updateActivity(idx, "organizer", val)}
                            placeholder="Add organizer details..."
                          />
                        ) : (
                          renderActivityMarkdown(activity.organizer)
                        )}
                      </div>
                    </div>

                    {(activity.resource || isEditing) && (
                      <div className="flex items-start gap-2.5">
                        <FaChalkboardTeacher className="text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0 w-full">
                          <p className="font-semibold text-gray-800 mb-2">
                            Resource Person
                          </p>
                          {isEditing ? (
                            <MarkdownEditor
                              value={activity.resource}
                              onSave={(val) => updateActivity(idx, "resource", val)}
                              placeholder="Add resource person details..."
                            />
                          ) : (
                            renderActivityMarkdown(activity.resource, "Not specified")
                          )}
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
        {activitiesData.length > 6 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() =>
                setActivitiesVisible((prev) =>
                  prev >= activitiesData.length
                    ? 6
                    : Math.min(prev + 6, activitiesData.length),
                )
              }
              className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-sm"
            >
              {activitiesVisible >= activitiesData.length
                ? "Show Less"
                : `Load More (${activitiesData.length - activitiesVisible} more)`}
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxActivity !== null &&
            (() => {
              const activity = activitiesData[lightboxActivity];
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
                        {lightboxActivity + 1} / {activitiesData.length}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            setLightboxActivity((prev) =>
                              prev > 0
                                ? prev - 1
                                : activitiesData.length - 1,
                            )
                          }
                          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <FaChevronLeft className="text-gray-500 text-sm" />
                        </button>
                        <button
                          onClick={() =>
                            setLightboxActivity((prev) =>
                              prev < activitiesData.length - 1
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
                          src={getLocalCseActivityImageUrl(activity.image)}
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
                            <div className="mt-1">
                              {renderActivityMarkdown(activity.participants)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 p-3 bg-orange-50 rounded-lg">
                          <FaUserGraduate className="text-orange-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-orange-600 uppercase">
                              Organized by
                            </p>
                            <div className="mt-1">
                              {renderActivityMarkdown(activity.organizer)}
                            </div>
                          </div>
                        </div>
                        {activity.resource && (
                          <div className="flex items-start gap-2.5 p-3 bg-green-50 rounded-lg sm:col-span-2">
                            <FaChalkboardTeacher className="text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-green-600 uppercase">
                                Resource Person
                              </p>
                              <div className="mt-1">
                                {renderActivityMarkdown(activity.resource)}
                              </div>
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
            <div className="flex items-center gap-4">
              {isEditing && (
                <button
                  type="button"
                  onClick={addCourseMaterial}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <FaPlus className="text-xs" />
                  Add Course Material
                </button>
              )}
              <FaChalkboardTeacher className="text-4xl text-orange-200 opacity-40" />
            </div>
          </div>

          {isEditing ? (
            <div className="divide-y divide-gray-100">
              {courseMaterialItems.map((material, i) => (
                  <div
                    key={i}
                    ref={i === courseMaterialItems.length - 1 ? latestCourseMaterialRef : null}
                    className="p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex min-w-0 flex-1 gap-4">
                        <div className="w-10 flex-shrink-0 pt-2 text-center font-mono text-sm text-gray-400">
                          {i + 1}
                        </div>
                        <div className="min-w-0 flex-1 space-y-4">
                          <div>
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                              Year / Class
                            </label>
                            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                              <EditableText
                                value={material.title}
                                onSave={(val) =>
                                  updateCourseMaterial(i, "title", val)
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-500">
                              OneDrive Link
                            </label>
                            <textarea
                              value={material.link || ""}
                              onChange={(event) =>
                                updateCourseMaterial(
                                  i,
                                  "link",
                                  event.target.value,
                                )
                              }
                              rows={3}
                              placeholder="Paste the OneDrive share link here..."
                              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 shadow-sm outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteCourseMaterial(i)}
                        className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
                      >
                        <FaTrash className="text-xs" />
                        Delete
                      </button>
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : (
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
                  {courseMaterialItems.map((material, i) => (
                      <tr
                        key={i}
                        className="hover:bg-orange-50/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-center font-mono text-gray-400">
                          {i + 1}
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-800 block">
                            {material.title}
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
          )}
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
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0 hide-scrollbar">
              {ugProjectYears.map((year) => (
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
            {isEditing && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setNewUgProjectYear("");
                    setUgProjectYearError("");
                    setShowAddUgProjectYear(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2 text-xs font-semibold text-white transition-all hover:shadow-lg"
                >
                  <FaPlus className="text-xs" />
                  Add Session
                </button>
                <button
                  type="button"
                  onClick={() => addUgProject(projectYear)}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-xs font-semibold text-white transition-all hover:shadow-lg"
                >
                  <FaPlus className="text-xs" />
                  Add Project
                </button>
              </>
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
                {currentUgProjects.map((project, i) => (
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
                      {isEditing ? (
                        <div className="space-y-3">
                          <EditableText
                            value={project.title}
                            onSave={(val) =>
                              updateUgProject(projectYear, i, "title", val)
                            }
                            multiline
                          />
                          <div className="flex flex-wrap items-center gap-2">
                            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-[#003366] to-[#004d99] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:from-[#004d99] hover:to-[#0066cc] hover:shadow-lg">
                              <FaUpload className="text-yellow-300" />
                              {ugProjectUploading[`${projectYear}-${i}`]
                                ? "Uploading..."
                                : "Upload Report"}
                              <input
                                type="file"
                                className="hidden"
                                disabled={ugProjectUploading[`${projectYear}-${i}`]}
                                onChange={(event) =>
                                  handleUgProjectFileChange(
                                    projectYear,
                                    i,
                                    event,
                                  )
                                }
                              />
                            </label>
                            {project.link && (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-ssgmce-blue underline underline-offset-2"
                              >
                                {getNewsletterFileName(
                                  project.link,
                                  project.fileName,
                                )}
                              </a>
                            )}
                            {ugProjectUploadErrors[`${projectYear}-${i}`] && (
                              <span className="text-[11px] text-red-500">
                                {ugProjectUploadErrors[`${projectYear}-${i}`]}
                              </span>
                            )}
                            {ugProjectUploadSuccess[`${projectYear}-${i}`] && (
                              <span className="rounded-full bg-green-50 px-3 py-1 text-[11px] font-semibold text-green-700">
                                {ugProjectUploadSuccess[`${projectYear}-${i}`]}
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => deleteUgProject(projectYear, i)}
                              className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                            >
                              <FaTrash className="text-xs" />
                              Delete
                            </button>
                          </div>
                        </div>
                      ) : (
                        project.title
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {isEditing ? (
                        <span className="text-xs text-gray-500">
                          {project.link
                            ? getNewsletterFileName(
                                project.link,
                                project.fileName || getFileNameFromUrl(project.link),
                              )
                            : "-"}
                        </span>
                      ) : project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold bg-blue-50 text-ssgmce-blue px-3 py-1.5 rounded-md hover:bg-blue-100 transition-colors border border-gray-200 inline-block"
                        >
                          View report
                        </a>
                      ) : (
                        <span className="text-xs text-gray-400">No report</span>
                      )}
                    </td>
                  </tr>
                ))}
                {currentUgProjects.length === 0 && (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-12 text-center text-gray-400"
                    >
                      No projects added for {projectYear} yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {isEditing && (
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-800">
                  Bulk Edit In Markdown
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Import a DOCX or edit all sessions in markdown. Saving here
                  updates the UG Projects table above without changing the
                  current frontend layout.
                </p>
              </div>
              <MarkdownEditor
                key={projectYear}
                value={selectedUgProjectsMarkdown}
                onSave={handleUgProjectMarkdownSave}
                showDocImport
                docTemplateUrl="/uploads/documents/pride_templates/cse_ug_projects_template.docx"
                docTemplateLabel="Download UG Projects Template"
                placeholder="UG project tables by year (GFM Markdown)..."
              />
            </div>
          </div>
        )}

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

    "course-outcomes": (() => {
      // Default sections — content falls back to individually-saved keys for backward compat
      const defaultBeSections = [
        {
          id: "be-sem3",
          label: "B.E. Semester-III",
          content: t(
            "courseOutcomes.sem3",
            `### 3KS01 ENGINEERING MATHEMATICS - III\n\nOn completion of the course, the students will be able to:\n\n1. Solve the Linear Differential equations with constant coefficients by various methods.\n2. Find Laplace Transform of various types of functions and apply this knowledge to find Laplace Transform of Periodic, Impulse & Unit step function.\n3. Use Laplace Transform to solve Linear Differential equations with constant coefficients & Find Fourier Transform of various types of functions and apply this knowledge to find Fourier Transform of functions, in their core subjects.\n4. Find the solution of partial differential equations of first order also learn statistical methods.\n5. Test the analyticity, find the harmonic conjugates and expand the function in Taylor's or Laurent's series, find conformal mapping.\n6. Differentiate vector point functions, find gradient of scalar point function, and find divergence and curl of vector point function. Integrate vector point functions Evaluate line, surface and volume integrals.`,
          ),
        },
        {
          id: "be-sem3-nep",
          label: "B.E. Semester-III(NEP)",
          content: t(
            "courseOutcomes.sem3Nep",
            `### 3CS203PC: Discrete Structure & Graph Theory\n\nOn completion of the course, the students will be able to:\n\n1. Analyze and express logic sentence in terms of predicates, quantifiers, and logical connectives.\n2. Derive the solution for a given problem using deductive logic and prove the solution based on logical inference.\n3. Classify algebraic structure for a given mathematical problem.\n4. Perform combinatorial analysis to solve counting problems.\n5. Perform operation on trees data structures.\n6. Develop the given problem as graph networks and solve with techniques of graph theory.`,
          ),
        },
        {
          id: "be-sem4",
          label: "B.E. Semester-IV",
          content: t(
            "courseOutcomes.sem4",
            `### 4KS01 ARTIFICIAL INTELLIGENCE\n\nOn completion of the course, the students will be able to:\n\n1. Explain concepts of Artificial Intelligence and different types of intelligent agents and their architecture.\n2. Formulate problems as state space search problem and efficiently solve them.\n3. Summarize the various searching techniques, constraint satisfaction problem and example problems - game playing techniques.\n4. Apply AI techniques in applications which involve perception, reasoning and learning.\n5. Compare the importance of knowledge, types of knowledge, issues related to knowledge acquisition and representation.`,
          ),
        },
        {
          id: "be-sem4-nep",
          label: "B.E. Semester-IV(NEP)",
          content: t(
            "courseOutcomes.sem4Nep",
            `### 4CS209PC: Data Communication and Networking\n\nOn completion of the course, the students will be able to:\n\n1. Analyze the functions of each layer in the OSI and TCP/IP models to interpret network communication.\n2. Evaluate different types of transmission media and justify their use in real-time applications.\n3. Analyze application and presentation layer functions and protocols used in internet communication.\n4. Apply transport layer concepts and services to ensure reliable data transmission.\n5. Analyze routing protocol classifications and apply IP addressing schemes for a given network.\n6. Analyze data link layer functions and protocols to achieve efficient and error-free communication.`,
          ),
        },
        {
          id: "be-sem5",
          label: "B.E. Semester-V",
          content: t(
            "courseOutcomes.sem5",
            `### 5KS01 DATABASE MANAGEMENT SYSTEMS\n\nOn completion of the course, the students will be able to:\n\n1. Model, design and normalize databases for real life applications.\n2. Discuss data models, conceptualize and depict a database system using ER diagram.\n3. Query Databases applications using Query Languages like SQL.\n4. Design and develop transaction processing approach for relational databases.\n5. Understand validation framework like integrity constraints, triggers and assertions.`,
          ),
        },
        {
          id: "be-sem6",
          label: "B.E. Semester-VI",
          content: t(
            "courseOutcomes.sem6",
            `### 6KS01 SECURITY POLICY & GOVERNANCE\n\nOn completion of the course, the students will be able to:\n\n1. List and discuss the key characteristics of Information Security, Leadership and Management.\n2. Differentiate between Law and Ethics.\n3. Describe why ethical codes of conduct are important to Information Security.\n4. Discuss the importance, benefits and desired outcomes of Information Security Governance.\n5. Discuss the process of developing, implementing and maintaining various types of Information Security Policies.\n6. Define Risk Management and its role in the organization.`,
          ),
        },
        {
          id: "be-sem7",
          label: "B.E. Semester-VII",
          content: t(
            "courseOutcomes.sem7",
            `### 7KS01 SOCIAL SCIENCE & ENGINEERING ECONOMICS\n\nOn completion of the course, the students will be able to:\n\n1. To identify the importance of fundamental rights as well as fundamental duties.\n2. To study the composition and powers of the Indian Parliament.\n3. To study the impact of science and technology on culture and civilization.\n4. To identify the different market structures.\n5. To study the decision-making process and the relationship between engineering and economics.\n6. To identify the importance of Economic Development on the livelihood of the citizens.`,
          ),
        },
        {
          id: "be-sem8",
          label: "B.E. Semester-VIII",
          content: t(
            "courseOutcomes.sem8",
            `Course outcomes for Semester VIII will be updated soon.`,
          ),
        },
      ];

      const defaultMeSections = [
        {
          id: "me-sem1",
          label: "M.E. Semester-I",
          content: t(
            "courseOutcomes.meSem1",
            `Course outcomes for M.E. Semester I will be updated soon.`,
          ),
        },
        {
          id: "me-sem2",
          label: "M.E. Semester-II",
          content: t(
            "courseOutcomes.meSem2",
            `Course outcomes for M.E. Semester II will be updated soon.`,
          ),
        },
      ];

      const beSections = t("courseOutcomes.beSections", defaultBeSections);
      const meSections = t("courseOutcomes.meSections", defaultMeSections);

      const updateBeSections = (updated) =>
        updateField("courseOutcomes.beSections", updated);
      const updateMeSections = (updated) =>
        updateField("courseOutcomes.meSections", updated);

      // Insert a new blank section after `afterIdx` (-1 = insert at beginning)
      const insertSection = (sections, afterIdx, onUpdate) => {
        const newSection = {
          id: `custom-${Date.now()}`,
          label: "New Semester",
          content: "",
        };
        const updated = [...sections];
        updated.splice(afterIdx + 1, 0, newSection);
        onUpdate(updated);
      };

      const removeSection = (sections, idx, onUpdate) => {
        onUpdate(sections.filter((_, i) => i !== idx));
      };

      const renderSectionList = (sections, onUpdate) => (
        <div className="p-6 space-y-1">
          {/* Insert-at-beginning button */}
          {isEditing && (
            <button
              onClick={() => insertSection(sections, -1, onUpdate)}
              className="w-full py-1.5 mb-2 border-2 border-dashed border-green-300 text-green-600 hover:border-green-500 hover:bg-green-50 rounded-lg text-sm font-medium transition-colors"
            >
              + Insert at Beginning
            </button>
          )}

          {sections.map((semester, idx) => (
            <React.Fragment key={semester.id}>
              <div className="border-b border-gray-200 pb-2">
                <button
                  onClick={() =>
                    setExpandedSemester(
                      expandedSemester === semester.id ? null : semester.id,
                    )
                  }
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-700 text-left">
                    {isEditing ? (
                      <EditableText
                        value={semester.label}
                        onSave={(val) => {
                          const updated = [...sections];
                          updated[idx] = { ...updated[idx], label: val };
                          onUpdate(updated);
                        }}
                      />
                    ) : (
                      semester.label
                    )}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {isEditing && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (
                            window.confirm(
                              `Delete "${semester.label}"? This cannot be undone.`,
                            )
                          ) {
                            removeSection(sections, idx, onUpdate);
                          }
                        }}
                        className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    )}
                    <span className="px-4 py-1 bg-ssgmce-blue text-white text-sm rounded hover:bg-ssgmce-dark-blue transition-colors">
                      {expandedSemester === semester.id ? "Hide" : "View"}
                    </span>
                  </div>
                </button>
                <AnimatePresence>
                  {expandedSemester === semester.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gray-50">
                        <MarkdownEditor
                          value={semester.content}
                          onSave={(val) => {
                            const updated = [...sections];
                            updated[idx] = { ...updated[idx], content: val };
                            onUpdate(updated);
                          }}
                          placeholder={`Click to edit ${semester.label} course outcomes (Markdown supported)...`}
                          className="w-full"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Insert-after button between items */}
              {isEditing && (
                <button
                  onClick={() => insertSection(sections, idx, onUpdate)}
                  className="w-full py-1 border-2 border-dashed border-green-300 text-green-600 hover:border-green-500 hover:bg-green-50 rounded-lg text-xs font-medium transition-colors"
                >
                  + Insert After
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      );

      return (
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

            {renderSectionList(beSections, updateBeSections)}
            {isEditing && (
              <div className="px-6 pb-4">
                <button
                  onClick={() =>
                    insertSection(
                      beSections,
                      beSections.length - 1,
                      updateBeSections,
                    )
                  }
                  className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  + Add New B.E. Semester
                </button>
              </div>
            )}
          </div>

          {/* M.E. Course Outcomes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#003366] px-6 py-4 text-center">
              <h3 className="text-xl font-bold text-white">
                M.E. Course Outcomes
              </h3>
            </div>
            {renderSectionList(meSections, updateMeSections)}
            {isEditing && (
              <div className="px-6 pb-4">
                <button
                  onClick={() =>
                    insertSection(
                      meSections,
                      meSections.length - 1,
                      updateMeSections,
                    )
                  }
                  className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  + Add New M.E. Semester
                </button>
              </div>
            )}
          </div>
        </div>
      );
    })(),

    curriculum: (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-4">
            Scheme and Syllabus
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* B.E. Section */}
          <div className="grid md:grid-cols-12 border-b border-gray-200">
            <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
              <div className="flex items-center gap-3 w-full">
                <h4 className="font-bold text-lg text-gray-800">
                  B.E. (Computer Science and Engineering)
                </h4>
              </div>
            </div>
            <div className="md:col-span-8 p-6">
              {isEditing && (
                <div className="flex gap-2 mb-4 justify-end">
                  {selectedCurriculumItems.filter((k) => k.startsWith("be-"))
                    .length > 0 && (
                    <button
                      onClick={() => deleteSelectedCurriculumItems("be")}
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs font-semibold"
                    >
                      <FaTrash /> Delete Selected (
                      {
                        selectedCurriculumItems.filter((k) =>
                          k.startsWith("be-"),
                        ).length
                      }
                      )
                    </button>
                  )}
                  <button
                    onClick={() => addCurriculumItem("be")}
                    className="flex items-center gap-2 px-3 py-1.5 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-semibold"
                  >
                    <FaPlus /> Add Item
                  </button>
                </div>
              )}
              <ul className="space-y-4">
                {t("templateData.curriculum.be", DEFAULT_CURRICULUM_BE).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      {isEditing && (
                        <input
                          type="checkbox"
                          checked={selectedCurriculumItems.includes(`be-${i}`)}
                          onChange={() => toggleCurriculumSelection("be", i)}
                          className="mt-2 w-4 h-4 rounded border-gray-300"
                        />
                      )}
                      <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                        <span className="text-gray-700 text-sm font-medium flex-1">
                          <EditableText
                            value={item.label}
                            onSave={(val) =>
                              updateCurriculumItem("be", i, "label", val)
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
                                      "be",
                                      i,
                                      "link",
                                      e.target.value,
                                    )
                                  }
                                  placeholder="Link URL or use upload"
                                  className={`text-xs px-2 py-1 border rounded w-40 ${
                                    item.fileUrl
                                      ? "border-green-400 bg-green-50"
                                      : "border-gray-300"
                                  }`}
                                />
                                {item.fileName && (
                                  <span
                                    className="text-xs text-green-700 bg-green-100 border border-green-300 rounded px-1.5 py-0.5 truncate max-w-[160px] font-medium"
                                    title={item.fileName}
                                  >
                                    ✅ {item.fileName}
                                  </span>
                                )}
                              </div>
                              <div className="relative">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) =>
                                    handleCurriculumFileChange("be", i, e)
                                  }
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  id={`file-upload-be-${i}`}
                                />
                                <label
                                  htmlFor={`file-upload-be-${i}`}
                                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                                    uploadingFiles[`be-${i}`]
                                      ? "bg-gray-300 text-gray-500"
                                      : item.fileUrl
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                  }`}
                                  title={
                                    item.fileUrl
                                      ? "Re-upload PDF"
                                      : "Upload PDF"
                                  }
                                >
                                  {uploadingFiles[`be-${i}`] ? (
                                    "Uploading..."
                                  ) : (
                                    <>
                                      <FaUpload />{" "}
                                      {item.fileUrl ? "Re-upload" : "PDF"}
                                    </>
                                  )}
                                </label>
                              </div>
                              <button
                                onClick={() => removeCurriculumItem("be", i)}
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
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* M.E. Section */}
          <div className="grid md:grid-cols-12 bg-gray-50/30">
            <div className="md:col-span-4 bg-gray-50/50 p-6 flex items-center border-r border-gray-100">
              <div className="flex items-center gap-3 w-full">
                <h4 className="font-bold text-lg text-gray-800">
                  M.E. (Computer Engineering)
                </h4>
              </div>
            </div>
            <div className="md:col-span-8 p-6">
              {isEditing && (
                <div className="flex gap-2 mb-4 justify-end">
                  {selectedCurriculumItems.filter((k) => k.startsWith("me-"))
                    .length > 0 && (
                    <button
                      onClick={() => deleteSelectedCurriculumItems("me")}
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-xs font-semibold"
                    >
                      <FaTrash /> Delete Selected (
                      {
                        selectedCurriculumItems.filter((k) =>
                          k.startsWith("me-"),
                        ).length
                      }
                      )
                    </button>
                  )}
                  <button
                    onClick={() => addCurriculumItem("me")}
                    className="flex items-center gap-2 px-3 py-1.5 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-semibold"
                  >
                    <FaPlus /> Add Item
                  </button>
                </div>
              )}
              <ul className="space-y-4">
                {t("templateData.curriculum.me", DEFAULT_CURRICULUM_ME).map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      {isEditing && (
                        <input
                          type="checkbox"
                          checked={selectedCurriculumItems.includes(`me-${i}`)}
                          onChange={() => toggleCurriculumSelection("me", i)}
                          className="mt-2 w-4 h-4 rounded border-gray-300"
                        />
                      )}
                      <span className="w-2 h-2 rounded-full bg-ssgmce-orange mt-2 block group-hover:bg-ssgmce-blue transition-colors"></span>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-50 pb-2">
                        <span className="text-gray-700 text-sm font-medium flex-1">
                          <EditableText
                            value={item.label}
                            onSave={(val) =>
                              updateCurriculumItem("me", i, "label", val)
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
                                      "me",
                                      i,
                                      "link",
                                      e.target.value,
                                    )
                                  }
                                  placeholder="Link URL or use upload"
                                  className={`text-xs px-2 py-1 border rounded w-40 ${
                                    item.fileUrl
                                      ? "border-green-400 bg-green-50"
                                      : "border-gray-300"
                                  }`}
                                />
                                {item.fileName && (
                                  <span
                                    className="text-xs text-green-700 bg-green-100 border border-green-300 rounded px-1.5 py-0.5 truncate max-w-[160px] font-medium"
                                    title={item.fileName}
                                  >
                                    ✅ {item.fileName}
                                  </span>
                                )}
                              </div>
                              <div className="relative">
                                <input
                                  type="file"
                                  accept=".pdf"
                                  onChange={(e) =>
                                    handleCurriculumFileChange("me", i, e)
                                  }
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  id={`file-upload-me-${i}`}
                                />
                                <label
                                  htmlFor={`file-upload-me-${i}`}
                                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer transition-colors ${
                                    uploadingFiles[`me-${i}`]
                                      ? "bg-gray-300 text-gray-500"
                                      : item.fileUrl
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                  }`}
                                  title={
                                    item.fileUrl
                                      ? "Re-upload PDF"
                                      : "Upload PDF"
                                  }
                                >
                                  {uploadingFiles[`me-${i}`] ? (
                                    "Uploading..."
                                  ) : (
                                    <>
                                      <FaUpload />{" "}
                                      {item.fileUrl ? "Re-upload" : "PDF"}
                                    </>
                                  )}
                                </label>
                              </div>
                              <button
                                onClick={() => removeCurriculumItem("me", i)}
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
                  ),
                )}
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
    "student-projects": (() => {
      const md = t(
        "studentProjects.markdown",
        cseStudentProjectsToMarkdown(defaultStudentProjects),
      );
      return (
        <div className="space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Student's Best Projects
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-3">
              Award-Winning Projects by Our Students
            </p>
          </div>
          {isEditing ? (
            <MarkdownEditor
              value={md}
              onSave={(v) => updateData("studentProjects.markdown", v)}
              showDocImport
              docTemplateUrl="/uploads/documents/pride_templates/cse_projects_template.docx"
              docTemplateLabel="Download Projects Template"
              placeholder="Student projects tables by year (GFM Markdown)..."
            />
          ) : (
            <PrideMdView markdown={md} />
          )}
        </div>
      );
    })(),

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
                <div className="flex items-center gap-4">
                  {isEditing && (
                    <button
                      onClick={() => {
                        setPlacementYearError("");
                        setNewPlacementYear("");
                        setShowAddPlacementYear(true);
                      }}
                      className="flex items-center gap-2 bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm"
                    >
                      <FaPlus /> Add Year
                    </button>
                  )}
                  <FaChartLine className="text-4xl text-blue-100" />
                </div>
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
                    {placementSummary.map((row, index) => (
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
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => setPlacementYear(row.id)}
                              className="text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                            >
                              View Details
                            </button>
                            {isEditing && (
                              <button
                                onClick={() => handleDeletePlacementYear(row.id)}
                                className="text-red-600 hover:text-red-700 font-medium text-xs border border-red-200 hover:border-red-300 bg-red-50 hover:bg-red-100 px-3 py-2 rounded-full transition-all"
                                title={`Delete ${row.year}`}
                              >
                                <FaTrash />
                              </button>
                            )}
                          </div>
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
              {renderPlacementDetails()}
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
            <div className="flex items-center gap-4">
              {isEditing && (
                <button
                  type="button"
                  onClick={addNewsletter}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  <FaPlus className="text-xs" />
                  Add Newsletter
                </button>
              )}
              <FaDownload className="text-4xl text-blue-200 opacity-40" />
            </div>
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
                            latestNewsletterData.title ||
                            "News Letter 2025-26 (Volume I)"
                          }
                          onSave={(val) =>
                            updateNewsletter("latest", 0, "title", val)
                          }
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {isEditing ? (
                      <div className="flex flex-col items-center gap-2">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-blue-50 px-4 py-2 text-xs font-medium text-ssgmce-blue transition-all hover:border-blue-400 hover:bg-blue-100">
                          <FaUpload className="text-xs" />
                          {newsletterUploading["latest-0"]
                            ? "Uploading..."
                            : "Upload PDF"}
                          <input
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            disabled={newsletterUploading["latest-0"]}
                            onChange={(event) =>
                              handleNewsletterFileChange("latest", 0, event)
                            }
                          />
                        </label>
                        {latestNewsletterData.link && (
                          <a
                            href={latestNewsletterData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-ssgmce-blue underline underline-offset-2"
                          >
                            {getNewsletterFileName(
                              latestNewsletterData.link,
                              latestNewsletterData.fileName || "",
                            )}
                          </a>
                        )}
                        {newsletterUploadErrors["latest-0"] && (
                          <span className="text-center text-[11px] text-red-500">
                            {newsletterUploadErrors["latest-0"]}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => deleteNewsletter("latest", 0)}
                          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
                        >
                          <FaTrash className="text-xs" />
                          Delete
                        </button>
                      </div>
                    ) : (
                      <a
                        href={latestNewsletterData.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                      >
                        <FaDownload className="text-xs" /> Click for Details
                      </a>
                    )}
                  </td>
                </tr>

                {/* Archive Rows */}
                {newsletterArchivesData.map((issue, i) => (
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
                      {isEditing ? (
                        <div className="flex flex-col items-center gap-2">
                          <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-blue-50 px-4 py-2 text-xs font-medium text-ssgmce-blue transition-all hover:border-blue-400 hover:bg-blue-100">
                            <FaUpload className="text-xs" />
                            {newsletterUploading[`archives-${i}`]
                              ? "Uploading..."
                              : "Upload PDF"}
                            <input
                              type="file"
                              accept="application/pdf"
                              className="hidden"
                              disabled={newsletterUploading[`archives-${i}`]}
                              onChange={(event) =>
                                handleNewsletterFileChange("archives", i, event)
                              }
                            />
                          </label>
                          {issue.link && (
                            <a
                              href={issue.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-ssgmce-blue underline underline-offset-2"
                            >
                              {getNewsletterFileName(issue.link, issue.fileName)}
                            </a>
                          )}
                          {newsletterUploadErrors[`archives-${i}`] && (
                            <span className="text-center text-[11px] text-red-500">
                              {newsletterUploadErrors[`archives-${i}`]}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => deleteNewsletter("archives", i)}
                            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
                          >
                            <FaTrash className="text-xs" />
                            Delete
                          </button>
                        </div>
                      ) : (
                        <a
                          href={issue.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-ssgmce-blue hover:text-ssgmce-orange font-medium text-xs border border-gray-200 hover:border-blue-400 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all"
                        >
                          <FaDownload className="text-xs" /> Click for Details
                        </a>
                      )}
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
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => addAchievement("faculty")}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
                  >
                    <FaPlus className="text-xs" />
                    Add Faculty Achievement
                  </button>
                </div>
              )}
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
                      <EditableText
                        value={item.name}
                        onSave={(val) =>
                          updateAchievementItem("faculty", index, "name", val)
                        }
                      />
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/15 text-blue-100 border border-white/20">
                      <EditableText
                        value={item.category}
                        onSave={(val) =>
                          updateAchievementItem(
                            "faculty",
                            index,
                            "category",
                            val,
                          )
                        }
                      />
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#003366] mb-2">
                          <EditableText
                            value={item.achievement}
                            onSave={(val) =>
                              updateAchievementItem(
                                "faculty",
                                index,
                                "achievement",
                                val,
                              )
                            }
                          />
                        </h4>
                        <div className="text-gray-700 text-sm leading-relaxed">
                          <MarkdownEditor
                            value={item.description}
                            onSave={(val) =>
                              updateAchievementItem(
                                "faculty",
                                index,
                                "description",
                                val,
                              )
                            }
                            placeholder="Add achievement description in Markdown..."
                            className="w-full"
                          />
                        </div>
                      </div>
                      {isEditing ? (
                        <div className="flex min-w-[190px] flex-col items-end gap-2">
                          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-[#003366] to-[#004d99] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:from-[#004d99] hover:to-[#0066cc] hover:shadow-lg">
                            <FaUpload className="text-yellow-300" />
                            {achievementUploading[`faculty-${index}`]
                              ? "Uploading..."
                              : "Upload Certificate"}
                            <input
                              type="file"
                              accept="image/*,application/pdf"
                              className="hidden"
                              disabled={achievementUploading[`faculty-${index}`]}
                              onChange={(event) =>
                                handleAchievementFileChange(
                                  "faculty",
                                  index,
                                  event,
                                )
                              }
                            />
                          </label>
                          {item.image && (
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-right text-xs font-medium text-ssgmce-blue underline underline-offset-2"
                            >
                              {getAchievementFileName(item.image)}
                            </a>
                          )}
                          {achievementUploadErrors[`faculty-${index}`] && (
                            <span className="text-right text-[11px] text-red-500">
                              {achievementUploadErrors[`faculty-${index}`]}
                            </span>
                          )}
                          {achievementUploadSuccess[`faculty-${index}`] && (
                            <span className="rounded-full bg-green-50 px-3 py-1 text-right text-[11px] font-semibold text-green-700">
                              {achievementUploadSuccess[`faculty-${index}`]}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => deleteAchievement("faculty", index)}
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                          >
                            <FaTrash className="text-xs" />
                            Delete
                          </button>
                        </div>
                      ) : (
                        item.image && (
                          <button
                            onClick={() => handleViewCertificate(item)}
                            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003366] to-[#004d99] text-white text-xs font-semibold rounded-lg hover:from-[#004d99] hover:to-[#0066cc] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <FaAward className="text-yellow-300" />
                            View Certificate
                          </button>
                        )
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
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => addAchievement("students")}
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-ssgmce-blue to-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg"
                  >
                    <FaPlus className="text-xs" />
                    Add Student Achievement
                  </button>
                </div>
              )}
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
                      <EditableText
                        value={item.name}
                        onSave={(val) =>
                          updateAchievementItem("students", index, "name", val)
                        }
                      />
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/15 text-blue-100 border border-white/20">
                      <EditableText
                        value={item.category}
                        onSave={(val) =>
                          updateAchievementItem(
                            "students",
                            index,
                            "category",
                            val,
                          )
                        }
                      />
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#003366] mb-2">
                          <EditableText
                            value={item.achievement}
                            onSave={(val) =>
                              updateAchievementItem(
                                "students",
                                index,
                                "achievement",
                                val,
                              )
                            }
                          />
                        </h4>
                        <div className="text-gray-700 text-sm leading-relaxed">
                          <MarkdownEditor
                            value={item.description}
                            onSave={(val) =>
                              updateAchievementItem(
                                "students",
                                index,
                                "description",
                                val,
                              )
                            }
                            placeholder="Add achievement description in Markdown..."
                            className="w-full"
                          />
                        </div>
                      </div>
                      {isEditing ? (
                        <div className="flex min-w-[190px] flex-col items-end gap-2">
                          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gradient-to-r from-[#003366] to-[#004d99] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:from-[#004d99] hover:to-[#0066cc] hover:shadow-lg">
                            <FaUpload className="text-yellow-300" />
                            {achievementUploading[`students-${index}`]
                              ? "Uploading..."
                              : "Upload Certificate"}
                            <input
                              type="file"
                              accept="image/*,application/pdf"
                              className="hidden"
                              disabled={achievementUploading[`students-${index}`]}
                              onChange={(event) =>
                                handleAchievementFileChange(
                                  "students",
                                  index,
                                  event,
                                )
                              }
                            />
                          </label>
                          {item.image && (
                            <a
                              href={item.image}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-right text-xs font-medium text-ssgmce-blue underline underline-offset-2"
                            >
                              {getAchievementFileName(item.image)}
                            </a>
                          )}
                          {achievementUploadErrors[`students-${index}`] && (
                            <span className="text-right text-[11px] text-red-500">
                              {achievementUploadErrors[`students-${index}`]}
                            </span>
                          )}
                          {achievementUploadSuccess[`students-${index}`] && (
                            <span className="rounded-full bg-green-50 px-3 py-1 text-right text-[11px] font-semibold text-green-700">
                              {achievementUploadSuccess[`students-${index}`]}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => deleteAchievement("students", index)}
                            className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                          >
                            <FaTrash className="text-xs" />
                            Delete
                          </button>
                        </div>
                      ) : (
                        item.image && (
                          <button
                            onClick={() => handleViewCertificate(item)}
                            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#003366] to-[#004d99] text-white text-xs font-semibold rounded-lg hover:from-[#004d99] hover:to-[#0066cc] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                          >
                            <FaAward className="text-yellow-300" />
                            View Certificate
                          </button>
                        )
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

        {/* Add Placement Year Modal */}
        <AnimatePresence>
          {showAddPlacementYear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setShowAddPlacementYear(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaPlus className="text-ssgmce-blue" /> Add New Academic
                    Year
                  </h3>
                  <button
                    onClick={() => {
                      setPlacementYearError("");
                      setShowAddPlacementYear(false);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Academic Year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2025-26"
                      value={newPlacementYear}
                      onChange={(e) => {
                        setNewPlacementYear(e.target.value);
                        if (placementYearError) {
                          setPlacementYearError("");
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ssgmce-blue focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the academic year in format YYYY-YY (e.g., 2025-26)
                    </p>
                    {placementYearError ? (
                      <p className="text-xs text-red-600 mt-2">
                        {placementYearError}
                      </p>
                    ) : null}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> After adding the year, you can
                      click "View Details" to edit the placement records for
                      this academic year.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setPlacementYearError("");
                      setShowAddPlacementYear(false);
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddPlacementYear}
                    disabled={!newPlacementYear.trim()}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <FaPlus /> Add Year
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
          {showAddUgProjectYear && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setShowAddUgProjectYear(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaPlus className="text-ssgmce-blue" /> Add UG Project
                    Session
                  </h3>
                  <button
                    onClick={() => {
                      setUgProjectYearError("");
                      setShowAddUgProjectYear(false);
                    }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Academic Year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2025-26"
                      value={newUgProjectYear}
                      onChange={(e) => {
                        setNewUgProjectYear(e.target.value);
                        if (ugProjectYearError) {
                          setUgProjectYearError("");
                        }
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ssgmce-blue focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the academic year in format YYYY-YY (e.g.,
                      2025-26)
                    </p>
                    {ugProjectYearError ? (
                      <p className="text-xs text-red-600 mt-2">
                        {ugProjectYearError}
                      </p>
                    ) : null}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> After adding the session, you can
                      add project rows manually or import a DOCX into the bulk
                      markdown editor.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setUgProjectYearError("");
                      setShowAddUgProjectYear(false);
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddUgProjectYear}
                    disabled={!newUgProjectYear.trim()}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <FaPlus /> Add Session
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </GenericPage>
  );
};

export default CSE;
