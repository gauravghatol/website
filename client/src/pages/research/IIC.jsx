import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import ResearchSidebar from "../../components/ResearchSidebar";
import {
  FaStar,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaBullhorn,
  FaMedal,
} from "react-icons/fa";

const IIC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Institution’s Innovation Council | Research - SSGMCE";
  }, []);

  const activities = [
    {
      icon: FaLaptopCode,
      title: "Hackathons",
      desc: "Organizing internal and national level hackathons to solve real-world problems.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Talks",
      desc: "Inviting industry experts and successful entrepreneurs to share their journey.",
    },
    {
      icon: FaBullhorn,
      title: "Idea Competitions",
      desc: "Providing a platform for students to showcase their innovative ideas.",
    },
    {
      icon: FaMedal,
      title: "Success Stories",
      desc: "Celebrating achievements of student startups and innovators.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Institution’s Innovation Council (IIC)"
        subtitle="Ministry of Education (MoE) Initiative"
        breadcrumbs={[
          { label: "Research", link: "/research/overview" },
          { label: "IIC" },
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <ResearchSidebar />
          </div>

          <div className="lg:col-span-9 space-y-10">
            {/* Intro & Rating */}
            <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full border border-yellow-200">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold text-yellow-700">
                    4.5 Star Rating
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4 pr-32">
                About IIC
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ministry of Education (MoE), Govt. of India has established
                ‘MoE’s Innovation Cell (MIC)’ to systematically foster the
                culture of Innovation amongst all Higher Education Institutions
                (HEIs). The primary mandate of MIC is to encourage, inspire and
                nurture young students by supporting them to work with new ideas
                and transform them into prototypes while they are informative
                years.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SSGMCE has established the Institution’s Innovation Council
                (IIC) to promote innovation and entrepreneurship in the campus.
              </p>
            </section>

            {/* Activities Grid */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Key Activities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((act, idx) => {
                  const Icon = act.icon;
                  return (
                    <div
                      key={idx}
                      className="flex p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="mr-5">
                        <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                          <Icon className="text-xl" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-2">
                          {act.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{act.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Certificate/Badge (Visual placeholder) */}
            <section className="bg-gradient-to-r from-ssgmce-dark-blue to-ssgmce-blue text-white p-8 rounded-2xl text-center">
              <FaMedal className="text-6xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Excellence in Innovation
              </h3>
              <p className="text-blue-100">
                Consistent performer in MoE's IIC Star Rating
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIC;
