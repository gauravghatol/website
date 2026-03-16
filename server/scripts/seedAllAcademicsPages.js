/**
 * seedAllAcademicsPages.js
 * Seeds all 10 academics pages (excluding planner which has its own script)
 * into MongoDB as markdown sections editable from the admin panel.
 * Run once: node scripts/seedAllAcademicsPages.js
 */

require("dotenv").config();
const mongoose = require("mongoose");
const PageContent = require("../models/PageContent");

const MONGO_URI =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  "mongodb://localhost:27017/ssgmce";

const BASE_URL = "https://www.ssgmce.ac.in/";
const encodeURL = (path) =>
  BASE_URL +
  path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

/* ─────────────────────────────────────────────────────────────
 * 1. Annual Reports (academics-reports)
 * ───────────────────────────────────────────────────────────── */
function buildAnnualReports() {
  const reports = [
    {
      year: "2023-24",
      path: "uploads/pdf/annual-report-23-24.pdf_final-30_july_website.pdf",
      size: "5.2 MB",
      latest: true,
    },
    {
      year: "2022-23",
      path: "uploads/pdf/final--anuual-report-22-23.pdf",
      size: "47.7 MB",
    },
    {
      year: "2021-22",
      path: "uploads/pdf/final--anuual-report-21-22.pdf",
      size: "1.7 MB",
    },
    {
      year: "2020-21",
      path: "uploads/pdf/annual-report-20-21-Final.pdf",
      size: "1.7 MB",
    },
    {
      year: "2019-20",
      path: "uploads/pdf/annual_report-2019-20--final.pdf",
      size: "1.7 MB",
    },
    {
      year: "2018-19",
      path: "uploads/pdf/final_annual_report-2018-19.pdf",
      size: "2.0 MB",
    },
  ];

  const lines = [];
  lines.push("## Annual Reports");
  lines.push("");
  lines.push(
    "The Annual Reports of **Shri Sant Gajanan Maharaj College of Engineering, Shegaon** provide a comprehensive overview of the institute's academic, administrative, research, and extracurricular achievements for each session. These reports reflect the institute's commitment to transparency, continuous improvement, and excellence in technical education.",
  );
  lines.push("");
  lines.push("### Download Annual Reports");
  lines.push("");
  lines.push("| Session | Download | Size |");
  lines.push("|:---|:---|:---|");
  reports.forEach((r) => {
    const tag = r.latest ? " **(Latest)**" : "";
    lines.push(
      `| **${r.year}**${tag} | [Annual Report ${r.year}](${encodeURL(r.path)}) | ${r.size} |`,
    );
  });
  lines.push("");
  lines.push(
    "**Note:** Some reports may be large in size. Please ensure a stable internet connection before downloading.",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 2. Incentive Marks Scheme (academics-incentive)
 * ───────────────────────────────────────────────────────────── */
function buildIncentiveMarks() {
  const lines = [];
  lines.push("## Guideline for Incentive Marks (Institute level)");
  lines.push("");
  lines.push("**Date:** 18/03/2024");
  lines.push("");
  lines.push(
    "All the students are hereby informed that incentive marks will be awarded to them for the following activities.",
  );
  lines.push("");
  lines.push(
    "### Guidelines for awarding the Incentive marks for R&D Activities",
  );
  lines.push("");
  lines.push("| S.N. | Activities | Incentive Marks |");
  lines.push("|:---|:---|:---|");
  lines.push(
    "| **1** | **R&D Activity**<br>**Research Paper Publication:**<br>(A) Conference — Paper presentation in Reputed Conferences IEEE, IETE etc. (Maximum Authors 04-05)<br>(B) Journals<br>(i) Science Citation Index Journals (SCI)<br>(ii) Journals indexed by Scopus & Web of Science<br>(iii) Peer reviewed journals (Maximum Authors 04-05) (Approved by R&D Coordinator & Team)<br>**Projects**<br>(A) Participation in project competition/seminars at IITs/NITs/International Association programs<br>(B) First/Second Prize winner in project competition/seminars at IITs/NITs/International Association programs (Approved by R&D Coordinator & Team) (No marks for simply attending)<br>**Industrial Consultancy (Sponsored Projects)**<br>(i) Revenue generated on Rs. 1 Lac and above<br>(ii) Revenue generated on Rs 50 thousand to below 1 Lac<br>**(C) Sponsored projects**<br>(i) Sponsored by SGAIRC<br>(ii) Sponsored in terms of Facilities by other Industries<br>(iii) Project in the form of New Product (Approved by R&D Team in initial phase only)<br>**Workshop conducted by students at SSGMCE**<br>(i) One week and above (Maximum 4 students permitted)<br>(ii) At least two days (Maximum 2 students permitted)<br>(Selection criterion approved by R&D Coordinator & Team well in advance)<br>**Patent filing** (idea with virtual property rights, Technical design and copyrights) | 1 Mark/subject<br><br>5 Marks/subject<br>3 Marks/subject<br>1 Mark/subject<br><br>1 Mark/subject<br>2 Marks/subject<br><br>5 Marks/subject<br>3 Marks/subject<br><br>2 Marks/subject<br><br>2 Marks/subject<br>1 Mark/subject<br><br>5 Marks/subject |",
  );
  lines.push(
    "| **2** | **GATE Exam** — Students having Valid GATE Score | 3 Marks/subject |",
  );
  lines.push(
    "| **3** | **MOOC/NPTEL Course**<br>Certified Courses from NPTEL/SWAYAM/COURSERA/edX — up to one week<br>Certified Courses — more than one week & up to two weeks<br>Certified Courses — more than two weeks | 1 Mark/subject<br>2 Marks/subject<br>3 Marks/subject |",
  );
  lines.push(
    "| **4** | **Sports Activity**<br>University color holder<br>Participation in University/State/National level tournaments (Approved by Principal and Sports Director) | 3 Marks/subject<br>1 Mark/subject |",
  );
  lines.push(
    "| **5** | **NCC/NSS**<br>Participation in National Republic Day Parade<br>Participation in National level camps for NCC/NSS | 3 Marks/subject (Annually)<br>2 Marks/subject (Annually) |",
  );
  lines.push(
    "| **6** | **Cultural Activity**<br>Color Holder in cultural activities (Approved by Cultural Coordinator)<br>Participation in University (youth festival)/State/National Level Competition | 3 Marks/subject (Annually)<br>1 Mark/subject |",
  );
  lines.push(
    "| **7** | **Activities of Student Chapter Clubs** — Only one outstanding student from every student chapter (Approved by Departmental committee & Dean Academics) | 1 Mark/subject (Annually) |",
  );
  lines.push(
    "| **8** | **Activities of T&P Department** — T&P activities coordination by students team (approved by T&P Officer) | 2 Marks/subject (Annually) |",
  );
  lines.push(
    "| **9** | **SSGMCE FAB Lab** — As Recommended by FAB Lab in-charge | 2 Marks/subject (Annually) |",
  );
  lines.push(
    "| **10** | **Student Coordinators**<br>Coordination in First Year Student Induction Program, recommended by Program Coordinator<br>Coordination in Alumni Meet, recommended by Alumni Coordinator<br>G.S., G.R., Pursuit, Parishkriti, & Sport Coordinator | 1 Mark/subject (Once in a year)<br>1 Mark/subject (Once in a year)<br>3 Marks/subject (Annually) |",
  );
  lines.push(
    "| **11** | **Meditation Course** — As Recommended by Course Coordinator | 1 Mark/subject |",
  );
  lines.push(
    "| **12** | **Student Internship** — Applicable for Engineering, done during vacation with recommendation of concerned HOD | 1 Mark/subject |",
  );
  lines.push("");
  lines.push("### Important Guidelines");
  lines.push("");
  lines.push(
    "1. The student should take advantage of incentive marks without hampering Academics.",
  );
  lines.push(
    "2. At the time of First Project Progress Monitoring round, list of sponsored projects recommended by H.O.D and departmental R&D Coordinator, along with Letter of Interest should be submitted to SGCMCE by the Chief R&D Coordinator.",
  );
  lines.push(
    "3. Only those Projects which are approved by R&D Team in the final phase (Chief R&D Coordinator & Departmental R&D Coordinators), will be awarded incentive marks.",
  );
  lines.push(
    "4. For the Sponsored software projects fund should be submitted to SGCMCE Accounts section.",
  );
  lines.push(
    "5. For the Sponsored hardware projects, all the hardware facilities must be provided by the concerned industry.",
  );
  lines.push(
    "6. For the conduction of workshops, student coordinator selection criterion must be approved by the departmental R&D Coordinator, R&D and Chief R&D Coordinator.",
  );
  lines.push(
    "7. For the conduction of workshop at institute level student coordinator selection criterion must be approved by concerned coordinator and chief R&D Coordinator.",
  );
  lines.push(
    "8. Project marks will be considered in the spring semester of the concerned academic session.",
  );
  lines.push(
    "9. Incentive marks once awarded for any project/paper publication in the current academic year, then extension/modification of the same project/paper publication will not be considered for incentive marks in the next academic year.",
  );
  lines.push("");
  lines.push(
    "**Prof. D. L. Bhombre** — Dean (Academics) &emsp;&emsp;&emsp; **Dr. S. B. Somani** — Principal",
  );
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Incentive Marks Scheme (PDF)](https://www.ssgmce.ac.in/uploads/Incentive_Marks_Scheme-2023-24.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 3. Innovative Practices (academics-innovative)
 * ───────────────────────────────────────────────────────────── */
function buildInnovativePractices() {
  const practices = [
    {
      sn: 1,
      practice: "Moodle Access to Teacher and Students",
      context:
        "Moodle is a learning platform that provides teacher and student with a single robust, user-friendly system for personalized learning environments. Teachers post notes, videos; students can access. Teachers conduct online tests and quizzes.",
      impact:
        "Helps students share concepts at their pace. Helps conduct online tests, assignments and quizzes.",
    },
    {
      sn: 2,
      practice: "Content based question making",
      context:
        "Questioning is an integral part of meaningful learning. Students develop question banks based on topics covered with solutions.",
      impact:
        "Enhances creative thinking, critical thinking and problem-solving skills.",
    },
    {
      sn: 3,
      practice: "Multimedia",
      context:
        "Various multimedia techniques used: presentations, videos, animations.",
      impact:
        "Motivates students for effective learning and better learning retention.",
    },
    {
      sn: 4,
      practice: "Power point presentation",
      context:
        "PPT provides various ways of representing presentations with images, sounds, animations.",
      impact: "Enhances comprehension and effective expression of ideas.",
    },
    {
      sn: 5,
      practice: "Educational Videos",
      context:
        "Application of video allows students to get real-life exposure of scenarios.",
      impact:
        "Motivates students for effective learning. Develops scientific knowledge.",
    },
    {
      sn: 6,
      practice: "Animations",
      context:
        "Concepts hard to visualize are taught using animations. Used in design, engineering calculations, visualization and monitoring.",
      impact:
        "Creates interest in students for gaining insight of complex engineering problems.",
    },
    {
      sn: 7,
      practice: "Simulated Software Based Learning",
      context:
        "Simulation provides students experience close to real thing. Packages: MATLAB, SPICE, Multisim, XILINX, AUTOCAD, ANSYS, LABVIEW.",
      impact:
        "Provides students exposure to real engineering problems and projects.",
    },
    {
      sn: 8,
      practice: "E-based Learning",
      context:
        "Course made available for self-study. Students encouraged to visit NPTEL lectures and browse internet sites.",
      impact:
        "Allows access to education independent of geographical barriers.",
    },
    {
      sn: 9,
      practice: "Role-Playing",
      context:
        "Technique that allows students to explore realistic situations by interacting with others.",
      impact:
        "Develops critical thinking and better understanding for complex problems.",
    },
    {
      sn: 10,
      practice: "Brainstorming",
      context:
        "Useful tool to expand thinking. Helps define issues, analyse problems and possible solutions.",
      impact:
        "Enhances out-of-the-box thinking. Develops creative and innovative skills.",
    },
    {
      sn: 11,
      practice: "Project Based Learning (PBL)",
      context:
        "Helps develop knowledge and increase utilization of infrastructure. Students design experiments, collect information, present work.",
      impact:
        "Inculcates self-learning. Expands technical knowledge for industrial/social problems.",
    },
    {
      sn: 12,
      practice: "Field Survey/Case studies",
      context:
        "Allows students to apply theoretical knowledge to practical problems.",
      impact: "Enhances creative thinking and problem solving skills.",
    },
    {
      sn: 13,
      practice: "Industrial visit/Field work and report writing",
      context:
        "Students get practical experience in live organizations. Aware about recent technologies.",
      impact: "Enhances communication and writing skills.",
    },
    {
      sn: 14,
      practice: "Designing Tutorials",
      context:
        "Helps learners enhance intellectual, communication and critical skills.",
      impact: "Enhances intellectual and communication skills.",
    },
    {
      sn: 15,
      practice: "Designing Quizzes",
      context:
        "Quizzes expand knowledge and explore new skills. MCQs assess ability from simple recall to complex levels.",
      impact:
        "Enhances critical thinking skills and improves subject knowledge.",
    },
    {
      sn: 16,
      practice: "Group Discussion",
      context:
        "Discussing topics among classmates helps learning with perfection. Builds self-confidence.",
      impact:
        "Develops skills in interpersonal communication and expressing views clearly.",
    },
    {
      sn: 17,
      practice: "New Experiment development and testing",
      context:
        "Students develop their own experiments. Design, develop outline, perform and prepare results.",
      impact: "Inculcates self-learning and helps develop own experiments.",
    },
    {
      sn: 18,
      practice: "Mini/Term/Short Projects",
      context:
        "Students collect information, demonstrate presentation skills. Form groups of 2-3 and select projects.",
      impact: "Expands technical knowledge for industrial/social problems.",
    },
    {
      sn: 19,
      practice: "Think Pair and share",
      context:
        "Collaborative learning strategy where students think individually, pair up, then share ideas.",
      impact: "Enhances thinking, work and communication skills.",
    },
  ];

  const lines = [];
  lines.push("## Innovative Practices in Teaching and Learning");
  lines.push("");
  lines.push(
    "**Innovation** is an essential component for success. Globalization and rapid technical changes in the education sector has created a need for change in teaching style which leads to continuous innovation. Teaching innovation is the process of creating new ideas, theories, methodologies and solutions that can be shared with the classroom.",
  );
  lines.push("");
  lines.push(
    "The use of innovative method in educational institutes has the potential not only to improve education, but also empower people and mobilize the effort to achieve the skilled engineer for the country.",
  );
  lines.push("");
  lines.push("### Objectives");
  lines.push("");
  lines.push(
    "Following innovative practices are initiated and implemented by the faculty for students to learn in a better manner.",
  );
  lines.push("");
  lines.push("### Innovative Practices Implemented at SSGMCE");
  lines.push("");
  lines.push(
    "| S.N. | Innovative Practices | Context/Methodology | Impact/Outcome |",
  );
  lines.push("|:---|:---|:---|:---|");
  practices.forEach((p) => {
    lines.push(`| ${p.sn} | ${p.practice} | ${p.context} | ${p.impact} |`);
  });
  lines.push("");
  lines.push(
    "**The success of these practices results qualitatively as well as quantitatively.** The qualitative factor improves student's curiosity and desire to learn. Also it changes student's perspective towards life. The quantitative factor improves academic performance and participation in co-curricular activities. Also Alumni of SSGMCE doing very well in corporate world.",
  );
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Innovative Practices in Teaching & Learning (PDF)](https://www.ssgmce.ac.in/uploads/Innovative%20Practice%20in%20teaching%20&%20learning.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 4. Rubrics (academics-rubrics)
 * ───────────────────────────────────────────────────────────── */
function buildRubrics() {
  const lines = [];
  lines.push("## Rubrics for Theory, Laboratory, Project & Seminar");
  lines.push("");
  lines.push(
    "The following rubrics define the evaluation criteria for **Theory**, **Laboratory**, **Project**, and **Seminar** internal assessments for **Session 2024-25**, effective from **01 July 2024**. These rubrics ensure transparent, consistent, and fair evaluation across all departments.",
  );
  lines.push("");
  lines.push("### 1. Theory Internal Evaluation");
  lines.push("");
  lines.push("Total weightage: **20 Marks**");
  lines.push("");
  lines.push("| Item | Duration | Evaluation Scale | Weightage (out of 20) |");
  lines.push("|:---|:---|:---|:---|");
  lines.push(
    "| Class Test I & Class Test II | 1 Hr each | 30 marks (2 Units each) | 10 |",
  );
  lines.push(
    "| Teacher Evaluation Component (TEC) | Throughout semester | 30 marks (any one TEC per student/subject) | 05 |",
  );
  lines.push("");
  lines.push("#### Attendance Marks (05)");
  lines.push("");
  lines.push("| Attendance % | Marks |");
  lines.push("|:---|:---|");
  lines.push("| 95 – 100% | 05 |");
  lines.push("| 90 – 94.99% | 04 |");
  lines.push("| 85 – 89.99% | 03 |");
  lines.push("| 80 – 84.99% | 02 |");
  lines.push("| 75 – 79.99% | 01 |");
  lines.push("| Below 75% | 00 |");
  lines.push("");
  lines.push("### 2. Continuous Evaluation in Lab Sessions");
  lines.push("");
  lines.push(
    "Each lab session evaluated on **10 marks** across three parameters.",
  );
  lines.push("");
  lines.push("| Parameter | Max | High | Medium | Low |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| R1 – Conduction of Experiment | 5 | Experiment conducted/Program executed with calculations & result (4–5) | Conducted but necessary calculation not done (2–3) | Not conducted/Not executed (0) |",
  );
  lines.push(
    "| R2 – Record Writing | 3 | Neat, clean & complete practical details (2–3) | Submitted but incomplete (1) | Not submitted (0) |",
  );
  lines.push(
    "| R3 – Post-experimental Viva | 2 | Answered most questions (2) | Answered few questions (1) | Did not answer any (0) |",
  );
  lines.push("");
  lines.push("### 3. Project Internal Evaluation (Max 75 Marks)");
  lines.push("");
  lines.push("Project evaluation comprises five rubric rounds (R1–R5).");
  lines.push("");
  lines.push("| Rubric | Phase | Max Marks |");
  lines.push("|:---|:---|:---|");
  lines.push("| R1 | PPM 1 (Phase I) | 50 |");
  lines.push("| R2 | PPM 2 (Phase II) | 50 |");
  lines.push("| R3 | PPM 3 (Phase III) | 50 |");
  lines.push("| R4 | PPM 4 – Final | 75 |");
  lines.push("| R5 | Evaluation by Guide | 75 |");
  lines.push("");
  lines.push("#### R1 – Phase I (PPM 1) — Max 50");
  lines.push("");
  lines.push("| Parameter | Marks | High (10-15) | Medium (5-9) | Low (0-4) |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| Literature Survey | 15 | Wider range of relevant literature from multiple sources | Limited literature reviewed | Brief, insufficient; not relevant |",
  );
  lines.push(
    "| Topic Selection | 15 | Innovative, useful to society, industry-based | Less innovative, useful to society | Useful to limited group, not innovative |",
  );
  lines.push(
    "| Objectives of Proposed Work | 20 | All objectives well explained (14-20) | Average explanation (7-13) | Not well defined (0-6) |",
  );
  lines.push("");
  lines.push("#### R2 – Phase II (PPM 2) — Max 50");
  lines.push("");
  lines.push("| Parameter | Marks | High (10-15) | Medium (5-9) | Low (0-4) |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| Planning of Work | 15 | 50% or more work completed | 30% work completed | 10% work completed |",
  );
  lines.push(
    "| Problem Statement & Methodology | 15 | Clearly specified; relevant, defined methodology | Clearly specified; average methodology | Vague; methodology not defined |",
  );
  lines.push(
    "| Presentation | 20 | Good technical details & communication (14-20) | Average technical details (7-13) | Poor technical details & communication (0-6) |",
  );
  lines.push("");
  lines.push("#### R3 – Phase III (PPM 3) — Max 50");
  lines.push("");
  lines.push("| Parameter | Marks | High | Medium | Low |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| % of Work Completed | 15 | ≥75% completed (10-15) | 50% completed (5-9) | 30% completed (0-4) |",
  );
  lines.push(
    "| Demonstration & Presentation | 35 | Objectives well defined; steps clearly specified (25-35) | Objectives defined; steps not clearly specified (10-24) | Steps not defined (0-9) |",
  );
  lines.push("");
  lines.push("#### R4 – Phase IV (PPM Final) — Max 75");
  lines.push("");
  lines.push("| Parameter | Marks | High | Medium | Low |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| Incorporated Suggestions | 15 | All suggestions from PPM1-PPM3 incorporated | Moderate suggestions incorporated | Suggestions not implemented |",
  );
  lines.push(
    "| Demonstration & Presentation | 30 | Able to justify and articulate all parameters (20-30) | Justified but scope for improvement (9-19) | Not able to justify most parameters (0-8) |",
  );
  lines.push(
    "| Results & Conclusions | 30 | Results & discussion presented properly with clear analysis | Results presented; interpretations from analysis | Results & conclusions not adequate |",
  );
  lines.push("");
  lines.push("#### R5 – Evaluation by Project Guide — Max 75");
  lines.push("");
  lines.push("| Parameter | Marks | High | Medium | Low |");
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| Publication / Project Expo | 20 | Highly reputed Journal / IEEE Intl. Conf. / National-level expo (10-20) | Reputed Journal / Intl. Conf. / State-level expo (6-9) | Journal / National Conf. / Institute-level expo (0-5) |",
  );
  lines.push(
    "| Attendance & Consistency | 15 | Regularly reports to guide; consistent work (15-20) | Reports to guide; lacks consistency (7-14) | Irregular attendance; no consistency (0-6) |",
  );
  lines.push(
    "| Team Work & Group Dynamics | 15 | Good coordination; synergy among members (15-25) | Fair teamwork; majority function adequately (8-14) | Lack of coordination (0-7) |",
  );
  lines.push(
    "| Project Report | 25 | Format strictly followed; logical organization; all sections complete | Format mostly followed; minor gaps | Format not followed; sections incomplete |",
  );
  lines.push("");
  lines.push("### 4. Seminar Evaluation (Max 50 Marks)");
  lines.push("");
  lines.push(
    "| Performance Criteria | Marks | High (7-10) | Medium (4-6) | Low (0-3) |",
  );
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| Organization | 10 | Objective clearly stated; logical, easy to follow | Objective clear but information not relevant | Objective not clear; information not relevant |",
  );
  lines.push(
    "| Demonstration & Knowledge | 10 | Complete understanding; full knowledge with explanations | Some understanding; few points explained | Poor understanding; no clear explanation |",
  );
  lines.push(
    "| Presentation & Communication | 10 | Good technical details; good communication; engaged audience | Good details; average communication | Poor technical details; reads slides |",
  );
  lines.push(
    "| Impact of Visual Aids | 10 | PPTs clear, readable, error-free | PPTs clear, readable but include few errors | PPTs not clear; contain errors |",
  );
  lines.push(
    "| Question / Answer | 10 | Defends all questions with clear, insightful answers | Answers few questions | Does not provide any answers |",
  );
  lines.push("");
  lines.push("### Approved By");
  lines.push("");
  lines.push(
    "**Dr. A. U. Jawadekar** — IQAC Coordinator &emsp; **Prof D. L. Bhombe** — Dean (Academics) &emsp; **Dr. S. B. Somani** — Principal",
  );
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Full Rubrics Document (PDF)](https://www.ssgmce.ac.in/uploads/Rubrics%20for%20Theory%20Laboratory%20Project%20&%20Seminar%202024-25-for%20Website.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 5. Rules & Regulations (academics-rules)
 * ───────────────────────────────────────────────────────────── */
function buildRulesRegulations() {
  const lines = [];
  lines.push("## Rules & Regulations");
  lines.push("");
  lines.push(
    "The academic activities of the Institute are scheduled in the academic planner and academic calendar at the beginning of each academic year. It is mandatory for students/faculty to strictly adhere to the academic calendar for completion of academic activities. The academic year shall be divided into two semesters. The Semester that begins in June shall be called as **Autumn Semester** and the semester that begins in December is known **Spring Semester**. The total duration of the each Semester shall include registration, teaching, continuous internal evaluation, tests, end of semester examination, evaluation, result declaration & vacation.",
  );
  lines.push("");
  lines.push("### Admission");
  lines.push("");
  lines.push(
    "- The total number of UG & PG seats to be filled are as per the sanctioned intake (The approval of which has to be taken each year) from AICTE, New Delhi.",
  );
  lines.push(
    "- The overall process of admission to B.E., M.E. and MBA is governed by the Directorate of Technical Education (DTE), Maharashtra State, Mumbai.",
  );
  lines.push("");
  lines.push("### Curriculum");
  lines.push("");
  lines.push(
    "As prescribed by **Sant Gadge Baba Amravati University, Amravati**",
  );
  lines.push("");
  lines.push("### Student Attendance Policy");
  lines.push("");
  lines.push(
    "> **Attendance will be considered from day one. It is compulsory for all students to maintain minimum 75% attendance otherwise he/she will be detained.**",
  );
  lines.push("");
  lines.push(
    "#### Actions likely to be taken against students in detention list:",
  );
  lines.push("");
  lines.push(
    "- He/She is not eligible for internal marks based on attendance.",
  );
  lines.push("- He/She is not eligible for Academic incentive marks.");
  lines.push(
    "- He/She is not eligible for scholarship of any kind from the institute.",
  );
  lines.push("- He/She is not eligible for library facility.");
  lines.push("- He/She is not eligible for industrial visit, training.");
  lines.push(
    "- Parent of these students are to be informed and called at the time of registration/commencement of semester and undertaking to be submitted by these students to respective HOD.",
  );
  lines.push(
    "- Despite all these actions if a student fails to obey the undertaking, the student will not be permitted to attend theory and practical classes.",
  );
  lines.push("");
  lines.push(
    "> **Leave for four lectures per subject** will be automatically granted on medical/personal reasons. These four lectures will be subtracted from the total attendance of the student at the end of session for all the students irrespective of whether they have availed the leave or not. No need to apply for short personal/medical leave.",
  );
  lines.push("");
  lines.push("#### Leave Application Process:");
  lines.push("");
  lines.push(
    "- In case of genuine leave, student need to apply for genuine leave consideration time to time in the ISO student leave format (SGM/FRM/DPT-79) which is available in concern HOD office with proper document & justification. Lateral leave application will not be considered.",
  );
  lines.push(
    "- The leave for NSS, NCC, etc. should be reported to the concern In-charge by the students. The in-charge will forward the final list of such students to the Dean Academic and all HODs.",
  );
  lines.push(
    "- In case of any correction in attendance, student should report to concern subject teacher within four days from the date of display of consolidated cumulative attendance.",
  );
  lines.push("");
  lines.push("### Discipline and Conduct");
  lines.push("");
  lines.push(
    "A student shall conform to a high standard of discipline and conduct himself within and outside the precincts of the college in a manner befitting the students of an institution of national importance. He/She shall have seriousness of purpose and shall, in every way train himself/herself to lead a life of earnest endeavor and cooperation.",
  );
  lines.push("");
  lines.push(
    "> For the maintenance of discipline amongst the students of the college, the competent Authority may appoint a Discipline (Standing) Committee each year to examine the cases of any student or student involved in any breach of rules of conduct and recommend to the Principal for suitable disciplinary action or punishment.",
  );
  lines.push("");
  lines.push("#### Anti-Ragging Policy");
  lines.push("");
  lines.push(
    '> **Student should not be involved directly or indirectly in any type of ragging otherwise will be punished as per the provision of Maharashtra Act XXXIII known as "Maharashtra Prohibition of Ragging Act of 1999" resulting in suspension, expulsion from college and imprisonment.**',
  );
  lines.push("");
  lines.push("#### Acts of Indiscipline Include:");
  lines.push("");
  lines.push("- Breach of Rules and Regulation of Hostels");
  lines.push("- Lack of decorum, ungentlemanly conduct");
  lines.push(
    "- Willful damage of college or hostel properties, or of the belongings of a fellow student",
  );
  lines.push(
    "- Adoption of unfair means in the class rooms, laboratories, field or in the examination hall",
  );
  lines.push("");
  lines.push(
    "> **Disciplinary Actions:** A student whose conduct has not been up to the standard expected may be imposed monetary fine, temporarily or permanently suspended or rusticated from the college or debarred from taking examinations. The Principal may give hearing to the students reported against and pass orders on the recommendations of the Discipline Committee.",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 6. Sessional Marks Evaluation (academics-marks)
 * ───────────────────────────────────────────────────────────── */
function buildSessionalMarks() {
  const lines = [];
  lines.push("## Sessional Marks Evaluation Scheme for UG/PG");
  lines.push("");
  lines.push("**Session 2025-2026 & onward**");
  lines.push("");
  lines.push("**Date:** 21/07/2025");
  lines.push("");
  lines.push(
    "It is notified to all concern students, faculty, and staff members that the theory internal marks for each course will be evaluated as per the tables shown below.",
  );
  lines.push("");
  lines.push("### UG: B.E. 1st, 2nd, 3rd, and 4th Year");
  lines.push("");
  lines.push(
    "Two Class Tests (CT) and Assignment (TEC: Teacher Evaluation Component)",
  );
  lines.push("");
  lines.push(
    "| S.N. | Item(s) | Duration | Evaluation Scale | CBCS Batch Weightage (Out of 20) | NEP Batch Weightage (Out of 40) |",
  );
  lines.push("|:---|:---|:---|:---|:---|:---|");
  lines.push(
    "| 01 | Class Test I and Class Test II | 1 Hr for each Class Test | 02 Units for each Class Test — 30 marks | 60/6 = 10 | 60/3 = 20 |",
  );
  lines.push(
    "| 02 | TEC: Any one TEC to each Student/subject | Throughout the semester | 30 | 30/6 = 05 | 30/3 = 10 |",
  );
  lines.push(
    "| 03 | Attendance | Throughout the semester | 95-100%: 05, 90-94.99%: 04, 85-89.99%: 03, 80-84.99%: 02, 75-79.99%: 01, Below 75%: 00 | 05 | ≥95%: 10, <94.99%: 08, <89.99%: 06, <84.99%: 04, <79.99%: 02, <75%: 00 |",
  );
  lines.push("");
  lines.push(
    "*The above scheme is also applicable for double minor/honours courses.",
  );
  lines.push("");
  lines.push(
    "### PG: M.B.A., M.E. (EPS / Digital Electronics / Computer Engg. / AM&MSD)",
  );
  lines.push("");
  lines.push(
    "| S.N. | Items/Syllabus | Duration | Evaluation Scale (Marks) | Weightage (Out of 20/30) |",
  );
  lines.push("|:---|:---|:---|:---|:---|");
  lines.push(
    "| 01 | Class Test I (50% of syllabus) | 1½ Hrs. (ME) / 2 Hrs. (MBA) | 40 | 80/8 = 10 (ME) |",
  );
  lines.push(
    "| 02 | Class Test-II (Remaining 50% of syllabus) | 2 Hrs. (MBA) For Each CT | 40 | 80/4 = 20 (MBA) |",
  );
  lines.push(
    "| 03 | Teacher Evaluation Component — Any 1 TEC to each student/subject | Throughout the semester | 40 | 40/4 = 10 |",
  );
  lines.push("");
  lines.push(
    "> **Please Note:** Attendance in UG & PG should be min. 75% for the term grant. Subject Teacher will identify and open min. two & max. four TEC per subject.",
  );
  lines.push("");
  lines.push(
    "### List of Assignment Components / Teacher Evaluation Components (TECs):",
  );
  lines.push("");
  lines.push("1. Tutorials on Syllabus points");
  lines.push("2. Presentation/Seminar on extension of the course");
  lines.push(
    "3. Mini/Term/Short Projects (Design/Fabrication/Simulation/Software/Hardware Development/Survey/Case Studies etc.)",
  );
  lines.push("4. New Experiment development and testing");
  lines.push("5. Open book test");
  lines.push("6. Surprise test");
  lines.push("7. Quiz / Group Discussion");
  lines.push("8. Field/Industrial work");
  lines.push("9. Industrial visit and report writing");
  lines.push("");
  lines.push(
    "**Note:** If any student missed either CT1 or CT2 due to off Campus college activities approved by concern HOD, then it is mandatory for them to appear for retest.",
  );
  lines.push("");
  lines.push(
    "**Prof. D. L. Bhombe** — Dean (Academics) &emsp; **Prof. V. M. Umale** — Dean (Exams) &emsp; **Dr. S. B. Somani** — Principal",
  );
  lines.push("");
  lines.push("**Copy to:**");
  lines.push("1. Principal office for information.");
  lines.push(
    "2. All HODs for circulation to all concern and necessary action.",
  );
  lines.push("3. M.R.ISO / Exam Section for necessary noting.");
  lines.push("4. IQAC Coordinator.");
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Sessional Marks Evaluation Scheme (PDF)](https://www.ssgmce.ac.in/uploads/Sessional%20Marks%20Evaluations%20scheme%20for%20UG-%20PG%20Session-2025-2026.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 7. Student Notices (academics-notices)
 * ───────────────────────────────────────────────────────────── */
function buildStudentNotices() {
  const lines = [];
  lines.push("## Notice for Students");
  lines.push("");
  lines.push("**Date:** 09/07/2025");
  lines.push("");
  lines.push(
    "All the students are hereby informed to note the following points related to **attendance:**",
  );
  lines.push("");
  lines.push("### 1. Attendance Policy");
  lines.push("");
  lines.push(
    "Attendance will be considered from day one of commencement of classes. It is compulsory for all students to maintain minimum 75% attendance otherwise he/she will be detained. Actions likely to be taken against students in detention list are:",
  );
  lines.push("");
  lines.push(
    "a. He/She is not eligible for internal marks based on attendance.",
  );
  lines.push("b. He/She is not eligible for incentive marks.");
  lines.push(
    "c. He/She is not eligible for scholarship of any kind from the institute.",
  );
  lines.push("d. He/She is not eligible for library facility.");
  lines.push(
    "e. He/She is not eligible for industrial visit, internship, & training.",
  );
  lines.push(
    "f. Parent of these students are to be informed and called at the time of registration/commencement of semester and undertaking to be submitted by these students to respective HOD.",
  );
  lines.push(
    "g. Despite all these actions if a student fails to obey the undertaking, the student will not be permitted to attend theory and practical classes.",
  );
  lines.push("");
  lines.push("### 2. Leave Policy");
  lines.push("");
  lines.push(
    "Leave for four lectures per subject will be automatically granted on medical/personal reasons. These four lectures will be subtracted from the total attendance of the student at the end of session for all the students irrespective of whether they have availed the leave or not. No need to apply for short personal leave.",
  );
  lines.push("");
  lines.push("### 3. Leave Application");
  lines.push("");
  lines.push(
    "In case of genuine leave, student need to apply for leave consideration time to time in the student leave format (SSGMCE/FRM/DPT-79) which is available in concern HOD office with proper document & justification. Lateral leave application will not be considered.",
  );
  lines.push("");
  lines.push("### 4. Special Activities Reporting");
  lines.push("");
  lines.push(
    "The leave for NSS, NCC, & Internship etc. should be reported to the concern In-charge/HOD by the students. The in-charge/HOD will forward the final list of such students to the Dean Academics.",
  );
  lines.push("");
  lines.push("### 5. Attendance Correction");
  lines.push("");
  lines.push(
    "In case of any correction in attendance, student should report to concern subject teacher within four days from the date of display of consolidated cumulative attendance.",
  );
  lines.push("");
  lines.push("**Dean (Academics)** &emsp;&emsp;&emsp; **Principal**");
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Notice for Students (PDF)](https://www.ssgmce.ac.in/uploads/Notice%20for%20Students.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 8. Schemes & Syllabus (academics-syllabus)
 * ───────────────────────────────────────────────────────────── */
function buildSyllabus() {
  const lines = [];
  lines.push("## Schemes and Syllabus");
  lines.push("");
  lines.push(
    "The curriculum follows the Sant Gadge Baba Amravati University (SGBAU) regulations. Detailed schemes and syllabi for all branches can be found below.",
  );
  lines.push("");

  const departments = [
    {
      name: "B.E. First Year (Applied Sciences and Humanities)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/Revised scheme for all branches-(U.G.)-Sem. I & II - (Common for all branches).pdf",
        },
        {
          label: "Syllabus of ASH (1st Sem-2nd Sem)",
          url: "uploads/pdf/syllabus_first-year_NEP.pdf",
        },
        {
          label:
            "Syllabus of ASH (1st Sem-2nd Sem) Notification No. 148 of 2024 (Extra Ordinary)",
          url: "uploads/pdf/Extra Ordinary Notification No. 148 of 2024_first_year.pdf",
        },
      ],
    },
    {
      name: "B.E. (Computer Science and Engineering)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/B.E. (CSE, CS-DS, KE, AIDS) - (Scheme ) - Sem. III to VIII - NEP_scheme.pdf",
        },
        {
          label: "Scheme",
          url: "uploads/pdf/Scheme-CSE-Second to Final Year-13.08.2020-1-11.pdf",
        },
        {
          label:
            "Revised Syllabus of CSE (1st Sem-8th Sem) Notification No. 121/2023",
          url: "uploads/pdf/CSE-Sem.-1-to-8-CE-Sem.-3-4-Syll.-Rev.-Syll.-Notificn.-No.-121-of-2023.pdf",
        },
        {
          label: "Syllabus Second Year (3rd & 4th Sem)",
          url: "uploads/pdf/B.E. (CSE, CS-DS, KE, AIDS) - (Core Syllabus) - Sem. IIII & IV - NEP.pdf",
        },
        {
          label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf",
        },
        {
          label: "Syllabus - Modern Indian Language (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus Third Year (5th & 6th Sem)",
          url: "uploads/pdf/Syllabus-CSE-Third Year-5th-6th Sem.pdf",
        },
        {
          label: "Syllabus Final Year (7th & 8th Sem)",
          url: "uploads/pdf/CSE-BE-Sem-7-8-Syllabus-Notifn-No.-68-of-2022.pdf",
        },
      ],
      me: {
        name: "M.E. (Computer Engineering)",
        items: [
          {
            label: "Scheme and Syllabus M.E. (1st & 2nd Sem)",
            url: "uploads/pdf/Scheme-Syllabus-M.E. (Computer Engineering).pdf",
          },
        ],
      },
    },
    {
      name: "B.E. (Electrical Engineering)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/B.E. Elect. Engg. (Electronics & Power) - (Scheme) - Sem. III to VIII - NEP-scheme.pdf",
        },
        {
          label: "Scheme",
          url: "uploads/pdf/schemes/SGBAU_CBCS_Teaching_Examination Scheme_2019-20_1.pdf",
        },
        {
          label: "Syllabus Second Year (3rd Sem)",
          url: "uploads/pdf/B.E. Elect. Engg. (Electronics and Power) - (Syllabus) - Sem. III - NEP.pdf",
        },
        {
          label: "Syllabus Second Year (4th Sem)",
          url: "uploads/pdf/B.E. Elect. Engg.  (Electronics and Power) - (Syllabus) - Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf",
        },
        {
          label: "Syllabus - Modern Indian Language (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/SGBAU_CBCS-Syllabus_V_VI_Sem_BE_ELPO_wef_2021-22.pdf",
        },
        {
          label: "Syllabus Final Year (7th & 8th Sem)",
          url: "uploads/pdf/schemes/SGBAU_CBCS-Syllabus_VII_VIII_Sem_BE_ELPO_wef_2022-23.pdf",
        },
      ],
      me: {
        name: "M.E. (Electrical Power System)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", url: "#" },
        ],
      },
    },
    {
      name: "B.E. (Electronics and Telecommunication Engineering)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/B.E. (Elect. & Tele.) - (Scheme) - Sem. III to VIII - NEP_scheme.pdf",
        },
        {
          label: "Scheme",
          url: "uploads/pdf/schemes/Schemes BE Extc Sem 3-8.pdf",
        },
        {
          label:
            "Notification letter - Revised Scheme for Open Elective subject",
          url: "uploads/pdf/schemes/Open Elective Subj. of Sem V & VI BE all br. Notificn No. 11 of 2023.pdf",
        },
        {
          label: "Syllabus Second Year (3rd Sem)",
          url: "uploads/pdf/B.E. (Elect. & Tele.) - (Syllabus) - Sem. III - NEP.pdf",
        },
        {
          label: "Syllabus Second Year (4th Sem)",
          url: "uploads/pdf/B.E. (Elect. & Tele.) - (Syllabus) - Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf",
        },
        {
          label: "Syllabus - Modern Indian Language (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf",
        },
        {
          label:
            "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/Revised Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf",
        },
        {
          label: "Syllabus Final Year (7th & 8th Sem)",
          url: "uploads/pdf/schemes/Final Draft VII_VIII sem Syllabus.pdf",
        },
        {
          label:
            "Revised Syllabus for Open Elective Final Year (7th & 8th Sem)",
          url: "uploads/pdf/schemes/Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf",
        },
      ],
      me: {
        name: "M.E. (Digital Electronics)",
        items: [
          {
            label: "Scheme and Syllabus M.E. (1st & 2nd Sem)",
            url: "uploads/pdf/schemes/Scheme-ME (DIGITAL) (FULL TIME).pdf",
          },
        ],
      },
    },
    {
      name: "B.E. (Information Technology)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/B.E. (Information Tech. ) - (Scheme) - Sem. III to VIII - NEP_scheme.pdf",
        },
        { label: "Scheme", url: "uploads/pdf/schemes/IT Scheme[411].pdf" },
        {
          label: "Syllabus Second Year (3rd Sem)",
          url: "uploads/pdf/B.E. (Information Tech. ) - (Syllabus) - Sem. III - NEP.pdf",
        },
        {
          label: "Syllabus Second Year (4th Sem)",
          url: "uploads/pdf/B.E. (Information Tech. ) - (Syllabus) - Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf",
        },
        {
          label: "Syllabus - Modern Indian Language (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/3N Syllabus[385].pdf",
        },
        {
          label: "Syllabus Final Year (7th & 8th Sem)",
          url: "uploads/pdf/schemes/4N Syllabus[386].pdf",
        },
        {
          label: "Computer Skill Lab Syllabus",
          url: "uploads/pdf/schemes/Computer_Skill_Labs__New_.pdf",
        },
        {
          label: "Revised Syllabus of IT 21 July 2023",
          url: "uploads/pdf/schemes/Modified_Syllabus_21_July_2023__3_.pdf",
        },
        {
          label:
            "Revised Syllabus of CSE (5th Sem-7th Sem) Notification No. 187/2022",
          url: "uploads/pdf/schemes/IT BE Sem. V & VII Syll. Minor changes Notificn No. 187 of 2022.pdf",
        },
      ],
    },
    {
      name: "B.E. (Mechanical Engineering)",
      items: [
        {
          label: "NEP Scheme",
          url: "uploads/pdf/B.E. (Mech Engg) - (Scheme) - Sem. III to VIII - NEP-scheme.pdf",
        },
        {
          label: "Scheme",
          url: "uploads/pdf/Schemes_BE_Mech_Sem_3-8-new wef 2020-21[371].pdf",
        },
        {
          label: "Syllabus Second Year (3rd & 4th Sem)",
          url: "uploads/pdf/B.E. (Mech Engg) - (Syllabus) - Sem. III to VIII - NEP.pdf",
        },
        {
          label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf",
        },
        {
          label: "Syllabus - Modern Indian Language (Sem. IV - NEP)",
          url: "uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf",
        },
        {
          label: "Syllabus Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/3rd Year BE MECH 5-6 Sem. Syllabus.pdf",
        },
        {
          label:
            "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)",
          url: "uploads/pdf/schemes/Open Elective Subj. of Sem V & VI BE all br. Notificn No. 11 of 2023.pdf",
        },
        {
          label: "Syllabus Final Year (7th & 8th Sem)",
          url: "uploads/pdf/schemes/4th Year BE MECH 7-8 Sem. Syllabus.pdf",
        },
      ],
      me: {
        name: "M.E. Advanced Manufacturing & Mechanical Systems Design",
        items: [
          {
            label: "Scheme and Syllabus M.E. (1st & 2nd Sem)",
            url: "uploads/pdf/schemes/MECH PG SCHEME AND SYLLABUS.pdf",
          },
        ],
      },
    },
    {
      name: "M.B.A. (Master of Business Administration)",
      items: [
        {
          label: "Scheme",
          url: "uploads/pdf/schemes/MBA_Scheme__New__Direction_No._81_of_2022.pdf",
        },
        {
          label: "Syllabus First Year (1st & 2nd Sem)",
          url: "uploads/pdf/schemes/MBA New Syllabus of SEM I & II 2022-23 onwards.pdf",
        },
        {
          label: "Syllabus Second Year (3rd Sem)",
          url: "uploads/pdf/schemes/MBA SEM-III PROPOSED SYLLABUS-2023.pdf",
        },
        {
          label: "Syllabus Second Year (4th Sem)",
          url: "uploads/pdf/schemes/MBA SEM-IV PROPOSED SYLLABUS-2023.pdf",
        },
      ],
    },
  ];

  departments.forEach((dept) => {
    lines.push(`### ${dept.name}`);
    lines.push("");
    dept.items.forEach((item) => {
      const url = item.url === "#" ? "#" : encodeURL(item.url);
      lines.push(`- [${item.label}](${url})`);
    });
    if (dept.me) {
      lines.push("");
      lines.push(`#### ${dept.me.name}`);
      lines.push("");
      dept.me.items.forEach((item) => {
        const url = item.url === "#" ? "#" : encodeURL(item.url);
        lines.push(`- [${item.label}](${url})`);
      });
    }
    lines.push("");
  });

  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 9. Teaching Learning Process (academics-teaching)
 * ───────────────────────────────────────────────────────────── */
