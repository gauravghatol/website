import React from "react";
import { useEdit } from "../../contexts/EditContext";
import { FaArrowUp, FaArrowDown, FaTrash } from "react-icons/fa";

/**
 * EditableSection Component
 * Wrapper for content sections that provides visual editing feedback
 * and section management controls (reordering, deletion)
 */
const EditableSection = ({ index, title, children }) => {
  const { isEditing, removeSection, moveSection, data } = useEdit();
  const totalSections = Array.isArray(data?.sections) ? data.sections.length : 0;

  if (!isEditing) {
    return <>{children}</>;
  }

  const handleDelete = () => {
    if (window.confirm(`Delete this "${title}" section?`)) {
      removeSection(index);
    }
  };

  return (
    <div className="relative border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-4 mb-4 hover:border-blue-500 transition-colors group">
      {/* Section Label + Controls */}
      <div className="absolute -top-3 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold shadow pointer-events-auto">
          Section {index + 1}: {title}
        </span>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-auto">
          <button
            onClick={() => moveSection(index, "up")}
            disabled={index === 0}
            className="p-1.5 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
            title="Move up"
          >
            <FaArrowUp />
          </button>
          <button
            onClick={() => moveSection(index, "down")}
            disabled={index >= totalSections - 1}
            className="p-1.5 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed text-xs"
            title="Move down"
          >
            <FaArrowDown />
          </button>
          <button
            onClick={handleDelete}
            className="p-1.5 bg-red-600 text-white rounded hover:bg-red-500 text-xs"
            title="Delete section"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Section Content */}
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
};

export default EditableSection;
