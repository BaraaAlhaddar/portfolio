import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo-sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
export default function SideBar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="sublogo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>{" "}
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" to="/contact" />
        </NavLink>
      </nav>
    </div>
  );
}
