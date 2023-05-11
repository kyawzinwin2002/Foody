import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

const Foods = () => {
      const data = useSelector((state) => state.foodSlice);
    console.log(data);
  return (
    <div>Foods</div>
  )
}

export default Foods