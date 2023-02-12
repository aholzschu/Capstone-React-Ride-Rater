import './Home.css';
import React, { Component } from "react";



export default class Home extends Component{
  constructor(){
    console.log('constructor')
    super()
  }

  render(){
    return (
      <div className="Home">
      
     
      <h1>WELCOME TO RIDE RATINGS</h1>
      
   
      </div>
    );
  }
}  



