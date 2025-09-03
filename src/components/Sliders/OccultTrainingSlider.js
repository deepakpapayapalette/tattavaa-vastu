import React from 'react'
import Carousel from 'react-multi-carousel';
const OccultTrainingSlider = ({filteredData}) => {
               const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4, 
             partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1024, min: 767 },
            items: 3,
                 partialVisibilityGutter: 20
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
        itemClass="pe-3 px-1"
        showDots={false}
        infinite={true}
        renderDotsOutside={true}
        partialVisible={true}
        className='ps-0'
      >

        {filteredData.map((item) => {
          return (
            <>
              <div className="max-w-xs rounded-xl hover:border-gray-400 bg-[#faf6e6] p-[20px]">
                <div className="relative">
                  <img
                    src={item.img}
                    alt="Numerology Class"
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium px-3 py-2 rounded-b-xl">
                    Starting at just @199
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-3  ">
                  <h4 className="  text-[#000000] text-lora pb-2" >Numerology Class</h4>
                  <div className='flex justify-between items-center'>


                    <div className='space-y-1'>
                      <div className="text-sm text-gray-800">By Tutor Name</div>
                      <div className="text-sm text-gray-800">Time : 02 PM to 03 PM</div>
                    </div>

                    {/* Button Section */}
                    <div className="flex justify-between items-center pt-2">
                      <span></span>
                      <button className="text-black font-medium flex items-center gap-1 hover:text-yellow-600">
                        Enroll Now →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </Carousel>

    </>
  )
}

export default OccultTrainingSlider
