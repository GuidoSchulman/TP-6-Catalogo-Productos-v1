import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Ropa() {
  const [products, setProducts] = useState([]);

    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        setProducts(response.data.products); 
        console.log(response.data.products);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
      console.log(products);
      if (products==null) {
       return <div>Loading...</div>
      }else{
        return (
   
          <>
          
            <div className="row mb-5">
              {products.map((element) => (
                <div
                  key={element.id} 
                  className="col-sm-6 col-lg-4 mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div className="block-4 text-center border">
                    <figure className="block-4-image">
                      <Link to="/Shop_Single">
                        <img
                          src={element.thumbnail}
                          alt="placeholder"
                          className="img-fluid"
                        />
                      </Link>
                    </figure>
                    <div className="block-4-text p-4">
                      <h3>
                        <Link to="/Shop_Single">{element.title}</Link>
                      </h3>
                      <p className="mb-0">Finding the perfect t-shirt</p>
                      <p className="text-primary font-weight-bold">{element.Price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      }
      
      }
