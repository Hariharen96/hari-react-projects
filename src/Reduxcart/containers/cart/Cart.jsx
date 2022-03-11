import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Cartitems from './cartitems/Cartitems'

const Cart = ({cart}) => {
    const [totalItem,setTotalItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        let items = 0
        let price = 0
        cart.forEach((item)=>{
            items += item.qty
            price += item.qty * item.price            
        })

        setTotalPrice(price)
        setTotalItems(items)
    },[cart,totalItem,totalPrice,setTotalItems,setTotalPrice])
    return (
        <div className="container">    
                {cart.map((item)=>(
                    <Cartitems key={item.id} itemData={item} />
                ))}
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">card summary</h3>
                    <h5 className="card-text">
                        <span>Total: ({totalItem} items)</span>
                        <span>$ {totalPrice}</span>
                    </h5>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)
