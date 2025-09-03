
import '../../assets/css/testimonial.css'
import { testimonialsData } from '../../data/LocalData';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tBg from '../../assets/images/bg.png'

const Testimonials = () => {

    
       
     const settings = {
    dots: false,                
    infinite: true,            // loop mode
    speed: 1000,               // transition speed (1s)
    slidesToShow: 1,           // show one slide
    slidesToScroll: 1,         // scroll one at a time
    fade: false,                
    autoplay: false,           
    autoplaySpeed: 4000,       
    pauseOnHover: false,       
    arrows: true ,
    responsive: [
    {
        breakpoint: 768, 
        settings: {
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
    },
    {
        breakpoint: 420, 
        settings: {
        //   slidesToShow: 3,
        //   slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
    }
]
  };

  return (
    <>
          <section className="space-top testimonial-section">
              <div className="container">
                <div className="pb-[36px]">
                <h2 className="font-semibold text-center text-lora mb-0">
                    Client Feedback
                </h2>
                </div>

                  <div className="row">
                      <div className="col-md-8 col-12 mx-auto">
                          <Slider {...settings}>
                              {testimonialsData.map((el) => {
                                  return (
                                      <>
                                          <div className='flex justify-center min-h-[262px]' key={el.id}>
                                              {/* <div className="tv-card-bg" style={{backgroundImage:`url(${tBg})`}}> */} 
                                                  <div className="tv-bg" aria-hidden="true" /> 
                                                  <article className="tv-card2" role="figure">
                                                      <p className="tv-quote">{el.text}</p>
                                                      <div className="tv-client">
                                                          <div className="tv-name text-lora">{el.client}</div>
                                                          <div className="tv-loc">{el.location}</div>
                                                      </div>
                                                  </article>
                                              </div>
                                          {/* </div> */}
                                      </>
                                  )
                              })}
                          </Slider>
                      </div>
                  </div> 
              </div>
          </section>
    </>
  )
}

export default Testimonials
