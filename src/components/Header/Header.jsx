import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../assets/logo.jpg"
export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
    <div className="logo">
        <img src={logo}  alt="logo"/>
    </div>
    <button onClick={()=> navigate(props.login ? "/login": "/signup")}>
        {props.login ? "Log In": "Sign Up"}
    </button>
    </Container>
  )
}


const Container = styled.div `
background-color: rgb(122, 182, 199);
height: 5rem;

.logo{
    img{
        height: 5rem;
        
    }
}
button{
    float: right;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(41, 83, 95);
    border-radius: 10px;
    border: none;
    color: white;
    padding: .8rem 1rem;
    margin-top: -4rem;
    margin-right: 2rem;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    position: relative;
    
}
`;
