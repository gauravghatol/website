import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";

const Financial = () => {
  const auditedReports = [
    {
      serial: 1,
      year: "2024-25",
      url: "/uploads/documents/financial/01_Balance_Sheet_2024-25.pdf",
    },
    {
      serial: 2,
      year: "2023-24",
      url: "/uploads/documents/financial/02_Balance_Sheet_2023-24.pdf",
    },
    {
      serial: 3,
      year: "2022-23",
      url: "/uploads/documents/financial/03_Financial_Statement_2022-23.pdf",
    },
    {
      serial: 4,
      year: "2021-22",
      url: "/uploads/documents/financial/04_Financial_Statement_2021-22.pdf",
    },
    {
      serial: 5,
      year: "2020-21",
      url: "/uploads/documents/financial/05_Financial_Statement_2020-21.pdf",
    },
    {
      serial: 6,
      year: "2019-20",
      url: "/uploads/documents/financial/06_Financial_Statement_2019-20.pdf",
    },
    {
      serial: 7,
      year: "2018-19",
      url: "/uploads/documents/financial/07_Financial_Statement_2018-19.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Financial Statements"
        subtitle="Audited Reports and Financial Disclosures"
        backgroundImage="https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80"
      />

      <div className="mx-auto w-full max-w-[120rem] px-4 py-10 sm:px-5 sm:py-12 lg:px-6">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <DocumentsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Header Info */}
            <div className="mb-6 rounded-lg bg-white p-5 shadow-md sm:mb-8 sm:p-6">
              <h2 className="mb-3 text-[clamp(1.2rem,2.8vw,1.5rem)] font-bold text-ssgmce-blue">
                Audited Reports
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Year-wise audited financial reports of SSGMCE, Shegaon demonstrating financial transparency and accountability.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="w-14 border-r px-3 py-3 text-left text-xs font-bold text-gray-800 sm:w-16 sm:px-6 sm:py-4 sm:text-base">Serial No.</th>
                    <th className="border-r px-3 py-3 text-left text-xs font-bold text-gray-800 sm:px-6 sm:py-4 sm:text-base">Academic Year/ Session</th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-800 sm:px-6 sm:py-4 sm:text-base">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {auditedReports.map((report) => (
                    <tr key={report.serial} className="border-b hover:bg-gray-50">
                      <td className="border-r px-3 py-3 text-center text-sm font-medium text-gray-700 sm:px-6 sm:py-4">{report.serial}</td>
                      <td className="border-r px-3 py-3 text-sm text-gray-700 sm:px-6 sm:py-4">{report.year}</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4">
                        <a
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline sm:text-base"
                        >
                          Click here
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
