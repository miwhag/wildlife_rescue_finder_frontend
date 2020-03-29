import React from 'react'
import '../Styles/KoalaSection.css'
import Fade from 'react-reveal/Fade'

export default function KoalaSection() {
    return (
   
        <div id="KoalaSection-container">
            <section id="KoalaSection-image-container">
                <Fade left delay={1200}><img id="KoalaSection-image" src="https://i.ibb.co/qjWVxpv/koalasection.png" alt="koala-2" /> </Fade> 
            </section>

            <section id="KoalaSection-text">
                <Fade right delay={1200}><h3 id="Koala-text"> An estimated 30% of the Koala population perished.</h3></Fade>
            </section>
        </div>

    )
}
