import { useState, useEffect } from "react";
import axios from "axios";
import PageHeader from "../../components/PageHeader";
import DocumentsSidebar from "../../components/DocumentsSidebar";
import NIRFParameterCard from "../../components/NIRFParameterCard";
import NIRFChart from "../../components/NIRFChart";
import NIRFArchiveTable from "../../components/NIRFArchiveTable";
import { FaChartLine, FaTrophy, FaAward, FaMedal } from "react-icons/fa";

const NIRF = () => {
  const [latestData, setLatestData] = useState(null);
  const [allData, setAllData] = useState([]);
  const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "NIRF Rankings | SSGMCE";

    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all data in parallel
        const [latestRes, allRes, compRes] = await Promise.all([
          axios.get("/api/nirf/latest"),
          axios.get("/api/nirf"),
          axios.get("/api/nirf/comparison?years=5")
        ]);

        if (latestRes.data.success) setLatestData(latestRes.data.data);
        if (allRes.data.success) setAllData(allRes.data.data);
        if (compRes.data.success) setComparisonData(compRes.data.data);

      } catch (err) {
        console.error("Error fetching NIRF data:", err);
        setError("Failed to load NIRF data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Skeleton Loading for Parameter Cards
  const ParameterSkeleton = () => (
    <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
      </div>
      <div className="h-5 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="NIRF Rankings"
        subtitle="National Institutional Ranking Framework"
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <DocumentsSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            {/* Current Rank Banner */}
            {latestData && (
              <div className="bg-gradient-to-r from-ssgmce-blue to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                      <FaTrophy className="text-4xl text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm mb-1">NIRF {latestData.year} - {latestData.category?.toUpperCase()}</p>
                      <h2 className="text-4xl font-bold">Rank #{latestData.rank}</h2>
                      <p className="text-blue-200 mt-1">Among Engineering Colleges in India</p>
                    </div>
                  </div>
                  <div className="text-center bg-white/10 rounded-xl p-6">
                    <p className="text-blue-200 text-sm mb-1">Overall Score</p>
                    <p className="text-5xl font-bold">{latestData.overallScore?.toFixed(2)}</p>
                    <p className="text-blue-200 text-sm mt-1">out of 100</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl">
                <p>{error}</p>
                <p className="text-sm mt-2">Please ensure the NIRF data has been seeded in the admin panel.</p>
              </div>
            )}

            {/* Parameter Section Title */}
            <div className="flex items-center gap-3">
              <FaChartLine className="text-2xl text-ssgmce-orange" />
              <h2 className="text-2xl font-bold text-gray-800">NIRF Parameters ({latestData?.year || 'Latest'})</h2>
            </div>

            {/* Parameter Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {loading ? (
                <>
                  <ParameterSkeleton />
                  <ParameterSkeleton />
                  <ParameterSkeleton />
                  <ParameterSkeleton />
                  <ParameterSkeleton />
                </>
              ) : latestData?.parameters ? (
                <>
                  <NIRFParameterCard paramCode="tlr" score={latestData.parameters.tlr} />
                  <NIRFParameterCard paramCode="rp" score={latestData.parameters.rp} />
                  <NIRFParameterCard paramCode="go" score={latestData.parameters.go} />
                  <NIRFParameterCard paramCode="oi" score={latestData.parameters.oi} />
                  <NIRFParameterCard paramCode="pr" score={latestData.parameters.pr} />
                </>
              ) : (
                <div className="col-span-5 bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                  No parameter data available
                </div>
              )}
            </div>

            {/* Year-wise Comparison Chart */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaAward className="text-2xl text-ssgmce-orange" />
                <h2 className="text-2xl font-bold text-gray-800">Year-wise Comparison</h2>
              </div>
              {loading ? (
                <div className="bg-white rounded-xl shadow-md p-8 h-80 animate-pulse">
                  <div className="h-full bg-gray-100 rounded"></div>
                </div>
              ) : comparisonData.length > 0 ? (
                <NIRFChart data={comparisonData} chartType="bar" />
              ) : (
                <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                  No comparison data available
                </div>
              )}
            </div>

            {/* Archive Table */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaMedal className="text-2xl text-ssgmce-orange" />
                <h2 className="text-2xl font-bold text-gray-800">NIRF Submission Archive</h2>
              </div>
              {loading ? (
                <div className="bg-white rounded-xl shadow-md p-8 animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-12 bg-gray-100 rounded"></div>
                    <div className="h-12 bg-gray-100 rounded"></div>
                    <div className="h-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
              ) : (
                <NIRFArchiveTable data={allData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NIRF;
