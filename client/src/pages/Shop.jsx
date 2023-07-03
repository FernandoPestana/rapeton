import React from 'react'
import './styles/Shop.scss'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const Shop = () => {
  return (
    <motion.main 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className='shop'>
      <div className="shop__container">
        <div className="shop__title-container">
          <h2>¡Pronto estaremos abriendo nuestra tienda en línea! ¡Mantente atento!</h2>
        </div>
      </div>
    </motion.main>
  )
}

export default Shop
