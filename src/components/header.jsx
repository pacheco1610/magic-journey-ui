import React, { useState } from 'react'
import Logo from '../assets/logo-horizontal.png'

export default function Header() {
  const [changeClassSvg, setChangeClassSvg] = useState(false)
  return (
    <div className='header-wrapper'>
      <div className="header-container">
        <div className="header-logo">
          <img src={ Logo } alt="magic-journey wedding" />
        </div>
        <div className={`header-menu ${changeClassSvg && 'active' }`} >
          <svg className={ `ham hamRotate ham4 ${changeClassSvg && 'active' } `} viewBox="0 0 100 100" width="80" onClick={ () => setChangeClassSvg(!changeClassSvg) }>
            <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
            <path
              className="line middle"
              d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
          </svg>
        </div>
        <div className={`header-menuExpand-container ${changeClassSvg && 'active' }`}>
          <ul>
            <li>Quienes Somos</li>
            <li>Pide su mano</li>
            <li>Despedidas</li>
            <li>Grupos</li>
            <li>Luna de miel</li>
            <li>Experiencias</li>
            <li>Planes de pago</li>
            <li>Contactanos</li>
            <li className='Header-socialMedia'>
              <img src={ Logo } alt="magic-journey wedding" />
            </li>
          </ul>
        </div>
        <div className='header-menu-langua'>español - ingles</div>
      </div>
    </div>
  )
}
