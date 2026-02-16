import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaCopyright,
  FaLightbulb,
  FaShieldAlt,
  FaSearch,
  FaFileSignature
} from 'react-icons/fa';

const IPR = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'IPR Cell | Research - SSGMCE';
  }, []);

  const services = [
    {
      icon: FaSearch,
      title: 'Prior Art Search',
      desc: 'Assistance in searching existing patents to ensure novelty of the invention.'
    },
    {
      icon: FaFileSignature,
      title: 'Drafting & Filing',
      desc: 'Support in drafting patent specifications and filing applications with the Patent Office.'
    },
    {
      icon: FaShieldAlt,
      title: 'Legal Support',
      desc: 'Guidance on legal aspects of intellectual property protection and infringement.'
    },
    {
      icon: FaLightbulb,
      title: 'Commercialization',
      desc: 'Facilitating technology transfer and commercialization of patented technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Intellectual Property Rights Cell"
        subtitle="Protecting Creativity and Innovation"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'IPR Cell' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* About */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCopyright className="text-2xl text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">IPR Cell Overview</h2>
                  <p className="text-gray-500">Intellectual Property Rights Management</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                The Intellectual Property Rights (IPR) Cell at SSGMCE is dedicated to creating awareness about IPR among faculty and students. It provides a platform for protecting their intellectual creations through patents, copyrights, designs, and trademarks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The cell facilitates the patent filing process by providing technical, legal, and financial support. It aims to transform the innovative work of students and faculty into valuable intellectual property assets.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Services Offered
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                          <Icon className="text-xl text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Stats strip - Reuse style from research overview */}
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl flex flex-wrap justify-around items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-500 mb-1">50+</p>
                <p className="text-sm text-gray-300 uppercase tracking-widest">Patents Filed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500 mb-1">15+</p>
                <p className="text-sm text-gray-300 uppercase tracking-widest">Copyrights</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-500 mb-1">10+</p>
                <p className="text-sm text-gray-300 uppercase tracking-widest">Granted</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPR;
