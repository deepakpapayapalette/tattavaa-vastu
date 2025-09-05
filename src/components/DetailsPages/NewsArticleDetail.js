import React from 'react'
import { useLocation } from 'react-router-dom';
import blog1 from '../../assets/images/blog-detail.png'

const NewsArticleDetail = () => {
    const articleState = useLocation();

   
  return (
      <>
        <section className='space-top'>
            <div className="container"> 
                <h2 className='text-lora font-semibold mb-4'>
                  {articleState.state.title}
                </h2> 
                  <div className='w-100 rounded-md'> 
                  <img src={blog1} alt="" className='img-fluid' />
                  </div>
                  <div className="detail-content pt-4"> 
                      <p>{ articleState.state.desc}</p>
                      <p>{ articleState.state.desc}</p>
                      <p>{ articleState.state.desc}</p>
                      <p>{ articleState.state.desc}</p>
                  </div>
            </div>
        </section> 
    </>
  )
}

export default NewsArticleDetail
