import React from "react";
import styled from "styled-components";
import { Col, CardImg } from 'reactstrap';

const CardWar = styled.div`
    background-color: lightgrey;
    color: black;
    width: 350px;
    max-height: 800px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    border: 2px solid black;
`;

const WarCard = props => {

  return (
      <Col xs="6" sm="4" key = {props.id}>
        
        <CardWar>
            {/* <CardImg top width="10%" src="phil-shaw-zAZYuch7deE-unsplash.jpg" alt="Card image cap" />  */}
            <h2>My name is {props.name}</h2>
            
            <h5>I am {props.gender}, I was born in {props.birthday}, I have {props.eyes} eyes</h5>
             
        </CardWar>
        
      </Col>
    );
  };
  
export default WarCard;