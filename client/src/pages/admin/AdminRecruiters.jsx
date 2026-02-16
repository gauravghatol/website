import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { FaUsers, FaPlus } from "react-icons/fa";

const AdminRecruiters = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Recruiters Management
            </h1>
            <p className="text-gray-500 mt-1">Manage recruiting companies</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors shadow-lg font-medium">
            <FaPlus /> Add Recruiter
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <FaUsers className="text-6xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Recruiters Management
          </h3>
          <p className="text-gray-500">This feature is under development.</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminRecruiters;
