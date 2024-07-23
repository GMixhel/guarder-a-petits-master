import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from "../images/Grupo 178.svg"
import logo from "../images/petits-logo.svg"
import youtubeIco from "../images/petits-youtube.svg";
import instagramIco from "../images/petis-instagram.svg";
import facebookIco from "../images/petit-facebook.svg";


const Nav = ({ show, setShow }) => {

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
                   Inici
                 </NavLink>
               </li>
               <li className="nav-movil__item">
                 <NavLink
                   to="/about"
                   className={({ isActive }) =>
                     isActive ? "nav-movil__active" : " "
                   }
                 >
                   Nosaltres
                 </NavLink>
               </li>
               <li className="nav-movil__item">
                 <a
                   href="https://forms.gle/RQmPEszVTEjNSk2B6"
                   rel="noreferrer"
                   target="_blank"
                   className={({ isActive }) =>
                     isActive ? "nav-movil__active" : " "
                   }
                 >
                   cita prèvia
                 </a>
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
               <a
                 href="https://www.facebook.com/people/Petit-Nins/100050922142626/"
                 className="nav-social_link"
                 rel="noreferrer"
                 target="_blank"
               >
                 <img
                   className="nav-social_icon"
                   src={facebookIco}
                   alt="red nav-social facebook"
                 />
               </a>
               <a
                 href="https://www.youtube.com/channel/UCxUhX95S75dnwxva6muZ0JQ"
                 className="nav-social_link"
                 rel="noreferrer"
                 target="_blank"
               >
                 <img
                   className="nav-social_icon"
                   src={youtubeIco}
                   alt="red nav-social youtube"
                 />
               </a>
               <a
                 href="https://www.instagram.com/petitscerdanyola?igsh=MWo3eDRuYndnZDVmcA%3D%3D&utm_source=qr"
                 className="nav-social_link"
                 rel="noreferrer"
                 target="_blank"
               >
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