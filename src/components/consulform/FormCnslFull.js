import React from "react";
import PropTypes from "prop-types";
import ConsulInput from "./ConsulInput";
import CnslInputDsc from "./ConsulDesc";
import { BiCheckShield } from "react-icons/bi";

function FormCnslFull ({ 
  handleSubmit, 
  Name, 
  handleChange, 
  description, 
  handleInput,
}) {
  return (
        <form onSubmit={handleSubmit} className='add-input'>
          <h1>Masukkan Sambatmu :)</h1>
          <ConsulInput
            value={Name}
            handleChange={handleChange}
            placeholder="masukkan nama"
            name="title"
            className=""
            type="text"
            /><br/>
            <CnslInputDsc handleInput={handleInput} description={description} /><br/>
              <div className="add-new-page__action">
                <button className="action" type="submit">
                    <BiCheckShield />
                </button>
            </div>
        </form>
  );
}

FormCnslFull.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  Name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
}

export default FormCnslFull;