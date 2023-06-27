import React from 'react';
import NavBar from './NavBar';
import '../experience.css';
import Internship from '../assests/internship.jpg'

export default function Experiance(){
  return (
    <>
    <NavBar/>
    <section id="about" className="experiance">
      <div class="float-container1">
      <div class="float-child1">
      <div className="sectionTitle1">
      <div className="sectionContent1 grid">
        <div className='hover-padd m-3 py-5'>
        <h2 className='hover-underline-animation1 '>Experience</h2>
        </div>
        <div className="textSection1">
          <p className='textSection1'>techmihirnaik Group’s </p>
          <h4 className='about_para1'>
          
Worked as a Frontend Developer Intern on the roommate website named Foodica and coordinated with the group to
complete each task.Learnt different Frontend technologies and gained industrial experience.         </h4>
        </div>
        </div>

        </div>
        </div>
        <div class="float-child1">
        <div className="aboutImgDiv1">
        <img src={Internship} alt="" className='aboutImg1' />
        <span class="top1"></span>
      <span class="right1"></span>
      <span class="bottom1"></span>
      <span class="left1"></span>
      </div>
      </div>
      
      
      </div>
    </section>
    </>
  )
}


