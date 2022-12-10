import React from "react";
import PropTypes from "prop-types";

function ButtonFnc({ handleClick, id, className, children, title }) {
return (
    <button
        type="button"
        onClick={() => handleClick(id)}
        className={className}
        title={title}
    >
        {children}
    </button>
    );
}

ButtonFnc.propTypes = {
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};

export default ButtonFnc;