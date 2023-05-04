import React from 'react';
import { Col, Container, Nav, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container>
            <hr />

            <Container className='bg-light'>
                <div className="footer">
                    <Container>
                        <Row className='mt-3'>
                            {/* col -1 */}
                            <Col className='text-center'>

                                <Row className='mt-2'>
                                       <br />
                                       
                                </Row>
                                <Row className='p-4'>
                                    <h4>Chef Delight</h4>
                                </Row>

                                <Row className='mt-2'>

                                </Row>
                            </Col>

                            {/* col-2 */}

                            <Col className='text-center'>
                                <Nav>




                                    <Row className=''>
                                        <h4>USEFUL LINKS</h4>
                                        <Row>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                            </Nav.Item>

                                        </Row>
                                        <Row>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                            </Nav.Item>
                                        </Row>
                                        <Row>
                                            <Nav.Item>
                                                <Nav.Link as={Link} to="/">About</Nav.Link>
                                            </Nav.Item>
                                        </Row>
                                    </Row>



                                </Nav>
                            </Col>

                            {/* col-3 */}

                            <Col className='text-center'>

                                <h4>Contact</h4>
                                {/* aaa */}

                                <Row className='text-center'>
                                    <Row className='mt-2'>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="phone-tooltip">017-689-689-38</Tooltip>}
                                        >
                                            <Nav.Link href="tel:+123456789">
                                                <FaPhone />
                                            </Nav.Link>
                                        </OverlayTrigger>
                                    </Row>

                                    <Row className='mt-3'>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="email-tooltip">chefdelight@gmail.com</Tooltip>}
                                        >
                                            <Nav.Link href="mailto:example@gmail.com">
                                                <FaEnvelope />
                                            </Nav.Link>
                                        </OverlayTrigger>
                                    </Row>

                                    <Row className='mt-3'>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id="address-tooltip">Sylhet, Bangladesh</Tooltip>}
                                        >
                                            <Nav.Link href="https://maps.google.com">
                                                <FaMapMarkerAlt />
                                            </Nav.Link>
                                        </OverlayTrigger>
                                    </Row>
                                </Row>





                                {/* aaaaa */}
                            </Col>

                            {/* col-4 */}
                            <Col className='text-center'>
                                <Nav>




                                    <Row className=''>
                                        <h4>Social Media</h4>
                                        <Row>
                                            <Nav.Link href="https://www.facebook.com">
                                                <FaFacebookF />
                                            </Nav.Link>

                                        </Row>
                                        <Row>
                                            <Nav.Link href="https://www.instagram.com">
                                                <FaInstagram />
                                            </Nav.Link>
                                        </Row>
                                        <Row>
                                            <Nav.Link href="https://www.twitter.com">
                                                <FaTwitter />
                                            </Nav.Link>
                                        </Row>
                                    </Row>



                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                    <p>&copy; 2023 Chef Delight. All rights reserved.</p>
                </div>
            </Container>
        </Container>
    );
};

export default Footer;