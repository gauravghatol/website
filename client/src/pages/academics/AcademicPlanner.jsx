import React from 'react';
import GenericPage from '../../components/GenericPage';

const AcademicPlanner = () => {
  return (
    <GenericPage title="Academic Planner & Calendar">
      
        <p>The academic calendar is designed to ensure a balanced schedule for students and faculty. It includes dates for commencement of classes, internal assessments, university examinations, and holidays.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Odd Semester:</strong> July to December</li>
            <li><strong>Even Semester:</strong> January to May</li>
        </ul>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-ssgmce-blue">Download Calendar</h3>
            <p className="text-sm mt-2">The detailed academic calendar for the current session is available for download.</p>
            <button className="mt-4 px-4 py-2 bg-ssgmce-orange text-white rounded hover:bg-ssgmce-light-orange transition-colors">Download PDF</button>
        </div>
        
    </GenericPage>
  );
};

export default AcademicPlanner;
