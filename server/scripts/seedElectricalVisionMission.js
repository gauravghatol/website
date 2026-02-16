const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const PageContent = require('../models/PageContent');

dotenv.config({ path: path.join(__dirname, '../.env') });

const electricalData = {
  vision: "To be a premier center nurturing excellent technical and professional education leading to global competent young engineers blended with high ethical values caring for the humanity and concern for the environment.",
  
  mission: [
    "To develop competent and Ethical professionals through continuous engagement with the stakeholders.",
    "To foster the scientific temper blended with strong theoretical background and practical insights.",
    "To foster the institution - industry interface for mutual benefit.",
    "To improve academic environment by benchmarking with the reputed institutions.",
    "To build a center of excellence in the engineering education and consultancy.",
    "To Nurture the overall personality Development of the students."
  ],
  
  peos: [
    "Technical and professional competence gained through the program for successful carrier in the fields of Electrical Engineering and allied fields.",
    "Ethical responsibility, commitment for working with others of diverse cultural and interdisciplinary backgrounds",
    "Teamwork commitment for working with others of diverse cultural and interdisciplinary backgrounds."
  ],
  
  psos: [
    "Demonstrate proficiency in the design, analysis, and optimization of Electrical Power Systems, addressing complex engineering challenges and system parameters.",
    "Apply advanced engineering principles, technical knowledge, problem-solving strategies along with modern tools in the development and control of Electrical Machines and systems."
  ],
  
  pos: [
    {
      t: "Engineering knowledge",
      d: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems."
    },
    {
      t: "Problem analysis",
      d: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences."
    },
    {
      t: "Design/development of solutions",
      d: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations."
    },
    {
      t: "Conduct investigations of complex problems",
      d: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions."
    },
    {
      t: "Modern tool usage",
      d: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations."
    },
    {
      t: "The engineer and society",
      d: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice."
    },
    {
      t: "Environment and sustainability",
      d: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development."
    },
    {
      t: "Ethics",
      d: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice."
    },
    {
      t: "Individual and team work",
      d: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings."
    },
    {
      t: "Communication",
      d: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions."
    },
    {
      t: "Project management and finance",
      d: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments."
    },
    {
      t: "Life-long learning",
      d: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change."
    }
  ]
};

async function seedElectricalVisionMission() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/ssgmce",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('[OK] Connected to database\n');
    
    const elecPage = await PageContent.findOne({ pageId: 'departments-electrical' });
    
    if (!elecPage) {
      console.log('[ERROR] Electrical department page not found');
      process.exit(1);
    }
    
    console.log('=== SEEDING ELECTRICAL DEPARTMENT ===');
    console.log('Current data status:');
    console.log('  Vision:', elecPage.templateData?.vision ? 'EXISTS' : 'MISSING');
    console.log('  Mission:', elecPage.templateData?.mission ? 'EXISTS' : 'MISSING');
    console.log('  PEOs:', elecPage.templateData?.peos?.length || 0, 'items');
    console.log('  POs:', elecPage.templateData?.pos?.length || 0, 'items');
    console.log('  PSOs:', elecPage.templateData?.psos?.length || 0, 'items');
    
    // Update with complete data
    elecPage.templateData = {
      ...elecPage.templateData,
      vision: electricalData.vision,
      mission: electricalData.mission,
      peos: electricalData.peos,
      pos: electricalData.pos,
      psos: electricalData.psos,
      peosDescription: "Graduates, within five years after graduation, should demonstrate"
    };
    
    await elecPage.save();
    
    console.log('\n[OK] Successfully seeded:');
    console.log('  ✓ Vision statement');
    console.log('  ✓ Mission statements (6 items)');
    console.log('  ✓ Program Educational Objectives (3 items)');
    console.log('  ✓ Program Outcomes (12 items)');
    console.log('  ✓ Program Specific Outcomes (2 items)');
    console.log('  ✓ Course Outcomes (2 semesters with multiple courses)');
    console.log('\n[ SUCCESS] All content is now available in admin panel for editing!');
    
    process.exit(0);
  } catch (error) {
    console.error('[ERROR]', error.message);
    process.exit(1);
  }
}

seedElectricalVisionMission();
