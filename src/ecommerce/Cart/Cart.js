import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cartproducts from './Cartproducts';
import { fetchdata } from '../../redux/slices/productslice'; 

function Cart() {
  
  const cartItems = useSelector((state) => state.cartslice.cart);
  
  const products = useSelector((state) => state.productslice.products);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      if (product) {
        totalPrice +=Math.floor(product.price * cartItem.quantity);
      }
    });
    let gstcharge=Math.floor(totalPrice * 0.18);
    let totalPricewithgst = Math.floor(totalPrice+gstcharge);
    return [totalPrice,gstcharge,totalPricewithgst]
  };
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <h>Your cart is empty.</h>
      ) : (
        <div>
      {cartItems.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        if (product) {
          return (
            <Cartproducts
              key={cartItem.id}
              image={product.images}
              title={product.title}
              price={product.price}
              id={cartItem.id}
              quantity={cartItem.quantity}
            />
          );
        }

        return null;
      })}
      <div className="totalprice">
        <h3>Price : {calculateTotalPrice()[0]}</h3>
        <h4>  Tax   :  {calculateTotalPrice()[1]}</h4>
       <h3> Total Price : {calculateTotalPrice()[2]}</h3>
      </div>
      <button className='paybtn' onClick={()=>alert("Payment done Sucessfully")}>
        Pay Now
      </button>
      </div>
      
      )}
    </div>
  );
}

export default Cart;
