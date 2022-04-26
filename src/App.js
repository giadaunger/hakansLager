import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import '../src/App.css'

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Contact from "./components/contact/Contact";
import Products from "./components/products/Products";
import Footer from "./components/footer/Footer";
import Campaign from './components/campaign/Campaign';


function App() {

  let [cart, setCart] = useState([]);
  let [ cartItems, setCartItems ] = useState([]);

  const addToCart = (productItems) => {
      setCart([...cart, productItems])
      console.log(productItems.id)
  }

  const handleClearCart = () => {
    setCart([]);
  }

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((productItems) => productItems.id === product.id);
    if(ProductExist) {
      setCart(cartItems.map((productItems) => productItems.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity + 1}:productItems));
    }else {
      setCart([...cartItems, {...product, quantity: 1}]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((productItems) => productItems.id === product.id);
    if(ProductExist.quantity === 1) {
      setCart(cartItems.filter((productItems) => productItems.id !== product.id));
    }else {
      setCart(cartItems.map((productItems) => productItems.id === product.id ?
      {...ProductExist, quantity: ProductExist.quantity - 1}:productItems));
    }
  };

  const [AllProducts] = useState([
      {
          id: '1',
          name: 'Chocolate Strawberry Cheerios',
          price: 120,
          image: '/images/img1.png',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '2',
          name: 'Minecraft Creeper Crunch',
          price: 99,
          image: '/images/img2.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '3',
          name: 'Strawberry Krispies',
          price: 119,
          image: '/images/img3.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '4',
          name: 'Kellogs Mashups',
          price: 115,
          image: '/images/img4.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '5',
          name: 'Oatmeal Creme Pies',
          price: 135,
          image: '/images/img5.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '6',
          name: 'Oreo´s',
          price: 99,
          image: '/images/img6.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '7',
          name: 'Wendys Frosty',
          price: 95,
          image: '/images/img7.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '8',
          name: 'Sour Patch kids',
          price: 120,
          image: '/images/img8.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
      {
          id: '9',
          name: 'Eggo',
          price: 60,
          image: '/images/img9.jpg',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe delectus unde nostrum labore error tempore adipisci dolorem atque iste incidunt.'
      },
  ]);

  const items = AllProducts.map(productItems => 
      <div className='product-card' key={productItems.id}>
          <li>
              <img src={productItems.image} alt='pic' className='product-pic'/>
              <div>
                  <h1 className='product-h1'>{productItems.name}</h1>
                  <p className='product-p'>{productItems.content}</p>
                  <h3 className='product-h3'>{productItems.price} :-</h3>
              </div>
              <button className='product-btn' onClick={() => addToCart(productItems)}>Köp</button>
          </li>
      </div>)
  return (
    <div className="App">
      <Router>
        <Campaign />
        <Nav cart={cart}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/checkout' element={<Checkout AllProducts={AllProducts} cart={cart} setCart={setCart} handleClearCart={handleClearCart} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} items={items}/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/products' element={<Products items={items} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
