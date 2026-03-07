import EnhancedDocumentsLayout from "../../components/EnhancedDocumentsLayout";

const policyDocuments = [
  {
    title: "Anti-Ragging Policy",
    summary: "SSGMCE, Shegaon maintains a strict anti-ragging policy in compliance with UGC regulations and the Maharashtra Prohibition of Ragging Act, 1999. This policy document outlines the institution's zero-tolerance approach towards ragging, the definition of ragging in all its forms, the anti-ragging committee composition, complaint mechanisms, disciplinary actions, and preventive measures. The institution ensures a safe and supportive environment for all students.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/Anti_Ragging_Policy.pdf",
    fileSize: "1 MB",
    year: "2024",
  },
  {
    title: "Code of Conduct for Students",
    summary: "The Code of Conduct document establishes behavioral expectations, academic integrity standards, and disciplinary guidelines for all students enrolled at SSGMCE, Shegaon. It covers attendance requirements, examination rules, library usage, hostel regulations, dress code, use of institutional facilities, and consequences for violations.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/Code_of_Conduct_Students.pdf",
    fileSize: "800 KB",
    year: "2024",
  },
  {
    title: "IT Usage Policy",
    summary: "The Information Technology Usage Policy defines acceptable use of computing resources, network infrastructure, internet access, and digital tools provided by SSGMCE. It covers cybersecurity guidelines, data protection measures, responsible use of email and social media, and penalties for misuse of IT resources.",
    pdfUrl: "https://www.ssgmce.ac.in/uploads/pdf/IT_Usage_Policy.pdf",
    fileSize: "600 KB",
    year: "2024",
  },
];

const Policies = () => {
  return (
    <EnhancedDocumentsLayout
      pageTitle="Policies & Procedures"
      subtitle="Institute Rules, Regulations & Guidelines"
      category="policies"
      description="Official policies including anti-ragging, IT usage, code of conduct, and other institutional guidelines that govern the academic and administrative operations at SSGMCE, Shegaon."
      staticDocuments={policyDocuments}
    />
  );
};

export default Policies;
