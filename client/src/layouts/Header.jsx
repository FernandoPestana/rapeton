import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/Header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setNavGlobal } from '../store/slices/nav.slice'
import { motion } from 'framer-motion';

const Header = () => {
 
  const dispatch = useDispatch()
  const nav = useSelector(state => state.nav)

  const toggleMenu = (e) => {
    e.stopPropagation()    
    dispatch(setNavGlobal(true))
    if (nav === true) {
      dispatch(setNavGlobal(false))      
    }
  }

  return (
    <div className={`content ${ nav ? 'isActive' : ''}`}>
      <div className="container">
        <div className='streaming'>
          <div className="streaming__content"><a target='_blank' rel='noreferrer noopener' href="https://youtube.com/@RPTNApproved"><em className='bx bxl-youtube'></em></a></div>
          <div className="streaming__content"><a target='_blank' rel='noreferrer noopener' href="https://open.spotify.com/artist/2Tdsb1uIuHJrG5SllTLyCw?si=jj-28qA2SmG9c1Ov9SRaLg"><em className='bx bxl-spotify'></em></a></div>
          <div className="streaming__content"><a target='_blank' rel='noreferrer noopener' href="https://music.apple.com/us/artist/rapeton-approved/1573309708"><em className='bx bxl-apple'></em></a></div>
        </div>
        <header className='header'>
          <div className='header__img-content'>
            <Link to='/'><img src="/public/images/logo1.png" alt="Rapeton Approved" /></Link>
          </div>
          <div onClick={toggleMenu} className="header__button-container">
            <button className='header__button'>
                <span className={`header__button-bar1 ${ nav ? 'isActive' : ''}`}></span>
                <span className={`header__button-bar2 ${ nav ? 'isActive' : ''}`}></span>
                <span className={`header__button-bar3 ${ nav ? 'isActive' : ''}`}></span>
            </button> 
          </div>
          <motion.ul className="header__nav-tier">
            <li className="header__nav-item">
              <NavLink to="/" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Home
                </motion.a>
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Acerca de Nosotros
                </motion.a>
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/artists" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Artistas
                </motion.a>
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/shop" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Tienda
                </motion.a>
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/gallery" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Galeria
                </motion.a>
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/contact" activeClassName="active">
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Contacto
                </motion.a>
              </NavLink>
            </li>
          </motion.ul>
        </header>
      </div>
    </div>
  )
}

export default Header
