import React from "react";
import PropTypes from "prop-types";

function ConsulInput({
  value,
  handleChange,
  type = "text",
  placeHolder,
  className,
  name,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder={placeHolder}
      className={className}
      name={name}
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
  name: PropTypes.string,
};

export default ConsulInput;