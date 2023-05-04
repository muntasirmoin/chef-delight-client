import React, { useState } from 'react';
import Header from '../../../Shared/Header';
import Footer from '../../../Shared/Footer';
import { Link, Outlet } from 'react-router-dom';
import { Button, Card, Col, Toast, ToastContainer } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const ChefDetail = ({recipes}) => {
    const {name, ingredients, MethodOfCooking, ratings, recipePicture} = recipes;
    const [showToast, setShowToast] = useState(false);
    const toggleToast = () =>{
        setShowToast(!showToast);
        setTimeout(() => {
            setShowToast(showToast);
          }, 3000);
    } 

const notify = () => setShowToast(toast("Wow so easy!"));
    
    return (
        
        <div>
             <Toast show={showToast}>
        
        <Toast.Body>Recipe is My favorite</Toast.Body>
      </Toast>
            
            <Col className='p-2'>
        <Card className=''>
      <Card.Img  variant="top" src={recipePicture} />
      <Card.Body>
        <Card.Title>Recipe Name: {name}</Card.Title>
        
        <Card.Text>
         Ingridients: {ingredients}
        </Card.Text>
        <Card.Text>
         Method Of Cooking: {MethodOfCooking}
        </Card.Text>
        <Card.Text>
          {/* <AiOutlineLike size={25}/> {ratings} Likes */}
          {/* <Rating name="read-only" value={ratings}  /> */}
          <Rating 
             placeholderRating={ratings}
             readonly
             emptySymbol={<FaRegStar></FaRegStar>}
             placeholderSymbol={<FaStar className='text-warning'></FaStar>}
             fullSymbol={<FaStar/>}

            ></Rating>
        </Card.Text>
        <div className='text-center'>
        {/* <Toast show={showToast} onClose={() => setShowToast(false)}> */}
        {
            !showToast ? <Button className='text-red' onClick={toggleToast} ><FontAwesomeIcon  icon={faHeart} size="3x" /></Button> : <Button className='text-red' onClick={toggleToast} disabled ><FontAwesomeIcon  icon={faHeart} size="3x" /></Button>
        }
{/* <Button className='text-red' onClick={toggleToast} ><FontAwesomeIcon  icon={faHeart} size="3x" /></Button> */}
<ToastContainer />
        </div>
        
        
      </Card.Body>
    </Card>
    </Col>

    {/* <Button onClick={toggleToast}>Show Toast</Button> */}
     
           
        </div>
    );
};

export default ChefDetail;