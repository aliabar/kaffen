import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import './conmn.css'
import 'aos/dist/aos.css'
import { FreeMode, Pagination } from "swiper";


import axios from "axios";


const Conevs = () => {
const [Contener , SetContener ]= useState([])
useEffect(() =>{
    axios.get("dets/fgthhg.json")
    .then((res) => {
        SetContener(res.data.colrtu)
    })
},[])
const zxaw =Contener.map((colrtu) =>{
    return(
        <SwiperSlide key={colrtu.id}> 
        <div className="pak">
            <div className="tops">
                <img src={colrtu.img} alt="" />
                <div className="start"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
     </div>
              
            </div>
            <div className="buopk">
                <p>{colrtu.prg} </p>
                <h6>{colrtu.tit}</h6>
                <span>{colrtu.spv} </span>
            </div>
        </div>
    </SwiperSlide>
    )
})
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
      
            <div className="compne">
                <div className="prgrif">
                    <p data-aos="fade-up">CUSTOMER FEEDBACK</p>
                    <h3 data-aos="fade-up">What Our Clients Say</h3>

                    <Swiper
                
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView:1,
                                spaceBetween: 10
                            },
                            480: {
                                slidesPerView:2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView:2,
                                spaceBetween: 30
                            },
                            1020: {
                                slidesPerView:3,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView:4,
                                spaceBetween: 30
                            }
                           }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper colrtu"
                    >
                    {zxaw}
                    </Swiper>
                </div>
            </div>

    )
}

export default Conevs