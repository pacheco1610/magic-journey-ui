import React from 'react'
import parse from 'html-react-parser';

export default function Offers({reverse, data}){
  console.log(data)
  const handleClick = (type) => {
    const slider = document.querySelector('.offer-carrusel-slider');
    const firsElement = document.querySelectorAll('.offer-imagen-container')[0];
    const firstElementWidth = firsElement.clientWidth;
    slider.scrollLeft += type === "left" ? -firstElementWidth : firstElementWidth;
  }

  return (
    <section className={reverse === "true" ? "reverse offer" : "offer" }>
      <div className="offer-container">
        <div className="offer-contentFormTitle">
          <span>{ data.subtitulo }</span>
          <h3>{ parse(data.titulo) }</h3>
          <p>{ data.descripcion }</p>
        </div>
        <div className={ `offer-wrapper ${reverse && 'reverse'} `} >
          <div className='offer-carrusel'>
            <div className="offer-carrusel-slider">
            { data.sliders.map(paquete => {
              return (            
                <div className="offer-imagen-container" style={{backgroundImage:`url("${ paquete.imagen }")`}}>
                  <div className='offer-titleOffers'>
                    <div className="offer-titleOffersWrapper">
                      <h4 className='offer-h4'>{ paquete.titulo }</h4>
                      <div className='offer-btn'>Saber más</div>
                    </div>
                  </div>
                </div>
              )
            }) }
            </div>
            <div className="carrusel-controller">
              <div onClick={() => handleClick('right')}></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className='offer-contenForm'>
            <form>
              <div className="offer-conentFormHeader">
                <i className="fa-light fa-comment-heart"></i>
                <div className="offer-conentFormTitle">
                  <h3>{ data.titulo_formulario }</h3>
                  <p>{ data.descripcion_formulario}</p>
                </div>
              </div>
              <div className="container-form">
                <div className="offers-form-input-container">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                  />
                  <span>¿Cual es tu nombre?</span>
                </div>
                <div className="offers-form-input-container">
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                  />
                  <span>¿Cual es tu email?</span>
                </div>
                <div className="offers-form-input-container">
                  <input
                    type="tel"
                    id="nombre"
                    name="nombre"
                    required
                  />
                  <span>¿Cual es tu celular?</span>
                </div>
                <div className="offers-form-input-container">
                  <input
                    type="date"
                    id="nombre"
                    name="nombre"
                    required
                  />
                  <span>¿Cuando esperas vivir tu experiencia?</span>
                </div>
                {
                  data?.preguntas.map(pregunta => {
                    return (
                      <div className="offers-form-input-container">
                        <input
                          type="text"
                          required
                        />
                        <span>{pregunta.titulo}</span>
                      </div>
                    )
                  })
                }
                <input type="submit" className='btn-submit'/>
              </div>
          </form>
          </div>
        </div>
      </div>
    </section>
  )  
}

