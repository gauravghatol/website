import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaFileContract,
  FaMoneyBillWave,
  FaAward,
  FaPlane,
  FaBalanceScale,
  FaFilePdf,
  FaArrowRight
} from 'react-icons/fa';

const ResearchPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Research Policy | Research - SSGMCE';
  }, []);

  const highlights = [
    {
      icon: FaMoneyBillWave,
      title: 'Seed Funding',
      desc: 'Provision of seed money for faculty and students to initiate research projects and validate innovative ideas.'
    },
    {
      icon: FaAward,
      title: 'Incentives for Publications',
      desc: 'Monetary incentives for publishing research papers in reputed SCI/Scopus indexed journals.'
    },
    {
      icon: FaFileContract,
      title: 'IPR Support',
      desc: 'Full financial support for filing and patenting intellectual property rights.'
    },
    {
      icon: FaPlane,
      title: 'Conference Support',
      desc: 'Financial assistance for presenting research papers in national and international conferences.'
    },
    {
      icon: FaBalanceScale,
      title: 'Research Ethics',
      desc: 'Strict adherence to ethical standards and plagiarism policies in all research activities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Research Policy"
        subtitle="Guidelines and Framework for Research Activities"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'Policy' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Introduction */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Research Promotion Policy</h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  SSGMCE is committed to promoting a vibrant research culture among faculty and students. The Research Promotion Policy provides a comprehensive framework to encourage, facilitate, and reward research activities. It aims to foster an environment where innovation and inquiry can thrive, leading to high-quality publications, patents, and products.
                </p>
              </div>
            </section>

            {/* Highlights Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Policy Highlights
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                        <Icon className="text-xl text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Full Policy Download */}
            <section className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <FaFilePdf className="text-5xl text-red-500" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Download Full Policy</h3>
                    <p className="text-gray-600 text-sm">Comprehensive document detailing all rules and regulations.</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Download PDF <FaArrowRight />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPolicy;
