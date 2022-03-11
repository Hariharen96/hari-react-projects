import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {
                people.map((peoples)=>{
                   const { id,name,age } = peoples
                    return(
                        <div className="card w-50 d-block mx-auto" key={id}>
                            <div className="card-body">
                                <div className="card-title">
                                    {name}
                                </div>
                                <div className="card-text">{age}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
