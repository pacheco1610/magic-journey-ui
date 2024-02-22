import React from 'react'
import Traslatecopy from './traslatecopy'

export default function pagos() {
  return (
    <section className="offer">
      <div className="weare-container">
        <div className="offer-contentFormTitle">
          <Traslatecopy copyId="TITULO_OPCIONES_PAGO" tipo="span" clase=""/>
          <h3>Opciones <strong>flexibles</strong> de Pago</h3>
          <Traslatecopy copyId="DESCRIPCION_OPCIONES_PAGO" tipo="p" clase=""/>
        </div>
        <div className="pagos-section">
          <div className='pagos-opcion'>
            <div>
              <i className="fa-solid fa-percent"></i>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM1_TITULO" tipo="h1" clase=""/>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM1_DESCRIPCION" tipo="p" clase=""/>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-light fa-calendar-heart"></i>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM2_TITULO" tipo="h1" clase=""/>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM1_DESCRIPCION" tipo="p" clase=""/>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-regular fa-heart-circle-check"></i>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM3_TITULO" tipo="h1" clase=""/>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM3_DESCRIPCION" tipo="p" clase=""/>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-light fa-credit-card"></i>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM3_TITULO" tipo="h1" clase=""/>
              <Traslatecopy copyId="OPCIONES_PAGO_ITEM3_DESCRIPCION" tipo="p" clase=""/>
            </div>
          </div>
          <Traslatecopy copyId="OPCIONES_PAGO_TERMINOS" tipo="span" clase="pagos-condiciones"/>
        </div>
      </div>
    </section>
  )
}
