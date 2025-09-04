import React from 'react'
import image from '../../assets/images/astrologer.png'
import { MeetExpertsData } from '../../data/LocalData'
const MeetExperts = () => {
    return (
        <>
            <section className='space-top'>
                <div className="container">
                    <div className="row">
                        <h2 className='text-lora font-semibold'>
                            Meet the Experts
                        </h2>
                        <p className='text-[#333333]'>
                            A team of seasoned astrologers, numerologists, and vastu consultants dedicated to translating cosmic wisdom into practical guidance for your life’s journey.
                        </p>
                    </div>
                    <div className="row g-4">
                        {MeetExpertsData.map((el) => {
                            return (<>
                                <div className="col-lg-3 col-sm-6 col-12" key={el.id}>
                                    <div className='ab-meet-experts-card'>
                                        <img src={image} alt="" className='img-fluid' />
                                        <h4 className='text-lora font-semibold pt-3 mb-1' >
                                            Astrologer Name
                                        </h4>
                                        <p className='text-[14px]'>Vedic Astrologer</p>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MeetExperts
