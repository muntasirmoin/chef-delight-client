import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../../Shared/Header';
import Footer from '../../../Shared/Footer';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineLike } from 'react-icons/ai';
import ChefDetail from './ChefDetail';


const ChefDetails = () => {
    const chefs = useLoaderData();
    
    const { id, chefPicture, chefName, yearOfExperience, numberOfRecipes, likes, desc ,recipe} = chefs;
    let i = 0;


    console.log(chefs);

    return (
        <div>
            <Header></Header>
            
            <Container>
            <h1 className='text-center'><span className='text-danger'>Chef:</span> <span className='text-success'>{chefName}</span> </h1>
                <Card className='w-50 mx-auto'>
                    <Card.Img variant="top" src={chefPicture} />
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title> <span className='fw-bold text-success'>{chefName}</span></Card.Title>


                            </Col>
                            
                            <Col>
                                <Card.Text>
                                <span className='text-danger'>Year of Experience: </span>
                                     <span className='fw-bold text-success'>{yearOfExperience}</span>
                                </Card.Text>
                                <Card.Text>
                                <span className='text-danger'>Number of Recipes:  </span>
                                   <span className='fw-bold text-success'> {numberOfRecipes}</span>
                                </Card.Text>
                                <Card.Text>
                                
                                    <AiOutlineLike size={25} /> {likes} <span className='text-danger'>Likes</span>
                                </Card.Text>
                                <Card.Text>
                                <span className='text-danger'>Description: </span><span className=' text-success'>{desc}</span>
                                     
                                </Card.Text>
                            </Col>
                        </Row>



                    </Card.Body>
                </Card>
            </Container>

            <Container className='bg-light mt-2 mb-2'>
            <h1 className='text-center'>Recipes</h1>
            <Row xs={1} sm={2} md={3} className="g-4">
            {
                recipe.map(n => <ChefDetail key={i++} recipes={n}></ChefDetail>)
            }
            </Row>
            </Container>

            
            <Footer></Footer>

        </div>
    );
};

export default ChefDetails;