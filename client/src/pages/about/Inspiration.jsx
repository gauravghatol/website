import PageHeader from "/src/components/PageHeader";
import { FaHeart, FaPray, FaHandsHelping, FaStar } from "react-icons/fa";
import chairmanImg from "/src/assets/images/about/chaiman_c.png";

const Inspiration = () => {
  return (
    <div>
      <PageHeader title="Our Inspiration" subtitle="The Guiding Light" />

      {/* Our Inspiration */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-ssgmce-blue to-ssgmce-orange rounded-2xl blur opacity-25"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={chairmanImg}
                    alt="Shri Sant Gajanan Maharaj"
                    className="w-64 h-80 md:w-80 md:h-96 object-cover object-top"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300?text=Shri+Sant+Gajanan+Maharaj")
                    }
                  />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-ssgmce-blue mt-8 mb-4">
                Shri. Shivshankarbhau Patil
              </h3>
              <div className="inline-block bg-gradient-to-r from-ssgmce-orange to-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold italic shadow-lg">
                "गण गण गणात बोते"
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border-t-4 border-ssgmce-orange">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6 text-center">
                The Divine Source of Our Values
                <div className="w-24 h-1 bg-ssgmce-orange mx-auto mt-3 rounded-full"></div>
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-4">
                <p className="text-lg">
                  The college takes its inspiration from the life and teachings
                  of{" "}
                  <strong className="text-ssgmce-blue">
                    Shri Sant Gajanan Maharaj of Shegaon
                  </strong>
                  , a revered saint who lived in Shegaon during the late 19th
                  and early 20th centuries. His divine presence continues to
                  guide millions of devotees and has been the spiritual
                  foundation of our institution since its establishment.
                </p>
                <p>
                  Shri Sant Gajanan Maharaj appeared in Shegaon on{" "}
                  <strong>23rd February 1878 (Magh Shukla Saptami)</strong>.
                  Though his origins remain a divine mystery, his life
                  exemplified the highest ideals of spirituality, compassion,
                  and service to humanity. He lived a simple life, yet his
                  teachings and miracles touched countless lives, transcending
                  barriers of caste, creed, and religion.
                </p>
                <p>
                  His life is a beacon of hope, leading people towards spiritual
                  enlightenment and selfless service. The saint's philosophy
                  centered around the concepts of{" "}
                  <strong>
                    universal brotherhood, equality, and service to the poor and
                    needy
                  </strong>
                  . He taught that true spirituality lies not in rituals alone,
                  but in serving humanity with love and compassion.
                </p>
                <p>
                  The ideals of service, humility, and dedication to the welfare
                  of humanity guide every activity at SSGMCE. The Shri Gajanan
                  Maharaj Sansthan, Shegaon, which manages this institution,
                  follows the saint's teachings by running numerous educational,
                  medical, and social welfare activities, embodying the motto{" "}
                  <strong>"Sarve Bhavantu Sukhinah"</strong> (May all be happy).
                </p>
                <p>
                  Our institution strives to blend modern technical education
                  with the timeless spiritual values taught by Shri Sant Gajanan
                  Maharaj. We believe that true education encompasses not just
                  intellectual growth but also moral and spiritual development,
                  creating engineers and managers who are not only
                  professionally competent but also socially responsible and
                  spiritually grounded.
                </p>
              </div>
            </div>

            {/* Core Teachings */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-ssgmce-blue">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ssgmce-blue rounded-full flex items-center justify-center mr-4">
                    <FaHeart className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-ssgmce-blue">
                    Service to Humanity
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Selfless service (Seva) is the highest form of worship.
                  Helping those in need without expecting anything in return is
                  the true path to spiritual growth.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg border-l-4 border-ssgmce-orange">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ssgmce-orange rounded-full flex items-center justify-center mr-4">
                    <FaPray className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-ssgmce-blue">
                    Faith & Devotion
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  True devotion comes from a pure heart. Faith in the divine and
                  dedication to righteous living leads to inner peace and
                  enlightenment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg border-l-4 border-ssgmce-orange">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ssgmce-orange rounded-full flex items-center justify-center mr-4">
                    <FaHandsHelping className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-ssgmce-blue">
                    Universal Brotherhood
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  All human beings are equal in the eyes of God. Caste, creed,
                  and religion are man-made barriers; true spirituality
                  transcends all divisions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-ssgmce-blue">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ssgmce-blue rounded-full flex items-center justify-center mr-4">
                    <FaStar className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-ssgmce-blue">
                    Simplicity & Humility
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Living a simple life, free from ego and pride, brings true
                  happiness. Humility is the foundation of spiritual and
                  personal growth.
                </p>
              </div>
            </div>

            {/* Samadhi Information */}
            <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Samadhi Temple, Shegaon
                </h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Shri Sant Gajanan Maharaj attained Samadhi on{" "}
                  <strong>
                    Shravan Shukla Dasami, Shake 1832 (8th September 1910)
                  </strong>
                  . His Samadhi temple in Shegaon has become one of the most
                  revered pilgrimage sites in Maharashtra, attracting millions
                  of devotees annually who seek his blessings and experience his
                  divine grace.
                </p>
                <p className="text-blue-100 italic">
                  "The Sansthan continues his legacy through various
                  educational, medical, and social initiatives, touching
                  millions of lives every year."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
