import React from 'react'

export default function pagos() {
  return (
    <section className="offer">
      <div className="weare-container">
        <div className="offer-contentFormTitle">
          <span>Haz realidad tus sueños sin preocupaciones financieras</span>
          <h3>Opciones <strong>flexibles</strong> de Pago</h3>
          <p>Sabemos que ya tienes muchas cosas en tu lista y queremos hacerte la vida más fácil. Ya sea que tengas un presupuesto ya establecido o no, Magic Journey está para ayudarte con los planes de pago.</p>
        </div>
        <div className="pagos-section">
          <div className='pagos-opcion'>
            <div>
              <i className="fa-solid fa-percent"></i>
              <h1>¡Aparta tu viaje!</h1>
              <p>Todos los paquetes, experiencias o viajes personalizados apartarlos con deposito minimo de 25% sobre el total del viaje.</p>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-light fa-calendar-heart"></i>
              <h1>¡Tu viaje a plazos!</h1>
              <p>Puedes hacer pagos mensuales, quincenales o semanales siempre y cuando tu viaje este al 100% pagado 30 dias antes de la fecha de tu viaje.</p>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-regular fa-heart-circle-check"></i>
              <h1>¡Cambios con amor y sin costo!</h1>
              <p>Si el tiempo no fue suficiente y llega la fecha convenida, puedes hacer todos los cambios que necesites, desde cambio de nombre, fecha o destino.</p>
            </div>
          </div>
          <div className='pagos-opcion'>
            <div>
              <i className="fa-light fa-credit-card"></i>
              <h1>¡Aceptamos todos los metodos  de pago!</h1>
              <p>Aceptamos todos los metodos de pago, deposito bancario, tarjeta de debito o credito y meses sin intereses. </p>
            </div>
          </div>
          <span className="pagos-condiciones">
            *Los despositos no son rembolsables, Si requires factura se debe de agregar el I.V.A. 16% sobre el monto total del viaje.*
          </span>
        </div>
      </div>
    </section>
  )
}
