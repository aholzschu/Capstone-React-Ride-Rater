import React, {useEffect, useState} from 'react'
import { Reviewer } from '../../components/RC/RC';
import { RideForm } from '../../components/RideForm/RideForm';
import { Container } from 'semantic-ui-react';
import './Createareview.css'


function CreateaReview() {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("/review").then(response => 
      response.json().then(data => {
        setReview(data.Reviews);
      })
    );
    }, []);
    console.log(reviews);
    return(
      <div className="CreateaReview">
      <Container className='contain'>
      <h1 className='h1'> Create Your Own Review Below</h1>
        <RideForm />
      </Container>
      </div>

    )
  }
  export default CreateaReview;


