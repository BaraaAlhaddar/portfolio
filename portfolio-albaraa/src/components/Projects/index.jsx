import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimationLetters";

export default function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={`My Skills & Projects`.split("")}
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
            <span className="skills"> WebSocket</span>.
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
            <span className="skills"> npm</span>,{" "}
            <span className="skills"> AWS</span>.
          </p>
          <p>You can see my projects by clicking on them.</p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
