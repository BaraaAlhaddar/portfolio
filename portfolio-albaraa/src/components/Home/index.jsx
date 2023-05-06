import React, { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimationLetters";
import Logo from "./logo";
import Loader from "react-loaders";
export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = `lbaraa Alhaddar,`.split("");
  const jobArray = `Web Developer.`.split("");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              lettersClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full-Stack Web Developer</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}
