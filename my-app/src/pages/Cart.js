import Header from "../components/header.js";
import Tabla from "../components/tabla.js";

import Recuento from "../components/recuento.js";
import { Link } from "react-router-dom";
function Cart(props) {
  return (
    <body>
      <div className="site-wrap">
        <Tabla></Tabla>

       
        
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-primary btn-sm btn-block">
                  Update Cart
                </button>
              </div>
              <div className="col-md-6">
                
                <button className="btn btn-outline-primary btn-sm btn-block" >
                <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </div>
           
            <br></br>
            <Recuento></Recuento>
          </div>
        
      
    </body>
  );
}
export default Cart;
