/**
 * seedAcademicPlannerPage.js
 * Seeds the academics-planner page in MongoDB with the session-wise
 * Academic Calendar & Planner data as a markdown section with HTML.
 * Run once: node scripts/seedAcademicPlannerPage.js
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

const academicData = [
  {
    session: "2025-26",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/Academic Calendar (B.E.) 2025-26.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic Planner 2025-26.pdf",
    },
  },
  {
    session: "2024-25",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar_BE_2024-25_04-03-25.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2024-25-Autumn (1).pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/FIN Academic_Planner_2024-2025-13-125.pdf",
    },
  },
  {
    session: "2023-24",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2023-24 (23-2-24) (2).pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2023-24_Autumn.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Spring Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2023-24_Spring.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Rev. Academic Planner 2023-24 Ap-24S.pdf",
    },
  },
  {
    session: "2022-23",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2022-23.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2022-23_Autumn.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Spring Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2022-23_Spring.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/REVISED Academic_Planner_2022-2023 ---Mar23.pdf",
    },
  },
  {
    session: "2021-22",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar 2021-22.pdf",
      },
      {
        label: "Academic Calendar - First Year (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Autumn-2020-21[408].pdf",
      },
      {
        label: "Academic Calendar - First Year (Spring Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Spring-2020-21[407].pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2021-22_Autumn.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2021-2022.pdf",
    },
  },
  {
    session: "2020-21",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2020-21 (1)[409].pdf",
      },
      {
        label: "Academic Calendar - First Year (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Autumn-2020-21.pdf",
      },
      {
        label: "Academic Calendar - First Year (Spring Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Spring-2020-21.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2020-2021 AUG20 FIN JAN 2021-ok.pdf",
    },
  },
  {
    session: "2019-20",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2019-20[314].pdf",
      },
      {
        label: "Academic Calendar - First Year (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Autumn-2019-20[313].pdf",
      },
      {
        label: "Academic Calendar - First Year (Spring Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Spring-2019-20[312].pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2019-20-Autumn.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Spring Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2019-20-Spring.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2019-2020[311].pdf",
    },
  },
  {
    session: "2018-19",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2018-19.pdf",
      },
      {
        label: "Academic Calendar - First Year (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar FYBE Autumn-2018-19.pdf",
      },
      {
        label: "Academic Calendar - First Year & M.E (Spring Semester)",
        url: "uploads/pdf/Academic Calendar FYBE & ME Spring-2018-19.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2018-19_Autumn.pdf",
      },
      {
        label: "Academic Calendar - M.B.A. (Spring Semester)",
        url: "uploads/pdf/Academic Calendar (MBA) 2018-19_Spring.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2018-2019.pdf",
    },
  },
  {
    session: "2017-18",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2017-18 (1).pdf",
      },
      {
        label: "Academic Calendar - First Year & M.E (Spring Semester)",
        url: "uploads/pdf/Academic Calendar FYBE & ME 2017-18 Spring Sem.pdf",
      },
      {
        label: "Academic Calendar - First Year & M.E (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar FYBE & ME 2017-18 Autumn.pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2017-18.pdf",
    },
  },
  {
    session: "2016-17",
    calendars: [
      {
        label: "Academic Calendar (B.E.)",
        url: "uploads/pdf/Academic Calendar (B.E.) 2016-17.pdf",
      },
      {
        label: "Academic Calendar (MBA)",
        url: "uploads/pdf/Academic_Calendar (MBA) 2016-17.pdf",
      },
      {
        label: "Academic Calendar - First Year & M.E (Spring Semester)",
        url: "uploads/pdf/Academic Calendar- First Year & M.E (Spring-16-17).pdf",
      },
      {
        label: "Academic Calendar - First Year & M.E (Autumn Semester)",
        url: "uploads/pdf/Academic Calendar- First Year & M.E (Autumn-16-17).pdf",
      },
    ],
    planner: {
      label: "Academic Planner",
      url: "uploads/pdf/Academic_Planner_2016-17.pdf",
    },
  },
];

function buildMarkdown() {
  const lines = [];

  lines.push("## Academic Planner and Calendar");
  lines.push("");
  lines.push(
    "The academic calendar is designed to ensure a balanced schedule for students and faculty. It includes dates for commencement of classes, internal assessments, university examinations, and holidays. Download the academic calendar and planner for each session below.",
  );
  lines.push("");
  lines.push("### Session-wise Academic Calendar & Planner");
  lines.push("");
  lines.push("| Academic Session | Academic Calendar | Academic Planner |");
  lines.push("|:---|:---|:---|");

  academicData.forEach((item) => {
    const calCell = item.calendars
      .map((cal) => `[${cal.label}](${encodeURL(cal.url)})`)
      .join("<br>");
    const plannerCell = `[${item.planner.label}](${encodeURL(item.planner.url)})`;
    lines.push(`| **${item.session}** | ${calCell} | ${plannerCell} |`);
  });

  return lines.join("\n");
}

async function run() {
  await mongoose.connect(MONGO_URI);
  console.log("[OK] MongoDB connected");

  const sections = [
    {
      sectionId: "planner-main",
      title: "",
      type: "markdown",
      order: 1,
      isVisible: true,
      content: { text: buildMarkdown() },
    },
  ];

  const result = await PageContent.findOneAndUpdate(
    { pageId: "academics-planner" },
    {
      $set: {
        pageId: "academics-planner",
        pageTitle: "Academic Planner & Calendar",
        pageDescription:
          "Session-wise academic calendars and planners for SSGMCE",
        route: "/academics/planner",
        category: "academics",
        template: "generic",
        isPublished: true,
        sections,
      },
    },
    { upsert: true, new: true },
  );

  console.log(
    `[OK] academics-planner seeded → ${result.sections.length} section(s)`,
  );
  await mongoose.disconnect();
  process.exit(0);
}

run().catch((err) => {
  console.error("[ERROR]", err.message);
  process.exit(1);
});
