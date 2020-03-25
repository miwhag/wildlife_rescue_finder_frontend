import React from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/NavBar.css'

export default function NavBar() {
    return (
        <div className="NavBar-container">
                <Link className="NavBar-links"to='/'><img className="kangaroo-icon" src="https://i.ibb.co/ypYcXr3/WLR-1.png" alt="kangaroo-icon" /></Link>
            <div className="NavBar-links-container">
                <Link className="NavBar-links"to='/about'>About</Link>
                <Link className="NavBar-links"to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

