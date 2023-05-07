import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimationLetters";
import Project from "./Project";
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
            <span className="skills"> npm</span>,{" "}
            <span className="skills"> AWS</span>.
          </p>
          <br />
          <p>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={`My Projects`.split("")}
                idx={90}
              />
            </h1>
            <a
              target="_blank"
              href="https://illustrious-semifreddo-4a4508.netlify.app/login"
            >
              {" "}
              <span className="skills">SnapFeed </span>
            </a>
            is a social platform that focuses on sharing images like Tumbler
            with Real-time communications in it users can follow, unfollow other
            users also users can post, comment, like or delete any of there
            activity.
            <br />
            <br />
            <a
              target="_blank"
              href="https://github.com/C7-BaraaAlhaddar/MERAKI_Academy_Project_4"
            >
              {" "}
              <span className="skills">B Store </span>
            </a>
            An e-commerce website application with full features such as search,
            filter, review, pagination, cart, sign in, sign up, and an admin
            dashboard with features such as deleting users, deleting and
            updating orders, and finally deleting, updating, and creating a
            product.
          </p>
        </div>
        <Project />
      </div>
      <Loader type="pacman" />
    </>
  );
}
