// import React from "react";
import Carousel from 'react-multi-carousel';
// import astrologer from '../../assets/images/astrologer.png';

export default function OccultClinicSlider({filteredCards}) {
       const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, 
             partialVisibilityGutter: 20,
             dots: false,
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
                itemClass="pe-md-4 px-1"  
                showDots={false}
                infinite={true}  
                renderDotsOutside={false} 
                partialVisible={true} 
                className='ps-0'
                >
                {filteredCards.map((item) => {
                    return (  
                        <div className="" key={item.id}>
                            <div className="p-[20px] rounded-xl overflow-hidden hover:shadow-sm second-bg ">
                                <div className='astro-img relative'>
                                <img
                                    src={item.img}
                                    alt="Astrologer"
                                    className="w-full object-cover "
                                />

                                </div>
                                
                                <div className="py-4 px-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="  text-gray-900 font-semibold mb-0" style={{ fontFamily: 'Lora, serif' }}>
                                            Astrologer Name
                                        </h4>
                                        <div className="text-right">
                                            <h4 className="font-semibold text-gray-900  mb-0 text-start">₹20</h4>
                                            <span className="text-sm text-gray-600">Per Min</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-0">Vedic Astrologer</p>
                                    <p className="text-sm text-gray-600 mt-1 mb-0">
                                        Language : <span className="font-medium">Hindi, English</span>
                                    </p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        7+ Year Of Experience
                                    </p>
                           
                                </div>
                                <div className="">
                                    <button className="first-btn transition"
                                        style={{ fontFamily: 'Lora, serif' }}
                                    >
                                        Connect Now
                                    </button>
                                </div>
                            </div>
                       
                        </div>
                        )
                    })} 
                </Carousel>
   </>
  );
}
