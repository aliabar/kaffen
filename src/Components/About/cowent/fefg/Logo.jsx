import React from 'react'
import './logo.css'
import img1 from '../../../../imessre/brand1.png'
import img2 from '../../../../imessre/brand2.png'
import img3 from '../../../../imessre/brand3.png'
import img4 from '../../../../imessre/brand4.png'
import img5 from '../../../../imessre/brand5.png'
import img6 from '../../../../imessre/brand6.png'
const Logo = () => {
    return (
        <div className="cxhgfd">
            <div className="container py-4">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2  wit">
                        <img src={img1} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 wit">
                        <img src={img2} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 wit">
                        <img src={img3} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 wit">
                        <img src={img4} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 wit">
                        <img src={img5} alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2 wit">
                        <img src={img6} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Logo