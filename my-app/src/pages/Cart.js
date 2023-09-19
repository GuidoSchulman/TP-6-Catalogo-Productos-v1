import Header from "../components/header.js";
import Tabla from "../components/tabla.js";
import Cupon from "../components/cupon.js";
import Recuento from "../components/recuento.js";
function Cart(props) {
  return (
    <body>
      <div class="site-wrap">
        <Tabla></Tabla>

       
        
            <div class="row mb-5">
              <div class="col-md-6 mb-3 mb-md-0">
                <button class="btn btn-primary btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-primary btn-sm btn-block">
                  Continue Shopping
                </button>
              </div>
            </div>
            <Cupon></Cupon>
            <br></br>
            <Recuento></Recuento>
          </div>
        
      
    </body>
  );
}
export default Cart;
