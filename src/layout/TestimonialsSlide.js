import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const TestimonialsSlide = () => {
  return (
    <div>
      <div className="testimonials_slider">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testimonials_box">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials five-line">
                Els meus petits encantats de l'espai tant especial I bonic que
                té el centre!!!!!. La seva directora té molta cura de la atenció
                que reben els petits i sobretot d'informar als pares de com
                estan els nens durant el día, sobretot els primers dies , encara
                que sempre que necessites saber dels nens, et dóna resposta, un
                tracte molt proper tan d' ella ( Directora ) com les monitores o
                mestres que hi treballen al centre. Ofereix moltes opcions
                d'horaris, també l'opció de deicmxar al petits per hores (
                Bonos) I també fa casalets d'estiu, a l'hivern, per setmana
                Santa......moltes opcions per poder portar als petis al centre
                ,mentre els pares tenim que treballar, abans de que de festes
                properes i que l'Olesa escoles fan festa Per mi un 10!!!!!
                Tornarem aviat!!!!!!
              </p>
              <div className="testimonials_person">
                <div className="testimonials_avatar">L</div>

                <p className="testimonials_user">Lidia Martinez</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonials_box ">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Fuimos por recomendación de una amiga y nos encantó. El cuidado
                hacia nuestro pequeño genial, verlo quedarse feliz nos dio aún
                más confianza, el buen trato, las instalaciones super bien, han
                hecho que siempre os recordemos con muchísimo cariño. Muchas
                gracias por todo!
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">Y</div>

                <p className="testimonials_user">yessica rodriguez</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonials_box ">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Ambiente súper familiar, y las educadoras son un encanto, se
                nota el amor que tienen por nuestros niños,no podemos estar más
                contentos con nuestra experiencia. Nuestra pequeña se queda
                súper feliz cada día y sobre todo aprendido muchísimo.
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">P</div>
                <p className="testimonials_user">Pilar Campos</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonials_box ">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Para mí y mi Pequeño Ha Sido Una Etapa Maravillosa! Gracias por
                todo Gran Proyecto Gran Espacio Mucha Ilusión Súper
                Profesionales y los más importante ....los peques felices muy
                felices! Nos quedaríamos en Petit Nins SIEMPRE ❣️
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">K</div>
                <p className="testimonials_user">Kristina Torres</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonials_box ">
              <h5 className="testimonials_comas">"</h5>
              <p className="testimonials_testimonials">
                La meva filla no podría haver estat en un lloc millor. S'adapten
                al nadó i les necessitats de les families. Tracte molt familiar,
                joc lliure amb molts espais i llibertat de moviment. Atenció de
                10 per part de la directora i les mestres. Tenen opción de
                casalets i de bonus per hores. Repetiriem sense dubtar-ho
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">M</div>
                <p className="testimonials_user">mireia font chicon</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSlide