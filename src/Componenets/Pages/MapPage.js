import React from 'react'
import Map from '../Map'
import Bushfire from '../../Images/bushfire.png'
import '../../Styles/Map.css'

export default function MapPage() {
    return (
    <div id="MapPage-container">
        <img id="Map-logo-image" src={Bushfire} alt="bushfire" />
        <Map />
    </div>
  
    )
}
