import React from 'react'
import NewsArticleSlider from '../Sliders/NewsArticleSlider'
import { FaArrowRightLong } from "react-icons/fa6";
import { newsArticleData } from '../../data/LocalData';
import 'react-multi-carousel/lib/styles.css';
const NewsArticles = () => {
  return (
    <>
        <section className='space-top'> 
              <div className="container">
                      <div className="row">
                          <div className="col-lg-9 col-12 mb-3 mb-lg-0">
                              <h2 className="fw-semibold ">Myth Busters – News & Articles</h2>
                              <p className="light-color">
                                 Read insightful articles that separate myths from reality in the world of astrology and numerology.
                              </p>
                          </div>
                          <div className='col-lg-3 col-12 d-flex justify-content-lg-end'>
                              <button className="btn mb-3 mb-lg-0 flex items-center" >
                               View All <FaArrowRightLong className='ms-2 d-inline'  />
                              </button>
                          </div>
                      </div> 
   
      
                <div className="row">  
                      <NewsArticleSlider newsArticleData={newsArticleData}/>
                </div> 
              </div>
          </section>
    </>
  )
}

export default NewsArticles
