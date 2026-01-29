import React from 'react';
import GenericPage from '../../components/GenericPage';

const SessionalMarks = () => {
  return (
    <GenericPage title="Sessional Marks Evaluation">
      <div className="space-y-10">
        {/* Header Information */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Sessional Marks Evaluations scheme for UG /PG: Session 2025-2026 & onward
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Date: 21/07/2025<br />
            It is notified to all concern students, faculty, and staff members that the theory internal marks for each course will be evaluate as per the table shown below:
          </p>
        </div>

        {/* UG Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              UG: B. E. 1st, 2nd, 3rd, and 4th Year
            </h3>
            <p className="text-gray-700 mt-2">
              Two Class Tests (CT) and Assignment (TEC: Teacher Evaluation Component)
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 w-16 border border-gray-300">S N</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Item(s)</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Duration for Conduction</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Evaluation Scale: Marks and Syllabus</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 border border-gray-300">CBCS Batch Weightage (Out of 20 Marks)</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 border border-gray-300">NEP Batch* Weightage (Out of 40 Marks)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">01</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border border-gray-300">
                    <div className="font-semibold">Class Test I and</div>
                    <div className="font-semibold">Class Test II</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    1 Hrs.<br />
                    for each<br />
                    Class Test
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    <div className="font-semibold mb-1">02 Units for each Class Test</div>
                    <div className="text-blue-600 font-bold">30</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">60/6 = 10</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">60/3 = 20</div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">02</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border border-gray-300">
                    <div className="font-semibold">TEC: <span className="font-bold">Any one TEC to</span></div>
                    <div className="font-semibold"><span className="font-bold">each Student/subject</span></div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    Throughout<br />
                    the semester
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600 text-2xl">30</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">30/6 = 05</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">30/3 = 10</div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">03</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold border border-gray-300">
                    Attendance
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    Throughout<br />
                    the semester
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span>95 - 100%</span>
                        <span className="font-bold ml-8">05</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>90 - 94.99 %</span>
                        <span className="font-bold ml-8">04</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>85 - 89.99 %</span>
                        <span className="font-bold ml-8">03</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>80 - 84.99 %</span>
                        <span className="font-bold ml-8">02</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>75 - 79.99 %</span>
                        <span className="font-bold ml-8">01</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Below 75%</span>
                        <span className="font-bold ml-8">00</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600 text-xl">05</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    <div className="space-y-1 text-xs">
                      <div>&gt;=95.00%=10</div>
                      <div>&lt; 94.99%=08</div>
                      <div>&lt; 89.99%=06</div>
                      <div>&lt; 84.99%=04</div>
                      <div>&lt; 79.99%=02</div>
                      <div>&lt; 75.00%=00</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 p-4 border-t border-yellow-200">
            <p className="text-sm text-gray-700 font-semibold">
              *The above scheme is also applicable for double minor/honours courses.
            </p>
          </div>
        </div>

        {/* PG Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
              PG: M.B.A., M. E. (EPS/ Digital Electronics /Computer Engg. /AM&MSD)
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 w-16 border border-gray-300">S.N.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Items/Syllabus:</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Duration for Conduction</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 border border-gray-300">Evaluation Scale (Marks)</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 border border-gray-300">Weightage (Out of 20/30 Marks)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">01</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold border border-gray-300">
                    Class Test I (50 % of syllabus)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    1½ Hrs. (ME)<br />
                    2Hrs.(MBA)
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600 text-xl">40</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">80/8 = 10 (ME)</div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">02</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold border border-gray-300">
                    Class Test-II / (Remaining 50 % of syllabus)
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    2Hrs.(MBA)<br />
                    For Each CT
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600 text-xl">40</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">80/4 = 20 (MBA)</div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center border border-gray-300">03</td>
                  <td className="px-6 py-4 text-sm text-gray-900 border border-gray-300">
                    <div className="font-semibold">Teacher Evaluation Component</div>
                    <div className="font-bold">Any 1 TEC to each student/subject</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">
                    Throughout<br />
                    the semester
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600 text-xl">40</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-center border border-gray-300">
                    <div className="font-bold text-blue-600">40/4 = 10</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red-50 p-4 border-t border-red-200">
            <p className="text-sm text-gray-800 font-semibold">
              Please Note: <span className="text-red-700">Attendance in UG & PG should be min. 75% for the term grant. Subject Teacher will identify and open min. two & max. four TEC per subject.</span>
            </p>
          </div>
        </div>

        {/* TEC Components List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800">
              List of Assignment Components/Teacher Evaluation Components (TECs):
            </h3>
          </div>
          
          <div className="p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>Tutorials on Syllabus points</li>
              <li>Presentation/Seminar on extension of the course</li>
              <li>Mini/Term/Short Projects (Design/Fabrication/ Simulation/ Software / Hardware Development / Survey / Case Studies etc.)</li>
              <li>New Experiment development and testing</li>
              <li>Open book test</li>
              <li>Surprise test</li>
              <li>Quiz / Group Discussion</li>
              <li>Field/Industrial work</li>
              <li>Industrial visit and report writing</li>
            </ol>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
          <p className="text-gray-800 font-semibold leading-relaxed">
            <span className="text-orange-700 font-bold">Note:</span> If any student missed either CT1 or CT2 due to off Campus college activities approved by concern HOD, then it is mandatory for them to appear for retest.
          </p>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
          <div>
            <div className="font-bold text-gray-800">Prof. D. L. Bhombe</div>
            <div className="text-gray-600 text-sm">Dean (Academics)</div>
          </div>
          <div>
            <div className="font-bold text-gray-800">Prof. V. M. Umale</div>
            <div className="text-gray-600 text-sm">Dean (Exams)</div>
          </div>
          <div>
            <div className="font-bold text-gray-800">Dr. S. B. Somani</div>
            <div className="text-gray-600 text-sm">Principal</div>
          </div>
        </div>

        {/* Copy Information */}
        <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
          <p className="font-semibold mb-2">Copy to:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Principal office for information.</li>
            <li>All HODs for circulation to all concern and necessary action.</li>
            <li>M.R.ISO/ Exam Section for necessary noting.</li>
            <li>IQAC Coordinator.</li>
          </ol>
        </div>
      </div>
    </GenericPage>
  );
};

export default SessionalMarks;
