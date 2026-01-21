import PageHeader from '/src/components/PageHeader';

const GoverningBody = () => {
  return (
    <div>
       <PageHeader title="Governing Body & Directors" subtitle="Our Leadership" />

      {/* Governing Body & Directors */}
      <section className="py-16 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
               {/* Governing Body */}
               <div>
                  <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">Governing Body</h2>
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left border border-gray-200">
                        <thead className="bg-ssgmce-blue text-white uppercase">
                           <tr>
                              <th className="px-4 py-3">Name</th>
                              <th className="px-4 py-3">Designation</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Shri. Shivshankar S. Patil</td><td className="px-4 py-3">Chairman</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Shri. Shrikant S. Patil</td><td className="px-4 py-3">Member</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Regional Officer, AICTE</td><td className="px-4 py-3">Ex-Officio Member</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Director, DTE Mumbai</td><td className="px-4 py-3">Ex-Officio Member</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Dr. S. B. Somani</td><td className="px-4 py-3">Member Secretary</td></tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               
               {/* Board of Directors */}
               <div>
                  <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">Board of Directors</h2>
                   <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <p className="text-sm text-yellow-800">
                         The Board of Directors of Shri Gajanan Shikshan Sanstha plays a pivotal role in policy making.
                      </p>
                   </div>
                   <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left border border-gray-200">
                        <thead className="bg-ssgmce-orange text-white uppercase">
                           <tr>
                              <th className="px-4 py-3">Name</th>
                              <th className="px-4 py-3">Role</th>
                           </tr>
                        </thead>
                         <tbody className="divide-y divide-gray-100">
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Shri. Shivshankar S. Patil</td><td className="px-4 py-3">President</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Shri. N. S. Patil</td><td className="px-4 py-3">Vice-President</td></tr>
                           <tr className="hover:bg-gray-50"><td className="px-4 py-3 font-medium">Shri. N. R. Patil</td><td className="px-4 py-3">Secretary</td></tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default GoverningBody;
