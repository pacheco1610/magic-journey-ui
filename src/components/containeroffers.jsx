import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Offers from './offers';
import dataJson from '../data.json';
import modelData from '../models/modelOffers.js'

export default function ContainerOffers() {
  const [data, setData] = useState([])
  const locale = 'es-MX';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  const response = await Axios.get(`https://cms.gstmtravel.com/api/paquetes-magics?locale=${locale}&populate[Sliders][populate]=*&populate[preguntas][populate]=*`);
  setData(new modelData(response.data.data))
  };
  
  return (
    <div>
      {data?.offers?.map((paquete, index) => {
        if (index%2) {
          return (
            <Offers data={ paquete } reverse={true}/>
          )
        } else {
          return (
            <Offers data={ paquete }/>
          )
        }
      })}
    </div>
  )
}
