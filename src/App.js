import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from "./introduction";
import Header from './header & footer/header';
import Footer from "./header & footer/footer";
import Home from "./api/home"
import AboutUs from "./api/about";
import Login from "./login/login";
import Nike from "./products/nike"; // Create this component
import Adidas from "./products/adidas"; // Create this component
import Converse from "./products/converse"; // Create this component
import New_balance from "./products/new_balance"; // Create this component
import Fila from "./products/fila"; // Create this component
import Us_polo from "./products/us_polo"; // Create this component
import Cart from "./api/cart";


export default function App() {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const[cart,setCart] = useState([]);

  const handleIntroductionEnd = () => {
    setShowIntroduction(false);
  };

  const addToCart = (item) => {
    // Implement your logic to add the item to the cart
    setCart([...cart, item]);
    window.alert('You logged in successfully!!');

  };

  const removeFromCart = (itemId) => {
    // Implement the logic to remove the item with the given itemId from the cart
    // For example:
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };
  
  return (
    <Router>
      <>
      {showIntroduction ? (
          <Introduction onIntroductionEnd={handleIntroductionEnd} />
        ) : (
          <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nike" element={<Nike addToCart={addToCart}/>} />
        <Route path="/adidas" element={<Adidas addToCart={addToCart}/>} />
        <Route path="/converse" element={<Converse addToCart={addToCart}/>} />
        <Route path="/new_balance" element={<New_balance addToCart={addToCart}/>} />
        <Route path="/fila" element={<Fila addToCart={addToCart}/>} />
        <Route path="/us_polo" element={<Us_polo addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} onRemove={removeFromCart} />} />
      </Routes>
      <Footer />
      </>
      )}
      </>
    </Router>
  );
}
