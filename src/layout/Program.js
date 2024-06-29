import React from 'react'

const Program = () => {
  return (
    <>
      <div className="program container">
        <div className="program_description">
          <div className="program_description--container">
            <h2 className="program_title">
              Nuestro <br /> día a día
            </h2>
            <p className="program_resume">
              Trabajamos con una programación diaria <br /> donde vamos poniendo
              puntos de interés ya <br /> sea a través del juego, la música, la
              pintura y la <br />
              psicomotricidad.
            </p>
          </div>
        </div>

        <div className="program_areas">
          <div className="program_card-container">
            <div className="program_card program_card--1">
              <h5 className="program_name">Conocimiento de Sí Mismo</h5>
              <p className="program_details">
                En esta área, los niños empiezan a explorar <br /> su identidad,
                descubriendo quiénes son y <br /> desarrollando una autoestima
                saludable. <br />
                Fomentamos la autoconfianza y la <br /> independencia,
                ayudándolos a reconocer <br /> sus propias habilidades y
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
                Fomentamos la curiosidad innata de los niños, <br />animándolos a
                explorar y descubrir todo lo que <br /> los rodea, desde su entorno
                inmediato hasta el <br /> mundo más amplio desarrollando un amor por <br /> el
                aprendizaje y una comprensión más profunda <br /> del mundo en el que
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
                A medida que crecen, los niños mejoran sus <br /> habilidades de
                comunicación. Aquí, <br /> fomentamos un ambiente donde cada día
                se <br />
                expresan de manera más clara y efectiva, <br /> aprendiendo a
                comunicarse con sus amigos <br /> y profesores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program