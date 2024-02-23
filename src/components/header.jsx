import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo-horizontal.png'
import Traslatecopy from './traslatecopy'

export default function Header() {
  const [changeClassSvg, setChangeClassSvg] = useState(false)
  const [changeHeader, setChangeHeader] = useState(false);

  return (
    <div className={`header-wrapper ${changeHeader && 'header-white'}`}>
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
            <Traslatecopy copyId="MENU_QUIENES_SOMOS" tipo="li" clase="header-menuSelect-active"/>
            <Traslatecopy copyId="MENU_PIDE_MANO" tipo="li"/>
            <Traslatecopy copyId="MENU_DESPEDIDAS" tipo="li"/>
            <Traslatecopy copyId="MENU_GRUPOS" tipo="li"/>
            <Traslatecopy copyId="MENU_LUNA_MIEL" tipo="li"/>
            <Traslatecopy copyId="MENU_EXPERIENCIAS" tipo="li"/>
            <Traslatecopy copyId="MENU_PLANES_PAGO" tipo="li"/>
            <Traslatecopy copyId="MENU_CONTACTANOS" tipo="li"/>
            <li className='Header-socialMedia'>
              <img src={ Logo } alt="magic-journey wedding" />
            </li>
          </ul>
        </div>
        <div className={`header-menu-langua ${changeHeader && 'header-white'}`}>
          <div>En</div>
          <div className='header-menu-langua-activeLengua'>Es</div>
        </div>
      </div>
    </div>
  )
}
