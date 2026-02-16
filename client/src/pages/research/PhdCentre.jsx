import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import ResearchSidebar from '../../components/ResearchSidebar';
import {
  FaUserGraduate,
  FaUniversity,
  FaChalkboardTeacher,
  FaCheckCircle,
  FaFileDownload
} from 'react-icons/fa';

const PhdCentre = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Ph.D. Research Centre | Research - SSGMCE';
  }, []);

  const departments = [
    {
      name: 'Electronics & Telecommunication Engineering',
      year: '2012',
      intake: 10,
      supervisors: [
        'Dr. D. D. Nawgaje',
        'Dr. M. N. Tibdewal',
        'Dr. S. A. Patil'
      ]
    },
    {
      name: 'Mechanical Engineering',
      year: '2014',
      intake: 15,
      supervisors: [
        'Dr. S. P. Trikal',
        'Dr. S. B. Somani'
      ]
    },
    {
      name: 'Electrical Engineering',
      year: '2015',
      intake: 10,
      supervisors: [
        'Dr. S. R. Paraskar',
        'Dr. R. S. Pote'
      ]
    },
    {
      name: 'Computer Science & Engineering',
      year: '2018',
      intake: 10,
      supervisors: [
        'Dr. S. B. Patil',
        'Dr. K. B. Manwade'
      ]
    },
    {
      name: 'Business Administration (MBA)',
      year: '2018',
      intake: 20,
      supervisors: [
        'Dr. H. M. Jha (Bidyarthi)',
        'Dr. P. M. Kuchar'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Ph.D. Research Centre"
        subtitle="Recognized Centres for Higher Learning & Research"
        breadcrumbs={[
          { label: 'Research', link: '/research/overview' },
          { label: 'Ph.D. Centre' }
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
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <FaUserGraduate className="text-3xl text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Doctoral Programs (Ph.D.)</h2>
                  <p className="text-gray-700 leading-relaxed">
                    SSGMCE is a recognized "Place for Higher Learning and Research" by Sant Gadge Baba Amravati University, Amravati. We offer Ph.D. programs in various disciplines of Engineering and Management, providing a vibrant research environment for scholars to pursue advanced studies.
                  </p>
                </div>
              </div>
            </section>

            {/* Departments */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Recognized Research Centres
              </h2>

              <div className="space-y-6">
                {departments.map((dept, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <FaUniversity className="text-blue-600" />
                        {dept.name}
                      </h3>
                      <div className="flex gap-4 text-sm">
                        <span className="text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                          Est: <strong>{dept.year}</strong>
                        </span>
                        <span className="text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200">
                          Intake: <strong>{dept.intake}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="flex items-center gap-2 font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                        <FaChalkboardTeacher className="text-orange-500" /> Recognized Supervisors
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {dept.supervisors.map((supervisor, sIdx) => (
                          <span key={sIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                            <FaCheckCircle className="text-blue-400 text-xs" /> {supervisor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Admission Info */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Ph.D. Admission Process</h3>
                <p className="text-blue-100 text-sm max-w-lg">
                  Admissions are governed by the rules and regulations of Sant Gadge Baba Amravati University via the PET (Ph.D. Entrance Test) examination.
                </p>
              </div>
              <a
                href="https://sgbau.ac.in"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-blue-800 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                SGBAU Research Portal <FaFileDownload />
              </a>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdCentre;
