import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaMicrochip,
  FaBrain,
  FaRobot,
  FaBolt,
  FaArrowRight,
  FaTools
} from 'react-icons/fa';

const COE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Centre of Excellence | Research - SSGMCE';
  }, []);

  const centers = [
    {
      icon: FaMicrochip,
      title: 'VLSI Design & Embedded Systems',
      dept: 'Electronics & Telecommunication',
      description: 'Advanced facility for research in VLSI design, FPGA prototyping, and embedded system development.',
      features: ['Cadence Tools Suite', 'Xilinx Vivado Boards', 'IoT Development Kits']
    },
    {
      icon: FaBrain,
      title: 'AI & Data Science',
      dept: 'Computer Science & Engineering',
      description: 'Dedicated to research in Artificial Intelligence, Machine Learning, and Big Data Analytics.',
      features: ['High Performance Computing GPU Server', 'Deep Learning Workstations', 'Cloud Computing Setup']
    },
    {
      icon: FaRobot,
      title: 'Robotics & Automation',
      dept: 'Mechanical Engineering',
      description: 'Focuses on industrial automation, robotics, and mechatronics systems.',
      features: ['Industrial Robot Arm', 'PLC & SCADA Systems', 'Drone Prototyping Lab']
    },
    {
      icon: FaBolt,
      title: 'Power Systems & Drives',
      dept: 'Electrical Engineering',
      description: 'Research in smart grids, renewable energy integration, and electric drives.',
      features: ['Power Quality Analyzers', 'Solar PV Emulator', 'Variable Frequency Drives']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Centre of Excellence"
        subtitle="State-of-the-Art Facilities for Advanced Research"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'COE' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4"> fostering Innovation through Excellence</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SSGMCE has established several Centres of Excellence (CoE) in collaboration with industry partners and government agencies. These centres provide state-of-the-art infrastructure and advanced tools to faculty and students for conducting high-end research and development in cutting-edge technologies.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                    <FaTools /> Advanced Labs
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 px-4 py-2 rounded-lg">
                    <FaArrowRight /> Industry Driven
                  </div>
                </div>
              </div>
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-orange-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
            </section>

            {/* Centres Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Our Centres
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {centers.map((center, idx) => {
                  const Icon = center.icon;
                  return (
                    <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="p-6">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <Icon className="text-2xl" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-2">{center.title}</h3>
                        <p className="text-sm text-blue-600 font-medium mb-3">{center.dept}</p>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {center.description}
                        </p>

                        <div className="space-y-2">
                          {center.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default COE;
