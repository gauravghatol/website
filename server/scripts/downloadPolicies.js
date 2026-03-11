const https = require("https");
const fs = require("fs");
const path = require("path");

// Policy documents from SSGMCE website
const policies = [
  {
    name: "01_Strategic_Plan_2018-2023.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/1_startegic_pan_and%20_deployment.pdf",
    title: "Strategic Plan and Deployment (2018-19 To 2022-23)",
  },
  {
    name: "02_Strategic_Plan_2023-2028.pdf",
    url: "https://ssgmce.ac.in/uploads/Strategic%20Plan%20with%20sign%2023-28.pdf",
    title: "Strategic Plan and Deployment (2023-24 To 2027-28)",
  },
  {
    name: "03_Curriculum_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/2_Curriculam%20Policy-updated.pdf",
    title: "Curriculum Policy",
  },
  {
    name: "04_Innovation_Practices.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/3_Innovation%20Practices-updated.pdf",
    title: "Innovation Practices",
  },
  {
    name: "05_Student_Centric.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/4_2.3.1%20Student-centric.pdf",
    title: "Student Centric Policies",
  },
  {
    name: "06_Exam_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/5_Exam%20Policy-rev.pdf",
    title: "Examination Policy",
  },
  {
    name: "07_Mentor_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/6_Mentor%20Policy.pdf",
    title: "Mentor Policy",
  },
  {
    name: "08_Slow_Advanced_Learner_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/7_Slow%20-Advanced%20-Learner-Policy-website-.pdf",
    title: "Slow & Advanced Learner Policy",
  },
  {
    name: "09_IQAC_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/8_IQAC%20Policy.pdf",
    title: "IQAC Policy",
  },
  {
    name: "10_AAA_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/9_AAA%20Policy.pdf",
    title: "Assessment Accreditation and Assurance (AAA) Policy",
  },
  {
    name: "11_Budget_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/10_Budget%20Policy.pdf",
    title: "Budget Policy",
  },
  {
    name: "12_Anti_Ragging_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/11_Anti_ragging%20_policy.pdf",
    title: "Anti-Ragging Policy",
  },
  {
    name: "13_Anti_Sexual_Harassment_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/12_Anti_sexual_harassment%20_policy.pdf",
    title: "Anti-Sexual Harassment Policy",
  },
  {
    name: "14_Gender_Equity_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/13_Gender%20Equity%20Policy.pdf",
    title: "Gender Equity Policy",
  },
  {
    name: "15_Grievance_Redressal_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/14_Grievance-Redressal_policy.pdf",
    title: "Grievance Redressal Policy",
  },
  {
    name: "16_Maintenance_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/15_Maintenance%20Policy.pdf",
    title: "Maintenance Policy",
  },
  {
    name: "17_Scholarship_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/16_Scholarship%20Policy.pdf",
    title: "Scholarship Policy",
  },
  {
    name: "18_Staff_Welfare_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/17_Staff%20Welfare%20Policy.pdf",
    title: "Staff Welfare Policy",
  },
  {
    name: "19_Financial_Assistance_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/18_Financial%20Assistant%20Policy-SSJ.pdf",
    title: "Financial Assistance Policy",
  },
  {
    name: "20_Performance_Appraisal.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/19_Performance%20appraisal.pdf",
    title: "Performance Appraisal Policy",
  },
  {
    name: "21_ICT_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/20_ICT%20Policy.pdf",
    title: "Information & Communication Technology (ICT) Policy",
  },
  {
    name: "22_Green_Campus_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/21_Green_campus-policy-rev.pdf",
    title: "Green Campus Policy",
  },
  {
    name: "23_Energy_Conservation.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/22_Energy%20conservation.pdf",
    title: "Energy Conservation Policy",
  },
  {
    name: "24_Environment_Policy.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/23_Environment%20policy.pdf",
    title: "Environment Policy",
  },
  {
    name: "25_Code_of_Conduct.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/4%20Code%20of%20Conduct.pdf",
    title: "Code of Conduct",
  },
  {
    name: "26_Rules_and_Regulations.pdf",
    url: "https://ssgmce.ac.in/uploads/policies/Rules_Regulations.pdf",
    title: "Rules and Regulations",
  },
];

const downloadDir = path.join(__dirname, "../uploads/documents/policies");

// Ensure directory exists
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

let downloaded = 0;
let failed = 0;

function downloadFile(url, filename) {
  return new Promise((resolve) => {
    const fileUrl = url;
    const filepath = path.join(downloadDir, filename);

    https
      .get(fileUrl, (response) => {
        // Check if the response status is OK
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filepath);
          response.pipe(fileStream);

          fileStream.on("finish", () => {
            fileStream.close();
            console.log(`✓ Downloaded: ${filename}`);
            downloaded++;
            resolve(true);
          });

          fileStream.on("error", (err) => {
            fs.unlink(filepath, () => {}); // Delete the file on error
            console.log(`✗ Failed: ${filename} - ${err.message}`);
            failed++;
            resolve(false);
          });
        } else {
          console.log(`✗ Failed: ${filename} - Status ${response.statusCode}`);
          failed++;
          resolve(false);
        }
      })
      .on("error", (err) => {
        console.log(`✗ Failed: ${filename} - ${err.message}`);
        failed++;
        resolve(false);
      });
  });
}

async function downloadAllPolicies() {
  console.log(`\n📥 Starting download of ${policies.length} policy documents...\n`);

  for (const policy of policies) {
    await downloadFile(policy.url, policy.name);
    // Add small delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log(`\n✅ Download Complete!`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Location: ${downloadDir}\n`);
}

downloadAllPolicies();
