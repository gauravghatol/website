import React from 'react';
import GenericPage from '../../components/GenericPage';

const Recruiters = () => {
  return (
    <GenericPage title="Major Recruiters">
      
        <div>
            <p className="mb-6 text-gray-700">We are proud to host industry leaders who regularly visit our campus for recruitment.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    "TCS", "Infosys", "Wipro", "Cognizant",
                    "Capgemini", "Tech Mahindra", "Accenture", "Jio Platforms",
                    "Persistent", "HCL Tech", "Adani Group", "KPIT"
                ].map((company, i) => (
                    <div key={i} className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all">
                        <span className="font-bold text-gray-700 text-lg">{company}</span>
                    </div>
                ))}
            </div>
        </div>
        
    </GenericPage>
  );
};

export default Recruiters;
