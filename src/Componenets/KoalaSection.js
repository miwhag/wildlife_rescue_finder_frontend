import React from 'react'
import Koala from '../Images/koalasection.png'
import '../Styles/KoalaSection.css'
import Fade from 'react-reveal/Fade'

export default function KoalaSection() {
    return (
   
        <div id="KoalaSection-container">
            <section id="KoalaSection-image-container">
                 <img id="KoalaSection-image" src={Koala} alt="koala-2" /> 
            </section>

            <section id="KoalaSection-text">
                <Fade right><h3 id="Koala-text"> An estimated 30% of the Koala population perished.</h3></Fade>
            </section>
        </div>

    )
}
