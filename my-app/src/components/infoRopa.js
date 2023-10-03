import React, { useContext } from 'react';
import { CarritoContext } from '../components/Context/CarritoContext';

export default function InfoRopa({ product }) {
  console.log(product);
  const { setRopaSeleccionada } = useContext(CarritoContext);

  const AñadirACarrito = function () {
    setRopaSeleccionada(product);
  };

  return (
    <div><div class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img src={product.thumbnail} alt="Image" class="img-fluid"></img>
        </div>
        <div class="col-md-6">
          <h2 class="text-black">{product.title}</h2>
          <p>{product.description}</p>
          <p class="mb-4">Ex numquam veritatis debitis minima quo error quam eos dolorum quidem perferendis. Quos repellat dignissimos minus, eveniet nam voluptatibus molestias omnis reiciendis perspiciatis illum hic magni iste, velit aperiam quis.</p>
          <p><strong class="text-primary h4">{product.price}$</strong></p>
          <div class="mb-1 d-flex">
            <label for="option-sm" class="d-flex mr-3 mb-3">
              <span class="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-sm" name="shop-sizes"/></span> <span class="d-inline-block text-black">Small</span>
            </label>
            <label for="option-md" class="d-flex mr-3 mb-3">
              <span class="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-md" name="shop-sizes"/></span> <span class="d-inline-block text-black">Medium</span>
            </label>
            <label for="option-lg" class="d-flex mr-3 mb-3">
              <span class="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-lg" name="shop-sizes"/></span> <span class="d-inline-block text-black">Large</span>
            </label>
            <label for="option-xl" class="d-flex mr-3 mb-3">
              <span class="d-inline-block mr-2" style={{top:'-2px', position: 'relative'}}><input type="radio" id="option-xl" name="shop-sizes"/></span> <span class="d-inline-block text-black"> Extra Large</span>
            </label>
          </div>
          <div class="mb-5">
            <div class="input-group mb-3" style={{maxwidth: '120px'}}>
            <div class="input-group-prepend">
              <button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
            </div>
            <input type="text" class="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div class="input-group-append">
              <button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
            </div>
          </div>

          </div>
          <p><a href="cart.html" class="buy-now btn btn-sm btn-primary" onClick={AñadirACarrito}></a></p>

        </div>
      </div>
    </div>
  </div></div>
  )
}
