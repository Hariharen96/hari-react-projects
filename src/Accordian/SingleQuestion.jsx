import React, { useState } from 'react'

const SingleQuestion = ({title,info}) => {
    const [showInfo,setShowInfo] = useState(false)
    return (
        <div className="container text-center">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <button className="btn" onClick={()=>setShowInfo(!showInfo)}>
                        {showInfo ? '-' : '+'}
                    </button>
                </div>
                {showInfo && <p>{info}</p>}
            </div>
        </div>
    )
}

export default SingleQuestion
