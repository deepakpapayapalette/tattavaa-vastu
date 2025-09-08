import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const TrainingClassesCard = ({TrainingClassesList}) => {
  return (
    <>
      <div className=" rounded-xl hover:border-gray-400 bg-[#faf6e6] p-[20px]">
                <div className="relative">
                  <img
                    src={TrainingClassesList.img}
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
                  <div className='flex justify-between items-end'>


                    <div className='space-y-1'>
                      <div className="text-sm text-gray-800">By Tutor Name</div>
                      <div className="text-sm text-gray-800">Time : 02 PM to 03 PM</div>
                    </div>

                    {/* Button Section */}
                   <button className=" flex items-end"  >
                                                <NavLink className="no-underline text-gray-900 hover:text-[#cda202] hover:underline" to="/shop">
                                                    Enroll Now<FaArrowRightLong className='ms-1 d-inline' />
                                                </NavLink>
                                            </button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default TrainingClassesCard
