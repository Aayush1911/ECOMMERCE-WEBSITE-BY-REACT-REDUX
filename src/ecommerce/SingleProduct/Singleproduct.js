import React from 'react'
import './Singleproduct.css'
import { useDispatch } from 'react-redux'
import { addtocart} from '../../redux/slices/cartslice';
function Singleproduct(props) {


  

  const dispatch=useDispatch();
  return (
    <div className='singleproduct'>
      <img className='product-image' src={props.image} alt="" />
      <div className="product-info">
      <h2 className='product-title'>{props.title}</h2>
      <p className='product-price'><i class="fa fa-inr"></i>{props.price}</p>
      <button className='buybtn' onClick={()=> dispatch(addtocart(props.id))}>
        Buy
      </button>
    </div>
   
    </div>
  )  
}

export default Singleproduct
