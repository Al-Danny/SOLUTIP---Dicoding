/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/index";

function EventsDetail({ image, title, createdAt, description }) {
  return (
    <>
        <section className="">
          <img src={image} />
          <h3 className="">{title}</h3>
          <p className="">{showFormattedDate(createdAt)}</p>
          <div className="">{description}</div>
        </section>
    </>
  )
}

EventsDetail.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default EventsDetail;