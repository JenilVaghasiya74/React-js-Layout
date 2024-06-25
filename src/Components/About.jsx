import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = (props) => {
    return (
        <>
            <Container className='container spacer'>
                <Row>
                    <Col>
                        <div className="text-area">
                            <h2 className='text-center  mt-5'>SETUP INFORMATION</h2>
                            <p className='m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    {
                        props.path.map((item) => {
                            return (
                                <Col lg={6} md={6}>
                                    <div className="Main-About mt-5">
                                        <div className="Box">
                                            <svg>{item.icon}</svg>
                                        </div>
                                        <div className="text-About">
                                            <h2>{item.title}</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}
export default About;