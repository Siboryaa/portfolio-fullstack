import { useState } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-white fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="btn btn-ghost lg:hidden" onClick={handleToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
        <a className="font-bold text-slate-600 text-4xl">Portfolio.</a>
      </div>
      <div className={`navbar-center hidden lg:flex ${isOpen ? "block" : "hidden"}`}>
        <ul className="dekstopMenu horizontal menu menu-horizontal">
          <li>
            <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500} className="dekstopMenuListItem">
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="aboutme" spy={true} smooth={true} offset={-55} duration={500} className="dekstopMenuListItem">
              About me
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-800} duration={500} className="dekstopMenuListItem">
              Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-200} duration={500} className="dekstopMenuListItem">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ml-auto flex items-center">
        <div className="avatar mr-5">
          <div tabIndex={0} role="button" className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ">
            <img src="./src/assets/images/boryaaa.png" className="w-full h-full" alt="Sultan arya"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;