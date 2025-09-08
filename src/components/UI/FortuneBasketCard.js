import React from 'react'
import { NavLink } from 'react-router-dom'

const FortuneBasketCard = ({ item }) => {
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
            <div className='text-[16px] me-3'>{item.price} </div>
            <div className='text-gray-500 text-[12px] content-center line-through'>  ₹12,200</div>
          </div>


        </div>
        <div >
          <NavLink className="  no-underline text-white first-btn"
            to={`/shop/${item.id}`} state={item}>
            Order Now
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default FortuneBasketCard
