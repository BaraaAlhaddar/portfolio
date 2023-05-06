import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimationLetters";
import Logo from "./Logo";
import "./index.scss";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

export default function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, SERVICE_KEY).then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      (err) => {
        console.log(err);
        alert("Failed to send the message, please try again");
      }
    );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <h2>albaraa.alhaddar@gmail.com</h2>
          <p>
            I am interested in a Full-Stack/ Front-End/ Back-End opportunities -
            especially on ambitious or large projects. However, if you have any
            other requests or questions, don't hesitate to contact me using
            below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
}
