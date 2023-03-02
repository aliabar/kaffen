import React, { useState } from 'react'
import './scrol.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Scrlo = () => {
    const [conutee, Setconutee] = useState(false)
    return (
        <div className="nbc">

 <ScrollTrigger onEnter={() => Setconutee(true)} onExit={() => Setconutee(false)}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex mht">
                        <div className="rowe">
                                {conutee && <CountUp start={0} end={256} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="csl">
                            <h6>Premium Clients</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mht">
                        <div className="rowe">
                                {conutee && <CountUp start={0} end={362} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="csl">
                            <h6>Expert Members</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex mht">
                        <div className="rowe">
                                {conutee && <CountUp start={0} end={722} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="csl">
                            <h6>Winning Awards</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollTrigger>
        </div>
    )
}

export default Scrlo