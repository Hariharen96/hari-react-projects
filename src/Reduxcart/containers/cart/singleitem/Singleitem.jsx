import React from 'react'
import { connect } from 'react-redux'
import { addtocart } from '../../../Redux/shopping/shoppingactions'

const Singleitem = ({currentitem,addtocart}) => {
    return (
        <div className="container m-3">
        <div className="card w-50">
            <img src={currentitem.image} alt={currentitem.title} className="img-fluid w-auto" width="200px" height="150px" />
            <div className="card-body">
                <h5 className="card-title">{currentitem.title}</h5>
                <p className="card-subtitle">{currentitem.description}</p>
                <p className="card-text">$ {currentitem.price}</p>
                <button className="btn btn-outline-danger m-3" onClick={()=>addtocart(currentitem.id)}>Add to cart</button>
            </div>
        </div>
    </div>
    )
}


const mapStateToProps = (state) => {
    return{
        currentitem: state.shop.currentitem
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addtocart: (id) => dispatch(addtocart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Singleitem)
