import PageHeader from '../components/PageHeader';
import { FaTrophy, FaBriefcase, FaChartLine, FaHandshake } from 'react-icons/fa';

const Placements = () => {
  const topRecruiters = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Tech Mahindra',
    'Capgemini', 'L&T', 'Persistent Systems', 'Hexaware',
    'Accenture', 'IBM', 'Oracle', 'Microsoft', 'Amazon',
  ];

  const placementStats = [
    { year: '2023-24', placed: '215', companies: '45', highest: '12.5 LPA', average: '4.2 LPA' },
    { year: '2022-23', placed: '198', companies: '42', highest: '11.0 LPA', average: '4.0 LPA' },
    { year: '2021-22', placed: '185', companies: '38', highest: '10.5 LPA', average: '3.8 LPA' },
  ];

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Placements & Training" 
        subtitle="Building Careers, Shaping Futures" 
      />

      {/* Placement Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Placement Statistics</h2>
          
          {/* Current Year Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FaBriefcase, number: '215+', label: 'Students Placed', color: 'bg-ssgmce-blue' },
              { icon: FaTrophy, number: '85%', label: 'Placement Rate', color: 'bg-ssgmce-orange' },
              { icon: FaChartLine, number: '12.5 LPA', label: 'Highest Package', color: 'bg-ssgmce-dark-blue' },
              { icon: FaHandshake, number: '45+', label: 'Companies Visited', color: 'bg-green-600' },
            ].map((stat, index) => (
              <div key={index} className={`${stat.color} text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}>
                <stat.icon className="text-4xl mb-3 mx-auto block" />
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Year-wise Stats */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Academic Year</th>
                  <th className="px-6 py-4 text-center">Students Placed</th>
                  <th className="px-6 py-4 text-center">Companies Visited</th>
                  <th className="px-6 py-4 text-center">Highest Package</th>
                  <th className="px-6 py-4 text-center">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {placementStats.map((stat, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold text-ssgmce-blue">{stat.year}</td>
                    <td className="px-6 py-4 text-center">{stat.placed}</td>
                    <td className="px-6 py-4 text-center">{stat.companies}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">{stat.highest}</td>
                    <td className="px-6 py-4 text-center font-semibold">{stat.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Our Top Recruiters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {topRecruiters.map((company, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-center"
              >
                <span className="font-bold text-ssgmce-blue">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Training & Development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Aptitude Training', 
                desc: 'Regular aptitude and reasoning training sessions to prepare students for campus interviews',
                icon: '📊'
              },
              { 
                title: 'Technical Skills', 
                desc: 'Workshops on latest technologies and programming languages to enhance technical skills',
                icon: '💻'
              },
              { 
                title: 'Communication Skills', 
                desc: 'Soft skills and communication training to improve personality and confidence',
                icon: '🗣️'
              },
              { 
                title: 'Mock Interviews', 
                desc: 'Regular mock interview sessions conducted by industry experts and alumni',
                icon: '🎤'
              },
              { 
                title: 'Industry Visits', 
                desc: 'Organized industrial visits to give practical exposure to students',
                icon: '🏭'
              },
              { 
                title: 'Internships', 
                desc: 'Assistance in securing internships in reputed companies for hands-on experience',
                icon: '💼'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-ssgmce-orange hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Placement Process</h2>
          <div className="max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Pre-Placement Training', desc: 'Students undergo comprehensive training in aptitude, technical, and soft skills' },
              { step: '2', title: 'Resume Building', desc: 'Guidance for creating professional resumes highlighting skills and achievements' },
              { step: '3', title: 'Company Registration', desc: 'Companies register through our placement portal and schedule campus drives' },
              { step: '4', title: 'Pre-Placement Talks', desc: 'Companies conduct presentations about their organization and job profiles' },
              { step: '5', title: 'Written Test & GD', desc: 'Eligible students appear for written tests and group discussions' },
              { step: '6', title: 'Personal Interview', desc: 'Final round of technical and HR interviews conducted by company representatives' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-ssgmce-orange to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 bg-white p-5 rounded-lg shadow-md border-l-4 border-ssgmce-blue">
                  <h4 className="text-lg font-bold text-ssgmce-blue mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="py-16 bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Placement Cell</h2>
          <p className="text-xl mb-8 text-ssgmce-light-blue max-w-3xl mx-auto">
            For campus recruitment opportunities and placement related queries, 
            please contact our Training & Placement Office
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg">
              <p className="font-bold text-lg mb-1">Email</p>
              <p className="text-ssgmce-light-blue">placement@ssgmce.ac.in</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg">
              <p className="font-bold text-lg mb-1">Phone</p>
              <p className="text-ssgmce-light-blue">+91-7265-252278</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
