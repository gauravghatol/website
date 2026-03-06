import React from 'react';
import GenericPage from '../../components/GenericPage';
import AcademicsSidebar from '../../components/AcademicsSidebar';

const BASE_URL = 'https://www.ssgmce.ac.in/';
const encodeURL = (path) => BASE_URL + path.split('/').map(segment => encodeURIComponent(segment)).join('/');

const Syllabus = () => {
  const departments = [
    {
      name: "B.E. First Year (Applied Sciences and Humanities)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/Revised scheme for all branches-(U.G.)-Sem. I & II - (Common for all branches).pdf") },
        { label: "Syllabus of ASH (1st Sem-2nd Sem)", link: encodeURL("uploads/pdf/syllabus_first-year_NEP.pdf") },
        { label: "Syllabus of ASH (1st Sem-2nd Sem) Notification No. 148 of 2024 (Extra Ordinary)", link: encodeURL("uploads/pdf/Extra Ordinary Notification No. 148 of 2024_first_year.pdf") }
      ]
    },
    {
      name: "B.E. (Computer Science and Engineering)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/B.E. (CSE, CS-DS, KE, AIDS) - (Scheme ) - Sem. III to VIII - NEP_scheme.pdf") },
        { label: "Scheme", link: encodeURL("uploads/pdf/Scheme-CSE-Second to Final Year-13.08.2020-1-11.pdf") },
        { label: "Revised Syllabus of CSE (1st Sem-8th Sem) Notification No. 121/2023", link: encodeURL("uploads/pdf/CSE-Sem.-1-to-8-CE-Sem.-3-4-Syll.-Rev.-Syll.-Notificn.-No.-121-of-2023.pdf") },
        { label: "Syllabus Second Year (3rd & 4th Sem)", link: encodeURL("uploads/pdf/B.E. (CSE, CS-DS, KE, AIDS) - (Core Syllabus) - Sem. IIII & IV - NEP.pdf") },
        { label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf") },
        { label: "Syllabus - Modern Indian Language (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf") },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/Syllabus-CSE-Third Year-5th-6th Sem.pdf") },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/CSE-BE-Sem-7-8-Syllabus-Notifn-No.-68-of-2022.pdf") }
      ],
      meProgram: {
        name: "M.E. (Computer Engineering)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: encodeURL("uploads/pdf/Scheme-Syllabus-M.E. (Computer Engineering).pdf") }
        ]
      }
    },
    {
      name: "B.E. (Electrical Engineering)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/B.E. Elect. Engg. (Electronics & Power) - (Scheme) - Sem. III to VIII - NEP-scheme.pdf") },
        { label: "Scheme", link: encodeURL("uploads/pdf/schemes/SGBAU_CBCS_Teaching_Examination Scheme_2019-20_1.pdf") },
        { label: "Syllabus Second Year (3rd Sem)", link: encodeURL("uploads/pdf/B.E. Elect. Engg. (Electronics and Power) - (Syllabus) - Sem. III - NEP.pdf") },
        { label: "Syllabus Second Year (4th Sem)", link: encodeURL("uploads/pdf/B.E. Elect. Engg.  (Electronics and Power) - (Syllabus) - Sem. IV - NEP.pdf") },
        { label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf") },
        { label: "Syllabus - Modern Indian Language (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf") },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/SGBAU_CBCS-Syllabus_V_VI_Sem_BE_ELPO_wef_2021-22.pdf") },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/schemes/SGBAU_CBCS-Syllabus_VII_VIII_Sem_BE_ELPO_wef_2022-23.pdf") }
      ],
      meProgram: {
        name: "M.E. (Electrical Power System)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: "#" }
        ]
      }
    },
    {
      name: "B.E. (Electronics and Telecommunication Engineering)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/B.E. (Elect. & Tele.) - (Scheme) - Sem. III to VIII - NEP_scheme.pdf") },
        { label: "Scheme", link: encodeURL("uploads/pdf/schemes/Schemes BE Extc Sem 3-8.pdf") },
        { label: "Notification letter - Revised Scheme for Open Elective subject", link: encodeURL("uploads/pdf/schemes/Open Elective Subj. of Sem V & VI BE all br. Notificn No. 11 of 2023.pdf") },
        { label: "Syllabus Second Year (3rd Sem)", link: encodeURL("uploads/pdf/B.E. (Elect. & Tele.) - (Syllabus) - Sem. III - NEP.pdf") },
        { label: "Syllabus Second Year (4th Sem)", link: encodeURL("uploads/pdf/B.E. (Elect. & Tele.) - (Syllabus) - Sem. IV - NEP.pdf") },
        { label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf") },
        { label: "Syllabus - Modern Indian Language (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf") },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf") },
        { label: "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/Revised Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf") },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/schemes/Final Draft VII_VIII sem Syllabus.pdf") },
        { label: "Revised Syllabus for Open Elective Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/schemes/Extc Engg BE Sem 5,6 & 7 Open Electivce Subjects.pdf") }
      ],
      meProgram: {
        name: "M.E. (Digital Electronics)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: encodeURL("uploads/pdf/schemes/Scheme-ME (DIGITAL) (FULL TIME).pdf") }
        ]
      }
    },
    {
      name: "B.E. (Information Technology)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/B.E. (Information Tech. ) - (Scheme) - Sem. III to VIII - NEP_scheme.pdf") },
        { label: "Scheme", link: encodeURL("uploads/pdf/schemes/IT Scheme[411].pdf") },
        { label: "Syllabus Second Year (3rd Sem)", link: encodeURL("uploads/pdf/B.E. (Information Tech. ) - (Syllabus) - Sem. III - NEP.pdf") },
        { label: "Syllabus Second Year (4th Sem)", link: encodeURL("uploads/pdf/B.E. (Information Tech. ) - (Syllabus) - Sem. IV - NEP.pdf") },
        { label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf") },
        { label: "Syllabus - Modern Indian Language (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf") },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/3N Syllabus[385].pdf") },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/schemes/4N Syllabus[386].pdf") },
        { label: "Computer Skill Lab Syllabus", link: encodeURL("uploads/pdf/schemes/Computer_Skill_Labs__New_.pdf") },
        { label: "Revised Syllabus of IT 21 July 2023", link: encodeURL("uploads/pdf/schemes/Modified_Syllabus_21_July_2023__3_.pdf") },
        { label: "Revised Syllabus of CSE (5th Sem-7th Sem) Notification No. 187/2022", link: encodeURL("uploads/pdf/schemes/IT BE Sem. V & VII Syll. Minor changes Notificn No. 187 of 2022.pdf") }
      ]
    },
    {
      name: "B.E. (Mechanical Engineering)",
      items: [
        { label: "NEP Scheme", link: encodeURL("uploads/pdf/B.E. (Mech Engg) - (Scheme) - Sem. III to VIII - NEP-scheme.pdf") },
        { label: "Scheme", link: encodeURL("uploads/pdf/Schemes_BE_Mech_Sem_3-8-new wef 2020-21[371].pdf") },
        { label: "Syllabus Second Year (3rd & 4th Sem)", link: encodeURL("uploads/pdf/B.E. (Mech Engg) - (Syllabus) - Sem. III to VIII - NEP.pdf") },
        { label: "Syllabus - Universal Human Values and Ethics (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus - (Universal Human Values and Ethics) Common for all branches in. Engg. & Tech.)-Sem. IV -NEP.pdf") },
        { label: "Syllabus - Modern Indian Language (Sem. IV - NEP)", link: encodeURL("uploads/pdf/Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP.pdf") },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/3rd Year BE MECH 5-6 Sem. Syllabus.pdf") },
        { label: "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)", link: encodeURL("uploads/pdf/schemes/Open Elective Subj. of Sem V & VI BE all br. Notificn No. 11 of 2023.pdf") },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: encodeURL("uploads/pdf/schemes/4th Year BE MECH 7-8 Sem. Syllabus.pdf") }
      ],
      meProgram: {
        name: "M.E. Advanced Manufacturing & Mechanical Systems Design",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: encodeURL("uploads/pdf/schemes/MECH PG SCHEME AND SYLLABUS.pdf") }
        ]
      }
    },
    {
      name: "M.B.A. (Master of Business Administration)",
      items: [
        { label: "Scheme", link: encodeURL("uploads/pdf/schemes/MBA_Scheme__New__Direction_No._81_of_2022.pdf") },
        { label: "Syllabus First Year (1st & 2nd Sem)", link: encodeURL("uploads/pdf/schemes/MBA New Syllabus of SEM I & II 2022-23 onwards.pdf") },
        { label: "Syllabus Second Year (3rd Sem)", link: encodeURL("uploads/pdf/schemes/MBA SEM-III PROPOSED SYLLABUS-2023.pdf") },
        { label: "Syllabus Second Year (4th Sem)", link: encodeURL("uploads/pdf/schemes/MBA SEM-IV PROPOSED SYLLABUS-2023.pdf") }
      ]
    }
  ];

  return (
    <GenericPage title="Schemes and Syllabus" sidebar={<AcademicsSidebar />}>
      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed">
            The curriculum follows the Sant Gadge Baba Amravati University (SGBAU) regulations. Detailed schemes and syllabi for all branches can be found below.
          </p>
        </div>

        {/* Departments Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-600 border border-gray-300 w-1/3">
                  Course Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-blue-600 border border-gray-300">
                  Scheme and Syllabus
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, deptIndex) => (
                <React.Fragment key={deptIndex}>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-6 text-sm font-bold text-gray-800 border border-gray-300 align-top">
                      {dept.name}
                    </td>
                    <td className="px-6 py-6 border border-gray-300">
                      <ul className="space-y-3">
                        {dept.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 group">
                            <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 block group-hover:bg-blue-600 transition-colors flex-shrink-0"></span>
                            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <span className="text-gray-700 text-sm">{item.label}</span>
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wide shrink-0 self-start sm:self-auto"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      {/* M.E. Program Section */}
                      {dept.meProgram && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          <h4 className="font-bold text-gray-800 mb-3">{dept.meProgram.name}</h4>
                          <ul className="space-y-3">
                            {dept.meProgram.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 group">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 block group-hover:bg-blue-600 transition-colors flex-shrink-0"></span>
                                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                  <span className="text-gray-700 text-sm">{item.label}</span>
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wide shrink-0 self-start sm:self-auto"
                                  >
                                    Download
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </GenericPage>
  );
};

export default Syllabus;
