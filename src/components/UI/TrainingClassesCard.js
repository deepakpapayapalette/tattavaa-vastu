import React from 'react'

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
}

export default TrainingClassesCard
