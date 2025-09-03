// CrystalHealing.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CrystalLeftImg from "../../assets/images/Crystal-left.png"
import CrystalRightImg from "../../assets/images/Crystal-right.png"
export default function CrystalHealing() {
  return (
    <section className="space-top">
      <div className="container">
                    {/* Section Header */}
        <div className="md:pb-[36px]">
          <h2 className="font-semibold text-lora">
            Crystal Healing: Energise Your Environment Naturally
          </h2>
          <p className="mx-auto text-dark mb-0" >
       Our clients have experienced significant stress relief and renewed energy through the targeted application of crystal therapy, transforming their environments into serene sanctuaries.
          </p>
        </div>

        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div className="card border-0 rounded-3 overflow-hidden shadow-sm h-100">
              <img
                src={CrystalLeftImg}
                className="card-img"
                alt="Positive Vibrations"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0,.8))",
                }}
              >
                <div className="" style={{borderTop:"1px solid #949296"}}>
                    <h5 className="text-semibold text-white mb-2 pt-3 text-lora">Positive Vibrations</h5>
                <p className="text-white small mb-0">
                  Utilise specific crystals to cleanse, protect, and enhance
                  positive vibrations in any space.
                </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div className="card border-0 rounded-3 overflow-hidden shadow-sm h-100">
              <img
                src={CrystalRightImg}
                className="card-img"
                alt="Tailored Selection & Placement"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                className="card-img-overlay d-flex flex-column justify-content-end"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0, .8))",
                }}
              >
                <div className="pt-3" style={{borderTop:"1px solid #949296"}}>

                <h5 className="text-semibold text-white mb-2 text-lora">
                  Tailored Selection & Placement
                </h5>
                <p className="text-white small mb-0">
                  Receive expert guidance on selecting and placing crystals,
                  perfectly tailored to your unique energetic needs.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
