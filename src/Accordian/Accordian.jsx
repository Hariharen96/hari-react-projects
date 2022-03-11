import React, { useState } from 'react'
import AccordianData from './Accdata'
import SingleQuestion from './SingleQuestion'

const Accordian = () => {
    const [questions,setQuestions] = useState(AccordianData)
    return (
        <div className="container text-center">
            <h1>Questions and answers</h1>
            {questions.map((question)=>{
                return(
                    <SingleQuestion key={question.id} {...question} />
                )
            })}
        </div>
    )
}

export default Accordian
