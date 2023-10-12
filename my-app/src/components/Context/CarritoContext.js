import React, { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = (props) => {
  const [ProductoSeleccionado, setProductoSeleccionado] = useState([]);
  const [countTotal, setCountTotal] = useState(0);
  console.log(countTotal);
  console.log(ProductoSeleccionado);
  useEffect(() => {}, []);

  const agregarProducto = async (prod, cant) => {
    let listaCopiada = ProductoSeleccionado;
    let CountActual = 0;
    const index = ProductoSeleccionado.findIndex(
      (producto) => producto.producto.id === prod.id
    );
    console.log(index);
    if (index !== -1) {
      console.log("Previous",listaCopiada[index].cantidad);
      console.log("Cant: ", cant);
      listaCopiada[index].cantidad = listaCopiada[index].cantidad + cant;
      console.log("After", listaCopiada[index].cantidad);
      CountActual = countTotal + cant;
      setCountTotal(CountActual);
      setProductoSeleccionado(listaCopiada);
    } else {
      let newProd = {
        producto: prod,
        cantidad: cant,
      };
      console.log("NewProd: ", newProd);
      CountActual = countTotal + cant;
      setCountTotal(CountActual);
      setProductoSeleccionado([...ProductoSeleccionado, newProd]);
    }
  };
  const eliminarProducto = async (prod) => {
    const index = ProductoSeleccionado.findIndex(
      (producto) => producto.producto.id === prod.id
    );
    const cantItemElim=ProductoSeleccionado[index].cantidad
    const listaCopiada = ProductoSeleccionado.filter(
      (producto) => producto.producto.id !== prod.id
    );

    console.log("Total ",countTotal);
    console.log("CantProducto: " ,cantItemElim);
    const countActual = countTotal - cantItemElim;
    console.log(countActual);
    setCountTotal(countActual);
    setProductoSeleccionado(listaCopiada);
  };

  return (
    <CarritoContext.Provider
      value={{
        ProductoSeleccionado,
        setProductoSeleccionado,
        agregarProducto,
        countTotal,
        eliminarProducto,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
