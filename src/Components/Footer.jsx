import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin,FaPhone } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>

            <div className="main-Footer mt-5">
                <Container>
                    <Row className='p-5 g-5 mt-5 border-bottom'>
                        <Col lg={3} md={6} className='  border-light'>
                            <div className="Footer text-white">
                                <h2>INTERIO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="Icon-fo">
                                    <i><FaFacebookF /></i>
                                    <i><FaInstagram /></i>
                                    <i><FaYoutube /></i>
                                    <i><FaLinkedin /></i>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className="Footer text-white">
                                <h2 className='text-white border-bottom border-secondary'>USEFUL LINKS</h2>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Karts</a></li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={3} md={6}>
                            <div className="Footer text-white ">
                                <h2 className='text-white border-bottom border-secondary'>USEFUL SERVICES</h2>
                                <ul>
                                    <li><a href="#">Designs</a></li>
                                    <li><a href="#">Wallpapers</a></li>
                                    <li><a href="#">Furniture</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Tiles</a></li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col lg={3} md={6}>
                            <div className="Footer Footer text-white ">
                                <h2 className=' border-bottom border-secondary'>ADDRESS</h2>
                                <ul>
                                    <li> <i><IoMail /></i>  email@domain.com   </li>
                                    <li> <i><FaPhone /></i>  111-111-111  </li>
                                    <li> <i><TbWorld /></i> knowledgeaware.tk   </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <h4 className='text-center p-4 text-white'>© Copyrights. All Rights Reserved</h4>
                    </Row>
                </Container>
            </div>

        </>
    );
}
export default Footer;