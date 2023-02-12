import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from '../../utils/firebase/firebase';
import styled from 'styled-components';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/home");
  });

  return (
    <Container>  
      <div className="main">
            <div className="header">
            <br/>
              <h3>RIDE RATINGS</h3>
              <h3>Log In</h3>
            </div>
            <br/>
            <br/>
            <div className="container flex column">
              <input
                className="sign"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br/>
              <br/>
              <input
                className="sign"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <br/>
              <br/>
              <button className="button" onClick={handleLogin}>Login </button>
            </div>
            <br/>
        
          </div>
    </Container>
    
  );
}

const Container = styled.div`
  position: relative;


  .content {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .text{
      margin-left:550px;
    }
    .login{
      margin-left: 625px;
    }
    
    .form-container {
      gap: 2rem;
      height: 100%;
      width: 100%;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 100vw;
        height: 100vw;
        gap: 2rem;
        .container {
          gap: 10rem;
          input {
            padding: .5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;