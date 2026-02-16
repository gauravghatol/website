import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import AdmissionsSidebar from '../../components/AdmissionsSidebar';

const DocumentsRequired = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Documents Required | SSGMCE Admissions';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Documents Required for Admission"
        subtitle="Complete Document Checklist"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Documents for All Candidates */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">Documents Required for All Candidates</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">Document Name</th>
                      <th className="border border-gray-300 px-6 py-3 text-center">Original Required</th>
                      <th className="border border-gray-300 px-6 py-3 text-center">Photocopies</th>
                      <th className="border border-gray-300 px-6 py-3 text-left">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { doc: 'MHT-CET / JEE Main Score Card', original: 'Yes', copies: '2', remarks: 'Valid scorecard with percentile' },
                      { doc: 'SSC (10th) Marksheet & Passing Certificate', original: 'Yes', copies: '2', remarks: 'For age and date of birth proof' },
                      { doc: 'HSC (12th) Marksheet', original: 'Yes', copies: '2', remarks: 'Must show Physics, Chemistry, Maths' },
                      { doc: 'Leaving/Transfer Certificate', original: 'Yes', copies: '1', remarks: 'From last attended institution' },
                      { doc: 'Migration Certificate', original: 'Yes', copies: '1', remarks: 'Only for students from other states' },
                      { doc: 'CAP Seat Acceptance Form', original: 'Yes', copies: '1', remarks: 'Downloaded from CET Cell portal' },
                      { doc: 'Receipt from Facilitation Center', original: 'Yes', copies: '1', remarks: 'Document verification receipt' },
                      { doc: 'Indian Nationality Certificate', original: 'Yes', copies: '1', remarks: 'As per CET format' },
                      { doc: 'Domicile Certificate / Birth Certificate', original: 'Yes', copies: '2', remarks: 'Maharashtra domicile for state quota' },
                      { doc: 'Aadhar Card', original: 'No', copies: '2', remarks: 'Mandatory for all students' },
                      { doc: 'Passport Size Photos', original: 'N/A', copies: '5', remarks: 'Recent colored photographs' },
                      { doc: 'Bank Account Passbook Front Page', original: 'No', copies: '1', remarks: 'For scholarship  disbursement' }
                    ].map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? '' : 'bg-gray-50'} hover:bg-blue-50`}>
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">{row.doc}</td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.original === 'Yes' ? 'bg-green-100 text-green-700' :
                            row.original === 'No' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                            }`}>{row.original}</span>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">{row.copies}</td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">{row.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Category-Specific Documents */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">Additional Documents for Reserved Categories</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-orange to-orange-600 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">Category</th>
                      <th className="border border-gray-300 px-6 py-3 text-left">Additional Documents Required</th>
                      <th className="border border-gray-300 px-6 py-3 text-left">Validity / Important Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: 'SC/ST/VJ/DT/NT', docs: 'Caste Certificate, Caste Validity Certificate', validity: 'Issued by competent authority' },
                      { cat: 'OBC/SBC', docs: 'Caste Certificate, Caste Validity, Non-Creamy Layer Certificate', validity: 'NCL valid up to March 31, 2026' },
                      { cat: 'EWS', docs: 'EWS Certificate, Income Certificate', validity: 'Income below ₹8 lakhs, valid up to March 31, 2026' },
                      { cat: 'EBC', docs: 'Income Certificate (from Tahsildar)', validity: 'Income below ₹8 lakhs, valid up to March 31, 2026' },
                      { cat: 'TFWS (Tuition Fee Waiver)', docs: 'Income Certificate (original), Domicile Certificate', validity: 'Income below ₹8 lakhs, valid up to March 31, 2026' },
                      { cat: 'Minority', docs: 'Minority Declaration Certificate, Religion Certificate', validity: 'As per minority commission format' },
                      { cat: 'PwD (Persons with Disabilities)', docs: 'Disability Certificate (40% or more)', validity: 'From Civil Surgeon / Govt Medical Officer' },
                      { cat: 'Defence / Ex-Servicemen', docs: 'Service Certificate, Discharge Certificate', validity: 'From appropriate defence authority' }
                    ].map((row, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? '' : 'bg-gray-50'} hover:bg-orange-50`}>
                        <td className="border border-gray-300 px-6 py-4 font-bold text-ssgmce-orange">{row.cat}</td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">{row.docs}</td>
                        <td className="border border-gray-300 px-6 py-4 text-xs text-gray-600">{row.validity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Important Instructions */}
            <section className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-red-700 mb-3">Important Instructions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• All photocopies must be self-attested by the candidate</li>
                <li>• Original documents will be verified and returned on the spot</li>
                <li>• Income certificates must be issued by Tahsildar level or above</li>
                <li>• Caste certificates must be issued by competent authority as per Government of Maharashtra norms</li>
                <li>• Incomplete documentation will result in rejection of admission</li>
                <li>•  Gap certificate required if there is a break in education after 12th</li>
                <li>• All documents must be in English or Marathi (otherwise require notarized translation)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsRequired;
