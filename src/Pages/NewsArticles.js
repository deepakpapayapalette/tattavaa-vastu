import React from 'react'
import { newsArticleData } from '../data/LocalData'
import NewsArticleCards from '../components/UI/NewsArticleCards'

const NewsArticles = () => {
    return (
        <>
            <section className='space-top'>
                <div className="container">
                    <div className="about-title">
                        <h2 className='text-lora font-semibold '>
                            Myth Busters – News & Articles
                        </h2>
                        <p>Read insightful articles that separate myths from reality in the world of astrology and numerology.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row g-4">
                        {newsArticleData.map((item) => {
                          return (
                              
                                <div className="col-lg-3 col-md-6 col-12 " key={item.id}>
                                  <NewsArticleCards articleList={item} />
                                </div> 
                             
                          )
                      })}
                    </div>
                </div>
            </section>
      
        </>
    )
}

export default NewsArticles
