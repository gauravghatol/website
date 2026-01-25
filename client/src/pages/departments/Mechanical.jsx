import React from 'react';
import GenericPage from '../../components/GenericPage';
import mechanicalBanner from '../../assets/images/departments/mechanical/Mechnical banner.png';

const Mechanical = () => {
  return (
    <GenericPage title="Mechanical Engineering" backgroundImage={mechanicalBanner}>
      
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">About the Department</h3>
                <p className="text-gray-700 leading-relaxed">
                    The Department of Mechanical Engineering is one of the pillars of SSGMCE, known for its rich legacy and disciplined academic environment. We nurture engineering talent with a strong grounding in design, manufacturing, and thermal sciences. The department boasts highly qualified faculty and a curriculum that balances traditional engineering principles with modern automation and mechatronics.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">State-of-the-Art Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">CAD/CAM/CAE Lab</h4>
                        <p className="text-sm">Features industry-standard software like ANSYS, CATIA, and AutoCAD for design and analysis.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Thermodynamics Lab</h4>
                        <p className="text-sm">Equipped with test rigs for various internal combustion engines and thermal transfer units.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Mechatronics & Automation</h4>
                        <p className="text-sm">Integration of electronics and mechanical systems with PLC and SCADA setups.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Manufacturing Unit</h4>
                        <p className="text-sm">Extensive facility including CNC machines, lathes, milling machines, and welding stations.</p>
                    </div>
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default Mechanical;
