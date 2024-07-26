"use client"
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
export const B = () => {
  const dispatch = useDispatch();
  const [loc, setLoc] = useState();
    const handleClick = () => {
        dispatch({type:"LOC_UPDATE",payload:loc})
    }
    const handleChange = (eve) => {
        setLoc(eve.target.value)
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

