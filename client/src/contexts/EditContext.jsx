import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const EditContext = createContext();

/**
 * useEdit Hook
 * Provides editing state and methods for editable components
 */
export const useEdit = () => {
  const context = useContext(EditContext);
  if (!context) {
    // Return default values when not in edit mode
    return {
      isEditing: false,
      data: {},
      updateData: () => {},
      saveData: () => {},
    };
  }
  return context;
};

/**
 * EditProvider Component
 * Wraps components that need editing capabilities
 * Used in admin/visual editor mode
 */
export const EditProvider = ({ children, pageId, initialData = {} }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [data, setData] = useState(initialData);
  const [hasChanges, setHasChanges] = useState(false);

  /**
   * Update a field in the data object using a path string
   * @param {string} path - Dot notation path (e.g., "hod.name")
   * @param {any} value - New value to set
   */
  const updateData = (path, value) => {
    setData((prevData) => {
      const newData = { ...prevData };
      const keys = path.replace(/\[(\d+)\]/g, ".$1").split(".");
      let current = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key] || typeof current[key] !== "object") {
          current[key] = {};
        } else if (Array.isArray(current[key])) {
          current[key] = [...current[key]]; // preserve array type
        } else {
          current[key] = { ...current[key] };
        }
        current = current[key];
      }

      current[keys[keys.length - 1]] = value;
      setHasChanges(true);
      return newData;
    });
  };

  /**
   * Save all changes to the server
   */
  const saveData = async () => {
    if (!pageId) {
      console.error("No pageId provided");
      return { success: false, error: "No pageId" };
    }

    try {
      const token = localStorage.getItem("adminToken");
      
      if (!token) {
        console.error("No authentication token found");
        return { 
          success: false, 
          error: "Not authenticated. Please login again." 
        };
      }

      const response = await axios.put(
        `/api/pages/${pageId}`,
        data,  // send the full data object directly so the server can merge top-level fields
        { 
          headers: { 
            Authorization: `Bearer ${token}` 
          } 
        }
      );

      if (response.data.success) {
        setHasChanges(false);
        return { success: true };
      } else {
        return { success: false, error: response.data.message };
      }
    } catch (error) {
      console.error("Error saving data:", error);
      return {
        success: false,
        error: error.response?.data?.message || error.message,
      };
    }
  };

  /**
   * Append a new section to the page data
   * @param {object} section - Section object with sectionId, type, title, order, content
   */
  const addSection = (section) => {
    setData((prev) => ({
      ...prev,
      sections: [...(prev.sections || []), section],
    }));
    setHasChanges(true);
  };

  const value = {
    isEditing,
    setIsEditing,
    data,
    setData,
    updateData,
    saveData,
    addSection,
    hasChanges,
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
};
