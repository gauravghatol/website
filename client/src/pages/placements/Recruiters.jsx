import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaDownload, FaBuilding, FaGlobe, FaIndustry, FaRocket } from "react-icons/fa";
import recruitersPDF from "../../assets/images/placements/OUR RECRUITERS.pdf";

const Recruiters = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Major Recruiters | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Major Recruiters" 
        subtitle="Our Esteemed Industry Partners"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              <PlacementSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                Our Recruiting Partners
              </h2>
              
              <div className="prose max-w-none text-gray-700 mb-8">
                <p className="leading-relaxed mb-4">
                  SSGMCE has established strong partnerships with leading companies across various sectors. Our Training and Placement Cell consistently brings top-tier organizations to campus for recruitment drives, offering excellent career opportunities to our students.
                </p>
                <p className="leading-relaxed">
                  Over the years, we have built a robust network of recruiters spanning IT, Core Engineering, Manufacturing, Consulting, and emerging technology domains. Our students have been placed in prestigious organizations, both national and multinational, with competitive salary packages.
                </p>
              </div>

              {/* Company Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white text-center">
                  <FaBuilding className="text-4xl mb-3 mx-auto opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">IT & Software</h3>
                  <p className="text-sm opacity-90">Leading tech companies and startups</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-lg p-6 text-white text-center">
                  <FaIndustry className="text-4xl mb-3 mx-auto opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">Core Engineering</h3>
                  <p className="text-sm opacity-90">Manufacturing & infrastructure firms</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg p-6 text-white text-center">
                  <FaGlobe className="text-4xl mb-3 mx-auto opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">MNCs</h3>
                  <p className="text-sm opacity-90">Global multinational corporations</p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg shadow-lg p-6 text-white text-center">
                  <FaRocket className="text-4xl mb-3 mx-auto opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">Emerging Tech</h3>
                  <p className="text-sm opacity-90">AI, IoT, Cloud & Analytics</p>
                </div>
              </div>

              {/* PDF Download Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-ssgmce-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Complete List of Recruiters
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Download the comprehensive list of our recruiting partners. The document includes details of companies that have visited our campus for placements, covering various sectors and industries.
                </p>
                
                <a 
                  href={recruitersPDF}
                  download="SSGMCE_Our_Recruiters.pdf"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-ssgmce-orange to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <FaDownload className="text-xl" />
                  Download Our Recruiters List (PDF)
                </a>
                
                <p className="text-sm text-gray-500 mt-4">
                  PDF contains logos and names of companies that recruit from SSGMCE
                </p>
              </div>
            </section>

            {/* Key Highlights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200">
                Why Companies Choose SSGMCE Students
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ssgmce-orange">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Strong Technical Foundation
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our students are well-versed in core engineering concepts and latest technologies, making them job-ready from day one.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ssgmce-blue">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Industry-Ready Skills
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Comprehensive training programs ensure students possess both technical expertise and soft skills required in the industry.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ssgmce-blue">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Practical Exposure
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Internships, industrial visits, and project work provide hands-on experience with real-world applications.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-ssgmce-orange">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Professional Attitude
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ethics, discipline, and professional work culture are integral parts of our education system.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-ssgmce-blue">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                For Recruiters
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                We welcome companies interested in recruiting our talented students. For campus recruitment opportunities, placement brochure, or any queries, please contact:
              </p>
              <div className="text-gray-700 text-sm">
                <p><strong>Email:</strong> <a href="mailto:placements@ssgmce.ac.in" className="text-ssgmce-blue hover:underline">placements@ssgmce.ac.in</a></p>
                <p><strong>Phone:</strong> <a href="tel:9422926420" className="text-ssgmce-blue hover:underline">+91 9422926420</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruiters;
