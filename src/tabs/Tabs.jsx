import React, { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'


const Tabs = () => {
    const [loading,setLoading] = useState(true)
    const [jobs,setJobs] = useState([])
    const [values,setValues] = useState(0)

    const fetchJobs = async() => {
        const response = await fetch(url)
        const newJobs = await response.json()
        console.log(newJobs)
        setJobs(newJobs)
        setLoading(false)
    }

    useEffect(()=>{
        fetchJobs()
    },[])

    if(loading){
        return (
            <section className="container">
                <h1>Loading...</h1>
            </section>
        )
    }
    const { company,dates,duties,title } = jobs[values]
    return (
        <div className="container">
            <div className="btn-group">
                {jobs.map((item,index)=>{
                    return(
                        <button key={item.id} onClick={()=>setValues(index)} className="btn btn-primary">{item.company}</button>
                    )
                })}
            </div>
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{company}</p>
                    <p className="card-text">{dates}</p>
                    {duties.map((duty,index)=>{
                        return(
                            <ul key={index}>
                                <li>{duty}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tabs
