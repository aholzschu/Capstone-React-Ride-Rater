import React from 'react';
import { List, Header, Rating, Grid,} from "semantic-ui-react"



const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


export const Reviewer = ({reviews}) =>{
   return (
      <Grid columns={3}  >
         {reviews.map(review =>{
            return (
               <Grid columns={0} >
               <Grid.Row >
               <Grid.Column>
               <List.Item className='title' key ={review.attraction_name}>
               <Header className='ride'>{review.attraction_name}</Header>
               <Header className='practice'>{review.user_review}</Header>
               <Header>{review.name}</Header>
               <Rating icon='star' size ='large' rating={review.rating} maxRating={5} disabled/>
               </List.Item>
               </Grid.Column>
               </Grid.Row>
               </Grid>
              
            )
         })}
      </Grid>
   )
};

