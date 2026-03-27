import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";

const Tattwadarshi = () => {
  const magazines = [
    {
      serial: 1,
      year: "2025",
      url: "/uploads/documents/tattwadarshi/07_Tattwadarshi_2025.pdf",
    },
    {
      serial: 2,
      year: "2024",
      url: "/uploads/documents/tattwadarshi/06_Tattwadarshi_2024.pdf",
    },
    {
      serial: 3,
      year: "2023",
      url: "/uploads/documents/tattwadarshi/05_Tattwadarshi_2023.pdf",
    },
    {
      serial: 4,
      year: "2022",
      url: "/uploads/documents/tattwadarshi/04_Tattwadarshi_2022.pdf",
    },
    {
      serial: 5,
      year: "2021",
      url: "/uploads/documents/tattwadarshi/03_Tattwadarshi_2021.pdf",
    },
    {
      serial: 6,
      year: "2020",
      url: "/uploads/documents/tattwadarshi/02_Tattwadarshi_2020.pdf",
    },
    {
      serial: 7,
      year: "2019",
      url: "/uploads/documents/tattwadarshi/01_Tattwadarshi_2019.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="e-Tattwadarshi"
        subtitle="Technical Magazine"
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
                e-Tattwadarshi
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tattwadarshi is the technical magazine of SSGMCE featuring research papers, technical articles, innovation reports, and student projects. The magazine received the Second Prize in the Magazine Competition at Sant Gadge Baba Amravati University (SGBAU), Amravati.
              </p>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="w-14 border-r px-3 py-3 text-left text-xs font-bold text-gray-800 sm:w-20 sm:px-6 sm:py-4 sm:text-base">Serial No.</th>
                    <th className="border-r px-3 py-3 text-left text-xs font-bold text-gray-800 sm:px-6 sm:py-4 sm:text-base">Year</th>
                    <th className="px-3 py-3 text-left text-xs font-bold text-gray-800 sm:px-6 sm:py-4 sm:text-base">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {magazines.map((magazine) => (
                    <tr key={magazine.serial} className="border-b hover:bg-gray-50">
                      <td className="border-r px-3 py-3 text-center text-sm font-medium text-gray-700 sm:px-6 sm:py-4">{magazine.serial}</td>
                      <td className="border-r px-3 py-3 text-sm text-gray-700 sm:px-6 sm:py-4">{magazine.year}</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4">
                        <a
                          href={magazine.url}
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

export default Tattwadarshi;
