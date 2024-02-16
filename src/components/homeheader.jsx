import React from 'react'
import weddingBackground from '../assets/wedding-background.jpg'

export default function homeheader() {
  return (
    <div className='Home-slider-wrapper' style={{backgroundImage:`URL(${weddingBackground})`}}>
      <div className="Home-slider-container">
        <div className="Home-slider-text">
          <span className="Home-slider-title">
            The World is Wide and the life is short!
          </span>
          <span className="Home-slider-descripcion">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error adipisci repellat eius laboriosam eos quisquam, aspernatur odit voluptate vel doloribus ab atque iusto. Libero eligendi nobis eaque, voluptate sint magnam!
          </span>
        </div>
      </div>
    </div>
  )
}
