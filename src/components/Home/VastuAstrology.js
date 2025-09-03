// AstroVastuSection.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  astroLeftImg  from "../../assets/images/astro-left.png";
import  astroRightImg  from "../../assets/images/astro-right.png";
export default function VastuAstrology() {
  return (
    <section className="space-top">
      <div className="container">
        <div className="mb-[36px]  ">
          <h2 className="font-semibold text-lora">
            Astro Vastu & Astrology: Cosmic Insights for Your Space & Life
          </h2>
          <p className="" >
            Our integrated Astro–Vastu approach combines ancient astrological
            wisdom with Vastu principles, offering profound insights into how
            cosmic energies influence your living and working environments.
            Clients report greater clarity and positive shifts in their lives.
          </p>
        </div>

        {/* Cards Row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div
              className="d-flex justify-content-between align-items-center p-4 rounded hover:shadow-sm h-100"
              style={{ backgroundColor: "#faf6e6" }}
            >
              <div className="pe-3">
                <h5 className="fw-semibold text-dark text-lora">
                  Integrate Cosmic Blueprints
                </h5>
                <p className="text-muted mb-0">
                  Harmonise your birth chart and planetary positions with your
                  spatial design for holistic balance.
                </p>
              </div>
              <div
                className="flex-shrink-0 d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={astroLeftImg}
                  alt="Cosmic Blueprints"
                  className="img-fluid"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div
              className="d-flex justify-content-between align-items-center p-4 rounded hover:shadow-sm h-100"
              style={{ backgroundColor: "#faf6e6" }}
            >
              <div className="pe-3">
                <h5 className="fw-semibold text-dark text-lora">Environment & Destiny</h5>
                <p className="text-muted mb-0">
                  Personalised remedies that align your environment with your
                  unique cosmic blueprint, enhancing fortune and clarity.
                </p>
              </div>
              <div
                className="flex-shrink-0 d-flex align-items-center justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={astroRightImg}
                  alt="Astrological Wheel"
                  className="img-fluid"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
