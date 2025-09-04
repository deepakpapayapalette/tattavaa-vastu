import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/footer.css'
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaPinterestP,
 
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import footerLogo from "../assets/images/footer-logo.png"
const Footer = () => {
  return (
     <footer className="footer-section margin-before">
      <div className="container py-5">
        <div className="row gy-4">
          {/* Logo & Description */}
          <div className="col-md-3">
            <img
              src={footerLogo}
              alt="Tattvaa Vastu"
              style={{ maxWidth: "120px" }}
              className="mb-3"
            />
            <p className="text-dark small">
              Ready to embrace positivity and prosperity? Triangle Vastu offers
              easy online and onsite consultations, tailored for your.
            </p>
          </div>

          {/* About */}
          <div className="col-md-2">
            <h6 className="text-lora font-semibold mb-3 text-[20px] ">About</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Service</a></li>
              <li><a href="#" className="footer-link">Shop</a></li>
              <li><a href="#" className="footer-link">Training Classes</a></li>
              <li><a href="#" className="footer-link">News & Article</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="text-lora font-semibold mb-3 text-[20px]">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms Of Use</a></li>
              <li><a href="#" className="footer-link">Term & Conditions</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-5">
            <div className='flex items-center mb-1'> 
             <MdOutlineMail className='me-2' />
            <span className="mb-1">
              vastutriangle559@gmail.com
            </span> 
            </div>
            <div className='flex items-center mb-4'> 
             <BsTelephone className='me-2' />
            <span className="mb-1">
              <a href="tel:2659652695" className='no-underline text-gray-900'> +91 2659652695</a>
            </span> 
            </div> 

            <h6 className="text-lora font-semibold text-[24px]">Follow Us</h6>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTelegramPlane /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaPinterestP /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center py-2">
        <small>©2025 Triangle Vastu All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer