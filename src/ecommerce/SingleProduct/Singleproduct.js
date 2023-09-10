import React from 'react'
import './Singleproduct.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, removefromcart } from '../../redux/slices/cartslice';
function Singleproduct(props) {

  const cart=useSelector(state=>state.cartslice.cart);
  const curritem=cart.find(item=>item.id===props.id)
  const currquantity=curritem?curritem.quantity:0;

  const dispatch=useDispatch();
  return (
    <div className='singleproduct'>
      <img className='product-image' src={props.image} alt="" />
      <div className="product-info">
      <h2 className='product-title'>{props.title}</h2>
      <p className='product-price'>{props.price}</p>
    </div>
    <div className="cartinfo">
      <button className='button'onClick={()=> dispatch(removefromcart(props.id))}>-</button>
      <h4>{currquantity}</h4>
      <button className='button'onClick={()=> dispatch(addtocart(props.id))}>+</button>
    </div>
    </div>
  )  
}

export default Singleproduct
