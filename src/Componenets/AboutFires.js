import React from 'react'
import Fade from 'react-reveal/Fade';
import '../Styles/AboutFires.css'
import Months from '../Images/10months.png'
import Linebreak from '../Componenets/LineBreak'


export default function AboutFires() {
    return (
      <div>
          <div className="AboutFire-container">
                <section className="AboutFire-main-text">
                    <h1 id="AboutFire-main-text-h1">The 2019–20 Australian bushfire season</h1>
                    <h4 id="AboutFire-sub-text"> It began with several serious uncontrolled fires in June of 2019, which caused severe devestation across the country.</h4>
                    <Linebreak />
                    <Fade top><img id="AboutFire-header-image" src={Months} alt="months"/></Fade>
                </section>
            </div>
      </div>

    )
}