function buildTeachingLearning() {
  const lines = [];
  lines.push("## Teaching Learning Process");
  lines.push("");
  lines.push("### Overview");
  lines.push("");
  lines.push(
    "The Teaching Learning Process at SSGMCE focuses on outcome-based education, practical exposure, and continuous improvement. It is designed to build strong fundamentals, problem-solving ability, and professional readiness through classroom teaching, lab work, and project-based learning.",
  );
  lines.push("");
  lines.push(
    "This page provides a short summary. For complete details, refer to the official document.",
  );
  lines.push("");
  lines.push("### Key Components of the Process");
  lines.push("");
  lines.push(
    "- **Curriculum Delivery** — Outcome-based curriculum delivery using planned lectures, tutorials, and classroom discussions.",
  );
  lines.push(
    "- **Practical Learning** — Laboratory sessions, mini projects, and demonstrations to connect theory with application.",
  );
  lines.push(
    "- **Digital Support** — Use of ICT tools, online learning resources, and blended learning to strengthen understanding.",
  );
  lines.push(
    "- **Projects and Evaluation** — Continuous assessment through assignments, sessional tests, seminars, and project work.",
  );
  lines.push("");
  lines.push("### Continuous Improvement Focus");
  lines.push("");
  lines.push("- Regular academic planning and monitoring at department level.");
  lines.push("- Student feedback and performance-based corrective actions.");
  lines.push(
    "- Integration of innovative practices to improve engagement and outcomes.",
  );
  lines.push(
    "- Alignment with university guidelines and institutional quality standards.",
  );
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Teaching Learning Process 2022 (Official PDF)](/uploads/documents/academics/teaching-learning/Teaching_Learning_Process2022.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * 10. Central Time Table (academics-timetable)
 * ───────────────────────────────────────────────────────────── */
function buildTimeTable() {
  const lines = [];
  lines.push("## Central Time Table — Spring Semester 2025-26");
  lines.push("");
  lines.push("Shri Sant Gajanan Maharaj College of Engineering, Shegaon");
  lines.push("");
  lines.push(
    "Approved by Dean (Academics) Dr. A. U. Jawadekar & Principal Dr. S. B. Somani",
  );
  lines.push("");
  lines.push("### Time Slot Structure");
  lines.push("");
  lines.push("#### Monday – Friday");
  lines.push("");
  lines.push("| Time | Type |");
  lines.push("|:---|:---|");
  lines.push("| 11:00 – 12:00 | Lecture |");
  lines.push("| 12:00 – 1:00 | Lecture |");
  lines.push("| 1:00 – 1:15 | Break |");
  lines.push("| 1:15 – 2:15 | Lecture |");
  lines.push("| 2:15 – 3:15 | Lecture |");
  lines.push("| 3:15 – 3:45 | Recess |");
  lines.push("| 3:45 – 4:45 | Lecture / Lab |");
  lines.push("| 4:45 – 5:45 | Lecture / Lab |");
  lines.push("");
  lines.push("#### Saturday");
  lines.push("");
  lines.push("| Time | Type |");
  lines.push("|:---|:---|");
  lines.push("| 8:30 – 9:30 | Lecture / Lab |");
  lines.push("| 9:30 – 10:30 | Lecture / Lab |");
  lines.push("| 10:30 – 10:45 | Break |");
  lines.push("| 10:45 – 11:45 | Lecture / Lab |");
  lines.push("| 11:45 – 12:45 | Lecture / Lab |");
  lines.push("");
  lines.push("### Departments & Classes Covered");
  lines.push("");
  lines.push("| Code | Department | Classes |");
  lines.push("|:---|:---|:---|");
  lines.push("| S | Electrical Engineering | 2S, 3S, 4S |");
  lines.push("| R | Computer Science & Engineering | 2R, 3R, 4R |");
  lines.push("| N | Information Technology / CSE (AI&ML) | 2N, 3N, 4N |");
  lines.push(
    "| U1 | Electronics & Telecommunication (Div 1) | 2U1, 3U1, 4U1 |",
  );
  lines.push(
    "| U2 | Electronics & Telecommunication (Div 2) | 2U2, 3U2, 4U2 |",
  );
  lines.push("| M | Mechanical Engineering | 2M, 3M, 4M |");
  lines.push(
    "| 1st Year | First Year (All Branches) | 1R1, 1R2, 1N, 1S, 1U1, 1U2, 1M |",
  );
  lines.push(
    "| PG | M.E. & MBA Programs | M.E.(EPS), M.E.(DE), M.E.(CE), M.E.(AMMSD), MBA I, MBA II |",
  );
  lines.push("");
  lines.push("### Day-Wise Schedule Overview");
  lines.push("");
  lines.push("| Day | Pages in PDF | Contents |");
  lines.push("|:---|:---|:---|");
  lines.push(
    "| Monday | Page 1 & 7 | UG classes (2nd–4th Year, 1st Year) + PG & MBA |",
  );
  lines.push(
    "| Tuesday | Page 2 & 7 | UG classes (2nd–4th Year, 1st Year) + PG & MBA |",
  );
  lines.push(
    "| Wednesday | Page 3 & 7 | UG classes (2nd–4th Year, 1st Year) + PG & MBA |",
  );
  lines.push(
    "| Thursday | Page 4 & 8 | UG classes (2nd–4th Year, 1st Year) + PG & MBA |",
  );
  lines.push(
    "| Friday | Page 5 & 8 | UG classes (2nd–4th Year, 1st Year) + PG & MBA |",
  );
  lines.push(
    "| Saturday | Page 6 & 8 | Mentor-Mentee, Skills, Labs, POP, BARSA Activities |",
  );
  lines.push("");
  lines.push("### Abbreviations & Notes");
  lines.push("");
  lines.push("- **(T)\\*** — Tutorial");
  lines.push("- **\\*\\*** — Additional lecture");
  lines.push("- **SDP** — Skill Development Program");
  lines.push("- **POP** — Professor of Practice");
  lines.push("- **OE** — Open Elective, **PE** — Professional Elective");
  lines.push(
    "- **MIL** — Modern Indian Language, **UHV** — Universal Human Values",
  );
  lines.push(
    "- Letters in parentheses (e.g., A, B, C, D) indicate batch divisions for practicals and labs.",
  );
  lines.push(
    "- Room numbers: A-block (A1–A4), B-block (B007, B108, B206, B2, B4, B6), C-block (C1–C4), D-block (D1–D5), E-block (E1–E4).",
  );
  lines.push("");
  lines.push("### Download");
  lines.push("");
  lines.push(
    "[Download Central Time Table — Spring Semester 2025-26 (PDF)](https://www.ssgmce.ac.in/uploads/Central%20Time%20Table-Autumn-2025-26.pdf)",
  );
  return lines.join("\n");
}

/* ─────────────────────────────────────────────────────────────
 * Page definitions
 * ───────────────────────────────────────────────────────────── */
const PAGES = [
  {
    pageId: "academics-reports",
    pageTitle: "Annual Reports",
    pageDescription: "Annual Reports of SSGMCE Shegaon",
    route: "/academics/reports",
    buildFn: buildAnnualReports,
  },
  {
    pageId: "academics-incentive",
    pageTitle: "Incentive Marks Scheme",
    pageDescription: "Guideline for Incentive Marks — Institute level",
    route: "/academics/incentive",
    buildFn: buildIncentiveMarks,
  },
  {
    pageId: "academics-innovative",
    pageTitle: "Innovative Practices in Teaching & Learning",
    pageDescription: "Innovative Practices in Teaching and Learning at SSGMCE",
    route: "/academics/innovative",
    buildFn: buildInnovativePractices,
  },
  {
    pageId: "academics-rubrics",
    pageTitle: "Rubrics for Theory, Laboratory, Project & Seminar",
    pageDescription: "Evaluation rubrics for Theory, Lab, Project & Seminar",
    route: "/academics/rubrics",
    buildFn: buildRubrics,
  },
  {
    pageId: "academics-rules",
    pageTitle: "Rules & Regulations",
    pageDescription: "Academic rules, attendance policy and code of conduct",
    route: "/academics/rules",
    buildFn: buildRulesRegulations,
  },
  {
    pageId: "academics-marks",
    pageTitle: "Sessional Marks Evaluation",
    pageDescription: "Sessional Marks Evaluation Scheme for UG/PG",
    route: "/academics/marks",
    buildFn: buildSessionalMarks,
  },
  {
    pageId: "academics-notices",
    pageTitle: "Notice for Students",
    pageDescription: "Student notices — attendance and academic guidelines",
    route: "/academics/notices",
    buildFn: buildStudentNotices,
  },
  {
    pageId: "academics-syllabus",
    pageTitle: "Schemes and Syllabus",
    pageDescription: "Department-wise schemes and syllabus downloads",
    route: "/academics/syllabus",
    buildFn: buildSyllabus,
  },
  {
    pageId: "academics-teaching",
    pageTitle: "Teaching Learning Process",
    pageDescription: "Overview of Teaching Learning Process at SSGMCE",
    route: "/academics/teaching",
    buildFn: buildTeachingLearning,
  },
  {
    pageId: "academics-timetable",
    pageTitle: "Central Time Table",
    pageDescription: "Central Time Table for all departments",
    route: "/academics/timetable",
    buildFn: buildTimeTable,
  },
];

/* ─────────────────────────────────────────────────────────────
 * Run
 * ───────────────────────────────────────────────────────────── */
async function run() {
  await mongoose.connect(MONGO_URI);
  console.log("[OK] MongoDB connected");

  for (const page of PAGES) {
    const sections = [
      {
        sectionId: "main-content",
        title: "",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: { text: page.buildFn() },
      },
    ];

    const result = await PageContent.findOneAndUpdate(
      { pageId: page.pageId },
      {
        $set: {
          pageId: page.pageId,
          pageTitle: page.pageTitle,
          pageDescription: page.pageDescription,
          route: page.route,
          category: "academics",
          template: "generic",
          isPublished: true,
          sections,
        },
      },
      { upsert: true, new: true },
    );

    console.log(
      `[OK] ${page.pageId} seeded → ${result.sections.length} section(s)`,
    );
  }

  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("[ERROR]", err.message);
  process.exit(1);
});
