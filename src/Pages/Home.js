import React from 'react'
import HeroBanner from '../components/Home/HeroBanner'
import VastuGuides from '../components/Home/VastuGuides'
import "../assets/css/home.css"
import GuideMaster from '../components/Home/GuideMaster'
import OccultClinic from '../components/Home/OccultClinic'
import FortuneBasket from '../components/Home/FortuneBasket'
import OccultTraining from '../components/Home/OccultTraining'
import ResidentialVastu from '../components/Home/ResidentialVastu'
import CommercialVastu from '../components/Home/CommercialVastu'
import VastuAstrology from '../components/Home/VastuAstrology'
import NumerologyServices from '../components/Home/NumerologyServices'
import CrystalHealing from '../components/Home/CrystalHealing'
import RudrakshaHealing from '../components/Home/RudrakshaHealing'
import WristWatchAnalysis from '../components/Home/WristWatchAnalysis'
import NewsArticles from '../components/Home/NewsArticles'
// import Testimonials from '../components/Home/Testimonials'
import Testimonials2 from '../components/Home/Testimonials2'

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
     <CommercialVastu/>
     <VastuAstrology/>
     <NumerologyServices/>
     <CrystalHealing/>
     <RudrakshaHealing/>
     <WristWatchAnalysis/>
     <NewsArticles/>
     {/* <Testimonials/> */}
     <Testimonials2/>
    </>
  )
}

export default Home
