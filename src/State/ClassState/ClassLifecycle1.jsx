import React, { Component } from 'react'

class ClassLifecycle1 extends Component {
    constructor(props){
        super(props)
        this.state= {
            count : 0,
            sname: ''
        }
    }

    componentDidMount(){
        console.log('did mount')
        document.title = `${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log('did update')
            document.title = `${this.state.count} times`
        }
    }

    changeMe = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <input type ="text" value={this.state.sname} onChange={(e)=>{this.setState({sname: e.target.value})}} />
                <button onClick = {()=>this.setState({ count: this.state.count + 1 })}>Clicked {this.state.count} times</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.changeMe}>Click</button>
            </div>
        )
    }
}

export default ClassLifecycle1
