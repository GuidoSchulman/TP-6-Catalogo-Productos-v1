import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import  { CategoriaContext } from "./Context/CategoriaContext";
// Create a context for managing the selected category

export default function Filter2() {  
  const {categorias,setSelectedCategory} = useContext(CategoriaContext);

  if (categorias.length === 0) {
    return <div>Loading...</div>
  } else {
    return (      
        <div className="border p-4 rounded mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
          <button onClick={()=>setSelectedCategory(null)}>Eliminar Filtro</button>
          {categorias.map((element) => (
            <div key={element}>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    href="#"
                    className="d-flex"
                    onClick={() => setSelectedCategory(element)}
                  >
                    <span>{element}</span> <span className="text-black ml-auto"></span>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>      
    );
  }
}
//console.log(CategoriaContext);
export {CategoriaContext };
