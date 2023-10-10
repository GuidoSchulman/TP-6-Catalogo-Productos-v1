import React, { useContext } from 'react'
import { CarritoContext } from './ropa'

export default function Tabla() {
  const {ProductoSeleccionado} =useContext(CarritoContext)
  console.log(ProductoSeleccionado );
 
  return (
    

    <>
     <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {ProductoSeleccionado.map((element)=>(
 <tr>
 <td className="product-thumbnail">
   <img src={element.producto.thumbnail} alt="Image" className="img-fluid"></img>
 </td>
 <td className="product-name">
   <h2 className="h5 text-black">{element.producto.title}</h2>
 </td>
 <td>${element.producto.price}</td>
 <td>
   <div className="input-group mb-3" style={{maxwidth: '120px'}}>
    <p>{element.cant}</p>
    
   </div>

 </td>
 <td>$49.00</td>
 <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
</tr>


                  ))}
                 
                </tbody>
              </table>
            </div>
          </form>
        </div>
    </div>
    </div>
    </>
   
  )
}
