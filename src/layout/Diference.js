import React, { useRef } from 'react'
import flexIcon from '../images/petits-flexibilidad.svg'
import musIcon from '../images/petits-music.svg'
import comuIcon from '../images/petits-where.svg'
import video from "../images/video-petit.mp4";
import videoIcon1 from "../images/amar.png";
import videoIcon2 from "../images/amor.png";
import { motion, useInView } from 'framer-motion';
import { scale, scale2, translate } from '../components/Anime';


const Diference = () => {

  const diferContainer = useRef(null);
  const isInView2 = useInView(diferContainer, {once:true}); 
  const momentContainer = useRef(null);
  const isInView3 = useInView(momentContainer, {once:true}); 
   
  return (
    <>
      <h3 className="diference_section">
        Descobreix què <br /> ens fa únics
      </h3>
      <div ref={diferContainer} className="diference container">
        <motion.div
          variants={translate}
          initial="initial"
          animate={isInView2 ? "open" : "closed"}
          transition={{
            delay: 0.2,

            ease: [0.43, 0.13, 0.25, 0.96],
          }}
          className="diference_box"
        >
          <div className="diference_details">
            <h5 className="diference_title">Flexibilitat Horària</h5>

            <p className="diference_p">
              Volem que et sentis còmode i segur en tot moment! Oferim
              ﬂexibilitat total en els horaris. El nostre servei de bons per
              hores permet a les famílies adaptar-se fàcilment al centre mentre
              construeixen una relació de conﬁança amb nosaltre
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              className="diference_icon"
              src={flexIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </motion.div>

        <motion.div
          variants={translate}
          initial="initial"
          animate={isInView2 ? "open" : "closed"}
          transition={{
            delay: 0.23,
            ease: [0.43, 0.13, 0.25, 0.96],
          }}
          className="diference_box diference_box--green"
        >
          <div className="diference_details">
            <h5 className="diference_title">Sessions de Música</h5>

            <p className="diference_p">
              La música és un recurs educatiu poderós que facilita el
              desenvolupament del llenguatge i habilitats motores. A través de
              cançons, ritmes i melodies, potenciem la comunicació gràcies a les
              habilitats cognitives, emocionals I socials dels infants,
              promovent la seva creativitat i amor per l’aprenentatge.
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              className="diference_icon"
              src={musIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </motion.div>
        <motion.div
          variants={translate}
          initial="initial"
          animate={isInView2 ? "open" : "closed"}
          transition={{
            delay: 0.25,
            ease: [0.43, 0.13, 0.25, 0.96],
          }}
          className="diference_box"
        >
          <div className="diference_details">
            <h5 className="diference_title">Comunicació</h5>

            <p className="diference_p">
              A “Petits”, mantenim una comunicació constant amb les famílies i
              les nostres educadores estan sempre disponibles per a informar
              sobre l'evolució dels petits. A més, les visites estan sempre
              disponibles perquè puguin veure com creixen els seus ﬁlls mentre
              tenim cura d’ells.
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              ref={momentContainer}
              className="diference_icon"
              src={comuIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={scale2}
        initial="initial"
        animate={isInView3 ? "open" : "closed"}
        transition={{
          ease: [0.43, 0.13, 0.25, 0.96],
        }}
        className="moments container"
      >
        <div className="moments_container container">
          <div className="moments_video">
            <img
              className="video_icon video_icon-a"
              src={videoIcon1}
              alt="carita cariñosa"
            />
            <div className="video__container">
              <div className="video_decoration">--</div>
              <video
                src={video}
                type="video/mp4"
                loop
                autoPlay
                muted 
                playsInline
                preload="auto"
                className="video"
              ></video>
            </div>
            <img
              className="video_icon video_icon-b"
              src={videoIcon2}
              alt="corazon con mensaje"
            />
          </div>

          <div className="moments_details">
            <h3 className="moments_title">
              Moments de <span className="moments_span">Tendresa</span>!
            </h3>
            <p className="moments_p">
              A “Petits”, ens encanta mantenir a les famílies connectades amb el
              dia a dia dels seus petits.Gràcies a la nostra moderna aplicació
              Tyra podem compartir fotos i vídeos de les activitats diàries,
              perquè els pares puguin veure com de divertit i educatiu és cada
              moment a “Petits”. Així, sempre estaràs al corrent de les
              aventures i aprenentatges dels teus ﬁlls/es! No et perdis res
              mentre treballes!
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Diference