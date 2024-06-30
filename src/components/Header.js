import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../images/petits-logo.svg'
import ankor from '../images/Grupo 172.svg'
import call from '../images/Grupo 171.svg'

const Header = () => {

    useEffect(() => {
      const up = document.querySelector(".home_ankor");
      const movil = document.querySelector(".home_call");

      window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 300) {
          up.style.transform = "scale(1)";
          up.style.opacity = "1";
          movil.style.transform = "scale(1)";
          movil.style.opacity = "1";
        } else if (scroll < 300) {
          up.style.transform = "scale(0)";
          movil.style.transform = "scale(0)";
        }
      };
    }, []);

 
  const location = useLocation();


  console.log(location.pathname);
  

  return (
    <header
      className={
        location.pathname === "/inicio" || "/"
          ? "header container-hero"
          : "container-hero-nav"
      }
    >
      <div className="header_nav-container">
        <img src={logo} className="header__logo" />
        <div className="header__nav">
          <ul className="nav">
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link nav__active" : "nav__link "
                }
                to="/inicio"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__link nav__active" : "nav__link "
                }
                to="/about"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav__item">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={location.pathname === "/inicio" || "/" ? "link_close" : "link_show"}
      >
        <a href="#" className="hero_btn-contact ">
          Contactanos
        </a>
      </div>

      <a href="#" className="home_ankor">
        <img src={ankor} alt="flecha que indica hacia arriba" className="home_ankor-img" />
      </a>
      <a href="#" className="home_call">
        <img src={call} alt="imagen de un telefono" className="home_ankor-img" />
      </a>
    </header>
  );
}

export default Header