import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";

const ISO = () => {
  const documents = [
    {
      title: "ISO Cell Committee",
      description: "Committee members responsible for ISO 9001-2015 Quality Management System implementation and oversight",
      url: "/uploads/documents/iso/02_ISO_Cell_Committee.pdf",
    },
    {
      title: "ISO 9001-2015 QMS Apex Quality Manual",
      description: "Comprehensive quality manual covering procedures, processes, and standards for ISO 9001-2015 compliance",
      url: "/uploads/documents/iso/03_ISO_9001_2015_Apex_Quality_Manual.pdf",
    },
    {
      title: "ISO 9001-2015 QMS Certificate",
      description: "Official ISO 9001:2015 certification awarded to SSGMCE for Quality Management System",
      url: "/uploads/documents/iso/01_ISO_9001_2015_Certificate.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="ISO Certification"
        subtitle="Quality Management System - ISO 9001-2015"
        backgroundImage="https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80"
      />

      <div className="mx-auto w-full max-w-[120rem] px-4 py-10 sm:px-5 sm:py-12 lg:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <DocumentsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Header Info */}
            <div className="mb-6 rounded-lg bg-white p-5 shadow-md sm:mb-8 sm:p-6">
              <h2 className="mb-3 text-[clamp(1.2rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">
                ISO 9001-2015 Quality Management System
              </h2>
              <p className="text-gray-600 leading-relaxed">
                SSGMCE, Shegaon is ISO 9001-2015 certified, demonstrating our commitment to maintaining high quality standards in all academic and administrative processes.
              </p>
            </div>

            {/* Documents List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y">
                {documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="border-b p-5 transition-colors hover:bg-gray-50 last:border-b-0 sm:p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="mb-2 text-[clamp(1rem,2.1vw,1.125rem)] font-semibold text-gray-800">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-ssgmce-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        View Document
                      </a>
                      <a
                        href={doc.url}
                        download
                        className="inline-flex items-center px-4 py-2 border border-ssgmce-blue text-ssgmce-blue rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISO;
