import React, { useState } from 'react'


const Usestate = () => {
    const [name,setName] = useState("hari")
    const [flag,setFlag] = useState(false)
    const [number,setNumber] = useState(0)
    const [names,setNames] = useState([])
    const [fname,setfName] = useState({firstName: '' , lastName: ''})
    const [itemsarr,setItemsarr] = useState([])

    const changeName = () => {
        setName("hariharen")
        setFlag(!flag)
    }

    const increment = () => {
        setNumber(prevState => prevState + 1)
    }
    const decrement = () => {
        setNumber(prevState => prevState - 1)
    }
    const reset = () => {
        setNumber(0)
    }

    const addForm = (e) => {
        e.preventDefault()
        setNames([...names, { id: names.length, name }])
        setName('')
        console.log(names)
    }
    const addItem = () => {
        setItemsarr([...itemsarr, {
            id: itemsarr.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    
    return(
        <div>
            <h1>Hello {flag ? name : ''}</h1>
            <button onClick={changeName}>Change</button>
            <br />
            <h1>{number}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <br />
            <form onSubmit={addForm}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <br /><br />
            <ul>
                {names.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <br /><br />
            <input type="text" value={fname.firstName} onChange={(e)=> setfName({ ...fname,
                firstName: e.target.value})} />
            <input type="text" value={fname.lastName} onChange={(e)=>setfName({...fname, lastName: e.target.value})} />
            <h1>firstName = {fname.firstName}</h1>
            <h1>lastName = {fname.lastName}</h1>
            {JSON.stringify(fname)}
            <br /><br />
            <button onClick={addItem}>Add</button>
            <ul>
            {itemsarr.map((items)=>(
                <li key={items.id}>{items.value}</li>
            ))}
            </ul>
        </div>
    )
}

export default Usestate