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
            La Nostre <br />
            <span className="hero_title-d about_title-d">Filosofia</span>
          </h2>

          <div className="about_ilustrattion">
            <img
              src={imgAbout}
              alt="Imagen de niños divirtiendose"
              className="about_img"
            />
          </div>
        </div>
        <div className="about_details">
          <p className="about_p">
            Creiem en una educació autèntica i pròxima, on els nens no sols
            comparteixen un espai, sinó que també creixen i aprenen junts. La
            nostra filosofia s'allunya de les tradicionals aules estàtiques i
            avorrides, on els nens passen llargues hores asseguts amb poca
            mobilitat. En lloc d'això, oferim un ambient dinàmic i estimulant,
            si més no el que toca en aquest etapa del creixement.
          </p>
          <p className="about_p">
            A diferència d'altres centres amb aules petites i separades per
            edats, a Petits tots els nens, sense importar la seva edat,
            comparteixen el mateix espai ampli i acollidor, promovent així una
            convivència natural i enriquidora.
          </p>
          <p className="about_p">
            Aprendre a relacionar-se amb persones de diferents edats és
            fonamental per a la vida. Aquest intercanvi crea un ambient de
            respecte i afecte mutu. El nostre equip d´educadores està sempre a
            prop, guiant i acompanyant als nens per a assegurar un entorn
            harmoniós i segur.
          </p>
        </div>
      </div>

      <section className="local container ">
        <h4 className="local_title ">
          Explora les nostres àmplies i acolorides instal·lacions dissenyades
          per a garantir l'aprenentatge i la diversió en un entorn segur
        </h4>
      </section>

      <Gallery />

      <Team />

      <Footer />
    </>
  );
}

export default About