import React from 'react'
import AnimalImg from '../Images/animals.png'
import Pulse from 'react-reveal/Pulse';
import '../Styles/Animals.css'

export default function Animals() {
    return (
<div id="Animals-container">
           <Pulse delay={3500}><img id="Animals-image"src={AnimalImg} alt="house"/> </Pulse>
           <div id="Animals-text">
           <h3 id="Animals-text-h3">estimated</h3>
                <h1 id="Animals-text-h1">1 billion</h1>
                <h3 id="Animals-text-h3">Animals Killed</h3>
            </div>
        </div>
    )
}
