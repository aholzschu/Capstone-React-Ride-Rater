import React, {useState} from "react";
import { Button, Form, Input,Rating, TextArea} from "semantic-ui-react";
import "../../routes/Review/Review.css";


export const RideForm = () => {
    const[attraction_name,setAttractionName] = useState([""]);
    const[user_review,setUserReview] = useState([""]);
    const[name,setName] = useState([""]);
    const[owner_id,setOwner] = useState(2);
    const [rating, setRating] = useState(1);
    
    return(
        <Form>
            <Form.Field>
                <Input 
                className="attractionReview"
                placeholder = "Attraction Name" 
                value = {attraction_name} 
                onChange={e => setAttractionName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <TextArea
                className
                rows={10}
                placeholder = "Review" 
                value = {user_review} 
                onChange={e => setUserReview(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input 
                className="attractionReview"
                placeholder = "Name" 
                value = {name} 
                onChange={e => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input disabled 
                className="owner"
                placeholder = "Owner_Id" 
                value = {owner_id} 
                onChange={e => setOwner(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Rating
                icon = 'star'
                size="massive"
                value = {rating} 
                maxRating={5}
                onRate={(_,data) => {
                    setRating(data.rating);
                }}/>
            </Form.Field>
            <Form.Field>
              <Button color="blue"  size="big" onClick= {async () => {
                const review = {attraction_name, user_review, name, owner_id, rating};
                const response = await fetch('/review',{
                    method:'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                if (response.ok){
                    console.log('response worked')
                    setAttractionName("");
                    setUserReview("");
                    setName("");
                    setRating(0)

                }
              }
              } >
                SUBMIT
              </Button>
            </Form.Field>

        </Form>

    );
};