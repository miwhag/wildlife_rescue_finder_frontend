import React, { Component } from 'react'
import Popup from './Popup'
import '../Styles/Card.css'

export default class ConservationCard extends Component {

    state = {
        showPopup: false
    }

    togglePopup = () => this.setState({showPopup: !this.state.showPopup})

    render() {
        const { name, image } = this.props.conservation

        return (
            <div id="card-container">
               <img className="Card-image" src={image} alt={name} onClick={this.togglePopup}/>
               {this.state.showPopup ? 
               <Popup 
                conservation={this.props.conservation}
                closePopup={this.togglePopup}
            />
            : null
            }
            </div>
        )
    }
}