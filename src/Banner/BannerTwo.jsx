import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const BannerTwo = () => {
    return (
        <Container className='bg-light'>
            <Container>
            <h1 className='text-center  mt-3 mb-3'><span className='text-success'>Special</span> Recipe</h1>
            <Row className='p-4'>
      <Col xs={4}>
        <img className='w-100' src='https://i.ibb.co/k2M0LYb/r1.jpg' alt="Image 1" />
      </Col>
      <Col xs={4}>
        <img className='w-100' src='https://i.ibb.co/0qtwnVJ/r2.jpg' alt="Image 2" />
      </Col>
      <Col xs={4}>
        <img className='w-100' src='https://i.ibb.co/bRxdR5T/r3.jpg' alt="Image 3" />
      </Col>
    </Row>
        </Container>
        </Container>
    );
};

export default BannerTwo;