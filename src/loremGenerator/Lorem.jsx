import React, { useState } from 'react'
import text from './loremdata'

const Lorem = () => {
    const [count,setCount] = useState(0)
    const [texts,setTexts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        let amount = parseInt(count)
        if(count <= 0){
            amount = 1
        }
        if(count > 8){
            amount = 8
        }
        setTexts(text.slice(0,amount))
    }
    
    return (
        <>
       <div className="container text-center">
           <h3 className="display-2">Lorem</h3>
           <form onSubmit={handleSubmit}>
               <input type="number" className="form-control" value={count} onChange={(e)=>setCount(e.target.value)} />
               <button type="submit" className="btn btn-primary mt-3">Generator</button>
           </form>

           {texts.map((item,index)=>{
               return(
                   <p key={index}>{item}</p>
               )
           })}
       </div>

       </>
    )
}

export default Lorem
