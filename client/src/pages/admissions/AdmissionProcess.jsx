import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaUserCheck,
  FaClipboardList,
  FaUniversity,
  FaMoneyBillWave,
  FaIdCard,
  FaArrowRight,
} from "react-icons/fa";

const AdmissionProcess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Admission Process | SSGMCE";
  }, []);

  const steps = [
    {
      step: "1",
      icon: FaFileAlt,
      activity: "MHT-CET / JEE Main Exam",
      timeline: "April - May",
      details: "Appear for entrance examination and obtain valid scorecard",
      color: "blue",
    },
    {
      step: "2",
      icon: FaClipboardList,
      activity: "CAP Online Registration",
      timeline: "June",
      details: "Register on official CET Cell portal",
      color: "orange",
    },
    {
      step: "3",
      icon: FaIdCard,
      activity: "Filling Application Form",
      timeline: "June",
      details: "Fill personal details, academic records, upload documents",
      color: "blue",
    },
    {
      step: "4",
      icon: FaUserCheck,
      activity: "Document Verification",
      timeline: "Late June",
      details: "Visit designated facilitation center for document scrutiny",
      color: "orange",
    },
    {
      step: "5",
      icon: FaClipboardList,
      activity: "CAP Round I - Option Form",
      timeline: "July",
      details: "Fill college and branch preferences online (up to 250 options)",
      color: "blue",
    },
    {
      step: "6",
      icon: FaUniversity,
      activity: "CAP Round I - Seat Allotment",
      timeline: "July",
      details: "Merit-based seat allocation announced on CET Cell website",
      color: "orange",
    },
    {
      step: "7",
      icon: FaMoneyBillWave,
      activity: "Seat Acceptance Fee Payment",
      timeline: "July",
      details: "Pay ₹1,000 seat acceptance fee to CET Cell online",
      color: "blue",
    },
    {
      step: "8",
      icon: FaUniversity,
      activity: "Reporting to Institute",
      timeline: "July-Aug",
      details: "Submit original documents at SSGMCE Admission Office",
      color: "orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Admission Process"
        subtitle="Your Journey to SSGMCE Starts Here - Step-by-Step Guide to Engineering Admission"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
        breadcrumbs={[
          { label: "Admissions", link: "/admissions" },
          { label: "Admission Process" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Hero Stats */}
            <section className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-dark-blue to-ssgmce-blue text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">2025-26</p>
                    <p className="text-blue-200 text-sm">Admission Year</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaUniversity className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">600+</p>
                    <p className="text-orange-100 text-sm">Total Seats</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">CAP</p>
                    <p className="text-green-100 text-sm">Process Active</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Visual Timeline */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  CAP Admission Timeline
                </h3>
              </div>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-orange-500 to-blue-600 hidden md:block"></div>

                <div className="space-y-6">
                  {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={idx}
                        className="relative flex items-start gap-6 group"
                      >
                        {/* Step Circle */}
                        <div
                          className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0 ${
                            step.color === "blue"
                              ? "bg-gradient-to-br from-blue-600 to-blue-800"
                              : "bg-gradient-to-br from-orange-500 to-orange-600"
                          } group-hover:scale-110 transition-transform`}
                        >
                          {step.step}
                        </div>

                        {/* Content Card */}
                        <div
                          className={`flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${
                            step.color === "blue"
                              ? "border-blue-600"
                              : "border-orange-500"
                          }`}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Icon
                                  className={`text-lg ${step.color === "blue" ? "text-blue-600" : "text-orange-500"}`}
                                />
                                <h4 className="text-lg font-bold text-gray-800">
                                  {step.activity}
                                </h4>
                              </div>
                              <p className="text-gray-600 text-sm">
                                {step.details}
                              </p>
                            </div>
                            <div
                              className={`px-4 py-2 rounded-full text-sm font-bold ${
                                step.color === "blue"
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-orange-50 text-orange-700"
                              }`}
                            >
                              {step.timeline}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaCheckCircle className="text-2xl text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Eligibility Criteria
                  </h3>
                  <p className="text-gray-500 text-sm">For B.E. Admission</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-blue-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">
                      1
                    </span>
                    Academic Qualification
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Passed 10+2 (HSC) with Physics, Chemistry & Mathematics",
                      "Minimum 45% marks in PCM for Open Category",
                      "Minimum 40% marks in PCM for Reserved Categories",
                      "Must have appeared for MHT-CET or JEE Main",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
                  <h4 className="font-bold text-lg text-orange-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm">
                      2
                    </span>
                    General Requirements
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Indian Nationality (with domicile for state quota)",
                      "Age limit: Minimum 17 years as on December 31",
                      "Valid MHT-CET or JEE Main scorecard",
                      "Must participate in CAP counseling process",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Links */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Important Official Links
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "CAP Registration Portal",
                    url: "https://fe2024.mahacet.org",
                    desc: "MahaCAP Official Portal",
                  },
                  {
                    title: "DTE Maharashtra",
                    url: "https://dte.maharashtra.gov.in",
                    desc: "Directorate of Technical Education",
                  },
                  {
                    title: "MHT-CET Official",
                    url: "https://mhtcet2024.mahacet.org",
                    desc: "State CET Examination",
                  },
                  {
                    title: "JEE Main Official",
                    url: "https://jeemain.nta.nic.in",
                    desc: "National Testing Agency",
                  },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                  >
                    <div>
                      <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-gray-500">{link.desc}</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <FaExternalLinkAlt className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaExclamationTriangle className="text-2xl text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    Important Notes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Complete all registration steps before the deadline to avoid last-moment issues",
                      "Keep all original documents ready for verification at facilitation centers",
                      "Seat acceptance fee of ₹1,000 is non-refundable",
                      "Failure to report to institute within deadline will result in seat cancellation",
                      "Monitor CET Cell website continuously for updates and schedule changes",
                    ].map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaArrowRight className="text-red-500 mt-1 flex-shrink-0 text-sm" />
                        <span className="text-sm">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-ssgmce-dark-blue to-ssgmce-blue p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-blue-200 mb-6 max-w-xl mx-auto">
                Contact our Admission Office for any queries or assistance in
                the admission process.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+917265252289"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Call: +91-7265-252289
                </a>
                <a
                  href="mailto:admissions@ssgmce.ac.in"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Email Admission Office
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
