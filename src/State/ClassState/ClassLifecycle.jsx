import React, { Component } from 'react'

class ClassLifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Class component",
             time: new Date().toString()
        }
    }
    
    componentDidMount(){
        console.log("I am from did mount")
        this.interval = setInterval(this.showDate,1000)
    }

    componentDidUpdate(){
        console.log('I am from update')
    }
    componentWillUnmount(){
        console.log('I am unmount')
        clearInterval(this.interval)
    }

    showDate = () => {
        this.setState({
            time: new Date().toString()
        })
    }
    render() {
        return (
            <div>
                {this.state.message}
                {this.state.time}
            </div>
        )
    }
}

export default ClassLifecycle
