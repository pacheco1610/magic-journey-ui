function modelServicio(data) {
    this.offers =  data.map(item => {
      return {
        id: item?.id, 
        subtitulo: item?.attributes?.subtitulo,
        titulo: item?.attributes?.titulo,
        descripcion: item?.attributes?.descripcion,
        titulo_formulario: item?.attributes?.titulo_formulario,
        descripcion_formulario: item?.attributes?.descripcion_formulario,
        sliders: item?.attributes?.Sliders?.map(slider => {
          return {
            titulo: slider?.Titulo,
            imagen: slider?.imagen?.data?.attributes?.url
          }
        }),
        preguntas: item?.attributes?.preguntas?.map(pregunta => {
          return {
            titulo: pregunta?.Pregunta
          }
        })
      }
    })
  }
  
  export default modelServicio;