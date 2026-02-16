import React from "react";
import { useEdit } from "../../contexts/EditContext";

/**
 * EditableSection Component
 * Wrapper for content sections that provides visual editing feedback
 * and potential section management controls (reordering, deletion, etc.)
 * 
 * Props:
 * - index: The section index
 * - title: The section type/title for display
 * - children: The actual section content to render
 */
const EditableSection = ({ index, title, children }) => {
  const { isEditing } = useEdit();

  if (!isEditing) {
    // When not editing, just render children without wrapper
    return <>{children}</>;
  }

  return (
    <div className="relative border-2 border-dashed border-blue-300 rounded-lg p-4 mb-4 hover:border-blue-500 transition-colors">
      {/* Section Label */}
      <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded text-xs font-semibold shadow">
        Section {index + 1}: {title}
      </div>

      {/* Section Content */}
      <div className="mt-2">
        {children}
      </div>

      {/* Optional: Add section management controls here in the future */}
      {/* e.g., Move Up/Down, Delete Section buttons */}
    </div>
  );
};

export default EditableSection;
