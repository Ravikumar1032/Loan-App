import React from "react";

const InputField = ({ type, name, placeholder, value, onChange }) => {
  return <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default InputField;
