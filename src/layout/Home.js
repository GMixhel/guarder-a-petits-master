import React, { useEffect } from 'react'
import Header from '../components/Header';
import caracol from "../images/caracol-petits.svg"
import youtubeIco from "../images/petits-youtube.svg"
import instagramIco from "../images/petis-instagram.svg"
import facebookIco from "../images/petit-facebook.svg"
import child1 from "../images/petits-1.svg"
import child2 from "../images/petits-2.svg"
import child3 from "../images/petits-3.svg"
import child4 from "../images/petits-4.svg"
import marcaAgua from "../images/caracol-marca.svg"
import Program from './Program';
import Slide from './Slide';
import Diference from './Diference';
import Testimonials from './Testimonials';
import Footer from '../components/Footer';
import Lenis from 'lenis';
import heroImg from '../images/swiper_gallery/SwiperGallery_9.jpg';

const Home = () => {
  // //---smooth scroll with Lenis
   useEffect(() => {
     const lenis = new Lenis()
     function raf(time){
       lenis.raf(time)
       requestAnimationFrame(raf)
     }

      requestAnimationFrame(raf);
   }, [])

   
  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <Header />

          <div className="hero_value-proposal container-hero">
            <div className="hero_title-box">
              <h2 className="hero_title">
                Especialistes <br />
                en <span className="hero_title-d">primera</span>
              </h2>

              <div className="hero_container-t">
                <h2 className="hero_title">infancia!</h2>
                <img
                  className="hero_icon-caracol"
                  src={caracol}
                  alt="icono de un caracol"
                />
              </div>
            </div>

            <p className="hero_description">
              Ven y descubre Petits, donde cada niño es especial <br /> y cada
              momento cuenta. ¡Te esperamos con los <br />
              brazos abiertos!
            </p>

            <p className="hero_description--movil">
              Ven y descubre Petits, donde cada niño es especial y cada momento
              cuenta. ¡Te esperamos con los brazos abiertos!
            </p>


            <img src={heroImg} className='hero_img-cont'/>
            
            

            <a href="#" className="hero_cta">
              ¡Conócenos!
            </a>
          </div>
        </div>

        <div className="hero_resources">
          <a href="#" className="hero_btn-contact">
            Contactanos
          </a>
        </div>
      </div>

      <div className="social">
        <div className="social_container">
          <a href="#" className="social_link">
            <img
              className="social_icon"
              src={facebookIco}
              alt="red social facebook"
            />
            <p className="social_name">facebook</p>
          </a>
          <a href="#" className="social_link">
            <img
              className="social_icon"
              src={youtubeIco}
              alt="red social youtube"
            />
            <p className="social_name">youtube</p>
          </a>
          <a href="#" className="social_link">
            <img
              className="social_icon"
              src={instagramIco}
              alt="red social instagram"
            />
            <p className="social_name">instagram</p>
          </a>
        </div>
      </div>

      <div className="values">
        <div className="values_boxes values_boxes-1">
          <img
            src={child4}
            alt="imagen de un bebé"
            className="value_child values_child--4"
          />
          <img
            src={child3}
            alt="imagen de un bebé"
            className="value_child values_child--3"
          />
        </div>

        <div className="values_boxes values_boxes-2">
          <h4 className="values_details">
            Cubrimos todas las áreas <br /> claves de aprendizaje y <br />
            desarrollo para los bebés
          </h4>

          <p className="values_resume">
            En Petits, entendemos que cada niño tiene su propio <br /> ritmo y
            estilo de aprendizaje. Respetamos estas <br /> diferencias y les
            enseñamos a descubrir sus propias <br /> herramientas para superar
            cada desafíos. Creemos que, <br /> como el caracol, cada niño
            llegará a su meta con <br />
            confianza y perseverancia, utilizando sus propios recursos <br />
            para avanzar, paso a paso. ¡Aquí en Petits, cada pequeño <br />
            triunfa a su manera!
          </p>
        </div>

        <div className="values_boxes values_boxes-3">
          <img
            src={child1}
            alt="imagen de un bebé"
            className="value_child values_child--1"
          />
          <img
            src={child2}
            alt="imagen de un bebé"
            className="value_child values_child--2"
          />
        </div>
      </div>

      <img
        src={marcaAgua}
        alt="imagen de un caracol dibujado"
        className="waterBrand"
      />

      <Program />

      <Slide />

      <Testimonials />

      <Diference />

      <Footer />
    </>
  );
}

export default Home