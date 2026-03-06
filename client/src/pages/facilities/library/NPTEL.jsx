import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";

const NPTEL = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NPTEL | SSGMCE Library";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NPTEL - National Programme on Technology Enhanced Learning"
        subtitle="SWAYAM-NPTEL Local Chapter at SSGMCE"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                About NPTEL at SSGMCE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SSGMCE has established a SWAYAM-NPTEL Local Chapter to promote
                online learning through NPTEL courses. Students and faculty can
                access high-quality video lectures from IITs and IISc, attempt
                assignments, and earn certificates.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Course Enrollment Statistics (2023-24)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Semester
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Students Enrolled
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Faculty Enrolled
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Courses
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Certificates Earned
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        sem: "Jan-Apr 2024",
                        students: 245,
                        faculty: 18,
                        courses: 42,
                        certs: 187,
                      },
                      {
                        sem: "Jul-Oct 2023",
                        students: 198,
                        faculty: 15,
                        courses: 38,
                        certs: 156,
                      },
                      {
                        sem: "Jan-Apr 2023",
                        students: 178,
                        faculty: 12,
                        courses: 35,
                        certs: 142,
                      },
                      {
                        sem: "Jul-Oct 2022",
                        students: 156,
                        faculty: 10,
                        courses: 28,
                        certs: 128,
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.sem}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.students}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.faculty}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.courses}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.certs}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        777
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl">
                        55
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        -
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl text-ssgmce-orange">
                        613
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Popular NPTEL Courses
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Course Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Offered By
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Enrollments (2023-24)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        course: "Programming in C++",
                        by: "IIT Kharagpur",
                        enroll: 68,
                      },
                      {
                        course: "Database Management Systems",
                        by: "IIT Madras",
                        enroll: 54,
                      },
                      {
                        course: "Machine Learning",
                        by: "IIT Madras",
                        enroll: 47,
                      },
                      {
                        course: "Data Structures & Algorithms",
                        by: "IIT Bombay",
                        enroll: 42,
                      },
                      {
                        course: "Digital Signal Processing",
                        by: "IIT Bombay",
                        enroll: 38,
                      },
                      {
                        course: "Antenna Theory & Design",
                        by: "IIT Kanpur",
                        enroll: 35,
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-orange-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.course}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">
                          {row.by}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange">
                          {row.enroll}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPTEL;
