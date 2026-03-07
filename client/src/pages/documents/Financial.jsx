import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const financialDocuments = [
  {
    title: "FRA Fee Structure 2025-26",
    summary: "The Fee Regulating Authority (FRA) approved fee structure for the academic year 2025-26 for all programs offered at SSGMCE, Shegaon. This document details tuition fees, development fees, and other charges for B.E. (First Year & Direct Second Year), M.E., and MBA programs as approved by the Maharashtra State Fee Regulating Authority.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/FRA%20Fees%20Structure_05-12-2025.pdf",
    fileSize: "1 MB",
    year: "2025-26",
  },
];

const Financial = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="Financial Statements"
      subtitle="Annual Financial Reports & Fee Structure"
      category="financial"
      description="Financial statements, fee structures approved by FRA (Fee Regulating Authority), and annual financial reports of SSGMCE, Shegaon. These documents ensure financial transparency and compliance with regulatory requirements."
      staticDocuments={financialDocuments}
    />
  );
};

export default Financial;
