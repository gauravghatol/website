/**
 * ============================================================
 *  ALL NAV PAGES – Seed data for every route from the navbar
 * ============================================================
 *
 *  This file generates PageContent entries for EVERY link
 *  in the navigation bar. Running the seed will upsert these
 *  so every page becomes admin-editable immediately.
 *
 *  Category IDs match the PageContent.category enum:
 *    about, academics, facilities, admissions, research,
 *    placements, iqac, documents, activities, departments, other
 */

const { researchMarkdownPages } = require("./researchMarkdownContent");
const { iqacMarkdownPages } = require("./iqacMarkdownContent");
const { adminOfficePages } = require("./adminOfficePages");

// Helper: generate a pageId from the route path
// e.g. "/about/glance" → "about-glance"
function routeToPageId(route) {
  return route.replace(/^\//, "").replace(/\//g, "-").toLowerCase();
}

// ──────────────────────────────────────────────────────────────
//  ABOUT
// ──────────────────────────────────────────────────────────────
const aboutPages = [
  {
    pageId: "about-at-glance",
    pageTitle: "SSGMCE At A Glance",
    pageDescription: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
    route: "/about",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "about-intro",
        title: "About SSGMCE",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `**Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon**, established in 1983 by Shri Gajanan Shikshan Sanstha, is one of the premier institutions dedicated to excellence in engineering and management education in Maharashtra.

The institute is affiliated to **Sant Gadge Baba Amravati University (SGBAU)**, Amravati, recognized by **AICTE**, New Delhi, and approved by the **Directorate of Technical Education (DTE)**, Maharashtra State. SSGMCE is accredited by **NAAC with an 'A+' grade** (CGPA 3.26), reflecting its unwavering dedication to quality education.

Spread over **40 acres** of lush green campus, the college provides a serene and conducive environment for learning. Over four decades, SSGMCE has produced thousands of engineers who have made significant contributions to industry, research, and society — combining technical knowledge with moral values inspired by the teachings of **Sant Gajanan Maharaj**.`,
        },
      },
      {
        sectionId: "campus-image",
        title: "Campus Image",
        type: "image",
        order: 2,
        isVisible: true,
        content: {
          url: "",
          alt: "SSGMCE Campus View",
          caption: "Campus View",
        },
      },
      {
        sectionId: "quick-facts",
        title: "Quick Facts",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `| Parameter | Details |
|---|---|
| **Year of Establishment** | 1983 |
| **Founded By** | Shri Gajanan Shikshan Sanstha, Shegaon |
| **Affiliated To** | Sant Gadge Baba Amravati University (SGBAU) |
| **Approved By** | AICTE, New Delhi & DTE, Maharashtra |
| **NAAC Accreditation** | A+ Grade (CGPA 3.26) |
| **Campus Area** | 40 Acres |
| **UG Programs** | 7 |
| **PG Programs** | 9 |
| **Total Students** | 2500+ |
| **Faculty Members** | 150+ |
| **Research Labs** | 45+ |
| **Central Library** | 50,000+ Books |
| **Hostel Capacity** | 500+ |`,
        },
      },
      {
        sectionId: "history-milestones",
        title: "History & Milestones",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: `| Year | Milestone |
|---|---|
| **1983** | College established by Shri Gajanan Shikshan Sanstha, Shegaon |
| **1984** | First batch admitted — Mechanical, Electrical & Civil Engineering |
| **1995** | Electronics & Telecommunication Department started |
| **2000** | Computer Science & Engineering Department established |
| **2002** | Information Technology Department started |
| **2008** | ISO 9001:2008 Certification achieved |
| **2010** | MBA Program launched |
| **2015** | NAAC Accredited with 'A' Grade (CGPA 3.14) |
| **2016** | NBA Accreditation for multiple programs |
| **2018** | Designated as TCS Priority College |
| **2020** | NAAC Re-accredited with 'A+' Grade (CGPA 3.26) |
| **2021** | Identified as Lead College by SGBAU |
| **2023** | Ranked AAA by Careers360 Magazine |
| **2025** | 40+ Years of Academic Excellence |`,
        },
      },
      {
        sectionId: "recognitions",
        title: "Recognitions & Accreditations",
        type: "markdown",
        order: 5,
        isVisible: true,
        content: {
          text: `- **NAAC A+ Grade** — National Assessment and Accreditation Council (CGPA 3.26)
- **NBA Accreditation** — National Board of Accreditation for multiple programs
- **ISO 9001:2015** — Quality Management System Certified
- **TCS Priority College** — Recognized by Tata Consultancy Services
- **AAA Ranking** — Careers360 Excellence Rating
- **Lead College** — Identified by SGBAU as Lead Institution
- **Mentor Institute** — Under AICTE Margdarshan / Parisparsh Scheme`,
        },
      },
      {
        sectionId: "infrastructure",
        title: "Infrastructure",
        type: "markdown",
        order: 6,
        isVisible: true,
        content: {
          text: `The college is equipped with world-class infrastructure to support academic and extracurricular activities:

- **Campus** — 40 acres of green, well-maintained campus with Wi-Fi connectivity
- **Central Library** — 50,000+ books, digital resources, NPTEL video courses, and e-journals
- **Laboratories** — 45+ well-equipped research and teaching labs across all departments
- **Computer Center** — 12 computer labs with high-speed internet access
- **Seminar Halls** — 8 seminar halls with modern audio-visual facilities
- **Hostels** — Separate boys and girls hostels with 500+ capacity
- **Sports Complex** — Cricket ground, basketball court, volleyball court, indoor games, gymnasium
- **Workshops** — Fully equipped central workshop for hands-on training`,
        },
      },
      {
        sectionId: "placements-overview",
        title: "Placement Highlights",
        type: "markdown",
        order: 7,
        isVisible: true,
        content: {
          text: `| Parameter | Details |
|---|---|
| **Placement Rate** | 85%+ |
| **Students Placed Annually** | 200+ |
| **Recruiting Companies** | 50+ |
| **Top Recruiters** | TCS, Infosys, Wipro, Cognizant, Capgemini, L&T, and more |

The Training & Placement Cell actively bridges the gap between academia and industry, organizing campus drives, workshops, mock interviews, and career guidance sessions throughout the year.`,
        },
      },
    ],
  },
  {
    pageId: "about-vision",
    pageTitle: "Vision-Mission, Core Values & Goals",
    pageDescription: "Our Guiding Principles",
    route: "/about/vision",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "vision",
        title: "Our Vision",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `> "To impart world-class Engineering and Management education in an environment of spiritual foundation to serve the global society."`,
        },
      },
      {
        sectionId: "mission",
        title: "Our Mission",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `- To develop excellent learning center through continuous design and upgradation of courses in close interaction with R&D centers, industries and academia.
- To produce competent, entrepreneurial and committed technical and managerial human resource, with spiritual foundation to serve society.
- To develop state-of-the-art infrastructure, centers of excellence and to pursue research of global and local relevance.
- To strive for 'Sarve Bhavantu Sukhinah' - the ideal of our parent organization Shri Gajanan Maharaj Sansthan, Shegaon, through symbiosis of science and spirituality.`,
        },
      },
      {
        sectionId: "core-values",
        title: "Core Values",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `| Core Value | Commitment |
|---|---|
| **Personal Excellence** | Striving for the highest standards in everything we do. |
| **Accountability** | Taking responsibility for our actions and outcomes. |
| **Trustworthiness** | Building trust through transparency and integrity. |
| **Holistic Development** | Nurturing mind, body and spirit in all learners. |
| **Creativity & Innovation** | Encouraging new ideas and practical problem-solving. |`,
        },
      },
      {
        sectionId: "goals",
        title: "Our Goals",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: `1. **Academic Independence** - To acquire autonomous status for the institute.
2. **Global Recognition** - To get programs accredited by international bodies.
3. **Research Hub** - To establish recognized research centers in all departments.
4. **Industry Connect** - To strengthen industry-institute partnership for better opportunities.
5. **Digital Transformation** - To implement complete digitalization of academic and administrative processes.
6. **Sustainable Campus** - To maintain a green, eco-friendly and energy-efficient campus.`,
        },
      },
    ],
  },
  {
    pageId: "about-inspiration",
    pageTitle: "Our Inspiration",
    pageDescription: "The Visionary Behind SSGMCE",
    route: "/about/inspiration",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "founder-photo",
        title: "Founder",
        type: "image",
        order: 1,
        isVisible: true,
        content: {
          url: "/assets/images/about/chairman_c.jpeg",
          alt: "Late Shri. Shivshankarbhau Patil - Founder & Visionary",
          caption: "Late Shri. Shivshankarbhau Patil (Popularly known as Bhausaheb) — Founder & Visionary",
        },
      },
      {
        sectionId: "founder-message",
        title: "Our Inspiration",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `Shri Sant Gajanan Maharaj College of Engineering, Shegaon was established in 1983 by the well-known visionary **Late Shri. Shivshankarbhau Patil** (Popularly known as Bhausaheb) with the aim of imparting technical and management education in rural area in Vidarbha Region.

Over a period of four decades, more than **10,000 students** graduated from the Institution with Bachelor and Masters Degrees. The campus is spread across **82 acres of lush-green campus** having state-of-the-art infrastructure and facilities. Today it stands as one of the best engineering colleges in India imparting technical and management education of the highest standard.

Under his visionary leadership, the college grew leaps and bounds and received many accolades in the last four decades.

Late Shri. Shivshankarbhau Patil was instrumental in creating an ambience for nurturing innovation, creativity and excellence along with strong ethical values amongst students. This transformed the lives of a number of students who have been serving the global community worldwide.

The students left a mark nationally or globally wherever they went, by exhibiting their sound professional knowledge, unimpeachable character, sense of discipline and commitment.

> *SSGMCE, Shegaon will always remember his valuable contribution in the establishment of the educational institute.*`,
        },
      },
    ],
  },
  {
    pageId: "about-structure",
    pageTitle: "Organizational Structure",
    pageDescription: "Our Hierarchy & Administration",
    route: "/about/structure",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "org-intro",
        title: "Organizational Structure",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `Our institution follows a well-defined hierarchical structure to ensure efficient governance and academic excellence.

## Organizational Hierarchy

| Level | Body / Position | Role |
|-------|----------------|------|
| **1** | Governing Body | Policy Making & Strategic Direction |
| **2** | College Development Committee (CDC) | Local Managing Committee · Academic Planning & Development |
| **3** | Principal — Dr. S. B. Somani | Chief Executive & Academic Head |

### Deans & Administrative Heads

- Dean (Academics)
- Dean (R&D)
- Dean (Student Affairs)
- Registrar`,
        },
      },
      {
        sectionId: "departments",
        title: "Academic Departments",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `| Department | Leadership |
|---|---|
| Computer Science & Engineering | Headed by HOD |
| Information Technology | Headed by HOD |
| Electronics & Telecommunication | Headed by HOD |
| Electrical Engineering | Headed by HOD |
| Mechanical Engineering | Headed by HOD |
| Civil Engineering | Headed by HOD |
| Applied Sciences & Humanities | Headed by HOD |
| MBA Department | Headed by HOD |`,
        },
      },
      {
        sectionId: "admin-offices",
        title: "Administrative Offices",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `| Office | Responsibility |
|---|---|
| Training & Placement Office | Career guidance and placement activities |
| Examination Office | Conduct of examinations and result processing |
| Accounts Office | Financial management and fee collection |
| Library Office | Book issue and digital resource management |
| IQAC Office | Quality assurance and accreditation |
| Administrative Office | General administration and coordination |`,
        },
      },
    ],
  },
  {
    pageId: "about-principal",
    pageTitle: "Principal Speaks",
    pageDescription: "From the Desk of the Principal",
    route: "/about/principal",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "principal-photo",
        title: "Principal",
        type: "image",
        order: 1,
        isVisible: true,
        content: {
          url: "https://www.ssgmce.ac.in/images/principal.jpg",
          alt: "Dr. S. B. Somani - Principal, SSGMCE Shegaon",
          caption: "Dr. S. B. Somani, Principal, SSGMCE Shegaon",
        },
      },
      {
        sectionId: "principal-message",
        title: "Message from the Principal",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `> "Education is not just about acquiring knowledge, but about developing character, values, and a spirit of service to humanity."

**Dear Students, Parents, and Well-wishers,**

On behalf of the faculty, staff and students, I am pleased to welcome you to **Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon**. Choosing SSGMCE is the first step toward a career built on academic excellence and human values.

SSGMCE has continuously pursued quality education since **1983**. Over four decades, the institute has nurtured scientific temper, professional competence and social commitment among future technocrats.

Our institution is recognized with **NAAC A+ accreditation**, identified as a **TCS Priority College**, and ranked **AAA by Careers360**. These milestones reflect our commitment to strong academics, innovation and holistic development.

I extend my heartfelt wishes to all students for success in their future endeavours.`,
        },
      },
      {
        sectionId: "leadership-focus",
        title: "Leadership Focus Areas",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `- Academic Excellence
- Innovation & Research
- Holistic Development
- Value-Based Education`,
        },
      },
    ],
  },
  {
    pageId: "about-governing",
    pageTitle: "Governing Body",
    pageDescription: "Our Leadership",
    route: "/about/governing",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "governing-intro",
        title: "Governing Body",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `**Shri Sant Gajanan Maharaj College of Engineering, Shegaon**

Constituted By **All India Council for Technical Education, New Delhi**

| Sr.No. | Name of the persons on the Body | Category | Capacity on Body |
|--------|--------------------------------|----------|-----------------|
| 1 | Shri Nilkanth Shivshankar Patil | Chairman of Shri Gajanan Shikshan Sanstha | Chairman (Ex-officio) |
| 2 | Shri Kishor Trikamdas Tank | Shri Gajanan Shikshan Sanstha | Member |
| 3 | Shri Ashok Trimbakrao Deshmukh | Shri Gajanan Shikshan Sanstha | Member |
| 4 | Shri Jay Kishor Tank | Shri Gajanan Shikshan Sanstha | Member |
| 5 | Shri Ramkrushna Nilkanth Patil | Shri Gajanan Shikshan Sanstha | Member |
| 6 | Prof. Dr. A. M. Mahalle | Nominee of Sant Gadge Baba Amravati University, Amravati | Member |
| 7 | Dr. Vinod Mohitkar | Director of Technical Education (Nominee of the State Govt.) | Member (Ex-Officio) |
| 8 | Shri Vikas Chandra Rastogi | Nominated by the State Government | Member |
| 9 | Dr. Sunil Bhikamchand Somani | Principal / Head of the Institute | Member Secretary |
| 10 | Dr. Ram Shankarrao Dhekekar | Faculty member nominated from regular staff at the level of Professor | Member |
| 11 | Dr. Anjali Uday Jawadekar | Faculty member nominated from regular staff at the level of Associate Professor | Member |`,
        },
      },
    ],
  },
  {
    pageId: "about-committees",
    pageTitle: "Various Committees By SGBAU & AICTE",
    pageDescription: "Institutional Committees",
    route: "/about/committees",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "sgbau-committees",
        title: "Various Committees By SGBAU",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `Committees formed as per the directives of Sant Gadge Baba Amravati University.

- Pre-incubation Centre
- Local Managing Committee
- College Development Committee (CDC)
- Student Grievance Redressal Committee
- Grievance Redressal Committee – University
- Complaint Committee`,
        },
      },
      {
        sectionId: "aicte-committees",
        title: "Various Committees By AICTE",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `Committees mandatory as per All India Council for Technical Education norms.

- Anti-Ragging Committee
- Grievance Redressal Committee
- Internal Committee for SC/ST
- Internal Complaint Committee (ICC)`,
        },
      },
    ],
  },
  {
    pageId: "about-board",
    pageTitle: "Board of Directors",
    pageDescription: "Our Leadership",
    route: "/about/directors",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "board-intro",
        title: "Board of Directors",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `**Shri Gajanan Shikshan Sanstha**
Shegaon - 444203, Dist. Buldhana (M.S.)
(Registration No. F-569 (Buldhana))

| Sr.No. | Name of the Authorities | Designation |
|--------|------------------------|-------------|
| 1 | Shri Nilkanth Shivshankar Patil | Chairman |
| 2 | Shri Vijaykumar Jaywantrao Deshmukh | Vice-President |
| 3 | Shri Vishweshwar Shaligram Trikal | Vice-President |
| 4 | Shri Sharad Shankarlal Agrawal | Vice-President |
| 5 | Shri Jay Kishor Tank | Secretary |
| 6 | Shri Ramkrushna Nilkanth Patil | Joint Secretary |
| 7 | Shri Shubham Sanjay Murarka | Joint Secretary |
| 8 | Shri Ashok Janardhan Sable | Treasurer |
| 9 | Dr. Shri Rameshchandra Champalal Dangra | Member |
| 10 | Mohd. Rafique Mohd. Siddique | Member |
| 11 | Shri Gopal Sukdevrao Kalore | Member |
| 12 | Shri Baban Nanaji Gawande | Member |
| 13 | Shri Gokuldas Lunkarnji Chandak | Member |`,
        },
      },
    ],
  },
  {
    pageId: "about-contact",
    pageTitle: "Contact Us",
    pageDescription: "Reach Shri Sant Gajanan Maharaj College of Engineering",
    route: "/contact",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "contact-overview",
        title: "Institute Contact Information",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `Shri Sant Gajanan Maharaj College of Engineering (SSGMCE) welcomes inquiries from students, parents, alumni, recruiters, and visitors.

## Address
Shri Sant Gajanan Maharaj College of Engineering  
Shegaon - 444203  
Dist. Buldhana, Maharashtra, India

## Primary Contact
- **Phone:** +91-7265-252274 / +91-7265-252275
- **Fax:** +91-7265-252276
- **Email:** info@ssgmce.ac.in
- **Principal Email:** principal@ssgmce.ac.in

## Office Hours
- **Monday to Friday:** 9:00 AM - 5:00 PM
- **Saturday:** 9:00 AM - 1:00 PM
- **Sunday:** Closed`,
        },
      },
      {
        sectionId: "department-contacts",
        title: "Department and Cell Contacts",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `| Office / Cell | Email | Phone |
|---|---|---|
| Admissions Office | admission@ssgmce.ac.in | +91-7265-252274 |
| Examination Cell | exam@ssgmce.ac.in | +91-7265-252277 |
| Training and Placement Cell | placement@ssgmce.ac.in | +91-7265-252278 |
| Accounts Section | accounts@ssgmce.ac.in | +91-7265-252279 |
| Library | library@ssgmce.ac.in | +91-7265-252280 |
| Hostel Office | hostel@ssgmce.ac.in | +91-7265-252281 |`,
        },
      },
      {
        sectionId: "contact-note",
        title: "How We Can Help",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `- Admission guidance for UG, PG, and Ph.D. programs
- Document and certificate verification support
- Placement and internship coordination
- Campus visit and meeting scheduling

For faster response, please mention your full name, query type, and relevant department in your email subject.`,
        },
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
//  NIRF RANKING
// ──────────────────────────────────────────────────────────────
const nirfPages = [
  {
    pageId: "nirf-ranking",
    pageTitle: "NIRF Ranking",
    pageDescription: "National Institutional Ranking Framework",
    route: "/nirf",
    category: "nirf",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "nirf-intro",
        title: "About NIRF",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: `The **National Institutional Ranking Framework (NIRF)** was approved by the MHRD and launched by the Honorable Minister of Human Resource Development on September 29, 2015. This framework outlines a methodology to rank institutions across the country.\n\nSSGMCE has been consistently participating in NIRF rankings across multiple categories including Engineering, Overall, Management, and Innovation, showcasing our commitment to quality education and institutional excellence.`,
        },
      },
      {
        sectionId: "nirf-parameters",
        title: "NIRF Ranking Parameters",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: `NIRF ranks institutions based on five key performance parameters:\n\n| Parameter | Full Name | Weightage |\n|-----------|-----------|------------|\n| **TLR** | Teaching, Learning & Resources | 30% |\n| **RPC** | Research & Professional Practice | 30% |\n| **GO** | Graduation Outcomes | 20% |\n| **OI** | Outreach & Inclusivity | 10% |\n| **PR** | Public Perception | 10% |`,
        },
      },
      {
        sectionId: "nirf-categories",
        title: "NIRF Categories",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: `SSGMCE participates in the following NIRF ranking categories:\n\n- **Engineering** – Ranks engineering colleges based on academic excellence and research output\n- **Overall** – Ranks all institutions across all disciplines and streams\n- **Management** – Ranks institutions offering management education (MBA/MMS programmes)\n- **Innovation** – Ranks institutions based on innovation, start-ups, and Intellectual Property Rights activities`,
        },
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
//  ACADEMICS
// ──────────────────────────────────────────────────────────────
const academicsPages = [
  {
    pageId: "academics-planner",
    pageTitle: "Academics Planner & Calendar",
    pageDescription: "Academics Planner & Calendar",
    route: "/academics/planner",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "planner-intro",
        title: "Academic Planner & Calendar",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The academic calendar ensures a balanced schedule for students and faculty. It includes dates for commencement of classes, internal assessments, university examinations, and holidays. Download the academic calendar and planner for each session below.\n\n## 2025–26\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/Academic%20Calendar%20(B.E.)%202025-26.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Planner%202025-26.pdf)\n\n## 2024–25\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar_BE_2024-25_04-03-25.pdf)\n- [Academic Calendar – M.B.A. (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202024-25-Autumn%20(1).pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/FIN%20Academic_Planner_2024-2025-13-125.pdf)\n\n## 2023–24\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(B.E.)%202023-24%20(23-2-24)%20(2).pdf)\n- [Academic Calendar – M.B.A. (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202023-24_Autumn.pdf)\n- [Academic Calendar – M.B.A. (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202023-24_Spring.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/Rev.%20Academic%20Planner%202023-24%20Ap-24S.pdf)\n\n## 2022–23\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(B.E.)%202022-23.pdf)\n- [Academic Calendar – M.B.A. (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202022-23_Autumn.pdf)\n- [Academic Calendar – M.B.A. (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202022-23_Spring.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/REVISED%20Academic_Planner_2022-2023%20---Mar23.pdf)\n\n## 2021–22\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%202021-22.pdf)\n- [Academic Calendar – First Year (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Autumn-2020-21%5B408%5D.pdf)\n- [Academic Calendar – First Year (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Spring-2020-21%5B407%5D.pdf)\n- [Academic Calendar – M.B.A. (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202021-22_Autumn.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/Academic_Planner_2021-2022.pdf)\n\n## 2020–21\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(B.E.)%202020-21%20(1)%5B409%5D.pdf)\n- [Academic Calendar – First Year (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Autumn-2020-21.pdf)\n- [Academic Calendar – First Year (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Spring-2020-21.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/Academic_Planner_2020-2021%20AUG20%20FIN%20JAN%202021-ok.pdf)\n\n## 2019–20\n- [Academic Calendar (B.E.)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(B.E.)%202019-20%5B314%5D.pdf)\n- [Academic Calendar – First Year (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Autumn-2019-20%5B313%5D.pdf)\n- [Academic Calendar – First Year (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20FYBE%20Spring-2019-20%5B312%5D.pdf)\n- [Academic Calendar – M.B.A. (Autumn Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202019-20-Autumn.pdf)\n- [Academic Calendar – M.B.A. (Spring Semester)](https://www.ssgmce.ac.in/uploads/pdf/Academic%20Calendar%20(MBA)%202019-20-Spring.pdf)\n- [Academic Planner](https://www.ssgmce.ac.in/uploads/pdf/Academic_Planner_2019-2020%5B311%5D.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-teaching",
    pageTitle: "Teaching Learning Process",
    pageDescription: "Teaching Learning Process",
    route: "/academics/teaching",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "teaching-content",
        title: "Teaching Learning Process",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Overview\n\nThe Teaching Learning Process at SSGMCE focuses on outcome-based education, practical exposure, and continuous improvement. It is designed to build strong fundamentals, problem-solving ability, and professional readiness through classroom teaching, lab work, and project-based learning.\n\n## Key Components\n\n- **Curriculum Delivery** — Outcome-based curriculum delivery using planned lectures, tutorials, and classroom discussions.\n- **Practical Learning** — Laboratory sessions, mini projects, and demonstrations to connect theory with application.\n- **Digital Support** — Use of ICT tools, online learning resources, and blended learning to strengthen understanding.\n- **Projects and Evaluation** — Continuous assessment through assignments, sessional tests, seminars, and project work.\n\n## Continuous Improvement\n\n- Regular academic planning and monitoring at department level.\n- Student feedback and performance-based corrective actions.\n- Integration of innovative practices to improve engagement and outcomes.\n- Alignment with university guidelines and institutional quality standards.\n\n## Official Document\n\n- [Teaching Learning Process 2022 (PDF)](/uploads/documents/academics/teaching-learning/Teaching_Learning_Process2022.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-timetable",
    pageTitle: "Central Time Table Autumn 2025-26",
    pageDescription: "Central Time Table",
    route: "/academics/timetable",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "timetable-content",
        title: "Central Time Table",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Central Time Table — Spring Semester 2025-26\n\nShri Sant Gajanan Maharaj College of Engineering, Shegaon\n\nApproved by Dean (Academics) Dr. A. U. Jawadekar & Principal Dr. S. B. Somani\n\n## Download\n\n- [Central Time Table – Autumn 2025-26 (PDF)](https://www.ssgmce.ac.in/uploads/Central%20Time%20Table-Autumn-2025-26.pdf)\n\n## Time Slot Structure\n\n### Monday – Friday (11:00 AM – 5:45 PM)\n\n| Time | Type |\n|---|---|\n| 11:00 – 12:00 | Lecture |\n| 12:00 – 1:00 | Lecture |\n| 1:00 – 1:15 | Break |\n| 1:15 – 2:15 | Lecture |\n| 2:15 – 3:15 | Lecture |\n| 3:15 – 3:45 | Recess |\n| 3:45 – 4:45 | Lecture / Lab |\n| 4:45 – 5:45 | Lecture / Lab |\n\n### Saturday (8:30 AM – 12:45 PM)\n\n| Time | Type |\n|---|---|\n| 8:30 – 9:30 | Lecture / Lab |\n| 9:30 – 10:30 | Lecture / Lab |\n| 10:30 – 10:45 | Break |\n| 10:45 – 11:45 | Lecture / Lab |\n| 11:45 – 12:45 | Lecture / Lab |\n\n## Departments\n\n- **S** — Electrical Engineering (2S, 3S, 4S)\n- **R** — Computer Science & Engineering (2R, 3R, 4R)\n- **N** — Information Technology / CSE (AI&ML) (2N, 3N, 4N)\n- **U1/U2** — Electronics & Telecommunication (2U1, 3U1, 4U1, 2U2, 3U2, 4U2)\n- **M** — Mechanical Engineering (2M, 3M, 4M)\n- **1st Year** — All Branches (1R1, 1R2, 1N, 1S, 1U1, 1U2, 1M)\n- **PG** — M.E. & MBA Programs",
        },
      },
    ],
  },
  {
    pageId: "academics-rules",
    pageTitle: "Rules & Regulation",
    pageDescription: "Rules & Regulation",
    route: "/academics/rules",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "rules-content",
        title: "Rules & Regulations",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The academic activities of the Institute are scheduled in the academic planner and academic calendar at the beginning of each academic year. It is mandatory for students / faculty to strictly adhere to the academic calendar. The academic year is divided into two semesters: **Autumn Semester** (begins June) and **Spring Semester** (begins December).\n\n## Admission\n\n- The total number of UG & PG seats are as per the sanctioned intake from AICTE, New Delhi.\n- The overall process of admission to B.E., M.E. and MBA is governed by the Directorate of Technical Education (DTE), Maharashtra State, Mumbai.\n\n## Curriculum\n\nAs prescribed by **Sant Gadge Baba Amravati University, Amravati**.\n\n## Student Attendance Policy\n\nAttendance will be considered from day one. It is compulsory for all students to maintain minimum **75% attendance** otherwise he/she will be detained.\n\nActions against students in detention list:\n\n- Not eligible for internal marks based on attendance.\n- Not eligible for Academic incentive marks.\n- Not eligible for scholarship of any kind from the institute.\n- Not eligible for library facility.\n- Not eligible for industrial visit, training.\n- Parents are to be informed and called; undertaking to be submitted to respective HOD.\n- If a student fails to obey the undertaking, the student will not be permitted to attend theory and practical classes.\n\n**Leave for four lectures per subject** will be automatically granted on medical/personal reasons. No need to apply for short personal/medical leave.\n\n### Leave Application Process\n\n- For genuine leave, apply in ISO student leave format (SGM/FRM/DPT-79) available in concerned HOD office with proper document & justification.\n- Leave for NSS, NCC, etc. should be reported to the concerned In-charge who will forward the list to Dean Academic and all HODs.\n- For attendance corrections, report to concerned subject teacher within four days from the date of display of cumulative attendance.\n\n## Discipline and Conduct\n\nA student shall conform to a high standard of discipline and conduct himself within and outside the precincts of the college. For maintenance of discipline, the competent Authority appoints a Discipline (Standing) Committee each year.\n\n**Anti-Ragging Policy:** Students must not be involved directly or indirectly in any type of ragging, otherwise they will be punished as per the **Maharashtra Prohibition of Ragging Act of 1999**, resulting in suspension, expulsion from college and imprisonment.\n\nActs of Indiscipline include:\n\n- Breach of Rules and Regulations of Hostels\n- Lack of decorum, ungentlemanly conduct\n- Willful damage of college or hostel properties\n- Adoption of unfair means in examinations\n\nDisciplinary actions may include monetary fine, temporary or permanent suspension, rustication, or debarment from examinations.",
        },
      },
    ],
  },
  {
    pageId: "academics-syllabus",
    pageTitle: "Schemes and Syllabus",
    pageDescription: "Schemes and Syllabus",
    route: "/academics/syllabus",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "syllabus-content",
        title: "Schemes and Syllabus",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The curriculum follows **Sant Gadge Baba Amravati University (SGBAU)** regulations. Detailed schemes and syllabi for all branches are available below.\n\n## B.E. First Year (Applied Sciences & Humanities)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/Revised%20scheme%20for%20all%20branches-(U.G.)-Sem.%20I%20%26%20II%20-%20(Common%20for%20all%20branches).pdf)\n- [Syllabus of ASH (1st–2nd Sem)](https://www.ssgmce.ac.in/uploads/pdf/syllabus_first-year_NEP.pdf)\n- [Syllabus of ASH – Notification No. 148 of 2024](https://www.ssgmce.ac.in/uploads/pdf/Extra%20Ordinary%20Notification%20No.%20148%20of%202024_first_year.pdf)\n\n## B.E. (Computer Science & Engineering)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(CSE%2C%20CS-DS%2C%20KE%2C%20AIDS)%20-%20(Scheme%20)%20-%20Sem.%20III%20to%20VIII%20-%20NEP_scheme.pdf)\n- [Syllabus Second Year (3rd & 4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(CSE%2C%20CS-DS%2C%20KE%2C%20AIDS)%20-%20(Core%20Syllabus)%20-%20Sem.%20IIII%20%26%20IV%20-%20NEP.pdf)\n- [Syllabus Third Year (5th & 6th Sem)](https://www.ssgmce.ac.in/uploads/pdf/Syllabus-CSE-Third%20Year-5th-6th%20Sem.pdf)\n- [Syllabus Final Year (7th & 8th Sem)](https://www.ssgmce.ac.in/uploads/pdf/CSE-BE-Sem-7-8-Syllabus-Notifn-No.-68-of-2022.pdf)\n- [M.E. (Computer Engineering) Scheme & Syllabus](https://www.ssgmce.ac.in/uploads/pdf/Scheme-Syllabus-M.E.%20(Computer%20Engineering).pdf)\n\n## B.E. (Electrical Engineering)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20Elect.%20Engg.%20(Electronics%20%26%20Power)%20-%20(Scheme)%20-%20Sem.%20III%20to%20VIII%20-%20NEP-scheme.pdf)\n- [Syllabus Second Year (3rd Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20Elect.%20Engg.%20(Electronics%20and%20Power)%20-%20(Syllabus)%20-%20Sem.%20III%20-%20NEP.pdf)\n- [Syllabus Second Year (4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20Elect.%20Engg.%20%20(Electronics%20and%20Power)%20-%20(Syllabus)%20-%20Sem.%20IV%20-%20NEP.pdf)\n- [Syllabus Third Year (5th & 6th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/SGBAU_CBCS-Syllabus_V_VI_Sem_BE_ELPO_wef_2021-22.pdf)\n- [Syllabus Final Year (7th & 8th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/SGBAU_CBCS-Syllabus_VII_VIII_Sem_BE_ELPO_wef_2022-23.pdf)\n\n## B.E. (Electronics & Telecommunication)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Elect.%20%26%20Tele.)%20-%20(Scheme)%20-%20Sem.%20III%20to%20VIII%20-%20NEP_scheme.pdf)\n- [Syllabus Second Year (3rd Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Elect.%20%26%20Tele.)%20-%20(Syllabus)%20-%20Sem.%20III%20-%20NEP.pdf)\n- [Syllabus Second Year (4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Elect.%20%26%20Tele.)%20-%20(Syllabus)%20-%20Sem.%20IV%20-%20NEP.pdf)\n- [Syllabus Third Year (5th & 6th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/Extc%20Engg%20BE%20Sem%205%2C6%20%26%207%20Open%20Electivce%20Subjects.pdf)\n- [Syllabus Final Year (7th & 8th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/Final%20Draft%20VII_VIII%20sem%20Syllabus.pdf)\n- [M.E. (Digital Electronics) Scheme & Syllabus](https://www.ssgmce.ac.in/uploads/pdf/schemes/Scheme-ME%20(DIGITAL)%20(FULL%20TIME).pdf)\n\n## B.E. (Information Technology)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Information%20Tech.%20)%20-%20(Scheme)%20-%20Sem.%20III%20to%20VIII%20-%20NEP_scheme.pdf)\n- [Syllabus Second Year (3rd Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Information%20Tech.%20)%20-%20(Syllabus)%20-%20Sem.%20III%20-%20NEP.pdf)\n- [Syllabus Second Year (4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Information%20Tech.%20)%20-%20(Syllabus)%20-%20Sem.%20IV%20-%20NEP.pdf)\n- [Syllabus Third Year (5th & 6th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/3N%20Syllabus%5B385%5D.pdf)\n- [Syllabus Final Year (7th & 8th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/4N%20Syllabus%5B386%5D.pdf)\n\n## B.E. (Mechanical Engineering)\n- [NEP Scheme](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Mech%20Engg)%20-%20(Scheme)%20-%20Sem.%20III%20to%20VIII%20-%20NEP-scheme.pdf)\n- [Syllabus Second Year (3rd & 4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/B.E.%20(Mech%20Engg)%20-%20(Syllabus)%20-%20Sem.%20III%20to%20VIII%20-%20NEP.pdf)\n- [Syllabus Third Year (5th & 6th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/3rd%20Year%20BE%20MECH%205-6%20Sem.%20Syllabus.pdf)\n- [Syllabus Final Year (7th & 8th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/4th%20Year%20BE%20MECH%207-8%20Sem.%20Syllabus.pdf)\n- [M.E. (Advanced Manufacturing & Mechanical Systems Design)](https://www.ssgmce.ac.in/uploads/pdf/schemes/MECH%20PG%20SCHEME%20AND%20SYLLABUS.pdf)\n\n## M.B.A.\n- [MBA Scheme](https://www.ssgmce.ac.in/uploads/pdf/schemes/MBA_Scheme__New__Direction_No._81_of_2022.pdf)\n- [Syllabus First Year (1st & 2nd Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/MBA%20New%20Syllabus%20of%20SEM%20I%20%26%20II%202022-23%20onwards.pdf)\n- [Syllabus Second Year (3rd Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/MBA%20SEM-III%20PROPOSED%20SYLLABUS-2023.pdf)\n- [Syllabus Second Year (4th Sem)](https://www.ssgmce.ac.in/uploads/pdf/schemes/MBA%20SEM-IV%20PROPOSED%20SYLLABUS-2023.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-incentive",
    pageTitle: "Incentive Marks Scheme",
    pageDescription: "Incentive Marks Scheme",
    route: "/academics/incentive",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "incentive-content",
        title: "Incentive Marks Scheme",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Guideline for Incentive Marks (Institute Level)\n\nDate: 18/03/2024\n\nAll students are hereby informed that incentive marks will be awarded for the following activities:\n\n## R&D Activities\n\n| Activity | Incentive Marks |\n|---|---|\n| Paper presentation in reputed conferences (IEEE, IETE, etc.) | 1 Mark/subject |\n| SCI Journal publication | 5 Marks/subject |\n| Scopus / Web of Science indexed journals | 3 Marks/subject |\n| Peer reviewed journals | 1 Mark/subject |\n| Prize winner in project competition at IITs/NITs/International programs | 2 Marks/subject |\n| Industrial Consultancy – Revenue ≥ Rs. 1 Lac | 5 Marks/subject |\n| Industrial Consultancy – Revenue Rs. 50K to 1 Lac | 3 Marks/subject |\n| Patent filing | 5 Marks/subject |\n| Workshop conducted by students (1 week and above) | 2 Marks/subject |\n\n## GATE Exam\n\n| Activity | Incentive Marks |\n|---|---|\n| Valid GATE Score | 3 Marks/subject |\n\n## MOOC/NPTEL Courses\n\n| Course Duration | Incentive Marks |\n|---|---|\n| Up to 1 week | 1 Mark/subject |\n| More than 1 week, up to 2 weeks | 2 Marks/subject |\n| More than 2 weeks | 3 Marks/subject |\n\n## Sports Activity\n\n| Activity | Incentive Marks |\n|---|---|\n| University color holder | 3 Marks/subject |\n| Participation in University/State/National tournaments | 1 Mark/subject |\n\n## NCC/NSS\n\n| Activity | Incentive Marks |\n|---|---|\n| Participation in National Republic Day Parade | 3 Marks/subject (Annually) |\n| Participation in National level camps | 2 Marks/subject |\n\n## Official Document\n\n- [Incentive Marks Scheme 2023-24 (PDF)](https://www.ssgmce.ac.in/uploads/Incentive_Marks_Scheme-2023-24.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-marks",
    pageTitle: "Sessional Marks Evaluations Scheme",
    pageDescription: "Sessional Marks Evaluations Scheme",
    route: "/academics/marks",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "marks-content",
        title: "Sessional Marks Evaluation",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Sessional Marks Evaluation Scheme for UG/PG: Session 2025-26 & Onward\n\nDate: 21/07/2025\n\nThe theory internal marks for each course will be evaluated as per the table below:\n\n## UG: B.E. (1st, 2nd, 3rd & 4th Year)\n\nTwo Class Tests (CT) and Assignment (TEC: Teacher Evaluation Component)\n\n| S.N. | Item | Duration | Marks (CBCS out of 20) | Marks (NEP out of 40) |\n|---|---|---|---|---|\n| 01 | Class Test I & II | 1 Hr each | 60/6 = 10 | 60/3 = 20 |\n| 02 | TEC (any one per student/subject) | Throughout semester | 30/6 = 05 | 30/3 = 10 |\n| 03 | Attendance (95–100%: 5, 90–94.99%: 4, 85–89.99%: 3, 80–84.99%: 2, 75–79.99%: 1, <75%: 0) | Throughout semester | 05 | 10 |\n\n## Download\n\n- [Sessional Marks Evaluation Scheme 2025-26 (PDF)](https://www.ssgmce.ac.in/uploads/Sessional%20Marks%20Evaluations%20scheme%20for%20UG-%20PG%20Session-2025-2026.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-rubrics",
    pageTitle: "Rubrics",
    pageDescription: "Rubrics",
    route: "/academics/rubrics",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "rubrics-content",
        title: "Rubrics",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Rubrics for Theory, Laboratory, Project & Seminar\n\nThe following rubrics define the evaluation criteria for **Theory**, **Laboratory**, **Project**, and **Seminar** internal assessments for **Session 2024-25**, effective from **01 July 2024**. These rubrics ensure transparent, consistent, and fair evaluation across all departments.\n\n## Theory Internal Evaluation (Total: 20 Marks)\n\n| Item | Duration | Evaluation Scale | Weightage (out of 20) |\n|---|---|---|---|\n| Class Test I & Class Test II | 1 Hr each | 30 marks, 2 Units each | 10 |\n| Teacher Evaluation Component (TEC) | Throughout semester | 30 marks, any one TEC per student/subject | 05 |\n| Attendance | Throughout semester | 95–100%: 5, 90–94.99%: 4, 85–89.99%: 3, 80–84.99%: 2, 75–79.99%: 1, <75%: 0 | 05 |\n\n## Lab Evaluation (Per Session: 10 Marks)\n\n| Parameter | Max | High | Medium | Low |\n|---|---|---|---|---|\n| R1 – Conduction of Experiment | 5 | Conducted with calculations & result (4–5) | Conducted but calculations incomplete (2–3) | Not conducted (0) |\n| R2 – Record Writing | 3 | Neat, clean & complete (2–3) | Incomplete (1) | Not submitted (0) |\n| R3 – Viva | 2 | Correct answers (2) | Partial answers (1) | No answer (0) |\n\n## Download\n\n- [Rubrics 2024-25 – Theory, Lab, Project & Seminar (PDF)](https://www.ssgmce.ac.in/uploads/Rubrics%20for%20Theory%20Laboratory%20Project%20%26%20Seminar%202024-25-for%20Website.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-innovative",
    pageTitle: "Innovative Practices in Teaching & Learning",
    pageDescription: "Innovative Practices",
    route: "/academics/innovative",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "innovative-content",
        title: "Innovative Practices",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Innovative Practices in Teaching and Learning\n\n**Innovation** is an essential component for success. Globalization and rapid technical changes in the education sector have created a need for change in teaching style which leads to continuous innovation. The use of innovative methods in educational institutes has the potential not only to improve education, but also empower people and mobilize the effort to produce skilled engineers.\n\n## Objectives\n\nThe following innovative practices are initiated and implemented by the faculty for students to learn in a better manner.\n\n## Innovative Practices Implemented at SSGMCE\n\n| S.N. | Innovative Practice | Context/Methodology | Impact/Outcome |\n|---|---|---|---|\n| 1 | Moodle Access | Learning platform for teachers and students; online tests, quizzes, resource sharing | Helps students share concepts at their own pace; enables online assessments |\n| 2 | Content-based Question Making | Students develop question banks based on topics | Enhances creative thinking, critical thinking, and problem-solving skills |\n| 3 | Multimedia | Presentations, videos, animations | Motivates students for effective learning |\n| 4 | Power Point Presentation | Visual presentations with media | Enhances comprehension especially for visual learners |\n| 5 | Educational Videos | Real-life scenario exposure | Develops scientific knowledge |\n| 6 | Animations | Complex ideas visualized via animations | Creates interest in complex engineering problems |\n| 7 | Simulated Software-Based Learning | MATLAB, SPICE, Multisim, XILINX, AutoCAD, ANSYS, LabVIEW | Exposes students to real engineering problems |\n| 8 | E-based Learning | NPTEL, online resources, self-study | Enables access to education independent of geographical barriers |\n| 9 | Role-Playing | Interactive realistic situations | Develops critical thinking and cultural diversity skills |\n| 10 | Brainstorming / PBL | Group problem-solving, industry-guided projects | Enhances out-of-the-box thinking and innovative skills |\n| 11 | Project Based Learning | Mini/major projects, product development | Inculcates self-learning and industrial problem-solving skills |\n| 12 | Field Survey / Case Studies | Real-world engineering problem analysis | Enhances creative thinking and learning motivation |\n| 13 | Industrial Visit / Field Work | Exposure to industrial methods and technologies | Enhances communication, writing, and professional skills |\n| 14 | Designing Tutorials | Topic-based interactive tutorials | Enhances intellectual and communication skills |\n| 15 | Designing Quizzes | MCQs and calculation-based quizzes | Enhances critical thinking and subject knowledge |\n| 16 | Group Discussion | Topic discussions among classmates | Develops interpersonal communication and expression skills |\n\n## Official Document\n\n- [Innovative Practices in Teaching & Learning (PDF)](https://www.ssgmce.ac.in/uploads/Innovative%20Practice%20in%20teaching%20%26%20learning.pdf)",
        },
      },
    ],
  },
  {
    pageId: "academics-notices",
    pageTitle: "Notice for Students",
    pageDescription: "Student Notices",
    route: "/academics/notices",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "notice-intro",
        title: "NOTICE FOR STUDENTS",
        type: "richtext",
        order: 1,
        isVisible: true,
        content: {
          text: "<p><strong>Date:</strong> 09/07/2025</p><p>All the students are hereby informed to note the following points related to <strong>attendance:</strong></p>",
        },
      },
      {
        sectionId: "attendance-policy",
        title: "Attendance Rules",
        type: "accordion",
        order: 2,
        isVisible: true,
        content: {
          accordionItems: [
            {
              itemId: "attendance-rule-1",
              title: "1. Attendance Policy",
              content:
                "Attendance will be considered from day one of commencement of classes. It is compulsory for all students to maintain minimum 75% attendance otherwise he/she will be detained. Actions likely to be taken: Not eligible for internal marks based on attendance. Not eligible for incentive marks. Not eligible for scholarship of any kind from the institute. Not eligible for library facility. Not eligible for industrial visit, internship, & training. Parents will be informed and called. Undertaking to be submitted to respective HOD. If student fails to obey the undertaking, will not be permitted to attend classes.",
              order: 0,
            },
            {
              itemId: "attendance-rule-2",
              title: "2. Leave Policy",
              content:
                "Leave for four lectures per subject will be automatically granted on medical/personal reasons. These four lectures will be subtracted from the total attendance at the end of session for all students irrespective of whether they have availed the leave or not.",
              order: 1,
            },
            {
              itemId: "attendance-rule-3",
              title: "3. Leave Application",
              content:
                "In case of genuine leave, student needs to apply in the student leave format (SSGMCE/FRM/DPT-79) available in concern HOD office with proper document & justification. Lateral leave application will not be considered.",
              order: 2,
            },
            {
              itemId: "attendance-rule-4",
              title: "4. Special Activities Reporting",
              content:
                "Leave for NSS, NCC, & Internship etc. should be reported to the concern In-charge/HOD. The in-charge/HOD will forward the final list to the Dean Academics.",
              order: 3,
            },
            {
              itemId: "attendance-rule-5",
              title: "5. Attendance Correction",
              content:
                "In case of any correction in attendance, student should report to concern subject teacher within four days from the date of display of consolidated cumulative attendance.",
              order: 4,
            },
          ],
        },
      },
      {
        sectionId: "signatures",
        title: "Authorized By",
        type: "text",
        order: 3,
        isVisible: true,
        content: { text: "Dean (Academics) / Principal" },
      },
    ],
  },
  {
    pageId: "academics-reports",
    pageTitle: "Annual Reports",
    pageDescription: "Annual Reports",
    route: "/academics/reports",
    category: "academics",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "reports-content",
        title: "Annual Reports",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "## Annual Reports\n\nThe Annual Report of Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon, documents the progress, achievements, and developments across academics, research, student activities, infrastructure, and governance. Download the reports for each year below.\n\n## Annual Reports\n\n- [Annual Report 2023-24](https://www.ssgmce.ac.in/uploads/AnnualReport2023-24.pdf)\n- [Annual Report 2022-23](https://www.ssgmce.ac.in/uploads/AnnualReport2022-23.pdf)\n- [Annual Report 2021-22](https://www.ssgmce.ac.in/uploads/AnnualReport2021-22.pdf)\n- [Annual Report 2020-21](https://www.ssgmce.ac.in/uploads/AnnualReport2020-21.pdf)\n- [Annual Report 2019-20](https://www.ssgmce.ac.in/uploads/AnnualReport2019-20.pdf)\n- [Annual Report 2018-19](https://www.ssgmce.ac.in/uploads/AnnualReport2018-19.pdf)",
        },
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
//  ADMISSIONS
// ──────────────────────────────────────────────────────────────
const admissionsPages = [
  {
    pageId: "admissions-ug",
    pageTitle: "Under-Graduate Program (B.E.)",
    pageDescription: "UG Admissions",
    route: "/admissions/ug",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "eligibility",
        title: "Eligibility Criteria (First Year)",
        type: "list",
        order: 1,
        isVisible: true,
        content: {
          items: [
            "Passed 12th/HSC examination with Physics and Mathematics as compulsory subjects",
            "Third subject: Chemistry OR Biotechnology OR Biology OR Technical Vocational subject",
            "Obtained at least 45% marks (40% for reserved category) in PCM/PCB subjects taken together",
            "Obtained at least 50% marks (45% for reserved category) for TFWS candidates",
            "Valid MHT-CET or JEE Main score",
            "Domicile of Maharashtra (for Maharashtra State Quota)",
            "Age: No upper age limit as per AICTE norms",
          ],
        },
      },
      {
        sectionId: "seat-matrix",
        title: "Seat Matrix",
        type: "table",
        order: 2,
        isVisible: true,
        content: {
          headers: ["Branch", "Code", "Intake"],
          rows: [
            ["Computer Science & Engineering", "CSE", "120"],
            ["Information Technology", "IT", "60"],
            ["Mechanical Engineering", "MECH", "120"],
            ["Electrical Engineering (E&P)", "ELEC", "60"],
            ["Electronics & Telecommunication", "EnTC", "60"],
            ["Civil Engineering", "CIVIL", "60"],
          ],
        },
      },
      {
        sectionId: "fee-structure",
        title: "Fee Structure",
        type: "table",
        order: 3,
        isVisible: true,
        content: {
          headers: ["Category", "Tuition", "Dev Fee", "Other", "Total"],
          rows: [
            ["General/Open/EWS", "₹83,000", "₹5,000", "₹2,000", "₹90,000"],
            ["TFWS", "₹0", "₹5,000", "₹2,000", "₹7,000"],
            ["SC/ST/VJ/NT/OBC/SBC", "₹5,000", "₹5,000", "₹2,000", "₹12,000"],
          ],
        },
      },
      {
        sectionId: "admission-process",
        title: "FE Admission Process",
        type: "timeline",
        order: 4,
        isVisible: true,
        content: {
          events: [
            {
              year: "Step 1",
              title: "Register for MHT-CET / JEE Main",
              description:
                "Appear for MHT-CET or JEE Main examination (April - May)",
            },
            {
              year: "Step 2",
              title: "CAP Round Registration",
              description:
                "Register for CAP on DTE Maharashtra portal (After CET results)",
            },
            {
              year: "Step 3",
              title: "Fill Preferences",
              description:
                "Fill college and branch preferences in order of priority",
            },
            {
              year: "Step 4",
              title: "CAP Rounds (3 Rounds)",
              description: "Seat allotment based on merit (July - August)",
            },
            {
              year: "Step 5",
              title: "Document Verification",
              description:
                "Report to SSGMCE with original documents within 2-3 days",
            },
            {
              year: "Step 6",
              title: "Fee Payment",
              description:
                "Pay admission fees online or at the college to confirm seat",
            },
            {
              year: "Step 7",
              title: "Admission Confirmation",
              description:
                "Submit all documents, receive confirmation (August - September)",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "admissions-pg",
    pageTitle: "Post-Graduate Program (PG)",
    pageDescription: "PG Admissions",
    route: "/admissions/pg",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-dse",
    pageTitle: "Direct Second Year Engineering (DSE)",
    pageDescription: "DSE Admissions",
    route: "/admissions/dse",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-mba",
    pageTitle: "MBA Program",
    pageDescription: "MBA Admissions",
    route: "/admissions/mba",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-phd",
    pageTitle: "Ph. D. Program",
    pageDescription: "PhD Admissions",
    route: "/admissions/phd",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-brochure",
    pageTitle: "Institute Brochure",
    pageDescription: "Institute Brochure",
    route: "/admissions/brochure",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-fees",
    pageTitle: "Fee Structure",
    pageDescription: "Fee Structure",
    route: "/admissions/fees",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-process",
    pageTitle: "Admission Process",
    pageDescription: "Step-by-step Admission Process",
    route: "/admissions/process",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-seat-matrix",
    pageTitle: "Seat Matrix",
    pageDescription: "Seat Availability Matrix",
    route: "/admissions/seat-matrix",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-documents",
    pageTitle: "Documents Required",
    pageDescription: "Documents Required for Admission",
    route: "/admissions/documents",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-scholarships",
    pageTitle: "Scholarships",
    pageDescription: "Scholarship Information",
    route: "/admissions/scholarships",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-faqs",
    pageTitle: "FAQs",
    pageDescription: "Admissions Frequently Asked Questions",
    route: "/admissions/faqs",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-contact",
    pageTitle: "Contact Admission Office",
    pageDescription: "Admission Office Contact Details",
    route: "/admissions/contact",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
];

// ──────────────────────────────────────────────────────────────
//  RESEARCH & INNOVATION
// ──────────────────────────────────────────────────────────────
const researchPages = [
  {
    pageId: "research-rdc",
    pageTitle: "Research and Development Cell (RDC)",
    pageDescription: "R&D Cell",
    route: "/research/rdc",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-rdc"],
  },
  {
    pageId: "research-policy",
    pageTitle: "Research Policy Document",
    pageDescription: "Research Policy",
    route: "/research/policy",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-policy"],
  },
  {
    pageId: "research-coe",
    pageTitle: "Center of Excellence",
    pageDescription: "Center of Excellence",
    route: "/research/coe",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-coe"],
  },
  {
    pageId: "research-phd",
    pageTitle: "Research Centre for Ph.D. Work",
    pageDescription: "PhD Research Centre",
    route: "/research/phd",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-phd"],
  },
  {
    pageId: "research-publications",
    pageTitle: "Publications",
    pageDescription: "Publications",
    route: "/research/publications",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-publications"],
  },
  {
    pageId: "research-ipr",
    pageTitle: "IPR (Patents + Copyrights)",
    pageDescription: "IPR",
    route: "/research/ipr",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-ipr"],
  },
  {
    pageId: "research-ug-projects",
    pageTitle: "UG Projects",
    pageDescription: "UG Projects",
    route: "/research/ug-projects",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-ug-projects"],
  },
  {
    pageId: "research-collaboration",
    pageTitle: "Collaboration",
    pageDescription: "Collaboration",
    route: "/research/collaboration",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-collaboration"],
  },
  {
    pageId: "research-iic",
    pageTitle: "IIC",
    pageDescription: "Institution Innovation Council",
    route: "/research/iic",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-iic"],
  },
  {
    pageId: "research-nisp",
    pageTitle: "NISP",
    pageDescription: "National Innovation and Startup Policy",
    route: "/research/nisp",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-nisp"],
  },
  {
    pageId: "research-sabbatical",
    pageTitle: "Sabbatical Training",
    pageDescription: "Sabbatical Training",
    route: "/research/sabbatical",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: researchMarkdownPages["research-sabbatical"],
  },
];

// ──────────────────────────────────────────────────────────────
//  FACILITIES
// ──────────────────────────────────────────────────────────────
const facilitiesPages = [
  {
    pageId: "facilities-administrative-office",
    pageTitle: "Administrative Office",
    pageDescription: "Administrative Office",
    route: "/facilities/administrative-office",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "About Administrative Office",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The Administrative Office at SSGMCE serves as the backbone of all academic and non-academic operations. Our dedicated team ensures smooth functioning of admissions, examinations, accounts, student services, and general administration.",
        },
      },
      {
        sectionId: "departments",
        title: "Administrative Departments & Services",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Department | Services Provided | Office Hours | Contact |\n| --- | --- | --- | --- |\n| Principal's Office | Overall administration, policy decisions, grievance redressal | Mon-Sat 10 AM - 5 PM | Ext: 101, principal@ssgmce.ac.in |\n| Admission Cell | Student admissions, document verification, counseling | Mon-Sat 9 AM - 6 PM | Ext: 102, admission@ssgmce.ac.in |\n| Examination Cell | Exam schedules, hall tickets, result processing, revaluation | Mon-Sat 9 AM - 5 PM | Ext: 103, exam@ssgmce.ac.in |\n| Accounts Section | Fee payment, receipts, refunds, scholarship processing | Mon-Sat 10 AM - 4 PM | Ext: 104, accounts@ssgmce.ac.in |",
        },
      },
      {
        sectionId: "services",
        title: "Key Services for Students",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "### Certificate Issuance\n- Bonafide Certificate\n- Character Certificate\n- Transfer Certificate (TC)\n- Migration Certificate\n- Marksheet Duplicates\n\n### Fee & Financial Services\n- Online Fee Payment\n- Fee Receipts\n- No Dues Certificate\n- Refund Processing\n- Scholarship Application\n\n### Examination Services\n- Hall Ticket Download\n- Exam Form Submission\n- Revaluation Applications\n- Transcript Issuance\n- Grade Cards\n\n### General Administration\n- ID Card Issuance\n- Library Card\n- Bus Pass\n- Hostel Allotment\n- Grievance Redressal",
        },
      },
      {
        sectionId: "contact",
        title: "Contact Administrative Office",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "### Phone Directory\n- **Main Reception:** +91-7265-252274\n- **Principal's Office:** +91-7265-252279\n- **Admission Cell:** +91-7265-252274 (Ext: 102)\n- **Accounts:** +91-7265-252274 (Ext: 104)\n\n### Email Directory\n- **General Queries:** info@ssgmce.ac.in\n- **Admissions:** admission@ssgmce.ac.in\n- **Examinations:** exam@ssgmce.ac.in\n- **Accounts:** accounts@ssgmce.ac.in",
        },
      },
    ],
  },
  {
    pageId: "facilities-library",
    pageTitle: "Central Library",
    pageDescription: "Central Library",
    route: "/facilities/library",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "About Central Library",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The Central Library at SSGMCE is the intellectual hub of the campus, housing an extensive collection of books, journals, and digital resources. With state-of-the-art facilities and a dedicated team, we provide an ideal environment for academic excellence and research.",
        },
      },
      {
        sectionId: "stats",
        title: "Library at a Glance",
        type: "stats",
        order: 2,
        isVisible: true,
        content: {
          stats: [
            { label: "Volumes of Books", value: "85,000+", color: "blue" },
            { label: "Journals & Magazines", value: "150+", color: "orange" },
            { label: "Digital Workstations", value: "50+", color: "blue" },
            { label: "Daily Access", value: "18 Hours", color: "orange" },
          ],
        },
      },
      {
        sectionId: "collection",
        title: "Library Collection",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "| Category | Count | Details |\n| --- | --- | --- |\n| Text Books | 50,000+ | All engineering disciplines & management |\n| Reference Books | 15,000+ | Encyclopedia, handbooks, dictionaries |\n| Technical Journals | 100+ | IEEE, Springer, Elsevier, etc. |\n| E-Books | 20,000+ | Digital access via subscribed platforms |\n| Project Reports | 5,000+ | Student project archives |\n| Newspapers & Magazines | 50+ | Daily newspapers & monthly magazines |",
        },
      },
      {
        sectionId: "digital-resources",
        title: "Digital Library Resources",
        type: "cards",
        order: 4,
        isVisible: true,
        content: {
          cards: [
            {
              title: "IEEE Xplore",
              description: "Access to 5+ million technical documents",
              color: "blue",
            },
            {
              title: "ScienceDirect",
              description: "Elsevier platform with 16M+ publications",
              color: "orange",
            },
            {
              title: "Springer Link",
              description: "Scientific journals, books & reference works",
              color: "blue",
            },
            {
              title: "NPTEL",
              description: "Video lectures & course materials",
              color: "orange",
            },
            {
              title: "DELNET",
              description: "Developing Library Network consortium",
              color: "blue",
            },
            {
              title: "INFLIBNET",
              description: "Information & Library Network Centre",
              color: "orange",
            },
          ],
        },
      },
      {
        sectionId: "services",
        title: "Services & Facilities",
        type: "markdown",
        order: 5,
        isVisible: true,
        content: {
          text: "### 📚 Book Lending\n- Students can borrow up to 3 books for 14 days\n- Faculty can borrow up to 10 books for 30 days\n- Easy renewal process available online\n\n### 💻 OPAC System\n- Online Public Access Catalog\n- Search books by title, author, or subject\n- Check availability in real-time\n\n### 📖 Book Bank Scheme\n- For economically weaker students\n- Complete semester book set provided\n- Based on merit and need\n\n### 🏛️ Reading Hall\n- Seating capacity: 400+ students\n- Air-cooled environment\n- Open 6 AM to 12 Midnight (18 hours)",
        },
      },
      {
        sectionId: "timings",
        title: "Library Timings",
        type: "markdown",
        order: 6,
        isVisible: true,
        content: {
          text: "| Day | Circulation Section | Reading Hall |\n| --- | --- | --- |\n| Monday - Saturday | 8:30 AM - 5:30 PM | 6:00 AM - 12:00 Midnight |\n| Sunday & Holidays | Closed | 6:00 AM - 12:00 Midnight |\n| Exam Days | 9:00 AM - 4:00 PM | 24 Hours |",
        },
      },
    ],
  },
  {
    pageId: "facilities-computing",
    pageTitle: "Central Computing Facility",
    pageDescription: "Central Computing Facility",
    route: "/facilities/computing",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "About Central Computing Facility",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The Central Computing Facility at SSGMCE provides state-of-the-art computing infrastructure to support academic, research, and administrative activities. With high-performance systems, high-speed internet, and licensed software, we empower students and faculty to excel in their technical pursuits.",
        },
      },
      {
        sectionId: "stats",
        title: "Computing at a Glance",
        type: "stats",
        order: 2,
        isVisible: true,
        content: {
          stats: [
            { label: "Computer Systems", value: "500+", color: "blue" },
            { label: "Internet Bandwidth", value: "1 Gbps", color: "orange" },
            { label: "Server Uptime", value: "24/7", color: "blue" },
            { label: "Computer Labs", value: "30+", color: "orange" },
          ],
        },
      },
      {
        sectionId: "labs",
        title: "Department-wise Computer Labs",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "| Department | No. of Labs | Total Systems | Key Software |\n| --- | --- | --- | --- |\n| Computer Science & IT | 12 | 200+ | VS Code, Eclipse, Android Studio, MATLAB, Python |\n| Mechanical Engineering | 5 | 70+ | AutoCAD, CATIA, SolidWorks, ANSYS, MATLAB |\n| Electrical Engineering | 4 | 60+ | MATLAB, LabVIEW, PSCAD, ETAP, PLC Programming |\n| Electronics & Telecom | 5 | 70+ | Xilinx, Cadence, MATLAB, Proteus, Keil µVision |\n| Civil Engineering | 3 | 50+ | AutoCAD, STAAD Pro, Primavera, ArcGIS, ETABS |\n| **Total** | **31** | **500+** | |",
        },
      },
      {
        sectionId: "software",
        title: "Licensed Software & Tools",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "### Programming & Development\n- Visual Studio, Eclipse, IntelliJ IDEA, Android Studio, PyCharm\n\n### CAD/CAM/CAE\n- AutoCAD, CATIA V5, SolidWorks, ANSYS, CREO Parametric\n\n### Simulation & Analysis\n- MATLAB, Simulink, LabVIEW, PSPICE, Multisim\n\n### VLSI & Embedded\n- Xilinx ISE, Cadence, Keil µVision, MPLAB, Proteus\n\n### Structural Analysis\n- STAAD Pro, ETABS, SAP2000, Primavera, MS Project\n\n### Business & Analytics\n- MS Office Suite, SPSS, Tally ERP 9, SAP, Power BI",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostels",
    pageTitle: "Hostels",
    pageDescription: "Hostel Facilities",
    route: "/facilities/hostels",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "Campus Living at SSGMCE",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "SSGMCE provides a **\"Home Away from Home\"** experience for students. Our hostels are designed to foster a sense of community, discipline, and security, situated in a lush green, pollution-free environment. With modern amenities and round-the-clock supervision, we ensure students can focus on their studies while enjoying comfortable accommodation.\n\n### Boys Hostel\nSpacious rooms with modern amenities, common study areas, and a well-maintained mess facility. **Capacity: 600+ Students**\n\n### Girls Hostel\nSafe and secure accommodation with dedicated warden, modern facilities, and nurturing environment. **Capacity: 600+ Students**",
        },
      },
      {
        sectionId: "stats",
        title: "Hostel at a Glance",
        type: "stats",
        order: 2,
        isVisible: true,
        content: {
          stats: [
            { label: "Total Capacity", value: "1200+", color: "blue" },
            { label: "Hostel Blocks", value: "2", color: "orange" },
            { label: "Security & Support", value: "24/7", color: "blue" },
            { label: "Wi-Fi Coverage", value: "100%", color: "orange" },
          ],
        },
      },
      {
        sectionId: "amenities",
        title: "Hostel Amenities",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "- **High-speed Wi-Fi** — 24/7 connectivity\n- **Power Backup** — 100% backup supply\n- **RO Water** — Purified drinking water\n- **Hygienic Mess** — Nutritious meals\n- **Gymnasium** — Modern fitness center\n- **Medical Facility** — 24/7 dispensary\n- **CCTV Security** — Round-the-clock monitoring\n- **Common Room** — TV & indoor games",
        },
      },
      {
        sectionId: "guidelines",
        title: "Hostel Guidelines",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "- Maintain discipline and follow hostel timings\n- Keep rooms and common areas clean\n- Register guests at the reception\n- Use electricity and water responsibly\n- Report any issues to warden immediately\n- Ragging is strictly prohibited",
        },
      },
      {
        sectionId: "contact",
        title: "Need More Information?",
        type: "markdown",
        order: 5,
        isVisible: true,
        content: {
          text: "Contact our Hostel Administration Office:\n- **Phone:** +91-7265-252289\n- **Email:** hostel@ssgmce.ac.in",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports",
    pageTitle: "Sports",
    pageDescription: "Sports Facilities",
    route: "/facilities/sports",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "Sports & Physical Education",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "At SSGMCE, we believe in holistic development through sports and physical activities. Our comprehensive sports facilities and trained coaches help students excel in various indoor and outdoor games, fostering teamwork, discipline, and a healthy lifestyle.",
        },
      },
      {
        sectionId: "stats",
        title: "Sports at a Glance",
        type: "stats",
        order: 2,
        isVisible: true,
        content: {
          stats: [
            { label: "Sports Activities", value: "20+", color: "blue" },
            { label: "Inter-College Medals", value: "50+", color: "orange" },
            { label: "Active Participants", value: "1500+", color: "blue" },
            { label: "Professional Coaches", value: "5", color: "orange" },
          ],
        },
      },
      {
        sectionId: "facilities",
        title: "Sports Facilities Available",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "| Sport/Activity | Type | Facilities | Coach Available |\n| --- | --- | --- | --- |\n| Cricket | Outdoor | Full-size turf pitch, practice nets, floodlights | ✅ |\n| Football | Outdoor | Grass football ground, goalposts, changing rooms | ✅ |\n| Volleyball | Outdoor | 2 courts with synthetic surface | ✅ |\n| Basketball | Outdoor | 2 courts with concrete flooring | ✅ |\n| Badminton | Indoor | 6 courts in air-cooled hall with wooden flooring | ✅ |\n| Table Tennis | Indoor | 8 professional tables with adequate lighting | ✅ |\n| Gymnasium | Indoor | Multi-gym equipment, treadmills, weights, yoga mats | ✅ |",
        },
      },
      {
        sectionId: "achievements",
        title: "Recent Achievements (2023-24)",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "- **SGBAU Inter-College Cricket Tournament** — Champions 🏆\n- **State-Level Badminton Championship** — Runner-up 🥈\n- **Zonal Football Competition** — Semi-Finalists\n- **National Table Tennis Tournament** — 3rd Place 🥉\n- **University Athletics Meet** — Gold in 100m & 200m\n- **Inter-College Volleyball League** — Champions 🏆",
        },
      },
      {
        sectionId: "contact",
        title: "Sports Department Contact",
        type: "markdown",
        order: 5,
        isVisible: true,
        content: {
          text: "**Physical Education Director:** Prof. (Name)\n- **Email:** sports@ssgmce.ac.in\n- **Office Timings:** Monday - Saturday: 9:00 AM - 5:00 PM\n- **Phone:** +91-7265-252274 (Ext: 105)",
        },
      },
    ],
  },
  {
    pageId: "facilities-other",
    pageTitle: "Other Facilities",
    pageDescription: "Other Facilities",
    route: "/facilities/other",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "Other Campus Facilities",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "SSGMCE provides a wide range of facilities to ensure a comfortable and enriching campus experience. From transportation to dining, healthcare to banking, we have everything students need for a holistic college life.",
        },
      },
      {
        sectionId: "stats",
        title: "Facilities at a Glance",
        type: "stats",
        order: 2,
        isVisible: true,
        content: {
          stats: [
            { label: "Bus Routes", value: "15+", color: "blue" },
            { label: "Cafeterias", value: "3", color: "orange" },
            { label: "Medical Facility", value: "24/7", color: "blue" },
            { label: "Wi-Fi Coverage", value: "100%", color: "orange" },
          ],
        },
      },
      {
        sectionId: "overview",
        title: "Campus Facilities Overview",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "| Facility | Details | Availability | Timings |\n| --- | --- | --- | --- |\n| Transport | 15+ bus routes covering Shegaon, Akola, Amravati, Jalgaon | Available | As per schedule |\n| Cafeteria | 3 cafeterias with hygienic food, snacks, beverages | Available | 8 AM - 8 PM |\n| Medical Center | On-campus medical center with doctor, nurse, first-aid, ambulance | 24/7 | 24 hours |\n| Stationery | On-campus stationery shop for books, stationery, instruments | Available | 9 AM - 6 PM |\n| Banking | ATM facility (SBI, Bank of Maharashtra), fee payment counter | Available | 24/7 (ATM) |\n| Wi-Fi | High-speed Wi-Fi across entire campus (1 Gbps bandwidth) | 24/7 | 24 hours |",
        },
      },
      {
        sectionId: "medical",
        title: "Medical & Healthcare",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "### On-Campus Medical Center\n- Resident Medical Officer (MBBS)\n- Trained nursing staff 24/7\n- First-aid and emergency treatment\n- Ambulance service available\n\n### Tie-ups with Hospitals\n- SSGM Rugnalaya (5 km from campus)\n- Government Hospital, Shegaon\n- Specialist doctors on call\n- Annual health check-up camps",
        },
      },
    ],
  },
  // ── Library Sub-pages ──
  {
    pageId: "facilities-library-about",
    pageTitle: "About Library",
    pageDescription: "About Central Library",
    route: "/facilities/library/about",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "Welcome to SSGMCE Central Library",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The Central Library of Shri Sant Gajanan Maharaj College of Engineering, Shegaon was established in 1983. It is centrally located and well equipped to meet the information needs of the academic community. The library has been continuously growing and now houses a comprehensive collection of books, journals, and digital resources.\n\nThe library uses SLIM 27 (Structural Library Integrated Management) software for automation and provides OPAC (Online Public Access Catalog) facility for easy searching of library resources.",
        },
      },
      {
        sectionId: "collection",
        title: "Library Collection Overview",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Resource Type | Count | Details |\n| --- | --- | --- |\n| Books (Volumes) | 92,306+ | Covering all engineering & management disciplines |\n| Titles | 30,128+ | Unique titles across all subjects |\n| E-Journals | 1,907 | Through DELNET and other subscriptions |\n| Print Journals | 24 | National and international journals |\n| CD-ROMs | 500+ | Multimedia learning resources |\n| Research Papers | 5,000+ | Faculty and student research archives |",
        },
      },
      {
        sectionId: "mission",
        title: "Our Mission",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "To provide information services and access to resources that support the teaching, learning, and research activities of the institute.\n\n### Key Objectives\n- Develop and maintain a comprehensive collection of print and digital resources\n- Provide efficient information retrieval services\n- Promote reading habits and information literacy\n- Adopt latest technologies for library services\n- Support curriculum development and research\n- Foster a conducive learning environment",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-rules",
    pageTitle: "Library Rules",
    pageDescription: "Library Rules & Regulations",
    route: "/facilities/library/rules",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "borrowing",
        title: "Book Borrowing Rules",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Category | Books Allowed | Duration | Renewal |\n| --- | --- | --- | --- |\n| UG Students | 3 | 14 days | 1 renewal |\n| PG Students | 5 | 21 days | 2 renewals |\n| Faculty | 10 | 30 days | 3 renewals |\n| Research Scholars | 8 | 30 days | 2 renewals |\n| Non-Teaching Staff | 2 | 14 days | 1 renewal |",
        },
      },
      {
        sectionId: "fines",
        title: "Fine Structure for Overdue Books",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Duration | Fine | Additional Penalty |\n| --- | --- | --- |\n| 1-7 days overdue | ₹1 per day | None |\n| 8-14 days overdue | ₹2 per day | Warning letter |\n| 15-30 days overdue | ₹5 per day | Library privileges suspended |\n| 30+ days overdue | ₹10 per day | Book replacement cost + fine |",
        },
      },
      {
        sectionId: "general-rules",
        title: "General Library Rules",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "### ✅ Allowed\n- **Silence Zone:** Maintain silence in the library premises\n- **ID Card:** Always carry your library card / ID card\n- **Proper Handling:** Handle books and materials with care\n- **Digital Access:** Use library computers for academic purposes only\n\n### ❌ Prohibited\n- **No Food & Drinks:** Eating and drinking inside the library is strictly prohibited\n- **No Mobile Phones:** Keep mobile phones on silent mode\n- **No Damage:** Marking, underlining, or tearing pages will result in penalty",
        },
      },
      {
        sectionId: "loss-policy",
        title: "Book Loss or Damage Policy",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "In case of loss or damage to library materials:\n\n- Report the loss immediately to the library counter\n- Replace the book with the same or latest edition\n- If replacement is not available, pay double the cost of the book\n- Processing charges of ₹50 will be applicable\n- Damaged books will be assessed and charged accordingly",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-hours",
    pageTitle: "Working Hours",
    pageDescription: "Library Working Hours",
    route: "/facilities/library/hours",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "reading-hall",
        title: "Reading Hall Timings",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Day | Boys Students | Girls Students | Remarks |\n| --- | --- | --- | --- |\n| Monday - Saturday | 6:00 AM - 12:00 Midnight | 6:00 AM - 10:00 PM | Regular hours |\n| Sunday & Holidays | 6:00 AM - 12:00 Midnight | 6:00 AM - 10:00 PM | No circulation |\n| Exam Period | 24 Hours | 6:00 AM - 12:00 Midnight | Extended hours |",
        },
      },
      {
        sectionId: "circulation",
        title: "Circulation Desk Timings",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Day | Morning Session | Evening Session | Lunch Break |\n| --- | --- | --- | --- |\n| Monday - Friday | 8:30 AM - 12:30 PM | 1:30 PM - 5:30 PM | 12:30 PM - 1:30 PM |\n| Saturday | 8:30 AM - 12:30 PM | 1:30 PM - 4:30 PM | 12:30 PM - 1:30 PM |\n| Sunday | Closed | Closed | - |",
        },
      },
      {
        sectionId: "special",
        title: "Special Timings & Services",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "### Digital Services\n9:00 AM - 8:00 PM (Mon-Sat)\n\n### Reference Section\n8:30 AM - 5:30 PM (Mon-Sat)\n\n### Computer Terminals\n9:00 AM - 9:00 PM (Mon-Sat)\n\n### NPTEL Video Lectures\n9:00 AM - 5:00 PM (Mon-Fri)\n\n---\n\n### Important Notes\n- Entry after scheduled hours is not permitted without prior permission\n- During examinations, timings may be extended\n- Library remains closed on national holidays\n- Special permissions for research scholars available through the librarian\n- Emergency contact: library@ssgmce.ac.in",
        },
      },
      {
        sectionId: "contact",
        title: "Contact",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "- **Email:** library@ssgmce.ac.in\n- **Phone:** +91-7265-252274 (Ext: 120)\n- **Chief Librarian:** Available Mon-Sat, 10 AM - 5 PM",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-services",
    pageTitle: "Library Services",
    pageDescription: "Services offered by Central Library",
    route: "/facilities/library/services",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "overview",
        title: "Library Services Overview",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Service | Description | Availability |\n| --- | --- | --- |\n| OPAC | Online Public Access Catalog for book search | Available |\n| Barcode System | Automated circulation using barcodes | Available |\n| Book Bank | Semester book sets for economically weaker students | Available |\n| Reference Service | Research assistance and reference queries | Available |\n| CAS | Current Awareness Service for new arrivals | Available |\n| SDI | Selective Dissemination of Information | Available |\n| Digital Learning | Access to e-resources and online databases | Available |\n| Inter-Library Loan | Book lending between libraries via DELNET | Available |\n| Photocopy | Reprographic services for reference materials | Available |\n| Wi-Fi | Wireless internet access in library premises | Available |",
        },
      },
      {
        sectionId: "featured",
        title: "Featured Services",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "### OPAC System\n- Search by title, author, subject, ISBN\n- Check real-time availability\n- View book location and shelf number\n- Reserve books online\n\n### Barcode System\n- Fast and accurate book circulation\n- Automated fine calculation\n- Quick check-in and check-out\n- Inventory management\n\n### Book Bank Scheme\n- For SC/ST and economically weaker students\n- Complete semester book set provided\n- Application through library office\n- Based on merit and need\n\n### Reference Services\n- Literature search assistance\n- Bibliography compilation\n- Research guidance support\n- Inter-library loan facilitation",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-facilities",
    pageTitle: "Library Facilities",
    pageDescription: "Library Infrastructure & Facilities",
    route: "/facilities/library/facilities",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "infrastructure",
        title: "Library Infrastructure Facilities",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Facility | Capacity/Quantity | Features |\n| --- | --- | --- |\n| Periodical Section | 100 Seats | Current journals, magazines, newspapers |\n| Reference Section | 200 Seats | Encyclopedias, handbooks, dictionaries |\n| Computer Terminals | 21 | Internet access, OPAC, e-resources |\n| Digital Library | 15 | E-journals, e-books, online databases |\n| Stack Area | 92,000+ books | Open access system |\n| Reprography | 2 Machines | Photocopying and scanning |\n| Wi-Fi | Full coverage | High-speed internet access |\n| Discussion Rooms | 3 | Group study and project discussions |",
        },
      },
      {
        sectionId: "technology",
        title: "Technology & Automation",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "### SLIM 27 Software\n- Integrated library management system\n- OPAC for online catalog search\n- Automated circulation control\n- Serial control management\n\n### Barcode Technology\n- All books barcoded for quick identification\n- Automated issue and return process\n- Patron barcode ID cards\n- Inventory verification system\n\n### Digital Resources\n- DELNET consortium membership\n- IEEE Xplore access\n- ScienceDirect access\n- National Digital Library\n\n### Security Systems\n- CCTV surveillance\n- Entry/exit monitoring\n- Book security gates\n- Fire safety equipment",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-nptel",
    pageTitle: "NPTEL",
    pageDescription: "NPTEL Local Chapter",
    route: "/facilities/library/nptel",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "about",
        title: "About NPTEL at SSGMCE",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "SSGMCE is an active NPTEL Local Chapter, promoting self-paced online learning through IIT/IISc courses. Our chapter facilitates course enrollment, proctored examinations, and certification for both students and faculty members.",
        },
      },
      {
        sectionId: "enrollment",
        title: "Course Enrollment Statistics (2023-24)",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Semester | Students Enrolled | Faculty Enrolled | Courses | Certificates Earned |\n| --- | --- | --- | --- | --- |\n| Jul-Oct 2023 | 450 | 25 | 85 | 180 |\n| Jan-Apr 2024 | 520 | 30 | 95 | 220 |\n| Jul-Oct 2024 | 480 | 28 | 90 | 195 |\n| Jan-Apr 2025 | 550 | 35 | 100 | 240 |\n| **TOTAL** | **2000** | **118** | **370** | **835** |",
        },
      },
      {
        sectionId: "popular",
        title: "Popular NPTEL Courses",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "| Course Name | Offered By | Enrollments (2023-24) |\n| --- | --- | --- |\n| Programming in Python | IIT Madras | 120 |\n| Data Structures & Algorithms | IIT Delhi | 95 |\n| Machine Learning | IIT Kharagpur | 85 |\n| Database Management Systems | IIT Bombay | 75 |\n| Computer Networks | IIT Kharagpur | 65 |\n| Digital Signal Processing | IIT Bombay | 55 |",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-nptel-faculty",
    pageTitle: "NPTEL Faculty Achievers",
    pageDescription: "NPTEL Faculty Achievers",
    route: "/facilities/library/nptel-faculty",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "faculty-achievers",
        title: "Faculty Members - NPTEL Certified (2023-24)",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Faculty Name | Department | Course Completed | Score % | Certificate Type |\n| --- | --- | --- | --- | --- |\n| Dr. (Name) | CSE | Deep Learning | 92% | Gold |\n| Prof. (Name) | Mechanical | Finite Element Analysis | 88% | Silver |\n| Dr. (Name) | E&TC | Digital Signal Processing | 95% | Gold |\n| Prof. (Name) | Electrical | Power Electronics | 82% | Elite |\n| Dr. (Name) | Civil | Structural Analysis | 78% | Elite |\n| Prof. (Name) | IT | Cloud Computing | 85% | Silver |\n| Dr. (Name) | MBA | Business Analytics | 90% | Gold |\n| Prof. (Name) | Applied Sciences | Engineering Mathematics | 76% | Successfully Completed |",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-nptel-students",
    pageTitle: "NPTEL Student Achievers",
    pageDescription: "NPTEL Student Achievers",
    route: "/facilities/library/nptel-students",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "student-achievers",
        title: "Top Student Achievers (Jan-Apr 2024)",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Student Name | Year | Branch | Course Completed | Score % | Certificate |\n| --- | --- | --- | --- | --- | --- |\n| Rahul Sharma | 3rd | CSE | Programming in Java | 95% | Gold |\n| Priya Patel | 4th | E&TC | Digital VLSI Design | 92% | Gold |\n| Amit Kumar | 3rd | Mech | Engineering Thermodynamics | 88% | Silver |\n| Sneha Deshmukh | 4th | IT | Database Management | 90% | Gold |\n| Vikram Singh | 2nd | Electrical | Basic Electrical Circuits | 85% | Silver |\n| Neha Joshi | 3rd | CSE | Machine Learning | 82% | Elite |\n| Rohit Gupta | 4th | Civil | Structural Analysis | 78% | Elite |\n| Anita Reddy | 3rd | E&TC | Signals and Systems | 91% | Gold |\n| Suresh Patil | 2nd | Mech | Manufacturing Processes | 76% | Successfully Completed |\n| Kavita More | 4th | IT | Cloud Computing | 87% | Silver |",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-coursera",
    pageTitle: "Coursera",
    pageDescription: "Coursera Courses",
    route: "/facilities/library/coursera",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "about",
        title: "About Coursera Partnership",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "SSGMCE has partnered with Coursera to provide students and faculty access to world-class online courses from top universities and companies. This partnership enables our academic community to learn cutting-edge skills and earn recognized certificates.",
        },
      },
      {
        sectionId: "specializations",
        title: "Popular Coursera Specializations",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Specialization | Offered By | Courses | Duration | Enrollments |\n| --- | --- | --- | --- | --- |\n| Machine Learning | Stanford University | 3 | 3 months | 85 |\n| Data Science | Johns Hopkins University | 10 | 11 months | 60 |\n| Deep Learning | deeplearning.ai | 5 | 4 months | 45 |\n| Google IT Automation | Google | 6 | 8 months | 70 |\n| AWS Cloud Practitioner | Amazon Web Services | 4 | 4 months | 55 |\n| Full Stack Web Dev | University of Hong Kong | 6 | 6 months | 40 |",
        },
      },
      {
        sectionId: "access",
        title: "How to Access",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "1. Visit the library and get your Coursera access credentials\n2. Log in to Coursera using your institutional email\n3. Browse and enroll in available courses\n4. Complete assignments and quizzes within the deadline\n5. Earn certificates upon successful completion",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-books",
    pageTitle: "Book Details",
    pageDescription: "Library Book Collection Details",
    route: "/facilities/library/books",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "department-collection",
        title: "Department-wise Book Collection",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Department | Textbooks | Reference Books | Total Titles | Journals |\n| --- | --- | --- | --- | --- |\n| Computer Science & Engineering | 15,200 | 3,800 | 5,400 | 25 |\n| Information Technology | 12,100 | 3,000 | 4,200 | 20 |\n| Mechanical Engineering | 14,500 | 3,600 | 5,100 | 22 |\n| Electrical Engineering | 12,800 | 3,200 | 4,500 | 20 |\n| Electronics & Telecom | 11,900 | 3,000 | 4,200 | 18 |\n| Civil Engineering | 10,500 | 2,600 | 3,700 | 15 |\n| Applied Sciences | 8,200 | 2,100 | 3,500 | 18 |\n| MBA | 4,800 | 1,800 | 2,400 | 12 |\n| General & Reference | 2,310 | 1,200 | 1,528 | 6 |\n| **TOTAL** | **92,310** | **24,300** | **34,528** | **156** |",
        },
      },
      {
        sectionId: "subject-classification",
        title: "Subject-wise Classification",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Subject Category | Number of Books | Popular Titles |\n| --- | --- | --- |\n| Computer Science & Programming | 18,500+ | Data Structures, Algorithms, OS, DBMS |\n| Electronics & Communication | 14,200+ | Digital Electronics, Signal Processing, VLSI |\n| Mechanical & Manufacturing | 16,800+ | Thermodynamics, Fluid Mechanics, CAD/CAM |\n| Electrical & Power Systems | 13,500+ | Power Systems, Control Systems, Machines |\n| Mathematics & Science | 12,000+ | Engineering Mathematics, Physics, Chemistry |\n| Management & Humanities | 6,500+ | Business Management, Economics, Communication |",
        },
      },
    ],
  },
  {
    pageId: "facilities-library-staff",
    pageTitle: "Library Staff",
    pageDescription: "Library Staff Members",
    route: "/facilities/library/staff",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "staff-directory",
        title: "Library Staff Directory",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Name | Designation | Qualification | Responsibilities | Contact |\n| --- | --- | --- | --- | --- |\n| (Name) | Chief Librarian | M.L.I.Sc., Ph.D. | Overall library administration | Ext: 120 |\n| (Name) | Deputy Librarian | M.L.I.Sc., NET | Circulation, reference services | Ext: 121 |\n| (Name) | Assistant Librarian | M.L.I.Sc. | Digital library, e-resources | Ext: 122 |\n| (Name) | Library Assistant | B.L.I.Sc. | Book acquisitions, cataloging | Ext: 123 |\n| (Name) | Library Assistant | B.L.I.Sc. | Periodicals, newspapers | Ext: 124 |\n| (Name) | Library Clerk | Graduate | Data entry, OPAC maintenance | Ext: 125 |\n| (Name) | Technical Assistant | Diploma in IT | System administration, SLIM 27 | Ext: 126 |\n| (Name) | Library Attendant | 12th Pass | Stack maintenance, shelving | Ext: 127 |\n| (Name) | Library Attendant | 12th Pass | Reading hall supervision | Ext: 128 |",
        },
      },
    ],
  },
  // ── Hostel Sub-pages ──
  {
    pageId: "facilities-hostel-policy",
    pageTitle: "Hostel Policy",
    pageDescription: "Hostel Rules & Policy",
    route: "/facilities/hostel/policy",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "timings",
        title: "Hostel Timings & Entry Rules",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Category | Entry Time | Rules |\n| --- | --- | --- |\n| Girls Hostel | 7:00 PM (Weekdays), 8:00 PM (Weekends) | Written permission required for late entry |\n| Boys Hostel | 9:00 PM (Weekdays), 10:00 PM (Weekends) | ID card mandatory at entry gate |\n| Class Timings Restriction | During class hours | Students must attend classes; hostel entry restricted |",
        },
      },
      {
        sectionId: "rules",
        title: "General Rules & Code of Conduct",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "### ✅ Allowed\n- Maintain cleanliness in rooms and common areas\n- Use of personal laptops for academic purposes\n- Visitors during designated visiting hours only\n- Use of common room facilities during free time\n\n### ❌ Prohibited\n- Ragging in any form is strictly prohibited\n- Consumption of alcohol, tobacco, or drugs on campus\n- Use of electrical appliances (heaters, irons) in rooms\n- Unauthorized overnight absence from hostel\n- Keeping pets in hostel premises\n- Creating disturbance or playing loud music after 10 PM",
        },
      },
      {
        sectionId: "property",
        title: "Property & Room Allocation Rules",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "- Students are responsible for the furniture and fixtures provided in their rooms\n- Any damage to hostel property will be charged to the student\n- Room changes are allowed only with written permission from the warden\n- Students must vacate rooms during summer vacation unless permitted otherwise\n- Personal belongings left behind after vacating will not be the hostel's responsibility",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-committee",
    pageTitle: "Hostel Committee",
    pageDescription: "Hostel Management Committee",
    route: "/facilities/hostel/committee",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "committee",
        title: "Hostel Management Committee (2024-25)",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Name & Designation | Role | Responsibilities | Contact |\n| --- | --- | --- | --- |\n| Dr. (Principal Name) | Chairman | Policy decisions, grievance redressal | principal@ssgmce.ac.in |\n| Prof. (Name), Dean Student Affairs | Chief Warden | Overall hostel administration | dean.sw@ssgmce.ac.in |\n| Prof. (Name), Associate Professor | Boys Hostel Warden | Boys hostel management | Ext: 201 |\n| Prof. (Name), Assistant Professor | Girls Hostel Warden | Girls hostel management | Ext: 202 |\n| Prof. (Name), Assistant Professor | Assistant Warden | Mess supervision, maintenance | Ext: 203 |\n| Mr. (Name), Office Superintendent | Admin Coordinator | Records, admissions, fee collection | Ext: 204 |\n| Dr. (Name), Medical Officer | Health Officer | Medical emergencies, health camp | Ext: 205 |\n| Mr. (Name), Student Representative | Boys Rep | Student grievances, mess committee | - |\n| Ms. (Name), Student Representative | Girls Rep | Student grievances, facilities | - |",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-brochure",
    pageTitle: "Hostel Brochure",
    pageDescription: "Hostel Information Brochure",
    route: "/facilities/hostel/brochure",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "accommodation",
        title: "Hostel Accommodation Details",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Feature | Boys Hostel | Girls Hostel |\n| --- | --- | --- |\n| Total Capacity | 600+ | 600+ |\n| Room Types | Single & Double Occupancy | Single & Double Occupancy |\n| Buildings | 2 Blocks | 2 Blocks |\n| Common Rooms | 2 (with TV, indoor games) | 2 (with TV, indoor games) |\n| Security | 24/7 CCTV, Guards | 24/7 CCTV, Women Guards |\n| Wi-Fi | Full Coverage | Full Coverage |",
        },
      },
      {
        sectionId: "amenities",
        title: "Amenities Provided",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "- Bed with mattress\n- Study table & chair\n- Wardrobe/cupboard\n- Ceiling fan\n- Tube light\n- Mirror\n- Bookshelf\n- Power socket (5A & 15A)\n- RO purified water\n- Geysers (common)\n- Washing area\n- Iron (common)",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-anti-ragging",
    pageTitle: "Anti-Ragging Committee",
    pageDescription: "Anti-Ragging Committee Details",
    route: "/facilities/hostel/anti-ragging",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "policy",
        title: "SSGMCE's Zero Tolerance Policy",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "SSGMCE maintains a **zero tolerance policy** against ragging in any form. In compliance with the Maharashtra Prohibition of Ragging Act, 1999, and UGC Regulations on Curbing the Menace of Ragging, 2009, the institute has constituted an Anti-Ragging Committee to ensure a safe and secure campus environment.",
        },
      },
      {
        sectionId: "committee",
        title: "Anti-Ragging Committee Members (2024-25)",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Name & Designation | Role in Committee | Contact |\n| --- | --- | --- |\n| Dr. (Principal Name) | Chairman | principal@ssgmce.ac.in |\n| Prof. (Name), Dean Student Affairs | Convenor | dean.sw@ssgmce.ac.in |\n| Prof. (Name), HOD CSE | Member | Ext: 301 |\n| Prof. (Name), HOD Mechanical | Member | Ext: 302 |\n| Mr. (Name), Police Representative | External Member | - |\n| Dr. (Name), Medical Officer | Member | Ext: 205 |\n| Mr. (Name), NGO Representative | External Member | - |\n| (Name), Student Representative | Student Member | - |",
        },
      },
      {
        sectionId: "helpline",
        title: "Reporting Ragging - Helpline & Contacts",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "### UGC Anti-Ragging Helpline\n- **Toll-Free:** 1800-180-5522\n- **Website:** [antiragging.in](https://www.antiragging.in)\n\n### SSGMCE Anti-Ragging Cell\n- **Email:** antiragging@ssgmce.ac.in\n- **Phone:** +91-7265-252274 (Ext: 300)\n- **Available:** 24/7",
        },
      },
      {
        sectionId: "punishments",
        title: "Punishments for Ragging (As per Act)",
        type: "markdown",
        order: 4,
        isVisible: true,
        content: {
          text: "| Offense Severity | Punishment |\n| --- | --- |\n| Minor / First Offense | Warning, written apology, community service |\n| Moderate | Suspension from hostel, debarring from exams |\n| Severe | Rustication from institution for 1-4 semesters |\n| Criminal | FIR, criminal prosecution under IPC sections |",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-minutes",
    pageTitle: "Minutes of Meeting",
    pageDescription: "Hostel Committee Minutes",
    route: "/facilities/hostel/minutes",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "latest",
        title: "Latest Committee Meeting",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "**Date:** 15 January 2024\n**Venue:** Committee Room, Admin Block\n\n### Agenda & Decisions\n1. Review of mess food quality — decided to conduct monthly feedback surveys\n2. Hostel maintenance schedule — approved quarterly maintenance plan\n3. Wi-Fi upgrade proposal — approved 1 Gbps upgrade for all hostel blocks\n4. Anti-ragging awareness week planning — scheduled for August 2024\n5. Fee revision discussion — deferred to next meeting with detailed cost analysis\n6. Student grievance review — 3 pending grievances resolved, 1 escalated to Principal",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-reports",
    pageTitle: "Anti-Ragging Reports",
    pageDescription: "Anti-Ragging Reports",
    route: "/facilities/hostel/reports",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "reports",
        title: "Annual Anti-Ragging Reports",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "### Academic Year 2023-24\n**Status:** Zero ragging incidents reported\n\nThe Anti-Ragging Committee conducted regular surveillance, awareness programs, and surprise inspections throughout the academic year. Fresher orientation programs were held at the beginning of each semester.\n\n### Academic Year 2022-23\n**Status:** Zero ragging incidents reported\n\nContinued vigilance and awareness campaigns ensured a ragging-free environment across campus and hostels.\n\n### Academic Year 2021-22\n**Status:** Zero ragging incidents reported\n\nOnline awareness sessions were conducted alongside physical inspections as the campus returned to full operations.\n\n### Academic Year 2020-21\n**Status:** Zero ragging incidents reported\n\nDigital anti-ragging campaigns were conducted during the pandemic period with online affidavit submission.\n\n### Academic Year 2019-20\n**Status:** Zero ragging incidents reported\n\nComprehensive anti-ragging measures were in place with regular monitoring and student mentoring programs.",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-posters",
    pageTitle: "Anti-Ragging Posters",
    pageDescription: "Anti-Ragging Awareness Posters",
    route: "/facilities/hostel/posters",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "posters",
        title: "Anti-Ragging Awareness Posters",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "Anti-ragging awareness posters are displayed prominently across all campus buildings, hostels, and common areas to remind students about the institute's zero tolerance policy.\n\n### Poster Themes\n- **Say NO to Ragging** — Be strong, speak up\n- **Ragging is a Crime** — Punishable under law\n- **Report Ragging** — Don't be a silent spectator\n- **Be a Friend, Not a Bully** — Welcome juniors with respect\n- **Helpline: 1800-180-5522** — UGC Anti-Ragging helpline\n- **Zero Tolerance Against Ragging** — SSGMCE's commitment",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-aicte",
    pageTitle: "AICTE Letters",
    pageDescription: "AICTE Letters related to Hostel",
    route: "/facilities/hostel/aicte",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "documents",
        title: "AICTE & Compliance Documents",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "### AICTE Approval Letter 2024-25\nThis document confirms that the hostel facilities at SSGMCE meet AICTE standards for infrastructure, safety, and student welfare as required for approved technical institutions.\n\n### UGC Compliance Certificate 2023-24\nCertification of compliance with UGC guidelines regarding student accommodation, anti-ragging measures, and hostel management standards.\n\n### Maharashtra Government NOC\nNo Objection Certificate from the State Government confirming that all hostel buildings comply with safety norms, fire regulations, and structural standards.",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-notices",
    pageTitle: "Anti-Ragging Notices",
    pageDescription: "Anti-Ragging Notices",
    route: "/facilities/hostel/notices",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "notices",
        title: "Anti-Ragging Notices",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "### 1 July 2024\nAll newly admitted students are required to submit their Anti-Ragging Affidavit (online through antiragging.in portal) within 15 days of admission.\n\n### 15 August 2024\nAnti-Ragging Awareness Week will be observed from August 19-24, 2024. All students are required to attend the awareness sessions.\n\n### 10 June 2024\nAnti-Ragging Helpline has been activated for the new academic session. Students can report incidents at 1800-180-5522 (toll-free) or contact the college anti-ragging cell.\n\n### 1 June 2024\nCCTV surveillance has been enhanced across all hostel blocks and common areas for the safety and security of students.\n\n### 15 May 2024\nAnti-Ragging Squad has been formed for the academic year 2024-25. The squad will conduct surprise inspections at hostels and campus areas.",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-fees",
    pageTitle: "Hostel Fee Structure",
    pageDescription: "Hostel Fee Details",
    route: "/facilities/hostel/fees",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "annual-fee",
        title: "Annual Hostel Fee Breakdown",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Fee Component | Amount (₹) | Details | Refundable |\n| --- | --- | --- | --- |\n| Room Rent | 15,000 | Per year, includes basic furnishing | No |\n| Electricity Charges | 3,000 | Per year, based on average consumption | No |\n| Water Charges | 1,000 | Per year | No |\n| Maintenance Charges | 2,000 | Common area upkeep, repairs | No |\n| Caution Deposit | 5,000 | One-time, refundable at vacating | Yes |\n| Establishment Charges | 2,000 | Administrative costs | No |\n| **Total (First Year)** | **₹28,000** | Includes caution deposit | Partial |\n| **Total (Subsequent Years)** | **₹23,000** | Excluding caution deposit | No |",
        },
      },
      {
        sectionId: "mess",
        title: "Mess Charges (Optional)",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Mess Type | Monthly Charges | Meal Times | Menu Type |\n| --- | --- | --- | --- |\n| Vegetarian Mess | ₹3,500/month | Breakfast, Lunch, Dinner | Pure Veg |\n| Non-Vegetarian Mess | ₹4,000/month | Breakfast, Lunch, Dinner | Mixed |\n| Jain Mess | ₹4,000/month | Breakfast, Lunch, Dinner | Jain Veg |",
        },
      },
      {
        sectionId: "payment-notes",
        title: "Payment Details & Important Notes",
        type: "markdown",
        order: 3,
        isVisible: true,
        content: {
          text: "- **Payment Mode:** Online transfer / DD in favor of \"Principal, SSGMCE, Shegaon\"\n- **Deadline:** Within 15 days of hostel allotment\n- **Late Fee:** ₹50 per day after deadline\n- **Refund Policy:** Caution deposit refunded after adjusting dues; apply at time of vacating\n- **Concession:** SC/ST students eligible for government fee concession as per norms",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-accommodation",
    pageTitle: "Hostel Accommodation",
    pageDescription: "Hostel Accommodation Details",
    route: "/facilities/hostel/accommodation",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "criteria",
        title: "Room Allocation Criteria",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Category | Criteria | Priority |\n| --- | --- | --- |\n| First Year Students | Based on admission order and distance from college | High |\n| Senior Students | Academic performance (CGPA) and conduct record | Medium |\n| PG Students | Research requirements and recommendation | High |\n| Out-of-State Students | Permanent address more than 100 km from college | High |\n| Specially-Abled Students | Medical certificate and special needs assessment | High |",
        },
      },
      {
        sectionId: "process",
        title: "Allocation Process",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "1. Submit hostel admission application form with required documents\n2. Applications are reviewed by the Hostel Committee\n3. Allotment list is published on the college notice board and website\n4. Pay hostel fees within the specified deadline\n5. Report to the allotted hostel with fee receipt and ID card for room allocation",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-admission",
    pageTitle: "Hostel Admission Form",
    pageDescription: "Hostel Admission Application",
    route: "/facilities/hostel/admission",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "process",
        title: "Hostel Admission Process",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "Students seeking hostel accommodation must complete the admission process by submitting the required documents to the Hostel Office.\n\n### Required Documents\n- Completed Hostel Admission Form\n- College Admission Receipt\n- 2 Passport-size Photographs\n- Aadhar Card (photocopy)\n- Parent/Guardian ID Proof\n- Anti-Ragging Affidavit (from antiragging.in)\n- Medical Fitness Certificate\n- Character Certificate from previous institution",
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel-feedback",
    pageTitle: "Hostel Feedback",
    pageDescription: "Hostel Feedback Form",
    route: "/facilities/hostel/feedback",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "feedback",
        title: "We Value Your Feedback",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "Your feedback helps us improve hostel facilities and services. Please share your experience on the following aspects:\n\n### Feedback Categories\n- Room cleanliness and maintenance\n- Mess food quality and hygiene\n- Wi-Fi and internet connectivity\n- Water supply and electricity\n- Security and safety measures\n- Warden and staff responsiveness\n- Common room facilities\n- Overall hostel environment\n\nPlease contact the Hostel Office or email **hostel@ssgmce.ac.in** to submit your feedback.",
        },
      },
    ],
  },
  // ── Sports Sub-pages ──
  {
    pageId: "facilities-sports-about",
    pageTitle: "About Sport Department",
    pageDescription: "About Sport Department",
    route: "/facilities/sports/about",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "intro",
        title: "Introduction",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "The Sports Department at SSGMCE, Shegaon promotes physical fitness, sportsmanship, and team spirit among students. With state-of-the-art indoor and outdoor facilities, the department provides ample opportunities for students to participate in various sports at inter-college, university, state, and national levels.\n\nThe department is headed by a qualified Physical Director and supported by qualified coaches and support staff.",
        },
      },
      {
        sectionId: "vision",
        title: "Vision & Mission",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "### Vision\nTo develop well-rounded individuals through sports and physical activities, fostering discipline, leadership, and teamwork.\n\n### Mission\n- Provide world-class sports infrastructure and coaching\n- Encourage maximum student participation in sports activities\n- Identify and nurture sporting talent\n- Promote fitness and healthy lifestyle among the campus community\n- Achieve excellence in inter-university and national level competitions",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-council",
    pageTitle: "Sports Council",
    pageDescription: "Sports Council Members",
    route: "/facilities/sports/council",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "council",
        title: "Sports Council (2024-25)",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Name & Designation | Role | Responsibilities |\n| --- | --- | --- |\n| Dr. (Principal Name) | Patron | Policy decisions, budget allocation |\n| (Name), Physical Director | Director of Sports | Overall sports administration, coaching |\n| Prof. (Name), Associate Professor | Sports Coordinator | Event planning, team selection |\n| Prof. (Name), Assistant Professor | Faculty Advisor | Student mentorship, travel coordination |\n| (Name), Sports Captain (Boys) | Student Representative | Boys sports coordination |\n| (Name), Sports Captain (Girls) | Student Representative | Girls sports coordination |\n| (Name), Coach | Cricket Coach | Cricket training and team management |\n| (Name), Coach | Athletics Coach | Track & field training |",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-indoor",
    pageTitle: "Indoor Sport Facility",
    pageDescription: "Indoor Sports Facilities",
    route: "/facilities/sports/indoor",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "facilities",
        title: "Indoor Sports Facilities",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Facility | Location | Capacity / Specs | Equipment Available |\n| --- | --- | --- | --- |\n| Badminton Courts | Indoor Stadium | 4 courts (standard BWF size) | Rackets, shuttlecocks |\n| Table Tennis Room | Sports Block | 4 tables (ITTF approved) | Paddles, balls |\n| Chess Room | Sports Block | 20 boards | Clocks included |\n| Carrom Room | Sports Block | 6 boards | Coins & strikers |\n| Gymnasium | Fitness Center | 50 members capacity | Treadmills, weights, machines |\n| Yoga Hall | Sports Block | 40 mats | Props available |\n| Indoor Stadium | Main Campus | Multi-purpose, 500 spectators | Stage setup possible |",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-outdoor",
    pageTitle: "Outdoor Sports Facility",
    pageDescription: "Outdoor Sports Grounds",
    route: "/facilities/sports/outdoor",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "facilities",
        title: "Outdoor Sports Facilities",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Facility | Area/Dimensions | Surface Type | Lighting |\n| --- | --- | --- | --- |\n| Cricket Ground | Full-size ground with practice nets | Natural turf | Floodlights |\n| Football Ground | 110m x 70m (FIFA standard) | Natural grass | Floodlights |\n| Basketball Court | 28m x 15m | Concrete/Synthetic | Available |\n| Volleyball Court | 18m x 9m (2 courts) | Sand / Clay | Available |\n| Tennis Court | 23.77m x 10.97m | Hard court | Available |\n| Athletics Track | 400m oval | Cinder | Partial |\n| Kabaddi Court | 13m x 10m | Mat | Indoor |\n| Kho-Kho Ground | 29m x 16m | Clay | Available |",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-achievements",
    pageTitle: "Sports Achievements",
    pageDescription: "Sports Achievements & Awards",
    route: "/facilities/sports/achievements",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "recent",
        title: "Recent Achievements (2023-24)",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Event / Competition | Level | Achievement | Year |\n| --- | --- | --- | --- |\n| SGBAU Inter-College Cricket | University | Winners | 2023-24 |\n| SGBAU Inter-College Volleyball | University | Runners-up | 2023-24 |\n| Maharashtra State Athletics Championship | State | 2 Gold, 1 Silver | 2023-24 |\n| SGBAU Inter-College Badminton | University | Winners (Men), Runners-up (Women) | 2023-24 |\n| Khelo India University Games | National | Participation (3 students) | 2023-24 |\n| SGBAU Inter-College Table Tennis | University | Winners (Men) | 2022-23 |\n| West Zone Inter-University Football | Zonal | Quarter-finals | 2022-23 |\n| Maharashtra State Kabaddi Championship | State | Bronze Medal | 2022-23 |",
        },
      },
      {
        sectionId: "notable",
        title: "Notable Achievements",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "- **10+** University-level championship titles in the last 5 years\n- **3** Students represented Maharashtra state in All-India University Games\n- **1** Student selected for national-level cricket trials\n- Annual sports meet with 1000+ participant students\n- Regular winners in SGBAU inter-college tournaments across multiple sports",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-statistics",
    pageTitle: "Sport Statistics",
    pageDescription: "Sports Statistics & Records",
    route: "/facilities/sports/statistics",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "participation",
        title: "Annual Participation Statistics",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Academic Year | Total Participants | University Events | State Events | National Events | Championship Wins |\n| --- | --- | --- | --- | --- | --- |\n| 2023-24 | 450+ | 12 | 5 | 2 | 4 |\n| 2022-23 | 400+ | 10 | 4 | 1 | 3 |\n| 2021-22 | 350+ | 8 | 3 | 1 | 2 |\n| 2020-21 | 200 (COVID) | 4 (Online) | 1 | 0 | 1 |\n| 2019-20 | 420+ | 11 | 5 | 2 | 5 |",
        },
      },
      {
        sectionId: "budget",
        title: "Budget Allocation",
        type: "markdown",
        order: 2,
        isVisible: true,
        content: {
          text: "| Category | Allocation (\u20b9) |\n| --- | --- |\n| Equipment Purchase | 3,00,000 |\n| Facility Maintenance | 2,50,000 |\n| Travel & Participation | 2,00,000 |\n| Coaching & Training | 1,50,000 |\n| Awards & Incentives | 1,00,000 |\n| Annual Sports Meet | 2,00,000 |\n| **Total** | **\u20b912,00,000** |",
        },
      },
    ],
  },
  {
    pageId: "facilities-sports-staff",
    pageTitle: "Sport Staff",
    pageDescription: "Sports Department Staff",
    route: "/facilities/sports/staff",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [
      {
        sectionId: "staff",
        title: "Sports Department Staff",
        type: "markdown",
        order: 1,
        isVisible: true,
        content: {
          text: "| Name | Designation | Qualification | Sports Expertise | Contact |\n| --- | --- | --- | --- | --- |\n| (Name) | Physical Director | M.P.Ed, NET | Athletics, Football | sports@ssgmce.ac.in |\n| (Name) | Sports Coach | M.P.Ed | Cricket, Volleyball | Ext: 401 |\n| (Name) | Sports Coach | B.P.Ed, Diploma | Badminton, Table Tennis | Ext: 402 |\n| (Name) | Gym Instructor | B.P.Ed, Certified Trainer | Fitness, Yoga | Ext: 403 |\n| (Name) | Sports Assistant | B.P.Ed | General sports, Equipment | Ext: 404 |",
        },
      },
    ],
  },
];

