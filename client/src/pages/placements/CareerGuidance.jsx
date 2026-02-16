import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaPhoneAlt, FaEnvelope, FaEye, FaBullseye, FaTasks } from "react-icons/fa";

const CareerGuidance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Career Guidance Cell | SSGMCE";
  }, []);

  const activityData = [
    { srNo: 1, year: "2023-24", activities: "08", beneficiary: "1762" },
    { srNo: 1, year: "2022-23", activities: "29", beneficiary: "3416" },
    { srNo: 2, year: "2021-22", activities: "04", beneficiary: "457" },
    { srNo: 3, year: "2020-21", activities: "08", beneficiary: "954" },
    { srNo: 4, year: "2019-20", activities: "04", beneficiary: "933" },
    { srNo: 5, year: "2018-19", activities: "10", beneficiary: "773" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Career Guidance Cell" 
        subtitle="Guiding Students Towards Their Future"
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
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Vision */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <FaEye className="text-3xl" />
                  <h2 className="text-2xl font-bold">Vision</h2>
                </div>
                <p className="leading-relaxed">
                  To Guide the students for competitive exams and higher studies for their prospective careers.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg shadow-lg p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <FaBullseye className="text-3xl" />
                  <h2 className="text-2xl font-bold">Mission</h2>
                </div>
                <p className="leading-relaxed">
                  To orient the students towards their goals through lectures, awareness programs on higher studies, competitive exams, and opportunities in private and public sector organizations.
                </p>
              </div>
            </div>

            {/* About Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                About Career Guidance Cell
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 leading-relaxed">
                  The Career Guidance Cell was established to support students who are interested in pursuing post-graduate education after the completion of graduation at SSGMCE. The institution has made available an in-house mentor who meets with students regularly and guides them regarding higher education based on their interests. Students are encouraged to visit the Career Guidance Cell in their 3rd year to take inputs and start planning for getting admission to their dream university. The Career Guidance Cell works with interested students to help them perform well in necessary competitive examinations and later provide counselling support to help students complete and submit their applications for admission to post-graduate programs.
                </p>
              </div>
            </section>

            {/* Objectives Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200 flex items-center gap-3">
                <FaTasks className="text-ssgmce-blue" />
                Objectives
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 font-semibold mb-4">
                  The Career Guidance Cell has the following objectives:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1 font-bold">•</span>
                    <span>To assist students in their career planning and provide information that helps the students to get direction to their aspirations and interests.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1 font-bold">•</span>
                    <span>To organize programs to create awareness about the importance of higher studies in India and Abroad.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1 font-bold">•</span>
                    <span>To organize programs to create awareness about the job opportunities at government organizations and (PSU) Public Sector Undertaking organizations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1 font-bold">•</span>
                    <span>To organize and offer various programs on Personality Development, Soft Skills, and Communication Skills.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1 font-bold">•</span>
                    <span>To guide the students for competitive examinations after graduation such as CAT, TOEFL, GRE, etc. towards higher studies.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1 font-bold">•</span>
                    <span>To organize diagnostic tests for competitive examinations such as CAT, GRE, and GMAT and to counsel them for higher studies.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1 font-bold">•</span>
                    <span>To organize Pre-Placement Training Programs to enable students to showcase their skills during the Interview.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Activity Report */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                Activity Report
              </h2>

              {/* Desktop Table */}
              <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-ssgmce-blue to-blue-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Sr.No
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Academic Year
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          No. of Activities
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          No. of Beneficiary
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Detail Report
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {activityData.map((row, index) => (
                        <tr 
                          key={index}
                          className={`${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          } hover:bg-blue-50 transition-colors`}
                        >
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {row.srNo}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                            {row.year}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {row.activities}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {row.beneficiary}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-ssgmce-blue hover:text-blue-800 text-sm font-medium hover:underline">
                              Click for Details Report
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {activityData.map((row, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 border-l-4 border-ssgmce-orange"
                  >
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Sr.No</p>
                        <p className="text-sm font-medium text-gray-900">{row.srNo}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Academic Year</p>
                        <p className="text-sm font-medium text-gray-900">{row.year}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Activities</p>
                        <p className="text-sm text-gray-700">{row.activities}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase">Beneficiary</p>
                        <p className="text-sm text-gray-700">{row.beneficiary}</p>
                      </div>
                    </div>
                    <button className="text-ssgmce-blue hover:text-blue-800 text-sm font-medium hover:underline">
                      Click for Details Report
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Standard Operating Procedure */}
            <section className="mb-10">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-ssgmce-blue">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Standard Operating Procedure (SOP)
                </h3>
                <p className="text-gray-700 text-sm">
                  For detailed information about the Career Guidance Cell procedures and guidelines, please contact the coordinator.
                </p>
              </div>
            </section>

            {/* Coordinator Section */}
            <section>
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200">
                Coordinator
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Dr. S. D. Padiya
                  </h3>
                  <p className="text-ssgmce-blue font-semibold text-lg mb-6">
                    Co-ordinator, Career Guidance Cell
                  </p>
                  
                  <div className="space-y-3 max-w-md mx-auto">
                    <div className="flex items-center justify-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <FaPhoneAlt className="text-ssgmce-orange mr-3 flex-shrink-0" />
                      <a href="tel:7588501506" className="hover:text-ssgmce-blue transition-colors font-medium">
                        +91 7588501506
                      </a>
                    </div>
                    <div className="flex items-center justify-center text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <FaEnvelope className="text-ssgmce-orange mr-3 flex-shrink-0" />
                      <a href="mailto:sdpadiya@ssgmce.ac.in" className="hover:text-ssgmce-blue transition-colors text-sm">
                        sdpadiya@ssgmce.ac.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
