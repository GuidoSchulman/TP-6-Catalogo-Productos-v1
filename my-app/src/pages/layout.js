
import Header from "../components/header.js";


import { BrowserRouter, Routes, Route,Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">      
      <Header></Header>
      <Outlet></Outlet>
    </body>
    </>
  );
};

export default Layout;
