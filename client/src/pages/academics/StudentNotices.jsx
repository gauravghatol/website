import React from 'react';
import GenericPage from '../../components/GenericPage';

const StudentNotices = () => {
  return (
    <GenericPage title="Notices for Students">
      <div className="max-w-5xl mx-auto">
        {/* Notice Header */}
        <div className="bg-gradient-to-r from-ssgmce-blue to-ssgmce-dark-blue text-white p-6 rounded-lg mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">NOTICE FOR STUDENTS</h2>
          <p className="text-lg">Date: 09/07/2025</p>
        </div>

        {/* Introduction */}
        <div className="mb-6">
          <p className="text-lg text-gray-700 italic">
            All the students are hereby informed to note the following points related to <strong>attendance:</strong>
          </p>
        </div>

        {/* Notice Points */}
        <div className="space-y-6 bg-white rounded-lg shadow-lg p-8">
          {/* Point 1 */}
          <div className="border-l-4 border-ssgmce-orange pl-6">
            <h3 className="text-xl font-bold text-ssgmce-blue mb-3">1. Attendance Policy</h3>
            <p className="text-gray-700 mb-3">
              Attendance will be considered from day one of commencement of classes. It is compulsory 
              for all students to maintain minimum 75% attendance otherwise he/she will be detained. 
              Actions likely to be taken against students in detention list are:
            </p>
            <ul className="list-none space-y-2 ml-6">
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">a.</span>
                <span className="text-gray-700">He / She is not be eligible for internal marks based on attendance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">b.</span>
                <span className="text-gray-700">He / She is not be eligible for incentive marks</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">c.</span>
                <span className="text-gray-700">He / She is not be eligible for scholarship of any kind from the institute.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">d.</span>
                <span className="text-gray-700">He / She is not be eligible for library facility.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">e.</span>
                <span className="text-gray-700">He / She is not be eligible for industrial visit, internship, & training.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">f.</span>
                <span className="text-gray-700">Parent of these students are to be informed and called at the time of registration / 
                commencement of semester and undertaking to be submitted by these students to respective HOD.</span>
              </li>
              <li className="flex items-start">
                <span className="text-ssgmce-orange font-bold mr-3">g.</span>
                <span className="text-gray-700">Despite all these actions if a student fails to obey the undertaking, the student will 
                not be permitted to attend theory and practical classes.</span>
              </li>
            </ul>
          </div>

          {/* Point 2 */}
          <div className="border-l-4 border-ssgmce-orange pl-6">
            <h3 className="text-xl font-bold text-ssgmce-blue mb-3">2. Leave Policy</h3>
            <p className="text-gray-700">
              Leave for four lectures per subject will be automatically granted on medical/personal reasons. 
              These four lectures will be subtracted from the total attendance of the student at the end of 
              session for all the students irrespective of whether they have availed the leave or not. 
              No need to apply for short personal leave.
            </p>
          </div>

          {/* Point 3 */}
          <div className="border-l-4 border-ssgmce-orange pl-6">
            <h3 className="text-xl font-bold text-ssgmce-blue mb-3">3. Leave Application</h3>
            <p className="text-gray-700">
              In case of genuine leave, student need to apply for leave consideration time to time in the 
              student leave format (SSGMCE/FRM/DPT-79) which is available in concern HOD office with proper 
              document & justification. Lateral leave application will not be consider.
            </p>
          </div>

          {/* Point 4 */}
          <div className="border-l-4 border-ssgmce-orange pl-6">
            <h3 className="text-xl font-bold text-ssgmce-blue mb-3">4. Special Activities Reporting</h3>
            <p className="text-gray-700">
              The leave for NSS, NCC, & Internship etc. should be reported to the concern In-charge/HOD 
              by the students. The in-charge/HOD will forward the final list of such students to the 
              Dean Academics.
            </p>
          </div>

          {/* Point 5 */}
          <div className="border-l-4 border-ssgmce-orange pl-6">
            <h3 className="text-xl font-bold text-ssgmce-blue mb-3">5. Attendance Correction</h3>
            <p className="text-gray-700">
              In case of any correction in attendance, student should report to concern subject teacher 
              within four days from the date of display of consolidated cumulative attendance.
            </p>
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-end">
            <div>
              <p className="font-semibold text-gray-800">Dean (Academics)</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">Principal</p>
            </div>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default StudentNotices;
