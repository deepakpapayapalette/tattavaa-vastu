import React from 'react'

const TrainingClassesCard = ({TrainingClassesList}) => {
  return (
    <>
       <div className="p-[20px] rounded-xl overflow-hidden hover:shadow-sm second-bg">
                                <img
                                    src={TrainingClassesList.img}
                                    alt="Astrologer"
                                    className="w-full  object-cover"
                                />
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
                                    <button className="py-3 px-4 text-[18px] w-full main-bg hover:shadow-md text-white font-medium   rounded-lg transition"
                                        style={{ fontFamily: 'Lora, serif' }}
                                    >
                                        Connect Now
                                    </button>
                                </div>
                            </div>
    </>
  )
}

export default TrainingClassesCard
