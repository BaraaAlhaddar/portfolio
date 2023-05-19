import React, { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimationLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

export default function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>

          <p>
            I'm a passionate and detail-oriented software developer with a
            strong ability to quickly learn and adapt to new technologies.
            Enjoys meticulously solving complex problems and takes
            accountability and ownership seriously. Self-motivated and
            organized, with a genuine love for coding. A valuable asset for any
            team, consistently delivering high-quality results.
          </p>
          <p align="LEFT">
            A full-stack web developer graduated from MERAKI Academy in which a
            got more than 700h of intense coding using html, css, js, react.js,
            node.js and more.
          </p>
          <br />
          <br />
          <p>
            {" "}
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`My Skills`.split("")}
                idx={30}
              />
            </h1>
            <p>
              My Front-End skills are
              <span className="skills"> HTML5</span>,
              <span className="skills"> CSS3</span>,{" "}
              <span className="skills"> JavaScript</span>,{" "}
              <span className="skills"> React</span>,{" "}
              <span className="skills"> Redux</span>,{" "}
              <span className="skills"> Tailwind UI</span>,{" "}
              <span className="skills"> Material UI</span>,{" "}
              <span className="skills"> Bootstrap</span>,{" "}
              <span className="skills"> REST</span>,{" "}
              <span className="skills"> WebSocket</span>,
              <span className="skills"> Sass</span>,
              <span className="skills"> jQuery</span>.
            </p>
            <p align="LEFT">
              My Back-End skills are <span className="skills">Node</span> ;
              <span className="skills"> Express</span>,{" "}
              <span className="skills"> MongoDB</span>,{" "}
              <span className="skills"> PostgreSQL</span>,{" "}
              <span className="skills"> SQL</span>,{" "}
              <span className="skills"> WebSocket</span>,{" "}
              <span className="skills"> REST</span>,{" "}
              <span className="skills"> git</span>,{" "}
              <span className="skills"> NPM</span>,{" "}
              <span className="skills"> FireBase</span>,{" "}
              <span className="skills"> AWS</span>.
            </p>
          </p>
        </div>
        <div className="stage-cube-cont small-screen">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
