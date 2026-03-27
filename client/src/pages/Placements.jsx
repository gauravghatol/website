import { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import { FaTrophy, FaBriefcase, FaChartLine, FaHandshake, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';

const Placements = () => {
  const [liveStats, setLiveStats] = useState([]);
  const [liveRecruiters, setLiveRecruiters] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  // Hardcoded fallbacks (shown when DB is empty)
  const fallbackStats = [
    { year: '2023-24', placed: '215', companies: '45', highest: '12.5 LPA', average: '4.2 LPA' },
    { year: '2022-23', placed: '198', companies: '42', highest: '11.0 LPA', average: '4.0 LPA' },
    { year: '2021-22', placed: '185', companies: '38', highest: '10.5 LPA', average: '3.8 LPA' },
  ];
  const fallbackRecruiters = [
    'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Tech Mahindra',
    'Capgemini', 'L&T', 'Persistent Systems', 'Hexaware',
    'Accenture', 'IBM', 'Oracle', 'Microsoft', 'Amazon',
  ];

  useEffect(() => {
    axios.get('/api/placements/stats').then((r) => {
      const data = Array.isArray(r.data) ? r.data : r.data.data || [];
      setLiveStats(data.sort((a, b) => b.academicYear.localeCompare(a.academicYear)));
    }).catch(() => {});

    axios.get('/api/placements/recruiters').then((r) => {
      const data = Array.isArray(r.data) ? r.data : r.data.data || [];
      setLiveRecruiters(data.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name)));
    }).catch(() => {});

    axios.get('/api/placements/testimonials').then((r) => {
      setTestimonials(Array.isArray(r.data) ? r.data : r.data.data || []);
    }).catch(() => {});
  }, []);

  const stats = liveStats.length > 0 ? liveStats : null;
  const latest = stats?.[0];

  return (
    <div className="animation-fade-in">
      <PageHeader
        title="Placements & Training"
        subtitle="Building Careers, Shaping Futures"
      />

      {/* Placement Stats */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Placement Statistics</h2>

          {/* Current Year Highlights */}
          <div className="mb-10 grid grid-cols-2 gap-4 sm:gap-6 md:mb-12 md:grid-cols-4">
            {[
              { icon: FaBriefcase, number: latest ? `${latest.totalOffers}+` : '215+', label: 'Students Placed', color: 'bg-ssgmce-blue' },
              { icon: FaTrophy, number: latest ? `${latest.placementPercentage}%` : '85%', label: 'Placement Rate', color: 'bg-ssgmce-orange' },
              { icon: FaChartLine, number: latest ? `${latest.highestPackage} LPA` : '12.5 LPA', label: 'Highest Package', color: 'bg-ssgmce-dark-blue' },
              { icon: FaHandshake, number: latest ? `${latest.companiesVisited}+` : '45+', label: 'Companies Visited', color: 'bg-green-600' },
            ].map((stat, index) => (
              <div key={index} className={`${stat.color} rounded-lg p-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:p-5 md:p-6`}>
                <stat.icon className="mx-auto mb-3 block text-2xl sm:text-3xl md:text-4xl" />
                <div className="mb-1 text-[clamp(1.35rem,3vw,1.875rem)] font-bold">{stat.number}</div>
                <div className="text-[0.78rem] opacity-90 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Year-wise Stats */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white">
                <tr>
                  <th className="px-3 py-3 text-left text-xs sm:px-6 sm:py-4 sm:text-base">Academic Year</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Students Placed</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Companies Visited</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Highest Package</th>
                  <th className="px-3 py-3 text-center text-xs sm:px-6 sm:py-4 sm:text-base">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {(stats ?? fallbackStats).map((s, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-3 py-3 text-sm font-semibold text-ssgmce-blue sm:px-6 sm:py-4">{s.academicYear || s.year}</td>
                    <td className="px-3 py-3 text-center text-sm sm:px-6 sm:py-4">{s.totalOffers || s.placed}</td>
                    <td className="px-3 py-3 text-center text-sm sm:px-6 sm:py-4">{s.companiesVisited || s.companies}</td>
                    <td className="px-3 py-3 text-center text-sm font-bold text-green-600 sm:px-6 sm:py-4">{s.highestPackage ? `${s.highestPackage} LPA` : s.highest}</td>
                    <td className="px-3 py-3 text-center text-sm font-semibold sm:px-6 sm:py-4">{s.averagePackage ? `${s.averagePackage} LPA` : s.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Our Top Recruiters</h2>
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
            {liveRecruiters.length > 0
              ? liveRecruiters.slice(0, 14).map((r) => (
                  <div key={r._id} className="flex flex-col items-center gap-2 rounded-lg bg-white p-3.5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-4">
                    {r.logoUrl ? (
                      <img src={r.logoUrl} alt={r.name} className="w-12 h-12 object-contain" onError={(e) => { e.target.style.display='none'; }} />
                    ) : null}
                    <span className="text-center text-xs font-bold text-ssgmce-blue sm:text-sm">{r.name}</span>
                  </div>
                ))
              : fallbackRecruiters.map((company, index) => (
                  <div key={index} className="flex items-center justify-center rounded-lg bg-white p-4 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
                    <span className="text-sm font-bold text-ssgmce-blue">{company}</span>
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-12 sm:py-14 md:py-16">
          <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
            <h2 className="mb-4 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue">Student Success Stories</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-500 sm:mb-12 sm:text-base">
              Hear from our alumni about their placement experiences and the role SSGMCE played in shaping their careers.
            </p>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t._id} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-ssgmce-orange flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300">
                  <FaQuoteLeft className="text-ssgmce-orange text-2xl opacity-60" />
                  <p className="text-gray-600 italic text-sm leading-relaxed flex-1">
                    {t.message}
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200">
                      {t.photoUrl ? (
                        <img src={t.photoUrl} alt={t.studentName} className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; }} />
                      ) : (
                        <FaUserCircle className="text-2xl text-gray-300" />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{t.studentName}</p>
                      <p className="text-xs text-gray-500">
                        {t.department} · Batch {t.batch}
                      </p>
                      <p className="text-xs text-ssgmce-orange font-medium">
                        {t.designation ? `${t.designation} @ ${t.company}` : t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Training & Development */}
      <section className={`py-12 sm:py-14 md:py-16 ${testimonials.length > 0 ? 'bg-gray-50' : ''}`}>
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Training & Development</h2>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Aptitude Training', desc: 'Regular aptitude and reasoning training sessions to prepare students for campus interviews', icon: '📊' },
              { title: 'Technical Skills', desc: 'Workshops on latest technologies and programming languages to enhance technical skills', icon: '💻' },
              { title: 'Communication Skills', desc: 'Soft skills and communication training to improve personality and confidence', icon: '🗣️' },
              { title: 'Mock Interviews', desc: 'Regular mock interview sessions conducted by industry experts and alumni', icon: '🎤' },
              { title: 'Industry Visits', desc: 'Organized industrial visits to give practical exposure to students', icon: '🏭' },
              { title: 'Internships', desc: 'Assistance in securing internships in reputed companies for hands-on experience', icon: '💼' },
            ].map((item, index) => (
              <div key={index} className="rounded-lg border-t-4 border-ssgmce-orange bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 sm:p-6">
                <div className="mb-4 text-3xl sm:text-4xl md:text-5xl">{item.icon}</div>
                <h3 className="mb-3 text-lg font-bold text-ssgmce-blue sm:text-xl">{item.title}</h3>
                <p className="text-sm text-gray-600 sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Placement Process</h2>
          <div className="mx-auto max-w-4xl">
            {[
              { step: '1', title: 'Pre-Placement Training', desc: 'Students undergo comprehensive training in aptitude, technical, and soft skills' },
              { step: '2', title: 'Resume Building', desc: 'Guidance for creating professional resumes highlighting skills and achievements' },
              { step: '3', title: 'Company Registration', desc: 'Companies register through our placement portal and schedule campus drives' },
              { step: '4', title: 'Pre-Placement Talks', desc: 'Companies conduct presentations about their organization and job profiles' },
              { step: '5', title: 'Written Test & GD', desc: 'Eligible students appear for written tests and group discussions' },
              { step: '6', title: 'Personal Interview', desc: 'Final round of technical and HR interviews conducted by company representatives' },
            ].map((item, index) => (
              <div key={index} className="mb-6 flex gap-4 last:mb-0 sm:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ssgmce-orange to-red-600 text-lg font-bold text-white shadow-lg sm:h-14 sm:w-14 sm:text-xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 rounded-lg border-l-4 border-ssgmce-blue bg-white p-4 shadow-md sm:p-5">
                  <h4 className="mb-2 text-base font-bold text-ssgmce-blue sm:text-lg">{item.title}</h4>
                  <p className="text-xs text-gray-600 sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Placement Cell */}
      <section className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue py-12 text-white sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 text-center sm:px-5 lg:px-6">
          <h2 className="mb-6 text-[clamp(1.6rem,4vw,2.25rem)] font-bold">Placement Cell</h2>
          <p className="mx-auto mb-8 max-w-3xl text-[clamp(1rem,2.1vw,1.25rem)] text-ssgmce-light-blue">
            For campus recruitment opportunities and placement related queries,
            please contact our Training & Placement Office
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="rounded-lg bg-white/10 px-5 py-3 backdrop-blur-sm sm:px-8 sm:py-4">
              <p className="mb-1 text-base font-bold sm:text-lg">Email</p>
              <p className="text-sm text-ssgmce-light-blue sm:text-base">placement@ssgmce.ac.in</p>
            </div>
            <div className="rounded-lg bg-white/10 px-5 py-3 backdrop-blur-sm sm:px-8 sm:py-4">
              <p className="mb-1 text-base font-bold sm:text-lg">Phone</p>
              <p className="text-sm text-ssgmce-light-blue sm:text-base">+91-7265-252278</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
