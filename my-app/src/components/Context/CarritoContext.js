import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [ProductoSeleccionado, setProductoSeleccionado] = useState([]);
console.log(ProductoSeleccionado);
  useEffect(() => {
  }, []);

  const agregarProducto = async(prod,cant) =>{
    let listaCopiada=ProductoSeleccionado
    const index =ProductoSeleccionado.findIndex((producto)=>producto.producto.id===prod.id)
    console.log(index);
   if (index!==-1) {
    listaCopiada[index].cantidad+=cant
    setProductoSeleccionado(listaCopiada)
   }else{
    let newProd= {
      producto: prod,
      cantidad: cant
    }
    console.log("NewProd: ",newProd);
    setProductoSeleccionado([...ProductoSeleccionado,newProd])
   }
   
      
  }

  return (
    <CarritoContext.Provider 
    value={{ ProductoSeleccionado, setProductoSeleccionado,agregarProducto}}>
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;