import React from 'react'

const Program = () => {
  return (
    <>
      <div className="program container-hero container-movil">
        <div className="program_description">
          <div className="program_description--container">
            <h2 className="program_title">El nostre dia a dia</h2>
            <p className="program_resume">
              Treballem amb una programació diària on ens Guiem a traves de
              punts d'interès ja sigui a través del joc, la música, la pintura i
              la psicomotricitat.
            </p>
          </div>
        </div>

        <div className="program_areas">
          <div className="program_card-container">
            <div className="program_card program_card--1">
              <h5 className="program_name">Coneixement de Si Mateix</h5>
              <p className="program_details">
                En aquesta àrea, els nens comencen a explorar la seva identitat,
                descobrint qui són desenvolupant una autoestima saludable.
                Fomentem l'autoconfiança i la independència, ajudant-los a
                reconèixer les seves pròpies habilitats i fortaleses.
              </p>
            </div>
          </div>

          <div className="program_card-container">
            <div className="program_card program_card--2">
              <h5 className="program_name program_name--2">
                Coneixement de L'entorn
              </h5>
              <p className="program_details">
                Fomentem la curiositat innata dels nens,animant-los a explorar i
                descobrir tot el que els envolta, des del seu entorn immediat
                fins al mónmés ampli desenvolupant un amor per l'aprenentatge i
                una comprensió més profunda del món en el qual viuen.
              </p>
            </div>
          </div>

          <div className="program_card-container">
            <div className="program_card program_card--3">
              <h5 className="program_name program_name--3">
               intercomunicacio i Llenguatge
              </h5>
              <p className="program_details">
                A mesura que creixen, els nens milloren les seves habilitats de
                comunicació. Aquí,fomentem un ambient on cada dia s’expressen de
                manera més clara i efectiva aprenent a comunicarse amb els seus
                amics i educadores
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program