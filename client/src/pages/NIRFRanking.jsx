import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaFilePdf, FaDownload, FaCalendarAlt } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

// Import all NIRF PDFs
import NIRF_2025_26_Overall from "../assets/images/NIRF/NIRF_2025-26_Overall.pdf";
import NIRF_2025_26_Management from "../assets/images/NIRF/NIRF_2025-26_Management.pdf";
import NIRF_2025_26_Engineering from "../assets/images/NIRF/NIRF_2025-26-ENGINEERING.pdf";
import NIRF_2025_26_Innovation from "../assets/images/NIRF/NIRF_2025-26-Innovation.pdf";

import NIRF_2024_25_Overall from "../assets/images/NIRF/NIRF_2024-25_Overall.pdf";
import NIRF_2024_25_Management from "../assets/images/NIRF/NIRF_2024-25_Management.pdf";
import NIRF_2024_25_Engineering from "../assets/images/NIRF/NIRF_2024-25-ENGINEERING.pdf";
import NIRF_2024_25_Innovation from "../assets/images/NIRF/NIRF_2024-25-Innovation.pdf";

import NIRF_2023_24_Overall from "../assets/images/NIRF/NIRF_2023-24_Overall.pdf";
import NIRF_2023_24_Management from "../assets/images/NIRF/NIRF_2023-24_Management.pdf";
import NIRF_2023_24_Engineering from "../assets/images/NIRF/NIRF_2023-24-ENGINEERING.pdf";
import NIRF_2023_24_Innovation from "../assets/images/NIRF/NIRF_2023-24-Innovation.pdf";

import NIRF_2022_23_Overall from "../assets/images/NIRF/NIRF_2022-23_Overall.pdf";
import NIRF_2022_23_Management from "../assets/images/NIRF/NIRF_2022-23_Management.pdf";
import NIRF_2022_23_Engineering from "../assets/images/NIRF/NIRF_2022-23_Engineering.pdf";

import NIRF_2021_Overall from "../assets/images/NIRF/NIRF 2021 SSGMCE.pdf";

const NIRFRanking = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const yearFromURL = searchParams.get("year");
  const [selectedYear, setSelectedYear] = useState(yearFromURL || "2025-26");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NIRF Ranking | SSGMCE";
  }, []);

  // Update selected year when URL parameter changes
  useEffect(() => {
    if (yearFromURL) {
      setSelectedYear(yearFromURL);
    }
  }, [yearFromURL]);

  // Update URL when year is changed via dropdown
  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSearchParams({ year });
  };

  const years = ["2025-26", "2024-25", "2023-24", "2022-23", "2021-22"];

  const nirfData = {
    "2025-26": [
      { category: "Overall", pdfUrl: NIRF_2025_26_Overall },
      { category: "Management", pdfUrl: NIRF_2025_26_Management },
      { category: "Engineering", pdfUrl: NIRF_2025_26_Engineering },
      { category: "Innovation", pdfUrl: NIRF_2025_26_Innovation },
    ],
    "2024-25": [
      { category: "Overall", pdfUrl: NIRF_2024_25_Overall },
      { category: "Management", pdfUrl: NIRF_2024_25_Management },
      { category: "Engineering", pdfUrl: NIRF_2024_25_Engineering },
      { category: "Innovation", pdfUrl: NIRF_2024_25_Innovation },
    ],
    "2023-24": [
      { category: "Overall", pdfUrl: NIRF_2023_24_Overall },
      { category: "Management", pdfUrl: NIRF_2023_24_Management },
      { category: "Engineering", pdfUrl: NIRF_2023_24_Engineering },
      { category: "Innovation", pdfUrl: NIRF_2023_24_Innovation },
    ],
    "2022-23": [
      { category: "Overall", pdfUrl: NIRF_2022_23_Overall },
      { category: "Management", pdfUrl: NIRF_2022_23_Management },
      { category: "Engineering", pdfUrl: NIRF_2022_23_Engineering },
    ],
    "2021-22": [
      { category: "Overall", pdfUrl: NIRF_2021_Overall },
    ],
  };

  const currentYearData = nirfData[selectedYear] || [];

  const getCategoryColor = (category) => {
    const colors = {
      Overall: "from-purple-500 to-purple-600",
      Management: "from-blue-500 to-blue-600",
      Engineering: "from-green-500 to-green-600",
      Innovation: "from-orange-500 to-orange-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NIRF Ranking"
        subtitle="National Institutional Ranking Framework"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Introduction Section */}
        <div className="mb-8">
          <p className="text-gray-600 leading-relaxed mb-4">
            The National Institutional Ranking Framework (NIRF) was approved by the MHRD and launched by
            the Honorable Minister of Human Resource Development on September 29, 2015. This framework
            outlines a methodology to rank institutions across the country.
          </p>
          <p className="text-handleYearChangeg-relaxed">
            SSGMCE has been consistently participating in NIRF rankings across multiple categories including
            Engineering, Overall, Management, and Innovation, showcasing our commitment to quality education
            and institutional excellence.
          </p>
        </div>

        {/* Year Filter */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <FaCalendarAlt className="text-ssgmce-blue" />
            Select Academic Year
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ssgmce-blue focus:border-transparent appearance-none bg-white cursor-pointer text-gray-700 font-medium"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                NIRF {year}
              </option>
            ))}
          </select>
        </div>

        {/* Documents Grid */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-ssgmce-blue rounded-full"></span>
            NIRF {selectedYear} Documents
          </h2>

          {currentYearData.length > 0 ? (
            <div className="space-y-4">
              {currentYearData.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getCategoryColor(doc.category)} flex items-center justify-center flex-shrink-0`}>
                        <FaFilePdf className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {doc.category}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Academic Year {selectedYear}
                        </p>
                      </div>
                    </div>
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-ssgmce-blue to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all font-medium shadow-sm hover:shadow-md"
                    >
                      <FaDownload className="text-sm" />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <FaFilePdf className="text-5xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No NIRF documents available for {selectedYear}
              </p>
            </div>
          )}
        </div>

        {/* Summary Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-ssgmce-blue mb-2">5</div>
            <div className="text-sm text-gray-600">Years of Data</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-ssgmce-orange mb-2">4</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{currentYearData.length}</div>
            <div className="text-sm text-gray-600">Documents Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRFRanking;
