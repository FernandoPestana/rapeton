import React, { useEffect, useState } from 'react'
import './styles/AboutUs.scss'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const AboutUs = () => {

  const [ offsetY, setOffsetY ] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY);
  const nav = useSelector(state => state.nav)


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className={`about ${ nav ? 'isActive' : ''}`}> 
    <div className="about__container">
      <div className="about__principal">
        <p className="about__info">
          Yandel, reconocido artista de música urbana, en conjunto con El Guru, el fundador de Rapeton, han dado un paso audaz al lanzar RAPETÓN APPROVED una nueva iniciativa orientada al desarrollo de talentos emergentes. 
        </p>
      </div> 
      <div className="about__content">
        <div className="about__info-container">
            <p className="about__info1">
              Esta flamante propuesta no solo funcionará como un sello discográfico, sino que también contará con el respaldo y apoyo de la página web de Rapeton y su marca de medios. Esta alianza estratégica tiene el potencial de ofrecer a los artistas un marco de oportunidades y una plataforma sólida para su crecimiento y visibilidad en la escena musical.
            </p>
        </div> 
        <div className="about__img-container">
          <div className="about__img-content" style={{ transform: `translateY(${offsetY * -.5}px)`}}>
            <img src="/public/images/about.jpg" alt="Yandel y El Guru" />
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default AboutUs
