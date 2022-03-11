import React from 'react'
import './cartstyle.css'
import { useGlobalContext } from './Context'

const CartItem = ({ id,title,price,img,amount }) => {
    const { removeItem,increase,decrease } = useGlobalContext()
    return (
        <div className="shopping-cart">
            <div className="box">
                <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
            </div>
            <div className="box"> 
                <img src={img} alt={title} />
                <div className="content">
                    <h4>{title}</h4>
                    <p>{price}</p>
                </div>
            </div>
            <div className="box">
                <button className="fas fa-arrow-up" onClick={()=>increase(id)}></button>
                <p>{amount}</p>
                <button className="fas fa-arrow-down" onClick={()=>decrease(id)}></button>
            </div>
        </div>
    )
}

export default CartItem
