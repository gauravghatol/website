import PageHeader from '../components/PageHeader';
import { FaCheckCircle, FaFileAlt, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Admissions = () => {
  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Admissions 2024-25" 
        subtitle="Join the SSGMCE Family" 
      />

      {/* Important Notice */}
      <section className="bg-gradient-to-r from-ssgmce-orange to-red-600 py-10 text-white sm:py-12">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <div className="text-center">
            <FaGraduationCap className="mx-auto mb-4 text-5xl sm:text-6xl" />
            <h2 className="mb-3 text-[clamp(1.5rem,4.2vw,1.9rem)] font-bold">Admissions Open for Academic Year 2024-25</h2>
            <p className="mb-6 text-[clamp(1rem,2.1vw,1.25rem)]">Apply now for B.E. and M.E. programs</p>
            <button className="bg-white text-ssgmce-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Apply Online Now
            </button>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Programs Offered</h2>
          
          {/* UG Programs */}
          <div className="mb-12">
            <h3 className="mb-6 inline-block border-b-4 border-ssgmce-orange pb-2 text-[clamp(1.2rem,2.8vw,1.5rem)] font-bold text-ssgmce-dark-blue">
              Undergraduate Programs (B.E.)
            </h3>
            <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                { name: 'Computer Science & Engineering', duration: '4 Years', intake: '120' },
                { name: 'Mechanical Engineering', duration: '4 Years', intake: '60' },
                { name: 'Civil Engineering', duration: '4 Years', intake: '60' },
                { name: 'Electrical Engineering', duration: '4 Years', intake: '60' },
                { name: 'Electronics & Telecommunication', duration: '4 Years', intake: '60' },
                { name: 'Information Technology', duration: '4 Years', intake: '60' },
              ].map((program, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-ssgmce-orange hover:shadow-lg sm:p-6">
                  <h4 className="mb-3 text-[clamp(1rem,2.1vw,1.125rem)] font-bold text-ssgmce-blue">{program.name}</h4>
                  <div className="flex flex-col gap-1.5 text-[clamp(0.82rem,1.4vw,0.875rem)] text-gray-600 sm:flex-row sm:justify-between">
                    <span><FaCalendarAlt className="inline mr-2 text-ssgmce-orange" />Duration: {program.duration}</span>
                    <span><FaGraduationCap className="inline mr-2 text-ssgmce-orange" />Intake: {program.intake}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PG Programs */}
          <div>
            <h3 className="mb-6 inline-block border-b-4 border-ssgmce-orange pb-2 text-[clamp(1.2rem,2.8vw,1.5rem)] font-bold text-ssgmce-dark-blue">
              Postgraduate Programs (M.E.)
            </h3>
            <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
              {[
                { name: 'Computer Science & Engineering', duration: '2 Years', intake: '18' },
                { name: 'Heat Power Engineering', duration: '2 Years', intake: '18' },
                { name: 'Structural Engineering', duration: '2 Years', intake: '18' },
              ].map((program, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-ssgmce-orange hover:shadow-lg sm:p-6">
                  <h4 className="mb-3 text-[clamp(1rem,2.1vw,1.125rem)] font-bold text-ssgmce-blue">{program.name}</h4>
                  <div className="flex flex-col gap-1.5 text-[clamp(0.82rem,1.4vw,0.875rem)] text-gray-600 sm:flex-row sm:justify-between">
                    <span><FaCalendarAlt className="inline mr-2 text-ssgmce-orange" />Duration: {program.duration}</span>
                    <span><FaGraduationCap className="inline mr-2 text-ssgmce-orange" />Intake: {program.intake}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Eligibility Criteria</h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-lg border-t-4 border-ssgmce-blue bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-4 text-[clamp(1.15rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">For B.E. Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Passed 12th/HSC with Physics, Mathematics, and Chemistry/Biology/Biotechnology</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Minimum 45% marks (40% for reserved categories)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Valid JEE Main / MHT-CET score</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg border-t-4 border-ssgmce-orange bg-white p-6 shadow-lg sm:p-8">
              <h3 className="mb-4 text-[clamp(1.15rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">For M.E. Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Bachelor's degree in relevant engineering branch</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Minimum 50% marks (45% for reserved categories)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Valid GATE score (Preferred but not mandatory)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Admission Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {[
                { step: '1', title: 'Fill Online Application', desc: 'Complete the online application form with accurate details' },
                { step: '2', title: 'Submit Documents', desc: 'Upload required documents and pay application fee' },
                { step: '3', title: 'Merit List', desc: 'Check the merit list published on our website' },
                { step: '4', title: 'Document Verification', desc: 'Attend document verification on scheduled date' },
                { step: '5', title: 'Fee Payment', desc: 'Pay admission fee to confirm your seat' },
              ].map((item, index) => (
                <div key={index} className="mb-8 flex gap-4 last:mb-0 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-ssgmce-blue to-ssgmce-dark-blue text-xl font-bold text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg border-l-4 border-ssgmce-orange bg-white p-5 shadow-lg sm:p-6">
                    <h4 className="mb-2 text-[clamp(1rem,2.2vw,1.25rem)] font-bold text-ssgmce-blue">{item.title}</h4>
                    <p className="text-[clamp(0.9rem,1.6vw,1rem)] text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="bg-gray-50 py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 sm:px-5 lg:px-6">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,4vw,2.25rem)] font-bold text-ssgmce-blue sm:mb-12">Documents Required</h2>
          <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg sm:p-8">
            <ul className="grid gap-3.5 md:grid-cols-2 md:gap-4">
              {[
                '10th Mark Sheet',
                '12th Mark Sheet',
                'Leaving Certificate',
                'Nationality Certificate',
                'Caste Certificate (if applicable)',
                'Domicile Certificate',
                'Aadhar Card',
                'Passport Size Photographs',
                'JEE/CET Score Card',
                'Migration Certificate',
              ].map((doc, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FaFileAlt className="text-ssgmce-orange flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue py-12 text-white sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[120rem] px-4 text-center sm:px-5 lg:px-6">
          <h2 className="mb-6 text-[clamp(1.6rem,4vw,2.25rem)] font-bold">Need Help with Admissions?</h2>
          <p className="mb-8 text-[clamp(1rem,2.1vw,1.25rem)] text-ssgmce-light-blue">Contact our admission office for any queries</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="font-bold text-lg">Phone</p>
              <p className="text-ssgmce-light-blue">+91-7265-252274</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
              <p className="font-bold text-lg">Email</p>
              <p className="text-ssgmce-light-blue">admission@ssgmce.ac.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
