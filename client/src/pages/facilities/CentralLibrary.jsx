import React from 'react';
import GenericPage from '../../components/GenericPage';

const CentralLibrary = () => {
  return (
    <GenericPage title="Central Library">
      
        <div className="space-y-8">
            <p className="text-lg text-gray-700">A wide repository of knowledge, our Central Library serves as the intellectual soul of the campus.</p>
            
            <section className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ssgmce-blue mb-2">85,000+</div>
                    <div className="text-gray-600">Volumes of Books</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ssgmce-orange mb-2">100+</div>
                    <div className="text-gray-600">National & Int. Journals</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold text-ssgmce-blue mb-2">Digital</div>
                    <div className="text-gray-600">Library Access</div>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-4">Services & Facilities</h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li><strong>OPAC System:</strong> Online Public Access Catalog for easy searching and location of books.</li>
                    <li><strong>Digital Library:</strong> Dedicated workstations with high-speed internet to access E-Resources like IEEE Xplore, ScienceDirect, and Springer.</li>
                    <li><strong>Book Bank Scheme:</strong> Meritorious and needy students can borrow books for the entire semester.</li>
                    <li><strong>Reading Hall:</strong> A spacious, air-cooled reading hall with a seating capacity of 400+ students, open 18 hours a day.</li>
                </ul>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default CentralLibrary;
