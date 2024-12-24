import React, { Fragment } from "react";
import CollapsibleExample from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";
import WishPage from "./pages/WishPage";

const App = ()=>{
  return(
    <Fragment>
      <ScrollToTop/>
      <CollapsibleExample/>
      <Routes>     
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/product" element={<ProductView/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/wish" element={<WishPage/>}/>
      </Routes>
      <Footer/>
    </Fragment>
  )
}

export default App;