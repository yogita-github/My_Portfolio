import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import ReactJS from "../assests/reactjs.png";
import python from "../assests/python.png";
import django from "../assests/django.png";
import excel from "../assests/excel.png";
import github from "../assests/github.png";
import NavBar from "./NavBar";
import "../skills.css";

export default function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-[#fb923c]",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-[#3b82f6]",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-[#fde047]",
    },
    {
      id: 4,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-[#67e8f9]",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-[]",
    },
    {
      id: 6,
      src: django,
      title: "Django",
      style: "shadow-[#a21caf]",
    },

    {
      id: 7,
      src: excel,
      title: "Excel",
      style: "shadow-[#059669]",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-[#020617]",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="skill_main">
        <div name="skill" className="skill1">
          <div className="skill2">
            <div>
              <p className="skill3">Skills</p>
              <p className="skill4">
                I possess a diverse set of skills that empower me to excel in
                Data Analytics.My Skill set includes:
                <br />
                <br />
                Tableau
                <br /> MYSQL
                <br /> Python
                <br /> Data Warehouse
                <br /> Business Intelligence
                <br /> Data Analyst
                <br /> Excel
                <br /> PowerBI
                <br />
              </p>
            </div>

            {/* <div className="skill6">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-10 px-12 sm:px-0">
                {techs.map(({ id, src, title, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                  >
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                    
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

