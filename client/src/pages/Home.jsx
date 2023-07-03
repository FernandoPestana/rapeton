import React from 'react'
import './styles/Home.scss'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../animation/animation';

const Home = () => {

  const nav = useSelector(state => state.nav)

  const { register, handleSubmit, reset, formState: { errors }} = useForm() 
  const customSubmit = (data) => { 
    const formData = new FormData();

    // Agregar los datos del formulario al objeto FormData
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('number', data.number);
    formData.append('location', data.location);
    formData.append('availability', data.availability);
    formData.append('song', data.song);
    formData.append('name2', data.name2);
    formData.append('social', data.social);

    // Agregar los archivos al objeto FormData
    if (data.images && data.images.length > 0) {
      for (let i = 0; i < data.images.length; i++) {
        formData.append('images', data.images[i]);
      }
    }  
    console.log(data)
    if (data.images.length > 0) {
      console.log('Archivos seleccionados:', data.images.length);
    }
    axios.post('http://localhost:5000/sendInfo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Establecer el encabezado correcto para la carga de archivos
      },
    })
      .then((response) => {
        console.log(response.data); // Muestra la respuesta del servidor si lo deseas
        reset();
      })
      .catch((error) => console.error(error)); 
    reset()       
  }

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const variants2 = {
    hidden: { opacity: 0, y: 40},
    visible: { opacity: 1, y: 0}
  }

  const transition = {
    delay: .3,
  }

  return (
    <motion.main 
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition} className={`home ${ nav ? 'isActive' : ''}`}>
      <div className="home__container">
        <div className="form__container">
          <form onSubmit={ handleSubmit(customSubmit) } className="form" encType="multipart/form-data">
            <div className="form__info-container">
              <div className="form__personal">
                  <h2 className='form__title'>Informacion personal</h2>
                  <div className="form__field-content">
                    <label>Nombre y Apellido</label>
                    <input className='form__field-input' type="text" {...register('name')}/>
                  </div>
                  <div className="form__field-content">
                    <label>Correo electrónico</label>
                    <input className='form__field-input' type="text" {...register('email')}/>
                  </div>
                  <div className="form__field-content">
                    <label>Número de teléfono</label>
                    <input className='form__field-input' type="number" {...register('number')}/>
                  </div>
                  <div className="form__field-content">
                    <label>País y ciudad de residencia</label>
                    <input className='form__field-input' type="text" {...register('location')}/>
                  </div>
                </div>
                
              <div className="form__artistic">
                <h2 className='form__title'>  Informacion Artística</h2>
                <div className="form__field-content">
                  <label>¿Estás actualmente firmado con otro sello discográfico?</label>
                  <input className='form__field-input' type="text" {...register('availability')}/>
                </div>
                <div className="form__field-content">
                  <label>Canción para someter</label>
                  <input className='form__field-input' type="text" {...register('song')}/>
                </div>
                <div className="form__field-content">
                  <label>Nombre del Artista/Banda</label>
                  <input className='form__field-input' type="text" {...register('name2')}/>
                </div>
                <div className="form__field-content">
                  <label>Enlaces a tus redes sociales</label>
                  <textarea type="text" {...register('social')}/>
                </div>
                <div className="form__field-content">
                  <label>Fotos de prensa o imágenes promocionales (si las tienes)</label>
                  <input className='form__field-input1' type="file" accept="image/*" multiple {...register('images')}/>
                </div>
              </div>
            </div>
            <div className="home__form-btn-container">
              <div className="home__form-btn">
                <button className='button2 button2--pan'><span>Enviar</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.main>
  )
}

export default Home
