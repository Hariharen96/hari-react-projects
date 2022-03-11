import React from 'react'

const MenuItems = ({data}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    {data.map((item)=>{
                        const { id,title,img,desc,price } = item
                        return(
                            <div className="card" key={id}>
                                <img src={img} alt={title} className="img-fluid w-50" />
                                <div className="card-body">
                                    <h3 className="card-title">{title}</h3>
                                    <p className="card-text">{desc}</p>
                                    <p className="card-text">{price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MenuItems
