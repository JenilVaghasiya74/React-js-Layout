import React from 'react'
import Bg_image from './Bg_image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";

const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function About_page() {
  return (
    <div>
      <Bg_image/>
      <Container>
        <Row className='lg-mt-5 pt-5'>
          <Col lg={6} md={6}>
            <div className="image_Blog w-100">
              <img src={require('../Image/b1.jpg')} alt="" className='w-100 py-5 px-3' />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="text_Blog py-lg-5 mt-lg-5 px-3">
              <h1 className="mt-md-5  display-5" style={{ color: '#ba9a48' }}>
                DECORATE YOUR HOME
                <br />
                <span>
                  HE WAY YOU WANT!
                </span>
              </h1 >
              <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <button className='px-4 mt-3 py-2 border-0' style={{ backgroundColor: "#ba9a48", color: "white", }}>LEARN MORE</button>
            </div>
          </Col>
        </Row>


      </Container>

      <div className="bg-img spacer">
        <div className="Row-about">
          <Container >
            <Row className='my-5'>

              <h2 className='text-center pt-5 text-white pb-4'>WHY CHOOSE US</h2>
              <Col lg={4} md={4}>
                <div className="icon-about text-center">
                  <svg class="svg-inline--fa fa-border-all fa-w-14 fa-5x cgg" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="border-all" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"></path></svg>

                  <h2 className='text-white fs-5 fw-bold pt-2'>UNIQUE DESIGN</h2>
                  <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </Col>

              <Col lg={4} md={4}>
                <div className="icon-about text-center">
                  <svg class="svg-inline--fa fa-couch fa-w-20 fa-5x cgg" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="couch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path></svg>

                  <h2 className='text-white fs-5 fw-bold pt-2'>ELEGANT FURNITURE</h2>
                  <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </Col>

              <Col lg={4} md={4}>
                <div className="icon-about text-center">
                  <svg class="svg-inline--fa fa-th fa-w-16 fa-5x cgg" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="th" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"></path></svg>

                  <h2 className='text-white fs-5 fw-bold pt-2'>AMAZING WALLPAPERS</h2>
                  <p className='text-white fw-bolder'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </div>

      {/* slider  */}
      <Container className='spacer'>
        <div className="slider-container my-5">
          <h2 className='text-center mt-5'>OUR TESTIMONIALS</h2>
          <Slider {...settings} className='mt-5'>
            <div>
              <div className="card-image">
                <i><FaQuoteLeft /></i>
                <div className="img">
                  <img src={require('../Image/t1.jpg')} alt="" />
                </div>
                <div className="text-Slider text-center">
                  ⭐⭐⭐⭐⭐
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card-image">
                <i><FaQuoteLeft /></i>
                <div className="img">
                  <img src={require('../Image/t4.jpg')} alt="" />
                </div>
                <div className="text-Slider text-center">
                  ⭐⭐⭐⭐⭐
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card-image">
                <i><FaQuoteLeft /></i>
                <div className="img">
                  <img src={require('../Image/t2.jpg')} alt="" />
                </div>
                <div className="text-Slider text-center">
                  ⭐⭐⭐⭐⭐
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="card-image">
                <i><FaQuoteLeft /></i>
                <div className="img">
                  <img src={require('../Image/t3.jpg')} alt="" />
                </div>
                <div className="text-Slider text-center">
                  ⭐⭐⭐⭐⭐
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>

      <Container className='spacer'>
        <h1 className='text-center my-5  '>OUR TESTIMONIALS</h1>
        <Row>
          <Col lg={3} md={6}>
            <div className="box-card">
              <div className="Card-img">
                <img src={require('../Image/t1.jpg')} alt="" />
              </div>
              <div className="Card-text text-center">
                <h4 className='mt-3'>MEMBER 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" d-flex  justify-content-evenly">
                  <i><FaFacebookF /></i>
                  <i><FaInstagram /></i>
                  <i><FaYoutube /></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="box-card">
              <div className="Card-img">
                <img src={require('../Image/t2.jpg')} alt="" />
              </div>
              <div className="Card-text text-center">
                <h4 className='mt-3'>MEMBER 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" d-flex  justify-content-evenly">
                  <i><FaFacebookF /></i>
                  <i><FaInstagram /></i>
                  <i><FaYoutube /></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="box-card">
              <div className="Card-img">
                <img src={require('../Image/t3.jpg')} alt="" />
              </div>
              <div className="Card-text text-center">
                <h4 className='mt-3'>MEMBER 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" d-flex  justify-content-evenly">
                  <i><FaFacebookF /></i>
                  <i><FaInstagram /></i>
                  <i><FaYoutube /></i>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="box-card">
              <div className="Card-img">
                <img src={require('../Image/t4.jpg')} alt="" />
              </div>
              <div className="Card-text text-center">
                <h4 className='mt-3'>MEMBER 4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=" d-flex  justify-content-evenly">
                  <i><FaFacebookF /></i>
                  <i><FaInstagram /></i>
                  <i><FaYoutube /></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12} className='spacer text-center'> 
            <h2 className=' fs-2 text-center'>GET STARTED WITH FULLY PACKED FEATURES OF THIS <br /> THEME WITH AMAZING DESIGN</h2>
            <a className='px-4 mt-4 py-2 border-0 text-decoration-none  d-inline-block' style={{ backgroundColor: "#ba9a48", color: "white", }}>GET STARTED </a>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default About_page;
