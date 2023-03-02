import React, { useEffect } from 'react'
import './Eryn.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import img1 from '../../imessre/grid_gal1.jpg';
import img2 from '../../imessre/grid_gal2-900x601.jpg';
import img3 from '../../imessre/grid_gal3.jpg';
import img4 from '../../imessre/grid_gal4-900x506.jpg';
import img5 from '../../imessre/grid_gal5.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Eryug = () => {
    useEffect(() =>{
    Aos.init({duration:2000});
},[])
  return (
    <>
    
    <Swiper
   
   
   breakpoints={{
    0: {
        slidesPerView:1,
        spaceBetween: 10
    },
    480: {
        slidesPerView:3,
        spaceBetween: 20
    },
    768: {
        slidesPerView:4,
        spaceBetween: 30
    }
   }}
    freeMode={true}
    grabCursor={true}
    pagination={{
      clickable: true,
      
    }}
 
    modules={[FreeMode, Pagination]}
    className="mySwiper bvdg"
   >
    <div className="ruiw" data-aos="fade-up">
            <SwiperSlide className="posh"  >
                <img src={img1} alt="" />
                <div className="bordrt">
                    <div className="bfg">
                        <p>Latte</p>
                    </div>
                </div>
            </SwiperSlide>
             <SwiperSlide className="posh">
                <img className="" src={img2} alt="" />
                <div className="bordrt">
                    <div className="bfg">
                        <p>Cappuccino</p>
                    </div>
                </div>
            </SwiperSlide>
               <SwiperSlide className="posh">
                <img src={img3} alt="" />
                <div className="bordrt">
                    <div className="bfg">
                        <p>Iced Coffee</p>
                    </div>
                </div>
            </SwiperSlide>
               <SwiperSlide className="posh" >
                <img src={img4} alt="" />
                <div className="bordrt">
                    <div className="bfg">
                        <p>Espresso</p>
                    </div>
                </div>
            </SwiperSlide>
               <SwiperSlide className="posh" >
                <img src={img5} alt="" />
                <div className="bordrt">
                    <div className="bfg">
                        <p>Black Coffee</p>
                    </div>
                </div>
         </SwiperSlide>
    </div>


  </Swiper>
  </>
  )
}

export default Eryug