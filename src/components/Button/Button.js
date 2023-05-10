import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Button = () => {
  const apretasteUnBoton = () => {
    toast.success("Felicidades, apretaste un boton!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const apretasteOtroBoton = () => {
    toast.success("Felicitaciónes, apretaste otro boton!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-5 gap-3'>
      <button className='btn btn-danger' onClick={apretasteUnBoton}>
        Soy un Boton
      </button>
      <button className='btn btn-outline-primary' onClick={apretasteOtroBoton}>
        Soy otro Boton
      </button>
      <ToastContainer/>
    </div>
  )
}

export default Button
