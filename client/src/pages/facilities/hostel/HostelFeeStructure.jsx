import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import HostelSidebar from "../../../components/HostelSidebar";

const HostelFeeStructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hostel Fee Structure | SSGMCE";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Hostel Fee Structure"
        subtitle="Annual Hostel Charges"
        backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <HostelSidebar />
          </div>
          <div className="lg:col-span-9 space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Annual Hostel Fee Breakdown
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Fee Component
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Amount (₹)
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Details
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Refundable
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        component: "Room Rent",
                        amount: "12,000",
                        details: "Annual room accommodation charges",
                        refund: "No",
                      },
                      {
                        component: "Electricity Charges",
                        amount: "3,000",
                        details: "Prepaid annual electricity",
                        refund: "Partial*",
                      },
                      {
                        component: "Water & Maintenance",
                        amount: "2,500",
                        details: "Water supply, cleaning, repairs",
                        refund: "No",
                      },
                      {
                        component: "Security & Amenities",
                        amount: "1,500",
                        details: "Security services, common facilities",
                        refund: "No",
                      },
                      {
                        component: "Caution Money (First Year)",
                        amount: "5,000",
                        details: "Security deposit for damages",
                        refund: "Yes",
                      },
                      {
                        component: "Admission Fee (First Year)",
                        amount: "1,000",
                        details: "One-time admission fee",
                        refund: "No",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.component}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                          ₹ {row.amount}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.details}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              row.refund === "Yes"
                                ? "bg-green-100 text-green-700"
                                : row.refund === "Partial*"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {row.refund}
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL (First Year)
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        ₹ 25,000
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-4"
                        colSpan="2"
                      >
                        Includes all charges
                      </td>
                    </tr>
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL (Subsequent Years)
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        ₹ 19,000
                      </td>
                      <td
                        className="border border-gray-300 px-6 py-4"
                        colSpan="2"
                      >
                        Excluding caution money & admission fee
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Partial refund: Unused electricity amount refunded at year end
                after meter reading
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Mess Charges (Optional)
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Mess Type
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Monthly Charges
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Meal Times
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Menu Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Standard Vegetarian
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹ 3,500
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        Breakfast, Lunch, Evening Snacks, Dinner
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        All vegetarian dishes
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Jain Vegetarian
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹ 3,800
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        Breakfast, Lunch, Evening Snacks, Dinner
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        Jain food (no onion/garlic)
                      </td>
                    </tr>
                    <tr className="hover:bg-orange-50">
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                        Breakfast + Dinner Only
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-xl font-bold text-ssgmce-orange">
                        ₹ 2,200
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        Breakfast (7-9 AM), Dinner (8-10 PM)
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-sm">
                        Vegetarian
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border-l-4 border-ssgmce-blue">
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                Payment Details & Important Notes
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    <strong>Payment Mode:</strong> Online payment, DD, or cash
                    at hostel office
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    <strong>Payment Deadline:</strong> Within 15 days of hostel
                    admission
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    <strong>Late Fee:</strong> ₹100 per day after deadline
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    <strong>Refund Policy:</strong> Caution money refunded
                    within 30 days of leaving hostel, after damage assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold text-xl">
                    •
                  </span>
                  <span>
                    <strong>Concession:</strong> Fee concession available for
                    economically weaker students on application to Chief Warden
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelFeeStructure;
