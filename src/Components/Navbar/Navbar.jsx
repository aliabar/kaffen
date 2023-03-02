
import { faBars, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import img1 from '../../imessre/logo.png';

function BasicExample() {
  const [Mobile , setMobile] = useState(false)
  return (
    <nav className="navbar fixed-top ">
    <div className="container">
      <Link className="navbar-brand" href="#">
        <img src={img1} alt="" />
      </Link>

      <div className="m-auto" id="">
        <ul className={Mobile ? "xcc": "navbar-nav xc" } onClick={() =>setMobile(false) } >
          <li className="nav-item ">
            <Link className="nav-link " aria-current="page"  to="/">Home</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to="/About">About</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " to="/Menu" >MENU</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link " >PAGES</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link ">BLOG</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">SHOP</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">CONTACTS</Link>
          </li>
        </ul>
      </div> 
      <ul className="icones navbar-nav">
        <li className="nav-item iser">
        <FontAwesomeIcon icon={faShoppingCart}/>
        <span>0</span>
        </li>
       </ul>
        <div className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
     {Mobile ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
  
  </div>
    </div>
  </nav>
  );
}

export default BasicExample;