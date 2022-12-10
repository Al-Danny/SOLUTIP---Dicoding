import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils/index";
import antre from '../../assets/image/img-antre.png';
import '../../style/detail.css';

function ConsulDetail({ antrianke, Nama, description, createdAt }) {
  return (
    <>
    <div className='detail-consult'>
      <div className='detail-kiri'>
        <table>
          <tr>
            <img src={antre} alt='' />
          </tr>
          <tr>
            <h1 className=''>ANTREAN NO.{antrianke}</h1>
          </tr>
        </table>
      </div>
      <div className='detail-kanan'>
        <h1 className=''>{Nama}</h1>
        <p className=''>{showFormattedDate(createdAt)}</p>
        <p className=''>" {description} "</p>
      </div>
    </div>
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