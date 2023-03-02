import React from 'react'
import Cbuten from '../xcd/Cbuten'

const Crdshe = ({ crd, fittresin, loopop }) => {

    return (
        <div>
            <section className="czcz">
                <div className="container">
                    <div className="cover">
                        <div className="df">
                            <p >CHOOSE BEST COFFEE</p>
                            <h3 >Popular Coffee Menu</h3>
                        </div>
                        <Cbuten fittresin={fittresin} loopop={loopop}/>
                        <div>
                        </div>
                        <div className="my">
                            <div className="row">
                                {crd.length >= 1 ? (crd.map((red) => {
                                    return (
                                        <div className="col-md-6 col-sm-6 opst mb-5" key={red.id}>
                                            <div className="row wtr">
                                                <div className="col-md-5 col-sm-5" >
                                                    <img src={red.img} alt="" />
                                                </div>
                                                <div className="col-md-7 col-sm-7">
                                                    <div className="imgri my-4">
                                                        <h4 >{red.tit}</h4>
                                                        <p>2/3 espresso, 1/3 streamed milk</p>
                                                        <div className="prs">
                                                            <div className="cxzaq" ></div>
                                                            <p >{red.pres}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })) : <h3>kkjjuj</h3>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Crdshe;