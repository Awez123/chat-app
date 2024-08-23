import React from "react";

const genderCheckbox = () => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text">Male</span>
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-secondary"
        />
      </label>
      <label className="cursor-pointer label">
        <span className="label-text">Female</span>
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-secondary"
        />
      </label>
    </div>
  );
};

export default genderCheckbox;
