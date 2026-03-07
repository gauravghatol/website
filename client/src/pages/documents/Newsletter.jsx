import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const newsletterDocuments = [
  {
    title: "Sanchayan - Annual College Magazine 2024",
    summary: "Sanchayan is the annual college magazine of SSGMCE, Shegaon, showcasing the creative talents day-to-day student achievements, events, cultural activities, technical innovations, and literary works from students and faculty across all departments. The magazine covers highlights of the academic year including placements, research publications, sports achievements, club activities, and special events that define the SSGMCE experience.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/Sanchayan_2024.pdf",
    fileSize: "20 MB",
    year: "2024",
  },
];

const Newsletter = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="Newsletter - Sanchayan"
      subtitle="Annual College Magazine"
      category="newsletter"
      description="Sanchayan - the annual college magazine of SSGMCE featuring student achievements, events, creative works, and institutional highlights. The magazine captures the vibrant campus life and academic excellence that define SSGMCE, Shegaon."
      staticDocuments={newsletterDocuments}
    />
  );
};

export default Newsletter;
