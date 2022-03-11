import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseeffectData = () => {
    const [posts,setPosts] = useState({})
    const [id,setId] = useState(1)
    const [buttonClick,setbuttonClick] = useState(1)

    const handleClick = () => {
        setbuttonClick(id)
    }
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[buttonClick])
    return (
        <div>
            <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={handleClick} type="button">CLick</button>
            {posts.title}
            {/* <ul>
                {
                    posts.map((post)=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }

            </ul>
             */}
        </div>
    )
}

export default UseeffectData
