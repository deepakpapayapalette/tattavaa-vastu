// RudrakshaHealing.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RudrakshaHealing() {
  return (
    <section className="space-top">
      <div className="container">
        {/* Section Title */}
        <h2 className="font-semibold text-lora">
          Rudraksha Healing: Spiritual Wellness & Protection
        </h2>
        <p className="text-dark mb-[36px]">
          Discover the transformative potential of Rudraksha, promoting harmony
          and well-being in your life.
        </p>

        {/* Cards Row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-4">
            <div className=" border-0 bg-[#faf6e6] h-100  rounded-3">
              <div
                className="p-3 font-semibold text-white text-lora text-[24px]"
                style={{ backgroundColor: "#cda202", borderRadius: "0.5rem 0.5rem 0 0" }}
              >
                Balance Energies
              </div>
              <div className="p-3 bg-[#faf6e6] flex flex-col justify-between">
                <p className="text-dark">
                  Ancient sacred beads used to balance energies and promote
                  profound mental peace.
                </p>
                <div> 
                    <button className=" text-[12px] text-lora text-[#cda202] px-4 py-2 rounded-md" style={{border:'1px solid #cda202'}}>Email Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4">
            <div className=" border-0 bg-[#faf6e6] h-100  rounded-3">
              <div
                className="p-3 font-semibold text-white text-lora text-[24px]"
                style={{ backgroundColor: "#cda202", borderRadius: "0.5rem 0.5rem 0 0" }}
              >
                Customized Recommendations
              </div>
              <div className="p-3  bg-[#faf6e6] flex flex-col justify-between">
                <p className="text-dark">
                  Based on individual astrological profiles for optimal spiritual
                  benefits.
                </p>
                <div> 
                    <button className=" text-[12px] text-lora text-[#cda202] px-4 py-2 rounded-md" style={{border:'1px solid #cda202'}}>Email Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4">
            <div className="  border-0 bg-[#faf6e6] h-100 rounded-3">
              <div
                className="font-semibold p-3 text-white text-lora text-[24px]"
                style={{ backgroundColor: "#cda202", borderRadius: "0.5rem 0.5rem 0 0" }}
              >
                Healing Powers
              </div>
              <div className="p-3 bg-[#faf6e6] flex flex-col justify-between ">
                <p className="text-dark">
                  Gain insights into the profound spiritual benefits and healing
                  powers of Rudraksha.
                </p>
                <div> 
                    <button className=" text-[12px] text-lora text-[#cda202] px-4 py-2 rounded-md" style={{border:'1px solid #cda202'}}>Email Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
