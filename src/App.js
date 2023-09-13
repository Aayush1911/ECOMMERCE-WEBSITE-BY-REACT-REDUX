import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './ecommerce/Navbar/Navbar';
import Productlist from './ecommerce/ProductList/Productlist';
import Cart from './ecommerce/Cart/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



// https://github.com/GabrielGirotti/ecomerce_project