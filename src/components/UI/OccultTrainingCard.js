import React from 'react'
import FortuneBasket from '../../assets/images/FortuneBasket.png'
const OccultTrainingCard = () => {
  return (
    <>
      <div className="max-w-xs rounded-xl shadow-md bg-[#fcf9f2] overflow-hidden border border-gray-200">
      {/* Image with overlay text */}
      <div className="relative">
        <img
          src={FortuneBasket}
          alt="Numerology Class"
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm font-medium px-3 py-2 rounded-b-xl">
          Starting at just @199
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">Numerology Class</h2>
        <p className="text-sm text-gray-600">By Tutor Name</p>
        <p className="text-sm text-gray-600">Time : 02 PM to 03 PM</p>

        {/* Button Section */}
        <div className="flex justify-between items-center pt-2">
          <span></span>
          <button className="text-black font-medium flex items-center gap-1 hover:text-yellow-600">
            Enroll Now →
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default OccultTrainingCard
