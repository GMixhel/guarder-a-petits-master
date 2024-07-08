import React, { useState } from 'react'
import LocalSlide from './LocalSlide'


const Gallery = () => {
  const [src, setSrc] = useState()
  const [show, setShow] = useState(false)

  const imgShow = (e) => {
    setSrc(e.target.id)
    setShow(true)

  }

  const closeShow = () => {
      setShow(false)
  }


  return (
    <>
      <div className="ligthbox__container container">
        <img
          id="modern-style-1"
          onClick={imgShow}
          src="/local-gallery/modern-style-1.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-1"
        />
        <img
          id="modern-style-2"
          onClick={imgShow}
          src="/local-gallery/modern-style-2.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-2"
        />
        <img
          id="modern-style-3"
          onClick={imgShow}
          src="/local-gallery/modern-style-3.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-3"
        />
        <img
          id="modern-style-4"
          onClick={imgShow}
          src="/local-gallery/modern-style-4.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-4"
        />
        <img
          id="modern-style-5"
          onClick={imgShow}
          src="/local-gallery/modern-style-5.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-5"
        />
        <img
          id="modern-style-6"
          onClick={imgShow}
          src="/local-gallery/modern-style-6.jpg"
          alt=""
          className="ligthbox__img ligthbox__img-6"
        />

        <div
          onClick={closeShow}
          className={
            show ? "ligthbox__container--img move" : "ligthbox__container--img"
          }
        >
          <img
            src={"/local-gallery/" + src + ".jpg"}
            alt=""
            className={show ? "img-show img-show--scale" : "img-show"}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="78px"
            viewBox="0 -960 960 960"
            className="ligthbox__svg"
          >
            <path d="m336-307.69 144-144 144 144L652.31-336l-144-144 144-144L624-652.31l-144 144-144-144L307.69-624l144 144-144 144L336-307.69ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
      </div>

      <LocalSlide />
    </>
  );
}

export default Gallery