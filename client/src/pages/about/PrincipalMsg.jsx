import PageHeader from "/src/components/PageHeader";
import {
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaAward,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import principalImg from "/src/assets/images/about/principal_c.png";

const PrincipalMsg = () => {
  return (
    <div>
      <PageHeader
        title="Principal Speaks"
        subtitle="From the Desk of the Principal"
      />

      {/* Principal Speaks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-ssgmce-blue to-ssgmce-orange rounded-2xl blur opacity-25"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={principalImg}
                      alt="Principal"
                      className="w-full h-auto"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/400x500?text=Principal+Photo")
                      }
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl shadow-lg mt-6">
                  <h3 className="text-2xl font-bold mb-2">Dr. S. B. Somani</h3>
                  <p className="text-blue-100 font-semibold mb-4">Principal</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3 text-ssgmce-orange" />
                      <span>principal@ssgmce.ac.in</span>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="mr-3 text-ssgmce-orange" />
                      <span>+91-7265-252285</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-ssgmce-blue mb-4 relative">
                  Message from the Principal
                  <span className="block h-1 w-24 bg-ssgmce-orange mt-3 rounded-full"></span>
                </h2>
              </div>

              {/* Quote Section */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 border-l-4 border-ssgmce-orange p-6 rounded-r-xl mb-8 relative">
                <FaQuoteLeft className="text-4xl text-ssgmce-orange/20 absolute top-4 left-4" />
                <p className="text-lg italic text-gray-700 pl-8">
                  "Education is not just about acquiring knowledge, but about
                  developing character, values, and a spirit of service to
                  humanity."
                </p>
              </div>

              <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-5">
                <p className="text-lg">
                  <strong className="text-ssgmce-blue">
                    Dear Students, Parents, and Well-wishers,
                  </strong>
                </p>
                <p>
                  On behalf of the faculty, staff, and our fellow students, I am
                  pleased to welcome you to{" "}
                  <strong>
                    Shri Sant Gajanan Maharaj College of Engineering (SSGMCE),
                    Shegaon
                  </strong>
                  . When you made SSGMCE as your College of choice, you took the
                  first step in ensuring your place among the illustrious sons
                  and daughters of this great institution.
                </p>
                <p>
                  SSGMCE, one of the leading technical institutes in the
                  Vidarbha region, has always strived for quality education
                  since its inception in <strong>1983</strong>. Over the last
                  four decades, we have successfully nurtured scientific temper,
                  professional competence, and social commitment among budding
                  technocrats to find solutions to problems and serve the global
                  society.
                </p>
                <p>
                  We live in challenging times where technology is evolving at
                  an unprecedented pace. As the Principal of SSGMCE, I am
                  privileged to work with a dedicated and talented group of
                  educators who are committed to helping you propel your career
                  ascent. Our focus extends beyond technical competence; we
                  inculcate moral and ethical values among students so that they
                  become good human beings and responsible citizens of the
                  global society.
                </p>
                <p>
                  Our institution has been recognized with{" "}
                  <strong>NAAC A+ accreditation</strong>, designated as a{" "}
                  <strong>TCS Priority College</strong>, and ranked{" "}
                  <strong>AAA by Careers360</strong>. These achievements reflect
                  our commitment to excellence in education, research, and
                  overall development.
                </p>
                <p>
                  We encourage our students to participate actively in
                  co-curricular and extracurricular activities, technical
                  competitions, research projects, and community service. These
                  experiences complement classroom learning and prepare you for
                  real-world challenges.
                </p>
                <p>
                  I take this opportunity to extend my heartiest wishes to all
                  students to achieve success in their future endeavours. May
                  you continue to uphold the values and traditions of SSGMCE and
                  make meaningful contributions to society.
                </p>
                <p className="font-bold text-ssgmce-blue mt-6 text-lg">
                  With warm regards,
                  <br />
                  Dr. S. B. Somani
                  <br />
                  <span className="text-base font-semibold text-gray-600">
                    Principal, SSGMCE Shegaon
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Leadership <span className="text-ssgmce-blue">Focus Areas</span>
            </h2>
            <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-ssgmce-blue">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <FaAward className="text-3xl text-ssgmce-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Academic Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering a culture of continuous learning, innovation, and
                research to maintain high academic standards and
                industry-relevant curriculum.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-ssgmce-orange">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-6">
                <FaLightbulb className="text-3xl text-ssgmce-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation & Research
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Encouraging students and faculty to pursue cutting-edge
                research, file patents, and develop innovative solutions for
                societal challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-ssgmce-blue">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <FaUsers className="text-3xl text-ssgmce-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Holistic Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nurturing well-rounded individuals through spiritual values,
                ethical practices, and comprehensive personality development
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMsg;
