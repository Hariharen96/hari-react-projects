import React, { useEffect, useState } from 'react'

const Useeffect1 = () => {
    const [count,setCount] = useState(0)
    const [messsage,setMessage] = useState('hari')
    useEffect(()=>{
        document.title = `${count} times`
        console.log('updated')
    },[count,messsage])
    return (
        <div>
            <input type="text" value={messsage} onChange={(e)=> setMessage(e.target.value)} />
            <button onClick={()=>setCount(count + 1)}>clicked {count} times </button>
        </div>
    )
}

export default Useeffect1
