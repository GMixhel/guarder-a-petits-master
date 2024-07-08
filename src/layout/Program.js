import React from 'react'

const Program = () => {
  return (
    <>
      <div className="program container-hero container-movil">
        <div className="program_description">
          <div className="program_description--container">
            <h2 className="program_title">
              Nuestro <br /> día a día
            </h2>
            <p className="program_resume">
              Trabajamos con una programación diaria donde vamos poniendo
              puntos de interés ya sea a través del juego, la música, la
              pintura y la
              psicomotricidad.
            </p>
          </div>
        </div>

        <div className="program_areas">
          <div className="program_card-container">
            <div className="program_card program_card--1">
              <h5 className="program_name">Conocimiento de Sí Mismo</h5>
              <p className="program_details">
                En esta área, los niños empiezan a explorar su identidad,
                descubriendo quiénes son y desarrollando una autoestima
                saludable.
                Fomentamos la autoconfianza y la independencia,
                ayudándolos a reconocer sus propias habilidades y
                fortalezas.
              </p>
            </div>
          </div>

          <div className="program_card-container">
            <div className="program_card program_card--2">
              <h5 className="program_name program_name--2">
                Conocimiento del Entorno
              </h5>
              <p className="program_details">
                Fomentamos la curiosidad innata de los niños, animándolos a
                explorar y descubrir todo lo que  los rodea, desde su entorno
                inmediato hasta el  mundo más amplio desarrollando un amor por  el
                aprendizaje y una comprensión más profunda  del mundo en el que
                viven.
              </p>
            </div>
          </div>

          <div className="program_card-container">
            <div className="program_card program_card--3">
              <h5 className="program_name program_name--3">
                Intercomunicación y Lenguaje
              </h5>
              <p className="program_details">
                A medida que crecen, los niños mejoran sus habilidades de
                comunicación. Aquí, fomentamos un ambiente donde cada día
                se
                expresan de manera más clara y efectiva, aprendiendo a
                comunicarse con sus amigos y profesores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program