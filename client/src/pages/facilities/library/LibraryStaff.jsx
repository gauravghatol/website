import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";

const LibraryStaff = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Library Staff | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Library Staff"
        subtitle="Meet Our Library Team"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Library Staff Directory
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Name
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Designation
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Qualification
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Responsibilities
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Name)",
                        desig: "Chief Librarian",
                        qual: "M.Lib.Sc., Ph.D.",
                        resp: "Overall library administration, policy formulation",
                        contact: "Ext: 120",
                      },
                      {
                        name: "(Name)",
                        desig: "Deputy Librarian",
                        qual: "M.Lib.Sc., M.Phil.",
                        resp: "Cataloging, classification, digital resources",
                        contact: "Ext: 121",
                      },
                      {
                        name: "(Name)",
                        desig: "Assistant Librarian",
                        qual: "M.Lib.Sc.",
                        resp: "Acquisition, circulation desk management",
                        contact: "Ext: 122",
                      },
                      {
                        name: "(Name)",
                        desig: "Assistant Librarian",
                        qual: "M.Lib.Sc.",
                        resp: "Reference services, user education",
                        contact: "Ext: 123",
                      },
                      {
                        name: "(Name)",
                        desig: "Library Assistant",
                        qual: "B.Lib.Sc.",
                        resp: "Periodicals section, binding & maintenance",
                        contact: "Ext: 124",
                      },
                      {
                        name: "(Name)",
                        desig: "Library Assistant",
                        qual: "B.Lib.Sc.",
                        resp: "Book bank, stock verification",
                        contact: "Ext: 125",
                      },
                      {
                        name: "(Name)",
                        desig: "Technical Assistant",
                        qual: "B.E. (IT)",
                        resp: "OPAC system, digital library, IT support",
                        contact: "Ext: 126",
                      },
                      {
                        name: "(Name)",
                        desig: "Library Attendant",
                        qual: "12th Pass",
                        resp: "Book arrangement, cleaning, user assistance",
                        contact: "Ext: 127",
                      },
                      {
                        name: "(Name)",
                        desig: "Library Attendant",
                        qual: "12th Pass",
                        resp: "Reading hall supervision, security",
                        contact: "Ext: 128",
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
                          {staff.qual}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.resp}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryStaff;
