// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheese, faChevronRight, faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import img2 from '../../imessre/about_img.png'
import img3 from '../../imessre/quote_img.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import img4 from '../../imessre/service1.jpg';
import img5 from '../../imessre/service2.jpg';
import img6 from '../../imessre/service3.jpg';
import img8 from '../../imessre/choose_img-900x600.jpg';
import imff from '../../imessre/choose_icon1.png'
import imff1 from '../../imessre/choose_icon2.png'
import Eryug from '../Conrn/Eryug';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Conevs from '../Contswert/Conevs';
import Scrlo from '../Scro/Scrlo';
import Pert from '../pert/Pert';
import Skrol from '../skrol/Skrol';
import Footer from '../footer/Footer';
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  const [comeds, Setcomeds] = useState([]);
  useEffect(() => {
    axios.get("dets/fgthhg.json")
      .then((res) => {
        Setcomeds(res.data.sweper)
      })
  }, [])
  const cervlist = comeds.map((sweper) => {
    return (
      <SwiperSlide className="cresol1 col-md-12 " key={sweper.id}>
        <img src={sweper.img} alt="" />
        <div className="items ">
          <div className="container">
            <div className="spen d-flex mb-3">
              <div className="ppen"></div>
              <span data-aos="fade-up">{sweper.tetel1}</span>
            </div>
            <h4 data-aos="fade-up" className="tert1 my-3">{sweper.h4tetel}</h4>
            <div className="byten my-4">
              <Button data-aos="fade-up" className="me-4 but1"><span>explore more</span> <FontAwesomeIcon icon={faChevronRight} /></Button>
              <Button data-aos="fade-up" className='but2'><span>get delivery</span> <FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  })
  const [cert, Setcert] = useState([]);
  useEffect(() => {
    axios.get("dets/fgthhg.json")
      .then((res) => {
        Setcert(res.data.cartt)
      })
  }, [])
  const cardlest = cert.map((cartt) => {
    return (
      <div className="col-md-6 col-sm-6 opst mb-5" key={cartt.id}>
        <div className="row wtr">
          <div className="col-md-5 col-sm-5" >
            <img src={cartt.img} data-aos="fade-up" alt="" />
          </div>
          <div className="col-md-7 col-sm-7">
            <div className="imgri my-4">
              <h4 data-aos="fade-up">{cartt.titel}</h4>
              <p data-aos="fade-up">{cartt.spn}</p>
              <div className="prs">
                <div className="cxzaq" data-aos="fade-up"></div>
                <p data-aos="fade-up">${cartt.pres}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  })
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="row">
          {cervlist}
        </div>

      </Swiper>
      <div className="secten my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 syt">
              <span data-aos="fade-up">ABOUT US</span>
              <h4 data-aos="fade-up">Organic & Fresh Coffee
                Provider Center</h4>
              <p data-aos="fade-up">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione</p>
              <div className="cerds row mb-3" data-aos="fade-up">
                <div className="col-md-3" >
                  <img src={img3} alt="" />
                </div>
                <div className="col-md-8">
                  <p>Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 kt"><img data-aos="fade-up" src={img2} alt="" /></div>
          </div>
        </div>
      </div>




      <div className="setr1">
        <div className="container">
          <div className="row vc" data-aos="fade-up">
            <div className="col-md-4 cv">
              <img src={img4} alt="" />
              <div className="twct">
                <FontAwesomeIcon icon={faUtensils} />
                <h5>Restaurant Menu</h5>
              </div>
            </div>
            <div className="col-md-4 cv">
              <img src={img5} alt="" />
              <div className="twct">
                <FontAwesomeIcon icon={faCoffee} />
                <h5>Coffee Menu</h5>
              </div>
            </div>
            <div className="col-md-4 cv">
              <img src={img6} alt="" />
              <div className="twct">
                <FontAwesomeIcon icon={faCheese} />
                <h5>Food Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="czcz">
        <div className="container">
          <div className="cover">
            <div className="df">
              <p data-aos="fade-up">CHOOSE BEST COFFEE</p>
              <h3 data-aos="fade-up">Popular Coffee Menu</h3>
            </div>
            <div className="my">
              <div className="row">
                {cardlest}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="angery">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pio"><img src={img8} alt="" data-aos="fade-up" /></div>
            <div className="col-md-6">
              <div className="mer">
                <span data-aos="fade-up">WHY CHOOSE US</span>
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
                <Button className="me-4 but1 zaqyu" data-aos="fade-up"><span>explore more</span> <FontAwesomeIcon icon={faChevronRight} /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Eryug />
      <Conevs />
      <Scrlo />
      <Pert />
      <Skrol />
      <Footer />
    </>
  )
}

export default Home