import "./App.css";

import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Sale from "./components/Sale";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product";
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
