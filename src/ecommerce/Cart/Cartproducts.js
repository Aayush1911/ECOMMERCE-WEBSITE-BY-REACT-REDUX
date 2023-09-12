import React from 'react'
import './Cart.css'
import { useDispatch, useSelector} from 'react-redux'
import {removefromcart } from '../../redux/slices/cartslice';
import {AiFillDelete} from 'react-icons/ai'
import { addtocart} from '../../redux/slices/cartslice';

function Cartproducts(props) {
  
  const dispatch=useDispatch()
    const cart=useSelector(state=>state.cartslice.cart);
  const curritem=cart.find(item=>item.id===props.id)
  const currquantity=curritem?curritem.quantity:0;
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
      <div className="cartinfo">
      <button className='button'onClick={()=> dispatch(removefromcart(props.id))}>-</button>
      <h4>{currquantity}</h4>
      <button className='button'onClick={()=> dispatch(addtocart(props.id))}>+</button>
    </div>
      <h3 className='cart-price'>Price : <i class="fa fa-inr"></i>{price}</h3>
    </div>
    <div className="totalprice">
              
    </div>
    </div>
  )
}

export default Cartproducts
