import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";

const Scholarships = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Scholarships | SSGMCE Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Scholarships & Financial Aid"
        subtitle="Government Scholarship Schemes"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Government Scholarships Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Government of India & Maharashtra Scholarship Schemes
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Scholarship Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Eligible Category
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Income Limit (Annual)
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Benefits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Post Matric Scholarship for SC Students",
                        category: "Scheduled Caste (SC)",
                        income: "₹2.50 Lakhs",
                        benefits:
                          "Tuition fee, Development fee, Exam fee + Maintenance ₹1,200/month",
                      },
                      {
                        name: "Post Matric Scholarship for ST Students",
                        category: "Scheduled Tribe (ST)",
                        income: "₹2.50 Lakhs",
                        benefits:
                          "Tuition fee, Development fee, Exam fee + Maintenance ₹1,200/month",
                      },
                      {
                        name: "Post Matric Scholarship for VJ/NT Students",
                        category: "Vimukta Jati / Nomadic Tribes",
                        income: "₹2.50 Lakhs",
                        benefits:
                          "Tuition fee, Development fee, Exam fee + Maintenance ₹1,200/month",
                      },
                      {
                        name: "Post Matric Scholarship for SBC Students",
                        category: "Special Backward Class",
                        income: "₹8.00 Lakhs",
                        benefits:
                          "Tuition fee, Development fee, Exam fee + Maintenance ₹1,000/month",
                      },
                      {
                        name: "Post Matric Scholarship for OBC Students",
                        category: "Other Backward Class (OBC)",
                        income: "₹8.00 Lakhs",
                        benefits:
                          "Tuition fee, Development fee, Exam fee + Maintenance ₹1,000/month",
                      },
                      {
                        name: "EWS Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojana",
                        category: "Economically Weaker Section - Open Category",
                        income: "₹8.00 Lakhs",
                        benefits: "50% Tuition fee + 50% Exam fee waiver",
                      },
                      {
                        name: "EBC Freeship Scheme",
                        category: "Economically Backward Class - Open Category",
                        income: "₹8.00 Lakhs",
                        benefits: "50% Tuition fee + 50% Exam fee waiver",
                      },
                      {
                        name: "Dr. Panjabrao Deshmukh Hostel Maintenance Scheme",
                        category: "EBC/EWS/TFWS Hostellers",
                        income: "₹8.00 Lakhs",
                        benefits: "Hostel fee benefit up to ₹30,000 per annum",
                      },
                      {
                        name: "Minority Scholarship (Central)",
                        category: "Minority Communities",
                        income: "₹2.50 Lakhs",
                        benefits: "Maintenance allowance ₹1,000/month",
                      },
                      {
                        name: "AICTE Pragati Scholarship",
                        category: "Girl Students (All Categories)",
                        income: "₹8.00 Lakhs",
                        benefits:
                          "Tuition fee ₹30,000/year + Contingency ₹2,000/year",
                      },
                      {
                        name: "AICTE Saksham Scholarship",
                        category: "Persons with Disabilities",
                        income: "₹8.00 Lakhs",
                        benefits:
                          "Tuition fee ₹50,000/year + Contingency ₹2,000/year",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.name}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.category}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.income}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.benefits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Application Process */}
            <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                How to Apply for Scholarships
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li>
                  <strong>Step 1:</strong> Register on Mahadbt Portal -{" "}
                  <a
                    href="https://mahadbtmahait.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ssgmce-orange underline"
                  >
                    www.mahadbtmahait.gov.in
                  </a>
                </li>
                <li>
                  <strong>Step 2:</strong> Complete Aadhar authentication and
                  link bank account (NPCI mapping)
                </li>
                <li>
                  <strong>Step 3:</strong> Fill online scholarship application
                  form with accurate details
                </li>
                <li>
                  <strong>Step 4:</strong> Upload scanned copies of required
                  documents (Income certificate, Caste certificate, etc.)
                </li>
                <li>
                  <strong>Step 5:</strong> Submit application and note down
                  Application ID
                </li>
                <li>
                  <strong>Step 6:</strong> College will verify your application
                  through institutional login
                </li>
                <li>
                  <strong>Step 7:</strong> Scholarship amount will be credited
                  directly to your bank account
                </li>
              </ol>
            </section>

            {/* Important Notes */}
            <section className="rounded-xl border border-yellow-100 bg-yellow-50 p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">
                Important Notes
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  • Scholarship benefits are available ONLY for students
                  admitted through CAP (Centralized Admission Process)
                </li>
                <li>
                  • Students must apply within the specified deadline (usually
                  September-October)
                </li>
                <li>
                  • Income certificate must be valid for the current academic
                  year (valid up to March 31)
                </li>
                <li>
                  • Non-Creamy Layer certificate mandatory for OBC/SBC
                  categories
                </li>
                <li>
                  • Bank account must be in student's own name with Aadhar
                  linkage
                </li>
                <li>
                  • Previous year scholarship beneficiaries must reapply every
                  year
                </li>
                <li>
                  • College does not provide scholarships directly - all are
                  government schemes
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
