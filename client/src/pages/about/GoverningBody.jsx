import PageHeader from '../../components/PageHeader';

import { useEffect } from 'react';
const GoverningBody = () => {
  useEffect(() => {
    document.title = 'Governing Body | SSGMCE';
  }, []);
  const governingBodyMembers = [
    { srNo: 1, name: 'Shri Nilkanth Shivshankar Patil', category: 'Chairman of Shri Gajanan Shikshan Sanstha', capacity: 'Chairman (Ex-officio)' },
    { srNo: 2, name: 'Shri Kishor Trikamdas Tank', category: 'Shri Gajanan Shikshan Sanstha', capacity: 'Member' },
    { srNo: 3, name: 'Shri Ashok Trimbakrao Deshmukh', category: 'Shri Gajanan Shikshan Sanstha', capacity: 'Member' },
    { srNo: 4, name: 'Shri Jay Kishor Tank', category: 'Shri Gajanan Shikshan Sanstha', capacity: 'Member' },
    { srNo: 5, name: 'Shri Ramkrushna Nilkanth Patil', category: 'Shri Gajanan Shikshan Sanstha', capacity: 'Member' },
    { srNo: 6, name: 'Prof. Dr. A. M. Mahalle', category: 'Nominee of Sant Gadge Baba Amravati University, Amravati', capacity: 'Member' },
    { srNo: 7, name: 'Dr. Vinod Mohitkar', category: 'Director of Technical Education (Nominee of the State Govt.)', capacity: 'Member (Ex-Officio)' },
    { srNo: 8, name: 'Shri Vikas Chandra Rastogi', category: 'Nominated by the State Government', capacity: 'Member' },
    { srNo: 9, name: 'Dr. Sunil Bhikamchand Somani', category: 'Principal / Head of the Institute', capacity: 'Member Secretary' },
    { srNo: 10, name: 'Dr. Ram Shankarrao Dhekekar', category: 'Faculty member nominated from regular staff at the level of Professor', capacity: 'Member' },
    { srNo: 11, name: 'Dr. Anjali Uday Jawadekar', category: 'Faculty member nominated from regular staff at the level of Associate Professor', capacity: 'Member' },
  ];

  return (
    <div>
      <PageHeader title="Governing Body" subtitle="Our Leadership" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-ssgmce-blue uppercase">
              Shri Sant Gajanan Maharaj College of Engineering, Shegaon
            </h3>
            <p className="text-base font-medium text-gray-700 mt-2">Constituted By</p>
            <h3 className="text-lg font-semibold text-ssgmce-blue uppercase mt-1">
              All India Council for Technical Education, New Delhi
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-red-500">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Sr.No.</th>
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Name of the persons on the Body</th>
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Category</th>
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Capacity on Body</th>
                </tr>
              </thead>
              <tbody>
                {governingBodyMembers.map((member) => (
                  <tr key={member.srNo} className="hover:bg-gray-50">
                    <td className="border border-red-500 px-4 py-3 text-center text-blue-700">{member.srNo}</td>
                    <td className="border border-red-500 px-4 py-3 text-blue-700">{member.name}</td>
                    <td className="border border-red-500 px-4 py-3 text-blue-700">{member.category}</td>
                    <td className="border border-red-500 px-4 py-3 text-blue-700">{member.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoverningBody;
