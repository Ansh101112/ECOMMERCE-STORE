import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <h1>Admin Panel</h1>
        <NavLink to="" className="list-group">
  <NavLink to="/dashboard/admin/" className="list-group-item">Admin Panel</NavLink>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item">Create category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item">Create product</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item">Users</NavLink>
</NavLink>

    </>
  )
}

export default AdminMenu