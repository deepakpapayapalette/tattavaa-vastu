import React from 'react'
import Carousel from 'react-multi-carousel';
import FortuneBasketCard from '../UI/FortuneBasketCard';
const FortuneBasketSlider = ({filteredData}) => {

           const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, 
             partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
           
        }
    };
  return (
    <>
         <Carousel
                      //   removeArrowOnDeviceType={["tablet", "mobile"]}
                        arrows={false} 
                      responsive={responsive}
                      // autoPlay={false}
                      // autoPlaySpeed={3000}
                      // transitionDuration={2000} 
                      //additionalTransfrom={-20}
                      //  pauseOnHover={false} 
                      //  centerMode={false}
                      containerClass=" carousel-container" 
                      itemClass="pe-md-3 px-1"  
                      showDots={false}
                      infinite={true}  
                      renderDotsOutside={true} 
                      partialVisible={true} 
                      className='ps-0'
                      >
                      {filteredData.map((item) => {
                          return (  
                              <div className="" key={item.id}>
                                  <div className="p-[20px] rounded-xl overflow-hidden hover:shadow-sm second-bg">
                                      <img
                                          src={item.img}
                                          alt="Astrologer"
                                          className="w-full  object-cover"
                                      />
                                      <div className="py-4 px-1">
                                          <div className="flex  items-start">
                                              <h4 className="  text-gray-900 font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>
                                              7 Mukhi Rudraksha 
                                              </h4>
                                        
                                          </div>
                                          <div className='flex items-cetner '>
                                            <div className='text-[16px] me-3'>₹8,399 </div>
                                            <div className='text-gray-500 text-[12px] content-center line-through'>  ₹12,200</div>
                                          </div>
                                          
                                 
                                      </div>
                                      <div className="">
                                          <button className="py-3 px-4 text-[18px] w-full main-bg hover:shadow-md text-white font-medium   rounded-lg transition"
                                              style={{ fontFamily: 'Lora, serif' }}
                                          >
                                             Order Now
                                          </button>
                                      </div>
                                  </div>
                    
                              </div>
                              )
                          })} 
                      </Carousel>
    </>
  )
}

export default FortuneBasketSlider
