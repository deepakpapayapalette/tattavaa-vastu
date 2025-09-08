import React from 'react'
import OurStory from '../components/About/OurStory'
import AboutSection2 from '../components/About/AboutSection2'
import MeetExperts from '../components/About/MeetExperts'

const About = () => {
  return (
    <>
      <section className='space-top'>
        <div className="container">
          <div className="about-title">
            <h2 className='text-lora font-semibold'>
                About Us
            </h2>
            <p>Blending ancient occult sciences with modern guidance to bring clarity, balance, and prosperity into everyday life.</p>
            </div>
        </div>
      </section>
      <OurStory/>
      <AboutSection2/>
      <MeetExperts />
      <div>
        <div className="about-title">
          <h2 className='text-lora font-semibold'>
            About Us
          </h2>
          <p>Blending ancient occult sciences with modern guidance to bring clarity, balance, and prosperity into everyday life.</p>
        </div>

      </div>
    </>
  )
}

export default About
