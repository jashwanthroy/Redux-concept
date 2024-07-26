"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export const C = () => {
   const {name,loc} = useSelector((state) => {
     const { name, loc } = state.appReducer;
     return {name,loc}
   })
  return (
    <div>
        C Component
          <p>
        <b>Name: {name}</b>
        <br />
        <b>Location:{loc}</b>
          </p> 
    </div>
  )
}
