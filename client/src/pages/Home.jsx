import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUsers, FaTrophy, FaBuilding, FaArrowRight, FaChevronLeft, FaChevronRight, FaClock, FaMapMarkerAlt, FaMicroscope, FaHandshake } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import NewsCard from '../components/NewsCard';
import NewsTicker from '../components/NewsTicker';
import useFetch from '../hooks/useFetch';
import mainGate from '../assets/images/Main-Gate.avif';
import campusView from '../assets/images/Campus-View.avif';
import arialView from '../assets/images/Arial-view.jpeg';

const Home = () => {
  const { data: newsData } = useFetch('/api/news');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fallback data if API is empty
  const staticNews = [
    { _id: '1', title: 'Admissions Open for Academic Year 2026-27', date: '2026-01-15', description: 'Applications are invited for UG and PG programs. Apply online now.', category: 'Admissions' },
    { _id: '2', title: 'National Web Conference on Recent Trends', date: '2026-02-10', description: 'Department of Computer Science organizing a national level conference.', category: 'Events' },
    { _id: '3', title: 'Outstanding Result in University Exams', date: '2026-01-05', description: 'SSGMCE students secure top 5 ranks in SGBAU University Exams.', category: 'Academic' },
  ];

  const newsItems = (newsData && newsData.length > 0) ? newsData : staticNews;

  const slides = [
    {
      image: mainGate,
      title: 'सर्वे भवन्तु सुखिनः',
      subtitle: 'Bestowed by the blessings of Shri Sant Gajanan Maharaj.'
    },
    {
      image: campusView,
      title: 'Excellence in Engineering Education',
      subtitle: 'Shaping Future Engineers Since 1983'
    },
    {
      image: arialView,
      title: 'State-of-the-Art Infrastructure',
      subtitle: 'Modern Labs and World-Class Facilities'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="animation-fade-in font-sans">
      
      {/* Hero Carousel */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-20 left-0 right-0 z-20 text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg tracking-wide">{slide.title}</h2>
              <p className="text-lg md:text-2xl font-light drop-shadow-md">{slide.subtitle}</p>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/30">
          <FaChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/30">
          <FaChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
           {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-ssgmce-orange' : 'w-3 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* News Ticker */}
      <NewsTicker items={newsItems} />

      {/* Info Boxes Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Box 1 */}
            <div className="bg-[#003366] text-white p-8 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaMicroscope size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Academic Excellence</h3>
              <p className="mb-6 text-gray-200 leading-relaxed relative z-10">
                Discover our diverse range of undergraduate and postgraduate programs designed to foster innovation and critical thinking.
              </p>
              <Link to="/departments" className="inline-flex items-center text-ssgmce-orange font-bold hover:text-white transition-colors uppercase tracking-wider text-sm">
                Explore Programs <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Box 2 */}
            <div className="bg-[#ff9933] text-white p-8 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaUsers size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Student Life</h3>
              <p className="mb-6 text-white/90 leading-relaxed relative z-10">
                 Experience a vibrant campus life with numerous clubs, sports facilities, and cultural activities that shape your personality.
              </p>
              <Link to="/gallery" className="inline-flex items-center text-[#003366] font-bold hover:text-white transition-colors uppercase tracking-wider text-sm">
                View Gallery <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Box 3 */}
            <div className="bg-[#e6f0fa] text-[#003366] p-8 rounded-xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border-t-4 border-[#003366]">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaHandshake size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Placements</h3>
              <p className="mb-6 text-gray-600 leading-relaxed relative z-10">
                Our collaborative efforts with top industries ensure excellent career opportunities for our students every year.
              </p>
              <Link to="/placements" className="inline-flex items-center text-ssgmce-orange font-bold hover:text-[#003366] transition-colors uppercase tracking-wider text-sm">
                Placement Stats <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-ssgmce-orange/20 rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&q=80" 
                  alt="College Campus" 
                  className="rounded-lg shadow-2xl relative z-10 w-full object-cover h-[400px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg z-20 hidden md:block border-l-4 border-ssgmce-blue">
                    <p className="text-4xl font-bold text-ssgmce-orange mb-1">40+</p>
                    <p className="text-gray-600 text-sm font-semibold uppercase">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h4 className="text-ssgmce-orange font-bold uppercase tracking-widest text-sm">Welcome to SSGMCE</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Empowering Minds, <br/> <span className="text-ssgmce-blue">Enriching Lives.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Shri Sant Gajanan Maharaj College of Engineering, Shegaon is one of the premier institutes of engineering in the region. Established in 1983, it has always strived for excellence in technical education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The college is approved by AICTE, New Delhi and affiliated to Sant Gadge Baba Amravati University. We are committed to providing value-based education and creating globally competent technocrats.
              </p>
              <div className="pt-4">
                 <Link to="/about" className="bg-ssgmce-blue text-white px-8 py-3 rounded shadow hover:bg-blue-800 transition-colors font-semibold">
                    Read More About Us
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#003366] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">SSGMCE in Numbers</h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCard icon={FaBuilding} number="40+" label="Acres Campus" bgColor="bg-white/10" />
            <StatCard icon={FaUsers} number="3000+" label="Students" bgColor="bg-white/10" />
            <StatCard icon={FaGraduationCap} number="150+" label="Faculty Members" bgColor="bg-white/10" />
            <StatCard icon={FaTrophy} number="12000+" label="Alumni Network" bgColor="bg-white/10" />
          </div>
        </div>
      </section>

      {/* News & Events Split Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Latest News */}
            <div>
              <div className="flex justify-between items-end mb-8">
                 <div>
                    <h2 className="text-3xl font-bold text-gray-800">Latest <span className="text-ssgmce-blue">News</span></h2>
                    <div className="w-16 h-1 bg-ssgmce-orange mt-2"></div>
                 </div>
                 <Link to="/news" className="text-sm font-bold text-ssgmce-blue hover:text-ssgmce-orange transition-colors">View All News &rarr;</Link>
              </div>
              <div className="space-y-4">
                {newsItems.slice(0, 3).map((item) => (
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
              <div className="flex justify-between items-end mb-8">
                 <div>
                    <h2 className="text-3xl font-bold text-gray-800">Upcoming <span className="text-ssgmce-orange">Events</span></h2>
                    <div className="w-16 h-1 bg-[#003366] mt-2"></div>
                 </div>
                 <Link to="/events" className="text-sm font-bold text-ssgmce-blue hover:text-ssgmce-orange transition-colors">Calendar &rarr;</Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                  {/* Event Item 1 */}
                  <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                      <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-ssgmce-blue">25</div>
                          <div className="text-xs uppercase font-bold text-gray-500">JAN</div>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-800 hover:text-ssgmce-orange transition-colors cursor-pointer mb-1">Republic Day Celebration</h4>
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                             <FaClock className="mr-1" size={10} /> 08:00 AM
                             <FaMapMarkerAlt className="ml-3 mr-1" size={10} /> Main Ground
                          </div>
                      </div>
                  </div>
                  {/* Event Item 2 */}
                  <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                      <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-ssgmce-blue">12</div>
                          <div className="text-xs uppercase font-bold text-gray-500">FEB</div>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-800 hover:text-ssgmce-orange transition-colors cursor-pointer mb-1">Annual Social Gathering 'Sohala'</h4>
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                             <FaClock className="mr-1" size={10} /> 10:00 AM
                             <FaMapMarkerAlt className="ml-3 mr-1" size={10} /> Auditorium
                          </div>
                      </div>
                  </div>
                   {/* Event Item 3 */}
                   <div className="flex gap-4 mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                      <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-ssgmce-blue">28</div>
                          <div className="text-xs uppercase font-bold text-gray-500">FEB</div>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-800 hover:text-ssgmce-orange transition-colors cursor-pointer mb-1">National Science Day Exhibition</h4>
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                             <FaClock className="mr-1" size={10} /> 11:00 AM
                             <FaMapMarkerAlt className="ml-3 mr-1" size={10} /> Science Block
                          </div>
                      </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recruiters Section (Placeholder) */}
      <section className="py-12 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-8">Our Top Recruiters</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholders for logos - mimicking the effect */}
               <div className="text-2xl font-bold font-serif text-blue-800">TCS</div>
               <div className="text-2xl font-bold font-sans text-indigo-600">Infosys</div>
               <div className="text-2xl font-bold font-mono text-green-700">Wipro</div>
               <div className="text-2xl font-bold text-red-600">Tech Mahindra</div>
               <div className="text-2xl font-bold font-slab text-orange-600">Cognizant</div>
               <div className="text-2xl font-bold italic text-blue-500">Capgemini</div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
