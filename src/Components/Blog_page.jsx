import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaCalendar } from "react-icons/fa";

function Blog_page() {
  return (
    <div>
          {/* /* bg image  */}
          <div className="Main_Box">
                <div className="image">
                    <img src={require('../Image/slider2.jpg')} alt="" />
                    <div className="text">
                        <p className='fs-1'>BLOGS</p>
                        <p className='fs-3'> Blogs Blog Grid Grid With Sidebar</p>
                    </div>
                </div>
            </div>

        <Container className='spacer'>
            <Row>
                <Col lg={8} md={8}>
                    <div className="blog_main gap-3 d-md-flex">
                        <div className="image">
                            <img src={require('../Image/slider1.jpg')} alt="" />
                        </div>
                        <div className="text-blog">
                                <p>LOREM IPSUM DOLOR SIT AMET</p>
                                <i><FaCalendar /></i> <span>Feburary 1 2023</span>

                                <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </Col>

                <Col lg={4} md={4}>

                </Col>

            </Row>
        </Container>

    </div>
  )
}

export default Blog_page
