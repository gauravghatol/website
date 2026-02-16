import React from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FaCog,
  FaDatabase,
  FaShieldAlt,
  FaPalette,
  FaBell,
} from "react-icons/fa";

const AdminSettings = () => {
  const settingsSections = [
    {
      title: "General Settings",
      icon: FaCog,
      color: "blue",
      settings: [
        {
          label: "Site Title",
          value: "SSGMCE - Official Website",
          type: "text",
        },
        {
          label: "Site Description",
          value: "Shri Sant Gajanan Maharaj College of Engineering",
          type: "text",
        },
        { label: "Contact Email", value: "info@ssgmce.ac.in", type: "email" },
      ],
    },
    {
      title: "Database",
      icon: FaDatabase,
      color: "green",
      settings: [
        { label: "Auto Backup", value: true, type: "toggle" },
        {
          label: "Backup Frequency",
          value: "Daily",
          type: "select",
          options: ["Hourly", "Daily", "Weekly"],
        },
        { label: "Last Backup", value: "2 hours ago", type: "readonly" },
      ],
    },
    {
      title: "Security",
      icon: FaShieldAlt,
      color: "red",
      settings: [
        { label: "Two-Factor Authentication", value: false, type: "toggle" },
        { label: "Session Timeout (minutes)", value: "30", type: "number" },
        { label: "Max Login Attempts", value: "5", type: "number" },
      ],
    },
    {
      title: "Appearance",
      icon: FaPalette,
      color: "purple",
      settings: [
        {
          label: "Theme Mode",
          value: "Light",
          type: "select",
          options: ["Light", "Dark", "Auto"],
        },
        { label: "Primary Color", value: "#3B82F6", type: "color" },
        { label: "Enable Animations", value: true, type: "toggle" },
      ],
    },
    {
      title: "Notifications",
      icon: FaBell,
      color: "yellow",
      settings: [
        { label: "Email Notifications", value: true, type: "toggle" },
        { label: "Browser Notifications", value: false, type: "toggle" },
        { label: "Notification Sound", value: true, type: "toggle" },
      ],
    },
  ];

  const colorVariants = {
    blue: { bg: "bg-blue-500", light: "bg-blue-50", text: "text-blue-600" },
    green: { bg: "bg-green-500", light: "bg-green-50", text: "text-green-600" },
    red: { bg: "bg-red-500", light: "bg-red-50", text: "text-red-600" },
    purple: {
      bg: "bg-purple-500",
      light: "bg-purple-50",
      text: "text-purple-600",
    },
    yellow: {
      bg: "bg-yellow-500",
      light: "bg-yellow-50",
      text: "text-yellow-600",
    },
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
          <p className="text-gray-500 mt-1">
            Manage system configuration and preferences
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-6">
          {settingsSections.map((section, idx) => {
            const Icon = section.icon;
            const colors = colorVariants[section.color];
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${colors.light} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`${colors.text}`} />
                  </div>
                  <h3 className="font-bold text-gray-800">{section.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {section.settings.map((setting, settingIdx) => (
                      <div
                        key={settingIdx}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex-1">
                          <label className="block font-semibold text-gray-700 mb-1">
                            {setting.label}
                          </label>
                          {setting.type === "readonly" && (
                            <p className="text-sm text-gray-500">
                              {setting.value}
                            </p>
                          )}
                        </div>
                        <div className="ml-4">
                          {setting.type === "text" && (
                            <input
                              type="text"
                              defaultValue={setting.value}
                              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                            />
                          )}
                          {setting.type === "email" && (
                            <input
                              type="email"
                              defaultValue={setting.value}
                              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                            />
                          )}
                          {setting.type === "number" && (
                            <input
                              type="number"
                              defaultValue={setting.value}
                              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-32"
                            />
                          )}
                          {setting.type === "select" && (
                            <select
                              defaultValue={setting.value}
                              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-48"
                            >
                              {setting.options.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          )}
                          {setting.type === "color" && (
                            <input
                              type="color"
                              defaultValue={setting.value}
                              className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer"
                            />
                          )}
                          {setting.type === "toggle" && (
                            <button
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                setting.value ? "bg-blue-600" : "bg-gray-300"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  setting.value
                                    ? "translate-x-6"
                                    : "translate-x-1"
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-end gap-3 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <button className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
            Reset to Defaults
          </button>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-200">
            Save Changes
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
