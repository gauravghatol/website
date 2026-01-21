import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import useFetch from '../hooks/useFetch';

const Faculty = () => {
  const { data: facultyData, loading } = useFetch('/api/faculty');
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Computer Science', 'Mechanical', 'Civil', 'Electrical', 'ENTC', 'IT'];

  const sampleFaculty = [
    {
      _id: '1',
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head',
      department: 'Computer Science',
      qualification: 'Ph.D., M.Tech',
      specialization: 'Machine Learning, Data Science',
      experience: '20 years',
      email: 'rajesh.kumar@ssgmce.ac.in',
    },
    {
      _id: '2',
      name: 'Dr. Priya Sharma',
      designation: 'Associate Professor',
      department: 'Computer Science',
      qualification: 'Ph.D., M.E.',
      specialization: 'Cloud Computing, IoT',
      experience: '15 years',
      email: 'priya.sharma@ssgmce.ac.in',
    },
    {
      _id: '3',
      name: 'Prof. Anil Deshmukh',
      designation: 'Professor & Head',
      department: 'Mechanical',
      qualification: 'Ph.D., M.Tech',
      specialization: 'Thermal Engineering, CFD',
      experience: '22 years',
      email: 'anil.deshmukh@ssgmce.ac.in',
    },
    {
      _id: '4',
      name: 'Dr. Sunita Patil',
      designation: 'Associate Professor',
      department: 'Civil',
      qualification: 'Ph.D., M.E.',
      specialization: 'Structural Engineering',
      experience: '18 years',
      email: 'sunita.patil@ssgmce.ac.in',
    },
  ];

  const displayFaculty = facultyData || sampleFaculty;

  const filteredFaculty = selectedDept === 'All' 
    ? displayFaculty 
    : displayFaculty.filter(f => f.department === selectedDept);

  return (
    <div className="animation-fade-in">
      <PageHeader 
        title="Our Faculty" 
        subtitle="Experienced and Dedicated Teaching Staff" 
      />

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our faculty members are highly qualified, experienced, and dedicated to providing 
              quality education. They are actively involved in research, publications, and industry 
              collaborations to stay updated with the latest technological advancements.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedDept === dept
                    ? 'bg-ssgmce-blue text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty List */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ssgmce-blue"></div>
              <p className="mt-4 text-gray-600">Loading faculty data...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFaculty.map((faculty) => (
                <div 
                  key={faculty._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Faculty Image Placeholder */}
                  <div className="bg-gradient-to-br from-ssgmce-blue to-ssgmce-dark-blue h-48 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-white text-5xl font-bold">
                      {faculty.name.charAt(0)}
                    </div>
                  </div>

                  {/* Faculty Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ssgmce-blue mb-1">{faculty.name}</h3>
                    <p className="text-ssgmce-orange font-semibold mb-3">{faculty.designation}</p>
                    
                    <div className="space-y-2 text-sm text-gray-700 mb-4">
                      <p><span className="font-semibold">Department:</span> {faculty.department}</p>
                      <p><span className="font-semibold">Qualification:</span> {faculty.qualification}</p>
                      <p><span className="font-semibold">Specialization:</span> {faculty.specialization}</p>
                      <p><span className="font-semibold">Experience:</span> {faculty.experience}</p>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600 break-all">
                        📧 {faculty.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredFaculty.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No faculty members found for this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-ssgmce-blue mb-12">Faculty Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '150+', label: 'Qualified Faculty' },
              { number: '80%', label: 'Ph.D. Holders' },
              { number: '500+', label: 'Research Papers' },
              { number: '25+', label: 'Patents Filed' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-ssgmce-orange mb-2">{stat.number}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
