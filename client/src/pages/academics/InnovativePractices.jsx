import React from 'react';
import GenericPage from '../../components/GenericPage';

const TeachingLearning = () => {
  return (
    <GenericPage title="Innovative Practices in teaching & learning">
      <div className="space-y-12">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Innovative Practices in Teaching and Learning</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              <strong>Innovation</strong> is an essential component for success. Globalization and rapid technical changes in the education sector has created a need for change in teaching style which leads to continuous innovation. Teaching innovation is the process of creating new ideas, theories, methodologies and solutions that can be shared with the classroom. Innovation in former days principally ensures that it transforms the students into graduates, those who prepare themselves for employment in the engineering industry and update them according to rapid changing technology.
            </p>
            <p>
              The use of innovative method in educational institutes has the potential not only to improve education, but also empower people and mobilize the effort to archive the skilled engineer for country.
            </p>
          </div>
        </div>

        {/* Objective */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-orange-500 rounded-full mr-3"></span>
            Objectives
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Following innovative practices are initiated and implemented by the faculty for students to learn in a better manner.
          </p>
        </div>

        {/* Innovative Practices Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800">Innovative Practices Implemented at SSGMCE</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 w-16 border border-gray-300">S.N.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Innovative Practices</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Context/Methodology</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border border-gray-300">Impact/Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    sn: 1,
                    practice: 'Moodle Access to Teacher and Students',
                    context: 'Moodle is a learning platform provides teacher, and Student with a single robust, user-friendly system that creates personalized learning environments. Moodle server is used for change in Individual student and faculty. Teachers posting notes, videos related to their subjects and individual students can access. Teacher conducts online test and quizzes.',
                    impact: 'This Practice helps students to share the concepts at their pace. This helps in sharing all the course files, video lessons, gate questions, text books and reference books online and subjects for semester. This helps to conduct online test, assignments and quizzes for evaluating their performance.'
                  },
                  {
                    sn: 2,
                    practice: 'Content based question making',
                    context: 'Questioning is an integral part of meaningful learning. Formulation of good questions is a creative art which improves creative and critical thinking skills. Students are asked to develop question banks based on the topics covered with solutions and further they need to answer those questions.',
                    impact: 'This Practice enhance creative thinking skills, critical thinking skills and problem-solving skills in students.'
                  },
                  {
                    sn: 3,
                    practice: 'Multimedia',
                    context: 'Multimedia is an invaluable part in teaching learning process. Various multimedia techniques used are presentations, videos, animations.',
                    impact: 'This Practice motivates the students for effective learning and to create their interest in learning process which leads to better learning retention.'
                  },
                  {
                    sn: 4,
                    practice: 'Power point presentation',
                    context: 'PPT provides various ways of representing presentations with different types of media including images, sounds, animations, and much more. It enhances the students abilities to retain what they are being taught, especially those who are visual learners.',
                    impact: 'This Practice enhances the comprehension of students and to use effectively since one can express aids while working on their presentations.'
                  },
                  {
                    sn: 5,
                    practice: 'Educational Videos',
                    context: 'Application of video allows students to get a real-life exposure of the scenario where what they have learned can be applied.',
                    impact: 'This Practice motivates the students for effective learning. This Practice develops scientific knowledge.'
                  },
                  {
                    sn: 6,
                    practice: 'Animations',
                    context: 'Videos facilitate the assimilation of contents, thus improving the efficacy of the learning process. Application of videos can demonstrate complex ideas in much lesser time duration. Concepts hard to visualize are taught using animations. Animations are used in the processes of designing, engineering calculations, visualization and monitoring technological processes and visualization of assembly processes.',
                    impact: 'This Practice creates the interest in students for gaining insight of complex engineering problems for deeper learning of the subject.'
                  },
                  {
                    sn: 7,
                    practice: 'Simulated Software Based Learning',
                    context: 'Simulation refers to the imitation of real-world activities and processes in a safe environment. It provides students an experience as close to the real thing as possible and has the advantage of allowing learners to reset the scenario and try alternative strategies and approaches. It allows students to develop experience of specific situations by applying their knowledge in practice. The computational packages such as MATLAB, SPICE, Multisim, XILINX, AUTOCAD, ANSYS, LABVIEW etc. are used to simulate engineering problems.',
                    impact: 'This Practice provides students exposure to real engineering problems and projects. This Practice develops skills and experience.'
                  },
                  {
                    sn: 8,
                    practice: 'E-based Learning',
                    context: 'E-learning is a learning system based on formalized teaching but with the help of electronic resources. The course is made available to the students where they can do self-study and study the topic in depth and learn the contents beyond syllabus. Students are encouraged to visit NPTEL lecture, browse the different internet sites to increase their knowledge about the subject.',
                    impact: 'This Practice allows students access to education independent of geographical barriers in comparison to traditional methods of teaching. This Practice enables them to share information and data in a relatively easy way.'
                  },
                  {
                    sn: 9,
                    practice: 'Role-Playing',
                    context: 'Role-play is a technique that allows students to explore realistic situations by interacting with other people in a managed way in order to develop experience. It provides a platform to the students what they have learned and how they should correlate it with live situation.',
                    impact: 'This Practice develops critical thinking. This Practice gives better understanding for the complex problems. This Practice encourages the students to nurture their cultural and diversity skills.'
                  },
                  {
                    sn: 10,
                    practice: 'Brainstorming',
                    context: 'Brainstorming is a useful tool to expand students thinking. Brainstorming helps to define an issue, analyse a problem and possible solutions. It is a great way to allow students to voice their opinions or ideas on a particular topic. PBL starts with a problem and requires the students to analyze, interpret, reflect and theory learnt to solve it. Students work in a group of 5 to 6 and managed the assigned project. Problem statement are given to students and guided by faculty and industry person. Faculty members visit industries and update themselves to support students. Faculty members visiting the Factory/industry explore basic details about the organization. Products manufacture.',
                    impact: 'The Practice enhances \"Out-of-the box\" thinking. This Practice develops students creative and innovative skills. This Practice enables them to effective communication and independent learning, can prepare them for lifelong learning.'
                  },
                  {
                    sn: 11,
                    practice: 'Project Based Learning (PBL)',
                    context: 'Main objective of this teaching learning tool is that it helps the students to develop their knowledge and increase the utilization of infrastructure facilities (Software, Computer, Instrument, Laboratory Equipments). It helps to develop logical skills and technical manuscript writing skills in students. Students design new experiment which is not included in their experimental list. They identify the experiment, develop outline of experiment (Circuit Diagram, flowchart, algorithm, etc), perform the experiment and prepare the result. It helps students to gain expertise in their subject, students collect the information related with the topic from different online and open sources and demonstrate their presentations skills by presenting the information. They learn to communicate effectively and express their ideas and opinion about the project work. Students form a group of 2 or 3 and based on their interest select a mini project or term project or short project. They access information through various resources and summarize the main idea.',
                    impact: 'This practice inculcates self-learning which helps the students to develop their own experiments. This Practice expands technical knowledge, students develop skills in terms of software solutions and implementing them for industrial/social problems.'
                  },
                  {
                    sn: 12,
                    practice: 'Field Survey/Case studies',
                    context: 'Case studies help to increase students Case study is found to be beneficial to students in terms of actively engaging them and allowing them to find out the applications of engineering techniques to solve real world problems. Thus, use of case studies is a pedagogical technique that allows students to apply their theoretical knowledge to practical problems.',
                    impact: 'This Practice enhances students creative thinking and problem solving skills and motivate them towards learning modules.'
                  },
                  {
                    sn: 13,
                    practice: 'Industrial visit/Field work and report writing',
                    context: 'Industry visit/ field work means sending the students to certain workplace like garages, Industries for doing some Practical Work. Industrial visit expose the students to the tactical methods of teaching. Students get the practical experience in the live organization. They get aware about the recent technologies used by Industries.',
                    impact: 'This enhances communication and writing skills of the students. This enables students to understand professional duties and responsibilities of the personnel in the firm.'
                  },
                  {
                    sn: 14,
                    practice: 'Designing Tutorials',
                    context: 'Tutorial is an important teaching learning tool. It helps learners enhance their intellectual, communication skills and critical skills. Tutorials provide an interactive learning environment enabling them to clarify and extend, through readings, discussions and other activities, what they learn from the lectures. Tutorial is given to the students based on the topics covered in theory lecture.',
                    impact: 'This Practice enhances students, intellectual, communication skills.'
                  },
                  {
                    sn: 15,
                    practice: 'Designing Quizzes',
                    context: 'Quizzes helps to expand students knowledge and helps to explore new sills. Quizzes are designed in such a manner that to solve that, it requires critical thinking and extensive research. Quiz is based on calculations and theory of concepts. Marks calculated based on the number of points assigned to each question. Quiz is in the form of MCQ are also assigned to students. MCQs are found to be flexible to various levels of learning outcomes from simple recall of content to more complex level such as students ability to examine facts, understanding concepts and principles. It helps to assess students quickly and effectively students knowledge about a particular idea or concept.',
                    impact: 'This Practice enhances critical thinking skills and improve subject knowledge.'
                  },
                  {
                    sn: 16,
                    practice: 'Group Discussion',
                    context: 'Group discussion on study topics plays a vital role in understanding the topic. Discussing the topic among classmates helps in learning a topic with perfection. It enhances the subject knowledge. It helps in exploring more ideas about the topic. It helps students to realize their mistakes and weakness. It builds self-confidence and improves communication skills.',
                    impact: 'This Practice develops skills in interpersonal communication and expressing views in a clear and concise manner.'
                  },
                  {
                    sn: 17,
                    practice: 'New Experiment development and testing',
                    context: 'Main objective of this teaching learning tool is that it helps the students to develop their own experiments utilizing knowledge and increase the utilization of infrastructure facilities (Software, Computer, Instrument, Laboratory Equipments). It helps to develop logical skills and technical manuscript writing skills in students. Students design new experiment which is not included in their experimental list. They identify the experiment, develop outline of experiment (Circuit Diagram, flowchart, algorithm, etc), perform the experiment and prepare the result.',
                    impact: 'This practice inculcates self-learning which helps the students to develop their own experiments.'
                  },
                  {
                    sn: 18,
                    practice: 'Mini/Term/Short Projects (Design/Fabrication/Simulation/Software/Hardware Development)',
                    context: 'It helps students to gain expertise in their subject, students collect the information related with the topic from different online and open sources and demonstrate their presentations skills by presenting the information. They learn to communicate effectively and express their ideas and opinion about the project work. Students form a group of 2 or 3 and based on their interest select a mini project or term project or short project. They access information through various resources and summarize the main idea.',
                    impact: 'This Practice expands technical knowledge, students develop the skills in terms of software solutions and implementing them for industrial/social problems.'
                  },
                  {
                    sn: 19,
                    practice: 'Think Pair and share',
                    context: 'Think-pair-share (TPS) is a collaborative learning strategy where students work together to solve a problem or answer a question about a given topic. This strategy requires students to think individually about a topic or answer to a question and share ideas with classmates. Students pair up to discuss their thoughts on a specific question about the topic. Students "think" about what they know or have learned about the topic. Each student is paired with another student or a small group. Students share their thinking with their partners.',
                    impact: 'This Practice enhances thinking, work and communication skills of students.'
                  }
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-blue-600 font-semibold text-center align-top border border-gray-300">{item.sn}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium align-top border border-gray-300">{item.practice}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed align-top border border-gray-300">{item.context}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed align-top border border-gray-300">{item.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
          <p className="text-gray-700 leading-relaxed">
            <strong>The success of these practices results qualitatively as well as quantitatively.</strong> The qualitative factor improves student's curiosity and desire to learn. Also it changes student's perspective towards life. The quantitative factor improves academic performance and participation in co-curricular activities. Also Alumni of SSGMCE doing very well in corporate world.
          </p>
        </div>
      </div>
    </GenericPage>
  );
};

export default TeachingLearning;
