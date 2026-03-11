const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadDir = path.join(__dirname, "../uploads/documents/financial");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const financialDocuments = [
  {
    name: "01_Balance_Sheet_2024-25.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/BALANCE%20SHEET%202024-25.pdf",
  },
  {
    name: "02_Balance_Sheet_2023-24.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/BALANCE%20SHEET%202023-24.pdf",
  },
  {
    name: "03_Financial_Statement_2022-23.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/College%20Financial%20Statement%202022-23.pdf",
  },
  {
    name: "04_Financial_Statement_2021-22.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/College%20Financial%20Statement%202021-22.pdf",
  },
  {
    name: "05_Financial_Statement_2020-21.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/College%20Financial%20Statement%202020-21.pdf",
  },
  {
    name: "06_Financial_Statement_2019-20.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/College%20Financial%20Statement%202019-20.pdf",
  },
  {
    name: "07_Financial_Statement_2018-19.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/College%20Financial%20Statement%202018-19.pdf",
  },
];

console.log(`📥 Starting download of ${financialDocuments.length} financial documents...\n`);

let downloaded = 0;
let failed = 0;

financialDocuments.forEach((doc) => {
  https.get(doc.url, { timeout: 10000 }, (response) => {
    if (response.statusCode === 200) {
      const filePath = path.join(downloadDir, doc.name);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${doc.name}`);
        downloaded++;

        if (downloaded + failed === financialDocuments.length) {
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

        if (downloaded + failed === financialDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });
    } else {
      console.log(`✗ Failed: ${doc.name} - Status ${response.statusCode}`);
      failed++;

      if (downloaded + failed === financialDocuments.length) {
        console.log(`\n✅ Download Complete!`);
        console.log(`Downloaded: ${downloaded}`);
        console.log(`Failed: ${failed}`);
        console.log(`Location: ${downloadDir}`);
      }
    }
  }).on("error", (err) => {
    console.log(`✗ Failed: ${doc.name} - ${err.message}`);
    failed++;

    if (downloaded + failed === financialDocuments.length) {
      console.log(`\n✅ Download Complete!`);
      console.log(`Downloaded: ${downloaded}`);
      console.log(`Failed: ${failed}`);
      console.log(`Location: ${downloadDir}`);
    }
  });
});
