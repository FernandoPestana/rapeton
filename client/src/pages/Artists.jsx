import React from 'react'
import './styles/Artists.scss'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const Artists = () => {
  return (
    <motion.main 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className="artists">
      <div className="artists__container">
        <div className="artists__title-container">
          <h2>Descubre el próximo gran talento musical. Próximamente, te presentaremos a los artistas más prometedores y apasionados. ¡Prepárate para ser inspirado por su música y voz única!</h2>
        </div>
      </div>
    </motion.main>
  )
}

export default Artists
