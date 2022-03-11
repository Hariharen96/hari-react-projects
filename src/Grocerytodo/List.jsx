import React from 'react'

const List = ({ list, removeItem, edit }) => {
    return (
        <div className="container text-start">
            {list.map((lists) => {
                const { id, title } = lists
                return (
                    <>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <div key={id}>
                                <p>{title.toUpperCase()}</p>
                            </div>
                            <div className='mt-2'>
                                <button className="btn btn-secondary m-3" onClick={() => edit(id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => removeItem(id)}>remove</button>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default List
