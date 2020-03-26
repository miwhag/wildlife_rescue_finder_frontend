import React, { Component } from 'react'
import ConservationContainer from '../ConservationContainer'

export default class LocationsPage extends Component {
    
    state = {
        conservations: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/conservations')
        .then(response => response.json())
        .then(result => this.setState({conservations: result}))
    }


    render(){
        return (
            <div>
                <ConservationContainer conservations={this.state.conservations}/>
            </div>
        )
    }
}
