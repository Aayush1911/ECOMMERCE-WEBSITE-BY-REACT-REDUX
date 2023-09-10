import React from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {  useSelector } from 'react-redux'
import {Link} from 'react-router-dom';


function Navbar() {
  const cart=useSelector((state)=>state.cartslice.cart);
  let count=0;
  cart.forEach(element => {
      count+=element.quantity;
  });
  return (
  
    <nav>
        <h2 className="banner">Ecommerce Website</h2>
        <div className="right-layout">
            <div className="cart-layout">
               <Link className='hometag'  to="/">Home</Link>
                <Link className='cartlogo' to="/cart">
                <AiOutlineShoppingCart/>
                </Link>
                <h3>{count}</h3>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
