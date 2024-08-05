import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import required modules
import { Pagination } from 'swiper/modules';



const LocalSlide = () => {
  return (
    <>
      <div className="slideImg_container">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-1.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-2.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-3.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-4.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-5.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="modern-style-1"
              src="/local-gallery/modern-style-6.jpg"
              alt="Imagen del local"
              className="swipwer_img"
            />
          </SwiperSlide>
        </Swiper>
        <Swiper />
      </div>
    </>
  );
};

export default LocalSlide