import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";

import slide_image_1 from '../images/swiper_gallery/SwiperGallery_1.webp'
import slide_image_2 from '../images/swiper_gallery/SwiperGallery_2.webp'
import slide_image_3 from '../images/swiper_gallery/SwiperGallery_3.webp'
import slide_image_4 from '../images/swiper_gallery/SwiperGallery_4.webp'
import slide_image_5 from '../images/swiper_gallery/SwiperGallery_5.webp'
import slide_image_6 from '../images/swiper_gallery/SwiperGallery_6.webp'
import slide_image_7 from '../images/swiper_gallery/SwiperGallery_7.webp'
import slide_image_8 from '../images/swiper_gallery/SwiperGallery_8.webp'
import slide_image_9 from '../images/swiper_gallery/SwiperGallery_9.webp'
import slide_image_10 from '../images/swiper_gallery/SwiperGallery_10.webp'
import slide_image_11 from '../images/swiper_gallery/SwiperGallery_11.webp'
import slide_image_12 from '../images/swiper_gallery/SwiperGallery_12.webp'
import slide_image_13 from '../images/swiper_gallery/SwiperGallery_13.webp'
import slide_image_14 from '../images/swiper_gallery/SwiperGallery_14.webp'
import slide_image_15 from '../images/swiper_gallery/SwiperGallery_15.webp'
import faceIcon from '../images/rayo-de-risa.png'
import bebeIcon from '../images/bebe.png'
import { useEffect } from 'react';
import { useState } from 'react';

const Slide = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Define el manejador para cambios en la media query
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Escucha los cambios en la media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Verifica el estado inicial de la media query
    handleMediaQueryChange(mediaQuery);

    // Limpia el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  console.log(isSmallScreen)

  
  return (
    <div className="slider">
      <img
        src={faceIcon}
        alt="emoticono de carita sonriente"
        className="slide_emoji slide_emoji--carita"
      />
      <h4 className="slide_title container">
        Imatges que val més que mil paraules
      </h4>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={isSmallScreen ? "1.2" : "3"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={20}
        className="swiper_container-petits"
      >
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_1}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_2}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_3}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_4}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_5}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_6}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_7}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_8}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_9}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_10}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_11}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_12}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_13}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide_img-petis"
            src={slide_image_15}
            alt="slide_image"
          />
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