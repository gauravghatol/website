import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const tattwadarshiDocuments = [
  {
    title: "e-Tattwadarshi - Technical Magazine",
    summary: "Tattwadarshi is the technical magazine of SSGMCE, Shegaon that features research papers, technical articles, innovation reports, and student projects from all engineering departments. The magazine received the Second Prize in the Magazine Competition at Sant Gadge Baba Amravati University (SGBAU), Amravati. It serves as a platform for students and faculty to showcase their technical knowledge, research findings, and innovative ideas in various fields of engineering and technology.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/Tattwadarshi.pdf",
    fileSize: "15 MB",
    year: "2024",
  },
];

const Tattwadarshi = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="e-Tattwadarshi"
      subtitle="Technical Magazine"
      category="tattwadarshi"
      description="Tattwadarshi - the award-winning technical magazine of SSGMCE featuring research papers, innovations, technical articles, and student projects. Received Second Prize in the Magazine Competition at SGBAU, Amravati."
      staticDocuments={tattwadarshiDocuments}
    />
  );
};

export default Tattwadarshi;
