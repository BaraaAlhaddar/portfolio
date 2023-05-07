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
            I'm a Self-motivated, Detail-oriented, and organized software
            developer who has a strong passion for coding looking for a role in
            an established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I haves strong ability to learn quickly and adapt to new
            technologies. Analytical and Likes to solve complex problems
            meticulously. Accountable and takes ownership seriously.
          </p>
          <p>
            I'm a caring social person who wants to meet and work with new
            people.
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
