import React from 'react'


export default function offers(){

  return (
    <section className='offer'>
      <div className='offer-carrusel' style={{backgroundImage:`url("https://media.admagazine.com/photos/641239e4d3f4fe9a251b2477/1:1/w_1999,h_1999,c_limit/destinos-para-bodas.jpg")`}}>
        <div className='offer-titleOffers'>
          <h4 className='offer-h4'>Declaracion de Amor Paris</h4>
          <div className='offer-btn'>Saber más</div>
        </div>
      </div>
      <div className='offer-contenForm'>
        <h3>Pedida de Mano</h3>
        <form>
          <p>Este formulario nos ayudará a planificar la pedida de mano perfecta para tu pareja.</p>
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
      </form>
      </div>
    </section>
  )  
}

