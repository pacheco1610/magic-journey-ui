import React from 'react'
import Traslatecopy from './traslatecopy'

export default function newslatter() {
  return (
    <div className='newslatter-wrapper'>
      <Traslatecopy copyId="TITULO_NEWSLATTER" tipo="h1"/>
      <div className='newslatter-container-input'>
        <input type="text" placeholder='ingresa tu email'/>
        <span>Suscribirme</span>
      </div>
    </div>
  )
}
