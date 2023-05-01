import React from "react";
import "./index.scss";
import aLogo from "../../../assets/images/logo-s.png";

export default function Logo() {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={aLogo} alt="baraa" />
    </div>
  );
}
