import React from "react";
import InputField from "./InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        {/* Radio button for selecting any work experience option */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>
        {/* InputField component for Internship selection */}
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="test"
        />
        {/* InputField component for Work Remotely selection */}
        <InputField
          handleChange={handleChange}
          value="Work Remotely"
          title="Work Remotely"
          name="test"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
