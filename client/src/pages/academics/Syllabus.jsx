import React from 'react';
import GenericPage from '../../components/GenericPage';

const Syllabus = () => {
  const departments = [
    {
      name: "B.E. First Year (Applied Sciences and Humanities)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Syllabus of ASH(1st Sem-2nd Sem)", link: "#" },
        { label: "Syllabus of ASH(1st Sem-2nd Sem) Notification No. 148 of 2024(Extra Ordinary)", link: "#" }
      ]
    },
    {
      name: "B.E. (Computer Science and Engineering)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Scheme", link: "#" },
        { label: "Revised Syllabus of CSE(1st Sem-8th Sem) Notification No. 121/2023", link: "#" },
        { label: "Syllabus Second Year (3rd & 4th Sem)", link: "#" },
        { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in Engg. & Tech.) Sem. IV -NEP", link: "#" },
        { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" }
      ],
      meProgram: {
        name: "M.E.(Computer Engineering)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: "#" }
        ]
      }
    },
    {
      name: "B.E. (Electrical Engineering)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Scheme", link: "#" },
        { label: "Syllabus Second Year (3rd Sem)", link: "#" },
        { label: "Syllabus Second Year (4th Sem)", link: "#" },
        { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in Engg. & Tech.) Sem. IV -NEP", link: "#" },
        { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" }
      ],
      meProgram: {
        name: "M.E.(Electrical Power System)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: "#" }
        ]
      }
    },
    {
      name: "B.E. (Electronics and Telecommunication Engineering)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Scheme", link: "#" },
        { label: "Notification letter- Revised Scheme only for open Elective subject", link: "#" },
        { label: "Syllabus Second Year (3rd Sem)", link: "#" },
        { label: "Syllabus Second Year (4th Sem)", link: "#" },
        { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in Engg. & Tech.) Sem. IV -NEP", link: "#" },
        { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
        { label: "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)", link: "#" },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" },
        { label: "Revised Syllabus for Open Elective Final Year (7th & 8th Sem)", link: "#" }
      ],
      meProgram: {
        name: "M.E.(Digital Electronics)",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: "#" }
        ]
      }
    },
    {
      name: "B.E. (Information Technology)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Scheme", link: "#" },
        { label: "Syllabus Second Year (3rd Sem)", link: "#" },
        { label: "Syllabus Second Year (4th Sem)", link: "#" },
        { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in Engg. & Tech.) Sem. IV -NEP", link: "#" },
        { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" },
        { label: "Computer Skill Lab Syllabus", link: "#" },
        { label: "Revised Syllabus of IT 21 July 2023", link: "#" },
        { label: "Revised Syllabus of CSE(5th Sem-7th Sem) Notification No. 187/2022", link: "#" }
      ]
    },
    {
      name: "B.E. (Mechanical Engineering)",
      items: [
        { label: "NEP Scheme", link: "#" },
        { label: "Scheme", link: "#" },
        { label: "Syllabus Second Year (3rd & 4th Sem)", link: "#" },
        { label: "Syllabus - (Universal Human Values and Ethics) Common for all branches in Engg. & Tech.) Sem. IV -NEP", link: "#" },
        { label: "Syllabus -(Modern Indian Language) -Common for all branches in Engg. & Tech.-Sem. IV - NEP", link: "#" },
        { label: "Syllabus Third Year (5th & 6th Sem)", link: "#" },
        { label: "Revised Syllabus for Open Elective Third Year (5th & 6th Sem)", link: "#" },
        { label: "Syllabus Final Year (7th & 8th Sem)", link: "#" }
      ],
      meProgram: {
        name: "M. E. Advanced Manufacturing & Mechanical Systems Design",
        items: [
          { label: "Scheme and Syllabus M.E. (1st & 2nd Sem)", link: "#" }
        ]
      }
    },
    {
      name: "M.B.A. (Master of Business Administration)",
      items: [
        { label: "Scheme", link: "#" },
        { label: "Syllabus First Year (1st & 2nd Sem)", link: "#" },
        { label: "Syllabus Second Year (3rd Sem)", link: "#" },
        { label: "Syllabus Second Year (4th Sem)", link: "#" }
      ]
    }
  ];

  return (
    <GenericPage title="Schemes and Syllabus">
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
                              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wide shrink-0 self-start sm:self-auto">
                                Download
                              </button>
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
                                  <button className="text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wide shrink-0 self-start sm:self-auto">
                                    Download
                                  </button>
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
