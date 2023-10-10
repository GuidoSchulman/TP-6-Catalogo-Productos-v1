import React, { useEffect, useState } from 'react'
import InfoRopa from '../components/infoRopa'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShopSingle = (props)=> {
    const { id } =  useParams();
   
  const [product,setProduct]= useState(null)

  useEffect(() => {
    console.log('idtest',id); 
      axios
        .get("https://dummyjson.com/products/" + id)
        .then(function (response) {
           setProduct(response.data);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });

  },[id]);

  //console.log(product);
  return (
    <>
    <body>
    <p>{id}</p>
    
    <InfoRopa product={product} />
   
    </body>
    </>
  )
}

ShopSingle.propTypes = {}

export default ShopSingle
