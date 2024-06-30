import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from "../images/Grupo 178.svg"
import logo from "../images/petits-logo.svg"
import youtubeIco from "../images/petits-youtube.svg";
import instagramIco from "../images/petis-instagram.svg";
import facebookIco from "../images/petit-facebook.svg";


const Nav = ({ show, setShow }) => {

  // const close = () => {
  //   setShow(true)
  // }
  
  console.log(show);



  return (
    <>
      <div
        onClick={() => setShow(false)}
        className={
          show
            ? "nav-movil__overlay--show nav-movil__overlay"
            : "nav-movil__overlay"
        }
      >
        <div className="nav-movil container-hero">
          <div className="nav-movil__title">
            <img src={logo} className="nav-movil_logo" />

            <div onClick={() => setShow(false)} className="nav-movil__close">
              <img
                src={closeIcon}
                alt="icono de cerrar menu"
                className="nav-movil_closeMenu"
              />
            </div>
          </div>

          <div className="nav-movil__nav-movil">
            <ul className="nav-movil__links">
              <li className="nav-movil__item">
                <NavLink
                  to="/inicio"
                  className={({ isActive }) =>
                    isActive ? "nav-movil__active" : " "
                  }
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-movil__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-movil__active" : " "
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-movil__item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "nav-movil__active" : " "
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-movil__contact">
            <ul className="nav-movil__socialMedia">
              <li className="nav-movil__media">
                <a
                  href="mailto:gmra9329@gmail.com"
                  className="nav-movil__mediaLink nav-movil__mediaLink--margin"
                >
                  info@petitscerdanyola.com
                </a>
              </li>
              <li className="nav-movil__media">
                <p className="nav-movil__mediaLink nav-movil__mediaLink--margin">
                  T.936 314 289 / M.696 791 279
                </p>
              </li>
              <li className="nav-movil__media">
                <p className="nav-movil__mediaLink nav-movil__mediaLink--margin">
                  C/Escoles ,12 · Cerdanyola 
                </p>
              </li>
              <li className="nav-movil__media">
                <p className="nav-movil__mediaLink nav-movil__mediaLink--margin">
                 080290 BCN
                </p>
              </li>
            </ul>
          </div>

          <div className="nav-social">
            <div className="nav-social_container">
              <a href="#" className="nav-social_link">
                <img
                  className="nav-social_icon"
                  src={facebookIco}
                  alt="red nav-social facebook"
                />
              </a>
              <a href="#" className="nav-social_link">
                <img
                  className="nav-social_icon"
                  src={youtubeIco}
                  alt="red nav-social youtube"
                />
              </a>
              <a href="#" className="nav-social_link">
                <img
                  className="nav-social_icon"
                  src={instagramIco}
                  alt="red nav-social instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav