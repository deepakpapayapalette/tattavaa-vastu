import React from "react";
import banner from '../../assets/videos/banner.mp4'; 
import { NavLink } from "react-router-dom";
// import { heroSliderData } from "../../data/LocalData";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
export default function HeroBanner() {
   
  //    const settings = {
  //   dots: false,                
  //   infinite: true,          
  //   speed: 1000,              
  //   slidesToShow: 1,           
  //   slidesToScroll: 1,         
  //   fade: false,                
  //   autoplay: false,           
  //   autoplaySpeed: 4000,       
  //   pauseOnHover: false,       
  //   arrows: false             
  // };

  return (
    <section className="relative "> 
      <div  className="h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div> 
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={banner} type="video/mp4" />

        </video> 
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-60" style={{ backgroundColor: 'rgb(0 0 0 / 70%)' }}></div> 
        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-3xl md:text-5xl  text-white leading-snug " style={{ fontFamily: 'Lora, serif' }}>
            Triangle Vastu : Harmonizing Spaces,
            <br />
            Empowering Lives
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-200">
            Unlock the ancient wisdom of Vastu and transform your surroundings
            into havens of prosperity and peace. Triangle Vastuu offers bespoke
            consultation services to align your residential, commercial, and
            industrial spaces with cosmic energies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition no-underline" style={{ fontFamily: 'Lora, serif' }}>
              Book a Consultation
            </NavLink>
              <NavLink to="/services" className="px-6 py-3 second-btn font-semibold no-underline " style={{ borderWidth: '1px', fontFamily: 'Lora, serif' }}> 
                  Explore Service 
            </NavLink>
          </div>
        </div>
        </div>
      </div> 
    </section>
    
  );
}
