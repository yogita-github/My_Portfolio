import React from 'react';
import YOGITAIMG from '../assests/a.jpg';
import '../about.css';
import NavBar from './NavBar';

export default function About(){
  return (
    <>
    <NavBar/>
    <section id="about" className="about section container">
      <div class="float-container">
      <div class="float-child">
      <div className="sectionTitle">
      <div className="sectionContent grid">
        <div className='hover-padd m-3 py-5'>
        <h2 className='hover-underline-animation '>About</h2>
        </div>
        <div className="textSection">
          <h4 className='about_para'>
            I am a computer science engineering student, passionate about the
            world of technology. My name is Yogita Vinayak Mahajan, and I am
            currently pursuing my studies in computer science engineering at
            Shram Sadhana Trust College of Engineering and Technology Bambhori.
            I completed my Secondary and High School education at Godavari
            English medium CBSE School. Throughout my academic journey, I have
            actively participated in various coding competitions, hackathons,
            and projects to enhance my practical skills and expand my knowledge
            beyond the classroom. I have actively participated in the Milestone
            event of the College as a CodeAThone coordinator. One of my
            Favourite hobbies is reading novels.
          </h4>
        </div>
        </div>

        </div>
        </div>
        <div className="float-child">
        <div className="aboutImgDiv">
        <img src={YOGITAIMG} alt="" className='aboutImg' />
        <span class="top"></span>
      <span class="right"></span>
      <span class="bottom"></span>
      <span class="left"></span>
      </div>
      </div>
      
      
      </div>
    </section>
    
    </>
  )
}


