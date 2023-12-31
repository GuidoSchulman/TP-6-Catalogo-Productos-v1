import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopSingle from "./pages/ShopSingle";
import Contacto from "./pages/Contacto";
import CategoriaProvider from "./components/Context/CategoriaContext";
import Cart from "./pages/Cart";

/*import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";*/
import CarritoProvider from "./components/Context/CarritoContext";

function App() {
  return (
    <CarritoProvider>
    <CategoriaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path={"/shop_single/:id"} element={<ShopSingle />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </CategoriaProvider>
    </CarritoProvider>
  );
}

export default App;
