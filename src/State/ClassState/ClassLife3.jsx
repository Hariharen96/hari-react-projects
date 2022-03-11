import React, { Component } from 'react'

class ClassLife3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.countTime,1000)
    }

    countTime = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    clear = () => {
        clearInterval(this.interval)
    }

    componentWillUnmount(){
        console.log("tick cleared")
        this.clear()
    }
    
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.clear}>clear</button>
            </div>
        )
    }
}

export default ClassLife3
