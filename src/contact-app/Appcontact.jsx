import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { uuid } from 'uuidv4'
import Addcontact from './Addcontact'
import ContactDetail from './ContactDetail'
import ContactList from './ContactList'
import Header from './Header'

const Appcontact = () => {
    const [contacts,setContacts] = useState([])
    const [searchTerm,setSearchterm] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const LOCAL_KEY = '/contacts'
    const addContactHandler = async(contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }])
    }

    const removeContact = async (id) => {
        const newContactList = contacts.filter((contact)=>{
            return (
                contact.id !== id
            )
        })
        setContacts(newContactList)
    }

    const searchHandler = (searchTerm) => {
        setSearchterm(searchTerm)
        if(searchTerm !== ""){
            const newSearchTerm = contacts.filter((contact)=>{
                console.log(Object.values(contact))
                return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase())
            })
            setSearchResults(newSearchTerm)
        }else{
            setSearchResults(contacts)
        }
    }


    useEffect(()=>{
        const getContacts = JSON.parse(localStorage.getItem(LOCAL_KEY))
        if(getContacts) setContacts(getContacts)
    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_KEY,JSON.stringify(contacts));
    },[contacts])
    return (
        <div>
            <Router>
            <Header />
            <Switch>
                <Route path="/add" exact render={(props)=> <Addcontact {...props} addContactHandler={addContactHandler} />} />
                <Route path="/" exact render={(props) => <ContactList {...props} contact={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContact} term={searchTerm} searchKeyword={searchHandler} />} />
                <Route path="/contacts/:id" component={ContactDetail} />
            </Switch>
            </Router>
        </div>
    )
}

export default Appcontact
