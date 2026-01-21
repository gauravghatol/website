import PageHeader from '/src/components/PageHeader';

const Inspiration = () => {
  return (
    <div>
      <PageHeader title="Our Inspiration" subtitle="The Guiding Light" />
      
      {/* Our Inspiration */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">Our Inspiration</h2>
            <div className="inline-block p-2 rounded-full border-4 border-ssgmce-orange mb-6">
               <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-gray-200">
                  <img src="https://www.ssgmce.ac.in/images/gajanan_maharaj.jpg" alt="Shri Sant Gajanan Maharaj" className="w-full h-full object-cover" onError={(e) => e.target.src='https://via.placeholder.com/200?text=Shri+Sant+Gajanan+Maharaj'}/>
               </div>
            </div>
            <h3 className="text-2xl font-bold text-ssgmce-orange mb-4">Shri Sant Gajanan Maharaj</h3>
            <p className="text-gray-700 leading-relaxed text-lg italic">"Gan Gan Ganaat Bote"</p>
            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
              The college takes its inspiration from the life and teachings of Shri Sant Gajanan Maharaj of Shegaon. 
              His life is a beacon of hope, leading people towards spiritual enlightenment and selfless service.
              The ideals of service, humility, and dedication to the welfare of humanity guide every activity at SSGMCE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
