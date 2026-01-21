import React from 'react';
import GenericPage from '../../components/GenericPage';

const IT = () => {
  return (
    <GenericPage title="Information Technology">
      
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">About the Department</h3>
                <p className="text-gray-700 leading-relaxed">
                    The Department of Information Technology focuses on the practical application of computing technologies to solve real-world problems. We aim to produce IT professionals who are adept at software development, network management, and information security.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Core Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {["Web Development Lab", "Mobile Application Development", "Cloud Computing Lab", "Network Security Lab"].map((lab, i) => (
                         <div key={i} className="p-4 bg-white border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-semibold text-gray-800">{lab}</h4>
                         </div>
                    ))}
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default IT;
