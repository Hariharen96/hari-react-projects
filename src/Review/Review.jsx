import React, { useState } from 'react'
import ReviewData from './ReviewData'

const Review = () => {
    const [index,setIndex] = useState(0)
    const { name,job,image } = ReviewData[index]
    console.log(ReviewData)

    const checkNumber = (number) => {
        if(number > ReviewData.length - 1){
            return 0;
        }
        if(number < 0){
            return ReviewData.length - 1
        }
        return number
    }

    const prevIndex = () => {
        setIndex((index)=>{
            let newIndex = index - 1
            return checkNumber(newIndex)
        })
    }

    const nextIndex = () => {
        setIndex((index)=>{
            let newIndex = index + 1
            return checkNumber(newIndex)
        })
    }
    return (
        <div className="card">
            <img src={image} alt="" className="img-fluid w-50 d-block mx-auto" />
            <div className="card-body">
                <div className="card-title text-center">{name}</div>
                <div className="card-text text-center">{job}</div>
            </div>
            <span>
                <button className="d-block mx-auto btn btn-primary" onClick={prevIndex}>back</button>
                <button className="d-block mx-auto btn btn-secondary" onClick={nextIndex}>next</button>
                
            </span>
        </div>
    )
}

export default Review
