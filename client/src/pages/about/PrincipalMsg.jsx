import PageHeader from '../../components/PageHeader';
import { FaQuoteLeft, FaQuoteRight, FaGraduationCap, FaHandshake, FaChartLine, FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';

const PrincipalMsg = () => {
  useEffect(() => {
    document.title = 'Principal Speaks | SSGMCE';
  }, []);
  return (
    <div>
      <PageHeader title="Principal Speaks" subtitle="From the Desk of the Principal" />

      {/* Principal Speaks */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Principal Photo & Info */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-6 border-4 border-gray-100">
                  <img
                    src="https://www.ssgmce.ac.in/administrator/uploads/principal_c.png"
                    alt="Dr. S. B. Somani - Principal SSGMCE"
                    className="w-full h-auto"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400x500?text=Principal+Photo'}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-ssgmce-blue">Dr. S. B. Somani</h3>
                  <p className="text-ssgmce-orange font-semibold mt-1">Principal</p>
                  <p className="text-gray-500 text-sm mt-1">Shri Sant Gajanan Maharaj College of Engineering, Shegaon</p>
                </div>

                {/* Quick highlights */}
                <div className="mt-6 space-y-3">
                  {[
                    { icon: <FaGraduationCap />, text: "Quality Education Since 1983" },
                    { icon: <FaHandshake />, text: "Industry-Academia Collaboration" },
                    { icon: <FaChartLine />, text: "Excellent Placement Records" },
                    { icon: <FaHeart />, text: "Value-Based Education" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <span className="text-ssgmce-orange">{item.icon}</span>
                      <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-ssgmce-orange mr-3"></div>
                <h2 className="text-3xl font-bold text-ssgmce-blue">Principal Speaks</h2>
              </div>

              <FaQuoteLeft className="text-4xl text-ssgmce-orange/20 mb-4" />

              <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-5">
                <p className="text-lg">
                  <strong className="text-ssgmce-blue">Dear Friends,</strong>
                </p>
                <p>
                  On behalf of the faculty, staff and our fellow students, I am pleased to welcome you to Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon. When you made SSGMCE as your College of choice, you took the first step in ensuring your place among the illustrious sons and daughters of this great institution. When you chose to study in SSGMCE, you made your first major investment decision.
                </p>
                <p>
                  Shri Sant Gajanan Maharaj College of Engineering, one of the leading technical institutes in Vidarbha region, always strives for quality education since its inception. In the last four decades it has successfully nurtured the scientific temper, Professional Competence and Social Commitment among the budding technocrats to find solutions to the problems and serve the global society.
                </p>
                <p>
                  We live in challenging times, pressured by career demands and the need to balance our professional and personal lives, choosing how best to continue our education and deciding which higher education institution is best suited to our needs, matters more than ever.
                </p>
                <p>
                  As a Principal of SSGMCE, I am privileged to work with a dedicated and talented group of educators who are committed to helping you to propel on the career ascent. An integrated set of academic processes on campus are aligned to develop the world class technocrats so as to deliver the best performance under diverse circumstances, so as to evolve the overall thinking process to radically transform the organizations, they shall work for, by leveraging the technical and human skills acquired and nurtured on campus.
                </p>
                <p>
                  Whichever program interests you, I'm sure that you'll be impressed by the preparation and focus of our dedicated faculty who will help to ensure that you gain the knowledge, skills and experiences you need to succeed in your career.
                </p>
                <p>
                  Apart from technical competence, we inculcate the moral and ethical values among the students so that they become good human beings and responsible citizens of the global society.
                </p>
                <p>
                  I am glad to share that SSGMCE holds a good position in terms of academic results, placement, MOUs with national and international bodies, publications, research grants to faculty members and vast sports arena.
                </p>

                <FaQuoteRight className="text-4xl text-ssgmce-orange/20 mb-4" />

                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange mt-6">
                  <p className="text-gray-800 font-medium italic">
                    I take this opportunity to extend my heartiest wishes to all students to achieve success in their future endeavours.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="font-bold text-ssgmce-blue text-lg">Dr. S. B. Somani</p>
                  <p className="text-ssgmce-orange font-medium">Principal, SSGMCE, Shegaon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMsg;
