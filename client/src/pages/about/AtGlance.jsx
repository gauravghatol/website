import PageHeader from "../../components/PageHeader";
import usePageContent from "../../hooks/usePageContent";
import {
  FaUniversity,
  FaCalendar,
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaUsers,
  FaBook,
  FaLaptop,
  FaFlask,
  FaBed,
  FaChalkboardTeacher,
  FaTrophy,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

// Horizontal Timeline Component
const HorizontalTimeline = ({ milestones }) => {
  const timelineRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable navigation buttons
  const checkScrollPosition = () => {
    if (timelineRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener("scroll", checkScrollPosition);
      return () => timeline.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction) => {
    if (timelineRef.current) {
      const scrollAmount = 400;
      timelineRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          canScrollLeft
            ? "text-ssgmce-blue hover:bg-ssgmce-blue hover:text-white"
            : "text-gray-300 cursor-not-allowed"
        }`}
        aria-label="Scroll Left"
      >
        <FaChevronLeft className="text-xl" />
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          canScrollRight
            ? "text-ssgmce-blue hover:bg-ssgmce-blue hover:text-white"
            : "text-gray-300 cursor-not-allowed"
        }`}
        aria-label="Scroll Right"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Timeline Container */}
      <div
        ref={timelineRef}
        className="timeline-container flex items-center overflow-x-auto px-12 py-8 relative"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
          scrollbarColor: "#f97316",
          minHeight: "400px",
        }}
      >
        {/* Central Line - Extends across full timeline width */}
        <div
          className="absolute left-12 h-1 bg-gradient-to-r from-ssgmce-blue via-ssgmce-orange to-ssgmce-blue top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: `${milestones.length * 320 + (milestones.length - 1) * 40}px`,
          }}
        ></div>

        {milestones.map((milestone, idx) => (
          <div
            key={idx}
            className="timeline-item flex-shrink-0 relative"
            style={{
              width: "320px",
              height: "400px",
              scrollSnapAlign: "center",
              marginRight: idx < milestones.length - 1 ? "40px" : "0",
            }}
          >
            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-ssgmce-orange rounded-full border-4 border-white shadow-lg z-10"></div>

            {/* Milestone Content - Alternating Above/Below */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-full ${
                idx % 2 === 0 ? "bottom-1/2 pb-12" : "top-1/2 pt-12"
              }`}
            >
              <div className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-ssgmce-blue">
                <div className="flex items-center justify-center mb-3">
                  <span className="inline-block bg-gradient-to-r from-ssgmce-blue to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                    {milestone.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium text-center text-sm leading-relaxed">
                  {milestone.event}
                </p>
              </div>

              {/* Connector Line to Node */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${
                  idx % 2 === 0
                    ? "top-full h-12 bg-gradient-to-b from-ssgmce-blue/50 to-transparent"
                    : "bottom-full h-12 bg-gradient-to-t from-ssgmce-blue/50 to-transparent"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar Styles - Enhanced Design */}
      <style>{`
        .timeline-container::-webkit-scrollbar {
          height: 12px;
          margin-top: 20px;
        }
        .timeline-container::-webkit-scrollbar-track {
          background: linear-gradient(90deg, #dbeafe 0%, #fed7aa 100%);
          border-radius: 15px;
          border: 2px solid #e5e7eb;
          margin: 0 48px;
        }
        .timeline-container::-webkit-scrollbar-thumb {
          background: linear-gradient(
            90deg,
            #1e40af 0%,
            #f97316 50%,
            #1e40af 100%
          );
          border-radius: 15px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        .timeline-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            90deg,
            #1e3a8a 0%,
            #ea580c 50%,
            #1e3a8a 100%
          );
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }
        .timeline-container::-webkit-scrollbar-thumb:active {
          background: linear-gradient(
            90deg,
            #1e3a8a 0%,
            #c2410c 50%,
            #1e3a8a 100%
          );
        }
      `}</style>
    </div>
  );
};

const AtGlance = () => {
  useEffect(() => {
    document.title = 'At A Glance | SSGMCE';
  }, []);
  const { page, loading, error } = usePageContent("about-at-glance");

  // Animated counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration]);

    return count;
  };

  const stats = [
    {
      icon: FaCalendar,
      label: "Years of Excellence",
      value: 42,
      suffix: "+",
      color: "blue",
      counter: true,
    },
    { icon: FaGraduationCap, label: "UG Programs", value: 7, color: "orange" },
    { icon: FaBook, label: "PG Programs", value: 9, color: "blue" },
    {
      icon: FaUsers,
      label: "Total Students",
      value: 2500,
      suffix: "+",
      color: "orange",
      counter: true,
    },
    {
      icon: FaChalkboardTeacher,
      label: "Faculty Members",
      value: 150,
      suffix: "+",
      color: "blue",
      counter: true,
    },
    {
      icon: FaAward,
      label: "NAAC Grade",
      value: "A+",
      color: "orange",
      special: true,
    },
    {
      icon: FaFlask,
      label: "Research Labs",
      value: 45,
      suffix: "+",
      color: "blue",
      counter: true,
    },
    {
      icon: FaTrophy,
      label: "Placement Rate",
      value: 85,
      suffix: "%",
      color: "orange",
      counter: true,
    },
  ];

  const infrastructure = [
    { label: "Campus Area", value: "40 Acres", icon: FaUniversity },
    { label: "Central Library Books", value: "50,000+", icon: FaBook },
    { label: "Computer Labs", value: "12", icon: FaLaptop },
    { label: "Hostel Capacity", value: "500+", icon: FaBed },
    { label: "Seminar Halls", value: "8", icon: FaChalkboardTeacher },
    { label: "Sports Facilities", value: "Multiple", icon: FaTrophy },
  ];

  const placements = [
    { company: "TCS", type: "Mass Recruiter" },
    { company: "Infosys", type: "IT Services" },
    { company: "Wipro", type: "IT Services" },
    { company: "Tech Mahindra", type: "IT Services" },
    { company: "L&T", type: "Core Engineering" },
    { company: "Cognizant", type: "IT Consulting" },
  ];

  const milestones = [
    {
      year: "1983",
      event: "College Established by Shri Gajanan Shikshan Sanstha, Shegaon",
    },
    {
      year: "1984",
      event:
        "First Batch Admitted - Mechanical, Electrical & Civil Engineering",
    },
    {
      year: "1995",
      event: "Electronics & Telecommunication Department Started",
    },
    {
      year: "2000",
      event: "Computer Science & Engineering Department Established",
    },
    { year: "2002", event: "Information Technology Department Started" },
    { year: "2008", event: "ISO 9001:2008 Certification Achieved" },
    { year: "2010", event: "MBA Program Launched" },
    { year: "2015", event: "NAAC Accredited with 'A' Grade (CGPA 3.14)" },
    { year: "2016", event: "NBA Accreditation for Multiple Programs" },
    { year: "2018", event: "Designated as TCS Priority College" },
    { year: "2020", event: "NAAC Re-accredited with 'A+' Grade (CGPA 3.26)" },
    { year: "2021", event: "Identified as Lead College by SGBAU" },
    { year: "2023", event: "Ranked AAA by Careers360 Magazine" },
    { year: "2025", event: "40+ Years of Academic Excellence Celebrated" },
  ];

  const recognitions = [
    {
      title: "NAAC A+ Grade",
      desc: "National Assessment and Accreditation Council",
    },
    {
      title: "TCS Priority College",
      desc: "Recognized by Tata Consultancy Services",
    },
    { title: "ISO 9001:2015", desc: "Quality Management System Certified" },
    { title: "AAA Ranking", desc: "Careers360 Excellence Rating" },
    { title: "Lead College", desc: "Identified by SGBAU as Lead Institution" },
    { title: "Mentor Institute", desc: "Under AICTE Parisparsh Scheme" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-ssgmce-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-bold text-xl">
          Error loading page content: {error}
        </p>
      </div>
    );
  }

  // Use 'page' object instead of 'pageData'
  const heroSection = page?.sections?.find(
    (s) => s.sectionId === "hero-content",
  );
  const imageSection = page?.sections?.find(
    (s) => s.sectionId === "hero-image",
  );

  return (
    <div>
      <PageHeader
        title={page?.pageTitle || "SSGMCE At A Glance"}
        subtitle={page?.pageDescription || "Quick Facts & Milestones"}
      />

      {/* About SSGMCE - Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="text-ssgmce-orange font-bold text-sm tracking-wider uppercase border-l-4 border-ssgmce-orange pl-3">
                    ABOUT SSGMCE
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {heroSection?.title ||
                    "Shri Sant Gajanan Maharaj College of Engineering"}
                </h1>

                <div
                  className="space-y-4 text-gray-700 text-justify leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html:
                      heroSection?.content?.text ||
                      "<p>Content not available</p>",
                  }}
                ></div>
              </div>

              {/* Right Image */}
              <div className="relative group">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-ssgmce-orange rounded-2xl z-0 hidden md:block"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-ssgmce-blue/30 to-transparent group-hover:from-transparent transition-all duration-700 z-10 pointer-events-none"></div>
                  <img
                    src={
                      imageSection?.content?.url ||
                      "https://www.ssgmce.ac.in/images/library-main.jpg"
                    }
                    alt="SSGMCE Overview"
                    className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats with Animated Counters */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Quick <span className="text-ssgmce-blue">Statistics</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              // Component for animated counter
              const CounterValue = () => {
                const count = useCounter(stat.value);
                return <>{count}</>;
              };

              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group border-t-4 border-ssgmce-blue"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${stat.color === "blue" ? "bg-blue-50" : "bg-orange-50"} rounded-full mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <StatIcon
                      className={`text-3xl ${stat.color === "blue" ? "text-ssgmce-blue" : "text-ssgmce-orange"}`}
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-ssgmce-blue mb-2">
                    {stat.counter ? <CounterValue /> : stat.value}
                    {stat.suffix || ""}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Infrastructure{" "}
              <span className="text-ssgmce-blue">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {infrastructure.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-ssgmce-orange"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <ItemIcon className="text-2xl text-ssgmce-orange" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-ssgmce-blue">
                        {item.value}
                      </h3>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Placement Partners */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Placement <span className="text-ssgmce-blue">Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our strong industry partnerships ensure excellent placement
              opportunities with 85%+ placement rate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {placements.map((company, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border-b-4 border-ssgmce-blue"
                >
                  <div className="flex items-center justify-center mb-3">
                    <FaHandshake className="text-3xl text-ssgmce-orange" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-lg mb-1">
                    {company.company}
                  </h4>
                  <p className="text-sm text-gray-600">{company.type}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center bg-white p-6 rounded-xl shadow-lg border-t-4 border-ssgmce-orange">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div>
                  <p className="text-4xl font-bold text-ssgmce-blue">85%+</p>
                  <p className="text-gray-600 mt-1">Placement Rate</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-4xl font-bold text-ssgmce-orange">200+</p>
                  <p className="text-gray-600 mt-1">Students Placed Annually</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                <div>
                  <p className="text-4xl font-bold text-ssgmce-blue">50+</p>
                  <p className="text-gray-600 mt-1">Recruiting Companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About College */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 text-center">
              About The Institution
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 text-justify">
              <p>
                <strong>
                  Shri Sant Gajanan Maharaj College of Engineering (SSGMCE),
                  Shegaon
                </strong>
                , was established in 1983 by the{" "}
                <strong>Shri Gajanan Shikshan Sanstha, Shegaon</strong>, under
                the guidance and blessings of{" "}
                <strong>Shri Sant Gajanan Maharaj</strong>. The college is
                situated in Shegaon, a spiritual town in the Buldhana district
                of Maharashtra, India.
              </p>
              <p>
                The institute is affiliated to{" "}
                <strong>
                  Sant Gadge Baba Amravati University (SGBAU), Amravati
                </strong>
                , recognized by <strong>AICTE, New Delhi</strong>, and approved
                by the{" "}
                <strong>
                  Directorate of Technical Education (DTE), Maharashtra State
                </strong>
                . SSGMCE is committed to providing quality technical education
                and has been accredited by{" "}
                <strong>NAAC with an 'A+' grade</strong>, reflecting its
                dedication to excellence in education.
              </p>
              <p>
                The college campus is spread over <strong>40 acres</strong> of
                lush green land, providing a serene and conducive environment
                for learning. With state-of-the-art infrastructure,
                well-equipped laboratories, a central library with over 50,000
                books, and modern computing facilities, SSGMCE ensures that
                students receive comprehensive education with hands-on
                experience.
              </p>
              <p>
                Over the past four decades, SSGMCE has produced thousands of
                engineers who have made significant contributions to industry,
                research, and society. The institute emphasizes holistic
                development, combining technical knowledge with moral values and
                spiritual growth, inspired by the teachings of Sant Gajanan
                Maharaj.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey & Milestones - Horizontal Scrollable Timeline */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Our <span className="text-ssgmce-blue">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-light-orange mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Four Decades of Excellence in Engineering Education
            </p>
          </div>

          <HorizontalTimeline milestones={milestones} />
        </div>
      </section>

      {/* Recognitions & Accreditations */}
      <section className="py-16 bg-ssgmce-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Recognitions & Accreditations
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recognitions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-3">
                  <FaAward className="text-2xl text-ssgmce-orange mr-3" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliated Organizations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Affiliated &{" "}
              <span className="text-ssgmce-blue">Recognized By</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-ssgmce-blue transition-colors">
              <FaUniversity className="text-5xl text-ssgmce-blue mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                SGBAU, Amravati
              </h3>
              <p className="text-sm text-gray-600">
                Sant Gadge Baba Amravati University
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-ssgmce-blue transition-colors">
              <FaCertificate className="text-5xl text-ssgmce-orange mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                AICTE, New Delhi
              </h3>
              <p className="text-sm text-gray-600">
                All India Council for Technical Education
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-ssgmce-blue transition-colors">
              <FaAward className="text-5xl text-ssgmce-blue mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                DTE, Maharashtra
              </h3>
              <p className="text-sm text-gray-600">
                Directorate of Technical Education
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtGlance;
