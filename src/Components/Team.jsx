import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaInstagram, FaYoutube, FaCalendar } from "react-icons/fa";
import { MdMargin, MdOutlineCheckBox } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Team = (props) => {
    return (

        <Container className="spacer">
            <div className="Team_Title my-5">
                <h1 className="text-center Color-Blog">MEET OUR TEAM</h1>
            </div>
            <Row className="mt-5 Main-Teams">


                {

                    props.card.map((item) => {
                        return (
                            <Col lg={3} md={3}>
                                <div className="Box-Team">
                                    <div className="image-Team">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="Text">
                                        <h3 className="fs-5 mt-2 fw-bolder">{item.title}</h3>
                                        <h4 className="fs-6">Interior Designer</h4>
                                        <div className="Icon-Team">
                                            <i><FaFacebookF /></i>
                                            <i><FaInstagram /></i>
                                            <i><FaYoutube /></i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>

            <Row className="g-5">
                <div className="Title">
                    <h1 className='Color-Blog text-center mt-5'> OUR PRICING</h1>
                </div>

                {
                    props.new.map((lor)=>{
                        return(
                            <Col lg={4} md={6}>
                            <div className="Main-Team">
                                <h1>{lor.title}</h1>
                                <h2>{lor.price}</h2>
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
                        )
                    })
                }
                {/* <Col lg={4} md={6}>
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
                </Col> */}
            </Row>

            <Row className="Team-Row g-3">
                <div className="text-center">
                    <h2>GET STARTED WITH FULLY PACKED FEATURES OF <br /> THIS THEME WITH AMAZING DESIGN</h2>
                    <button className="border-0  px-3 py-2 mt-3" style={{ color: 'white', backgroundColor: '#ba9a48' }}>GET STARTED</button>
                </div>
                <div>
                    <h1 className="text-center mt-5">VISIT OUR BLOG</h1>
                </div>

                <Col lg={4} md={6}>
                    <Card >
                        <Card.Img variant="top" src={require('../Image/slider1.jpg')} />
                        <Card.Body>
                            <Card.Title className="fs-6"> <i className="icon-card"><FaCalendar /></i> January 1 2023</Card.Title>
                            <p className="mt-2">LOREM IPSUM DOLOR SIT AMET</p>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card >
                        <Card.Img variant="top" src={require('../Image/slider2.jpg')} />
                        <Card.Body>
                            <Card.Title className="fs-6"> <i className="icon-card"><FaCalendar /></i> January 1 2023</Card.Title>
                            <p className="mt-2">LOREM IPSUM DOLOR SIT AMET</p>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card >
                        <Card.Img variant="top" src={require('../Image/slider2.jpg')} />
                        <Card.Body>
                            <Card.Title className="fs-6"> <i className="icon-card"><FaCalendar /></i> January 1 2023</Card.Title>
                            <p className="mt-2">LOREM IPSUM DOLOR SIT AMET</p>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            <Button className="btn">Read More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>

    );
}
export default Team;