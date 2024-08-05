import{ useEffect } from "react";
import ankor from "../images/Grupo 172.svg";
import call from "../images/Grupo 171.svg";

const Ankors = () => {
  useEffect(() => {
    const up = document.querySelector(".hero_up");
    const movil = document.querySelector(".hero_call");

    console.log("trigger");

    window.onscroll = function () {
      let scroll = document.documentElement.scrollTop;
      let scrollMaxY =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrollD = scrollMaxY - 300;

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

      if (scroll > scrollD) {
        up.style.transform = "scale(0)";
        up.style.opacity = "0";
        movil.style.transform = "scale(0)";
        movil.style.opacity = "0";
      }
    };
  }, []);

  return (
    <>
     
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
        <img src={call} alt="chatea con nosotros" className="home_ankor-img" />
      </a>
    </>
  );
};

export default Ankors;
