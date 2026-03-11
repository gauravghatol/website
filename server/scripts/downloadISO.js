const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadDir = path.join(__dirname, "../uploads/documents/iso");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const isoDocuments = [
  {
    name: "01_ISO_9001_2015_Certificate.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/ISO-9001-2015-Certificate-SSGMCE.pdf",
  },
  {
    name: "02_ISO_Cell_Committee.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/ISO%20-Cell-Committe.pdf",
  },
  {
    name: "03_ISO_9001_2015_Apex_Quality_Manual.pdf",
    url: "https://www.ssgmce.ac.in/uploads/pdf/ISO%209001-2015%20Corrected%20Apex%20Quality%20Manual.pdf",
  },
];

console.log(`📥 Starting download of ${isoDocuments.length} ISO documents...\n`);

let downloaded = 0;
let failed = 0;

isoDocuments.forEach((doc) => {
  https.get(doc.url, { timeout: 10000 }, (response) => {
    if (response.statusCode === 200) {
      const filePath = path.join(downloadDir, doc.name);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${doc.name}`);
        downloaded++;

        if (downloaded + failed === isoDocuments.length) {
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

        if (downloaded + failed === isoDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });
    } else {
      console.log(`✗ Failed: ${doc.name} - Status ${response.statusCode}`);
      failed++;

      if (downloaded + failed === isoDocuments.length) {
        console.log(`\n✅ Download Complete!`);
        console.log(`Downloaded: ${downloaded}`);
        console.log(`Failed: ${failed}`);
        console.log(`Location: ${downloadDir}`);
      }
    }
  }).on("error", (err) => {
    console.log(`✗ Failed: ${doc.name} - ${err.message}`);
    failed++;

    if (downloaded + failed === isoDocuments.length) {
      console.log(`\n✅ Download Complete!`);
      console.log(`Downloaded: ${downloaded}`);
      console.log(`Failed: ${failed}`);
      console.log(`Location: ${downloadDir}`);
    }
  });
});
