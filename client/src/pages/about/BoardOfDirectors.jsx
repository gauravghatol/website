import PageHeader from '../../components/PageHeader';

import { useEffect } from 'react';
const BoardOfDirectors = () => {
  useEffect(() => {
    document.title = 'Board of Directors | SSGMCE';
  }, []);
  const directors = [
    { srNo: 1, name: 'Shri Nilkanth Shivshankar Patil', designation: 'Chairman' },
    { srNo: 2, name: 'Shri Vijaykumar Jaywantrao Deshmukh', designation: 'Vice-President' },
    { srNo: 3, name: 'Shri Vishweshwar Shaligram Trikal', designation: 'Vice-President' },
    { srNo: 4, name: 'Shri Sharad Shankarlal Agrawal', designation: 'Vice-President' },
    { srNo: 5, name: 'Shri Jay Kishor Tank', designation: 'Secretary' },
    { srNo: 6, name: 'Shri Ramkrushna Nilkanth Patil', designation: 'Joint Secretary' },
    { srNo: 7, name: 'Shri Shubham Sanjay Murarka', designation: 'Joint Secretary' },
    { srNo: 8, name: 'Shri Ashok Janardhan Sable', designation: 'Treasurer' },
    { srNo: 9, name: 'Dr. Shri Rameshchandra Champalal Dangra', designation: 'Member' },
    { srNo: 10, name: 'Mohd. Rafique Mohd. Siddique', designation: 'Member' },
    { srNo: 11, name: 'Shri Gopal Sukdevrao Kalore', designation: 'Member' },
    { srNo: 12, name: 'Shri Baban Nanaji Gawande', designation: 'Member' },
    { srNo: 13, name: 'Shri Gokuldas Lunkarnji Chandak', designation: 'Member' },
  ];

  return (
    <div>
      <PageHeader title="Board of Director's" subtitle="Our Leadership" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-16">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-ssgmce-blue uppercase">
              Shri Gajanan Shikshan Sanstha
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Shegaon - 444203, Dist. Buldhana (M.S.)
            </p>
            <p className="text-sm text-gray-600">
              (Registration No. F-569 (Buldhana))
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-red-500">
              <thead>
                <tr className="bg-yellow-200">
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Sr.No.</th>
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Name of the Authorities</th>
                  <th className="border border-red-500 px-4 py-3 text-center text-red-700 font-bold">Designation</th>
                </tr>
              </thead>
              <tbody>
                {directors.map((director) => (
                  <tr key={director.srNo} className="hover:bg-gray-50">
                    <td className="border border-red-500 px-4 py-3 text-center text-blue-700">{director.srNo}</td>
                    <td className="border border-red-500 px-4 py-3 text-blue-700">{director.name}</td>
                    <td className="border border-red-500 px-4 py-3 text-blue-700">{director.designation}</td>
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

export default BoardOfDirectors;
