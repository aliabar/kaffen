import React, { useState } from 'react'
import Cersolmenuo from './cresul/Caskgufg'
import Crdshe from '../Menu/cardShers/Crdshe'

import { item } from '../../Detes'
import Logo from '../About/cowent/fefg/Logo'
import Footer from '../footer/Footer'

const Menu = () => {

  const [itemes, setitemes] = useState(item)


// filetr statek
const loopop= ["All" , ...new Set(item.map((u)=>u.sher))]
// fileter date
const fittresin = (cat) =>{
  if(cat ==="All"){
    setitemes(item)
  }else{
   const newarrw = item.filter((i) => i.sher === cat)
   setitemes(newarrw)
  }
}
  return (
    <div>
        <Cersolmenuo/>
        <Crdshe crd={itemes} fittresin={fittresin} loopop={loopop} />
        
        <Logo />
        <Footer/>
    </div>
  )
}

export default Menu