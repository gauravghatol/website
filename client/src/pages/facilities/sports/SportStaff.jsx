import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import SportsSidebar from "../../../components/SportsSidebar";

const SportStaff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sport Staff & Contact | SSGMCE";
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Sport Staff & Contact"
        subtitle="Our Sports Team"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <SportsSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Sports Department Staff
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Designation
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Sport Specialization
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Qualification
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Name)",
                        desig: "Director, Physical Education",
                        sport: "Overall Administration",
                        qual: "M.P.Ed., Ph.D.",
                        contact: "Ext: 105",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Senior Sports Coach",
                        sport: "Cricket & Athletics",
                        qual: "NIS Cricket, M.P.Ed.",
                        contact: "Ext: 106",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Sports Coach",
                        sport: "Football & Volleyball",
                        qual: "B.P.Ed., NIS Football",
                        contact: "Ext: 107",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Sports Coach",
                        sport: "Badminton & Table Tennis",
                        qual: "M.P.Ed., State Badminton Player",
                        contact: "Ext: 108",
                      },
                      {
                        name: "(Coach Name)",
                        desig: "Fitness Instructor",
                        sport: "Gymnasium & Fitness",
                        qual: "B.P.Ed., Certified Fitness Trainer",
                        contact: "Ext: 109",
                      },
                      {
                        name: "(Name)",
                        desig: "Sports Attendant",
                        sport: "Equipment Management",
                        qual: "12th Pass",
                        contact: "Ext: 110",
                      },
                    ].map((staff, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {staff.name}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 font-semibold">
                          {staff.desig}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.sport}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.qual}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-blue-50 border-l-4 border-ssgmce-orange p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-ssgmce-blue mb-3">
                Sports Department Contact
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-700">
                    <strong>Physical Education Office:</strong>
                  </p>
                  <p className="text-gray-600">
                    Phone: +91-7265-252274 (Ext: 105)
                  </p>
                  <p className="text-gray-600">Email: sports@ssgmce.ac.in</p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Office Hours:</strong>
                  </p>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">
                    Sports Ground: 6:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportStaff;
