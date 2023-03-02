import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './about.css'
import img8 from "../../imessre/about_img2.jpg"
import Aos from 'aos';
import imff from '../../imessre/choose_icon1.png'
import imff1 from '../../imessre/choose_icon2.png'
import img1 from '../../imessre/service_icon1.png'
import img2 from '../../imessre/service_icon2.png'
import img3 from '../../imessre/service_icon3.png'
import img4 from '../../imessre/service_icon4.png'
import Alixm from './cowent/crdest/Alixm';
import Crdas from './cowent/incrmint/Crdas';
import Logo from './cowent/fefg/Logo';
import Footer from '../footer/Footer'
import Eryug from '../Conrn/Eryug';
import Conevs from '../Contswert/Conevs';
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div>
      <div className="opst mb-5">
        <div className="crsel "></div>
        <div className="container  uth">
          <div className="rwr">
            <div className="vdg">
              <h1>About us</h1>
              <div className="tt">
                <Link to="/" >Home</Link> / <span>About</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* sacsin1 */}
      <div className="dsw ">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="mer">
                <span data-aos="fade-up">ABOUT KAFFEN</span>
                <h3 data-aos="fade-up">New London Coffee Founded For Extraordinary Test</h3>
                <p data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis</p>
                <div className="row mb-3">
                  <div className="col-md-12">
                    <div className="row imff1">
                      <div className="col-md-2"><img data-aos="fade-up" src={imff} alt="" /></div>
                      <div className="col-md-10">
                        <h5 data-aos="fade-up">Natural Coffee Beans</h5>
                        <p data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row imff1">
                      <div className="col-md-2"><img data-aos="fade-up" src={imff1} alt="" /></div>
                      <div className="col-md-10">
                        <h5 data-aos="fade-up">100% ISO Certification</h5>
                        <p data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="me-4 but1 zaqyu mb-5" data-aos="fade-up"><span>OUR MENU </span> <FontAwesomeIcon icon={faChevronRight} /></Button>
              </div>
            </div>
            <div className="col-md-6 pio"><img src={img8} alt="" data-aos="fade-up" /></div>
          </div>
        </div>
      </div>
      <Alixm />

      {/* sacsin2 */}
      <div className="sacsin2">
        <div className="container back py-4">
          <div className="row ">
            <div className="col-md-3 vcxa">
              <div className="cdsxr">
                <div className="iconuimg mb-4"><img src={img1} alt="" /></div>
              </div>
              <div className="titelimgc">
                <h5>Birthday Cakes</h5>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
            <div className="col-md-3 vcxa">
              <div className="cdsxr">
                <div className="iconuimg mb-4"><img src={img2} alt="" /></div>
              </div>
              <div className="titelimgc">
                <h5>Fresh Foods</h5>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
            <div className="col-md-3 vcxa">
              <div className="cdsxr">
                <div className="iconuimg mb-4"><img src={img3} alt="" /></div>
              </div>
              <div className="titelimgc">
                <h5>Skills Chefs</h5>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>
            <div className="col-md-3 vcxa">
              <div className="cdsxr">
                <div className="iconuimg mb-4"><img src={img4} alt="" /></div>
              </div>
              <div className="titelimgc ">
                <h5>Organic Juice</h5>
                <p>Sed ut perspiciatis unde</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Crdas />
    <Logo/>
    <Conevs/>
    <Eryug/>
    <Footer/>
    </div>
  )
}

export default About