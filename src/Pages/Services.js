import React from 'react'

import { servicesData } from '../data/LocalData';
import '../assets/css/services.css'
import { NavLink } from 'react-router-dom';
const Services = () => {
  return (
    <>
    <section className='space-top'>
        <div className="container">
          <div className="mb-[36px]">
            <h2 className='text-lora font-semibold'>
              Our Service
            </h2>
                <p className='mb-0'>
                    Explore our range of astrology, numerology, vastu, and occult solutions designed for harmony and growth
                </p>
                  </div> 
                  <div className="row g-4">
                      {servicesData.map((service) => {
                          return (
                            <div className="col-lg-4 col-md-2 col-12 mb-20px" key={service.id}>
                                    <NavLink  to={`${service.id}`} state={service}>
                                      <div className="card service-card ">
                                          <img
                                              src={service.img}
                                              alt={service.title}
                                              className="card-img-top rounded"
                                              style={{ objectFit: "cover", height: "250px" }}
                                          />
                                          <div  className="card-body text-center ">
                                              <h6 className="font-semibold text-white  mb-0 text-[18px] ">{service.title}</h6>
                                          </div>
                                      </div>
                              </NavLink>
                                  </div>
          )
                      })}
                      
                  </div>
                  
        </div> 
      </section>
    </>
  )
}

export default Services
