import React from "react";
import NavBar from "./NavBar";
import "../experience.css";
import Internship1 from "../assests/ibm.png";
import Internship2 from "../assests/tata.png";

export default function Experiance() {
  return (
    <>
      <NavBar />
      <section id="about" className="experiance">
        <div class="float-container1">
          <div class="float-child1">
            <div className="sectionTitle1">
              <div className="sectionContent1 grid">
                <div className="hover-padd m-3 py-5">
                  <h2 className="hover-underline-animation1 ">Experience</h2>
                </div>
                <div className="textSection1">
                  <p className="textSection1">
                    Accenture North America Data Analytics and Visualization Job
                    Simulation on Forage
                  </p>
                  <h4 className="about_para1">
                    Completed a simulation focused on advising a hypothetical
                    social media client as a Data Analyst at Accenture. Cleaned,
                    modeled and analyzed 7 datasets to uncover insights into
                    content trends to inform strategic decisions. Prepared a
                    PowerPoint deck and video presentation to communicate key
                    insights for the client and internal stakeholders.{" "}
                  </h4>
                </div>
                <div className="textSection1">
                  <p className="textSection1">
                    Tata Data Visualisation: Empowering Business with Effective
                    Insights Job Simulation on Forage
                  </p>
                  <h4 className="about_para1">
                    Completed a simulation involving creating data
                    visualizations for Tata Consultancy Services Prepared
                    questions for a meeting with client senior leadership
                    Created visuals for data analysis to help executives with
                    effective decision making{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="float-child1">
            <div className="aboutImgDiv1">
              <img src={Internship1} alt="" className="aboutImg1" />
              <span class="top1"></span>
              <span class="right1"></span>
              <span class="bottom1"></span>
              <span class="left1"></span>
            </div>
          </div>
          <div class="float-child1">
            <div className="aboutImgDiv1">
              <img src={Internship2} alt="" className="aboutImg1" />
              <span class="top1"></span>
              <span class="right1"></span>
              <span class="bottom1"></span>
              <span class="left1"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



