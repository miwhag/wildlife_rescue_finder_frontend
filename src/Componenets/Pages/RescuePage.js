import React, { Component } from 'react'
import RescueContainer from '../RescueContainer'

export default class RescuePage extends Component {
    
    state = {
        rescues: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/conservations')
        .then(response => response.json())
        .then(result => this.setState({rescues: result}))
    }


    render(){
        return (
            <div>
                <RescueContainer rescues={this.state.rescues}/>
            </div>
        )
    }
}
