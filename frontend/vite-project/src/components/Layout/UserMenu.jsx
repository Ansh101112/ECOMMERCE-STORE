import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'

const UserMenu = () => {
  const[auth,setAuth]=useAuth();
  
    return (
    <>
    <h1>Your Dashboard</h1>
        <NavLink to="" className="list-group">
  <NavLink to="/dashboard/user/profile" className="list-group-item">Profile</NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item">Orders</NavLink>
</NavLink>

    </>
  )
}

export default UserMenu