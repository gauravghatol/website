import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";
import { FaCheckCircle, FaLightbulb, FaUsers, FaClipboardCheck, FaFileAlt, FaComments } from "react-icons/fa";

const Activities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Training & Placement Activities | SSGMCE";
  }, []);

  const activities = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Aptitude & Technical Preparation",
      description: "Comprehensive training programs to strengthen logical reasoning, quantitative aptitude, and core technical concepts",
      color: "orange"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Soft Skill & Professional Etiquettes",
      description: "Development of communication skills, teamwork abilities, and professional workplace etiquettes",
      color: "blue"
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Personality Development Programs",
      description: "Holistic personality enhancement focusing on confidence building, body language, and interpersonal skills",
      color: "orange"
    },
    {
      icon: <FaClipboardCheck className="text-3xl" />,
      title: "Competitive Exam Guidance",
      description: "Preparation support for GATE, GRE, CAT, and other competitive examinations for higher education",
      color: "blue"
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Resume Building",
      description: "Professional resume creation workshops to help students present their skills and achievements effectively",
      color: "orange"
    },
    {
      icon: <FaComments className="text-3xl" />,
      title: "Mock Tests & Interviews",
      description: "Real-time simulation of placement drives including written tests, group discussions, and HR interviews",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Training & Placement Cell Activities" 
        subtitle="Preparing Students for Successful Careers"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              <PlacementSidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Introduction Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                About T&P Cell Activities
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  SSGMCE provides full placement assistance to its students. The fundamental objective of SSGMCE for higher education is to craft and transfer knowledge for the benefit of society. SSGMCE placement is a four-stage process involving the Pre Placement activities, Career acquaintance & Guidance, and Executing Placement Drive and Post Placement feedback.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to providing placement assistance to the students in the prominent organizations, we also facilitate the training of our students in the industries during summer and winter vacations, project work for the students in the last year, round the year college-industry interactions, alumni meetings, participation in the workshop, Tech-fairs, seminars, and conferences, counseling of the students on job opportunities, facilitating industrial tours and inviting eminent speakers to add value in our programs.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Our students today are occupying coveted positions in Multinationals, Corporate, PSUs and other organizations with excellent annual packages.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg p-6 border-l-4 border-ssgmce-blue">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Making Students Industry-Ready
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These all can happen because of a dedicated effort. Several programs are organized to make them industry-ready through comprehensive training modules.
                </p>
              </div>
            </section>

            {/* Activities Grid */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200">
                Our Training Programs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                      activity.color === 'orange' ? 'border-ssgmce-orange' : 'border-ssgmce-blue'
                    } hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className={`${
                      activity.color === 'orange' ? 'text-ssgmce-orange' : 'text-ssgmce-blue'
                    } mb-4`}>
                      {activity.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Activities */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-6 pb-2 border-b border-gray-200">
                Additional Initiatives
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1">▸</span>
                    <span><strong>Summer & Winter Internships:</strong> Facilitating industrial training during vacations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1">▸</span>
                    <span><strong>Final Year Project Work:</strong> Industry-sponsored and mentored projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1">▸</span>
                    <span><strong>College-Industry Interactions:</strong> Regular engagement with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1">▸</span>
                    <span><strong>Alumni Meetings:</strong> Networking sessions with successful alumni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1">▸</span>
                    <span><strong>Workshops & Tech-Fairs:</strong> Participation in technical events and exhibitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1">▸</span>
                    <span><strong>Seminars & Conferences:</strong> Exposure to latest industry trends and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1">▸</span>
                    <span><strong>Career Counseling:</strong> Individual guidance on job opportunities and career paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-orange mr-3 mt-1">▸</span>
                    <span><strong>Industrial Tours:</strong> Visits to companies and manufacturing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ssgmce-blue mr-3 mt-1">▸</span>
                    <span><strong>Guest Lectures:</strong> Inviting eminent speakers from industry and academia</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Four Stage Process */}
            <section>
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 pb-2 border-b border-gray-200">
                Four-Stage Placement Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-5 text-white text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <h4 className="font-semibold text-sm">Pre Placement Activities</h4>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-5 text-white text-center">
                  <div className="text-3xl font-bold mb-2">2</div>
                  <h4 className="font-semibold text-sm">Career Acquaintance & Guidance</h4>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-5 text-white text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <h4 className="font-semibold text-sm">Executing Placement Drive</h4>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-5 text-white text-center">
                  <div className="text-3xl font-bold mb-2">4</div>
                  <h4 className="font-semibold text-sm">Post Placement Feedback</h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
