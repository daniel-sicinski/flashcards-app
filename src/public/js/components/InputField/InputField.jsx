import React from "react";

export default function InputField({ inputType, id, label, value, onChange }) {
  return (
    <>
      <label className="inputField__label" htmlFor={id}>
        {label}
      </label>
      <input
        autoFocus
        className="inputField__input"
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
