import React from "react";

const NASACards = props => {
    return (
      <div className="card-list " key={props.date}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <img src={props.img} style={{height: "50%", width: "50%", padding: "0 100px"}} alt="cosmos" className="App-logo" ></img>
        <p>{props.credit}</p>
        <h2>Photo Date: {props.date}</h2>
      </div>
    );
  };



export default NASACards