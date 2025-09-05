import React from 'react'
import FortuneBasketCard from '../components/UI/FortuneBasketCard'
import { FortuneBasketData } from '../data/LocalData'

const Shop = () => {
  return (
    <>
      <section className='space-top'>
        <div className="container">
          <div className="about-title">
            <h2 className='text-lora font-semibold '>
               Your Fortune Basket
            </h2>
                <p>Welcome to the Astro Store — your one-stop destination for tools, remedies, and sacred products that align with your cosmic journey.</p>
            </div>
        </div> 
          </section>
          <section>
              <div className="container">
                  <div className="row g-4">
                      {FortuneBasketData.map((item) => {
                          return (
                              <>
                                <div className="col-lg-3 col-md-6 col-12 " key={item.id}>
                                  <FortuneBasketCard item={item} />
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

export default Shop
