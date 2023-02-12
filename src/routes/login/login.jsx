import LoginForm from "../../components/LoginFom/loginForm";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import styled from 'styled-components';
import Header from "../../components/Header/Header";
import '../Signup/Signup.css'

export default function Login() {
  return (
    <Container>
    <Header/>
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block  profile-pic'
        itemId={1}
        src='https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
        backgroundSize='cover'
        alt='...'
      >
        <div className='signup'> <LoginForm/></div>
        <h5 className="footer">Wildwood Swing Ride</h5>
        <p className="footer">Morey's Piers, Wildwood New Jersey</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block center profile-pic'
        itemId={2}
        src='https://images.unsplash.com/photo-1597466599360-3b9775841aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        alt='...'
      >
        <div className='signup'><LoginForm/></div>
        <h5 className="footer">Cinderella's Castle </h5>
        <p className="footer">Walt Disney World Magic Kingdom Orlando, Florida</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block profile-pic'
        itemId={3}
        src='https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        alt='...'
      >
        <div className='signup'> <LoginForm/></div>
        <h5 className="footer">Sci-Fi City </h5>
        <p className="footer">Universal Studios Singapore</p>
      </MDBCarouselItem>
    </MDBCarousel>
      <div className="content">
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
           
            <div className="container flex column">
              
            </div>
          </div>
        </div>
      </div>
    </Container>
    
  );
}

const Container = styled.div``;