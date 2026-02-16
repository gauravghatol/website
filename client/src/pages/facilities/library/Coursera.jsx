import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";

const Coursera = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Coursera@SSGMCE | SSGMCE Library";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Coursera@SSGMCE"
        subtitle="Global Learning Opportunities"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                About Coursera Partnership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                SSGMCE provides students and faculty access to Coursera courses
                through institutional subscription. This partnership enables
                learners to access world-class courses from top universities and
                companies globally.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Popular Coursera Specializations
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Specialization
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Offered By
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Courses
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Duration
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Enrollments
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        spec: "Google Data Analytics Professional Certificate",
                        by: "Google",
                        courses: 8,
                        duration: "6 months",
                        enroll: 45,
                      },
                      {
                        spec: "IBM Data Science Professional Certificate",
                        by: "IBM",
                        courses: 9,
                        duration: "5 months",
                        enroll: 38,
                      },
                      {
                        spec: "Deep Learning Specialization",
                        by: "DeepLearning.AI",
                        courses: 5,
                        duration: "3 months",
                        enroll: 52,
                      },
                      {
                        spec: "Machine Learning by Andrew Ng",
                        by: "Stanford University",
                        courses: 1,
                        duration: "2 months",
                        enroll: 67,
                      },
                      {
                        spec: "Google IT Support Professional Certificate",
                        by: "Google",
                        courses: 5,
                        duration: "6 months",
                        enroll: 34,
                      },
                      {
                        spec: "AWS Cloud Solutions Architect",
                        by: "Amazon Web Services",
                        courses: 4,
                        duration: "3 months",
                        enroll: 28,
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.spec}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.by}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.courses}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.duration}
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

            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                How to Access
              </h3>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>
                  Visit the library and register for Coursera access with your
                  college email ID
                </li>
                <li>
                  You will receive an invitation link to join SSGMCE's Coursera
                  Campus
                </li>
                <li>
                  Create your Coursera account using the institutional email
                </li>
                <li>
                  Browse and enroll in any course available in the catalog
                </li>
                <li>Complete assignments and projects to earn certificates</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursera;
