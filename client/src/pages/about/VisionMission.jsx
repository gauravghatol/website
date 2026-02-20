import PageHeader from '../../components/PageHeader';
import { useState, useEffect } from 'react';
import { FaBullseye, FaRocket, FaHandHoldingHeart, FaLightbulb, FaUserTie, FaGlobe, FaChevronDown, FaChevronUp, FaCheckCircle } from 'react-icons/fa';

const coreValues = [
  {
    icon: <FaHandHoldingHeart />,
    title: 'Personal Excellence',
    color: 'blue',
    description: 'An ability to fully unleash and utilize one\'s potential in all walks of life. To improve your performance consistently and continuously so that you can improve every aspect of your life.',
    valueStatement: 'Explores to unleash one\'s potential through proactive awareness, research attitude, continuous learning, accountability and innovation in every sphere of life.',
    indicators: [
      'Knows one\'s passion, strengths and weaknesses',
      'Has SMART goals in place',
      'Setting benchmarks for self and raising them from time to time',
      'Proactively engages in learning through networking with other universities and Industry',
      'Steps outside of one\'s comfort zone to do something new and creative',
      'Approaches situations with scientific mind set',
      'Builds a trusted connection with a mentor and seeks advice when needed',
      'Be brand ambassador for SSGMCE to the external world',
    ],
  },
  {
    icon: <FaUserTie />,
    title: 'Accountability',
    color: 'orange',
    description: 'Accepting responsibility for your action and being willing to own the outcome of your choices, decision and action.',
    valueStatement: 'Each individual at SSGMCE is a firm believer of being accountable to one\'s role, goal and development. We all follow the rules and regulations with others are refined, proper and organized.',
    indicators: [
      'Takes responsibility for all work activities',
      'Follows through on commitments, implements decisions that have been agreed upon',
      'Maintains confidentiality with sensitive information',
      'Acknowledges and learns from mistakes without blaming others',
      'Recognizes the impact of one\'s behavior on others',
    ],
  },
  {
    icon: <FaHandHoldingHeart />,
    title: 'Trustworthiness',
    color: 'green',
    description: 'The ability of a person to be relied on as honest or trustworthy.',
    valueStatement: 'Build trust through honesty, integrity, consistency, transparency and keep promises.',
    indicators: [
      'Respect self and others',
      'Walk your talk',
      'Maintains Confidentiality',
      'Maintain consistency, therefore they are reliable and resourceful to the people',
      'Keep promises / commitments',
      'Value people\'s time and efforts',
      'Express gratitude to their family, friends and co-workers, support and encourage them',
    ],
  },
  {
    icon: <FaGlobe />,
    title: 'Holistic Development',
    color: 'purple',
    description: 'Development of a person in all dimensions: Physical, Mental, Social, Emotional and Spiritual to unleash his/her potential and is capable of facing the demands and challenges of personal and professional life.',
    valueStatement: 'SSGMCE provides a system to incorporate and sustain holistic development (Physical, Mental, Social, Emotional and Spiritual).',
    indicators: [
      'Plan and invest time in regular physical fitness exercise like sports, gymnastics, yoga, etc.',
      'Plan and proactively invest time to update knowledge and skills related to personal and professional role',
      'Plan and invest time in networking and meaningfully contributing to relationships',
      'Maintain consistency therefore they are reliable and resourceful to the people',
      'Think beyond self and plan and invest time for community development',
      'Engages in practices which are environment friendly',
      'Optimally uses natural resources like Water and Electricity',
    ],
  },
  {
    icon: <FaLightbulb />,
    title: 'Creativity & Innovation',
    color: 'yellow',
    description: 'The ability to go beyond traditional ideas, rules, patterns, relationships and to create meaningful value adding new ideas, forms, unconventional methods, interpretations etc.',
    valueStatement: 'Include innovation / creativity through resourcefulness, sharing and employing new ideas, possibility thinking.',
    indicators: [
      'Develops new useful ideas / approach / programs that prove to be effective',
      'Think outside of the box',
      'Takes \'SMART\' risk, including trying new and different ways to get work done',
      'Embraces diverse perspective to promote and nurture innovation',
      'Generate and employs original ideas for tackling both simple and complex problems',
      'Fosters Interdisciplinary / transdisciplinary work',
    ],
  },
];

