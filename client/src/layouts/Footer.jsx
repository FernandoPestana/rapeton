import React from 'react'
import './styles/Footer.scss'
import { useSelector } from 'react-redux'

const Footer = () => {

    const nav = useSelector(state => state.nav)

  return (
    <footer className={`footer ${ nav ? 'isActive' : ''}`}>
        <div className="footer__content">
            <div className="footer__info">
                <ul className="footer__networks">
                    <li className="footer__networks-content"><a target='_black' rel='noreferrer noopener' href="https://instagram.com/rapetonapproved?igshid=MzRlODBiNWFlZA=="><em className='bx bxl-instagram-alt'></em></a></li>
                    <li className="footer__networks-content"><a target='_black' rel='noreferrer noopener' href="https://youtube.com/@RPTNApproved"><em className='bx bxl-youtube'></em></a></li>
                    <li className="footer__networks-content"><a target='_black' rel='noreferrer noopener' href="https://www.tiktok.com/@rapetonapproved?_t=8d7C2gOCFEk&_r=1"><em className='bx bxl-tiktok' ></em></a></li>
                    <li className="footer__networks-content"><a target='_black' rel='noreferrer noopener' href="https://www.facebook.com/rapetonapproved?mibextid=LQQJ4d"><em className='bx bxl-facebook-circle' ></em></a></li>
                    <li className="footer__networks-content"><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/rapetonapproved?s=21"><em className='bx bxl-twitter' ></em></a></li>
                </ul>
                <div className="footer__legal-content">
                    <span className="footer__legal">Politica de Privacidad</span>
                    <span className="footer__legal">Términos y Servicios</span>
                </div>
            </div>
            <div className="footer__rights">
                <img src="public/images/logo2.png" alt="Rapeton Approved Logo" />
                <span>Rapeton Approved © 2023</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer

