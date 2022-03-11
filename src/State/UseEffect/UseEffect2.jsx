import React, { useEffect, useState } from 'react'

const useEffect2 = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMouse = (e) => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('updated')
        window.addEventListener('mousemove',logMouse)

        return () => {
            console.log('cleaned')
            window.removeEventListener('mousemove',logMouse)
        }
    },[])
    return (
        <div>
            {x} : {y}
        </div>
    )
}

export default useEffect2
