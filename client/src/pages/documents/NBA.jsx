import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const nbaDocuments = [
  {
    title: "NBA Faculty List 2026",
    summary: "Official faculty list submitted to the National Board of Accreditation (NBA) for the year 2026. This document contains details of all faculty members across departments including their qualifications, experience, publications, and area of specialization as required for the NBA accreditation process.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/Faculty_List_NBA_2026.pdf",
    fileSize: "2 MB",
    year: "2026",
  },
];

const NBA = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="NBA Accreditation"
      subtitle="National Board of Accreditation"
      category="nba"
      description="NBA accreditation certificates and documents for various departments and programs at SSGMCE, Shegaon. The NBA evaluates programs in professional and technical institutions based on predefined criteria including teaching-learning process, faculty contributions, and student outcomes."
      staticDocuments={nbaDocuments}
    />
  );
};

export default NBA;
