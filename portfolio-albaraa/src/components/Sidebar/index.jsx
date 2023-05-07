import React, { useState } from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logoS from "../../assets/images/logo-s.png";
import logoSubtitle from "../../assets/images/logo-sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faUser,
  faClose,
  faSnowboarding,
  faSoccerBall,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function SideBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img className="sub-logo" src={logoSubtitle} alt="sublogo" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSoccerBall} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="linkedin"
            href="https://www.linkedin.com/in/albaraaalhaddar/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="4d4de" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="github"
            href="https://github.com/BaraaAlhaddar"
          >
            <FontAwesomeIcon icon={faGithub} color="4d4de" />
          </a>
        </li>
      </ul>
    </div>
  );
}
