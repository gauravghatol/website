const https = require("https");
const fs = require("fs");
const path = require("path");

// NAAC documents from SSGMCE website
const naacDocuments = [
  {
    name: "01_NAAC_SSR_After_DVV_Final.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/SSR_after_DVV_final.pdf",
    title: "NAAC Self Study Report (SSR) - 3rd Cycle (After DVV)",
  },
  {
    name: "02_NAAC_Extended_Profile.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/extended%20profile.pdf",
    title: "NAAC Extended Profile",
  },
  {
    name: "03_NAAC_IIQA_Report.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/SSGMCE_IIQA_final.pdf",
    title: "IIQA Report",
  },
  {
    name: "04_NAAC_RTI.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/RTI.pdf",
    title: "RTI (Right to Information)",
  },
  {
    name: "05_NAAC_Declaration_Compliance_Principal.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/Statement%20compliance-Principal---final-doc.pdf",
    title: "Declaration of Compliance - Principal",
  },
  {
    name: "06_NAAC_Certificate_2024.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/NAAC%20CERTIFICATE%20-2024.pdf",
    title: "NAAC Certificate - 2024",
  },
  {
    name: "07_NAAC_Peer_Report_2024.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NAAC/Peer%20Team%20Report%20-2024.pdf",
    title: "Peer Team Report - 2024",
  },
  {
    name: "08_NAAC_Certificate_A_Plus_2024.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/NAAC%20Certificate%20A+%202024.pdf",
    title: "NAAC Certificate A+ - 2024",
  },
  {
    name: "09_NAAC_Peer_Team_Report_2024_v2.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/Peer%20Team%20Report%202024.pdf",
    title: "Peer Team Report - 2024 (3rd Cycle)",
  },
  {
    name: "10_NAAC_Certificate_2010.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/NAAC%20CERTIFICATE%202010.pdf",
    title: "NAAC Certificate - 2010 (2nd Cycle)",
  },
  {
    name: "11_NAAC_Peer_Team_Report_2010.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/cycle-2--PEER%20Team%20Report%202010.pdf",
    title: "Peer Team Report - 2010 (2nd Cycle)",
  },
  {
    name: "12_NAAC_Certificate_2003.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/NAAC%20CERTIFICATE%20-%202003.pdf",
    title: "NAAC Certificate - 2003 (1st Cycle)",
  },
  {
    name: "13_NAAC_Peer_Team_Report_2003.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/cycle-I_report_Nov_2002.pdf",
    title: "Peer Team Report - 2003 (1st Cycle)",
  },
];

const downloadDir = path.join(__dirname, "../uploads/documents/naac");

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

async function downloadAllNAAC() {
  console.log(`\n📥 Starting download of ${naacDocuments.length} NAAC documents...\n`);

  for (const doc of naacDocuments) {
    await downloadFile(doc.url, doc.name);
    // Add small delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log(`\n✅ Download Complete!`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Location: ${downloadDir}\n`);
}

downloadAllNAAC();
