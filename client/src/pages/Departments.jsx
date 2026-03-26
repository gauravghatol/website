import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import DepartmentCard from '../components/DepartmentCard';
import useFetch from '../hooks/useFetch';

const Departments = () => {
  const { data: departmentsData, loading } = useFetch('/api/departments');
  const [selectedDept, setSelectedDept] = useState(null);

  const departments = departmentsData || [
    {
      _id: '1',
      name: 'Computer Science & Engineering',
      code: 'CSE',
      description: 'The department focuses on software development, algorithms, data structures, and emerging technologies.',
      programs: ['B.E. Computer Science & Engineering', 'M.E. Computer Science & Engineering'],
    },
    {
      _id: '2',
      name: 'Mechanical Engineering',
      code: 'MECH',
      description: 'Deals with design, manufacturing, and maintenance of mechanical systems.',
      programs: ['B.E. Mechanical Engineering', 'M.E. Heat Power Engineering'],
    },
    {
      _id: '3',
      name: 'Civil Engineering',
      code: 'CIVIL',
      description: 'Focuses on infrastructure development, construction, and structural engineering.',
      programs: ['B.E. Civil Engineering', 'M.E. Structural Engineering'],
    },
    {
      _id: '4',
      name: 'Electrical Engineering',
      code: 'EE',
      description: 'Studies electrical systems, power generation, and distribution.',
      programs: ['B.E. Electrical Engineering'],
    },
    {
      _id: '5',
      name: 'Electronics & Telecommunication',
      code: 'ENTC',
      description: 'Covers electronic devices, communication systems, and signal processing.',
      programs: ['B.E. Electronics & Telecommunication'],
    },
    {
      _id: '6',
      name: 'Information Technology',
      code: 'IT',
      description: 'Specializes in information systems, networking, and web technologies.',
      programs: ['B.E. Information Technology'],
    },
  ];

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Academic Departments" 
        subtitle="Explore Our Engineering Programs" 
      />

      {/* Introduction */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
            <p className="text-[clamp(0.95rem,1.9vw,1.125rem)] leading-relaxed text-gray-700">
              SSGMCE offers various undergraduate and postgraduate programs in engineering disciplines. 
              All our programs are affiliated to Sant Gadge Baba Amravati University and approved by AICTE. 
              Our departments are equipped with state-of-the-art laboratories and experienced faculty members.
            </p>
          </div>

          {/* Department Cards */}
          {loading ? (
            <div className="py-10 text-center sm:py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ssgmce-blue"></div>
              <p className="mt-4 text-sm text-gray-600 sm:text-base">Loading departments...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <DepartmentCard 
                  key={dept._id}
                  name={dept.name}
                  code={dept.code}
                  description={dept.description}
                  programs={dept.programs}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Department Facilities */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Department Facilities</h2>
          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🔬', title: 'Modern Laboratories', desc: 'Well-equipped labs with latest equipment' },
              { icon: '👨‍🏫', title: 'Qualified Faculty', desc: 'Experienced and dedicated teaching staff' },
              { icon: '📚', title: 'Digital Library', desc: 'Access to online journals and resources' },
              { icon: '💼', title: 'Industry Connect', desc: 'Internships and placement opportunities' },
            ].map((facility, index) => (
              <div key={index} className="rounded-lg bg-white p-4 text-center shadow-lg transition-transform duration-300 hover:scale-105 sm:p-6">
                <div className="mb-3 text-3xl sm:text-4xl md:text-5xl">{facility.icon}</div>
                <h3 className="mb-2 text-base font-bold text-ssgmce-blue sm:text-lg">{facility.title}</h3>
                <p className="text-xs text-gray-600 sm:text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Info */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="rounded-lg bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue p-6 text-white shadow-2xl sm:p-8 md:p-10">
            <h2 className="mb-6 text-center text-[clamp(1.5rem,3.6vw,1.9rem)] font-bold">Accreditation & Affiliation</h2>
            <div className="grid gap-5 text-center sm:gap-6 md:grid-cols-3">
              <div>
                <div className="mb-3 text-3xl sm:text-4xl md:text-5xl">✅</div>
                <h4 className="mb-2 text-[clamp(1rem,2.2vw,1.25rem)] font-bold">AICTE Approved</h4>
                <p className="text-sm text-ssgmce-light-blue">All India Council for Technical Education</p>
              </div>
              <div>
                <div className="mb-3 text-3xl sm:text-4xl md:text-5xl">🎓</div>
                <h4 className="mb-2 text-[clamp(1rem,2.2vw,1.25rem)] font-bold">University Affiliated</h4>
                <p className="text-sm text-ssgmce-light-blue">Sant Gadge Baba Amravati University</p>
              </div>
              <div>
                <div className="mb-3 text-3xl sm:text-4xl md:text-5xl">🏆</div>
                <h4 className="mb-2 text-[clamp(1rem,2.2vw,1.25rem)] font-bold">NAAC Accredited</h4>
                <p className="text-sm text-ssgmce-light-blue">National Assessment and Accreditation Council</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
