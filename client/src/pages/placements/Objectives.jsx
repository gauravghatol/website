import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import PlacementSidebar from "../../components/PlacementSidebar";

const Objectives = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Objectives Rules & Procedures | SSGMCE";
  }, []);

  // Define sections for sidebar navigation
  const sections = [
    { sectionId: 'objectives', title: 'Objectives of T&P Cell', order: 1 },
    { sectionId: 'registration', title: 'Campus Placement Registration', order: 2 },
    { sectionId: 'student-registration', title: 'Student Registration for Company', order: 3 },
    { sectionId: 'selection-process', title: 'Placement Selection Process', order: 4 },
    { sectionId: 'off-campus', title: 'Off-Campus Drive Procedure', order: 5 },
    { sectionId: 'company-invitation', title: 'Company Invitation', order: 6 },
    { sectionId: 'representatives', title: 'Faculty & Student Representatives', order: 7 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Objectives Rules & Procedures" 
        subtitle="Training & Placement Cell Guidelines"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              <PlacementSidebar sections={sections} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Objectives of T&P Cell */}
            <section id="objectives" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200">
                Objectives of T & P Cell
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Following are the objectives of Training and Placement Cell of SSGMCE.
              </p>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>To assist students develop/clarify their academic and career interests, and their short and long-term goals through individual counseling and group sessions.</li>
                <li>To Work with faculty members, department Heads and administration to integrate career planning and academic curriculum as well as coordinate Summer Training / internship programs.</li>
                <li>To provide career guidance about avenues open after graduation. ie. Higher education, placements or entrepreneurship.</li>
                <li>To strengthen the alumni network for students' placements/ Internships/ Trainings.</li>
                <li>To hone the students' skills and guide them into technical professionals.</li>
                <li>To upgrade the reasoning and aptitude abilities.</li>
                <li>To motivate students towards higher studies and make them market ready.</li>
                <li>To secure maximum numbers of placements.</li>
                <li>To set up the training infrastructure for conducting value added training programs and enhance the employability of students.</li>
                <li>To up gradation of the students communication skills and personality development by inviting experts from outside for seminars/classes.</li>
              </ul>
            </section>

            {/* Campus Placement Registration */}
            <section id="registration" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200">
                Campus Placement - Registration Process
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>Interested students in placements should register with campus Training & Placement Cell (T&P Cell) through online (Google forms as per Format of T&P Cell) as per T&P Cell notification usually in the month of April.</li>
                <li>T & P Cell should prepare the online registration link fields as given in Format T&P Cell for online submission.</li>
                <li>Students should be informed about the online registration link through emails and they must register for placement before leaving the campus for summer internship.</li>
                <li>No. of backlogs, as on date, should be mentioned correctly.</li>
                <li>Students should fill up all data carefully and verify the entered data before final submission.</li>
                <li>Students must submit the proof of Educational documents in hard copies for verification.</li>
                <li>Without registration will not be considered for placement process.</li>
                <li>Whenever T & P Cell receives a request for modification of student data, the same should be incorporated in the master registration data and later to be informed to the concerned.</li>
                <li>For any queries, students should send mail to placements@ssgmce.ac.in not to any other email id.</li>
              </ul>
            </section>

            {/* Student's Registration for Particular Company */}
            <section id="student-registration" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200">
                Student's Registration for Particular Company Placement Process
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>Job Announcement Notice and Job Description (JD) will be posted to students through email on receiving the information from the company about campus/off campus visit.</li>
                <li>Students are advised to fill the information of their academics as per requirements and eligibility of company.</li>
                <li>While applying, students are advised to go through the job description, company profile and other relevant information on company's website.</li>
                <li>Students must apply within the stipulated time mentioned in the JD. No late submission would be entertained</li>
                <li>In case of any problem with registration for placement process, student should contact T&P Cell and follow the instructions of T & P Cell for registration.</li>
                <li>Students are advised to apply for a job in any organization only if he/she is eligible and interested in taking up a job.</li>
                <li>No withdrawal of candidature will be permitted once applied for the job. Withdrawal without permission or information to T & P cell will fetch sanction on students from placements of other drives as well.</li>
                <li>If any registered student found to be not attending the drive, such student will not be permitted to sit for next placement process. And such students need to be submit an explanation to the T&P Cell with the recommendation of Faculty Representative and HoD concerned.</li>
                <li>List of students who have applied for a particular company on time in response to Job announcement will be sent to company for consideration and only short listed students by (a) company (b) T&P Cell, as the case may be, would be permitted for process.</li>
                <li>Short listing is generally done based on CGPA of the student considering grade up to 6th Semester decided by T & P Cell.</li>
                <li>Short listed students would be notified and students are advised to prepare for the campus selection process as per schedule given in the JD.</li>
                <li>Pre-placement Technical and/or HR Sessions and Mock interviews are conducted to make students practice before each placement drive.</li>
              </ul>
            </section>

            {/* Placement Selection Process */}
            <section id="selection-process" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200">
                Placement Selection Process
              </h2>
              
              {/* Pre-Placement Process */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Pre-Placement Process:
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-6 mb-6">
                <li>List of applications received from student within time and short listed by campus T&P Cell would be sent to company for consideration.</li>
                <li>On hearing from the company, the final date of visiting the campus and time of each activity would be notified to the students and short listed candidates should comply with the selection procedure of the company.</li>
                <li>Campus placement selection process comprises Pre placement talk (PPT), written test, group discussion, interviews etc.</li>
                <li>Students are advised to visit company website to know the job requirements. Any queries related to job or other matter must be clarified with the company officials during their visit to campus i.e. PPT. No direct communication with the company officials is permitted.</li>
                <li>Students are not permitted to interact with the company official directly.</li>
                <li>Student should maintain discipline while attending pre placement talks (PPT), written test and interviews etc.</li>
                <li>Students must attend the Pre Placement Talk by the company as per the notified time. If any student doesn't attend the PPT, campus T & P Cell reserve the right to refuse the permission to attend the particular drive.</li>
                <li><strong>Dress code:</strong> Students are to wear college uniform as per instructions while attending PPT, written test etc. Students are allowed to wear corporate attire for interviews.</li>
                <li>Students should keep ready all documents well in advance and they should be in a position to produce on time.</li>
                <li>Student should carry certificates in a proper file along with two passport size photographs and a copy of their latest resume for the interview process.</li>
                <li>Students are permitted to clarify any of their doubts at any point of time with T&P Cell.</li>
                <li><strong>Disciplinary Action:</strong> Student must not involve in malpractice or impersonation in the placement process. If found, such students would have to abide to the decision of T & P that may include debarring from placement activity for entire year etc.</li>
              </ul>

              {/* Post Placement Process */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                Post Placement Process:
              </h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>List of selected students obtained from company would be notified to students through email and also displayed on notice board of T&P Cell.</li>
                <li>Companies would send offer letters of the students along with other information to T&P Cell. After receiving the offers letter by the selected candidates, they should follow the instructions given in the offer letter.</li>
                <li>Any student who has applied or secured a job through off campus is not considered under T&P Cell placement process. Such students are advised to inform T&P Cell after their selection and voluntarily withdraw their candidature from placement for the benefit of other students.</li>
                <li>One student one job offer is strictly followed. Student with job offer through T&P Cell will not be considered for other companies for placements except dream job.</li>
                <li>If a student is not joining an organization under unavoidable circumstances, then the accepted job offer (original) must be surrendered to the T&P Cell.</li>
                <li>If any student fails to comply with any of the above mentioned rules and regulations or found indulging in any act of indiscipline/misbehaviour, he/she would be liable for strict disciplinary action, as per the university rules and regulations.</li>
              </ul>
            </section>

            {/* Off-Campus Drive Procedure */}
            <section id="off-campus" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200">
                Procedure to be Follow When Company Visit the Campus Other than SSGMCE
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>In case of off-campus drives at other than SSGMCE campus, T&P Cell team along with other faculty and staff members should accompany the students.</li>
                <li>T&P Cell should also arrange for accommodation and travel at off campus drives to the possible extent.</li>
                <li>Students should apply for permission from (a) HOD of concern dept (b) T&P Cell and (c) finally Director/ competent authority. Students should reach the venue well in advance with minimum days of loss of class work.</li>
                <li>Students are permitted to leave the campus for attending placement process at other campus/institution only when they fulfill all the requirements i.e. eligibility and proper gate pass.</li>
                <li>Student must attend the recruitment process without fail.</li>
                <li>Student must return to the campus as soon as placement process is completed and furnish the arrival details to T&P Cell.</li>
                <li>Violation of above procedure will attract disciplinary action.</li>
              </ul>
            </section>

            {/* Invitation to Company */}
            <section id="company-invitation" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-4 pb-2 border-b border-gray-200">
                Invitation to Company for Campus Placement Drive
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>T&P Cell would initiate the invitations to various companies along with relevant information for campus recruitment of final year B.E, ME, and MBA students well ahead i.e. during March to May every year and later follow up on regular basis. Email correspondence should be made with the companies stating college profile and attachment of Placement brochure.</li>
                <li>Only one official Email ID should be used for all correspondence and T&P Cell is responsible for email content sent through the email ID.</li>
                <li>Placement officer and other officers connected to T&P Cell should interact and meet with potential recruiting companies on regular basis. Faculty In-charge also should interact with company executives as and when required. Approval for such visits should be obtained from competent authority before planning the journeys.</li>
                <li>Usually the placements would commence from 1st September every year, but based on the requirement, T&P Cell may change the date in consultation with officers concern.</li>
                <li>If any company expresses willingness to visit the campus for selection process on its own, T&P Cell should verify the credentials of the company before inviting them for campus placements.</li>
              </ul>
            </section>

            {/* Department Faculty and Student Representatives */}
            <section id="representatives" className="mb-10">
              <h2 className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200">
                Department Faculty and Student Representatives
              </h2>
              <ul className="space-y-3 text-gray-700 list-disc pl-6">
                <li>Head of the department of each branch should nominate one faculty member, in consultation with departmental faculty, as department faculty representative (Academic Year term) for placement and summer internships.</li>
                <li>Dept faculty representative should help in conveying information on job announcement to students, student registration for each campus drive, summer internship registration, off campus drive at different places etc.</li>
                <li>02 students representative from each year of BE and MBA should be identified by HOD of the each dept in consultation with dept faculty representative for placement and inform the same to T&P Cell through Email.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
