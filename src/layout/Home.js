import React from 'react'
import Header from '../components/Header';
import caracol from "../images/caracol-petits.svg"

const Home = () => {
  return (
    <div className="hero">
      <div className="hero_container">
        <Header />
        <div className="hero_value-proposal container">
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
            Ven y descubre Petits, donde cada niño es especial <br /> y cada momento
            cuenta. ¡Te esperamos con los <br />brazos abiertos!
          </p>

          <a href="#" className="hero_cta">¡Conócenos!</a>
        </div>
      </div>

      <div className="hero_resources">
        <a href="#" className="hero_btn-contact">
          Contactanos
        </a>
      </div>
    </div>
  );
}

export default Home