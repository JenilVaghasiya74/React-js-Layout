import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
const Counter = () => {
    return(
        <div className="Image_Counter mt-5 spacer">
            <Container>
        <Row className='text_Counters'>
           
            <Col lg={3} md={3}>
                <div className="text_Counter">
                    <p>Homes Decorated</p>
                    <h1 className='fs-1 fw-bold'>200</h1>
                </div>
            </Col>

            <Col lg={3} md={3}>
                <div className="text_Counter">
                    <p>Members</p>
                    <h1 className='fs-1 fw-bold'>400</h1>
                </div>
            </Col>

            <Col lg={3} md={3}>
                <div className="text_Counter">
                    <p>Awards</p>
                    <h1 className='fs-1 fw-bold'>25</h1>
                </div>
            </Col>

            <Col lg={3} md={3}>
                <div className="text_Counter">
                    <p>Designers</p>
                    <h1 className='fs-1 fw-bold'>30</h1>
                </div>
            </Col>
        </Row>
        </Container>
        </div>
    );
}
export default Counter;
