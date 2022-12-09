import React from "react";
import PropTypes from "prop-types";
import ConsulInput from "./ConsulInput";

function CnslNameAdd({ Nama, handleChange }) {
  return (
    <ConsulInput
      value={Nama}
      handleChange={handleChange}
      placeHolder="Masukkan Nama"
      className=""
    />
  )
}

CnslNameAdd.propTypes = {
  Nama: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}

export default CnslNameAdd;

