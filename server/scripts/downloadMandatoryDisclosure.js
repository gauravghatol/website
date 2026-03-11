const https = require("https");
const fs = require("fs");
const path = require("path");

// Mandatory Disclosure documents from SSGMCE website
const disclosureDocuments = [
  {
    name: "01_Mandatory_Disclosure_2025-26.pdf",
    url: "https://ssgmce.ac.in/uploads/pdf/Mandatory%20Disclosure_2025-26.pdf",
    title: "Mandatory Disclosure 2025-26",
  },
  {
    name: "02_Mandatory_Disclosure_2024-25.pdf",
    url: "https://ssgmce.ac.in/uploads/MANDATORY%20DISCLOSURES%202024-25/Mandatory%20Disclosure_2024-25.pdf",
    title: "Mandatory Disclosure 2024-25",
  },
  {
    name: "03_Mandatory_Disclosure_2023-24.pdf",
    url: "https://ssgmce.ac.in/uploads/pdf/Revised%20Mandatory%20Disclosure_2023-24.pdf",
    title: "Mandatory Disclosure 2023-24",
  },
  {
    name: "04_Mandatory_Disclosure_2022-23.pdf",
    url: "https://ssgmce.ac.in/uploads/MANDATORY%20DISCLOSURES%202022-23/Mandatory%20Disclosure_2022-23.pdf",
    title: "Mandatory Disclosure 2022-23",
  },
  {
    name: "05_Mandatory_Disclosure_2021-22.pdf",
    url: "https://ssgmce.ac.in/uploads/Mandatory%20Disclosure_2021-22.pdf",
    title: "Mandatory Disclosure 2021-22",
  },
  {
    name: "06_Mandatory_Disclosure_2020-21.pdf",
    url: "https://ssgmce.ac.in/uploads/MANDATORY%20DISCLOSURES%202020-21/Mandatory%20Disclosure_2020-21.pdf",
    title: "Mandatory Disclosure 2020-21",
  },
];

const downloadDir = path.join(__dirname, "../uploads/documents/disclosure");

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

async function downloadAllDisclosures() {
  console.log(`\n📥 Starting download of ${disclosureDocuments.length} mandatory disclosure documents...\n`);

  for (const doc of disclosureDocuments) {
    await downloadFile(doc.url, doc.name);
    // Add small delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log(`\n✅ Download Complete!`);
  console.log(`   Downloaded: ${downloaded}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Location: ${downloadDir}\n`);
}

downloadAllDisclosures();
