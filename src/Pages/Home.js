import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import VastuGuides from '../components/Home/VastuGuides'
import "../assets/css/home.css"
import GuideMaster from '../components/Home/GuideMaster'
import OccultClinic from '../components/Home/OccultClinic'
import FortuneBasket from '../components/Home/FortuneBasket'
import OccultTraining from '../components/Home/OccultTraining'
import ResidentialVastu from '../components/Home/ResidentialVastu'

const Home = () => {
  return (
    <> 
     <HeroBanner />
     <VastuGuides />
     <GuideMaster />
     <OccultClinic />
     <FortuneBasket />
     <OccultTraining />
     <ResidentialVastu />


    </>
  )
}

export default Home
