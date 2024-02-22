import React from 'react'
import imagen1 from '../assets/pedir-mano.jpg'
import imagen2 from '../assets/soltera.jpg'
import Traslatecopy from './traslatecopy'

export default function Weare() {
  return (
    <section className="offer">
      <div className="weare-container">
        <div className="offer-contentFormTitle">
          <Traslatecopy copyId="TITULO_NOSOTROS" tipo="span" />
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
                <Traslatecopy copyId="PARRAFO_NOSOTROS_DESCRIPCION_1" tipo="span" />
              </div>
            </div>
            <div className='section-weareText'>
              <i className="fa-solid fa-file-heart"></i>
              <div>
                <h3>
                  En que te podemos <strong>Ayudar</strong>
                </h3>
                <Traslatecopy copyId="PARRAFO_NOSOTROS_DESCRIPCION_2" tipo="span" />
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
