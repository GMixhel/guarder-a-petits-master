import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";



import slide_image_1 from '../images/swiper_gallery/SwiperGallery_1.jpg'
import slide_image_2 from '../images/swiper_gallery/SwiperGallery_2.jpg'
import slide_image_3 from '../images/swiper_gallery/SwiperGallery_3.jpg'
import slide_image_4 from '../images/swiper_gallery/SwiperGallery_4.jpg'
import slide_image_5 from '../images/swiper_gallery/SwiperGallery_5.jpg'
import slide_image_6 from '../images/swiper_gallery/SwiperGallery_6.jpg'
import slide_image_7 from '../images/swiper_gallery/SwiperGallery_7.jpg'
import slide_image_8 from '../images/swiper_gallery/SwiperGallery_8.jpg'
import slide_image_9 from '../images/swiper_gallery/SwiperGallery_9.jpg'
import faceIcon from '../images/rayo-de-risa.png'
import bebeIcon from '../images/bebe.png'

const Slide = () => {
  return (
      <div className="slider">
        <img
          src={faceIcon}
          alt="emoticono de carita sonriente"
          className="slide_emoji slide_emoji--carita"
        />
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          spaceBetween={20}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
          </SwiperSlide>
        </Swiper>

        <img
          src={bebeIcon}
          alt="un emoticono de un bebe gateando"
          className="slide_emoji slide_emoji--bebe"
        />
      </div>
  );
}

export default Slide