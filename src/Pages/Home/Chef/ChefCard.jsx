import React from 'react';
import { Card, Button, Container, Col } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChefCard = ({chefs}) => {
    const {id,  chefPicture, chefName, yearOfExperience, numberOfRecipes, likes} = chefs;
    return (
       
        <Col className=''>
        <Card className=''>
      <Card.Img  variant="top" className='w-100' src={chefPicture} />
      <Card.Body>
        <Card.Title><span className='fw-bold text-success'>{chefName}</span></Card.Title>
        
        <Card.Text>
         Year of Experience: <span className='text-danger fw-bold'>{yearOfExperience}</span> 
        </Card.Text>
        <Card.Text>
         Number of Recipes: <span className='text-danger fw-bold'>{numberOfRecipes}</span> 
        </Card.Text>
        <Card.Text>
          <AiOutlineLike size={25}/><span className='text-danger fw-bold'>{likes}</span>   Likes
        </Card.Text>
        <Link to={`/chef/${id}`}><Button variant="primary">View Recipe</Button></Link>
        
      </Card.Body>
    </Card>
    </Col>
    
    );
};

export default ChefCard;