const PageContent = require("../models/PageContent");
const EditLog = require("../models/EditLog");
const departmentPages = [
  {
    pageId: "departments-cse",
    pageTitle: "Computer Science & Engineering",
    pageDescription: "Department of Computer Science & Engineering",
    route: "/departments/cse",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Computer Science & Engineering",
      heroSubtitle: "Innovating the Future",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/DHtbFvTG53k",
        para1:
          "The Department of Computer Science & Engineering welcomes young aspirants to shape their career by developing strong technical, analytical, and communication skills. We are committed to preparing students not just for the software industry, but also for higher studies, research, and entrepreneurship.",
        para2:
          "We focus on holistic development through innovative teaching-learning processes, industrial training, ongoing research projects, and specialized training programs.",
      },
      hodName: "Dr. S. B. Patil",
      hodDesignation: "Head of Department",
      hodEmail: "hod_cse@ssgmce.ac.in",
    },
    sections: [],
  },
  {
    pageId: "departments-it",
    pageTitle: "Information Technology",
    pageDescription: "Department of Information Technology",
    route: "/departments/it",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Information Technology",
      heroSubtitle: "Powering the Future",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
        para1:
          "The Department of Information Technology was established in the year 2001 with an initial intake of 30 students. The intake was subsequently increased to 60 students in 2002.",
        para2:
          "The department has well-equipped laboratories with state-of-the art equipment. The department has a team of dedicated and experienced faculty members.",
      },
      hodName: "Dr. A. S. Alvi",
      hodDesignation: "Head of Department",
      hodEmail: "hod_it@ssgmce.ac.in",
    },
    sections: [],
  },
  {
    pageId: "departments-entc",
    pageTitle: "Electronics & Telecommunication",
    pageDescription: "Department of EnTC",
    route: "/departments/entc",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Electronics & Telecommunication",
      heroSubtitle: "Connecting the World",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
        para1:
          "The Department of Electronics and Telecommunication Engineering is one of the major department of SSGMCE, Shegaon established in 1983 offering programs: Under Graduate, Post Graduate and Ph.D.",
        para2:
          "It is affiliated to Sant Gadge Baba Amravati University, Amravati, recognized by AICTE, New Delhi and approved by DTE, Maharashtra.",
      },
      hodName: "Dr. D. D. Nawgaje",
      hodDesignation: "Head of Department",
      hodEmail: "hod_extc@ssgmce.ac.in",
    },
    sections: [],
  },
  {
    pageId: "departments-electrical",
    pageTitle: "Electrical Engineering",
    pageDescription:
      "Department of Electrical Engineering (Electronics & Power)",
    route: "/departments/electrical",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Department of Electrical Engineering",
      heroSubtitle: "Electronics & Power",
      overview:
        "The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The Department is committed to the advancement of the frontiers of knowledge in electrical engineering and to provide the students with a stimulating and rewarding learning experience. We focus on holistic development through innovative teaching-learning processes, industrial training, ongoing projects, and regular interactions with industry experts.",
      vision:
        "To impart high quality education and excel in research in Electrical Engineering to serve the global society.",
      mission: [
        "To develop excellent learning center through continuous interaction with Industries, R&D centers and Academia.",
        "To promote excellence in teaching and research.",
        "To produce competent, entrepreneurial and committed Electrical Engineers with high human values.",
      ],
      hodName: "Dr. S. R. Paraskar",
      hodDesignation: "Professor & Head",
      hodEmail: "hod_elpo@ssgmce.ac.in",
      hodMessage:
        "The Department of Electrical Engineering offers a vibrant environment for undergraduate and post graduate education and research in Electrical Engineering. The academic activities are supported by eight well equipped laboratories. The department has strong industry interaction and has been involved in development of State of art products for Industry and consultancy projects.",
      hodPhoto: "/src/assets/images/departments/electrical/HOD_ELECTRICAL.jpg",
      videoUrl: "https://www.youtube.com/embed/1uezKM1fWOU",
    },
    sections: [],
  },
  {
    pageId: "departments-mechanical",
    pageTitle: "Mechanical Engineering",
    pageDescription: "Department of Mechanical Engineering",
    route: "/departments/mechanical",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Mechanical Engineering",
      heroSubtitle: "Driving Innovation",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/A4--_2sDgaQ",
        para1:
          "Mechanical Engineering is one of the oldest and broadest engineering disciplines. It involves the design, production, and operation of machinery.",
        para2:
          "Our department has state-of-the-art laboratories and a team of experienced faculty members dedicated to providing quality education.",
      },
      hodName: "Dr. S. P. Trikal",
      hodDesignation: "Head of Department",
      hodEmail: "hod_mech@ssgmce.ac.in",
    },
    sections: [],
  },
  {
    pageId: "departments-mba",
    pageTitle: "Business Administration",
    pageDescription: "Department of Business Administration (MBA)",
    route: "/departments/mba",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Business Administration",
      heroSubtitle: "Developing Leaders",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
        para1:
          "The Department of Business Administration and Research was established as the first Post-Graduate Department of Shri Sant Gajanan Maharaj College of Engineering.",
        para2:
          "The Department has made its dent in the management education of the region causing shift of the traditionally run annual pattern MBA to semester pattern.",
      },
      hodName: "Dr. P. M. Kuchar",
      hodDesignation: "Head of Department",
      hodEmail: "pmkuchar@ssgmce.ac.in",
    },
    sections: [],
  },
  {
    pageId: "departments-applied-sciences",
    pageTitle: "Applied Science & Humanities",
    pageDescription: "Department of Applied Science & Humanities",
    route: "/departments/applied-sciences",
    category: "departments",
    template: "department",
    isPublished: true,
    templateData: {
      heroTitle: "Applied Science & Humanities",
      heroSubtitle: "Foundation of Engineering",
      overview: {
        videoUrl: "https://www.youtube-nocookie.com/embed/5U2eIYBDr5Y",
        para1:
          "Applied Science is a bridge that connects Pure Sciences with the engineering world. The mission of the department is to generate human resource of excellent quality.",
        para2:
          "Department of Applied Science consists of Engineering Mathematics, Engineering Physics, Engineering Chemistry, and Humanities & Communication Skills.",
      },
      hodName: "Dr. A. S. Tate",
      hodDesignation: "Head of Department",
      hodEmail: "astale@ssgmce.ac.in",
    },
    sections: [],
  },
];

