import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { FaBriefcase, FaPlus } from "react-icons/fa";

const AdminPlacements = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Placements Management
            </h1>
            <p className="text-gray-500 mt-1">
              Manage placement records and statistics
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-lg font-medium">
            <FaPlus /> Add Placement
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <FaBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Placements Management
          </h3>
          <p className="text-gray-500">This feature is under development.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPlacements;
