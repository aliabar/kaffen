import { faCalendar, faComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import './pert.css'
import img1 from '../../imessre/latest_blog1-900x600.jpg'
import img2 from '../../imessre/latest_blog2-900x600.jpg'
import img3 from '../../imessre/latest_blog3-900x600.jpg'
import { Button } from 'react-bootstrap'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
const Pert = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="counyt">
            <div className="container">
                <div className="titel mb-5">
                    <span data-aos="fade-up">GET EVERY SINGLE UPDATE</span>
                    <h4 data-aos="fade-up">Read Some Latest Blog & News</h4>
                </div>
                <div className="row">
                    <div className="col-md-4 cvro">
                        <img src={img1} alt="" />
                        <div className="titelimg">
                            <h5>SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                            <div className="titilsp d-flex">
                                <div className="iconspan">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    March 26, 2022
                                </div>
                                <div className="iconspan ms-4">
                                    <FontAwesomeIcon icon={faComment} />
                                    Comments  (0)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cvro">
                        <img src={img2} alt="" />
                        <div className="titelimg">
                            <h5>Decisions For Building Flexible Components DevTools Browser</h5>
                            <div className="titilsp d-flex">
                                <div className="iconspan">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    March 26, 2022
                                </div>
                                <div className="iconspan ms-4">
                                    <FontAwesomeIcon icon={faComment} />
                                    Comments  (0)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cvro">
                        <img src={img3} alt="" />
                        <div className="titelimg">
                            <h5>SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                            <div className="titilsp d-flex">
                                <div className="iconspan">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    March 26, 2022
                                </div>
                                <div className="iconspan ms-4">
                                    <FontAwesomeIcon icon={faComment} />
                                    Comments  (0)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bgr">
                <Button className="btu"><span>view all</span> <FontAwesomeIcon icon={faChevronRight}/></Button>
            </div>
            </div>
        </div>
    )
}

export default Pert