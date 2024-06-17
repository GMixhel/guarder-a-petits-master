import React from 'react'
import flexIcon from '../images/petits-flexibilidad.svg'
import musIcon from '../images/petits-music.svg'
import comuIcon from '../images/petits-where.svg'

const Diference = () => {
  return (
    <>
      <div className="diference container">
        <div className="diference_box">
          <h4 className="diference_title">Flexibilidad Horaria </h4>
          <div className="diference_details">
            <p className="diference_p">
              ¡Queremos que te sientas cómodo y seguro en todo momento!
              Ofrecemos flexibilidad total en los horarios. Nuestro servicio de
              bonos por horas permite a las familias adaptarse fácilmente al
              centro mientras construyen una relación de confianza con nosotros.{" "}
            </p>
          </div>
          <img className='diference_icon' src={flexIcon} alt="icono que simboliza la propuesta de valor" />
        </div>
        <div className="diference_box diference_box--green">
          <h4 className="diference_title">Sesiones de Música</h4>
          <div className="diference_details">
            <p className="diference_p">
              La música es un recurso educativo poderoso que facilita el
              desarrollo del lenguaje y habilidades motoras. A través de
              canciones, ritmos y melodías, potenciamos las habilidades
              cognitivas, emocionales y sociales de los niños, promoviendo su
              creatividad y amor por el aprendizaje.
            </p>
          </div>
          <img className='diference_icon' src={musIcon} alt="icono que simboliza la propuesta de valor" />
        </div>
        <div className="diference_box">
          <h4 className="diference_title">Comunicación</h4>
          <div className="diference_details">
            <p className="diference_p">
              En Petits, mantenemos una comunicación constante con las familias
              y nuestras maestras están siempre disponibles para informar sobre
              la evolución de los pequeños. Además, las visitas están siempre
              disponibles para que puedan ver cómo crecen sus hijos en nuestro
              cuidado.
            </p>
          </div>
          <img className='diference_icon' src={comuIcon} alt="icono que simboliza la propuesta de valor" />
        </div>
      </div>
    </>
  );
}

export default Diference