import React, { useEffect, useState } from 'react'
import './styles/Gallery.scss'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const Gallery = () => {

  const nav = useSelector(state => state.nav)
  const [time, setTime] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className={`gallery ${ nav ? 'isActive' : ''}`}>
      <div className="gallery__container">
        <div className="gallery__title-container">
          <span className="gallery__title">Nuestros Videos Musicales</span>
        </div>
        {
          !time ? (
            <div className="loader">
            {/* Aquí puedes agregar tu animación de carga */}
            <h2 className='gallery__title-loader'>Cargando videos...</h2>
          </div>
          ) : (
            <div className='gallery__videos'>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/GE_T5PxoGbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/KKOkAXMXo_Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/imwU2EMJpXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/zIEcNIDTPeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/9ybT4y94s6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/6SD3YpxM08U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/xtoaCPsHVL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/_Mw_4HtO3no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/k3E_0OXH8gU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/68KMbpy6RWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
              <div className="gallery__video"><iframe width="560" height="315" src="https://www.youtube.com/embed/fsgAVh3auds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading='lazy'></iframe></div>
            </div>
          )
        }
          
        
      </div>
    </motion.main>
  )
}

export default Gallery
