"use client"
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
export const A = () => {
    const nameRef = useRef()
    const dispatch = useDispatch();
    const handleClick = () => {
        const name = nameRef.current.value;
        
    }
  return (
    <div>
        A Component
          <p>
              <b>Name</b><input ref={nameRef} />
              <button onClick={handleClick}>Submit</button>
          </p> 
    </div>
  )
}