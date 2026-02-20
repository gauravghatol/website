import React from 'react';
import { FaExternalLinkAlt, FaMicrochip, FaCar, FaCogs, FaSolarPanel, FaIndustry, FaLaptopCode, FaFlask } from 'react-icons/fa';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';

const facilities = [
  {
    name: "Cadence Center",
    icon: FaMicrochip,
    description: "Cadence VLSI and Embedded System Design Centre equipped with industry-standard Cadence EDA tools for VLSI design, simulation, and verification. Supports research and training in semiconductor design and embedded systems.",
    image: "https://www.ssgmce.ac.in/images/blog/cadence-img.jpg",
    reportUrl: "https://www.ssgmce.ac.in/uploads/Cadence%20VLSI%20and%20Embedded%20System%20Design%20Centre.pdf",
    department: "Electronics & Telecommunication",
  },
  {
    name: "Electric Vehicle Lab",
    icon: FaCar,
    description: "State-of-the-art Electric Vehicle Laboratory for research and development in EV technology, battery management systems, motor controllers, and sustainable transportation solutions.",
    image: "https://www.ssgmce.ac.in/images/blog/EV-Lab-1.webp",
    reportUrl: "https://www.ssgmce.ac.in/uploads/Report%20Electric%20_Vehicle%20_lab.pdf",
    department: "Electrical Engineering",
  },
  {
    name: "FAB Lab",
    icon: FaCogs,
    description: "Fabrication Laboratory (FAB Lab) providing hands-on access to modern fabrication tools including 3D printers, laser cutters, CNC machines, and prototyping equipment for innovation and product development.",
    image: "https://www.ssgmce.ac.in/images/blog/Fab-Lab.png",
    reportUrl: "https://www.ssgmce.ac.in/uploads/Annual%20Report%20of%20Fablab%202023-24.pdf",
    department: "Mechanical Engineering",
  },
  {
    name: "Solar Production Center",
    icon: FaSolarPanel,
    description: "Center of Excellence in Solar Energy featuring solar panel production facility, sun simulators, battery assembly setup, solar product display gallery, and solar radiation measurement equipment for renewable energy research.",
    image: "https://www.ssgmce.ac.in/images/blog/solar_production.webp",
    reportUrl: "https://www.ssgmce.ac.in/uploads/SOLAR-CENTER-REPORT.pdf",
    department: "Electrical Engineering",
  },
  {
    name: "PLC Automation Lab",
    icon: FaIndustry,
    description: "PLC and Factory Automation Laboratory equipped with programmable logic controllers, SCADA systems, and industrial automation hardware for training and research in Industry 4.0 technologies.",
    image: "https://www.ssgmce.ac.in/images/blog/PLC_Automation_lab.PNG",
    reportUrl: "https://www.ssgmce.ac.in/uploads/Report_Training%20Program%20Conducted_PLC%20and%20Factory%20Automation%20Lab%20(1).pdf",
    department: "Electrical Engineering",
  },
  {
    name: "SAP ERP Center",
    icon: FaLaptopCode,
    description: "SAP ERP (Enterprise Resource Planning) Center providing hands-on experience with SAP modules for students. Covers business process management, supply chain, finance, and human resource management using SAP software.",
    image: "https://www.ssgmce.ac.in/images/blog/sap_erp.jfif",
    reportUrl: "https://www.ssgmce.ac.in/uploads/pdf/ERP%20Center%20Overview.pdf",
    department: "MBA",
  },
  {
    name: "Dr. Georg H Endress Laboratory",
    icon: FaFlask,
    description: "Advanced instrumentation and process automation laboratory established in collaboration with Endress+Hauser. Equipped with cutting-edge measurement and control instruments for flow, level, pressure, and temperature measurement.",
    image: "https://www.ssgmce.ac.in/images/blog/Endress_Laboratory.PNG",
    reportUrl: "https://www.ssgmce.ac.in/uploads/Detailed%20Report%20E%5EMH%20lab.pdf",
    department: "Electronics & Telecommunication",
  },
];

const COE = () => {
  return (
    <GenericPage title="Center of Excellence" sidebar={<ResearchSidebar />}>
      <p className="text-gray-700 mb-2">
        SSGMCE houses multiple Centers of Excellence and advanced research facilities dedicated to fostering innovation, hands-on learning, and industry-relevant research across various engineering disciplines.
      </p>
      <p className="text-gray-500 text-sm mb-8">
        These facilities provide students and faculty with access to state-of-the-art equipment and tools for cutting-edge research and development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, idx) => {
          const Icon = facility.icon;
          return (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="absolute inset-0 bg-ssgmce-blue items-center justify-center hidden"
                >
                  <Icon className="text-white text-5xl" />
                </div>
                <div className="absolute top-3 right-3 bg-ssgmce-saffron text-white text-xs px-2 py-1 rounded-full font-medium">
                  {facility.department}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="text-ssgmce-blue text-lg flex-shrink-0" />
                  <h3 className="text-lg font-bold text-ssgmce-blue leading-tight">
                    {facility.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {facility.description}
                </p>
                <a
                  href={facility.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ssgmce-saffron hover:text-ssgmce-blue transition-colors"
                >
                  View Detailed Report
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </GenericPage>
  );
};

export default COE;
