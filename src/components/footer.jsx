import React from 'react'
import Traslatecopy from './traslatecopy'

export default function footer() {
  return (
    <div className='footer-wrapper'>
      <div className="footer-container">
        <div className='footer-section'>
          <Traslatecopy copyId="TITULO_FOOTER" tipo="h1"/>
          <Traslatecopy copyId="FOOTER_DESCRIPCION" tipo="span"/>
          <div className='footer-social'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className='footer-section'>
          <Traslatecopy copyId="FOOTER_TITULO_SERVICIO" tipo="h2"/>
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
          <Traslatecopy copyId="FOOTER_TITULO_CONTACTANOS" tipo="h2"/>
          <div className='footer-services'>
            <span>love@magicjourneytravel.com</span>
            <span>+1 702 285 23 81</span>
          </div>
        </div>
      </div>
    </div>
  )
}
