import React from 'react'
import './cbuten.css'
import { Link } from 'react-router-dom';
const Cbuten = ({ fittresin, loopop }) => {
  const onsher = (crs) => {
    fittresin(crs)

  }
  return (
    <div>
      <div className="contanier ytr">
        <div className="row">
          <div className="col-md-12 gh">
            {
              loopop.length >= 1 ? (loopop.map((i) => {
                return (

                  <Link key={i} className='btr ' onClick={() => onsher(i)}>{i}</Link>

                )
              })) : <h1>jhjhjhjhhjjkj</h1>

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cbuten