// ──────────────────────────────────────────────────────────────
//  PLACEMENTS
// ──────────────────────────────────────────────────────────────
const placementsPages = [
  {
    pageId: "placements-about",
    pageTitle: "About Training & Placement Cell",
    pageDescription: "About T&P Cell",
    route: "/placements/about",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-objectives",
    pageTitle: "Objectives Rules & Procedures",
    pageDescription: "T&P Objectives",
    route: "/placements/objectives",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-goals",
    pageTitle: "T&P Goals",
    pageDescription: "Training & Placement Goals",
    route: "/placements/goals",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-coordinators",
    pageTitle: "T&P Cell Coordinators",
    pageDescription: "T&P Coordinators",
    route: "/placements/coordinators",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-activities",
    pageTitle: "Training & Placement Activities",
    pageDescription: "T&P Activities",
    route: "/placements/activities",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-brochure",
    pageTitle: "Placement Brochure",
    pageDescription: "Placement Brochure",
    route: "/placements/brochure",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-statistics",
    pageTitle: "Placement Statistics",
    pageDescription: "Placement Statistics",
    route: "/placements/statistics",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-recruiters",
    pageTitle: "Major Recruiters",
    pageDescription: "Major Recruiters",
    route: "/placements/recruiters",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-career",
    pageTitle: "Career Guidance Cell",
    pageDescription: "Career Guidance",
    route: "/placements/career",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-internship",
    pageTitle: "Internship",
    pageDescription: "Internship",
    route: "/placements/internship",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-alumni",
    pageTitle: "Alumni Registration",
    pageDescription: "Alumni Registration",
    route: "/placements/alumni",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
];

// ──────────────────────────────────────────────────────────────
//  IQAC
// ──────────────────────────────────────────────────────────────
const iqacPages = [
  {
    pageId: "iqac-vision",
    pageTitle: "Vision Mission, Quality Policies",
    pageDescription: "IQAC Vision & Mission",
    route: "/iqac/vision",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-vision"],
  },
  {
    pageId: "iqac-composition",
    pageTitle: "Composition & Function",
    pageDescription: "IQAC Composition",
    route: "/iqac/composition",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-composition"],
  },
  {
    pageId: "iqac-minutes",
    pageTitle: "Minutes of Meeting",
    pageDescription: "IQAC Minutes",
    route: "/iqac/minutes",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-minutes"],
  },
  {
    pageId: "iqac-practices",
    pageTitle: "Best Practices",
    pageDescription: "Best Practices",
    route: "/iqac/practices",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-practices"],
  },
  {
    pageId: "iqac-distinctiveness",
    pageTitle: "Institutional Distinctiveness",
    pageDescription: "Institutional Distinctiveness",
    route: "/iqac/distinctiveness",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-distinctiveness"],
  },
  {
    pageId: "iqac-aqar",
    pageTitle: "AQAR Reports",
    pageDescription: "Annual Quality Assurance Reports",
    route: "/iqac/aqar",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-aqar"],
  },
  {
    pageId: "iqac-naac",
    pageTitle: "NAAC-SSR 3rd Cycle",
    pageDescription: "NAAC SSR",
    route: "/iqac/naac",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-naac"],
  },
  {
    pageId: "iqac-econtent",
    pageTitle: "e-Content",
    pageDescription: "e-Content",
    route: "/iqac/econtent",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-econtent"],
  },
  {
    pageId: "iqac-econtent-facility",
    pageTitle: "e-Content Facility",
    pageDescription: "e-Content Development Facility",
    route: "/iqac/econtent-facility",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-econtent-facility"],
  },
  {
    pageId: "iqac-feedback",
    pageTitle: "Stakeholders Feedback Report",
    pageDescription: "Feedback Report",
    route: "/iqac/feedback",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-feedback"],
  },
  {
    pageId: "iqac-analysis",
    pageTitle: "Feedback Analysis & Action Taken Report",
    pageDescription: "Feedback Analysis",
    route: "/iqac/analysis",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-analysis"],
  },
  {
    pageId: "iqac-survey",
    pageTitle: "Student Satisfaction Survey Report",
    pageDescription: "Student Survey",
    route: "/iqac/survey",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-survey"],
  },
  {
    pageId: "iqac-gender",
    pageTitle: "Annual Gender Sensitization Action Plan",
    pageDescription: "Gender Sensitization",
    route: "/iqac/gender",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-gender"],
  },
  {
    pageId: "iqac-equity",
    pageTitle: "Promotion of Gender Equity",
    pageDescription: "Gender Equity",
    route: "/iqac/equity",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: iqacMarkdownPages["iqac-equity"],
  },
];

// ──────────────────────────────────────────────────────────────
//  DOCUMENTS
// ──────────────────────────────────────────────────────────────
const documentsPages = [
  {
    pageId: "documents-naac",
    pageTitle: "NAAC",
    pageDescription: "NAAC Documents",
    route: "/documents/naac",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-nba",
    pageTitle: "NBA",
    pageDescription: "NBA Documents",
    route: "/documents/nba",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-iso",
    pageTitle: "ISO",
    pageDescription: "ISO Certification",
    route: "/documents/iso",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-nirf",
    pageTitle: "NIRF",
    pageDescription: "NIRF Ranking Data",
    route: "/documents/nirf",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-aicte",
    pageTitle: "AICTE Approval",
    pageDescription: "AICTE Approval Letters",
    route: "/documents/aicte",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-policies",
    pageTitle: "Policies and Procedure",
    pageDescription: "Institutional Policies",
    route: "/documents/policies",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-mandatory",
    pageTitle: "Mandatory Disclosure",
    pageDescription: "Mandatory Disclosure",
    route: "/documents/mandatory",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-audit",
    pageTitle: "Sustainable Audit",
    pageDescription: "Sustainable Audit",
    route: "/documents/audit",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-financial",
    pageTitle: "Financial Statements",
    pageDescription: "Financial Statements",
    route: "/documents/financial",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-newsletter",
    pageTitle: "News Letters",
    pageDescription: "Newsletters",
    route: "/documents/newsletter",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-tattwadarshi",
    pageTitle: "e-Tattwadarshi",
    pageDescription: "e-Tattwadarshi Magazine",
    route: "/documents/tattwadarshi",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "documents-student-forms",
    pageTitle: "Student Forms",
    pageDescription: "Downloadable Student Forms",
    route: "/documents/student-forms",
    category: "documents",
    template: "generic",
    isPublished: true,
    sections: [],
  },
];

// ──────────────────────────────────────────────────────────────
//  ACTIVITIES
// ──────────────────────────────────────────────────────────────
const activitiesPages = [
  // Central Activities
  {
    pageId: "activities-ieee",
    pageTitle: "IEEE",
    route: "/activities/ieee",
    category: "activities",
  },
  {
    pageId: "activities-iste",
    pageTitle: "ISTE",
    route: "/activities/iste",
    category: "activities",
  },
  {
    pageId: "activities-uba",
    pageTitle: "UBA",
    route: "/activities/uba",
    category: "activities",
  },
  {
    pageId: "activities-nss",
    pageTitle: "NSS",
    route: "/activities/nss",
    category: "activities",
  },
  {
    pageId: "activities-pursuit",
    pageTitle: "PURSUIT",
    route: "/activities/pursuit",
    category: "activities",
  },
  {
    pageId: "activities-parishkriti",
    pageTitle: "Parishkriti",
    route: "/activities/parishkriti",
    category: "activities",
  },
  // Departmental
  {
    pageId: "activities-mesa",
    pageTitle: "MESA",
    route: "/activities/mesa",
    category: "activities",
  },
  {
    pageId: "activities-essa",
    pageTitle: "ESSA",
    route: "/activities/essa",
    category: "activities",
  },
  {
    pageId: "activities-csesa",
    pageTitle: "CSESA",
    route: "/activities/csesa",
    category: "activities",
  },
  {
    pageId: "activities-itsa",
    pageTitle: "ITSA",
    route: "/activities/itsa",
    category: "activities",
  },
  {
    pageId: "activities-social",
    pageTitle: "Social Media Team",
    route: "/activities/social",
    category: "activities",
  },
  {
    pageId: "activities-cultural",
    pageTitle: "Cultural Council",
    route: "/activities/cultural",
    category: "activities",
  },
  // Student Activities
  {
    pageId: "activities-innovo",
    pageTitle: "INNOVO 2025",
    route: "/activities/innovo",
    category: "activities",
  },
  {
    pageId: "activities-drone",
    pageTitle: "Drone Club",
    route: "/activities/drone",
    category: "activities",
  },
  {
    pageId: "activities-gdg",
    pageTitle: "GDG-SSGMCE",
    route: "/activities/gdg",
    category: "activities",
  },
  {
    pageId: "activities-ecell",
    pageTitle: "E-CELL",
    route: "/activities/ecell",
    category: "activities",
  },
  {
    pageId: "activities-xtreme",
    pageTitle: "Team x-treme",
    route: "/activities/xtreme",
    category: "activities",
  },
  {
    pageId: "activities-mozilla",
    pageTitle: "Mozilla",
    route: "/activities/mozilla",
    category: "activities",
  },
  // Student Chapter
  {
    pageId: "activities-acm",
    pageTitle: "ACM",
    route: "/activities/acm",
    category: "activities",
  },
  {
    pageId: "activities-iei-mech",
    pageTitle: "IEI(MECH)",
    route: "/activities/iei-mech",
    category: "activities",
  },
  {
    pageId: "activities-iei-elpo",
    pageTitle: "IEI(ELPO)",
    route: "/activities/iei-elpo",
    category: "activities",
  },
  {
    pageId: "activities-sae",
    pageTitle: "SAE",
    route: "/activities/sae",
    category: "activities",
  },
].map((p) => ({
  ...p,
  pageDescription: p.pageDescription || p.pageTitle,
  template: "generic",
  isPublished: true,
  sections: [],
}));

// ══════════════════════════════════════════════════════════════
//  COMBINED EXPORT
// ══════════════════════════════════════════════════════════════
const allNavPages = [
  ...aboutPages,
  ...nirfPages,
  ...academicsPages,
  ...admissionsPages,
  ...researchPages,
  ...facilitiesPages,
  ...adminOfficePages,
  ...placementsPages,
  ...iqacPages,
  ...documentsPages,
  ...activitiesPages,
];

module.exports = allNavPages;
