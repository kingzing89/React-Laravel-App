import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GuestLayout() {

    const {token} = useStateContext();
    console.log("Token value:", token); // Log token value
    if(token){

        return <Navigate to="/users"/>
    }
  return (
    <div>
        <h1>for guests</h1>
        <Outlet/> 
    </div>
  )
}
