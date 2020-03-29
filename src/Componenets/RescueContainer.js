import React, { Component } from 'react'
import RescueCard from './RescueCard'
import '../Styles/RescueContainer.css'


export default class RescueContainer extends Component {

   displayRescues = () => this.props.rescues.map(rescue => <RescueCard rescue={rescue} key={rescue.id}/>)

    render() {
        return (
            <div id="RescueContainer-container">
               <img id="Rescue-icon" src="https://i.ibb.co/w7G3ftw/rescue.png" alt="rescue" />
            <div id="RescueContainer-card-container">
                {this.displayRescues()}
            </div>
            </div>
        )
    }
}
