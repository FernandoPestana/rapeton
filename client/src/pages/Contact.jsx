import React from 'react'
import './styles/Contact.scss'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const Contact = () => {

  const nav = useSelector(state => state.nav)

  const { register, handleSubmit, reset, formState: { errors }} = useForm() 
  const customSubmit = (data) => {   
    console.log(data)
    axios.post('http://localhost:5000/send', data)
      .then((response) => {
        console.log(response.data); // Muestra la respuesta del servidor si lo deseas
        reset();
      })
      .catch((error) => console.error(error));      
  }


     
  return (
    <motion.main 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className={`contact ${ nav ? 'isActive' : ''}`}>
      <h2 className="contact__title">Conéctate con nosotros</h2>
      <form onSubmit={ handleSubmit(customSubmit) } className='contact__form'>
           <div className="contact__form-container">
              <div className="contact__form-content">
                  <label className='contact__form-label'>Nombre</label>
                  <input className='contact__form-input' type="text" {...register('name')}/>
              </div>
              <div className="contact__form-content">
                  <label className='contact__form-label'>Correo</label>
                  <input className='contact__form-input' type="text" {...register('email')}/>
              </div>
              <div className="contact__form-content">
                  <label className='contact__form-label'>Comentario</label>
                  <textarea className='contact__form-input-1' type="text" {...register('message')}/>
              </div>
              <div className="contact__form-btn-container">
                    <div className="contact__form-btn">
                        <button className='button1 button1--pan'><span>Enviar</span></button>
                    </div>
              </div>
           </div>
      </form>
    </motion.main>
  )
}

export default Contact
