import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import AdmissionsSidebar from "../../components/AdmissionsSidebar";

const SeatMatrix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Seat Matrix | SSGMCE Admissions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Seat Matrix"
        subtitle="Intake Capacity for B.E. & M.Tech Programs"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <AdmissionsSidebar />
          </div>

          <div className="lg:col-span-9 space-y-8">
            {/* B.E. Seat Matrix */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                B.E. (Bachelor of Engineering) - Seat Matrix 2024-25
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Branch
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total Intake
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        OPEN
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        SC
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        ST
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        VJ/DT/NT
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        OBC
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        EWS
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        TFWS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        branch: "Computer Science & Engineering",
                        total: 120,
                        open: 60,
                        sc: 16,
                        st: 9,
                        vjnt: 12,
                        obc: 36,
                        ews: 12,
                        tfws: 12,
                      },
                      {
                        branch: "Information Technology",
                        total: 60,
                        open: 30,
                        sc: 8,
                        st: 5,
                        vjnt: 6,
                        obc: 18,
                        ews: 6,
                        tfws: 6,
                      },
                      {
                        branch: "Electronics & Telecommunication",
                        total: 120,
                        open: 60,
                        sc: 16,
                        st: 9,
                        vjnt: 12,
                        obc: 36,
                        ews: 12,
                        tfws: 12,
                      },
                      {
                        branch: "Electrical Engineering (Electronics & Power)",
                        total: 60,
                        open: 30,
                        sc: 8,
                        st: 5,
                        vjnt: 6,
                        obc: 18,
                        ews: 6,
                        tfws: 6,
                      },
                      {
                        branch: "Mechanical Engineering",
                        total: 60,
                        open: 30,
                        sc: 8,
                        st: 5,
                        vjnt: 6,
                        obc: 18,
                        ews: 6,
                        tfws: 6,
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-blue-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.branch}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-xl">
                          {row.total}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold">
                          {row.open}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.sc}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.st}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.vjnt}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.obc}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.ews}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center">
                          {row.tfws}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL B.E. SEATS
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        420
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        210
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        56
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        33
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        42
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        126
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        42
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center">
                        42
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* M.Tech Seat Matrix */}
            <section>
              <h3 className="text-2xl font-bold text-ssgmce-blue mb-4">
                M.Tech (Post-Graduate) - Seat Matrix 2024-25
              </h3>
              <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Specialization
                      </th>
                      <th className="px-6 py-3 text-center text-sm font-bold text-gray-700 border border-gray-300">
                        Total Intake
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700 border border-gray-300">
                        Eligibility
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        spec: "M.Tech - Computer Science & Engineering",
                        intake: 18,
                        elig: "B.E./B.Tech in CSE/IT/E&TC + GATE Score",
                      },
                      {
                        spec: "M.Tech - VLSI & Embedded Systems",
                        intake: 18,
                        elig: "B.E./B.Tech in E&TC/Electrical/Electronics + GATE Score",
                      },
                      {
                        spec: "M.Tech - Structural Engineering",
                        intake: 18,
                        elig: "B.E./B.Tech in Civil Engineering + GATE Score",
                      },
                      {
                        spec: "M.Tech - Heat Power Engineering",
                        intake: 18,
                        elig: "B.E./B.Tech in Mechanical Engineering + GATE Score",
                      },
                    ].map((row, idx) => (
                      <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "" : "bg-gray-50"} hover:bg-orange-50`}
                      >
                        <td className="border border-gray-300 px-6 py-4 font-semibold text-ssgmce-blue">
                          {row.spec}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center font-bold text-ssgmce-orange text-xl">
                          {row.intake}
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-sm text-gray-700">
                          {row.elig}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold text-gray-800 border-t border-gray-300">
                      <td className="border border-gray-300 px-6 py-4">
                        TOTAL M.TECH SEATS
                      </td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-2xl">
                        72
                      </td>
                      <td className="border border-gray-300 px-6 py-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Category Abbreviations */}
            <section className="rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6">
              <h3 className="text-xl font-bold text-ssgmce-blue mb-3">
                Category Abbreviations
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <p>
                  <strong>OPEN:</strong> Open Category (General Merit)
                </p>
                <p>
                  <strong>SC:</strong> Scheduled Caste
                </p>
                <p>
                  <strong>ST:</strong> Scheduled Tribe
                </p>
                <p>
                  <strong>VJ/DT/NT:</strong> Vimukta Jati/Denotified
                  Tribes/Nomadic Tribes
                </p>
                <p>
                  <strong>OBC:</strong> Other Backward Class
                </p>
                <p>
                  <strong>EWS:</strong> Economically Weaker Section
                </p>
                <p>
                  <strong>TFWS:</strong> Tuition Fee Waiver Scheme (Open
                  Category - Income based)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMatrix;
