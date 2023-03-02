import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import './scrol.css'

const Skrol = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
  return (
    <div>
        <div className="sectin">
            <div className="container">
                <div className="row mbv">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 mk">
                        <span data-aos="fade-up" >Booking Table For Your & Family Members</span>
                        <h3 data-aos="fade-up" className="my-2"> Need a Table On Coffee House</h3>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 align-self-center align-right bde ms-auto">
                        <Button data-aos="fade-up"><span>BOOKING TABLE</span> <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skrol