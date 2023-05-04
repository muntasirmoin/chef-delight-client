import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
const gradient = {
    background: 'linear-gradient(to bottom, #FFA07A, #FF6347)'
  };

const BannerThree = () => {
    return (
       <Container className='mt-3 bg-light'>
        <Marquee>
        <h4 className='text-center fw-bold'>Discover our <span className='text-success'>Spanish</span> Chefs delicious menu and experience a unique dining experience ! </h4>
        </Marquee>
        
         <Container style={gradient}>
       
      
      <Marquee className='mt-2 text-white' speed={40}>
        
        <Row className='p-4'>
      <Col xs={3}>
        <img className='w-75' src="https://i.ibb.co/PCKpG8c/dan-gold-4-jh-DO54-BYg-unsplash.jpg" alt="Image 1" />
      </Col>
      <Col xs={3}>
        <img className='w-75' src='https://i.ibb.co/yYjNWM9/r5.jpg' alt="Image 2" />
      </Col>
      <Col xs={3}>
     
        <img className='w-75' src='https://i.ibb.co/Snb9nDJ/luisa-brimble-l-GORj-Z6cv-VM-unsplash-1.jpg' alt="Image 3" />
      </Col>
      <Col xs={3}>
      
        <img className='w-75' src='https://i.ibb.co/9gnsmD2/hermes-rivera-Oz-BLe-Eg1mg-unsplash.jpg' alt="Image 4" />
      </Col>
    </Row>
      </Marquee>
      
    </Container>
       </Container>
    );
};

export default BannerThree;