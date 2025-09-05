import React, { useState } from 'react'
import { cardsData } from '../../data/LocalData';
import GuidedByMasterCard from '../UI/GuidedByMasterCard';

const GuidedMastersDetail = () => {
     const [activeCategory, setActiveCategory] = useState("Vedic Astrologer");
    const filteredDataList = cardsData.filter((card) => card.category === activeCategory); 
      const categories = [
    { key: "Vedic Astrologer", label: "Vedic Astrologer" },
    { key: "Palmistry", label: "Palmistry" },
    { key: "Face Reading", label: "Face Reading" },
    { key: "Numerology Astrologer", label: "Numerology Astrologer" }, 
  ];
    

  return (
      <>
          <section className='space-top'>
              <div className="container">
                  <div className="about-title">
                      <h2 className='text-lora font-semibold '>
                          Guided by the Masters
                      </h2>
                      <p>Connect with seasoned astrologers and numerology experts who translate the cosmic language into practical wisdom for your success and harmony.</p>
                  </div>
              </div>
          </section>
          <section>
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <div className=" medical-tab-buttons mb-4 flex flex-wrap gap-3">
                              {categories.map((cat) => (
                                  <button key={cat.key}
                                      className={`cutom-tab-style py-[8px] px-[15px] rounded-lg text-[14px] ${activeCategory === cat.key ? "bg-[#cda202] text-white" : ""}`}
                                      onClick={() => setActiveCategory(cat.key)}
                                      style={{ borderWidth: '1px', borderColor: '#CDA202' }}
                                  >
                                      {cat.label}
                                  </button>
                              ))}
                          </div>
                      </div>
                  </div>
                  <div className="row g-4">
                      {filteredDataList.map((item) => {
                          return (
                              <>
                                  <div className="col-lg-4 col-md-6 col-12 " key={item.id}>
                                      <GuidedByMasterCard />
                                  </div>
                              </>
                          )
                      })}
                  </div>
              </div>
          </section>
      </>
  )
}

export default GuidedMastersDetail
