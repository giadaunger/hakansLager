import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/App.css'

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
