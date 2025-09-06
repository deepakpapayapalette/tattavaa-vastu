// NumerologyServices.jsx
import React from "react";
import numerologyImg1 from  "../../assets/images/icons/Numerology1.png"
import numerologyImg2 from  "../../assets/images/icons/NumerologyServices2.png"
import numerologyImg3 from  "../../assets/images/icons/NumerologyServices3.png"
import { NavLink } from "react-router-dom";

export default function NumerologyServices() {
  return (
    <section className="margin-before  bg-[#faf6e6]">
      <div className="container py-5">
        {/* Section Header */}
        <div className="md:pb-[36px]">
          <h2 className="font-semibold text-lora">
            Numerology Services: Unlock the Power of Numbers
          </h2>
          <p className="mx-auto text-dark mb-0" >
            Receive personalized numerology reports crafted by our expert
            consultants, guiding you to harness the inherent power of numbers for
            personal and professional advancement.
          </p>
        </div>

        {/* Cards Row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm  p-[24px] h-100 d-flex flex-column">
              <div className="mb-4">
                <img src={numerologyImg1} alt="img" className="img-fluid" />
              </div>
              <h4 className="text-lora fw-semibold mb-2">Name Numerology</h4>
              <p className="text-muted mb-4 flex-grow-1">
                Choose names that resonate with success and positivity.
              </p>
              <NavLink to='/consult'
                className="text-lora no-underline py-3 px-4 text-[18px] w-full main-bg hover:shadow-md text-white font-medium   rounded-lg transition"
                style={{ backgroundColor: "#C19A00" }}
              >
                Book a Consultation
              </NavLink>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm p-[24px] h-100 d-flex flex-column">
              <div className="mb-4 ">
                        <img src={numerologyImg2} alt="img" className="img-fluid" />
              </div>
              <h4 className="text-lora fw-semibold mb-2">Mobile Number Numerology</h4>
              <p className="text-muted mb-4 flex-grow-1">
                Optimise your contact numbers for luck and communication flow.
              </p>
              <button
                className="text-lora py-3 px-4 text-[18px] w-full main-bg hover:shadow-md text-white font-medium   rounded-lg transition"
                style={{ backgroundColor: "#C19A00" }}
              >
                Book a Consultation
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white rounded-3 shadow-sm  p-[24px] h-100 d-flex flex-column">
              <div className="mb-4 fs-1">
                    <img src={numerologyImg3} alt="img" className="img-fluid" />
              </div>
              <h4 className="text-lora fw-semibold mb-2">Business Numerology</h4>
              <p className="text-muted mb-4 flex-grow-1">
                Align your brand and enterprise numbers for sustained growth and
                stability.
              </p>
              <button
                className="text-lora text-lora py-3 px-4 text-[18px] w-full main-bg hover:shadow-md text-white font-medium   rounded-lg transition"
                style={{ backgroundColor: "#C19A00", fontFamily: "Lora" }}
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
