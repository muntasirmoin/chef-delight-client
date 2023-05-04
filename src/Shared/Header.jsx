import React, { useContext } from 'react';
import { Navbar, Nav, Button, Container, Image, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch( error => console.log(error));
}


    return (
        
        <Container>
        <Navbar bg="light" expand="lg">
      <Navbar.Brand className='p-2' href="#"><span className='text-success'>Chef</span> <span className='text-danger'>Delight</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        </Nav>
        <Nav>
        
          <Nav.Item>
           
              {
                user ? <Nav.Item>  <Image
                src={user?.photoURL}
                height="40"
                className="d-inline-block align-top"
                alt="profile"  roundedCircle 
              />  <Button onClick={handleLogOut}  variant="outline-primary" className="ms-2">
                LogOut
              </Button> </Nav.Item> :  <Link to='/login' className='p-2'> <Button  variant="outline-primary" className="ms-2">
              Login
            </Button> </Link>
              }
              

             
            
         
            
           
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <hr />
    </Container>
    );
};

export default Header;