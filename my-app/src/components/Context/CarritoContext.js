import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [ProductoSeleccionado, setProductoSeleccionado] = useState([]); 
console.log(ProductoSeleccionado);
  useEffect(() => {
  }, []);

  const agregarProducto = (prod) =>{
    //ya existe? tengo que buscar en el array actual si hay productos con el id prod de mi parametro
    // si existe tengop que clonar array ProductoSeleccionado
    //incremento la cantidad en 1 al objeto del array en la pos que lo encontre previamente
    //hago el set pasando directo el new array

    //si es nuevo
    const newProd = {
      producto: prod,
      cantidad: 1
    }

    setProductoSeleccionado([...ProductoSeleccionado,newProd])
  }

  return (
    <CarritoContext.Provider 
    value={{ ProductoSeleccionado, setProductoSeleccionado,agregarProducto }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;