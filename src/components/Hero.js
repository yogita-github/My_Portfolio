import React from 'react';
import '../Hero.css';
import NavBar from './NavBar';
import YOGITA from '../assests/123.jpg';
import{FaFacebook} from "react-icons/fa";
import{FaInstagram} from "react-icons/fa";
import{FaGithubSquare} from "react-icons/fa";
import{FaLinkedin} from "react-icons/fa";
import{FaRegEnvelope} from "react-icons/fa";
import{FaPhone} from "react-icons/fa";
import Resume from "../assests/Resume Yogita.pdf";

export default function Hero(){
  return (
    <>
    <NavBar/>
    <section className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className='pro_before'><div className='progress'></div></div>
        <div className="flexColStart hero-left ">
        <div className='hero-title'>
            <h1 className='m-3 py-5'>
            Passionate Frontend Developer!!
            </h1>
            </div>
            <div className='paragraph'>
            <p className='flexColStart hero-des mx-5 my-5 '>
            Hi, I'm Yogita Mahajan, a passionate Frontend Developer dedicated to creating captivating online experiences.
            With a strong background in frontend technologies and a keen eye for detail, I specialize in creating websites
            that not only look stunning but also deliver user friendly experiences.
            </p>
            </div>
            
        </div>
        <div className='move-upward'>
        <div className='right'>
        <div>
          <div className="image-container">
            <img src={YOGITA} alt="my profile"  />
          </div>
          <div className="header__buttons">
          <a href={Resume} className='btn btn-outline'>
            Resume
          </a>
        </div>
      </div>
          <div className='container1'>
        </div>
        </div>
        </div>
        
        
      </div>
      
      <div className='row1'>
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
              <ul className='header__ul'>
              <a href='https://github.com/yogita-github'>
                <li><FaGithubSquare/></li>
                </a>
                <a href="https://www.linkedin.com/in/yogita-mahajan-189820213">
                <li><FaLinkedin/></li>
                </a>
                <a href="https://www.facebook.com/yogita.mahajan.9889">
                <li><FaFacebook/></li>
                </a>
                <a href="https://www.instagram.com/yogitamahajan21/">
                <li><FaInstagram/></li>
                </a>
                <a href="mailto:yogitavm2001@gmail.com" type='email'>
                <li><FaRegEnvelope/></li>
               </a>
               <a href='tel:9699937286' type='contact'>
               <li><FaPhone/></li>
               </a>
                
              </ul>
              </div>
            </div>
          </div>
        </div>
        
        

    </section>
    
</>
  )
}


