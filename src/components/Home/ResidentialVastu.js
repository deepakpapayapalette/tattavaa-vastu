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
          <div className="relative"> 
          <div className="absolute z-0 bg-layer1 "></div>
          <img
            src={ResidentialVastuImage}
            alt="Residential Vastu"
            className="relative z-10 w-full h-auto object-cover "
          />
          </div>
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

          <button className="px-8 py-3 text-[#cda202] text-lora   text-[18px] rounded-md hover:bg-[#cda202] hover:text-white transition-all duration-300"
            style={{border:'1px solid #cda202'}}
            >
            Contact Now
          </button>
        </div>
      </div>
        </div>
      
    </section>
  );
};

export default ResidentialVastu;
