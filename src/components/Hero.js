
import React from "react";
import "../Hero.css";
import NavBar from "./NavBar";
import YOGITA from "../assests/123.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
// import Resume from "../assests/Resume Yogita.pdf";

export default function Hero() {
  return (
    <>
      <NavBar />
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
          <div className="pro_before">
            <div className="progress"></div>
          </div>
          <div className="flexColStart hero-left ">
            <div className="hero-title">
              <h1 className="m-3 py-5">PASSIONATE DATA ANALYST!!</h1>
            </div>
            <div className="paragraph">
              <p className="flexColStart hero-des mx-5 my-5 ">
                Hi, I'm Yogita Mahajan, a passionate Data Analyst,
                analytically-minded recent Computer Science graduate showcasing
                hands-on project experience using Python SQL and PowerBI. Eager
                to contribute with a robust foundation in statistical
                methods,transforming raw data into actionable insights.
              </p>
            </div>
          </div>
          <div className="move-upward">
            <div className="right">
              <div>
                <div className="image-container">
                  <img src={YOGITA} alt="my profile" />
                </div>
                <div className="header__buttons">
                  <a
                    href=" https://docs.google.com/document/d/1FEBV4EgEJB7VK88p8NN4-U6cbxyzBbPUZ7RAwdUV22o/edit?usp=sharing"
                    className="btn btn-outline"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="container1"></div>
            </div>
          </div>
        </div>

        <div className="row1">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <a href="https://github.com/yogita-github">
                    <li>
                      <FaGithubSquare />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/yogita-mahajan-189820213">
                    <li>
                      <FaLinkedin />
                    </li>
                  </a>

                  <a href="https://www.instagram.com/ui_with_meee?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <li>
                      <FaInstagram />
                    </li>
                  </a>
                  <a href="mailto:yogitavm2001@gmail.com" type="email">
                    <li>
                      <FaRegEnvelope />
                    </li>
                  </a>
                  <a href="tel:9699937286" type="contact">
                    <li>
                      <FaPhone />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
