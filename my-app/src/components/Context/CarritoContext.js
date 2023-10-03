import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [RopaSeleccionada, setRopaSeleccionada] = useState(null); 
console.log(RopaSeleccionada);
  useEffect(() => {
  }, []);

  return (
    <CarritoContext.Provider value={{ RopaSeleccionada, setRopaSeleccionada }}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;