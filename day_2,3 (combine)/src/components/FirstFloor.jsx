import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const FirstFloor = () => {
  return (
    <div>
        <Navbar/>
        FirstFloor
      <Outlet/>
    </div>
  )
}

export default FirstFloor