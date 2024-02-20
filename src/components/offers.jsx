import React from 'react'
import parse from 'html-react-parser';

export default function Offers({reverse, data}){

  const handleClick = (type) => {
    const slider = document.querySelector('.offer-carrusel');
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
            {data.paquetes.map(paquete => {
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
            })}
            <offer className="carrusel-controller">
              <div onClick={() => handleClick('right')}></div>
              <div></div>
              <div></div>
            </offer>
          </div>
          <div className='offer-contenForm'>
            <form>
              <div className="offer-conentFormHeader">
                <i className="fa-light fa-comment-heart"></i>
                <div className="offer-conentFormTitle">
                  <h3>{ data.formulario.titulo }</h3>
                  <p>{ data.formulario.descripcion }</p>
                </div>
              </div>
              <br />
              <label htmlFor="fecha">Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                value="fecha"
              />
              <br />
              <label htmlFor="destino">Destino:</label>
              <input
                type="text"
                id="destino"
                name="destino"
              />
              <br />
              <label htmlFor="lugar">Lugar:</label>
              <input
                type="text"
                id="publico"
                name="lugar"
                value="publico"
              />
                        <br />
              <label htmlFor="presupuesto">Presupuesto:</label>
              <input
                type="number"
                id="presupuesto"
                name="presupuesto"
              />
              <br />
              <label htmlFor="idea">Cuéntanos más sobre tu idea:</label>
              <textarea
                id="idea"
                name="idea"
                rows="5"
                cols="30"
              />
              <br />
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
              />
              <input type="submit" className='btn-submit'/>
          </form>
          </div>
        </div>
      </div>
    </section>
  )  
}

