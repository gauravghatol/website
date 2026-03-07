import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const naacDocuments = [
  {
    title: "NAAC Self Study Report (SSR) - 3rd Cycle (After DVV)",
    summary: "The Self Study Report (SSR) for the 3rd cycle of NAAC accreditation of SSGMCE, Shegaon. This comprehensive report covers all seven criteria including Curricular Aspects, Teaching-Learning & Evaluation, Research Innovation & Extension, Infrastructure & Learning Resources, Student Support & Progression, Governance Leadership & Management, and Institutional Values & Best Practices. SSGMCE has been accredited with 'A+' grade (CGPA 3.26) by NAAC, reflecting its commitment to quality education and holistic development of students.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/NAAC/SSR_after_DVV_final.pdf",
    fileSize: "15 MB",
    year: "2024",
  },
  {
    title: "NAAC Extended Profile",
    summary: "The Extended Profile document provides quantitative data about the institution including student enrollment figures, faculty details, financial information, infrastructure data, and academic performance statistics required for the NAAC assessment process. This serves as a statistical overview of SSGMCE's key institutional metrics over the assessment period.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/NAAC/extended%20profile.pdf",
    fileSize: "3 MB",
    year: "2024",
  },
  {
    title: "IIQA Report",
    summary: "The Institutional Information for Quality Assessment (IIQA) report is the preliminary submission to NAAC containing basic institutional information, accreditation history, and readiness for the assessment visit. This document confirms the institution's eligibility for the accreditation process.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/NAAC/SSGMCE_IIQA_final.pdf",
    fileSize: "2 MB",
    year: "2024",
  },
  {
    title: "RTI (Right to Information)",
    summary: "Right to Information document of SSGMCE, Shegaon as required under the statutory compliance for NAAC accreditation. This document provides transparency in institutional governance and administration.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/NAAC/RTI.pdf",
    fileSize: "1 MB",
    year: "2024",
  },
  {
    title: "Declaration of Compliance - Principal",
    summary: "Official declaration of compliance signed by the Principal of SSGMCE, Shegaon, certifying that the institution adheres to all statutory and regulatory requirements as mandated by NAAC, AICTE, UGC, and the affiliating university.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/NAAC/Statement%20compliance-Principal---final-doc.pdf",
    fileSize: "500 KB",
    year: "2024",
  },
];

const NAAC = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="NAAC Documents"
      subtitle="National Assessment and Accreditation Council"
      category="naac"
      description="SSGMCE, Shegaon is accredited by NAAC with 'A+' grade (CGPA 3.26) in the 3rd cycle. Below are the official NAAC documents including the Self Study Report (SSR), Extended Profile, IIQA, and other accreditation-related documents."
      staticDocuments={naacDocuments}
    />
  );
};

export default NAAC;
