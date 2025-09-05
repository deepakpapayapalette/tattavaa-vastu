import React from 'react'
import { OccultClinicData } from '../data/LocalData'
import TrainingClassesCard from '../components/UI/TrainingClassesCard'

const TrainingClasses = () => {
  return (
    <>
      <section className='space-top'>
        <div className="container">
          <div className="about-title">
            <h2 className='text-lora font-semibold '>
              Training Classes
            </h2>
                      <p>
                          Unlock the ancient wisdom of astrology, numerology, and occult sciences through guided programs designed for both beginners and advanced learners. Enrol today to deepen your knowledge and practice.
                </p>
            </div>
        </div> 
          </section>
              <section>
              <div className="container">
                  <div className="row g-4">
                      {OccultClinicData.map((item) => {
                          return (
                              <>
                                <div className="col-lg-3 col-md-6 col-12 " key={item.id}>
                                  <TrainingClassesCard TrainingClassesList={item} />
                                </div> 
                              </>
                          )
                      })}
                  </div>
              </div>
          </section>
    </>
  )
}

export default TrainingClasses
