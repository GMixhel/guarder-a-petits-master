import {  useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.querySelector("html");
   
      html.classList.add("scroll");
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  

    setTimeout(() => {
      html.classList.remove("scroll");
    }, 850);
  }, [pathname]);

  return null;
}

export default ScrollToTop