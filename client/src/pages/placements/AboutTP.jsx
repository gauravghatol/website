import React from 'react';
import GenericPage from '../../components/GenericPage';

const AboutTP = () => {
  return (
    <GenericPage title="About Training & Placement Cell">
      
        <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
                The Training and Placement (T&P) Cell is the backbone of career development at SSGMCE. It acts as a vital link between the academic environment and the corporate world. The cell is dedicated to providing comprehensive training and placement opportunities to eligible students.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 shadow-md rounded-lg border-t-4 border-green-500">
                    <h4 className="text-xl font-bold mb-2">Training</h4>
                    <p className="text-gray-600 text-sm">Conducts aptitude tests, soft skills workshops, and technical training sessions from the first year itself.</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg border-t-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-2">Internships</h4>
                    <p className="text-gray-600 text-sm">Facilitates summer and winter internships to provide real-world industry exposure.</p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-lg border-t-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-2">Placements</h4>
                    <p className="text-gray-600 text-sm">Organizes campus recruitment drives with top MNCs and core companies.</p>
                </div>
            </div>
        </div>
        
    </GenericPage>
  );
};

export default AboutTP;
