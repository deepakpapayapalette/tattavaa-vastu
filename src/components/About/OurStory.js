import React from 'react'
import abImg1 from '../../assets/images/ResidentialVastu.png'
const OurStory = () => {
  return (
    <>
        <section className='bg-[#faf6e6] py-[36px] mt-[36px]'>
              <div className="container">
                  <div className="row g-4">
                      <div className="col-lg-6 col-12 flex items-center">
                          <div> 
                          <h2 className='text-lora font-semibold lg:text-[42px]'>Our Story</h2>
                          <p className='text-[#32312e]'>Triangle Vastu was founded with a vision to make astrology, numerology, vastu, and occult wisdom accessible in a modern, trustworthy way. What began as a passion for decoding the cosmos has grown into a holistic platform for guidance, remedies, and training.</p> 
                          <div className='font-semibold text-[20px] mb-4 text-lora'>Where Science Meets Spirit</div>
                          <button class="px-8 py-3 text-[#cda202] text-lora   text-[18px] rounded-md hover:bg-[#cda202] hover:text-white transition-all duration-300" style={{ border: '1px solid #cda202' }}>Contact Now</button>
                      </div>
                          </div>
                      <div className="col-lg-6 col-12">
                          <div className="ab-righ-img">
                              <img src={abImg1} alt="img" className='img-fluid' />
                          </div>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default OurStory
