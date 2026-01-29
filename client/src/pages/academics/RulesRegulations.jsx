import React from 'react';
import GenericPage from '../../components/GenericPage';

const RulesRegulations = () => {
  return (
    <GenericPage title="Rules & Regulations">
      <div className="space-y-10">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed text-lg">
            The academic activities of the Institute are scheduled in the academic planner and academic calendar at the beginning of each academic year. It is mandatory for students / faculty to strictly adhere to the academic calendar for completion of academic activities. The academic year shall be divided into two semesters. The Semester that begins in June shall be called as <strong>Autumn Semester</strong> and the semester that begins in December is known <strong>Spring Semester</strong>. The total duration of the each Semester shall include registration, teaching, continuous internal evaluation, tests, end of semester examination, evaluation, result declaration & vacation.
          </p>
        </div>

        {/* Admission Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Admission
            </h3>
          </div>
          <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
            <ul className="list-disc pl-6 space-y-3">
              <li>The total number of UG & PG seats to be filled are as per the sanctioned intake (The approval of which has to be taken each year) from AICTE, New Delhi.</li>
              <li>The overall process of admission to B.E., M.E. and MBA is governed by the Directorate of Technical Education (DTE), Maharashtra State, Mumbai.</li>
            </ul>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Curriculum
            </h3>
          </div>
          <div className="p-6 text-gray-700 leading-relaxed">
            <p>As prescribed by <strong>Sant Gadge Baba Amravati University, Amravati</strong></p>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Student Attendance Policy
            </h3>
          </div>
          <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-red-800">
                Attendance will be considered from day one. It is compulsory for all students to maintain minimum <strong>75% attendance</strong> otherwise he/she will be detained.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Actions likely to be taken against students in detention list:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>He / She is not be eligible for internal marks based on attendance.</li>
                <li>He / She is not be eligible for Academic incentive marks.</li>
                <li>He / She is not be eligible for scholarship of any kind from the institute.</li>
                <li>He / She is not be eligible for library facility.</li>
                <li>He / She is not be eligible for industrial visit, training.</li>
                <li>Parent of these students are to be informed and called at the time of registration / commencement of semester and undertaking to be submitted by these students to respective HOD.</li>
                <li>Despite all these actions if a student fails to obey the undertaking, the student will not be permitted to attend theory and practical classes.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p><strong>Leave for four lectures per subject</strong> will be automatically granted on medical/personal reasons. These four lectures will be subtracted from the total attendance of the student at the end of session for all the students irrespective of whether they have availed the leave or not. No need to apply for short personal / medical leave.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">Leave Application Process:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>In case of genuine leave, student need to apply for genuine leave consideration time to time in the ISO student leave format (SGM/FRM/DPT-79) which is available in concern HOD office with proper document & justification. Lateral leave application will not be consider.</li>
                <li>The leave for NSS, NCC, etc. should be reported to the concern In-charge by the students. The in-charge will forward the final list of such students to the Dean Academic and all HODs.</li>
                <li>In case of any correction in attendance, student should report to concern subject teacher within four days from the date of display of consolidated cumulative attendance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Discipline and Conduct Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Discipline and Conduct
            </h3>
          </div>
          <div className="p-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              A student shall conform to a high standard of discipline and conduct himself within and outside the precincts of the college in a manner befitting the students of an institution of national importance. He / She shall have seriousness of purpose and shall, in every way train himself / herself to lead a life of earnest endeavor and cooperation. He/ She shall show due courtesy and consideration to the employees of the college and the Hostels, good neighborliness to his / her fellow students, respect to the wardens of the Hostels, and the teachers of the college and pay attention and courtesy to the visitors.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="font-semibold">
                For the maintenance of discipline amongst the students of the college, the competent Authority may appoint a Discipline (Standing) Committee each year to examine the cases of any student or student involved in any breach of rules of conduct and recommend to the Principal for suitable disciplinary action or punishment.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <h4 className="font-bold text-red-800 mb-2">Anti-Ragging Policy:</h4>
              <p className="text-red-900">
                Student should not involved directly or indirectly in any type of ragging otherwise will be punished as per the provision of Maharashtra Act XXXIII known as <strong>"Maharashtra Prohibition of Ragging Act of 1999"</strong> resulting in suspension, expulsion from college and imprisonment.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-3">Acts of Indiscipline Include:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Breach of Rules and Regulation of Hostels</li>
                <li>Lack of decorum, ungentlemanly conduct</li>
                <li>Willful damage of college or hostel properties, or of the belongingness of a fellow student</li>
                <li>Adoption of unfair means in the class rooms, laboratories, field or in the examination hall</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <h4 className="font-bold text-orange-800 mb-2">Disciplinary Actions:</h4>
              <p className="text-orange-900">
                A student whose conduct has not been up to the standard expected may be imposed monetary fine, temporarily or permanently suspended or rusticated from the college or debarred from taking examinations. The Principal may give hearing to the students reported against and pass orders on the recommendations of the Discipline Committee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default RulesRegulations;
