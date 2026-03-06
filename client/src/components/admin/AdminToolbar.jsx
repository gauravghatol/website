import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEdit } from "../../contexts/EditContext";
import {
  FaSave,
  FaArrowLeft,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import { ADMIN_ROUTE_PREFIX } from "../../config/adminAccess";

/**
 * AdminToolbar - Floating toolbar for visual page editor
 * Provides save, back navigation, and change status indicators
 */
const AdminToolbar = ({ title = "Page Editor" }) => {
  const navigate = useNavigate();
  const { hasChanges, saveData } = useEdit();
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'success' | 'error' | null

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus(null);

    const result = await saveData();

    if (result.success) {
      setSaveStatus("success");
      setTimeout(() => setSaveStatus(null), 3000);
    } else {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus(null), 5000);
    }

    setSaving(false);
  };

  const handleBack = () => {
    if (hasChanges) {
      const confirmed = window.confirm(
        "You have unsaved changes. Are you sure you want to leave?",
      );
      if (!confirmed) return;
    }
    navigate(`${ADMIN_ROUTE_PREFIX}/departments`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a1a2e] border-t-2 border-blue-500 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Title and Status */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <FaArrowLeft />
              <span className="hidden sm:inline">Back to Admin</span>
            </button>

            <div className="border-l border-gray-300 dark:border-gray-600 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
              <div className="flex items-center gap-2 text-sm">
                {hasChanges && (
                  <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400">
                    <FaExclamationTriangle className="text-xs" />
                    Unsaved changes
                  </span>
                )}
                {saveStatus === "success" && (
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
                    <FaCheck className="text-xs" />
                    Saved successfully
                  </span>
                )}
                {saveStatus === "error" && (
                  <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
                    <FaExclamationTriangle className="text-xs" />
                    Save failed
                  </span>
                )}
                {!hasChanges && !saveStatus && (
                  <span className="text-gray-500 dark:text-gray-400">All changes saved</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={!hasChanges || saving}
              className={`
                flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all
                ${
                  hasChanges && !saving
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg"
                    : "bg-gray-300 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                }
              `}
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <FaSave />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToolbar;
