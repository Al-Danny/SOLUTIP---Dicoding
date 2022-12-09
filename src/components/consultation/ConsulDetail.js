import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/index";

function ConsulDetail({ antrianke, Nama, description, createdAt }) {
  return (
    <>
      <section className="">
        <h1 className="">{antrianke}</h1>
        <p className="">{showFormattedDate(createdAt)}</p>
        <h2 className="">{Nama}</h2>
        <div className="">{description}</div>
      </section>
    </>
  )
}

ConsulDetail.propTypes = {
  antrianke: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  Nama: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ConsulDetail;