import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { getAuth, updateProfile } from "firebase/auth";
// import 'bootstrap/dist/css/bootstrap.min.css';
// const auth = getAuth();
const Register = () => {
  const {user, createUser, loading } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
 
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl);

    if (password.length > 6) {
      setErrorMessage("Password  is less then 6 characters");
      return;
    }
    else{
      createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log('user Created',createdUser);
        // 1111
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photoUrl
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
  
        // 111
        
    })
    .catch(error => {
        console.log('error', error.message);
    })
  
    }
    
  
  }
  return (
    <Container className='bg-light'>
      <Container className='w-25'>

        <Form onSubmit={handleRegister}>
          <h1>Register Here</h1>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              //   value={formData.name}
              //   onChange={handleInputChange}
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              //   value={formData.email}
              //   onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
 
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <p className='text-danger'> {errorMessage}</p>

          <Form.Group controlId="formPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photoUrl"
              //   value={formData.photoUrl}
              //   onChange={handleInputChange}
              placeholder="Enter photo URL"
              required
            />
          </Form.Group>

          <Button className='mt-2' variant="primary" type="submit">
            register
          </Button>
          <Row className="mt-3">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </Row>
        </Form>

      </Container>
    </Container>
  );
};

export default Register;