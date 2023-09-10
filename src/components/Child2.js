import React from 'react'
import { useSelector } from 'react-redux';


function Child2() {
  const msg=useSelector((state)=>state.showmessage)
  return (
    <>
      <p>You have written is : {msg}</p>
    </>
  )
  }
export default Child2;
