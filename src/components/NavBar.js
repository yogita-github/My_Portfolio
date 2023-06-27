import React,{useState} from 'react';
import '../navbar.css';
// import{ Link } from "react-scroll"

export default function NavBar(props){
    const[active,setActive] = useState("nav__menu");
        const navToggle = ()=>{
            active === 'nav__menu' ? setActive('nav__menu nav__active'):setActive("nav__menu");
    // const [nav, setNav] = useState(false);

    // const links = [
    //   {
    //     id: 1,
    //     link: "home",
    //   },
    //   {
    //     id: 2,
    //     link: "about",
    //   },
    //   {
    //     id: 3,
    //     link: "portfolio",
    //   },
    //   {
    //     id: 4,
    //     link: "experience",
    //   },
    //   {
    //     id: 5,
    //     link: "contact",
    //   },
    // ];
           
        };
    return(
       <nav className="nav">
        <a href="/" className="nav__brand">Yogita</a>
        <ul className={active}>
            <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="/about" className="nav__link">About</a></li>
            
            {/* <li className="nav__item"><a href="/contact" className="nav__link">Contact</a></li> */}
            <li className="nav__item"><a href="/experience" className="nav__link">Experience</a></li>
            <li className="nav__item"><a href="/project" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="/skill" className="nav__link">Skills</a></li>
        </ul>
        <div onClick={navToggle} className="nav__toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
       </nav>
    )
}

