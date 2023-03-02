import React, { useState } from 'react'
import './ali.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem, faGrin, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons'
const Alixm = () => {
    const [conutee, Setconutee] = useState(false)
  return (
   <div className="back">
    <ScrollTrigger onEnter={() => Setconutee(true)} onExit={() => Setconutee(false)}>
            <div className="container">
             <div className="row">
                <div className="col-md-3">
                    <div className="coy">
                        <div className="iconts">
                            <FontAwesomeIcon icon={faGem}/>
                        </div>
                        <div className="incrment">
                        {conutee && <CountUp start={0} end={256} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="deskrbsin ">
                        <h6>Premium Clients</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="coy">
                        <div className="iconts">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="incrment">
                        {conutee && <CountUp start={0} end={36} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="deskrbsin ">
                        <h6>Professional Chefs</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="coy">
                        <div className="iconts">
                            <FontAwesomeIcon icon={faTrophy}/>
                        </div>
                        <div className="incrment">
                        {conutee && <CountUp start={0} end={753} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="deskrbsin ">
                        <h6>Winning Awards</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="coy">
                        <div className="iconts">
                            <FontAwesomeIcon icon={faGrin}/>
                        </div>
                        <div className="incrment">
                        {conutee && <CountUp start={0} end={100} duration={2} delay={0} />}
                                +
                        </div>
                        <div className="deskrbsin ">
                        <h6>5 Star Reviews</h6>
                            <p>Sed ut perspiciatis unde</p>
                        </div>
                    </div>
                </div>
             </div>
            </div>
            </ScrollTrigger>
   </div>
  )
}

export default Alixm