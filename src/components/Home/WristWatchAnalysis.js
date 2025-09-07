// WristWatchAnalysis.jsx
import React from "react";

import WristWatchAnalysiImg from "../../assets/images/WristWatchAnalysis.png"
import { NavLink } from "react-router-dom";
export default function WristWatchAnalysis() {
  return (
      <section className="space-top WristWatchAnalysis-section">
          <div className="container">
              <div className="">
                  <div className="card rounded-3"
                      style={{
                          position: "relative",
                          backgroundImage: `url(${WristWatchAnalysiImg})`
                      }}
                  >
                      <div
                          className="row"
                      >
                          <div className="col-lg-5"></div>
                          <div className="col-lg-7">
                              <div className="Wrist-Watch-parent" >
                                  <div
                                      className="text-white  WristWatchAnalysCard" 
                                  >
                                      <h3 className="font-semibold mb-3 text-white text-lora">
                                          Wrist Watch Analysis: Time & Energy Alignment
                                      </h3>
                                      <p className="mb-4 text-white" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                                          Our unique service delves into the numerology and energetic impact
                                          of your wristwatch. Understand how your timepiece influences your
                                          personal and professional life vibrations, often overlooked yet
                                          powerful. Gain practical tips and insights on harnessing your
                                          wristwatch as a tool for success and wellbeing, aligning it with
                                          your aspirations.
                                      </p>
                                      <div className="mb-3">
                                          
                                      <NavLink to="/consult" className="first-btn">
                                          Book a Consultation
                                      </NavLink>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
