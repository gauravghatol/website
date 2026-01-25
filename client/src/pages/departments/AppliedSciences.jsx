import React from 'react';
import GenericPage from '../../components/GenericPage';
import ashBanner from '../../assets/images/departments/ash/ASH banner.png';

const AppliedSciences = () => {
  return (
    <GenericPage title="Applied Sciences and Humanities" backgroundImage={ashBanner}>
      
        <div className="space-y-8">
            <section>
                <p className="text-gray-700 leading-relaxed">
                    The Department of Applied Sciences and Humanities plays a pivotal role in laying the foundation for engineering education. It handles the First Year Engineering curriculum, focusing on basic sciences (Physics, Chemistry, Mathematics) and Humanities (Communication Skills, Ethics).
                </p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-bold text-gray-800">Engineering Physics Lab</h4>
                        <p className="text-sm text-gray-600">Equipped with setups for optics, semiconductor physics, and modern physics experiments.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-bold text-gray-800">Engineering Chemistry Lab</h4>
                        <p className="text-sm text-gray-600">Facilities for water analysis, polymer synthesis, and chemical titrations.</p>
                    </div>
                     <div className="p-4 bg-gray-50 rounded">
                        <h4 className="font-bold text-gray-800">Language Lab</h4>
                        <p className="text-sm text-gray-600">Digital lab with audio-visual aids to enhance communication and soft skills.</p>
                    </div>
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default AppliedSciences;
