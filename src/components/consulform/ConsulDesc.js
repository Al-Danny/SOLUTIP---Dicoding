import React from "react";
import PropTypes from "prop-types";

function CnslInputDsc({ handleInput, description }) {
  return (
    <div
      type="text"
      className="desc"
      placeholder="Masukkan Keluhan..."
      contentEditable
      onInput={handleInput}
      value={description}
    ></div>
  );
}

CnslInputDsc.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default CnslInputDsc;

