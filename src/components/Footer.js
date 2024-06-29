import React from 'react'
import footerImg from '../images/message-icon.png'

const Footer = () => {
  return (
    <footer className="footer  ">
      <div className='footer_a'>
            
              <div className='footer_b'>
                  

          <div className="footer_contacto">
            <img
              src={footerImg}
              alt="imagen de mensaje con amor"
              className="footer_img"
            />
            <h2 className="footer_title">
              ¿Tienes alguna consulta o <br /> necesitas más detalles?
            </h2>
            <a href="#" className="footer_cta">
              !Contáctanos¡
            </a>
        </div>
                  

        </div>
      </div>
    </footer>
  );
}

export default Footer