import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaDownload, FaChartLine, FaUsers, FaBuilding } from "react-icons/fa";
import placementStatsPDF from "../../assets/images/placements/3 years Placement Stats.pdf";

const PlacementStats = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Placement Statistics | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Placement Statistics" 
        subtitle="Our Placement Track Record"
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
                Placement Performance
              </h2>
              
              <div className="prose max-w-none text-gray-700 mb-8">
                <p className="leading-relaxed mb-4">
                  SSGMCE has consistently maintained an excellent placement record over the years. Our Training and Placement Cell works tirelessly to bring top-tier companies to campus and prepare students for successful careers in the industry.
                </p>
                <p className="leading-relaxed">
                  The statistics below showcase our placement achievements over the past three years, demonstrating our commitment to student success and strong industry partnerships.
                </p>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
                  <FaChartLine className="text-4xl mb-3 opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">Consistent Growth</h3>
                  <p className="text-sm opacity-90">Year-on-year improvement in placement percentage</p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-lg p-6 text-white">
                  <FaUsers className="text-4xl mb-3 opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">Maximum Students Placed</h3>
                  <p className="text-sm opacity-90">Growing number of students securing offers</p>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg shadow-lg p-6 text-white">
                  <FaBuilding className="text-4xl mb-3 opacity-80" />
                  <h3 className="text-lg font-semibold mb-2">Top Recruiters</h3>
                  <p className="text-sm opacity-90">Leading companies visit our campus</p>
                </div>
              </div>

              {/* PDF Download Section */}
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-ssgmce-blue">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Download Detailed Statistics
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Get comprehensive placement data for the last three academic years including department-wise statistics, company-wise selections, salary packages, and more.
                </p>
                
                <a 
                  href={placementStatsPDF}
                  download="SSGMCE_3_Years_Placement_Statistics.pdf"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <FaDownload className="text-xl" />
                  Download 3 Years Placement Statistics (PDF)
                </a>
                
                <p className="text-sm text-gray-500 mt-4">
                  PDF file contains detailed placement records for the academic years 2022-23, 2023-24, and 2024-25
                </p>
              </div>
            </section>

            {/* Additional Info */}
            <section className="bg-blue-50 rounded-lg p-6 border-l-4 border-ssgmce-blue">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Note
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Statistics are updated annually after the completion of placement season</li>
                <li>• Data includes both on-campus and off-campus placements coordinated by T&P Cell</li>
                <li>• For any queries regarding placement statistics, contact T&P Cell at placements@ssgmce.ac.in</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;
