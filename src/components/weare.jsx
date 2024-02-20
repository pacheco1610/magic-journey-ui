import React from 'react'
import imagen1 from '../assets/pedir-mano.jpg'
import imagen2 from '../assets/soltera.jpg'

export default function Weare() {
  return (
    <section className="offer">
      <div className="weare-container">
        <div className="offer-contentFormTitle">
          <span>Creando Experiencias de Amor en Cada Viaje</span>
          <h3>Conoce mas sobre <strong>nosotros</strong></h3>
        </div>
        <div className="weare-wrapper">
          <div className='section-weare'>
            <div className='section-weareText'>
              <i class="fa-light fa-head-side-heart"></i>
              <div>
                <h3>
                  ¿Quienes <strong>somos</strong>?
                </h3>
                <span>
                  Somos una empresa especializada en celebraciones románticas, con más de 20 años en la industria turística. Somos expertos en crear momentos inolvidables.
                </span>
              </div>
            </div>
            <div className='section-weareText'>
              <i className="fa-solid fa-file-heart"></i>
              <div>
                <h3>
                  En que te podemos <strong>Ayudar</strong>
                </h3>
                <span>
                  Déjanos ayudarte a hacer ese momento el más mágico de tu vida, desde pedirle a esa persona tan especial para ti que una sus vidas para siempre, hasta decirle adiós a tu soltería o simplemente celebrar tu unión con un viaje maravilloso por el mundo
                </span>
              </div>
            </div>
          </div>
          <div className='section-weare'>
            <div className="containerImages">
              <img src={ imagen1 } alt="" />
              <img src={ imagen2 } alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
