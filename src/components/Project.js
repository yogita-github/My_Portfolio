import React from "react";
import "../project.css";
import NavBar from "./NavBar";
import output1 from "../assests/output1.png";
import output2 from "../assests/output2.png";
import output3 from "../assests/output3.png";
import output4 from "../assests/output4.png";
import output5 from "../assests/home (1).png";
import output6 from "../assests/home (2).png";
import output7 from "../assests/home (3).png";
import output8 from "../assests/home (4).png";
import output9 from "../assests/home (5).png";
import output10 from "../assests/home (6).png";
import output11 from "../assests/Implem3.png";
import output12 from "../assests/Implem4.png";


export default function Project() {
  return (
    <>
      <NavBar />
      <section className="projects">
        <p className="proj">Projects</p>
        <div className="pr_para1">
          <p className="pr_head1">Age and Gender Detector model</p>
          <p className="proj_para1">
            Trained Age and Gender Detector model which could predict age and
            gender taking input image using ML. The model is trained by passing
            dataset and predicting the age of the person.
          </p>

          <div className="cards_boss">
            <div className="card">
              <img src={output1} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Gender : Female</b>
                </h4>
                <p>Age : 2 years</p>
              </div>
            </div>
            <div className="card">
              <img src={output2} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Gender : Male</b>
                </h4>
                <p>Age : 38 years</p>
              </div>
            </div>
            <div className="card">
              <img src={output3} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Gender : Female</b>
                </h4>
                <p>Age : 74 years</p>
              </div>
            </div>
            <div className="card">
              <img src={output4} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Gender : Male</b>
                </h4>
                <p>Age : 19 years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pr_para1">
          <p className="pr_head1">
            Counselling System for Human Health using ML
          </p>
          <p className="proj_para2">
            Counselling System for Human Health using ML March 2023 A project is
            trained using dataset of body vitals.It is trained using rfc
            algorithm which takes the average to improve the predictive accuracy
            of that dataset.Tried with various svc algorithm ,Naive Bayes
            Classifier and K-nearest neighbour algorithm but in case of rfc the
            accuracy was around 80The body vitals taken as input calculates the
            health status of a patient,based on the health status the detailed
            report is presented to the user
          </p>

          <div className="cards_boss">
            <div className="card">
              <img src={output5} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Home Page</b>
                </h4>
               
              </div>
            </div>
            <div className="card">
              <img src={output6} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>About page</b>
                </h4>
               
              </div>
            </div>
            <div className="card">
              <img src={output7} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Extended About</b>
                </h4>
               
              </div>
            </div>
            <div className="card">
              <img src={output8} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Recommendations</b>
                </h4>
               
              </div>
            </div>
          </div>
        
          <div className="cards_boss">
            <div className="card">
              <img src={output9} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>FAQ's</b>
                </h4>
               
              </div>
            </div>
            <div className="card">
              <img src={output10} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Advice page</b>
                </h4>
                
              </div>
            </div>
            <div className="card">
              <img src={output11} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Report</b>
                </h4>
                
              </div>
            </div>
            <div className="card">
              <img src={output12} alt="Avatar" />
              <div className="container">
                <h4>
                  <b>Suggestions</b>
                </h4>
                
              </div>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
}
