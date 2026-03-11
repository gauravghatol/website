const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadDir = path.join(__dirname, "../uploads/documents/newsletter");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const newsletterDocuments = [
  {
    name: "01_Newsletter_2019.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/Newsletter2019.pdf",
  },
  {
    name: "02_Newsletter_2020.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/Newsletter2020.pdf",
  },
  {
    name: "03_Newsletter_2021.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/Newsletter2021.pdf",
  },
  {
    name: "04_Newsletter_2022.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/Newsletter2022.pdf",
  },
  {
    name: "05_Newsletter_2023.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/Newsletter2023.pdf",
  },
  {
    name: "06_Newsletter_2024.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/SSGMCE%20Newsletter%202024.pdf",
  },
  {
    name: "07_Newsletter_2025.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/SSGMCE%20Newsletter%202025.pdf",
  },
  {
    name: "08_Newsletter_2026.pdf",
    url: "https://www.ssgmce.ac.in/uploads/newsletters/NEWSLETTER2026.pdf",
  },
];

console.log(`📥 Starting download of ${newsletterDocuments.length} newsletter documents...\n`);

let downloaded = 0;
let failed = 0;

newsletterDocuments.forEach((doc) => {
  https.get(doc.url, { timeout: 10000 }, (response) => {
    if (response.statusCode === 200) {
      const filePath = path.join(downloadDir, doc.name);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${doc.name}`);
        downloaded++;

        if (downloaded + failed === newsletterDocuments.length) {
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

        if (downloaded + failed === newsletterDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });
    } else {
      console.log(`✗ Failed: ${doc.name} - Status ${response.statusCode}`);
      failed++;

      if (downloaded + failed === newsletterDocuments.length) {
        console.log(`\n✅ Download Complete!`);
        console.log(`Downloaded: ${downloaded}`);
        console.log(`Failed: ${failed}`);
        console.log(`Location: ${downloadDir}`);
      }
    }
  }).on("error", (err) => {
    console.log(`✗ Failed: ${doc.name} - ${err.message}`);
    failed++;

    if (downloaded + failed === newsletterDocuments.length) {
      console.log(`\n✅ Download Complete!`);
      console.log(`Downloaded: ${downloaded}`);
      console.log(`Failed: ${failed}`);
      console.log(`Location: ${downloadDir}`);
    }
  });
});
