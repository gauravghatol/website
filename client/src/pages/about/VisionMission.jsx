import PageHeader from '/src/components/PageHeader';
import { FaBullseye, FaRocket, FaHandHoldingHeart, FaLightbulb, FaUserTie, FaGlobe } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div>
      <PageHeader title="Vision & Mission" subtitle="Our Guiding Principles" />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Vision & <span className="text-ssgmce-blue">Mission</span></h2>
             <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border-b-4 border-ssgmce-orange">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <FaBullseye size={150} />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FaBullseye className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg relative z-10 italic">
                "To impart world-class Engineering and Management education in an environment of spiritual foundation to serve the global society."
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group border-b-4 border-ssgmce-blue">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                 <FaRocket size={150} />
              </div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <FaRocket className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4 relative z-10">Our Mission</h3>
              <ul className="text-gray-700 leading-relaxed space-y-3 relative z-10">
                <li className="flex items-start">
                  <span className="text-ssgmce-orange mr-2 mt-1">➤</span>
                  To develop excellent learning center through continuous design and upgradation of courses in closed interaction with R&D centers, Industries and Academia.
                </li>
                <li className="flex items-start">
                  <span className="text-ssgmce-orange mr-2 mt-1">➤</span>
                  To produce competent, entrepreneurial and committed Technical and managerial human, with Spiritual foundation to serve the society.
                </li>
                <li className="flex items-start">
                  <span className="text-ssgmce-orange mr-2 mt-1">➤</span>
                  To develop state-of-the-art infrastructure, centers of excellence and to pursue research of global and local relevance.
                </li>
                <li className="flex items-start">
                  <span className="text-ssgmce-orange mr-2 mt-1">➤</span>
                  To strive for 'Sarve Bhanvantu Sukhinah' - the ideal of our parent organization Shri Gajanan Maharaj Sansthan, Shegaon through symbiosis of Science and Spirituality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-ssgmce-blue text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Core Values</h2>
              <div className="w-16 h-1 bg-white mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <FaHandHoldingHeart className="text-4xl mx-auto mb-4 text-ssgmce-orange group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">Personal Excellence</h3>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <FaUserTie className="text-4xl mx-auto mb-4 text-ssgmce-orange group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">Accountability</h3>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <FaHandHoldingHeart className="text-4xl mx-auto mb-4 text-ssgmce-orange group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">Trustworthiness</h3>
               </div>
               <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <FaGlobe className="text-4xl mx-auto mb-4 text-ssgmce-orange group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">Holistic Development</h3>
               </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group">
                  <FaLightbulb className="text-4xl mx-auto mb-4 text-ssgmce-orange group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-bold mb-2">Creativity & Innovation</h3>
               </div>
            </div>
         </div>
      </section>

      {/* Goals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our <span className="text-ssgmce-blue">Goals</span></h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { id: '01', title: 'Academic Independence', desc: 'To acquire autonomous status for the institute.' },
                 { id: '02', title: 'Global Recognition', desc: 'To get programs accredited by international bodies.' },
                 { id: '03', title: 'Research Hub', desc: 'To establish Recognized Research Centers in all departments.' },
                 { id: '04', title: 'Industry Connect', desc: 'To strengthen industry-institute partnership for better opportunities.' },
                 { id: '05', title: 'Digital Transformation', desc: 'To implement complete digitalization of academic and administrative processes.' },
                 { id: '06', title: 'Sustainable Campus', desc: 'To maintain a green, eco-friendly, and energy-efficient campus.' },
               ].map((goal) => (
                 <div key={goal.id} className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="text-4xl font-black text-gray-200">{goal.id}</div>
                    <div>
                       <h4 className="text-lg font-bold text-ssgmce-blue mb-1">{goal.title}</h4>
                       <p className="text-gray-600 text-sm">{goal.desc}</p>
                    </div>
                 </div>
               ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
