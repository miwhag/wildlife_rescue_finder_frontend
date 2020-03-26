import React, { Component } from 'react'
import ConservationCard from './ConservationCard'
import '../Styles/ConservationContainer.css'

export default class ConservationContainer extends Component {

   displayConservations = () => this.props.conservations.map(conservation => <ConservationCard conservation={conservation} key={conservation.id}/>)

    render() {
        return (
            <div id="ConservationContainer-container">
                {this.displayConservations()}
            </div>
        )
    }
}
