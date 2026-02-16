import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Coordinators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "T&P Cell Coordinators | SSGMCE";
  }, []);

  const coordinators = [
    {
      name: "Prof. Adesh Solanke",
      designation: "(Training and Placement Officer)",
      department: "MBA",
      mobile: ["9422926420(O)", "8390407947(R)"],
      email: ["placements@ssgmce.ac.in", "absolanke@ssgmce.ac.in"]
    },
    {
      name: "Prof. Mrs. H. S. Patil",
      designation: "(Asstt. TPO)",
      department: "ASH",
      mobile: ["7038027303"],
      email: ["hspatil@ssgmce.ac.in"]
    },
    {
      name: "Dr. N. H. Khandare",
      designation: "",
      department: "MECH",
      mobile: ["7709149028"],
      email: ["nhkhandare@ssgmce.ac.in"]
    },
    {
      name: "Prof. S. S. Muddalkar",
      designation: "",
      department: "IT",
      mobile: ["9655840821"],
      email: ["ssmuddalkar@ssgmce.ac.in"]
    },
    {
      name: "Prof. S. P. Badar",
      designation: "",
      department: "EXTC",
      mobile: ["7020852749"],
      email: ["spbadar@ssgmce.ac.in"]
    },
    {
      name: "Prof. M. R. Chavan",
      designation: "",
      department: "ELPO",
      mobile: ["8329111308", "8983442243"],
      email: ["mrchavan@ssgmce.ac.in"]
    },
    {
      name: "Prof. Ms. K. P. Sable",
      designation: "",
      department: "CSE",
      mobile: ["7620474391"],
      email: ["kpsable@ssgmce.ac.in"]
    },
    {
      name: "Dr.S. M. Mishra",
      designation: "",
      department: "MBA",
      mobile: ["9405105291"],
      email: ["smmishra@ssgmce.ac.in"]
    },
    {
      name: "Prof. S. V. Bhagat",
      designation: "",
      department: "ASH",
      mobile: ["9922127385"],
      email: ["svbhagat@ssgmce.ac.in"]
    },
    {
      name: "Shri. V. W. Bendre",
      designation: "",
      department: "T & P",
      mobile: ["9561981580"],
      email: ["vwbendre@ssgmce.ac.in"]
    },
    {
      name: "Shri. M. D. Bhise",
      designation: "",
      department: "T & P",
      mobile: ["9850245695"],
      email: ["mdbhise@ssgmce.ac.in"]
    },
    {
      name: "Shri. P. N. Dindokar",
      designation: "",
      department: "T & P",
      mobile: ["9689349098"],
      email: ["pramoddindokar@ssgmce.ac.in"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="T&P Cell Coordinators" 
        subtitle="Training & Placement Cell Team"
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
                Training and Placement Cell Coordinators
              </h2>

              {/* Desktop Table */}
              <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-ssgmce-blue to-blue-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Name of Faculty/Staff
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          Mobile Nos.
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                          e-mail ID
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {coordinators.map((coordinator, index) => (
                        <tr 
                          key={index}
                          className={`${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          } hover:bg-blue-50 transition-colors`}
                        >
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">
                              {coordinator.name}
                            </div>
                            {coordinator.designation && (
                              <div className="text-sm text-ssgmce-blue font-medium">
                                {coordinator.designation}
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-ssgmce-orange">
                              {coordinator.department}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1">
                              {coordinator.mobile.map((num, idx) => (
                                <a 
                                  key={idx}
                                  href={`tel:${num.replace(/[^0-9]/g, '')}`}
                                  className="text-sm text-gray-700 hover:text-ssgmce-blue transition-colors flex items-center"
                                >
                                  <FaPhoneAlt className="mr-2 text-xs text-ssgmce-orange" />
                                  {num}
                                </a>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1">
                              {coordinator.email.map((mail, idx) => (
                                <a 
                                  key={idx}
                                  href={`mailto:${mail}`}
                                  className="text-sm text-gray-700 hover:text-ssgmce-blue transition-colors flex items-center break-all"
                                >
                                  <FaEnvelope className="mr-2 text-xs text-ssgmce-orange flex-shrink-0" />
                                  {mail}
                                </a>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {coordinators.map((coordinator, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 border-l-4 border-ssgmce-orange"
                  >
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {coordinator.name}
                      </h3>
                      {coordinator.designation && (
                        <p className="text-sm text-ssgmce-blue font-medium mt-1">
                          {coordinator.designation}
                        </p>
                      )}
                      <span className="inline-flex items-center px-3 py-1 mt-2 rounded-full text-xs font-medium bg-orange-100 text-ssgmce-orange">
                        {coordinator.department}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Mobile</p>
                        {coordinator.mobile.map((num, idx) => (
                          <a 
                            key={idx}
                            href={`tel:${num.replace(/[^0-9]/g, '')}`}
                            className="text-sm text-gray-700 hover:text-ssgmce-blue flex items-center mb-1"
                          >
                            <FaPhoneAlt className="mr-2 text-xs text-ssgmce-orange" />
                            {num}
                          </a>
                        ))}
                      </div>
                      
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Email</p>
                        {coordinator.email.map((mail, idx) => (
                          <a 
                            key={idx}
                            href={`mailto:${mail}`}
                            className="text-sm text-gray-700 hover:text-ssgmce-blue flex items-center mb-1 break-all"
                          >
                            <FaEnvelope className="mr-2 text-xs text-ssgmce-orange flex-shrink-0" />
                            {mail}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coordinators;
