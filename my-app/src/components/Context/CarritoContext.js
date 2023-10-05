import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [ProductoSeleccionado, setProductoSeleccionado] = useState([]); 
console.log(ProductoSeleccionado);
  useEffect(() => {
  }, []);

  return (
    <CarritoContext.Provider 
    value={{ ProductoSeleccionado, setProductoSeleccionado }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;