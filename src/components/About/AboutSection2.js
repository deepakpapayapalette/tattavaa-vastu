import React from 'react'
import image from '../../assets/images/principle1.png'
const AboutSection2 = () => {
  return (
    <>
    <section className='space-top'>
        <div className="container">
          <div className="">
            <h2 className='text-lora font-semibold'>
              The Principles We Live By
            </h2>
                <p className='text-[#333333]'>Our foundation is built on authenticity, personalisation, balance, and compassion—values that guide every consultation, remedy, and teaching we share.</p>
                  </div>
                  <div className="row g-4">
                      <div className="col-lg-6 col-12">
                          <div>
                              <img src={image} alt="" className='img-fluid' />
                          </div>
                      </div>
                      <div className="col-lg-6 col-12">
                          <div className=''>
                              <div className='bg-[#faf6e6] py-[12px] px-[24px] rounded-lg mb-4'>
                                  <h4 className='text-lora font-semibold pb-2 '>
                                      Authenticity
                                  </h4>
                                  <p className='mb-0'>Rooted in ancient traditions, applied with integrity.</p>
                              </div>
                              <div className='bg-[#faf6e6] py-[12px] px-[24px] rounded-lg mb-4'>
                                  <h4 className='text-lora font-semibold pb-2 '>
                                    Personalisation
                                  </h4>
                                  <p className='mb-0'>Tailored remedies and guidance for every individual.</p>
                              </div>
                              <div className='bg-[#faf6e6] py-[12px] px-[24px] rounded-lg mb-4'>
                                  <h4 className='text-lora font-semibold pb-2 '>
                                      Balance
                                  </h4>
                                  <p className='mb-0'>Harmonising cosmic energies with everyday spaces.</p>
                              </div>
                              <div className='bg-[#faf6e6] py-[12px] px-[24px] rounded-lg'>
                                  <h4 className='text-lora font-semibold pb-2 '>
                                      Compassion
                                  </h4>
                                  <p className='mb-0'>Supportive guidance that respects every life path.</p>
                              </div>
                          </div>
                      </div>
                  </div>
        </div> 
      </section>
    </>
  )
}

export default AboutSection2
