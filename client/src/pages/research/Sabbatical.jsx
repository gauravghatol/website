import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaExchangeAlt,
  FaIndustry,
  FaCheck
} from 'react-icons/fa';

const Sabbatical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Sabbatical Training | Research - SSGMCE';
  }, []);

  const beneficiaries = [
    { faculty: 'Prof. A. B. C', dept: 'CSE', company: 'TCS, Pune', duration: '2 Months' },
    { faculty: 'Dr. X. Y. Z', dept: 'Electrical', company: 'Siemens, Mumbai', duration: '1 Month' },
    { faculty: 'Prof. P. Q. R', dept: 'Mechanical', company: 'Tata Motors, Pune', duration: '45 Days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Faculty Sabbatical Training"
        subtitle="Bridging the Industry-Academia Gap"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'Sabbatical' }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Overview */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Sabbatical Training?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To keep pace with rapidly changing technologies, SSGMCE encourages faculty members to undergo Sabbatical Training in relevant industries. This initiative helps faculty gain hands-on experience, understand current industry practices, and incorporate them into the teaching-learning process.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-gray-700">
                      <FaCheck className="text-green-500" /> Exposure to industrial environment
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <FaCheck className="text-green-500" /> Problem-solving on real-world projects
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <FaCheck className="text-green-500" /> Curriculum enhancement
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <FaIndustry className="text-9xl text-blue-100" />
                </div>
              </div>
            </section>

            {/* Process Steps */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Process Workflow
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="mt-4 font-bold text-lg mb-2">Identification</h3>
                  <p className="text-sm text-gray-600">Faculty identifies relevant industry and training area.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="mt-4 font-bold text-lg mb-2">Approval</h3>
                  <p className="text-sm text-gray-600">Institute grants paid leave and sponsorship for the training period.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="mt-4 font-bold text-lg mb-2">Implementation</h3>
                  <p className="text-sm text-gray-600">Knowledge transfer to students through revised curriculum and workshops.</p>
                </div>
              </div>
            </section>

            {/* Recent Beneficiaries */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Recent Training Details
              </h2>
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="p-4 font-semibold text-gray-600">Faculty Name</th>
                      <th className="p-4 font-semibold text-gray-600">Department</th>
                      <th className="p-4 font-semibold text-gray-600">Industry / Company</th>
                      <th className="p-4 font-semibold text-gray-600">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {beneficiaries.map((b, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="p-4 font-medium text-gray-800 flex items-center gap-2">
                          <FaChalkboardTeacher className="text-gray-400" /> {b.faculty}
                        </td>
                        <td className="p-4 text-gray-600">{b.dept}</td>
                        <td className="p-4 font-medium text-blue-600">{b.company}</td>
                        <td className="p-4 text-gray-600 text-sm bg-gray-50">{b.duration}</td>
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

export default Sabbatical;
