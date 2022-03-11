import React from 'react'
import { Link } from 'react-router-dom'
import './cartstyle.css'
import { useGlobalContext } from './Context'

const Navbar = () => {
    const { amount } = useGlobalContext()
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <Link to="/" className="text-decoration-none fs-3">Cart</Link>
            <i className="fas fa-cart-plus fs-3">{amount}</i>
        </div>
    )
}

export default Navbar
