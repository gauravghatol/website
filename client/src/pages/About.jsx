import PageHeader from '../components/PageHeader';
import { FaBullseye, FaRocket, FaHandHoldingHeart, FaLightbulb, FaUserTie, FaGlobe } from 'react-icons/fa';

const About = () => {

  return (
    <div>
      <PageHeader title="About SSGMCE" subtitle="Know More About Our Institution" />

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-1 h-8 bg-ssgmce-orange mr-3"></div>
                <h4 className="text-ssgmce-orange font-bold uppercase tracking-widest text-sm">About SSGMCE</h4>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-ssgmce-blue mb-6">Shri Sant Gajanan Maharaj College of Engineering</h2>
              <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon, established in 1983 by Shri Gajanan Shikshan Sanstha, Shegaon, is one of the premier institutions dedicated to excellence in engineering and management education. The institute is affiliated to Sant Gadge Baba Amravati University (SGBAU), Amravati, recognized by AICTE, New Delhi, and approved by the DTE, Maharashtra State.
              </p>
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                SSGMCE is accredited by <strong>NAAC with an 'A+' grade</strong>, is an ISO 9001:2015 certified institution, and has been accorded the prestigious status of <strong>'TCS Priority College'</strong>. The institute serves as a mentor under the 'Parisparsh Scheme' to guide other institutions and has been identified as a Lead College by SGBAU. It has been ranked 'AAA' by Careers360 and recognized as a 'Management College of the Year' by Higher Education Review.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-ssgmce-blue/20 group-hover:bg-transparent transition-colors duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800" 
                alt="College Building" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
