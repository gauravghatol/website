import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaTrophy, FaBuilding, FaArrowRight, FaClock, FaMapMarkerAlt, FaMicroscope, FaHandshake, FaCheckCircle, FaPlus, FaMinus, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import NewsCard from '../components/NewsCard';
import NewsTicker from '../components/NewsTicker';
import useFetch from '../hooks/useFetch';
import { HOME_LEADERSHIP } from '../data/homeLeadership';
import droneVideo from '../assets/images/home/drone shot.mp4';
import mainGateImg from '../assets/images/home/Main-Gate.avif';
import coCurricularImg from '../assets/images/about/vidyavibhag.jpeg';
import extraCurricularImg from '../assets/images/about/Library.jpeg';
import volunteerImg from '../assets/images/departments/it/industrial-visits/valuemomentum_pune_2025.png';
import sportsImg from '../assets/images/departments/electrical/industrial-visits/tata_power_shahad_2024.png';
import alumniWaghImg from '../assets/images/home/Alumni/Abhay_Wagh.jpg';
import alumniKaulImg from '../assets/images/home/Alumni/Umesh_Kaul.jpg';
import alumniWankhedeImg from '../assets/images/home/Alumni/Nitin-Wankhede.png';
import alumniDeuskarImg from '../assets/images/home/Alumni/Ashutosh_Deuskar.jpg';

