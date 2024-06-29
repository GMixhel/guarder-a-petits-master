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
        Descubre que nos <br /> hace únicos
      </h3>
      <div className="diference container">
        <div className="diference_box">
          <h5 className="diference_title">Flexibilidad Horaria </h5>
          <div className="diference_details">
            <p className="diference_p">
              ¡Queremos que te sientas cómodo y seguro en todo momento!
              Ofrecemos flexibilidad total en los horarios. Nuestro servicio de
              bonos por horas permite a las familias adaptarse fácilmente al
              centro mientras construyen una relación de confianza con nosotros.
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
          <h5 className="diference_title">Sesiones de Música</h5>
          <div className="diference_details">
            <p className="diference_p">
              La música es un recurso educativo poderoso que facilita el
              desarrollo del lenguaje y habilidades motoras. A través de
              canciones, ritmos y melodías, potenciamos las habilidades
              cognitivas, emocionales y sociales de los niños, promoviendo su
              creatividad y amor por el aprendizaje.
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
          <h5 className="diference_title">Comunicación</h5>
          <div className="diference_details">
            <p className="diference_p">
              En Petits, mantenemos una comunicación constante con las familias
              y nuestras maestras están siempre disponibles para informar sobre
              la evolución de los pequeños. Además, las visitas están siempre
              disponibles para que puedan ver cómo crecen sus hijos en nuestro
              cuidado.
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
            <img className='video_icon video_icon-a' src={videoIcon1} alt="carita cariñosa" />
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
            <img className='video_icon video_icon-b'  src={videoIcon2} alt="corazon con mensaje" />
          </div>

          <div className="moments_details">
            <h3 className="moments_title">
              ¡Momentos de <span className="moments_span">Ternura</span>!
            </h3>
            <p className="moments_p">
              En Petits, nos encanta mantener a las familias conectadas con el
              día a día de sus pequeños. Gracias a nuestra moderna aplicación
              Tyra, podemos compartir fotos y videos de las actividades diarias,
              para que los padres puedan ver lo divertido y educativo que es
              cada momento en Petits. ¡Así, siempre estarás al tanto de las
              aventuras y aprendizajes de tus hijos!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Diference