import React from "react";
import "./ButtonWIthLeftIcon.css";

const ButtonWIthLeftIcon = ({ btnText, color }) => {
  return (
    <a className="button" href="#" style={{ backgroundColor: color }}>
      <span className="btn-text">{btnText}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </a>
  );
};

export default ButtonWIthLeftIcon;
