import React from "react";

// import vastu1 from '../../assets/images/vastu1.png'; 
import vastu2 from '../../assets/images/vastu2.png'; 
import icon1 from '../../assets/images/icons/icon1.png'; 
import icon2 from '../../assets/images/icons/icon2.png'; 
import icon3 from '../../assets/images/icons/icon3.png'; 
import "../../assets/css/home.css"
export default function VastuGuides() {
  return (
      <section className="space-top">
          <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Lora, serif' }}>
                  Meet Your Vastu Guides:
                Priyanka Solanki &
                Shalini G Pandey
              </h2>
              <p className=" text-gray-600  leading-relaxed">
                  Priyanka Solanki and Shalini G Pandey are dedicated to empowering
                  your life through harmonised spaces. Their expertise ensures that
                  every recommendation is tailored for your unique needs and goals.
              </p> 
              <div className="row g-4">

                  <div className="col-lg-6 col-12 ">
                      {/* Card 1 */}
                      <div className=" bg-[#faf6e6] p-3 rounded-lg hover:shadow-md transition mb-[12px]">
                          <div className="flex  gap-3 mb-2">
                              <div>
                                  <div className="main-bg grid  rounded-full  w-12 h-12" style={{ placeItems: 'center' }}>
                                      <img src={icon1} alt="" className="" />
                                  </div>
                              </div>
                              <div className="flex items-center">
                                  <h4 className="font-semibold text-gray-800 mb-0" style={{ fontFamily: 'Lora' }}>Visionaries</h4>
                              </div>
                          </div>
                          <p className="text-gray-900 text-[18px] mb-0">
                              Blending ancient Vastu wisdom with modern living to create balanced environments.
                          </p>
                      </div>
                      {/* Card 2 */}

                      <div className=" bg-[#faf6e6] p-3 rounded-lg hover:shadow-md transition mb-[12px]">
                          <div className="flex  gap-3 mb-2">
                              <div>
                                  <div className="main-bg grid  rounded-full  w-12 h-12" style={{ placeItems: 'center' }}>
                                      <img src={icon2} alt="" className="" />
                                  </div>
                              </div>
                              <div className="flex items-center">
                                  <h4 className="font-semibold text-gray-800 mb-0" style={{ fontFamily: 'Lora' }}> Trusted Consultants</h4>
                              </div>
                          </div>
                          <p className="text-gray-900 text-[18px] mb-0">
                              Years of experience transforming homes and businesses across
                              India with proven results.
                          </p>
                      </div>
                      {/* Card 3 */}
                      <div className=" bg-[#faf6e6] p-3 rounded-lg hover:shadow-md transition">
                          <div className="flex  gap-3 mb-2">
                              <div>
                                  <div className="main-bg grid  rounded-full  w-12 h-12" style={{ placeItems: 'center' }}>
                                      <img src={icon3} alt="" className="" />
                                  </div>
                              </div>
                              <div className="flex items-center">
                                  <h4 className="font-semibold text-gray-800 mb-0" style={{ fontFamily: 'Lora' }}> Personalized Solutions</h4>
                              </div>
                          </div>
                          <p className="text-gray-900 text-[18px] mb-0">
                              Committed to practical advice that brings peace, prosperity,
                              and positivity.
                          </p>
                      </div>
                  </div>
                  {/* Right Side Image */}
                  <div className="col-lg-6 col-12">
                    <div className="vastu-guide-right rounded-md"> 
                      <img
                          src={vastu2}
                          alt="Vastu Guides"
                          className="rounded-lg shadow-lg w-[96%] object-cover"
                      />
                    </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
