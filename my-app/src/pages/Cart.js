import Header from "../components/header.js";
import Tabla from "../components/tabla.js";

import Recuento from "../components/recuento.js";
import { Link } from "react-router-dom";
function Cart(props) {
  return (
    <body>
      <div className="site-wrap">
        <Tabla></Tabla>

       
        
           
            <br></br>
            <Recuento></Recuento>
          </div>
        
      
    </body>
  );
}
export default Cart;
