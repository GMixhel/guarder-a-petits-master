import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-creative";



const LocalSlide = () => {
  return (
    <>
      <div className="slideImg_container">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-125%", 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper6"
        >
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