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
          <p className="pr_head1">Student Management System</p>
          <p className="proj_para1">
            Operations like add students, remove students, search students and
            exit are implemented.This data is stored in dictionary data type
            with roll no, name, marks as attributes
          </p>

          {/* <div className="cards_boss">
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
          </div> */}
        </div>
        <div className="pr_para1">
          <p className="pr_head1">Spam Detection</p>
          <p className="proj_para2">
            Developed and implemented a machine learning model to accurately
            detect spam emails, utilizing natural language processing and
            classification algorithms, resulting in a 95% accuracy rate.
            Analyzed and visualized data trends to optimize model performance
            and user experience
          </p>

          <div className="pr_para1">
            <p className="pr_head1">Unemployment Analysis</p>
            <p className="proj_para2">
              Experienced data analyst skilled in leveraging statistical
              programming, data mining, and visualization tools to uncover
              insights from complex unemployment datasets. Adept at translating
              technical findings into actionable recommendations to support
              strategic business decisions.
            </p>

            <p className="techno">
              <span>
                <b>TECHNICAL KNOWLEDGE:</b>
              </span>
              <br />
              ❖ Expertise in creating dashboards using the suite of tableau
              software tools like Tableau Desktop and publishing on Tableau
              Server. <br />❖ Decent hold on parameters, calculated fields,
              filters, sets, hierarchies, actions in dashboards.
              <br /> ❖ Know how to restrict data for particular users using Row
              level security and User filters.
              <br /> ❖ Good hold on core python concepts which includes aspects
              like data structures, oops concept, variables and data types
              (string, tuples, lists, dictionaries, integers) knowledge of file
              handling concepts exception handling , generators and iterators.
            </p>

            <h3 className="cert">Certifications</h3>
            <p className="certificate">
              {" "}
              Cisco Data Analytics Essentials, Introduction to database and SQL,
              Introduction to Career Skills in Data Analytics, Advanced Excel
              and Finance Calculations, Microsoft Azure Data Fundamentals.
            </p>

            {/* <div className="cards_boss">
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
          </div> */}

            {/* <div className="cards_boss">
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
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
