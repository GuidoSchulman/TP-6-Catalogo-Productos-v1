import { useContext } from "react";
import { CarritoContext } from "./ropa";

export default function Recuento() {
  const { ProductoSeleccionado } = useContext(CarritoContext);
  ProductoSeleccionado.forEach((prod) => {
    console.log("Precio: ", prod.producto.price);
  });
  const precioTotal = ProductoSeleccionado.reduce(
    (total, prod) => total + prod.producto.price * prod.cantidad,
    0
  );
  return (
    <>
    <center>
      <div className="col-md-6 pl-5">
        <div className="row justify-content-end">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12 text-right border-bottom mb-5">
                <center><h3 className="text-black h4 text-uppercase">Cart Totals</h3>
              </center></div>
            </div>
            <div className="row mb-3">

            <div className="col-md-12 mb-3">
              <div className="row">
              
            </div></div>
              {ProductoSeleccionado.map((prod) => (
                <div className="col-md-12" key={prod.producto.id}>
                  <div className="row mb-2">
                    <div className="col-md-6">{prod.producto.title}</div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">
                        {prod.producto.price * prod.cantidad.toFixed(2)}$
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            <div className="row mb-5 border-top">
              <div className="col-md-6 ">
                <span className="text-black ">Total</span>
              </div>
              <div className="col-md-6 text-right">
                <strong className="text-black">{precioTotal}$</strong>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </center>
    </>
  );
}
