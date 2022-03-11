import React, { useEffect, useState } from 'react'
import './slider.css'
import data from './sliderdata'

const Slider = () => {
    const [people,setPeople] = useState(data)
    const [index,setIndex] = useState(0)

    useEffect(()=>{
        const lastIndex = data.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[index,people])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        },3000)
        return () => {
            clearInterval(slider)
        }
    },[index])
    return (
        <section className="section">
            <div className="title">
                <h2><span>Reviews</span></h2>
            </div>
            <div className="section-center">
                {data.map((person,personIndex)=>{
                    const { id,image,name,title,quote } = person
                    console.log(personIndex)
                    let position = 'nextSlide'
                    if(personIndex === index){
                        position = 'activeSlide';
                    }
                    if(personIndex === index-1 || (index === 0 && personIndex === data.length - 1)){
                        position = 'lastSlide';
                    }
                    return(
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                        </article>
                    )
                })}
                <button className="prev" onClick={()=>setIndex(index - 1)}>
                    prev
                </button>
                <button className="next" onClick={()=>setIndex(index + 1)}>
                    next
                </button>
            </div>
        </section>
    )
}

export default Slider
