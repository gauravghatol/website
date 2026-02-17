import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";

const FeeStructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fee Structure | SSGMCE Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Fee Structure"
        subtitle="Academic Year 2025-26"
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Header Note */}
            <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                Fee Structure for Academic Year 2025-26
              </h3>
              <p className="text-sm opacity-90">
                * Fees are decided by Fees Regulating Authority, M.S. Mumbai and
                will be binding to all the admitted candidates for the academic
                year 2025-26.
              </p>
            </div>

            {/* First Year B.E. Fee Structure */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                First Year Bachelor of Engineering (B.E.)
              </h2>
              <p className="text-gray-600 mb-4">
                प्रथम वर्ष अभियांत्रिकी (पदवी)
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Particulars / विवरण
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        Open/Against CAP
                        <br />
                        (खुला/कॅप विरुध्द)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        OBC/EBC/EWS/SEBC
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        VJ/NT/SBC/TFWS
                        <br />
                        (Girls/OBC/EWS/SEBC)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        SC/ST
                        <br />
                        (अजा/अजजा)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Tuition Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          शैक्षणिक शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 1,16,521.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 58,261.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Development Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          विकास शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-ssgmce-blue text-white font-bold">
                      <td className="border border-gray-300 px-4 py-3">
                        Total / एकूण
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 1,34,000.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 75,740.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        00.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Direct Second Year B.E. Fee Structure */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                Direct Second Year Bachelor of Engineering (B.E.)
              </h2>
              <p className="text-gray-600 mb-4">
                प्रत्यक्ष द्वितीय वर्ष अभियांत्रिकी (पदवी)
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Particulars / विवरण
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        Open/Against CAP
                        <br />
                        (खुला/कॅप विरुध्द)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        OBC/EBC/EWS/SEBC
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        VJ/NT/SBC/TFWS
                        <br />
                        (Girls/OBC/EWS/SEBC)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        SC/ST
                        <br />
                        (अजा/अजजा)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Tuition Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          शैक्षणिक शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 1,16,521.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 58,261.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Development Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          विकास शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-ssgmce-blue text-white font-bold">
                      <td className="border border-gray-300 px-4 py-3">
                        Total / एकूण
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 1,34,000.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 75,740.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 17,479.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        00.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* MBA Fee Structure */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                First Year Master in Business Administration (MBA)
              </h2>
              <p className="text-gray-600 mb-4">
                प्रथम वर्ष व्यवस्थापन प्रशासन पदव्युत्तर (एम.बी.ए.)
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Particulars / विवरण
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        Open/Against CAP
                        <br />
                        (खुला/कॅप विरुध्द)
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        OBC/EBC/EWS/SEBC
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        VJ/NT/SBC/TFWS/EWS/SEBC
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        SC/ST
                        <br />
                        (अजा/अजजा)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Tuition Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          शैक्षणिक शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 89,525.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 44,763.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Development Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          विकास शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 10,475.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 10,475.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 10,475.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-ssgmce-blue text-white font-bold">
                      <td className="border border-gray-300 px-4 py-3">
                        Total / एकूण
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 1,00,000.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 55,238.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 10,475.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        00.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* M.E. Fee Structure */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-ssgmce-blue mb-6">
                First Year Master in Engineering (PG-M.E.)
              </h2>
              <p className="text-gray-600 mb-4">
                प्रथम वर्ष पदव्युत्तर अभियांत्रिकी (पदव्युत्तर एम.ई.)
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">
                        Particulars / विवरण
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        Open/OBC/SBC/VJ/NT/ST
                        <br />
                        Against CAP
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-right">
                        SC
                        <br />
                        (CAP Scholarship Only)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Tuition Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          शैक्षणिक शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 46,975.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">
                        Development Fees
                        <br />
                        <span className="text-sm text-gray-600">
                          विकास शुल्क
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ₹ 5,025.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        00.00
                      </td>
                    </tr>
                    <tr className="bg-ssgmce-blue text-white font-bold">
                      <td className="border border-gray-300 px-4 py-3">
                        Total / एकूण
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        ₹ 52,000.00
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right text-lg">
                        00.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Additional Information */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-ssgmce-blue mb-6">
                Important Information
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Payment Mode:</strong> Fees can be paid online
                    through the college portal or via Demand Draft in favor of
                    "Shri Sant Gajanan Maharaj College of Engineering"
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Refund Policy:</strong> Fees once paid are generally
                    non-refundable. However, refunds may be considered in
                    special circumstances as per college and DTE norms.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Hostel Fees:</strong> Hostel and mess charges are
                    separate and vary based on the type of accommodation.
                    Contact the hostel office for detailed information.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Scholarship:</strong> Eligible students can apply
                    for various government and institutional scholarships which
                    may cover partial or full tuition fees.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ssgmce-orange font-bold">•</span>
                  <p>
                    <strong>Fee Revision:</strong> The fee structure is subject
                    to revision as per university and government directives.
                    Students will be notified in advance of any changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-blue-50 border-l-4 border-ssgmce-blue p-6 rounded-lg">
              <h3 className="text-lg font-bold text-ssgmce-blue mb-3">
                Have Questions About Fees?
              </h3>
              <p className="text-gray-700 mb-3">
                Contact our accounts department for fee-related queries:
              </p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>Phone:</strong> 07265-252211 / 252212
                </p>
                <p>
                  <strong>Email:</strong> admission@ssgmce.ac.in
                </p>
                <p>
                  <strong>Timings:</strong> Monday to Saturday, 10:00 AM - 5:00
                  PM
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
