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
import child5 from "../images/petits-5.svg"
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
  //  useEffect(() => {
  //    const lenis = new Lenis()
  //    function raf(time){
  //      lenis.raf(time)
  //      requestAnimationFrame(raf)
  //    }

  //     requestAnimationFrame(raf);
  //  }, [])

   
  return (
    <>
      <div className="hero">
        <div className="hero_container">
          <Header />

          <div className="hero_value-proposal container-hero container-movil">
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
              Vine i descobreix Petits, on cada nen és especial <br />i cada
              moment compta. T'esperem amb els <br />
              braços oberts!
            </p>

            <p className="hero_description--movil">
              Vine i descobreix Petits, on cada nen és especial i cada moment
              compta. T'esperem amb els braços oberts!
            </p>

            <img src={heroImg} className="hero_img-cont" />

            <a href="#heroKnow" className="hero_cta">
              coneix-nos!
            </a>
          </div>
        </div>

        <div className="hero_resources">
          <a
            href="https://wa.me/34696791279"
            rel="noreferrer"
            target="_blank"
            className="hero_btn-call"
          >
            Contacta'ns!
          </a>
        </div>
      </div>

      <div className="social">
        <div className="social_container">
          <a
            href="https://www.facebook.com/people/Petit-Nins/100050922142626/"
            className="social_link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="social_icon"
              src={facebookIco}
              alt="red social facebook"
            />
            <p className="social_name">facebook</p>
          </a>

          <a
            href="https://www.youtube.com/channel/UCxUhX95S75dnwxva6muZ0JQ"
            className="social_link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="social_icon"
              src={youtubeIco}
              alt="red social youtube"
            />
            <p className="social_name">youtube</p>
          </a>

          <a
            href="https://www.instagram.com/petitnins/"
            className="social_link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="social_icon"
              src={instagramIco}
              alt="red social instagram"
            />
            <p className="social_name">instagram</p>
          </a>
        </div>
      </div>

      <div id="heroKnow" className="values container-movil">
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
            Cobrim totes les àrees clau <br />
            d'aprenentatge i desenvolupament
            <br />
            dels nostres alumnes.
          </h4>

          <p className="values_resume">
            A Petits, entenem que cada nen té el seu propi ritme i estil
            d'aprenentatge. Respectem aquestes diferències i els ensenyem a
            descobrir les seves pròpies eines per a superar cada desafiament.
            Creiem que, Al igual que un cargolet, el logo que ens representa,
            cada nen arribarà a la seva meta amb confiança i perseverança,
            utilitzant els seus propis recursos per a avançar, pas a pas. Aquí
            an Petits, cada alumno triomfa a la seva manera!No és millor el que
            arriba abans, sino el que arriba quan está preparat.
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
          <img
            src={child5}
            alt="imagen de un bebé"
            className="value_child values_child--5"
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