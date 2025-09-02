import React from "react";
import ResidentialVastuImage from  '../../assets/images/ResidentialVastu.png'

const ResidentialVastu = () => {
  return (
    <section className="bg-[#faf6e6] py-[36px] margin-before">
      <div className="container">
        <div className="row g-4">
        {/* Left Image */}
        <div className="col-lg-6 col-12">
          {/* Decorative background square */}
          {/* <div className="absolute -left-6 top-6 w-full h-full bg-[#e9dec2] z-0"></div> */}
          <img
            src={ResidentialVastuImage}
            alt="Residential Vastu"
            className="relative z-10 w-full h-auto object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="col-lg-6 col-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
            Residential Vastu: Create Your <br className="hidden md:block" /> 
            Sanctuary of Harmony
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Transform your home into a haven of peace and abundance with our 
            Residential Vastu services. We align your living space with natural 
            energies to enhance health, happiness, and prosperity for your family. 
            Our expert analysis focuses on floor plans, directions, and energy flow, 
            providing solutions without requiring major structural changes.
          </p>

          <button className="px-6 py-2 border border-[#f3c76d] bg-[#fdf6e6] text-gray-900 font-medium rounded-md hover:bg-[#f3c76d] hover:text-white transition-all duration-300">
            Contact Now
          </button>
        </div>
      </div>
        </div>
      
    </section>
  );
};

export default ResidentialVastu;
