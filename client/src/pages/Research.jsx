import PageHeader from '../components/PageHeader';
import { FaFlask, FaBook, FaAward, FaLightbulb } from 'react-icons/fa';

const Research = () => {
  const researchAreas = [
    { 
      dept: 'Computer Science & IT',
      areas: ['Machine Learning', 'Artificial Intelligence', 'Data Science', 'IoT', 'Cloud Computing', 'Cybersecurity']
    },
    { 
      dept: 'Mechanical Engineering',
      areas: ['Thermal Engineering', 'Manufacturing', 'Robotics', 'CAD/CAM', 'Renewable Energy', 'CFD']
    },
    { 
      dept: 'Civil Engineering',
      areas: ['Structural Engineering', 'Geotechnical', 'Environmental', 'Transportation', 'Construction Management']
    },
    { 
      dept: 'Electrical Engineering',
      areas: ['Power Systems', 'Renewable Energy', 'Control Systems', 'Power Electronics', 'Smart Grid']
    },
    { 
      dept: 'Electronics & Telecommunication',
      areas: ['VLSI', 'Signal Processing', 'Wireless Communication', 'Embedded Systems', '5G Technology']
    },
  ];

  const publications = [
    { year: '2023-24', journals: '45', conferences: '62', patents: '8' },
    { year: '2022-23', journals: '38', conferences: '55', patents: '6' },
    { year: '2021-22', journals: '32', conferences: '48', patents: '5' },
  ];

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Research & Development" 
        subtitle="Innovation and Excellence in Research" 
      />

      {/* Introduction */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
            <p className="text-[clamp(0.95rem,1.9vw,1.125rem)] leading-relaxed text-gray-700">
              SSGMCE is committed to promoting research and innovation among faculty and students. 
              Our research activities span various domains of engineering and technology, contributing 
              to academic knowledge and practical solutions for industry and society.
            </p>
          </div>

          {/* Research Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {[
              { icon: FaBook, number: '500+', label: 'Publications', color: 'bg-ssgmce-blue' },
              { icon: FaAward, number: '25+', label: 'Patents Filed', color: 'bg-ssgmce-orange' },
              { icon: FaFlask, number: '15+', label: 'Research Projects', color: 'bg-green-600' },
              { icon: FaLightbulb, number: '10+', label: 'Collaborations', color: 'bg-purple-600' },
            ].map((stat, index) => (
              <div key={index} className={`${stat.color} rounded-lg p-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:p-5 md:p-6`}>
                <stat.icon className="mx-auto mb-3 block text-2xl sm:text-3xl md:text-4xl" />
                <div className="mb-1 text-[clamp(1.4rem,3vw,1.875rem)] font-bold">{stat.number}</div>
                <div className="text-[0.78rem] opacity-90 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Research Focus Areas</h2>
          <div className="space-y-6">
            {researchAreas.map((item, index) => (
              <div key={index} className="rounded-lg border-l-4 border-ssgmce-orange bg-white p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6">
                <h3 className="mb-4 text-[clamp(1.15rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">{item.dept}</h3>
                <div className="flex flex-wrap gap-3">
                  {item.areas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="rounded-full bg-ssgmce-light-blue/20 px-3 py-1.5 text-xs font-semibold text-ssgmce-dark-blue transition-colors duration-200 hover:bg-ssgmce-light-blue hover:text-white sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Research Publications</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white">
                <tr>
                  <th className="px-3 py-3 text-left text-xs sm:px-6 sm:py-4 sm:text-base">Academic Year</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Journal Papers</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Conference Papers</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Patents Filed</th>
                </tr>
              </thead>
              <tbody>
                {publications.map((pub, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-3 py-3 text-sm font-semibold text-ssgmce-blue sm:px-6 sm:py-4">{pub.year}</td>
                    <td className="px-3 py-3 text-center text-sm font-bold text-green-600 sm:px-6 sm:py-4">{pub.journals}</td>
                    <td className="px-3 py-3 text-center text-sm font-bold text-blue-600 sm:px-6 sm:py-4">{pub.conferences}</td>
                    <td className="px-3 py-3 text-center text-sm font-bold text-ssgmce-orange sm:px-6 sm:py-4">{pub.patents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Research Facilities</h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: 'Central Library',
                desc: 'Extensive collection of books, journals, and e-resources for research',
                icon: '📚'
              },
              { 
                title: 'Advanced Labs',
                desc: 'State-of-the-art laboratories with modern equipment and software',
                icon: '🔬'
              },
              { 
                title: 'Computing Resources',
                desc: 'High-performance computing facilities for computational research',
                icon: '💻'
              },
              { 
                title: 'Digital Resources',
                desc: 'Access to IEEE, Springer, Elsevier, and other research databases',
                icon: '🌐'
              },
              { 
                title: 'Research Center',
                desc: 'Dedicated research center for collaborative and interdisciplinary projects',
                icon: '🏢'
              },
              { 
                title: 'Innovation Lab',
                desc: 'Maker space for prototyping and product development',
                icon: '⚙️'
              },
            ].map((facility, index) => (
              <div key={index} className="rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 sm:p-6">
                <div className="mb-4 text-3xl sm:text-4xl md:text-5xl">{facility.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-ssgmce-blue sm:text-xl">{facility.title}</h3>
                <p className="text-sm text-gray-600 sm:text-base">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding & Grants */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Funding & Collaborations</h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-lg border-t-4 border-ssgmce-blue bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-4 text-[clamp(1.15rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">Funding Agencies</h3>
              <ul className="space-y-3">
                {[
                  'AICTE - Research Promotion Scheme',
                  'UGC - Major & Minor Projects',
                  'DST - Science & Engineering Research Board',
                  'MHRD - Technical Education Quality Improvement',
                ].map((agency, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 text-ssgmce-orange">✓</span>
                    <span className="text-sm text-gray-700 sm:text-base">{agency}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-ssgmce-orange bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-4 text-[clamp(1.15rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">Industry Partners</h3>
              <ul className="space-y-3">
                {[
                  'TCS - Technology Research',
                  'Infosys - Innovation Labs',
                  'L&T - Engineering Solutions',
                  'BHEL - Industrial Projects',
                ].map((partner, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-3 text-ssgmce-orange">✓</span>
                    <span className="text-sm text-gray-700 sm:text-base">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Research */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-8 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue">Student Research Opportunities</h2>
          <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
            <p className="text-[clamp(0.95rem,1.9vw,1.125rem)] leading-relaxed text-gray-700">
              We encourage students to actively participate in research through various programs and initiatives.
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {[
              { title: 'Final Year Projects', desc: 'Industry-relevant and research-oriented projects under faculty guidance' },
              { title: 'Research Internships', desc: 'Summer internships in research labs and industry R&D centers' },
              { title: 'Paper Publications', desc: 'Support for publishing research papers in conferences and journals' },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border-t-4 border-ssgmce-orange bg-white p-4 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 sm:p-6">
                <h4 className="mb-3 text-lg font-bold text-ssgmce-blue sm:text-xl">{item.title}</h4>
                <p className="text-sm text-gray-600 sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue py-12 text-white sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 text-center sm:px-5 lg:px-6">
          <h2 className="mb-6 text-[clamp(1.6rem,4vw,2.25rem)] font-bold">Research & Development Cell</h2>
          <p className="mb-8 text-[clamp(1rem,2.1vw,1.25rem)] text-ssgmce-light-blue">
            For research collaborations and project proposals, contact our R&D Cell
          </p>
          <div className="inline-block rounded-lg bg-white/10 px-5 py-3 backdrop-blur-sm sm:px-8 sm:py-4">
            <p className="mb-1 text-base font-bold sm:text-lg">Email</p>
            <p className="text-sm text-ssgmce-light-blue sm:text-base">research@ssgmce.ac.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
