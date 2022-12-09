import React from "react";
import PropTypes from "prop-types";
import CnslAntreAdd from "./ConsulAntre";
import CnslNameAdd from "./ConsulName";
import CnslInputDsc from "./ConsulDesc";
import { BiCheckShield } from "react-icons/bi";

function FormCnslFull ({ handleSubmit, description, Nama, antrianke, handleInput, handleClick }) {
  return (
    <div className="">
      <section className="">
        <form onSubmit={handleSubmit}>
          <CnslAntreAdd handleClick={handleClick} antrianke={antrianke}/>
          <CnslNameAdd handleInput={handleInput} Nama={Nama}/>
          <CnslInputDsc handleInput={handleInput} description={description} />
            <div className="">
                <button className="action" type="submit">
                    <BiCheckShield />
                </button>
            </div>
        </form>
      </section>
    </div>
  )
}

FormCnslFull.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  description: PropTypes.string,
  Nama: PropTypes.string,
  antrianke: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
} 

export default FormCnslFull;