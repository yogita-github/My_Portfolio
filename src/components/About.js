import React from "react";
import YOGITAIMG from "../assests/a.jpg";
import "../about.css";
import NavBar from "./NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <section id="about" className="about section container">
        <div class="float-container">
          <div class="float-child">
            <div className="sectionTitle">
              <div className="sectionContent grid">
                <div className="hover-padd m-3 py-5">
                  <h2 className="hover-underline-animation ">About</h2>
                </div>
                <div className="textSection">
                  <h4 className="about_para">
                    I am Yogita Vinayak Mahajan, a BE graduate with a deep
                    passion for technology. I completed my degree in Computer
                    Science Engineering at Shram Sadhana Trust College of
                    Engineering and Technology, Bambhori. My secondary and high
                    school education was at Godavari English Medium CBSE School,
                    where I secured 5th rank and maintained a CGPA of 9.2.
                    Throughout my academic journey, I actively engaged in
                    various coding competitions, hackathons, and projects to
                    enhance my practical skills and broaden my knowledge beyond
                    the classroom. I had the honor of being a finalist in the
                    Smart India Hackathon 2023. Additionally, I played a
                    significant role as a CodeAThon coordinator during the
                    Milestone event at my college. One of my hobbies is reading
                    novels, which not only provides relaxation but also enriches
                    my vocabulary and imaginative thinking.
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="float-child">
            <div className="aboutImgDiv">
              <img src={YOGITAIMG} alt="" className="aboutImg" />
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

