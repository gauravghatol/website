import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";

const AdmissionsFAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FAQs | SSGMCE Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Frequently Asked Questions (FAQs)"
        subtitle="Admissions Related Queries"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-6">
            {[
              {
                category: "Admission Process",
                questions: [
                  {
                    q: "What is the admission procedure for B.E. programs?",
                    a: "Admission to B.E. programs is through Maharashtra State CAP (Centralized Admission Process) based on MHT-CET or JEE Main scores. Students must register on fe2024.mahacet.org, fill preference form, attend document verification, and report to allotted institute.",
                  },
                  {
                    q: "Can I get admission without MHT-CET?",
                    a: "Yes, you can apply with valid JEE Main score. Both MHT-CET and JEE Main scores are accepted for B.E. admissions through CAP process.",
                  },
                  {
                    q: "What is CAP Round? How many rounds are there?",
                    a: "CAP (Centralized Admission Process) is the seat allocation process conducted by DTE Maharashtra. There are typically 3 CAP rounds, followed by institute-level rounds for remaining vacant seats.",
                  },
                  {
                    q: "What is the seat acceptance fee?",
                    a: "The seat acceptance fee is ₹1,000, payable online to the CET Cell after seat allotment in CAP rounds. This fee is non-refundable.",
                  },
                ],
              },
              {
                category: "Eligibility & Documents",
                questions: [
                  {
                    q: "What are the eligibility criteria for B.E. admission?",
                    a: "Candidates must have passed HSC (10+2) with Physics, Chemistry, and Mathematics with minimum 45% aggregate marks for Open category and 40% for reserved categories. Valid MHT-CET or JEE Main score is mandatory.",
                  },
                  {
                    q: "Is domicile certificate mandatory?",
                    a: "Domicile certificate is mandatory for Maharashtra State quota seats. For All India quota through JEE Main, domicile is not required.",
                  },
                  {
                    q: "What documents are needed at the time of admission?",
                    a: "Required documents include: MHT-CET/JEE scorecard, SSC & HSC marksheets, leaving certificate, domicile certificate, Aadhar card, caste certificate (if applicable), income certificate (for scholarships), passport photos, and CAP allotment letter.",
                  },
                  {
                    q: "Is migration certificate required?",
                    a: "Migration certificate is required only if you have passed HSC from a state other than Maharashtra.",
                  },
                ],
              },
              {
                category: "Fees & Scholarships",
                questions: [
                  {
                    q: "What is the annual fee for B.E. programs?",
                    a: "The annual tuition fee for B.E. programs is approximately ₹82,000 for Open category students (including tuition, development fee, exam fee, etc.). Actual fees are subject to government regulations and may vary.",
                  },
                  {
                    q: "Are scholarships available?",
                    a: "Yes, various government scholarships are available for SC/ST/OBC/SBC/EWS/EBC students through the Mahadbt portal (mahadbtmahait.gov.in). Benefits include tuition fee waiver and maintenance allowance.",
                  },
                  {
                    q: "What is TFWS (Tuition Fee Waiver Scheme)?",
                    a: "TFWS is for Open category students with family income below ₹8 lakhs. Selected candidates through CAP get 100% tuition fee waiver. Approximately 10% seats are reserved under TFWS.",
                  },
                  {
                    q: "when is the scholarship application deadline?",
                    a: "Scholarship applications are typically open from August to October each year. Students must apply online on the Mahadbt portal and get verification from the college.",
                  },
                ],
              },
              {
                category: "Hostel & Infrastructure",
                questions: [
                  {
                    q: "Does SSGMCE provide hostel facilities?",
                    a: "Yes, separate hostels are available for boys and girls with a combined capacity of 1200+ students (600 each). Hostels have Wi-Fi, mess facility, 24/7 security, and recreational facilities.",
                  },
                  {
                    q: "What is the hostel fee?",
                    a: "Annual hostel fee is approximately ₹25,000 which includes room rent, electricity, water, and maintenance. Mess charges are separate (around ₹3,500-3,800 per month for vegetarian food).",
                  },
                  {
                    q: "Is hostel accommodation guaranteed?",
                    a: "Hostel accommodation is provided on merit basis and distance from home. First year students and outstation students get priority.",
                  },
                  {
                    q: "What facilities are available on campus?",
                    a: "Campus has Central Library with 92,000+ books, computer labs with latest software, sports facilities, auditorium, cafeteria, medical room, and Wi-Fi connectivity.",
                  },
                ],
              },
              {
                category: "Placements & Career",
                questions: [
                  {
                    q: "What is the placement record?",
                    a: "SSGMCE has a dedicated Training & Placement Cell with consistent placement records. Companies like TCS, Infosys, Wipro, Tech Mahindra, L&T, and many others visit for campus recruitment.",
                  },
                  {
                    q: "What is the average package?",
                    a: "Average package varies by branch and year, typically ranging from ₹3.5-4.5 lakhs per annum. Highest packages can go up to ₹12-15 lakhs for top performers.",
                  },
                  {
                    q: "Are internships provided?",
                    a: "Yes, the college facilitates summer internships after third year. Many students secure internships in reputed companies, and some convert to full-time offers.",
                  },
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 flex items-center gap-2">
                  <span className="w-2 h-8 bg-ssgmce-orange rounded"></span>
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <div
                      key={qIdx}
                      className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                    >
                      <details className="group">
                        <summary className="flex justify-between items-center p-5 cursor-pointer bg-blue-50 hover:bg-blue-100 transition">
                          <span className="font-semibold text-ssgmce-blue">
                            {item.q}
                          </span>
                          <span className="text-ssgmce-orange group-open:rotate-180 transition transform">
                            ▼
                          </span>
                        </summary>
                        <div className="p-5 bg-white border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact for More Info */}
            <section className="rounded-xl bg-gradient-to-r from-ssgmce-blue to-blue-800 p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="mb-4">
                Contact our Admission Office for personalized assistance
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Phone:</strong> +91-7265-252274
                  </p>
                  <p>
                    <strong>Email:</strong> admission@ssgmce.ac.in
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Office Hours:</strong> Mon-Sat, 10 AM - 5 PM
                  </p>
                  <p>
                    <strong>Address:</strong> SSGMCE, Shegaon, Maharashtra
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFAQs;
