import React from 'react';
import GenericPage from '../../components/GenericPage';

const Electrical = () => {
  return (
    <GenericPage title="Electrical Engineering (Electronics & Power)">
      
        <div className="space-y-8">
            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">About the Department</h3>
                <p className="text-gray-700 leading-relaxed">
                    The Department of Electrical Engineering (Electronics & Power) was established to produce competent electrical engineers with a strong foundation in power systems, control systems, and electronics. The department keeps pace with the latest developments in renewable energy, smart grids, and industrial automation.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Laboratories</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {["Power Systems Lab", "Electrical Machines Lab", "Control Systems Lab", "Switchgear & Protection Lab", "Power Electronics Lab", "High Voltage Engineering Lab"].map((lab, i) => (
                        <div key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded shadow-sm">
                            <span className="text-ssgmce-orange font-bold mr-2">⚡</span> {lab}
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default Electrical;
