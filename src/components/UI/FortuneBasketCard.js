import React from 'react'
import { NavLink } from 'react-router-dom'

const FortuneBasketCard = ({item}) => {
  return (
    <>
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
               <NavLink className="  no-underline text-white"
                        to={`${item.id}`} state={item}>
                            Order Now
                    </NavLink> 
            </button>
              </div>
                {/* <div className=""> 
                   
                </div> */}
    </div> 
    </>
  )
}

export default FortuneBasketCard
