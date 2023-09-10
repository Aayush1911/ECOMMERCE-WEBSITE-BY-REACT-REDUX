import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { loadproducts } from '../../redux/slices/productslice';
import Singleproduct from '../SingleProduct/Singleproduct';
import './Productlist.css'
import { fetchdata } from '../../redux/slices/productslice';
import {Spin} from 'antd'

function Productlist() {
    const dispatch=useDispatch()
    const products=useSelector(state => state.productslice.products)
    const status=useSelector(state=> state.productslice.status)

    useEffect(()=>{
      dispatch(fetchdata())
    },[dispatch])
    if(status==='loading'){
      return <Spin style={{fontSize:'40px',position:'absolute',top:'40%', right:'50%' }}/>
    }
  return (
    <div className='productlist'>
      {products.map(item => <Singleproduct key={item.id} image={item.images} title={item.title} price={item.price} id={item.id}/>)}
    </div>
  )
}

export default Productlist
