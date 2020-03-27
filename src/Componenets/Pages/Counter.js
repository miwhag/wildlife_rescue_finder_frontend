import React, { Component } from 'react'
import CountUp from 'react-countup';


export default class Counter extends Component {



    render() {

        return (
            <CountUp start={0} end={46000000} delay={0}>
            {({ countUpRef }) => (
                <div>
                <span ref={countUpRef} />
                </div>
            )}
            </CountUp>
        )
    }
}