const basePages = [
  // Vision & Mission Page
  {
    pageId: "about-vision-mission",
    pageTitle: "Vision & Mission",
    pageDescription: "Our Guiding Principles",
    route: "/about/vision",
    category: "about",
    sections: [
      {
        sectionId: "vision",
        title: "Our Vision",
        type: "text",
        order: 1,
        content: {
          text: "To impart world-class Engineering and Management education in an environment of spiritual foundation to serve the global society.",
        },
      },
      {
        sectionId: "mission",
        title: "Our Mission",
        type: "list",
        order: 2,
        content: {
          items: [
            "To develop excellent learning center through continuous design and upgradation of courses in closed interaction with R&D centers, Industries and Academia.",
            "To produce competent, entrepreneurial and committed Technical and managerial human, with Spiritual foundation to serve the society.",
            "To develop state-of-the-art infrastructure, centers of excellence and to pursue research of global and local relevance.",
            "To strive for 'Sarve Bhanvantu Sukhinah' - the ideal of our parent organization Shri Gajanan Maharaj Sansthan, Shegaon through symbiosis of Science and Spirituality.",
          ],
        },
      },
      {
        sectionId: "core-values",
        title: "Core Values",
        type: "cards",
        order: 3,
        content: {
          cards: [
            {
              title: "Personal Excellence",
              icon: "FaHandHoldingHeart",
              color: "orange",
            },
            { title: "Accountability", icon: "FaUserTie", color: "orange" },
            {
              title: "Trustworthiness",
              icon: "FaHandHoldingHeart",
              color: "orange",
            },
            {
              title: "Holistic Development",
              icon: "FaGlobe",
              color: "orange",
            },
            {
              title: "Creativity & Innovation",
              icon: "FaLightbulb",
              color: "orange",
            },
          ],
        },
      },
      {
        sectionId: "goals",
        title: "Our Goals",
        type: "cards",
        order: 4,
        content: {
          cards: [
            {
              title: "Academic Independence",
              description: "To acquire autonomous status for the institute.",
            },
            {
              title: "Global Recognition",
              description:
                "To get programs accredited by international bodies.",
            },
            {
              title: "Research Hub",
              description:
                "To establish Recognized Research Centers in all departments.",
            },
            {
              title: "Industry Connect",
              description:
                "To strengthen industry-institute partnership for better opportunities.",
            },
            {
              title: "Digital Transformation",
              description:
                "To implement complete digitalization of academic and administrative processes.",
            },
            {
              title: "Sustainable Campus",
              description:
                "To maintain a green, eco-friendly, and energy-efficient campus.",
            },
          ],
        },
      },
    ],
  },
  // Principal Message Page
  {
    pageId: "about-principal-message",
    pageTitle: "Principal Message",
    pageDescription: "From the Desk of the Principal",
    route: "/about/principal",
    category: "about",
    sections: [
      {
        sectionId: "principal-info",
        title: "Principal Information",
        type: "cards",
        order: 1,
        content: {
          cards: [
            {
              title: "Dr. S. B. Somani",
              description: "Principal",
              icon: "principal",
            },
          ],
        },
      },
      {
        sectionId: "principal-image",
        title: "Principal Photo",
        type: "image",
        order: 2,
        content: {
          url: "/src/assets/images/about/principal_c.png",
          alt: "Dr. S. B. Somani - Principal SSGMCE",
        },
      },
      {
        sectionId: "contact-info",
        title: "Contact Information",
        type: "stats",
        order: 3,
        content: {
          stats: [
            {
              label: "Email",
              value: "principal@ssgmce.ac.in",
              icon: "FaEnvelope",
            },
            { label: "Phone", value: "+91-7265-252285", icon: "FaPhone" },
          ],
        },
      },
      {
        sectionId: "quote",
        title: "Principal Quote",
        type: "quote",
        order: 4,
        content: {
          quote:
            "Education is not just about acquiring knowledge, but about developing character, values, and a spirit of service to humanity.",
          author: "Dr. S. B. Somani",
        },
      },
      {
        sectionId: "message",
        title: "Message",
        type: "richtext",
        order: 5,
        content: {
          text: `<p><strong>Dear Students, Parents, and Well-wishers,</strong></p>
<p>On behalf of the faculty, staff, and our fellow students, I am pleased to welcome you to <strong>Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon</strong>. When you made SSGMCE as your College of choice, you took the first step in ensuring your place among the illustrious sons and daughters of this great institution.</p>
<p>SSGMCE, one of the leading technical institutes in the Vidarbha region, has always strived for quality education since its inception in <strong>1983</strong>. Over the last four decades, we have successfully nurtured scientific temper, professional competence, and social commitment among budding technocrats to find solutions to problems and serve the global society.</p>
<p>We live in challenging times where technology is evolving at an unprecedented pace. As the Principal of SSGMCE, I am privileged to work with a dedicated and talented group of educators who are committed to helping you propel your career ascent. Our focus extends beyond technical competence; we inculcate moral and ethical values among students so that they become good human beings and responsible citizens of the global society.</p>
<p>Our institution has been recognized with <strong>NAAC A+ accreditation</strong>, designated as a <strong>TCS Priority College</strong>, and ranked <strong>AAA by Careers360</strong>. These achievements reflect our commitment to excellence in education, research, and overall development.</p>
<p>We encourage our students to participate actively in co-curricular and extracurricular activities, technical competitions, research projects, and community service. These experiences complement classroom learning and prepare you for real-world challenges.</p>
<p>I take this opportunity to extend my heartiest wishes to all students to achieve success in their future endeavours. May you continue to uphold the values and traditions of SSGMCE and make meaningful contributions to society.</p>
<p><strong>With warm regards,<br/>Dr. S. B. Somani<br/>Principal, SSGMCE Shegaon</strong></p>`,
        },
      },
      {
        sectionId: "focus-areas",
        title: "Leadership Focus Areas",
        type: "cards",
        order: 6,
        content: {
          cards: [
            {
              title: "Academic Excellence",
              description:
                "Fostering a culture of continuous learning, innovation, and research to maintain high academic standards and industry-relevant curriculum.",
              icon: "FaAward",
              color: "blue",
            },
            {
              title: "Innovation & Research",
              description:
                "Encouraging students and faculty to pursue cutting-edge research, file patents, and develop innovative solutions for societal challenges.",
              icon: "FaLightbulb",
              color: "orange",
            },
            {
              title: "Holistic Development",
              description:
                "Nurturing well-rounded individuals through spiritual values, ethical practices, and comprehensive personality development programs.",
              icon: "FaUsers",
              color: "blue",
            },
          ],
        },
      },
    ],
  },
  // At Glance Page
  {
    pageId: "about-at-glance",
    pageTitle: "SSGMCE At A Glance",
    pageDescription: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
    route: "/about",
    category: "about",
    sections: [
      {
        sectionId: "about-intro",
        title: "About SSGMCE",
        type: "markdown",
        order: 1,
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
  // Inspiration Page
  {
    pageId: "about-inspiration",
    pageTitle: "Inspiration",
    pageDescription: "Our Spiritual Foundation",
    route: "/about/inspiration",
    category: "about",
    sections: [
      {
        sectionId: "intro",
        title: "Shri Sant Gajanan Maharaj",
        type: "richtext",
        order: 1,
        content: {
          text: `<p><strong>Shri Sant Gajanan Maharaj</strong>, the patron saint of Shegaon, is the divine inspiration behind our institution. His teachings of spiritual upliftment, selfless service, and universal brotherhood form the core values that guide our educational philosophy.</p>
<p>The saint appeared in Shegaon on February 23, 1878, and spent his life spreading the message of love, harmony, and devotion. His samadhi at Shegaon is today one of the most revered pilgrimage centers in Maharashtra.</p>`,
        },
      },
      {
        sectionId: "image",
        title: "Maharaj Photo",
        type: "image",
        order: 2,
        content: {
          url: "/images/gajanan-maharaj.jpg",
          alt: "Shri Sant Gajanan Maharaj",
        },
      },
      {
        sectionId: "teachings",
        title: "Core Teachings",
        type: "cards",
        order: 3,
        content: {
          cards: [
            {
              title: "Devotion (Bhakti)",
              description:
                "Sincere devotion to the divine leads to spiritual liberation.",
              icon: "FaHeart",
              color: "orange",
            },
            {
              title: "Service (Seva)",
              description:
                "Selfless service to humanity is the highest form of worship.",
              icon: "FaHandsHelping",
              color: "blue",
            },
            {
              title: "Equality",
              description: "All beings are equal in the eyes of the divine.",
              icon: "FaBalanceScale",
              color: "orange",
            },
            {
              title: "Simplicity",
              description:
                "Simple living and high thinking lead to inner peace.",
              icon: "FaLeaf",
              color: "blue",
            },
          ],
        },
      },
    ],
  },
  // Governing Body Page
  {
    pageId: "about-governing-body",
    pageTitle: "Governing Body",
    pageDescription: "Leadership & Administration",
    route: "/about/governing",
    category: "about",
    sections: [
      {
        sectionId: "intro",
        title: "About Governing Body",
        type: "text",
        order: 1,
        content: {
          text: "The Governing Body of SSGMCE, Shegaon is the apex decision-making body of the institution. It comprises eminent personalities from academia, industry, and administration who provide strategic direction and oversight for the institute's growth and development.",
        },
      },
      {
        sectionId: "members",
        title: "Governing Body Members",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "Chairman",
              description:
                "Shri. M. D. Kharkar, President, Shri Gajanan Shikshan Sanstha",
              icon: "FaUserTie",
              color: "blue",
            },
            {
              title: "Secretary",
              description: "Shri. S. M. Bharadwaj, Secretary, GSS",
              icon: "FaUserTie",
              color: "orange",
            },
            {
              title: "Principal",
              description: "Dr. S. B. Somani, Principal, SSGMCE",
              icon: "FaUserGraduate",
              color: "blue",
            },
            {
              title: "Industry Expert",
              description: "Representative from leading industry",
              icon: "FaIndustry",
              color: "orange",
            },
            {
              title: "University Nominee",
              description: "SGBAU Representative",
              icon: "FaUniversity",
              color: "blue",
            },
            {
              title: "AICTE Nominee",
              description: "AICTE Regional Office Representative",
              icon: "FaBuilding",
              color: "orange",
            },
          ],
        },
      },
      {
        sectionId: "functions",
        title: "Key Functions",
        type: "list",
        order: 3,
        content: {
          items: [
            "Formulating policies for academic excellence and institutional growth",
            "Approving annual budget and financial management",
            "Overseeing faculty recruitment and development",
            "Monitoring quality assurance and accreditation processes",
            "Building industry-academia partnerships",
            "Ensuring compliance with regulatory requirements",
          ],
        },
      },
    ],
  },
  // Committees Page
  {
    pageId: "about-committees",
    pageTitle: "Committees",
    pageDescription: "Institutional Committees",
    route: "/about/committees",
    category: "about",
    sections: [
      {
        sectionId: "intro",
        title: "About Committees",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE has established various committees to ensure smooth functioning of academic, administrative, and extracurricular activities. These committees work towards maintaining quality standards and fostering a conducive learning environment.",
        },
      },
      {
        sectionId: "academic-committees",
        title: "Academic Committees",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "Academic Council",
              description:
                "Oversees curriculum design, examination, and academic policies",
              icon: "FaBook",
              color: "blue",
            },
            {
              title: "Board of Studies",
              description:
                "Reviews and updates course content for each department",
              icon: "FaClipboardList",
              color: "orange",
            },
            {
              title: "Research Committee",
              description:
                "Promotes research activities and monitors PhD programs",
              icon: "FaFlask",
              color: "blue",
            },
            {
              title: "Library Committee",
              description: "Manages library resources and services",
              icon: "FaBookOpen",
              color: "orange",
            },
          ],
        },
      },
      {
        sectionId: "admin-committees",
        title: "Administrative Committees",
        type: "cards",
        order: 3,
        content: {
          cards: [
            {
              title: "Anti-Ragging Committee",
              description: "Ensures a ragging-free campus environment",
              icon: "FaShieldAlt",
              color: "blue",
            },
            {
              title: "Grievance Redressal",
              description: "Addresses student and staff grievances",
              icon: "FaBalanceScale",
              color: "orange",
            },
            {
              title: "Internal Complaints",
              description: "Handles complaints related to harassment",
              icon: "FaGavel",
              color: "blue",
            },
            {
              title: "Discipline Committee",
              description: "Maintains discipline and decorum",
              icon: "FaUserShield",
              color: "orange",
            },
          ],
        },
      },
    ],
  },
  // Organization Structure Page
  {
    pageId: "about-organization",
    pageTitle: "Organization Structure",
    pageDescription: "Institutional Hierarchy",
    route: "/about/structure",
    category: "about",
    sections: [
      {
        sectionId: "intro",
        title: "Organizational Overview",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE follows a well-defined organizational structure that ensures efficient administration and academic governance. The institution operates under the aegis of Shri Gajanan Shikshan Sanstha, Shegaon.",
        },
      },
      {
        sectionId: "hierarchy",
        title: "Administrative Hierarchy",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "Shri Gajanan Shikshan Sanstha",
              description: "Parent body providing overall guidance and support",
              icon: "FaBuilding",
              color: "orange",
            },
            {
              title: "Governing Body",
              description: "Apex decision-making authority",
              icon: "FaUsers",
              color: "blue",
            },
            {
              title: "Principal",
              description: "Chief Executive and Academic Head",
              icon: "FaUserTie",
              color: "orange",
            },
            {
              title: "Vice Principal",
              description: "Assists Principal in administration",
              icon: "FaUserCog",
              color: "blue",
            },
            {
              title: "Deans",
              description: "Heads of various academic functions",
              icon: "FaChalkboardTeacher",
              color: "orange",
            },
            {
              title: "HODs",
              description: "Department Heads managing respective departments",
              icon: "FaUserGraduate",
              color: "blue",
            },
          ],
        },
      },
      {
        sectionId: "departments",
        title: "Academic Departments",
        type: "list",
        order: 3,
        content: {
          items: [
            "Computer Science & Engineering (CSE)",
            "Information Technology (IT)",
            "Electronics & Telecommunication (E&TC)",
            "Electrical Engineering",
            "Mechanical Engineering",
            "Civil Engineering",
            "Applied Sciences & Humanities",
            "Master of Business Administration (MBA)",
          ],
        },
      },
      {
        sectionId: "support",
        title: "Support Services",
        type: "list",
        order: 4,
        content: {
          items: [
            "Central Library",
            "Training & Placement Cell",
            "Examination Section",
            "Administrative Office",
            "Accounts Section",
            "IT Infrastructure Cell",
            "Sports Department",
            "Hostel Administration",
          ],
        },
      },
    ],
  },

  // ========== ACADEMICS CATEGORY ==========
  {
    pageId: "academics-programs",
    pageTitle: "Academic Programs",
    pageDescription: "UG & PG Programs Offered",
    route: "/academics/programs",
    category: "academics",
    sections: [
      {
        sectionId: "intro",
        title: "Our Programs",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE offers a wide range of undergraduate and postgraduate programs in Engineering, Technology, and Management, all approved by AICTE and affiliated to SGBAU, Amravati.",
        },
      },
      {
        sectionId: "ug-programs",
        title: "Undergraduate Programs (B.E./B.Tech)",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "Computer Science & Engineering",
              description: "Intake: 180 | Duration: 4 Years",
              icon: "FaLaptopCode",
              color: "blue",
            },
            {
              title: "Information Technology",
              description: "Intake: 120 | Duration: 4 Years",
              icon: "FaNetworkWired",
              color: "orange",
            },
            {
              title: "Electronics & Telecommunication",
              description: "Intake: 60 | Duration: 4 Years",
              icon: "FaMicrochip",
              color: "blue",
            },
            {
              title: "Electrical Engineering",
              description: "Intake: 60 | Duration: 4 Years",
              icon: "FaBolt",
              color: "orange",
            },
            {
              title: "Mechanical Engineering",
              description: "Intake: 120 | Duration: 4 Years",
              icon: "FaCogs",
              color: "blue",
            },
            {
              title: "Civil Engineering",
              description: "Intake: 60 | Duration: 4 Years",
              icon: "FaBuilding",
              color: "orange",
            },
          ],
        },
      },
      {
        sectionId: "pg-programs",
        title: "Postgraduate Programs",
        type: "cards",
        order: 3,
        content: {
          cards: [
            {
              title: "M.Tech (CSE)",
              description: "Intake: 18 | Duration: 2 Years",
              icon: "FaGraduationCap",
              color: "blue",
            },
            {
              title: "M.Tech (VLSI)",
              description: "Intake: 18 | Duration: 2 Years",
              icon: "FaMicrochip",
              color: "orange",
            },
            {
              title: "MBA",
              description: "Intake: 120 | Duration: 2 Years",
              icon: "FaBriefcase",
              color: "blue",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "academics-departments",
    pageTitle: "Departments",
    pageDescription: "Academic Departments",
    route: "/academics/departments",
    category: "academics",
    sections: [
      {
        sectionId: "intro",
        title: "Academic Departments",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE has well-established departments with state-of-the-art laboratories, experienced faculty, and industry-oriented curriculum.",
        },
      },
      {
        sectionId: "departments",
        title: "Our Departments",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "Computer Science & Engineering",
              description: "Established 2000 | NBA Accredited",
              icon: "FaLaptopCode",
              color: "blue",
            },
            {
              title: "Information Technology",
              description: "Established 2002 | NBA Accredited",
              icon: "FaNetworkWired",
              color: "orange",
            },
            {
              title: "Electronics & Telecommunication",
              description: "Established 1995 | NBA Accredited",
              icon: "FaMicrochip",
              color: "blue",
            },
            {
              title: "Electrical Engineering",
              description: "Established 1984 | NBA Accredited",
              icon: "FaBolt",
              color: "orange",
            },
            {
              title: "Mechanical Engineering",
              description: "Established 1984 | NBA Accredited",
              icon: "FaCogs",
              color: "blue",
            },
            {
              title: "Civil Engineering",
              description: "Established 1984 | NBA Accredited",
              icon: "FaBuilding",
              color: "orange",
            },
            {
              title: "Applied Sciences & Humanities",
              description: "Foundation Courses",
              icon: "FaBook",
              color: "blue",
            },
            {
              title: "MBA Department",
              description: "Management Studies",
              icon: "FaBriefcase",
              color: "orange",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "academics-calendar",
    pageTitle: "Academic Calendar",
    pageDescription: "Important Academic Dates",
    route: "/academics/calendar",
    category: "academics",
    sections: [
      {
        sectionId: "intro",
        title: "Academic Calendar 2024-25",
        type: "text",
        order: 1,
        content: {
          text: "The academic calendar provides important dates for the academic year including semester schedules, examinations, holidays, and events.",
        },
      },
      {
        sectionId: "schedule",
        title: "Key Dates",
        type: "timeline",
        order: 2,
        content: {
          events: [
            {
              year: "July 2024",
              title: "Odd Semester Begins",
              description: "Commencement of First/Third/Fifth Semester",
            },
            {
              year: "Aug 2024",
              title: "First Internal Exam",
              description: "First Unit Test for all programs",
            },
            {
              year: "Oct 2024",
              title: "Mid-Semester Exam",
              description: "Second Unit Test",
            },
            {
              year: "Dec 2024",
              title: "University Exams",
              description: "End Semester Examinations",
            },
            {
              year: "Jan 2025",
              title: "Even Semester Begins",
              description: "Commencement of Second/Fourth/Sixth Semester",
            },
            {
              year: "May 2025",
              title: "Even Semester Ends",
              description: "End Semester Examinations",
            },
          ],
        },
      },
    ],
  },

  // ========== ADMISSIONS CATEGORY ==========
  {
    pageId: "admissions-overview",
    pageTitle: "Admissions Overview",
    pageDescription: "Admission Process & Eligibility",
    route: "/admissions/overview",
    category: "admissions",
    sections: [
      {
        sectionId: "intro",
        title: "Admission Process",
        type: "richtext",
        order: 1,
        content: {
          text: "<p>Admissions to <strong>SSGMCE, Shegaon</strong> are conducted through the <strong>Centralized Admission Process (CAP)</strong> governed by the Directorate of Technical Education (DTE), Maharashtra.</p><p>Students are admitted based on their performance in <strong>MHT-CET</strong> or <strong>JEE Main</strong> for engineering programs and <strong>MAH-MBA/MMS-CET</strong> for MBA program.</p>",
        },
      },
      {
        sectionId: "eligibility",
        title: "Eligibility Criteria",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "B.E./B.Tech",
              description: "10+2 with PCM, minimum 50% (45% for reserved)",
              icon: "FaGraduationCap",
              color: "blue",
            },
            {
              title: "M.Tech",
              description: "B.E./B.Tech with minimum 50% marks",
              icon: "FaUserGraduate",
              color: "orange",
            },
            {
              title: "MBA",
              description: "Graduate with minimum 50% marks",
              icon: "FaBriefcase",
              color: "blue",
            },
          ],
        },
      },
      {
        sectionId: "steps",
        title: "Admission Steps",
        type: "list",
        order: 3,
        content: {
          items: [
            "Register on DTE Maharashtra website",
            "Fill CAP application form",
            "Document verification at Facilitation Centre",
            "Option form filling for college preferences",
            "Seat allotment through CAP rounds",
            "Report to allotted college with documents",
            "Pay fees and confirm admission",
          ],
        },
      },
    ],
  },
  {
    pageId: "admissions-fee-structure",
    pageTitle: "Fee Structure",
    pageDescription: "Program-wise Fee Details",
    route: "/admissions/fees",
    category: "admissions",
    sections: [
      {
        sectionId: "intro",
        title: "Fee Structure 2024-25",
        type: "text",
        order: 1,
        content: {
          text: "The fee structure is as per the norms set by Shikshan Shulka Samiti (Fee Regulatory Authority), Government of Maharashtra. Additional fees for development, laboratory, and other facilities may apply.",
        },
      },
      {
        sectionId: "fees",
        title: "Program-wise Fees",
        type: "stats",
        order: 2,
        content: {
          stats: [
            {
              label: "B.E. (All Branches)",
              value: "₹87,000/year",
              icon: "FaRupeeSign",
              color: "blue",
            },
            {
              label: "M.Tech",
              value: "₹75,000/year",
              icon: "FaRupeeSign",
              color: "orange",
            },
            {
              label: "MBA",
              value: "₹92,000/year",
              icon: "FaRupeeSign",
              color: "blue",
            },
            {
              label: "Hostel (Boys)",
              value: "₹45,000/year",
              icon: "FaBed",
              color: "orange",
            },
            {
              label: "Hostel (Girls)",
              value: "₹45,000/year",
              icon: "FaBed",
              color: "blue",
            },
          ],
        },
      },
    ],
  },

  // ========== RESEARCH CATEGORY ==========
  {
    pageId: "research-overview",
    pageTitle: "Research & Innovation",
    pageDescription: "Research Activities & Achievements",
    route: "/research/overview",
    category: "research",
    sections: [
      {
        sectionId: "intro",
        title: "Research at SSGMCE",
        type: "richtext",
        order: 1,
        content: {
          text: "<p>SSGMCE is committed to fostering a culture of <strong>research and innovation</strong>. Our faculty and students actively engage in cutting-edge research, consultancy projects, and industry collaborations.</p><p>The institute has recognized <strong>PhD research centers</strong> in multiple disciplines and encourages interdisciplinary research to address real-world challenges.</p>",
        },
      },
      {
        sectionId: "stats",
        title: "Research Statistics",
        type: "stats",
        order: 2,
        content: {
          stats: [
            {
              label: "PhD Scholars",
              value: "50+",
              icon: "FaUserGraduate",
              color: "blue",
            },
            {
              label: "Publications",
              value: "500+",
              icon: "FaBook",
              color: "orange",
            },
            {
              label: "Patents Filed",
              value: "25+",
              icon: "FaCertificate",
              color: "blue",
            },
            {
              label: "Funded Projects",
              value: "₹2 Cr+",
              icon: "FaRupeeSign",
              color: "orange",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "research-phd",
    pageTitle: "PhD Programs",
    pageDescription: "Doctoral Research Programs",
    route: "/research/phd",
    category: "research",
    sections: [
      {
        sectionId: "intro",
        title: "PhD Research Centers",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE has PhD research centers recognized by SGBAU, Amravati in various engineering disciplines. Our research centers are equipped with modern facilities and guided by experienced faculty.",
        },
      },
      {
        sectionId: "centers",
        title: "Research Centers",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "CSE Research Center",
              description: "AI, ML, Data Science, Cybersecurity",
              icon: "FaLaptopCode",
              color: "blue",
            },
            {
              title: "E&TC Research Center",
              description: "VLSI, IoT, Embedded Systems",
              icon: "FaMicrochip",
              color: "orange",
            },
            {
              title: "Mechanical Research Center",
              description: "CAD/CAM, Thermal Engineering",
              icon: "FaCogs",
              color: "blue",
            },
            {
              title: "Electrical Research Center",
              description: "Power Systems, Control Systems",
              icon: "FaBolt",
              color: "orange",
            },
          ],
        },
      },
    ],
  },

  // ========== FACILITIES CATEGORY ==========
  {
    pageId: "facilities-library",
    pageTitle: "Central Library",
    pageDescription: "Library Resources & Services",
    route: "/facilities/library",
    category: "facilities",
    sections: [
      {
        sectionId: "intro",
        title: "Central Library",
        type: "richtext",
        order: 1,
        content: {
          text: "<p>The <strong>Central Library</strong> of SSGMCE is a state-of-the-art knowledge resource center spread over 2000 sq.m. with a seating capacity of 250 students. It houses a rich collection of books, journals, and digital resources.</p>",
        },
      },
      {
        sectionId: "stats",
        title: "Library Resources",
        type: "stats",
        order: 2,
        content: {
          stats: [
            {
              label: "Books",
              value: "50,000+",
              icon: "FaBook",
              color: "blue",
            },
            {
              label: "Journals",
              value: "150+",
              icon: "FaNewspaper",
              color: "orange",
            },
            {
              label: "E-Journals",
              value: "5000+",
              icon: "FaGlobe",
              color: "blue",
            },
            {
              label: "Digital Library",
              value: "DELNET",
              icon: "FaLaptop",
              color: "orange",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "facilities-hostel",
    pageTitle: "Hostel Facilities",
    pageDescription: "Accommodation for Students",
    route: "/facilities/hostels",
    category: "facilities",
    sections: [
      {
        sectionId: "intro",
        title: "Hostel Accommodation",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE provides comfortable hostel accommodation for both boys and girls with all modern amenities. The hostels are located within the campus ensuring safety and convenience.",
        },
      },
      {
        sectionId: "facilities",
        title: "Hostel Amenities",
        type: "cards",
        order: 2,
        content: {
          cards: [
            {
              title: "WiFi Connectivity",
              description: "24x7 high-speed internet",
              icon: "FaWifi",
              color: "blue",
            },
            {
              title: "Mess Facility",
              description: "Hygienic vegetarian food",
              icon: "FaUtensils",
              color: "orange",
            },
            {
              title: "Common Room",
              description: "TV, indoor games",
              icon: "FaTv",
              color: "blue",
            },
            {
              title: "Security",
              description: "24x7 security with CCTV",
              icon: "FaShieldAlt",
              color: "orange",
            },
          ],
        },
      },
    ],
  },
  {
    pageId: "facilities-sports",
    pageTitle: "Sports Facilities",
    pageDescription: "Sports & Recreation",
    route: "/facilities/sports",
    category: "facilities",
    sections: [
      {
        sectionId: "intro",
        title: "Sports at SSGMCE",
        type: "text",
        order: 1,
        content: {
          text: "SSGMCE believes in holistic development and provides excellent sports facilities. Students participate in various inter-college and university-level competitions.",
        },
      },
      {
        sectionId: "facilities",
        title: "Available Sports",
        type: "list",
        order: 2,
        content: {
          items: [
            "Cricket Ground with practice nets",
            "Football Ground",
            "Basketball Court",
            "Volleyball Court",
            "Badminton Courts (Indoor)",
            "Table Tennis",
            "Gymnasium",
            "Athletics Track",
          ],
        },
      },
    ],
  },
];

const supplementalPages = [
  {
    pageId: "about-governing",
    pageTitle: "Governing Body",
    pageDescription: "Governing Body",
    route: "/about/governing",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "about-principal",
    pageTitle: "Principal's Message",
    pageDescription: "Principal's Message",
    route: "/about/principal",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "about-vision",
    pageTitle: "Vision & Mission",
    pageDescription: "Vision & Mission",
    route: "/about/vision",
    category: "about",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "activities-clubs",
    pageTitle: "Student Clubs",
    pageDescription: "Student Clubs",
    route: "/activities/clubs",
    category: "activities",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "activities-events",
    pageTitle: "Events & Festivals",
    pageDescription: "Events & Festivals",
    route: "/activities/events",
    category: "activities",
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
    pageId: "admissions-contact",
    pageTitle: "Contact Admission Office",
    pageDescription: "Contact Admission Office",
    route: "/admissions/contact",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-docs",
    pageTitle: "Documents Required",
    pageDescription: "Documents Required",
    route: "/admissions/documents",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-dse",
    pageTitle: "Direct Second Year",
    pageDescription: "Direct Second Year",
    route: "/admissions/dse",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-faqs",
    pageTitle: "Admission FAQs",
    pageDescription: "Admission FAQs",
    route: "/admissions/faqs",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-fee",
    pageTitle: "Fee Structure",
    pageDescription: "Fee Structure",
    route: "/admissions/fees",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-mba",
    pageTitle: "MBA Admissions",
    pageDescription: "MBA Admissions",
    route: "/admissions/mba",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-pg",
    pageTitle: "Post Graduate Admissions",
    pageDescription: "Post Graduate Admissions",
    route: "/admissions/pg",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-phd",
    pageTitle: "Ph.D. Admissions",
    pageDescription: "Ph.D. Admissions",
    route: "/admissions/phd",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-process",
    pageTitle: "Admission Process",
    pageDescription: "Admission Process",
    route: "/admissions/process",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-scholarships",
    pageTitle: "Scholarships",
    pageDescription: "Scholarships",
    route: "/admissions/scholarships",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-seat",
    pageTitle: "Seat Matrix",
    pageDescription: "Seat Matrix",
    route: "/admissions/seat-matrix",
    category: "admissions",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "admissions-ug",
    pageTitle: "Under Graduate Admissions",
    pageDescription: "Under Graduate Admissions",
    route: "/admissions/ug",
    category: "admissions",
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
    pageId: "facilities-admin",
    pageTitle: "Administrative Office",
    pageDescription: "Administrative Office",
    route: "/facilities/administrative-office",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "facilities-computing",
    pageTitle: "Central Computing Facility",
    pageDescription: "Central Computing Facility",
    route: "/facilities/computing",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "facilities-other",
    pageTitle: "Other Facilities",
    pageDescription: "Other Facilities",
    route: "/facilities/other",
    category: "facilities",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "iqac-about",
    pageTitle: "About IQAC",
    pageDescription: "About IQAC",
    route: "/iqac/about",
    category: "iqac",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "placements-overview",
    pageTitle: "Placement Overview",
    pageDescription: "Placement Overview",
    route: "/placements/overview",
    category: "placements",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-coe",
    pageTitle: "Centre of Excellence",
    pageDescription: "Centre of Excellence",
    route: "/research/coe",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-collaboration",
    pageTitle: "Collaborations",
    pageDescription: "Collaborations",
    route: "/research/collaboration",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-iic",
    pageTitle: "IIC",
    pageDescription: "IIC",
    route: "/research/iic",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-innovation",
    pageTitle: "Innovation Cell",
    pageDescription: "Innovation Cell",
    route: "/research/innovation",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-ipr",
    pageTitle: "IPR Cell",
    pageDescription: "IPR Cell",
    route: "/research/ipr",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-nisp",
    pageTitle: "NISP",
    pageDescription: "NISP",
    route: "/research/nisp",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-patents",
    pageTitle: "Patents & IP",
    pageDescription: "Patents & IP",
    route: "/research/patents",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-policy",
    pageTitle: "Research Policy",
    pageDescription: "Research Policy",
    route: "/research/policy",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-projects",
    pageTitle: "Funded Projects",
    pageDescription: "Funded Projects",
    route: "/research/projects",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-publications",
    pageTitle: "Publications",
    pageDescription: "Publications",
    route: "/research/publications",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-rdc",
    pageTitle: "R&D Cell",
    pageDescription: "R&D Cell",
    route: "/research/rdc",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-sabbatical",
    pageTitle: "Sabbatical Training",
    pageDescription: "Sabbatical Training",
    route: "/research/sabbatical",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
  {
    pageId: "research-ug-projects",
    pageTitle: "UG Projects",
    pageDescription: "UG Projects",
    route: "/research/ug-projects",
    category: "research",
    template: "generic",
    isPublished: true,
    sections: [],
  },
];

const defaultPages = [...basePages, ...departmentPages, ...supplementalPages];

// Import comprehensive nav pages data
const allNavPages = require("../data/allNavPages");
const {
  RESEARCH_MARKDOWN_PAGE_IDS,
} = require("../data/researchMarkdownContent");
const { IQAC_MARKDOWN_PAGE_IDS } = require("../data/iqacMarkdownContent");

const ACADEMICS_MARKDOWN_PAGE_IDS = [
  "academics-planner",
  "academics-teaching",
  "academics-timetable",
  "academics-rules",
  "academics-syllabus",
  "academics-incentive",
  "academics-marks",
  "academics-rubrics",
  "academics-innovative",
  "academics-reports",
];

const getDefaultPages = () => defaultPages;
const PAGE_BY_ID_CACHE_TTL_MS = 60 * 1000;
const pageByIdCache = new Map();

const getCachedPageById = (pageId) => {
  const cached = pageByIdCache.get(pageId);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > PAGE_BY_ID_CACHE_TTL_MS) {
    pageByIdCache.delete(pageId);
    return null;
  }

  return cached.data;
};

const setCachedPageById = (pageId, data) => {
  if (!pageId || !data) return;
  pageByIdCache.set(pageId, { data, timestamp: Date.now() });
};

const invalidatePageByIdCache = (pageId) => {
  if (!pageId) return;
  pageByIdCache.delete(String(pageId).toLowerCase());
};

const clearPageByIdCache = () => {
  pageByIdCache.clear();
};

const hasMarkdownSections = (page) =>
  Array.isArray(page?.sections) &&
  page.sections.some((section) => section.type === "markdown");

const isResearchMarkdownPlaceholderPage = (page) => {
  if (!RESEARCH_MARKDOWN_PAGE_IDS.includes(page?.pageId)) return false;
  if (!Array.isArray(page?.sections) || page.sections.length === 0)
    return false;

  return page.sections.some((section) => {
    const text = String(section?.content?.text || "").trim();
    return (
      text.startsWith("Welcome to the ") &&
      text.includes("This content can be edited from the admin panel.")
    );
  });
};

const shouldSeedNavPage = (existing, pageData, forceUpdate = false) => {
  if (!existing) return true;
  if (forceUpdate) return true;
  if (pageData.route && existing.route !== pageData.route) return true;
  if (pageData.category && existing.category !== pageData.category) return true;
  if (!pageData.sections || pageData.sections.length === 0) return false;
  if (!existing.sections || existing.sections.length === 0) return true;

  // Research pages used to ship with legacy non-Markdown section types.
  // Refresh them once so they move onto the shared Markdown editing flow.
  if (
    RESEARCH_MARKDOWN_PAGE_IDS.includes(pageData.pageId) &&
    !hasMarkdownSections(existing)
  ) {
    return true;
  }

  // IQAC pages migrated from hardcoded JSX to Markdown editing flow.
  if (
    IQAC_MARKDOWN_PAGE_IDS.includes(pageData.pageId) &&
    !hasMarkdownSections(existing)
  ) {
    return true;
  }

  // Academics pages migrated from hardcoded JSX to Markdown editing flow.
  if (
    ACADEMICS_MARKDOWN_PAGE_IDS.includes(pageData.pageId) &&
    !hasMarkdownSections(existing)
  ) {
    return true;
  }

  // Facilities pages migrated from static JSX to CMS Markdown editing flow.
  // Refresh once so legacy non-Markdown content is replaced with Markdown seeds.
  if (
    pageData.pageId.startsWith("facilities-") &&
    !hasMarkdownSections(existing)
  ) {
    return true;
  }

  // Refresh legacy placeholder research markdown content.
  if (isResearchMarkdownPlaceholderPage(existing)) {
    return true;
  }

  // Refresh about-at-glance from legacy richtext/stats/cards/timeline to markdown-first schema.
  if (pageData.pageId === "about-at-glance") {
    const existingSections = existing.sections || [];
    const existingSectionIds = new Set(
      existingSections.map((section) => section.sectionId),
    );

    const hasLegacyShape =
      existingSectionIds.has("hero-content") ||
      existingSectionIds.has("hero-image") ||
      existingSectionIds.has("quick-stats") ||
      existingSectionIds.has("milestones");

    const hasExpectedMarkdownSections =
      existingSectionIds.has("about-intro") &&
      existingSectionIds.has("quick-facts") &&
      existingSectionIds.has("history-milestones") &&
      existingSectionIds.has("recognitions") &&
      existingSectionIds.has("infrastructure") &&
      existingSectionIds.has("placements-overview");

    const hasCampusImageSection = existingSections.some(
      (section) =>
        section.sectionId === "campus-image" && section.type === "image",
    );

    if (hasLegacyShape || !hasExpectedMarkdownSections || !hasCampusImageSection) {
      return true;
    }
  }

  // Refresh legacy inspiration page data to the founder-focused markdown layout.
  if (pageData.pageId === "about-inspiration") {
    const existingSectionIds = new Set(
      (existing.sections || []).map((section) => section.sectionId),
    );
    const hasLegacyInspirationShape =
      existingSectionIds.has("intro") ||
      existingSectionIds.has("image") ||
      existingSectionIds.has("teachings");
    const hasLegacyTitle =
      String(existing.pageTitle || "").trim().toLowerCase() === "inspiration";

    if (hasLegacyInspirationShape || hasLegacyTitle) {
      return true;
    }
  }

  // Refresh legacy principal page data to the Principal Speaks schema.
  if (pageData.pageId === "about-structure") {
    const existingSections = existing.sections || [];
    const byId = new Map(
      existingSections.map((section) => [section.sectionId, section]),
    );

    const hasExpectedMarkdownSections =
      byId.has("org-intro") &&
      byId.has("departments") &&
      byId.has("admin-offices") &&
      ["org-intro", "departments", "admin-offices"].every(
        (sectionId) =>
          String(byId.get(sectionId)?.type || "").toLowerCase() === "markdown",
      );

    if (!hasExpectedMarkdownSections) {
      return true;
    }
  }

  // Refresh legacy principal page data to markdown-first schema.
  if (pageData.pageId === "about-principal") {
    const existingSections = existing.sections || [];
    const existingSectionIds = new Set(
      existingSections.map((section) => section.sectionId),
    );
    const byId = new Map(
      existingSections.map((section) => [section.sectionId, section]),
    );

    const hasLegacyPrincipalShape =
      existingSectionIds.has("principal-info") ||
      existingSectionIds.has("principal-image") ||
      existingSectionIds.has("contact-info") ||
      existingSectionIds.has("quote") ||
      existingSectionIds.has("message") ||
      existingSectionIds.has("focus-areas");
    const hasLegacyTitle = /principal'?s?\s*message/i.test(
      String(existing.pageTitle || ""),
    );
    const hasExpectedMarkdownSections =
      String(byId.get("principal-photo")?.type || "").toLowerCase() ===
        "image" &&
      String(byId.get("principal-message")?.type || "").toLowerCase() ===
        "markdown" &&
      String(byId.get("leadership-focus")?.type || "").toLowerCase() ===
        "markdown";

    if (hasLegacyPrincipalShape || hasLegacyTitle || !hasExpectedMarkdownSections) {
      return true;
    }
  }

  // Refresh legacy vision page data to markdown-first schema.
  if (pageData.pageId === "about-vision") {
    const existingSections = existing.sections || [];
    const existingSectionIds = new Set(
      existingSections.map((section) => section.sectionId),
    );

    const hasExpectedMarkdownSections =
      existingSectionIds.has("vision") &&
      existingSectionIds.has("mission") &&
      existingSectionIds.has("core-values") &&
      existingSectionIds.has("goals") &&
      existingSections
        .filter((section) =>
          ["vision", "mission", "core-values", "goals"].includes(
            section.sectionId,
          ),
        )
        .every((section) => section.type === "markdown");

    const hasLegacyVisionShape = existingSections.some(
      (section) =>
        ["vision", "mission", "core-values", "goals"].includes(
          section.sectionId,
        ) &&
        ["richtext", "text", "list", "cards"].includes(
          String(section.type || "").toLowerCase(),
        ),
    );

    if (hasLegacyVisionShape || !hasExpectedMarkdownSections) {
      return true;
    }
  }

  // Refresh legacy governing page data to the markdown table format.
  if (pageData.pageId === "about-governing") {
    const existingSectionIds = new Set(
      (existing.sections || []).map((section) => section.sectionId),
    );
    const hasLegacyGoverningShape =
      existingSectionIds.has("intro") ||
      existingSectionIds.has("members") ||
      existingSectionIds.has("functions");
    const hasExpectedTableSection =
      existingSectionIds.has("governing-intro") &&
      (existing.sections || []).some(
        (section) =>
          section.sectionId === "governing-intro" &&
          section.type === "markdown" &&
          String(section?.content?.text || "").includes("| Sr.No."),
      );

    if (hasLegacyGoverningShape || !hasExpectedTableSection) {
      return true;
    }
  }

  // Refresh NIRF ranking page when sections count changed OR category differs.
  if (pageData.pageId === "nirf-ranking") {
    if (pageData.sections.length > (existing.sections?.length || 0))
      return true;
    if (pageData.category && existing.category !== pageData.category)
      return true;
  }

  return false;
};

const upsertDefaultPages = async ({ overwrite = false } = {}) => {
  const pages = getDefaultPages().map((page) => ({
    ...page,
    pageId:
      typeof page.pageId === "string" ? page.pageId.toLowerCase() : page.pageId,
  }));

  if (!pages.length) {
    return { count: 0, upserted: 0, modified: 0 };
  }

  const ops = pages.map((page) => ({
    updateOne: {
      filter: { pageId: page.pageId },
      update: overwrite ? { $set: page } : { $setOnInsert: page },
      upsert: true,
    },
  }));

  const result = await PageContent.bulkWrite(ops, { ordered: false });

  return {
    count: pages.length,
    upserted: result.upsertedCount || 0,
    modified: result.modifiedCount || 0,
  };
};

// @desc    Get all pages
// @route   GET /api/pages
// @access  Public
const getAllPages = async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};

    const navOrderByPageId = new Map(
      allNavPages.map((page, index) => [String(page.pageId || ""), index]),
    );

    const pages = await PageContent.find(filter)
      .select(
        "pageId pageTitle pageDescription route category isPublished updatedAt menuOrder parentMenu",
      )
      .lean();

    const pagesWithOrder = pages.map((page) => {
      const pageId = String(page.pageId || "");
      const navOrder = navOrderByPageId.has(pageId)
        ? navOrderByPageId.get(pageId)
        : Number.MAX_SAFE_INTEGER;

      return {
        ...page,
        navOrder,
      };
    });

    res.json({
      success: true,
      count: pagesWithOrder.length,
      data: pagesWithOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get page by ID
// @route   GET /api/pages/:pageId
// @access  Public
const getPageById = async (req, res) => {
  try {
    const requestedPageId = String(req.params.pageId || "").toLowerCase();
    const cachedPage = getCachedPageById(requestedPageId);
    if (cachedPage) {
      return res.json({
        success: true,
        data: cachedPage,
      });
    }

    let page = await PageContent.findOne({ pageId: requestedPageId }).lean();

    // Ensure missing nav-backed pages stay resolvable without requiring
    // an explicit manual seed run first.
    if (!page) {
      const navPageTemplate = allNavPages.find(
        (item) => item.pageId === requestedPageId,
      );

      if (navPageTemplate) {
        // Return template immediately for faster first load, then upsert in background.
        page = { ...navPageTemplate };
        setCachedPageById(requestedPageId, page);

        res.json({
          success: true,
          data: page,
        });

        PageContent.updateOne(
          { pageId: requestedPageId },
          { $setOnInsert: navPageTemplate },
          { upsert: true, setDefaultsOnInsert: true },
        ).catch((error) => {
          console.error(
            `[Page Seed] Failed to upsert ${requestedPageId}:`,
            error.message,
          );
        });

        return;
      }
    }

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    setCachedPageById(requestedPageId, page);

    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new page
// @route   POST /api/pages
// @access  Private/Admin
const createPage = async (req, res) => {
  try {
    const {
      pageId,
      pageTitle,
      pageDescription,
      route,
      category,
      sections,
      template,
      templateData,
    } = req.body;

    const existingPage = await PageContent.findOne({ pageId });
    if (existingPage) {
      return res.status(400).json({
        success: false,
        message: "Page with this ID already exists",
      });
    }

    const page = await PageContent.create({
      pageId,
      pageTitle,
      pageDescription,
      route,
      category,
      sections: sections || [],
      template: template || "generic",
      templateData: templateData || {},
      lastEditedBy: req.user._id,
    });

    setCachedPageById(String(page.pageId || "").toLowerCase(), page.toObject());

    res.status(201).json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update page
// @route   PUT /api/pages/:pageId
// @access  Private
// Map User-model department codes → department pageId suffixes
const DEPT_TO_PAGEID = {
  CSE: "departments-cse",
  IT: "departments-it",
  MECH: "departments-mechanical",
  ELECTRICAL: "departments-electrical",
  ENTC: "departments-entc",
  MBA: "departments-mba",
  ASH: "departments-applied-sciences",
};

const updatePage = async (req, res) => {
  try {
    const page = await PageContent.findOne({ pageId: req.params.pageId });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    // ── Coordinator department check ──────────────────────────
    // Coordinators may only edit their own department page.
    if (req.user.role === "Coordinator" && req.user.department !== "All") {
      const allowedPageId = DEPT_TO_PAGEID[req.user.department];
      if (!allowedPageId || page.pageId !== allowedPageId) {
        return res.status(403).json({
          success: false,
          message: "You can only edit your own department page.",
        });
      }
    }

    // ── Save snapshot BEFORE applying the edit (for reset) ───
    const previousSnapshot = page.toObject();

    const immutableFields = new Set([
      "_id",
      "__v",
      "createdAt",
      "updatedAt",
      "lastEditedBy",
      "pageId",
    ]);

    // Allowed section types from the schema enum — used to strip any
    // unknown types that the client might send (e.g. after a schema
    // migration) so that page.save() never fails with a validation error.
    const VALID_SECTION_TYPES = new Set([
      "text",
      "richtext",
      "markdown",
      "list",
      "image",
      "stats",
      "timeline",
      "cards",
      "table",
      "quote",
      "tabs",
      "accordion",
      "faculty",
      "gallery",
      "video",
      "pdf",
      "sidebar",
      "hod",
      "link",
      "iqac-stats",
      "meeting-records",
      "year-reports",
      "naac-criteria",
      "video-gallery",
      "document-grid",
      "process-steps",
      "info-cards",
    ]);

    const body = { ...(req.body || {}) };

    // Sanitize sections: drop any entry whose type is not in the enum
    if (Array.isArray(body.sections)) {
      body.sections = body.sections.filter((s) =>
        VALID_SECTION_TYPES.has(s.type),
      );
    }

    Object.entries(body).forEach(([key, value]) => {
      if (!immutableFields.has(key)) {
        page.set(key, value);
      }
    });

    page.lastEditedBy = req.user._id;

    await page.save();
    setCachedPageById(String(page.pageId || "").toLowerCase(), page.toObject());

    // ── Write edit log entry ─────────────────────────────────
    try {
      await EditLog.create({
        user: req.user._id,
        userName: req.user.name || req.user.email || "Unknown",
        userRole: req.user.role,
        userDepartment: req.user.department || "",
        pageId: page.pageId,
        pageTitle: page.pageTitle || page.pageId,
        action: "edit",
        previousData: previousSnapshot,
        summary: `${req.user.role} ${req.user.name || ""} edited ${page.pageId}`,
      });
    } catch (logErr) {
      console.error("EditLog write failed (non-blocking):", logErr.message);
    }

    res.json({
      success: true,
      data: page,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete page
// @route   DELETE /api/pages/:pageId
// @access  Private/Admin
const deletePage = async (req, res) => {
  try {
    const page = await PageContent.findOneAndDelete({
      pageId: req.params.pageId,
    });

    if (!page) {
      return res.status(404).json({
        success: false,
        message: "Page not found",
      });
    }

    invalidatePageByIdCache(req.params.pageId);

    res.json({
      success: true,
      message: "Page deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Seed initial data for default pages
// @route   POST /api/pages/seed
// @access  Private/Admin
const seedAboutPages = async (req, res) => {
  try {
    const seedData = defaultPages;

    // Clear existing seed data and insert new
    for (const pageData of seedData) {
      await PageContent.findOneAndUpdate(
        { pageId: pageData.pageId },
        pageData,
        { upsert: true, new: true },
      );
    }
    clearPageByIdCache();

    res.json({
      success: true,
      message: `Successfully seeded ${seedData.length} pages`,
      data: seedData.map((p) => ({ pageId: p.pageId, pageTitle: p.pageTitle })),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Seed ALL navbar pages – creates PageContent entries for every
 * route defined in the navigation config. Uses upsert so existing
 * pages are NOT overwritten (preserves admin edits), only missing
 * pages are created.
 */
const seedAllNavPages = async (req, res) => {
  try {
    let created = 0;
    let skipped = 0;
    let updated = 0;
    const forceUpdate = req.query.force === "true";

    for (const pageData of allNavPages) {
      const existing = await PageContent.findOne({ pageId: pageData.pageId });
      if (existing) {
        if (shouldSeedNavPage(existing, pageData, forceUpdate)) {
          await PageContent.updateOne(
            { pageId: pageData.pageId },
            {
              $set: {
                sections: pageData.sections,
                pageTitle: pageData.pageTitle,
                pageDescription: pageData.pageDescription,
                route: pageData.route,
                category: pageData.category,
              },
            },
          );
          updated++;
        } else {
          skipped++;
        }
      } else {
        await PageContent.create(pageData);
        created++;
      }
    }

    clearPageByIdCache();

    res.json({
      success: true,
      message: `Seeded nav pages: ${created} created, ${updated} updated, ${skipped} skipped`,
      data: { created, updated, skipped, total: allNavPages.length },
    });
  } catch (error) {
    console.error("Error seeding nav pages:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Auto-seed missing pages (called on server startup).
 * Only inserts pages that don't already exist.
 */
const autoSeedMissingPages = async () => {
  try {
    // Deduplicate page seeds by pageId.
    // allNavPages is the source of truth and should override legacy defaults.
    const seedMap = new Map();
    for (const page of defaultPages) seedMap.set(page.pageId, page);
    for (const page of allNavPages) seedMap.set(page.pageId, page);

    const validFacilitiesIds = new Set(
      allNavPages
        .filter((page) => page.category === "facilities")
        .map((page) => page.pageId),
    );

    // Avoid re-seeding stale legacy facilities pageIds on each startup.
    const allSeedData = [...seedMap.values()].filter((page) => {
      const pageId = String(page?.pageId || "");
      return !pageId.startsWith("facilities-") || validFacilitiesIds.has(pageId);
    });

    if (!allSeedData.length) return;

    const pageIds = allSeedData.map((page) => page.pageId);
    const existingPages = await PageContent.find({
      pageId: { $in: pageIds },
    }).lean();
    const existingByPageId = new Map(
      existingPages.map((page) => [String(page.pageId || ""), page]),
    );

    const operations = [];
    let created = 0;
    let updated = 0;

    for (const pageData of allSeedData) {
      const existing = existingByPageId.get(pageData.pageId);

      if (!existing) {
        operations.push({
          insertOne: {
            document: pageData,
          },
        });
        created++;
        continue;
      }

      if (shouldSeedNavPage(existing, pageData)) {
        operations.push({
          updateOne: {
            filter: { pageId: pageData.pageId },
            update: {
              $set: {
                sections: pageData.sections,
                pageTitle: pageData.pageTitle,
                pageDescription: pageData.pageDescription,
                route: pageData.route,
                category: pageData.category,
              },
            },
          },
        });
        updated++;
      }
    }

    if (operations.length) {
      await PageContent.bulkWrite(operations, { ordered: false });
    }

    // Remove stale/orphan facilities pages that are no longer in allNavPages.
    const staleCleanupResult = await PageContent.deleteMany({
      $and: [
        {
          $or: [
            { category: "facilities" },
            { pageId: { $regex: /^facilities-/ } },
          ],
        },
        { pageId: { $nin: [...validFacilitiesIds] } },
      ],
    });
    const removed = staleCleanupResult?.deletedCount || 0;

    if (created > 0 || updated > 0 || removed > 0) {
      clearPageByIdCache();
      console.log(
        `[Auto-Seed] Created ${created} missing page(s), updated ${updated} empty page(s), removed ${removed} stale facilities page(s).`,
      );
    }
  } catch (error) {
    console.error("[Auto-Seed] Error:", error.message);
  }
};

// ─── Edit Logs ────────────────────────────────────────────────────
// @desc    Get edit logs (optionally filtered by pageId)
// @route   GET /api/pages/edit-logs
// @access  Private/SuperAdmin
const getEditLogs = async (req, res) => {
  try {
    const filter = {};
    if (req.query.pageId) filter.pageId = req.query.pageId;
    if (req.query.userId) filter.user = req.query.userId;

    const logs = await EditLog.find(filter)
      .sort({ createdAt: -1 })
      .limit(parseInt(req.query.limit) || 100)
      .select("-previousData"); // Don't send bulky snapshots in listing

    res.json({ success: true, data: logs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reset a page to the state it was in before a specific edit log entry
// @route   POST /api/pages/reset/:logId
// @access  Private/SuperAdmin
const resetPageToVersion = async (req, res) => {
  try {
    const log = await EditLog.findById(req.params.logId);
    if (!log) {
      return res
        .status(404)
        .json({ success: false, message: "Log entry not found" });
    }
    if (!log.previousData) {
      return res.status(400).json({
        success: false,
        message: "No previous data snapshot available for this log entry",
      });
    }

    const page = await PageContent.findOne({ pageId: log.pageId });
    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }

    // Save current state as a snapshot before resetting
    const currentSnapshot = page.toObject();

    // Restore from snapshot
    const immutableFields = new Set([
      "_id",
      "__v",
      "createdAt",
      "updatedAt",
      "lastEditedBy",
      "pageId",
    ]);
    const restoreData = log.previousData;

    Object.keys(restoreData).forEach((key) => {
      if (!immutableFields.has(key)) {
        page.set(key, restoreData[key]);
      }
    });

    page.lastEditedBy = req.user._id;
    await page.save();
    setCachedPageById(String(page.pageId || "").toLowerCase(), page.toObject());

    // Log the reset action
    await EditLog.create({
      user: req.user._id,
      userName: req.user.name || req.user.email || "Unknown",
      userRole: req.user.role,
      userDepartment: req.user.department || "",
      pageId: page.pageId,
      pageTitle: page.pageTitle || page.pageId,
      action: "reset",
      previousData: currentSnapshot,
      summary: `SuperAdmin reset ${page.pageId} to version from ${log.createdAt.toISOString()}`,
    });

    res.json({
      success: true,
      message: `Page "${page.pageId}" has been reset to the version from ${log.createdAt.toISOString()}.`,
      data: page,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllPages,
  getPageById,
  createPage,
  updatePage,
  deletePage,
  seedAboutPages,
  seedAllNavPages,
  autoSeedMissingPages,
  getDefaultPages,
  upsertDefaultPages,
  getMenuStructure,
  getEditLogs,
  resetPageToVersion,
};

// Get menu structure for navigation
async function getMenuStructure(req, res) {
  try {
    const pages = await PageContent.find({
      isPublished: true,
      showInMenu: true,
    })
      .select("pageId pageTitle route parentMenu menuLabel menuOrder")
      .sort({ parentMenu: 1, menuOrder: 1 });

    // Group pages by parent menu
    const menuStructure = {};
    const menuCategories = [
      "none",
      "about",
      "academics",
      "facilities",
      "admissions",
      "research",
      "placements",
      "student-corner",
      "iqac",
    ];

    menuCategories.forEach((category) => {
      menuStructure[category] = [];
    });

    pages.forEach((page) => {
      const parentMenu = page.parentMenu || "none";
      menuStructure[parentMenu].push({
        pageId: page.pageId,
        title: page.menuLabel || page.pageTitle,
        route: page.route,
        order: page.menuOrder,
      });
    });

    res.json({ success: true, data: menuStructure });
  } catch (error) {
    console.error("Error fetching menu structure:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch menu structure" });
  }
}
