import React from "react";
import commercial_vastu_video from "../../assets/videos/CommercialVastu.mp4"
import { FiCheckCircle } from "react-icons/fi";
const CommercialVastu = () => {
  return (
    <section className="bg-[#ffffff] space-top ">
        <div className="container">
            <div className="row g-4 flex flex-col-reverse md:flex-row items-end ">
                <div className="col-lg-6 col-12">
                      <div className="bg-[#faf6e6] p-[36px] rounded-[10px]" >
                          <h2 className="text-lora font-semibold  mb-2 ">
                              Commercial & Industrial Vastu: <br className="hidden md:block" />
                              Boost Success & Productivity
                          </h2>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                              Maximise your business potential with bespoke Vastu solutions for
                              offices, retail spaces, factories, and warehouses. We strategise the
                              optimal placement of entrances, machinery, and workstations to
                              foster growth, efficiency, and profitability.
                          </p>

                          <button className="px-6 py-2  text-[#cda202] text-[18px] text-lora bg-[#fdf6e6] font-medium rounded-md hover:bg-[#cda202] hover:text-white transition-all duration-300 mb-6"
                              style={{ border: '1px solid #cda202' }}
                          >
                              Let’s Discuss
                          </button>
                      </div>
                      <div className="flex text-center lg:text-left pt-[24px]"> 
                     
                          <div className="bg-[#cda202] text-black p-4 rounded-md shadow-md text-left flex">
                               <div className="text-lg me-2"><FiCheckCircle  size={25}/></div>
                               <div>

                              <h4 className="font-semibold flex items-center gap-2 mb-2 text-lora">
                               
                                  Case Study: Manufacturing Unit&apos;s Profit Surge
                              </h4>
                              <p className=" leading-relaxed mb-0">
                                  A client&apos;s manufacturing unit saw a 30% increase in profits
                                  within six months after Vastu realignment by Triangle Vastu,
                                  demonstrating the tangible impact of harmonious commercial spaces.
                              </p>
                               </div>
                          </div>
                      </div>
                </div>
                <div className="col-lg-6 col-12">
                <div className="flex w-full h-[660px] overflow-hidden"> 
           <video
            className="rounded-lg w-full h-auto object-cover shadow-lg"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src={commercial_vastu_video} type="video/mp4" /> 
            </video> 
        </div>
                </div>
            </div>
        </div>
    
    </section>
  );
};

export default CommercialVastu;
