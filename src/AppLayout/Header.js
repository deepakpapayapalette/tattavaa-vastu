import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

import Logo from '../assets/images/logo.png'; 
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { GoTriangleDown } from "react-icons/go";
import '../assets/css/Header.css'
const Header = () => {

  const [expanded, setExpanded] = useState(false);
   const handleClose = () => setExpanded(false);
  // const [scrollDown, setScrollDown] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);

    //   const handleScroll = () => {
    //   if (window.scrollY > 0) {
    //     setScrollDown(true);
    //   } else {
    //     setScrollDown(false);
    //   }
    // };
  // useEffect(() => { 
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

//   window.onscroll = function() {
//     if (this.scrollY > 10) {
//         setScrollDown(true);
//     } else{
//       setScrollDown(false);
//     }
  // };
  
  const servicesList = [
  { id: 1, name: "Vastu For Home" },
  { id: 2, name: "Aroma Vastu" },
  { id: 3, name: "Vastu For Office" },
  { id: 4, name: "Numerology (Name, Business & Mobile)" },
  { id: 5, name: "Vastu For Business" },
  { id: 6, name: "Wrist Watch Analysis" },
  { id: 7, name: "Vastu For Factory" },
  { id: 8, name: "Crystal Therapy" },
  { id: 9, name: "Color Therapy" },
  { id: 10, name: "Rudraksh Therapy" },
  ];
  
  return (
    <>
      <header> 
      <nav className={`navbar navbar-expand-md navbar-light bg-white shadow-sm  main-navbar  
          // scrollDown == true ? 'headerfix' : '' 
        `
      }
        id='mainNavbar'
      >
      <div className="container">
          <div className="brand">
             <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={Logo} alt="Logo"  className="me-4" /> 
            </a>
          </div> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={expanded ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded? <IoMdClose />:  <AiOutlineMenu />} 
        </button> 
        {/* Menu */}
          <div className={`collapse navbar-collapse pb-3 pb-lg-0 ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li><NavLink onClick={handleClose} to="/"  className='nav-link ' >Home</NavLink></li>
            <li className="nav-item">  <NavLink onClick={handleClose} to="/about" className='nav-link '>About</NavLink> </li>
            <li className="nav-item relative  service-link ">
                  <span className='dropdown-toggle flex items-center '>
                  <NavLink to="/services" className='nav-link' onClick={handleClose}> 
                  Service
              </NavLink> 
                </span> 
            
              <div className="service-dropdown dropdown">
                <ul className='service-inner-card'>
                  {servicesList.map((el , i) => {
                    return (
                  <li key={i}><NavLink to="/test"> 
                      {el.name}
                      </NavLink>
                      </li>  
                    )
                  })}
                </ul>
                {/* <GoTriangleDown /> */}
              </div>
            </li>
            <li className="nav-item"> <NavLink onClick={handleClose} to="/shop" className='nav-link'>Shop</NavLink>  </li>
            <li className="nav-item">   <NavLink onClick={handleClose} to="/training-classes"  className='nav-link '>Training Classes</NavLink>  </li>
            <li className="nav-item">   <NavLink onClick={handleClose} to="/news-articles"  className='nav-link '>News & Article</NavLink>  </li>
            <li className="nav-item"> <NavLink onClick={handleClose} to="/contact"  className='nav-link '>Contact Us</NavLink> </li>
          </ul>

          {/* Right buttons */}
          <div className="d-flex align-items-center gap-2 mb-lg-0 mb-3">
                   <NavLink to="/login" className='login-btn   rounded-md text-lora'>Login</NavLink>
          </div>
            </div> 
      </div>
    </nav>
      </header>
    
    </>

  );
}



export default Header;