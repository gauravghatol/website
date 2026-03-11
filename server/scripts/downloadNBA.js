const https = require("https");
const fs = require("fs");
const path = require("path");

const downloadDir = path.join(__dirname, "../uploads/documents/nba");

// Create directory if it doesn't exist
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const nbaDocuments = [
  {
    name: "01_NBA_Accreditation_2022-2025.pdf",
    url: "https://www.ssgmce.ac.in/uploads/NBA%20ACCREDITATION%202022-23%20TO%202025.pdf",
  },
  {
    name: "02_NBA_Accreditation_2019-2022.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation20.01.20.pdf",
  },
  {
    name: "03_NBA_MBA_Accreditation_2013-2016.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation16.08.13.pdf",
  },
  {
    name: "04_NBA_MBA_Accreditation_2007-2010.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation18.05.2007.pdf",
  },
  {
    name: "05_NBA_MBA_Accreditation_2002-2005.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation13.05.2002.pdf",
  },
  {
    name: "06_NBA_Digital_Electronics_2008-2011.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation18.12.12.pdf",
  },
  {
    name: "07_NBA_IT_Accreditation_2008-2011.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation13.05.2002.pdf",
  },
  {
    name: "08_NBA_CSE_Accreditation_2013-2015.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation16.08.13.pdf",
  },
  {
    name: "09_NBA_CSE_Accreditation_2007-2010.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation18.05.2007.pdf",
  },
  {
    name: "10_NBA_CSE_Accreditation_2002-2005.pdf",
    url: "https://www.ssgmce.ac.in/uploads/Accredation13.05.2002.pdf",
  },
  {
    name: "11_NBA_Electrical_2001-2004_EXTC_ELPO_CSE_MECH.pdf",
    url: "https://www.ssgmce.ac.in/uploads/2001%20NBA%20EXTC%20ELPO%20CSE%20MECH.pdf",
  },
  {
    name: "12_NBA_Electrical_2005-2008_MECH_EXTC_ELPO.pdf",
    url: "https://www.ssgmce.ac.in/uploads/2005%20MECH%20EXTC%20ELPO.pdf",
  },
  {
    name: "13_NBA_Electrical_2009-2012_EXTC_ELPO_MECH.pdf",
    url: "https://www.ssgmce.ac.in/uploads/2009%20EXTC%20ELPO%20MECH.pdf",
  },
  {
    name: "14_NBA_Electrical_2013-2015_ELPO_EXTC_MECH.pdf",
    url: "https://www.ssgmce.ac.in/uploads/2013%20ELPO%20EXTC%20MECH.pdf",
  },
  {
    name: "15_NBA_Other_Programs_2000-2008.pdf",
    url: "https://www.ssgmce.ac.in/uploads/2000-2008.pdf",
  },
];

console.log(`📥 Starting download of ${nbaDocuments.length} NBA documents...\n`);

let downloaded = 0;
let failed = 0;

nbaDocuments.forEach((doc) => {
  https.get(doc.url, { timeout: 10000 }, (response) => {
    if (response.statusCode === 200) {
      const filePath = path.join(downloadDir, doc.name);
      const fileStream = fs.createWriteStream(filePath);

      response.pipe(fileStream);

      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`✓ Downloaded: ${doc.name}`);
        downloaded++;

        if (downloaded + failed === nbaDocuments.length) {
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

        if (downloaded + failed === nbaDocuments.length) {
          console.log(`\n✅ Download Complete!`);
          console.log(`Downloaded: ${downloaded}`);
          console.log(`Failed: ${failed}`);
          console.log(`Location: ${downloadDir}`);
        }
      });
    } else {
      console.log(`✗ Failed: ${doc.name} - Status ${response.statusCode}`);
      failed++;

      if (downloaded + failed === nbaDocuments.length) {
        console.log(`\n✅ Download Complete!`);
        console.log(`Downloaded: ${downloaded}`);
        console.log(`Failed: ${failed}`);
        console.log(`Location: ${downloadDir}`);
      }
    }
  }).on("error", (err) => {
    console.log(`✗ Failed: ${doc.name} - ${err.message}`);
    failed++;

    if (downloaded + failed === nbaDocuments.length) {
      console.log(`\n✅ Download Complete!`);
      console.log(`Downloaded: ${downloaded}`);
      console.log(`Failed: ${failed}`);
      console.log(`Location: ${downloadDir}`);
    }
  });
});
