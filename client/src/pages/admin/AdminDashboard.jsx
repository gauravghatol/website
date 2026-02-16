import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../../components/admin/AdminLayout";
import { useAuth } from "../../hooks/useAuth";
import { DASHBOARD_SECTIONS } from "../../constants/navConfig";
import {
  FaPlus,
  FaEdit,
  FaClock,
  FaFileAlt,
  FaChartLine,
  FaArrowUp,
  FaChartPie,
  FaDatabase,
  FaUserGraduate,
  FaFlask,
  FaUniversity,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DEPT_TO_PAGEID = {
  CSE: 'departments-cse',
  IT: 'departments-it',
  MECH: 'departments-mechanical',
  ELECTRICAL: 'departments-electrical',
  ENTC: 'departments-entc',
  MBA: 'departments-mba',
  ASH: 'departments-applied-sciences',
};

const AdminDashboard = () => {
  const { isSuperAdmin, isCoordinator, userDepartment, user } = useAuth();
  const [categoryCounts, setCategoryCounts] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [recentPages, setRecentPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trafficData, setTrafficData] = useState([]);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchDashboardData();
    generateTrafficData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get("/api/pages");
      if (res.data.success) {
        const pages = res.data.data;
        setTotalPages(pages.length);

        // Count pages per category
        const counts = {};
        DASHBOARD_SECTIONS.forEach((c) => { counts[c.id] = 0; });
        pages.forEach((p) => {
          const cat = (p.category || "").toLowerCase();
          if (counts[cat] !== undefined) counts[cat]++;
        });
        setCategoryCounts(counts);

        // Recent 5 pages sorted by update date
        const sorted = [...pages].sort(
          (a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0),
        );
        setRecentPages(sorted.slice(0, 5));
      }
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  };

  const generateTrafficData = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      data.push({
        date: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        views: Math.floor(Math.random() * 600) + 150,
        visits: Math.floor(Math.random() * 350) + 80,
        enquiries: Math.floor(Math.random() * 60) + 5,
      });
    }
    setTrafficData(data);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Never";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });
  };

  // Seed all navbar pages into the database
  const seedAllPages = async () => {
    if (seeding) return;
    setSeeding(true);
    try {
      const token = localStorage.getItem("adminToken");
      const res = await axios.post("/api/pages/seed-all", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success) {
        alert(`${res.data.message}`);
        fetchDashboardData(); // Refresh counts
      }
    } catch (err) {
      alert("Error seeding pages: " + (err.response?.data?.message || err.message));
    } finally {
      setSeeding(false);
    }
  };

  // Pie chart data from live counts
  const pieData = DASHBOARD_SECTIONS
    .map((c) => ({ name: c.label, value: categoryCounts[c.id] || 0, color: c.color }))
    .filter((d) => d.value > 0);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse text-gray-500 text-lg">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#003366] to-[#004a8f] rounded-2xl p-8 text-white shadow-xl">
          <h1 className="text-3xl font-bold mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
            Welcome Back, {user?.name || (isSuperAdmin ? "Admin" : "Coordinator")}!
          </h1>
          <p className="text-blue-200 text-sm">
            {isCoordinator
              ? `You are managing the ${userDepartment} department.`
              : "Manage every section of the SSGMCE website from one place."}
          </p>
          <div className="flex items-center gap-6 mt-4">
            {isSuperAdmin && (
              <>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                  <p className="text-xs text-blue-200">Total Pages</p>
                  <p className="text-2xl font-bold">{totalPages}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                  <p className="text-xs text-blue-200">Categories Active</p>
                  <p className="text-2xl font-bold">
                    {Object.values(categoryCounts).filter((v) => v > 0).length}/{DASHBOARD_SECTIONS.length}
                  </p>
                </div>
              </>
            )}
            {isCoordinator && (
              <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
                <p className="text-xs text-blue-200">Department</p>
                <p className="text-2xl font-bold">{userDepartment}</p>
              </div>
            )}
          </div>
        </div>

        {/* ─── Coordinator Quick-Access Panel ─── */}
        {isCoordinator && DEPT_TO_PAGEID[userDepartment] && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Your Department
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <Link
                to={`/admin/visual/${DEPT_TO_PAGEID[userDepartment]}`}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="h-1.5 bg-[#003366]" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#003366]/10">
                      <FaUniversity className="text-lg text-[#003366]" />
                    </div>
                    <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                      Department Page
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Edit the public-facing {userDepartment} department page — HOD info, overview, content & more.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold border-2 border-[#003366] text-[#003366]">
                    Edit Department Page
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* ─── SuperAdmin sections below ─── */}
        {isSuperAdmin && (
          <>
        {/* Site Overview: 30-Day Traffic + Content Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Traffic chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#003366]/10 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-[#003366]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Site Traffic (Last 30 Days)
                </h3>
                <p className="text-xs text-gray-500">Page views, visits & enquiries</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: "10px" }} interval={4} />
                <YAxis stroke="#6b7280" style={{ fontSize: "11px" }} />
                <Tooltip contentStyle={{ borderRadius: "8px", fontSize: "12px", border: "1px solid #e5e7eb" }} />
                <Legend wrapperStyle={{ fontSize: "12px" }} />
                <Line type="monotone" dataKey="views" stroke="#003366" strokeWidth={2} dot={false} name="Page Views" />
                <Line type="monotone" dataKey="visits" stroke="#FF9900" strokeWidth={2} dot={false} name="Unique Visits" />
                <Line type="monotone" dataKey="enquiries" stroke="#059669" strokeWidth={2} dot={false} name="Enquiries" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#FF9900]/10 rounded-lg flex items-center justify-center">
                <FaChartPie className="text-[#FF9900]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Content Distribution
                </h3>
                <p className="text-xs text-gray-500">Pages per category</p>
              </div>
            </div>

            {pieData.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={78} paddingAngle={4} dataKey="value">
                      {pieData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-3 space-y-1.5">
                  {pieData.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-gray-600">{item.name}</span>
                      </div>
                      <span className="font-semibold text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-gray-400">
                <FaChartPie className="text-4xl mb-2" />
                <p className="text-sm">No content yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Category Cards Grid (4-col desktop, 1-col mobile) */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
            Website Sections
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DASHBOARD_SECTIONS.map((cat) => {
              const Icon = cat.icon;
              const count = categoryCounts[cat.id] || 0;
              const isEmpty = count === 0;

              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden"
                >
                  {/* colored top bar */}
                  <div className="h-1.5" style={{ backgroundColor: cat.color }} />

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${cat.color}15` }}
                      >
                        <Icon className="text-lg" style={{ color: cat.color }} />
                      </div>
                      <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {cat.label}
                      </h3>
                    </div>

                    {/* Count */}
                    <p className="text-4xl font-extrabold text-gray-800 mb-1">{count}</p>
                    <p className="text-xs text-gray-500 mb-4">
                      {count === 1 ? "Page" : "Pages"} in this section
                    </p>

                    {/* CTA */}
                    {isEmpty ? (
                      <Link
                        to={`/admin/pages?category=${cat.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-all hover:opacity-90"
                        style={{ backgroundColor: cat.color }}
                      >
                        <FaPlus className="text-xs" />
                        Setup {cat.label} Section
                      </Link>
                    ) : (
                      <Link
                        to={`/admin/pages?category=${cat.id}`}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold transition-all border-2"
                        style={{ borderColor: cat.color, color: cat.color }}
                      >
                        Manage {cat.label}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity + Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recently Updated Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#003366]/10 rounded-lg flex items-center justify-center">
                  <FaEdit className="text-[#003366]" />
                </div>
                <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Recently Updated
                </h3>
              </div>
              <Link to="/admin/pages" className="text-sm text-[#003366] hover:underline font-medium">
                View All
              </Link>
            </div>
            <div className="p-4">
              {recentPages.length > 0 ? (
                <div className="space-y-2">
                  {recentPages.map((page, idx) => (
                    <Link
                      key={idx}
                      to={`/admin/visual/${page.pageId}`}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="w-9 h-9 bg-[#003366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaFileAlt className="text-[#003366] text-sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm group-hover:text-[#003366] truncate">
                          {page.pageTitle}
                        </h4>
                        <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                          <FaClock className="text-[9px]" />
                          {formatDate(page.updatedAt)}
                          <span className="ml-2 px-1.5 py-0.5 bg-gray-100 rounded text-[10px] font-medium text-gray-500 uppercase">
                            {page.category}
                          </span>
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <FaFileAlt className="text-3xl text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No pages yet</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF9900]/10 rounded-lg flex items-center justify-center">
                <FaPlus className="text-[#FF9900]" />
              </div>
              <h3 className="font-bold text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
                Quick Actions
              </h3>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4">
              {[
                { to: "/admin/pages",        label: "New Page",      sub: "Add content",      gradient: "from-[#003366] to-[#004a8f]", icon: FaFileAlt },
                { to: "/admin/popup-banner", label: "Popup Banner",  sub: "Manage popup",      gradient: "from-[#FF9900] to-[#FF7700]", icon: FaArrowUp },
                { to: "/admin/menu-manager", label: "Menu Manager",  sub: "Organise menus",    gradient: "from-[#059669] to-[#047857]", icon: FaEdit },
                { to: "/admin/news",         label: "Add News",      sub: "Publish article",   gradient: "from-[#7C3AED] to-[#6D28D9]", icon: FaChartLine },
              ].map((a, i) => {
                const AIcon = a.icon;
                return (
                  <Link
                    key={i}
                    to={a.to}
                    className={`p-5 bg-gradient-to-br ${a.gradient} rounded-xl hover:shadow-lg transition-all group text-white`}
                  >
                    <AIcon className="text-2xl mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm">{a.label}</p>
                    <p className="text-xs opacity-75 mt-0.5">{a.sub}</p>
                  </Link>
                );
              })}
              {/* Seed All Pages — spans full width */}
              <button
                onClick={seedAllPages}
                disabled={seeding}
                className="col-span-2 p-4 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl hover:shadow-lg transition-all group text-white flex items-center gap-3 disabled:opacity-60"
              >
                <FaDatabase className="text-2xl group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="font-semibold text-sm">{seeding ? "Seeding…" : "Seed All Pages"}</p>
                  <p className="text-xs opacity-75 mt-0.5">Create missing DB entries for every navbar page</p>
                </div>
              </button>
            </div>
          </div>
        </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
