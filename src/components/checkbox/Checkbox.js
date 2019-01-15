import React from "react";
import './checkbox.css';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-group">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;