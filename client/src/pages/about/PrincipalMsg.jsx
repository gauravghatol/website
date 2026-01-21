import PageHeader from '/src/components/PageHeader';

const PrincipalMsg = () => {
  return (
    <div>
      <PageHeader title="Principal Speaks" subtitle="From the Desk of the Principal" />

      {/* Principal Speaks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 text-center">
                 <div className="rounded-lg overflow-hidden shadow-lg mb-4 border-4 border-gray-100">
                    <img src="https://www.ssgmce.ac.in/images/principal.jpg" alt="Principal" className="w-full h-auto" onError={(e) => e.target.src='https://via.placeholder.com/400x500?text=Principal+Photo'}/>
                 </div>
                 <h3 className="text-xl font-bold text-ssgmce-blue">Dr. S. B. Somani</h3>
                 <p className="text-gray-500 font-semibold">Principal, SSGMCE</p>
              </div>
              <div className="md:w-2/3">
                 <h2 className="text-3xl font-bold text-ssgmce-blue mb-6 relative">
                    Principal Speaks
                    <span className="block h-1 w-20 bg-ssgmce-orange mt-2"></span>
                 </h2>
                 <div className="prose max-w-none text-gray-700 leading-relaxed text-justify space-y-4">
                    <p>
                      <strong>Dear Friends,</strong>
                    </p>
                    <p>
                       On behalf of the faculty, staff and our fellow students, I am pleased to welcome you to Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), Shegaon. When you made SSGMCE as your College of choice, you took the first step in ensuring your place among the illustrious sons and daughters of this great institution.
                    </p>
                    <p>
                       SSGMCE, one of the leading technical institutes in Vidarbha region, always strives for quality education since its inception. In the last four decades it has successfully nurtured the scientific temper, Professional Competence and Social Commitment among the budding technocrats to find solutions to the problems and serve the global society.
                    </p>
                    <p>
                       We live in challenging times... As a Principal of SSGMCE, I am privileged to work with a dedicated and talented group of educators who are committed to helping you to propel on the career ascent... Apart from technical competence, we inculcate the moral and ethical values among the students so that they become good human beings and responsible citizens of the global society.
                    </p>
                    <p>
                        I take this opportunity to extend my heartiest wishes to all students to achieve success in their future endeavours.
                    </p>
                    <p className="font-semibold text-ssgmce-blue mt-4">
                       - Dr. S. B. Somani
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMsg;
