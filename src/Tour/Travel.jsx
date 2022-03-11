import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import TourData from './TourData';
import Tours from './Tours';


const Travel = () => {
    const [tours,setTours] = useState(TourData)

    const removeTour = (id) => {
        const newTours = tours.filter((tour)=>(
            tour.id !== id
        ))
        setTours(newTours)
    }
    if(tours.length === 0){
        return(
            <div className="container text-center">
                <h3>no tours left</h3>
                <button className="btn btn-primary d-block mx-auto" onClick={()=>setTours(tours)}>Refersh</button>
            </div>
        )
    }
    return (
        <div className="container">
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    )
}

export default Travel
