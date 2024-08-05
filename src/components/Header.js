import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../images/petits-logo.svg'

import menuOpen from "../images/Grupo 128.svg";
import Nav from './Nav'




const Header = () => {

   
   
  
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
            ? " top header container-hero"
            : "top header container-hero-nav"
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
                Cita prèvia
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

    
      </header>

      <Nav show={show} setShow={setShow} />
    </>
  );
}

export default Header