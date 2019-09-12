import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, Col } from "reactstrap";


const NASACards = props => {
    return (
      <Col xs="6" sm="4">
        <Card>
           <CardImg
        top width="100%"
        src={props.img}
        alt="NASA img"
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
        <CardText>{props.desc}</CardText>
        <CardText>{props.credit}</CardText>
        <CardText>Photo Date: {props.date}</CardText>
        </CardBody>
        </Card>
       
        
      </Col>
    );
  };



export default NASACards