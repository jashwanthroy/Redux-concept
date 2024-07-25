"use client"
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
export const B = () => {
    const locRef = useRef();
    const handleClick = () => {
        
    }
    const handleChange = (eve) => {
        const loc = eve.target.value;
        locRef.current = loc;
    }
  return (
    <div>
    B Component
      <p>
              <b>Location</b><input onChange={handleChange} />
          <button onClick={handleClick}>Submit</button>
      </p> 
</div>
  )
}

