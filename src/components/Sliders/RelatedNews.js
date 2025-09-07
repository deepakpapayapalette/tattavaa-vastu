import Carousel from 'react-multi-carousel';

export default function RelatedNews({ relatedNewData }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
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
                removeArrowOnDeviceType={["tablet", "mobile"]}
                arrows={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={4000}
                transitionDuration={3000} 
                //additionalTransfrom={-20}
                //  pauseOnHover={false} 
                //  centerMode={false}
                containerClass=" carousel-container"
                itemClass="pe-3 px-1"
                showDots={false}
                infinite={true}
                renderDotsOutside={true}
                partialVisible={true}
                className='ps-0 pb-2'

            >
                {relatedNewData.map((item) => {
                    return (
                        <>
                            <div key={item.id}>
                                <div className="p-[20px] rounded-xl shadow-md second-bg">
                                    <img
                                        src={item.img}
                                        alt="Astrologer"
                                        className="w-full  object-cover"
                                    />
                                    <div className="py-3 px-1">
                                        <div className="flex  items-start">
                                            <h5 className=" lg:text-[18px] text-gray-900 font-semibold mb-2" >
                                                Life Path Number 18: Meaning, Numerology & Personality
                                            </h5> 
                                        </div>
                                        <div className='flex items-cetner '>
                                            <div className='text-[14px] me-3 text-gray-600'>Astrologer Lakshita</div>
                                            <div className='text-gray-600 text-[14px] content-center '>June 30 2003</div>
                                        </div> 
                                    </div>
                                    <div className="">
                                        <button className=" text-[18px] hover:text-[#cda202] transition-shadow"

                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })} 
            </Carousel>
        </>
    )
}