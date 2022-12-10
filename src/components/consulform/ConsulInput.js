import React from "react";
import PropTypes from "prop-types";

function ConsulInput({
  value,
  handleChange,
  type = "text",
  className,
  Nama,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder= 'masukkan nama'
      className={className}
      name={Nama}
      autoComplete="off"
    />
  );
}

ConsulInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  Nama: PropTypes.string,
};

export default ConsulInput;