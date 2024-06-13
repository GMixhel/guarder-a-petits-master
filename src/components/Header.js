import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/petits-logo.svg'

const Header = () => {
  return (
    <heade className="header container ">
      <img src={logo} className="header__logo"/>
      <div className="header__nav">
        <ul className="nav">
          <li className="nav__item">
            <NavLink className="nav__link" to="/inicio">
              Inicio
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink nav__link to="/about">
              Nosotros
            </NavLink>
          </li>
          <li className="nav__item">
            <a href='#'>
              Blog
            </a>
          </li>
        </ul>
      </div>
    </heade>
  );
}

export default Header