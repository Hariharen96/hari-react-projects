import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Contactcard from './Contactcard'
import './ContactlistStyle.css'

const ContactList = (props) => {
    const inputEl = useRef("")
    
    const deleteContactList = (id) => {
        props.getContactId(id)
    }
    const renderContacts = props.contact.map((contacts)=>{
        return(
            <Contactcard contacts={contacts} clickHandler={deleteContactList} key={contacts.id} />
        )
    })
    const getSearchTerm = () => {
        console.log(inputEl)
        props.searchKeyword(inputEl.current.value)
    }
    return(
        <div className="container">
            <h1>Contact List</h1>
            <Link to="/add">
            <button className="btn btn-primary">Add Contact</button>
            </Link>
            <input type="text" ref={inputEl} placeholder="enter text" value={props.term} onChange={getSearchTerm}/>
            {renderContacts}
        </div>
    )
}

export default ContactList