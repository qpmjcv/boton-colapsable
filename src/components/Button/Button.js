import React from 'react'


const Button = () => {
  function apretasteUnBoton () {
    alert('Felicidades, apretas un boton')
  }

  function apretasteOtroBoton () {
    alert('Felicitaciónes, apretas otro boton')
  }

  return (
    <div className='d-flex justify-content-center align-items-center mt-5 gap-3'>
      <button className='btn btn-danger' onClick={apretasteUnBoton}>
        Soy un Boton
      </button>
      <button className='btn btn-outline-primary' onClick={apretasteOtroBoton}>
        Soy otro Boton
      </button>
    </div>
  )
}

export default Button