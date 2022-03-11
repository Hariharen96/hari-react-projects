import React, { useEffect, useState } from 'react'

const UseEffect3 = () => {
    const [time,setTime] = useState(0)

    useEffect(()=>{
        console.log('time updated')
        const interval = setInterval(tick,1000)

        return () => {
            clearInterval(interval)
        }
    },[time])

   const tick = () => {
        setTime(time + 1)
    }
    return (
        <div>
            {time}
        </div>
    )
}

export default UseEffect3
