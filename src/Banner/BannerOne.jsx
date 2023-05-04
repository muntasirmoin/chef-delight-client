import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const BannerOne = () => {
    return (
        
            <Container className='bg-light'>
             <Container fluid className="p-0">
      <Row className="m-0">
        <Col md={6} className="p-0">
          <div className="banner-text d-flex align-items-center justify-content-center">
           
            <h1 className='text-center mt-5 fw-bold'> <span className='p-3'><br /> Welcome </span><br /> To  Our <br /> <span className='text-success'>Chef</span> <span className='text-danger'>Delight</span> <br /> Website</h1>
            
            
          </div>
        </Col>
        <Col md={6} className="p-0">
          <Image className='m-2' src="https://i.ibb.co/pv76Ks1/istockphoto-1391517636-2048x2048.jpg"  alt="Banner Image" fluid />
        </Col>
      </Row>
    </Container>
    </Container>
    );
};

export default BannerOne;