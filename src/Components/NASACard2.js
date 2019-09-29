import React from "react";
import styled from "styled-components";


const Card = styled.div`
  background: #99f3eb;
  color: black;
//   width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
`;
const NASAImg = styled.img`
  width: 400px;
  height: 250px;
  object-fit: scale;
  flex-shrink: 2;
`;
const PetCard = props => {
  return (
    <Card >
      <NASAImg alt="random Cosmos" src={props.img} />
      <div>
        <h2>{props.title}</h2> 
        <p>{props.desc}</p>
        <p>{props.credit}</p>
        <p>Phoot Date:{props.date}</p>

      </div>
     
    </Card>
  );
};
export default PetCard;
