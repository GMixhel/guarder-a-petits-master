import Header from '../components/Header';
import caracol from "../images/caracol-petits.svg"
import frutaIcon from "../images/fruta.svg"
import ubicacion from "../images/ubic.svg"
import festivos from "../images/festivo.svg"
import cediap from "../images/cediap.svg"
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
import { motion, useInView } from "framer-motion";
import PageTranstitions from '../components/PageTranstitions';
import { opacity, scale } from '../components/Anime';
import { useRef } from 'react';

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

  const container = useRef(null);
  const servContainer = useRef(null);
  const isInView = useInView(container) 
  const isInView1 = useInView(servContainer) 



   
  return (
    <>
      <PageTranstitions>
        <div className="hero">
          <div className="hero_container">
            <Header />
            <div
              ref={container}
              className="hero_value-proposal container-hero container-movil"
            >
              <motion.div
                variants={opacity}
                initial="initial"
                transition={{
                  duration: 0.4,
                  ease: [0.43, 0.13, 0.25, 0.96],
                }}
                animate={isInView ? "open" : "closed"}
                className="hero_title-box"
              >
                <h2 className="hero_title">
                  Especialistes <br />
                  en <span className="hero_title-d">primera</span>
                </h2>

                <div className="hero_container-t">
                  <h2 className="hero_title">infància!</h2>
                  <img
                    className="hero_icon-caracol"
                    src={caracol}
                    alt="icono de un caracol"
                  />
                </div>
              </motion.div>

              <motion.p
                variants={opacity}
                initial="initial"
                animate={isInView ? "open" : "closed"}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                  ease: [0.43, 0.13, 0.25, 0.96],
                }}
                className="hero_description"
              >
                Vine i descobreix "Petits", on cada nen/a és especial <br />i
                cada moment compta. T'esperem amb els <br />
                braços oberts!
              </motion.p>

              <p className="hero_description--movil">
                Vine i descobreix Petits, on cada nen és especial i cada moment
                compta. T'esperem amb els braços oberts!
              </p>

              <img src={heroImg} className="hero_img-cont" />

              <a
                href="https://forms.gle/RQmPEszVTEjNSk2B6"
                rel="noreferrer"
                target="_blank"
                className="hero_cta"
              >
                Coneix-nos!
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
          <div className="social_container container  ">
            <div className="social_box">
              <img
                className="social_icon"
                src={frutaIcon}
                alt="frutas en un bol"
              />
              <p className="social_description">
                Brindem <span className="bold">una dieta balancejada</span> per
                als nadons, garantint que cada mos contribueixi al seu
                creixement saludable
              </p>
            </div>

            <div className="social_box">
              <img
                className="social_icon"
                src={festivos}
                alt="frutas en un bol"
              />
              <p className="social_description">
                <span className="bold">
                  Treballem durant Nadal, juliol i Setmana Santa
                </span>
                . Mentre altres descansen, nosaltres som aquí per cuidar i
                entretenir els teus fills..
              </p>
            </div>

            <div className="social_box">
              <img
                className="social_icon"
                src={cediap}
                alt="frutas en un bol"
              />
              <p className="social_description">
                <span className="bold">
                  Col·laborem amb CDIAP DAPSI Cerdanyola {""}
                </span>
                garantir atenció primerenca a nens amb trastorns del
                desenvolupament o en risc de patir-los.
              </p>
            </div>

            <div className="social_box">
              <img
                className="social_icon social_icon-grey"
                src={ubicacion}
                alt="frutas en un bol"
              />
              <p className="social_description">
                Arribar a la nostra guarderia és senzill i ràpid, estem ubicats
                en una de les
                <span className="bold">
                  {" "}
                  zones més accessibles de Cerdanyola
                </span>
              </p>
            </div>
          </div>
        </div>

        <div id="heroKnow" className="values container-movil">
          <div className="values_boxes values_boxes-1">
            <motion.img
              variants={scale}
              initial="initial"
              animate={isInView1 ? "open" : "closed"}
              transition={{
                duration: 0.4,
                delay: 0.08,
                ease: [0.43, 0.13, 0.25, 0.96],
              }}
              src={child4}
              alt="imagen de un bebé"
              className="value_child values_child--4"
            />
            <motion.img
              variants={scale}
              initial="initial"
              animate={isInView1 ? "open" : "closed"}
              transition={{
                duration: 0.4,
                ease: [0.43, 0.13, 0.25, 0.96],
              }}
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
              del nostre alumnat.
            </h4>

            <p className="values_resume">
              A “Petits”, entenem que cada nen/a té el seu propi ritme i estil
              d'aprenentatge. Respectem aquestes diferències i els ensenyem a
              descobrir les seves pròpies eines per a superar cada desaﬁament.
              Creiem que, igual que un cargolet- el logo que ens representa-,
              cada nen/a arribarà a la seva meta amb conﬁança i perseverança,
              utilitzant els seus propis recursos per a avançar, pas a pas. Aquí
              a “Petits”, cada alumnat triomfa a la seva manera! No és millor el
              que arriba abans, sinó el que arriba quan està preparat.
            </p>
          </div>

          <div className="values_boxes values_boxes-3">
            <motion.img
              variants={scale}
              initial="initial"
              animate={isInView1 ? "open" : "closed"}
              transition={{
                duration: 0.4,
                delay: 0.12,
                ease: [0.43, 0.13, 0.25, 0.96],
              }}
              src={child1}
              alt="imagen de un bebé"
              className="value_child values_child--1"
            />
            <motion.img
              variants={scale}
              initial="initial"
              animate={isInView1 ? "open" : "closed"}
              transition={{
                duration: 0.4,
                delay: 0.15,
                ease: [0.43, 0.13, 0.25, 0.96],
              }}
              src={child2}
              alt="imagen de un bebé"
              className="value_child values_child--2"
            />
            <motion.img
              variants={scale}
              initial="initial"
              animate={isInView1 ? "open" : "closed"}
              transition={{
                duration: 0.4,
                delay: 0.15,
                ease: [0.43, 0.13, 0.25, 0.96],
              }}
              src={child5}
              alt="imagen de un bebé"
              className="value_child values_child--5"
            />
          </div>
        </div>

        <img
          ref={servContainer}
          src={marcaAgua}
          alt="imagen de un caracol dibujado"
          className="waterBrand"
        />

        <Diference />

        <Program />

        <Slide />

        <Testimonials />
      </PageTranstitions>

      <Footer />
    </>
  );
}

export default Home