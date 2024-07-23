import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../images/petits-logo.svg'
import ankor from '../images/Grupo 172.svg'
import call from '../images/Grupo 171.svg'
import menuOpen from "../images/Grupo 128.svg";
import Nav from './Nav'

const Header = () => {

    useEffect(() => {
      const up = document.querySelector(".hero_up");
      const movil = document.querySelector(".hero_call");

      window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll > 300) {
          up.style.transform = "scale(1)";
          up.style.opacity = "1";
          movil.style.transform = "scale(1)";
          movil.style.opacity = "1";
        } else if (scroll < 500) {
          up.style.transform = "scale(0)";
           up.style.opacity = "0";
          movil.style.transform = "scale(0)";
          movil.style.opacity = "0";
        }
      };
    }, []);
  
const [show, setShow]= useState(false)
 
  const location = useLocation();

  const showMenu = () => {
    setShow(true)
  }
  

  return (
    <>
      <header
        className={
          location.pathname === "/inicio" || location.pathname === "/"
            ? "header container-hero"
            : "header container-hero-nav"
        }
      >
        <div className="header_nav-container">
          <img src={logo} className="header__logo" alt="logo de la guardería" />

          <div className="header__nav">
            <div className="nav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__item nav__active" : "nav__item "
                }
                to="/inicio"
              >
                Inici
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav__item nav__active" : "nav__item "
                }
                to="/about"
              >
                Nosaltres
              </NavLink>

              <a
                className="nav__item"
                href="https://forms.gle/RQmPEszVTEjNSk2B6"
                rel="noreferrer"
                target="_blank"
              >
                cita prèvia
              </a>
            </div>
          </div>

          <img
            onClick={showMenu}
            className="header_menuIcon"
            src={menuOpen}
            alt="icono de menu"
          />
        </div>

        <div
          className={
            location.pathname === "/inicio" || location.pathname === "/"
              ? "link_close"
              : "link_show"
          }
        >
          <a
            href="https://wa.me/34696791279"
            rel="noreferrer"
            target="_blank"
            className="hero_btn-call "
          >
            Contacta'ns!
          </a>
        </div>

        <a href="#" className="hero_up">
          <img
            src={ankor}
            alt="ve al inicio de la página"
            className="home_ankor-img"
          />
        </a>
        <a
          href="https://wa.me/34696791279"
          rel="noreferrer"
          target="_blank"
          className="hero_call"
        >
          <img
            src={call}
            alt="chatea con nosotros"
            className="home_ankor-img"
          />
        </a>
      </header>

      <Nav show={show} setShow={setShow} />
    </>
  );
}

export default Header