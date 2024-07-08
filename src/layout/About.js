import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import imgAbout from '../images/about-img.png';
import Gallery from './Gallery';
import Team from './Team';

const About = () => {
  return (
    <>
      <Header />

      <div className="about container">
        <div className="about_data">
          <h2 className="about_title">
            La Nostra <br />
            <span className="hero_title-d about_title-d">Filosofia</span>
          </h2>

          <div className="about_ilustrattion">
            <img src={imgAbout} alt="" className="about_img" />
          </div>
        </div>
        <div className="about_details">
          <p className="about_p">
            Creemos en una educación auténtica y cercana, donde los niños no
            solo comparten un espacio, sino que también crecen y aprenden
            juntos. Nuestra filosofía se aleja de las tradicionales aulas
            estáticas y aburridas, donde los niños pasan largas horas sentados
            con poca movilidad. En lugar de eso, ofrecemos un ambiente dinámico
            y estimulante.
          </p>
          <p className="about_p">
            A diferencia de otras guarderías con habitaciones pequeñas y
            separadas, en Petits todos los niños, sin importar su edad,
            comparten el mismo espacio amplio y acogedor, promoviendo así una
            convivencia natural y enriquecedora.
          </p>
          <p className="about_p">
            Aprender a relacionarse con personas de distintas edades es
            fundamental para la vida. Este intercambio crea un ambiente de
            respeto y cariño mutuo. Nuestro equipo de profesoras está siempre
            cerca, guiando y acompañando a los niños para asegurar un entorno
            armonioso y seguro.
          </p>
        </div>
      </div>

      <section className="local container ">
        <h4 className="local_title ">
          Explora nuestras amplias y coloridas instalaciones diseñadas para
          grantizar el aprendizaje y la diversión en un entorno seguro
        </h4>
      </section>

      <Gallery />
      
      <Team />

      <Footer />
    </>
  );
}

export default About