import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

const RouteGuard2 = ({children}) => {
    const token = Cookies.get("token")
  if(token){
    return children
  }else{
    return <Navigate to={"/register"}/>
  }
}

export default RouteGuard2