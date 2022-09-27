import "./App.css";

import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/home/Header";
import Home from "./components/home/Home";
import Sale from "./components/sale/Sale";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Product from "./components/product/Product";
import Cart from "./components/buttons/Cart";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
