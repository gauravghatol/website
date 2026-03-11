const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadDir = path.join(__dirname, "../uploads/documents/tattwadarshi");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const tattwadarshiDocuments = [
  {
    name: "01_Tattwadarshi_2019.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202019.pdf",
  },
  {
    name: "02_Tattwadarshi_2020.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202020.pdf",
  },
  {
    name: "03_Tattwadarshi_2021.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202021.pdf",
  },
  {
    name: "04_Tattwadarshi_2022.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202022.pdf",
  },
  {
    name: "05_Tattwadarshi_2023.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202023.pdf",
  },
  {
    name: "06_Tattwadarshi_2024.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202024.pdf",
  },
  {
    name: "07_Tattwadarshi_2025.pdf",
    url: "https://www.ssgmce.ac.in/uploads/tattwadarshi/Tattwadarshi%202025.pdf",
  },
];

console.log(`📥 Starting download of ${tattwadarshiDocuments.length} Tattwadarshi documents...\n`);

let downloaded = 0;
let failed = 0;

tattwadarshiDocuments.forEach((doc) => {
  https.get(doc.url, { timeout: 10000 }, (response) => {
    if (response.statusCode === 200) {
      const filePath = path.join(downloadDir, doc.name);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${doc.name}`);
        downloaded++;

        if (downloaded + failed === tattwadarshiDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });

      fileStream.on("error", (err) => {
        fs.unlink(filePath, () => {});
        console.log(`✗ Failed: ${doc.name} - ${err.message}`);
        failed++;

        if (downloaded + failed === tattwadarshiDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });
    } else {
      console.log(`✗ Failed: ${doc.name} - Status ${response.statusCode}`);
      failed++;

      if (downloaded + failed === tattwadarshiDocuments.length) {
        console.log(`\n✅ Download Complete!`);
        console.log(`Downloaded: ${downloaded}`);
        console.log(`Failed: ${failed}`);
        console.log(`Location: ${downloadDir}`);
      }
    }
  }).on("error", (err) => {
    console.log(`✗ Failed: ${doc.name} - ${err.message}`);
    failed++;

    if (downloaded + failed === tattwadarshiDocuments.length) {
      console.log(`\n✅ Download Complete!`);
      console.log(`Downloaded: ${downloaded}`);
      console.log(`Failed: ${failed}`);
      console.log(`Location: ${downloadDir}`);
    }
  });
});
