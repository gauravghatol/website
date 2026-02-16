import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import tpoImage from "../../assets/images/placements/tpo-adesh-solanke.jpg";

const AboutTP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Training & Placement Cell | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="About Training & Placement Cell" 
        subtitle="Bridging Academia and Industry"
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
            {/* Training and Placement Officer Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                Training and Placement Officer
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Officer Photo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={tpoImage} 
                      alt="Prof. Adesh B. Solanke" 
                      className="w-48 h-56 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Officer Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Prof. Adesh B. Solanke
                    </h3>
                    <p className="text-ssgmce-blue font-semibold text-lg mb-5">
                      Training & Placement Officer
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <FaPhoneAlt className="text-ssgmce-orange mr-3 flex-shrink-0" />
                        <a href="tel:9422926420" className="hover:text-ssgmce-blue transition-colors font-medium">
                          +91 9422926420
                        </a>
                      </div>
                      <div className="flex items-start text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <FaEnvelope className="text-ssgmce-orange mr-3 mt-1 flex-shrink-0" />
                        <div className="flex flex-col gap-1.5">
                          <a href="mailto:placements@ssgmce.ac.in" className="hover:text-ssgmce-blue transition-colors text-sm">
                            placements@ssgmce.ac.in
                          </a>
                          <a href="mailto:absolanke@ssgmce.ac.in" className="hover:text-ssgmce-blue transition-colors text-sm">
                            absolanke@ssgmce.ac.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Training and Placement Cell Section */}
            <section>
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200">
                About Training and Placement Cell
              </h2>
              
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  The institute has an exclusively independent Training and Placement Cell as a separate department to create and strengthen bridge between institute and industry/corporate bodies in the interest of student's trainings and placements. T & P Cell organizes various skill and employability enhancement programmes to improve overall personality of the students. The T & P Cell is highly equipped with internet enabled modern audio-visual facilities as per industry standards to carry out training and placement activities virtually.
                </p>
                
                <p className="leading-relaxed">
                  The department organizes placement activities through the year by inviting corporate executives for in and off campus recruitment programmes for final year students of Engineering and MBA Department. Summer and winter internships also been provided by T & P Cell to students. Also, T & P Cell consistently assists pass out but non-placed students of institute whenever such opportunity exists.
                </p>
                
                <p className="leading-relaxed">
                  We T & P cell and Departmental T & P Co-ordinators Faculties work as a team to place the students and believe the truth teamwork is more important than ever.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTP;
