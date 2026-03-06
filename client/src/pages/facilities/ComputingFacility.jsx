import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import FacilitiesSidebar from "../../components/FacilitiesSidebar";
import {
  FaDesktop,
  FaServer,
  FaWifi,
  FaCheckCircle,
  FaLaptopCode,
} from "react-icons/fa";

const ComputingFacility = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Central Computing Facility | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Central Computing Facility"
        subtitle="State-of-the-Art Computing Infrastructure"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <FacilitiesSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <section>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Central Computing Facility at SSGMCE provides
                state-of-the-art computing infrastructure to support academic,
                research, and administrative activities. With high-performance
                systems, high-speed internet, and licensed software, we empower
                students and faculty to excel in their technical pursuits.
              </p>
            </section>

            {/* Statistics */}
            <section className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaDesktop className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Computer Systems</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaWifi className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">1 Gbps</div>
                <div className="text-sm opacity-90">Internet Bandwidth</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl text-center shadow-lg">
                <FaServer className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Server Uptime</div>
              </div>
              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl text-center shadow-lg">
                <FaLaptopCode className="text-4xl mx-auto mb-3" />
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">Computer Labs</div>
              </div>
            </section>

            {/* Lab-wise Infrastructure */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Department-wise Computer Labs
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Department
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        No. of Labs
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total Systems
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Key Software
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Computer Science & IT
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        12
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        200+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        VS Code, Eclipse, Android Studio, MATLAB, Python
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Mechanical Engineering
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        5
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        70+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        AutoCAD, CATIA, SolidWorks, ANSYS, MATLAB
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Electrical Engineering
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        4
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        60+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        MATLAB, LabVIEW, PSCAD, ETAP, PLC Programming
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Electronics & Telecom
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        5
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        70+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Xilinx, Cadence, MATLAB, Proteus, Keil µVision
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Civil Engineering
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        3
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        50+
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        AutoCAD, STAAD Pro, Primavera, ArcGIS, ETABS
                      </td>
                    </tr>
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        Total
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl text-ssgmce-orange">
                        31
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        500+
                      </td>
                      <td className="border border-gray-300 px-6 py-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Licensed Software */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Licensed Software & Tools
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    category: "Programming & Development",
                    tools: [
                      "Visual Studio",
                      "Eclipse",
                      "IntelliJ IDEA",
                      "Android Studio",
                      "PyCharm",
                    ],
                  },
                  {
                    category: "CAD/CAM/CAE",
                    tools: [
                      "AutoCAD",
                      "CATIA V5",
                      "SolidWorks",
                      "ANSYS",
                      "CREO Parametric",
                    ],
                  },
                  {
                    category: "Simulation & Analysis",
                    tools: [
                      "MATLAB",
                      "Simulink",
                      "LabVIEW",
                      "PSPICE",
                      "Multisim",
                    ],
                  },
                  {
                    category: "VLSI & Embedded",
                    tools: [
                      "Xilinx ISE",
                      "Cadence",
                      "Keil µVision",
                      "MPLAB",
                      "Proteus",
                    ],
                  },
                  {
                    category: "Structural Analysis",
                    tools: [
                      "STAAD Pro",
                      "ETABS",
                      "SAP2000",
                      "Primavera",
                      "MS Project",
                    ],
                  },
                  {
                    category: "Business & Analytics",
                    tools: [
                      "MS Office Suite",
                      "SPSS",
                      "Tally ERP 9",
                      "SAP",
                      "Power BI",
                    ],
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <h4 className="font-bold text-ssgmce-blue mb-2">
                      {item.category}
                    </h4>
                    <ul className="space-y-1">
                      {item.tools.map((tool, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0 text-xs" />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
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

export default ComputingFacility;
