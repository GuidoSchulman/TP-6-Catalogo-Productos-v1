import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import InfoRopa from '../components/infoRopa'
import Footer from '../components/footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Shop_Single(props) {
  const { id } = useParams();
  const [product,setProduct]= useState()
  useEffect(() => {
    
      axios
        .get("https://dummyjson.com/products/" + id)
        .then(function (response) {
          setProduct(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });

  },[1]);
  return (
    <>
    <body>
    <p>{id}</p>
    <InfoRopa {...product}>

    </InfoRopa>
   
    </body>
    </>
  )
}

Shop_Single.propTypes = {}

export default Shop_Single
