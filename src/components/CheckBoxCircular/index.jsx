import React from "react";
import "./CheckBoxCircular.css";

function CheckboxCircular({ checked, onChange,inArchived }) {
  return (
    <label className={`${inArchived ? "inactive" : "checkbox-container"}`}>
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
