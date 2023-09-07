import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';

// Create a context for managing the selected category
const CategoriaContext = createContext();

export default function Filter2() {
  const [filters, setFilters] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setFilters(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error fetching data:", error);
      });
  }, []);

  const SeleccionarCategoria = (element) => {
    setSelectedCategoria(element);
    console.log(element);
  };

  if (filters === null) {
    return <div>Loading...</div>
  } else {
    return (
      <CategoriaContext.Provider value={selectedCategoria}>
        <div className="border p-4 rounded mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
          {filters.map((element) => (
            <div key={element}>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    href="#"
                    className="d-flex"
                    onClick={() => SeleccionarCategoria(element)}
                  >
                    <span>{element}</span> <span className="text-black ml-auto"></span>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </CategoriaContext.Provider>
    );
  }
}
console.log(CategoriaContext);
export { CategoriaContext };
