import React, { useReducer, useState } from 'react'

const initialState = [
    {
        id: Date.now(),
        name: "hari",
        email: "hari@gmail.com"
    }
]

const reducer = (state,action) => {
    switch(action.type){
        case 'add':
            return [ ...state,action.payload ]
        case 'delete':
            return state.filter((contact)=>{
                return contact.id !== action.payload.id
            })
        default:
            throw new Error()
    }
}


const Reducer1 = () => {
    const [state,dispatch] = useReducer(reducer, initialState)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const addContact = (e) => {
        e.preventDefault()
        const contact = {
            id: Date.now(),
            name : name,
            email : email,
        };
        setName('')
        setEmail('')
        dispatch({type: 'add',payload: contact})
    }
    
    return (
        <div>
            <form onSubmit={addContact}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button>Add</button>
            </form>

            <div>
                <ul>
                {state.map((contact)=>{
                    return (
                        <li key={contact.id}>
                            <h2>{contact.name}</h2>
                            <h2>{contact.email}</h2>
                            <button onClick={()=> dispatch({type: 'delete',payload: {id: contact.id}})}>delete</button>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>

    )
}

export default Reducer1
