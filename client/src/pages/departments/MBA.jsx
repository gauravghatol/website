import React from 'react';
import GenericPage from '../../components/GenericPage';
import mbaBanner from '../../assets/images/departments/mba/MBA banner.png';

const MBA = () => {
  return (
    <GenericPage title="Master of Business Administration (MBA)" backgroundImage={mbaBanner}>
      
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">About the Department</h3>
                <p className="text-gray-700 leading-relaxed">
                    The Department of Management Studies (MBA) at SSGMCE aims to nurture professional managers who are not only business-savvy but also socially responsible. The program focuses on holistic development through case studies, industrial visits, and management games.
                </p>
            </section>
            
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Specializations Offered</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Financial Management</li>
                    <li>Marketing Management</li>
                    <li>Human Resource Management</li>
                    <li>Business Analytics</li>
                </ul>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Regular guest lectures by industry experts.</li>
                    <li>Entrepreneurship Development Cell activities.</li>
                    <li>Summer Internship Program (SIP).</li>
                    <li>Excellent placement support.</li>
                </ul>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default MBA;
