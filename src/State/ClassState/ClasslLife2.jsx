import React, { Component } from 'react'

class ClasslLife2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMouse = (e) => {
        this.setState({x: e.clientX, y: e.clientY})
    }

    componentDidMount(){
        console.log("did mount")
        window.addEventListener('mousemove',this.logMouse)
    }

    componentDidUpdate = (prevState,e) =>{
        // if(prevState.x !== this.state.x && prevState.y !== this.state.y ){
        //     console.log('updated x')
        //     this.setState({x: e.clientX, y: e.clientY})
        // }
        console.log('updated')
    }

    componentWillUnmount(){
        console.log('cleaned class')
        window.removeEventListener('mousemove',this.logMouse)
    }
    render() {
        return (
            <div>
                {this.state.x} :
                {this.state.y}
            </div>
        )
    }
}

export default ClasslLife2
