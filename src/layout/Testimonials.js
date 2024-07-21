import React from 'react'
import fiveStart from '../images/five-start.svg'
import TestimonialsSlide from './TestimonialsSlide';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials_container ">
        <div className="testimonials_heading">
          <h3 className="testimonials_title">
            Què diuen les famílies <br /> sobre nosaltres?
          </h3>
          <p className="testimonials_description">
            Breu recopilació d'alguns dels testimonis dels nostres clients
          </p>
          <img
            src={fiveStart}
            alt="puntuación de 5 estrellas"
            className="testimonials_img"
          />
        </div>

        <div className="testimonials_boxes-container">
          <div className="testimonials_box testimonials_box-grid6">
            <div className="testimonials_comas">"</div>
            <p className="testimonials_testimonials five-line">
              Els meus petits encantats de l'espai tant especial I bonic que té
              el centre!!!!!. La seva directora té molta cura de la atenció que
              reben els petits i sobretot d'informar als pares de com estan els
              nens durant el día, sobretot els primers dies , encara que sempre
              que necessites saber dels nens, et dóna resposta, un tracte molt
              proper tan d' ella ( Directora ) com les monitores o mestres que
              hi treballen al centre. Ofereix moltes opcions d'horaris, també
              l'opció de deicmxar al petits per hores ( Bonos) I també fa
              casalets d'estiu, a l'hivern, per setmana Santa......moltes
              opcions per poder portar als petis al centre ,mentre els pares
              tenim que treballar, abans de que de festes properes i que l'Olesa
              escoles fan festa Per mi un 10!!!!! Tornarem aviat!!!!!!
            </p>
            <div className="testimonials_person">
              <div className="testimonials_avatar">L</div>

              <p className="testimonials_user">Lidia Martinez</p>
            </div>
          </div>

          <div className="testimonials_box testimonials_box-grid5">
            <div className="testimonials_comas">"</div>
            <p className="testimonials_testimonials">
              Fuimos por recomendación de una amiga y nos encantó. El cuidado
              hacia nuestro pequeño genial, verlo quedarse feliz nos dio aún más
              confianza, el buen trato, las instalaciones super bien, han hecho
              que siempre os recordemos con muchísimo cariño. Muchas gracias por
              todo!
            </p>

            <div className="testimonials_person">
              <div className="testimonials_avatar">Y</div>

              <p className="testimonials_user">yessica rodriguez</p>
            </div>
          </div>

          <div className="testimonials_colum3">
            <div className="testimonials_box testimonials_box-grid4">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Ambiente súper familiar, y las educadoras son un encanto, se
                nota el amor que tienen por nuestros niños,no podemos estar más
                contentos con nuestra experiencia. Nuestra pequeña se queda
                súper feliz cada día y sobre todo aprendido muchísimo.
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">P</div>
                <p className="testimonials_user">Pilar Campos</p>
              </div>
            </div>

            <div className="testimonials_box testimonials_box-grid3">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Para mí y mi Pequeño Ha Sido Una Etapa Maravillosa! Gracias por
                todo Gran Proyecto Gran Espacio Mucha Ilusión Súper
                Profesionales y los más importante ....los peques felices muy
                felices! Nos quedaríamos en Petit Nins SIEMPRE ❣️
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">K</div>
                <p className="testimonials_user">Kristina Torres</p>
              </div>
            </div>
          </div>

          <div className="testimonials_colum4">
            <div className="testimonials_box testimonials_box-grid1">
              <div className="testimonials_comas">"</div>
              <p className="testimonials_testimonials">
                Contento con el trato, la atención, la dedicación y la
                profesionalidad recibida de todo el equipo de petits nins. La
                aplicación que tienen hace que te sientas más cerca de la
                educación que ofrecen a diario, ahí te comunican todo el
                seguimiento, avances y las actividades que hacen. Las educadoras
                son adorables con los peques y el equipo directivo muy cercano.
                Los peques se quedan contentos y salen felices y yo como padre
                más. Muy recomendado!!!.
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">J</div>
                <p className="testimonials_user">JAY Mendez</p>
              </div>
            </div>

            <div className="testimonials_box testimonials_box-grid2">
              <h5 className="testimonials_comas">"</h5>
              <p className="testimonials_testimonials">
                La meva filla no podría haver estat en un lloc millor. S'adapten
                al nadó i les necessitats de les families. Tracte molt familiar,
                joc lliure amb molts espais i llibertat de moviment. Atenció de
                10 per part de la directora i les mestres. Tenen opción de
                casalets i de bonus per hores. Repetiriem sense dubtar-ho
              </p>

              <div className="testimonials_person">
                <div className="testimonials_avatar">M</div>
                <p className="testimonials_user">mireia font chicon</p>
              </div>
            </div>
          </div>
        </div>

        <TestimonialsSlide />

        <div className="testimonials_btn">
          <a
            href="https://www.google.com/search?q=Petits%20Cerdanyola%20Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDcyNDU2tzQ3NDY1MzY0NjQxMN7AyPiKUSogtSSzpFjBObUoJTGvMj8nUSEotTj18MbE4kWseCQB_NZ2k1UAAAA&rldimm=17215379713563131403&tbm=lcl&client=firefox-b-d&hl=es&sa=X&ved=0CCAQ9fQKKABqFwoTCMiX6pTQlocDFQAAAAAdAAAAABAG&biw=1920&bih=947&dpr=1#lkt=LocalPoiReviews"
            rel="noreferrer"
            target="_blank"
            className="testimonials_cta"
          >
            Veure més!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonials