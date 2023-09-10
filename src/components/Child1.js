import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setname } from '../actions/index';

function Child1() {
const[name,setName]=useState('')
    const inputRef=useRef(null)
    const dispatch=useDispatch();

    const handlenamechange=(e)=>{
        
        setName(e.target.value)
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      dispatch(setname(name))
      setName('')
    }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type='text' ref={inputRef}onChange={handlenamechange}value={name}/>
        <input type='submit' onClick={handlesubmit}></input>
      </form>
    </div>
  )
}

export default Child1
