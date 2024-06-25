import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Portfolio = (props) => {
    return (
        <>
            <Container>
                <div className="title mt-5">
                    <h1 className="text-center">OUR WORK</h1>
                </div>
                <Row className="mt-5 ">


                    {
                        props.portfolio.map((item) => {
                            return (
                                <Col lg={4} md={4} className="p-0 w-0">
                                    <div className="Image">
                                        <img src={item.img} alt="" />
                                        <div className="Hover">
                                            <p>{item.title}</p>
                                            <h4 className="border border-warning  p-2 d-inline-block text-center ">{item.text}</h4>
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
export default Portfolio;