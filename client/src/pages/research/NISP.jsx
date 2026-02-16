import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaRocket,
  FaFileAlt,
  FaUsers,
  FaBullseye,
  FaLightbulb
} from 'react-icons/fa';

const NISP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'NISP | Research - SSGMCE';
  }, []);

  const nispCommittee = [
    { name: 'Dr. S. B. Somani', role: 'Principal', designation: 'Chairperson' },
    { name: 'Dr. R. M. Kharate', role: 'Dean (R&D)', designation: 'Coordinator' },
    { name: 'Dr. S. B. Patil', role: 'HOD (CSE)', designation: 'Member' },
    { name: 'Mr. A. V. Patil', role: 'Industry Expert', designation: 'External Member' },
    { name: 'Mr. S. K. Singh', role: 'Startup Founder', designation: 'Alumni Member' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="National Innovation and Startup Policy (NISP)"
        subtitle="Nurturing Innovation and Entrepreneurship Ecosystem"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'NISP' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* About NISP */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center rotate-3">
                    <FaRocket className="text-4xl text-orange-500" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About NISP</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The 'National Innovation and Startup Policy 2019 for Students and Faculty of Higher Education Institutions (HEIs)' was launched by the Ministry of Education, Govt. of India. The guiding framework envisions an educational system oriented towards startups and entrepreneurship opportunities for students and faculty.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    SSGMCE has adopted the NISP to actively engage students and faculty in innovation and entrepreneurship related activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Vision & Mission */}
            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaLightbulb className="text-blue-600" /> Vision
                </h3>
                <p className="text-gray-600">
                  "To emerging as a premier institute creating a vibrant ecosystem for innovation and entrepreneurship that nurtures job creators rather than job seekers."
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaBullseye className="text-orange-500" /> Mission
                </h3>
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>To provide a supportive environment for startups.</li>
                  <li>To facilitate technology transfer and commercialization.</li>
                  <li>To define clear pathways for faculty and student entrepreneurship.</li>
                </ul>
              </div>
            </section>

            {/* Committee */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                NISP Implementation Committee
              </h2>
              <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 font-semibold text-gray-600">Name</th>
                      <th className="p-4 font-semibold text-gray-600">Designation</th>
                      <th className="p-4 font-semibold text-gray-600">Role in NISP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {nispCommittee.map((member, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                          <FaUsers className="text-gray-400" /> {member.name}
                        </td>
                        <td className="p-4 text-gray-600">{member.role}</td>
                        <td className="p-4 text-blue-600 font-medium">{member.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Downloads */}
            <section className="flex gap-4">
              <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors flex-1 justify-center">
                <FaFileAlt className="text-xl" />
                <div className="text-left">
                  <div className="font-bold">SSGMCE Innovation Policy</div>
                  <div className="text-xs text-gray-400">Download PDF (2.4 MB)</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white border border-gray-200 text-gray-800 px-6 py-4 rounded-xl hover:bg-gray-50 transition-colors flex-1 justify-center">
                <FaFileAlt className="text-xl text-blue-600" />
                <div className="text-left">
                  <div className="font-bold">MoE NISP Framework</div>
                  <div className="text-xs text-gray-500">External Link</div>
                </div>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NISP;
