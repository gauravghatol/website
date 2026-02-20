import PageHeader from '../../components/PageHeader';

import { useEffect } from 'react';
const Committees = () => {
  useEffect(() => {
    document.title = 'Committees | SSGMCE';
  }, []);
  return (
    <div>
       <PageHeader title="Committees" subtitle="Institutional Committees" />

      {/* Committees */}
      <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-16">
             <div className="mb-12">
               <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">Various Committees By SGBAU</h2>
               <p className="mb-4 text-gray-600">Committees formed as per the directives of Sant Gadge Baba Amravati University.</p>
               <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Pre-incubation Centre</li>
                  <li>Local Managing Committee</li>
                  <li>College Development Committee (CDC)</li>
                  <li>Student Grievance Redressal Committee</li>
                  <li>Grievance Redressal Committee – University</li>
                  <li>Complaint Committee</li>
               </ul>
             </div>

             <div>
               <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">Various Committees By AICTE</h2>
               <p className="mb-4 text-gray-600">Committees mandatory as per All India Council for Technical Education norms.</p>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Anti-Ragging Committee', 'Grievance Redressal Committee', 'Internal Committee for SC/ST', 'Internal Complaint Committee (ICC)'].map((item, i) => (
                      <div key={i} className="bg-white p-4 rounded shadow border-l-4 border-ssgmce-blue flex items-center">
                         <div className="h-2 w-2 bg-ssgmce-orange rounded-full mr-3"></div>
                         <span className="font-medium text-gray-800">{item}</span>
                      </div>
                  ))}
               </div>
             </div>
         </div>
      </section>
    </div>
  );
};

export default Committees;
