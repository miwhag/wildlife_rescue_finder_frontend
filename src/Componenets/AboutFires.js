import React from 'react'
import Fade from 'react-reveal/Fade';
import '../Styles/AboutFires.css'


export default function AboutFires() {
    return (
      <div>
          <div className="AboutFire-container">
                <section className="AboutFire-main-text">
                    <h1 id="AboutFire-main-text-h1">The 2019–20 Australian bushfire season</h1>
                    <h4 id="AboutFire-sub-text"> It began with several serious uncontrolled fires in June of 2019, which caused severe devestation across the country.</h4>
                    <div className="line-break"></div>
                    <Fade top><h4 id="AboutFire-segway">During those 10 months</h4></Fade>
                </section>
            </div>
      </div>

    )
}
