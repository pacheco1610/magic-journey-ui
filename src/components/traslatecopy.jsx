import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Traslatecopy = ( {copyId,clase,tipo} ) => {

    const [data, setData] = useState([]);
    const [copy, setCopy] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

const fetchData = async () => {
  const response = await axios.get(`https://cms.gstmtravel.com/api/traslate-copy-magics?filters[nombre][$eq]=${copyId}`);
  console.log(response.data.data)
  setData(response.data.data[0].attributes);
};

switch (tipo) {
  case 'h1':
    return (
      <h1 name={data.nombre} className={clase}> 
        {
          data?.descripcion ? data.descripcion : ""
        }
      </h1>
    )
  case 'span':
    return (
      <span name={data.nombre} className={clase}> 
        {
          data?.descripcion ? data.descripcion : ""
        }
      </span>
    )
  case 'div':
    return (
      <div name={data.nombre} className={clase}> 
        {
          data?.descripcion ? data.descripcion : ""
        }
      </div>
    )
    case 'p':
      return (
        <p name={data.nombre} className={clase}> 
          {
            data?.descripcion ? data.descripcion : ""
          }
        </p>
      )
  default:
    return (
      < > 
        {
          data?.descripcion ? data.descripcion : ""
        }
      </>
    )
    break;
}

}

export default Traslatecopy