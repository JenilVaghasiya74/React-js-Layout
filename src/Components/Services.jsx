import React from 'react'
import {  MdOutlineCheckBox } from "react-icons/md";
import About from './About';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Counter from './Counter';

function Services(props) {
  return (
    <div>
      
    {/* bg image  */}
    <div className="Main_Box">
        <div className="image">
            <img src={require('../Image/slider2.jpg')} alt="" />
            <div className="text">
                <p className='fs-1'>SERVICES</p>
                <p className='fs-2'> Services </p>
            </div>
        </div>
      </div>
       <About path={props.svg}/>
       <Counter/>

       <Container className='spacer'>
      <Row className="g-5">
                <div className="Title">
                    <h1 className='Color-Blog text-center mt-5'> OUR PRICING</h1>
                </div>
                <Col lg={4} md={6}>
                    <div className="Main-Team">
                        <h1>BASIC</h1>
                        <h2>$49</h2>
                        <ul>
                            <li><span><MdOutlineCheckBox /></span> Wallpapers</li>
                            <li><span><MdOutlineCheckBox /></span> Unique Designs</li>
                            <li><span><MdOutlineCheckBox /></span> Lighting Setup</li>
                            <li><span><MdOutlineCheckBox /></span> Maintenance</li>
                            <li><span><MdOutlineCheckBox /></span>Elegant Furniture</li>
                        </ul>
                        <button>BUY NOW</button>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="Main-Team">
                        <h1>BASIC</h1>
                        <h2>$49</h2>
                        <ul>
                            <li><span><MdOutlineCheckBox /></span> Wallpapers</li>
                            <li><span><MdOutlineCheckBox /></span> Unique Designs</li>
                            <li><span><MdOutlineCheckBox /></span> Lighting Setup</li>
                            <li><span><MdOutlineCheckBox /></span> Maintenance</li>
                            <li><span><MdOutlineCheckBox /></span>Elegant Furniture</li>
                        </ul>
                        <button>BUY NOW</button>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="Main-Team">
                        <h1>BASIC</h1>
                        <h2>$49</h2>
                        <ul>
                            <li><span><MdOutlineCheckBox /></span> Wallpapers</li>
                            <li><span><MdOutlineCheckBox /></span> Unique Designs</li>
                            <li><span><MdOutlineCheckBox /></span> Lighting Setup</li>
                            <li><span><MdOutlineCheckBox /></span> Maintenance</li>
                            <li><span><MdOutlineCheckBox /></span>Elegant Furniture</li>
                        </ul>
                        <button >BUY NOW</button>
                    </div>
                </Col>
            </Row>
            </Container>


    </div>
  )
}

export default Services;
