import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adjustqty, deletefromcart } from '../../../Redux/shopping/shoppingactions'

const Cartitems = ({itemData,deletefromcart,adjustqty}) => {
    const [input,setInput] = useState(itemData.qty)

    const handleChange = (e) => {
        setInput(e.target.value)
        adjustqty(itemData.id,e.target.value)
    }
    return (
        <div className="container m-3">
            <div className="card w-50">
                <img src={itemData.image} alt={itemData.title} className="img-fluid w-auto" width="200px" height="150px" />
                <div className="card-body">
                    <h5 className="card-title">{itemData.title}</h5>
                    <p className="card-subtitle">{itemData.description}</p>
                    <p className="card-text">$ {itemData.price}</p>
                    <label htmlFor="qty">Qty</label>
                    <input type="number" min="1" name="qty" value={input} onChange={handleChange} id="qty" />
                    <i className="fas fa-trash" onClick={()=>deletefromcart(itemData.id)}></i>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
    deletefromcart: (id) => dispatch(deletefromcart(id)), 
    adjustqty: (id,value) => dispatch(adjustqty(id,value))
    }
}

export default connect(null,mapDispatchToProps)(Cartitems)
