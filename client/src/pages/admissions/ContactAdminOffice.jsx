import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactAdminOffice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Admin Office | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Contact Admission Office"
        subtitle="Get in Touch with Us"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <FaPhone className="text-3xl" />
                  <h3 className="text-xl font-bold">Call Us</h3>
                </div>
                <p className="text-lg mb-2">+91-7265-252274</p>
                <p className="text-sm opacity-90">Main Office Extension</p>
                <p className="text-lg mt-3">+91-7265-252275</p>
                <p className="text-sm opacity-90">Admission Desk Direct</p>
              </div>

              <div className="bg-gradient-to-br from-ssgmce-orange to-orange-600 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <FaEnvelope className="text-3xl" />
                  <h3 className="text-xl font-bold">Email Us</h3>
                </div>
                <p className="text-lg mb-2">admission@ssgmce.ac.in</p>
                <p className="text-sm opacity-90">For Admission Queries</p>
                <p className="text-lg mt-3">info@ssgmce.ac.in</p>
                <p className="text-sm opacity-90">General Information</p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <FaClock className="text-3xl" />
                  <h3 className="text-xl font-bold">Office Hours</h3>
                </div>
                <p className="text-lg mb-1">
                  Monday - Friday: 10:00 AM - 5:00 PM
                </p>
                <p className="text-lg mb-1">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-sm opacity-90 mt-2">
                  Closed on Sundays & Public Holidays
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-3xl" />
                  <h3 className="text-xl font-bold">Visit Us</h3>
                </div>
                <p className="text-base">
                  Shri Sant Gajanan Maharaj College of Engineering
                </p>
                <p className="text-base mt-2">Shegaon-Buldhana Road,</p>
                <p className="text-base">Shegaon - 444203, Dist. Buldhana</p>
                <p className="text-base">Maharashtra, India</p>
              </div>
            </div>

            {/* Admission Office Staff Directory */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Admission Office - Staff Directory
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Name & Designation
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Responsibilities
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-left">
                        Contact
                      </th>
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Availability
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Dr. (Name)",
                        desig: "Dean (Admissions)",
                        resp: "Overall admission policy, CAP coordination, seat allocation oversight",
                        contact: "Ext: 201, dean.admissions@ssgmce.ac.in",
                        avail: "Mon-Fri 11AM-4PM",
                      },
                      {
                        name: "(Name)",
                        desig: "Admission Officer",
                        resp: "CAP registration guidance, document verification, admission formalities",
                        contact: "Ext: 202, admission@ssgmce.ac.in",
                        avail: "Mon-Sat 10AM-5PM",
                      },
                      {
                        name: "(Name)",
                        desig: "Assistant Admission Officer",
                        resp: "Fee collection, receipt generation, scholarship coordination",
                        contact: "Ext: 203, fees@ssgmce.ac.in",
                        avail: "Mon-Sat 10AM-5PM",
                      },
                      {
                        name: "(Name)",
                        desig: "Document Verification Officer",
                        resp: "Original document verification, certificate authentication",
                        contact: "Ext: 204, documents@ssgmce.ac.in",
                        avail: "Mon-Sat 10AM-2PM",
                      },
                      {
                        name: "(Name)",
                        desig: "Admission Clerk",
                        resp: "Application processing, student database entry, query resolution",
                        contact: "Ext: 205, admissiondesk@ssgmce.ac.in",
                        avail: "Mon-Sat 10AM-5PM",
                      },
                    ].map((staff, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4">
                          <strong className="text-ssgmce-blue">
                            {staff.name}
                          </strong>
                          <br />
                          <span className="text-sm text-gray-600">
                            {staff.desig}
                          </span>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.resp}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {staff.contact}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center text-xs">
                          {staff.avail}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Important Notices */}
            <section className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">
                Important Information
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  • Visit the admission office with all original documents
                  during the specified CAP reporting period
                </li>
                <li>
                  • Document verification is done on first-come, first-served
                  basis - arrive early to avoid rush
                </li>
                <li>
                  • Bring 2 sets of photocopies of all documents (self-attested)
                </li>
                <li>
                  • Fee payment can be made via online transfer, DD, or cash at
                  the designated counter
                </li>
                <li>
                  • For urgent queries during admission season, WhatsApp support
                  available on +91-9876543210
                </li>
                <li>
                  • Check the official website regularly for admission notices
                  and updates
                </li>
              </ul>
            </section>

            {/* Location Map Placeholder */}
            <section className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Campus Location
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-6xl text-ssgmce-orange mx-auto mb-3" />
                  <p className="text-gray-600 font-semibold">
                    SSGMCE Shegaon Campus
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Approximately 15 km from Shegaon Railway Station
                  </p>
                  <a
                    href="https://www.google.com/maps/place/SSGMCE+Shegaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-ssgmce-blue text-white px-6 py-2 rounded-lg hover:bg-ssgmce-dark-blue transition"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAdminOffice;
