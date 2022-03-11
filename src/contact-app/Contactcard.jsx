import React from 'react'
import { Link } from 'react-router-dom'
import User from '../user.png'
import './contactcardstyle.css'

const Contactcard = (props) => {
    const { id,name,email  } = props.contacts
    return (
        <div className="box-container">
                <div className="box">
                    <img src={User} alt="" className="image" />
                    <Link to={{pathname: `/contacts/${id}`, state: {contact: props.contacts} }}>
                    <h3 className="text">{name}</h3>
                    <p className="text-small">{email}</p>
                    </Link>
                </div>
                <div className="box">
                    <i className="fas fa-trash" onClick={()=>props.clickHandler(id)}></i>
                </div>
            </div>
    )
}

export default Contactcard
