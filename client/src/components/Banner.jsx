import React, { useState } from 'react'
import './styles/Banner.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setBannerGlobal } from '../store/slices/banner.slice'

const Banner = () => {

  const banner = useSelector(state => state.banner)
  const dispatch = useDispatch()

  const toggleBanner = () => {
    dispatch(setBannerGlobal(false))
  }

  return (
    <div className={`banner__content ${ banner ? '' : 'isActive'}`}>
      <div className={`banner `}>
              <div className="banner__info">
                  <div className="banner__info-title-container">
                      <div className="banner__info-title">
                          <span>¡MUESTRA TU TALENTO!</span>
                      </div>
                  </div>
                  <div className="banner__info-btn-container">
                      <div onClick={toggleBanner} className="banner__info-btn">
                          <button className='button button--pan'><span>Aplica ahora</span></button>
                      </div>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Banner
