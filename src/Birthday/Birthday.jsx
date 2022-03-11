import React, { useState } from 'react'
import Data from './Data'
import List from './List'

const Birthday = () => {
    const [people,setPeople] = useState(Data) 
    return (
        <section className="contaner text-center bg-white mx-50 mt-5">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className="btn btn-primary" onClick={()=>setPeople([])}>clear</button>    
        </section>
    )
}

export default Birthday
