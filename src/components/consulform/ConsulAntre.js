import PropTypes from "prop-types";
import React, { useState } from "react";

function CnslAntreAdd({ antrianke }) {
  const [setCount] = useState(0)

  return (
    <>
      <h2>{antrianke}</h2>
      <button className="" onClick={() => setCount(antrianke + 1)}>ambil antrean</button>
    </>
  )
}

CnslAntreAdd.propTypes = {
  antrianke: PropTypes.string.isRequired,
}

export default CnslAntreAdd;