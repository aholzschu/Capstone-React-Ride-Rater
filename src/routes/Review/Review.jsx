import React, {useEffect, useState} from 'react'
import { Reviewer } from '../../components/RC/RC';

import { Container } from 'semantic-ui-react';




function Review() {
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
      <div className="Review">
      
      <Container className='Container'>
        <Reviewer reviews={reviews}/>
      </Container>
      </div>
    )
  }
  export default Review;
  
  
 
  




  
  
  
  //         setRestaurant(data.restaurant);
  //     }))
  //   })
    
  //   console.log(restaurant)
  //   return (
  //     <div className= "Review">
  //     <Restaurant restaurant={restaurant}/>
  //     </div>
  //   )
  // }
  
  

