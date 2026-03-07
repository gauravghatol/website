import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const isoDocuments = [
  {
    title: "ISO 9001:2015 Certificate",
    summary: "SSGMCE, Shegaon has been awarded the prestigious ISO 9001:2015 certification for its Quality Management System. This certificate demonstrates the institution's commitment to maintaining high-quality standards in all its academic and administrative processes. The ISO 9001:2015 standard specifies requirements for a quality management system where an organization needs to demonstrate its ability to consistently provide products and services that meet customer and applicable statutory and regulatory requirements.",
    pdfUrl: "https://www.ssgmce.ac.in/images/ISO%20CERT.jpg",
    fileSize: "1 MB",
    year: "2024",
  },
];

const ISO = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="ISO Certificates"
      subtitle="Quality Management System Certifications"
      category="iso"
      description="ISO 9001:2015 certificates and quality management documentation. SSGMCE, Shegaon is an ISO 9001:2015 certified institution, reflecting its dedication to quality management in education and administration."
      staticDocuments={isoDocuments}
    />
  );
};

export default ISO;
