import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Rooms = () => {
  return (
    <>
    <div>Rooms:
        <h2><Link to='/firstfloor/harry'>Harry room</Link></h2>
        <h2><Link to='/firstfloor/ben'>Ben room</Link></h2>
    </div>

    {/* <Outlet/> */}
    </>
  )
}

export default Rooms