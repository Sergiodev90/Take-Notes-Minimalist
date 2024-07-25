import React from "react";
import "./CheckBoxCircular.css";

function CheckboxCircular({ checked, onChange }) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export { CheckboxCircular };
