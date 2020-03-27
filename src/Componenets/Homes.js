import React from 'react'
import '../Styles/Homes.css'
import House from '../Images/house.png'
import Fade from 'react-reveal/Fade';

export default function Homes() {
    return (
        <div id="Homes-container">
            <div id="Homes-text">
                <h1 id="Homes-text-h1">2,779 </h1>
                <h3 id="Homes-text-h3">Homes burned down</h3>
            </div>
           <Fade top><img id="Homes-image"src={House} alt="house"/> </Fade>
        </div>
    )
}
