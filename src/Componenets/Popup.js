import React, { Component } from 'react'
import '../Styles/Popup.css'

export default class Popup extends Component {

    render() {
        const { name, address, email, about, link} = this.props.rescue
      return (
        <div className='popup'>
          <div className='popup_inner'>
              <h3>{name}</h3>
              <p><strong>Address: </strong>{address}</p>
              <p><strong>Email: </strong>{email}</p>
              <p><strong>Mission: </strong>{about}</p>
              <p><strong>Website:</strong>
              <a href={link} target="_blank"> {link}</a></p>

          <button id="close-popup-button" onClick={this.props.closePopup}>Close</button>
          </div>
        </div>
      );
    }
  }