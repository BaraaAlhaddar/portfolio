import React from "react";
import "./index.scss";

import project_1 from "../../../assets/images/Screenshot_2.png";
import project_2 from "../../../assets/images/Screenshot_3.png";

export default function Project() {
  return (
    <div className="project-container">
      <a
        target="_blank"
        href="https://github.com/C7-BaraaAlhaddar/MERAKI_Academy_Project_4"
      >
        {" "}
        <img className="solid-project" src={project_2} alt="baraa" />
      </a>
      <a
        target="_blank"
        href="https://illustrious-semifreddo-4a4508.netlify.app/login"
      >
        {" "}
        <img className="solid-project" src={project_1} alt="baraa" />
      </a>
    </div>
  );
}
