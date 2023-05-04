import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {user,signInGoogle, signInGithub, createUser,signIn} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState("");

    const handleGoogleLogin = (event) =>{
        event.preventDefault();
        signInGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message);
            setErrorMessage(error);
        })

    }

    // github
    const handleGithubLogin = (event) =>{
        event.preventDefault();
        signInGithub()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message);
            setErrorMessage(error);
        })
    }

    // email password
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            // navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
            setErrorMessage('password not match or email not matched');
        })
    }
    return (
        <Container className='bg-light'>
             <p className='text-danger'>{errorMessage}</p>
            <Container className='w-25'>
                <Form onSubmit={handleLogin}>
                    
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            // value={formData.email}
                            // onChange={handleInputChange}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            // value={formData.password}
                            // onChange={handleInputChange}
                            placeholder="Password"
                        />
                    </Form.Group>

                    <Button  className='mt-3' variant="primary" type="submit">
                        Login
                    </Button>

                    <Row className="mt-3">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <Button onClick={handleGoogleLogin} variant="danger">
                                <FaGoogle className="me-2" />
                                Sign in with Google
                            </Button>
                        </Col>
                       
                    </Row>
                    <Row className="mt-3">
                       
                        <Col>
                            <Button onClick={handleGithubLogin} variant="dark">
                                <FaGithub className="me-2" />
                                Sign in with GitHub
                            </Button>
                        </Col>
                    </Row>
                   
                </Form>

            </Container>
        </Container>
    );
};

export default Login;