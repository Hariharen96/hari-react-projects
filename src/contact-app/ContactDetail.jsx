import React from 'react'
import { Link } from 'react-router-dom'
import User from '../user.png'

const ContactDetail = (props) => {
    console.log(props)
    const { name,email } = props.location.state.contact
    return (
        <div>
            <img src={User} alt="" />
            <h3>{name}</h3>
            <p>{email}</p>
            <Link to="/">
            <button>Back to home</button>
            </Link>
        </div>
    )
}

export default ContactDetail
