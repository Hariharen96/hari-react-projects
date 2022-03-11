import React, { useState } from 'react'

const Tour = ({id,title,info,image,removeTour}) => {
    const [ readMore,setReadMore ] = useState(false)
    return (
        <div className="card">
            <img src={image} alt="" className="img-fluid img-thumbnail w-50 d-block mx-auto" />
            <div className="card-body">
                <div className="card-title">{title}</div>
                <p className="card-text">
                {readMore ? info : `${info.substring(0,80)}`}
                </p>
                <button onClick={()=>setReadMore(!readMore)} className="btn btn-none">
                    {readMore ? "show-less" : "read-more"}
                </button>
                <button onClick={()=>removeTour(id)} className="btn btn-primary d-block mx-auto">Delete Tour</button>
            </div>
        </div>
    )
}

export default Tour