const VisionMission = () => {
  useEffect(() => {
    document.title = 'Vision & Mission | SSGMCE';
  }, []);
  const [expandedValue, setExpandedValue] = useState(null);

  const toggleValue = (index) => {
    setExpandedValue(expandedValue === index ? null : index);
  };

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600', iconBg: 'bg-blue-100', dot: 'bg-blue-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-600', iconBg: 'bg-orange-100', dot: 'bg-orange-500' },
    green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-600', iconBg: 'bg-green-100', dot: 'bg-green-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600', iconBg: 'bg-purple-100', dot: 'bg-purple-500' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-600', iconBg: 'bg-yellow-100', dot: 'bg-yellow-500' },
  };

  return (
    <div>
      <PageHeader title="Vision, Mission, Core Values & Goals" subtitle="Our Guiding Principles" />

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="space-y-12">
            {/* Vision */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 border-b-4 border-ssgmce-blue inline-block pb-2 mb-6">
                Our Vision
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-ssgmce-blue min-h-fit">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ssgmce-blue text-white rounded-lg flex-shrink-0">
                    <FaBullseye className="text-xl" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg italic">
                    "To impart world-class Engineering and Management education in an environment of spiritual foundation to serve the global society."
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">
                  Our vision encompasses creating an institution where technical excellence meets ethical values, where students are prepared not just for careers but for lives of impact and purpose. We envision SSGMCE as a beacon of knowledge that combines cutting-edge engineering practices with timeless spiritual wisdom to develop holistic professionals who contribute meaningfully to society.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 border-b-4 border-ssgmce-orange inline-block pb-2 mb-6">
                Our Mission
              </h2>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg border-l-4 border-ssgmce-orange">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ssgmce-orange text-white rounded-lg flex-shrink-0">
                    <FaRocket className="text-xl" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    We are committed to advancing technical education through innovation, research, and character development.
                  </p>
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm"><strong>Our mission focuses on four key pillars:</strong></p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-ssgmce-orange font-bold flex-shrink-0 mt-1">•</span>
                      <span><strong>Academic Excellence:</strong> Develop excellent learning center through continuous course upgradation in interaction with R&D centers, Industries and Academia.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ssgmce-orange font-bold flex-shrink-0 mt-1">•</span>
                      <span><strong>Holistic Development:</strong> Produce competent, entrepreneurial and committed Technical and managerial human, with Spiritual foundation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ssgmce-orange font-bold flex-shrink-0 mt-1">•</span>
                      <span><strong>Innovation & Research:</strong> Develop state-of-the-art infrastructure, centers of excellence and pursue research of global and local relevance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-ssgmce-orange font-bold flex-shrink-0 mt-1">•</span>
                      <span><strong>Social Responsibility:</strong> Strive for 'Sarve Bhanvantu Sukhinah' through symbiosis of Science and Spirituality.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Accordion */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 border-b-4 border-ssgmce-blue inline-block pb-2 mb-8">
            Core Values
          </h2>

          <div className="space-y-4 max-w-4xl">
            {coreValues.map((value, index) => {
              const colors = colorMap[value.color];
              const isExpanded = expandedValue === index;

              return (
                <div key={index} className={`rounded-lg border-l-4 ${colors.border} bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden`}>
                  <button
                    onClick={() => toggleValue(index)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${colors.iconBg} ${colors.text} rounded-lg flex items-center justify-center text-lg flex-shrink-0`}>
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{value.title}</h3>
                        <p className="text-gray-600 text-sm mt-0.5">{value.description}</p>
                      </div>
                    </div>
                    <div className={`${colors.text} text-lg flex-shrink-0 ml-4`}>
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">{value.description}</p>
                      <div className="mb-6">
                        <h4 className={`font-bold ${colors.text} mb-3 text-sm`}>Key Behavior Indicators</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {value.indicators.map((indicator, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <FaCheckCircle className={`${colors.text} mt-1 flex-shrink-0 text-xs`} />
                              <span className="text-gray-600 leading-relaxed">{indicator}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`border-l-4 ${colors.border} pl-4 py-3`}>
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide mb-2">Value Statement</h4>
                        <p className="text-gray-700 italic text-sm leading-relaxed">{value.valueStatement}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 border-b-4 border-ssgmce-orange inline-block pb-2 mb-8">
            Our Goals
          </h2>
          <div className="prose prose-sm max-w-4xl text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong className="text-ssgmce-blue">Academic Independence:</strong> To acquire autonomous status for the institute, enabling greater flexibility in academic and administrative decision-making while maintaining excellence and accountability.
            </p>
            <p>
              <strong className="text-ssgmce-blue">Global Recognition:</strong> To get programs accredited by international bodies, ensuring that our curriculum and standards are recognized and valued globally, enhancing student mobility and career prospects.
            </p>
            <p>
              <strong className="text-ssgmce-blue">Research Hub:</strong> To establish Recognized Research Centers in all departments, fostering innovation, contributing to knowledge advancement, and creating opportunities for faculty and students to engage in meaningful research.
            </p>
            <p>
              <strong className="text-ssgmce-blue">Industry Connect:</strong> To strengthen industry-institute partnership for better opportunities, facilitating internships, placements, collaborative projects, and knowledge exchange that align academic learning with industry requirements.
            </p>
            <p>
              <strong className="text-ssgmce-blue">Digital Transformation:</strong> To implement complete digitalization of academic and administrative processes, enhancing efficiency, accessibility, and the overall learning experience through modern technology platforms and tools.
            </p>
            <p>
              <strong className="text-ssgmce-blue">Sustainable Campus:</strong> To maintain a green, eco-friendly, and energy-efficient campus, promoting environmental consciousness, reducing carbon footprint, and creating a healthy and sustainable environment for the academic community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
