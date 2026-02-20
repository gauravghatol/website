import React from 'react';
import GenericPage from '../../components/GenericPage';
import ResearchSidebar from '../../components/ResearchSidebar';

const rdcMembers = [
  { srNo: "01", name: "Dr S. B. Somani", designation: "Principal", role: "Chairman" },
  { srNo: "02", name: "Dr S. S. Jadhao", designation: "Associate Professor", role: "Chief Coordinator" },
  { srNo: "03", name: "Dr V. K. Thute", designation: "Associate Professor", role: "Coordinator, Department of Mechanical Engineering" },
  { srNo: "04", name: "Dr. R. S. Kankale", designation: "Assistant Professor", role: "Coordinator, Department of Electrical Engineering" },
  { srNo: "05", name: "Dr R. A. Zamare", designation: "Assistant Professor", role: "Coordinator, Department of Computer Science and Engineering" },
  { srNo: "06", name: "Dr N. S. Dharmale", designation: "Assistant Professor", role: "Coordinator, Department of Electronics and Telecommunication Engineering" },
  { srNo: "07", name: "Ms. P. P. Bute", designation: "Assistant Professor", role: "Coordinator, Department of Information Technology" },
  { srNo: "08", name: "Dr J. S. Gawande", designation: "Assistant Professor", role: "Coordinator, Department of Applied Sciences and Humanities" },
  { srNo: "09", name: "Dr S. M. Mishra", designation: "Assistant Professor", role: "Coordinator, Department of Business Administration and Research" },
];

const RDCell = () => {
  return (
    <GenericPage title="Research and Development Cell (RDC)" sidebar={<ResearchSidebar />}>
      <p className="text-gray-700 mb-6">
        Promotes innovation, facilitates grants from AICTE/DST, and supports patent filing for faculty and students.
      </p>

      <h3 className="text-xl font-semibold text-ssgmce-blue mb-4">RDC Members</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-ssgmce-blue text-white">
              <th className="border border-gray-300 px-4 py-3 text-left w-16">Sr. No.</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Name of Member</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Designation</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {rdcMembers.map((member, idx) => (
              <tr key={member.srNo} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-3 text-center font-medium">{member.srNo}</td>
                <td className="border border-gray-300 px-4 py-3">{member.name}</td>
                <td className="border border-gray-300 px-4 py-3">{member.designation}</td>
                <td className="border border-gray-300 px-4 py-3">{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GenericPage>
  );
};

export default RDCell;
