import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaHandshake,
  FaGlobe,
  FaIndustry,
  FaUniversity,
  FaExchangeAlt
} from 'react-icons/fa';

const Collaboration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Collaborations & MoUs | Research - SSGMCE';
  }, []);

  const collaborations = [
    {
      type: 'Industry',
      partners: [
        'TCS (Tata Consultancy Services)',
        'Infosys',
        'Persistent Systems',
        'KPIT Technologies',
        'Cognizant'
      ]
    },
    {
      type: 'Academic',
      partners: [
        'IIT Bombay (Remote Centre)',
        'VNIT Nagpur',
        'SGB Amravati University',
        'College of Engineering Pune (COEP)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Collaborations & MoUs"
        subtitle="Bridging the Gap between Academia and Industry"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'Collaborations' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Intro */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Strategic Partnerships</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    SSGMCE firmly believes that collaboration is key to innovation. We have established strategic partnerships with leading industries and premier academic institutions. These Memorandum of Understandings (MoUs) facilitate student internships, faculty exchange, joint research projects, and curriculum development.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <FaHandshake className="text-9xl text-blue-100" />
                </div>
              </div>
            </section>

            {/* MoUs */}
            <section className="grid md:grid-cols-2 gap-8">
              {/* Industry */}
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaIndustry className="text-xl text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Industry Partners</h3>
                </div>
                <ul className="space-y-3">
                  {collaborations[0].partners.map((partner, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic */}
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FaUniversity className="text-xl text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Academic Partners</h3>
                </div>
                <ul className="space-y-3">
                  {collaborations[1].partners.map((partner, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Collaborative Activities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center group hover:bg-blue-600 hover:text-white transition-all">
                  <FaExchangeAlt className="text-4xl mx-auto mb-4 text-blue-500 group-hover:text-white" />
                  <h3 className="font-bold mb-2">Faculty Exchange</h3>
                  <p className="text-sm text-gray-600 group-hover:text-blue-100">Sharing expertise and knowledge resources</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center group hover:bg-orange-500 hover:text-white transition-all">
                  <FaGlobe className="text-4xl mx-auto mb-4 text-orange-500 group-hover:text-white" />
                  <h3 className="font-bold mb-2">Joint Conferences</h3>
                  <p className="text-sm text-gray-600 group-hover:text-orange-100">Organizing international conferences and workshops</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center group hover:bg-green-600 hover:text-white transition-all">
                  <FaIndustry className="text-4xl mx-auto mb-4 text-green-500 group-hover:text-white" />
                  <h3 className="font-bold mb-2">Consultancy</h3>
                  <p className="text-sm text-gray-600 group-hover:text-green-100">Providing technical solutions to industry problems</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
