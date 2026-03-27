import { useEffect } from "react";
import PageHeader from "./PageHeader";
import DocumentsSidebar from "./DocumentsSidebar";
import DocumentGrid from "./DocumentGrid";
import PDFDocumentViewer from "./PDFDocumentViewer";
import { FaFileAlt } from "react-icons/fa";

/**
 * EnhancedDocumentsLayout Component
 * Layout for document pages with sidebar, static PDFs with summaries, and API-driven grid
 */
const EnhancedDocumentsLayout = ({
  pageTitle,
  subtitle,
  category,
  description,
  backgroundImage = "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80",
  staticDocuments = [],
  showGrid = true,
  introId,
  documentsId,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pageTitle} | SSGMCE Documents`;
  }, [pageTitle]);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={pageTitle}
        subtitle={subtitle || "Official Documents & Downloads"}
        backgroundImage={backgroundImage}
      />

      <div className="mx-auto w-full max-w-[120rem] px-4 py-8 sm:px-5 sm:py-10 lg:px-6 lg:py-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3 lg:self-start">
            <DocumentsSidebar />
          </div>

          {/* Main Content */}
          <div className="min-w-0 space-y-6 lg:col-span-9 lg:space-y-8">
            {/* Description */}
            {description && (
              <div id={introId} className="rounded-xl bg-white p-4 shadow-md sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaFileAlt className="text-xl text-ssgmce-orange" />
                  <h2 className="text-[clamp(1.1rem,2.4vw,1.35rem)] font-bold text-ssgmce-blue">{pageTitle}</h2>
                </div>
                <p className="text-[clamp(0.88rem,1.6vw,1rem)] leading-relaxed text-gray-600">{description}</p>
              </div>
            )}

            {/* Static PDF Documents with Summaries */}
            {staticDocuments.length > 0 && (
              <div id={documentsId} className="space-y-6">
                {staticDocuments.map((doc, index) => (
                  <PDFDocumentViewer
                    key={index}
                    title={doc.title}
                    summary={doc.summary}
                    pdfUrl={doc.pdfUrl}
                    fileSize={doc.fileSize}
                    year={doc.year}
                  />
                ))}
              </div>
            )}

            {/* API-driven Document Grid */}
            {showGrid && (
              <DocumentGrid
                category={category}
                title={staticDocuments.length > 0 ? "More Documents" : pageTitle}
                description={staticDocuments.length > 0 ? "Additional documents uploaded by admin" : description}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDocumentsLayout;
