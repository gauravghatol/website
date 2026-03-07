import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const mandatoryDocuments = [
  {
    title: "Mandatory Disclosure 2025-26",
    summary: "The AICTE Mandatory Disclosure document for academic year 2025-26 provides comprehensive information about SSGMCE, Shegaon including institutional details, programs offered, intake capacity, faculty information, fee structure, infrastructure details, admission procedure, and other mandatory information as per AICTE guidelines. This document ensures transparency and provides prospective students and stakeholders with all required institutional information.",
    pdfUrl: "https://ssgmce.ac.in/uploads/pdf/Mandatory%20Disclosure_2025-26.pdf",
    fileSize: "5 MB",
    year: "2025-26",
  },
  {
    title: "Mandatory Disclosure 2024-25",
    summary: "AICTE Mandatory Disclosure for academic year 2024-25 containing complete institutional information including affiliation details, programs and intake, faculty qualifications and experience, fee structure, infrastructure and facilities, admission process, placement records, and other statutory details as mandated by AICTE for all approved technical institutions.",
    pdfUrl: "https://ssgmce.ac.in/uploads/MANDATORY%20DISCLOSURES%202024-25/Mandatory%20Disclosure_2024-25.pdf",
    fileSize: "4 MB",
    year: "2024-25",
  },
  {
    title: "Revised Mandatory Disclosure 2023-24",
    summary: "Revised AICTE Mandatory Disclosure for academic year 2023-24 with updated institutional information including revised intake numbers, updated faculty details, latest fee structure, infrastructure additions, and compliance updates as per AICTE norms.",
    pdfUrl: "https://ssgmce.ac.in/uploads/pdf/Revised%20Mandatory%20Disclosure_2023-24.pdf",
    fileSize: "4 MB",
    year: "2023-24",
  },
  {
    title: "Mandatory Disclosure 2022-23",
    summary: "AICTE Mandatory Disclosure for academic year 2022-23 providing institutional details, programs offered with intake capacity, faculty information, fee structure, infrastructure details, admission procedure, and other mandatory information for regulatory compliance and public transparency.",
    pdfUrl: "https://ssgmce.ac.in/uploads/MANDATORY%20DISCLOSURES%202022-23/Mandatory%20Disclosure_2022-23.pdf",
    fileSize: "4 MB",
    year: "2022-23",
  },
];

const MandatoryDisclosure = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="Mandatory Disclosure"
      subtitle="AICTE Mandatory Disclosure Documents"
      category="mandatory"
      description="Statutory mandatory disclosure documents as required by AICTE. These documents provide comprehensive institutional information including programs, faculty, infrastructure, fees, and admission details for transparency and regulatory compliance."
      staticDocuments={mandatoryDocuments}
    />
  );
};

export default MandatoryDisclosure;
