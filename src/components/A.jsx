"use client"
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
export const A = () => {
    const nameRef = useRef()
    const dispatch = useDispatch();
    const handleClick = () => {
        const name = nameRef.current.value;
        dispatch({type:"NAME_UPDATE",payload: name})
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
