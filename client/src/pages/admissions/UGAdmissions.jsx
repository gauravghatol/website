import React from 'react';
import GenericPage from '../../components/GenericPage';

const UGAdmissions = () => {
  return (
    <GenericPage title="Under-Graduate Admissions (B.E.)">
      
        <div className="space-y-8">
            <div className="bg-blue-50 border-l-4 border-ssgmce-blue p-4">
                <p className="text-gray-700">Admissions to the First Year of Engineering are conducted strictly through the Centralized Admission Process (CAP) managed by the State Common Entrance Test Cell, Government of Maharashtra.</p>
            </div>

            <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Eligibility Criteria</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Candidate must be an Indian National.</li>
                    <li>Passed HSC (Std. XII) with Physics and Mathematics as compulsory subjects along with one of Chemistry/Biotechnology/Biology/Technical Vocational subjects.</li>
                    <li>Obtained at least <strong>45% marks</strong> (40% for Backward Class categories and Persons with Disability candidates belonging to Maharashtra State only) in the above subjects taken together.</li>
                    <li>Obtained a valid score in <strong>MHT-CET</strong> or <strong>JEE Main</strong>.</li>
                </ul>
            </section>

             <section>
                <h3 className="text-xl font-bold text-ssgmce-blue mb-3">Admission Process</h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    <li><strong>Registration:</strong> Register online on the State CET Cell website.</li>
                    <li><strong>Document Verification:</strong> Verify documents at the Facilitation Center (FC).</li>
                    <li><strong>Merit List:</strong> Check the Provisional and Final Merit Lists.</li>
                    <li><strong>Option Form:</strong> Fill and confirm the Option Form for CAP Rounds (I, II, III).</li>
                    <li><strong>Allotment:</strong> Check seat allotment status.</li>
                    <li><strong>Reporting:</strong> Report to the allotted institute to confirm admission.</li>
                </ol>
            </section>
        </div>
        
    </GenericPage>
  );
};

export default UGAdmissions;
