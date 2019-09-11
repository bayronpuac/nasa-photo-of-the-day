import React, {useEffect, useState} from "react";

const NASACards = props => {
    return (
      <div className="card-list " key={props.date}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <img src={props.img} style={{height: "800px", width: "800px"}}></img>
        <p>{props.credit}</p>
        <h2>Photo Date: {props.date}</h2>
      </div>
    );
  };



export default NASACards