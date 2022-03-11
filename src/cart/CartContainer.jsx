import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './Context'

const CartContainer = () => {
    const { cart,total,clearCart } = useGlobalContext()
    if(cart.length === 0){
        return(
            <div className="container text-center">
                <header>
                    <h3>Your bag</h3>
                    <h4 className="empty-cart">Cart is empty</h4>
                </header>
            </div>
        )
    }
    return (
        <div className="container text-center">
            <header>
                <h2>Your bag</h2>
            </header>
            <div>
                {cart.map((item)=>{
                    return(
                        <CartItem key={item.id} {...item}  />
                    )
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total container">
                    <h4>total <span>{total}</span></h4>
                </div>
                <button className="btn btn-primary" onClick={clearCart}>
                    Clear cart
                </button>
            </footer>
        </div>
    )
}

export default CartContainer
