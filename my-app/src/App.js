import logo from "./logo.svg";
import "./App.css";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
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
    </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
