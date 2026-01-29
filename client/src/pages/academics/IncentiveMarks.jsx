import React from 'react';
import GenericPage from '../../components/GenericPage';

const IncentiveMarks = () => {
  return (
    <GenericPage title="Incentive Marks Scheme">
      <div className="space-y-10">
        {/* Header Information */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Guideline for Incentive Marks (Institute level)</h2>
          <p className="text-gray-700 leading-relaxed">
            Date: 18/03/2024<br />
            All the students are hereby informed that incentive marks will be awarded to them for the following activities.
          </p>
        </div>

        {/* R&D Activities Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
              Guidelines for awarding the Incentive marks for R& D Activities
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 w-16 border border-gray-300">S. N.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Activities</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Incentive Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">1</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold mb-2">R&D Activity</div>
                    <div className="space-y-2 text-gray-700">
                      <div className="font-semibold">Research Paper Publication:</div>
                      <div className="ml-4 space-y-1">
                        <div>(A) Conference</div>
                        <div className="ml-4">Paper presentation in Reputed Conferences IEEE, IETE etc. (Maximum Authors 04-05)</div>
                        <div>(B) Journals</div>
                        <div className="ml-4">(i) Science Citation Index Journals(SCI)</div>
                        <div className="ml-4">(ii) Journals indexed by Scopus & Web of Science</div>
                        <div className="ml-4">(iii) Peer reviewed journals (Maximum Authors (04-05) (Approved by R&D Coordinator &Team)</div>
                        
                        <div className="font-semibold mt-3">Projects</div>
                        <div className="ml-4">(A) Participation in project competition/seminars at IITs/ NITs/ International Association programs</div>
                        <div className="ml-4">(B) First / Second Prize winner in project competition/seminars participation at IITs/ NITs/ International Association programs (Approved by R&D Coordinator & Team ) (No marks will be allotted for simply attending the program)</div>
                        
                        <div className="font-semibold mt-3">Industrial Consultancy (Sponsored Projects)</div>
                        <div className="ml-4">i) Revenue generated on Rs. 1 Lac and above</div>
                        <div className="ml-4">ii) Revenue generated on Rs 50 thousand to below 1 Lac.</div>
                        
                        <div className="font-semibold mt-3">(C) Sponsored projects</div>
                        <div className="ml-4">(i)Sponsored by SGAIRC</div>
                        <div className="ml-4">(ii) Sponsored In terms of Facilities by other Industries</div>
                        <div className="ml-4">(iii) Project in the form of New Product (Approved by R & D Team in initial phase only )</div>
                        
                        <div className="font-semibold mt-3">Workshop conducted by students at SSGMCE</div>
                        <div className="ml-4">i) One week and above(Maximum 4 students permitted)</div>
                        <div className="ml-4">ii) At least two days (Maximum 2 students permitted)</div>
                        <div className="ml-4">(Selection criterion of students coordinators for workshop conduction criteria: Approved by R&D Coordinator & Team well in advance )</div>
                        
                        <div className="font-semibold mt-3">Patent filing(idea with virtual property rights( Technical design and copyrights)</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">1 Mark /subject</div>
                      <div className="text-gray-700 mt-8">5 Marks /subject</div>
                      <div className="text-gray-700">3 Marks /subject</div>
                      <div className="text-gray-700">1 Mark /subject</div>
                      <div className="text-gray-700 mt-8">1 Mark /subject</div>
                      <div className="text-gray-700 mt-4">2 Marks /subject</div>
                      <div className="text-gray-700 mt-8">5 Marks /subject</div>
                      <div className="text-gray-700">3 Marks /subject</div>
                      <div className="text-gray-700 mt-6">2 Marks /subject</div>
                      <div className="text-gray-700 mt-8">2 Marks /subject</div>
                      <div className="text-gray-700 mt-4">1 Marks /subject</div>
                      <div className="text-gray-700 mt-8">5 Marks /subject</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">2</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">GATE Exam</div>
                    <div className="text-gray-700">Students having Valid GATE Score</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">3 Marks /subject</td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">3</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">MOOC/NPTEL Course</div>
                    <div className="space-y-2 text-gray-700 mt-2">
                      <div>Certified Courses from NPTEL/ SWAYAM/COURSERA/ edX- Course duration up to one week</div>
                      <div>Certified Courses from NPTEL/ SWAYAM/COURSERA/ edX- Course duration more than one week & up to two week</div>
                      <div>Certified Courses from NPTEL/ SWAYAM/COURSERA/ edX- Course duration more than two week</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">1 Marks/subject</div>
                      <div className="text-gray-700 mt-6">2 Marks/subject</div>
                      <div className="text-gray-700 mt-6">3 Marks/subject</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">4</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Sports Activity</div>
                    <div className="space-y-1 text-gray-700 mt-2">
                      <div>University color holder</div>
                      <div>Participation in University/State / National level tournaments (Approved by Principal and Sports Director)</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">3 Marks /subject</div>
                      <div className="text-gray-700">1 Marks /subject</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">5</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">NCC/NSS</div>
                    <div className="space-y-1 text-gray-700 mt-2">
                      <div>Participation in National Republic Day Parade</div>
                      <div>Participation in National level camps for NCC/NSS</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">3 Marks /subject (Annually)</div>
                      <div className="text-gray-700">2 Marks /subject (Annually)</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">6</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Cultural Activity</div>
                    <div className="space-y-1 text-gray-700 mt-2">
                      <div>Color Holder in cultural activities (Approved by Cultural Coordinator)</div>
                      <div>Participation in University (youth festival)/State/National Level Competition</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">3 Marks /subject (Annually)</div>
                      <div className="text-gray-700">1 Marks /subject</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">7</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Activities of Student Chapter Clubs</div>
                    <div className="text-gray-700 mt-2">Only one outstanding student from every student chapter (Approved by Departmental committee & Dean Academics)</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">1 Mark /subject (Annually)</td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">8</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Activities of T&P Department</div>
                    <div className="text-gray-700 mt-2">T & P activities coordination by students team (approved by T&P Officer)</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">2 Mark /subject (Annually)</td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">9</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">SSGMCE FAB Lab</div>
                    <div className="text-gray-700 mt-2">As Recommended by FAB Lab in-charge</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">2 Mark /subject (Annually)</td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">10</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Student Coordinators</div>
                    <div className="space-y-1 text-gray-700 mt-2">
                      <div>Coordination in First Year Student Induction Program, recommended by Program Coordinator</div>
                      <div>Coordination in Alumni Meet, recommended by Alumni Coordinator</div>
                      <div>G.S., G.R., Pursuit, Parishkriti, & Sport Coordinator</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm align-top border border-gray-300">
                    <div className="space-y-2">
                      <div className="text-gray-700">1 Mark /subject (Once in a year)</div>
                      <div className="text-gray-700">1 Mark /subject (Once in a year)</div>
                      <div className="text-gray-700">3 Marks /subject (Annually)</div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">11</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Meditation Course</div>
                    <div className="text-gray-700 mt-2">As Recommended by Course Coordinator</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">1 Mark /subject</td>
                </tr>

                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-blue-600 font-semibold align-top border border-gray-300">12</td>
                  <td className="px-6 py-4 text-sm text-gray-900 align-top border border-gray-300">
                    <div className="font-bold">Student Internship</div>
                    <div className="text-gray-700 mt-2">This is applicable for Engineering and done during vacation with Recommended of concerned HOD</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 align-top border border-gray-300">1 Mark /subject</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
          <h4 className="font-bold text-gray-800 mb-4 text-lg">Important Guidelines:</h4>
          <ol className="list-roman list-inside space-y-3 text-gray-700 leading-relaxed">
            <li>The student should take advantage of incentive marks without hampering Academics.</li>
            <li>At the time of First Project Progress Monitoring round list of sponsored projects recommended by H.O.D and departmental R&D Coordinator, along with Letter of Interest should be submitted to SGCMCE by the Chief R& D Coordinator.</li>
            <li>Only those Projects which are approved by R & D Team in the final phase (Chief R& D Coordinator &Departmental R&D Coordinators), will be awarded incentive marks.</li>
            <li>For the Sponsored software projects fund should be submitted to SGCMCE Accounts section.</li>
            <li>For the Sponsored hardware projects, all the hardware facilities must be provided by the concerned industry.</li>
            <li>For the conduction of workshops, student coordinator selection criterion must be approved by the departmental R&D Coordinator, R&D and Chief R&D Coordinator.</li>
            <li>For the conduction of workshop at institute level student coordinator selection criterion must be approved by concerned coordinator and chief R&D Coordinator.</li>
            <li>Project marks will be considered in the spring semester of the concerned academic session.</li>
            <li>Incentive marks once awarded for any project/ paper publication in the current academic year, then extension/modification of the same project/ paper publication will not be considered for incentive marks in the next academic year.</li>
          </ol>
        </div>

        {/* Signatures */}
        <div className="flex justify-between items-end mt-8">
          <div className="text-center">
            <div className="font-bold text-gray-800">Prof. D. L. Bhombre</div>
            <div className="text-gray-600 text-sm">Dean (Academics)</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-800">Dr. S. B. Somani</div>
            <div className="text-gray-600 text-sm">Principal</div>
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default IncentiveMarks;
