import React from 'react'

export default function footer() {
  return (
    <div className='footer-wrapper'>
      <div className="footer-container">
        <div className='footer-section'>
          <h1>
            Descubre Destinos Románticos y Momentos Inolvidables!
          </h1>
          <p>
            Deja ayudarte hacer ese momento el mas magico de tu vida, desde pedirle a esa persona tan especial para ti unir sus vidas para siempre, hasta decirle adios a tu solteria o simplemente celebrar tu union con un viaje maravilloso por el mundo.  
          </p>
          <div className='footer-social'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className='footer-section'>
          <h2>
            Servicios
          </h2>
          <div className='footer-services'>
            <span>Quienes Somos</span>
            <span>Pide su mano</span>
            <span>Despedidas</span>
            <span>Grupos</span>
            <span>Luna de miel</span>
            <span>Experiencias</span>
            <span>Planes de pagos</span>
            <span>Contactanos</span>
          </div>
        </div>
        <div className='footer-section'>
          <h2>Contactanos</h2>
          <div className='footer-services'>
            <span>love@magicjourneytravel.com</span>
            <span>+52</span>
          </div>
        </div>
      </div>
    </div>
  )
}
