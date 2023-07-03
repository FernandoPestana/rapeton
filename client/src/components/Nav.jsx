import React, { useEffect, useRef } from 'react'
import './styles/Nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setNavGlobal } from '../store/slices/nav.slice'

const Nav = () => {

    const nav = useSelector(state => state.nav)
    const dispatch = useDispatch();
    const navRef = useRef(null);

    const handleClickOutside = (e) => {
        if(!navRef.current.contains(e.target)  && navRef.current)
        {
          dispatch(setNavGlobal(false))         
        }        
      }

      useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
      }, [])

      const toggleMenu = () => {
        dispatch(setNavGlobal(false))
      }

      const handleCloseNav = () => {
        dispatch(setNavGlobal(false))
      }

  return (
    <nav ref={navRef} className={`header__navbar ${ nav ? 'isActive' : ''}`}>
          <ul className={`header__navbar-tier`}>
            <div onClick={toggleMenu} className="header__navbar-btn-container">
              <button className='header__navbar-btn'>
                  <span className={`header__navbar-btn-bar1 ${ nav ? 'isActive' : ''}`}></span>
                  <span className={`header__navbar-btn-bar2 ${ nav ? 'isActive' : ''}`}></span>
                  <span className={`header__navbar-btn-bar3 ${ nav ? 'isActive' : ''}`}></span>
              </button> 
            </div>
            <div className="header__navbar-item-container">
              <li className="header__navbar-item"><NavLink to='/'><span onClick={handleCloseNav} className='header__navbar-item-span1'>Home</span></NavLink></li>
              <li className="header__navbar-item"><NavLink to='/about'><span onClick={handleCloseNav} className='header__navbar-item-span2'>Acerca de Nosotros</span></NavLink></li>
              <li className="header__navbar-item"><NavLink to='/artists'><span onClick={handleCloseNav} className='header__navbar-item-span3'>Artistas</span></NavLink></li>
              <li className="header__navbar-item"><NavLink to='/shop'><span onClick={handleCloseNav} className='header__navbar-item-span4'>Tienda</span></NavLink></li>
              <li className="header__navbar-item"><NavLink to='/gallery'><span onClick={handleCloseNav} className='header__navbar-item-span5'>Galeria</span></NavLink></li>
              <li className="header__navbar-item"><NavLink to='/contact'><span onClick={handleCloseNav} className='header__navbar-item-span6'>Contacto</span></NavLink></li>
            </div>  
          </ul>
    </nav>
  )
}

export default Nav
