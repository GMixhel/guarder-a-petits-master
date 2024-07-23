import React from 'react'
import footerImg from '../images/message-icon.png'


const Footer = () => {

  return (
    <footer className="footer  ">
      <div className="footer_a">
        <div className="footer_b">
          <div className="footer_contact">
            <img
              src={footerImg}
              alt="imagen de mensaje con amor"
              className="footer_img"
            />
            <h4 className="footer_title">
              Tens alguna consulta o <br /> necessites més detalls?
            </h4>
            <a href="mailto: info@petitscerdanyola.com" className="footer_cta">
              Contacta'ns!
            </a>
          </div>

          <div className="footer_background">
            <div className="footer_container-details container">
              <div className="footer_box">
                <h5 className="footer_subtitle">Detalls de contacte</h5>
                <div className="footer_items">
                  <a
                    className="footer_link"
                    href={`mailto:info@petitscerdanyola.com?subject=${encodeURIComponent(
                      "Mas información"
                    )}&body=${encodeURIComponent(
                      "Hola, queria saber más sobre:"
                    )}`}
                  >
                    info@petitscerdanyola.com
                  </a>

                  <p className="footer_p-info">T.936 314 289</p>
                  <p className="footer_p-info">M.696 791 279</p>
                </div>
              </div>

              <div className="footer_box footer_redes">
                <h5 className="footer_subtitle">Xarxes Socials</h5>

                <div className="footer_items ">
                  <a
                    href="https://www.youtube.com/channel/UCxUhX95S75dnwxva6muZ0JQ"
                    rel="noreferrer"
                    target="_blank"
                    className="footer_link"
                  >
                    youtube
                  </a>
                  <a
                    href="https://www.instagram.com/petitscerdanyola?igsh=MWo3eDRuYndnZDVmcA%3D%3D&utm_source=qr"
                    rel="noreferrer"
                    target="_blank"
                    className="footer_link"
                  >
                    instagram
                  </a>
                  <a
                    href="https://www.facebook.com/people/Petit-Nins/100050922142626/"
                    rel="noreferrer"
                    target="_blank"
                    className="footer_link"
                  >
                    facebook
                  </a>
                </div>
              </div>

              <div className="footer_box">
                <h5 className="footer_subtitle">On som</h5>
                <div className="footer_items">
                  <p className="footer_p-info">
                    L´horari d´atenció 8.30 a 18.00 h
                  </p>
                  <p className="footer_p-info">
                    C/Escoles ,12 · 080290 Cerdanyola del Vallès
                  </p>
                  <p className="footer_p-info">BCN - España</p>
                </div>
              </div>
            </div>
          </div>

          <div  className="footer_privacy">
            <div className=" flex container">
              <p className="footer_copyrite">PETITS © Copyright 2024 </p>
              <a href="#" className="footer_link-privacy">
                / Política de privadesa
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer