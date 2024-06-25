import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Slider from "react-slick";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

};

function Gallery() {
    return (
        <div>

            {/* /* bg image  */}
            <div className="Main_Box">
                <div className="image">
                    <img src={require('../Image/slider2.jpg')} alt="" />
                    <div className="text">
                        <p className='fs-1'>PROJECTS</p>
                        <p className='fs-2'> Services </p>
                    </div>
                </div>
            </div>

            <Container className='spacer'>
                <Row className='g-5'>
                    <Col lg={4} md={4}>
                        <div className="img-gallery overflow-hidden">
                            <div className="slider-container" id="slider-gallery">
                                <Slider {...settings}>
                                    <div>
                                        <img src={require('../Image/slider1.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../Image/slider2.jpg')} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/slider2.jpg')} alt="" />
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/slider2.jpg')} alt="" />
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/p1.jpg')} alt="" />
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/b1.jpg')} alt="" />
                        </div>
                    </Col>


                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/slider1.jpg')} alt="" />
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery">
                            <img src={require('../Image/slider2.jpg')} alt="" />
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery overflow-hidden">
                            <div className="slider-container" id="slider-gallery">
                                <Slider {...settings}>
                                    <div>
                                        <img src={require('../Image/slider1.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../Image/slider2.jpg')} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <div className="img-gallery overflow-hidden">
                            <div className="slider-container" id="slider-gallery">
                                <Slider {...settings}>
                                    <div>
                                        <img src={require('../Image/slider1.jpg')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../Image/slider2.jpg')} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Gallery
