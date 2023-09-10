import React from 'react'
import './Cart.css'
import { useDispatch} from 'react-redux'
import {removefromcart } from '../../redux/slices/cartslice';
import {AiFillDelete} from 'react-icons/ai'
function Cartproducts(props) {
  const dispatch=useDispatch()
  const price=Math.floor(props.price*props.quantity);
  return (
    <div className='container'>
    <img className='cart-image' src={props.image} alt="" />
      <div className="cart-info">
      <div className='delete-logo'>
      <button className='deletebtn'  onClick={()=>dispatch(removefromcart(props.id))}>
        <AiFillDelete/>
      </button>
      </div>
      <h3 className='cart-title'>{props.title}</h3>
      <p className='cart-quantity'>Quantity : {props.quantity}</p>
      <h3 className='cart-price'>Price : {price}</h3>
    </div>
    <div className="totalprice">
              
    </div>
    </div>
  )
}

export default Cartproducts
