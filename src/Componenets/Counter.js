import React, { Component } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import '../Styles/Counter.css'
import Tree from '../Images/tree.png'
import Fade from 'react-reveal/Fade';


export default class Counter extends Component {

    render() {

        return (
            <div id="Counter-main-container">
                  <Fade bottom><img id="Counter-tree-image" src={Tree} alt="tree"/></Fade> 
                <div id="Counter-container">
                    <CountUp end={46000000} redraw={true} seperator="," duration={3}>
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span id="Counter-number" ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h1 id="Counter-sub-text">ACRES LOST</h1>
                </div>
        </div>
        )
    }
}

