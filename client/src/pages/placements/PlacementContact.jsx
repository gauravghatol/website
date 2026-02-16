import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import tpoImage from "../../assets/images/placements/tpo-adesh-solanke.jpg";

const PlacementContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact T&P Cell | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Contact Us" 
        subtitle="Training & Placement Cell"
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
            <section>
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                Get in Touch with T&P Cell
              </h2>

              {/* Contact Card */}
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto mb-8">
                <div className="text-center mb-8">
                  <img 
                    src={tpoImage} 
                    alt="Prof. Adesh B. Solanke" 
                    className="w-40 h-48 object-cover rounded-lg shadow-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Prof. Adesh B. Solanke
                  </h3>
                  <p className="text-ssgmce-blue font-semibold text-lg">
                    Training & Placement Officer
                  </p>
                </div>

                <div className="space-y-4 max-w-xl mx-auto">
                  {/* Phone */}
                  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-ssgmce-orange to-orange-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase">Phone</p>
                      <a 
                        href="tel:9422926420" 
                        className="text-gray-900 hover:text-ssgmce-blue transition-colors font-medium text-lg"
                      >
                        +91 9422926420
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-ssgmce-blue to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Email</p>
                      <div className="flex flex-col gap-1">
                        <a 
                          href="mailto:placements@ssgmce.ac.in" 
                          className="text-gray-900 hover:text-ssgmce-blue transition-colors font-medium"
                        >
                          placements@ssgmce.ac.in
                        </a>
                        <a 
                          href="mailto:absolanke@ssgmce.ac.in" 
                          className="text-gray-900 hover:text-ssgmce-blue transition-colors font-medium"
                        >
                          absolanke@ssgmce.ac.in
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-ssgmce-orange to-orange-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Office Location</p>
                      <p className="text-gray-900 font-medium">
                        Training & Placement Cell<br />
                        Shri Sant Gajanan Maharaj College of Engineering<br />
                        Shegaon - 444203, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Companies Section */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6 border-l-4 border-ssgmce-blue mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  For Recruiting Companies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We welcome companies interested in recruiting our talented pool of engineering and management graduates. Our Training & Placement Cell facilitates seamless campus recruitment drives and maintains strong industry-academia relationships.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For placement brochure, student database, or to schedule a campus drive, please reach out to us using the contact details above.
                </p>
              </div>

              {/* For Students Section */}
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg p-6 border-l-4 border-ssgmce-orange">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  For Students
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For queries related to placement registration, upcoming drives, training programs, or career guidance, feel free to contact the Training & Placement Officer during office hours or send an email to the addresses mentioned above.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementContact;
