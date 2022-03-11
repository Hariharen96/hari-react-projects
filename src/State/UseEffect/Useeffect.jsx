import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [time,setTime] = useState(new Date().toString())
    const [message,setMessage] = useState("funcional component")

    useEffect(()=>{
        console.log('updated')
        const interval = setInterval(showData,1000)

        return () => {
            console.log('cleaned')
            clearInterval(interval)
        }
    },[time])

    const showData = () => {
        setTime(new Date().toString()) 
    }
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={showData}>Show Data</button>
            <h1>{message}</h1>
            <button onClick={()=>setMessage("changeed funct comp")}>Chnage</button>
        </div>
    )
}

export default Useeffect
