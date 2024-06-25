import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = () =>{
    return(

        <Container>
            <Row className='lg-mt-5 spacer'>
                <Col lg={6} md={6}>
                    <div className="image_Blog w-100">
                        <img src={require('../Image/b1.jpg')} alt=""  className='w-100 py-5 px-3'/>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                    <div className="text_Blog py-lg-5 mt-lg-5 px-3">
                        <h1 className="mt-md-5">
                        MAKE YOUR HOME
                        <br/>
                        <span>
                        LOOK AMAZING!
                        </span>
                        </h1 >
                        <p className='mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <button className='px-4 mt-3 py-2 border-0' style={{backgroundColor:"#ba9a48",color:"white",}}>GET STARTED </button>
                    </div>
                </Col>
            </Row>

       
        </Container>
    );

}
export default Blog;