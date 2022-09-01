import "./App.css";
import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router 
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/buttons/Cart";
import { useFormik } from "formik";
 


function App() {
  return (
    <>
    
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </Router>
       
    </>
  );
}

export default App;
