import React from 'react'
import Tour from './Tour'

const Tours = ({tours,removeTour}) => {
    return (
        <div className="container text-center">
            <h1 className="display-4 text-underline">Tours</h1>
            {
                tours.map((tour)=>{
                    return (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    )
                })
            }
        </div>
    )
}

export default Tours
