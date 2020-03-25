import React from 'react'
import KoalaImg from '../Images/koala1.png'
import KoalaImg2 from '../Images/koala2.png'
import '../Styles/KoalaSection.css'


export default function KoalaSection() {
    return (
        <div id="KoalaSection-container">
            <section id="KoalaSection-image-container">
                <img id="KoalaSection-image-1" src={KoalaImg} alt="koala-1" />
                <img id="KoalaSection-image-2" src={KoalaImg2} alt="koala-2" />
            </section>

            <section id="KoalaSection-text">
                <h3 id="Koala-text"> An estimated 30% of the Koala population perished.</h3>
            </section>

        </div>
    )
}
