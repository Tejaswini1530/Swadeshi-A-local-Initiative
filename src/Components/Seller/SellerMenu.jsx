import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Layout/Layout'

const SellerMenu = () => {
  return (

    <div><h1>SellerMenu</h1>
    <ul className="list-group mt-3">
                <NavLink to="/dashboard/Seller/Profile" className="list-group-item active" aria-current="true">View Profile</NavLink>
                <NavLink to="/dashboard/Seller/Products" className="list-group-item"> Products</NavLink>
                <NavLink to="/dashboard/Seller/addproduct" className="list-group-item">Add Products </NavLink>
                <NavLink to="/dashboard/Seller/orders" className="list-group-item">Orders</NavLink>
            </ul>
    </div>

  )

}

export default SellerMenu