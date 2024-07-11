import React from 'react'
import flexIcon from '../images/petits-flexibilidad.svg'
import musIcon from '../images/petits-music.svg'
import comuIcon from '../images/petits-where.svg'
import video from "../images/video-petit.mp4";
import videoIcon1 from "../images/amar.png";
import videoIcon2 from "../images/amor.png";

const Diference = () => {
  return (
    <>
      <h3 className="diference_section">
        Descobreix que <br /> ens fa unics
      </h3>
      <div className="diference container">
        <div className="diference_box">
          <h5 className="diference_title">Flexibilitat Horària</h5>
          <div className="diference_details">
            <p className="diference_p">
              Volem que et sentis còmode i segur en tot moment! Oferim
              flexibilitat total en els horaris. El nostre servei de bons per
              hores permet a les famílies adaptar-se fàcilment al centre mentre
              construeixen una relació de confiança amb nosaltres.
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              className="diference_icon"
              src={flexIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </div>
        <div className="diference_box diference_box--green">
          <h5 className="diference_title">Sesions de Música</h5>
          <div className="diference_details">
            <p className="diference_p">
              La música és un recurs educatiu poderós que facilita el
              desenvolupament del llenguatge i habilitats motores. A través de
              cançons, ritmes i melodies, potenciem la comunicació gràcies a les
              habilitats cognitives, emocionals I socials dels nens, promovent
              la seva creativitat i amor per l’aprenentatge.
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              className="diference_icon"
              src={musIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </div>
        <div className="diference_box">
          <h5 className="diference_title">Comunicació</h5>
          <div className="diference_details">
            <p className="diference_p">
              A Petits, mantenim una comunicació constant amb les famílies i les
              nostres educadores estan sempre disponibles per a informar sobre
              l'evolució dels petits. A més, les visites estan sempre
              disponibles perquè puguin veure com creixen els seus fills mentre
              tenim cura dells.
            </p>
          </div>

          <div className="diference_icon-container">
            <img
              className="diference_icon"
              src={comuIcon}
              alt="icono que simboliza la propuesta de valor"
            />
          </div>
        </div>
      </div>

      <div className="moments">
        <div className="moments_container container">
          <div className="moments_video">
            <img
              className="video_icon video_icon-a"
              src={videoIcon1}
              alt="carita cariñosa"
            />
            <div className="video__container">
              <div className="video_decoration">hola</div>
              <video
                src={video}
                loop
                type="video/mp4"
                autoPlay
                muted
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
              A Petits, ens encanta mantenir a les famílies conectades amb el
              dia a dia dels seus petits.Gràcies a la nostra moderna aplicació
              Tyra podem compartir fotos i vídeos de les activitats diàries,
              perquè els pares puguin veure com de divertit i educatiu és cada
              moment a Petits. Així, sempre estaràs al corrent de les aventures
              i aprenentatges dels teus fills!Np et perdis res mentre treballes¡
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Diference