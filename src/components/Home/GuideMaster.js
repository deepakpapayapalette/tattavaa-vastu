

import { useState } from 'react';
import { cardsData } from '../../data/LocalData';
import { FaArrowRightLong } from "react-icons/fa6";
import astrologer from '../../assets/images/astrologer.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AstrologerCard from '../UI/AstrologerCard';
import GuidedMasterCard from '../UI/GuidedByMasterCard';
import GuideMasterSlider from '../Sliders/GuideMasterSlider';
import { NavLink } from 'react-router-dom';
// import AstrologerCard from '../UI/AstrologerCard';


const GuideMaster = () => {
    
      const [activeCategory, setActiveCategory] = useState("Vedic Astrologer");
      const filteredCards =  cardsData.filter((card) => card.category === activeCategory); 
      
    const categories = [
    { key: "Vedic Astrologer", label: "Vedic Astrologer" },
    { key: "Palmistry", label: "Palmistry" },
    { key: "Face Reading", label: "Face Reading" },
    { key: "Numerology Astrologer", label: "Numerology Astrologer" }, 
  ];


  return (
    <> 
    <section className='space-top relative'> 
        <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-12 mb-3 mb-lg-0">
                        <h2 className="fw-semibold text-lora ">Guided by the Masters</h2>
                        <p className="light-color">
                            Connect with seasoned astrologers and numerology experts who translate the cosmic language into practical wisdom for your success and harmony.
                        </p>
                    </div>
                    <div className='col-lg-3 col-12 d-flex justify-content-lg-end'>
                        <button className="btn mb-3 mb-lg-0 flex items-center" 
                          >
                              <NavLink className="no-underline text-dark" to="/guided-by-masters">
                                  
                         View All <FaArrowRightLong className='ms-2 d-inline'  />
                              </NavLink>
                        </button>
                    </div>
                </div> 
            <div className="row">
                <div className="col-12 d-flex ">
                    <div className=" medical-tab-buttons mb-4 flex flex-wrap gap-3"> 
                         {categories.map((cat) => (
                            <button key={cat.key}
                            className={`cutom-tab-style py-[12px] px-[15px] rounded-lg text-[14px] ${activeCategory === cat.key ? "active-tab-btn-style" : ""}`}
                            onClick={() => setActiveCategory(cat.key)}
                            // style={{borderWidth: '1px', borderColor: '#CDA202'}}
                            >
                            {cat.label}
                        </button>
          ))}

                    </div>
                </div> 
            </div>

          <div className="row">  
                <GuideMasterSlider GuideMasterArray={filteredCards}  />
          </div> 
        </div>
    </section>
    </>
  )
}

export default GuideMaster