import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = ({cart}) => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        let count = 0
        cart.forEach((item)=>(
            count += item.qty
        ))

        setCount(count)
    },[cart,count])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light navbar-light d-flex justify-content-between align-items-center">
               <div className="container">
                <Link to="/" className="navbar-brand">Cart</Link>
                <Link to="/cart" className="btn btn-outline-dark">Cart {count}</Link>
                </div>
            </nav>
        </>
    )
}


const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar)
