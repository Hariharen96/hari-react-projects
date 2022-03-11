import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addtocart, loadcurrentitem } from '../../../Redux/shopping/shoppingactions'

const Product = ({productDetail,addToCart,loadcurrentitem}) => {
    return (
        <div className="container m-3">
            <div className="card w-50">
                <img src={productDetail.image} alt={productDetail.title} className="img-fluid w-auto" width="200px" height="150px" />
                <div className="card-body">
                    <h5 className="card-title">{productDetail.title}</h5>
                    <p className="card-subtitle">{productDetail.description}</p>
                    <p className="card-text">$ {productDetail.price}</p>
                    <Link to={`/product/${productDetail.id}`}>
                    <button onClick={()=>loadcurrentitem(productDetail)} className="btn btn-outline-danger m-3">View item</button>
                    </Link>
                    <button className="btn btn-outline-danger m-3" onClick={()=>addToCart(productDetail.id)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart : (id) => dispatch(addtocart(id)),
        loadcurrentitem: (item) => dispatch(loadcurrentitem(item))
    }
}

export default connect(null,mapDispatchToProps)(Product)
