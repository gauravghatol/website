import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaDownload,
  FaFlask,
  FaLaptopCode,
  FaProjectDiagram,
} from "react-icons/fa";
import GenericPage from "../../components/GenericPage";
import AcademicsSidebar from "../../components/AcademicsSidebar";

const TEACHING_PROCESS_PDF =
  "/uploads/documents/academics/teaching-learning/Teaching_Learning_Process2022.pdf";

const keyPillars = [
  {
    icon: FaBookOpen,
    title: "Curriculum Delivery",
    description:
      "Outcome-based curriculum delivery using planned lectures, tutorials, and classroom discussions.",
  },
  {
    icon: FaFlask,
    title: "Practical Learning",
    description:
      "Laboratory sessions, mini projects, and demonstrations to connect theory with application.",
  },
  {
    icon: FaLaptopCode,
    title: "Digital Support",
    description:
      "Use of ICT tools, online learning resources, and blended learning to strengthen understanding.",
  },
  {
    icon: FaProjectDiagram,
    title: "Projects and Evaluation",
    description:
      "Continuous assessment through assignments, sessional tests, seminars, and project work.",
  },
];

const TeachingLearning = () => {
  return (
    <GenericPage
      title="Teaching Learning Process"
      sidebar={<AcademicsSidebar />}
    >
      <div className="space-y-8">
        <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6">
          <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-gray-800">
            <FaChalkboardTeacher className="text-ssgmce-blue" />
            Overview
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The Teaching Learning Process at SSGMCE focuses on outcome-based
            education, practical exposure, and continuous improvement. It is
            designed to build strong fundamentals, problem-solving ability, and
            professional readiness through classroom teaching, lab work, and
            project-based learning.
          </p>
          <p className="mt-3 text-sm text-gray-600">
            This page provides a short summary. For complete details, refer to
            the official document.
          </p>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h3 className="text-lg font-bold text-gray-800">
              Key Components of the Process
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2">
            {keyPillars.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-100 bg-gray-50 p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <item.icon className="text-ssgmce-blue" />
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Continuous Improvement Focus
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>Regular academic planning and monitoring at department level.</li>
            <li>Student feedback and performance-based corrective actions.</li>
            <li>
              Integration of innovative practices to improve engagement and
              outcomes.
            </li>
            <li>
              Alignment with university guidelines and institutional quality
              standards.
            </li>
          </ul>
        </section>

        <section className="rounded-xl bg-gradient-to-r from-ssgmce-blue to-blue-800 p-6 text-white">
          <h3 className="text-lg font-bold">
            Teaching Learning Process 2022 (Official PDF)
          </h3>
          <p className="mt-2 text-sm text-blue-100">
            View or download the complete document for detailed process flow,
            policy points, and implementation framework.
          </p>
          <a
            href={TEACHING_PROCESS_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ssgmce-blue hover:bg-gray-100"
          >
            <FaDownload />
            View / Download PDF
          </a>
        </section>
      </div>
    </GenericPage>
  );
};

export default TeachingLearning;
