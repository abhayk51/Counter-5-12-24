import { useState } from 'react';
import './Counter.css'

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <>
    <div className='contain'>
      <h1>Counter App</h1>
      <p className='count'>{count}</p>
      <div className='btngrp'>
        <button className='btn1' onClick={()=>setCount((count)=>count-1)}>Decrement</button>
        <button className='btn2' onClick={()=>setCount(0)}>Reset</button>
        <button className='btn3' onClick={()=>setCount((count)=>count+1)}>Increment</button>
      </div>
    </div>
    </>
  )
}

export default Counter