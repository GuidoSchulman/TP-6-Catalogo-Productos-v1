import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CategoriaContext } from "./filter2";
import { CarritoContext } from "./Context/CarritoContext";

export default function Ropa() {
  const [products, setProducts] = useState([]);
  const {selectedCategory} = useContext(CategoriaContext);
 
  useEffect(() => {
    if (selectedCategory != null) {
      axios
        .get("https://dummyjson.com/products/category/" + selectedCategory)
        .then(function (response) {
          setProducts(response.data.products);
          console.log(response.data.products);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    } else {
      axios
        .get("https://dummyjson.com/products")
        .then(function (response) {
          setProducts(response.data.products);
          console.log(response.data.products);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedCategory]);

  console.log(products);

  if (products == null) {
    return <div>Loading...</div>;
  } else {
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
                  <Link to={"/shop_single" + element.id}>
                    <img
                      src={element.thumbnail}
                      alt="placeholder"
                      className="img-fluid"
                    />
                  </Link>
                </figure>
                <div className="block-4-text p-4">
                  <h3>
                    <Link to={"/shop_single/"+ element.id}   >{element.title}</Link>
                  </h3>
                  <p className="mb-0">{element.description}</p>
                  <p className="text-primary font-weight-bold">
                    {element.Price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export {CarritoContext };