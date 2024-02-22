import React from 'react'
import weddingBackground from '../assets/wedding-background.jpg'
import Traslatecopy from './traslatecopy'

export default function homeheader() {
  return (
    <div className='Home-slider-wrapper'>
      <div className="Home-slider-background"  style={{backgroundImage:`URL(${weddingBackground})`}}></div>
      <div className="Home-slider-container">
        <div className="Home-slider-text">
          <Traslatecopy copyId="TITULO_HEADER" tipo="span" clase="Home-slider-title"/>
          <Traslatecopy copyId="DESCRIPCION_HEADER" tipo="span" clase="Home-slider-descripcion"/>
        </div>
      </div>
    </div>
  )
}
