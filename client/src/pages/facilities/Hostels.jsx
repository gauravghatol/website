import React from 'react';
import GenericPage from '../../components/GenericPage';

const Hostels = () => {
  return (
    <GenericPage title="Hostels & Accommodation">
      
        <div className="space-y-8">
            <section>
                <p className="text-gray-700 leading-relaxed text-lg">
                    SSGMCE provides a "Home Away from Home" experience. Our hostels are designed to foster a sense of community, discipline, and security, situated in a lush green, pollution-free environment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ssgmce-blue">
                        <h4 className="text-xl font-bold mb-2">Boys Hostel</h4>
                        <p className="text-gray-600">Capacity of approx. 600 students with spacious rooms and common areas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-ssgmce-orange">
                         <h4 className="text-xl font-bold mb-2">Girls Hostel</h4>
                        <p className="text-gray-600">Capacity of approx. 600 students with dedicated security and amenities.</p>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4">Amenities</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">📶</div>
                        <span>High-speed Wi-Fi Connectivity</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">⚡</div>
                        <span>24/7 Power Backup</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">💧</div>
                        <span>RO Purified Drinking Water</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">🥗</div>
                        <span>Hygienic Mess & Canteen</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">💪</div>
                        <span>Gymnasium & Sports Facilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-ssgmce-blue">🏥</div>
                        <span>Medical Dispensary (24/7)</span>
                    </div>
                </div>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default Hostels;
