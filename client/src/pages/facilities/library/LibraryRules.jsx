import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import LibrarySidebar from "../../../components/LibrarySidebar";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const LibraryRules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Library Rules | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Library Rules"
        subtitle="Guidelines for Library Usage"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <LibrarySidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* Borrowing Rules Table */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Book Borrowing Rules
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Category
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Books Allowed
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Duration
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Renewal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Undergraduate Students
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        3
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        14 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Renewable once for 7 days
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Postgraduate Students
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        5
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        21 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Renewable once for 10 days
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Faculty Members
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        10
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        30 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Renewable twice for 15 days each
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Research Scholars
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        6
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        30 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Renewable once for 15 days
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Non-Teaching Staff
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl font-bold text-ssgmce-orange">
                        3
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                        15 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                        Renewable once for 7 days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Fine Structure */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Fine Structure for Overdue Books
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Duration Overdue
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Fine per Book per Day
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Additional Penalty
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        1-7 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹2
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        None
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        8-14 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹5
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Library card suspension for 3 days
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        15-30 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹10
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Library card suspension for 7 days
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold">
                        More than 30 Days
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹15
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">
                        Possible suspension from library + no dues clearance
                        withheld
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* General Rules */}
            <section className="rounded-xl border border-gray-200 bg-white shadow-sm p-8">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-6">
                General Library Rules
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 mb-1">
                      Mandatory ID Card
                    </p>
                    <p className="text-sm text-gray-700">
                      All users must carry their library card/ID card for entry
                      and book transactions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 mb-1">
                      Maintain Silence
                    </p>
                    <p className="text-sm text-gray-700">
                      Library is a silent zone. Mobile phones must be switched
                      to silent mode.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 mb-1">
                      Handle with Care
                    </p>
                    <p className="text-sm text-gray-700">
                      Books and library property must be handled with care. Any
                      damage will be charged.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800 mb-1">
                      Reference Books
                    </p>
                    <p className="text-sm text-gray-700">
                      Reference books, encyclopedias, and rare books are for
                      in-library use only.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <FaTimesCircle className="text-red-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 mb-1">
                      No Food or Drinks
                    </p>
                    <p className="text-sm text-gray-700">
                      Eating, drinking, or smoking inside the library is
                      strictly prohibited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <FaTimesCircle className="text-red-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 mb-1">
                      No Writing in Books
                    </p>
                    <p className="text-sm text-gray-700">
                      Writing, underlining, or marking in library books is not
                      allowed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <FaTimesCircle className="text-red-600 mt-1 text-xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 mb-1">
                      Book Sharing Prohibited
                    </p>
                    <p className="text-sm text-gray-700">
                      Books issued on your card cannot be transferred to another
                      person.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Book Loss/Damage Policy */}
            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-orange">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Book Loss or Damage Policy
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  In case of loss or damage to library books, the following
                  procedure applies:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    The borrower must replace the lost book with the same
                    edition
                  </li>
                  <li>
                    If the same edition is not available, a newer edition must
                    be provided
                  </li>
                  <li>
                    In case neither is available, a fine equivalent to 150% of
                    the book's current market price will be charged
                  </li>
                  <li>
                    Damaged books (torn pages, water damage, etc.) must be
                    replaced or repaired at borrower's expense
                  </li>
                  <li>
                    Repeated violations may lead to temporary or permanent
                    suspension of library privileges
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryRules;
