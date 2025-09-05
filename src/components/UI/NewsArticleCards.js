import React from 'react'
import { NavLink } from 'react-router-dom'

const NewsArticleCards = ({ articleList }) => {

  return (
    <>
       <div className="p-[20px] rounded-xl shadow-md second-bg">
                        <img
                            src={articleList.img}
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
                            <NavLink className=" text-[18px] hover:text-[#cda202] transition-shadow  text-decoration-none d-inline"
                                to={`${articleList.id}`} state={articleList}>
                                Read More 
                            </NavLink> 
                        </div>
                    </div>
    </>
  )
}

export default NewsArticleCards
