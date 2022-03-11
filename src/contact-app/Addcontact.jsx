import React, { Component } from 'react'
import './AddcontactStyle.css'

class Addcontact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: ''
        }
    }
    add = (e) => {
        e.preventDefault()
        if(this.state.name === '' || this.state.email === ''){
            alert('Enter your data')
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({ name: '', email: '' })
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div className="add_contact">
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <div className="form-group w-50 m-3">
                        <input type="text" placeholder="enter text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} />
                    </div>
                    <div className="form-group w-50 m-3">
                        <input type="text" placeholder="enter email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
                    </div>
                    <button className="btn btn-primary d-block ">Add</button>
                </form>
            </div>
        )
    }
}

export default Addcontact
