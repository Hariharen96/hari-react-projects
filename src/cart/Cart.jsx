import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CartContainer from './CartContainer'
import { useGlobalContext } from './Context'
import Navbar from './Navbar'

const Cart = () => {
    const { loading } = useGlobalContext()
    if(loading){
        return(
            <div className="container text-center">
                <h3 className="display-4">Loading...</h3>
            </div>
        )
    }
    return (
        <div>
            <Router>
            <Navbar />
            <CartContainer />
            </Router>
        </div>
    )
}

export default Cart
