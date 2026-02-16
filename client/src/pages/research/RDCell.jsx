import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaUserTie,
  FaBullseye,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaUniversity
} from 'react-icons/fa';

const RDCell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'R&D Cell | Research - SSGMCE';
  }, []);

  const objectives = [
    {
      icon: FaLightbulb,
      title: 'Promote Innovation',
      desc: 'To inculcate the spirit and culture of innovation and research among faculty and students.'
    },
    {
      icon: FaHandshake,
      title: 'Industry Interaction',
      desc: 'To enhance interaction and collaboration with industry and research organizations.'
    },
    {
      icon: FaChartLine,
      title: 'Research Quality',
      desc: 'To improve the quality of research publications and encourage filing of patents.'
    },
    {
      icon: FaUniversity,
      title: 'Sponsored Projects',
      desc: 'To facilitate and encourage faculty to obtain research grants from government and non-government agencies.'
    }
  ];

  const committee = [
    { name: 'Dr. S. B. Somani', role: 'Principal', designation: 'Chairman' },
    { name: 'Dr. R. M. Kharate', role: 'Dean (R&D)', designation: 'Member Secretary' },
    { name: 'Dr. S. R. Paraskar', role: 'HOD (Electrical)', designation: 'Member' },
    { name: 'Dr. D. D. Nawgaje', role: 'HOD (EnTC)', designation: 'Member' },
    { name: 'Dr. S. P. Trikal', role: 'HOD (Mechanical)', designation: 'Member' },
    { name: 'Dr. S. B. Patil', role: 'HOD (CSE)', designation: 'Member' },
    { name: 'Dr. S. L. Satarkar', role: 'HOD (IT)', designation: 'Member' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Research & Development Cell"
        subtitle="Fostering a Culture of Research and Innovation"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'R&D Cell' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* About Section */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                About R&D Cell
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p className="mb-4">
                  The Research and Development (R&D) Cell at SSGMCE aims to nurture research culture in the institute by promoting research activities on emerging trends, keeping in view a multidisciplinary aspect. The R&D Cell provides a platform for faculty and students to share their research work and innovative ideas.
                </p>
                <p>
                  The cell plays a pivotal role in creating an ecosystem for research, innovation, and entrepreneurship. It encourages faculty and students to undertake research projects, publish papers in reputed journals, and file patents. The cell also facilitates collaboration with industries and research organizations to enhance the quality of research and make it socially relevant.
                </p>
              </div>
            </section>

            {/* Objectives Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {objectives.map((obj, index) => {
                  const Icon = obj.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow group">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                        <Icon className="text-2xl text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{obj.title}</h3>
                      <p className="text-gray-600 text-sm">{obj.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Committee */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                R&D Committee
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-semibold text-gray-600">Name</th>
                      <th className="p-4 font-semibold text-gray-600">Role</th>
                      <th className="p-4 font-semibold text-gray-600">Designation in Committee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {committee.map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                            {member.name.charAt(4)}
                          </div>
                          <span className="font-medium text-gray-800">{member.name}</span>
                        </td>
                        <td className="p-4 text-gray-600">{member.role}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${member.designation === 'Chairman' ? 'bg-orange-100 text-orange-700' :
                              member.designation === 'Member Secretary' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                            }`}>
                            {member.designation}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RDCell;