const Home = () => {
  const { data: newsData } = useFetch('/api/news');
  const [activeCorner, setActiveCorner] = useState('co-curricular');
  const [alumniIndex, setAlumniIndex] = useState(0);

  // Fallback data from official SSGMCE website
  const staticNews = [
    { _id: '1', title: 'SWAYAM/NPTEL Registration Open for Quantum Computing Courses', date: '2026-01-24', description: 'Registration open for courses on Quantum Computing and Quantum Technology via SWAYAM/NPTEL portal.', category: 'Academic' },
    { _id: '2', title: 'International Conference ICICGR 2026 by E&TC Dept', date: '2025-11-13', description: 'International Conference on Innovations in Communication, Geoscience and Robotics scheduled for 24-25 April 2026.', category: 'Events' },
    { _id: '3', title: 'TCS Accredits SSGMCE as Top Priority College', date: '2025-07-09', description: 'Tata Consultancy Services officially accredited SSGMCE as a Top Priority College for campus placements.', category: 'Placements' },
    { _id: '4', title: 'Gold Medal at Khelo India Games', date: '2025-07-03', description: 'Jayashri Shetye (Electrical Engg) won gold at Khelo India Games held at Diu & Daman.', category: 'Achievement' },
    { _id: '5', title: 'Drone Club Wins First Prize at SPARK 2025', date: '2025-04-17', description: 'Students secured First Prize at National Level SPARK 2025 competition in drone technology.', category: 'Achievement' },
    { _id: '6', title: 'NAAC Accreditation Received', date: '2024-12-21', description: 'SSGMCE successfully receives NAAC accreditation in the 3rd cycle. Congratulations to all stakeholders.', category: 'Accreditation' },
  ];

  const newsItems = (newsData && newsData.length > 0) ? newsData : staticNews;

  const accreditations = [
    { label: 'AICTE', desc: 'Approved' },
    { label: 'NAAC', desc: 'Accredited' },
    { label: 'NBA', desc: 'Accredited' },
    { label: 'ISO 9001:2015', desc: 'Certified' },
    { label: 'NIRF', desc: 'Ranked' },
    { label: 'AAA', desc: 'Careers360' },
  ];

  const studentCornerItems = [
    {
      id: 'co-curricular',
      title: 'Co-Curricular Activities',
      image: coCurricularImg,
      text: 'Co-curricular activities are designed to improve social skills, intellectual growth, moral values, and personality development among students.',
    },
    {
      id: 'extra-curricular',
      title: 'Extra-Curricular Activities',
      image: extraCurricularImg,
      text: 'Students actively participate in seminars, internships, industrial visits, student publications, and technical projects outside regular classroom sessions.',
    },
    {
      id: 'volunteer',
      title: 'Volunteer Work',
      image: volunteerImg,
      text: 'NSS and outreach activities encourage students to contribute to society through community work, awareness drives, and social responsibility initiatives.',
    },
    {
      id: 'sports',
      title: 'Sports Club',
      image: sportsImg,
      text: 'SSGMCE offers indoor and outdoor sports facilities that help students build discipline, fitness, leadership qualities, and team spirit.',
    },
  ];

  const alumniHighlights = [
    {
      id: 'wagh',
      org: 'DTE, Mumbai',
      name: 'Mr. Abhay Wagh',
      role: 'Director',
      image: alumniWaghImg,
    },
    {
      id: 'kaul',
      org: 'IBM',
      name: 'Mr. Umesh Kaul',
      role: 'Executive Architect / Consultant',
      image: alumniKaulImg,
    },
    {
      id: 'wankhede',
      org: 'Value Momentum, Hyderabad',
      name: 'Mr. Nitin Wankhede',
      role: 'Vice President - Client Services',
      image: alumniWankhedeImg,
    },
    {
      id: 'deuskar',
      org: 'VDA Infosolutions',
      name: 'Mr. Ashutosh Deuskar',
      role: 'Director',
      image: alumniDeuskarImg,
    },
  ];

  const activeStudentCorner =
    studentCornerItems.find((item) => item.id === activeCorner) || studentCornerItems[0];
  const activeAlumni = alumniHighlights[alumniIndex];

  const goToPrevAlumni = () => {
    setAlumniIndex((prev) =>
      prev === 0 ? alumniHighlights.length - 1 : prev - 1,
    );
  };

  const goToNextAlumni = () => {
    setAlumniIndex((prev) => (prev + 1) % alumniHighlights.length);
  };

  return (
    <div className="animation-fade-in font-sans bg-white">

      {/* Hero Section */}
      <section className="relative h-[360px] overflow-hidden sm:h-[420px] md:h-[520px] lg:h-[620px]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
        <video
          src={droneVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-0 right-0 z-20 px-4 text-center text-white sm:bottom-24 md:bottom-32">
          <h2 className="mb-3 text-[clamp(1.65rem,5.3vw,3rem)] font-bold tracking-wide drop-shadow-lg md:mb-4">सर्वे भवन्तु सुखिनः</h2>
          <p className="mx-auto max-w-2xl text-[clamp(0.92rem,2.2vw,1.25rem)] font-light opacity-90 drop-shadow-md">Bestowed by the blessings of Shri Sant Gajanan Maharaj</p>
        </div>
      </section>

      {/* News Ticker */}
      <NewsTicker items={newsItems} />

      {/* Accreditations Bar */}
      <section className="border-b border-gray-100 bg-gradient-to-r from-ssgmce-blue/[0.03] via-white to-ssgmce-orange/[0.03] py-7 sm:py-8 md:py-10">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {accreditations.map((item) => (
              <div key={item.label} className="flex min-w-[92px] flex-col items-center rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md sm:min-w-[100px] sm:px-5 md:px-6 md:py-4">
                <FaCheckCircle className="text-ssgmce-accent text-base mb-1.5" />
                <span className="text-center text-[clamp(0.8rem,1.8vw,1rem)] font-bold leading-tight text-gray-800">{item.label}</span>
                <span className="mt-0.5 text-[11px] text-ssgmce-muted sm:text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-ssgmce-surface py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-[clamp(1.7rem,4.1vw,2.25rem)] font-bold text-gray-800">What We <span className="text-ssgmce-blue">Offer</span></h2>
            <p className="mx-auto mt-3 max-w-xl text-[clamp(0.92rem,1.8vw,1rem)] text-ssgmce-muted">AICTE approved, NAAC accredited, and NBA accredited programs since 1983</p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
            {/* Academic Excellence */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 lg:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ssgmce-blue/10 transition-colors group-hover:bg-ssgmce-blue/15 sm:mb-6 sm:h-14 sm:w-14">
                <FaMicroscope className="text-ssgmce-blue text-xl" />
              </div>
              <h3 className="mb-3 text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold text-gray-800">Academic Excellence</h3>
              <p className="mb-6 text-[clamp(0.9rem,1.7vw,1rem)] leading-relaxed text-ssgmce-muted">
                B.E., M.E., MBA and Ph.D. programs across 7 departments affiliated to SGBAU, Amravati with NAAC and NBA accreditation.
              </p>
              <Link to="/departments/applied-sciences" className="inline-flex items-center text-ssgmce-blue font-semibold hover:text-ssgmce-orange transition-colors text-sm group-hover:gap-2 gap-1">
                Explore Programs <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Student Life */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 lg:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ssgmce-orange/10 transition-colors group-hover:bg-ssgmce-orange/15 sm:mb-6 sm:h-14 sm:w-14">
                <FaUsers className="text-ssgmce-orange text-xl" />
              </div>
              <h3 className="mb-3 text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold text-gray-800">Student Life</h3>
              <p className="mb-6 text-[clamp(0.9rem,1.7vw,1rem)] leading-relaxed text-ssgmce-muted">
                IEEE, ISTE, ACM chapters, GDG club, Drone Club, E-Cell, NSS, NCC and cultural festivals like Pursuit and Parishkriti.
              </p>
              <Link to="/gallery" className="inline-flex items-center text-ssgmce-blue font-semibold hover:text-ssgmce-orange transition-colors text-sm group-hover:gap-2 gap-1">
                View Gallery <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Placements */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 lg:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ssgmce-accent/10 transition-colors group-hover:bg-ssgmce-accent/15 sm:mb-6 sm:h-14 sm:w-14">
                <FaHandshake className="text-ssgmce-accent text-xl" />
              </div>
              <h3 className="mb-3 text-[clamp(1.05rem,2.2vw,1.25rem)] font-bold text-gray-800">Placements</h3>
              <p className="mb-6 text-[clamp(0.9rem,1.7vw,1rem)] leading-relaxed text-ssgmce-muted">
                TCS Top Priority College with 35+ recruiters including Infosys, Wipro, Cognizant, Capgemini and more visiting annually.
              </p>
              <Link to="/placements/brochure" className="inline-flex items-center text-ssgmce-blue font-semibold hover:text-ssgmce-orange transition-colors text-sm group-hover:gap-2 gap-1">
                Placement Stats <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-white via-ssgmce-blue/[0.02] to-ssgmce-orange/[0.03] py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={mainGateImg}
                  alt="SSGMCE Main Gate"
                  className="h-[280px] w-full rounded-2xl object-cover shadow-lg sm:h-[340px] md:h-[380px]"
                />
                <div className="absolute -bottom-5 -right-5 bg-white py-5 px-6 shadow-lg rounded-xl z-20 hidden md:block border-l-4 border-ssgmce-blue">
                    <p className="text-3xl font-bold text-ssgmce-orange mb-0.5">41+</p>
                    <p className="text-ssgmce-muted text-xs font-semibold uppercase tracking-wide">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="space-y-5 lg:w-1/2">
              <p className="text-ssgmce-orange font-semibold uppercase tracking-widest text-xs">Est. 1983 &middot; Shegaon</p>
              <h2 className="text-[clamp(1.65rem,4.3vw,2.25rem)] font-bold leading-tight text-gray-800">
                Empowering Minds, <br/> <span className="text-ssgmce-blue">Enriching Lives.</span>
              </h2>
              <p className="text-[clamp(0.92rem,1.7vw,1rem)] leading-relaxed text-ssgmce-muted">
                Established in 1983 by Shri Gajanan Shikshan Sanstha under Shri Sant Gajanan Maharaj Temple Trust, SSGMCE is one of the premier engineering institutes in Maharashtra, re-modeled into a smart, green and clean campus.
              </p>
              <p className="text-[clamp(0.92rem,1.7vw,1rem)] leading-relaxed text-ssgmce-muted">
                Approved by AICTE New Delhi, affiliated to SGBAU Amravati, accredited by NAAC and NBA, and ISO 9001:2015 certified. Rated AAA by Careers360 among the best engineering institutes in India.
              </p>
              <div className="pt-2">
                 <Link to="/about" className="inline-flex items-center gap-2 bg-ssgmce-blue text-white px-7 py-3 rounded-lg shadow-sm hover:bg-ssgmce-dark-blue transition-colors font-medium text-sm">
                    Read More About Us <FaArrowRight className="text-xs" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-gradient-to-r from-ssgmce-blue/[0.04] via-ssgmce-surface to-ssgmce-blue/[0.04] py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mb-10 text-center sm:mb-12">
            <h2 className="text-[clamp(1.7rem,4.1vw,2.25rem)] font-bold text-gray-800">SSGMCE in <span className="text-ssgmce-blue">Numbers</span></h2>
            <p className="mt-3 text-[clamp(0.9rem,1.7vw,1rem)] text-ssgmce-muted">41 years of academic excellence and holistic development</p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-4 md:gap-6">
            <StatCard icon={FaBuilding} number="7" label="Departments" />
            <StatCard icon={FaUsers} number="3000+" label="Students" />
            <StatCard icon={FaGraduationCap} number="150+" label="Faculty Members" />
            <StatCard icon={FaTrophy} number="12000+" label="Alumni Network" />
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gradient-to-b from-white via-gray-50 to-white py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              Leadership Desk
            </p>
            <h2 className="mt-3 text-[clamp(1.65rem,4vw,2.25rem)] font-bold text-gray-900">
              Faculty <span className="text-ssgmce-blue">Members</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-[clamp(0.9rem,1.8vw,1rem)] leading-relaxed text-gray-600">
              Key academic leaders of SSGMCE, including the Principal and all Heads of Department, presented with verified details and direct access to the institute&apos;s official social channels.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {HOME_LEADERSHIP.map((member) => (
              <article
                key={member.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3.55] overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="min-h-[164px] bg-white px-4 py-4 sm:min-h-[170px]">
                  <div className="mb-3 h-1.5 w-10 rounded-full bg-gray-200" />
                  <h3 className="text-[clamp(1.03rem,2.2vw,1.2rem)] font-bold leading-tight text-gray-900">{member.name}</h3>
                  <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-ssgmce-blue sm:text-[11px]">
                    {member.designation}
                  </p>
                  <p className="mt-1.5 text-[clamp(0.88rem,1.6vw,0.96rem)] leading-relaxed text-gray-700">
                    {member.department}
                  </p>
                  {member.email && (
                    <p className="mt-2.5 break-all text-[11px] text-gray-500 sm:text-[12px]">{member.email}</p>
                  )}
                </div>

              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faculty"
              className="inline-flex items-center gap-2 rounded-full border border-ssgmce-blue px-6 py-3 text-sm font-semibold text-ssgmce-blue transition-colors hover:bg-ssgmce-blue hover:text-white"
            >
              Explore Faculty Directory <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-gradient-to-bl from-white via-ssgmce-orange/[0.02] to-white py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Latest News */}
            <div>
                <div className="mb-7 flex items-end justify-between sm:mb-8">
                 <div>
                    <h2 className="text-[clamp(1.45rem,3.5vw,1.9rem)] font-bold text-gray-800">Latest <span className="text-ssgmce-blue">News</span></h2>
                    <div className="w-12 h-0.5 bg-ssgmce-orange mt-3 rounded-full"></div>
                 </div>
                 <Link to="/news" className="text-sm font-medium text-ssgmce-blue hover:text-ssgmce-orange transition-colors">View All &rarr;</Link>
              </div>
              <div className="space-y-3">
                {newsItems.slice(0, 4).map((item) => (
                    <NewsCard
                      key={item._id}
                      title={item.title}
                      date={item.date}
                      description={item.description}
                      category={item.category || 'General'}
                    />
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
                <div className="mb-7 flex items-end justify-between sm:mb-8">
                 <div>
                  <h2 className="text-[clamp(1.45rem,3.5vw,1.9rem)] font-bold text-gray-800">Upcoming <span className="text-ssgmce-orange">Events</span></h2>
                    <div className="w-12 h-0.5 bg-ssgmce-blue mt-3 rounded-full"></div>
                 </div>
                 <Link to="/events" className="text-sm font-medium text-ssgmce-blue hover:text-ssgmce-orange transition-colors">Calendar &rarr;</Link>
              </div>
                <div className="rounded-xl border border-gray-100 bg-ssgmce-surface p-4 sm:p-5 md:p-6">
                  {/* Event Item 1 */}
                  <div className="mb-5 flex gap-3 border-b border-gray-100 pb-5 last:mb-0 last:border-0 last:pb-0 sm:gap-4">
                    <div className="min-w-[52px] rounded-lg border border-gray-100 bg-white px-2.5 py-2 text-center shadow-sm sm:min-w-[56px] sm:px-3 sm:py-2.5">
                          <div className="text-xl font-bold text-ssgmce-blue leading-tight">24</div>
                          <div className="text-[10px] uppercase font-semibold text-ssgmce-muted">APR</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 hover:text-ssgmce-blue transition-colors cursor-pointer mb-1.5 text-sm">ICICGR 2026 — International Conference</h4>
                          <div className="flex items-center text-xs text-ssgmce-muted">
                             <FaClock className="mr-1.5" size={10} /> 09:00 AM
                             <FaMapMarkerAlt className="ml-3 mr-1.5" size={10} /> E&TC Department
                          </div>
                          <p className="text-[10px] text-ssgmce-muted mt-1">Innovations in Communication, Geoscience and Robotics</p>
                      </div>
                  </div>
                  {/* Event Item 2 */}
                    <div className="mb-5 flex gap-3 border-b border-gray-100 pb-5 last:mb-0 last:border-0 last:pb-0 sm:gap-4">
                      <div className="min-w-[52px] rounded-lg border border-gray-100 bg-white px-2.5 py-2 text-center shadow-sm sm:min-w-[56px] sm:px-3 sm:py-2.5">
                          <div className="text-xl font-bold text-ssgmce-blue leading-tight">--</div>
                          <div className="text-[10px] uppercase font-semibold text-ssgmce-muted">2026</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 hover:text-ssgmce-blue transition-colors cursor-pointer mb-1.5 text-sm">Pursuit 2026 — Technical Festival</h4>
                          <div className="flex items-center text-xs text-ssgmce-muted">
                             <FaMapMarkerAlt className="mr-1.5" size={10} /> SSGMCE Campus
                          </div>
                          <p className="text-[10px] text-ssgmce-muted mt-1">Annual technical fest with competitions and workshops</p>
                      </div>
                  </div>
                  {/* Event Item 3 */}
                    <div className="mb-5 flex gap-3 border-b border-gray-100 pb-5 last:mb-0 last:border-0 last:pb-0 sm:gap-4">
                      <div className="min-w-[52px] rounded-lg border border-gray-100 bg-white px-2.5 py-2 text-center shadow-sm sm:min-w-[56px] sm:px-3 sm:py-2.5">
                          <div className="text-xl font-bold text-ssgmce-blue leading-tight">--</div>
                          <div className="text-[10px] uppercase font-semibold text-ssgmce-muted">2026</div>
                      </div>
                      <div>
                          <h4 className="font-semibold text-gray-800 hover:text-ssgmce-blue transition-colors cursor-pointer mb-1.5 text-sm">Parishkriti 2026 — Cultural Festival</h4>
                          <div className="flex items-center text-xs text-ssgmce-muted">
                             <FaMapMarkerAlt className="mr-1.5" size={10} /> SSGMCE Campus
                          </div>
                          <p className="text-[10px] text-ssgmce-muted mt-1">Annual cultural celebration with performances and events</p>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gradient-to-b from-[#fbfcfe] via-white to-[#f8f9fc] py-10 sm:py-12 md:py-14">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col">
              <div className="mb-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Campus Life
                </p>
                <h3 className="text-[clamp(1.5rem,4.1vw,2.05rem)] font-bold text-slate-900">
                  Student&apos;s <span className="text-rose-400">Corner</span>
                </h3>
                <div className="mt-2 h-1 w-12 rounded-full bg-amber-300" />
              </div>

              <div className="flex flex-1 flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.22)] backdrop-blur-sm">
                <div className="space-y-2.5">
                  {studentCornerItems.map((item) => {
                    const isActive = item.id === activeCorner;

                    return (
                      <div key={item.id} className="overflow-hidden rounded-[1.05rem] border border-slate-200/80 bg-white">
                        <button
                          type="button"
                          onClick={() => setActiveCorner(item.id)}
                          className={`flex w-full items-center gap-2.5 px-3.5 py-3 text-left transition-colors sm:px-4 ${
                            isActive ? 'bg-[#2f5f8d] text-white' : 'bg-[#f8fafc] text-[#2f5f8d] hover:bg-[#f1f5f9]'
                          }`}
                        >
                          {isActive ? <FaMinus className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
                          <span className="text-[clamp(0.92rem,1.9vw,0.98rem)] font-semibold leading-tight">{item.title}</span>
                        </button>

                        {isActive && (
                          <div className="grid grid-cols-[78px,1fr] gap-3 bg-[#fcfdff] p-3 sm:grid-cols-[88px,1fr] md:grid-cols-[104px,1fr]">
                            <img
                              src={activeStudentCorner.image}
                              alt={activeStudentCorner.title}
                              className="h-[68px] w-full rounded-md object-cover sm:h-[74px]"
                            />
                            <p className="text-[clamp(0.82rem,1.65vw,0.89rem)] leading-relaxed text-slate-600">
                              {activeStudentCorner.text}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div className="mb-3.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                  Notable Alumni
                </p>
                <h3 className="text-[clamp(1.5rem,4.1vw,2.05rem)] font-bold text-slate-900">
                  Prestigious <span className="text-rose-400">Alumni</span>
                </h3>
                <div className="mt-2 h-1 w-12 rounded-full bg-amber-300" />
              </div>

              <div className="flex flex-1 flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_44px_-34px_rgba(15,23,42,0.22)] backdrop-blur-sm">
                <div className="flex h-full flex-col rounded-[20px] border border-slate-100 bg-gradient-to-b from-[#fdfefe] to-[#f7f9fc] px-4 py-5 md:px-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {String(alumniIndex + 1).padStart(2, '0')} / {String(alumniHighlights.length).padStart(2, '0')}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goToPrevAlumni}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-700"
                        aria-label="Previous alumni"
                      >
                        <FaChevronLeft className="text-sm" />
                      </button>
                      <button
                        type="button"
                        onClick={goToNextAlumni}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-700"
                        aria-label="Next alumni"
                      >
                        <FaChevronRight className="text-sm" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center text-center">
                    <FaQuoteLeft className="mx-auto mb-3 text-[1.7rem] text-slate-300 sm:text-[2rem]" />

                    <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-[0_10px_24px_-18px_rgba(15,23,42,0.4)] md:h-32 md:w-32">
                      <img
                        src={activeAlumni.image}
                        alt={activeAlumni.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 md:text-xs">
                      {activeAlumni.org}
                    </p>
                    <h4 className="mt-2.5 text-[clamp(1.22rem,3.4vw,1.65rem)] font-bold leading-tight text-slate-900">
                      {activeAlumni.name}
                    </h4>
                    <p className="mt-1.5 text-[clamp(0.95rem,2.2vw,1rem)] font-semibold text-amber-500">{activeAlumni.role}</p>

                    <div className="mt-4 flex justify-center gap-1.5">
                      {alumniHighlights.map((alumni, index) => (
                        <button
                          key={alumni.id}
                          type="button"
                          onClick={() => setAlumniIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === alumniIndex ? 'w-6 bg-[#2f5f8d]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Show alumni ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="border-t border-gray-100 bg-gradient-to-r from-ssgmce-blue/[0.03] via-ssgmce-surface to-ssgmce-orange/[0.03] py-12 sm:py-13 md:py-14">
        <div className="mx-auto w-full max-w-5xl px-4 text-center sm:px-5 lg:px-6">
            <p className="text-xs font-semibold text-ssgmce-muted uppercase tracking-[0.2em] mb-3">Our Esteemed Recruiters</p>
            <p className="text-[10px] text-ssgmce-muted mb-8">TCS Top Priority College &middot; 35+ Companies</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-14">
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">TCS</div>
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">Infosys</div>
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">Wipro</div>
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">Tech Mahindra</div>
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">Cognizant</div>
            <div className="text-[clamp(1rem,2.5vw,1.25rem)] font-bold text-gray-300 transition-colors duration-300 hover:text-ssgmce-blue">Capgemini</div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
