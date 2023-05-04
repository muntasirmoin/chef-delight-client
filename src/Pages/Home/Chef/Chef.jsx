import React, { useContext, useEffect, useState } from 'react';
import { Card, Button, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';
import { AuthContext } from '../../../Providers/AuthProvider';

const Chef = () => {
    // const [chef, setChef] = useState([]);
    const {user, createUser, loading } = useContext(AuthContext);
    // if(loading){
    //     return <Spinner animation="grow" />
    // }
    useEffect(() => {
        fetch('https://y-muntasirmoin.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, []);


    

    return (
        <div>
            <Container className='bg-light mt-3 mb-3 p-2'>
            <h1 className='text-center'><span className='text-success'>Chef</span> <span className='text-danger'>Section</span></h1>
            <Row xs={1} sm={2} md={3} className="g-4">
            {
                chef.map(che => <ChefCard key={che.id} chefs={che}></ChefCard>)
            }
            </Row>
            </Container>
          
        </div>
    );
};

export default Chef;