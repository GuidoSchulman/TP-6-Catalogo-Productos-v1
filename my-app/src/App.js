import logo from "./logo.svg";
import "./App.css";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Shop_Single from "./pages/Shop_Single";
import Contacto from "./pages/Contacto";
/*import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";*/
function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
     <Route index element={<Home />}></Route>
    

</Route>
<Route path = "/shop" element={<Shop/>}></Route>
<Route path = "/shop_single" element={<Shop_Single/>}></Route>
<Route path = "/contacto" element={<Contacto/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
