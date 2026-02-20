import PageHeader from '../../components/PageHeader';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useEffect } from 'react';
import chairmanImg from '/src/assets/images/about/chairman_c.jpeg';

const Inspiration = () => {
  useEffect(() => {
    document.title = 'Our Inspiration | SSGMCE';
  }, []);
  return (
    <div>
      <PageHeader title="Our Inspiration" subtitle="The Visionary Behind SSGMCE" />

      {/* Founder Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-1 items-start">
            {/* Founder Photo & Info */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 max-w-[280px] mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-gray-100 aspect-[3/4] scale-110">
                  <img
                    src={chairmanImg}
                    alt="Late Shri. Shivshankarbhau Patil"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/320x400?text=Shri+Shivshankarbhau+Patil'}
                  />
                </div>
                <div className="text-center mt-10">
                  <h3 className="text-2xl font-bold text-ssgmce-blue">Late Shri. Shivshankarbhau Patil</h3>
                  <p className="text-ssgmce-orange font-semibold mt-1">Popularly known as Bhausaheb</p>
                  <p className="text-gray-500 text-sm mt-1">Founder & Visionary</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 lg:-ml-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-ssgmce-orange mr-3"></div>
                <h2 className="text-3xl font-bold text-ssgmce-blue">Our Inspiration</h2>
              </div>

              <FaQuoteLeft className="text-4xl text-ssgmce-orange/20 mb-4" />

              <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-5">
                <p>
                  Shri Sant Gajanan Maharaj College of Engineering, Shegaon was established in 1983 by the well-known visionary <strong className="text-ssgmce-blue">Late Shri. Shivshankarbhau Patil</strong> (Popularly known as Bhausaheb) with the aim of imparting technical and management education in rural area in Vidarbha Region.
                </p>
                <p>
                  Over a period of four decades, more than <strong>10,000 students</strong> graduated from the Institution with Bachelor and Masters Degrees. The campus is spread across <strong>82 acres of lush-green campus</strong> having state-of-the-art infrastructure and facilities. Today it stands as one of the best engineering colleges in India imparting technical and management education of the highest standard.
                </p>
                <p>
                  Under his visionary leadership, the college grew leaps and bounds and received many accolades in the last four decades.
                </p>
                <p>
                  Late Shri. Shivshankarbhau Patil was instrumental in creating an ambience for nurturing innovation, creativity and excellence along with strong ethical values amongst students. This transformed the lives of a number of students who have been serving the global community worldwide.
                </p>
                <p>
                  The students left a mark nationally or globally wherever they went, by exhibiting their sound professional knowledge, unimpeachable character, sense of discipline and commitment.
                </p>

                <FaQuoteRight className="text-4xl text-ssgmce-orange/20 mb-4" />

                <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange mt-6">
                  <p className="text-gray-800 font-medium italic">
                    SSGMCE, Shegaon will always remember his valuable contribution in the establishment of the educational institute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
